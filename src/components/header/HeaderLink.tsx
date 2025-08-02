const HeaderLink = ({ link }: any) => {
  return (
    <a
      key={link}
      href={`#${link}`}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(link)?.scrollIntoView({ behavior: "smooth" });
      }}
      className="capitalize text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
    >
      {link}
    </a>
  );
};

export default HeaderLink;
