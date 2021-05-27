let script = document.createElement('script');
script.appendChild(document.createTextNode(`(function() {setInterval(() => $.get(appRoot + 'sessionextend'), 30000);})();`));
(document.body || document.head).appendChild(script);