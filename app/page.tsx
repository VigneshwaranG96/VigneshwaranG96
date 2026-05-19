'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 }
};

const menu = [
  { title: 'Northern Tasting', detail: '8-course seasonal narrative', price: '€195' },
  { title: 'Wine Pairing', detail: 'Cellar-led Finnish + Old World pairing', price: '€145' },
  { title: 'Seasonal Dishes', detail: 'Wild herbs, archipelago fish, forest game', price: 'From €34' },
  { title: 'Chef Specialties', detail: 'Signature smoked butter brioche & king crab', price: 'From €42' }
];

const testimonials = [
  'An immaculate Helsinki dining address with graceful service and extraordinary restraint.',
  'Every course felt sculpted — clean, poetic, and deeply Nordic.',
  'The atmosphere is serene luxury; warm lighting, perfect pace, unforgettable flavors.'
];

const gallery = [
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=80'
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleReservation = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <main className={isDark ? 'dark bg-[#171715] text-[#ece8df]' : ''}>
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2200&q=80"
          alt="Fine dining ambience in Helsinki"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/35 to-black/60" />
        <div className="absolute right-6 top-6 z-20">
          <button
            onClick={() => setIsDark((prev) => !prev)}
            className="glass rounded-full px-4 py-2 text-xs tracking-[0.16em]"
            aria-label="Toggle light and dark theme"
          >
            {isDark ? 'LIGHT' : 'DARK'}
          </button>
        </div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto flex min-h-screen w-[min(1200px,92vw)] flex-col items-start justify-center gap-8 text-warmWhite"
        >
          <p className="text-xs uppercase tracking-[0.36em] text-beige">Trillby & Chadwick · Helsinki</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
            A Nordic Dining Experience in the Heart of Helsinki
          </h1>
          <a href="#reservation" className="rounded-full border border-beige/60 px-8 py-3 text-sm tracking-[0.2em] transition hover:bg-warmWhite hover:text-charcoal">
            Reserve a Table
          </a>
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-xs uppercase tracking-[0.24em] text-warmWhite/75"
        >
          Scroll
        </motion.div>
      </section>

      <section className="section-shell grid gap-14 md:grid-cols-2">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">About</p>
          <h2 className="font-serif text-4xl md:text-5xl">Crafted by Nordic Seasons</h2>
        </motion.div>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.9 }} className="leading-relaxed text-[1.05rem] text-charcoal/80 dark:text-[#ece8df]/80">
          Rooted in Helsinki culture, Trillby & Chadwick celebrates Finnish culinary heritage with modern precision. Our kitchen follows the rhythm of forests, archipelago waters, and northern farms. Each service blends seasonal ingredients, Nordic craftsmanship, and heartfelt hospitality into a serene fine dining journey.
        </motion.p>
      </section>

      <section className="section-shell">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Signature Menu Experience</p>
        <div className="grid gap-6 md:grid-cols-2">
          {menu.map((item, i) => (
            <motion.article
              key={item.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass rounded-2xl border border-beige/35 p-8 shadow-soft transition hover:-translate-y-1"
            >
              <h3 className="font-serif text-3xl">{item.title}</h3>
              <p className="mt-3 text-sm uppercase tracking-[0.14em] text-charcoal/70 dark:text-[#ece8df]/70">{item.detail}</p>
              <p className="mt-6 text-lg text-gold">{item.price}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
        <Image src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80" alt="Chef portrait in monochrome style" width={900} height={1200} className="h-[520px] w-full rounded-2xl object-cover grayscale" />
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Chef Experience</p>
          <h2 className="font-serif text-4xl md:text-5xl">Scandinavian Food Artistry</h2>
          <p className="mt-6 leading-relaxed text-charcoal/80 dark:text-[#ece8df]/80">
            Our chef philosophy is editorial in spirit: reduce noise, honor ingredients, and frame each plate with intention. Expect clear flavors, refined techniques, and thoughtful storytelling inspired by Nordic landscapes.
          </p>
        </div>
      </section>

      <section className="section-shell">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-gold">Ambience Gallery</p>
        <div className="grid gap-4 md:grid-cols-2">
          {gallery.map((src) => (
            <div key={src} className="group relative overflow-hidden rounded-2xl">
              <Image src={src} alt="Trillby and Chadwick ambience" width={1200} height={900} className="h-80 w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/15 opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>

      <section id="reservation" className="section-shell grid gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Reservation Experience</p>
          <h2 className="font-serif text-4xl md:text-5xl">Book Your Evening</h2>
          <p className="mt-4 text-charcoal/75 dark:text-[#ece8df]/75">An elegant booking flow for an intimate Helsinki service.</p>
        </div>
        <form onSubmit={handleReservation} className="glass rounded-2xl border border-beige/40 p-8 shadow-soft">
          <div className="grid gap-4">
            <input required type="date" className="rounded-lg border border-beige/50 bg-transparent px-4 py-3" />
            <input required type="time" className="rounded-lg border border-beige/50 bg-transparent px-4 py-3" />
            <select required className="rounded-lg border border-beige/50 bg-transparent px-4 py-3">
              <option value="">Guests</option>
              {[2, 4, 6, 8].map((n) => <option key={n}>{n} Guests</option>)}
            </select>
            <button className="mt-2 rounded-full bg-charcoal px-6 py-3 text-sm tracking-[0.18em] text-warmWhite transition hover:bg-black dark:bg-[#ece8df] dark:text-charcoal">
              Confirm Reservation
            </button>
            {confirmed && <p className="text-sm text-gold">Reservation request sent. We look forward to welcoming you.</p>}
          </div>
        </form>
      </section>

      <section className="section-shell">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-gold">Guest Impressions</p>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((quote) => (
            <motion.blockquote key={quote} whileHover={{ y: -4 }} className="rounded-2xl border border-beige/40 p-6 leading-relaxed">
              “{quote}”
            </motion.blockquote>
          ))}
        </div>
      </section>

      <section className="section-shell grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-beige/40 p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-gold">Location</p>
          <h3 className="mt-3 font-serif text-3xl">Eteläranta 7, Helsinki</h3>
          <p className="mt-4 text-charcoal/75 dark:text-[#ece8df]/75">Mon–Thu 17:00–23:00 · Fri–Sat 17:00–00:00 · Sun Closed</p>
          <p className="mt-2 text-charcoal/75 dark:text-[#ece8df]/75">+358 9 123 4567 · reservations@trillbychadwick.fi</p>
        </div>
        <div className="glass flex min-h-60 items-center justify-center rounded-2xl border border-beige/35 p-8 text-center text-sm uppercase tracking-[0.24em] text-charcoal/70 dark:text-[#ece8df]/70">
          Minimal Helsinki Map<br />South Harbour District
        </div>
      </section>

      <footer className="bg-charcoal py-12 text-warmWhite dark:bg-black">
        <div className="mx-auto flex w-[min(1200px,92vw)] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-serif text-3xl">Trillby & Chadwick</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-warmWhite/70">Nordic luxury hospitality</p>
          </div>
          <div className="flex gap-6 text-sm uppercase tracking-[0.16em] text-warmWhite/80">
            <a href="#reservation">Reserve</a>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
