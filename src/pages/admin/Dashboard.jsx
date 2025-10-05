import { useProjects } from '../../contexts/ProjectContext';
import { TrendingUp, Eye, Users, FolderKanban, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const AdminDashboard = () => {
  const { projects } = useProjects();

  // Mock trafik verileri - gerçek uygulamada API'den gelecek
  const trafficData = [
    { name: 'Pzt', ziyaretci: 1200, goruntulenme: 4000 },
    { name: 'Sal', ziyaretci: 1900, goruntulenme: 5400 },
    { name: 'Çar', ziyaretci: 2100, goruntulenme: 6100 },
    { name: 'Per', ziyaretci: 2400, goruntulenme: 7200 },
    { name: 'Cum', ziyaretci: 2800, goruntulenme: 8500 },
    { name: 'Cmt', ziyaretci: 1800, goruntulenme: 5200 },
    { name: 'Paz', ziyaretci: 1500, goruntulenme: 4300 },
  ];

  const projectStats = [
    { name: 'Tamamlandı', value: projects.filter(p => p.status === 'Tamamlandı').length, color: '#10b981' },
    { name: 'Devam Ediyor', value: projects.filter(p => p.status === 'Devam Ediyor').length, color: '#3b82f6' },
    { name: 'Planlama', value: projects.filter(p => p.status === 'Planlama').length, color: '#f59e0b' },
  ];

  const stats = [
    {
      name: 'Toplam Ziyaretçi',
      value: '14.2K',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      name: 'Sayfa Görüntüleme',
      value: '42.8K',
      change: '+18.2%',
      trend: 'up',
      icon: Eye,
      color: 'bg-green-500',
    },
    {
      name: 'Aktif Projeler',
      value: projects.length,
      change: '+2',
      trend: 'up',
      icon: FolderKanban,
      color: 'bg-purple-500',
    },
    {
      name: 'Ortalama Süre',
      value: '3:24',
      change: '+8.1%',
      trend: 'up',
      icon: TrendingUp,
      color: 'bg-orange-500',
    },
  ];

  const recentProjects = projects.slice(0, 5);

  const COLORS = ['#10b981', '#3b82f6', '#f59e0b'];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold text-secondary-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Hoş geldiniz! İşte sitenizin genel görünümü.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="text-white" size={24} />
                </div>
                <span className={`flex items-center text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                  {stat.trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-secondary-900">{stat.value}</p>
                <p className="text-sm text-gray-600 mt-1">{stat.name}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Traffic Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-secondary-900">Haftalık Trafik</h2>
              <p className="text-sm text-gray-600 mt-1">Ziyaretçi ve sayfa görüntüleme istatistikleri</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={trafficData}>
              <defs>
                <linearGradient id="colorZiyaretci" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorGoruntulenme" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Area type="monotone" dataKey="ziyaretci" stroke="#3b82f6" fillOpacity={1} fill="url(#colorZiyaretci)" />
              <Area type="monotone" dataKey="goruntulenme" stroke="#10b981" fillOpacity={1} fill="url(#colorGoruntulenme)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Project Stats */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-secondary-900 mb-6">Proje Durumları</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={projectStats}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {projectStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-6 space-y-2">
            {projectStats.map((stat, index) => (
              <div key={stat.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                  <span className="text-sm text-gray-600">{stat.name}</span>
                </div>
                <span className="text-sm font-semibold text-secondary-900">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-secondary-900 mb-4">Son Projeler</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proje</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Konum</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durum</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarih</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentProjects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img src={project.images[0]} alt="" className="w-10 h-10 rounded-lg object-cover" />
                      <span className="ml-3 font-medium text-secondary-900">{project.title}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 capitalize">{project.category}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">{project.location}</td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      project.status === 'Tamamlandı' ? 'bg-green-100 text-green-800' :
                      project.status === 'Devam Ediyor' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">{project.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;