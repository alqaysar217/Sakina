import React from 'react';
import { motion } from 'framer-motion';
// تم إزالة استيرادات React Native لأن مشروعك هو React/Vite ويب عادي
// import { Image, View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';

// الأيقونات من Lucide React
import { Play, Clock, Heart, Crown, Anchor, Mountain, Move as Dove, Star, Shield, Zap, Sun, Moon } from 'lucide-react';
import { useAudioPlayer } from '../contexts/AudioPlayerContext';

// استيراد الصور المحلية بالأسماء الجديدة
import AdamImage from '../assets/images/Adam.png';
import AbrahamImage from '../assets/images/Abraham.png';
import ContinuationMosesImage from '../assets/images/ContinuationMoses.png';
import HudAndSalihImage from '../assets/images/HudSalih.png';
import JesusImage from '../assets/images/Jesus.png';
import JobJonahMosesImage from '../assets/images/JobJonahMoses.png';
import JosephImage from '../assets/images/Joseph.png';
import JoshuaDavidSolomonZechariahJohnImage from '../assets/images/JoshuaDavidSolomonZechariahJohn.png';
import LotShuaybIshmaelIsaacImage from '../assets/images/LotShuaybIshmaelIsaac.png';
import NoahImage from '../assets/images/Noah.png';
// أضف هنا استيراد أي صور أخرى جديدة إذا كانت موجودة

// استيراد ملفات الصوت المحلية بالأسماء الجديدة
import AdamAudio from '../assets/mp3/Adam.mp3';
import AbrahamAudio from '../assets/mp3/Abraham.mp3';
import ContinuationMosesAudio from '../assets/mp3/ContinuationMoses.mp3';
import HudAndSalihAudio from '../assets/mp3/HudSalih.mp3';
import JesusAudio from '../assets/mp3/Jesus.mp3';
import JobJonahMosesAudio from '../assets/mp3/JobJonahMoses.mp3';
import JosephAudio from '../assets/mp3/Joseph.mp3';
import JoshuaDavidSolomonZechariahJohnAudio from '../assets/mp3/JoshuaDavidSolomonZechariahJohn.mp3';
import LotShuaybIshmaelIsaacAudio from '../assets/mp3/LotShuaybIshmaelIsaac.mp3';
import NoahAudio from '../assets/mp3/Noah.mp3';
// أضف هنا استيراد أي ملفات صوتية أخرى جديدة إذا كانت موجودة


const StoriesPage: React.FC = () => {
  const { playTrack } = useAudioPlayer();

  const stories = [
    {
      id: '1',
      title: 'قصة سيدنا آدم عليه السلام',
      narrator: 'الشيخ نبيل العوضي',
      duration: '46 دقيقة',
      icon: Crown,
      color: 'from-emerald-500 to-green-600',
      description: 'قصة أبو البشر آدم عليه السلام وخلقه من طين',
      image: AdamImage,
      url: AdamAudio
    },
    {
      id: '2',
      title: 'قصة سيدنا نوح عليه السلام',
      narrator: 'الشيخ نبيل العوضي',
      duration: '46 دقيقة',
      icon: Anchor,
      color: 'from-blue-500 to-cyan-600',
      description: 'قصة نوح عليه السلام والطوفان العظيم',
      image: NoahImage,
      url: NoahAudio
    },
    {
      id: '3',
      title: 'قصة سيدنا إبراهيم عليه السلام',
      narrator: 'الشيخ نبيل العوضي',
      duration: '45 دقيقة',
      icon: Mountain,
      color: 'from-orange-500 to-red-600',
      description: 'قصة خليل الرحمن إبراهيم عليه السلام',
      image: AbrahamImage,
      url: AbrahamAudio
    },
    {
      id: '4',
      title: 'قصة سيدنا هود وصالح عليهما السلام',
      narrator: 'الشيخ نبيل العوضي',
      duration: '47 دقيقة',
      icon: Dove,
      color: 'from-purple-500 to-indigo-600',
      description: 'قصة النبيين هود وصالح عليهما السلام',
      image: HudAndSalihImage,
      url: HudAndSalihAudio
    },
    {
      id: '5',
      title: 'قصة سيدنا يوسف عليه السلام',
      narrator: 'الشيخ نبيل العوضي',
      duration: '47 دقيقة',
      icon: Star,
      color: 'from-yellow-500 to-orange-600',
      description: 'قصة يوسف الصديق عليه السلام',
      image: JosephImage,
      url: JosephAudio
    },
    {
      id: '6',
      title: 'قصة سيدنا أيوب ويونس وموسى عليهم السلام',
      narrator: 'الشيخ نبيل العوضي',
      duration: '50 دقيقة',
      icon: Shield,
      color: 'from-teal-500 to-emerald-600',
      description: 'قصص أيوب ويونس وموسى عليهم السلام',
      image: JobJonahMosesImage,
      url: JobJonahMosesAudio
    },
    {
      id: '7',
      title: 'قصة سيدنا عيسى عليه السلام',
      narrator: 'الشيخ نبيل العوضي',
      duration: '48 دقيقة',
      icon: Crown,
      color: 'from-indigo-500 to-purple-600',
      description: 'قصة المسيح عيسى عليه السلام',
      image: JesusImage,
      url: JesusAudio
    },
    {
      id: '8',
      title: 'قصة سيدنا يوشع وداود وسليمان وزكريا ويحيى عليهم السلام',
      narrator: 'الشيخ نبيل العوضي',
      duration: '50 دقيقة',
      icon: Mountain,
      color: 'from-slate-500 to-gray-600',
      description: 'قصص مجموعة من الأنبياء',
      image: JoshuaDavidSolomonZechariahJohnImage,
      url: JoshuaDavidSolomonZechariahJohnAudio
    },
    {
      id: '9',
      title: 'قصة سيدنا لوط وشعيب وإسماعيل وإسحاق عليهم السلام',
      narrator: 'الشيخ نبيل العوضي',
      duration: '348 دقيقة',
      icon: Zap,
      color: 'from-amber-500 to-yellow-600',
      description: 'قصص لوط وشعيب وإسماعيل وإسحاق عليهم السلام',
      image: LotShuaybIshmaelIsaacImage,
      url: LotShuaybIshmaelIsaacAudio
    },
    {
      id: '10',
      title: 'قصة سيدنا موسى (تكملة)',
      narrator: 'الشيخ نبيل العوضي',
      duration: '50 دقيقة',
      icon: Sun,
      color: 'from-red-500 to-pink-600',
      description: 'تكملة قصة كليم الله موسى عليه السلام',
      image: ContinuationMosesImage,
      url: ContinuationMosesAudio
    },
  ];

  const handlePlayStory = (story: any) => {
    playTrack({
      id: story.id,
      title: story.title,
      artist: story.narrator,
      image: story.image,
      url: story.url
    });
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <h1 className="text-3xl font-bold gradient-text mb-4 font-arabic">
          قصص الأنبياء
        </h1>
        <p className="text-slate-600 font-arabic">
          استمع لقصص الأنبياء والمرسلين عليهم السلام
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 card-hover"
          >
            <div className="flex items-start space-x-4 space-x-reverse mb-4">
              {/* هنا التعديل الرئيسي: إزالة p-4 من الـ div واستخدام w-16 h-16 لجعله مربعاً */}
              <div className={`rounded-xl bg-gradient-to-br ${story.color} shadow-lg w-16 h-16 flex items-center justify-center overflow-hidden`}>
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover" // تم إزالة rounded-xl من هنا لأنه موجود على div الأب الآن
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-800 mb-2 font-arabic">
                  {story.title}
                </h3>
                <p className="text-emerald-600 text-sm mb-1 font-arabic">
                  {story.narrator}
                </p>
                <div className="flex items-center space-x-2 space-x-reverse text-sm text-slate-600">
                  <Clock className="w-4 h-4" />
                  <span className="font-arabic">{story.duration}</span>
                </div>
              </div>
            </div>

            <p className="text-slate-600 text-sm mb-4 font-arabic">
              {story.description}
            </p>

            <div className="flex items-center justify-between">
              <button className="p-2 rounded-full hover:bg-slate-50 transition-colors">
                <Heart className="w-5 h-5 text-slate-600" />
              </button>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePlayStory(story)}
                className="flex items-center space-x-2 space-x-reverse px-6 py-3 bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                <span className="font-arabic">استمع الآن</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StoriesPage;