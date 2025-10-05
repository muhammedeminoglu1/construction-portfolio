import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <Link to="/" className="inline-flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">İ</span>
              </div>
              <span className="font-display font-bold text-2xl text-white">İnşaat Pro</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Modern inşaat çözümleri ile hayallerinizdeki projeleri gerçeğe dönüştürüyoruz.
            </p>
            
            <div className="space-y-3">
              <a href="tel:+905551234567" className="flex items-center space-x-3 text-gray-400 hover:text-primary-400 transition-colors">
                <Phone size={18} />
                <span>+90 555 123 45 67</span>
              </a>
              <a href="mailto:info@insaatpro.com" className="flex items-center space-x-3 text-gray-400 hover:text-primary-400 transition-colors">
                <Mail size={18} />
                <span>info@insaatpro.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin size={18} />
                <span>Atatürk Cad. No:123, Çankaya, Ankara</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white text-lg mb-6">Kurumsal</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projelerimiz</Link></li>
              <li><Link to="/career" className="text-gray-400 hover:text-white transition-colors">Kariyer</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-lg mb-6">Hizmetler</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Konut Projeleri</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Ticari Binalar</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Restorasyon</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-lg mb-6">Destek</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">İletişim</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">SSS</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Gizlilik</Link></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-secondary-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <p className="text-gray-500 text-sm">© {currentYear} İnşaat Pro. Tüm hakları saklıdır.</p>
              <Link to="/admin/login" className="text-xs text-gray-600 hover:text-gray-400">Yönetim</Link>
            </div>
            
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;