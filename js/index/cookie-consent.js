window.etGlobalSettings = {
  gdprCookieName: "et_cookies",
  nonEUCountryCookieName: "et_cookies_hidden",
};
(function ($) {
  function et_set_cookie(name, value) {
    Cookies.set(name, value, { expires: 5500 });
  }
  function et_non_eu_cookie_set() {
    var nonEUCookie = Cookies.get(
        window.etGlobalSettings["nonEUCountryCookieName"]
      ),
      acceptedValues = ["yes", "no"];
    return acceptedValues.indexOf(nonEUCookie) !== -1;
  }
  function et_can_use_cookies() {
    var allowCookies = Cookies.get(window.etGlobalSettings["gdprCookieName"]);
    if (allowCookies === "on") {
      allowCookies = "on";
    }
    return allowCookies === "on";
  }
  function et_display_cookies_popup(force) {
    var allowCookies = Cookies.get(window.etGlobalSettings["gdprCookieName"]);
    if ($(".et_cookie_consent").length) {
      return;
    }
    if (typeof allowCookies === "undefined" || force === true) {
      $("body").append(
        '<div class="et_cookie_consent card accent-pink"><h4>This Website Uses Cookies</h4><p>This site uses cookies to provide basic functionality. We also use 3rd-party cookies to improve your browsing experience and for targeted advertising and analytics. View our <a href="https://www.elegantthemes.com/policy/privacy/">Privacy Policy</a>.</p><div class="et_cookie_consent_option et_hide clearfix"><input type="checkbox" id="et_cookie_3rd_party_scripts" checked="checked" /><div class="et_cookie_consent_option_description"><strong>Tracking and Retargeting Cookies</strong><p>Choose whether you would like your activity to be used for advertising and analytics.</p></div></div><div class="et_cookie_consent_buttons"><a href="#" id="et_cookie_consent_manage" class="et_cookie_consent_button button">Manage</a><a href="#" id="et_cookie_consent_allow" class="et_cookie_consent_button button">Ok</a></div></div>'
      );
    }
    if (force === true) {
      var cookiesAllowed = allowCookies !== "off";
      $("#et_cookie_3rd_party_scripts").prop("checked", cookiesAllowed);
    }
  }
  function et_process_country_data(data) {
    var cookieValue;
    cookieValue = data === "not-eu-country" ? "yes" : "no";
    et_set_cookie(
      window.etGlobalSettings["nonEUCountryCookieName"],
      cookieValue
    );
    if (cookieValue === "yes") {
      et_load_third_party_scripts();
      return;
    }
    if (et_can_use_cookies()) {
      et_load_third_party_scripts();
    } else {
      et_display_cookies_popup();
    }
  }
  function et_set_eu_cookie() {
    $.ajax({
      url: "/api/ip_check.php",
      dataType: "json",
      error: function (jqXHR, textStatus, errorThrown) {
        $.ajax({
          url: "/api/ip_check.php",
          data: { provider: "ipinfo" },
          dataType: "json",
          error: function (jqXHR, textStatus, errorThrown) {
            et_process_country_data("eu_country");
          },
          success: function (data, textStatus, jqXHR) {
            et_process_country_data(data.code);
          },
        });
      },
      success: function (data, textStatus, jqXHR) {
        et_process_country_data(data.code);
      },
    });
  }
  function et_is_non_eu_country() {
    return (
      Cookies.get(window.etGlobalSettings["nonEUCountryCookieName"]) === "yes"
    );
  }
  function et_load_third_party_scripts() {
    const loadScriptsTimer = setTimeout(loadScripts, 3000);
    const userInteractionEvents = [
      "mouseover",
      "keydown",
      "touchmove",
      "touchstart",
      "scroll",
    ];
    userInteractionEvents.forEach(function (event) {
      window.addEventListener(event, triggerScriptLoader, { passive: true });
    });
    function triggerScriptLoader() {
      loadScripts();
      clearTimeout(loadScriptsTimer);
      userInteractionEvents.forEach(function (event) {
        window.removeEventListener(event, triggerScriptLoader, {
          passive: true,
        });
      });
    }
    function loadScripts() {
      document
        .querySelectorAll("script[data-type='lazy-optional']")
        .forEach(function (elem) {
          elem.setAttribute("src", elem.getAttribute("data-src"));
        });
    }
    document
      .querySelectorAll("script[data-type='optional']")
      .forEach(function (elem) {
        elem.setAttribute("src", elem.getAttribute("data-src"));
      });
  }
  (function ($) {
    $(document).ready(function () {
      $(".et_show_cookie_consent_popup").click(function () {
        et_display_cookies_popup(true);
        return false;
      });
      $("body").on("click", "#et_cookie_consent_manage", function () {
        $(".et_cookie_consent_option").show();
        $(this).hide();
        return false;
      });
      $("body").on("click", "#et_cookie_consent_allow", function () {
        var cookieName = window.etGlobalSettings["gdprCookieName"],
          allow_third_party_scripts = $(this)
            .closest(".et_cookie_consent")
            .find("#et_cookie_3rd_party_scripts:checked").length;
        if (allow_third_party_scripts) {
          et_set_cookie(cookieName, "on");
        } else {
          et_set_cookie(cookieName, "off");
        }
        $(".et_cookie_consent").remove();
        return false;
      });
      if (et_non_eu_cookie_set() && et_is_non_eu_country()) {
        et_load_third_party_scripts();
        return;
      } else {
        if (!et_non_eu_cookie_set()) {
          et_set_eu_cookie();
          return;
        }
        if (et_can_use_cookies()) {
          et_load_third_party_scripts();
        } else {
          et_display_cookies_popup(false);
        }
      }
    });
  })(jQuery);
})(jQuery);
