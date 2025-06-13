import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Heart, Clock, Repeat, Search, XCircle } from 'lucide-react';
import { useAudioPlayer } from '../contexts/AudioPlayerContext';

const QuranPage: React.FC = () => {
  const [selectedReader, setSelectedReader] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { playTrack } = useAudioPlayer();

  const readers = [
    // **القراء الأكثر شعبية واستماعاً (الأئمة البارزون وكبار القراء المشهورين عالمياً)**
    {
      id: '3',
      name: 'مشاري العفاسي',
      image: 'https://3.bp.blogspot.com/-ddIHSp3NuaQ/WP5jpjaAyeI/AAAAAAAALhw/CXdb0PrPs2oEa1UWzvG7ERKSfKGV6b6DQCLcB/w1200-h630-p-k-no-nu/%25D8%25AF%25D8%25B9%25D8%25A7%25D8%25A1%2B%25D9%258A%25D8%25A7%2B%25D9%2585%25D9%2586%2B%25D8%25AC%25D8%25B9%25D9%2584%25D8%25AA%2B%25D9%2584%25D9%2583%25D9%2584%2B%25D8%25AF%25D8%25A7%25D8%25A1%2B%25D8%25AF%25D9%2588%25D8%25A7%25D8%25A1.jpg', // يرجى التحقق من هذا الرابط
      description: 'قارئ كويتي مشهور، صوته عذب ومميز',
      audioBaseUrl: 'https://server8.mp3quran.net/afs/'
    },
    {
      id: '1',
      name: 'عبد الرحمن السديس',
      image: 'https://img.alwakeelnews.com/Content/Upload/slider/10202113193129116350490.jpg',
      description: 'إمام الحرم المكي، صوته جهوري ومؤثر',
      audioBaseUrl: 'https://server11.mp3quran.net/sds/'
    },
    {
      id: '4',
      name: 'ماهر المعيقلي',
      image: 'https://i1.sndcdn.com/artworks-Y4zgABxIeERaiNzF-lwx6bA-t500x500.jpg',
      description: 'إمام الحرم المكي، صوته هادئ وخشوعي',
      audioBaseUrl: 'https://server12.mp3quran.net/maher/'
    },
    {
      id: '8',
      name: 'عبد الباسط عبد الصمد',
      image: 'https://darelhilal.com/Media/News/2022/11/29/2022-638053324476186831-618.jpg',
      description: 'قارئ مصري أسطوري، يمتلك صوتًا لا مثيل له',
      audioBaseUrl: 'https://server7.mp3quran.net/basit/'
    },
    {
      id: '7',
      name: 'محمد صديق المنشاوي',
      image: 'https://i1.sndcdn.com/artworks-Y4yM9mHQLG7pfY4r-OSGTyA-t500x500.jpg',
      description: 'قارئ مصري كلاسيكي، صوته حزين ومبكي',
      audioBaseUrl: 'https://server10.mp3quran.net/minsh/'
    },
    {
      id: '2',
      name: 'ياسر الدوسري',
      image: 'https://i0.wp.com/mqalaty.net/wp-content/uploads/2022/12/%D9%8A%D8%A7%D8%B3%D8%B1-%D8%A7%D9%84%D8%AF%D9%88%D8%B3%D8%B1%D9%8A-%D8%A7%D9%84%D8%B3%D9%8A%D8%B1%D8%A9-%D8%A7%D9%84%D8%B0%D8%A7%D8%AA%D9%8A%D8%A9.jpg?ssl=1',
      description: 'قارئ سعودي، صوته شجي ومؤثر',
      audioBaseUrl: 'https://server11.mp3quran.net/yasser/'
    },
    {
      id: '6',
      name: 'أحمد العجمي',
      image: 'https://ar.assabile.com/media/photo/full_size/ahmed-al-ajmi-979.jpg',
      description: 'قارئ كويتي، صوته هادئ وجميل',
      audioBaseUrl: 'https://server10.mp3quran.net/ajm/'
    },
    {
      id: '5',
      name: 'سعد الغامدي',
      image: 'https://i.ytimg.com/vi/ZM2RsoIoIDw/maxresdefault.jpg',
      description: 'قارئ سعودي، صوته مميز وواضح',
      audioBaseUrl: 'https://server7.mp3quran.net/s_gmd/'
    },
    {
      id: '34',
      name: 'سعود الشريم',
      image: 'https://i1.sndcdn.com/artworks-ZiFk3t1TZNphAOry-quycAA-t500x500.jpg',
      description: 'إمام الحرم المكي، صوته قوي ومتقن',
      audioBaseUrl: 'https://server7.mp3quran.net/shur/'
    },

    // **قراء مشهورون وذوي أصوات جميلة ومميزة**
    {
      id: '18',
      name: 'ناصر القطامي',
      image: 'https://yt3.googleusercontent.com/nW3Dbz94zrTgnu330L39oYyaOoSC3nlLoW7az9wM6YM9HNtwqtBjGczisNmq48T0BqfagEvK=s900-c-k-c0x00ffffff-no-rj', // يرجى التحقق من هذا الرابط
      description: 'قارئ سعودي، صوته مؤثر ومختلف',
      audioBaseUrl: 'https://server6.mp3quran.net/qtm/'
    },
    {
      id: '14',
      name: 'فارس عباد',
      image: 'https://quran-uni.com/wp-content/uploads/2023/10/fares-abbad.jpg',
      description: 'قارئ يمني، صوته هادئ وخشوعي',
      audioBaseUrl: 'https://server8.mp3quran.net/frs_a/'
    },
    {
      id: '106',
      name: 'إدريس أبكر',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy2z9tzSFzwFDWgqWiLVPEUcFV8lx_z5Qbhg&s',
      description: 'قارئ إرتيري، صوته خاشع وعذب',
      audioBaseUrl: 'https://server6.mp3quran.net/abkr/'
    },
    {
      id: '19',
      name: 'هاني الرفاعي',
      image: 'https://pbs.twimg.com/profile_images/1410985066969415680/_oDeEcWl_400x400.jpg',
      description: 'قارئ سعودي، صوته ندي وجميل',
      audioBaseUrl: 'https://server8.mp3quran.net/hani/'
    },
    {
      id: '22',
      name: 'خالد الجليل',
      image: 'https://yt3.googleusercontent.com/qS6o_2U2Op7gcY-d31_PSjjHq77QB1kbV_VtV3qNLJAadb0moD3hiLiIOcGipGGXcg-5J4UTrA=s900-c-k-c0x00ffffff-no-rj', // يرجى التحقق من هذا الرابط
      description: 'قارئ سعودي، تلاواته مؤثرة جداً',
      audioBaseUrl: 'https://server10.mp3quran.net/jleel/'
    },
    {
      id: '42',
      name: 'عبد الله عواد الجهني',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PgB4NRCY_7uMtH06QVCiJ0KEumqCMs3_Ag&s',
      description: 'إمام الحرم المكي، صوته واضح وجميل',
      audioBaseUrl: 'https://server13.mp3quran.net/jhn/'
    },
    {
      id: '13',
      name: 'علي الحذيفي',
      image: 'https://s3-eu-west-1.amazonaws.com/content.argaamnews.com/8750d869-ec5b-416a-9554-702582372866.jpg',
      description: 'إمام الحرم النبوي، صوته قوي ومتقن',
      audioBaseUrl: 'https://server9.mp3quran.net/huthifi_qalon/'
    },
    {
      id: '15',
      name: 'محمد جبريل',
      image: 'https://i.pinimg.com/564x/fa/8f/f8/fa8ff84527ff6c1611e304f94b1bf96d.jpg',
      description: 'قارئ مصري، صوته مميز وخشوعي',
      audioBaseUrl: 'https://server8.mp3quran.net/jbrl/'
    },
    {
      id: '16',
      name: 'محمود خليل الحصري',
      image: 'https://i1.sndcdn.com/artworks-000037504497-6g5fx7-t500x500.jpg',
      description: 'قارئ مصري (مجود)، أستاذ في التجويد',
      audioBaseUrl: 'https://server13.mp3quran.net/husr/'
    },
    {
      id: '9',
      name: 'أبو بكر الشاطري',
      image: 'https://th.bing.com/th/id/OIP.GFIGa-U231G3yvJdHc33FAHaHa?w=600&h=600&rs=1&pid=ImgDetMain',
      description: 'قارئ سعودي، صوته مميز وهادئ',
      audioBaseUrl: 'https://server11.mp3quran.net/shatri/'
    },
    {
      id: '17',
      name: 'مصطفى اسماعيل',
      image: 'https://honamisr.news/wp-content/uploads/2024/12/%D8%A7%D9%84%D8%B4%D9%8A%D8%AE-%D9%85%D8%B5%D8%B7%D9%81%D9%89-%D8%A7%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84-650x386.jpg',
      description: 'قارئ مصري كلاسيكي، إبداع في التلاوة',
      audioBaseUrl: 'https://server8.mp3quran.net/mustafa/Almusshaf-Al-Mojawwad/'
    },
    {
      id: '104',
      name: 'بندر بليلة',
      image: 'https://www.elmashhad.online//files/2024/8/13/44650be05a24c041e999d7fd632de7ee.jpeg',
      description: 'إمام الحرم المكي، صوته ندي وخشوعي',
      audioBaseUrl: 'https://server6.mp3quran.net/balilah/'
    },
    {
      id: '105',
      name: 'محمد البراك',
      image: 'https://i.scdn.co/image/ab67616d0000b273010e5d8d007e71e37106f25f',
      description: 'قارئ سعودي، صوته مؤثر جداً',
      audioBaseUrl: 'https://server13.mp3quran.net/braak/'
    },
    {
      id: '20',
      name: 'وديع اليمني',
      image: 'https://pbs.twimg.com/profile_images/1454458372422516737/NwQGX91v_400x400.jpg',
      description: 'قارئ يمني، صوته جميل ومؤثر',
      audioBaseUrl: 'https://server6.mp3quran.net/wdee3/'
    },
    {
      id: '130',
      name: 'منصور السالمي',
      image: 'https://i1.sndcdn.com/artworks-Wo5sKG9ZGwRMB6zv-ozBZBQ-t500x500.jpg',
      description: 'داعية وقارئ سعودي، يتميز بأسلوبه الخاص',
      audioBaseUrl: 'https://server14.mp3quran.net/mansor/'
    },
    {
      id: '52',
      name: 'محمد اللحيدان',
      image: 'https://i1.sndcdn.com/artworks-000166405725-iy4w5o-t1080x1080.jpg',
      description: 'قارئ سعودي، صوته قوي ومتقن',
      audioBaseUrl: 'https://server8.mp3quran.net/lhdan/'
    },
    {
      id: '132',
      name: 'إسلام صبحي',
      image: 'https://mazakony.com/forums/uploads/monthly_2020_02/mWrG0Sv.jpg.f69fcbe5292b19d19c153099a905837b.jpg',
      description: 'قارئ مصري شاب، صوته عذب ومؤثر',
      audioBaseUrl: 'https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/'
    },

    // **قراء مميزون ومعروفون**
    {
      id: '10',
      name: 'عبد الله بصفر',
      image: 'https://ar.assabile.com/media/person/200x256/abdullah-ibn-ali-basfar.png',
      description: 'قارئ سعودي',
      audioBaseUrl: 'https://server6.mp3quran.net/bsfr/'
    },
    {
      id: '24',
      name: 'صلاح بو خاطر',
      image: 'https://archive.org/services/img/fm_002_20150413_1346/full/pct:500/0/default.jpg',
      description: 'قارئ إماراتي',
      audioBaseUrl: 'https://server8.mp3quran.net/bu_khtr/'
    },
    {
      id: '29',
      name: 'توفيق الصايغ',
      image: 'https://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_1100,c_scale,q_auto/cnnarabic/2014/08/31/images/63125.jpg',
      description: 'قارئ سعودي',
      audioBaseUrl: 'https://server6.mp3quran.net/twfeeq/'
    },
    {
      id: '40',
      name: 'عادل الكلباني',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Kalbani.jpg/640px-Kalbani.jpg',
      description: 'إمام سابق للحرم المكي',
      audioBaseUrl: 'https://server8.mp3quran.net/a_klb/'
    },
    {
      id: '43',
      name: 'عبد المحسن القاسم',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6hW_P2_Ou27shof0i2XwTFVXClHtLYhHiOQ&s',
      description: 'إمام الحرم النبوي',
      audioBaseUrl: 'https://server8.mp3quran.net/qasm/'
    },
    {
      id: '41',
      name: 'عبد الله المطرود',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMwK7mi-3qEdp5pqxbdtqH_lXL55wKBCZ7nQ&s',
      description: 'قارئ سعودي',
      audioBaseUrl: 'https://server8.mp3quran.net/mtrod/'
    },
    {
      id: '53',
      name: 'محمد أيوب',
      image: 'https://i.scdn.co/image/ab676161000051745750585d1cab273ad0a9dfa7',
      description: 'إمام سابق للحرم النبوي',
      audioBaseUrl: 'https://server16.mp3quran.net/ayyoub2/Rewayat-Hafs-A-n-Assem/'
    },
    {
      id: '56',
      name: 'محمود البنا',
      image: 'https://modo3.com/thumbs/fit630x300/9573/1641282454/%D9%85%D8%AD%D9%85%D8%AF_%D8%B5%D8%AF%D9%8A%D9%82_%DD9%84%D9%85%D9%86%D8%B4%D8%A7%D9%88%D9%8A.jpg',
      description: 'قارئ مصري',
      audioBaseUrl: 'https://server8.mp3quran.net/bna/'
    },
    {
      id: '107',
      name: 'حسن صالح',
      image: 'https://media.unitedmuslimworld.com/img/24/01/02/12913_1704169256.jpg',
      description: 'قارئ مصري (مقيم بأمريكا)',
      audioBaseUrl: 'https://server16.mp3quran.net/h_saleh/Rewayat-Hafs-A-n-Assem/'
    },
    {
      id: '102',
      name: 'خليفة الطنيجي',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIifyEfXfH9t0I_yztq6218p8hXjVKDPSTDonLj_hQ-eTcbCn5k5Y8DVRHzfOZlWaMPU4&usqp=CAU',
      description: 'قارئ إماراتي',
      audioBaseUrl: 'https://server12.mp3quran.net/tnjy/'
    },
    {
      id: '131',
      name: 'خالد الجليل',
      image: 'https://trandawy.com/wp-content/uploads/2022/09/images-2022-09-11T172522.620.jpeg',
      description: 'قارئ مصري',
      audioBaseUrl: 'https://server10.mp3quran.net/jleel/'
    },
    {
      id: '28',
      name: 'أكرم العلاقمي',
      image: 'https://i.pinimg.com/564x/55/f8/5e/55f85edd52f17e70e357842a9179cf26.jpg',
      description: 'قارئ مصري',
      audioBaseUrl: 'https://server9.mp3quran.net/akrm/'
    },
    {
      id: '12',
      name: 'عبد العزيز الأحمد',
      image: 'https://www.alwatan.com.sa/uploads/imported_images/7/96/663/16NEW-18.jpg',
      description: 'قارئ سعودي',
      audioBaseUrl: 'https://server11.mp3quran.net/a_ahmed/'
    },
    {
      id: '11',
      name: 'عبد الباري الثبيتي',
      image: 'https://www.marefa.org/w/images/6/6c/%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D8%A8%D8%A7%D8%B1%D9%8A_%D8%A7%D9%84%D8%AB%D8%A8%D9%8A%D8%AA%D9%8A.jpg',
      description: 'قارئ سعودي',
      audioBaseUrl: 'https://server6.mp3quran.net/thubti/'
    },
    {
      id: '108',
      name: 'أحمد الحواشي',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Alhawashi.jpg',
      description: 'قارئ سعودي',
      audioBaseUrl: 'https://server11.mp3quran.net/hawashi/'
    },
    {
      id: '36',
      name: 'شيرزاد عبد الرحمن طاهر',
      image: 'https://i1.sndcdn.com/artworks-JTzUaN7iT4kVelPH-iPwX9Q-t500x500.jpg',
      description: 'قارئ عراقي',
      audioBaseUrl: 'https://server12.mp3quran.net/taher/'
    },
    {
      id: '38',
      name: 'صلاح البدير',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Salah_Ibn_Mohammed_Al_Budair.jpg',
      description: 'إمام الحرم النبوي',
      audioBaseUrl: 'https://server6.mp3quran.net/s_bud/001.mp3'
    },
    {
      id: '45',
      name: 'علي جابر',
      image: 'https://i1.sndcdn.com/artworks-U79X4dCVaQotGrSC-3yykow-t500x500.jpg',
      description: 'إمام سابق للحرم المكي',
      audioBaseUrl: 'https://server11.mp3quran.net/a_jbr/'
    },
    {
      id: '49',
      name: 'العيون الكوشي ',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/%D8%B5%D9%88%D8%B1%D8%A9_%D9%84%D9%84%D9%82%D8%A7%D8%B1%D8%A6_%D8%A7%D9%84%D8%B4%D9%8A%D8%AE_%D8%A7%D9%84%D8%B9%D9%8A%D9%88%D9%86_%D8%A7%D9%84%D9%83%D9%88%D8%B4%D9%8A.jpeg',
      description: 'قارئ مغربي (غالباً ما يوصف هكذا، يرجى التأكد)',
      audioBaseUrl: 'https://server11.mp3quran.net/koshi/'
    },
    {
      id: '46',
      name: 'عماد المنصري',
      image: 'https://archive.org/services/img/3imad/full/pct:500/0/default.jpg',
      description: 'قارئ مصري',
      audioBaseUrl: 'https://server6.mp3quran.net/hafz/'
    },
    {
      id: '37',
      name: 'صابر عبد الحكم',
      image: 'https://tvquran.com/uploads/authors/images/%D8%B5%D8%A7%D8%A8%D8%B1%20%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D8%AD%D9%83%D9%85.jpg',
      description: 'قارئ مصري',
      audioBaseUrl: 'https://server12.mp3quran.net/hkm/'
    },
    {
      id: '21',
      name: 'يوسف العيدروس',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHBj12edcs4Qrm5MyUH9Gmo0n2kDwMND8FTw&s',
      description: 'قارئ',
      audioBaseUrl: 'https://server16.mp3quran.net/Y_ALaidroos/Rewayat-Hafs-A-n-Assem/'
    },
    {
      id: '25',
      name: 'خالد القحطاني',
      image: 'https://tvquran.com/uploads/authors/images/%D8%AE%D8%A7%D9%84%D8%AF%20%D8%A7%D9%84%D9%82%D8%AD%D8%B7%D8%A7%D9%86%D9%8A.jpg',
      description: 'قارئ سعودي',
      audioBaseUrl: 'https://server10.mp3quran.net/qht/'
    },
    {
      id: '26',
      name: 'محمد المحيسني',
      image: 'https://i1.sndcdn.com/artworks-000037725536-fwb2hv-t500x500.jpg',
      description: 'قارئ سعودي',
      audioBaseUrl: 'https://server11.mp3quran.net/mhsny/'
    },
    {
      id: '30',
      name: 'جمال شاكر عبد الله',
      image: 'https://ar.assabile.com/media/photo/full_size/jamal-shaker-abdullah-548.jpg',
      description: 'قارئ',
      audioBaseUrl: 'https://server6.mp3quran.net/jamal/'
    },
    {
      id: '31',
      name: 'جمعان العصيمي',
      image: 'https://tvquran.com/uploads/authors/images/%D8%AC%D9%85%D8%B9%D8%A7%D9%86%20%D8%A7%D9%84%D8%B9%D8%B5%D9%8A%D9%85%D9%8A.jpg',
      description: 'قارئ سعودي',
      audioBaseUrl: 'https://server6.mp3quran.net/jaman/'
    },
    {
      id: '32',
      name: 'حاتم فريد الواعر',
      image: 'https://tvquran.com/uploads/authors/images/%D8%AD%D8%A7%D8%AA%D9%85%20%D9%81%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D9%88%D8%A7%D8%B9%D8%B1.jpg',
      description: 'قارئ مصري',
      audioBaseUrl: 'https://server11.mp3quran.net/hatem/'
    },
    {
      id: '33',
      name: 'خالد المهنا',
      image: 'https://manaratalharamain.gov.sa/uploads/users/604f10a70ef34.PNG',
      description: 'قارئ سعودي',
      audioBaseUrl: 'https://server11.mp3quran.net/mohna/'
    },
    {
      id: '35',
      name: 'سهل ياسين',
      image: 'https://ar.assabile.com/media/person/200x256/sahl-yassin.png',
      description: 'قارئ سعودي',
      audioBaseUrl: 'https://server6.mp3quran.net/shl/'
    },
    {
      id: '39',
      name: ' طارق عبدالغني',
      image: 'https://static.suratmp3.com/pics/reciters/thumbs/88_600_600.jpg',
      description: 'قارئ مصري',
      audioBaseUrl: 'https://server10.mp3quran.net/tareq/'
    },
    {
      id: '44',
      name: 'عبدالله الكندري',
      image: 'https://pbs.twimg.com/profile_images/3406521957/3aa8786530c8b585a9e1837b81087ad1_400x400.jpeg',
      description: 'قارئ',
      audioBaseUrl: 'https://server10.mp3quran.net/Abdullahk/'
    },
    {
      id: '47',
      name: 'ياسر الفلكاوي ',
      image: 'https://i.ytimg.com/vi/jnZSBjqFRAI/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGHIgUig3MA8=&rs=AOn4CLDcnBM6Kzj8m3WCMSl7lQNnDIL10Q',
      description: 'قارئ كويتي',
      audioBaseUrl: 'https://server6.mp3quran.net/fyl/'
    },
    {
      id: '48',
      name: 'محمدالفقية ',
      image: 'https://i.scdn.co/image/ab6761610000e5ebe78422e4f5de088e1e1092f1',
      description: 'قارئ كويتي',
      audioBaseUrl: 'https://server16.mp3quran.net/M_Alfaqih/Rewayat-Hafs-A-n-Assem/'
    },
    {
      id: '50',
      name: 'ماجد الزامل',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPUto7QfzYVUDrg2iNG6TbC-haeTaJFDvVNg&s',
      description: 'قارئ سعودي',
      audioBaseUrl: 'https://server9.mp3quran.net/zaml/'
    },
    {
      id: '54',
      name: ' نعمة الحسان',
      image: 'https://i.pinimg.com/564x/6b/4f/a6/6b4fa694dfc953893ede49fc40abf7da.jpg',
      description: 'داعية مصري',
      audioBaseUrl: 'https://server8.mp3quran.net/namh/'
    },
    {
      id: '55',
      name: 'محمد عبد الكريم',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN5jexXIa73WrgNmtFlDcyg1k-5YaQw7yjdw&s',
      description: 'قارئ سوداني',
      audioBaseUrl: 'https://server12.mp3quran.net/m_krm/Rewayat-Warsh-A-n-Nafi-Men-Tariq-Abi-Baker-Alasbahani/'
    },
    {
      id: '57',
      name: 'مصطفى رعد العزاوي',
      image: 'https://i1.sndcdn.com/artworks-TzSkzQ17PvfTd0QP-eNU0Iw-t500x500.jpg',
      description: 'قارئ عراقي',
      audioBaseUrl: 'https://server8.mp3quran.net/ra3ad/'
    },
    {
      id: '58',
      name: 'عبدالعزيز الزهراني',
      image: 'https://api.quranpro.co/images/ZGNlM2FmMjI2YTBiZDk2ZGEyYTMxNTFjZTRlYzczYTQucG5n',
      description: 'قارئ سعودي',
      audioBaseUrl: 'https://server9.mp3quran.net/zahrani/'
    },
    {
      id: '101',
      name: 'عبد الودود حنيف',
      image: 'https://tvquran.com/uploads/authors/images/%D8%AA%D8%A7%D9%85%D8%B1%20%D8%A7%D8%B3%D9%84%D8%A7%D9%85.jpg',
      description: 'قارئ سعودي',
      audioBaseUrl: 'https://server8.mp3quran.net/wdod/'
    },
    {
      id: '103',
      name: 'رامي الدعيس ',
      image: 'https://i.ytimg.com/vi/aLoT3njm-B4/mqdefault.jpg',
      description: 'قارئ عراقي',
      audioBaseUrl: 'https://server6.mp3quran.net/rami/'
    },
    {
      id: '109',
      name: 'سيد احمد هاشمي',
      image: 'https://fa.wikinoor.ir/w/images/thumb/NUR07802.jpg/300px-NUR07802.jpg',
      description: 'قارئ مصري',
      audioBaseUrl: 'https://server16.mp3quran.net/s_hashemi/Rewayat-Hafs-A-n-Assem/'
    },
    {
      id: '27',
      name: 'احمد عامر',
      image: 'https://www.vetogate.com/content/upload/editor/Image1_220212013639456976567.jpg',
      description: 'قارئ مصري',
      audioBaseUrl: 'https://server10.mp3quran.net/Aamer/'
    }
  ];

  const surahs = [
    { number: 1, name: 'الفاتحة', englishName: 'Al-Fatiha', verses: 7, type: 'مكية' },
    { number: 2, name: 'البقرة', englishName: 'Al-Baqarah', verses: 286, type: 'مدنية' },
    { number: 3, name: 'آل عمران', englishName: 'Aal-E-Imran', verses: 200, type: 'مدنية' },
    { number: 4, name: 'النساء', englishName: 'An-Nisa', verses: 176, type: 'مدنية' },
    { number: 5, name: 'المائدة', englishName: 'Al-Maidah', verses: 120, type: 'مدنية' },
    { number: 6, name: 'الأنعام', englishName: 'Al-Anaam', verses: 165, type: 'مكية' },
    { number: 7, name: 'الأعراف', englishName: 'Al-Araf', verses: 206, type: 'مكية' },
    { number: 8, name: 'الأنفال', englishName: 'Al-Anfal', verses: 75, type: 'مدنية' },
    { number: 9, name: 'التوبة', englishName: 'At-Taubah', verses: 129, type: 'مدنية' },
    { number: 10, name: 'يونس', englishName: 'Yunus', verses: 109, type: 'مكية' },
    { number: 11, name: 'هود', englishName: 'Hud', verses: 123, type: 'مكية' },
    { number: 12, name: 'يوسف', englishName: 'Yusuf', verses: 111, type: 'مكية' },
    { number: 13, name: 'الرعد', englishName: 'Ar-Rad', verses: 43, type: 'مدنية' },
    { number: 14, name: 'إبراهيم', englishName: 'Ibrahim', verses: 52, type: 'مكية' },
    { number: 15, name: 'الحجر', englishName: 'Al-Hijr', verses: 99, type: 'مكية' },
    { number: 16, name: 'النحل', englishName: 'An-Nahl', verses: 128, type: 'مكية' },
    { number: 17, name: 'الإسراء', englishName: 'Al-Isra', verses: 111, type: 'مكية' },
    { number: 18, name: 'الكهف', englishName: 'Al-Kahf', verses: 110, type: 'مكية' },
    { number: 19, name: 'مريم', englishName: 'Maryam', verses: 98, type: 'مكية' },
    { number: 20, name: 'طه', englishName: 'Taha', verses: 135, type: 'مكية' },
    { number: 21, name: 'الأنبياء', englishName: 'Al-Anbiya', verses: 112, type: 'مكية' },
    { number: 22, name: 'الحج', englishName: 'Al-Hajj', verses: 78, type: 'مدنية' },
    { number: 23, name: 'المؤمنون', englishName: 'Al-Muminun', verses: 118, type: 'مكية' },
    { number: 24, name: 'النور', englishName: 'An-Nur', verses: 64, type: 'مدنية' },
    { number: 25, name: 'الفرقان', englishName: 'Al-Furqan', verses: 77, type: 'مكية' },
    { number: 26, name: 'الشعراء', englishName: 'Ash-Shuara', verses: 227, type: 'مكية' },
    { number: 27, name: 'النمل', englishName: 'An-Naml', verses: 93, type: 'مكية' },
    { number: 28, name: 'القصص', englishName: 'Al-Qasas', verses: 88, type: 'مكية' },
    { number: 29, name: 'العنكبوت', englishName: 'Al-Ankabut', verses: 69, type: 'مكية' },
    { number: 30, name: 'الروم', englishName: 'Ar-Rum', verses: 60, type: 'مكية' },
    { number: 31, name: 'لقمان', englishName: 'Luqman', verses: 34, type: 'مكية' },
    { number: 32, name: 'السجدة', englishName: 'As-Sajda', verses: 30, type: 'مكية' },
    { number: 33, name: 'الأحزاب', englishName: 'Al-Ahzab', verses: 73, type: 'مدنية' },
    { number: 34, name: 'سبأ', englishName: 'Saba', verses: 54, type: 'مكية' },
    { number: 35, name: 'فاطر', englishName: 'Fatir', verses: 45, type: 'مكية' },
    { number: 36, name: 'يس', englishName: 'Ya-Sin', verses: 83, type: 'مكية' },
    { number: 37, name: 'الصافات', englishName: 'As-Saffat', verses: 182, type: 'مكية' },
    { number: 38, name: 'ص', englishName: 'Sad', verses: 88, type: 'مكية' },
    { number: 39, name: 'الزمر', englishName: 'Az-Zumar', verses: 75, type: 'مكية' },
    { number: 40, name: 'غافر', englishName: 'Ghafir', verses: 85, type: 'مكية' },
    { number: 41, name: 'فصلت', englishName: 'Fussilat', verses: 54, type: 'مكية' },
    { number: 42, name: 'الشورى', englishName: 'Ash-Shuraa', verses: 53, type: 'مكية' },
    { number: 43, name: 'الزخرف', englishName: 'Az-Zukhruf', verses: 89, type: 'مكية' },
    { number: 44, name: 'الدخان', englishName: 'Ad-Dukhan', verses: 59, type: 'مكية' },
    { number: 45, name: 'الجاثية', englishName: 'Al-Jathiya', verses: 37, type: 'مكية' },
    { number: 46, name: 'الأحقاف', englishName: 'Al-Ahqaf', verses: 35, type: 'مكية' },
    { number: 47, name: 'محمد', englishName: 'Muhammad', verses: 38, type: 'مدنية' },
    { number: 48, name: 'الفتح', englishName: 'Al-Fath', verses: 29, type: 'مدنية' },
    { number: 49, name: 'الحجرات', englishName: 'Al-Hujurat', verses: 18, type: 'مدنية' },
    { number: 50, name: 'ق', englishName: 'Qaf', verses: 45, type: 'مكية' },
    { number: 51, name: 'الذاريات', englishName: 'Adh-Dhariyat', verses: 60, type: 'مكية' },
    { number: 52, name: 'الطور', englishName: 'At-Tur', verses: 49, type: 'مكية' },
    { number: 53, name: 'النجم', englishName: 'An-Najm', verses: 62, type: 'مكية' },
    { number: 54, name: 'القمر', englishName: 'Al-Qamar', verses: 55, type: 'مكية' },
    { number: 55, name: 'الرحمن', englishName: 'Ar-Rahman', verses: 78, type: 'مدنية' },
    { number: 56, name: 'الواقعة', englishName: 'Al-Waqi\'ah', verses: 96, type: 'مكية' },
    { number: 57, name: 'الحديد', englishName: 'Al-Hadid', verses: 29, type: 'مدنية' },
    { number: 58, name: 'المجادلة', englishName: 'Al-Mujadila', verses: 22, type: 'مدنية' },
    { number: 59, name: 'الحشر', englishName: 'Al-Hashr', verses: 24, type: 'مدنية' },
    { number: 60, name: 'الممتحنة', englishName: 'Al-Mumtahanah', verses: 13, type: 'مدنية' },
    { number: 61, name: 'الصف', englishName: 'As-Saff', verses: 14, type: 'مدنية' },
    { number: 62, name: 'الجمعة', englishName: 'Al-Jumu\'ah', verses: 11, type: 'مدنية' },
    { number: 63, name: 'المنافقون', englishName: 'Al-Munafiqun', verses: 11, type: 'مدنية' },
    { number: 64, name: 'التغابن', englishName: 'At-Taghabun', verses: 18, type: 'مدنية' },
    { number: 65, name: 'الطلاق', englishName: 'At-Talaq', verses: 12, type: 'مدنية' },
    { number: 66, name: 'التحريم', englishName: 'At-Tahrim', verses: 12, type: 'مدنية' },
    { number: 67, name: 'الملك', englishName: 'Al-Mulk', verses: 30, type: 'مكية' },
    { number: 68, name: 'القلم', englishName: 'Al-Qalam', verses: 52, type: 'مكية' },
    { number: 69, name: 'الحاقة', englishName: 'Al-Haqqah', verses: 52, type: 'مكية' },
    { number: 70, name: 'المعارج', englishName: 'Al-Ma\'arij', verses: 44, type: 'مكية' },
    { number: 71, name: 'نوح', englishName: 'Nuh', verses: 28, type: 'مكية' },
    { number: 72, name: 'الجن', englishName: 'Al-Jinn', verses: 28, type: 'مكية' },
    { number: 73, name: 'المزمل', englishName: 'Al-Muzzammil', verses: 20, type: 'مكية' },
    { number: 74, name: 'المدثر', englishName: 'Al-Muddaththir', verses: 56, type: 'مكية' },
    { number: 75, name: 'القيامة', englishName: 'Al-Qiyamah', verses: 40, type: 'مكية' },
    { number: 76, name: 'الإنسان', englishName: 'Al-Insan', verses: 31, type: 'مدنية' },
    { number: 77, name: 'المرسلات', englishName: 'Al-Mursalat', verses: 50, type: 'مكية' },
    { number: 78, name: 'النبأ', englishName: 'An-Naba', verses: 40, type: 'مكية' },
    { number: 79, name: 'النازعات', englishName: 'An-Nazi\'at', verses: 46, type: 'مكية' },
    { number: 80, name: 'عبس', englishName: 'Abasa', verses: 42, type: 'مكية' },
    { number: 81, name: 'التكوير', englishName: 'At-Takwir', verses: 29, type: 'مكية' },
    { number: 82, name: 'الانفطار', englishName: 'Al-Infitar', verses: 19, type: 'مكية' },
    { number: 83, name: 'المطففين', englishName: 'Al-Mutaffifin', verses: 36, type: 'مكية' },
    { number: 84, name: 'الانشقاق', englishName: 'Al-Inshiqaq', verses: 25, type: 'مكية' },
    { number: 85, name: 'البروج', englishName: 'Al-Buruj', verses: 22, type: 'مكية' },
    { number: 86, name: 'الطارق', englishName: 'At-Tariq', verses: 17, type: 'مكية' },
    { number: 87, name: 'الأعلى', englishName: 'Al-A\'la', verses: 19, type: 'مكية' },
    { number: 88, name: 'الغاشية', englishName: 'Al-Ghashiyah', verses: 26, type: 'مكية' },
    { number: 89, name: 'الفجر', englishName: 'Al-Fajr', verses: 30, type: 'مكية' },
    { number: 90, name: 'البلد', englishName: 'Al-Balad', verses: 20, type: 'مكية' },
    { number: 91, name: 'الشمس', englishName: 'Ash-Shams', verses: 15, type: 'مكية' },
    { number: 92, name: 'الليل', englishName: 'Al-Layl', verses: 21, type: 'مكية' },
    { number: 93, name: 'الضحى', englishName: 'Ad-Duhaa', verses: 11, type: 'مكية' },
    { number: 94, name: 'الشرح', englishName: 'Ash-Sharh', verses: 8, type: 'مكية' },
    { number: 95, name: 'التين', englishName: 'At-Tin', verses: 8, type: 'مكية' },
    { number: 96, name: 'العلق', englishName: 'Al-Alaq', verses: 19, type: 'مكية' },
    { number: 97, name: 'القدر', englishName: 'Al-Qadr', verses: 5, type: 'مكية' },
    { number: 98, name: 'البينة', englishName: 'Al-Bayyinah', verses: 8, type: 'مدنية' },
    { number: 99, name: 'الزلزلة', englishName: 'Az-Zalzalah', verses: 8, type: 'مدنية' },
    { number: 100, name: 'العاديات', englishName: 'Al-Adiyat', verses: 11, type: 'مكية' },
    { number: 101, name: 'القارعة', englishName: 'Al-Qari\'ah', verses: 11, type: 'مكية' },
    { number: 102, name: 'التكاثر', englishName: 'At-Takathur', verses: 8, type: 'مكية' },
    { number: 103, name: 'العصر', englishName: 'Al-Asr', verses: 3, type: 'مكية' },
    { number: 104, name: 'الهمزة', englishName: 'Al-Humazah', verses: 9, type: 'مكية' },
    { number: 105, name: 'الفيل', englishName: 'Al-Fil', verses: 5, type: 'مكية' },
    { number: 106, name: 'قريش', englishName: 'Quraish', verses: 4, type: 'مكية' },
    { number: 107, name: 'الماعون', englishName: 'Al-Ma\'un', verses: 7, type: 'مكية' },
    { number: 108, name: 'الكوثر', englishName: 'Al-Kawthar', verses: 3, type: 'مكية' },
    { number: 109, name: 'الكافرون', englishName: 'Al-Kafirun', verses: 6, type: 'مكية' },
    { number: 110, name: 'النصر', englishName: 'An-Nasr', verses: 3, type: 'مدنية' },
    { number: 111, name: 'المسد', englishName: 'Al-Masad', verses: 5, type: 'مكية' },
    { number: 112, name: 'الإخلاص', englishName: 'Al-Ikhlas', verses: 4, type: 'مكية' },
    { number: 113, name: 'الفلق', englishName: 'Al-Falaq', verses: 5, type: 'مكية' },
    { number: 114, name: 'الناس', englishName: 'An-Nas', verses: 6, type: 'مكية' }
  ];

  const handlePlaySurah = (surah: typeof surahs[0]) => {
    const reader = readers.find(r => r.id === selectedReader);

    if (reader && reader.audioBaseUrl) {
      const surahNumberPadded = String(surah.number).padStart(3, '0');
      const audioUrl = `${reader.audioBaseUrl}${surahNumberPadded}.mp3`;

      console.log("Playing:", {
        readerName: reader.name,
        surahName: surah.name,
        audioUrl: audioUrl
      });

      playTrack({
        id: `${reader.id}-${surah.number}`,
        title: `سورة ${surah.name}`,
        artist: reader.name,
        image: reader.image,
        url: audioUrl
      });
    } else {
      console.error("Reader or audioBaseUrl not found for selected reader.");
      alert("عذراً، لا يمكن العثور على معلومات الصوت لهذا القارئ.");
    }
  };

  // فلترة القراء بناءً على searchTerm
  const filteredReaders = useMemo(() => {
    if (!searchTerm) {
      return readers;
    }
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return readers.filter(reader =>
      reader.name.toLowerCase().includes(lowercasedSearchTerm) ||
      reader.description.toLowerCase().includes(lowercasedSearchTerm)
    );
  }, [readers, searchTerm]);

  // فلترة السور بناءً على searchTerm
  const filteredSurahs = useMemo(() => {
    if (!searchTerm) {
      return surahs;
    }
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return surahs.filter(surah =>
      surah.name.toLowerCase().includes(lowercasedSearchTerm) ||
      surah.englishName.toLowerCase().includes(lowercasedSearchTerm) ||
      surah.type.toLowerCase().includes(lowercasedSearchTerm)
    );
  }, [surahs, searchTerm]);

  // دالة لمسح حقل البحث
  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    // هذا هو السطر الذي تم تعديله لإضافة padding-bottom
    <div className="container mx-auto p-4 pb-40 max-w-4xl font-arabic">
      <AnimatePresence mode="wait">
        {!selectedReader ? (
          <motion.div
            key="reader-selection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-black mb-6 text-center">اختر القارئ</h2>
            {/* حقل البحث */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="ابحث عن قارئ..."
                className="w-full p-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-white text-gray-900 dark:text-gray-900 shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              {searchTerm && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReaders.map((reader) => (
                <motion.div
                  key={reader.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedReader(reader.id)}
                  className="bg-white dark:bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-emerald-100"
                >
                  <div className="relative h-32 w-full overflow-hidden">
                    <img
                      src={reader.image}
                      alt={reader.name}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-900 mb-1 font-arabic">{reader.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-600 font-arabic">{reader.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="surah-selection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setSelectedReader(null)}
              className="mb-6 flex items-center text-emerald-600 hover:text-emerald-800 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              عودة لاختيار القارئ
            </button>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-black mb-6 text-center">
              سورة {readers.find(r => r.id === selectedReader)?.name}
            </h2>
            {/* حقل البحث عن السور */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="ابحث عن سورة..."
                className="w-full p-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-white text-gray-900 dark:text-gray-900 shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              {searchTerm && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSurahs.map((surah) => (
                <motion.div
                  key={surah.number}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handlePlaySurah(surah)}
                  className="bg-white dark:bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-emerald-100 p-4 flex items-center space-x-4 space-x-reverse"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {surah.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-900 mb-1 font-arabic">{surah.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-600 font-arabic">
                      {surah.verses} آية | {surah.type}
                    </p>
                  </div>
                  <Play className="w-6 h-6 text-emerald-600" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuranPage;