import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import DishImage from "./components/DishImage";

const photo = (id: string, width: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=70`;

const features = [
  {
    title: "Tandoor-fired",
    text: "Kebabs and breads cooked over live coal in a clay tandoor.",
  },
  {
    title: "Freshly ground spices",
    text: "Our masalas are ground in-house, every single morning.",
  },
  {
    title: "Veg and non-veg",
    text: "A full menu for every table, from family lunches to late dinners.",
  },
];

const menu = [
  {
    category: "Starters",
    items: [
      {
        name: "Paneer Tikka",
        desc: "Charred cottage cheese, mint chutney",
        price: "₹320",
        veg: true,
      },
      {
        name: "Hara Bhara Kebab",
        desc: "Spinach and green pea patties",
        price: "₹290",
        veg: true,
      },
      {
        name: "Chicken 65",
        desc: "Crisp, spiced, curry leaf tempering",
        price: "₹360",
        veg: false,
      },
      {
        name: "Mutton Seekh Kebab",
        desc: "Minced mutton, tandoor grilled",
        price: "₹480",
        veg: false,
      },
    ],
  },
  {
    category: "Biryani and Mains",
    items: [
      {
        name: "Veg Dum Biryani",
        desc: "Seasonal vegetables, saffron rice",
        price: "₹340",
        veg: true,
      },
      {
        name: "Chicken Dum Biryani",
        desc: "Slow cooked, sealed with dough",
        price: "₹420",
        veg: false,
      },
      {
        name: "Dal Makhani",
        desc: "Black lentils simmered overnight",
        price: "₹300",
        veg: true,
      },
      {
        name: "Kadai Paneer",
        desc: "Peppers, onions, roasted spices",
        price: "₹360",
        veg: true,
      },
      {
        name: "Butter Chicken",
        desc: "Tandoori chicken in tomato cream",
        price: "₹440",
        veg: false,
      },
    ],
  },
  {
    category: "Breads and Sweets",
    items: [
      {
        name: "Butter Naan",
        desc: "Soft, blistered in the tandoor",
        price: "₹70",
        veg: true,
      },
      {
        name: "Garlic Naan",
        desc: "Fresh garlic and coriander",
        price: "₹90",
        veg: true,
      },
      {
        name: "Malabar Parotta",
        desc: "Flaky, layered, griddle cooked",
        price: "₹60",
        veg: true,
      },
      {
        name: "Gulab Jamun",
        desc: "Two pieces, warm sugar syrup",
        price: "₹140",
        veg: true,
      },
      {
        name: "Rasmalai",
        desc: "Cottage cheese discs in saffron milk",
        price: "₹180",
        veg: true,
      },
    ],
  },
];

const specials = [
  {
    name: "Chicken Dum Biryani",
    tag: "Most loved",
    price: "₹420",
    desc: "Slow cooked, sealed with dough",
    image: "/images/menu/chicken-biryani.jpg",
    emoji: "🍛",
  },
  {
    name: "Butter Chicken",
    tag: "Chef special",
    price: "₹440",
    desc: "Tandoori chicken in tomato cream",
    image: "/images/menu/butter-chicken.jpg",
    emoji: "🍗",
  },
  {
    name: "Paneer Tikka",
    tag: "Veg favourite",
    price: "₹320",
    desc: "Charred cottage cheese, mint chutney",
    image: "/images/menu/paneer-tikka.jpg",
    emoji: "🍢",
  },
  {
    name: "Gulab Jamun",
    tag: "Sweet ending",
    price: "₹140",
    desc: "Two pieces, warm sugar syrup",
    image: "/images/menu/gulab-jamun.jpg",
    emoji: "🍮",
  },
];

const socialClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition hover:border-saffron hover:text-saffron";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-cream">
      <Header />

      {/* Hero */}
      <section id="home" className="relative overflow-hidden pt-24 sm:pt-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-chilli/25 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:pb-24">
          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-saffron">
              Modern Indian Kitchen · Bengaluru
            </p>

            <h1 className="font-display text-4xl font-bold leading-[1.12] sm:text-5xl lg:text-7xl">
              Where the tandoor{" "}
              <span className="text-saffron">meets tradition.</span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-cream/75 sm:text-base sm:leading-8">
              Smoky kebabs, slow cooked biryani and warm hospitality. Come
              hungry, bring family, and stay for dessert.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#menu"
                className="rounded-full bg-saffron px-8 py-4 text-center text-sm font-semibold text-ink transition hover:bg-cream"
              >
                View Menu
              </a>
              <a
                href="#reservation"
                className="rounded-full border border-cream/40 px-8 py-4 text-center text-sm font-semibold text-cream transition hover:border-saffron hover:text-saffron"
              >
                Book a Table
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-cream/70">
              <li>🕛 Open daily 12 PM – 11 PM</li>
              <li>🌿 Veg and non-veg</li>
              <li>👨‍👩‍👧 Family friendly</li>
            </ul>
          </div>

          <div className="mx-auto w-full max-w-sm md:max-w-none">
            <div className="group rounded-t-[200px] rounded-b-3xl border-2 border-saffron/40 p-2">
              <div className="overflow-hidden rounded-t-[192px] rounded-b-2xl">
                <img
                  src={photo("photo-1414235077428-338989a2e8c0", 800)}
                  alt="Warmly lit restaurant dining room"
                  width={800}
                  height={1000}
                  fetchPriority="high"
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-chilli px-5 py-12 text-cream sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 text-center sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title}>
              <h3 className="font-display text-xl font-bold text-saffron">
                {feature.title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-cream/85">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section
        id="story"
        className="bg-cream px-5 py-20 text-ink sm:px-8 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-chilli">
              Our Story
            </p>

            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Food that tastes like
              <br />
              someone cooked it for you.
            </h2>

            <p className="mt-6 text-sm leading-7 text-ink/70 sm:text-base sm:leading-8">
              Ember &amp; Olive started with a simple idea: honest Indian food,
              cooked slowly, served generously. Our kitchen blends classic
              recipes from across the country with fresh local produce.
            </p>

            <p className="mt-4 text-sm leading-7 text-ink/70 sm:text-base sm:leading-8">
              Whether it is a quick lunch, a family birthday or a late dinner
              with friends, every table gets the same care.
            </p>

            <a
              href="#menu"
              className="mt-8 inline-block rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-chilli"
            >
              See what is cooking
            </a>
          </div>

          <div className="order-1 md:order-2">
            <div className="group rounded-3xl bg-saffron p-2.5">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={photo("photo-1517248135467-4c7edcad34c4", 900)}
                  alt="Cosy restaurant interior"
                  width={900}
                  height={700}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="bg-char px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-saffron">
              From Our Kitchen
            </p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              The Menu
            </h2>
            <p className="mt-4 text-sm text-cream/60">
              Sample menu and prices.{" "}
              <span className="whitespace-nowrap">
                <span className="mr-1 inline-block h-2 w-2 rounded-full bg-green-500" />
                Veg
              </span>{" "}
              <span className="whitespace-nowrap">
                <span className="mr-1 inline-block h-2 w-2 rounded-full bg-red-500" />
                Non-veg
              </span>
            </p>
          </div>

          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-saffron">
            {"Chef's Specials"}
          </p>

          <div className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {specials.map((dish) => (
              <article
                key={dish.name}
                className="group overflow-hidden rounded-3xl border border-saffron/15 bg-ink/60 transition duration-500 hover:-translate-y-1 hover:border-saffron/50"
              >
                <DishImage
                  src={dish.image}
                  alt={dish.name}
                  emoji={dish.emoji}
                />
                <div className="p-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#ff8a65]">
                    {dish.tag}
                  </p>
                  <div className="mt-2 flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl font-bold">
                      {dish.name}
                    </h3>
                    <span className="shrink-0 text-sm font-semibold text-saffron">
                      {dish.price}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-cream/55">
                    {dish.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-saffron">
            Full Menu
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {menu.map((group) => (
              <div
                key={group.category}
                className="rounded-3xl border border-saffron/15 bg-ink/60 p-6 sm:p-8"
              >
                <h3 className="font-display text-2xl font-bold text-saffron">
                  {group.category}
                </h3>

                <ul className="mt-6 space-y-5">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-start gap-3">
                        <span
                          className={`mt-1.5 inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center border ${
                            item.veg ? "border-green-500" : "border-red-500"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              item.veg ? "bg-green-500" : "bg-red-500"
                            }`}
                          />
                          <span className="sr-only">
                            {item.veg ? "Vegetarian" : "Non-vegetarian"}
                          </span>
                        </span>

                        <div className="flex-1">
                          <div className="flex items-baseline justify-between gap-3">
                            <h4 className="text-base font-medium">
                              {item.name}
                            </h4>
                            <span className="shrink-0 text-sm font-semibold text-saffron">
                              {item.price}
                            </span>
                          </div>
                          <p className="mt-1 text-xs leading-5 text-cream/55">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        className="bg-cream px-5 py-20 text-ink sm:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-chilli">
              The Ambience
            </p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              A Place to Gather
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <figure className="group overflow-hidden rounded-3xl">
              <div className="overflow-hidden">
                <img
                  src={photo("photo-1514933651103-005eec06c04b", 800)}
                  alt="Restaurant dining space"
                  width={800}
                  height={640}
                  loading="lazy"
                  className="aspect-[5/4] w-full object-cover transition duration-700 group-hover:scale-110 motion-reduce:transition-none"
                />
              </div>
              <figcaption className="bg-white/60 px-5 py-4 font-display text-lg font-bold">
                The Dining Room
              </figcaption>
            </figure>

            <figure className="group overflow-hidden rounded-3xl">
              <div className="overflow-hidden">
                <img
                  src={photo("photo-1547592180-85f173990554", 800)}
                  alt="Freshly prepared food"
                  width={800}
                  height={640}
                  loading="lazy"
                  className="aspect-[5/4] w-full object-cover transition duration-700 group-hover:scale-110 motion-reduce:transition-none"
                />
              </div>
              <figcaption className="bg-white/60 px-5 py-4 font-display text-lg font-bold">
                Freshly Prepared
              </figcaption>
            </figure>

            <div className="flex flex-col justify-center rounded-3xl bg-chilli p-8 text-cream sm:col-span-2 lg:col-span-1">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-saffron">
                Celebrations
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold">
                Birthdays, anniversaries and family get-togethers
              </h3>
              <p className="mt-3 text-sm leading-6 text-cream/85">
                Tell us the occasion and the number of guests. We will set up
                the table and plan the menu with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation */}
      <section
        id="reservation"
        className="bg-saffron px-5 py-16 text-center text-ink sm:px-8 md:py-20"
      >
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-chilli-dark">
          Your Table Awaits
        </p>
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Planning a family dinner or a celebration?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ink/75 sm:text-base">
          Send us a quick enquiry and our team will get back to you to confirm
          your table.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block rounded-full bg-ink px-9 py-4 text-sm font-semibold text-cream transition hover:bg-chilli"
        >
          Make an Enquiry
        </a>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-sand px-5 py-20 text-ink sm:px-8 md:py-28"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-chilli">
              Come Visit Us
            </p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              We would love to see you.
            </h2>
          </div>

          <div className="grid gap-5 text-center sm:grid-cols-3">
            <div className="rounded-2xl bg-white/60 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-chilli">
                Find Us
              </p>
              <p className="mt-3 text-sm leading-7 text-ink/75">
                Sample Address, Indiranagar
                <br />
                Bengaluru, Karnataka
              </p>
            </div>

            <div className="rounded-2xl bg-white/60 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-chilli">
                Opening Hours
              </p>
              <p className="mt-3 text-sm leading-7 text-ink/75">
                Monday – Sunday
                <br />
                12:00 PM – 11:00 PM
              </p>
            </div>

            <div className="rounded-2xl bg-white/60 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-chilli">
                Get in Touch
              </p>
              <p className="mt-3 text-sm leading-7 text-ink/75">
                Use the form below and
                <br />
                we will reply soon.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-cream/10 pb-10 text-center md:grid-cols-3 md:text-left">
            <div>
              <h2 className="font-display text-2xl font-bold">
                Ember <span className="text-saffron">&</span> Olive
              </h2>
              <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-cream/55 md:mx-0">
                Modern Indian kitchen in Bengaluru. Good food, warm moments.
              </p>

              <div className="mt-6 flex justify-center gap-3 md:justify-start">
                <a href="#" aria-label="Instagram" className={socialClass}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                  </svg>
                </a>
                <a href="#" aria-label="Facebook" className={socialClass}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.6V13h2.8v8h3.1z" />
                  </svg>
                </a>
                <a href="#" aria-label="WhatsApp" className={socialClass}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M12 2a9.9 9.9 0 0 0-8.5 15l-1 4 4.1-1.1A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.4.6.6-2.3-.2-.4A8 8 0 1 1 12 20Zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.8 3.4.5.2.9.4 1.2.4.5.2 1 .2 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
                Explore
              </h3>
              <div className="flex flex-col gap-3 text-sm text-cream/60">
                <a href="#home" className="transition hover:text-saffron">
                  Home
                </a>
                <a href="#story" className="transition hover:text-saffron">
                  Our Story
                </a>
                <a href="#menu" className="transition hover:text-saffron">
                  Menu
                </a>
                <a href="#gallery" className="transition hover:text-saffron">
                  Gallery
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
                Visit
              </h3>
              <div className="flex flex-col gap-3 text-sm text-cream/60">
                <p>Indiranagar, Bengaluru</p>
                <p>Open daily, 12 PM – 11 PM</p>
                <a href="#contact" className="transition hover:text-saffron">
                  Make an enquiry
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 pt-8 text-center text-xs text-cream/40 md:flex-row">
            <p>© 2026 Ember &amp; Olive. All rights reserved.</p>
            <p className="text-saffron/80">Demo website · Sample content</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
