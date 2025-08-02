import SocialIcon from "../icons/SocialIcon";

const Footer = () => (
  <footer className="bg-gray-900 py-12">
    <div className="flex justify-center items-center space-x-8 md:space-x-10">
      <SocialIcon
        socialUrl="https://www.linkedin.com/in/raghu33/"
        iconUrl="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg"
      />
      <SocialIcon
        socialUrl="https://mail.google.com/mail/?view=cm&fs=1&to=ragavendrarag30@gmail.com"
        iconUrl="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/gmail.svg"
      />
      <SocialIcon
        socialUrl="https://github.com/raghu309"
        iconUrl="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg"
      />
      <SocialIcon
        socialUrl="https://github.com/raghu309"
        iconUrl="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/instagram.svg"
      />
    </div>
  </footer>
);

export default Footer;
