// Menu page — rebuilt from the menu_card_design.pdf with left-side
// sidebar filters (by category, by dietary flag) + a search field.
// All "Amaravathi" dish names renamed to "Amrutham" per the rename.

type Item = { name: string; price: string; desc?: string; tags?: string[] }
type Cat = { id: string; name: string; sub?: string; icon: string; items: Item[] }

const MENU: Cat[] = [
  {
    id: 'tiffin',
    name: 'Sunrise Specials — Tiffin Ahaaram',
    sub: 'The morning ritual: steamed, soft, and served with three chutneys.',
    icon: 'fa-sun',
    items: [
      { name: 'Classic Idli', price: '$7' },
      { name: 'Ghee Karam Idli', price: '$8', tags: ['spicy'] },
      { name: 'Ghee Button Idli', price: '$10' },
      { name: 'Medu Vada', price: '$8' },
      { name: 'Dahi Wada', price: '$10' },
      { name: 'Rasam/Sambar Vada', price: '$10' },
      { name: 'Khara Upma', price: '$9' },
      { name: 'Poori Bhaji', price: '$10' },
      { name: 'Chole Batura', price: '$12' },
    ],
  },
  {
    id: 'dosa',
    name: 'Dosa Darbar',
    sub: 'Lace-thin, crackle-crisp, turned out one at a time from a cast-iron griddle.',
    icon: 'fa-utensils',
    items: [
      { name: 'Plain Dosa', price: '$9' },
      { name: 'Masala Dosa', price: '$11' },
      { name: 'Mysore Masala Dosa', price: '$12' },
      { name: 'Ghee Roast Dosa', price: '$12' },
      { name: 'Ghee Karam Dosa', price: '$13', tags: ['spicy', 'signature'] },
      { name: 'Nellore Kaaram Dosa', price: '$12', tags: ['spicy'] },
      { name: 'Rava Dosa', price: '$10' },
      { name: 'Onion Rava Dosa', price: '$11' },
      { name: 'Cheese Dosa', price: '$13' },
      { name: 'Family Dosa 70MM', price: '$18', tags: ['signature'] },
      { name: 'Pesarattu', price: '$10' },
      { name: 'Onion Pesarattu', price: '$11' },
    ],
  },
  {
    id: 'starters',
    name: 'Praarambham — Starters',
    sub: 'Before the meal, something to wake up the palate.',
    icon: 'fa-pepper-hot',
    items: [
      { name: 'Mirchi Bajji', price: '$8', tags: ['spicy'] },
      { name: 'Cut Mirchi', price: '$10', tags: ['spicy'] },
      { name: 'Onion Pakoda', price: '$10' },
      { name: 'Mokka Jonna Garelu', price: '$11' },
      { name: 'Saggubiyyam Vada', price: '$11' },
      { name: 'Thotakura Liver Fry', price: '$12' },
      { name: 'Jeedipappu Mushroom Fry', price: '$12' },
      { name: 'Crispy Corn', price: '$12' },
      { name: 'Palnadu Paneer Vepudu', price: '$12', tags: ['spicy'] },
      { name: 'Perugu Vankaya Bajji', price: '$10' },
      { name: 'Barbeque Chilli Mushroom', price: '$10' },
      { name: 'Veg Cigar Rolls', price: '$11' },
      { name: 'Sweet Chilli Lotus Stem', price: '$10' },
    ],
  },
  {
    id: 'tandoor',
    name: 'Tandoor & Tikka Specials',
    sub: 'Charred over clay fire, finished with fresh lime and chaat masala.',
    icon: 'fa-fire',
    items: [
      { name: 'Amrutham Veg Tikka', price: '$10', tags: ['signature'] },
      { name: 'Palamuru Paneer Tikka', price: '$10' },
      { name: 'Veg Sheekh Kebab', price: '$12' },
      { name: 'Assorted Veg Platter', price: '$15', tags: ['signature'] },
    ],
  },
  {
    id: 'thalis',
    name: 'Amrutham Signature Thalis',
    sub: 'Walking museums of flavour on one tray.',
    icon: 'fa-utensils',
    items: [
      { name: 'Mini Thali', price: '$12' },
      { name: 'South Indian Veg Thali (Poori/Chapathi)', price: '$14' },
      { name: 'Punjabi / Gujarathi Thali', price: '$14' },
      { name: 'Amrutham Special Thali', price: '$16', tags: ['signature'] },
    ],
  },
  {
    id: 'rice',
    name: 'Rice, Pulav & Biryani',
    sub: 'Layered by hand in sealed handi pots.',
    icon: 'fa-bowl-rice',
    items: [
      { name: 'Veg Biryani', price: '$12' },
      { name: 'Nethi Vankaya Pulav', price: '$12' },
      { name: 'Cashew Paneer Biryani', price: '$14' },
      { name: 'Avakaya Bundi Pulav', price: '$10' },
      { name: 'Chitti Muthyala Mushroom Biryani', price: '$12', tags: ['signature'] },
      { name: 'Chettinadu Veg Pulav', price: '$11', tags: ['spicy'] },
    ],
  },
  {
    id: 'regionals',
    name: 'Amrutham Regionals — Andhra & Telangana',
    sub: 'Recipes from the grandmother\'s notebook.',
    icon: 'fa-map-location-dot',
    items: [
      { name: 'Gutti Vankaya Kura', price: '$12', tags: ['signature'] },
      { name: 'Bagara Baingan', price: '$12' },
      { name: 'Potato Ullikaram', price: '$10', tags: ['spicy'] },
      { name: 'Okra Pulusu', price: '$10' },
      { name: 'Veg Kurma', price: '$10' },
      { name: 'Cashew Mushroom Curry', price: '$12' },
      { name: 'Paneer Butter Masala', price: '$10' },
      { name: 'Avakaya Pappu Thalimpu', price: '$10', tags: ['spicy'] },
      { name: 'Dal Makhani', price: '$8' },
      { name: 'Jeedipappu Thotakura Liver Kura', price: '$12' },
      { name: 'Pachi Pulusu', price: '$6' },
    ],
  },
  {
    id: 'indo-chinese',
    name: 'Indo-Chinese Fusion',
    sub: 'The late-night menu of every Indian hostel, reimagined.',
    icon: 'fa-bowl-food',
    items: [
      { name: 'Veg Manchurian (Dry/Gravy)', price: '$10' },
      { name: 'Gobi Manchurian', price: '$11' },
      { name: 'Paneer Chilli', price: '$12', tags: ['spicy'] },
      { name: 'Hakka Noodles', price: '$12' },
      { name: 'Schezwan Noodles', price: '$12', tags: ['spicy'] },
      { name: 'Veg Fried Rice', price: '$11' },
      { name: 'Schezwan Fried Rice', price: '$12', tags: ['spicy'] },
    ],
  },
  {
    id: 'addons',
    name: 'Rice, Bread & Add-ons',
    sub: 'The supporting cast.',
    icon: 'fa-bread-slice',
    items: [
      { name: 'Steam Rice', price: '$4' },
      { name: 'Ragi Sankati', price: '$8' },
      { name: 'Phulka (2 pcs)', price: '$5' },
      { name: 'Parotta (2 pcs)', price: '$8' },
      { name: 'Appam (2 pcs)', price: '$3' },
      { name: 'Idiappam (3 pcs)', price: '$9' },
      { name: 'Sambar', price: '$3' },
      { name: 'Rasam', price: '$3' },
    ],
  },
  {
    id: 'drinks',
    name: 'Mocktails & Beverages',
    sub: 'Cool, fizzy, chilled or hot — pick your weather.',
    icon: 'fa-glass-water',
    items: [
      { name: 'Virgin Mojito', price: '$8' },
      { name: 'Mango Mule', price: '$8' },
      { name: 'Kokum Cooler', price: '$7' },
      { name: 'Fresh Lime Soda', price: '$7' },
      { name: 'Buttermilk', price: '$5' },
      { name: 'Filter Coffee', price: '$3', tags: ['signature'] },
      { name: 'Masala Chai', price: '$3' },
      { name: 'Soda', price: '$2' },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    sub: 'The sweet closing bow.',
    icon: 'fa-cookie-bite',
    items: [
      { name: 'Gulab Jamoon', price: '$6' },
      { name: 'Rice Kheer', price: '$6' },
      { name: 'Brownie with Ice Cream', price: '$8' },
      { name: 'Apricot Delight', price: '$10' },
      { name: 'Putharekulu with Ice Cream', price: '$10', tags: ['signature'] },
      { name: 'Pot Junnu', price: '$8' },
      { name: 'Fried Ice Cream', price: '$10' },
    ],
  },
  {
    id: 'chaat',
    name: 'Indian Homemade Snacks & Chaat',
    sub: 'Street-cart flavours, dining-room clean.',
    icon: 'fa-cow',
    items: [
      { name: 'Pani Puri', price: '$8' },
      { name: 'Masala Puri', price: '$10' },
      { name: 'Dahi Puri', price: '$10' },
      { name: 'Samosa Chaat', price: '$11' },
    ],
  },
  {
    id: 'crunchies',
    name: 'Homestyle Crunchies',
    sub: 'Small, crisp, made-to-order.',
    icon: 'fa-seedling',
    items: [
      { name: 'Vijawada Chitti Punugulu', price: '$8', tags: ['signature'] },
      { name: 'Mysore Bonda', price: '$8' },
      { name: 'Mirchi Bajji', price: '$8', tags: ['spicy'] },
      { name: 'Cut Mirchi', price: '$10', tags: ['spicy'] },
      { name: 'Onion Pakodi', price: '$8' },
    ],
  },
]

const totalCount = MENU.reduce((n, c) => n + c.items.length, 0)

export const Menu = () => (
  <>
    <div class="container menu-layout">
      <aside class="menu-sidebar" id="menuSidebar">
        <input class="menu-search" id="menuSearch" type="search" placeholder="Search dishes…" aria-label="Search menu" />
        <div class="menu-toggle-group" role="group" aria-label="Dietary filter">
          <button type="button" class="mf-toggle active" data-toggle="all">ALL</button>
          <button type="button" class="mf-toggle" data-toggle="signature">SIGNATURE</button>
          <button type="button" class="mf-toggle" data-toggle="spicy">SPICY</button>
        </div>
        <h3>Categories</h3>
        <ul class="menu-filter-list">
          <li><button type="button" class="mf-cat active" data-cat="all">
            <span><i class="fas fa-list"></i>&nbsp; All dishes</span>
            <span class="count">{totalCount}</span>
          </button></li>
          {MENU.map(cat => (
            <li><button type="button" class="mf-cat" data-cat={cat.id}>
              <span><i class={`fas ${cat.icon}`}></i>&nbsp; {cat.name.split('—')[0].trim()}</span>
              <span class="count">{cat.items.length}</span>
            </button></li>
          ))}
        </ul>
      </aside>

      <main class="menu-main">
        <div style={{ marginBottom: '32px' }}>
          <span class="section-eyebrow">The Menu</span>
          <h1 class="section-title">Every dish, explained</h1>
          <p class="section-lede">100% pure vegetarian. All prices in USD. Ask your server about mild-spice adjustments.</p>
        </div>

        {MENU.map(cat => (
          <section class="menu-category" id={`cat-${cat.id}`} data-cat={cat.id}>
            <h2><i class={`fas ${cat.icon}`} style={{ color: 'var(--brand-gold-deep)' }}></i> {cat.name}</h2>
            {cat.sub && <p class="cat-sub">{cat.sub}</p>}
            <div class="menu-items-grid">
              {cat.items.map(it => (
                <article class="menu-item" data-name={it.name.toLowerCase()} data-tags={(it.tags || []).join(',')}>
                  <div class="mi-info">
                    <h4>{it.name}</h4>
                    {it.desc && <p>{it.desc}</p>}
                    {(it.tags || []).map(t => (
                      <span class={`mi-badge ${t}`}>{t}</span>
                    ))}
                  </div>
                  <div class="mi-price">{it.price}</div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>

    {/* Menu interactivity — filter + search */}
    <script dangerouslySetInnerHTML={{ __html: `
      (function(){
        const search = document.getElementById('menuSearch');
        const cats = document.querySelectorAll('.mf-cat');
        const toggles = document.querySelectorAll('.mf-toggle');
        let activeCat = 'all';
        let activeTag = 'all';
        let query = '';

        function apply(){
          document.querySelectorAll('.menu-category').forEach(section => {
            const cat = section.getAttribute('data-cat');
            const items = section.querySelectorAll('.menu-item');
            let visible = 0;
            items.forEach(it => {
              const name = it.getAttribute('data-name') || '';
              const tags = (it.getAttribute('data-tags') || '').split(',');
              const catOk = activeCat === 'all' || activeCat === cat;
              const tagOk = activeTag === 'all' || tags.includes(activeTag);
              const searchOk = !query || name.includes(query);
              const ok = catOk && tagOk && searchOk;
              it.style.display = ok ? '' : 'none';
              if(ok) visible++;
            });
            section.style.display = visible ? '' : 'none';
          });
        }

        cats.forEach(btn => btn.addEventListener('click', () => {
          cats.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          activeCat = btn.getAttribute('data-cat');
          if(activeCat !== 'all'){
            const el = document.getElementById('cat-' + activeCat);
            if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
          }
          apply();
        }));
        toggles.forEach(btn => btn.addEventListener('click', () => {
          toggles.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          activeTag = btn.getAttribute('data-toggle');
          apply();
        }));
        search.addEventListener('input', e => {
          query = (e.target.value || '').toLowerCase().trim();
          apply();
        });
      })();
    ` }} />
  </>
)
