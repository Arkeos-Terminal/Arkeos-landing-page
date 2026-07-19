// Vercel Speed Insights initialization
// This manually injects the Speed Insights tracking script
// Based on @vercel/speed-insights package logic

(function() {
  'use strict';
  
  // Initialize the queue
  window.si = window.si || function() {
    (window.siq = window.siq || []).push(arguments);
  };
  
  // Inject the Speed Insights script
  var script = document.createElement('script');
  script.src = 'https://va.vercel-scripts.com/v1/speed-insights/script.js';
  script.defer = true;
  
  // Append to head
  var firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(script, firstScript);
})();
