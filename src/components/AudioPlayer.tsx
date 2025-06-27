import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useAudioPlayer } from '../contexts/AudioPlayerContext';
import { Play, Pause, SkipForward, SkipBack, Volume2, Repeat, Shuffle, ChevronDown, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AudioPlayer: React.FC = () => {
  const {
    currentTrack,
    isPlaying,
    togglePlayPause,
    playNextTrack,
    playPreviousTrack,
    volume,
    setVolume,
    loop,
    toggleLoop,
    shuffle,
    toggleShuffle,
    duration,
    currentTime,
    seekTo,
    stopTrack,
  } = useAudioPlayer();

  const [showFullPlayer, setShowFullPlayer] = useState(false);
  const [userWantsHidden, setUserWantsHidden] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false); // ✅ جديد
  const [prevVolume, setPrevVolume] = useState(volume);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (currentTrack) {
      if (!hasOpenedOnce) {
        setShowFullPlayer(true);
        setHasOpenedOnce(true);
      } else if (!userWantsHidden) {
        setShowFullPlayer(true);
      }
    }
  }, [currentTrack, userWantsHidden, hasOpenedOnce]);

  useEffect(() => {
    if (isPlaying && showFullPlayer) {
      if (timerRef.current) clearTimeout(timerRef.current);
    } else if (!isPlaying && timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, showFullPlayer, currentTrack]);

  const formatTime = (time: number) => {
    if (isNaN(time) || time < 0) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleTogglePlayerVisibility = useCallback(() => {
    setShowFullPlayer(prev => {
      const newState = !prev;
      setUserWantsHidden(!newState);
      return newState;
    });
  }, []);

  const handleProgressBarChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    seekTo(parseFloat(e.target.value));
  }, [seekTo]);

  const toggleMute = useCallback(() => {
    if (volume > 0) {
      setPrevVolume(volume);
      setVolume(0);
    } else {
      setVolume(prevVolume > 0 ? prevVolume : 0.7);
    }
  }, [volume, setVolume, prevVolume]);

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      {!showFullPlayer && (
        <motion.div
          className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg cursor-pointer z-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={handleTogglePlayerVisibility}
          aria-label={isPlaying ? "إيقاف مؤقت" : "تشغيل"}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </motion.div>
      )}

      <AnimatePresence>
        {showFullPlayer && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full max-w-2xl mx-auto border border-emerald-200 dark:border-emerald-700 relative"
          >
            <button
              onClick={handleTogglePlayerVisibility}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="إخفاء المشغل"
            >
              <ChevronDown size={20} />
            </button>

            <div className="w-full text-center md:text-right mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate whitespace-normal line-clamp-2">
                {currentTrack.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                {currentTrack.artist}
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-2 flex-shrink-0">
              <img
                src={currentTrack.image || 'https://via.placeholder.com/150'}
                alt={currentTrack.title}
                className="w-20 h-20 rounded-lg object-cover shadow-md"
              />
              <div className="flex items-center justify-center md:justify-start space-x-2 md:space-x-1 mt-2 flex-wrap">
                <button
                  onClick={toggleMute}
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
                  aria-label="تبديل الكتم"
                >
                  {volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-16 h-1 bg-emerald-200 rounded-lg appearance-none cursor-pointer range-xs dark:bg-gray-700 accent-emerald-500 transition-colors duration-200"
                  aria-label="مستوى الصوت"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center w-full md:w-auto">
              <div className="w-full flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600 dark:text-gray-400">{formatTime(currentTime)}</span>
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleProgressBarChange}
                  className="flex-1 mx-2 h-1 bg-emerald-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700 accent-emerald-500 transition-colors duration-200"
                  aria-label="شريط التقدم"
                />
                <span className="text-xs text-gray-600 dark:text-gray-400">{formatTime(duration)}</span>
              </div>

              <div className="flex items-center space-x-4 md:space-x-6 rtl:space-x-reverse mt-2">
                <button
                  onClick={toggleShuffle}
                  className={`p-2 rounded-full ${shuffle ? 'bg-emerald-100 text-emerald-600' : 'hover:bg-gray-100 text-gray-500'} dark:${shuffle ? 'bg-emerald-900 text-emerald-400' : 'hover:bg-gray-700 text-gray-400'} transition-colors`}
                  aria-label="Shuffle"
                >
                  <Shuffle size={20} />
                </button>

                <button onClick={playPreviousTrack} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <SkipBack size={24} className="text-gray-700 dark:text-gray-300" />
                </button>

                <button onClick={togglePlayPause} className="p-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-md">
                  {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                </button>

                <button onClick={playNextTrack} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <SkipForward size={24} className="text-gray-700 dark:text-gray-300" />
                </button>

                <button
                  onClick={toggleLoop}
                  className={`p-2 rounded-full ${loop ? 'bg-emerald-100 text-emerald-600' : 'hover:bg-gray-100 text-gray-500'} dark:${loop ? 'bg-emerald-900 text-emerald-400' : 'hover:bg-gray-700 text-gray-400'} transition-colors`}
                  aria-label="Loop"
                >
                  <Repeat size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AudioPlayer;
