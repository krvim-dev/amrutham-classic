// Catering page — per Excel feedback:
//  • Each section uses a DIFFERENT visual representation so the page
//    doesn't feel like repeated boxes (split rows, stat strip, package grid)
//  • Footer connected via <Page>
//  • Promoted out of "More" in the navbar

export const Catering = () => (
  <>
    <section class="cat-hero">
      <div class="container">
        <span class="section-eyebrow">Catering</span>
        <h1>From twenty seats to two thousand</h1>
        <p class="section-lede" style={{ margin: '0 auto' }}>
          We cater weddings, corporate gatherings, community events and private dinners —
          always pure vegetarian, always regional-accurate, always hand-plated.
        </p>
      </div>
    </section>

    {/* Variant 1 — split row (left visual) */}
    <section class="section">
      <div class="container">
        <div class="split-row">
          <div class="split-visual split-visual--image">
            <img src="/static/wedding-menu.jpeg" alt="Amrutham Authentics wedding menu" loading="lazy" />
          </div>
          <div class="split-copy">
            <span class="section-eyebrow">Weddings</span>
            <h3>A wedding menu, not a restaurant menu</h3>
            <p>
              We tailor every dish to the couple's hometowns — a Krishna-district thali next to a
              Telangana vegetable spread, a Guntur chilli corner for those who can take the heat.
              Dedicated chef-in-residence for the day.
            </p>
            <a href="/contact" class="btn btn-primary"><i class="fas fa-envelope"></i> Plan with us</a>
          </div>
        </div>
      </div>
    </section>

    {/* Variant 2 — stat strip */}
    <section class="section section--tight">
      <div class="container">
        <div class="stat-strip">
          <div class="stat"><div class="stat-num">2,400+</div><div class="stat-label">Events Catered</div></div>
          <div class="stat"><div class="stat-num">14</div><div class="stat-label">Regional Cuisines</div></div>
          <div class="stat"><div class="stat-num">100%</div><div class="stat-label">Pure Vegetarian</div></div>
          <div class="stat"><div class="stat-num">48 hrs</div><div class="stat-label">Minimum Notice</div></div>
        </div>
      </div>
    </section>

    {/* Variant 3 — split row (right visual, reversed) */}
    <section class="section section--band">
      <div class="container">
        <div class="split-row reverse">
          <div class="split-visual split-visual--image">
            <img src="/static/veg-buffet.png" alt="Full vegetarian buffet for corporate events" loading="lazy" />
          </div>
          <div class="split-copy">
            <span class="section-eyebrow">Corporate</span>
            <h3>Lunch, launch, offsite — handled</h3>
            <p>
              Drop-off trays to fully-staffed buffets. Dietary cards for every dish, individual
              portion packaging on request, and a single point of contact from enquiry to clean-up.
            </p>
            <a href="/contact" class="btn btn-secondary"><i class="fas fa-phone"></i> Get a quote</a>
          </div>
        </div>
      </div>
    </section>

    {/* Variant 4 — package cards */}
    <section class="section">
      <div class="container">
        <div class="section-head--center">
          <span class="section-eyebrow">Our Packages</span>
          <h2 class="section-title">Three ways to host a crowd</h2>
        </div>
        <div class="package-grid">
          <div class="package-card">
            <h4>Homestyle</h4>
            <div class="pkg-price">$24<span style={{ fontSize: '1rem', opacity: 0.7 }}> /guest</span></div>
            <p style={{ color: 'var(--ink-soft)' }}>A curated thali-style spread for intimate gatherings.</p>
            <ul>
              <li>3 mains + 2 sides + rice</li>
              <li>Choice of 2 breads</li>
              <li>Dessert of the season</li>
              <li>Drop-off service</li>
            </ul>
            <a href="/contact" class="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Request</a>
          </div>
          <div class="package-card featured">
            <h4>Signature</h4>
            <div class="pkg-price">$42<span style={{ fontSize: '1rem', opacity: 0.7 }}> /guest</span></div>
            <p style={{ color: 'rgba(253,248,240,0.8)' }}>Our recommended package — most weddings &amp; milestones.</p>
            <ul>
              <li>5 mains + 4 sides + 2 biryanis</li>
              <li>Chaat &amp; live dosa station</li>
              <li>Two desserts + filter coffee</li>
              <li>On-site chef + servers (4 hrs)</li>
            </ul>
            <a href="/contact" class="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Request</a>
          </div>
          <div class="package-card">
            <h4>Heritage</h4>
            <div class="pkg-price">$65<span style={{ fontSize: '1rem', opacity: 0.7 }}> /guest</span></div>
            <p style={{ color: 'var(--ink-soft)' }}>A regional feast with dishes you won't find on the menu.</p>
            <ul>
              <li>Build-your-own regional spread</li>
              <li>Live counters (3)</li>
              <li>Custom printed menus</li>
              <li>Full staff + cleanup</li>
            </ul>
            <a href="/contact" class="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Request</a>
          </div>
        </div>
      </div>
    </section>

    {/* Variant 5 — timeline of process */}
    <section class="section section--band">
      <div class="container">
        <div class="section-head--center">
          <span class="section-eyebrow">How It Works</span>
          <h2 class="section-title">From first call to last bite</h2>
        </div>
        <div class="timeline">
          <div class="tl-item"><span class="tl-year">Step 1</span><h4>The enquiry call</h4><p>Tell us the date, headcount, venue and any regional flavour notes. We listen more than we pitch.</p></div>
          <div class="tl-item"><span class="tl-year">Step 2</span><h4>The tasting</h4><p>We set up a private tasting at the restaurant — you pick, we iterate.</p></div>
          <div class="tl-item"><span class="tl-year">Step 3</span><h4>The menu &amp; the math</h4><p>A written menu, portion math, dietary icons and a firm quote. No surprises.</p></div>
          <div class="tl-item"><span class="tl-year">Step 4</span><h4>The day</h4><p>We arrive, set up, cook, serve, and leave the venue cleaner than we found it.</p></div>
        </div>
      </div>
    </section>
  </>
)
