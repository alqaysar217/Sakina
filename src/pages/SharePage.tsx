import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Copy, MessageCircle, Mail, Facebook, Twitter, Instagram, Check, Youtube } from 'lucide-react';

const SharePage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  
  const appUrl = window.location.origin;
  const shareText = 'اكتشف تطبيق "سَكينة" - التطبيق الإسلامي المتكامل للقرآن الكريم والأدعية والأذكار';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(appUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'تطبيق سَكينة',
          text: shareText,
          url: appUrl,
        });
      } catch (err) {
        console.error('Error sharing: ', err);
      }
    }
  };

  const shareOptions = [
    {
      name: 'واتساب',
      icon: MessageCircle,
      color: 'from-green-500 to-green-600',
      // تم تغيير هذا ليقود إلى محادثة واتساب مع رقمك
      url: `https://wa.me/967775258830` 
    },
    {
      name: 'فيسبوك',
      icon: Facebook,
      color: 'from-blue-600 to-blue-700',
      // ** هنا التعديل: ضع رابط ملفك الشخصي على فيسبوك **
      url: 'https://www.facebook.com/your_profile_id' // استبدل your_profile_id برابط ملفك الشخصي
    },
    {
      name: 'تويتر',
      icon: Twitter,
      color: 'from-sky-500 to-sky-600',
      // ** هنا التعديل: ضع رابط ملفك الشخصي على تويتر **
      url: 'https://twitter.com/your_twitter_handle' // استبدل your_twitter_handle بمقبض تويتر الخاص بك (مثل @mahmoudhasani)
    },
    {
      name: 'إنستغرام',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600',
      // هذا الرابط كان موجودًا بالفعل وهو رابط حساب إنستغرام: https://instagram.com/pr.mahmoud_20?igshid=NTc4MTIwNjQ2YQ==
      url: 'https://instagram.com/pr.mahmoud_20?igshid=NTc4MTIwNjQ2YQ==' 
    },
    {
      name: 'البريد الإلكتروني',
      icon: Mail,
      color: 'from-gray-600 to-gray-700',
      // تم تغيير هذا لفتح البريد الإلكتروني الخاص بك مباشرةً (بدون نص مسبق حول التطبيق)
      url: `mailto:pr.mahmoud.20@gmail.com`
    },
    {
      name: 'تيليجرام',
      icon: MessageCircle,
      color: 'from-blue-400 to-blue-500',
      // هذا الرابط كان موجودًا بالفعل وهو رابط قناة تيليجرام: https://t.me/Sql_summary
      url: 'https://t.me/Sql_summary' 
    },
    {
      name: 'يوتيوب',
      icon: Youtube,
      color: 'from-red-600 to-red-700',
      // ** هنا التعديل: ضع رابط قناتك الفعلية على اليوتيوب **
      url: 'https://www.youtube.com/@%D9%85%D8%AD%D9%85%D9%88%D8%AF%D8%AD%D8%B3%D8%A7%D9%86%D9%8A' // استبدل هذا برابط قناتك على اليوتيوب (مثال: www.youtube.com/@Pr.Mahmoud)
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
          <Share2 className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold gradient-text mb-4 font-arabic">
          شارك التطبيق
        </h1>
        <p className="text-slate-600 text-lg font-arabic max-w-2xl mx-auto">
          شارك تطبيق "سَكينة" مع الأصدقاء والعائلة ليستفيدوا من المحتوى الإسلامي المفيد
        </p>
      </motion.div>

      {typeof navigator !== 'undefined' && navigator.share && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <button
            onClick={handleNativeShare}
            className="px-8 py-4 bg-gradient-to-br from-emerald-600 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-arabic"
          >
            <Share2 className="w-6 h-6 inline-block ml-2" />
            مشاركة سريعة
          </button>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200"
      >
        <h2 className="text-xl font-bold text-slate-800 mb-4 font-arabic text-center">
          نسخ رابط التطبيق
        </h2>
        <div className="flex items-center space-x-3 space-x-reverse">
          <input
            type="text"
            value={appUrl}
            readOnly
            className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 font-mono text-sm"
          />
          <button
            onClick={handleCopyLink}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 space-x-reverse ${
              copied 
                ? 'bg-green-600 text-white' 
                : 'bg-emerald-600 text-white hover:bg-emerald-700'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-5 h-5" />
                <span className="font-arabic">تم النسخ</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                <span className="font-arabic">نسخ</span>
              </>
            )}
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200"
      >
        <h2 className="text-xl font-bold text-slate-800 mb-6 font-arabic text-center">
          مشاركة عبر وسائل التواصل
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {shareOptions.map((option, index) => (
            <motion.a
              key={option.name}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className={`flex items-center space-x-3 space-x-reverse p-4 bg-gradient-to-br ${option.color} text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <option.icon className="w-6 h-6" />
              <span className="font-semibold font-arabic">{option.name}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-br from-slate-700 to-slate-800 text-white rounded-2xl p-8 text-center shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-4 font-arabic">
          نص المشاركة
        </h2>
        <div className="bg-white/10 rounded-xl p-6 mb-6">
          <p className="text-lg leading-relaxed font-arabic">
            {shareText}
          </p>
        </div>
        <p className="text-slate-300 font-arabic">
          يمكنك تخصيص النص حسب رغبتك عند المشاركة
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="bg-gradient-to-br from-emerald-600 to-blue-600 text-white rounded-2xl p-8 text-center shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-4 font-arabic">
          فوائد المشاركة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-4xl mb-2">🤝</div>
            <h3 className="font-bold mb-2 font-arabic">نشر الخير</h3>
            <p className="text-emerald-100 text-sm font-arabic">
              ساهم في نشر المحتوى الإسلامي المفيد
            </p>
          </div>
          <div>
            <div className="text-4xl mb-2">📚</div>
            <h3 className="font-bold mb-2 font-arabic">التعلم الجماعي</h3>
            <p className="text-emerald-100 text-sm font-arabic">
              شارك التعلم مع الأصدقاء والعائلة
            </p>
          </div>
          <div>
            <div className="text-4xl mb-2">⭐</div>
            <h3 className="font-bold mb-2 font-arabic">الأجر والثواب</h3>
            <p className="text-emerald-100 text-sm font-arabic">
              احصل على الأجر بنشر العلم النافع
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SharePage;