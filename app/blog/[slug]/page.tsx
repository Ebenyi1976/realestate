import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/lib/blogData";
import BlogCard from "@/components/blog/BlogCard";
import { DRE, NMLS } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: { title: post.title, description: post.description, type: "article" },
  };
}

function renderBody(body: string) {
  const lines = body.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }

    if (line.startsWith("## ")) {
      elements.push(<h2 key={i} style={{ fontFamily: "var(--font-newsreader, serif)", fontSize: "1.6rem", fontWeight: 500, marginTop: "2em", marginBottom: "0.5em", color: "var(--ink)" }}>{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={i} style={{ fontFamily: "var(--font-newsreader, serif)", fontSize: "1.25rem", fontWeight: 500, marginTop: "1.5em", marginBottom: "0.4em", color: "var(--ink)" }}>{line.slice(4)}</h3>);
    } else if (line.startsWith("> ")) {
      elements.push(<blockquote key={i} style={{ borderLeft: "3px solid var(--accent)", paddingLeft: 20, margin: "1.5em 0", fontFamily: "var(--font-newsreader, serif)", fontStyle: "italic", fontSize: "1.1em", color: "var(--ink)" }}>{line.slice(2)}</blockquote>);
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(<ul key={`ul-${i}`} style={{ paddingLeft: "1.5em", marginBottom: "1.2em" }}>{items.map((it, j) => <li key={j} style={{ marginBottom: "0.4em" }}>{it}</li>)}</ul>);
      continue;
    } else if (line.startsWith("| ")) {
      // simple table — skip for now, render as code block
      const rows: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        if (!lines[i].includes("---")) rows.push(lines[i].trim());
        i++;
      }
      elements.push(
        <div key={`table-${i}`} style={{ overflowX: "auto", marginBottom: "1.5em" }}>
          <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 14 }}>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} style={{ borderBottom: "1px solid var(--line)", background: ri === 0 ? "var(--bg-alt)" : undefined }}>
                  {row.split("|").filter(Boolean).map((cell, ci) => (
                    <td key={ci} style={{ padding: "8px 12px", fontWeight: ri === 0 ? 600 : undefined }}>{cell.trim()}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    } else {
      elements.push(<p key={i} style={{ marginBottom: "1.2em" }}>{line}</p>);
    }
    i++;
  }
  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <section className="section" style={{ paddingTop: "clamp(48px,6vw,84px)" }}>
        <div className="container">
          {/* Breadcrumb */}
          <nav style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13.5, color: "var(--muted)", marginBottom: 32 }}>
            <Link href="/" style={{ color: "var(--muted)" }}>Home</Link>
            <span>/</span>
            <Link href="/blog" style={{ color: "var(--muted)" }}>Blog</Link>
            <span>/</span>
            <span style={{ color: "var(--ink)" }}>{post.title}</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 64, alignItems: "start" }}>
            <div>
              {/* Header */}
              <span className="badge" style={{ marginBottom: 20 }}>{post.category}</span>
              <h1 className="h2" style={{ marginTop: 12, marginBottom: 16 }}>{post.title}</h1>
              <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 13.5, color: "var(--muted)", marginBottom: 40 }}>
                <span>Edit Benyi</span>
                <span>·</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime} min read</span>
              </div>

              {/* Hero image */}
              <div style={{ position: "relative", aspectRatio: "16/6", borderRadius: 16, overflow: "hidden", marginBottom: 48 }}>
                <Image
                  src={`https://images.unsplash.com/${post.image}?auto=format&fit=crop&w=1200&q=80`}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                  crossOrigin="anonymous"
                  sizes="(max-width: 980px) 100vw, 800px"
                  priority
                />
              </div>

              {/* Body */}
              <div className="article-body">
                {renderBody(post.body)}
              </div>

              {/* Author bio */}
              <div className="card" style={{ marginTop: 56, display: "flex", gap: 20, alignItems: "flex-start" }}>
                <Image
                  src="/images/edit-benyi.jpg"
                  alt="Edit Benyi"
                  width={64}
                  height={64}
                  style={{ borderRadius: "50%", objectFit: "cover", flex: "none" }}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>Edit Benyi</div>
                  <div style={{ fontSize: 13.5, color: "var(--muted)", marginBottom: 8 }}>Dual-licensed in real estate &amp; mortgage. {DRE} · {NMLS}</div>
                  <p style={{ fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.5 }}>
                    Edit Benyi is a Southern California real estate agent and mortgage loan originator, operating as &quot;The Deal Lady.&quot; She helps buyers, sellers, and investors navigate both sides of the transaction under one roof.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar TOC */}
            <aside style={{ position: "sticky", top: 88 }}>
              <div className="card" style={{ padding: 24 }}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 16, color: "var(--ink)" }}>In this article</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {post.body.match(/^## .+/gm)?.map((h) => (
                    <div key={h} style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.4 }}>
                      {h.slice(3)}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section className="section bg-alt">
        <div className="container">
          <h2 className="h3" style={{ marginBottom: 32 }}>Related articles</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
