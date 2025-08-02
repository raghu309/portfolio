import SocialIcon from "../icons/SocialIcon";
import VisitCounter from "./VisitCounter";
import HeaderLink from "./HeaderLink";

const Header = () => {
  const allLinks = ["home", "profiles", "projects", "skills", "contact"];
  const mobileLinks = ["home", "projects", "contact"];

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            {/* Desktop Links */}
            <div className="hidden md:flex items-baseline space-x-4">
              {allLinks.map((link) => (
                <HeaderLink key={link} link={link} />
              ))}
            </div>
            {/* Mobile Links */}
            <div className="flex md:hidden items-baseline space-x-2 sm:space-x-4">
              {mobileLinks.map((link) => (
                <HeaderLink key={link} link={link} />
              ))}
            </div>
          </div>
          
          <div className="flex items-center">
            <SocialIcon
              socialUrl="https://www.linkedin.com/in/raghu33/"
              iconUrl="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg"
            />

            <VisitCounter />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
