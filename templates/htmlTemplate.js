const getTemplateHTML = () => {
  
    return `
import { html} from 'lit-element';

const componentHTML = (...properties) => {
        const [example] = properties;

    return html \`<h1 class="title">\${example}\</h1>\`;     
}

export default componentHTML;
   `;
  };


  module.exports = getTemplateHTML;