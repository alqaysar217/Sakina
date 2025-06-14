import React, { useState, useRef, useEffect } from 'react'; // تم إضافة useState, useRef, useEffect
import { motion } from 'framer-motion';
// تم إزالة استيرادات React Native لأن مشروعك هو React/Vite ويب عادي
// import { Image, View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';

// الأيقونات من Lucide React
import { Play, Clock, Heart, Crown, Anchor, Mountain, Move as Dove, Star, Shield, Zap, Sun, Moon, Pause, FastForward, Rewind, Volume2, VolumeX, Share2 } from 'lucide-react'; // تم إضافة أيقونات التحكم بالصوت
// تم إزالة useAudioPlayer لأننا سنستخدم مشغل صوت داخلي للمكون
// import { useAudioPlayer } from '../contexts/AudioPlayerContext';

// تم إزالة جميع استيرادات الصور وملفات الصوت المحلية هنا
// لأنها ستُحمّل مباشرةً من مجلد public باستخدام مسارات مطلقة

interface Story {
  id: string; // id يمكن أن يكون string أو number حسب استخدامك
  title: string;
  narrator: string;
  duration: string; // المدة كنص
  description: string;
  icon: React.ElementType; // نوع الأيقونة
  color: string; // اللون للتصميم
  image: string; // المسار الآن سيكون مباشرًا من public
  audio: string; // المسار الآن سيكون مباشرًا من public
}

const stories: Story[] = [
  {
    id: '1',
    title: 'قصة سيدنا آدم عليه السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '46 دقيقة',
    icon: Crown,
    color: 'from-emerald-500 to-green-600',
    description: 'قصة أبو البشر آدم عليه السلام وخلقه من طين',
    image: '/images/Adam.png', // تم التعديل إلى مسار مباشر
    audio: '/mp3/Adam.mp3', // تم التعديل إلى مسار مباشر
  },
  {
    id: '2',
    title: 'قصة سيدنا نوح عليه السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '46 دقيقة',
    icon: Anchor,
    color: 'from-blue-500 to-cyan-600',
    description: 'قصة نوح عليه السلام والطوفان العظيم',
    image: '/images/Noah.png', // تم التعديل إلى مسار مباشر
    audio: '/mp3/Noah.mp3', // تم التعديل إلى مسار مباشر
  },
  {
    id: '3',
    title: 'قصة سيدنا إبراهيم عليه السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '45 دقيقة',
    icon: Mountain,
    color: 'from-orange-500 to-red-600',
    description: 'قصة خليل الرحمن إبراهيم عليه السلام',
    image: '/images/Abraham.png', // تم التعديل إلى مسار مباشر
    audio: '/mp3/Abraham.mp3', // تم التعديل إلى مسار مباشر
  },
  {
    id: '4',
    title: 'قصة سيدنا هود وصالح عليهما السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '47 دقيقة',
    icon: Dove,
    color: 'from-purple-500 to-indigo-600',
    description: 'قصة النبيين هود وصالح عليهما السلام',
    image: '/images/HudSalih.png', // تم التعديل إلى مسار مباشر
    audio: '/mp3/HudSalih.mp3', // تم التعديل إلى مسار مباشر
  },
  {
    id: '5',
    title: 'قصة سيدنا يوسف عليه السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '47 دقيقة',
    icon: Star,
    color: 'from-yellow-500 to-orange-600',
    description: 'قصة يوسف الصديق عليه السلام',
    image: '/images/Joseph.png', // تم التعديل إلى مسار مباشر
    audio: '/mp3/Joseph.mp3', // تم التعديل إلى مسار مباشر
  },
  {
    id: '6',
    title: 'قصة سيدنا أيوب ويونس وموسى عليهم السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '50 دقيقة',
    icon: Shield,
    color: 'from-teal-500 to-emerald-600',
    description: 'قصص أيوب ويونس وموسى عليهم السلام',
    image: '/images/JobJonahMoses.png', // تم التعديل إلى مسار مباشر
    audio: '/mp3/JobJonahMoses.mp3', // تم التعديل إلى مسار مباشر
  },
  {
    id: '7',
    title: 'قصة سيدنا عيسى عليه السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '48 دقيقة',
    icon: Crown,
    color: 'from-indigo-500 to-purple-600',
    description: 'قصة المسيح عيسى عليه السلام',
    image: '/images/Jesus.png', // تم التعديل إلى مسار مباشر
    audio: '/mp3/Jesus.mp3', // تم التعديل إلى مسار مباشر
  },
  {
    id: '8',
    title: 'قصة سيدنا يوشع وداود وسليمان وزكريا ويحيى عليهم السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '50 دقيقة',
    icon: Mountain,
    color: 'from-slate-500 to-gray-600',
    description: 'قصص مجموعة من الأنبياء',
    image: '/images/JoshuaDavidSolomonZechariahJohn.png', // تم التعديل إلى مسار مباشر
    audio: '/mp3/JoshuaDavidSolomonZechariahJohn.mp3', // تم التعديل إلى مسار مباشر
  },
  {
    id: '9',
    title: 'قصة سيدنا لوط وشعيب وإسماعيل وإسحاق عليهم السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '348 دقيقة', // تأكد من هذه المدة الطويلة
    icon: Zap,
    color: 'from-amber-500 to-yellow-600',
    description: 'قصص لوط وشعيب وإسماعيل وإسحاق عليهم السلام',
    image: '/images/LotShuaybIshmaelIsaac.png', // تم التعديل إلى مسار مباشر
    audio: '/mp3/LotShuaybIshmaelIsaac.mp3', // تم التعديل إلى مسار مباشر
  },
  {
    id: '10',
    title: 'قصة سيدنا موسى (تكملة)',
    narrator: 'الشيخ نبيل العوضي',
    duration: '50 دقيقة',
    icon: Sun,
    color: 'from-red-500 to-pink-600',
    description: 'تكملة قصة كليم الله موسى عليه السلام',
    image: '/images/ContinuationMoses.png', // تم التعديل إلى مسار مباشر
    audio: '/mp3/ContinuationMoses.mp3', // تم التعديل إلى مسار مباشر
  },
];

const StoriesPage: React.FC = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // 0 to 1
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const currentStory = currentStoryIndex !== null ? stories[currentStoryIndex] : null;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const updateTime = () => setCurrentTime(audio.currentTime);

    const togglePlayPauseState = () => { // تم تغيير اسم الدالة لتجنب التضارب
      setIsPlaying(!audio.paused);
    };

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('play', togglePlayPauseState); // استخدام الدالة الجديدة
    audio.addEventListener('pause', togglePlayPauseState); // استخدام الدالة الجديدة
    audio.addEventListener('ended', () => {
      setIsPlaying(false);
      setCurrentTime(0);
    });

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('play', togglePlayPauseState); // استخدام الدالة الجديدة
      audio.removeEventListener('pause', togglePlayPauseState); // استخدام الدالة الجديدة
      audio.removeEventListener('ended', () => {
        setIsPlaying(false);
        setCurrentTime(0);
      });
    };
  }, [currentStoryIndex]);

  const playStory = (index: number) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setCurrentStoryIndex(index);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.load(); // Reload the audio source
        audioRef.current.play().catch(error => console.error('Error playing audio:', error));
        setIsPlaying(true);
      }
    }, 100); // Small delay to ensure source is loaded
  };

  const togglePlayPause = () => { // هذه هي الدالة المستخدمة في الزر
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.error('Error playing audio:', error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, duration);
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      setIsMuted(prev => !prev);
      audioRef.current.volume = isMuted ? volume : 0;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleShare = () => {
    if (currentStory) {
      const shareData = {
        title: `استمع لقصة: ${currentStory.title}`,
        text: `استمع لقصة ${currentStory.title} للشيخ ${currentStory.narrator} من تطبيق سَكينة الإسلامي:`,
        url: window.location.href, // يمكن تعديل هذا إذا كان لكل قصة رابط مباشر
      };

      if (typeof navigator !== 'undefined' && 'share' in navigator) {
        navigator.share(shareData).catch(err => console.error('Error sharing:', err));
      } else {
        // Fallback for browsers that don't support Web Share API
        alert('المشاركة غير مدعومة في متصفحك. يمكنك نسخ الرابط يدوياً.');
        console.log('Share Data:', shareData);
      }
    }
  };


  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
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
            className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 card-hover
                        ${currentStoryIndex === index ? 'ring-4 ring-emerald-500' : ''}`} {/* إضافة حلقة حول القصة المختارة */}
            onClick={() => playStory(index)}
          >
            <div className="flex items-start space-x-4 space-x-reverse mb-4">
              {/* أيقونة القصة أو الصورة المصغرة */}
              <div className={`rounded-xl bg-gradient-to-br ${story.color} shadow-lg w-16 h-16 flex items-center justify-center overflow-hidden`}>
                <img
                  src={story.image} // المسار الآن مباشر
                  alt={story.title}
                  className="w-full h-full object-cover"
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
                onClick={() => playStory(index)} {/* استدعاء playStory مباشرة */}
                className="flex items-center space-x-2 space-x-reverse px-6 py-3 bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-xl hover:shadow-lg transition-all duration-300"
              >
                {currentStoryIndex === index && isPlaying ? (
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
        ))}
      </div>

      {currentStory && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-2xl rounded-t-xl z-50 border-t border-slate-200"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-800 font-arabic">{currentStory.title}</h3>
            <span className="text-sm text-gray-600 font-arabic">{currentStory.narrator}</span>
          </div>

          <div className="flex items-center space-x-4 space-x-reverse mb-3">
            {/* المشغل الصوتي الفعلي */}
            <audio ref={audioRef} src={currentStory.audio} preload="auto" />
            <button onClick={togglePlayPause} className="p-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors">
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button onClick={skipBackward} className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
              <Rewind size={20} />
            </button>
            <button onClick={skipForward} className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
              <FastForward size={20} />
            </button>

            <div className="flex-1">
              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={(e) => {
                  if (audioRef.current) {
                    audioRef.current.currentTime = parseFloat(e.target.value);
                  }
                }}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <button onClick={toggleMute} className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
              {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-20 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
             <button onClick={handleShare} className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default StoriesPage;