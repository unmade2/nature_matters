import { ItineraryDay, TripHighlight, IncludedItem, ExcludedItem, Testimonial, Language, WeatherSeason, CompanyInfo, SocialLinks } from './types';
import gallery1 from './assets/gallery (1).jpeg';
import gallery2 from './assets/gallery (2).jpeg';
import gallery3 from './assets/gallery (3).jpeg';
import gallery4 from './assets/gallery (4).jpeg';
import gallery5 from './assets/gallery (5).jpeg';
import gallery6 from './assets/gallery (6).jpeg';
import gallery7 from './assets/gallery (7).jpeg';
import gallery8 from './assets/gallery (8).jpeg';
import gallery9 from './assets/gallery (9).jpeg';
import gallery10 from './assets/gallery (10).jpeg';
import gallery11 from './assets/gallery (11).jpeg';
import gallery12 from './assets/gallery (12).jpeg';
import gallery13 from './assets/gallery (13).jpeg';
import gallery14 from './assets/gallery (14).jpeg';
import gallery15 from './assets/gallery (15).jpeg';
import gallery16 from './assets/gallery (16).jpeg';
import gallery17 from './assets/gallery (17).jpeg';
import gallery18 from './assets/gallery (18).jpeg';
import gallery19 from './assets/gallery (19).jpeg';
import gallery20 from './assets/gallery (20).jpeg';
import gallery21 from './assets/gallery (21).jpeg';
import gallery22 from './assets/gallery (22).jpeg';
import gallery23 from './assets/gallery (23).jpeg';
import gallery24 from './assets/gallery (24).jpeg';
import gallery25 from './assets/gallery (25).jpeg';
import gallery26 from './assets/gallery (26).jpeg';
import gallery27 from './assets/gallery (27).jpeg';
import gallery28 from './assets/gallery (28).jpeg';
import gallery29 from './assets/gallery (29).jpeg';
import kevinKohImg from './assets/kevin-koh.jpg';
import judithTanImg from './assets/judith-tan.jpg';
import joyceHuiPengTanImg from './assets/joyce-huipeng-tan.jpg';
import ngButtwahImg from './assets/ng-buttwah.jpg';
import yeoYiHuiImg from './assets/yeo-yi-hui.jpg';
import vivianLaiImg from './assets/vivian-lai.jpg';
import louiseYapImg from './assets/louise-yap.jpg';
import andrewChinImg from './assets/andrew-chin.jpg';
import pooiChengMakImg from './assets/pooi-cheng-mak.jpg';
import tengHoiYenImg from './assets/teng-hoi-yen.jpg';
import owenWooImg from './assets/owen-woo.jpg';
import mrMalaysia1 from './assets/mr_malaysia_1.jpeg';
import mrMalaysia2 from './assets/mr_malaysia_2.jpeg';
import mrMalaysia3 from './assets/mr_malaysia_3.jpeg';
import mrMalaysia4 from './assets/mr_malaysia_4.jpeg';
import chinaPress1 from './assets/china_press_1.png';
import chinaPress2 from './assets/china_press_2.jpg';
import chinaPress3 from './assets/china_press_3.webp';

export const SOCIAL_LINKS: SocialLinks = {
  facebook: "https://www.facebook.com/share/1acz4x1noi/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/nature.matters?igsh=N3prM2h4Z29jazZr&utm_source=qr",
  whatsapp: "https://wa.me/923557175521",
  email: "naturematters.co@gmail.com"
};

export const DOWNLOAD_LINK = "https://drive.google.com/file/d/1S5-H3V1Fj0YHD08lOZ5jTqnWLrQTUoDt/view?usp=sharing";

export const COMPANY_INFO: CompanyInfo = {
  name: "Nature Matters Travel and Tours Sdn Bhd",
  license: "License No. : 1634527-D",
  registration: "Registeration Number :202501033117",
  established: "established in 2018, and has hosted 1500+ group travellers from Malaysia to Pakistan.",
  address: "ENIGMA SQUARE, NO. 6-2 JALAN PUTERI 3A/5, 43000 BANDAR PUTERI BANGI, KAJANG, SELANGOR"
};

export const GALLERY_IMAGES = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
  gallery22,
  gallery23,
  gallery24,
  gallery25,
  gallery26,
  gallery27,
  gallery28,
  gallery29,
];

interface Content {
  tripDetails: {
    title: string;
    subtitle: string;
    date: string;
    price: string;
    duration: string;
    groupSize: string;
    age: string;
    soloTravelerTitle: string;
    soloTravelerDesc: string;
    privateGroupTitle: string;
    privateGroupDesc: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  intro: {
    title: string;
    text1: string;
    highlight: string;
    text2: string;
  };
  headers: {
    tripDetails: string;
    confirmedDepartures: string;
    packageCost: string;
    daysTraveled: string;
    members: string;
    ageAppropriate: string;
    weatherForecast: string;
    highlights: string;
    notices: string;
    itinerary: string;
    inclusions: string;
    exclusions: string;
    testimonials: string;
    whyChooseUs: string;
    contact: string;
    gallery: string;
  };
  ui: {
    bookNow: string;
    selectDate: string;
    downloadItinerary: string;
    downloadItineraryBtn: string;
    viewContact: string;
    weatherNote: string;
    depositNote: string;
    home: string;
    about: string;
    contact: string;
    resources: string;
    explore: string;
    rights: string;
    readMore: string;
    emailUs: string;
    ourLocation: string;
    contactHeroSubtitle: string;
    whatsappChatLabel: string;
    preferredTripDateLabel: string;
    selectDatePlaceholder: string;
    totalPeopleLabel: string;
    peoplePlaceholder: string;
    sendMessage: string;
    name: string;
    phone: string;
    email: string;
    message: string;
    sendBtn: string;
    whatappUs: string;
    askAbout: string;
    somethingWrong: string;
    recommends: string;
    gallerySubtitle: string;
  };
  about: {
    heroTitle: string;
    heroSubtitle: string;
    quote: string;
    storyTitle: string;
    storyText1: string;
    storyText2: string;
    imageCaption: string;
    whoWeAreTitle: string;
    whoWeAreText: string;
    locations: string[];
    trustedTitle: string;
    trustedText: string;
    ecoTitle: string;
    ecoText: string;
    ecoList: string[];
    whyUsTitle: string;
    whyUsList: string[];
    visionTitle: string;
    visionText: string;
    achievementsTitle: string;
    achievements: { title: string; text: string; images: string[] }[];
    ctaTitle: string;
    gallery: string;
  };
  highlights: TripHighlight[];
  itinerary: ItineraryDay[];
  inclusions: IncludedItem[];
  exclusions: ExcludedItem[];
  notices: string[];
  departureDates: string[];
  weatherSeasons: WeatherSeason[];
  testimonials: Testimonial[];
  systemInstruction: string;
  whyChooseCards: {
    expert: { title: string; desc: string; };
    licensed: { title: string; desc: string; };
    proven: { title: string; desc: string; };
  };
}

const CONTENT_EN: Content = {
  tripDetails: {
    title: "Pakistan Discovery Tour",
    subtitle: "12 DAYS ADVENTURE TRIP FROM MALAYSIA TO NORTHERN PAKISTAN",
    date: "Multiple Dates (Mar - Nov)",
    price: "RM 6,500 / pax",
    duration: "12 days 11 nights",
    groupSize: "15-18 people",
    age: "25+ years old",
    soloTravelerTitle: "Room Basis",
    soloTravelerDesc: "Rooms are on Twin Sharing Basis. We find a roommate for you or pay the difference for a single room occupancy RM 1,500 (Optional).",
    privateGroupTitle: "Private Group",
    privateGroupDesc: "You can enjoy preferential prices for private groups, contact customer service to inquire about the tour leader's schedule"
  },
  hero: {
    eyebrow: "12 DAYS ADVENTURE TRIP FROM MALAYSIA TO NORTHERN PAKISTAN",
    title: "Pakistan Discovery Tour",
    description: "An immersive journey through Northern Pakistan — from cultural capitals to high-altitude landscapes, where nature, history, and adventure meet."
  },
  intro: {
    title: "Pakistan Discovery Tour",
    text1: "Pakistan is a land of extraordinary contrasts — ancient civilizations, dramatic mountain ranges, and some of the most untouched landscapes on Earth. This 12-day guided group journey by Nature Matters Travel & Tours is designed to showcase the very best of Northern Pakistan, combining cultural depth, natural wonders, and authentic local experiences.",
    highlight: "The charm of Pakistan — majestic landscapes, raw beauty, and powerful diversity.",
    text2: "From the historic streets of Lahore and the modern capital of Islamabad to the alpine valleys of Skardu, Hunza, Naltar, and Kashmir, this journey follows legendary routes such as the Karakoram Highway and reaches iconic landmarks like Khunjerab Pass at the Pakistan–China border. Each destination reveals a different face of Pakistan — vast, welcoming, and unforgettable."
  },
  headers: {
    tripDetails: "Trip Details",
    confirmedDepartures: "Confirmed Group Departures (Select Date)",
    packageCost: "Package Cost",
    daysTraveled: "Number of Days Traveled",
    members: "Number of Members",
    ageAppropriate: "Age-Appropriate",
    weatherForecast: "Weather Forecast",
    highlights: "Trip Highlights",
    notices: "What you need to know when you come to North Pakistan",
    itinerary: "Itinerary",
    inclusions: "The tour fee includes:",
    exclusions: "Tour fee does not include:",
    testimonials: "What Our Travellers Say",
    whyChooseUs: "Why Travel With Us?",
    contact: "Contact us for inquiries and bookings",
    gallery: "Our Gallery"
  },
  ui: {
    bookNow: "Book Now",
    selectDate: "Select your preferred date from the dropdown and click Book Now to reserve via WhatsApp.",
    downloadItinerary: "Download Itinerary (English Version)",
    downloadItineraryBtn: "Download Itinerary",
    viewContact: "Contact Page",
    weatherNote: "*Recorded in previous years as a reference*",
    depositNote: "If you confirm your registration, we will charge a deposit of RM800 per person to reserve your seat on a first-come, first-served basis!",
    home: "Home",
    about: "About Us",
    contact: "Contact Us",
    resources: "Resources",
    explore: "Explore",
    rights: "All rights reserved.",
    readMore: "Read More",
    emailUs: "Email Us",
    ourLocation: "Our Location",
    contactHeroSubtitle: "We'd love to hear from you. Start your journey with us today.",
    whatsappChatLabel: "Chat with our team",
    preferredTripDateLabel: "Preferred Trip Date",
    selectDatePlaceholder: "Select trip date",
    totalPeopleLabel: "Total People",
    peoplePlaceholder: "e.g. 4",
    sendMessage: "Send us a Message",
    name: "Name",
    phone: "Phone",
    email: "Email",
    message: "Message",
    sendBtn: "Send Message",
    whatappUs: "WhatsApp Us",
    askAbout: "Ask about the trip...",
    somethingWrong: "Sorry, something went wrong.",
    recommends: "Recommends Nature Matters",
    gallerySubtitle: "Moments captured from our previous expeditions"
  },
  about: {
    heroTitle: "About Us",
    heroSubtitle: "Nature Matters Travel & Tours Sdn. Bhd.",
    quote: "\"We believe travel should not only inspire people — it should also protect the planet and uplift local communities.\"",
    storyTitle: "Our Story",
    storyText1: "Founded with a deep love for nature, culture, and meaningful exploration, we are a Malaysia-registered travel company committed to delivering eco-friendly, responsible, and authentic travel experiences.",
    storyText2: "We specialize in immersive adventure and nature-based journeys across Asia's most breathtaking regions, ensuring our travelers enjoy deeper cultural access with the reassurance of being guided by people who truly know the land.",
    imageCaption: "Exploring Together\nSince 2018",
    whoWeAreTitle: "🌿 Who We Are",
    whoWeAreText: "Proudly serving travelers for over 4 years. We have operational branch offices and ground teams in regions rich in natural beauty:",
    locations: ["Northern Pakistan", "Southern Xinjiang (China)", "Northern Xinjiang (China)"],
    trustedTitle: "🇲🇾 Trusted & Registered",
    trustedText: "Nature Matters Travel & Tours is officially registered in Malaysia. This provides our travelers with greater transparency, trust, and payment protection.",
    ecoTitle: "🌍 Eco-Friendly Commitment",
    ecoText: "Responsible tourism is at our heart. We don't just take you to beautiful places — we strive to protect them.",
    ecoList: ["Supporting local communities & guides", "Small-group travel (Low impact)", "Leave No Trace principles"],
    whyUsTitle: "🤝 Why Travel With Us",
    whyUsList: [
      "Local expertise with regional branch offices",
      "Carefully curated nature & culture itineraries",
      "Small-group adventures for deeper, more personal experiences",
      "Transparent pricing and Malaysian-registered operations",
      "Dedicated tour leaders who prioritize safety, comfort, and authenticity",
      "Hosted 1500+ group travellers from Malaysia to Pakistan"
    ],
    visionTitle: "✨ Our Vision",
    visionText: "\"To become a leading eco-conscious adventure travel brand in Asia, connecting travelers with nature in a responsible way — while empowering local communities and preserving the landscapes we love.\"",
    achievementsTitle: "Our Achievements",
    achievements: [
      {
        title: "Hosted Mr. Malaysia 2023/2024 - Kevin Murthy",
        text: "We had the honour of hosting Mr. Malaysia 2023/2024 – Kevin Murthy, winner of AMR Malaysia, on our 12-day Northern Pakistan adventure expedition. Joining us as a solo traveller, Kevin brought remarkable humility, positive energy, and genuine curiosity for culture and landscapes.\n\nBeyond the stage, he proved to be an inspiring traveller and a wonderful ambassador of Malaysia. Hosting distinguished guests like Kevin reflects the trust international travellers place in Nature Matters to deliver safe, authentic, and memorable travel experiences across Northern Pakistan.",
        images: [mrMalaysia1, mrMalaysia2, mrMalaysia3, mrMalaysia4]
      },
      {
        title: "Featured in China Press",
        text: "On 4 February 2026, Nature Matters Travel was proudly featured in China Press through a travel feature by Li Peihong, highlighting her journey across Northern Pakistan with our team. The coverage showcased the region’s natural beauty, cultural depth, and the quality of guided experiences we strive to deliver.\n\nThis international media recognition reflects the growing trust global travellers place in Nature Matters and strengthens our commitment to providing safe, authentic, and memorable travel experiences in Pakistan.",
        images: [chinaPress1, chinaPress2, chinaPress3]
      }
    ],
    ctaTitle: "Ready to explore with us?",
    gallery: "Our Gallery"
  },
  highlights: [
    { id: '1', text: 'Immerse yourself in the panoramic majesty of Northern Pakistan and uncover the secrets of the longevity villages.' },
    { id: '2', text: 'Traverse the legendary Karakoram Highway (KKH), hailed as the Eighth Wonder of the World.' },
    { id: '3', text: 'Witness the Hunza Valley in its full glory—a tapestry of towering peaks, colossal glaciers, and turquoise lakes.' },
    { id: '4', text: 'Experience the raw, unadorned beauty of the Northern frontiers, a landscape untouched by time.' },
    { id: '5', text: 'Roam the Deosai National Park, the second-highest plateau on Earth, known as the Land of Giants.' },
    { id: '6', text: 'Stand at the Khunjerab Pass, the world’s highest paved international border connecting Pakistan and China.' },
    { id: '7', text: 'Brave the Hussaini Hanging Bridge, a thrilling testament to local engineering over the Hunza River.' },
    { id: '8', text: 'Glide across the azure waters of Attabad Lake, a stunning natural wonder born from the mountains.' },
    { id: '9', text: 'Connect with the warm, hospitable minority communities of the Hunza Valley and learn their rich traditions.' },
    { id: '10', text: 'Discover the cultural heart of Lahore and the modern elegance of Islamabad, two of South Asia’s most vibrant cities.' },
    { id: '11', text: 'Venture into the Naltar Valley, a hidden gem and sanctuary for the elusive Snow Leopard.' },
  ],
  itinerary: [
    { day: 'Day 1', title: 'KL to Lahore Flight', description: 'Departure from KL and arrival in Lahore.' },
    { day: 'Day 2', title: 'Lahore to Islamabad', description: 'Travel from Lahore to Islamabad.' },
    { day: 'Day 3', title: 'Islamabad - Skardu - Gilgit', description: 'Journey from Islamabad to Skardu and then to Gilgit.' },
    { day: 'Day 4', title: 'Deosai National Park', description: 'Explore the Deosai National Park, the 2nd highest plateau in the world.' },
    { day: 'Day 5', title: 'Naltar Valley - Snow Leopard Sanctuary', description: 'Visit the beautiful Naltar Valley and the Snow Leopard Sanctuary.' },
    { day: 'Day 6', title: 'Hunza - Nagar Valley - Hunza', description: 'Explore Hunza and Nagar Valley.' },
    { day: 'Day 7', title: 'Hunza - Khunjerab Pass - Passu', description: 'Visit Khunjerab Pass (China Border) and stay in Passu.' },
    { day: 'Day 8', title: 'Passu - Attabad - Giglit', description: 'Travel from Passu to Attabad Lake and then to Gilgit.' },
    { day: 'Day 9', title: 'Gilgit - Chillas/Naran', description: 'Travel from Gilgit to Chillas or Naran.' },
    { day: 'Day 10', title: 'Naran - Islamabad', description: 'Return journey to Islamabad.' },
    { day: 'Day 11', title: 'Islamabad - Lahore', description: 'Travel back to Lahore from Islamabad.' },
    { day: 'Day 12', title: 'Lahore City Tour - Flight Back to KL', description: 'City tour of Lahore followed by flight back to Kuala Lumpur.' },
  ],
  inclusions: [
    { id: '1', text: 'Round-trip international flights [Approx. RM4000]' },
    { id: '2', text: 'Full accommodation (2 people in 1 room), comfortable and tidy rooms' },
    { id: '3', text: 'Meals (breakfast and dinner)' },
    { id: '4', text: 'Domestic flight from Islamabad to Skardu (including 23kg checked baggage)' },
    { id: '5', text: 'Invitation Letter (LOI) to Apply for Pakistan Tourist Visa' },
    { id: '6', text: 'Visa Application Services & Fees ($15)' },
    { id: '7', text: '4WD jeeps for mountain transportation.' },
    { id: '8', text: 'Boat ride experience on Lake Attabad' },
    { id: '9', text: 'All activities mentioned in the itinerary' },
    { id: '10', text: 'Unlimited mineral water' },
    { id: '11', text: 'Daily land transportation throughout the journey' },
    { id: '12', text: 'Professional local guide' },
  ],
  exclusions: [
    { id: '1', text: 'Optional Activity/Entrance tickets: Hosseini Suspension Bridge Zipline [Approx. $20]' },
    { id: '2', text: 'Lunch' },
    { id: '3', text: 'Snacks and personal shopping consumption' },
    { id: '4', text: 'Travel insurance' },
  ],
  notices: [
    "The weather in remote areas of northern Pakistan can be unpredictable. We may experience bad weather, so we may face unexpected situations such as flight cancellations or road closures. In this case, we will need to adjust the itinerary and accommodation arrangements on site according to the situation.",
    "This tour is only suitable for adults who love adventure. Participants also need to be in good physical fitness, have no underlying medical conditions (asthma, hypertension, heart disease), and need to be adequately equipped to handle cold, strong winds, and high altitude temperatures.",
    "Although there are no trekking areas included in itinerary we expect you to join with best of health and fitness.",
    "Good and durable trekking shoes and a warm jacket that protect against the wind are must-haves. The complete packing guide will be shared with you.",
    "Remote areas in northern Pakistan have very limited facilities and often experience power outages. We arrange comfortable accommodation for everyone to ensure basic hygiene and safety."
  ],
  departureDates: [
    "18 Mar. - 29 Mar (Blossom Season)",
    "6 April - 17 April (Blossom Season)",
    "18 April - 29 April (Blossom Season)",
    "1st May - 12 May (Cherry/Apricot Season)",
    "15 May - 26 May (Cherry/Apricot Season)",
    "24 May to 4th June (Cherry/Apricot Season)",
    "1st Oct - 12 Oct (Autumn Season)",
    "12 Oct - 23 Oct (Autumn Season)",
    "23 Oct - 3rd Nov (Autumn Season)",
    "6 Nov - 17 Nov (Autumn Season)"
  ],
  weatherSeasons: [
    {
      title: "Blossom Season (Mid-March to April)",
      data: [
        { city: "Islamabad City", temp: "15°C/28°C", desc: "Mild and pleasant with clear, blue skies and low humidity; ideal for visiting urban parks." },
        { city: "Fairy Meadow Hill", temp: "-2°C/12°C", desc: "Crisp alpine air with a lingering winter chill; snow is often still visible on the ground while wildflowers begin to emerge." },
        { city: "Hunza Valley", temp: "8°C/18°C", desc: "Cool, aromatic breezes with bright sunny afternoons; perfect for viewing the pink and white fruit blossoms." }
      ]
    },
    {
      title: "Cherry & Apricot Season (May to July)",
      data: [
         { city: "Islamabad City", temp: "24°C/39°C", desc: "Transitioning from hot to sweltering; very sunny with occasional heavy monsoon rain starting in July." },
         { city: "Fairy Meadow Hill", temp: "8°C/22°C", desc: "Pleasantly warm during the day and cool at night; the most stable weather for trekking and camping under the stars." },
         { city: "Hunza Valley", temp: "15°C/30°C", desc: "Mild and moderate; the valley is lush green, and the weather is comfortable for exploring high-altitude viewpoints." }
      ]
    },
    {
      title: "Fall Season (September to November)",
      data: [
         { city: "Islamabad City", temp: "16°C/30°C", desc: "Warm, sunny days giving way to cool, refreshing evenings as the humidity of summer disappears." },
         { city: "Fairy Meadow Hill", temp: "0°C/15°C", desc: "Dry and crisp air with brilliant clarity; temperatures drop sharply after sunset, often reaching freezing by late October." },
         { city: "Hunza Valley", temp: "5°C/20°C", desc: "Cool and calm with exceptionally clear visibility; the vibrant gold and orange foliage is set against a backdrop of deep blue skies." }
      ]
    }
  ],
  whyChooseCards: {
    expert: {
      title: "Expertly Guided Expeditions",
      desc: "Every journey is accompanied by a professional tour leader dedicated to ensuring your safety, comfort, and an immersive cultural experience from start to finish."
    },
    licensed: {
      title: "Fully Licensed & Registered",
      desc: `Travel with peace of mind. ${COMPANY_INFO.name} is a legitimate, government-registered tour operator complying with all regulations.`
    },
    proven: {
      title: "Proven Track Record",
      desc: "Established in 2018, we have successfully hosted over 1,500 happy travelers from Malaysia to the majestic landscapes of Pakistan, creating memories that last a lifetime."
    }
  },
  testimonials: [
    {
      id: '1',
      name: 'Kevin Koh',
      date: 'November 12, 2025',
      rating: 5,
      text: "Great adventures, scenic view and lovely memories at Skardu, Geocite park, Hunza valley. Local Pakistani food is very tasty and similar to our Malaysian food. Thanks Shahmir for making this travel adventures memorable, Pakistan Zindabad !!!! 😍🎊",
      image: kevinKohImg
    },
    {
      id: '2',
      name: 'Judith Tan',
      date: 'November 12, 2025',
      rating: 5,
      text: "I love Pakistan very much . Here we can have the breathtaking views! The scenery is so beautiful 😍 many thanks to Nature Matters for organising such an amazing n adventurous trip. We really enjoyed very much 🥰\nMust give a big applause to Mr Shahmir for his good job ! 👍👍👍\nOverall this is still a very memorable trip for me n my husband ❤️",
      image: judithTanImg
    },
    {
      id: '3',
      name: 'Joyce HuiPeng Tan',
      date: 'October 18, 2025',
      rating: 5,
      text: "An experience of a lifetime. An opening of my eyes to what nature in its rawness is all about. The splendor of Allah's creation.\nThank you Shamir, for bringing us to this part of the world that many would not have made the trip. Because of your determination & sheer excitement, I went despite my family's objections.\nI would definitely recommend Nature Matters to my friends.",
      image: joyceHuiPengTanImg
    },
    {
      id: '4',
      name: 'Ng Buttwah',
      date: 'October 18, 2025',
      rating: 5,
      text: "Well planned adventure trip. Scenery is stunning n breathtaking. Places are natural n pristine, a life time adventure!",
      image: ngButtwahImg
    },
    {
      id: '5',
      name: 'Yeo Yi Hui',
      date: 'October 18, 2025',
      rating: 5,
      text: "从未感受过惊险又害怕的旅程，到旅程中欣赏到如此震撼的山脉，美丽的湖与河流，这将是我一个难忘的旅游回忆 (Never experienced such a thrilling journey... beautiful lakes and rivers... unforgettable travel memory)",
      image: yeoYiHuiImg
    },
    {
      id: '6',
      name: 'Vivian Lai',
      date: 'October 18, 2025',
      rating: 5,
      text: "Thanks for the wonderful experience this trip brought me. First, I want to thank our tour guide, Shahmir. He was very dedicated and accompanied us throughout the trip. He shared with us the characteristics of Pakistan...",
      image: vivianLaiImg
    },
    {
      id: '7',
      name: 'Louise Yap',
      date: 'October 18, 2025',
      rating: 5,
      text: "highly recommended ⭐⭐⭐⭐⭐",
      image: louiseYapImg
    },
    {
      id: '8',
      name: 'Andrew Chin',
      date: 'September 30, 2025',
      rating: 5,
      text: "Recently have completed an adventure outing in Pakistan. Shahmir our tour guide was extremely helpful. Have covered Fairy Meadow which was a beautiful mountain top resort. The ride to Fairy Meadow is very rough, challenging but worth the experience. Pakistan is still very natural and worth the experience.",
      image: andrewChinImg
    },
    {
      id: '9',
      name: 'Pooi Cheng Mak',
      date: 'September 30, 2025',
      rating: 5,
      text: "我们的向导 Shahmir Khan 是一位很棒、很有爱心的向导，确保每个人的健康和安全。我的北巴基斯坦之旅非常愉快，亮点是做了一些我通常不会做的事情，特别是胡赛尼悬索桥和罕萨河上的滑索",
      image: pooiChengMakImg
    },
    {
      id: '10',
      name: 'Teng Hoi Yen',
      date: 'September 29, 2025',
      rating: 5,
      text: "仙女草甸是这次旅行的亮点，我设法到达了拜耳观景点。穿过松林的风景很美。其次最好的是胡赛尼桥，我通过悬索桥穿过罕萨河，然后使用滑索返回。",
      image: tengHoiYenImg
    },
    {
      id: '11',
      name: 'Owen Woo',
      date: 'September 29, 2025',
      rating: 5,
      text: "我们在巴基斯坦的导游 Shahmir 先生绝对太棒了。他热情、专业且知识渊博。他分享了关于历史和文化的迷人故事... 最突出的是他真诚的好客——他不仅把我们当游客，还当朋友。最后多亏了他，我们的旅行顺利、安全且难忘。",
      image: owenWooImg
    }
  ],
  systemInstruction: `
You are a helpful travel assistant for the "巴基斯坦探索之旅" organized by Nature Matters Travel and Tours Sdn Bhd.
Answer user questions briefly and enthusiastically in Chinese (Simplified).
`
};

const CONTENT_ZH: Content = {
  tripDetails: {
    title: "巴基斯坦探索之旅",
    subtitle: "从马来西亚出发的巴基斯坦北部12天探险之旅",
    date: "多排期（3月 - 11月）",
    price: "RM 6,500 / 人",
    duration: "12天11晚",
    groupSize: "15-18人",
    age: "25岁以上",
    soloTravelerTitle: "住宿房型",
    soloTravelerDesc: "房间以双人共享为基础。我们会为您安排室友，或您可补差价选择单人间 RM 1,500（可选）。",
    privateGroupTitle: "私人包团",
    privateGroupDesc: "私人包团可享受优惠价格，请联系客服查询领队档期。"
  },
  hero: {
    eyebrow: "从马来西亚出发的巴基斯坦北部12天探险之旅",
    title: "巴基斯坦探索之旅",
    description: "沉浸式探索巴基斯坦北部——从文化古都到高原风光，自然、历史与冒险的交汇之地。"
  },
  intro: {
    title: "巴基斯坦探索之旅",
    text1: "巴基斯坦是一个充满非凡反差的国度——古老的文明、雄伟的山脉以及地球上一些最原始的风景。Nature Matters 旅游公司精心设计的这条12天跟团路线，旨在展示巴基斯坦北部最精华的部分，融合了深厚的文化底蕴、自然奇观和地道的当地体验。",
    highlight: "巴基斯坦的魅力——壮丽的风景、原始的美丽和震撼的多样性。",
    text2: "从拉合尔的历史街道到现代首都伊斯兰堡，再到斯卡杜、罕萨、纳尔塔和克什米尔的高山河谷，这段旅程沿着传奇的喀喇昆仑公路前行，直达巴基斯坦与中国边境的红其拉甫山口。每一个目的地都展现了巴基斯坦不同的一面——辽阔、热情且令人难忘。"
  },
  headers: {
    tripDetails: "行程详情",
    confirmedDepartures: "已确认团期 (请选择日期)",
    packageCost: "配套价格",
    daysTraveled: "行程天数",
    members: "成团人数",
    ageAppropriate: "适宜年龄",
    weatherForecast: "天气预报",
    highlights: "行程精彩亮点",
    notices: "前往北巴基斯坦的注意事项",
    itinerary: "行程安排",
    inclusions: "团费包含：",
    exclusions: "团费不包含：",
    testimonials: "旅客评价",
    whyChooseUs: "为什么选择我们？",
    contact: "联系我们咨询预订",
    gallery: "精彩瞬间"
  },
  ui: {
    bookNow: "立即预订",
    selectDate: "请在下拉菜单中选择您心仪的日期，然后点击立即预订通过 WhatsApp 联系我们。",
    downloadItinerary: "下载行程单 (英文版)",
    downloadItineraryBtn: "下载行程单",
    viewContact: "联系页面",
    weatherNote: "*往年记录仅供参考*",
    depositNote: "确认报名后，我们将收取每人 RM800 定金以保留席位，先到先得！",
    home: "首页",
    about: "关于我们",
    contact: "联系我们",
    resources: "资源下载",
    explore: "探索",
    rights: "版权所有。",
    readMore: "阅读更多",
    emailUs: "邮件咨询",
    ourLocation: "公司地址",
    contactHeroSubtitle: "我们期待听到您的声音。今天就开始您的旅程。",
    whatsappChatLabel: "与我们团队聊天",
    preferredTripDateLabel: "出行日期",
    selectDatePlaceholder: "请选择日期",
    totalPeopleLabel: "总人数",
    peoplePlaceholder: "例如：4",
    sendMessage: "发送消息",
    name: "姓名",
    phone: "电话",
    email: "电子邮箱",
    message: "留言内容",
    sendBtn: "发送消息",
    whatappUs: "WhatsApp 联系",
    askAbout: "咨询行程相关问题...",
    somethingWrong: "抱歉，出错了。",
    recommends: "推荐 Nature Matters",
    gallerySubtitle: "我们过往探险旅程中捕捉的美好瞬间"
  },
  about: {
    heroTitle: "关于我们",
    heroSubtitle: "Nature Matters Travel & Tours Sdn. Bhd.",
    quote: "“我们相信，旅行不仅应该以此激励人们——它还应该保护地球并提升当地社区。”",
    storyTitle: "我们的故事",
    storyText1: "怀着对自然、文化和深度探索的热爱，我们是一家在马来西亚注册的旅游公司，致力于提供生态友好、负责任且真实的旅行体验。",
    storyText2: "我们专注于亚洲最令人叹为观止的地区的沉浸式探险和自然之旅，确保我们的旅行者在真正了解这片土地的人的带领下，享受更深层次的文化接触。",
    imageCaption: "共同探索\n始于 2018",
    whoWeAreTitle: "🌿 我们是谁",
    whoWeAreText: "自豪地为旅客服务超过4年。我们在自然风光旖旎的地区设有运营分部和地面团队：",
    locations: ["巴基斯坦北部", "南疆 (中国)", "北疆 (中国)"],
    trustedTitle: "🇲🇾 值得信赖 & 正规注册",
    trustedText: "Nature Matters Travel & Tours 是在马来西亚正式注册的旅游公司。这为我们的旅行者提供了更高的透明度、信任和支付保障。",
    ecoTitle: "🌍 生态友好承诺",
    ecoText: "负责任的旅游是我们的核心。我们不仅带您去美丽的地方——我们更努力保护它们。",
    ecoList: ["支持当地社区和向导", "小团旅行 (低影响)", "无痕山林原则"],
    whyUsTitle: "🤝 为什么选择我们",
    whyUsList: [
      "拥有区域分部的本地专业知识",
      "精心策划的自然与文化行程",
      "小团探险，体验更深度、更个人化",
      "价格透明，马来西亚正规注册运营",
      "专业领队，优先考虑安全、舒适和真实体验",
      "已接待超过1500名从马来西亚前往巴基斯坦的跟团旅客"
    ],
    visionTitle: "✨ 我们的愿景",
    visionText: "“成为亚洲领先的生态意识探险旅游品牌，以负责任的方式连接旅行者与自然——同时赋能当地社区并保护我们热爱的风景。”",
    achievementsTitle: "我们的成就",
    achievements: [
      {
        title: "接待 2023/2024 马来西亚先生 - Kevin Murthy",
        text: "我们荣幸地接待了 2023/2024 马来西亚先生——AMR Malaysia 得主 Kevin Murthy，参与我们为期 12 天的巴基斯坦北部探险之旅。Kevin 以独行旅客身份加入，带来了谦逊、正能量以及对文化与风光的真诚好奇。\n\n在舞台之外，他是一位令人鼓舞的旅行者和优秀的马来西亚大使。接待像 Kevin 这样的贵宾，体现了国际旅客对 Nature Matters 在巴基斯坦北部提供安全、真实且难忘旅行体验的信任。",
        images: [mrMalaysia1, mrMalaysia2, mrMalaysia3, mrMalaysia4]
      },
      {
        title: "获中国报报道",
        text: "2026 年 2 月 4 日，Nature Matters Travel 荣幸获中国报通过李佩红女士的旅行专题报道，讲述她与我们团队在巴基斯坦北部的旅程。报道展现了该地区的自然之美、文化底蕴，以及我们致力提供的优质导览体验。\n\n这一国际媒体认可反映了全球旅客对 Nature Matters 日益增长的信任，并坚定了我们在巴基斯坦提供安全、真实且难忘旅行体验的承诺。",
        images: [chinaPress1, chinaPress2, chinaPress3]
      }
    ],
    ctaTitle: "准备好与我们一起探索了吗？",
    gallery: "精彩瞬间"
  },
  highlights: [
    { id: '1', text: '沉浸在巴基斯坦北部的壮丽全景中，揭开长寿村的秘密。' },
    { id: '2', text: '穿越被誉为世界第八大奇迹的传奇喀喇昆仑公路 (KKH)。' },
    { id: '3', text: '见证罕萨河谷的极致荣耀——高耸的山峰、巨大的冰川和绿松石般的湖泊编织而成的画卷。' },
    { id: '4', text: '体验北部边疆原始、未加修饰的美，一片未被时间触及的净土。' },
    { id: '5', text: '漫游地球上第二高的高原——德奥赛国家公园，被称为“巨人之际”。' },
    { id: '6', text: '矗立在红其拉甫山口，这是连接巴基斯坦和中国的世界最高铺装国际边境。' },
    { id: '7', text: '挑战胡赛尼悬索桥，这是罕萨河上当地工程学的惊险见证。' },
    { id: '8', text: '泛舟于阿塔巴德湖的蔚蓝水面，这是诞生于群山之中的自然奇观。' },
    { id: '9', text: '走进罕萨河谷热情好客的少数民族社区，了解他们丰富的传统。' },
    { id: '10', text: '探索拉合尔的文化中心和伊斯兰堡的现代优雅，这两座南亚最具活力的城市。' },
    { id: '11', text: '深入纳尔塔河谷，这是隐藏的宝石，也是难以捉摸的雪豹的避难所。' },
  ],
  itinerary: [
    { day: 'Day 1', title: '吉隆坡 飞往 拉合尔', description: '从吉隆坡出发，抵达拉合尔。' },
    { day: 'Day 2', title: '拉合尔 前往 伊斯兰堡', description: '从拉合尔前往伊斯兰堡。' },
    { day: 'Day 3', title: '伊斯兰堡 - 斯卡杜 - 吉尔吉特', description: '从伊斯兰堡前往斯卡杜，然后前往吉尔吉特。' },
    { day: 'Day 4', title: '德奥赛国家公园', description: '探索世界第二高的高原——德奥赛国家公园。' },
    { day: 'Day 5', title: '纳尔塔河谷 - 雪豹保护区', description: '参观美丽的纳尔塔河谷和雪豹保护区。' },
    { day: 'Day 6', title: '罕萨 - 纳加尔河谷 - 罕萨', description: '探索罕萨和纳加尔河谷。' },
    { day: 'Day 7', title: '罕萨 - 红其拉甫山口 - 帕苏', description: '参观红其拉甫山口（中国边境）并住在帕苏。' },
    { day: 'Day 8', title: '帕苏 - 阿塔巴德 - 吉尔吉特', description: '从帕苏前往阿塔巴德湖，然后前往吉尔吉特。' },
    { day: 'Day 9', title: '吉尔吉特 - 齐拉斯/纳兰', description: '从吉尔吉特前往齐拉斯或纳兰。' },
    { day: 'Day 10', title: '纳兰 - 伊斯兰堡', description: '返回伊斯兰堡。' },
    { day: 'Day 11', title: '伊斯兰堡 - 拉合尔', description: '从伊斯兰堡返回拉合尔。' },
    { day: 'Day 12', title: '拉合尔市区游 - 飞回吉隆坡', description: '拉合尔市区游览，随后乘机返回吉隆坡。' },
  ],
  inclusions: [
    { id: '1', text: '往返国际机票 [约 RM4000]' },
    { id: '2', text: '全程住宿（2人1间），舒适整洁的房间' },
    { id: '3', text: '餐食（早餐和晚餐）' },
    { id: '4', text: '伊斯兰堡至斯卡杜国内航班（含23kg托运行李）' },
    { id: '5', text: '巴基斯坦旅游签证申请邀请函 (LOI)' },
    { id: '6', text: '签证申请服务及费用 ($15)' },
    { id: '7', text: '山区交通使用的四驱吉普车' },
    { id: '8', text: '阿塔巴德湖游船体验' },
    { id: '9', text: '行程中提及的所有活动' },
    { id: '10', text: '无限量矿泉水' },
    { id: '11', text: '全程每日陆地交通' },
    { id: '12', text: '专业当地导游' },
  ],
  exclusions: [
    { id: '1', text: '可选活动/门票：胡赛尼悬索桥滑索 [约 $20]' },
    { id: '2', text: '午餐' },
    { id: '3', text: '零食和个人购物消费' },
    { id: '4', text: '旅游保险' },
  ],
  notices: [
    "巴基斯坦北部偏远地区的天气变幻莫测。我们可能会遇到恶劣天气，因此可能面临航班取消或道路封闭等意外情况。在这种情况下，我们将根据现场情况调整行程和住宿安排。",
    "此行程仅适合热爱探险的成年人。参与者需要身体健康，无潜在疾病（哮喘、高血压、心脏病），并需配备足够的装备以应对寒冷、强风和高海拔气温。",
    "虽然行程中不包含徒步区域，但我们希望您以最佳的健康和体能状态加入。",
    "优质耐用的徒步鞋和防风保暖外套是必备品。完整的打包指南将分享给您。",
    "巴基斯坦北部偏远地区的设施非常有限，经常停电。我们会为大家安排舒适的住宿，以确保基本的卫生和安全。"
  ],
  departureDates: [
    "3月18日 - 3月29日 (花季)",
    "4月6日 - 4月17日 (花季)",
    "4月18日 - 4月29日 (花季)",
    "5月1日 - 5月12日 (樱桃/杏果季)",
    "5月15日 - 5月26日 (樱桃/杏果季)",
    "5月24日 - 6月4日 (樱桃/杏果季)",
    "10月1日 - 10月12日 (秋季)",
    "10月12日 - 10月23日 (秋季)",
    "10月23日 - 11月3日 (秋季)",
    "11月6日 - 11月17日 (秋季)"
  ],
  weatherSeasons: [
    {
      title: "花季 (3月中旬 - 4月)",
      data: [
        { city: "伊斯兰堡", temp: "15°C/28°C", desc: "温和宜人，天空湛蓝，湿度低；非常适合游览城市公园。" },
        { city: "仙女草甸", temp: "-2°C/12°C", desc: "清冽的高山空气带着冬日的余寒；地面常有积雪，野花开始绽放。" },
        { city: "罕萨河谷", temp: "8°C/18°C", desc: "凉爽芳香的微风，阳光明媚的午后；观赏粉白果树花开的绝佳时节。" }
      ]
    },
    {
      title: "樱桃与杏果季 (5月 - 7月)",
      data: [
         { city: "伊斯兰堡", temp: "24°C/39°C", desc: "从炎热过渡到酷热；阳光充足，7月开始偶有暴雨（季风季）。" },
         { city: "仙女草甸", temp: "8°C/22°C", desc: "白天温暖舒适，夜晚凉爽；是星空下徒步和露营的最稳定天气。" },
         { city: "罕萨河谷", temp: "15°C/30°C", desc: "温和适中；河谷郁郁葱葱，气候舒适，适合探索高海拔观景点。" }
      ]
    },
    {
      title: "秋季 (9月 - 11月)",
      data: [
         { city: "伊斯兰堡", temp: "16°C/30°C", desc: "温暖阳光明媚的白天，随着夏季湿气消散，夜晚凉爽清醒。" },
         { city: "仙女草甸", temp: "0°C/15°C", desc: "干燥清脆的空气，能见度极高；日落后气温骤降，10月下旬常至冰点。" },
         { city: "罕萨河谷", temp: "5°C/20°C", desc: "凉爽平静，能见度极佳；金黄橙红的秋叶映衬在深蓝色的天空下。" }
      ]
    }
  ],
  whyChooseCards: {
    expert: {
      title: "专业向导探险",
      desc: "每一次旅程都有专业领队陪同，致力于确保您从开始到结束的安全、舒适和沉浸式文化体验。"
    },
    licensed: {
      title: "完全许可与注册",
      desc: `安心出行。${COMPANY_INFO.name} 是一家符合所有法规的正规政府注册旅游运营商。`
    },
    proven: {
      title: "卓越的过往记录",
      desc: "成立于2018年，我们已成功接待了超过1500名来自马来西亚的快乐旅客前往巴基斯坦的壮丽风景，创造了终生难忘的回忆。"
    }
  },
  testimonials: [
    {
      id: '1',
      name: 'Kevin Koh',
      date: 'November 12, 2025',
      rating: 5,
      text: "非常棒的冒险，斯卡杜、Geocite公园和罕萨河谷的风景优美，留下了美好的回忆。当地的巴基斯坦食物非常好吃，和我们马来西亚的食物很相似。感谢 Shahmir 让这次旅行冒险难忘，巴基斯坦万岁！！！！😍🎊",
      image: kevinKohImg
    },
    {
      id: '2',
      name: 'Judith Tan',
      date: 'November 12, 2025',
      rating: 5,
      text: "我非常喜欢巴基斯坦。在这里我们可以看到令人叹为观止的景色！风景太美了😍 非常感谢 Nature Matters 组织了这样一次惊人而冒险的旅行。我们真的非常享受🥰\n必须给 Shahmir 先生一个大大的掌声，他做得很好！👍👍👍\n总的来说，这对我丈夫和我来说仍然是一次非常难忘的旅行❤️",
      image: judithTanImg
    },
    {
      id: '3',
      name: 'Joyce HuiPeng Tan',
      date: 'October 18, 2025',
      rating: 5,
      text: "一生一次的经历。让我大开眼界，见识了大自然最原始的样子。安拉创造的辉煌。\n谢谢 Shamir，带我们要这世界的这个角落，很多人可能不会来这里。因为你的决心和纯粹的兴奋，我不顾家人的反对还是去了。\n我绝对会向我的朋友推荐 Nature Matters。",
      image: joyceHuiPengTanImg
    },
    {
      id: '4',
      name: 'Ng Buttwah',
      date: 'October 18, 2025',
      rating: 5,
      text: "精心策划的冒险之旅。风景令人惊叹，美不胜收。地方自然纯净，这是一次终生的冒险！",
      image: ngButtwahImg
    },
    {
      id: '5',
      name: 'Yeo Yi Hui',
      date: 'October 18, 2025',
      rating: 5,
      text: "从未感受过惊险又害怕的旅程，到旅程中欣赏到如此震撼的山脉，美丽的湖与河流，这将是我一个难忘的旅游回忆",
      image: yeoYiHuiImg
    },
    {
      id: '6',
      name: 'Vivian Lai',
      date: 'October 18, 2025',
      rating: 5,
      text: "感谢这次旅行带给我的美好体验。首先，我要感谢我们的导游 Shahmir。他非常敬业，全程陪伴我们。他与我们分享了巴基斯坦的特点...",
      image: vivianLaiImg
    },
    {
      id: '7',
      name: 'Louise Yap',
      date: 'October 18, 2025',
      rating: 5,
      text: "强烈推荐 ⭐⭐⭐⭐⭐",
      image: louiseYapImg
    },
    {
      id: '8',
      name: 'Andrew Chin',
      date: 'September 30, 2025',
      rating: 5,
      text: "最近在巴基斯坦完成了一次冒险之旅。我们的导游 Shahmir 非常乐于助人。去了仙女草甸，那是一个美丽的山顶度假胜地。去仙女草甸的路非常崎岖，充满挑战，但这段经历非常值得。巴基斯坦仍然非常自然，值得体验。",
      image: andrewChinImg
    },
    {
      id: '9',
      name: 'Pooi Cheng Mak',
      date: 'September 30, 2025',
      rating: 5,
      text: "我们的向导 Shahmir Khan 是一位很棒、很有爱心的向导，确保每个人的健康和安全。我的北巴基斯坦之旅非常愉快，亮点是做了一些我通常不会做的事情，特别是胡赛尼悬索桥和罕萨河上的滑索",
      image: pooiChengMakImg
    },
    {
      id: '10',
      name: 'Teng Hoi Yen',
      date: 'September 29, 2025',
      rating: 5,
      text: "仙女草甸是这次旅行的亮点，我设法到达了拜耳观景点。穿过松林的风景很美。其次最好的是胡赛尼桥，我通过悬索桥穿过罕萨河，然后使用滑索返回。",
      image: tengHoiYenImg
    },
    {
      id: '11',
      name: 'Owen Woo',
      date: 'September 29, 2025',
      rating: 5,
      text: "我们在巴基斯坦的导游 Shahmir 先生绝对太棒了。他热情、专业且知识渊博。他分享了关于历史和文化的迷人故事... 最突出的是他真诚的好客——他不仅把我们当游客，还当朋友。最后多亏了他，我们的旅行顺利、安全且难忘。",
      image: owenWooImg
    }
  ],
  systemInstruction: `
You are a helpful travel assistant for the "巴基斯坦探索之旅" organized by Nature Matters Travel and Tours Sdn Bhd.
Answer user questions briefly and enthusiastically in Chinese (Simplified).
`
};

export const TRANSLATIONS: Record<Language, Content> = {
  en: CONTENT_EN,
  zh: CONTENT_ZH
};

export const getContent = (lang: Language) => TRANSLATIONS[lang];