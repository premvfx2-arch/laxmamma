import React from "react";
import "./App.css";

const sarees = [
  {
    name: "Royal Kanjivaram",
    price: "₹8,999",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Banarasi Silk",
    price: "₹6,499",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Elegant Organza",
    price: "₹4,999",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Festive Chanderi",
    price: "₹5,799",
    image:
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
  },
];

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <span>SA</span>
          <div>
            <strong>SĀRĀ</strong>
            <small>THE SAREE HOUSE</small>
          </div>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#collections">Collections</a>
          <a href="#featured">Sarees</a>
          <a href="#about">Our Story</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <button>⌕</button>
          <button>♡</button>
          <button>🛍</button>
        </div>

        <button className="menu">☰</button>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">TIMELESS INDIAN CRAFT</p>

          <h1>
            Draped in
            <br />
            <i>Elegance.</i>
          </h1>

          <p className="hero-text">
            Discover exquisite sarees crafted with tradition,
            artistry and a modern sense of luxury.
          </p>

          <div className="hero-buttons">
            <a href="#featured" className="primary-btn">
              Explore Collection
            </a>

            <a href="#about" className="secondary-btn">
              Our Story →
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-card">
            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=90"
              alt="Elegant saree"
            />
          </div>

          <div className="floating-card">
            <span>✦</span>
            <p>Handcrafted<br />with love</p>
          </div>
        </div>

        <div className="hero-number">01 / 04</div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="statement">
        <p>CELEBRATING THE ART OF THE SAREE</p>

        <h2>
          Tradition that feels
          <br />
          <i>beautifully yours.</i>
        </h2>

        <p className="statement-text">
          From timeless silk weaves to contemporary drapes,
          every SĀRĀ saree carries a story of craftsmanship,
          heritage and individuality.
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="categories" id="collections">
        <div className="section-heading">
          <div>
            <p>SHOP BY STYLE</p>
            <h2>Find your <i>signature</i> drape.</h2>
          </div>

          <a href="#featured">View All →</a>
        </div>

        <div className="category-grid">

          <div className="category-card large">
            <img
              src="https://images.unsplash.com/photo-1583391733981-8498404a3c16?auto=format&fit=crop&w=1000&q=80"
              alt="Silk sarees"
            />

            <div className="category-overlay">
              <span>01</span>
              <h3>Silk Sarees</h3>
              <p>Rich • Regal • Timeless</p>
            </div>
          </div>

          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
              alt="Organza sarees"
            />

            <div className="category-overlay">
              <span>02</span>
              <h3>Organza</h3>
              <p>Light • Dreamy • Modern</p>
            </div>
          </div>

          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
              alt="Festive sarees"
            />

            <div className="category-overlay">
              <span>03</span>
              <h3>Festive Edit</h3>
              <p>Celebrate • Shine • Glow</p>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURED SAREES */}
      <section className="featured" id="featured">
        <div className="section-heading">
          <div>
            <p>THE EDIT</p>
            <h2>Our <i>favourites.</i></h2>
          </div>

          <a href="#contact">Shop All Sarees →</a>
        </div>

        <div className="product-grid">
          {sarees.map((saree, index) => (
            <div className="product-card" key={index}>

              <div className="product-image">
                <img src={saree.image} alt={saree.name} />

                <button className="wishlist">♡</button>

                {index === 0 && (
                  <span className="badge">BESTSELLER</span>
                )}
              </div>

              <div className="product-info">
                <div>
                  <h3>{saree.name}</h3>
                  <p>Handwoven Collection</p>
                </div>

                <strong>{saree.price}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROMO */}
      <section className="promo">
        <div className="promo-image">
          <img
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=90"
            alt="Wedding collection"
          />
        </div>

        <div className="promo-content">
          <p>THE WEDDING EDIT</p>

          <h2>
            For moments
            <br />
            <i>worth remembering.</i>
          </h2>

          <p>
            Discover heirloom-worthy sarees designed for
            celebrations, weddings and everything in between.
          </p>

          <a href="#featured" className="primary-btn">
            Explore Wedding Edit
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-content">
          <p>OUR STORY</p>

          <h2>
            Made by hands.
            <br />
            <i>Made to last.</i>
          </h2>

          <p>
            SĀRĀ brings together India's traditional weaving
            communities and contemporary design. We believe
            a saree isn't simply something you wear — it is
            something you carry through generations.
          </p>

          <a href="#contact" className="text-link">
            Discover our story →
          </a>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1000&q=90"
            alt="Indian saree craftsmanship"
          />
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial">
        <span className="quote">“</span>

        <h2>
          The saree arrived beautifully packed
          and looked even more gorgeous in person.
        </h2>

        <p>— ANANYA R., HYDERABAD</p>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter" id="contact">
        <p>JOIN THE SĀRĀ CIRCLE</p>

        <h2>
          Something beautiful
          <br />
          is coming your way.
        </h2>

        <form>
          <input
            type="email"
            placeholder="Enter your email address"
          />
          <button type="submit">Subscribe →</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <h2>SĀRĀ</h2>
          <p>THE SAREE HOUSE</p>
          <span>
            Contemporary expressions of India's timeless
            textile heritage.
          </span>
        </div>

        <div className="footer-column">
          <h4>SHOP</h4>
          <a href="#featured">Silk Sarees</a>
          <a href="#featured">Organza</a>
          <a href="#featured">Festive</a>
          <a href="#featured">Wedding</a>
        </div>

        <div className="footer-column">
          <h4>ABOUT</h4>
          <a href="#about">Our Story</a>
          <a href="#about">Craftsmanship</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Journal</a>
        </div>

        <div className="footer-column">
          <h4>FOLLOW</h4>
          <a href="#instagram">Instagram</a>
          <a href="#facebook">Facebook</a>
          <a href="#pinterest">Pinterest</a>
        </div>
      </footer>

      <div className="copyright">
        <span>© 2026 SĀRĀ THE SAREE HOUSE</span>
        <span>CRAFTED WITH TRADITION ♡</span>
      </div>

    </div>
  );
}

export default App;