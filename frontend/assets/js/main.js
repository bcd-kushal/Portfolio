(function () {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  const scrollto = (el) => {
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos,
      behavior: "smooth",
    });
  };

  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  on("click", ".mobile-nav-toggle", function (e) {
    select("body").classList.toggle("mobile-nav-active");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let body = select("body");
        if (body.classList.contains("mobile-nav-active")) {
          body.classList.remove("mobile-nav-active");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  const typed = select(".typed");
  if (typed) {
    let typed_strings = typed.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  let skilsContent = select(".skills-content");
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: "80%",
      handler: function (direction) {
        let progress = select(".progress .progress-bar", true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute("aria-valuenow") + "%";
        });
      },
    });
  }

  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });

  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });

  new PureCounter();


  // random theme color on reload ========================================
  function randomThemeColor(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  const themeColors = ["#a165e2", "#a8916f", "#90a0ce", "#e2a165", "#65b4e2", "#7a6edb", "#616ecf"];
  //                    purple      gold       steel      orange     blue       lavendar   ultramrine 
  const COLOR = randomThemeColor(themeColors);
  document.documentElement.style.setProperty("--accent", COLOR);
  document.documentElement.style.setProperty("--accent20", COLOR + "20");
  document.documentElement.style.setProperty("--accent30", COLOR + "30");
  document.documentElement.style.setProperty("--accent70", COLOR + "70");
  document.documentElement.style.setProperty("--accent85", COLOR + "85");
  document.documentElement.style.setProperty("--accent95", COLOR + "95");


  // arrow up in hero page ================================================
  const arrowUp = document.getElementById("scrollup");
  const dock = document.getElementsByClassName("mobile-link")[0];

  const checkDockIcons = () => {
    if(scrollY <= 50){
      arrowUp.animate({
        "color": "#ffffff50",
      }, { duration: 230, fill: "forwards" });
      /* dock.animate({
        transform: `translateY(0)`,
        display: "flex"
      }, { duration: 1330, fill: "forwards" });
      dock.style.setProperty('display','flex'); */
    }
    else{
      arrowUp.animate({
        "color": "transparent",
      }, { duration: 330, fill: "forwards" });
      /* dock.animate({
        transform: `translateY(${parseInt(document.body.clientHeight00)}px)`,
      }, { duration: 13330, fill: "forwards" });
      setTimeout(()=> {
        dock.style.setProperty('display','none');
      }, 1000 ); */
    }
  };

  window.addEventListener("scroll", checkDockIcons);

  // handle back to top button on absolute bottom ==========================
  const backToTopBtn = document.getElementsByClassName("back-to-top")[0];
  function isScrolledToBottom() {
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const totalHeight = document.body.scrollHeight;

    return scrollTop + windowHeight >= totalHeight;
  }

  window.addEventListener("scroll",() => {
    if(isScrolledToBottom()){
      backToTopBtn.animate({
        transform: "translateY(-35px)",
      }, { duration: 250, fill: "forwards" })
    }
    else{
      backToTopBtn.animate({
        transform: "translateY(0)",
      }, { duration: 250, fill: "forwards" })
    }
  });


  
    // name banner besides hamburger in smaller devices ======================>
    const nameplate = document.getElementsByClassName("name-shower")[0];
    const hideNamePlate = () => {
        if(window.innerWidth > 1199){
            nameplate.style.display = "none";
        }
        else{
            nameplate.style.display = "flex";
        }
    }
    hideNamePlate();
    window.addEventListener("resize", hideNamePlate);
    let prevScroll = 0;
    window.addEventListener("scroll",() => {
      let verticalHeight = document.pageYOffset || document.documentElement.scrollTop;
      if(verticalHeight > prevScroll){
        // scroll down
        nameplate.animate({
          transform: "translateX(200px)"
        }, { duration:700, fill:"forwards" });
      }
      else{
        // scroll up
        nameplate.animate({
          transform: "translateX(0)"
        }, { duration:700, fill:"forwards" });
      }
      prevScroll = (verticalHeight <= 0)? 0 : verticalHeight;
    })

    let SIDEBAR_OPEN = false;
    backToTopBtn.addEventListener("click", () => {
      SIDEBAR_OPEN = false;
    })
    const burgerBtn = document.getElementsByClassName("bi-list")[0];
    burgerBtn.addEventListener("click",() => {
      if(SIDEBAR_OPEN){
        SIDEBAR_OPEN = !SIDEBAR_OPEN;
        nameplate.animate({
          transform: "translateX(0)"
        }, { duration:300, fill:"forwards" });
      }
      else{
        SIDEBAR_OPEN = !SIDEBAR_OPEN;
        nameplate.animate({
          transform: "translateX(200px)"
        }, { duration:300, fill:"forwards" });
      }
    });
})();

