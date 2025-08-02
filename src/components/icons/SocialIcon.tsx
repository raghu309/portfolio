const SocialIcon = ({ socialUrl, iconUrl }: any) => {
  return (
    <div>
      <a
        href={socialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-300 hover:opacity-75 transform hover:scale-110"
      >
        <img
          src={iconUrl}
          className="h-7 w-7 filter invert"
        />
      </a>
    </div>
  );
};

export default SocialIcon;
