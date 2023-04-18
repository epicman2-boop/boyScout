import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class StepCard extends LitElement {
  static properties = {
    unitIcon: { attribute: "unit-icon", type: String },
    information: { type: String},
    duration: { type: String}
  }

  static styles = css`
    :host {
      display: block;
      font-family: var(--badge-app-font-family);
      background-color: var(--badge-app-tertiary-color);
    }

    .wrapper {
      display: var(--badge-app-display);
      justify-content: space-between;
      border-top: 1px solid #e1e1e1;
      padding: 8px 0px;
      max-height: 30px;
      font-size: var(--badge-app-secondary-font-size);
    }
    .left-elements{
      padding-left: 8px;
    }

    .description-spacing {
      display: inline;
      padding-left: 32px;
    }
    .time-spacing {
      padding-right: 120px;
      padding-top: 4.5px;
    }

    @media only screen and (max-width: 500px) {
      .wrapper {
        font-size: var(--badge-app-secondary-font-size);
      }
      .description-spacing {
        padding-left: 8px;
      }
      .time-spacing {
        padding-right: 32px;
        padding-top: 5px;
      }
    }
  `;

  constructor() {
    super();
    this.unitIcon = 'av:play-circle-filled';
    this.information = "Create a User Pool in Amazon"
    this.duration = "4.0 hours"
  }

  render() {
    return html`
      <!-- Main Step Section -->
      <div class="wrapper">

        <!-- Elements To The Left of "Space-Between" -->
        <div class="left-elements">
          <simple-icon icon="${this.unitIcon}" style="--simple-icon-color:#d4d1cc;--simple-icon-width:30px;--simple-icon-height:30px;"></simple-icon> 
          <div class="description-spacing">${this.information}</div>
        </div> 

        <!-- Element To The Right -->
        <div class="time-spacing">${this.duration}</div>
      </div>
    `;
  }
}

customElements.define('step-card', StepCard);