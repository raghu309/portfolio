const Section = ({ id, title, children, className = '' }: any) => (
  <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
        {title}
        <span className="block w-24 h-1 bg-yellow-400 mx-auto mt-4"></span>
      </h2>
      {children}
    </div>
  </section>
);

export default Section;
