import React, { useState } from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import BottomNavigation from './BottomNavigation';
import AudioPlayer from './AudioPlayer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-emerald-100 to-gold-50 islamic-pattern">
      <Header onMenuClick={() => setIsSideMenuOpen(true)} />
      <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
      
      <main className="pt-16 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
      
      <AudioPlayer />
      <BottomNavigation />
    </div>
  );
};

export default Layout;