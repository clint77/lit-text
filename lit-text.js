import { LitElement, html } from "@polymer/lit-element";

/**
 * 
 * @extends HTMLElement
 */
class LitText extends LitElement {
  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor() {
    super();
  }

  /**
  * Object describing property-related metadata used by Polymer features
  */
  static get properties() {
    return {
      loop: Number
    };
  }

  render() {
    return html`
      <style>
      
      :host {
        display: block;
        padding: 10px;
        height: 50px;
        line-height: 50px;
        overflow: hidden;
      }

      div.container p {
        backface-visibility: hidden;
        animation-name: scroll-left;
        animation-duration: 20s;
        animation-timing-function: linear;
        animation-delay: 0;
        animation-iteration-count: ${this.loop > 0 ? this.loop : 'infinite'};
        /* transform: translateX(100%); */
      }

      @keyframes scroll-left {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }

      </style>

      <div class="container">
        <p><slot></slot></p>
      </div>
    `;
  }
}

window.customElements.define('lit-text', LitText);
