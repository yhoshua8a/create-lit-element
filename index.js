#!/usr/bin/env node

const fs = require("fs");
const getTemplateJS = require('./templates/jsTemplate.js')
const getTemplateCSS = require('./templates/cssTemplate.js');
const getTemplateHTML = require('./templates/htmlTemplate.js');
const getTemplateDemo = require('./templates/demoTemplate.js');
const getTemplateTest = require('./templates/testTemplate.js');
const getTemplateTestComponent = require('./templates/testComponentTemplate.js');
const installDependencies = require('./execDependencies.js')


const writeFiles = (name) => {

//DEMO FILE
fs.mkdirSync(`${process.cwd()}/demo`);
fs.writeFile(`${process.cwd()}/demo/index.html`, getTemplateDemo(name), () => {
  console.log("Se creo la carpeta:");
  console.log(`demo`);
});

///TEST FILES
fs.mkdirSync(`${process.cwd()}/test`);
fs.writeFile(`${process.cwd()}/test/index.html`, getTemplateTest(name), () => {
  console.log("Se creo la carpeta:");
  console.log(`test`);
});

fs.writeFile(`${process.cwd()}/test/${name}-test.html`, getTemplateTestComponent(name), () => {
});


//COMPONENTS FILE
  fs.writeFile(`${process.cwd()}/${name}.js`, getTemplateJS(name), () => {
    console.log("Se creo el archivo:");
    console.log(`${name}.js`);
  });

  fs.writeFile(`${process.cwd()}/${name}-styles.js`, getTemplateCSS(name), () => {
    console.log("Se creo el archivo:");
    console.log(`${name}-styles.js`);
  });

  fs.writeFile(`${process.cwd()}/${name}-html.js`, getTemplateHTML(name), () => {
    console.log("Se creo el archivo:");
    console.log(`${name}-html.js`);
  });

};

const init = () => {
  console.log("Nombre del componente");
  const stdin = process.openStdin();

  stdin.addListener("data", async (nameComponent) => {
    const name = nameComponent.toString().trim();

    writeFiles(name);
    installDependencies();
  });
};

init();
