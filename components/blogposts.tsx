const BlogPosts = () => {
  const blogPosts = [
    {
      title: "Essential Travel Tips for Beginners",
      description: "Planning your first trip can be overwhelming. Here are essential tips to help you travel smoothly.",
      image: "b1.jpg",
      link: "/blogs/blog1"
    },
    {
      title: "How to Apply for a Visa: A Step-by-Step Guide",
      description: "The visa application process can seem confusing, but with this guide, it becomes easy to navigate.",
      image: "b2.jpg",
      link: "/blogs/blog2"
    },
    {
      title: "Top Travel Destinations for 2024",
      description: "Looking for your next adventure? Discover the best places to travel in 2024 that you won’t want to miss.",
      image: "b3.jpg",
      link: "/blogs/blog4"
    },
    {
      title: "How to Renew Your Passport: Everything You Need to Know",
      description: "Don’t let an expired passport ruin your travel plans. Here’s how to renew it hassle-free.",
      image: "b4.jpg",
      link: "/blogs/blog3"
    },
    {
      title: "Why You Need Travel Insurance",
      description: "Travel insurance is a must when traveling abroad. Here’s why it’s essential for your peace of mind.",
      image: "b5.jpg",
      link: "/blogs/blog5"
    },
    {
      title: "Cultural Etiquette When Traveling Abroad",
      description: "Respecting local customs is key to a positive travel experience. Learn important cultural tips for your travels.",
      image: "b6.jpg",
      link: "/blogs/blog6"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Recent Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 flex-shrink-0">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                {post.description}
              </p>
              
              <a
                href={post.link}
                className="text-blue-500 hover:text-blue-700 text-sm font-medium"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
