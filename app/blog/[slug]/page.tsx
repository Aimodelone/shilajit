// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { blogPosts } from "@/app/data/blogPosts";

interface Params {
  slug: string;
}

interface BlogSingleProps {
  params: Promise<Params>;  // <- params is a Promise
}

export default async function BlogSingle({ params }: BlogSingleProps) {
  // Await params here because it's a Promise
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <section className="blog-single pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <article className="blog-post">
              <div className="blog-img mb-4">
                <img src={post.image} alt={post.title} className="img-fluid" />
              </div>
              <h1 className="mb-3">{post.title}</h1>
              <ul className="blog-meta mb-4">
                <li><i className="far fa-calendar-alt"></i> {post.date}</li>
                <li><i className="far fa-user"></i> {post.author}</li>
              </ul>
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
