import { createContext, useContext, useState, useEffect } from 'react';

const PagesContext = createContext();

export const usePages = () => {
  const context = useContext(PagesContext);
  if (!context) {
    throw new Error('usePages must be used within PagesProvider');
  }
  return context;
};

export const PagesProvider = ({ children }) => {
  const [aboutPage, setAboutPage] = useState({
    title: 'Hakkımızda',
    subtitle: 'Profesyonel inşaat çözümleri ile 15 yıldır hizmetinizdeyiz',
    description: 'İnşaat Pro olarak, modern mimari anlayışı geleneksel ustalıkla birleştirerek hayallerinizdeki projeleri hayata geçiriyoruz.',
    mission: 'Kalite, güven ve müşteri memnuniyeti odaklı çözümler sunmak.',
    vision: 'Türkiye\'nin en güvenilir inşaat şirketi olmak.',
    values: [],
    stats: [],
    team: []
  });

  const [contactPage, setContactPage] = useState({
    title: 'İletişim',
    subtitle: 'Projeleriniz için bizimle iletişime geçin',
    phone: '+90 555 123 45 67',
    email: 'info@insaatpro.com',
    address: 'Atatürk Cad. No:123, Çankaya, Ankara',
    workingHours: 'Pazartesi - Cuma: 09:00 - 18:00',
    mapUrl: ''
  });

  useEffect(() => {
    const savedAbout = localStorage.getItem('aboutPage');
    const savedContact = localStorage.getItem('contactPage');
    
    if (savedAbout) setAboutPage(JSON.parse(savedAbout));
    if (savedContact) setContactPage(JSON.parse(savedContact));
  }, []);

  const updateAboutPage = (data) => {
    setAboutPage(data);
    localStorage.setItem('aboutPage', JSON.stringify(data));
  };

  const updateContactPage = (data) => {
    setContactPage(data);
    localStorage.setItem('contactPage', JSON.stringify(data));
  };

  return (
    <PagesContext.Provider value={{
      aboutPage,
      contactPage,
      updateAboutPage,
      updateContactPage
    }}>
      {children}
    </PagesContext.Provider>
  );
};