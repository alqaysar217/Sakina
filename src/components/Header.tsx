import React from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b border-emerald-100"
    >

      <div className="flex items-center justify-between px-4 py-3">

        <div className="flex items-center space-x-3 space-x-reverse">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-gold-500 rounded-full flex items-center justify-center"
          >
            <span className="text-white font-bold text-lg font-arabic">سَ</span>
          </motion.div>
          <h1 className="text-2xl font-bold gradient-text font-arabic">سَكينة</h1>
        </div>

        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg hover:bg-emerald-50 transition-colors"
        >
          <Menu className="w-6 h-6 text-emerald-700" />
        </button>

      </div>
    </motion.header>
  );
};

export default Header;