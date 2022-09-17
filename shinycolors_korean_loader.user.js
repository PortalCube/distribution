// ==UserScript==
// @name         Shinycolors Korean Patch Loader
// @namespace    https://github.com/newbiepr/shinycolors-trans-kr
// @version      1.0.0
// @description  샤이니 컬러즈 한국어 패치 아이폰 로더
// @icon         https://shinycolors.enza.fun/icon_192x192.png
// @author       Source : biuuu
// @match        https://shinycolors.enza.fun/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @connect      api.interpreter.caiyunai.com
// @connect      translate.google.cn
// @connect      fanyi.baidu.com
// ==/UserScript==
(function () {
  let scriptContent = '';
  let version = '';
  const script = document.createElement('script');
  try {
    scriptContent = localStorage.getItem('sczh-script');
    version = localStorage.getItem('sczh-version');
  } catch (e) {}
  if (!scriptContent) {
    script.setAttribute('src', 'https://newbiepr.github.io/Temporary_KRTL/ShinyColors.user.js');
    script.setAttribute('defer', true);
  } else {
    script.textContent = scriptContent;
  }
  document.documentElement.appendChild(script);
  fetch('https://newbiepr.github.io/Temporary_KRTL/manifest.json')
    .then(res => res.json())
    .then(async function (data) {
      if (data.version !== version) {
        const text = await (await fetch('https://newbiepr.github.io/Temporary_KRTL/ShinyColors.user.js')).text();
        localStorage.setItem('sczh-script', text);
        localStorage.setItem('sczh-version', data.version);
      }
    })
})();
