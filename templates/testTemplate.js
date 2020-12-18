const getTemplateTest = (name) => {
   
    return `

    <!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes">

    <script src="../node_modules/wct-browser-legacy/browser.js"></script>
  </head>
  <body>
    <script>
      // Load and run all tests (.html, .js):
      WCT.loadSuites([
        '${name}-test.html'
      ]);
    </script>
  </body>
</html>

   `;
  };


  module.exports = getTemplateTest;