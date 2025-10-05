import { useState } from 'react';
import { Save, Globe, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    siteName: 'İnşaat Pro',
    siteDescription: 'Modern inşaat çözümleri ile hayallerinizdeki projeleri gerçeğe dönüştürüyoruz.',
    email: 'info@insaatpro.com',
    phone: '+90 555 123 45 67',
    address: 'Atatürk Cad. No:123, Çankaya, Ankara',
    socialMedia: {
      facebook: '',
      instagram: '',
      linkedin: '',
      twitter: '',
    },
    seo: {
      metaTitle: 'İnşaat Pro - Modern İnşaat Çözümleri',
      metaDescription: 'Profesyonel inşaat hizmetleri, konut, ticari ve endüstriyel projeler.',
      metaKeywords: 'inşaat, yapı, konut, ticari bina, proje',
    }
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setSettings(prev => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value }
      }));
    } else {
      setSettings(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend'e gönderilecek - şimdilik localStorage'a kaydet
    localStorage.setItem('siteSettings', JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-display font-bold text-secondary-900">Ayarlar</h1>
            <p className="text-gray-600 mt-1">Site genel ayarlarını yönetin</p>
          </div>
          {saved && (
            <div className="px-4 py-2 bg-green-100 text-green-800 rounded-lg">
              Ayarlar kaydedildi!
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Genel Bilgiler */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-secondary-900 mb-4 flex items-center">
              <Globe className="mr-2" size={24} />
              Genel Bilgiler
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Site Adı</label>
                <input
                  type="text"
                  name="siteName"
                  value={settings.siteName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Site Açıklaması</label>
                <textarea
                  name="siteDescription"
                  value={settings.siteDescription}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
          </div>

          {/* İletişim Bilgileri */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-secondary-900 mb-4">İletişim Bilgileri</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <Mail className="mr-2" size={16} />
                  E-posta
                </label>
                <input
                  type="email"
                  name="email"
                  value={settings.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <Phone className="mr-2" size={16} />
                  Telefon
                </label>
                <input
                  type="text"
                  name="phone"
                  value={settings.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <MapPin className="mr-2" size={16} />
                  Adres
                </label>
                <textarea
                  name="address"
                  value={settings.address}
                  onChange={handleChange}
                  rows="2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
          </div>

          {/* Sosyal Medya */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-secondary-900 mb-4">Sosyal Medya</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <Facebook className="mr-2" size={16} />
                  Facebook
                </label>
                <input
                  type="url"
                  name="socialMedia.facebook"
                  value={settings.socialMedia.facebook}
                  onChange={handleChange}
                  placeholder="https://facebook.com/..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <Instagram className="mr-2" size={16} />
                  Instagram
                </label>
                <input
                  type="url"
                  name="socialMedia.instagram"
                  value={settings.socialMedia.instagram}
                  onChange={handleChange}
                  placeholder="https://instagram.com/..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <Linkedin className="mr-2" size={16} />
                  LinkedIn
                </label>
                <input
                  type="url"
                  name="socialMedia.linkedin"
                  value={settings.socialMedia.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <Twitter className="mr-2" size={16} />
                  Twitter
                </label>
                <input
                  type="url"
                  name="socialMedia.twitter"
                  value={settings.socialMedia.twitter}
                  onChange={handleChange}
                  placeholder="https://twitter.com/..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
          </div>

          {/* SEO Ayarları */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-secondary-900 mb-4">SEO Ayarları</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
                <input
                  type="text"
                  name="seo.metaTitle"
                  value={settings.seo.metaTitle}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                <textarea
                  name="seo.metaDescription"
                  value={settings.seo.metaDescription}
                  onChange={handleChange}
                  rows="2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Keywords</label>
                <input
                  type="text"
                  name="seo.metaKeywords"
                  value={settings.seo.metaKeywords}
                  onChange={handleChange}
                  placeholder="keyword1, keyword2, keyword3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              <Save size={20} />
              <span>Ayarları Kaydet</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminSettings;