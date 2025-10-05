import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '../../contexts/ProjectContext';
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react';


const AdminProjects = () => {
  const { projects, deleteProject } = useProjects();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id) => {
    if (window.confirm('Bu projeyi silmek istediğinizden emin misiniz?')) {
      deleteProject(id);
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-secondary-900">Projeler</h1>
          <p className="text-gray-600 mt-1">Tüm projelerinizi yönetin</p>
        </div>
        <Link
          to="/admin/projects/new"
          className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Plus size={20} />
          <span>Yeni Proje</span>
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Proje ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">Tüm Durumlar</option>
            <option value="Tamamlandı">Tamamlandı</option>
            <option value="Devam Ediyor">Devam Ediyor</option>
            <option value="Planlama">Planlama</option>
          </select>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proje</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Konum</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durum</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlemler</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProjects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img src={project.images[0]} alt="" className="w-12 h-12 rounded-lg object-cover" />
                    <span className="ml-3 font-medium text-secondary-900">{project.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 capitalize">{project.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{project.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    project.status === 'Tamamlandı' ? 'bg-green-100 text-green-800' :
                    project.status === 'Devam Ediyor' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center space-x-3">
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-gray-600 hover:text-primary-600"
                      title="Görüntüle"
                    >
                      <Eye size={18} />
                    </Link>
                    <Link
                      to={`/admin/projects/${project.id}/edit`}
                      className="text-gray-600 hover:text-primary-600"
                      title="Düzenle"
                    >
                      <Edit size={18} />
                    </Link>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="text-gray-600 hover:text-red-600"
                      title="Sil"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProjects;