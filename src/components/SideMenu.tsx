import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Shield, Share2, Info, Instagram, Facebook, Youtube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, label: 'الرئيسية', path: '/' },
    { icon: Shield, label: 'سياسة الخصوصية', path: '/privacy' },
    { icon: Share2, label: 'مشاركة الأصدقاء', path: '/share' },
    { icon: Info, label: 'معلومات عنا', path: '/about' },
  ];

  const socialLinks = [
    { icon: Instagram, label: 'إنستغرام', url: 'https://instagram.com/pr.mahmoud_20?igshid=NTc4MTIwNjQ2YQ==' },
    { icon: Facebook, label: 'فيسبوك', url: 'https://www.facebook.com/pr.mahmoud.20?mibextid=9R9pXO' },
    { icon: Youtube, label: 'يوتيوب', url: 'https://www.youtube.com/@Pr.Mahmoud' },
  ];

  const handleItemClick = (item: any) => {
    if (item.path) {
      navigate(item.path);
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold gradient-text font-arabic">القائمة</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <nav className="space-y-2 mb-8">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleItemClick(item)}
                    className="w-full flex items-center space-x-3 space-x-reverse p-3 rounded-lg hover:bg-slate-50 transition-colors text-right"
                  >
                    <item.icon className="w-5 h-5 text-slate-600" />
                    <span className="font-arabic text-slate-700">{item.label}</span>
                  </motion.button>
                ))}
              </nav>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4 font-arabic">تابعنا على</h3>
                <div className="space-y-2">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: (menuItems.length + index) * 0.1 }}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <social.icon className="w-5 h-5 text-slate-600" />
                      <span className="font-arabic text-slate-700">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;