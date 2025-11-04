class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1e293b;
          color: white;
          padding: 3rem 1rem;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .footer-links {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.5rem;
        }
        .footer-section h3 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #93c5fd;
        }
        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-section li {
          margin-bottom: 0.5rem;
        }
        .footer-section a {
          color: #e5e7eb;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-section a:hover {
          color: #93c5fd;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          color: white;
          background: #334155;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .social-links a:hover {
          background: #2563eb;
        }
        .copyright {
          text-align: center;
          padding-top: 2rem;
          margin-top: 2rem;
          border-top: 1px solid #334155;
          color: #9ca3af;
          font-size: 0.875rem;
        }
        @media (min-width: 768px) {
          .footer-container {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          .footer-links {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      </style>
      <footer>
        <div class="footer-container">
          <div class="footer-section">
            <div class="footer-logo">
              <i data-feather="droplet"></i>
              PT. Suitato Bersama
            </div>
            <p>Solusi Selang Andal untuk Industri dan Rumah Tangga Anda.</p>
            <div class="social-links">
              <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
              <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
              <a href="https://wa.me/6281234567890" aria-label="WhatsApp"><i data-feather="message-circle"></i></a>
            </div>
          </div>
        </div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} PT. Suitato Bersama. All rights reserved.
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);