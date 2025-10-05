import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Building2, Download, Eye, Grid3x3, Maximize2 } from 'lucide-react';
import { useProjects } from '../contexts/ProjectContext';
import UnityViewer from '../components/unity/UnityViewer';

const ProjectDetail = () => {
  const { id } = useParams();
  const { getProjectById } = useProjects();
  const project = getProjectById(id);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Proje Bulunamadı</h2>
          <p className="text-gray-600 mb-4">Aradığınız proje mevcut değil.</p>
          <Link to="/projects" className="text-primary-600 hover:text-primary-700">
            Projelere Dön
          </Link>
        </div>
      </div>
    );
  }

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
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-display font-bold text-2xl">3D Sanal Tur</h2>
                  <p className="text-gray-600 mt-2">Projeyi 360° olarak inceleyin</p>
                </div>
              </div>
              
              <UnityViewer 
                buildFolder={project.unityBuildUrl || "/unity-builds/project-1"}
                width="100%"
                height="700px"
              />
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <Building2 className="mr-2 text-primary-600" size={24} />
                Unity Build Nasıl Eklenir?
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Unity'de projenizi WebGL olarak build alın</li>
                <li>Build klasörünü <code className="bg-white px-2 py-1 rounded">public/unity-builds/project-1/</code> altına kopyalayın</li>
                <li>Build klasöründe şu dosyalar olmalı: Build.loader.js, Build.data, Build.framework.js, Build.wasm</li>
                <li>Sayfayı yenileyin</li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;