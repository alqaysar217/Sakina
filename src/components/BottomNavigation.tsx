import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Users, Heart, Sparkles, Home } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'الرئيسية', path: '/' },
    { icon: BookOpen, label: 'القرآن', path: '/quran' },
    { icon: Users, label: 'قصص الأنبياء', path: '/stories' },
    { icon: Heart, label: 'الأدعية', path: '/supplications' },
    { icon: Sparkles, label: 'الأذكار', path: '/azkar' },
  ];

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 z-40"
    >
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <motion.button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                isActive ? 'text-emerald-600' : 'text-slate-500 hover:text-emerald-500'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <item.icon className="w-5 h-5 mb-1" />
              </motion.div>
              <span className="text-xs font-arabic">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 w-6 h-1 bg-emerald-600 rounded-full"
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default BottomNavigation;