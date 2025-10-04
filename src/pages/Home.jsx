import { Link } from 'react-router-dom';
import { Building2, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Building2,
      title: 'Modern Tasarım',
      description: 'En son teknoloji ve tasarım trendleri ile projelerinizi hayata geçiriyoruz.'
    },
    {
      icon: Users,
      title: 'Uzman Ekip',
      description: 'Alanında uzman mühendis ve mimarlık kadromuz ile hizmetinizdeyiz.'
    },
    {
      icon: Award,
      title: 'Kalite Garantisi',
      description: 'ISO sertifikalı, uluslararası standartlarda kaliteli işçilik garantisi.'
    }
  ];

  const stats = [
    { number: '150+', label: 'Tamamlanan Proje' },
    { number: '50+', label: 'Uzman Çalışan' },
    { number: '15', label: 'Yıllık Tecrübe' },
    { number: '98%', label: 'Müşteri Memnuniyeti' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Rezidans',
      location: 'Çankaya, Ankara',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      category: 'Konut'
    },
    {
      id: 2,
      title: 'İş Merkezi',
      location: 'Kızılay, Ankara',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      category: 'Ticari'
    },
    {
      id: 3,
      title: 'Lüks Villa',
      location: 'Beştepe, Ankara',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      category: 'Konut'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-blue-600">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 to-secondary-900/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
              Hayallerinizdeki
              <span className="block text-primary-400">Projeyi İnşa Ediyoruz</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Modern inşaat çözümleri ile kaliteli, güvenilir ve profesyonel hizmet. 
              15 yıllık tecrübemizle yanınızdayız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/projects"
                className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center justify-center group"
              >
                Projelerimizi İnceleyin
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors inline-flex items-center justify-center"
              >
                İletişime Geçin
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display font-bold text-4xl md:text-5xl text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-secondary-900 mb-4">
              Neden Bizi Seçmelisiniz?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Profesyonel ekibimiz ve kaliteli hizmet anlayışımız ile fark yaratıyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="text-primary-600" size={32} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-secondary-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-secondary-900 mb-4">
              Son Projelerimiz
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Tamamladığımız başarılı projelere göz atın
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 via-secondary-900/50 to-transparent flex flex-col justify-end p-6">
                  <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full mb-3 w-fit">
                    {project.category}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-200">{project.location}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors group"
            >
              Tüm Projeleri Görüntüle
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            Projeniz İçin Hemen Başlayalım
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz sizin için en iyi çözümü üretmeye hazır
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Ücretsiz Teklif Alın
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;