/**
 * DriverUpdateChecker — Pages helper (UI only).
 * Keyword: driver update checker
 */
(function (global) {
  'use strict';

  var Product = {
    name: 'DriverUpdateChecker',
    keyword: 'driver update checker',
    channel: 'github-pages'
  };

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  function bindDownload(btn, url) {
    if (!btn || !url) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = url;
    });
  }

  global.DriverUpdateCheckerUI = { Product: Product, ready: ready, bindDownload: bindDownload };
})(typeof window !== 'undefined' ? window : globalThis);
