import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    kurumsal: [
      { name: 'Hakkımızda', path: '/about' },
      { name: 'Projelerimiz', path: '/projects' },
    ],
    hizmetler: [
      { name: 'Konut Projeleri', path: '/services/residential' },
      { name: 'Ticari Binalar', path: '/services/commercial' },
    ],
    destek: [
      { name: 'İletişim', path: '/contact' },
      { name: 'SSS', path: '/faq' },
    ],
  };

  return (
    <footer className="bg-secondary-900 text-secondary-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-bold text-xl text-white mb-4">İnşaat Pro</h3>
            <div className="space-y-3">
              <a href="tel:+905551234567" className="flex items-center space-x-3 text-secondary-300">
                <Phone size={18} />
                <span>+90 555 123 45 67</span>
              </a>
              <a href="mailto:info@insaatpro.com" className="flex items-center space-x-3 text-secondary-300">
                <Mail size={18} />
                <span>info@insaatpro.com</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Kurumsal</h3>
            <ul className="space-y-2">
              {footerLinks.kurumsal.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-secondary-300 hover:text-primary-400">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Hizmetler</h3>
            <ul className="space-y-2">
              {footerLinks.hizmetler.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-secondary-300 hover:text-primary-400">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Destek</h3>
            <ul className="space-y-2">
              {footerLinks.destek.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-secondary-300 hover:text-primary-400">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-8 pt-6 text-center">
          <p className="text-secondary-400 text-sm">
            © {currentYear} İnşaat Pro. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;