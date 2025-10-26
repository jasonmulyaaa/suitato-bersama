class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: sticky;
          top: 0;
          z-index: 50;
        }
        nav {
          background: white;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .logo {
          color: #2563eb;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .logo-icon {
          color: #1e40af;
        }
        ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: #4b5563;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
        }
        a:hover {
          color: #2563eb;
          background-color: #eff6ff;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #4b5563;
          cursor: pointer;
        }
        .cta-btn {
          background-color: #2563eb;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-weight: 500;
        }
        .cta-btn:hover {
          background-color: #1e40af;
          color: white;
        }
        @media (max-width: 768px) {
          ul {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">
          <i data-feather="droplet" class="logo-icon"></i>
          PT. Suitato Bersama
        </a>
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#produk">Produk</a></li>
          <li><a href="#testimoni">Testimoni</a></li>
          <li><a href="https://wa.me/6281234567890" class="cta-btn">Contact Us</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);