import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Amrutham Authentics — Pure-Vegetarian Indian Restaurant, Sayreville NJ</title>
        <meta name="description" content="Amrutham Authentics — regional Andhra &amp; Telangana cuisine, slow-cooked and pure vegetarian. Reservations, catering and private events in Sayreville, New Jersey." />
        <meta name="theme-color" content="#4a2c1a" />

        {/* Fonts — Playfair Display for headings, Figtree for body */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Figtree:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Font Awesome */}
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />

        <link href="/static/style.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
})
