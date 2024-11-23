const Tratamientos = () => {
  const treatments = [
    {
      title: "Teeth Whitening",
      description: "Let us show you how our experience.",
      image: "/images/teeth-whitening.svg",
      link: "#",
    },
    {
      title: "Oral Surgery",
      description: "Let us show you how our experience.",
      image: "/images/oral-surgery.svg",
      link: "#",
    },
    {
      title: "Painless Dentistry",
      description: "Let us show you how our experience.",
      image: "/images/painless-dentistry.svg",
      link: "#",
    },
    {
      title: "Periodontics",
      description: "Let us show you how our experience.",
      image: "/images/periodontics.svg",
      link: "#",
    },
  ];

  return (
    <section className="relative px-4 py-16 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:py-32">
      <div className="md:flex md:flex-wrap mt-24 text-center md:-mx-4">
        {treatments.map((treatment, index) => (
          <div
            key={index}
            className="md:w-1/2 md:px-4 lg:w-1/4 mt-4 lg:mt-0"
          >
            <div className="bg-white rounded-lg border border-gray-300 p-8">
              <img
                src={treatment.image}
                alt={treatment.title}
                className="h-20 mx-auto"
              />
              <h4 className="text-xl font-bold mt-4">{treatment.title}</h4>
              <p className="mt-1">{treatment.description}</p>
              <a
                href={treatment.link}
                className="block mt-4 text-teal-500 hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tratamientos;