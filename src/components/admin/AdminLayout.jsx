import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, Settings, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Projeler', href: '/admin/projects', icon: FolderKanban },
    { name: 'Ayarlar', href: '/admin/settings', icon: Settings },
  ];

  const isActive = (path) => {
    if (path === '/admin') return location.pathname === '/admin';
    return location.pathname.startsWith(path);
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar - Desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow bg-secondary-900 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4 py-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">İ</span>
              </div>
              <span className="text-white font-display font-bold text-xl">Admin Panel</span>
            </Link>
          </div>
          
          <nav className="flex-1 px-2 pb-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-300 hover:bg-secondary-800 hover:text-white'
                  }`}
                >
                  <Icon className="mr-3 flex-shrink-0 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex-shrink-0 flex border-t border-secondary-800 p-4">
            <button 
              onClick={handleLogout}
              className="flex items-center text-gray-300 hover:text-white transition-colors w-full"
            >
              <LogOut className="mr-3 h-5 w-5" />
              <span className="text-sm font-medium">Çıkış Yap</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div className="md:hidden">
        <div className="fixed top-0 left-0 right-0 bg-secondary-900 z-40">
          <div className="flex items-center justify-between p-4">
            <span className="text-white font-display font-bold text-xl">Admin Panel</span>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white p-2"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {sidebarOpen && (
          <div className="fixed inset-0 z-30 bg-secondary-900 pt-16">
            <nav className="px-2 py-4 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`group flex items-center px-3 py-3 text-sm font-medium rounded-lg ${
                      isActive(item.href)
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-300 hover:bg-secondary-800 hover:text-white'
                    }`}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
              <button 
                onClick={handleLogout}
                className="group flex items-center px-3 py-3 text-sm font-medium rounded-lg text-gray-300 hover:bg-secondary-800 hover:text-white w-full mt-4"
              >
                <LogOut className="mr-3 h-5 w-5" />
                Çıkış Yap
              </button>
            </nav>
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        <main className="flex-1 pt-16 md:pt-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;