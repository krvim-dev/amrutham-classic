// Events page — per Excel feedback:
//  • Varied representations per section (not repeated boxes)
//  • Footer via <Page>
//  • Promoted out of "More" in the navbar

export const Events = () => (
  <>
    <section class="cat-hero">
      <div class="container">
        <span class="section-eyebrow">Private Events</span>
        <h1>Host your evening in our dining room</h1>
        <p class="section-lede" style={{ margin: '0 auto' }}>
          Birthdays, anniversaries, engagement dinners, sangeet warm-ups, book clubs, farewells —
          we hold the room, you bring the guests.
        </p>
      </div>
    </section>

    {/* Variant 1 — three-up event types with distinct icons */}
    <section class="section">
      <div class="container">
        <div class="section-head--center">
          <span class="section-eyebrow">Event Types</span>
          <h2 class="section-title">Every occasion, its own tone</h2>
        </div>
        <div class="cta-trio">
          <div class="cta-card">
            <div class="cta-icon" style={{ background: 'linear-gradient(135deg, var(--brand-terracotta), #a64428)' }}><i class="fas fa-birthday-cake"></i></div>
            <h3>Milestone Dinners</h3>
            <div class="cta-lines">Birthdays &amp; anniversaries · 20–60 guests · semi-private dining room</div>
          </div>
          <div class="cta-card">
            <div class="cta-icon" style={{ background: 'linear-gradient(135deg, var(--brand-olive), #4a5522)' }}><i class="fas fa-music"></i></div>
            <h3>Live Music Nights</h3>
            <div class="cta-lines">Carnatic &amp; fusion artists · first Saturday of each month · reservations essential</div>
          </div>
          <div class="cta-card">
            <div class="cta-icon"><i class="fas fa-flag"></i></div>
            <h3>Private Buyouts</h3>
            <div class="cta-lines">Full-restaurant takeovers · 60–100 guests · 4-hour minimum</div>
          </div>
        </div>
      </div>
    </section>

    {/* Variant 2 — upcoming featured events (rich cards) */}
    <section class="section section--band">
      <div class="container">
        <div class="section-head--center">
          <span class="section-eyebrow">Upcoming</span>
          <h2 class="section-title">What's on the calendar</h2>
        </div>
        <div class="dish-grid">
          <article class="dish-card">
            <div class="dish-img" style={{ background: 'linear-gradient(135deg, var(--brand-gold), var(--brand-terracotta))', color: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
              <i class="fas fa-drum"></i>
            </div>
            <div class="dish-body">
              <span class="section-eyebrow" style={{ fontSize: '0.72rem' }}>Sat, 1st Saturday</span>
              <h4>Carnatic Sessions</h4>
              <p>Live classical performance paired with a regional tasting menu. Limited to 40 seats.</p>
              <a href="/reserve" class="btn btn-accent" style={{ marginTop: '10px' }}>Reserve</a>
            </div>
          </article>
          <article class="dish-card">
            <div class="dish-img" style={{ background: 'linear-gradient(135deg, var(--brand-olive), var(--brand-brown))', color: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
              <i class="fas fa-pepper-hot"></i>
            </div>
            <div class="dish-body">
              <span class="section-eyebrow" style={{ fontSize: '0.72rem' }}>Monthly Festival</span>
              <h4>Spice Trail: Andhra</h4>
              <p>A five-course deep dive into one region of Andhra, explained dish-by-dish at the table.</p>
              <a href="/reserve" class="btn btn-accent" style={{ marginTop: '10px' }}>Reserve</a>
            </div>
          </article>
          <article class="dish-card">
            <div class="dish-img" style={{ background: 'linear-gradient(135deg, var(--brand-brown-deep), var(--brand-gold-deep))', color: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
              <i class="fas fa-leaf"></i>
            </div>
            <div class="dish-body">
              <span class="section-eyebrow" style={{ fontSize: '0.72rem' }}>Seasonal</span>
              <h4>Harvest Sunday</h4>
              <p>Sankranthi-inspired brunch with traditional games and a pongal-making demo for kids.</p>
              <a href="/reserve" class="btn btn-accent" style={{ marginTop: '10px' }}>Reserve</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    {/* Variant 3 — split visual + copy with venue shots */}
    <section class="section">
      <div class="container">
        <div class="split-row">
          <div class="split-copy">
            <span class="section-eyebrow">The Space</span>
            <h3>Two rooms, two moods</h3>
            <p>
              Our main dining room seats 36 in a warm, lantern-lit arrangement. The adjoining garden
              room opens onto a small patio and seats 24 for anything that wants a little air.
            </p>
            <p>
              Both rooms can be booked together for full buyouts, and we'll work with your AV setup
              for toasts, slideshows and live performances.
            </p>
            <a href="/contact" class="btn btn-secondary"><i class="fas fa-envelope"></i> Arrange a walk-through</a>
          </div>
          <div class="split-visual" style={{ background: 'linear-gradient(135deg, var(--brand-terracotta), var(--brand-brown))' }}>
            <i class="fas fa-couch"></i>
          </div>
        </div>
      </div>
    </section>

    {/* Variant 4 — inclusions as a clean checklist band */}
    <section class="section section--ink">
      <div class="container">
        <div class="section-head--center">
          <span class="section-eyebrow">What's Included</span>
          <h2 class="section-title">The basics, handled</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', marginTop: '30px', color: 'var(--cream)' }}>
          {[
            'Private coordinator',
            'Dedicated servers',
            'Custom printed menus',
            'Dietary icon cards',
            'Table linens & candles',
            'AV assistance',
            'Cleanup & breakdown',
            'Final-count flex (±10%)',
          ].map(item => (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 20px', background: 'rgba(184,135,62,0.1)', border: '1px solid rgba(184,135,62,0.3)', borderRadius: 'var(--radius-md)' }}>
              <i class="fas fa-check-circle" style={{ color: 'var(--brand-gold)', fontSize: '1.2rem' }}></i>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
)
