const Hero = ({ title, subtitle }) => {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto px-6 py-16 text-center sm:py-20">
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          {title}
        </h1>
        <p className="mt-4 text-lg sm:text-xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default Hero;
