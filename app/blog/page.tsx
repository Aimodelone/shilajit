import Link from "next/link";
import Image from "next/image";   // <-- Import Image
import { blogPosts } from "@/app/data/blogPosts";

export default function BlogPage() {
  return (
    <section className="blog-section pt-120 pb-120">
      <div className="container">
        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.slug} className="col-lg-4 col-md-6 mb-4">
              <div className="blog-card">
                <div className="blog-img">
                  <Link href={`/blog/${post.slug}`}>
                    <a>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}      // adjust width as needed
                        height={400}     // adjust height as needed
                        className="img-fluid"
                      />
                    </a>
                  </Link>
                </div>
                <div className="blog-content">
                  <ul className="blog-meta">
                    <li><i className="far fa-calendar-alt"></i> {post.date}</li>
                    <li><i className="far fa-user"></i> {post.author}</li>
                  </ul>
                  <h3 className="blog-title">
                    <Link href={`/blog/${post.slug}`}>
                      <a>{post.title}</a>
                    </Link>
                  </h3>
                  <p>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`}>
                    <a className="read-more">
                      Read More <i className="fas fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
