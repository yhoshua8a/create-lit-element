const getTemplateDemo = (name) => {
   
  
    return `
    <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes">

    <title>${name} demo</title>

    <script src="../node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>

    <script type="module">
      import '@polymer/iron-demo-helpers/demo-pages-shared-styles';
      import '@polymer/iron-demo-helpers/demo-snippet';
    </script>

    <script type="module" src="../${name}.js"></script>

    <custom-style>
      <style is="custom-style" include="demo-pages-shared-styles">
      </style>
    </custom-style>
  </head>
  <body>
    <div class="vertical-section-container centered">
      <h3>Simple ${name} demo</h3>
      <demo-snippet>
        <template>
  
      <${name}</${name}>

      <script>
    </script>
        </template>
      </demo-snippet>
    </div>
    </div>
  </body>
</html>

   `;
  };


  module.exports = getTemplateDemo;