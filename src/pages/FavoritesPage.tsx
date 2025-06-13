import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Play, BookOpen, Users, Sparkles } from 'lucide-react';

const FavoritesPage: React.FC = () => {
  const favorites = [
    {
      id: '1',
      type: 'quran',
      title: 'سورة البقرة',
      subtitle: 'عبد الرحمن السديس',
      icon: BookOpen,
      color: 'from-emerald-600 to-emerald-700'
    },
    {
      id: '2',
      type: 'story',
      title: 'قصة سيدنا يوسف عليه السلام',
      subtitle: 'الشيخ نبيل العوضي',
      icon: Users,
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: '3',
      type: 'supplication',
      title: 'دعاء بر الوالدين',
      subtitle: 'من القرآن الكريم',
      icon: Heart,
      color: 'from-rose-600 to-rose-700'
    },
    {
      id: '4',
      type: 'azkar',
      title: 'أذكار الصباح',
      subtitle: '15 ذكر وحديث',
      icon: Sparkles,
      color: 'from-purple-600 to-purple-700'
    }
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <h1 className="text-3xl font-bold gradient-text mb-4 font-arabic">
          المفضلة
        </h1>
        <p className="text-emerald-700 font-arabic">
          المحتوى المحفوظ والمفضل لديك
        </p>
      </motion.div>

      {favorites.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <Heart className="w-16 h-16 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-600 mb-4 font-arabic">
            لا توجد مفضلة بعد
          </h2>
          <p className="text-gray-500 font-arabic">
            ابدأ بإضافة المحتوى المفضل لديك من القرآن والأدعية والأذكار
          </p>
        </motion.div>
      ) : (
        <div className="space-y-4">
          {favorites.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 card-hover"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1 font-arabic">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-arabic">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 space-x-reverse">
                  <button className="p-3 rounded-full hover:bg-emerald-50 transition-colors">
                    <Heart className="w-6 h-6 text-red-500 fill-current" />
                  </button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-gradient-to-br from-emerald-600 to-gold-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <Play className="w-4 h-4" />
                    <span className="font-arabic">تشغيل</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;