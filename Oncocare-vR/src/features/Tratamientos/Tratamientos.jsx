import Card from './components/Card';

const Tratamientos = () => {
  const blogs = [
    {
      category: "Business",
      date: "29 Nov, 2019",
      title: "Card 1",
      description: "This card has supporting text below as a natural lead-in to additional content.",
      author: "Abby Sims",
    },
    {
      category: "Business",
      date: "29 Nov, 2019",
      title: "Card 2",
      description: "This card has supporting text below as a natural lead-in to additional content.",
      author: "Abby Sims",
    },
  ];

  return (
    <section className="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-32">
      <div>
        <h2 className="text-3xl leading-tight font-bold">Health Blog</h2>
        <p className="text-gray-600 mt-2 md:max-w-lg">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <a href="#" title="" className="inline-block text-teal-500 font-semibold mt-6">
          View All Posts
        </a>
      </div>

      <div className="md:flex mt-12 md:-mx-4">
        {blogs.map((blog, index) => (
          <Card
            key={index}
            category={blog.category}
            date={blog.date}
            title={blog.title}
            description={blog.description}
            author={blog.author}
          />
        ))}
      </div>
    </section>
  );
};

export default Tratamientos;
