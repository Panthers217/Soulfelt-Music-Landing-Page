import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', url: '#', icon: '📷' },
    { name: 'YouTube', url: '#', icon: '▶️' },
    { name: 'Facebook', url: '#', icon: '👤' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-soul-400 to-soul-500 bg-clip-text text-transparent">
              SoulFelt Music
            </h3>
          </div>
          
          <div className="flex gap-6 mb-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="text-2xl hover:text-soul-400 transition-colors"
                aria-label={`Visit our ${social.name} page`}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {currentYear} SoulFelt Music. All rights reserved.</p>
            <p className="mt-2">Music with feeling. Music with purpose.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
