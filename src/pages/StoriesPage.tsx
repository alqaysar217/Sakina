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
    image: 'https://res.cloudinary.com/ddayx3vdf/image/upload/v1750954495/adam_yoxdst.png',
    audio: 'https://res.cloudinary.com/ddayx3vdf/video/upload/v1750952095/adam_yqpp1u.mp3',
  },
  {
    id: '2',
    title: 'قصة سيدنا نوح عليه السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '46 دقيقة',
    color: 'from-blue-500 to-cyan-600',
    description: 'قصة نوح عليه السلام والطوفان العظيم',
    image: 'https://res.cloudinary.com/ddayx3vdf/image/upload/v1750954216/noah_doney8.png',
    audio: 'https://res.cloudinary.com/ddayx3vdf/video/upload/v1750952414/noah_l1lljt.mp3',
  },
  {
    id: '3',
    title: 'قصة سيدنا إبراهيم عليه السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '45 دقيقة',
    color: 'from-orange-500 to-red-600',
    description: 'قصة خليل الرحمن إبراهيم عليه السلام',
    image: 'https://res.cloudinary.com/ddayx3vdf/image/upload/v1750954512/abraham_nogsij.png',
    audio: 'https://res.cloudinary.com/ddayx3vdf/video/upload/v1750888354/abraham_ysjfjm.mp3',
  },
  {
    id: '4',
    title: 'قصة سيدنا هود وصالح عليهما السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '47 دقيقة',
    color: 'from-purple-500 to-indigo-600',
    description: 'قصة النبيين هود وصالح عليهما السلام',
    image: 'https://res.cloudinary.com/ddayx3vdf/image/upload/v1750954523/hudSalih_z5e6zv.png',
    audio: 'https://res.cloudinary.com/ddayx3vdf/video/upload/v1750952024/hudSalih_vfforc.mp3',
  },
  {
    id: '5',
    title: 'قصة سيدنا يوسف عليه السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '47 دقيقة',
    color: 'from-yellow-500 to-orange-600',
    description: 'قصة يوسف الصديق عليه السلام',
    image: 'https://res.cloudinary.com/ddayx3vdf/image/upload/v1750954380/joseph_d7m0yb.png',
    audio: 'https://res.cloudinary.com/ddayx3vdf/video/upload/v1750952326/joseph_oxioxw.mp3',
  },
  {
    id: '6',
    title: 'قصة سيدنا أيوب ويونس وموسى عليهم السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '50 دقيقة',
    color: 'from-teal-500 to-emerald-600',
    description: 'قصص أيوب ويونس وموسى عليهم السلام',
    image: 'https://res.cloudinary.com/ddayx3vdf/image/upload/v1750954284/jobJonahMoses_kf95v7.png',
    audio: 'https://res.cloudinary.com/ddayx3vdf/video/upload/v1750952082/jobJonahMoses_zh7uke.mp3',
  },
  {
    id: '7',
    title: 'قصة سيدنا عيسى عليه السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '48 دقيقة',
    color: 'from-indigo-500 to-purple-600',
    description: 'قصة المسيح عيسى عليه السلام',
    image: 'https://res.cloudinary.com/ddayx3vdf/image/upload/v1750954512/jesus_mm6fy0.png',
    audio: 'https://res.cloudinary.com/ddayx3vdf/video/upload/v1750952167/jesus_hn2hxn.mp3',
  },
  {
    id: '8',
    title: 'قصة سيدنا يوشع وداود وسليمان وزكريا ويحيى عليهم السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '50 دقيقة',
    color: 'from-slate-500 to-gray-600',
    description: 'قصص مجموعة من الأنبياء',
    image: 'https://res.cloudinary.com/ddayx3vdf/image/upload/v1750954389/joshuaDavidSolomonZechariahJohn_jhriak.png',
    audio: 'https://res.cloudinary.com/ddayx3vdf/video/upload/v1750952448/joshuaDavidSolomonZechariahJohn_i3qvgu.mp3',
  },
  {
    id: '9',
    title: 'قصة سيدنا لوط وشعيب وإسماعيل وإسحاق عليهم السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '348 دقيقة',
    color: 'from-amber-500 to-yellow-600',
    description: 'قصص لوط وشعيب وإسماعيل وإسحاق عليهم السلام',
    image: 'https://res.cloudinary.com/ddayx3vdf/image/upload/v1750954371/lotShuaybIshmaelIsaac_unqzph.png',
    audio: 'https://res.cloudinary.com/ddayx3vdf/video/upload/v1750952437/lotShuaybIshmaelIsaac_ifn05z.mp3',
  },
  {
    id: '10',
    title: 'قصة سيدنا موسى (تكملة)',
    narrator: 'الشيخ نبيل العوضي',
    duration: '50 دقيقة',
    color: 'from-red-500 to-pink-600',
    description: 'تكملة قصة كليم الله موسى عليه السلام',
    image: 'https://res.cloudinary.com/ddayx3vdf/image/upload/v1750954524/continuationMoses_b0gct1.png',
    audio: 'https://res.cloudinary.com/ddayx3vdf/video/upload/v1750952218/continuationMoses_m8njgs.mp3',
  },
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
