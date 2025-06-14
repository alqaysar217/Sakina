import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, FastForward, Rewind, Volume2, VolumeX, Share2 } from 'lucide-react';
import { Howl } from 'howler'; // استيراد Howl من howler

interface Story {
  id: string;
  title: string;
  narrator: string;
  duration: string;
  description: string;
  icon: React.ElementType;
  color: string;
  image: string;
  audio: string;
}

const stories: Story[] = [
  {
    id: '1',
    title: 'قصة سيدنا آدم عليه السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '46 دقيقة',
    icon: Play, // يمكن تغيير الأيقونة هنا حسب رغبتك
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
    icon: Play,
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
    icon: Play,
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
    icon: Play,
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
    icon: Play,
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
    icon: Play,
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
    icon: Play,
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
    icon: Play,
    color: 'from-slate-500 to-gray-600',
    description: 'قصص مجموعة من الأنبياء',
    image: '/images/JoshuaDavidSolomonZechariahJohn.png',
    audio: '/mp3/JoshuaDavidSolomonZechariahJohn.mp3',
  },
  {
    id: '9',
    title: 'قصة سيدنا لوط وشعيب وإسماعيل وإسحاق عليهم السلام',
    narrator: 'الشيخ نبيل العوضي',
    duration: '348 دقيقة', // تأكد من هذه المدة الطويلة
    icon: Play,
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
    icon: Play,
    color: 'from-red-500 to-pink-600',
    description: 'تكملة قصة كليم الله موسى عليه السلام',
    image: '/images/ContinuationMoses.png',
    audio: '/mp3/ContinuationMoses.mp3',
  },
];

const StoriesPage: React.FC = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState<number | null>(null);
  const [sound, setSound] = useState<Howl | null>(null); // سنستخدم Howl هنا
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // 0 to 1
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);


  const currentStory = currentStoryIndex !== null ? stories[currentStoryIndex] : null;

  // توقف الصوت الحالي عند تغيير القصة أو إلغاء تحميل المكون
  useEffect(() => {
    if (sound) {
      sound.stop();
      sound.unload(); // لتحرير الموارد
    }
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    return () => {
      if (sound) {
        sound.unload();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentStoryIndex]); // توقف الصوت الحالي عند تغيير القصة


  // عندما يتم تغيير القصة، قم بإنشاء كائن Howl جديد
  useEffect(() => {
    if (currentStory) {
      if (sound) {
        sound.unload(); // تفريغ الصوت القديم
      }
      const newSound = new Howl({
        src: [currentStory.audio],
        html5: true, // مهم جدًا لتشغيل الملفات الكبيرة والتحكم فيها
        volume: isMuted ? 0 : volume,
        onplay: () => {
          setIsPlaying(true);
          setDuration(newSound.duration());
          intervalRef.current = setInterval(() => {
            setCurrentTime(newSound.seek() as number);
          }, 1000); // تحديث كل ثانية
        },
        onpause: () => {
          setIsPlaying(false);
          if (intervalRef.current) clearInterval(intervalRef.current);
        },
        onend: () => {
          setIsPlaying(false);
          setCurrentTime(0);
          if (intervalRef.current) clearInterval(intervalRef.current);
        },
        onstop: () => {
            setIsPlaying(false);
            setCurrentTime(0);
            if (intervalRef.current) clearInterval(intervalRef.current);
        },
        onloaderror: (id, error) => {
          console.error('Error loading audio with Howler.js:', id, error);
        },
        onplayerror: (id, error) => {
          console.error('Error playing audio with Howler.js:', id, error);
        }
      });
      setSound(newSound);
      // إذا كان there is a previous sound playing and the new sound is ready, play it
      newSound.once('load', () => {
        if (currentStoryIndex !== null) { // فقط إذا كانت هناك قصة محددة
            newSound.play();
        }
      });
    }
  }, [currentStoryIndex]); // أعد إنشاء الصوت عند تغيير currentStoryIndex


  // تحديث مستوى الصوت والكتم
  useEffect(() => {
    if (sound) {
      sound.volume(isMuted ? 0 : volume);
    }
  }, [volume, isMuted, sound]);


  const playStory = (index: number) => {
    // إذا كانت القصة الحالية هي نفسها، قم بالتبديل بين التشغيل والإيقاف المؤقت
    if (currentStoryIndex === index && sound) {
      togglePlayPause();
    } else {
      // إذا كانت قصة جديدة، قم بتغيير القصة وتشغيلها
      setCurrentStoryIndex(index);
      // Howler سيقوم بتحميل وتشغيل الصوت الجديد في useEffect
    }
  };

  const togglePlayPause = () => {
    if (sound) {
      if (isPlaying) {
        sound.pause();
      } else {
        sound.play();
      }
    }
  };

  const skipForward = () => {
    if (sound) {
      const newSeek = Math.min((sound.seek() as number) + 10, duration);
      sound.seek(newSeek);
      setCurrentTime(newSeek);
    }
  };

  const skipBackward = () => {
    if (sound) {
      const newSeek = Math.max((sound.seek() as number) - 10, 0);
      sound.seek(newSeek);
      setCurrentTime(newSeek);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (sound) {
      sound.volume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    setIsMuted(prev => {
      const newMutedState = !prev;
      if (sound) {
        sound.volume(newMutedState ? 0 : volume);
      }
      return newMutedState;
    });
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `<span class="math-inline">\{minutes\}\:</span>{seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleShare = () => {
    if (currentStory) {
      const shareData = {
        title: `استمع لقصة: ${currentStory.title}`,
        text: `استمع لقصة ${currentStory.title} للشيخ ${currentStory.narrator} من تطبيق سَكينة الإسلامي:`,
        url: window.location.href,
      };

      if (typeof navigator !== 'undefined' && 'share' in navigator) {
        navigator.share(shareData).catch(err => console.error('Error sharing:', err));
      } else {
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
                        ${currentStoryIndex === index ? 'ring-4 ring-emerald-500' : ''}`}
            onClick={() => playStory(index)}
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
                onClick={(e) => {
                  e.stopPropagation(); // منع النقر على البطاقة بالكامل
                  playStory(index);
                }}
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
            {/* Howler.js لا يستخدم عنصر <audio> مباشر هنا، بل يدير التشغيل داخليًا */}
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
                  if (sound) {
                    sound.seek(parseFloat(e.target.value));
                    setCurrentTime(parseFloat(e.target.value)); // تحديث الزمن المعروض فوراً
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