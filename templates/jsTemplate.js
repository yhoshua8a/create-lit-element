const getTemplateJS = (componentName) => {
    const name = componentName.replace("-", "");
  
    return `    
  import { LitElement } from 'lit-element';
  import componentHTML from './${componentName}-html';
  import stylesComponent from './${componentName}-styles';
  
  
  class ${name} extends LitElement {
  
      constructor() {
          super();
          this.__initProperties();
      }
  
      static get properties() {
          return {
              example: { type: String },
          }
      }
  
      __initProperties() {
          this.example = 'example';
      }
  
  
      static get styles() {
          return stylesComponent();
      }
  
      render() {
          return componentHTML(this.example);
      }
  }
  
  customElements.define('${componentName}', ${name});
  
      `;
  };


  module.exports = getTemplateJS;