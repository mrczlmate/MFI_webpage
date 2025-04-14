"use strict"
// cookies.js – Cookie-k elfogadása és Google Analytics betöltése
  document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("reject-cookies");

    const consent = localStorage.getItem("cookiesConsent");

    if (!consent) {
      banner.style.display = "flex";
    } else if (consent === "accepted") {
      loadAnalytics();
    }

    acceptBtn.addEventListener("click", function () {
      localStorage.setItem("cookiesConsent", "accepted");
      banner.style.display = "none";
      loadAnalytics();
    });

    rejectBtn.addEventListener("click", function () {
      localStorage.setItem("cookiesConsent", "rejected");
      banner.style.display = "none";
    });

    function loadAnalytics() {
      const gaScript = document.createElement("script");
      gaScript.setAttribute("async", "");
      gaScript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-27CGSCNFHV");
      document.head.appendChild(gaScript);

      gaScript.onload = function () {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-27CGSCNFHV');
      };
    }
  });