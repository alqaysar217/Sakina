import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, Heart, Sparkles, Star, HelpCircle } from 'lucide-react';
import TasbihCounter from '../components/TasbihCounter';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: BookOpen,
      title: 'القرآن الكريم',
      description: 'استمع للقرآن بأصوات أشهر القراء',
      path: '/quran',
      color: 'from-emerald-600 to-teal-700'
    },
    {
      icon: Users,
      title: 'قصص الأنبياء',
      description: 'قصص الأنبياء والمرسلين',
      path: '/stories',
      color: 'from-blue-600 to-indigo-700'
    },
    {
      icon: Heart,
      title: 'الأدعية الهامة',
      description: 'أدعية من القرآن والسنة',
      path: '/supplications',
      color: 'from-rose-600 to-pink-700'
    },
    {
      icon: Sparkles,
      title: 'الأذكار والأحاديث',
      description: 'أذكار الصباح والمساء والأحاديث',
      path: '/azkar',
      color: 'from-purple-600 to-violet-700'
    },
    {
      icon: HelpCircle,
      title: 'الأسئلة الإسلامية',
      description: 'أسئلة وأجوبة في الدين',
      path: '/questions',
      color: 'from-orange-600 to-amber-700'
    },
    {
      icon: Star,
      title: 'المفضلة',
      description: 'المحتوى المحفوظ والمفضل',
      path: '/favorites',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-8"
      >
        <h1 className="text-4xl font-bold gradient-text mb-4 font-arabic">
          أهلاً وسهلاً بك في سَكينة
        </h1>
        <p className="text-slate-600 text-lg font-arabic">
          التطبيق الإسلامي المتكامل للقرآن والقصص والأدعية والأذكار
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => navigate(service.path)}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer card-hover border border-slate-200"
          >
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-2 font-arabic">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm font-arabic">
                  {service.description}
                </p>
              </div>
              <div className="text-slate-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tasbih Counter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <TasbihCounter />
      </motion.div>

      {/* Quote Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="bg-gradient-to-br from-slate-700 to-slate-800 text-white rounded-2xl p-8 text-center shadow-2xl"
      >
        <div className="text-4xl mb-4">📿</div>
        <blockquote className="text-xl font-semibold mb-4 font-arabic">
          "وَاذْكُرُوا اللَّهَ كَثِيرًا لَّعَلَّكُمْ تُفْلِحُونَ"
        </blockquote>
        <cite className="text-slate-300 font-arabic">سورة الأنفال - آية 45</cite>
      </motion.div>
    </div>
  );
};

export default HomePage;