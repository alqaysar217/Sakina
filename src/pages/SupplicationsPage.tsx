import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Copy, Share2, X } from 'lucide-react';

const SupplicationsPage: React.FC = () => {
    const [selectedSupplication, setSelectedSupplication] = useState<any>(null);

    const supplications = [
        {
            id: '1',
            title: 'دعاء بر الوالدين',
            category: 'الأسرة',
            text: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
            translation: 'يا رب، اغفر لي ولوالدي، وارحمهما رحمة واسعة كما قاما بتربيتي ورعايتي وأنا صغير.',
            source: 'القرآن الكريم - سورة الإسراء، آية 24'
        },
        {
            id: '2',
            title: 'دعاء جلب الرزق',
            category: 'الرزق',
            text: 'اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ',
            translation: 'يا الله، اجعل رزقي حلالاً كافياً لي عن الحرام، واغنني بفضلك وجودك عن حاجة أي أحد سواك.',
            source: 'حديث حسن - رواه الترمذي'
        },
        {
            id: '3',
            title: 'دعاء الحفظ والتحصين',
            category: 'الحماية',
            text: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
            translation: 'ألتجئ وأحتمي بكلمات الله الكاملة من شر كل ما خلقه من الإنس والجن والدواب والهوام.',
            source: 'حديث صحيح - رواه مسلم'
        },
        {
            id: '4',
            title: 'دعاء يوم عرفة وفضل الذكر',
            category: 'الذكر العام',
            text: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
            translation: 'لا معبود بحق إلا الله وحده، لا شريك له في ملكه، له كل الملك وله الثناء الحسن، وهو قادر على كل شيء.',
            source: 'حديث صحيح - رواه الترمذي'
        },
        {
            id: '5',
            title: 'دعاء الاستخارة',
            category: 'الاختيار',
            text: 'اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ. اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ (ويُسمي حاجته) خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي - أَوْ قَالَ عَاجِلِ أَمْرِي وَآجِلِهِ - فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ، وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي - أَوْ قَالَ عَاجِلِ أَمْرِي وَآجِلِهِ - فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ وَاقْدُرْ لِي الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ.',
            translation: 'يا الله، أطلب منك أن تختار لي بعلمك، وأطلب منك أن تجعلني قادراً بقدرتك، وأسألك من عطائك العظيم، فإنك تملك القدرة على كل شيء وأنا لا أقدر، وأنت تعلم الغيب وأنا لا أعلم. يا الله، إن كنت تعلم أن هذا الأمر (يذكر الأمر الذي يريد الاستخارة فيه) خير لي في ديني ودنياي وآخرتي، فقدره لي وسهله لي ثم بارك لي فيه. وإن كنت تعلم أن هذا الأمر شر لي في ديني ودنياي وآخرتي، فابعده عني وابعِدني عنه، وقدر لي الخير أينما كان ثم اجعلني راضياً به.',
            source: 'حديث صحيح - رواه البخاري'
        },
        {
            id: '6',
            title: 'دعاء الشفاء للمريض',
            category: 'الصحة',
            text: 'اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ اشْفِ أَنْتَ الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا يُغَادِرُ سَقَمًا',
            translation: 'يا الله، يا رب البشر، أذهب المرض، اشفِ هذا المريض أنت الشافي لا شفاء إلا شفاؤك، شفاءً لا يترك مرضاً أو علة.',
            source: 'حديث صحيح - رواه البخاري ومسلم'
        },
        {
            id: '7',
            title: 'دعاء ركوب الدابة (السفر)',
            category: 'السفر',
            text: 'بِسْمِ اللَّهِ، الْحَمْدُ لِلَّهِ، ﴿سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ * وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ﴾ اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى، اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ، اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ وَالْخَلِيفَةُ فِي الْأَهْلِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ وَكَآبَةِ الْمَنْظَرِ وَسُوءِ الْمُنْقَلَبِ فِي الْمَالِ وَالْأَهْلِ.',
            translation: 'بسم الله، الحمد لله، سبحان الذي يسّر لنا هذا المركب وما كنا نحن بقادرين على تسخيره، وإنا إلى ربنا لراجعون بعد هذا السفر. يا الله، نسألك في سفرنا هذا التوفيق لكل خير، والخشية منك، ومن العمل ما يرضيك. يا الله، يسّر علينا سفرنا هذا وقرب علينا المسافة، يا الله، أنت رفيقنا في السفر، وحامي أهلنا ومالنا في غيابنا. يا الله، إني أستعيذ بك من مشقة السفر، وسوء المنظر وما يحزنني في السفر، وسوء الرجوع إلى أهلي ومالي.',
            source: 'حديث صحيح - رواه مسلم'
        },
        {
            id: '8',
            title: 'دعاء دخول المنزل',
            category: 'البيت',
            text: 'بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا.',
            translation: 'باسم الله دخلنا البيت، وباسم الله خرجنا منه، وعلى الله ربنا وحده اعتمدنا وتوكلنا في كل أمورنا.',
            source: 'حديث حسن - رواه أبو داود'
        },
        {
            id: '9',
            title: 'دعاء النوم',
            category: 'النوم',
            text: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.',
            translation: 'باسمك يا الله أسلّم روحي عند النوم، وباسمك تعود لي الحياة عند الاستيقاظ.',
            source: 'حديث صحيح - رواه البخاري'
        },
        {
            id: '10',
            title: 'دعاء الاستيقاظ من النوم',
            category: 'النوم',
            text: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ.',
            translation: 'كل الشكر والثناء لله الذي أعاد لنا الحياة بعد أن أخذ أرواحنا (في النوم)، وإليه وحده يكون البعث بعد الموت للحساب.',
            source: 'حديث صحيح - رواه البخاري'
        },
        {
            id: '11',
            title: 'دعاء قبل الطعام',
            category: 'الطعام',
            text: 'بِسْمِ اللَّهِ.',
            translation: 'أبدأ باسم الله تعالى عند تناول الطعام ليكون مباركاً.',
            source: 'حديث صحيح - رواه مسلم'
        },
        {
            id: 12,
            title: 'دعاء بعد الفراغ من الطعام',
            category: 'الطعام',
            text: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ.',
            translation: 'الشكر والثناء كله لله الذي رزقنا الطعام والشراب، وجعلنا من المسلمين الطائعين له.',
            source: 'حديث صحيح - رواه الترمذي وأبو داود'
        },
        {
            id: '13',
            title: 'دعاء عند نزول المطر',
            category: 'الطقس',
            text: 'اللَّهُمَّ صَيِّبًا نَافِعًا.',
            translation: 'يا الله، اجعل هذا المطر غيثاً نافعاً غير ضار، يعم بالخير والبركة.',
            source: 'حديث صحيح - رواه البخاري'
        },
        {
            id: '14',
            title: 'دعاء المظلوم',
            category: 'الشدائد',
            text: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْجُبْنِ وَالْبُخْلِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ.',
            translation: 'يا الله، أستعيذ بك وألجأ إليك من كل ما يسبب الهم والحزن، ومن العجز عن فعل الخير والكسل في الطاعة، ومن الجبن والبخل، ومن ثقل الديون وتسلط الرجال عليّ.',
            source: 'حديث صحيح - رواه البخاري'
        },
        {
            id: '15',
            title: 'دعاء للميت في الصلاة عليه',
            category: 'الميت',
            text: 'اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ وَأَكْرِمْ نُزُلَهُ وَوَسِّعْ مُدْخَلَهُ وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ وَنَقِّهِ مِنَ الْخَطَايَا كَمَا نَقَّيْتَ الثَّوْبَ الْأَبْيَضَ مِنَ الدَّنَسِ وَأَبْدِلْهُ دَارًا خَيْرًا مِنْ دَارِهِ وَأَهْلًا خَيْرًا مِنْ أَهْلِهِ وَزَوْجًا خَيْرًا مِنْ زَوْجِهِ وَأَدْخِلْهُ الْجَنَّةَ وَأَعِذْهُ مِنْ عَذَابِ الْقَبْرِ وَمِنْ عَذَابِ النَّارِ.',
            translation: 'يا الله، اغفر له وارحمه وعافه واعفُ عنه، واكرم مكانه في الآخرة، ووسّع مدخله إلى قبره أو جنته. واغسله من الذنوب والخطايا بالماء والثلج والبرد، وطهّره من المعاصي كما يُطهّر الثوب الأبيض من الوسخ. وأبدله بيتاً خيراً من بيته في الدنيا، وأهلاً خيراً من أهله، وزوجاً خيراً من زوجه. وأدخله الجنة وأجره من عذاب القبر ومن عذاب النار.',
            source: 'حديث صحيح - رواه مسلم'
        },
        {
            id: '16',
            title: 'دعاء زيارة القبور',
            category: 'الميت',
            text: 'السَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ، وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَاحِقُونَ، نَسْأَلُ اللَّهَ لَنَا وَلَكُمُ الْعَافِيَةَ.',
            translation: 'السلام عليكم يا أهل هذه الديار من المؤمنين والمسلمين، وإننا إن شاء الله سنلحق بكم في الموت. نسأل الله لنا ولكم السلامة والعافية من كل سوء.',
            source: 'حديث صحيح - رواه مسلم'
        },
        {
            id: '17',
            title: 'دعاء تفريج الكرب',
            category: 'الشدائد',
            text: 'لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ.',
            translation: 'لا معبود بحق إلا الله، العظيم في ملكه، الحليم الذي لا يعجل بالعقوبة. لا معبود بحق إلا الله، صاحب العرش العظيم. لا معبود بحق إلا الله، رب السماوات ورب الأرض ورب العرش الكريم.',
            source: 'حديث صحيح - رواه البخاري ومسلم'
        },
        {
            id: '18',
            title: 'دعاء قضاء الدين',
            category: 'المال',
            text: 'اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
            translation: 'يا الله، اجعل رزقي حلالاً يكفيني عن اللجوء إلى الحرام، واغنني بفضلك وجودك عن حاجة أي أحد سواك.',
            source: 'حديث حسن - رواه الترمذي' // تكرار ولكن بتصنيف مختلف
        },
        {
            id: '19',
            title: 'دعاء دخول الخلاء',
            category: 'النظافة',
            text: 'بِسْمِ اللَّهِ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ.',
            translation: 'باسم الله (أدخل)، يا الله إني أستعيذ بك من ذكور الشياطين وإناثها.',
            source: 'حديث صحيح - رواه البخاري ومسلم'
        },
        {
            id: '20',
            title: 'دعاء الخروج من الخلاء',
            category: 'النظافة',
            text: 'غُفْرَانَكَ.',
            translation: 'أسألك يا الله مغفرتك لما قد يكون حدث مني من تقصير أو ما لا يليق خلال هذه الفترة.',
            source: 'حديث صحيح - رواه الترمذي وأبو داود'
        },
        {
            id: '21',
            title: 'دعاء الخروج من المنزل',
            category: 'البيت',
            text: 'بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ.',
            translation: 'باسم الله أخرج، اعتمدت على الله وحده في كل أموري، ولا قدرة لي على فعل شيء أو الامتناع عن شيء إلا بعون الله وقوته.',
            source: 'حديث صحيح - رواه الترمذي وأبو داود'
        },
        {
            id: '22',
            title: 'دعاء دخول السوق',
            category: 'الأسواق',
            text: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ وَهُوَ حَيٌّ لَا يَمُوتُ، بِيَدِهِ الْخَيْرُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.',
            translation: 'لا معبود بحق إلا الله وحده لا شريك له، له الملك كله وله الحمد كله، يحيي الأموات ويميت الأحياء، وهو حي لا يموت، بيده كل خير، وهو قادر على كل شيء.',
            source: 'حديث حسن - رواه الترمذي'
        },
        {
            id: '23',
            title: 'دعاء لمن أحس ألمًا في جسده',
            category: 'الصحة',
            text: 'ضَعْ يَدَكَ عَلَى الَّذِي يَأْلَمُ مِنْ جَسَدِكَ وَقُلْ: بِسْمِ اللَّهِ ثَلَاثًا، وَقُلْ سَبْعَ مَرَّاتٍ: أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ.',
            translation: 'ضع يدك على مكان الألم في جسدك وقل: بسم الله (ثلاث مرات)، ثم قل سبع مرات: ألتجئ بالله وقدرته العظيمة من شر ما أشعر به من الألم ومن شر ما أخاف حدوثه.',
            source: 'حديث صحيح - رواه مسلم'
        },
        {
            id: '24',
            title: 'دعاء الريح',
            category: 'الطقس',
            text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَأَعُوذُ بِكَ مِنْ شَرِّهَا.',
            translation: 'يا الله، إني أسألك خير هذه الريح وما تحمله، وأستعيذ بك من شرها وما قد تسببه من أضرار.',
            source: 'حديث صحيح - رواه مسلم'
        }
    ];

    const categories = ['الكل', 'الأسرة', 'الرزق', 'الحماية', 'الاختيار', 'الصحة', 'السفر', 'البيت', 'النوم', 'الطعام', 'الطقس', 'الشدائد', 'الميت', 'النظافة', 'الأسواق', 'الذكر العام'];
    const [selectedCategory, setSelectedCategory] = useState('الكل');

    const filteredSupplications = selectedCategory === 'الكل'
        ? supplications
        : supplications.filter(sup => sup.category === selectedCategory);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        alert('تم نسخ الدعاء!'); // Optional: Add a visual feedback
    };

    const handleShare = (supplication: any) => {
        if (navigator.share) {
            navigator.share({
                title: supplication.title,
                text: `${supplication.text}\n\nالمعنى: ${supplication.translation}\nالمصدر: ${supplication.source}`,
            }).catch((error) => console.error('Error sharing', error));
        } else {
            // Fallback for browsers that do not support navigator.share
            alert('متصفحك لا يدعم خاصية المشاركة المباشرة. يمكنك نسخ الدعاء يدوياً.');
        }
    };

    return (
        <div className="space-y-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
            >
                <h1 className="text-3xl font-bold gradient-text mb-4 font-arabic">
                    الأدعية الهامة
                </h1>
                <p className="text-slate-600 font-arabic">
                    أدعية من القرآن الكريم والسنة النبوية الصحيحة
                </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full transition-all duration-300 font-arabic text-sm sm:text-base ${
                            selectedCategory === category
                                ? 'bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg'
                                : 'bg-white/80 text-slate-700 hover:bg-slate-50 border border-slate-200'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Supplications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSupplications.length > 0 ? (
                    filteredSupplications.map((supplication, index) => (
                        <motion.div
                            key={supplication.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedSupplication(supplication)}
                            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer card-hover border border-slate-200"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800 mb-2 font-arabic">
                                        {supplication.title}
                                    </h3>
                                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-arabic">
                                        {supplication.category}
                                    </span>
                                </div>
                                {/* <Heart className="w-6 h-6 text-slate-400 hover:text-red-500 transition-colors cursor-pointer" /> */}
                            </div>

                            <p className="text-slate-600 text-sm mb-4 font-arabic line-clamp-3">
                                {supplication.text}
                            </p>

                            <div className="flex items-center justify-between">
                                <span className="text-xs text-emerald-600 font-arabic">
                                    {supplication.source}
                                </span>
                                <div className="text-slate-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="col-span-full text-center text-slate-500 font-arabic text-lg"
                    >
                        لا توجد أدعية في هذا التصنيف حالياً.
                    </motion.p>
                )}
            </div>

            {/* Supplication Modal */}
            <AnimatePresence>
                {selectedSupplication && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedSupplication(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold gradient-text font-arabic">
                                    {selectedSupplication.title}
                                </h2>
                                <button
                                    onClick={() => setSelectedSupplication(null)}
                                    className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                                >
                                    <X className="w-6 h-6 text-slate-600" />
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6">
                                    <p className="text-xl leading-relaxed text-slate-800 font-arabic text-center">
                                        {selectedSupplication.text}
                                    </p>
                                </div>

                                <div className="bg-slate-50 rounded-xl p-4">
                                    <p className="text-slate-700 font-arabic">
                                        <strong>المعنى:</strong> {selectedSupplication.translation}
                                    </p>
                                </div>

                                <div className="text-center">
                                    <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-arabic">
                                        {selectedSupplication.source}
                                    </span>
                                </div>

                                <div className="flex items-center justify-center space-x-4 space-x-reverse">
                                    <button
                                        onClick={() => handleCopy(selectedSupplication.text)}
                                        className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        <Copy className="w-4 h-4" />
                                        <span className="font-arabic">نسخ</span>
                                    </button>

                                    <button
                                        onClick={() => handleShare(selectedSupplication)}
                                        className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                    >
                                        <Share2 className="w-4 h-4" />
                                        <span className="font-arabic">مشاركة</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SupplicationsPage;