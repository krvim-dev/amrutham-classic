// Home page — rebuilt per Excel feedback:
//  • 3 identity boxes share the SAME icon treatment
//  • Signature Veg Delights use real dish imagery (not FA icons)
//  • Pure Veg section is now an accordion, no icons
//  • Rating & "thalis served" box removed
//  • Signature dishes gallery uses real images
//  • Why Amrutham is a staircase layout, readable dark text

// Placeholder image URLs — restaurant dish stock from Unsplash.
// Replace with commissioned shots when available.
const dishImg = (q: string) =>
  `https://images.unsplash.com/${q}?w=600&auto=format&fit=crop&q=80`

export const Home = () => (
  <>
    {/* HERO — Welcome text + Goddess Annapurna medallion, side-by-side */}
    <section class="hero">
      <div class="hero-wrap">
        <div class="hero-text">
          <div class="hero-subtitle">Authentic Indian Cuisine</div>
          <h1 class="hero-title">
            Welcome to<br />
            <span class="gold">Amrutham Authentics</span>
          </h1>
          <p class="hero-description">
            Flavours rooted in the kitchens of Andhra & Telangana — slow-cooked,
            hand-pounded, and plated the way they have been for generations.
            A quiet tribute to Goddess Annapurna, keeper of food and nourishment.
          </p>
          <div class="hero-buttons">
            <a href="/menu" class="btn btn-primary"><i class="fas fa-book-open"></i> View Menu</a>
            <a href="/reserve" class="btn btn-secondary"><i class="fas fa-calendar-check"></i> Reserve Table</a>
          </div>
        </div>
        <figure class="hero-annapurna">
          <div class="annapurna-medallion">
            <img
              src="/static/annapurna.png"
              alt="Goddess Annapurna — keeper of food and nourishment"
              width="520"
              height="520"
            />
          </div>
          <figcaption>Goddess Annapurna · Keeper of Food &amp; Nourishment</figcaption>
        </figure>
      </div>
    </section>

    {/* A PURE VEG CULINARY DESTINATION — image-led tradition band */}
    <section class="section culinary-band">
      <div class="container">
        <div class="culinary-inner">
          <figure class="culinary-figure">
            <img
              src="/static/culinary-destination.png"
              alt="A pure vegetarian culinary destination, inspired by tradition"
              loading="lazy"
              width="1159"
              height="762"
            />
          </figure>
          <div class="culinary-copy">
            <span class="section-eyebrow">Rooted in Reverence</span>
            <h2 class="section-title">A Pure Veg Culinary Destination,<br/>Inspired by Tradition</h2>
            <p>
              Amrutham is a quiet kitchen that cooks the way our grandmothers did —
              slow, with spices pounded at dawn, and with a reverence for produce that
              still carries the memory of its soil. Every plate is 100% pure vegetarian,
              built from recipes that were written by hand long before they were written
              on a menu.
            </p>
            <p>
              Our cuisine is the offering. Our service is the ritual. Our table is set
              the way you'd set one at home — for friends, for family, for anyone who
              is ready to sit down and slow down.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* OUR IDENTITY — three boxes with consistent icon treatment */}
    <section class="section">
      <div class="container">
        <div class="section-head--center">
          <span class="section-eyebrow">Our Identity</span>
          <h2 class="section-title">Our identity reflects our soul</h2>
          <p class="section-lede">
            Three quiet promises that turn a meal into a memory.
          </p>
        </div>
        <div class="identity-grid">
          <div class="identity-card">
            <div class="ic-icon"><i class="fas fa-fire"></i></div>
            <h3>Slow &amp; Sacred</h3>
            <p>No shortcuts. Spices bloomed in ghee, curries rested to deepen, rice cooked in its own steam.</p>
          </div>
          <div class="identity-card">
            <div class="ic-icon"><i class="fas fa-leaf"></i></div>
            <h3>Pure Vegetarian</h3>
            <p>Rooted in tradition. Every plate is 100% vegetarian, seasonal, and made with ingredients we can name.</p>
          </div>
          <div class="identity-card">
            {/* matches the other two circular gold icons */}
            <div class="ic-icon"><i class="fas fa-hands"></i></div>
            <h3>Served with Bhakti</h3>
            <p>The guest is God. Our service is grounded in reverence — warm, unhurried, and personal.</p>
          </div>
        </div>
      </div>
    </section>

    {/* SIGNATURE VEG DELIGHTS — real dish photography */}
    <section class="section section--band">
      <div class="container">
        <div class="section-head--center">
          <span class="section-eyebrow">Signature Veg Delights</span>
          <h2 class="section-title">The dishes guests return for</h2>
        </div>
        <div class="dish-grid">
          <article class="dish-card">
            <div class="dish-img" style={{ backgroundImage: `url('/static/chitti-muthyala.png')` }}></div>
            <div class="dish-body">
              <h4>Chitti Muthyala Biryani</h4>
              <p>Short-grain rice layered with mushroom, cashew & slow-spiced gravy.</p>
              <span class="price">$12</span>
            </div>
          </article>
          <article class="dish-card">
            <div class="dish-img" style={{ backgroundImage: `url('/static/gutti-vankaya.png')` }}></div>
            <div class="dish-body">
              <h4>Gutti Vankaya Kura</h4>
              <p>Baby eggplant stuffed with peanut-sesame masala, the Andhra way.</p>
              <span class="price">$12</span>
            </div>
          </article>
          <article class="dish-card">
            <div class="dish-img" style={{ backgroundImage: `url('/static/karam-dosa.jpg')` }}></div>
            <div class="dish-body">
              <h4>Ghee Karam Dosa</h4>
              <p>Lace-thin dosa swept with molten ghee and our house karam podi.</p>
              <span class="price">$13</span>
            </div>
          </article>
          <article class="dish-card">
            <div class="dish-img" style={{ backgroundImage: `url('/static/andhra-thali.png')` }}></div>
            <div class="dish-body">
              <h4>Amrutham Special Thali</h4>
              <p>Twelve small plates that walk you through the regions on one tray.</p>
              <span class="price">$16</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    {/* YOUR NEW FAVORITE PURE VEG — image-tile showcase (full-bleed cards,
        title always visible, description reveals on hover/focus) */}
    <section class="section section--ink pureveg-section">
      <div class="container">
        <div class="section-head--center">
          <span class="section-eyebrow">Your New Favorite Pure Veg</span>
          <h2 class="section-title">Open a plate, open a story</h2>
          <p class="section-lede" style={{ margin: '0 auto' }}>
            Four traditions we cook every day. Hover a tile to read more — or tap on mobile.
          </p>
        </div>

        <div class="pureveg-showcase">
          <article class="pv-tile" tabindex={0} style={{ backgroundImage: `url('/static/tiffin-ahaaram.png')` }}>
            <span class="pv-tile-count">The Morning Ritual</span>
            <div class="pv-tile-content">
              <span class="pv-tile-eyebrow">Sunrise Specials</span>
              <h3 class="pv-tile-title">Tiffin Ahaaram</h3>
              <p class="pv-tile-desc">
                Idli steamed in banana-leaf trays, pesarattu folded with fresh ginger,
                poori bhaji for feast days. Served with three chutneys and a steel
                tumbler of filter coffee.
              </p>
            </div>
          </article>

          <article class="pv-tile" tabindex={0} style={{ backgroundImage: `url('/static/andhra-telangana.png')` }}>
            <span class="pv-tile-count">Regional Soul</span>
            <div class="pv-tile-content">
              <span class="pv-tile-eyebrow">From the Grandmother's Notebook</span>
              <h3 class="pv-tile-title">Andhra &amp; Telangana Regionals</h3>
              <p class="pv-tile-desc">
                Gutti vankaya, avakaya pappu, bagara baingan, pachi pulusu. Recipes
                that never left the family kitchen. Spice levels are honest — mild
                is available on request.
              </p>
            </div>
          </article>

          <article class="pv-tile" tabindex={0} style={{ backgroundImage: `url('/static/thalis-biryanis.png')` }}>
            <span class="pv-tile-count">Layered Tradition</span>
            <div class="pv-tile-content">
              <span class="pv-tile-eyebrow">Built by Hand</span>
              <h3 class="pv-tile-title">Thalis &amp; Biryanis</h3>
              <p class="pv-tile-desc">
                Walking museums of flavour on one tray. Biryanis layered in sealed
                handi pots — no shortcuts, no food colour, just rice and patience.
              </p>
            </div>
          </article>

          <article class="pv-tile" tabindex={0} style={{ backgroundImage: `url('/static/homestyle-crunchies.png')` }}>
            <span class="pv-tile-count">Street-Cart Classics</span>
            <div class="pv-tile-content">
              <span class="pv-tile-eyebrow">Small, Crisp, Made-to-Order</span>
              <h3 class="pv-tile-title">Homestyle Crunchies</h3>
              <p class="pv-tile-desc">
                Punugulu from a Vijayawada street cart, mirchi bajji with the long
                Guntur chilli, pani puri that cracks the way it should.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    {/* SIGNATURE DISHES GALLERY — editorial mosaic (asymmetric: 1 hero +
        2 squares + 1 wide + 4 squares). Masala Dosa & Samosa Chaat stay on
        Unsplash; the six other tiles use local commissioned shots. */}
    <section class="section section--band kitchen-section">
      <div class="container">
        <div class="section-head--center">
          <span class="section-eyebrow">Signature Dishes Gallery</span>
          <h2 class="section-title">A walk through our kitchen</h2>
        </div>
        <div class="kitchen-mosaic">
          <article class="kt-tile kt-tile--hero" tabindex={0} style={{ backgroundImage: `url('/static/avakaya-thali.png')` }}>
            <span class="kt-chip">Signature</span>
            <div class="kt-caption">
              <span class="kt-eyebrow">Andhra Platter</span>
              <h4>Avakaya Thali</h4>
            </div>
          </article>
          <article class="kt-tile" tabindex={0} style={{ backgroundImage: `url('${dishImg('photo-1668236543090-82eba5ee5976')}')` }}>
            <div class="kt-caption"><h4>Masala Dosa</h4></div>
          </article>
          <article class="kt-tile" tabindex={0} style={{ backgroundImage: `url('/static/gulab-jamoon.webp')` }}>
            <div class="kt-caption"><h4>Gulab Jamoon</h4></div>
          </article>
          <article class="kt-tile kt-tile--wide" tabindex={0} style={{ backgroundImage: `url('/static/paneer-butter-masala.jpg')` }}>
            <div class="kt-caption">
              <span class="kt-eyebrow">House Favourite</span>
              <h4>Paneer Butter Masala</h4>
            </div>
          </article>
          <article class="kt-tile" tabindex={0} style={{ backgroundImage: `url('/static/upma-pesarattu.jpg')` }}>
            <div class="kt-caption"><h4>Upma Pesarattu</h4></div>
          </article>
          <article class="kt-tile" tabindex={0} style={{ backgroundImage: `url('/static/mirchi-bajji.png')` }}>
            <div class="kt-caption"><h4>Mirchi Bajji</h4></div>
          </article>
          <article class="kt-tile" tabindex={0} style={{ backgroundImage: `url('${dishImg('photo-1610192244261-3f33de3f55e4')}')` }}>
            <div class="kt-caption"><h4>Samosa Chaat</h4></div>
          </article>
          <article class="kt-tile" tabindex={0} style={{ backgroundImage: `url('/static/rice-kheer.jpg')` }}>
            <div class="kt-caption"><h4>Rice Kheer</h4></div>
          </article>
        </div>
      </div>
    </section>

    {/* WHY AMRUTHAM — staircase, dark readable text */}
    <section class="section">
      <div class="container">
        <div class="section-head--center">
          <span class="section-eyebrow">Why Amrutham</span>
          <h2 class="section-title">Four reasons guests become regulars</h2>
        </div>
        <div class="why-stairs">
          <div class="why-step">
            <div class="why-num">01</div>
            <div>
              <h4>Recipes we inherited</h4>
              <p>Every dish on the menu came from a family kitchen — documented, tested, and preserved exactly the way our mothers taught us.</p>
            </div>
          </div>
          <div class="why-step">
            <div class="why-num">02</div>
            <div>
              <h4>Spice we hand-pound</h4>
              <p>Karam podi, gunpowder, rasam powder — all ground in-house, weekly, in small batches. You can smell the difference before you taste it.</p>
            </div>
          </div>
          <div class="why-step">
            <div class="why-num">03</div>
            <div>
              <h4>Pure vegetarian, non-negotiable</h4>
              <p>No eggs, no cross-contamination. Two separate pantries, two separate kitchens, zero compromise for the guests who trust us.</p>
            </div>
          </div>
          <div class="why-step">
            <div class="why-num">04</div>
            <div>
              <h4>Hospitality without theatre</h4>
              <p>We don't perform — we serve. Our team knows the menu, the regions behind it, and how to read a table that just wants a quiet meal.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)
