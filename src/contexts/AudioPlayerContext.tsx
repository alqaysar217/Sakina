// src/contexts/AudioPlayerContext.tsx

import React, { createContext, useContext, useRef, useState, useEffect, useCallback, useMemo, ReactNode } from 'react';



// ------------------------------------------------------------------------------------------------------------------

// 1. تعريف أنواع البيانات (Interfaces)

// ------------------------------------------------------------------------------------------------------------------



// تعريف نوع بيانات للمسار الصوتي (الأغنية/السورة)

interface Track {

  id: string;      // معرف فريد للمسار

  title: string;   // عنوان المسار (مثال: سورة الفاتحة)

  artist: string;  // اسم الفنان/القارئ

  image: string;   // رابط صورة غلاف المسار

  url: string;     // رابط ملف الصوت (MP3)

}



// تعريف نوع بيانات لـ AudioPlayerContext (ما سيوفره الـ Context)

interface AudioPlayerContextType {

  currentTrack: Track | null; // المسار الحالي الذي يتم تشغيله

  isPlaying: boolean;         // هل المشغل قيد التشغيل حاليًا؟

  duration: number;           // المدة الإجمالية للمسار بالثواني

  currentTime: number;        // الوقت الحالي للمسار بالثواني

  volume: number;             // مستوى الصوت (0 إلى 1)

  loop: boolean;              // هل المشغل يعيد تكرار المسار الحالي؟

  shuffle: boolean;           // هل التشغيل عشوائي؟

 

  // وظائف التحكم بالمشغل

  togglePlayPause: () => void;       // تبديل بين التشغيل والإيقاف المؤقت

  playTrack: (track: Track) => void; // تشغيل مسار جديد

  playNextTrack: () => void;         // تشغيل المسار التالي في القائمة

  playPreviousTrack: () => void;     // تشغيل المسار السابق في القائمة

  setVolume: (volume: number) => void; // تعيين مستوى الصوت

  seekTo: (time: number) => void;    // الانتقال لوقت محدد في المسار

  toggleLoop: () => void;            // تبديل وضع التكرار

  toggleShuffle: () => void;         // تبديل وضع التشغيل العشوائي

  setSleepTimer: (minutes: number) => void; // تعيين مؤقت النوم

  stopTrack: () => void;             // إيقاف تشغيل المسار تمامًا

}



const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);



export const useAudioPlayer = () => {

  const context = useContext(AudioPlayerContext);

  if (context === undefined) {

    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');

  }

  return context;

};



interface AudioPlayerProviderProps {

  children: ReactNode;

}



export const AudioPlayerProvider: React.FC<AudioPlayerProviderProps> = ({ children }) => {

  const audioRef = useRef<HTMLAudioElement | null>(null);



  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const [duration, setDuration] = useState<number>(0);

  const [currentTime, setCurrentTime] = useState<number>(0);

  const [volume, setVolume] = useState<number>(0.7);

  const [loop, setLoop] = useState<boolean>(false);

  const [shuffle, setShuffle] = useState<boolean>(false);

  const [playlist, setPlaylist] = useState<Track[]>([]);

 

  const sleepTimerRef = useRef<NodeJS.Timeout | null>(null);



  useEffect(() => {

    if (!audioRef.current) {

        audioRef.current = new Audio();

    }

    const audio = audioRef.current;

    audio.volume = volume;



    const setAudioData = () => {

      setDuration(audio.duration);

      setCurrentTime(audio.currentTime);

    };



    const updateTime = () => {

      setCurrentTime(audio.currentTime);

    };



    const handlePlay = () => setIsPlaying(true);

    const handlePause = () => setIsPlaying(false);

    const handleEnded = () => {

      setIsPlaying(false);

      if (loop) {

        audio.play();

        setIsPlaying(true);

      } else {

        playNextTrack(); // Correctly calls the function

      }

    };



    audio.addEventListener('loadeddata', setAudioData);

    audio.addEventListener('timeupdate', updateTime);

    audio.addEventListener('ended', handleEnded);

    audio.addEventListener('play', handlePlay);

    audio.addEventListener('pause', handlePause);



    return () => {

      audio.removeEventListener('loadeddata', setAudioData);

      audio.removeEventListener('timeupdate', updateTime);

      audio.removeEventListener('ended', handleEnded);

      audio.removeEventListener('play', handlePlay);

      audio.removeEventListener('pause', handlePause);

      if (sleepTimerRef.current) {

        clearTimeout(sleepTimerRef.current);

      }

    };

  }, [volume, loop]);



  useEffect(() => {

    if (audioRef.current) {

      audioRef.current.volume = volume;

    }

  }, [volume]);



  const togglePlayPause = useCallback(() => {

    if (!audioRef.current || !currentTrack) return;



    if (isPlaying) {

      audioRef.current.pause();

    } else {

      audioRef.current.play().catch(error => {

        console.error('Error playing audio:', error);

        setIsPlaying(true);

      });

    }

    setIsPlaying(prev => !prev);

  }, [isPlaying, currentTrack]);



  const playTrack = useCallback((track: Track) => {

    if (!audioRef.current) return;



    setPlaylist(prevPlaylist => {

      if (!prevPlaylist.some(t => t.id === track.id)) {

        return [...prevPlaylist, track];

      }

      return prevPlaylist;

    });



    setCurrentTrack(track);

    audioRef.current.src = track.url;

    audioRef.current.load();

    audioRef.current.play().catch(error => {

      console.error('Error playing audio:', error);

      setIsPlaying(true);

    });

    setIsPlaying(true);

  }, []);



  const seekTo = useCallback((time: number) => {

    if (audioRef.current) {

      audioRef.current.currentTime = time;

      setCurrentTime(time);

    }

  }, []);



  const toggleLoop = useCallback(() => {

    if (audioRef.current) {

      audioRef.current.loop = !loop;

    }

    setLoop(prev => !prev);

  }, [loop]);



  const toggleShuffle = useCallback(() => {

    setShuffle(prev => !prev);

  }, []);



  const stopTrack = useCallback(() => {

    if (audioRef.current) {

      audioRef.current.pause();

      audioRef.current.currentTime = 0;

    }

    setIsPlaying(false);

    setCurrentTrack(null);

    setCurrentTime(0);

    setDuration(0);

    if (sleepTimerRef.current) {

        clearTimeout(sleepTimerRef.current);

        sleepTimerRef.current = null;

    }

  }, []);



  const playNextTrack = useCallback(() => {

    if (!currentTrack || playlist.length === 0) return;



    const currentIndex = playlist.findIndex(track => track.id === currentTrack.id);

    let nextIndex;



    if (shuffle) {

      if (playlist.length <= 1) {

        return;

      }

      do {

        nextIndex = Math.floor(Math.random() * playlist.length);

      } while (nextIndex === currentIndex);

    } else {

      nextIndex = (currentIndex + 1) % playlist.length;

    }



    if (nextIndex !== -1 && playlist[nextIndex]) {

      playTrack(playlist[nextIndex]);

    } else if (!shuffle && playlist.length > 0) {

        stopTrack();

    }

  }, [currentTrack, playlist, shuffle, playTrack, stopTrack]);



  const playPreviousTrack = useCallback(() => {

    if (!currentTrack || playlist.length === 0) return;



    const currentIndex = playlist.findIndex(track => track.id === currentTrack.id);

    let prevIndex;



    if (shuffle) {

      if (playlist.length <= 1) {

        return;

      }

      do {

        prevIndex = Math.floor(Math.random() * playlist.length);

      } while (prevIndex === currentIndex);

    } else {

      prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;

    }



    if (prevIndex !== -1 && playlist[prevIndex]) {

      playTrack(playlist[prevIndex]);

    }

  }, [currentTrack, playlist, shuffle, playTrack]);



  const setSleepTimer = useCallback((minutes: number) => {

    if (sleepTimerRef.current) {

      clearTimeout(sleepTimerRef.current);

      sleepTimerRef.current = null;

    }

    if (minutes > 0) {

      sleepTimerRef.current = setTimeout(() => {

        stopTrack();

      }, minutes * 60 * 1000);

      alert(`سيتم إيقاف التشغيل تلقائياً بعد ${minutes} دقيقة.`);

    } else {

        alert('تم إلغاء مؤقت النوم.');

    }

  }, [stopTrack]);



  const value = useMemo(() => ({

    currentTrack,

    isPlaying,

    duration,

    currentTime,

    volume,

    loop,

    shuffle,

    togglePlayPause,

    playTrack,

    playNextTrack, // **هنا كان الخطأ! تم تصحيحه من fplayNextTrack إلى playNextTrack**

    playPreviousTrack,

    setVolume,

    seekTo,

    toggleLoop,

    toggleShuffle,

    setSleepTimer,

    stopTrack,

  }), [

    currentTrack,

    isPlaying,

    duration,

    currentTime,

    volume,

    loop,

    shuffle,

    togglePlayPause,

    playTrack,

    playNextTrack,

    playPreviousTrack,

    setVolume,

    seekTo,

    toggleLoop,

    toggleShuffle,

    setSleepTimer,

    stopTrack,

  ]);



  return (

    <AudioPlayerContext.Provider value={value}>

      {children}

    </AudioPlayerContext.Provider>

  );

};