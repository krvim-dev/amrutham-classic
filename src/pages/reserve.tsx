// Reserve page — per Excel feedback:
//  • Banner: no logo, new relevant copy
//  • "Live table availability" section removed
//  • Form POSTs to FormSubmit → forwards to amruthamauthentics@atomicmail.io
//  • Success banner shown when ?submitted=1 is in the URL (FormSubmit redirect)

const FORMSUBMIT_URL = 'https://formsubmit.co/amruthamauthentics@atomicmail.io'

export const Reserve = () => (
  <>
    <section class="reserve-hero">
      <div class="container">
        <span class="section-eyebrow">Reserve a Table</span>
        <h1>Hold a chair at our table</h1>
        <p>
          Weekend evenings book up quickly. Tell us when you'd like to come, how many chairs to set,
          and whether anything at the table needs a quiet adjustment — we'll confirm within the hour.
        </p>
      </div>
    </section>

    <section class="section">
      <div id="reserveSuccess" class="form-success-banner" style={{ display: 'none' }}>
        <i class="fas fa-check-circle"></i>
        <div>
          <strong>Reservation request received.</strong>
          <div>We've got your details and will confirm within the hour. A copy has been sent to your email.</div>
        </div>
      </div>

      <form class="reserve-form" id="reserveForm" action={FORMSUBMIT_URL} method="POST">
        {/* FormSubmit config (hidden) */}
        <input type="hidden" name="_subject" value="New reservation request — Amrutham Authentics" />
        <input type="hidden" name="_captcha" value="true" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" id="reserveNext" value="" />
        <input type="text" name="_honey" style={{ display: 'none' }} tabindex={-1} autocomplete="off" />

        <div class="form-row">
          <div class="form-field">
            <label for="r-name">Full Name</label>
            <input id="r-name" name="Name" type="text" required placeholder="Your name" />
          </div>
          <div class="form-field">
            <label for="r-phone">Phone</label>
            <input id="r-phone" name="Phone" type="tel" required placeholder="(___) ___-____" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-field">
            <label for="r-email">Email</label>
            <input id="r-email" name="Email" type="email" required placeholder="you@example.com" />
          </div>
          <div class="form-field">
            <label for="r-party">Party Size</label>
            <select id="r-party" name="Party Size" required>
              <option value="">Guests</option>
              {[1,2,3,4,5,6,7,8,9,10].map(n => <option>{n}</option>)}
              <option>10+</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-field">
            <label for="r-date">Date</label>
            <input id="r-date" name="Date" type="date" required />
          </div>
          <div class="form-field">
            <label for="r-time">Time</label>
            <select id="r-time" name="Time" required>
              <option value="">Select a time</option>
              <option>11:30 AM</option><option>12:00 PM</option><option>12:30 PM</option>
              <option>1:00 PM</option><option>1:30 PM</option><option>6:00 PM</option>
              <option>6:30 PM</option><option>7:00 PM</option><option>7:30 PM</option>
              <option>8:00 PM</option><option>8:30 PM</option><option>9:00 PM</option>
            </select>
          </div>
        </div>
        <div class="form-field" style={{ marginBottom: '18px' }}>
          <label for="r-area">Seating Preference</label>
          <select id="r-area" name="Seating Preference">
            <option>No preference</option>
            <option>Window</option>
            <option>Quiet corner</option>
            <option>Near the kitchen</option>
          </select>
        </div>
        <div class="form-field" style={{ marginBottom: '24px' }}>
          <label for="r-notes">Notes for the kitchen</label>
          <textarea id="r-notes" name="Notes" placeholder="Allergies, occasion, accessibility needs — anything we should know."></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
          <i class="fas fa-calendar-check"></i> Request Reservation
        </button>
      </form>
    </section>

    <section class="section section--band section--tight">
      <div class="container section-head--center">
        <h2 class="section-title" style={{ fontSize: '1.6rem' }}>Planning something larger?</h2>
        <p class="section-lede">Parties of 10+ or private buyouts are handled by our Events team.</p>
        <div style={{ marginTop: '20px' }}>
          <a href="/events" class="btn btn-secondary"><i class="fas fa-calendar-alt"></i> Private Events</a>
        </div>
      </div>
    </section>

    {/* Runtime: set the FormSubmit _next redirect to this page + ?submitted=1,
        and show the success banner if we just came back from a submission. */}
    <script dangerouslySetInnerHTML={{ __html: `
      (function(){
        const nextInput = document.getElementById('reserveNext');
        if (nextInput) nextInput.value = window.location.origin + '/reserve?submitted=1';
        if (new URLSearchParams(window.location.search).get('submitted') === '1') {
          const banner = document.getElementById('reserveSuccess');
          const form = document.getElementById('reserveForm');
          if (banner) banner.style.display = 'flex';
          if (form) form.style.display = 'none';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      })();
    ` }} />
  </>
)
