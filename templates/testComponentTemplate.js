const getTemplateTestComponent = (name) => {
   
    return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes">
    
        <title>${name} test</title>
    
        <script src="../node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
        <script src="../node_modules/wct-browser-legacy/browser.js"></script>
    
        <script type="module" src="../${name}.js"></script>
      </head>
      <body>
    
        <test-fixture id="default">
          <template>
            <${name}></${name}>
          </template>
        </test-fixture>
    
    
        <script type="module">
    
          suite('${name} test', () => {
    
            var component;
    
            setup(function setupSuite(){
              component = fixture('default');
            });
    
            test('${name} object initialized', () => {
              expect(component.shadowRoot).to.be.ok;
            });
    
            test('${name} should be in the dom', () => {
              expect(component).not.to.be.undefined;
            });
          });
    
           
        </script>
    
      </body>
    </html>

   `;
  };


  module.exports = getTemplateTestComponent;