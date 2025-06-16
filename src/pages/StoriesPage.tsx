import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Clock, Heart } from 'lucide-react';
import { useAudioPlayer } from '../contexts/AudioPlayerContext';
import AudioPlayer from '../components/AudioPlayer';

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

const stories: Story[] = [
  {
    id: '1',
    title: 'قصة سيدنا آدم عليه السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '46 دقيقة',
    color: 'from-emerald-500 to-green-600',
    description: 'قصة أبو البشر آدم عليه السلام وخلقه من طين',
    image: 'https://th.bing.com/th/id/R.49b56fe384f048adde87501ba9c1642c?rik=f0EIEPfN9vyqfQ&pid=ImgRaw&r=0',
    audio: 'https://server11.mp3quran.net/qari/001.mp3',
  }
  // {
  //   id: '2',
  //   title: 'قصة سيدنا نوح عليه السلام',
  //   narrator: 'الشيخ نبيل العوضي',
  //   duration: '46 دقيقة',
  //   color: 'from-blue-500 to-cyan-600',
  //   description: 'قصة نوح عليه السلام والطوفان العظيم',
  //   image: 'https://3.bp.blogspot.com/-ddIHSp3NuaQ/WP5jpjaAyeI/AAAAAAAALhw/CXdb0PrPs2oEa1UWzvG7ERKSfKGV6b6DQCLcB/w1200-h630-p-k-no-nu/%25D8%25AF%25D8%25B9%25D8%25A7%25D8%25A1%2B%25D9%258A%25D8%25A7%2B%25D9%2585%25D9%2586%2B%25D8%25AC%25D8%25B9%25D9%2584%25D8%25AA%2B%25D9%2584%25D9%2583%25D9%2584%2B%25D8%25AF%25D8%25A7%25D8%25A1%2B%25D8%25AF%25D9%2588%25D8%25A7%25D8%25A1.jpg',
  //   audio: '/mp3/noah.mp3',
  // },
  // {
  //   id: '3',
  //   title: 'قصة سيدنا إبراهيم عليه السلام',
  //   narrator: 'الشيخ نبيل العوضي',
  //   duration: '45 دقيقة',
  //   color: 'from-orange-500 to-red-600',
  //   description: 'قصة خليل الرحمن إبراهيم عليه السلام',
  //   image: '/public/images/abraham.png',
  //   audio: 'https://docs.google.com/uc?export=download&id=1ufOv2CkK_c1UMzBcFYQAArWJnpzUub2A',
  // },
  // {
  //   id: '4',
  //   title: 'قصة سيدنا هود وصالح عليهما السلام',
  //   narrator: 'الشيخ نبيل العوضي',
  //   duration: '47 دقيقة',
  //   color: 'from-purple-500 to-indigo-600',
  //   description: 'قصة النبيين هود وصالح عليهما السلام',
  //   image: 'https://3.bp.blogspot.com/-ddIHSp3NuaQ/WP5jpjaAyeI/AAAAAAAALhw/CXdb0PrPs2oEa1UWzvG7ERKSfKGV6b6DQCLcB/w1200-h630-p-k-no-nu/%25D8%25AF%25D8%25B9%25D8%25A7%25D8%25A1%2B%25D9%258A%25D8%25A7%2B%25D9%2585%25D9%2586%2B%25D8%25AC%25D8%25B9%25D9%2584%25D8%25AA%2B%25D9%2584%25D9%2583%25D9%2584%2B%25D8%25AF%25D8%25A7%25D8%25A1%2B%25D8%25AF%25D9%2588%25D8%25A7%25D8%25A1.jpg',
  //   audio: 'https://docs.google.com/uc?export=download&id=1e03ZkRLDLM60IDojKcAqeReERT3CeXOt',
  // },
  // {
  //   id: '5',
  //   title: 'قصة سيدنا يوسف عليه السلام',
  //   narrator: 'الشيخ نبيل العوضي',
  //   duration: '47 دقيقة',
  //   color: 'from-yellow-500 to-orange-600',
  //   description: 'قصة يوسف الصديق عليه السلام',
  //   image: '/images/joseph.png',
  //   audio: '/mp3/joseph.mp3',
  // },
  // {
  //   id: '6',
  //   title: 'قصة سيدنا أيوب ويونس وموسى عليهم السلام',
  //   narrator: 'الشيخ نبيل العوضي',
  //   duration: '50 دقيقة',
  //   color: 'from-teal-500 to-emerald-600',
  //   description: 'قصص أيوب ويونس وموسى عليهم السلام',
  //   image: '/images/jobJonahMoses.png',
  //   audio: '/mp3/jobJonahMoses.mp3',
  // },
  // {
  //   id: '7',
  //   title: 'قصة سيدنا عيسى عليه السلام',
  //   narrator: 'الشيخ نبيل العوضي',
  //   duration: '48 دقيقة',
  //   color: 'from-indigo-500 to-purple-600',
  //   description: 'قصة المسيح عيسى عليه السلام',
  //   image: '/images/jesus.png',
  //   audio: '/mp3/jesus.mp3',
  // },
  // {
  //   id: '8',
  //   title: 'قصة سيدنا يوشع وداود وسليمان وزكريا ويحيى عليهم السلام',
  //   narrator: 'الشيخ نبيل العوضي',
  //   duration: '50 دقيقة',
  //   color: 'from-slate-500 to-gray-600',
  //   description: 'قصص مجموعة من الأنبياء',
  //   image: 'https://3.bp.blogspot.com/-ddIHSp3NuaQ/WP5jpjaAyeI/AAAAAAAALhw/CXdb0PrPs2oEa1UWzvG7ERKSfKGV6b6DQCLcB/w1200-h630-p-k-no-nu/%25D8%25AF%25D8%25B9%25D8%25A7%25D8%25A1%2B%25D9%258A%25D8%25A7%2B%25D9%2585%25D9%2586%2B%25D8%25AC%25D8%25B9%25D9%2584%25D8%25AA%2B%25D9%2584%25D9%2583%25D9%2584%2B%25D8%25AF%25D8%25A7%25D8%25A1%2B%25D8%25AF%25D9%2588%25D8%25A7%25D8%25A1.jpg',
  //   audio: '/mp3/joshuaDavidSolomonZechariahJohn.mp3',
  // },
  // {
  //   id: '9',
  //   title: 'قصة سيدنا لوط وشعيب وإسماعيل وإسحاق عليهم السلام',
  //   narrator: 'الشيخ نبيل العوضي',
  //   duration: '348 دقيقة',
  //   color: 'from-amber-500 to-yellow-600',
  //   description: 'قصص لوط وشعيب وإسماعيل وإسحاق عليهم السلام',
  //   image: '/images/lotShuaybIshmaelIsaac.png',
  //   audio: '/mp3/lotShuaybIshmaelIsaac.mp3',
  // },
  // {
  //   id: '10',
  //   title: 'قصة سيدنا موسى (تكملة)',
  //   narrator: 'الشيخ نبيل العوضي',
  //   duration: '50 دقيقة',
  //   color: 'from-red-500 to-pink-600',
  //   description: 'تكملة قصة كليم الله موسى عليه السلام',
  //   image: '/images/continuationMoses.png',
  //   audio: '/mp3/continuationMoses.mp3',
  // },
];

const StoriesPage: React.FC = () => {
  const { playTrack, currentTrack, isPlaying } = useAudioPlayer();

  const playStory = (story: Story) => {
    playTrack({
      id: story.id,
      title: story.title,
      artist: story.narrator,
      image: story.image,
      url: story.audio,
    });
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
          const isCurrent = currentTrack?.id === story.id;
          return (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 card-hover
                ${isCurrent ? 'ring-4 ring-emerald-500' : ''}`}
              onClick={() => playStory(story)}
            >
              <div className="flex items-start space-x-4 space-x-reverse mb-4">
                <div className={`rounded-xl bg-gradient-to-br ${story.color} shadow-lg w-16 h-16 flex items-center justify-center overflow-hidden`}>
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
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
                <button className="p-2 rounded-full hover:bg-slate-50 transition-colors">
                  <Heart className="w-5 h-5 text-slate-600" />
                </button>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    playStory(story);
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

      {/* المشغل الموحد */}
      <AudioPlayer />
    </div>
  );
};

export default StoriesPage;
