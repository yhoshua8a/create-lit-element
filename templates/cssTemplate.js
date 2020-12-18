const getTemplateCSS = () => {
   

    const ruleBase = `
    .title{
        color:blue;
    }
    `
  
    return `
    import { css } from 'lit-element';


    const stylesComponent = () => {
    
        return css\`${ruleBase}\`
    
    }
    export default stylesComponent;
   `;
  };


  module.exports = getTemplateCSS;