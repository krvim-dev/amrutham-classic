// Contact page — per Excel feedback:
//  • Three CTAs aligned uniformly (same card structure)
//  • "Visit us at" includes Sayreville, New Jersey; map points to that location
//  • FAQ with actual answers (no stray question-mark icon)
//  • Footer via <Page>; chatbot is globally mounted
//  • Quick-message form POSTs via FormSubmit to the real inbox

const CONTACT_EMAIL = 'amruthamauthentics@atomicmail.io'
const FORMSUBMIT_URL = `https://formsubmit.co/${CONTACT_EMAIL}`

export const Contact = () => (
  <>
    <section class="contact-hero">
      <div class="container">
        <span class="section-eyebrow">Contact Us</span>
        <h1>We're around — say hello</h1>
        <p class="section-lede" style={{ margin: '0 auto' }}>
          Questions about the menu, a reservation, or a catering enquiry? Pick whichever way suits you best.
        </p>

        <div class="cta-trio">
          <div class="cta-card">
            <div class="cta-icon"><i class="fas fa-phone"></i></div>
            <h3>Call Us</h3>
            <div class="cta-lines">
              <a href="tel:+17325550143">(732) 555-0143</a>
              <div>Every day, 11:00 AM – 10:30 PM</div>
            </div>
          </div>
          <div class="cta-card">
            <div class="cta-icon"><i class="fas fa-envelope"></i></div>
            <h3>Email Us</h3>
            <div class="cta-lines">
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              <div>We reply within the business day</div>
            </div>
          </div>
          <div class="cta-card">
            <div class="cta-icon"><i class="fas fa-map-marker-alt"></i></div>
            <h3>Visit Us At</h3>
            <div class="cta-lines">
              <div><strong>Amrutham Authentics</strong></div>
              <div>Sayreville, New Jersey</div>
              <a href="#map">Get directions ↓</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="map">
      <div class="container">
        <div class="section-head--center">
          <span class="section-eyebrow">Find Us</span>
          <h2 class="section-title">Sayreville, New Jersey</h2>
        </div>
        <div class="map-wrap">
          <iframe
            title="Amrutham Authentics — Sayreville, NJ"
            src="https://www.google.com/maps?q=Sayreville%2C+New+Jersey&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>

    {/* Quick message form — posts via FormSubmit */}
    <section class="section section--tight">
      <div class="container" style={{ maxWidth: '720px' }}>
        <div class="section-head--center">
          <span class="section-eyebrow">Send a Message</span>
          <h2 class="section-title" style={{ fontSize: '2rem' }}>Or drop us a quick note</h2>
          <p class="section-lede" style={{ margin: '0 auto' }}>
            Questions that don't fit the FAQ below — we'll reply within the business day.
          </p>
        </div>
        <div id="contactSuccess" class="form-success-banner" style={{ display: 'none' }}>
          <i class="fas fa-check-circle"></i>
          <div>
            <strong>Message sent.</strong>
            <div>Thank you — we'll reply within the business day.</div>
          </div>
        </div>
        <form class="reserve-form" id="contactForm" action={FORMSUBMIT_URL} method="POST" style={{ marginTop: '30px' }}>
          <input type="hidden" name="_subject" value="New contact message — Amrutham Authentics" />
          <input type="hidden" name="_captcha" value="true" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" id="contactNext" value="" />
          <input type="text" name="_honey" style={{ display: 'none' }} tabindex={-1} autocomplete="off" />

          <div class="form-row">
            <div class="form-field">
              <label for="c-name">Your Name</label>
              <input id="c-name" name="Name" type="text" required />
            </div>
            <div class="form-field">
              <label for="c-email">Email</label>
              <input id="c-email" name="Email" type="email" required />
            </div>
          </div>
          <div class="form-field" style={{ marginBottom: '18px' }}>
            <label for="c-topic">Topic</label>
            <select id="c-topic" name="Topic" required>
              <option value="">Choose one…</option>
              <option>General question</option>
              <option>Reservation help</option>
              <option>Catering enquiry</option>
              <option>Private event enquiry</option>
              <option>Media / press</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-field" style={{ marginBottom: '24px' }}>
            <label for="c-message">Message</label>
            <textarea id="c-message" name="Message" required placeholder="Anything we should know — date, party size, dietary needs, etc."></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            <i class="fas fa-paper-plane"></i> Send Message
          </button>
        </form>
      </div>
    </section>

    {/* FAQ with real answers */}
    <section class="section section--band">
      <div class="container">
        <div class="section-head--center">
          <span class="section-eyebrow">Questions We Hear Often</span>
          <h2 class="section-title">Frequently Asked Questions</h2>
        </div>
        <div class="faq-list">
          <details>
            <summary>Are all dishes pure vegetarian?</summary>
            <div class="faq-body">
              Yes. Amrutham is 100% pure vegetarian — no eggs, no meat, no stock made with either.
              We keep two separate pantries to prevent any cross-contamination.
            </div>
          </details>
          <details>
            <summary>Do you offer gluten-free or vegan options?</summary>
            <div class="faq-body">
              A large part of the menu is naturally gluten-free (most dosas, idlis, rice dishes) and
              many items are vegan on request. Ask your server or flag it in your reservation notes.
            </div>
          </details>
          <details>
            <summary>Can you adjust the spice level?</summary>
            <div class="faq-body">
              Mild, medium, and our house spice level are all available. Regional specialties from the
              Andhra & Telangana menu are hotter by tradition — we'll happily dial them down.
            </div>
          </details>
          <details>
            <summary>Do you take reservations?</summary>
            <div class="faq-body">
              Yes — the Reserve page is the fastest way, and we confirm within the hour during business
              hours. For parties of 10+, please use the Events page instead.
            </div>
          </details>
          <details>
            <summary>Is there parking?</summary>
            <div class="faq-body">
              Free parking is available in the lot next to the restaurant and along the adjacent street
              after 6 PM.
            </div>
          </details>
          <details>
            <summary>Do you cater private events?</summary>
            <div class="faq-body">
              Yes — weddings, corporate lunches, milestone birthdays and community gatherings. The
              Catering page has our package tiers; anything bespoke can go through the form above.
            </div>
          </details>
        </div>
      </div>
    </section>

    <script dangerouslySetInnerHTML={{ __html: `
      (function(){
        const next = document.getElementById('contactNext');
        if (next) next.value = window.location.origin + '/contact?submitted=1';
        if (new URLSearchParams(window.location.search).get('submitted') === '1') {
          const banner = document.getElementById('contactSuccess');
          const form = document.getElementById('contactForm');
          if (banner) banner.style.display = 'flex';
          if (form) form.style.display = 'none';
        }
      })();
    ` }} />
  </>
)
