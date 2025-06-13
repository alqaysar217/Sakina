// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import QuranPage from './pages/QuranPage';
import StoriesPage from './pages/StoriesPage';
import SupplicationsPage from './pages/SupplicationsPage';
import AzkarPage from './pages/AzkarPage';
import FavoritesPage from './pages/FavoritesPage';
import QuestionPage from './pages/QuestionPage';
import PrivacyPage from './pages/PrivacyPage';
import AboutPage from './pages/AboutPage';
import SharePage from './pages/SharePage';

// تأكد من استيراد AudioPlayerProvider الصحيح من contexts/AudioPlayerContext.tsx
import { AudioPlayerProvider } from './contexts/AudioPlayerContext'; 
// استيراد مكون المشغل الصوتي الجديد
import AudioPlayer from './components/AudioPlayer'; // تأكد من المسار الصحيح

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    // ------------------------------------------------------------------------------------------------------------
    // 1. AudioPlayerProvider يجب أن يغلف كل شيء يحتاج للوصول إلى حالة الصوت.
    // ------------------------------------------------------------------------------------------------------------
    <AudioPlayerProvider>
      <Router>
        {/*
          2. مكون Layout يغلف الـ Routes.
          هذا يعني أن Layout سيكون حول كل محتوى الصفحة.
          مكون AudioPlayer يجب أن يكون خارج Layout مباشرة، ولكنه داخل AudioPlayerProvider.
        */}
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quran" element={<QuranPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/supplications" element={<SupplicationsPage />} />
            <Route path="/azkar" element={<AzkarPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/questions" element={<QuestionPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/share" element={<SharePage />} />
          </Routes>
        </Layout>
        {/*
          3. مكون AudioPlayer يجب أن يكون هنا.
          مباشرة بعد Layout (أو أي مكون يحدد المحتوى الرئيسي)،
          وقبل إغلاق AudioPlayerProvider.
          هذا يضمن أنه سيكون دائمًا ثابتًا في أسفل الشاشة وفوق جميع محتوى الصفحات.
        */}
        <AudioPlayer />
      </Router>
    </AudioPlayerProvider>
  );
}

export default App;