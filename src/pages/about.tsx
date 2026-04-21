// About page — rebuilt per Excel feedback:
//  • "A Living Heritage" title stays visible (no fade-to-zero)
//  • "Scroll to begin" sits below copy, no overlap
//  • Removed right-side floating box after second section
//  • No flower symbols anywhere (removed above Eternal Place, above/below Guest is God)
//  • Heritage Timeline first point: relevant "Origins of Amrutham" text
//  • Testimonials aligned in a proper grid
//  • Footer included via <Page>

export const About = () => (
  <>
    {/* Living Heritage hero — two-column: text beside the Heritage photograph */}
    <section class="heritage-hero">
      <div class="heritage-hero-wrap">
        <div class="heritage-copy">
          <span class="section-eyebrow">About Us</span>
          <h1>A Living Heritage</h1>
          <p class="heritage-sub">
            Amrutham Authentics is a slow-built tribute to the food of Andhra &amp; Telangana —
            a kitchen where recipes are remembered, not invented.
          </p>
        </div>
        <figure class="heritage-image">
          <img src="/static/heritage.png" alt="A living heritage — Amrutham Authentics" loading="lazy" />
        </figure>
      </div>
      <div class="scroll-indicator" aria-hidden="true">
        Scroll to Begin
        <div class="si-arrow"></div>
      </div>
    </section>

    {/* Story */}
    <section class="section">
      <div class="container" style={{ maxWidth: '880px' }}>
        <span class="section-eyebrow">Our Story</span>
        <h2 class="section-title">From a family kitchen to your table</h2>
        <p style={{ color: 'var(--ink-soft)', fontSize: '1.08rem', marginBottom: '18px' }}>
          Amrutham — "nectar" in Sanskrit — is what our grandmother called the food she made on festival
          days. Our menu began there: a spiral-bound notebook of handwritten recipes, some inked,
          some in pencil, all annotated with the little corrections that make a dish hers.
        </p>
        <p style={{ color: 'var(--ink-soft)', fontSize: '1.08rem' }}>
          Decades later, in Sayreville, New Jersey, we cook those same recipes. The pots have
          changed, the kitchen is new, but the hands still measure the same way, the ghee still
          sizzles at the same temperature, and the end of every meal is still a small, quiet "ahh".
        </p>
      </div>
    </section>

    {/* Eternal Place — no flower above, clean band */}
    <section class="section section--band">
      <div class="container">
        <div class="section-head--center">
          <span class="section-eyebrow">Our Eternal Place</span>
          <h2 class="section-title">A table set for tradition</h2>
          <p class="section-lede">
            The dining room is built around a single idea: food deserves a calm room.
            Hand-block prints from Machilipatnam, brass tumblers from the Godavari belt,
            a wall of rotating regional maps — nothing loud, everything intentional.
          </p>
        </div>
      </div>
    </section>

    {/* Heritage Timeline — first point (Origins of Amrutham) now has relevant text */}
    <section class="section">
      <div class="container">
        <div class="section-head--center">
          <span class="section-eyebrow">Our Heritage Timeline</span>
          <h2 class="section-title">How Amrutham came to be</h2>
        </div>
        <div class="timeline">
          <div class="tl-item">
            <span class="tl-year">The Origin</span>
            <h4>Origins of Amrutham</h4>
            <p>
              The name Amrutham comes from a family notebook — a grandmother's word for
              the food she cooked on festival days in coastal Andhra. That notebook is the
              reason this restaurant exists: a promise that those recipes would outlive the
              handwriting they were recorded in.
            </p>
          </div>
          <div class="tl-item">
            <span class="tl-year">The Journey</span>
            <h4>From Vijayawada to Sayreville</h4>
            <p>
              Two generations later, the family moved to the East Coast. The first kitchen was
              a home oven; the first menu, three dishes and a filter coffee setup for friends.
            </p>
          </div>
          <div class="tl-item">
            <span class="tl-year">The Kitchen</span>
            <h4>A quiet opening</h4>
            <p>
              Amrutham Authentics opened its doors in Sayreville — 36 seats, a pure-vegetarian
              kitchen, and a printed thank-you note on every table.
            </p>
          </div>
          <div class="tl-item">
            <span class="tl-year">Today</span>
            <h4>Still written by hand</h4>
            <p>
              Our menu is still edited on paper before it reaches the wall. Seasonal dishes
              arrive with the produce; specials are announced by the kitchen, not a spreadsheet.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* What our guests say — aligned grid */}
    <section class="section section--band">
      <div class="container">
        <div class="section-head--center">
          <span class="section-eyebrow">What Our Guests Say</span>
          <h2 class="section-title">In their own words</h2>
        </div>
        <div class="testimonials-grid">
          <article class="testimonial">
            <div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
            <p>"The gutti vankaya tasted exactly like my grandmother's. I cried a little. I'm not sorry."</p>
            <div class="t-author">Rohini P.</div>
            <div class="t-role">Edison, NJ</div>
          </article>
          <article class="testimonial">
            <div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
            <p>"Family-run, family-style, and quietly excellent. The special thali is a masterclass in restraint."</p>
            <div class="t-author">Arvind M.</div>
            <div class="t-role">Princeton, NJ</div>
          </article>
          <article class="testimonial">
            <div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
            <p>"Vegetarian, but never apologetic about it. Spicing has a point of view; rice has respect."</p>
            <div class="t-author">Nora D.</div>
            <div class="t-role">New York, NY</div>
          </article>
        </div>
      </div>
    </section>

    {/* The Guest is God — dark band, no flower symbols */}
    <section class="section section--ink">
      <div class="container">
        <div class="quote-band">
          <blockquote>
            "Atithi Devo Bhava — the guest is God. Every chair at Amrutham is a small altar."
          </blockquote>
          <cite>— Our Kitchen Philosophy</cite>
        </div>
      </div>
    </section>
  </>
)
