import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Clock, Heart } from 'lucide-react';
import { useAudioPlayer } from '../contexts/AudioPlayerContext'; // استيراد الـ hook الخاص بالمشغل

// تعريف واجهة (Interface) لبيانات القصة
interface Story {
  id: string;
  title: string;
  narrator: string;
  duration: string;
  color: string;
  description: string;
  image: string;
  audio: string;
}

// بيانات القصص
const stories: Story[] = [
  {
    id: '1',
    title: 'قصة سيدنا آدم عليه السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '46 دقيقة',
    color: 'from-emerald-500 to-green-600',
    description: 'قصة أبو البشر آدم عليه السلام وخلقه من طين',
    image: '/images/Adam.png',
    audio: '/mp3/Adam.mp3',
  },
  {
    id: '2',
    title: 'قصة سيدنا نوح عليه السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '46 دقيقة',
    color: 'from-blue-500 to-cyan-600',
    description: 'قصة نوح عليه السلام والطوفان العظيم',
    image: '/images/Noah.png',
    audio: '/mp3/Noah.mp3',
  },
  {
    id: '3',
    title: 'قصة سيدنا إبراهيم عليه السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '45 دقيقة',
    color: 'from-orange-500 to-red-600',
    description: 'قصة خليل الرحمن إبراهيم عليه السلام',
    image: '/images/Abraham.png',
    audio: '/mp3/Abraham.mp3',
  },
  {
    id: '4',
    title: 'قصة سيدنا هود وصالح عليهما السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '47 دقيقة',
    color: 'from-purple-500 to-indigo-600',
    description: 'قصة النبيين هود وصالح عليهما السلام',
    image: '/images/HudSalih.png',
    audio: '/mp3/HudSalih.mp3',
  },
  {
    id: '5',
    title: 'قصة سيدنا يوسف عليه السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '47 دقيقة',
    color: 'from-yellow-500 to-orange-600',
    description: 'قصة يوسف الصديق عليه السلام',
    image: '/images/Joseph.png',
    audio: '/mp3/Joseph.mp3',
  },
  {
    id: '6',
    title: 'قصة سيدنا أيوب ويونس وموسى عليهم السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '50 دقيقة',
    color: 'from-teal-500 to-emerald-600',
    description: 'قصص أيوب ويونس وموسى عليهم السلام',
    image: '/images/JobJonahMoses.png',
    audio: '/mp3/JobJonahMoses.mp3',
  },
  {
    id: '7',
    title: 'قصة سيدنا عيسى عليه السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '48 دقيقة',
    color: 'from-indigo-500 to-purple-600',
    description: 'قصة المسيح عيسى عليه السلام',
    image: '/images/Jesus.png',
    audio: '/mp3/Jesus.mp3',
  },
  {
    id: '8',
    title: 'قصة سيدنا يوشع وداود وسليمان وزكريا ويحيى عليهم السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '50 دقيقة',
    color: 'from-slate-500 to-gray-600',
    description: 'قصص مجموعة من الأنبياء',
    image: '/images/JoshuaDavidSolomonZechariahJohn.png',
    audio: '/mp3/JoshuaDavidSolomonZechariahJohn.mp3',
  },
  {
    id: '9',
    title: 'قصة سيدنا لوط وشعيب وإسماعيل وإسحاق عليهم السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '348 دقيقة', // هذا الرقم يبدو كبيراً جداً (348 دقيقة = 5.8 ساعات)، يرجى التحقق منه
    color: 'from-amber-500 to-yellow-600',
    description: 'قصص لوط وشعيب وإسماعيل وإسحاق عليهم السلام',
    image: '/images/LotShuaybIshmaelIsaac.png',
    audio: '/mp3/LotShuaybIshmaelIsaac.mp3',
  },
  {
    id: '10',
    title: 'قصة سيدنا موسى (تكملة)',
    narrator: 'الشيخ نبيل العوضي',
    duration: '50 دقيقة',
    color: 'from-red-500 to-pink-600',
    description: 'تكملة قصة كليم الله موسى عليه السلام',
    image: '/images/ContinuationMoses.png',
    audio: '/mp3/ContinuationMoses.mp3',
  },
];

const StoriesPage: React.FC = () => {
  // استخدام currentTrack و isPlaying و setPlaylistAndPlay من سياق المشغل
  const { currentTrack, isPlaying, setPlaylistAndPlay } = useAudioPlayer();

  // دالة لتشغيل قصة
  const playStory = (story: Story) => {
    // بناء قائمة تشغيل كاملة للقصص من مصفوفة stories
    const fullStoriesPlaylist = stories.map(s => ({
      id: s.id,
      title: s.title,
      artist: s.narrator,
      image: s.image,
      url: s.audio,
    }));

    // تعيين قائمة التشغيل الكاملة وتشغيل القصة المحددة منها
    // هذا سيسمح لأزرار "التالي" و "السابق" في المشغل بالعمل بين القصص
    setPlaylistAndPlay(fullStoriesPlaylist, story.id);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <h1 className="text-3xl font-bold gradient-text mb-4 font-arabic">قصص الأنبياء</h1>
        <p className="text-slate-600 font-arabic">
          استمع لقصص الأنبياء والمرسلين عليهم السلام
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, index) => {
          // التحقق إذا كانت هذه القصة هي القصة الحالية التي يتم تشغيلها
          const isCurrent = currentTrack?.id === story.id;
          return (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              // تصميم البطاقة
              className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 card-hover
                ${isCurrent ? 'ring-4 ring-emerald-500' : ''}`} {/* إضافة حلقة حول البطاقة إذا كانت القصة هي الحالية */}
              onClick={() => playStory(story)} // عند النقر على البطاقة، قم بتشغيل القصة
            >
              <div className="flex items-start space-x-4 space-x-reverse mb-4">
                {/* صورة القصة/القارئ */}
                <div className={`rounded-xl bg-gradient-to-br ${story.color} shadow-lg w-16 h-16 flex items-center justify-center overflow-hidden`}>
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* تفاصيل القصة */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-800 mb-2 font-arabic">{story.title}</h3>
                  <p className="text-emerald-600 text-sm mb-1 font-arabic">{story.narrator}</p>
                  <div className="flex items-center space-x-2 space-x-reverse text-sm text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span className="font-arabic">{story.duration}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm mb-4 font-arabic">{story.description}</p>

              <div className="flex items-center justify-between">
                {/* زر المفضلة (لا يقوم بشيء حالياً) */}
                <button className="p-2 rounded-full hover:bg-slate-50 transition-colors">
                  <Heart className="w-5 h-5 text-slate-600" />
                </button>

                {/* زر التشغيل/الإيقاف */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation(); // منع النقر على البطاقة بالكامل عند النقر على الزر لتجنب تشغيل القصة مرتين
                    playStory(story); // تشغيل القصة
                  }}
                  className="flex items-center space-x-2 space-x-reverse px-6 py-3 bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  {isCurrent && isPlaying ? (
                    <>
                      <Pause className="w-5 h-5" />
                      <span className="font-arabic">جاري التشغيل</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" />
                      <span className="font-arabic">استمع الآن</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* تم إزالة المشغل من هنا - سيتم عرضه بواسطة Layout.tsx لضمان عدم التكرار */}
    </div>
  );
};

export default StoriesPage;