"use client";

import { useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/lib/blogData";

const allCategories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = blogPosts.filter((p) => {
    const matchCat = category === "All" || p.category === category;
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <section className="section" style={{ paddingTop: "clamp(48px,6vw,84px)" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="eyebrow">From the blog</span>
          <h1 className="display" style={{ marginTop: 16, marginBottom: 20 }}>Insights &amp; guides</h1>
          <p className="lede" style={{ maxWidth: "50ch", marginBottom: 32 }}>
            Real estate and mortgage education — from first-time buyer basics to investor strategy.
          </p>
          <input
            type="search"
            placeholder="Search articles…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              fontSize: 15.5,
              border: "1px solid var(--line)",
              borderRadius: 10,
              padding: "12px 16px",
              background: "var(--surface)",
              color: "var(--ink)",
              maxWidth: 480,
            }}
            aria-label="Search blog posts"
          />
        </div>
      </section>

      <section className="section bg-alt" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={category === cat ? "badge" : "tag"}
                style={{ cursor: "pointer", border: "none", fontFamily: "inherit" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
              {filtered.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "60px 0", color: "var(--muted)" }}>
              No articles found. Try a different search or category.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
