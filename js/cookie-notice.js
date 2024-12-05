const cookieNotice = document.querySelector(".cookie");
const closeBtn = cookieNotice.querySelector(".cookie__close");

closeBtn.addEventListener("click", hideCookieNotice);

function hideCookieNotice() {
  cookieNotice.classList.remove("cookie_active");
}

function showCookieNotice() {
  cookieNotice.classList.add("cookie_active");
}

showCookieNotice();
