let modal = document.getElementById("tdsModal");
/* let modalImg = document.getElementById("tdsLogo");
let content = document.getElementById("module-content"); */
let show = document.getElementById("tdsModalActivate");
if (show != null) {
  show.addEventListener("click", showModal);
}
function showModal() {
  modal.style.display = "block";
}
let closeModal = document.getElementsByClassName("closeModal")[0];
if (closeModal != null) {
  closeModal.onclick = function() {
    modal.style.display = "none";
  };
}

let zohoModal = document.getElementById("zohoModal");
let showZoho = document.getElementById("zohoModalActivate");
if (showZoho != null) {
  showZoho.addEventListener("click", showZohoModal);
}
function showZohoModal() {
  zohoModal.style.display = "block";
}

let closeZoho = document.getElementsByClassName("closeModal")[1];
if (closeZoho != null) {
  closeZoho.onclick = function() {
    zohoModal.style.display = "none";
  };
}

let gmailModal = document.getElementById("gmailModal");
let showGmail = document.getElementById("gmailModalActivate");
if (showGmail != null) {
  showGmail.addEventListener("click", showGmailModal);
}
function showGmailModal() {
  gmailModal.style.display = "block";
}

let closeGmail = document.getElementsByClassName("closeModal")[2];
if (closeGmail != null) {
  closeGmail.onclick = function() {
    gmailModal.style.display = "none";
  };
}

let cookiesModal = document.getElementById("cookiesModal");
let showCookies = document.getElementById("cookiesModalActivate");
if (showCookies != null) {
  showCookies.addEventListener("click", showCookiesModal);
}
function showCookiesModal() {
  cookiesModal.style.display = "block";
}

let closeCookies = document.getElementsByClassName("closeModal")[3];
if (closeCookies != null) {
  closeCookies.onclick = function() {
    cookiesModal.style.display = "none";
  };
}
