"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal } from "lucide-react";
import { Header, Footer, PropertyCard } from "./site";
import { properties } from "@/lib/properties";
export default function Listings() {
  const params = useSearchParams();
  const [purpose, setPurpose] = useState(params.get("purpose") || "");
  const [type, setType] = useState(params.get("type") || "");
  const [block, setBlock] = useState(params.get("block") || "");
  const [budget, setBudget] = useState(params.get("budget") || "");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const [saved, setSaved] = useState([]);
  useEffect(() => {
    function sync() {
      try {
        setSaved(JSON.parse(localStorage.getItem("nazim-saved") || "[]"));
      } catch {}
    }
    sync();
    window.addEventListener("nazim-saved", sync);
    return () => window.removeEventListener("nazim-saved", sync);
  }, []);
  const onlySaved = params.get("saved") === "true";
  let results = properties.filter(
    (p) =>
      (!purpose || p.purpose === purpose) &&
      (!type || p.type === type) &&
      (!block || p.block === block) &&
      (!budget || p.price <= Number(budget)) &&
      (!query ||
        `${p.title} ${p.block}`.toLowerCase().includes(query.toLowerCase())) &&
      (!onlySaved || saved.includes(p.id)),
  );
  if (sort !== "featured")
    results = [...results].sort((a, b) =>
      sort === "low" ? a.price - b.price : b.price - a.price,
    );
  return (
    <>
      <Header />
      <main>
        <section className="listing-banner">
          <span className="eyebrow">YOUR NEXT CHAPTER, NAYA NAZIMABAD</span>
          <h1>
            {onlySaved ? "Your saved" : "Find your"} <em>homes.</em>
          </h1>
          <p>Good spaces. Clear choices. A place that feels like you.</p>
        </section>
        <section className="section listing-content">
          <aside className="filters">
            <h3>
              <SlidersHorizontal size={18} /> Make it yours
            </h3>
            <label>
              Search homes
              <div className="input-icon">
                <Search size={16} />
                <input
                  placeholder="Name or block"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </label>
            {[
              ["Looking to", purpose, setPurpose, ["Buy", "Rent"]],
              ["Property type", type, setType, ["House", "Apartment", "Plot"]],
              ["Block", block, setBlock, ["Block A", "Block B", "Block D"]],
            ].map(([title, value, setter, items]) => (
              <label key={title}>
                {title}
                <select value={value} onChange={(e) => setter(e.target.value)}>
                  <option value="">All options</option>
                  {items.map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </label>
            ))}
            <label>
              Maximum budget
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="">Any budget</option>
                <option value="3">PKR 3 Crore</option>
                <option value="4">PKR 4 Crore</option>
                <option value="6">PKR 6 Crore</option>
              </select>
            </label>
            <button
              className="text-link"
              onClick={() => {
                setPurpose("");
                setType("");
                setBlock("");
                setBudget("");
                setQuery("");
              }}
            >
              Reset filters
            </button>
            <p className="small-note">
              Demo inventory. Prices and images are illustrative.
            </p>
          </aside>
          <div>
            <div className="results-top">
              <span>
                <strong>{results.length}</strong> homes to explore
              </span>
              <select
                aria-label="Sort properties"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="featured">Featured first</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
              </select>
            </div>
            <div className="property-grid listing-grid">
              {results.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
            {!results.length && (
              <div className="empty-state">
                <h2>A little more room to search.</h2>
                <p>
                  {onlySaved
                    ? "Save homes using the heart on a property card, then come back here."
                    : "Try another block or widen your budget to discover more homes."}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
