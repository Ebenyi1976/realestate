import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blogData";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-card">
      <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
        <Image
          src={`https://images.unsplash.com/${post.image}?auto=format&fit=crop&w=800&q=75`}
          alt={post.title}
          fill
          className="blog-card-img"
          style={{ objectFit: "cover" }}
          crossOrigin="anonymous"
          sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw"
        />
      </div>
      <div className="blog-card-body">
        <span className="badge">{post.category}</span>
        <h3 className="blog-card-title">{post.title}</h3>
        <p style={{ fontSize: 13.5, color: "var(--muted)" }}>{post.readTime} min read · {post.description}</p>
      </div>
    </Link>
  );
}
