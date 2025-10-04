import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Building2, Users, Download, Eye, Grid3x3, Maximize2 } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock data - Gerçek projede API'den gelecek
  const project = {
    id: 1,
    title: 'Modern Rezidans Çankaya',
    category: 'Konut',
    location: 'Çankaya, Ankara',
    date: '2024',
    area: '15.000 m²',
    status: 'Tamamlandı',
    client: 'Özel Müşteri',
    duration: '18 Ay',
    description: 'Modern mimari anlayışla tasarlanmış, yüksek kalite standartlarında lüks rezidans projesi. Çevre dostu malzemeler kullanılarak inşa edilmiş, enerji verimliliği yüksek bir yapı.',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
    ],
    features: [
      'Akıllı Ev Sistemleri',
      'Merkezi Klima',
      'Kapalı Otopark',
      'Sosyal Tesisler',
      'Güvenlik Kameraları',
      'Yeşil Alan Düzenlemesi'
    ],
    specifications: {
      'Toplam Alan': '15.000 m²',
      'Daire Sayısı': '120 Adet',
      'Kat Sayısı': '12 Kat',
      'Asansör': '4 Adet',
      'Otopark': '150 Araç Kapasiteli',
    },
    floorPlans: [
      {
        id: 1,
        title: '2+1 Daire Planı',
        area: '95 m²',
        image: 'https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=800',
      },
      {
        id: 2,
        title: '3+1 Daire Planı',
        area: '135 m²',
        image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800',
      },
      {
        id: 3,
        title: '4+1 Daire Planı',
        area: '185 m²',
        image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800',
      },
    ],
    unityBuildUrl: '/unity-builds/project-1/index.html' // Unity build path
  };

  const tabs = [
    { id: 'overview', name: 'Genel Bakış', icon: Eye },
    { id: 'gallery', name: 'Galeri', icon: Grid3x3 },
    { id: 'floorplans', name: 'Kat Planları', icon: Maximize2 },
    { id: '3dview', name: '3D Görünüm', icon: Building2 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Image */}
      <div className="relative h-96 bg-secondary-900">
        <img
          src={project.images[selectedImage]}
          alt={project.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 to-transparent"></div>
        
        {/* Back Button */}
        <Link
          to="/projects"
          className="absolute top-8 left-8 flex items-center space-x-2 text-white hover:text-primary-400 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Projelere Dön</span>
        </Link>

        {/* Title */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-4">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-2">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-gray-300">
              <div className="flex items-center">
                <MapPin size={18} className="mr-2" />
                {project.location}
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                {project.date}
              </div>
              <div className="flex items-center">
                <Building2 size={18} className="mr-2" />
                {project.area}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-600 hover:text-primary-600'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="font-display font-bold text-2xl mb-4">Proje Hakkında</h2>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="font-display font-bold text-2xl mb-6">Özellikler</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-display font-bold text-xl mb-4">Proje Detayları</h3>
                <div className="space-y-3">
                  {Object.entries(project.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">{key}</span>
                      <span className="font-semibold text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary-600 rounded-2xl p-6 text-white">
                <h3 className="font-display font-bold text-xl mb-4">İletişime Geçin</h3>
                <p className="mb-4">Bu proje hakkında detaylı bilgi almak için bizimle iletişime geçin.</p>
                <Link
                  to="/contact"
                  className="block w-full py-3 bg-white text-primary-600 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
                >
                  Bilgi Al
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <img
                src={project.images[selectedImage]}
                alt="Selected"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-32 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-4 ring-primary-600' : ''
                  }`}
                >
                  <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Floor Plans Tab */}
        {activeTab === 'floorplans' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.floorPlans.map((plan) => (
              <div key={plan.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img src={plan.image} alt={plan.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl mb-2">{plan.title}</h3>
                  <p className="text-gray-600 mb-4">{plan.area}</p>
                  <button className="flex items-center space-x-2 text-primary-600 font-medium hover:text-primary-700">
                    <Download size={18} />
                    <span>PDF İndir</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3D View Tab */}
        {activeTab === '3dview' && (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="font-display font-bold text-2xl mb-6">3D Sanal Tur</h2>
            <div className="bg-gray-100 rounded-lg p-12 text-center">
              <Building2 size={64} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 mb-4">Unity 3D viewer burada yüklenecek</p>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Unity WebGL build entegrasyonu gelecek</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;