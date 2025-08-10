export type BlogPost = {
    slug: string;
    title: string;
    date: string;
    author: string;
    image: string;
    excerpt: string;
    content: string;
  };
  
  export const blogPosts: BlogPost[] = [
    {
      slug: "healthy-living-tips",
      title: "Healthy Living Tips",
      date: "August 5, 2025",
      author: "Admin",
      image: "/assets/img/blog/img_01.jpg",
      excerpt: "Learn how to live a healthier lifestyle with these simple tips and tricks that you can apply today.",
      content: `
        <p>This is the detailed blog content for Healthy Living Tips...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
      `
    },
    {
      slug: "workout-routines",
      title: "Best Workout Routines",
      date: "August 6, 2025",
      author: "Admin",
      image: "/assets/img/blog/img_02.jpg",
      excerpt: "Discover workout routines for all fitness levels to keep you active and healthy.",
      content: `
        <p>This is the detailed blog content for Best Workout Routines...</p>
        <p>Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia.</p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.<p>Praesent libero. Sed cursus ante dapibus diam.
        lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
      `
    },
    {
      slug: "nutrition-basics",
      title: "Nutrition Basics",
      date: "August 7, 2025",
      author: "Admin",
      image: "/assets/img/blog/img_03.jpg",
      excerpt: "Understand the basics of nutrition and how to create a balanced diet.",
      content: `
        <p>This is the detailed blog content for Nutrition Basics...</p>
        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
      `
    }
  ];
