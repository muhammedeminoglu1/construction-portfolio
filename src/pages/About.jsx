import { usePages } from '../contexts/PagesContext';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const { aboutPage } = usePages();

  const valueIcons = {
    'Kalite': Award,
    'Güvenilirlik': Target,
    'Yenilikçilik': Eye,
    'Sürdürülebilirlik': Users
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-r from-secondary-900 to-secondary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-display font-bold text-5xl mb-4">{aboutPage.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl">{aboutPage.subtitle}</p>
        </div>
      </div>

      {/* About */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-12">{aboutPage.description}</p>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="font-display font-bold text-2xl text-secondary-900 mb-4">Misyonumuz</h3>
              <p className="text-gray-700">{aboutPage.mission}</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="font-display font-bold text-2xl text-secondary-900 mb-4">Vizyonumuz</h3>
              <p className="text-gray-700">{aboutPage.vision}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {aboutPage.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <h2 className="font-display font-bold text-3xl text-center mb-12">Değerlerimiz</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {aboutPage.values.map((value, index) => {
              const Icon = valueIcons[value.title] || Award;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <Icon className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-secondary-900 mb-2">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Team */}
          <h2 className="font-display font-bold text-3xl text-center mb-12">Ekibimiz</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {aboutPage.team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="font-bold text-lg text-secondary-900">{member.name}</h4>
                <p className="text-primary-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;