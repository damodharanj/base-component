function createCustomComponent (name, template) {

    class Component extends HTMLElement {
        constructor() {
          super();
        }

        static get observedAttributes() {return ['name']; }
      
        get name() {
          return this.getAttribute('name');
        }
      
        set name(val) {
            setTimeout(() => {
                this.innerHTML = template();
            }, 3000)
        }
      
        connectedCallback() {
          this.innerHTML = template();
        }
      
        disconnectedCallback() {
          this.removeChild(this.div);
        }
      
        attributeChangedCallback(attrName, oldVal, newVal) {
        const inp = this.querySelector('input')
        inp.value = newVal;
        }
      }
      
      customElements.define(name, Component);
}

export default createCustomComponent;
window.createCustomComponent = createCustomComponent