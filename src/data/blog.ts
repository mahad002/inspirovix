export interface BlogPost {
    title: string;
    excerpt: string;
    image: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
  }
  
  export const blogPosts: BlogPost[] = [];
  // Example post structure for future use:
  // {
  //   title: "The Future of AI in Business Automation",
  //   excerpt: "Explore how artificial intelligence is revolutionizing business processes and what it means for your company.",
  //   image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200",
  //   author: "Sarah Chen",
  //   date: "March 15, 2024",
  //   readTime: "5 min read",
  //   category: "AI & Automation"
  // }