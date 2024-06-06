import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  {
    icon: <FaGithub />,
    path: '',
  },
  {
    icon: <FaLinkedinIn />,
    path: '',
  },
  {
    icon: <FaYoutube />,
    path: '',
  },
  {
    icon: <FaTwitter />,
    path: '',
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialLinks.map((socialLink, index) => {
        return (
          <Link
            key={index}
            href={socialLink.path}
            className={iconStyles}
          >
            {socialLink.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
