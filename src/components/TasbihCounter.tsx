import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, RotateCcw, Target } from 'lucide-react';

interface TasbihItem {
  id: string;
  text: string;
  target: number;
  count: number;

}

const TasbihCounter: React.FC = () => {
  const [tasbihItems, setTasbihItems] = useState<TasbihItem[]>([
    { id: '1', text: 'سبحان الله', target: 33, count: 0 },
    { id: '2', text: 'الحمد لله', target: 33, count: 0 },
    { id: '3', text: 'الله أكبر', target: 34, count: 0 },
    { id: '4', text: 'لا إله إلا الله', target: 100, count: 0 }
  ]);

  const incrementCount = (id: string) => {
    setTasbihItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, count: item.count + 1 }
          : item
      )
    );
  };

  const resetCount = (id: string) => {
    setTasbihItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, count: 0 }
          : item
      )
    );
  };

  const resetAllCounts = () => {
    setTasbihItems(items =>
      items.map(item => ({ ...item, count: 0 }))
    );
  };

  const getProgress = (item: TasbihItem) => {
    return Math.min((item.count / item.target) * 100, 100);
  };

  const isCompleted = (item: TasbihItem) => {
    return item.count >= item.target;
  };

  // دالة مساعدة لتحديد النص الصحيح للزر
  const getButtonText = (text: string): string => {
    if (text === 'سبحان الله') return 'سبح';
    if (text === 'الحمد لله') return 'احمد';
    if (text === 'الله أكبر') return 'كبر';
    if (text === 'لا إله إلا الله') return 'وحد';
    return text; // في حال لم يتطابق، يعرض النص الأصلي
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold gradient-text font-arabic">
          عداد التسبيح والذكر
        </h2>
        <button
          onClick={resetAllCounts}
          className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span className="font-arabic text-sm">إعادة تعيين الكل</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tasbihItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`relative p-6 rounded-xl shadow-lg transition-all duration-300 ${
              isCompleted(item)
                ? 'bg-gradient-to-br from-emerald-500 to-green-600 text-white'
                : 'bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800'
            }`}
          >
            {/* Progress Ring */}
            <div className="absolute top-4 left-4">
              <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className={`${isCompleted(item) ? 'stroke-white/30' : 'stroke-slate-300'}`}
                  strokeWidth="3"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <motion.path
                  className={`${isCompleted(item) ? 'stroke-white' : 'stroke-emerald-500'}`}
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ strokeDasharray: "0 100" }}
                  animate={{ strokeDasharray: `${getProgress(item)} 100` }}
                  transition={{ duration: 0.5 }}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-xs font-bold ${isCompleted(item) ? 'text-white' : 'text-emerald-600'}`}>
                  {Math.round(getProgress(item))}%
                </span>
              </div>
            </div>

            {/* Completion Badge */}
            <AnimatePresence>
              {isCompleted(item) && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute top-2 right-2"
                >
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-lg">✨</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="text-center mt-8">
              <h3 className="text-lg font-bold mb-2 font-arabic">
                {item.text}
              </h3>
              
              <div className="flex items-center justify-center space-x-2 space-x-reverse mb-4">
                <Target className="w-4 h-4 opacity-70" />
                <span className="text-sm opacity-70 font-arabic">
                  الهدف: {item.target}
                </span>
              </div>

              <motion.div
                key={item.count}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="text-3xl font-bold mb-4"
              >
                {item.count}
              </motion.div>

              <div className="flex items-center justify-center space-x-2 space-x-reverse">
                <button
                  onClick={() => resetCount(item.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    isCompleted(item)
                      ? 'bg-white/20 hover:bg-white/30 text-white'
                      : 'bg-slate-200 hover:bg-slate-300 text-slate-600'
                  }`}
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => incrementCount(item.id)}
                  className={`flex items-center space-x-2 space-x-reverse px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isCompleted(item)
                      ? 'bg-white/20 hover:bg-white/30 text-white'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  <Plus className="w-5 h-5" />
                
                  <span className="font-arabic">{getButtonText(item.text)}</span> 
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Total Progress */}
      <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl">
        <div className="text-center">
          <h3 className="font-bold text-slate-800 mb-2 font-arabic">
            إجمالي التسبيحات اليوم
          </h3>
          <div className="text-2xl font-bold gradient-text">
            {tasbihItems.reduce((total, item) => total + item.count, 0)}
          </div>
          <div className="text-sm text-slate-600 font-arabic">
            مكتمل: {tasbihItems.filter(isCompleted).length} من {tasbihItems.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasbihCounter;