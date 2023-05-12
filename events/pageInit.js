// ------------------------------------------------
const i18n = new URL(window.location).searchParams.get("language");
const ua = /android|iphone/i.test(window.navigator.userAgent);
const source = /login|register|signup/.test(window.location.pathname);
const pathname = window.location.pathname;
// ------------------------------------------------
if (i18n) {
  window.document.cookie = `locale=${i18n.toLocaleLowerCase()}; domain=.trubit.com;path=/`;
  const i18nArray = i18n.split("-");
  const storage = `${i18nArray[0]}-${i18nArray[1].toLocaleUpperCase()}`;
  window.localStorage.setItem("ice_locale", storage);
}
// ------------------------------------------------
if (ua && (pathname === "/new/" || source)) {
  const temp = location.href
    .replace(/register/, "signup")
    .replace(/next\./, "");
  const newSite = temp.split("/new/");
  const mobileLink = `${newSite[0]}/pro/m/${newSite[1]}`;
  window.location.href = mobileLink;
}
