import { LitElement, html, css } from 'lit';
import "./badge-card.js"
import "./search-bar.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class BadgeList extends LitElement {
  static get properties() {
    return {
      badgeCounter: { 
        attribute: "badge-counter",
        type: String },
      badges: { type: Array },
      loadingMarker: { type: String},
      isLoading: { type: Boolean}
    }
  }

  static styles = css`
    :host {
      font-family: var(--badge-app-font-family);
    }
    .counter {
      display: var(--badge-app-display);
      justify-content: var(--badge-app-justify-content);
      margin-right: 864px;
      margin-bottom: 12px;
      font-size: var(--badge-app-primary-font-size);
      font-weight: 100;
    }

    .wrapper {
      padding-bottom: 24px;
    }

    .loading-wrapper {
      display: var(--badge-app-display);
      justify-content: var(--badge-app-justify-content);
    }

    .loading-icon {
      width: 160px;
      animation: loading-spin infinite 5s linear;
      padding-top: 50px;
      padding-bottom: 50px;
    }

    @keyframes loading-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    badge-card::part(step-font) {
      font-size: var(--badge-app-primary-font-size);
      padding-bottom: 8px;
    }

    @media only screen and (max-width: 800px) {
      .counter {
        margin-right: 464px;
      }
    }

    @media only screen and (max-width: 500px) {
      .counter {
        margin-right: 200px;
        font-size: var(--badge-app-primary-font-size);
      }
      badge-card::part(step-font) {
        font-size: var(--badge-app-primary-font-size);
      }
    }
  `;

  constructor() {
    super();
    this.badgeCounter = "Badges (0)";
    this.badges = [];
    this.loadingMarker = "https://cdn.discordapp.com/attachments/434857360155213827/1094505354391461948/745856610882289665.png";
    this.isLoading = false;
  }

  //Updates whenever change in properties is detected
  updated(){
    this.badgeCounter = "Badges (" + this.badges.length + ")";
  }

  render() {
    //Renders loading section for badges when isLoading is active
    if(this.isLoading){
      return html`
        <div class="loading-wrapper">
          <img src="${this.loadingMarker}" class="loading-icon">
        </div>
      `;
    }
    
    return html`
    <!-- Section Tracks Number of Badges Visible -->
    <div class="counter">
      ${this.badgeCounter}
    </div>

    <!-- Main Badge List -->
    <div class="wrapper">

            <!-- Badge Section (Renders Data From API) -->
            ${this.badges.map(badge => html`
              <div class="item">
                <badge-card 
                    title="${badge.title}" 
                    icon="${badge.icon}" 
                    description="${badge.description}"
                    document="${badge.document}"
                    document-link="${badge.documentLink}"
                    author-icon="${badge.authorIcon}"
                    author="${badge.author}"
                    time="${badge.time}">   
                </badge-card>
              </div>
            `)}
        </div>
    `;
  }
}

customElements.define('badge-list', BadgeList);