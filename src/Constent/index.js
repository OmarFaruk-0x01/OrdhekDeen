export const LogoBW = require('../../assets/images/logo_bw.png');
export const Logo = require('../../assets/images/logo.png');
export const BackgroundImage = require('../../assets/images/mb-background.jpg');
export const MaleImage = require('../../assets/images/male.png');
export const FeMaleImage = require('../../assets/images/female.png');
export const MarriedImage = require('../../assets/images/married.png');
export const CoupleImage = require('../../assets/images/couple.png');
export const CardBG = require('../../assets/images/cardbg.png');

// Font Families
export const BN_Style = 'LI';
export const BN = 'NK';
export const EN_Light = 'PL';
export const EN_Bold = 'PB';
export const EN_Medium = 'PM';
export const EN_Regular = 'PR';

export const fontConfig = {
  ios: {
    regular: {
      fontFamily: BN,
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: BN,
      fontWeight: 'normal',
    },
    light: {
      fontFamily: BN,
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: BN,
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: BN,
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: BN,
      fontWeight: 'normal',
    },
    light: {
      fontFamily: BN,
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: BN,
      fontWeight: 'normal',
    },
  },
};

// Haditdh
export const HomeScreen_Haidis = {
  hadis:
    'যে ব্যক্তি বিয়ে করলো সে তার অর্ধেক দ্বীন পূর্ণ করে ফেললো। বাকি অর্ধেকের জন্য সে আল্লাহকে ভয় করুক।',
  ref: 'বায়হাকী, শু’আবুল ঈমান – ৫৪৮৬',
};

// All Texts
export const SwitchButton_Text = {button1: 'পরিচিতি', button2: 'বায়োডাটা'};

// Home Screen Texts
export const SearchInputTexts = [
  ['আমি খুঁজছি', ['সকল বায়োডাটা', 'পাত্রের বায়োডাটা', 'পাত্রীর বায়োডাটা']],
  [
    'বৈবাহিক অবস্থা',
    ['সকল', 'অবিবাহিত', 'বিবাহিত', 'ডিভোর্সড', 'বিধবা', 'বিপত্নীক'],
  ],
  [
    'জেলা',
    [
      'সকল জেলা',
      'কুমিল্লা',
      'কক্সবাজার',
      'কুষ্টিয়া',
      'কিশোরগঞ্জ',
      'কুড়িগ্রাম',
      'খাগড়াছড়ি',
      'খুলনা',
      'গাজীপুর',
      'গোপালগঞ্জ',
      'গাইবান্ধা',
      'হবিগঞ্জ',
      'চাঁদপুর',
      'চট্টগ্রাম',
      'চাঁপাইনবাবগঞ্জ',
      'চুয়াডাঙ্গা',
      'জয়পুরহাট',
      'জামালপুর',
      'ঝিনাইদহ',
      'ঝালকাঠি',
      'যশোর',
      'শরীয়তপুর',
      'শেরপুর',
      'টাঙ্গাইল',
      'ঠাকুরগাঁও',
      'ঢাকা',
      'রাঙ্গামাটি',
      'রাজশাহী',
      'রাজবাড়ী',
      'রংপুর',
      'দিনাজপুর',
      'নোয়াখালী',
      'নাটোর',
      'নওগাঁ',
      'নড়াইল',
      'নরসিংদী',
      'নারায়ণগঞ্জ',
      'নীলফামারী',
      'নেত্রকোণা',
      'লক্ষ্মীপুর',
      'লালমনিরহাট',
      'সিরাজগঞ্জ',
      'সাতক্ষীরা',
      'সিলেট',
      'সুনামগঞ্জ',
      'পাবনা',
      'পটুয়াখালী',
      'পিরোজপুর',
      'পঞ্চগড়',
      'ফেনী',
      'ফরিদপুর',
      'ব্রাহ্মণবাড়িয়া',
      'বান্দরবান',
      'বগুড়া',
      'বাগেরহাট',
      'বরিশাল',
      'বরগুনা',
      'ভোলা',
      'ময়মনসিংহ',
      'মেহেরপুর',
      'মাগুরা',
      'মৌলভীবাজার',
      'মানিকগঞ্জ',
      'মুন্সিগঞ্জ',
      'মাদারীপুর',
    ],
  ],
];

// BioDatas
export const Biodatas = Array(10000)
  .fill(0)
  .map((i, index) => ({
    key: `${index}`,
    gender: 'M',
    bio_no: Math.floor(Math.random() * 10000),
    marride_status: 'ডিভোর্সড',
    birth_year: '১৯৮৭',
    work: 'প্রিন্সিপাল অফিসার',
  }));
