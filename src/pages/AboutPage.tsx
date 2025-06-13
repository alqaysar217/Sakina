import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Star, Target, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'القرآن الكريم',
      description: 'استمع للقرآن بأصوات أشهر القراء مع تجربة استماع مميزة'
    },
    {
      icon: Users,
      title: 'قصص الأنبياء',
      description: 'تعلم من قصص الأنبياء والمرسلين عليهم السلام'
    },
    {
      icon: Heart,
      title: 'الأدعية والأذكار',
      description: 'مجموعة شاملة من الأدعية والأذكار من القرآن والسنة'
    },
    {
      icon: Star,
      title: 'تجربة مميزة',
      description: 'تصميم عصري وسهل الاستخدام مع احترام الطابع الإسلامي'
    }
  ];

  const stats = [
    { number: '100+', label: 'سورة قرآنية' },
    { number: '50+', label: 'قصة نبوية' },
    { number: '200+', label: 'دعاء وذكر' },
    { number: '10+', label: 'قارئ مشهور' }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
          <span className="text-3xl font-bold text-white font-arabic">سَ</span>
        </div>
        <h1 className="text-4xl font-bold gradient-text mb-4 font-arabic">
          عن تطبيق سَكينة
        </h1>
        <p className="text-slate-600 text-lg font-arabic max-w-3xl mx-auto leading-relaxed">
          تطبيق إسلامي متكامل يهدف إلى تقريب المسلمين من كتاب الله وسنة رسوله صلى الله عليه وسلم
          من خلال تجربة تقنية حديثة ومريحة
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-emerald-600 to-blue-600 text-white rounded-2xl p-8 text-center shadow-2xl"
      >
        <Target className="w-16 h-16 mx-auto mb-4 opacity-90" />
        <h2 className="text-3xl font-bold mb-4 font-arabic">رسالتنا</h2>
        <p className="text-lg leading-relaxed font-arabic max-w-2xl mx-auto">
          نسعى لجعل التعلم الإسلامي والتعبد أكثر سهولة ومتعة من خلال التكنولوجيا الحديثة،
          مع الحفاظ على الأصالة والقيم الإسلامية العريقة
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl shadow-lg">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-2 font-arabic">
                  {feature.title}
                </h3>
                <p className="text-slate-600 font-arabic">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200"
      >
        <h2 className="text-2xl font-bold text-center gradient-text mb-8 font-arabic">
          إحصائيات التطبيق
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold gradient-text mb-2 font-arabic">
                {stat.number}
              </div>
              <div className="text-slate-600 font-arabic">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200"
      >
        <div className="text-center">
          <Award className="w-16 h-16 mx-auto mb-4 text-emerald-600" />
          <h2 className="text-2xl font-bold gradient-text mb-4 font-arabic">
            فريق العمل
          </h2>
          <p className="text-slate-600 font-arabic leading-relaxed max-w-2xl mx-auto">
            فريق من المطورين والمختصين في الشريعة الإسلامية يعملون بشغف لتقديم أفضل تجربة
            إسلامية رقمية تجمع بين الأصالة والحداثة
          </p>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="bg-gradient-to-br from-slate-700 to-slate-800 text-white rounded-2xl p-8 text-center shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-4 font-arabic">
          تواصل معنا
        </h2>
        <p className="text-slate-300 mb-6 font-arabic">
          نحن نقدر ملاحظاتكم واقتراحاتكم لتطوير التطبيق
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:pr.mahmoud.20@gmail.com" // تم تحديث البريد الإلكتروني
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors font-arabic"
          >
            pr.mahmoud.20@gmail.com
          </a>
          <a
            href="https://wa.me/967775258830" // تم تحديث رقم الواتساب
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors font-arabic"
          >
            واتساب: +967 775258830
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;