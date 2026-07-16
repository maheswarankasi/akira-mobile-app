export const products = [
  {
    id: "prod__001",
    categoryId: "cat_fruits",
    categoryName: { en: "Fruits", ta: "பழங்கள்" },
    name: { en: "Red Banana", ta: "செவ்வாழை" },
    subtitle: {
      en: "Nutrient Dense & Naturally Ripened",
      ta: "சத்தான இயற்கையாக பழுத்த பழம்",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbVzfVjctKGGCR80xfHTY-QTOS2wBhkpiUqQWNvNWIHN_GN140WcoWnF8&s=10",
      "https://media.istockphoto.com/id/598567940/photo/raw-organic-red-bananas.jpg?s=612x612&w=0&k=20&c=w4IiLSXLyXBgHWbPJnxsWgU4xjeFywSr4IjJ96dq5nI=",
      "https://media.istockphoto.com/id/528426815/photo/bunch-of-red-bananas-fruit-isolated-over-white-background.jpg?s=612x612&w=0&k=20&c=kg9nhsn1lFLEvQHRG8GERv7Em5hCNoXCWnOORKdJSEU=",
    ],
    tags: [
      { en: "Naturally Ripened", ta: "இயற்கையாக பழுத்தது" },
      { en: "Energy Booster", ta: "ஆற்றல் தரும்" },
    ],
    variants: [
      {
        weight: { en: "1/2 Dozen", ta: "1/2 டஜன்" },
        price: 85,
        mrp: 100,
        discountPercent: 15,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Muscle Recovery", ta: "தசை மீட்பு" },
          value: { en: "High Potassium", ta: "பொட்டாசியம்" },
        },
      ],
      benefits: [
        {
          title: { en: "Nerve Strength", ta: "நரம்பு பலம்" },
          desc: {
            en: "Improves nerve strength in 30 days.",
            ta: "நரம்பு தளர்ச்சியை நீக்கும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Athletes", ta: "விளையாட்டு வீரர்கள்" },
          reason: {
            en: "Prevents cramps.",
            ta: "தசை பிடிப்பை தடுக்கும்.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Morning Routine", ta: "காலை உணவு" },
          desc: {
            en: "Best consumed in the morning.",
            ta: "காலையில் சாப்பிடுவது சிறந்தது.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Vitality", ta: "உடல் வன்மை" },
        desc: {
          en: "Increases stamina.",
          ta: "தாது பலத்தை அதிகரிக்கும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Selvam Farms", ta: "செல்வம் பண்ணை" },
      isVerified: true,
      fssai: "N/A",
      address: { en: "Pollachi, TN", ta: "பொள்ளாச்சி, தமிழ்நாடு" },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: { en: "Freshly Harvested", ta: "புதிய அறுவடை" },
      naturalInputs: { en: "Carbide free", ta: "கார்பைடு அற்றது" },
    },
    usageAndStorage: {
      cookingRatio: { en: "N/A", ta: "N/A" },
      cookingTime: { en: "Ready to eat", ta: "உண்ணத் தயார்" },
      bestFor: { en: "Direct consumption", ta: "நேரடியாக சாப்பிடலாம்" },
      storageTips: {
        en: "Room temperature",
        ta: "அறை வெப்பநிலையில் வைக்கவும்",
      },
    },
  },
  {
    id: "prod__002",
    categoryId: "cat_fruits",
    categoryName: { en: "Fruits", ta: "பழங்கள்" },
    name: { en: "Alphonso Mango", ta: "அல்போன்சா மாம்பழம்" },
    subtitle: { en: "Sweet & Aromatic", ta: "இனிப்பான நறுமண மாம்பழம்" },
    images: [
      "https://thumbs.dreamstime.com/b/alphonso-mango-king-fruits-yellow-fruit-duo-stems-green-leaf-isolated-white-background-42021470.jpg",
      "https://media.istockphoto.com/id/1152750103/photo/sliced-alphonso-mangoes.jpg?s=612x612&w=0&k=20&c=hEnXEjJC0WPVA7OzTIVY_DMeexjSAX_Dk5RCEgOX_S8=",
      "https://media.istockphoto.com/id/1087695674/photo/delicious-indian-alphonso-mangoes.jpg?s=612x612&w=0&k=20&c=5NYv1HQPo5_xeen7-cEk3DKSc33EwZ5qYZdJoUFD40k=",
    ],
    tags: [
      { en: "Seasonal", ta: "பருவகால பழம்" },
      { en: "Pesticide Free", ta: "பூச்சிக்கொல்லி அற்றது" },
    ],
    variants: [
      {
        weight: { en: "1 kg", ta: "1 கிலோ" },
        price: 280,
        mrp: 320,
        discountPercent: 12,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Immunity", ta: "நோய் எதிர்ப்பு" },
          value: { en: "Vitamin C & A", ta: "வைட்டமின் C & A" },
        },
      ],
      benefits: [
        {
          title: { en: "Skin Health", ta: "சரும நலம்" },
          desc: {
            en: "Gives a natural glow.",
            ta: "சருமத்திற்கு பொலிவு தரும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Kids", ta: "குழந்தைகள்" },
          reason: {
            en: "Great for healthy weight gain.",
            ta: "ஆரோக்கியமான எடை அதிகரிப்பு.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Soak Before Eating", ta: "ஊறவைக்க வேண்டும்" },
          desc: {
            en: "Soak in water to reduce heat.",
            ta: "சூட்டை குறைக்க நீரில் ஊறவைத்து உண்ணவும்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Energy Booster", ta: "ஆற்றல் ஊக்கி" },
        desc: {
          en: "Revitalizes the body.",
          ta: "உடலுக்கு புத்துணர்ச்சி தரும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: {
        en: "Salem Organic Orchards",
        ta: "சேலம் ஆர்கானிக் தோட்டம்",
      },
      isVerified: true,
      fssai: "N/A",
      address: { en: "Salem, TN", ta: "சேலம், தமிழ்நாடு" },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: {
        en: "Inspected last week",
        ta: "கடந்த வாரம் ஆய்வு செய்யப்பட்டது",
      },
      naturalInputs: { en: "Hay Ripened", ta: "வைக்கோலில் பழுத்தது" },
    },
    usageAndStorage: {
      cookingRatio: { en: "N/A", ta: "N/A" },
      cookingTime: { en: "Ready to eat", ta: "உண்ணத் தயார்" },
      bestFor: { en: "Desserts, Milkshakes", ta: "ஜூஸ், இனிப்புகள்" },
      storageTips: {
        en: "Do not refrigerate until ripe",
        ta: "பழுக்கும் வரை ஃப்ரிட்ஜில் வைக்க வேண்டாம்",
      },
    },
  },
  {
    id: "prod__003",
    categoryId: "cat_fruits",
    categoryName: { en: "Fruits", ta: "பழங்கள்" },
    name: { en: "Country Guava", ta: "நாட்டு கொய்யா" },
    subtitle: { en: "Pink Flesh Guava", ta: "சிவப்பு சதை கொய்யா" },
    images: [
      "https://media.istockphoto.com/id/868395402/photo/fresh-guava-fruit-with-green-leaf-and-slice-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=d3xyYUmReiBAonUbtae41nJXDG4sfNecviS0eNLiICc=",
      "https://t4.ftcdn.net/jpg/19/93/32/81/360_F_1993328129_m8YmwFneWqzThnR72mBKorhEQQ8Rwcjb.jpg",
      "https://media.istockphoto.com/id/1224636159/photo/closeup-of-a-red-guava-cut-in-half-in-the-background-several-guavas-and-green-leaf.jpg?s=612x612&w=0&k=20&c=KJ9YilkRRuFh0bnw64Ol0IZDfoQF7UIxyC6dRVIjaoA=",
    ],
    tags: [
      { en: "Vitamin C", ta: "வைட்டமின் சி" },
      { en: "Diabetic Friendly", ta: "நீரிழிவு நோயாளிகளுக்கு ஏற்றது" },
    ],
    variants: [
      {
        weight: { en: "1 kg", ta: "1 கிலோ" },
        price: 80,
        mrp: 100,
        discountPercent: 20,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Digestion", ta: "செரிமானம்" },
          value: { en: "High Dietary Fiber", ta: "நார்ச்சத்து" },
        },
      ],
      benefits: [
        {
          title: { en: "Regulates Sugar", ta: "சர்க்கரை கட்டுப்பாடு" },
          desc: {
            en: "Lowers blood sugar levels.",
            ta: "ரத்த சர்க்கரையை கட்டுப்படுத்தும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Diabetics", ta: "நீரிழிவு நோயாளிகள்" },
          reason: { en: "Low Glycemic Index.", ta: "குறைந்த GI." },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Eat with Salt", ta: "உப்புடன் உண்ணவும்" },
          desc: {
            en: "Eat with a pinch of salt and pepper.",
            ta: "உப்பு, மிளகு சேர்த்து உண்பது நல்லது.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Cooling", ta: "குளிர்ச்சி" },
        desc: {
          en: "Treats bleeding gums.",
          ta: "ஈறு பிரச்சனைகளை தீர்க்கும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Dindigul Farms", ta: "திண்டுக்கல் பண்ணை" },
      isVerified: true,
      fssai: "N/A",
      address: { en: "Dindigul, TN", ta: "திண்டுக்கல், தமிழ்நாடு" },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: {
        en: "Plucked fresh",
        ta: "புதிதாக பறிக்கப்பட்டது",
      },
      naturalInputs: { en: "Organic Compost", ta: "இயற்கை உரம்" },
    },
    usageAndStorage: {
      cookingRatio: { en: "N/A", ta: "N/A" },
      cookingTime: { en: "Ready to eat", ta: "உண்ணத் தயார்" },
      bestFor: { en: "Snacking", ta: "சிற்றுண்டி" },
      storageTips: { en: "Consume quickly", ta: "விரைவில் உண்ணவும்" },
    },
  },
  {
    id: "prod__004",
    categoryId: "cat_fruits",
    categoryName: { en: "Fruits", ta: "பழங்கள்" },
    name: { en: "Red Papaya", ta: "செப்பாப்பாளி" },
    subtitle: {
      en: "Tree Ripened Sweet Papaya",
      ta: "மரத்தில் பழுத்த தித்திக்கும் பப்பாளி",
    },
    images: [
      "https://www.shutterstock.com/image-photo/red-papaya-fruits-background-cubes-260nw-2643421485.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAw3GRErn6a4TBG7CirYQ2UQHx3A1TmEF9VTk87S2n0RNffrRi_eSLErN&s=10",
      "https://cdn.pixabay.com/photo/2016/08/05/12/27/papaya-1572190_1280.jpg",
    ],
    tags: [{ en: "Digestive Aid", ta: "செரிமானத்திற்கு உதவும்" }],
    variants: [
      {
        weight: { en: "1 pc (approx 1kg)", ta: "1 காய் (1 கிலோ)" },
        price: 60,
        mrp: 75,
        discountPercent: 20,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Gut Health", ta: "குடல் நலம்" },
          value: { en: "Papain Enzyme", ta: "பப்பாயின் நொதி" },
        },
      ],
      benefits: [
        {
          title: { en: "Clear Bowel", ta: "மலச்சிக்கல் தீரும்" },
          desc: {
            en: "Relieves constipation naturally.",
            ta: "மலச்சிக்கலை இயற்கையாக தீர்க்கும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Elders", ta: "முதியவர்கள்" },
          reason: { en: "Easy to digest.", ta: "எளிதில் செரிமானமாகும்." },
        },
      ],
      grandmaWisdom: [
        {
          title: {
            en: "Avoid in Pregnancy",
            ta: "கர்ப்பிணிகள் தவிர்க்கவும்",
          },
          desc: {
            en: "Unripe papaya should be avoided during pregnancy.",
            ta: "கர்ப்ப காலத்தில் தவிர்க்க வேண்டும்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Liver Care", ta: "கல்லீரல் பராமரிப்பு" },
        desc: { en: "Good for liver health.", ta: "கல்லீரலுக்கு நல்லது." },
      },
    },
    farmerVerification: {
      grownBy: { en: "Kovai Organics", ta: "கோவை ஆர்கானிக்ஸ்" },
      isVerified: true,
      fssai: "N/A",
      address: { en: "Coimbatore, TN", ta: "கோயம்புத்தூர், தமிழ்நாடு" },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: {
        en: "Checked on farm",
        ta: "பண்ணையில் சோதிக்கப்பட்டது",
      },
      naturalInputs: { en: "Panchagavya used", ta: "பஞ்சகவ்யா பயன்பாடு" },
    },
    usageAndStorage: {
      cookingRatio: { en: "N/A", ta: "N/A" },
      cookingTime: { en: "Ready to eat", ta: "உண்ணத் தயார்" },
      bestFor: { en: "Breakfast fruit", ta: "காலை உணவு" },
      storageTips: {
        en: "Refrigerate after cutting",
        ta: "வெட்டிய பின் ஃப்ரிட்ஜில் வைக்கவும்",
      },
    },
  },
  {
    id: "prod__005",
    categoryId: "cat_fruits",
    categoryName: { en: "Fruits", ta: "பழங்கள்" },
    name: { en: "Pomegranate", ta: "மாதுளை" },
    subtitle: {
      en: "Bhagwa Variety - Deep Red Seeds",
      ta: "பகவா ரகம் - அடர் சிவப்பு முத்துக்கள்",
    },
    images: [
      "https://media.istockphoto.com/id/157358797/photo/ripe-fresh-pomegranate-fruit.jpg?s=612x612&w=0&k=20&c=8BaENR2JLkhnDGxw_gEvBjt_BzKfJoc4iCfxkTGNwSw=",
      "https://img.magnific.com/free-vector/pomegranate-realistic-concept-with-organic-food-symbols-vector-illustration_1284-75800.jpg",
      "https://t3.ftcdn.net/jpg/04/32/47/36/360_F_432473688_NBFaMH9L7Ls0kvAxnCZnRlvbCaSgxozB.jpg",
    ],
    tags: [
      { en: "Blood Purifier", ta: "ரத்த சுத்தி" },
      { en: "Antioxidant", ta: "ஆன்டிஆக்ஸிடன்ட்" },
    ],
    variants: [
      {
        weight: { en: "500 g", ta: "500 கிராம்" },
        price: 110,
        mrp: 140,
        discountPercent: 21,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Heart Health", ta: "இதய நலம்" },
          value: { en: "Punicalagins", ta: "புனிகலஜின்ஸ்" },
        },
      ],
      benefits: [
        {
          title: { en: "Improves Hemoglobin", ta: "ஹீமோகுளோபின்" },
          desc: {
            en: "Increases blood count.",
            ta: "ரத்த அணுக்களை அதிகரிக்கும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Anemic", ta: "ரத்த சோகை உள்ளவர்கள்" },
          reason: { en: "Rich in Iron.", ta: "இரும்புச்சத்து." },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Chew Seeds", ta: "விதைகளை மெல்லவும்" },
          desc: {
            en: "Chew the seeds for stomach health.",
            ta: "விதைகளை மென்று தின்றால் வயிற்றுக்கு நல்லது.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Pitta Balancer", ta: "பித்தம் தணிக்கும்" },
        desc: {
          en: "Reduces body heat and thirst.",
          ta: "பித்தத்தை தணித்து தாகத்தை குறைக்கும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Vivasayi Orchards", ta: "விவசாயி தோட்டம்" },
      isVerified: true,
      fssai: "N/A",
      address: { en: "Madurai, TN", ta: "மதுரை, தமிழ்நாடு" },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: {
        en: "Harvested fresh",
        ta: "புதிதாக அறுவடை செய்யப்பட்டது",
      },
      naturalInputs: {
        en: "Neem oil spray",
        ta: "வேப்ப எண்ணெய் தெளிப்பு",
      },
    },
    usageAndStorage: {
      cookingRatio: { en: "N/A", ta: "N/A" },
      cookingTime: { en: "Ready to eat", ta: "உண்ணத் தயார்" },
      bestFor: { en: "Salads, Juices", ta: "சாலட், ஜூஸ்" },
      storageTips: {
        en: "Store in a cool dry place",
        ta: "குளிர்ந்த உலர்ந்த இடத்தில் வைக்கவும்",
      },
    },
  },

  {
    id: "prod__006",
    categoryId: "cat_vegetables",
    categoryName: { en: "Vegetables", ta: "காய்கறிகள்" },
    name: { en: "Round Brinjal", ta: "உருண்டை கத்தரிக்காய்" },
    subtitle: { en: "Native Purple Variety", ta: "நாட்டு ஊதா ரகம்" },
    images: [
      "https://media.istockphoto.com/id/510515443/photo/eggplant-isolated-on-white.jpg?s=612x612&w=0&k=20&c=AfRLY-0SanZ7Xo1Vdgpdv--PmAbKOdPUiLtvw4X8YJY=",
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Solanum_melongena_24_08_2012_%281%29.JPG",
      "https://m.media-amazon.com/images/I/51XBbkVrvWL._AC_UF1000,1000_QL80_.jpg",
    ],
    tags: [{ en: "Pesticide Free", ta: "பூச்சிக்கொல்லி அற்றது" }],
    variants: [
      {
        weight: { en: "500 g", ta: "500 கிராம்" },
        price: 45,
        mrp: 50,
        discountPercent: 10,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Brain Function", ta: "மூளை செயல்பாடு" },
          value: { en: "Nasunin", ta: "நசுனின்" },
        },
      ],
      benefits: [
        {
          title: { en: "Cell Protection", ta: "செல் பாதுகாப்பு" },
          desc: {
            en: "Protects cells from damage.",
            ta: "உயிரணுக்களை பாதுகாக்கும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Elders", ta: "முதியவர்கள்" },
          reason: { en: "Easy to digest.", ta: "எளிதில் செரிமானமாகும்." },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Immunity", ta: "நோய் எதிர்ப்பு" },
          desc: {
            en: "Boosts overall immunity.",
            ta: "நோய் எதிர்ப்பை கூட்டும்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Digestive Aid", ta: "செரிமான உதவி" },
        desc: {
          en: "Balances Vata and Kapha.",
          ta: "வாத, கப தோஷங்களை சமநிலைப்படுத்தும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Karthikeyan", ta: "கார்த்திகேயன்" },
      isVerified: true,
      fssai: "N/A",
      address: {
        en: "Thondamuthur, TN",
        ta: "தொண்டாமுத்தூர், தமிழ்நாடு",
      },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: { en: "2 weeks ago", ta: "2 வாரங்களுக்கு முன்" },
      naturalInputs: { en: "Organic certified", ta: "இயற்கை சான்றிதழ்" },
    },
    usageAndStorage: {
      cookingRatio: { en: "N/A", ta: "N/A" },
      cookingTime: { en: "10-15 mins", ta: "10-15 நிமிடங்கள்" },
      bestFor: { en: "Ennai Kathirikai", ta: "எண்ணெய் கத்தரிக்காய்" },
      storageTips: {
        en: "Crisper drawer",
        ta: "காய்கறி அடுக்கில் வைக்கவும்",
      },
    },
  },
  {
    id: "prod__007",
    categoryId: "cat_vegetables",
    categoryName: { en: "Vegetables", ta: "காய்கறிகள்" },
    name: { en: "Drumstick (Murungakkai)", ta: "முருங்கைக்காய்" },
    subtitle: { en: "Tender & Fleshy", ta: "இளம் நாட்டு முருங்கை" },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVUShEKVGcefHdeyNBq-wGuqa1cmsfpzd0cJUncBPXw&s",
      "https://i.pinimg.com/736x/bb/86/0e/bb860ec6cae84b61c769f5df37fe43fe.jpg",
      "https://i.pinimg.com/736x/9c/5d/12/9c5d128183cc4c036e2e8da94aabe00a.jpg",
    ],
    tags: [{ en: "Iron Rich", ta: "இரும்புச்சத்து" }, { en: "Nutri Rich", ta: "இரும்புச்சத்து" }],
    variants: [
      {
        weight: { en: "250 g", ta: "250 கிராம்" },
        price: 30,
        mrp: 40,
        discountPercent: 25,
        inStock: true,
      },
      {
        weight: { en: "500 g", ta: "500 கிராம்" },
        price: 60,
        mrp: 50,
        discountPercent: 10,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Bone Health", ta: "எலும்பு பலம்" },
          value: { en: "High Calcium", ta: "கால்சியம்" },
        },
      ],
      benefits: [
        {
          title: { en: "Strong Bones", ta: "எலும்பு உறுதி" },
          desc: {
            en: "Source of calcium for kids.",
            ta: "கால்சியம் நிறைந்தது.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Pregnant Women", ta: "கர்ப்பிணிகள்" },
          reason: {
            en: "Prevents anemia.",
            ta: "ரத்த சோகையைத் தடுக்கும்.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Weekly Once", ta: "வாரமொருமுறை" },
          desc: {
            en: "Must include in weekly diet.",
            ta: "வாரமொருமுறை சாப்பிட வேண்டும்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Vitality", ta: "உடல் வன்மை" },
        desc: {
          en: "Increases stamina.",
          ta: "உடல் பலத்தை அதிகரிக்கும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Kannan", ta: "கண்ணன்" },
      isVerified: true,
      fssai: "N/A",
      address: { en: "Aravakurichi, TN", ta: "அரவக்குறிச்சி, தமிழ்நாடு" },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: {
        en: "Freshly plucked",
        ta: "புதிதாக பறிக்கப்பட்டது",
      },
      naturalInputs: { en: "Cow dung manure", ta: "மாட்டுச் சாண உரம்" },
    },
    usageAndStorage: {
      cookingRatio: { en: "N/A", ta: "N/A" },
      cookingTime: { en: "15-20 mins", ta: "15-20 நிமிடங்கள்" },
      bestFor: { en: "Sambar, Soup", ta: "சாம்பார், சூப்" },
      storageTips: {
        en: "Wrap in damp cloth",
        ta: "ஈரத் துணியில் சுற்றவும்",
      },
    },
  },
  {
    id: "prod__008",
    categoryId: "cat_vegetables",
    categoryName: { en: "Vegetables", ta: "காய்கறிகள்" },
    name: { en: "Lady's Finger (Bhindi)", ta: "வெண்டைக்காய்" },
    subtitle: { en: "Tender Organic Okra", ta: "பிஞ்சு வெண்டைக்காய்" },
    images: [
      "https://thumbs.dreamstime.com/b/okra-ladies-finger-21393794.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDeeoPcMuScx4BOnCcNJ0_YWeEvVXHaa8wDxiarDWSyzDXSV0dqonOw8Y&s=10",
      "https://media.istockphoto.com/id/2234976183/photo/fresh-green-okra-organic-vegetable-asian-food-ingredients-okra-or-ladys-finger-or-bhindi.jpg?s=612x612&w=0&k=20&c=mrbw1sisfL59pnMubeKXWFU2i20xIXdc6DBm7TchAB8=",
    ],
    tags: [
      { en: "Brain Health", ta: "மூளை வளர்ச்சி" },
      { en: "High Fiber", ta: "நார்ச்சத்து" },
    ],
    variants: [
      {
        weight: { en: "500 g", ta: "500 கிராம்" },
        price: 35,
        mrp: 45,
        discountPercent: 22,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Digestive Health", ta: "செரிமான நலம்" },
          value: { en: "Mucilage", ta: "வழவழப்புத் தன்மை" },
        },
      ],
      benefits: [
        {
          title: { en: "Lowers Cholesterol", ta: "கொலஸ்ட்ரால் குறைப்பு" },
          desc: {
            en: "Binds cholesterol in gut.",
            ta: "கெட்ட கொழுப்பை அகற்றும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Kids", ta: "குழந்தைகள்" },
          reason: {
            en: "Improves memory.",
            ta: "நினைவாற்றலை அதிகரிக்கும்.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Math Skills", ta: "கணிதத் திறன்" },
          desc: {
            en: "Traditionally said to improve math skills.",
            ta: "கணக்கு நன்றாக வரும் என கூறுவர்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Joint Lubrication", ta: "மூட்டு பசை" },
        desc: {
          en: "Improves fluid in joints.",
          ta: "மூட்டுகளுக்கு பசைத்தன்மை தரும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Anbu Farms", ta: "அன்பு பண்ணை" },
      isVerified: true,
      fssai: "N/A",
      address: { en: "Erode, TN", ta: "ஈரோடு, தமிழ்நாடு" },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: { en: "Daily harvest", ta: "தினசரி அறுவடை" },
      naturalInputs: { en: "Jeevamrutham", ta: "ஜீவாமிர்தம்" },
    },
    usageAndStorage: {
      cookingRatio: { en: "N/A", ta: "N/A" },
      cookingTime: { en: "10-15 mins", ta: "10-15 நிமிடங்கள்" },
      bestFor: { en: "Poriyal, Sambar", ta: "பொரியல், சாம்பார்" },
      storageTips: {
        en: "Keep dry, do not wash before storing",
        ta: "ஈரமில்லாமல் வைக்கவும்",
      },
    },
  },
  {
    id: "prod__009",
    categoryId: "cat_vegetables",
    categoryName: { en: "Vegetables", ta: "காய்கறிகள்" },
    name: { en: "Ash Gourd", ta: "வெண்பூசணி" },
    subtitle: {
      en: "Cooling Native Winter Melon",
      ta: "குளிர்ச்சி தரும் நாட்டு பூசணி",
    },
    images: [
      "https://t3.ftcdn.net/jpg/20/65/40/80/360_F_2065408052_kMYDN4wrboKgI7fzXMGEPrnJNYZWby5n.jpg",
      "https://media.istockphoto.com/id/1096534480/photo/winter-melon-is-cut-into-pieces-on-the-straw.jpg?s=612x612&w=0&k=20&c=mL0qRyaWLfmv-clr1LovsC-3tSbNmMrReOtPCWG0uQk=",
      "https://static.vecteezy.com/system/resources/thumbnails/008/245/331/small/sliced-winter-melon-isolated-on-a-white-background-white-gourd-winter-gourd-or-ash-gourd-free-photo.jpg",
    ],
    tags: [
      { en: "Alkaline", ta: "காரத்தன்மை" },
      { en: "Weight Loss", ta: "எடைகுறைப்பு" },
    ],
    variants: [
      {
        weight: { en: "1 kg (Cut piece)", ta: "1 கிலோ (நறுக்கியது)" },
        price: 40,
        mrp: 50,
        discountPercent: 20,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Hydration", ta: "நீர்ச்சத்து" },
          value: { en: "96% Water", ta: "96% தண்ணீர்" },
        },
      ],
      benefits: [
        {
          title: { en: "Alkalizes Body", ta: "உடல் தூய்மை" },
          desc: {
            en: "Reduces acidity instantly.",
            ta: "அமிலத்தன்மையை குறைக்கும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: {
            en: "Weight Watchers",
            ta: "எடை குறைக்க நினைப்பவர்கள்",
          },
          reason: {
            en: "Extremely low calories.",
            ta: "குறைந்த கலோரிகள்.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Morning Juice", ta: "காலை ஜூஸ்" },
          desc: {
            en: "Drink on empty stomach.",
            ta: "வெறும் வயிற்றில் குடிக்கவும்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Brain Cooler", ta: "மூளை குளிர்ச்சி" },
        desc: {
          en: "Treats nervous disorders.",
          ta: "நரம்பு பிரச்சனைகளை தீர்க்கும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Ooty Organics", ta: "ஊட்டி ஆர்கானிக்ஸ்" },
      isVerified: true,
      fssai: "N/A",
      address: {
        en: "Mettupalayam, TN",
        ta: "மேட்டுப்பாளையம், தமிழ்நாடு",
      },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: {
        en: "Harvested fresh",
        ta: "புதிதாக அறுவடை செய்யப்பட்டது",
      },
      naturalInputs: { en: "Natural compost", ta: "இயற்கை உரம்" },
    },
    usageAndStorage: {
      cookingRatio: { en: "N/A", ta: "N/A" },
      cookingTime: {
        en: "Raw / 15 mins",
        ta: "பச்சையாக / 15 நிமிடங்கள்",
      },
      bestFor: { en: "Juice, Kootu", ta: "ஜூஸ், கூட்டு" },
      storageTips: {
        en: "Cling wrap the cut side",
        ta: "வெட்டிய பகுதியை மூடி வைக்கவும்",
      },
    },
  },
  {
    id: "prod__010",
    categoryId: "cat_vegetables",
    categoryName: { en: "Vegetables", ta: "காய்கறிகள்" },
    name: { en: "Ridge Gourd", ta: "பீர்க்கங்காய்" },
    subtitle: {
      en: "High Fiber Native Gourd",
      ta: "நார்ச்சத்து மிகுந்த நாட்டு பீர்க்கு",
    },
    images: [
      "https://media.istockphoto.com/id/924389338/photo/close-up-of-fresh-ridge-gourd.jpg?s=612x612&w=0&k=20&c=GtC2Mk-QeVjmTOggaC-o3cEfNkGeq-qllcELPL190WE=",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIawk0-waJk-KIeRCto7kJwVG6hxOXe7eW0dApO_soVw&s",
      "https://m.media-amazon.com/images/I/61-pNFV+KSL._AC_UF1000,1000_QL80_.jpg",
    ],
    tags: [{ en: "Blood Purifier", ta: "ரத்த சுத்தி" }],
    variants: [
      {
        weight: { en: "500 g", ta: "500 கிராம்" },
        price: 40,
        mrp: 50,
        discountPercent: 20,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Liver Health", ta: "கல்லீரல் நலம்" },
          value: { en: "Toxins removal", ta: "நச்சு நீக்கம்" },
        },
      ],
      benefits: [
        {
          title: { en: "Cleanses Blood", ta: "ரத்த சுத்தி" },
          desc: {
            en: "Purifies the blood stream.",
            ta: "ரத்தத்தை சுத்திகரிக்கும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Diabetics", ta: "நீரிழிவு நோயாளிகள்" },
          reason: {
            en: "Lowers blood sugar naturally.",
            ta: "சர்க்கரை அளவை குறைக்கும்.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Don't Waste Skin", ta: "தோலை வீச வேண்டாம்" },
          desc: {
            en: "Use the skin to make thuvaiyal.",
            ta: "தோலில் துவையல் செய்யலாம்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Jaundice Remedy", ta: "மஞ்சள் காமாலை மருந்து" },
        desc: {
          en: "Beneficial for liver ailments.",
          ta: "கல்லீரல் நோய்களுக்கு நல்லது.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Raju Farms", ta: "ராஜு பண்ணை" },
      isVerified: true,
      fssai: "N/A",
      address: { en: "Tiruppur, TN", ta: "திருப்பூர், தமிழ்நாடு" },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: {
        en: "Freshly plucked",
        ta: "புதிதாக பறிக்கப்பட்டது",
      },
      naturalInputs: { en: "Organic practices", ta: "இயற்கை விவசாயம்" },
    },
    usageAndStorage: {
      cookingRatio: { en: "N/A", ta: "N/A" },
      cookingTime: { en: "10-12 mins", ta: "10-12 நிமிடங்கள்" },
      bestFor: { en: "Kootu, Thuvaiyal", ta: "கூட்டு, துவையல்" },
      storageTips: {
        en: "Keep refrigerated",
        ta: "ஃப்ரிட்ஜில் வைக்கவும்",
      },
    },
  },
  {
    id: "prod__011",
    categoryId: "cat_millets",
    categoryName: { en: "Millets", ta: "சிறுதானியங்கள்" },
    name: { en: "Foxtail Millet (Thinai)", ta: "தினை அரிசி" },
    subtitle: {
      en: "Ancient Golden Millet",
      ta: "பண்டைய பொன் நிற சிறுதானியம்",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPg72CcG1tXVxYmI-EKk88NV7H1w47ezVm4z89vAww8WaRIJR5Y5b10Wc&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs6a4JV9QbyAVkz_jFBlFZAAHcT5sPqOoA3jHDCY_gLCtxb3VR6tZCmas&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFTGSR0mU6N3hh6_HSOscKVIerLQJmP3nX-oDf9OmIhQ&s",
    ],
    tags: [
      { en: "Gluten Free", ta: "குளுட்டன் அற்றது" },
      { en: "High Protein", ta: "அதிக புரதம்" },
    ],
    variants: [
      {
        weight: { en: "500 g", ta: "500 கிராம்" },
        price: 85,
        mrp: 100,
        discountPercent: 15,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Nervous System", ta: "நரம்பு மண்டலம்" },
          value: { en: "Vitamin B12", ta: "வைட்டமின் B12" },
        },
      ],
      benefits: [
        {
          title: { en: "Sugar Control", ta: "சர்க்கரை கட்டுப்பாடு" },
          desc: {
            en: "Steadily releases glucose into the blood.",
            ta: "ரத்தத்தில் சர்க்கரையை சீராக கலக்கச் செய்யும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Diabetics", ta: "நீரிழிவு நோயாளிகள்" },
          reason: {
            en: "Alternative to white rice.",
            ta: "வெள்ளை அரிசிக்கு சிறந்த மாற்று.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Murugan's Favorite", ta: "முருகனுக்கு உகந்தது" },
          desc: {
            en: "Mixed with honey for energy.",
            ta: "தேனுடன் கலந்து சாப்பிட ஆற்றல் கிடைக்கும்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Kapha Pacifying", ta: "கபத்தை குறைக்கும்" },
        desc: {
          en: "Reduces chest congestion.",
          ta: "நெஞ்சு சளியை குறைக்க உதவும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Palanisamy", ta: "பழனிசாமி" },
      isVerified: true,
      fssai: "N/A",
      address: { en: "Dharmapuri, TN", ta: "தருமபுரி, தமிழ்நாடு" },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: { en: "1 month ago", ta: "1 மாதத்திற்கு முன்" },
      naturalInputs: { en: "Panchagavya", ta: "பஞ்சகவ்யா" },
    },
    usageAndStorage: {
      cookingRatio: {
        en: "1 cup : 2.5 cups water",
        ta: "1 கப் : 2.5 கப் தண்ணீர்",
      },
      cookingTime: { en: "20 mins", ta: "20 நிமிடங்கள்" },
      bestFor: { en: "Pongal, Upma", ta: "பொங்கல், உப்புமா" },
      storageTips: {
        en: "Airtight container",
        ta: "காற்று புகாத டப்பாவில் வைக்கவும்",
      },
    },
  },
  {
    id: "prod__012",
    categoryId: "cat_millets",
    categoryName: { en: "Millets", ta: "சிறுதானியங்கள்" },
    name: { en: "Pearl Millet (Kambu)", ta: "கம்பு" },
    subtitle: {
      en: "Traditional Cooling Grain",
      ta: "உடல் குளிர்ச்சி தரும் பாரம்பரிய தானியம்",
    },
    images: [
      "https://ooofarms.com/cdn/shop/products/Pearl1_wholemillet.jpg?v=1736576560&width=1500",
      "https://img.magnific.com/free-photo/heap-millet-seeds-dark-background_1150-38166.jpg?semt=ais_hybrid&w=740&q=80",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrS6-WueHrDVY5u86om5OWVeTUCbinac-vHxrJ16D_yvjES_v1YVgqDSn-&s=10",
    ],
    tags: [
      { en: "High Iron", ta: "இரும்புச்சத்து" },
      { en: "Summer Food", ta: "கோடைக்கால உணவு" },
    ],
    variants: [
      {
        weight: { en: "500 g", ta: "500 கிராம்" },
        price: 50,
        mrp: 65,
        discountPercent: 23,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Bone Health", ta: "எலும்பு நலம்" },
          value: { en: "High Calcium", ta: "அதிக கால்சியம்" },
        },
      ],
      benefits: [
        {
          title: { en: "Cooling Effect", ta: "உடல் குளிர்ச்சி" },
          desc: {
            en: "Reduces body heat.",
            ta: "உடல் சூட்டைத் தணிக்கும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Physical Workers", ta: "உடல் உழைப்பாளர்கள்" },
          reason: {
            en: "Provides long-lasting energy.",
            ta: "நீண்ட நேர ஆற்றலைத் தரும்.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Kambu Koozh", ta: "கம்பங்கூழ்" },
          desc: {
            en: "Best summer breakfast with buttermilk.",
            ta: "மோருடன் கலந்த கூழ் சிறந்த காலை உணவு.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Ulcer Relief", ta: "குடல் புண் ஆறும்" },
        desc: {
          en: "Soothes stomach ulcers.",
          ta: "வயிற்றுப் புண்களை ஆற்றும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Arumugam", ta: "ஆறுமுகம்" },
      isVerified: true,
      fssai: "N/A",
      address: { en: "Villupuram, TN", ta: "விழுப்புரம், தமிழ்நாடு" },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: { en: "Harvested fresh", ta: "புதிய அறுவடை" },
      naturalInputs: { en: "Rain-fed", ta: "மானாவாரி சாகுபடி" },
    },
    usageAndStorage: {
      cookingRatio: {
        en: "1 cup : 3 cups water",
        ta: "1 கப் : 3 கப் தண்ணீர்",
      },
      cookingTime: { en: "30 mins", ta: "30 நிமிடங்கள்" },
      bestFor: { en: "Koozh, Dosa", ta: "கூழ், தோசை" },
      storageTips: { en: "Keep dry", ta: "ஈரமில்லாமல் வைக்கவும்" },
    },
  },
  {
    id: "prod__013",
    categoryId: "cat_millets",
    categoryName: { en: "Millets", ta: "சிறுதானியங்கள்" },
    name: { en: "Finger Millet (Ragi)", ta: "கேழ்வரகு (ராகி)" },
    subtitle: {
      en: "Calcium Rich Superfood",
      ta: "கால்சியம் நிறைந்த சூப்பர்ஃபுட்",
    },
    images: [
      "https://media.istockphoto.com/id/1317287403/photo/eleusine-coracana-grain-or-finger-millet-also-known-as-ragi-in-india-kodo-in-nepal.jpg?s=612x612&w=0&k=20&c=-uq7ymUgkwTkdMDgpgDTam9yFVA4iQB1RFfLE-K-YTY=",
      "https://www.milletmaagicmeal.in/cdn/shop/articles/image1.webp?v=1729496969&width=1100",
    ],
    tags: [
      { en: "Bone Strength", ta: "எலும்பு பலம்" },
      { en: "Baby Food", ta: "குழந்தை உணவு" },
    ],
    variants: [
      {
        weight: { en: "1 kg", ta: "1 கிலோ" },
        price: 90,
        mrp: 110,
        discountPercent: 18,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Bone Growth", ta: "எலும்பு வளர்ச்சி" },
          value: { en: "344mg Calcium", ta: "344மிகி கால்சியம்" },
        },
      ],
      benefits: [
        {
          title: {
            en: "Prevents Osteoporosis",
            ta: "எலும்பு தேய்மானம் தடுக்கும்",
          },
          desc: {
            en: "Strengthens bones naturally.",
            ta: "எலும்புகளை இயற்கையாக வலுவாக்கும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Toddlers", ta: "குழந்தைகள்" },
          reason: {
            en: "Aids in healthy growth.",
            ta: "ஆரோக்கியமான வளர்ச்சிக்கு உதவும்.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Ragi Kali", ta: "ராகி களி" },
          desc: {
            en: "Traditional strong food.",
            ta: "பாரம்பரியமான உறுதியான உணவு.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Anemia Care", ta: "ரத்த சோகை நீங்கும்" },
        desc: {
          en: "Improves blood count.",
          ta: "ரத்த அணுக்களை அதிகரிக்கும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Chelladurai", ta: "செல்லத்துரை" },
      isVerified: true,
      fssai: "N/A",
      address: { en: "Krishnagiri, TN", ta: "கிருஷ்ணகிரி, தமிழ்நாடு" },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: { en: "2 weeks ago", ta: "2 வாரங்களுக்கு முன்" },
      naturalInputs: { en: "Cow dung", ta: "மாட்டுச் சாணம்" },
    },
    usageAndStorage: {
      cookingRatio: {
        en: "1 cup : 2 cups water",
        ta: "1 கப் : 2 கப் தண்ணீர்",
      },
      cookingTime: { en: "20 mins", ta: "20 நிமிடங்கள்" },
      bestFor: { en: "Kali, Koozh", ta: "களி, கூழ்" },
      storageTips: {
        en: "Store in dry place",
        ta: "உலர்ந்த இடத்தில் வைக்கவும்",
      },
    },
  },
  {
    id: "prod__014",
    categoryId: "cat_millets",
    categoryName: { en: "Millets", ta: "சிறுதானியங்கள்" },
    name: { en: "Little Millet (Samai)", ta: "சாமை அரிசி" },
    subtitle: {
      en: "Fiber Rich Diet Millet",
      ta: "நார்ச்சத்து மிகுந்த சாமை",
    },
    images: [
      "https://m.media-amazon.com/images/I/51OxKnY9LsL._AC_UF894,1000_QL80_.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdsT0LU6cXRoC09VtrqEwIfwsI_RnzVn40frzcodjzNnnaCL-jcZw-GrYj&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaEp1lU8_bx-V1OSgzaP6guU6Hct4ULMsjS36OiRtoxsb560ab0OAqwfzW&s=10",
    ],
    tags: [
      { en: "Weight Loss", ta: "எடைகுறைப்பு" },
      { en: "Easy Digestion", ta: "செரிமானமாகும்" },
    ],
    variants: [
      {
        weight: { en: "500 g", ta: "500 கிராம்" },
        price: 95,
        mrp: 120,
        discountPercent: 20,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Digestion", ta: "செரிமானம்" },
          value: { en: "High Dietary Fiber", ta: "அதிக நார்ச்சத்து" },
        },
      ],
      benefits: [
        {
          title: { en: "Reproductive Health", ta: "இனப்பெருக்க நலம்" },
          desc: {
            en: "Good for both men and women.",
            ta: "ஆண், பெண் இருவருக்கும் நல்லது.",
          },
        },
      ],
      bestFor: [
        {
          audience: {
            en: "Weight Watchers",
            ta: "எடை குறைக்க நினைப்பவர்கள்",
          },
          reason: {
            en: "Keeps you full longer.",
            ta: "நீண்ட நேரம் பசி எடுக்காது.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Rice Replacement", ta: "அரிசிக்கு மாற்று" },
          desc: {
            en: "Cooks exactly like white rice.",
            ta: "வெள்ளை அரிசி போலவே சமைக்கலாம்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Relieves Constipation", ta: "மலச்சிக்கல் தீரும்" },
        desc: { en: "Cleanses the bowel.", ta: "குடலை சுத்தப்படுத்தும்." },
      },
    },
    farmerVerification: {
      grownBy: { en: "Velan Farms", ta: "வேலன் பண்ணை" },
      isVerified: true,
      fssai: "N/A",
      address: {
        en: "Tiruvannamalai, TN",
        ta: "திருவண்ணாமலை, தமிழ்நாடு",
      },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: {
        en: "Freshly milled",
        ta: "புதிதாக அரைக்கப்பட்டது",
      },
      naturalInputs: { en: "Organic practices", ta: "இயற்கை விவசாயம்" },
    },
    usageAndStorage: {
      cookingRatio: {
        en: "1 cup : 2 cups water",
        ta: "1 கப் : 2 கப் தண்ணீர்",
      },
      cookingTime: { en: "15 mins", ta: "15 நிமிடங்கள்" },
      bestFor: { en: "Rice variety, Pongal", ta: "சாதம், பொங்கல்" },
      storageTips: { en: "Airtight container", ta: "காற்று புகாத டப்பா" },
    },
  },
  {
    id: "prod__015",
    categoryId: "cat_millets",
    categoryName: { en: "Millets", ta: "சிறுதானியங்கள்" },
    name: {
      en: "Barnyard Millet (Kuthiraivali)",
      ta: "குதிரைவாலி அரிசி",
    },
    subtitle: {
      en: "Low Carb Diabetic Millet",
      ta: "குறைந்த கார்போஹைட்ரேட் சிறுதானியம்",
    },
    images: [
      "https://img.magnific.com/free-photo/top-view-quinoa-with-wooden-spoon_140725-9086.jpg?semt=ais_hybrid&w=740&q=80",
      "https://5.imimg.com/data5/BH/BM/MY-2969373/organic-barnyard-millet-500x500.jpg",
    ],
    tags: [
      { en: "Low Carb", ta: "குறைந்த மாவுச்சத்து" },
      { en: "Antioxidant", ta: "ஆன்டிஆக்ஸிடன்ட்" },
    ],
    variants: [
      {
        weight: { en: "500 g", ta: "500 கிராம்" },
        price: 95,
        mrp: 120,
        discountPercent: 20,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Sugar Control", ta: "சர்க்கரை கட்டுப்பாடு" },
          value: { en: "Low Glycemic Index", ta: "குறைந்த GI" },
        },
      ],
      benefits: [
        {
          title: { en: "Thyroid Health", ta: "தைராய்டு நலம்" },
          desc: {
            en: "Helps in regulating thyroid glands.",
            ta: "தைராய்டு சுரப்பியை சீராக்க உதவும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Diabetics", ta: "நீரிழிவு நோயாளிகள்" },
          reason: {
            en: "Prevents sugar spikes.",
            ta: "சர்க்கரை அளவை உயர்த்தாது.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Fasting Food", ta: "விரத உணவு" },
          desc: {
            en: "Consumed during religious fasting.",
            ta: "விரத காலங்களில் உண்ண ஏற்றது.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Pitta Control", ta: "பித்தம் கட்டுப்பாடு" },
        desc: {
          en: "Reduces excess pitta.",
          ta: "அதிகப்படியான பித்தத்தை குறைக்கும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Mani Organic", ta: "மணி ஆர்கானிக்" },
      isVerified: true,
      fssai: "N/A",
      address: { en: "Madurai, TN", ta: "மதுரை, தமிழ்நாடு" },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: { en: "1 month ago", ta: "1 மாதத்திற்கு முன்" },
      naturalInputs: { en: "Jeevamrutham", ta: "ஜீவாமிர்தம்" },
    },
    usageAndStorage: {
      cookingRatio: {
        en: "1 cup : 2.5 cups water",
        ta: "1 கப் : 2.5 கப் தண்ணீர்",
      },
      cookingTime: { en: "20 mins", ta: "20 நிமிடங்கள்" },
      bestFor: {
        en: "Upma, Bisi Bele Bath",
        ta: "உப்புமா, பிசிபேளா பாத்",
      },
      storageTips: { en: "Keep dry", ta: "ஈரமில்லாமல் வைக்கவும்" },
    },
  },
  {
    id: "prod__016",
    categoryId: "cat_flours",
    categoryName: { en: "Flours", ta: "மாவு வகைகள்" },
    name: { en: "Sprouted Ragi Flour", ta: "முளைகட்டிய கேழ்வரகு மாவு" },
    subtitle: {
      en: "Calcium Rich Baby Food",
      ta: "கால்சியம் நிறைந்த சத்து மாவு",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgKkb06rJQovgFewlSUMXP4KeiCVpCI28OuFIkbjGymCS_7Doc5HVWnD8&s=10",
    ],
    tags: [
      { en: "Sprouted", ta: "முளைகட்டியது" },
      { en: "Easy Digestion", ta: "எளிதில் செரிமானமாகும்" },
    ],
    variants: [
      {
        weight: { en: "500 g", ta: "500 கிராம்" },
        price: 95,
        mrp: 120,
        discountPercent: 20,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Bone Growth", ta: "எலும்பு வளர்ச்சி" },
          value: { en: "344mg Calcium", ta: "கால்சியம்" },
        },
      ],
      benefits: [
        {
          title: { en: "Enhanced Nutrients", ta: "அதிகரித்த சத்துக்கள்" },
          desc: {
            en: "Sprouting increases bio-availability.",
            ta: "தாதுக்களின் சக்தி பலமடங்கு அதிகரிக்கிறது.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Infants", ta: "குழந்தைகள்" },
          reason: {
            en: "Best first solid food.",
            ta: "சிறந்த முதல் திட உணவு.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Summer Coolant", ta: "கோடை குளிர்ச்சி" },
          desc: {
            en: "Ragi koozh is the best summer breakfast.",
            ta: "கேழ்வரகு கூழ் கோடைக்கு நல்லது.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Strength", ta: "உடல் பலம்" },
        desc: {
          en: "Builds robust bone density.",
          ta: "எலும்பு அடர்த்தியை அதிகரிக்கும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Nallasamy Mill", ta: "நல்லசாமி மில்" },
      isVerified: true,
      fssai: "12345678901239",
      address: { en: "Erode, TN", ta: "ஈரோடு, தமிழ்நாடு" },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: {
        en: "Freshly milled",
        ta: "புதிதாக அரைக்கப்பட்டது",
      },
      naturalInputs: { en: "Stone ground", ta: "கல்லில் அரைக்கப்பட்டது" },
    },
    usageAndStorage: {
      cookingRatio: {
        en: "2 tbsp : 1 cup water",
        ta: "2 ஸ்பூன் : 1 கப் தண்ணீர்",
      },
      cookingTime: { en: "5-10 mins", ta: "5-10 நிமிடங்கள்" },
      bestFor: { en: "Porridge, Dosa", ta: "கூழ், தோசை" },
      storageTips: {
        en: "Refrigerate for long life",
        ta: "ஃப்ரிட்ஜில் வைக்கவும்",
      },
    },
  },
  {
    id: "prod__017",
    categoryId: "cat_flours",
    categoryName: { en: "Flours", ta: "மாவு வகைகள்" },
    name: {
      en: "Roasted Rice Flour (Idiyappam Flour)",
      ta: "வறுத்த அரிசி மாவு (இடியாப்ப மாவு)",
    },
    subtitle: {
      en: "Traditional Fine Ground Flour",
      ta: "பாரம்பரிய முறையில் அரைக்கப்பட்ட மாவு",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvEzMj6mC-0q48PnjKfnhaztYePFoNXMlDXIrzP4alY_OXKMbWauA5ji-e&s=10",
    ],
    tags: [
      { en: "Roasted", ta: "வறுக்கப்பட்டது" },
      { en: "Fine Grind", ta: "சன்னமாக அரைத்தது" },
    ],
    variants: [
      {
        weight: { en: "1 kg", ta: "1 கிலோ" },
        price: 85,
        mrp: 100,
        discountPercent: 15,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Energy", ta: "ஆற்றல்" },
          value: { en: "Carbohydrates", ta: "மாவுச்சத்து" },
        },
      ],
      benefits: [
        {
          title: { en: "Easy on Stomach", ta: "வயிற்றுக்கு இதம்" },
          desc: {
            en: "Light food suitable for all ages.",
            ta: "அனைத்து வயதினருக்கும் ஏற்ற எளிமையான உணவு.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Everyone", ta: "அனைவரும்" },
          reason: {
            en: "Quick breakfast preparation.",
            ta: "விரைவான காலை உணவு தயாரிக்க.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Soft Idiyappam", ta: "மெதுவான இடியாப்பம்" },
          desc: {
            en: "Use hot water to knead.",
            ta: "சுடுநீர் விட்டு பிசைந்தால் மாவு மெதுவாகும்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Digestive Care", ta: "செரிமான நலம்" },
        desc: {
          en: "Does not cause bloating.",
          ta: "வாய்வு தொல்லை தராது.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Delta Mills", ta: "டெல்டா மில்ஸ்" },
      isVerified: true,
      fssai: "12345678901240",
      address: { en: "Thanjavur, TN", ta: "தஞ்சாவூர், தமிழ்நாடு" },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: {
        en: "Freshly roasted",
        ta: "புதிதாக வறுக்கப்பட்டது",
      },
      naturalInputs: {
        en: "Washed and sun dried",
        ta: "கழுவி வெயிலில் உலர்த்தியது",
      },
    },
    usageAndStorage: {
      cookingRatio: {
        en: "1 cup flour : 1.5 cup hot water",
        ta: "1 கப் மாவு : 1.5 கப் சுடுநீர்",
      },
      cookingTime: {
        en: "10 mins steam",
        ta: "10 நிமிடம் ஆவியில் வேகவைக்க",
      },
      bestFor: {
        en: "Idiyappam, Kozhukattai",
        ta: "இடியாப்பம், கொழுக்கட்டை",
      },
      storageTips: { en: "Airtight container", ta: "காற்று புகாத டப்பா" },
    },
  },
  {
    id: "prod__018",
    categoryId: "cat_flours",
    categoryName: { en: "Flours", ta: "மாவு வகைகள்" },
    name: {
      en: "Mappillai Samba Flour",
      ta: "மாப்பிள்ளை சம்பா அரிசி மாவு",
    },
    subtitle: {
      en: "Strength Building Red Rice Flour",
      ta: "உடல் பலம் தரும் சிவப்பு அரிசி மாவு",
    },
    images: [
      "https://organicpositive.in/wp-content/uploads/2022/07/WhatsApp-Image-2021-02-13-at-7.17.35-AM-1200x900.jpeg",
    ],
    tags: [
      { en: "High Fiber", ta: "நார்ச்சத்து" },
      { en: "Diabetic Friendly", ta: "நீரிழிவு நோயாளிகளுக்கு ஏற்றது" },
    ],
    variants: [
      {
        weight: { en: "500 g", ta: "500 கிராம்" },
        price: 90,
        mrp: 110,
        discountPercent: 18,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Muscle Strength", ta: "தசை பலம்" },
          value: { en: "Protein & Iron", ta: "புரதம் & இரும்பு" },
        },
      ],
      benefits: [
        {
          title: { en: "Stamina", ta: "உடல் வலிமை" },
          desc: {
            en: "Increases overall physical stamina.",
            ta: "உடல் வலிமையை அதிகரிக்கும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Men", ta: "ஆண்கள்" },
          reason: {
            en: "Traditionally given to grooms.",
            ta: "மாப்பிள்ளைகளுக்கு வழங்கப்படும்.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Healthy Puttu", ta: "சத்தான புட்டு" },
          desc: {
            en: "Best eaten as sweet puttu with jaggery.",
            ta: "கருப்பட்டி சேர்த்து புட்டு செய்து சாப்பிடலாம்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Vitality", ta: "உயிர்ச்சக்தி" },
        desc: { en: "Bestows vitality.", ta: "உயிர்ச்சக்தியை அளிக்கும்." },
      },
    },
    farmerVerification: {
      grownBy: { en: "Yuvaraj Farms", ta: "யுவராஜ் பண்ணை" },
      isVerified: true,
      fssai: "12345678901241",
      address: { en: "Coimbatore, TN", ta: "கோயம்புத்தூர், தமிழ்நாடு" },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: { en: "1 week ago", ta: "1 வாரத்திற்கு முன்" },
      naturalInputs: { en: "Stone ground", ta: "கல்லில் அரைக்கப்பட்டது" },
    },
    usageAndStorage: {
      cookingRatio: {
        en: "Sprinkle water for puttu",
        ta: "புட்டுக்கு தண்ணீர் தெளிக்க",
      },
      cookingTime: { en: "15 mins steam", ta: "15 நிமிடம் ஆவியில்" },
      bestFor: { en: "Puttu, Dosa", ta: "புட்டு, தோசை" },
      storageTips: {
        en: "Keep refrigerated",
        ta: "ஃப்ரிட்ஜில் வைக்கவும்",
      },
    },
  },
  {
    id: "prod__019",
    categoryId: "cat_flours",
    categoryName: { en: "Flours", ta: "மாவு வகைகள்" },
    name: { en: "Health Mix (Sathu Maavu)", ta: "பாரம்பரிய சத்து மாவு" },
    subtitle: {
      en: "Blend of 25+ Grains & Nuts",
      ta: "25+ சிறுதானியம் மற்றும் நட்ஸ் கலவை",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzI69EVeOq6kNDfoJkG4XzzRs8c2pfCSGJxXsE1m51AQ&s=10",
    ],
    tags: [
      { en: "Immunity", ta: "நோய் எதிர்ப்பு" },
      { en: "All Ages", ta: "அனைத்து வயதினருக்கும்" },
    ],
    variants: [
      {
        weight: { en: "500 g", ta: "500 கிராம்" },
        price: 180,
        mrp: 220,
        discountPercent: 18,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Complete Nutrition", ta: "முழுமையான சத்து" },
          value: {
            en: "Vitamins & Minerals",
            ta: "வைட்டமின் & தாதுக்கள்",
          },
        },
      ],
      benefits: [
        {
          title: { en: "Weight Gain", ta: "எடை அதிகரிப்பு" },
          desc: {
            en: "Helps kids gain healthy weight.",
            ta: "ஆரோக்கியமான முறையில் எடை கூடும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Family", ta: "குடும்பம்" },
          reason: {
            en: "Perfect healthy breakfast drink.",
            ta: "சிறந்த காலை நேர பானம்.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Roasted Aroma", ta: "வறுத்த மணம்" },
          desc: {
            en: "Each grain is individually roasted.",
            ta: "ஒவ்வொரு தானியமும் தனித்தனியாக வறுக்கப்பட்டது.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Tridosha Balance", ta: "திரிதோஷ சமநிலை" },
        desc: {
          en: "Balances Vata, Pitta, Kapha.",
          ta: "வாத, பித்த, கபத்தை சீராக்கும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Annai Kitchen", ta: "அன்னை கிச்சன்" },
      isVerified: true,
      fssai: "12345678901242",
      address: { en: "Trichy, TN", ta: "திருச்சி, தமிழ்நாடு" },
      soilAudit: {
        en: "Sourced organically",
        ta: "இயற்கை முறையில் பெறப்பட்டது",
      },
      recentInspection: {
        en: "Freshly made",
        ta: "புதிதாக தயாரிக்கப்பட்டது",
      },
      naturalInputs: {
        en: "No added sugar",
        ta: "சர்க்கரை சேர்க்கப்படவில்லை",
      },
    },
    usageAndStorage: {
      cookingRatio: {
        en: "2 tbsp : 1 glass milk/water",
        ta: "2 ஸ்பூன் : 1 டம்ளர் பால்/நீர்",
      },
      cookingTime: { en: "5 mins boil", ta: "5 நிமிடம் கொதிக்கவைக்க" },
      bestFor: { en: "Morning drink", ta: "காலை பானம்" },
      storageTips: { en: "Airtight container", ta: "காற்று புகாத டப்பா" },
    },
  },
  {
    id: "prod__020",
    categoryId: "cat_flours",
    categoryName: { en: "Flours", ta: "மாவு வகைகள்" },
    name: { en: "Samba Wheat Flour", ta: "சம்பா கோதுமை மாவு" },
    subtitle: {
      en: "Whole Grain Unrefined Flour",
      ta: "முழுமையான பட்டை தீட்டப்படாத கோதுமை மாவு",
    },
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2023/4/300999714/TU/NJ/ZI/84627022/khapli-wheat-flour-500x500.jpg",
    ],
    tags: [
      { en: "High Fiber", ta: "நார்ச்சத்து" },
      { en: "Maida Free", ta: "மைதா அற்றது" },
    ],
    variants: [
      {
        weight: { en: "1 kg", ta: "1 கிலோ" },
        price: 85,
        mrp: 100,
        discountPercent: 15,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Gut Health", ta: "குடல் நலம்" },
          value: { en: "Bran & Endosperm", ta: "தவிடு சத்து" },
        },
      ],
      benefits: [
        {
          title: { en: "Sugar Control", ta: "சர்க்கரை கட்டுப்பாடு" },
          desc: {
            en: "Better than refined flour for diabetics.",
            ta: "நீரிழிவு நோயாளிகளுக்கு மிகவும் ஏற்றது.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Everyone", ta: "அனைவரும்" },
          reason: {
            en: "Soft and healthy rotis.",
            ta: "மென்மையான சப்பாத்தி.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Kneading Tip", ta: "பிசையும் முறை" },
          desc: {
            en: "Rest the dough for 30 mins.",
            ta: "மாவு பிசைந்து 30 நிமிடம் ஊறவைக்கவும்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Strength", ta: "பலம்" },
        desc: {
          en: "Provides heavy nourishment.",
          ta: "உடலுக்கு ஊட்டம் தரும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Kongu Naturals", ta: "கொங்கு நேச்சுரல்ஸ்" },
      isVerified: true,
      fssai: "12345678901243",
      address: { en: "Tiruppur, TN", ta: "திருப்பூர், தமிழ்நாடு" },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: {
        en: "Freshly ground",
        ta: "புதிதாக அரைக்கப்பட்டது",
      },
      naturalInputs: { en: "Chakki ground", ta: "கல் செக்கில் அரைத்தது" },
    },
    usageAndStorage: {
      cookingRatio: { en: "As required", ta: "தேவைக்கேற்ப" },
      cookingTime: { en: "5 mins", ta: "5 நிமிடங்கள்" },
      bestFor: { en: "Roti, Poori, Halwa", ta: "சப்பாத்தி, பூரி, அல்வா" },
      storageTips: { en: "Dry place", ta: "உலர்ந்த இடம்" },
    },
  },
  {
    id: "prod__021",
    categoryId: "cat_oil_ghee",
    categoryName: { en: "Oil & Ghee", ta: "எண்ணெய் & நெய்" },
    name: { en: "Wood Pressed Sesame Oil", ta: "மரச்செக்கு நல்லெண்ணெய்" },
    subtitle: {
      en: "Cold Pressed with Palm Jaggery",
      ta: "கருப்பட்டி சேர்த்து ஆட்டப்பட்ட செக்கு எண்ணெய்",
    },
    images: [
      "https://t3.ftcdn.net/jpg/01/62/60/36/360_F_162603681_4HVBzBPuINeZcASVHL4tjvNoOcdJbUAW.jpg",
    ],
    tags: [
      { en: "Wood Pressed", ta: "மரச்செக்கு" },
      { en: "Unrefined", ta: "சுத்திகரிக்கப்படாதது" },
    ],
    variants: [
      {
        weight: { en: "1 Litre", ta: "1 லிட்டர்" },
        price: 420,
        mrp: 480,
        discountPercent: 12,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Heart Health", ta: "இதய நலம்" },
          value: { en: "MUFA & PUFA", ta: "நல்ல கொழுப்பு" },
        },
      ],
      benefits: [
        {
          title: { en: "Balances Heat", ta: "உடல் சூடு" },
          desc: {
            en: "Reduces excess body heat when applied physically.",
            ta: "எண்ணெய் தேய்த்து குளித்தால் உடல் சூடு குறையும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Everyone", ta: "அனைவரும்" },
          reason: {
            en: "Best for daily cooking.",
            ta: "தினசரி சமையலுக்கு சிறந்தது.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Oil Pulling", ta: "ஆயில் புல்லிங்" },
          desc: {
            en: "Use 1 spoon every morning for oral health.",
            ta: "தினமும் காலையில் வாய்க்கொப்பளித்தால் பற்கள் உறுதியாகும்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Queen of Oils", ta: "எண்ணெய்களின் அரசி" },
        desc: {
          en: "Called 'Nalla Ennai' (Good Oil).",
          ta: "'நல்ல' எண்ணெய் என அழைக்கப்படுகிறது.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Chekku Master Velan", ta: "செக்கு மாஸ்டர் வேலன்" },
      isVerified: true,
      fssai: "12345678901244",
      address: { en: "Madurai, TN", ta: "மதுரை, தமிழ்நாடு" },
      soilAudit: { en: "N/A", ta: "N/A" },
      recentInspection: {
        en: "Freshly pressed",
        ta: "புதிதாக ஆட்டப்பட்டது",
      },
      naturalInputs: {
        en: "Native black sesame",
        ta: "நாட்டு கருப்பு எள்ளு",
      },
    },
    usageAndStorage: {
      cookingRatio: { en: "As required", ta: "தேவைக்கேற்ப" },
      cookingTime: {
        en: "High smoking point",
        ta: "அதிக வெப்பம் தாங்கும்",
      },
      bestFor: { en: "Idli Podi, Pickles", ta: "இட்லி பொடி, ஊறுகாய்" },
      storageTips: {
        en: "Store in glass/steel container",
        ta: "கண்ணாடி/எவர்சில்வர் பாத்திரத்தில் வைக்கவும்",
      },
    },
  },
  {
    id: "prod__022",
    categoryId: "cat_oil_ghee",
    categoryName: { en: "Oil & Ghee", ta: "எண்ணெய் & நெய்" },
    name: {
      en: "Wood Pressed Groundnut Oil",
      ta: "மரச்செக்கு கடலை எண்ணெய்",
    },
    subtitle: {
      en: "Pure Unrefined Peanut Oil",
      ta: "சுத்தமான செக்கு கடலை எண்ணெய்",
    },
    images: [
      "https://dukaan.b-cdn.net/700x700/webp/media/9a7dd050-a754-4cba-8eca-b4bc30761f2a.webp",
    ],
    tags: [
      { en: "Deep Frying", ta: "வறுக்க ஏற்றது" },
      { en: "Cholesterol Free", ta: "கொலஸ்ட்ரால் அற்றது" },
    ],
    variants: [
      {
        weight: { en: "1 Litre", ta: "1 லிட்டர்" },
        price: 280,
        mrp: 320,
        discountPercent: 12,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Skin Health", ta: "சரும நலம்" },
          value: { en: "Vitamin E", ta: "வைட்டமின் ஈ" },
        },
      ],
      benefits: [
        {
          title: { en: "Heart Friendly", ta: "இதயத்திற்கு நல்லது" },
          desc: {
            en: "Rich in oleic acid.",
            ta: "ஒலிக் அமிலம் நிறைந்தது.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Families", ta: "குடும்பங்கள்" },
          reason: {
            en: "Perfect for deep frying.",
            ta: "பொரிக்க மற்றும் வறுக்க சிறந்தது.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Natural Aroma", ta: "இயற்கை மணம்" },
          desc: {
            en: "Adds a rich nutty flavor to curries.",
            ta: "குழம்புகளுக்கு இயற்கையான சுவையைத் தரும்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Joint Health", ta: "மூட்டு நலம்" },
        desc: {
          en: "Strengthens bones and joints.",
          ta: "எலும்புகள் மற்றும் மூட்டுகளை வலுவாக்கும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Kongu Chekku", ta: "கொங்கு செக்கு" },
      isVerified: true,
      fssai: "12345678901245",
      address: { en: "Erode, TN", ta: "ஈரோடு, தமிழ்நாடு" },
      soilAudit: { en: "N/A", ta: "N/A" },
      recentInspection: {
        en: "Freshly pressed",
        ta: "புதிதாக ஆட்டப்பட்டது",
      },
      naturalInputs: {
        en: "Native groundnuts",
        ta: "நாட்டு மல்லாட்டை (நிலக்கடலை)",
      },
    },
    usageAndStorage: {
      cookingRatio: { en: "As required", ta: "தேவைக்கேற்ப" },
      cookingTime: {
        en: "Very high smoking point",
        ta: "அதிக வெப்பம் தாங்கும்",
      },
      bestFor: { en: "Deep frying, Sautéing", ta: "பொரிக்க, வதக்க" },
      storageTips: {
        en: "Keep away from direct sunlight",
        ta: "நேரடி சூரிய ஒளி படாமல் வைக்கவும்",
      },
    },
  },
  {
    id: "prod__023",
    categoryId: "cat_oil_ghee",
    categoryName: { en: "Oil & Ghee", ta: "எண்ணெய் & நெய்" },
    name: {
      en: "Wood Pressed Coconut Oil",
      ta: "மரச்செக்கு தேங்காய் எண்ணெய்",
    },
    subtitle: {
      en: "Edible Grade Pure Copra Oil",
      ta: "சமையலுக்கு ஏற்ற சுத்தமான தேங்காய் எண்ணெய்",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJc1rl0WFrOZUZujVcTJHZrvj-spNMeig-xmn2XC8rnoJ9pNJvH_8SN0D&s=10",
    ],
    tags: [
      { en: "Edible Grade", ta: "சமையல் தரம்" },
      { en: "Hair & Skin", ta: "முடி மற்றும் சருமம்" },
    ],
    variants: [
      {
        weight: { en: "1 Litre", ta: "1 லிட்டர்" },
        price: 320,
        mrp: 360,
        discountPercent: 11,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Immunity", ta: "நோய் எதிர்ப்பு" },
          value: { en: "Lauric Acid", ta: "லாரிக் அமிலம்" },
        },
      ],
      benefits: [
        {
          title: { en: "Quick Energy", ta: "உடனடி ஆற்றல்" },
          desc: {
            en: "Contains MCTs for quick brain energy.",
            ta: "மூளைக்கு உடனடி ஆற்றல் தரும் MCTகள் உள்ளன.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Kids & Adults", ta: "அனைவரும்" },
          reason: {
            en: "Excellent for skin and hair health.",
            ta: "சருமம் மற்றும் முடி வளர்ச்சிக்கு சிறந்தது.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Baby Massage", ta: "குழந்தை மசாஜ்" },
          desc: {
            en: "Best oil for newborn baby massage.",
            ta: "பச்சிளம் குழந்தைகளுக்கு மசாஜ் செய்ய சிறந்தது.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Cooling", ta: "குளிர்ச்சி" },
        desc: {
          en: "Pacifies Pitta dosha.",
          ta: "பித்த தோஷத்தை தணிக்கும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Pollachi Naturals", ta: "பொள்ளாச்சி நேச்சுரல்ஸ்" },
      isVerified: true,
      fssai: "12345678901246",
      address: { en: "Pollachi, TN", ta: "பொள்ளாச்சி, தமிழ்நாடு" },
      soilAudit: { en: "N/A", ta: "N/A" },
      recentInspection: {
        en: "Freshly pressed",
        ta: "புதிதாக ஆட்டப்பட்டது",
      },
      naturalInputs: {
        en: "Sun dried copra",
        ta: "வெயிலில் உலர்த்திய கொப்பரை",
      },
    },
    usageAndStorage: {
      cookingRatio: { en: "As required", ta: "தேவைக்கேற்ப" },
      cookingTime: { en: "Medium heat", ta: "மிதமான வெப்பம்" },
      bestFor: {
        en: "Kerala style cooking, Baking",
        ta: "கேரளா சமையல், பேக்கிங்",
      },
      storageTips: {
        en: "Solidifies in winter, which is natural",
        ta: "குளிர்காலத்தில் உறைவது இயற்கையானது",
      },
    },
  },
  {
    id: "prod__024",
    categoryId: "cat_oil_ghee",
    categoryName: { en: "Oil & Ghee", ta: "எண்ணெய் & நெய்" },
    name: {
      en: "Pure Cow Ghee (Bilona Method)",
      ta: "சுத்தமான பசும் நெய்",
    },
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2024/7/436164776/XM/TH/ZM/57852237/organic-cow-ghee-500x500.jpeg",
    ],
    subtitle: {
      en: "Traditional Cultured Butter Ghee",
      ta: "பாரம்பரிய முறையில் காய்ச்சிய நெய்",
    },
    tags: [
      { en: "A2 Milk", ta: "A2 பால்" },
      { en: "Cultured", ta: "மோர் கடைந்த நெய்" },
    ],
    variants: [
      {
        weight: { en: "500 ml", ta: "500 மில்லி" },
        price: 650,
        mrp: 750,
        discountPercent: 13,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Brain Health", ta: "மூளை நலம்" },
          value: { en: "Omega-3", ta: "ஒமேகா-3" },
        },
      ],
      benefits: [
        {
          title: { en: "Digestive Fire", ta: "செரிமானத் தீ" },
          desc: {
            en: "Improves absorption of nutrients.",
            ta: "உணவின் சத்துக்களை உடல் கிரகிக்க உதவும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Kids", ta: "குழந்தைகள்" },
          reason: {
            en: "Crucial for brain development.",
            ta: "மூளை வளர்ச்சிக்கு மிகவும் முக்கியம்.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "First Food", ta: "முதல் உணவு" },
          desc: {
            en: "Always serve hot rice with a spoonful of ghee.",
            ta: "சூடான சாதத்தில் ஒரு ஸ்பூன் நெய் விட்டு உண்பது வழக்கம்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Rejuvenator", ta: "புத்துணர்ச்சி" },
        desc: {
          en: "Nourishes all body tissues.",
          ta: "உடலின் அனைத்து திசுக்களுக்கும் ஊட்டம் தரும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Kangayam Dairy Farms", ta: "காங்கேயம் பால் பண்ணை" },
      isVerified: true,
      fssai: "12345678901247",
      address: { en: "Tiruppur, TN", ta: "திருப்பூர், தமிழ்நாடு" },
      soilAudit: { en: "N/A", ta: "N/A" },
      recentInspection: {
        en: "Cultured weekly",
        ta: "வாரம் ஒருமுறை தயாரிக்கப்படுகிறது",
      },
      naturalInputs: {
        en: "Free grazing cow milk",
        ta: "மேய்ச்சல் பசும்பால்",
      },
    },
    usageAndStorage: {
      cookingRatio: { en: "As required", ta: "தேவைக்கேற்ப" },
      cookingTime: { en: "High heat", ta: "அதிக வெப்பம் தாங்கும்" },
      bestFor: {
        en: "Sweets, Rice, Dosa",
        ta: "இனிப்புகள், சாதம், தோசை",
      },
      storageTips: {
        en: "Store in glass jar at room temp",
        ta: "கண்ணாடி பாட்டிலில் அறை வெப்பநிலையில் வைக்கவும்",
      },
    },
  },
  {
    id: "prod__025",
    categoryId: "cat_oil_ghee",
    categoryName: { en: "Oil & Ghee", ta: "எண்ணெய் & நெய்" },
    name: {
      en: "Pure Castor Oil (Amanakku Ennai)",
      ta: "சுத்தமான விளக்கெண்ணெய்",
    },
    subtitle: {
      en: "Cold Pressed for Hair & Health",
      ta: "முடி மற்றும் ஆரோக்கியத்திற்கான செக்கு எண்ணெய்",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzpppOpSabDhXKdSuuH67l8vKCGAksZGrIM56BvvK3GE1tGZv4IdizQ-oX&s=10",
    ],
    tags: [
      { en: "Hair Growth", ta: "முடி வளர்ச்சி" },
      { en: "Body Coolant", ta: "உடல் குளிர்ச்சி" },
    ],
    variants: [
      {
        weight: { en: "250 ml", ta: "250 மில்லி" },
        price: 120,
        mrp: 150,
        discountPercent: 20,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Skin Health", ta: "சரும நலம்" },
          value: { en: "Ricinoleic Acid", ta: "ரிசினோலிக் அமிலம்" },
        },
      ],
      benefits: [
        {
          title: { en: "Thick Hair", ta: "அடர்த்தியான முடி" },
          desc: {
            en: "Promotes hair and eyebrow growth.",
            ta: "முடி மற்றும் புருவ வளர்ச்சியைத் தூண்டும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Everyone", ta: "அனைவரும்" },
          reason: {
            en: "Excellent moisturizer.",
            ta: "சிறந்த இயற்கை மாய்ஸ்சரைசர்.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Stomach Ache", ta: "வயிற்று வலி" },
          desc: {
            en: "Apply on the navel to reduce body heat and stomach pain.",
            ta: "தொப்புளில் வைத்தால் உடல் சூடு மற்றும் வயிற்று வலி குறையும்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Laxative", ta: "மலமிளக்கி" },
        desc: {
          en: "Used traditionally for bowel clearance.",
          ta: "குடல் சுத்தம் செய்ய பாரம்பரியமாக பயன்படுத்தப்படும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Namakkal Oils", ta: "நாமக்கல் ஆயில்ஸ்" },
      isVerified: true,
      fssai: "12345678901248",
      address: { en: "Namakkal, TN", ta: "நாமக்கல், தமிழ்நாடு" },
      soilAudit: { en: "N/A", ta: "N/A" },
      recentInspection: { en: "Fresh batch", ta: "புதிய தயாரிப்பு" },
      naturalInputs: {
        en: "Sun dried castor seeds",
        ta: "உலர்த்திய ஆமணக்கு விதைகள்",
      },
    },
    usageAndStorage: {
      cookingRatio: {
        en: "External use mainly",
        ta: "முக்கியமாக வெளிப் பயன்பாட்டிற்கு",
      },
      cookingTime: { en: "N/A", ta: "N/A" },
      bestFor: {
        en: "Hair oil mix, Navel application",
        ta: "முடி எண்ணெய் கலவை, தொப்புளில் வைக்க",
      },
      storageTips: {
        en: "Store in dark cool place",
        ta: "இருண்ட குளிர்ந்த இடத்தில் வைக்கவும்",
      },
    },
  },

  {
    id: "prod__026",
    categoryId: "cat_pickles",
    categoryName: { en: "Pickles & Thokku", ta: "ஊறுகாய் & தொக்கு" },
    name: { en: "Garlic Pickle (Poondu Oorugai)", ta: "பூண்டு ஊறுகாய்" },
    subtitle: {
      en: "Homemade with Wood Pressed Oil",
      ta: "மரச்செக்கு எண்ணெய் கொண்டு வீட்டில் செய்தது",
    },
    images: [
      "https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/garlic-pickle-recipe-1.jpg",
    ],
    tags: [
      { en: "No Preservatives", ta: "பதப்படுத்திகள் இல்லை" },
      { en: "Homemade", ta: "வீட்டில் செய்தது" },
    ],
    variants: [
      {
        weight: { en: "250 g", ta: "250 கிராம்" },
        price: 140,
        mrp: 160,
        discountPercent: 12,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Digestion", ta: "செரிமானம்" },
          value: { en: "Allicin", ta: "அல்லிசின்" },
        },
      ],
      benefits: [
        {
          title: { en: "Gastric Relief", ta: "வாய்வு தொல்லை" },
          desc: {
            en: "Helps relieve bloating.",
            ta: "வாய்வு தொல்லையை நீக்கும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Adults", ta: "பெரியவர்கள்" },
          reason: {
            en: "Excellent side dish for curd rice.",
            ta: "தயிர் சாதத்திற்கு ஏற்றது.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Appetizer", ta: "பசியைத் தூண்டும்" },
          desc: {
            en: "Eating a piece before meal increases appetite.",
            ta: "சாப்பிடும் முன் ஒரு பல் பூண்டு சாப்பிட்டால் பசி தூண்டும்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Heart Care", ta: "இதய பராமரிப்பு" },
        desc: {
          en: "Known to reduce bad cholesterol.",
          ta: "கெட்ட கொழுப்பை குறைக்கும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Annapoorani Kitchen", ta: "அன்னபூரணி கிச்சன்" },
      isVerified: true,
      fssai: "12345678901249",
      address: { en: "Trichy, TN", ta: "திருச்சி, தமிழ்நாடு" },
      soilAudit: { en: "N/A", ta: "N/A" },
      recentInspection: {
        en: "Small batches",
        ta: "சிறிய அளவுகளில் தயாரிக்கப்படுகிறது",
      },
      naturalInputs: {
        en: "Country garlic, sea salt",
        ta: "நாட்டுப் பூண்டு, கல் உப்பு",
      },
    },
    usageAndStorage: {
      cookingRatio: { en: "N/A", ta: "N/A" },
      cookingTime: { en: "Ready to eat", ta: "உண்ணத் தயார்" },
      bestFor: { en: "Curd rice, Idli", ta: "தயிர் சாதம், இட்லி" },
      storageTips: {
        en: "Keep oil floating on top",
        ta: "எண்ணெய் மிதக்க வேண்டும்",
      },
    },
  },
  {
    id: "prod__027",
    categoryId: "cat_pickles",
    categoryName: { en: "Pickles & Thokku", ta: "ஊறுகாய் & தொக்கு" },
    name: {
      en: "Cut Mango Pickle (Maangai Oorugai)",
      ta: "மாங்காய் ஊறுகாய்",
    },
    subtitle: {
      en: "Traditional South Indian Style",
      ta: "பாரம்பரிய தென்னிந்திய சுவை",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9YeSqJnkFxrtz-Rv0eJrSxAcgEaUTzC5uYK6tt7EUAIq5TcqG8w6SvaA3&s=10",
    ],
    images: [],
    tags: [
      { en: "Spicy", ta: "காரமானது" },
      { en: "Sun Dried", ta: "வெயிலில் உலர்த்தியது" },
    ],
    variants: [
      {
        weight: { en: "250 g", ta: "250 கிராம்" },
        price: 120,
        mrp: 150,
        discountPercent: 20,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Immunity", ta: "நோய் எதிர்ப்பு" },
          value: { en: "Vitamin C", ta: "வைட்டமின் சி" },
        },
      ],
      benefits: [
        {
          title: { en: "Digestion", ta: "செரிமானம்" },
          desc: {
            en: "Spices aid in breaking down heavy meals.",
            ta: "மசாலாப் பொருட்கள் செரிமானத்திற்கு உதவும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Everyone", ta: "அனைவரும்" },
          reason: {
            en: "Classic comfort food side dish.",
            ta: "பழைய சாதத்திற்கு சிறந்த துணை.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Cures Nausea", ta: "குமட்டல் தீரும்" },
          desc: {
            en: "A small lick prevents morning sickness.",
            ta: "குமட்டல் மற்றும் வாந்தியை தடுக்கும்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Taste Enhancer", ta: "சுவையூட்டி" },
        desc: {
          en: "Activates taste buds.",
          ta: "சுவை அரும்புகளை தூண்டும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Nati Treats", ta: "நாட்டி ட்ரீட்ஸ்" },
      isVerified: true,
      fssai: "12345678901250",
      address: { en: "Madurai, TN", ta: "மதுரை, தமிழ்நாடு" },
      soilAudit: { en: "N/A", ta: "N/A" },
      recentInspection: {
        en: "Freshly packed",
        ta: "புதிதாக பேக் செய்யப்பட்டது",
      },
      naturalInputs: {
        en: "Raw mango, cold pressed sesame oil",
        ta: "பச்சை மாங்காய், செக்கு நல்லெண்ணெய்",
      },
    },
    usageAndStorage: {
      cookingRatio: { en: "N/A", ta: "N/A" },
      cookingTime: { en: "Ready to eat", ta: "உண்ணத் தயார்" },
      bestFor: { en: "Curd Rice, Upma", ta: "தயிர் சாதம், உப்புமா" },
      storageTips: {
        en: "Use dry spoon only",
        ta: "ஈரமில்லாத கரண்டியைப் பயன்படுத்தவும்",
      },
    },
  },
  {
    id: "prod__028",
    categoryId: "cat_pickles",
    categoryName: { en: "Pickles & Thokku", ta: "ஊறுகாய் & தொக்கு" },
    name: {
      en: "Lemon Pickle (Elumichai Oorugai)",
      ta: "எலுமிச்சை ஊறுகாய்",
    },
    subtitle: {
      en: "Tangy & Matured in Sea Salt",
      ta: "கல் உப்பில் ஊறிய புளிப்பான ஊறுகாய்",
    },
    images: [
      "https://static.toiimg.com/thumb/57645740.cms?imgsize=519869&width=800&height=800",
    ],
    tags: [
      { en: "Oil Free Option Available", ta: "எண்ணெய் இல்லாதது" },
      { en: "Matured", ta: "நன்கு ஊறியது" },
    ],
    variants: [
      {
        weight: { en: "250 g", ta: "250 கிராம்" },
        price: 130,
        mrp: 150,
        discountPercent: 13,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Gut Flora", ta: "குடல் நலம்" },
          value: { en: "Probiotics", ta: "புரோபயாடிக்குகள்" },
        },
      ],
      benefits: [
        {
          title: { en: "Reduces Pitta", ta: "பித்தம் தணிக்கும்" },
          desc: {
            en: "Good for dizziness and acidity.",
            ta: "தலைசுற்றல் மற்றும் பித்தத்திற்கு நல்லது.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Elders", ta: "முதியவர்கள்" },
          reason: {
            en: "Soft and easy to chew.",
            ta: "மென்மையானது, மெல்ல எளிதானது.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Fever Recovery", ta: "காய்ச்சல் மீட்சி" },
          desc: {
            en: "Restores taste in mouth after fever.",
            ta: "காய்ச்சலுக்குப் பின் வாய் கசப்பை நீக்கும்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Cooling", ta: "குளிர்ச்சி" },
        desc: {
          en: "Relieves excess internal heat.",
          ta: "உள் சூட்டைத் தணிக்கும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Grama Suvai", ta: "கிராம சுவை" },
      isVerified: true,
      fssai: "12345678901251",
      address: { en: "Tirunelveli, TN", ta: "திருநெல்வேலி, தமிழ்நாடு" },
      soilAudit: { en: "N/A", ta: "N/A" },
      recentInspection: {
        en: "Matured for 30 days",
        ta: "30 நாட்கள் ஊறவைக்கப்பட்டது",
      },
      naturalInputs: {
        en: "Country lemons, rock salt",
        ta: "நாட்டு எலுமிச்சை, இந்துப்பு",
      },
    },
    usageAndStorage: {
      cookingRatio: { en: "N/A", ta: "N/A" },
      cookingTime: { en: "Ready to eat", ta: "உண்ணத் தயார்" },
      bestFor: {
        en: "Sambar Rice, Curd Rice",
        ta: "சாம்பார் சாதம், தயிர் சாதம்",
      },
      storageTips: {
        en: "Gets better with age",
        ta: "பழசானால் சுவை கூடும்",
      },
    },
  },
  {
    id: "prod__029",
    categoryId: "cat_pickles",
    categoryName: { en: "Pickles & Thokku", ta: "ஊறுகாய் & தொக்கு" },
    name: {
      en: "Gongura Thokku (Pulichakeerai)",
      ta: "புளிச்சக்கீரை தொக்கு",
    },
    subtitle: {
      en: "Authentic Andhra Style",
      ta: "பாரம்பரிய ஆந்திரா சுவை",
    },
    images: [
      "https://mylaporekitchens.in/cdn/shop/files/357069318_655656469916151_5405744363758971775_n.jpg?v=1688283838",
    ],
    tags: [
      { en: "Iron Rich", ta: "இரும்புச்சத்து" },
      { en: "Spicy & Tangy", ta: "காரம் & புளிப்பு" },
    ],
    variants: [
      {
        weight: { en: "250 g", ta: "250 கிராம்" },
        price: 150,
        mrp: 180,
        discountPercent: 16,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Blood Count", ta: "ரத்த அணுக்கள்" },
          value: { en: "Folic Acid", ta: "ஃபோலிக் அமிலம்" },
        },
      ],
      benefits: [
        {
          title: { en: "Anemia Prevention", ta: "ரத்த சோகை தடுப்பு" },
          desc: {
            en: "Highly recommended for women.",
            ta: "பெண்களுக்கு மிகவும் சிறந்தது.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Spice Lovers", ta: "காரம் விரும்புபவர்கள்" },
          reason: {
            en: "Unique tangy and spicy taste.",
            ta: "தனித்துவமான புளிப்பு மற்றும் கார சுவை.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Mix with Rice", ta: "சாதத்தில் பிசைய" },
          desc: {
            en: "Mix with hot rice and ghee.",
            ta: "சூடான சாதத்தில் நெய் விட்டு பிசைந்து சாப்பிடலாம்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Appetite", ta: "பசி" },
        desc: {
          en: "Improves overall digestion and hunger.",
          ta: "பசியைத் தூண்டி செரிமானத்தை சீராக்கும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Andhra Naturals", ta: "ஆந்திரா நேச்சுரல்ஸ்" },
      isVerified: true,
      fssai: "12345678901252",
      address: { en: "Chennai, TN", ta: "சென்னை, தமிழ்நாடு" },
      soilAudit: { en: "N/A", ta: "N/A" },
      recentInspection: {
        en: "Freshly cooked",
        ta: "புதிதாக சமைக்கப்பட்டது",
      },
      naturalInputs: {
        en: "Fresh Gongura leaves",
        ta: "புதிய புளிச்சக்கீரை",
      },
    },
    usageAndStorage: {
      cookingRatio: { en: "N/A", ta: "N/A" },
      cookingTime: { en: "Ready to eat", ta: "உண்ணத் தயார்" },
      bestFor: { en: "Hot Rice, Dosa", ta: "சூடான சாதம், தோசை" },
      storageTips: {
        en: "Refrigerate after opening",
        ta: "திறந்த பின் ஃப்ரிட்ஜில் வைக்கவும்",
      },
    },
  },
  {
    id: "prod__030",
    categoryId: "cat_pickles",
    categoryName: { en: "Pickles & Thokku", ta: "ஊறுகாய் & தொக்கு" },
    name: { en: "Tomato Thokku (Thakkali)", ta: "தக்காளி தொக்கு" },
    subtitle: {
      en: "Homestyle Country Tomato Relish",
      ta: "நாட்டுத் தக்காளி கொண்டு வீட்டில் செய்தது",
    },
    images: [
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/08/tomato-thokku-thakkali-thokku.jpg",
    ],
    tags: [
      { en: "No Preservatives", ta: "பதப்படுத்திகள் இல்லை" },
      { en: "Travel Friendly", ta: "பயணத்திற்கு ஏற்றது" },
    ],
    variants: [
      {
        weight: { en: "250 g", ta: "250 கிராம்" },
        price: 130,
        mrp: 160,
        discountPercent: 18,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Skin Health", ta: "சரும நலம்" },
          value: { en: "Lycopene", ta: "லைகோபீன்" },
        },
      ],
      benefits: [
        {
          title: { en: "Rich Antioxidants", ta: "ஆன்டிஆக்ஸிடன்ட்கள்" },
          desc: {
            en: "Tomatoes cooked in oil release more lycopene.",
            ta: "எண்ணெயில் வதக்கிய தக்காளி அதிக சத்துக்களை தரும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Kids & Adults", ta: "அனைவரும்" },
          reason: {
            en: "Perfect side for breakfast.",
            ta: "காலை உணவுக்கு சிறந்த துணை.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Travel Companion", ta: "பயணத் துணை" },
          desc: {
            en: "Best mixed with rice for long train journeys.",
            ta: "ரயில் பயணங்களுக்கு சாதத்தில் பிசைந்து எடுத்துச் செல்ல ஏற்றது.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Cooling", ta: "குளிர்ச்சி" },
        desc: {
          en: "Balances body heat.",
          ta: "உடல் சூட்டை சமநிலைப்படுத்தும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Paati's Kitchen", ta: "பாட்டி கிச்சன்" },
      isVerified: true,
      fssai: "12345678901253",
      address: { en: "Coimbatore, TN", ta: "கோயம்புத்தூர், தமிழ்நாடு" },
      soilAudit: { en: "N/A", ta: "N/A" },
      recentInspection: {
        en: "Freshly made",
        ta: "புதிதாக தயாரிக்கப்பட்டது",
      },
      naturalInputs: {
        en: "Country tomatoes, garlic",
        ta: "நாட்டுத் தக்காளி, பூண்டு",
      },
    },
    usageAndStorage: {
      cookingRatio: { en: "N/A", ta: "N/A" },
      cookingTime: { en: "Ready to eat", ta: "உண்ணத் தயார்" },
      bestFor: {
        en: "Idli, Dosa, Chapati",
        ta: "இட்லி, தோசை, சப்பாத்தி",
      },
      storageTips: {
        en: "Keep refrigerated",
        ta: "ஃப்ரிட்ஜில் வைக்கவும்",
      },
    },
  },
  {
    id: "prod__031",
    categoryId: "cat_dals",
    categoryName: { en: "Dals & Pulses", ta: "பருப்பு வகைகள்" },
    name: {
      en: "Unpolished Toor Dal",
      ta: "பட்டை தீட்டப்படாத துவரம் பருப்பு",
    },
    subtitle: {
      en: "Native Red Soil Cultivation",
      ta: "நாட்டு ரகம் - செம்மண் விளைச்சல்",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_aW9OOT0AjL3oODBsHOxFkYaSaXuF0DCp20KaNJ9m7bcilcMk0l_x2Es&s=10",
    ],
    tags: [
      { en: "Unpolished", ta: "பட்டை தீட்டப்படாதது" },
      { en: "Protein Rich", ta: "அதிக புரதம்" },
    ],
    variants: [
      {
        weight: { en: "1 kg", ta: "1 கிலோ" },
        price: 180,
        mrp: 210,
        discountPercent: 14,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Muscle Repair", ta: "தசை சீரமைப்பு" },
          value: { en: "High Protein", ta: "புரதம்" },
        },
      ],
      benefits: [
        {
          title: { en: "Retains Nutrients", ta: "சத்துக்கள் நிறைந்தது" },
          desc: {
            en: "Retains the fiber-rich outer layer.",
            ta: "நார்ச்சத்து அப்படியே உள்ளது.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Vegetarians", ta: "சைவர்கள்" },
          reason: {
            en: "Primary source of daily protein.",
            ta: "தினசரி புரதத் தேவைக்கு.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "First Food", ta: "முதல் உணவு" },
          desc: {
            en: "Mashed dal with ghee is for babies.",
            ta: "குழந்தைகளுக்கான முதல் உணவு.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Balanced Diet", ta: "சமச்சீர் உணவு" },
        desc: {
          en: "Provides sustained energy.",
          ta: "நாள் முழுவதும் ஆற்றல் தரும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Kamaraj Farms", ta: "காமராஜ் பண்ணை" },
      isVerified: true,
      fssai: "N/A",
      address: { en: "Virudhunagar, TN", ta: "விருதுநகர், தமிழ்நாடு" },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: { en: "2 months ago", ta: "2 மாதங்களுக்கு முன்" },
      naturalInputs: {
        en: "No chemical polish",
        ta: "ரசாயன பாலிஷ் இல்லை",
      },
    },
    usageAndStorage: {
      cookingRatio: {
        en: "1 cup : 3 cups water",
        ta: "1 கப் : 3 கப் தண்ணீர்",
      },
      cookingTime: { en: "4-5 whistles", ta: "4-5 விசில்" },
      bestFor: { en: "Sambar, Rasam", ta: "சாம்பார், ரசம்" },
      storageTips: {
        en: "Store with dry chillies",
        ta: "வற மிளகாய் சேர்த்து வைக்கவும்",
      },
    },
  },
  {
    id: "prod__032",
    categoryId: "cat_dals",
    categoryName: { en: "Dals & Pulses", ta: "பருப்பு வகைகள்" },
    name: { en: "Whole Black Urad Dal", ta: "முழு கருப்பு உளுந்து" },
    subtitle: {
      en: "With Skin - Bone Strengthening",
      ta: "தொலியுடன் கூடிய உளுந்து - எலும்பு பலம்",
    },
    images: ["https://m.media-amazon.com/images/I/81eUKsofNaL.jpg"],
    tags: [
      { en: "Bone Health", ta: "எலும்பு நலம்" },
      { en: "With Skin", ta: "தொலியுடன்" },
    ],
    variants: [
      {
        weight: { en: "1 kg", ta: "1 கிலோ" },
        price: 160,
        mrp: 190,
        discountPercent: 15,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Bone Density", ta: "எலும்பு அடர்த்தி" },
          value: { en: "Calcium & Phosphorus", ta: "கால்சியம்" },
        },
      ],
      benefits: [
        {
          title: { en: "Women's Health", ta: "பெண்கள் நலம்" },
          desc: {
            en: "Strengthens the pelvic region.",
            ta: "இடுப்பு எலும்புகளை வலுவாக்கும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Women", ta: "பெண்கள்" },
          reason: {
            en: "Best during puberty and pregnancy.",
            ta: "பூப்பெய்தும் மற்றும் கர்ப்ப காலத்தில் நல்லது.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Ulundhu Kali", ta: "உளுந்தங்களி" },
          desc: {
            en: "Traditional sweet for hip strength.",
            ta: "இடுப்பு வலுவிற்கான பாரம்பரிய உணவு.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Cooling", ta: "குளிர்ச்சி" },
        desc: {
          en: "Reduces internal body heat.",
          ta: "உள் சூட்டைத் தணிக்கும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Pudukaveri Farms", ta: "புதுகாவேரி பண்ணை" },
      isVerified: true,
      fssai: "N/A",
      address: { en: "Thanjavur, TN", ta: "தஞ்சாவூர், தமிழ்நாடு" },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: {
        en: "Harvested fresh",
        ta: "புதிதாக அறுவடை செய்யப்பட்டது",
      },
      naturalInputs: { en: "Organic manure", ta: "இயற்கை உரம்" },
    },
    usageAndStorage: {
      cookingRatio: { en: "As required", ta: "தேவைக்கேற்ப" },
      cookingTime: { en: "Needs soaking", ta: "ஊறவைக்க வேண்டும்" },
      bestFor: { en: "Kali, Idli batter", ta: "களி, இட்லி மாவு" },
      storageTips: { en: "Keep dry", ta: "ஈரமில்லாமல் வைக்கவும்" },
    },
  },
  {
    id: "prod__033",
    categoryId: "cat_dals",
    categoryName: { en: "Dals & Pulses", ta: "பருப்பு வகைகள்" },
    name: { en: "Green Gram Whole", ta: "பச்சை பயறு" },
    subtitle: {
      en: "Sproutable Native Green Gram",
      ta: "முளைகட்டக்கூடிய நாட்டு பச்சை பயறு",
    },
    images: [
      "https://tiimg.tistatic.com/fp/1/009/557/green-gram-whole-040.jpg",
    ],
    tags: [
      { en: "Sproutable", ta: "முளைகட்டக்கூடியது" },
      { en: "Easy Digest", ta: "எளிதில் செரிமானமாகும்" },
    ],
    variants: [
      {
        weight: { en: "1 kg", ta: "1 கிலோ" },
        price: 140,
        mrp: 160,
        discountPercent: 12,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Immunity", ta: "நோய் எதிர்ப்பு" },
          value: { en: "Vitamins A, B, C, E", ta: "வைட்டமின்கள்" },
        },
      ],
      benefits: [
        {
          title: { en: "Weight Loss", ta: "எடை குறைப்பு" },
          desc: {
            en: "Low fat and high protein.",
            ta: "குறைந்த கொழுப்பு, அதிக புரதம்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Everyone", ta: "அனைவரும்" },
          reason: {
            en: "Very easy on the stomach.",
            ta: "வயிற்றுக்கு மிகவும் லேசானது.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Sprouting", ta: "முளைகட்டுதல்" },
          desc: {
            en: "Sprout it to double its nutrition.",
            ta: "முளைகட்டினால் சத்துக்கள் இருமடங்காகும்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Skin Glow", ta: "சரும பொலிவு" },
        desc: {
          en: "Can be used as herbal bath powder.",
          ta: "குளியல் பொடியாகவும் பயன்படுத்தலாம்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Gokul Naturals", ta: "கோகுல் நேச்சுரல்ஸ்" },
      isVerified: true,
      fssai: "N/A",
      address: { en: "Madurai, TN", ta: "மதுரை, தமிழ்நாடு" },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: {
        en: "Sorted and cleaned",
        ta: "சுத்தம் செய்யப்பட்டது",
      },
      naturalInputs: { en: "Pesticide free", ta: "பூச்சிக்கொல்லி அற்றது" },
    },
    usageAndStorage: {
      cookingRatio: {
        en: "1 cup : 2 cups water",
        ta: "1 கப் : 2 கப் தண்ணீர்",
      },
      cookingTime: { en: "3 whistles", ta: "3 விசில்" },
      bestFor: {
        en: "Sundal, Pasi Paruppu Payasam",
        ta: "சுண்டல், பாயசம்",
      },
      storageTips: {
        en: "Add neem leaves to store",
        ta: "வேப்பிலை சேர்த்து வைக்கவும்",
      },
    },
  },
  {
    id: "prod__034",
    categoryId: "cat_dals",
    categoryName: { en: "Dals & Pulses", ta: "பருப்பு வகைகள்" },
    name: { en: "Roasted Bengal Gram", ta: "பொட்டுக்கடலை" },
    subtitle: {
      en: "Crispy Chutney Dal",
      ta: "மொறுமொறுப்பான சட்னி கடலை",
    },
    images: [
      "https://www.govindjee.store/cdn/shop/products/chana-sikaroasted-gram-390564.jpg?v=1709970890",
    ],
    tags: [
      { en: "Ready to eat", ta: "உண்ணத் தயார்" },
      { en: "Low Calorie", ta: "குறைந்த கலோரி" },
    ],
    variants: [
      {
        weight: { en: "500 g", ta: "500 கிராம்" },
        price: 60,
        mrp: 80,
        discountPercent: 25,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Energy", ta: "ஆற்றல்" },
          value: { en: "Complex Carbs", ta: "கார்போஹைட்ரேட்" },
        },
      ],
      benefits: [
        {
          title: { en: "Heart Health", ta: "இதய நலம்" },
          desc: {
            en: "Contains good fats.",
            ta: "நல்ல கொழுப்புகள் உள்ளன.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Kids", ta: "குழந்தைகள்" },
          reason: {
            en: "Healthy evening snack.",
            ta: "ஆரோக்கியமான மாலை சிற்றுண்டி.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Instant Energy", ta: "உடனடி ஆற்றல்" },
          desc: {
            en: "Eat with jaggery for instant energy.",
            ta: "வெல்லத்துடன் சேர்த்து உண்டால் உடனடி ஆற்றல்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Pitta Balance", ta: "பித்த சமநிலை" },
        desc: { en: "Reduces acidity.", ta: "அமிலத்தன்மையை குறைக்கும்." },
      },
    },
    farmerVerification: {
      grownBy: { en: "Kovai Roasters", ta: "கோவை ரோஸ்டர்ஸ்" },
      isVerified: true,
      fssai: "N/A",
      address: { en: "Coimbatore, TN", ta: "கோயம்புத்தூர், தமிழ்நாடு" },
      soilAudit: { en: "N/A", ta: "N/A" },
      recentInspection: {
        en: "Freshly roasted",
        ta: "புதிதாக வறுக்கப்பட்டது",
      },
      naturalInputs: {
        en: "Roasted in sand traditionally",
        ta: "பாரம்பரிய முறையில் மணலில் வறுக்கப்பட்டது",
      },
    },
    usageAndStorage: {
      cookingRatio: { en: "N/A", ta: "N/A" },
      cookingTime: { en: "Ready to eat", ta: "உண்ணத் தயார்" },
      bestFor: { en: "Chutney, Snack", ta: "சட்னி, சிற்றுண்டி" },
      storageTips: {
        en: "Airtight container",
        ta: "காற்று புகாத டப்பாவில் வைக்கவும்",
      },
    },
  },
  {
    id: "prod__035",
    categoryId: "cat_dals",
    categoryName: { en: "Dals & Pulses", ta: "பருப்பு வகைகள்" },
    name: { en: "Horse Gram (Kollu)", ta: "கொள்ளு" },
    subtitle: {
      en: "Fat Burner Miracle Pulse",
      ta: "கொழுப்பை கரைக்கும் அற்புத பயறு",
    },
    images: [
      "https://i0.wp.com/shudhmarwadi.com/wp-content/uploads/2025/01/horsegram-1.jpg?fit=850%2C850&ssl=1",
    ],
    tags: [
      { en: "Weight Loss", ta: "எடை குறைப்பு" },
      { en: "Fat Burner", ta: "கொழுப்பு கரைப்பான்" },
    ],
    variants: [
      {
        weight: { en: "500 g", ta: "500 கிராம்" },
        price: 70,
        mrp: 90,
        discountPercent: 22,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Fat Loss", ta: "கொழுப்பு குறைப்பு" },
          value: { en: "High Polyphenols", ta: "பாலிபினால்கள்" },
        },
      ],
      benefits: [
        {
          title: { en: "Reduces Belly Fat", ta: "தொப்பை குறையும்" },
          desc: {
            en: "Generates heat to burn fat.",
            ta: "கொழுப்பை கரைக்க உடல் சூட்டை அதிகரிக்கும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: {
            en: "Weight Watchers",
            ta: "எடை குறைக்க நினைப்பவர்கள்",
          },
          reason: {
            en: "Aids in faster metabolism.",
            ta: "வளர்சிதை மாற்றத்தை துரிதப்படுத்தும்.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Cold Remedy", ta: "சளிக்கு மருந்து" },
          desc: {
            en: "Kollu rasam is the best remedy for common cold.",
            ta: "சளி, இருமலுக்கு கொள்ளு ரசம் சிறந்த மருந்து.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Vata Balancer", ta: "வாத சமநிலை" },
        desc: { en: "Reduces body pains.", ta: "உடல் வலிகளை குறைக்கும்." },
      },
    },
    farmerVerification: {
      grownBy: { en: "Erode Organics", ta: "ஈரோடு ஆர்கானிக்ஸ்" },
      isVerified: true,
      fssai: "N/A",
      address: { en: "Erode, TN", ta: "ஈரோடு, தமிழ்நாடு" },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: {
        en: "Harvested fresh",
        ta: "புதிதாக அறுவடை செய்யப்பட்டது",
      },
      naturalInputs: { en: "Dry land farming", ta: "மானாவாரி சாகுபடி" },
    },
    usageAndStorage: {
      cookingRatio: {
        en: "1 cup : 4 cups water",
        ta: "1 கப் : 4 கப் தண்ணீர்",
      },
      cookingTime: {
        en: "6-7 whistles (Soak well)",
        ta: "6-7 விசில் (நன்கு ஊறவைக்கவும்)",
      },
      bestFor: { en: "Rasam, Sundal", ta: "ரசம், சுண்டல்" },
      storageTips: { en: "Keep dry", ta: "உலர்ந்த இடத்தில் வைக்கவும்" },
    },
  },

  {
    id: "prod__036",
    categoryId: "cat_jaggery",
    categoryName: {
      en: "Jaggery & Karupatti",
      ta: "வெல்லம் & கருப்பட்டி",
    },
    name: {
      en: "Palm Jaggery (Karupatti)",
      ta: "பனை வெல்லம் (கருப்பட்டி)",
    },
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2025/6/519448255/UC/NB/NW/104695777/palm-jaggery-karupatti.jpg",
    ],
    subtitle: {
      en: "Pure Udangudi Karupatti",
      ta: "சுத்தமான உடன்குடி கருப்பட்டி",
    },
    tags: [
      { en: "Refined Sugar Free", ta: "சர்க்கரை அற்றது" },
      { en: "Iron Rich", ta: "இரும்புச்சத்து" },
    ],
    variants: [
      {
        weight: { en: "500 g", ta: "500 கிராம்" },
        price: 220,
        mrp: 250,
        discountPercent: 12,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Blood Purifier", ta: "ரத்த சுத்தி" },
          value: { en: "Iron & Minerals", ta: "இரும்பு & தாதுக்கள்" },
        },
      ],
      benefits: [
        {
          title: { en: "Cleanses System", ta: "உடல் தூய்மை" },
          desc: {
            en: "Detoxifies the respiratory tract.",
            ta: "சுவாசப் பாதையை சுத்தப்படுத்தும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Women", ta: "பெண்கள்" },
          reason: {
            en: "Reduces menstrual cramps.",
            ta: "மாதவிடாய் வலியை குறைக்கும்.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Post-Meal Sweet", ta: "உணவுக்குப் பின்" },
          desc: { en: "Aids digestion.", ta: "செரிமானத்திற்கு உதவும்." },
        },
      ],
      siddhaReference: {
        title: { en: "Cough Relief", ta: "இருமல் நிவாரணம்" },
        desc: {
          en: "Best combined with dry ginger.",
          ta: "சுக்குடன் சேர்த்து சாப்பிட சளி தீரும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: {
        en: "Udangudi Palm Society",
        ta: "உடன்குடி பனை வாரியம்",
      },
      isVerified: true,
      fssai: "12345678901254",
      address: { en: "Thoothukudi, TN", ta: "தூத்துக்குடி, தமிழ்நாடு" },
      soilAudit: { en: "N/A", ta: "N/A" },
      recentInspection: {
        en: "Traditionally extracted",
        ta: "பாரம்பரிய முறையில் காய்ச்சப்பட்டது",
      },
      naturalInputs: { en: "100% Palm sap", ta: "100% பனை பதனீர்" },
    },
    usageAndStorage: {
      cookingRatio: { en: "As per taste", ta: "சுவைக்கேற்ப" },
      cookingTime: { en: "Melts easily", ta: "எளிதில் கரையும்" },
      bestFor: { en: "Coffee, Sweets", ta: "காபி, இனிப்புகள்" },
      storageTips: {
        en: "Keep in a dry place",
        ta: "உலர்ந்த இடத்தில் வைக்கவும்",
      },
    },
  },
  {
    id: "prod__037",
    categoryId: "cat_jaggery",
    categoryName: {
      en: "Jaggery & Karupatti",
      ta: "வெல்லம் & கருப்பட்டி",
    },
    name: {
      en: "Cane Jaggery Powder (Nattu Sakkarai)",
      ta: "நாட்டுச் சர்க்கரை",
    },
    subtitle: {
      en: "Chemical Free Sweetener",
      ta: "ரசாயனம் கலக்காத இயற்கை இனிப்பு",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqWUej8x_zX4yF2nPDvL_hhwdRzcG7VGF3hfUVvZdGHZwyWmYKVQ88lVEk&s=10",
    ],
    tags: [
      { en: "Chemical Free", ta: "ரசாயனம் அற்றது" },
      { en: "Daily Use", ta: "தினசரி பயன்பாடு" },
    ],
    variants: [
      {
        weight: { en: "1 kg", ta: "1 கிலோ" },
        price: 120,
        mrp: 140,
        discountPercent: 14,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Energy", ta: "ஆற்றல்" },
          value: { en: "Complex Carbs", ta: "கார்போஹைட்ரேட்" },
        },
      ],
      benefits: [
        {
          title: { en: "Anemia Prevention", ta: "ரத்த சோகை தடுப்பு" },
          desc: { en: "Rich in iron.", ta: "இரும்புச்சத்து நிறைந்தது." },
        },
      ],
      bestFor: [
        {
          audience: { en: "Everyone", ta: "அனைவரும்" },
          reason: {
            en: "Best alternative to white sugar.",
            ta: "வெள்ளை சர்க்கரைக்கு சிறந்த மாற்று.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Tea Companion", ta: "தேநீர் தோழன்" },
          desc: {
            en: "Improves the taste of traditional tea.",
            ta: "டீயின் சுவையை கூட்டும்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Digestive", ta: "செரிமானம்" },
        desc: {
          en: "Activates digestive enzymes.",
          ta: "செரிமான நொதிகளை தூண்டும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Kavindapadi Sugar Mills", ta: "கவுந்தப்பாடி ஆலை" },
      isVerified: true,
      fssai: "12345678901255",
      address: { en: "Erode, TN", ta: "ஈரோடு, தமிழ்நாடு" },
      soilAudit: { en: "Passed.", ta: "தேர்ச்சி." },
      recentInspection: {
        en: "Freshly crushed",
        ta: "புதிதாக காய்ச்சப்பட்டது",
      },
      naturalInputs: {
        en: "No sulphur added",
        ta: "சல்பர் சேர்க்கப்படவில்லை",
      },
    },
    usageAndStorage: {
      cookingRatio: { en: "As per taste", ta: "சுவைக்கேற்ப" },
      cookingTime: { en: "Instant dissolve", ta: "உடனடியாக கரையும்" },
      bestFor: { en: "Tea, Milk, Sweets", ta: "டீ, பால், இனிப்புகள்" },
      storageTips: {
        en: "Store in airtight jar to avoid moisture",
        ta: "ஈரப்பதம் படாமல் காற்று புகாத டப்பாவில் வைக்கவும்",
      },
    },
  },

  {
    id: "prod__038",
    categoryId: "cat_snacks",
    categoryName: { en: "Organic Snacks", ta: "இயற்கை தின்பண்டங்கள்" },
    name: { en: "Millet Mixture", ta: "சிறுதானிய மிக்சர்" },
    subtitle: {
      en: "Guilt-free Crispy Snack",
      ta: "ஆரோக்கியமான மாலை நேர சிற்றுண்டி",
    },
    images: [
      "https://www.milletmaagicmeal.in/cdn/shop/files/WhatsApp_Image_2024-08-27_at_11.23.32_AM_2.jpg?v=1724751850",
    ],
    tags: [
      { en: "Maida Free", ta: "மைதா அற்றது" },
      { en: "Wood Pressed Oil", ta: "செக்கு எண்ணெய்" },
    ],
    variants: [
      {
        weight: { en: "250 g", ta: "250 கிராம்" },
        price: 90,
        mrp: 110,
        discountPercent: 18,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Energy", ta: "ஆற்றல்" },
          value: { en: "Complex Carbs", ta: "கார்போஹைட்ரேட்" },
        },
      ],
      benefits: [
        {
          title: { en: "Healthy Snacking", ta: "ஆரோக்கிய சிற்றுண்டி" },
          desc: {
            en: "No palm oil, no artificial colors.",
            ta: "பாம் ஆயில், செயற்கை நிறமிகள் இல்லை.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Kids", ta: "குழந்தைகள்" },
          reason: {
            en: "Alternative to junk food.",
            ta: "ஜங்க் உணவுகளுக்கு சிறந்த மாற்று.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Tea Time", ta: "தேநீர் நேரம்" },
          desc: {
            en: "Perfect for evening Chukku Malli coffee.",
            ta: "சுக்கு மல்லி காபிக்கு ஏற்றது.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Nourishing", ta: "ஊட்டச்சத்து" },
        desc: {
          en: "Made from traditional grains.",
          ta: "பாரம்பரிய தானியங்களால் ஆனது.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Nala Snacks", ta: "நள சிற்றுண்டி" },
      isVerified: true,
      fssai: "12345678901256",
      address: { en: "Coimbatore, TN", ta: "கோயம்புத்தூர், தமிழ்நாடு" },
      soilAudit: { en: "N/A", ta: "N/A" },
      recentInspection: {
        en: "Made fresh weekly",
        ta: "வாரம் ஒருமுறை தயாரிக்கப்படுகிறது",
      },
      naturalInputs: {
        en: "Millet flour, groundnut oil",
        ta: "சிறுதானிய மாவு, கடலை எண்ணெய்",
      },
    },
    usageAndStorage: {
      cookingRatio: { en: "N/A", ta: "N/A" },
      cookingTime: { en: "Ready to eat", ta: "உண்ணத் தயார்" },
      bestFor: { en: "Evening snacks", ta: "மாலை நேர சிற்றுண்டி" },
      storageTips: {
        en: "Close zip-lock tightly",
        ta: "ஜிப்-லாக் கவரை சரியாக மூடவும்",
      },
    },
  },
  {
    id: "prod__039",
    categoryId: "cat_snacks",
    categoryName: { en: "Organic Snacks", ta: "இயற்கை தின்பண்டங்கள்" },
    name: { en: "Peanut Candy (Kadalai Mittai)", ta: "கடலை மிட்டாய்" },
    subtitle: {
      en: "Kovilpatti Style with Jaggery",
      ta: "கோவில்பட்டி சுவையில் கருப்பட்டி மிட்டாய்",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIRcWsA32RJIFZwvst96TN9O6jPHlJKBb9zOwCcDzvnN-tkN4jbgnWoyrx&s=10",
    ],
    tags: [
      { en: "Protein Rich", ta: "அதிக புரதம்" },
      { en: "Iron Rich", ta: "இரும்புச்சத்து" },
    ],
    variants: [
      {
        weight: { en: "250 g", ta: "250 கிராம்" },
        price: 80,
        mrp: 100,
        discountPercent: 20,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Muscle Building", ta: "தசை வளர்ச்சி" },
          value: { en: "Protein & Iron", ta: "புரதம் & இரும்பு" },
        },
      ],
      benefits: [
        {
          title: { en: "Healthy Weight", ta: "ஆரோக்கியமான எடை" },
          desc: {
            en: "Good fats for kids' growth.",
            ta: "குழந்தைகளின் வளர்ச்சிக்கு உதவும் நல்ல கொழுப்பு.",
          },
        },
      ],
      bestFor: [
        {
          audience: {
            en: "Kids & Athletes",
            ta: "குழந்தைகள் & விளையாட்டு வீரர்கள்",
          },
          reason: { en: "Energy dense.", ta: "ஆற்றல் நிறைந்தது." },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Daily Snack", ta: "தினசரி சிற்றுண்டி" },
          desc: {
            en: "One piece a day keeps anemia away.",
            ta: "தினம் ஒரு துண்டு உண்டால் ரத்த சோகை வராது.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Vata Pacifier", ta: "வாத சமநிலை" },
        desc: { en: "Nourishes the body.", ta: "உடலுக்கு ஊட்டம் தரும்." },
      },
    },
    farmerVerification: {
      grownBy: {
        en: "Kovilpatti Naturals",
        ta: "கோவில்பட்டி நேச்சுரல்ஸ்",
      },
      isVerified: true,
      fssai: "12345678901257",
      address: { en: "Thoothukudi, TN", ta: "தூத்துக்குடி, தமிழ்நாடு" },
      soilAudit: { en: "N/A", ta: "N/A" },
      recentInspection: {
        en: "Freshly prepared",
        ta: "புதிதாக தயாரிக்கப்பட்டது",
      },
      naturalInputs: {
        en: "Native peanuts, pure jaggery",
        ta: "நாட்டு மல்லாட்டை, சுத்தமான வெல்லம்",
      },
    },
    usageAndStorage: {
      cookingRatio: { en: "N/A", ta: "N/A" },
      cookingTime: { en: "Ready to eat", ta: "உண்ணத் தயார்" },
      bestFor: {
        en: "Snacks, Sweet cravings",
        ta: "சிற்றுண்டி, இனிப்பு ஆசைக்கு",
      },
      storageTips: { en: "Airtight container", ta: "காற்று புகாத டப்பா" },
    },
  },
  {
    id: "prod__040",
    categoryId: "cat_snacks",
    categoryName: { en: "Organic Snacks", ta: "இயற்கை தின்பண்டங்கள்" },
    name: { en: "Ragi Murukku", ta: "ராகி முறுக்கு" },
    subtitle: {
      en: "Crunchy Calcium Rich Snack",
      ta: "மொறுமொறுப்பான கால்சியம் நிறைந்த முறுக்கு",
    },
    images: [
      "https://www.sharmispassions.com/wp-content/uploads/2015/10/RagiMurukku.jpg",
    ],
    tags: [
      { en: "Calcium Rich", ta: "கால்சியம் நிறைந்தது" },
      {
        en: "Baked/Fried in Cold Pressed Oil",
        ta: "செக்கு எண்ணெயில் பொரித்தது",
      },
    ],
    variants: [
      {
        weight: { en: "200 g", ta: "200 கிராம்" },
        price: 85,
        mrp: 100,
        discountPercent: 15,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Bone Health", ta: "எலும்பு நலம்" },
          value: { en: "Calcium", ta: "கால்சியம்" },
        },
      ],
      benefits: [
        {
          title: { en: "Strong Teeth", ta: "பற்கள் உறுதி" },
          desc: {
            en: "Ragi strengthens bones and teeth.",
            ta: "ராகி எலும்பு மற்றும் பற்களை வலுவாக்கும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Everyone", ta: "அனைவரும்" },
          reason: {
            en: "Healthy alternative to regular murukku.",
            ta: "சாதாரண முறுக்குக்கு சிறந்த மாற்று.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Festival Treat", ta: "பண்டிகை இனிப்பு" },
          desc: {
            en: "A must-have for Diwali.",
            ta: "தீபாவளிக்கு அவசியம் செய்யக்கூடியது.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Cooling", ta: "குளிர்ச்சி" },
        desc: {
          en: "Ragi cools the body.",
          ta: "ராகி உடலுக்கு குளிர்ச்சி தரும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Grama Suvai", ta: "கிராம சுவை" },
      isVerified: true,
      fssai: "12345678901258",
      address: { en: "Salem, TN", ta: "சேலம், தமிழ்நாடு" },
      soilAudit: { en: "N/A", ta: "N/A" },
      recentInspection: {
        en: "Freshly fried",
        ta: "புதிதாக பொரிக்கப்பட்டது",
      },
      naturalInputs: {
        en: "Ragi flour, Sesame oil",
        ta: "ராகி மாவு, நல்லெண்ணெய்",
      },
    },
    usageAndStorage: {
      cookingRatio: { en: "N/A", ta: "N/A" },
      cookingTime: { en: "Ready to eat", ta: "உண்ணத் தயார்" },
      bestFor: { en: "Evening snack", ta: "மாலை நேர சிற்றுண்டி" },
      storageTips: {
        en: "Keep airtight to retain crunch",
        ta: "மொறுமொறுப்பு மாறாமல் இருக்க மூடி வைக்கவும்",
      },
    },
  },
  {
    id: "prod__041",
    categoryId: "cat_snacks",
    categoryName: { en: "Organic Snacks", ta: "இயற்கை தின்பண்டங்கள்" },
    name: { en: "Kambu Ribbon Pakoda", ta: "கம்பு ரிப்பன் பக்கோடா" },
    subtitle: {
      en: "Iron Rich Pearl Millet Crisps",
      ta: "இரும்புச்சத்து மிகுந்த கம்பு சிப்ஸ்",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-eF4-fLszGU_8saPpk4RmAelcETGFZp_S6644NYgKuuimuPwPixoDid6P&s=10",
    ],
    tags: [
      { en: "Iron Rich", ta: "இரும்புச்சத்து" },
      { en: "Vegan", ta: "வீகன்" },
    ],
    variants: [
      {
        weight: { en: "200 g", ta: "200 கிராம்" },
        price: 85,
        mrp: 100,
        discountPercent: 15,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Energy", ta: "ஆற்றல்" },
          value: { en: "Iron & Carbs", ta: "இரும்பு & மாவுச்சத்து" },
        },
      ],
      benefits: [
        {
          title: { en: "Beats Fatigue", ta: "சோர்வு நீங்கும்" },
          desc: {
            en: "Iron helps carry oxygen in blood.",
            ta: "ரத்தத்தில் ஆக்சிஜனை அதிகரிக்கும்.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Women & Kids", ta: "பெண்கள் & குழந்தைகள்" },
          reason: {
            en: "Boosts iron levels deliciously.",
            ta: "சுவையான முறையில் இரும்புச்சத்தை கூட்டும்.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Afternoon Snack", ta: "மதிய சிற்றுண்டி" },
          desc: {
            en: "Great with buttermilk.",
            ta: "மோருடன் சாப்பிட சுவையாக இருக்கும்.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Stomach Health", ta: "வயிற்று நலம்" },
        desc: {
          en: "Kambu heals stomach ulcers.",
          ta: "கம்பு வயிற்றுப் புண்ணை ஆற்றும்.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Millet Magic", ta: "மில்லெட் மேஜிக்" },
      isVerified: true,
      fssai: "12345678901259",
      address: { en: "Madurai, TN", ta: "மதுரை, தமிழ்நாடு" },
      soilAudit: { en: "N/A", ta: "N/A" },
      recentInspection: {
        en: "Freshly prepared",
        ta: "புதிதாக தயாரிக்கப்பட்டது",
      },
      naturalInputs: {
        en: "Kambu flour, Groundnut oil",
        ta: "கம்பு மாவு, கடலை எண்ணெய்",
      },
    },
    usageAndStorage: {
      cookingRatio: { en: "N/A", ta: "N/A" },
      cookingTime: { en: "Ready to eat", ta: "உண்ணத் தயார்" },
      bestFor: { en: "Snack box", ta: "ஸ்நாக் பாக்ஸ்" },
      storageTips: { en: "Airtight container", ta: "காற்று புகாத டப்பா" },
    },
  },
  {
    id: "prod__042",
    categoryId: "cat_snacks",
    categoryName: { en: "Organic Snacks", ta: "இயற்கை தின்பண்டங்கள்" },
    name: { en: "Thinai Laddu (Foxtail Millet Laddu)", ta: "தினை லட்டு" },
    subtitle: {
      en: "Sweetened with Palm Jaggery",
      ta: "கருப்பட்டி சேர்த்த சுவையான லட்டு",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv08TUf7bt2x20LbJ3RqfzhDd0jp6iqbWynjk0LbmRa6EjhUR7kzS63Pc&s=10",
    ],
    tags: [
      { en: "Refined Sugar Free", ta: "சர்க்கரை அற்றது" },
      { en: "Energy Ball", ta: "ஆற்றல் உருண்டை" },
    ],
    variants: [
      {
        weight: {
          en: "250 g (Approx 8 pcs)",
          ta: "250 கிராம் (சுமார் 8 உருண்டை)",
        },
        price: 140,
        mrp: 160,
        discountPercent: 12,
        inStock: true,
      },
    ],
    badges: ["100_natural", "farm_fresh", "fast_delivery", "no_cold_storage"],
    aiNutriInfo: {
      nutritionalProfile: [
        {
          aspect: { en: "Nerve Health", ta: "நரம்பு நலம்" },
          value: { en: "Vitamin B12", ta: "வைட்டமின் B12" },
        },
      ],
      benefits: [
        {
          title: { en: "Sustained Energy", ta: "நீடித்த ஆற்றல்" },
          desc: {
            en: "Perfect mix of complex carbs and good fats.",
            ta: "நல்ல கொழுப்பு மற்றும் மாவுச்சத்து நிறைந்தது.",
          },
        },
      ],
      bestFor: [
        {
          audience: { en: "Sweet Lovers", ta: "இனிப்பு பிரியர்கள்" },
          reason: {
            en: "Guilt-free dessert.",
            ta: "குற்ற உணர்ச்சியற்ற இனிப்பு.",
          },
        },
      ],
      grandmaWisdom: [
        {
          title: { en: "Murugan's Offering", ta: "முருகன் பிரசாதம்" },
          desc: {
            en: "Thinai and honey is a divine combination.",
            ta: "தினையும் தேனும் தெய்வீகமான கலவை.",
          },
        },
      ],
      siddhaReference: {
        title: { en: "Lung Health", ta: "நுரையீரல் நலம்" },
        desc: {
          en: "Good for respiratory system.",
          ta: "சுவாச மண்டலத்திற்கு நல்லது.",
        },
      },
    },
    farmerVerification: {
      grownBy: { en: "Chettinad Sweets", ta: "செட்டிநாடு ஸ்வீட்ஸ்" },
      isVerified: true,
      fssai: "12345678901260",
      address: { en: "Karaikudi, TN", ta: "காரைக்குடி, தமிழ்நாடு" },
      soilAudit: { en: "N/A", ta: "N/A" },
      recentInspection: {
        en: "Hand rolled daily",
        ta: "தினமும் கைகளால் உருட்டப்படுகிறது",
      },
      naturalInputs: {
        en: "Thinai, Karupatti, Pure Ghee",
        ta: "தினை, கருப்பட்டி, சுத்தமான நெய்",
      },
    },
    usageAndStorage: {
      cookingRatio: { en: "N/A", ta: "N/A" },
      cookingTime: { en: "Ready to eat", ta: "உண்ணத் தயார்" },
      bestFor: { en: "Dessert, Snack", ta: "இனிப்பு, சிற்றுண்டி" },
      storageTips: {
        en: "Keep refrigerated for longer shelf life",
        ta: "அதிக நாட்கள் கெடாமல் இருக்க ஃப்ரிட்ஜில் வைக்கவும்",
      },
    },
  },
];
