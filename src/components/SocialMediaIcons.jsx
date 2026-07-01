const SocialMediaIcons = () => {
  return (
    <div className="flex gap-20">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/manali-raut"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      https://linkedin.com/in/manali-raut
      </a>
     
   <a
        className="hover:opacity-50 transition duration-500"
        href="https://medium.com/@manali-raut"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="medium-link" src="../assets/twitter.png" />
      @manali-raut
      </a>
    
      <a
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        {/*<img alt="email" src="../assets/email.png" />*/}
        manaliraut14@gmail.com
     </a>

     <a
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer">
        Denver, CO
     </a>
    </div>
  );
};

export default SocialMediaIcons;
