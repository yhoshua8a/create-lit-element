 
const { exec } = require('child_process');
 
 const installDependencies = async () => {

    await exec('npm i --save lit-element', (error, stdout, stderr) => {
        if (error) {
          console.error(`error: ${error.message}`);
          return;
        }
      
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
      
        console.log(`stdout:\n${stdout}`);
      });

     await exec('npm i --save lit-element', (error, stdout, stderr) => {
        if (error) {
          console.error(`error: ${error.message}`);
          return;
        }
      
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
      
        console.log(`stdout:\n${stdout}`);
      });

     await exec('npm i --save-dev @polymer/iron-demo-helpers', (error, stdout, stderr) => {
        if (error) {
          console.error(`error: ${error.message}`);
          return;
        }
      
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
      
        console.log(`stdout:\n${stdout}`);
      });

     await exec('npm i --save-dev @webcomponents/webcomponentsjs', (error, stdout, stderr) => {
        if (error) {
          console.error(`error: ${error.message}`);
          return;
        }
      
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
      
        console.log(`stdout:\n${stdout}`);
      });

      await exec('npm i --save-dev wct-browser-legacy', (error, stdout, stderr) => {
        if (error) {
          console.error(`error: ${error.message}`);
          return;
        }
      
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
      
        console.log(`stdout:\n${stdout}`);
      });

 };


 module.exports = installDependencies;