import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/prasunparijat',
  },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/prasun-p-5044b0196/',
  },
  // {
  //   icon: <FaYoutube />,
  //   path: '',
  // },
  // {
  //   icon: <FaTwitter />,
  //   path: '',
  // },
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
            target='_blank'
          >
            {socialLink.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
