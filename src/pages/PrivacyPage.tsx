import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const sections = [
    {
      icon: Shield,
      title: 'حماية البيانات',
      content: 'نحن ملتزمون بحماية خصوصيتك وبياناتك الشخصية. جميع المعلومات التي تقدمها محمية بأعلى معايير الأمان.'
    },
    {
      icon: Database,
      title: 'جمع المعلومات',
      content: 'نقوم بجمع الحد الأدنى من المعلومات اللازمة لتحسين تجربتك في التطبيق، مثل تفضيلاتك في القراءة والاستماع.'
    },
    {
      icon: Eye,
      title: 'استخدام البيانات',
      content: 'نستخدم بياناتك فقط لتحسين خدماتنا وتخصيص المحتوى الإسلامي المناسب لك. لا نشارك معلوماتك مع أطراف ثالثة.'
    },
    {
      icon: Lock,
      title: 'الأمان',
      content: 'نستخدم تقنيات التشفير المتقدمة لحماية بياناتك من الوصول غير المصرح به.'
    },
    {
      icon: UserCheck,
      title: 'حقوقك',
      content: 'لك الحق في الوصول إلى بياناتك وتعديلها أو حذفها في أي وقت. يمكنك التواصل معنا لممارسة هذه الحقوق.'
    },
    {
      icon: AlertCircle,
      title: 'التحديثات',
      content: 'قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سنقوم بإشعارك بأي تغييرات مهمة.'
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
          <Shield className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold gradient-text mb-4 font-arabic">
          سياسة الخصوصية
        </h1>
        <p className="text-slate-600 text-lg font-arabic max-w-2xl mx-auto">
          نحن في تطبيق "سَكينة" نقدر خصوصيتك ونلتزم بحماية معلوماتك الشخصية
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg">
                <section.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-3 font-arabic">
                  {section.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-arabic">
                  {section.content}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-4 font-arabic">
          تواصل معنا
        </h2>
        <p className="text-blue-100 mb-6 font-arabic">
          إذا كان لديك أي استفسارات حول سياسة الخصوصية، لا تتردد في التواصل معنا
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:privacy@sakina-app.com"
            className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors font-arabic"
          >
            privacy@sakina-app.com
          </a>
          <a
            href="tel:+966123456789"
            className="px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors font-arabic"
          >
            +966 12 345 6789
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-center text-slate-500 text-sm font-arabic"
      >
        آخر تحديث: {new Date().toLocaleDateString('ar-SA')}
      </motion.div>
    </div>
  );
};

export default PrivacyPage;