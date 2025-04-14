// cookie-consent.js
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const rejectBtn = document.getElementById("reject-cookies");

  const consent = localStorage.getItem("cookiesConsent");

  // Set default denied state BEFORE loading any scripts
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }

  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'functionality_storage': 'denied',
    'security_storage': 'granted'
  });

  if (!consent) {
    banner.style.display = "flex";
  } else if (consent === "accepted") {
    allowConsent();
  }

  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesConsent", "accepted");
    banner.style.display = "none";
    allowConsent();
  });

  rejectBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesConsent", "rejected");
    banner.style.display = "none";
  });

  function allowConsent() {
    gtag('consent', 'update', {
      'ad_storage': 'granted',
      'analytics_storage': 'granted',
      'functionality_storage': 'granted'
    });

    const gtmScript = document.createElement("script");
    gtmScript.async = true;
    gtmScript.src = "https://www.googletagmanager.com/gtag/js?id=G-27CGSCNFHV";
    document.head.appendChild(gtmScript);

    gtmScript.onload = function () {
      gtag('js', new Date());
      gtag('config', 'G-27CGSCNFHV');
    };
  }
});
