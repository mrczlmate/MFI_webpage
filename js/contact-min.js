"use strict";document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".contact-form");e.addEventListener("submit",function(t){t.preventDefault();let n=new FormData(e),a=n.get("name"),l=n.get("email"),r=n.get("message");if(!a||!l||!r){alert("K\xe9rlek, t\xf6lts ki minden mezőt!");return}let i=encodeURIComponent("\xdczenet a varroda weboldal\xe1r\xf3l"),o=encodeURIComponent(`N\xe9v: ${a}
Email: ${l}

\xdczenet:
${r}`);window.location.href=`mailto:merczel259@gmail.com?subject=${i}&body=${o}`})});