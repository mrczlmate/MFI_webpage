"use strict"
// contact.js – Üzenetküldés e-mail kliens megnyitásával (mailto)

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const formData = new FormData(form);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");
  
      if (!name || !email || !message) {
        alert("Kérlek, tölts ki minden mezőt!");
        return;
      }
  
      const subject = encodeURIComponent("Üzenet a varroda weboldaláról");
      const body = encodeURIComponent(`Név: ${name}\nEmail: ${email}\n\nÜzenet:\n${message}`);
  
      window.location.href = `mailto:merczel259@gmail.com?subject=${subject}&body=${body}`;
    });
  });
  