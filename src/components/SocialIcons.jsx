// SocialIcons.jsx
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  gmail: SiGmail,
  whatsapp: FaWhatsapp,
};

const SocialIcons = ({ socials, className }) => {
  return (
    <div className={`flex justify-center md:justify-center mt-4 w-full ${className}`}>
      {socials.map(({ platform, url }, index) => {
        const IconComponent = iconMap[platform];

        return (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconComponent className={`text-gray-400 hover:text-gray-300 text-6xl cursor-pointer mx-3 transition-colors duration-500 ease-in-out transform hover:scale-110 ${className}`} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
