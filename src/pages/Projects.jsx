import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin, Calendar, Building2 } from 'lucide-react';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'konut', name: 'Konut' },
    { id: 'ticari', name: 'Ticari' },
    { id: 'endustriyel', name: 'Endüstriyel' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Rezidans Çankaya',
      category: 'konut',
      location: 'Çankaya, Ankara',
      date: '2024',
      area: '15.000 m²',
      status: 'Tamamlandı',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      description: 'Modern mimari anlayışla tasarlanmış lüks rezidans projesi'
    },
    {
      id: 2,
      title: 'İş Merkezi Kızılay',
      category: 'ticari',
      location: 'Kızılay, Ankara',
      date: '2024',
      area: '25.000 m²',
      status: 'Devam Ediyor',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      description: 'A+ ofis standartlarında iş merkezi'
    },
    {
      id: 3,
      title: 'Lüks Villa Projesi',
      category: 'konut',
      location: 'Beştepe, Ankara',
      date: '2023',
      area: '2.500 m²',
      status: 'Tamamlandı',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      description: 'Özel tasarım müstakil villa projesi'
    },
    {
      id: 4,
      title: 'Endüstriyel Tesis',
      category: 'endustriyel',
      location: 'OSB, Ankara',
      date: '2024',
      area: '50.000 m²',
      status: 'Devam Ediyor',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
      description: 'Modern üretim tesisi projesi'
    },
    {
      id: 5,
      title: 'AVM Projesi',
      category: 'ticari',
      location: 'Eryaman, Ankara',
      date: '2023',
      area: '35.000 m²',
      status: 'Tamamlandı',
      image: 'https://images.unsplash.com/photo-1519642918688-7e43b19245d8?w=800',
      description: 'Bölgesel alışveriş merkezi projesi'
    },
    {
      id: 6,
      title: 'Konut Kompleksi',
      category: 'konut',
      location: 'Batıkent, Ankara',
      date: '2024',
      area: '45.000 m²',
      status: 'Planlama',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      description: '500 konutlu modern yaşam kompleksi'
    },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Tamamlandı': return 'bg-green-100 text-green-800';
      case 'Devam Ediyor': return 'bg-blue-100 text-blue-800';
      case 'Planlama': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-secondary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Projelerimiz
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Tamamladığımız ve devam eden projelerimizi keşfedin
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-sm sticky top-20 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Proje ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-2xl text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Building2 size={16} className="mr-2" />
                    <span className="text-sm">{project.area}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{project.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aradığınız kriterlere uygun proje bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;