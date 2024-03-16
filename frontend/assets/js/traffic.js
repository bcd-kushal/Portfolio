window.onload = async () => {
	const getTrafficAnalytics = async () => {
		const userTraffic = await fetch("https://api.ipify.org?format=json");
	  	const ip = await userTraffic.json();
		return ip.ip;
  	};

	const getBatteryData = async () => {
		const data = await navigator.getBattery();
		return {
			charging: data.charging,
			percentage: data.level*100,
			willFullyChargeAfter: typeof(data.chargingTime)==='number' ? data.chargingTime : null,
			willDischargeAfter: typeof(data.dischargingTime)==='number' ? data.dischargingTime : null,
		}	
	};

	const getArchitecture = () => {
		const userAgent = navigator.userAgent;
		let deviceModel = null;
		let architecture = null;

		if (/iPhone/.test(userAgent)) { deviceModel = "iPhone" } else if (/iPad/.test(userAgent)) { deviceModel = "iPad" } else if (/Android/.test(userAgent)) { deviceModel = "Android Device" }
		if(/x32/.test(userAgent)) { architecture = "32-bit" } else if (/x64/.test(userAgent)) { architecture = "64-bit" } else if (/x128/.test(userAgent)) { architecture = "128-bit" } else if (/x256/.test(userAgent)) { architecture = "256-bit" } else if (/x512/.test(userAgent)) { architecture = "512-bit" } else if (/x1024/.test(userAgent)) { architecture = "1024-bit" }
		
		return {
			deviceModel: deviceModel,
			architecture: architecture
		}
	}

	const getSpace = () => {

		let coord = { x:null, y:null, z:null }
		if(window.DeviceOrientationEvent) {
			window.addEventListener('deviceorientation',(e) => {
				coord.x = 34
				coord.y = e.gamma
				coord.z = 24
			},true)
		}

		let rates = { acceleration:null, accNoGravity:null, rotationRate:null }
		if(window.DeviceMotionEvent) {
			window.addEventListener('devicemotion',(e) => {
				[ rates.accNoGravity, rates.acceleration, rates.rotationRate ] = [ e.acceleration, e.accelerationIncludingGravity, e.rotationRate ]
			})
		}

		return {
			space: coord.x ? coord : null,
			rates: rates.acceleration ? rates : null
		} 
	}
	
	const x = getArchitecture()
	const y = getSpace()

	const trafficData = {

		location: {
			ip: await getTrafficAnalytics(),
		},

		network: {
			maxBandwidth: navigator.connection.downlink + "mbps",
			networkType: navigator.connection.effectiveType.toUpperCase(),
			latency: navigator.connection.rtt + "ms",
		},
		
		device: {
			platform: navigator.platform || navigator.userAgentData.platform,
			height: window.screen.height,
			width: window.screen.width,
			pixelRatio: window.devicePixelRatio,
			isMobile: navigator.userAgentData.mobile,
			cpu_cores: navigator.hardwareConcurrency,
			browser: navigator.userAgentData.brands.map(brand => brand.brand),
			battery: await getBatteryData(),
			architecture: x.architecture,
			model: x.deviceModel
		},

		spatial: {
			coords: y.space,
			acceleration: {
				withGravity: y.rates ? y.rates.acceleration : null,
				withoutGravity: y.rates ? y.rates.accNoGravity : null
			},
			rotationRate: y.rates ? y.rates.rotationRate : null
		},

		origin: {
			href: window.location.href,
			host: window.location.hostname,
			protocol: window.location.protocol,
			origin: window.location.origin
		}

	};

	fetch("https://kushal-server.up.railway.app/user-traffic/portfolio/", {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify( trafficData )
    });

}