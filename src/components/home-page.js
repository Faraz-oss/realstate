"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Search,
  ShieldCheck,
  TreePine,
  Sun,
  Compass,
  FileCheck2,
  KeyRound,
  Plus,
  Minus,
} from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { Header, Footer, Reveal, PropertyCard, SectionTitle } from "./site";
import { photos, properties } from "@/lib/properties";
function RoomStructure() {
  const [selected, setSelected] = useState("living");
  const rooms = [
    {
      id: "living",
      name: "Living room",
      number: "01",
      image: photos.room,
      caption: "A calm, light-filled space to gather.",
      credit: "LIVING / REFERENCE INTERIOR",
    },
    {
      id: "kitchen",
      name: "Kitchen",
      number: "02",
      image:
        "https://images.unsplash.com/photo-1748679979779-cc32e54a5f42?auto=format&fit=crop&w=1400&q=85",
      caption: "Clean lines and practical everyday flow.",
      credit: "KITCHEN / REFERENCE INTERIOR",
    },
    {
      id: "bedroom",
      name: "Bedroom",
      number: "03",
      image:
        "https://images.unsplash.com/photo-1558942548-89bf85600e32?auto=format&fit=crop&w=1400&q=85",
      caption: "A quieter room, planned for rest.",
      credit: "BEDROOM / REFERENCE INTERIOR",
    },
    {
      id: "bath",
      name: "Bathroom",
      number: "04",
      image:
        "https://images.unsplash.com/photo-1772476361253-90a9be5e0c19?auto=format&fit=crop&w=1400&q=85",
      caption: "A bright, simple space to reset.",
      credit: "BATHROOM / REFERENCE INTERIOR",
    },
  ];
  const room = rooms.find((x) => x.id === selected);
  function onZoneKey(e, id) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelected(id);
    }
  }
  return (
    <section
      className="architectural-plan"
      aria-labelledby="architectural-plan-title"
    >
      <div className="architectural-plan-head">
        <div>
          <span className="eyebrow">ROOM STRUCTURE / SELECT A SPACE</span>
          <h2 id="architectural-plan-title">
            Explore the home,
            <br />
            room by <em>room.</em>
          </h2>
        </div>
        <p>
          Choose a room on the plan to see a matching interior reference.
          Illustrative layout only; actual property plans and finishes may vary.
        </p>
      </div>
      <div className="interactive-plan-grid">
        <div className="plan-drawing-card">
          <div className="plan-drawing-head">
            <span>RESIDENTIAL / FLOOR PLAN</span>
            <span>ILLUSTRATIVE / NOT TO SCALE</span>
          </div>
          <svg
            viewBox="0 0 700 470"
            role="group"
            aria-label="Clickable illustrative floor plan. Select a room to view its interior reference."
          >
            <defs>
              <pattern
                id="architectural-floor"
                width="40"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 0H40M0 10H40M20 0v10M0 10v10"
                  fill="none"
                  stroke="#777f6e"
                  strokeOpacity=".13"
                  strokeWidth=".65"
                />
              </pattern>
            </defs>
            <rect width="700" height="470" fill="#f7f7f0" />
            <rect
              x="61"
              y="47"
              width="578"
              height="366"
              fill="url(#architectural-floor)"
            />
            <g
              fill="none"
              stroke="#344638"
              strokeWidth="8"
              strokeLinecap="square"
            >
              <path d="M61 47H639V413H307M207 413H61V47" />
              <path d="M366 47v108m0 50v91m0 50v67" />
              <path d="M366 202h110m54 0h109" />
              <path d="M61 282h74m52 0h179" />
            </g>
            <g
              fill="none"
              stroke="#74816b"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            >
              <path d="M207 413a74 74 0 0 0-74-74" />
              <path d="M366 205a52 52 0 0 1 52-52" />
              <path d="M366 299a44 44 0 0 0 44 44" />
              <path d="M187 282a52 52 0 0 1 52 52" />
            </g>
            <g stroke="#91a398" strokeWidth="7">
              <path d="M177 47h105m30 0h35" />
              <path d="M639 257v62" />
            </g>
            <g stroke="#c5d8cf" strokeWidth="3">
              <path d="M181 41h98m37 0h28" />
              <path d="M645 261v54" />
            </g>
            <g fill="none" stroke="#7b8571" strokeWidth="1.5">
              <rect x="87" y="80" width="244" height="165" rx="2" />
              <rect x="100" y="93" width="218" height="138" rx="1" />
              <rect x="408" y="77" width="205" height="47" />
              <path d="M418 84v33m37-33v33m37-33v33m37-33v33m37-33v33m37-33v33" />
              <rect x="441" y="134" width="140" height="42" />
              <rect x="402" y="236" width="131" height="148" />
              <rect x="416" y="250" width="103" height="116" />
              <path d="M467 250v116m-51-58h103" />
              <rect x="82" y="315" width="92" height="69" />
              <path d="M89 322h78v55H89zM89 350h78" />
              <rect x="213" y="325" width="85" height="52" />
              <path d="M223 333h65m-65 9h65m-65 9h65m-65 9h65" />
            </g>
            <g fill="#e3e5db" stroke="#66745e" strokeWidth="1.5">
              <rect x="112" y="112" width="126" height="52" rx="8" />
              <rect x="116" y="116" width="21" height="44" rx="4" />
              <rect
                x="143"
                y="117"
                width="40"
                height="21"
                rx="4"
                fill="#f9f8f1"
              />
              <rect
                x="188"
                y="117"
                width="43"
                height="21"
                rx="4"
                fill="#f9f8f1"
              />
              <rect
                x="155"
                y="181"
                width="55"
                height="29"
                rx="12"
                fill="#d1c5ae"
              />
              <rect x="258" y="104" width="50" height="91" rx="2" />
              <rect
                x="426"
                y="143"
                width="72"
                height="25"
                rx="2"
                fill="#d8d2c4"
              />
              <rect x="421" y="267" width="93" height="72" rx="5" />
              <rect
                x="430"
                y="275"
                width="35"
                height="23"
                rx="4"
                fill="#fbfaf3"
              />
              <rect
                x="469"
                y="275"
                width="35"
                height="23"
                rx="4"
                fill="#fbfaf3"
              />
              <rect
                x="182"
                y="329"
                width="18"
                height="42"
                rx="3"
                fill="#e0e2d8"
              />
            </g>
            <g fill="none" stroke="#78836e" strokeWidth="1.4">
              <path d="M421 350h92m-88 8h84" />
              <circle cx="541" cy="352" r="17" />
              <circle cx="550" cy="164" r="8" />
              <path d="M550 153v22m-11-11h22" />
            </g>
            <g
              fontFamily="Arial, sans-serif"
              fontSize="9"
              letterSpacing="1.5"
              fill="#68745f"
              pointerEvents="none"
            >
              <text x="137" y="265">
                LIVING ROOM
              </text>
              <text x="452" y="190">
                KITCHEN
              </text>
              <text x="438" y="395">
                BEDROOM
              </text>
              <text x="95" y="400">
                BATH
              </text>
              <text x="208" y="31">
                WINDOW
              </text>
              <text x="160" y="445">
                ENTRY
              </text>
            </g>
            {rooms.map((item) => (
              <g
                key={item.id}
                className={
                  selected === item.id ? "plan-zone selected" : "plan-zone"
                }
                role="button"
                tabIndex="0"
                aria-label={`Select ${item.name}`}
                aria-pressed={selected === item.id}
                onClick={() => setSelected(item.id)}
                onKeyDown={(e) => onZoneKey(e, item.id)}
              >
                {item.id === "living" ? (
                  <rect x="68" y="53" width="291" height="221" />
                ) : item.id === "kitchen" ? (
                  <rect x="374" y="53" width="258" height="141" />
                ) : item.id === "bedroom" ? (
                  <rect x="374" y="208" width="258" height="197" />
                ) : (
                  <rect x="68" y="288" width="291" height="117" />
                )}
                <circle
                  className="plan-zone-marker"
                  cx={
                    item.id === "living"
                      ? 86
                      : item.id === "kitchen"
                        ? 391
                        : item.id === "bedroom"
                          ? 391
                          : 86
                  }
                  cy={
                    item.id === "living"
                      ? 70
                      : item.id === "kitchen"
                        ? 68
                        : item.id === "bedroom"
                          ? 223
                          : 302
                  }
                  r="12"
                />
                <text
                  className="plan-zone-number"
                  x={
                    item.id === "living"
                      ? 86
                      : item.id === "kitchen"
                        ? 391
                        : item.id === "bedroom"
                          ? 391
                          : 86
                  }
                  y={
                    item.id === "living"
                      ? 73
                      : item.id === "kitchen"
                        ? 71
                        : item.id === "bedroom"
                          ? 226
                          : 305
                  }
                >
                  {item.number}
                </text>
              </g>
            ))}
          </svg>
          <div
            className="plan-room-selector"
            role="group"
            aria-label="Choose a room"
          >
            {rooms.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={selected === item.id ? "active" : ""}
                aria-pressed={selected === item.id}
              >
                <span>{item.number}</span>
                {item.name}
              </button>
            ))}
          </div>
          <div className="plan-drawing-foot">
            <span>
              <i /> SELECT A ROOM TO PREVIEW
            </span>
            <span>PLAN VIEW / 01</span>
          </div>
        </div>
        <div className="plan-photo-card" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.img
              key={room.id}
              src={room.image}
              alt={`Illustrative ${room.name.toLowerCase()} interior reference`}
              initial={{ opacity: 0, scale: 1.035 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.45 }}
            />
            <motion.div
              key={room.id + "-caption"}
              className="plan-photo-caption"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.3 }}
            >
              <span>
                {room.number} / {room.credit}
              </span>
              <strong>{room.name}</strong>
              <p>{room.caption}</p>
            </motion.div>
          </AnimatePresence>
          <div className="photo-counter">
            {room.number} <span>/ 04</span>
          </div>
        </div>
      </div>
    </section>
  );
}
function RoomMoment({ moment, index, onActive }) {
  const ref = useRef(null);
  const active = useInView(ref, { margin: "-42% 0px -42% 0px" });
  useEffect(() => {
    if (active) onActive(index);
  }, [active, index, onActive]);
  return (
    <article
      id={`room-life-scene-${index + 1}`}
      ref={ref}
      className="room-moment"
      style={{ opacity: active ? 1 : 0.38 }}
    >
      <span className="room-moment-count">
        0{index + 1} <i />
      </span>
      <h3>{moment.title}</h3>
      <p>{moment.copy}</p>
    </article>
  );
}
function RoomExperience() {
  const [active, setActive] = useState(0);
  const moments = [
    {
      title: "Space that feels easy.",
      copy: "See how the living area opens up for everyday routines and long, unhurried evenings.",
      tag: "THE LIVING AREA",
      focus: "A place to gather",
      x: 0,
      y: 0,
      scale: 1.04,
      origin: "center center",
      pinX: "51%",
      pinY: "62%",
    },
    {
      title: "Light that changes the mood.",
      copy: "Follow the window light as it reaches across the room and softens the whole space.",
      tag: "NATURAL LIGHT",
      focus: "A brighter part of the day",
      x: -10,
      y: 4,
      scale: 1.24,
      origin: "68% 34%",
      pinX: "72%",
      pinY: "30%",
    },
    {
      title: "A corner of your own.",
      copy: "Small details give a room its rhythm. Find the place you would make yours.",
      tag: "YOUR QUIET CORNER",
      focus: "A little room to slow down",
      x: 10,
      y: -5,
      scale: 1.28,
      origin: "29% 56%",
      pinX: "29%",
      pinY: "54%",
    },
  ];
  function jumpTo(index) {
    document
      .getElementById(`room-life-scene-${index + 1}`)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  return (
    <section
      className="room-experience"
      aria-label="Explore a room through photography"
    >
      <div className="room-experience-inner">
        <div className="room-experience-heading">
          <div>
            <span className="eyebrow">A REAL ROOM, A CLOSER LOOK</span>
            <h2>
              Notice the details
              <br />
              that make it <em>home.</em>
            </h2>
          </div>
          <p>
            Scroll the story to move through the room. The photograph stays in
            view while each detail comes into focus.
          </p>
        </div>
        <div className="room-experience-layout">
          <div className="room-photo-stage">
            <motion.img
              src={photos.room}
              alt="A warmly lit contemporary living room with considered furniture and natural materials"
              animate={{
                scale: moments[active].scale,
                x: moments[active].x,
                y: moments[active].y,
                transformOrigin: moments[active].origin,
              }}
              transition={{ duration: 1.15, ease: [0.2, 0.75, 0.25, 1] }}
            />
            <div className="room-photo-wash" />
            <div className="room-photo-topline">
              <span>NAZIM / ROOM STUDY</span>
              <span>01 / 03</span>
            </div>
            <button
              className="photo-hotspot"
              style={{ left: moments[active].pinX, top: moments[active].pinY }}
              onClick={() => jumpTo(active)}
              aria-label={`Room detail: ${moments[active].tag}`}
            >
              <span />
            </button>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="room-photo-label"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <span>{moments[active].tag}</span>
                <strong>{moments[active].focus}</strong>
              </motion.div>
            </AnimatePresence>
            <div className="room-photo-pagination">
              {moments.map((moment, index) => (
                <button
                  key={moment.tag}
                  className={active === index ? "active" : ""}
                  onClick={() => jumpTo(index)}
                  aria-label={`Go to room detail ${index + 1}: ${moment.tag}`}
                >{`0{index+1}`}</button>
              ))}
            </div>
          </div>
          <div className="room-moments">
            {moments.map((moment, index) => (
              <RoomMoment
                key={moment.tag}
                moment={moment}
                index={index}
                onActive={setActive}
              />
            ))}
          </div>
        </div>
        <div className="room-experience-foot">
          <span>PHOTOGRAPHIC ROOM STUDY</span>
          <span>SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  );
}
function SearchBar() {
  const router = useRouter();
  const [purpose, setPurpose] = useState("Buy");
  return (
    <div className="search-panel">
      <div className="search-tabs">
        {["Buy", "Rent"].map((x) => (
          <button
            key={x}
            onClick={() => setPurpose(x)}
            className={purpose === x ? "active" : ""}
          >
            {x === "Buy" ? "Buy a home" : "Rent a home"}
          </button>
        ))}
        <span>
          <ShieldCheck size={14} /> Your next chapter starts here
        </span>
      </div>
      <form
        className="search-fields"
        onSubmit={(e) => {
          e.preventDefault();
          const d = new FormData(e.currentTarget);
          router.push(
            "/properties?" +
              new URLSearchParams({
                purpose,
                block: d.get("block"),
                type: d.get("type"),
                budget: d.get("budget"),
              }),
          );
        }}
      >
        <label>
          <span>YOUR NEIGHBORHOOD</span>
          <div>
            <MapPin size={17} />
            <select name="block" aria-label="Neighborhood">
              <option value="">Naya Nazimabad, Karachi</option>
              <option>Block A</option>
              <option>Block B</option>
              <option>Block D</option>
            </select>
          </div>
        </label>
        <label>
          <span>PROPERTY TYPE</span>
          <select name="type" aria-label="Property type">
            <option value="">All property types</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Plot</option>
          </select>
        </label>
        <label>
          <span>BUDGET RANGE</span>
          <select name="budget" aria-label="Budget">
            <option value="">Any budget</option>
            <option value="3">Up to PKR 3 Crore</option>
            <option value="4">Up to PKR 4 Crore</option>
            <option value="6">Up to PKR 6 Crore</option>
          </select>
        </label>
        <button className="button">
          <Search size={19} /> Find my home
        </button>
      </form>
    </div>
  );
}
export default function HomePage() {
  const [tab, setTab] = useState("All properties");
  const [faq, setFaq] = useState(0);
  const cards =
    tab === "For rent"
      ? properties.filter((p) => p.purpose === "Rent")
      : tab === "Plots"
        ? properties.filter((p) => p.type === "Plot")
        : properties.slice(0, 3);
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={photos.hero}
            aria-label="A cinematic look at homes and green spaces"
          >
            <source
              src="https://videos.pexels.com/video-files/30357863/13012569_3840_2160_30fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="hero-shade" />
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span /> EXCLUSIVELY NAYA NAZIMABAD, KARACHI
            </div>
            <h1>
              More than a home.
              <br />A place to <em>belong.</em>
            </h1>
            <p>
              A quieter morning. A closer community. A home that feels right.
              <br className="desktop" /> Discover your next chapter in Naya
              Nazimabad.
            </p>
            <a className="hero-explore" href="#featured">
              Find your place <ArrowUpRight size={19} />
            </a>
            <div className="hero-caption">
              <span className="caption-line" /> GOOD HOMES. BETTER BEGINNINGS.
            </div>
          </div>
          <div className="hero-side">
            <span>EST. 2026</span>
            <div />
            <span>SPACE TO LIVE WELL</span>
          </div>
          <div className="hero-note">
            <Sun size={20} />
            <span>
              A fresh perspective
              <br />
              <strong>on living in Karachi.</strong>
            </span>
          </div>
        </section>
        <div className="search-wrap">
          <SearchBar />
        </div>
        <section className="trust-strip">
          <span>
            YOUR HOME SEARCH,
            <br />
            <strong>with a little more peace of mind.</strong>
          </span>
          <div>
            <ShieldCheck /> Clear property information
          </div>
          <div>
            <FileCheck2 /> Documentation guidance
          </div>
          <div>
            <Compass /> One neighborhood, real focus
          </div>
        </section>
        <section className="section featured" id="featured">
          <Reveal>
            <SectionTitle
              eyebrow="THOUGHTFULLY SELECTED"
              title={
                <>
                  A home for every
                  <br className="mobile" /> kind of <em>tomorrow.</em>
                </>
              }
              description="From your first home to your forever home. Find what feels like you."
              link
            />
            <div className="property-tabs">
              {["All properties", "For sale", "For rent", "Plots"].map((x) => (
                <button
                  className={tab === x ? "active" : ""}
                  onClick={() => setTab(x)}
                  key={x}
                >
                  {x}
                </button>
              ))}
              <span>
                <span className="location-dot" /> Naya Nazimabad, Karachi
              </span>
            </div>
            <div className="property-grid">
              {cards.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
            <p className="demo-note">
              A preview of what’s possible. Sample listings, indicative prices
              and illustrative images.
            </p>
          </Reveal>
        </section>
        <section className="neighborhood section" id="neighborhood">
          <Reveal className="neighborhood-grid">
            <div className="neighborhood-visual">
              <img
                src={photos.park}
                alt="Green park with a walking path, illustrative neighborhood lifestyle"
                loading="lazy"
              />
              <div className="photo-label">
                <span className="location-dot" /> A LITTLE CLOSER TO NATURE
              </div>
              <div className="neighborhood-stamp">
                <TreePine size={29} />
                <span>
                  More green.
                  <br />
                  More living.
                </span>
              </div>
            </div>
            <div className="neighborhood-copy">
              <span className="eyebrow">THE NEIGHBORHOOD COMES FIRST</span>
              <h2>
                A world of its own.
                <br />
                In the city you <em>love.</em>
              </h2>
              <p>
                Your address is more than a pin on a map. It’s your morning
                walk, your children’s next friendship, and the feeling of coming
                home.
              </p>
              <p>
                Explore a different pace of life in Naya Nazimabad. Find a home
                with the space, setting and everyday connections that matter to
                you.
              </p>
              <div className="lifestyle-grid">
                <span>
                  <TreePine /> Space to unwind
                </span>
                <span>
                  <ShieldCheck /> Community living
                </span>
                <span>
                  <Sun /> Room to grow
                </span>
                <span>
                  <Compass /> Karachi, connected
                </span>
              </div>
              <Link className="button" href="/properties">
                Explore the neighborhood <ArrowUpRight size={18} />
              </Link>
              <span className="small-note">
                Explore each listing for location and amenity details.
              </span>
            </div>
          </Reveal>
        </section>
        <RoomExperience />
        <RoomStructure />
        <section className="process section" id="how-it-works">
          <Reveal>
            <SectionTitle
              eyebrow="LESS GUESSWORK. MORE CONFIDENCE."
              title={
                <>
                  Your next home.
                  <br />A simpler <em>way there.</em>
                </>
              }
              description="Everything you need to start online. A human when you need one."
            />
            <div className="steps">
              {[
                [
                  Search,
                  "01",
                  "Discover your fit",
                  "Explore homes by block, budget and the space your family needs.",
                ],
                [
                  FileCheck2,
                  "02",
                  "Get the full picture",
                  "See the details, compare your options and prepare the right questions.",
                ],
                [
                  KeyRound,
                  "03",
                  "See it. Feel it. Decide.",
                  "Shortlist your favorites and plan a visit, at your own pace.",
                ],
              ].map(([Icon, n, t, d]) => (
                <div className="step" key={n}>
                  <div className="step-top">
                    <Icon size={27} />
                    <span>{n}</span>
                  </div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
        <section className="editorial section">
          <Reveal className="editorial-inner">
            <div>
              <span className="eyebrow">A HOME IS A FEELING</span>
              <h2>
                For the little moments.
                <br />
                And the <em>big beginnings.</em>
              </h2>
              <p>
                Sunday breakfasts. First steps. One more cup of chai.
                <br />
                Find the space where your story unfolds.
              </p>
              <Link href="/properties" className="button cream">
                Let’s find your home <ArrowUpRight size={18} />
              </Link>
            </div>
            <img
              src={photos.room}
              alt="Comfortable sunlit living room"
              loading="lazy"
            />
            <span className="editorial-caption">
              DESIGNED AROUND THE WAY YOU LIVE
            </span>
          </Reveal>
        </section>
        <section className="section faq">
          <div>
            <span className="eyebrow">A LITTLE CLARITY</span>
            <h2>
              Good questions.
              <br />
              <em>Honest answers.</em>
            </h2>
            <p>
              Because feeling at home starts
              <br />
              with feeling informed.
            </p>
          </div>
          <div className="faq-list">
            {[
              [
                "What makes Nazim different?",
                "We focus on one neighborhood: Naya Nazimabad. This concept brings browsing, saved homes and clear property details together, so you can prepare before visiting an agency.",
              ],
              [
                "Are these properties available to buy?",
                "This is a project demonstration. Listings, prices and photographs are illustrative, not live offers. Availability and property documents must be confirmed before any transaction.",
              ],
              [
                "Can I schedule a property visit online?",
                "Yes, you can try the visit request form on any property page. In this demo your request is saved on your device; it is not sent to an agent.",
              ],
              [
                "Can I save homes for later?",
                "Use the heart on any property card to build your shortlist. Open Saved homes in the navigation to see your favorites on the same device.",
              ],
            ].map(([q, a], i) => (
              <div className="faq-item" key={q}>
                <button
                  onClick={() => setFaq(faq === i ? -1 : i)}
                  aria-expanded={faq === i}
                >
                  {q}
                  {faq === i ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                {faq === i && <p>{a}</p>}
              </div>
            ))}
          </div>
        </section>
        <section className="closing">
          <div>
            <span className="eyebrow">
              YOUR NEXT CHAPTER IS CLOSER THAN YOU THINK
            </span>
            <h2>
              Let’s find your <em>somewhere.</em>
            </h2>
          </div>
          <Link className="button" href="/properties">
            Explore all properties <ArrowUpRight size={20} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
