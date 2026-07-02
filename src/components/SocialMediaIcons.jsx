import linkedinIcon from "../assets/linkedin.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex flex-wrap gap-8 md:gap-12 items-center text-sm font-opensans">
      <a
        className="hover:opacity-50 transition duration-500 flex items-center gap-2"
        href="https://www.linkedin.com/in/manali-raut"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="LinkedIn" src={linkedinIcon} />
        <span>LinkedIn</span>
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://medium.com/@manali-raut"
        target="_blank"
        rel="noreferrer"
      >
        Medium
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="mailto:manaliraut14@gmail.com"
      >
        manaliraut14@gmail.com
      </a>

      <span>Denver, CO</span>
    </div>
  );
};

export default SocialMediaIcons;
