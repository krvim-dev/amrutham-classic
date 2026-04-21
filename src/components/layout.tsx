// Shared layout components used by every page.
// Centralized so the footer, navbar and chatbot stay consistent.

type NavProps = { current?: string }

// Inline SVG logo — a stylized 'A' with spoon + fork arms and a pot,
// matching the Amrutham Authentics mark. Uses currentColor so it blends
// into whatever surface (glass navbar / dark footer) without a white block.
export const LogoMark = ({ size = 44 }: { size?: number }) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-label="Amrutham Authentics">
    {/* The A shape */}
    <path d="M20 85 L45 15 H55 L80 85 H66 L60 70 H40 L34 85 Z M44 58 H56 L50 40 Z"
          fill="currentColor" />
    {/* Spoon arm (top-left) */}
    <g transform="translate(28,22) rotate(-30)">
      <ellipse cx="0" cy="0" rx="4" ry="6" fill="currentColor" />
      <rect x="-1" y="5" width="2" height="14" rx="1" fill="currentColor" />
    </g>
    {/* Fork arm (top-right) */}
    <g transform="translate(72,22) rotate(30)">
      <rect x="-0.6" y="-6" width="1.2" height="8" fill="currentColor" />
      <rect x="-3" y="-6" width="1.2" height="8" fill="currentColor" />
      <rect x="2" y="-6" width="1.2" height="8" fill="currentColor" />
      <rect x="-3" y="2" width="6" height="2" fill="currentColor" />
      <rect x="-0.6" y="4" width="1.2" height="14" rx="0.6" fill="currentColor" />
    </g>
    {/* Pot + leaves + drop inside the A */}
    <g transform="translate(50,52)">
      <path d="M-8 0 Q-10 8 -6 12 H6 Q10 8 8 0 Z" fill="currentColor" opacity="0.85" />
      <path d="M0 -10 Q-3 -4 0 -2 Q3 -4 0 -10 Z" fill="currentColor" opacity="0.95" />
      <path d="M-5 -4 Q-9 -6 -10 -2 Q-7 -1 -5 -4" fill="currentColor" opacity="0.7" />
      <path d="M5 -4 Q9 -6 10 -2 Q7 -1 5 -4" fill="currentColor" opacity="0.7" />
    </g>
  </svg>
)

export const Navbar = ({ current = '/' }: NavProps) => {
  const link = (href: string, icon: string, label: string) => (
    <li class="nav-item">
      <a href={href} class={`nav-link${current === href ? ' active' : ''}`}>
        <i class={`fas ${icon}`}></i>
        {label}
      </a>
    </li>
  )
  return (
    <nav class="navbar-container">
      <div class="navbar">
        <a href="/" class="navbar-logo" aria-label="Amrutham Authentics home">
          <img src="/static/logo.png" alt="Amrutham Authentics" class="navbar-logo-img" />
        </a>

        <ul class="navbar-menu">
          {link('/', 'fa-home', 'Home')}
          {link('/about', 'fa-landmark', 'About Us')}
          {link('/menu', 'fa-book-open', 'Menu')}
          {link('/catering', 'fa-concierge-bell', 'Catering')}
          {link('/events', 'fa-calendar-alt', 'Events')}
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="fas fa-shopping-bag"></i>
              Ordering
              <i class="fas fa-chevron-down dropdown-arrow"></i>
            </a>
            <div class="dropdown-menu">
              <a href="/pickup" class="dropdown-item"><i class="fas fa-shopping-basket"></i>Pickup</a>
              <a href="/delivery" class="dropdown-item"><i class="fas fa-truck"></i>Delivery</a>
            </div>
          </li>
          {link('/reserve', 'fa-calendar-check', 'Reserve')}
          {link('/contact', 'fa-envelope', 'Contact')}
        </ul>
      </div>
    </nav>
  )
}

export const Footer = () => (
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/static/logo.png" alt="Amrutham Authentics" class="footer-logo-img" />
          </div>
          <p>
            A living tribute to the culinary heritage of Andhra & Telangana.
            Every recipe carries a memory; every meal, a story from home.
          </p>
        </div>
        <div class="footer-col">
          <h5>Explore</h5>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/catering">Catering</a></li>
            <li><a href="/events">Events</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Visit</h5>
          <div class="foot-line"><i class="fas fa-map-marker-alt"></i> Sayreville, New Jersey</div>
          <div class="foot-line"><i class="fas fa-clock"></i> 11:00 AM – 10:30 PM</div>
          <div class="foot-line"><i class="fas fa-phone"></i> (732) 555-0143</div>
          <div class="foot-line"><i class="fas fa-envelope"></i> <a href="mailto:amruthamauthentics@atomicmail.io">amruthamauthentics@atomicmail.io</a></div>
        </div>
        <div class="footer-col">
          <h5>Act</h5>
          <ul>
            <li><a href="/reserve">Reserve a table</a></li>
            <li><a href="/pickup">Order pickup</a></li>
            <li><a href="/delivery">Order delivery</a></li>
            <li><a href="/contact">Get in touch</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© {new Date().getFullYear()} Amrutham Authentics. All rights reserved.</p>
        <div class="footer-social">
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="TripAdvisor"><i class="fab fa-tripadvisor"></i></a>
          <a href="#" aria-label="Yelp"><i class="fab fa-yelp"></i></a>
        </div>
      </div>
    </div>
  </footer>
)

// Chatbot — content-aware Q&A. Dropdown is grouped by topic; each question's
// answer is drawn from the corresponding page's actual copy on this site.
// Quick-pills handle the top 5 asks; the select surfaces the deeper menu.
// Per spec, NO "Jain food" or "delivery" entries.
export const Chatbot = () => (
  <>
    <button class="chatbot-launcher" id="chatbotLauncher" aria-label="Open chat">
      <i class="fas fa-comment-dots"></i>
    </button>
    <div class="chatbot-panel" id="chatbotPanel" role="dialog" aria-label="Chat with Amrutham">
      <div class="chatbot-head">
        <h4><i class="fas fa-comments" style={{ marginRight: '8px' }}></i>Ask Amrutham</h4>
        <button id="chatbotClose" aria-label="Close chat"><i class="fas fa-times"></i></button>
      </div>
      <div class="chatbot-body" id="chatbotBody">
        <div class="chat-msg bot">
          Namaste! Pick a question below, or tap a quick-topic — I can answer anything about the menu,
          reservations, dietary options, catering, events, and more.
        </div>
      </div>

      {/* Grouped dropdown of questions — content sourced from the site */}
      <div class="chat-dropdown-wrap">
        <label class="chat-dropdown-label" for="chatQuestion">Browse questions by topic:</label>
        <select id="chatQuestion" class="chat-dropdown" aria-label="Browse FAQs by topic">
          <option value="">— choose a question —</option>
          <optgroup label="🏠 Hours & Location">
            <option value="hours">What are your hours?</option>
            <option value="location">Where are you located?</option>
            <option value="parking">Is there parking?</option>
            <option value="holidays">Are you open on holidays?</option>
          </optgroup>
          <optgroup label="🍽️ Menu & Dishes">
            <option value="menu-style">What kind of food do you serve?</option>
            <option value="signature">What are your signature dishes?</option>
            <option value="biryani">Do you have biryani?</option>
            <option value="thali">Tell me about the thalis</option>
            <option value="chaat">Do you have chaat / snacks?</option>
            <option value="breakfast">Do you serve breakfast / tiffin?</option>
          </optgroup>
          <optgroup label="🌱 Dietary & Spice">
            <option value="veg">Is everything vegetarian?</option>
            <option value="vegan">Do you have vegan options?</option>
            <option value="gf">What about gluten-free?</option>
            <option value="spice">Can I adjust the spice level?</option>
            <option value="allergy">How do you handle allergies?</option>
          </optgroup>
          <optgroup label="📅 Reservations">
            <option value="reserve">How do I book a table?</option>
            <option value="walkin">Do you take walk-ins?</option>
            <option value="large">What about parties of 10+?</option>
            <option value="cancel">How do I cancel or change a booking?</option>
          </optgroup>
          <optgroup label="🎉 Catering">
            <option value="cater-types">What kinds of events do you cater?</option>
            <option value="cater-packages">What are the catering packages?</option>
            <option value="cater-notice">How much notice do you need?</option>
            <option value="cater-quote">How do I get a quote?</option>
          </optgroup>
          <optgroup label="🎵 Private Events">
            <option value="event-types">What events do you host?</option>
            <option value="event-music">When are live music nights?</option>
            <option value="event-buyout">Can I buy out the restaurant?</option>
            <option value="event-space">How big is the dining room?</option>
          </optgroup>
          <optgroup label="📞 Contact & Orders">
            <option value="contact">How do I reach you?</option>
            <option value="pickup">Do you offer pickup?</option>
            <option value="giftcard">Do you sell gift cards?</option>
          </optgroup>
        </select>
      </div>

      <div class="chat-quick">
        <button type="button" data-q="hours">Hours</button>
        <button type="button" data-q="reserve">Reserve</button>
        <button type="button" data-q="catering">Catering</button>
        <button type="button" data-q="events">Events</button>
        <button type="button" data-q="location">Location</button>
      </div>
    </div>

    <script dangerouslySetInnerHTML={{ __html: `
      (function(){
        const launcher = document.getElementById('chatbotLauncher');
        const panel = document.getElementById('chatbotPanel');
        const closeBtn = document.getElementById('chatbotClose');
        const body = document.getElementById('chatbotBody');
        const dropdown = document.getElementById('chatQuestion');
        if(!launcher || !panel) return;

        // Knowledge base. Every answer is grounded in content that appears
        // elsewhere on this site (home, menu, about, reserve, catering, events, contact).
        const KB = {
          // Hours & Location
          hours:      { q: 'What are your hours?', a: "We're open every day from 11:00 AM to 10:30 PM." },
          location:   { q: 'Where are you located?', a: "We're in Sayreville, New Jersey. The Contact page has a map and directions." },
          parking:    { q: 'Is there parking?', a: "Yes — free parking is available in the lot next to the restaurant and along the adjacent street after 6 PM." },
          holidays:   { q: 'Are you open on holidays?', a: "Yes — we're open every day of the year. Festive menus sometimes shift; call ahead during major Indian festivals." },

          // Menu & Dishes
          'menu-style':{ q: 'What kind of food do you serve?', a: "Regional cuisine from Andhra & Telangana — 100% pure vegetarian, slow-cooked, hand-pounded spices. Think Gutti Vankaya Kura, Chitti Muthyala Biryani, Ghee Karam Dosa, and our Amrutham Special Thali." },
          signature:  { q: 'What are your signature dishes?', a: "Our signatures: Chitti Muthyala Mushroom Biryani ($12), Gutti Vankaya Kura ($12), Ghee Karam Dosa ($13), Amrutham Special Thali ($16), Family Dosa 70MM ($18), and our handcrafted Filter Coffee." },
          biryani:    { q: 'Do you have biryani?', a: "Yes — six, including Veg Biryani ($12), Cashew Paneer Biryani ($14), Chitti Muthyala Mushroom Biryani ($12, a signature), and Avakaya Bundi Pulav ($10). All layered in sealed handi pots." },
          thali:      { q: 'Tell me about the thalis', a: "Four options: Mini Thali ($12), South Indian Veg Thali ($14), Punjabi/Gujarathi Thali ($14), and our Amrutham Special Thali ($16) — twelve small plates walking you through the regions on one tray." },
          chaat:      { q: 'Do you have chaat / snacks?', a: "Yes — Pani Puri ($8), Masala Puri ($10), Dahi Puri ($10), Samosa Chaat ($11), plus Homestyle Crunchies like Vijayawada Chitti Punugulu and Mysore Bonda." },
          breakfast:  { q: 'Do you serve breakfast / tiffin?', a: "Our Sunrise Specials — Tiffin Ahaaram — runs all day. Idli, Medu Vada, Pesarattu, Poori Bhaji, Upma, Chole Batura. Served with three chutneys and filter coffee." },

          // Dietary
          veg:        { q: 'Is everything vegetarian?', a: "Yes. 100% pure vegetarian — no eggs, no meat, no stock made with either. We run two separate pantries to prevent any cross-contamination." },
          vegan:      { q: 'Do you have vegan options?', a: "A large part of the menu is naturally vegan — most dosas, chaats, rice dishes, and South Indian breakfast items. Ask your server or flag it in your reservation notes." },
          gf:         { q: 'What about gluten-free?', a: "Many dishes are naturally gluten-free: dosas, idlis, rice & biryani plates, most regional curries. Breads (parotta, phulka, poori) are not." },
          spice:      { q: 'Can I adjust the spice level?', a: "Yes — mild, medium, and our house spice level are all available. Andhra & Telangana regionals run hotter by tradition; we'll happily dial them down." },
          allergy:    { q: 'How do you handle allergies?', a: "Tell your server or note it on your reservation — we can flag nuts, dairy (paneer/ghee), gluten, and most common allergens at the kitchen level." },

          // Reservations
          reserve:    { q: 'How do I book a table?', a: "The Reserve page is the fastest way — name, date, time, party size. We confirm within the hour during business hours." },
          walkin:     { q: 'Do you take walk-ins?', a: "Yes, but weekend evenings fill up quickly. Reserving even an hour ahead saves the wait." },
          large:      { q: 'What about parties of 10+?', a: "Large groups go through our Events page — we handle 20–60 in the semi-private dining room and up to 100 for full buyouts." },
          cancel:     { q: 'How do I cancel or change a booking?', a: "Call us at (732) 555-0143 or email amruthamauthentics@atomicmail.io — the faster we know, the easier it is for the next guest." },

          // Catering
          'cater-types':    { q: 'What kinds of events do you cater?', a: "Weddings, corporate lunches/launches/offsites, private dinners, and community gatherings. 2,400+ events catered, all pure vegetarian." },
          'cater-packages': { q: 'What are the catering packages?', a: "Three tiers: Homestyle ($24/guest) for intimate gatherings, Signature ($42/guest) for weddings & milestones, Heritage ($65/guest) for full regional feasts with live counters." },
          'cater-notice':   { q: 'How much notice do you need?', a: "Minimum 48 hours for drop-off trays. Full-service events — 2+ weeks ideal, longer for weddings with tastings." },
          'cater-quote':    { q: 'How do I get a quote?', a: "Use the Contact page or email amruthamauthentics@atomicmail.io with date, headcount, venue, and any regional flavour notes. We'll respond same business day." },

          // Events
          'event-types':  { q: 'What events do you host?', a: "Milestone Dinners (20–60 guests, semi-private room), Live Music Nights, Regional Food Festivals, and Private Buyouts (60–100 guests)." },
          'event-music':  { q: 'When are live music nights?', a: "Carnatic Sessions — first Saturday of each month. Classical performance paired with a regional tasting menu, 40 seats only, reserve ahead." },
          'event-buyout': { q: 'Can I buy out the restaurant?', a: "Yes — full-restaurant buyouts for 60–100 guests with a 4-hour minimum. Includes our main dining room and the garden room." },
          'event-space':  { q: 'How big is the dining room?', a: "Main dining room seats 36 under warm lantern light. The adjoining garden room seats 24 with patio access. Book both for buyouts." },

          // Contact
          contact:   { q: 'How do I reach you?', a: "Call (732) 555-0143 (every day 11 AM–10:30 PM) or email amruthamauthentics@atomicmail.io. We reply within the business day." },
          pickup:    { q: 'Do you offer pickup?', a: "Yes — order via the Pickup link in the top-right menu. Ready in 20–25 minutes for most orders." },
          giftcard:  { q: 'Do you sell gift cards?', a: "Yes — email amruthamauthentics@atomicmail.io with the amount and recipient, or ask at the host stand on your next visit." },

          // Aliases for the quick-pills (so clicking the pill shows a friendly user message)
          catering:  { q: 'Tell me about catering', a: "Three package tiers (Homestyle $24, Signature $42, Heritage $65 per guest), 2,400+ events handled. Full details on the Catering page." },
          events:    { q: 'Tell me about events', a: "Milestone dinners, live music, regional festivals, private buyouts. The Events page lists what's upcoming and shows the space." }
        };

        function say(role, text) {
          const el = document.createElement('div');
          el.className = 'chat-msg ' + role;
          el.textContent = text;
          body.appendChild(el);
          body.scrollTop = body.scrollHeight;
        }
        function ask(key) {
          const entry = KB[key];
          if(!entry) return;
          say('user', entry.q);
          setTimeout(() => say('bot', entry.a), 260);
        }

        launcher.addEventListener('click', () => panel.classList.toggle('open'));
        closeBtn && closeBtn.addEventListener('click', () => panel.classList.remove('open'));

        // Quick-pill buttons
        document.querySelectorAll('.chat-quick button').forEach(btn => {
          btn.addEventListener('click', () => ask(btn.getAttribute('data-q')));
        });

        // Grouped dropdown
        dropdown && dropdown.addEventListener('change', (e) => {
          const val = e.target.value;
          if(!val) return;
          ask(val);
          e.target.value = '';  // reset for next pick
        });
      })();
    ` }} />
  </>
)

// Convenience page wrapper — navbar + content + footer + chatbot.
export const Page = ({ current, children }: { current: string; children: any }) => (
  <>
    <Navbar current={current} />
    {children}
    <Footer />
    <Chatbot />
  </>
)
