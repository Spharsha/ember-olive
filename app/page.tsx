import Header from "./components/Header";
import ContactForm from "./components/ContactForm";

const dishes = [
  {
    name: "Herb Butter Steak",
    category: "CHEF'S SPECIAL",
    price: "₹1,250",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Truffle Cream Pasta",
    category: "SIGNATURE PASTA",
    price: "₹850",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Classic Garden Salad",
    category: "FRESH & LIGHT",
    price: "₹550",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f0e6] text-[#102019]">
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-screen items-center bg-cover bg-center px-6 pt-28 text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,20,15,0.55), rgba(10,20,15,0.7)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=90')",
        }}
      >
        <div className="mx-auto w-full max-w-7xl py-24">
          <p className="mb-6 text-xs tracking-[0.4em] text-[#d6b77c]">
            AN EXPERIENCE BEYOND DINING
          </p>

          <h1 className="max-w-4xl font-serif text-5xl leading-tight md:text-7xl lg:text-8xl">
            A Taste of
            <br />
            <span className="italic text-[#d6b77c]">Something</span> Special.
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-8 text-white/75 md:text-base">
            Discover thoughtfully crafted dishes, warm hospitality, and
            unforgettable moments at Ember & Olive.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="bg-[#c6a56b] px-8 py-4 text-xs font-semibold tracking-widest text-[#102019] transition hover:bg-white"
            >
              EXPLORE OUR MENU
            </a>

            <a
              href="#reservation"
              className="border border-white/60 px-8 py-4 text-xs tracking-widest text-white transition hover:bg-white hover:text-[#102019]"
            >
              BOOK A TABLE
            </a>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <div>
            <p className="mb-5 text-xs tracking-[0.3em] text-[#a17d42]">
              OUR STORY
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Where Every
              <br />
              Meal Becomes
              <br />a Memory.
            </h2>

            <p className="mt-8 text-sm leading-8 text-[#5d6258]">
              At Ember & Olive, we believe great food brings people together.
              Our kitchen combines fresh ingredients, thoughtful preparation,
              and a passion for memorable dining.
            </p>

            <a
              href="#menu"
              className="mt-8 inline-block border-b border-[#a17d42] pb-2 text-xs tracking-widest text-[#80602e]"
            >
              DISCOVER MORE →
            </a>
          </div>

          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
            alt="Elegant restaurant interior"
            className="h-[450px] w-full object-cover"
          />
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="bg-[#102019] px-6 py-28 text-[#f5f0e6]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-5 text-xs tracking-[0.3em] text-[#c6a56b]">
              FROM OUR KITCHEN
            </p>

            <h2 className="font-serif text-4xl md:text-6xl">
              Signature Dishes
            </h2>

            <p className="mt-5 text-sm text-white/60">
              A selection of favourites, thoughtfully prepared.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {dishes.map((dish) => (
              <div
                key={dish.name}
                className="group overflow-hidden border border-white/10 bg-[#172a21] transition duration-500 hover:-translate-y-2 hover:border-[#c6a56b]/60"
              >
                <div className="overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <p className="mb-3 text-[10px] tracking-[0.25em] text-[#c6a56b]">
                    {dish.category}
                  </p>

                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-serif text-2xl">{dish.name}</h3>

                    <span className="shrink-0 text-sm text-[#c6a56b]">
                      {dish.price}
                    </span>
                  </div>

                  <div className="mt-5 h-px w-full bg-white/10" />

                  <p className="mt-5 text-xs tracking-wide text-white/50">
                    Carefully prepared with fresh ingredients and exceptional
                    attention to flavour.
                  </p>

                  <a
                    href="#reservation"
                    className="mt-7 inline-block text-[10px] tracking-[0.2em] text-[#c6a56b] transition hover:text-white"
                  >
                    RESERVE A TABLE →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-[#f5f0e6] px-6 py-28 text-[#102019]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-5 text-xs tracking-[0.3em] text-[#a17d42]">
              THE AMBIENCE
            </p>

            <h2 className="font-serif text-4xl md:text-6xl">
              A Place to Gather
            </h2>

            <p className="mt-5 text-sm text-[#102019]/60">
              Every detail creates a memorable dining experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=85"
                  alt="Restaurant dining space"
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110 motion-safe:active:scale-105"
                />
              </div>

              <div className="flex items-center justify-between border-b border-[#102019]/20 py-5">
                <h3 className="font-serif text-xl">The Dining Room</h3>
                <span className="text-xs tracking-widest text-[#a17d42]">
                  01
                </span>
              </div>
            </div>

            <div className="group overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"
                  alt="Freshly prepared food"
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="flex items-center justify-between border-b border-[#102019]/20 py-5">
                <h3 className="font-serif text-xl">Freshly Prepared</h3>
                <span className="text-xs tracking-widest text-[#a17d42]">
                  02
                </span>
              </div>
            </div>

            <div className="group overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85"
                  alt="Fine dining experience"
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="flex items-center justify-between border-b border-[#102019]/20 py-5">
                <h3 className="font-serif text-xl">Fine Dining</h3>
                <span className="text-xs tracking-widest text-[#a17d42]">
                  03
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="bg-[#dcd3c2] px-6 py-24 text-center">
        <p className="mb-5 text-xs tracking-[0.3em] text-[#80602e]">
          YOUR TABLE AWAITS
        </p>

        <h2 className="font-serif text-4xl md:text-6xl">
          Make It a Special Evening.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#5d6258]">
          Planning a dinner or a special celebration? Get in touch with our team
          to enquire about a table.
        </p>

        <a
          href="#contact"
          className="mt-9 inline-block bg-[#102019] px-9 py-4 text-xs tracking-widest text-white transition hover:bg-[#c6a56b] hover:text-[#102019]"
        >
          MAKE AN ENQUIRY
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#f5f0e6] px-6 py-28 text-[#102019]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-5 text-xs tracking-[0.3em] text-[#a17d42]">
              COME VISIT US
            </p>

            <h2 className="font-serif text-4xl md:text-6xl">
              We'd Love to See You.
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#5d6258]">
              Contact us to plan your next dining experience.
            </p>
          </div>

          <div className="grid gap-12 border-y border-[#102019]/15 py-12 text-center md:grid-cols-3">
            <div>
              <p className="mb-4 text-[10px] tracking-[0.25em] text-[#a17d42]">
                FIND US
              </p>

              <h3 className="font-serif text-xl">Our Location</h3>

              <p className="mt-3 text-sm leading-7 text-[#5d6258]">
                Your Restaurant Address
                <br />
                Your City, India
              </p>
            </div>

            <div>
              <p className="mb-4 text-[10px] tracking-[0.25em] text-[#a17d42]">
                OPENING HOURS
              </p>

              <h3 className="font-serif text-xl">Join Us</h3>

              <p className="mt-3 text-sm leading-7 text-[#5d6258]">
                Monday – Sunday
                <br />
                12:00 PM – 11:00 PM
              </p>
            </div>

            <div>
              <p className="mb-4 text-[10px] tracking-[0.25em] text-[#a17d42]">
                GET IN TOUCH
              </p>

              <h3 className="font-serif text-xl">Say Hello</h3>

              <p className="mt-3 text-sm text-[#5d6258]">
                Use the contact form below to reach us.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="font-serif text-2xl italic">
              Good food. Good company. Beautiful moments.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#102019] px-6 py-16 text-[#f5f0e6]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-white/10 pb-12 text-center md:grid-cols-3 md:text-left">
            <div>
              <h2 className="font-serif text-2xl tracking-widest">
                EMBER <span className="text-[#c6a56b]">&</span> OLIVE
              </h2>

              <p className="mt-5 max-w-xs text-xs leading-7 text-white/50">
                Good food. Warm moments. Memorable experiences.
              </p>
            </div>

            <div>
              <h3 className="mb-5 text-xs tracking-[0.2em] text-[#c6a56b]">
                EXPLORE
              </h3>

              <div className="flex flex-col gap-4 text-xs text-white/60">
                <a href="#home" className="transition hover:text-[#c6a56b]">
                  Home
                </a>

                <a href="#story" className="transition hover:text-[#c6a56b]">
                  Our Story
                </a>

                <a href="#menu" className="transition hover:text-[#c6a56b]">
                  Menu
                </a>

                <a href="#gallery" className="transition hover:text-[#c6a56b]">
                  Gallery
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-xs tracking-[0.2em] text-[#c6a56b]">
                GET IN TOUCH
              </h3>

              <div className="flex flex-col gap-4 text-xs text-white/60">
                <a href="#contact" className="transition hover:text-[#c6a56b]">
                  Contact Us
                </a>

                <a
                  href="#reservation"
                  className="transition hover:text-[#c6a56b]"
                >
                  Make an Enquiry
                </a>

                <a href="#contact" className="transition hover:text-[#c6a56b]">
                  Contact Form
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-5 pt-8 text-center md:flex-row">
            <p className="text-[10px] tracking-wider text-white/40">
              © 2026 Ember & Olive. All rights reserved.
            </p>

            <p className="text-[10px] tracking-[0.2em] text-[#c6a56b]">
              CRAFTED WITH CARE
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
