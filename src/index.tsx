import { Hono } from 'hono'
import { renderer } from './renderer'
import { Page } from './components/layout'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Menu } from './pages/menu'
import { Reserve } from './pages/reserve'
import { Contact } from './pages/contact'
import { Catering } from './pages/catering'
import { Events } from './pages/events'

const app = new Hono()
app.use(renderer)

app.get('/', (c) => c.render(<Page current="/"><Home /></Page>))
app.get('/about', (c) => c.render(<Page current="/about"><About /></Page>))
app.get('/menu', (c) => c.render(<Page current="/menu"><Menu /></Page>))
app.get('/reserve', (c) => c.render(<Page current="/reserve"><Reserve /></Page>))
app.get('/contact', (c) => c.render(<Page current="/contact"><Contact /></Page>))
app.get('/catering', (c) => c.render(<Page current="/catering"><Catering /></Page>))
app.get('/events', (c) => c.render(<Page current="/events"><Events /></Page>))

// Ordering stubs — redirect to menu for now; swap in real flows later.
app.get('/pickup', (c) => c.redirect('/menu'))
app.get('/delivery', (c) => c.redirect('/menu'))
app.get('/gift-cards', (c) => c.redirect('/contact'))
app.get('/faqs', (c) => c.redirect('/contact#faq'))

export default app
