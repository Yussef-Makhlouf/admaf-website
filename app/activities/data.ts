// Activities data with full details for individual pages
export interface Activity {
  id: number
  slug: string
  title: string
  subtitle?: string
  description: string
  fullDescription?: string
  image: string
  gallery?: string[]
  date: string
  time?: string
  endDate?: string
  location: string
  venue?: string
  category: string
  categoryLabel: string
  status: string
  featured?: boolean
  programme?: {
    part: string
    title?: string
    composer?: string
    items: string[]
  }[]
  artists?: {
    name: string
    role: string
    image?: string
  }[]
  relatedActivities?: number[]
}

export const activitiesData: Activity[] = [
  {
    id: 1,
    slug: "admaf-talks-sounds-aesthetics",
    title: "ADMAF TALKS: Panel Discussion – Sounds And Aesthetics",
    subtitle: "Arabic As A Source Of Inspiration",
    description: "An engaging panel discussion exploring the rich heritage of Arabic aesthetics and its influence on contemporary art and music.",
    fullDescription: "Join us for an enlightening panel discussion that delves deep into the profound influence of Arabic aesthetics on contemporary art and music. This ADMAF TALKS session brings together renowned scholars, artists, and cultural practitioners to explore how Arabic sounds, patterns, and artistic traditions continue to inspire creative expression across the globe. The discussion will cover topics ranging from traditional Arabic music theory to modern interpretations of Islamic geometric patterns in contemporary design.",
    image: "/culuture/abu-dhabi-cultural-heritage-museum-interior-archit.jpg",
    gallery: [
      "/culuture/louvre-abu-dhabi-museum-interior-dome-architecture.jpg",
      "/culuture/arabic-calligraphy-art-exhibition.jpg",
    ],
    date: "15-December-2025",
    time: "6:00 PM",
    location: "Abu Dhabi",
    venue: "Manarat Al Saadiyat",
    category: "admaf-talks",
    categoryLabel: "ADMAF TALKS",
    status: "Upcoming",
    featured: true,
    programme: [
      {
        part: "Part I",
        title: "Opening Remarks",
        items: [
          "Welcome Address by H.E. Huda Alkhamis-Kanoo",
          "Introduction to Arabic Aesthetics",
          "Historical Context and Evolution",
        ]
      },
      {
        part: "Part II",
        title: "Panel Discussion",
        items: [
          "The Role of Sound in Arabic Culture",
          "Contemporary Interpretations",
          "Q&A Session",
          "Closing Remarks",
        ]
      }
    ],
    artists: [
      { name: "Dr. Nasser Al Taee", role: "Scholar & Moderator" },
      { name: "Fadi Khoury", role: "Composer" },
      { name: "Reem Kelani", role: "Singer & Researcher" },
    ],
    relatedActivities: [2, 4, 5],
  },
  {
    id: 2,
    slug: "mou-bassam-freiha-foundation",
    title: "ADMAF Signs MoU With Bassam Freiha Art Foundation",
    description: "A strategic partnership to promote and preserve Arab art heritage.",
    fullDescription: "Abu Dhabi Music & Arts Foundation announces a landmark Memorandum of Understanding with the Bassam Freiha Art Foundation, marking a significant step in the preservation and promotion of Arab art heritage. This partnership will facilitate cultural exchanges, joint exhibitions, and educational programs aimed at fostering appreciation for Arab artistic traditions among younger generations.",
    image: "/culuture/arabic-calligraphy-art-exhibition.jpg",
    date: "9-December-2025",
    time: "11:00 AM",
    location: "Abu Dhabi",
    venue: "ADMAF Headquarters",
    category: "mous",
    categoryLabel: "MOUs",
    status: "Completed",
    featured: false,
    artists: [
      { name: "H.E. Huda Alkhamis-Kanoo", role: "Founder, ADMAF" },
      { name: "Bassam Freiha", role: "Chairman, BFAF" },
    ],
    relatedActivities: [1, 3],
  },
  {
    id: 3,
    slug: "mou-ministry-education",
    title: "ADMAF And Ministry Of Education Sign Landmark MoU",
    description: "A landmark agreement to integrate arts education into the national curriculum.",
    fullDescription: "In a historic moment for arts education in the UAE, ADMAF and the Ministry of Education have signed a comprehensive Memorandum of Understanding to integrate arts and cultural education into the national school curriculum. This initiative will provide students across the Emirates with enhanced access to music, visual arts, and cultural heritage programs.",
    image: "/culuture/oud-player-performing-close-up-hands-on-strings.jpg",
    date: "3-December-2025",
    time: "10:00 AM",
    location: "Abu Dhabi",
    venue: "Ministry of Education",
    category: "mous",
    categoryLabel: "MOUs",
    status: "Completed",
    featured: false,
    relatedActivities: [2],
  },
  {
    id: 4,
    slug: "huda-alkhamis-bahrain-lecture",
    title: "H.E. Huda Alkhamis Life And Legacy",
    subtitle: "L Bahrain Lecture Series",
    description: "A special lecture celebrating the life and achievements of H.E. Huda Alkhamis.",
    fullDescription: "The L Bahrain Lecture Series presents a special evening dedicated to celebrating the extraordinary life and legacy of H.E. Huda Alkhamis-Kanoo. This intimate event will feature reflections on her pioneering work in establishing ADMAF, the Abu Dhabi Festival, and her tireless efforts to promote Arab arts and culture on the global stage.",
    image: "/culuture/diverse-musicians-playing-traditional-and-modern-i.jpg",
    date: "1-December-2025",
    time: "7:00 PM",
    location: "Bahrain",
    venue: "L Bahrain Cultural Center",
    category: "bahrain-lecture",
    categoryLabel: "Bahrain Lecture",
    status: "Upcoming",
    featured: true,
    relatedActivities: [1, 5],
  },
  {
    id: 5,
    slug: "christmas-concert-2025",
    title: "Christmas Concert",
    subtitle: "Antonine University Choir from Lebanon",
    description: "Celebrate the magic of the season with a special Christmas Concert, part of the Abu Dhabi Music & Arts Foundation (ADMAF) Spiritual Series.",
    fullDescription: "Celebrate the magic of the season with a special Christmas Concert, part of the Abu Dhabi Music & Arts Foundation (ADMAF) Spiritual Series, featuring the Antonine University Choir from Lebanon, conducted by Oussama Mhanna, with soloists Mira Aklé, Grace Medawar and Louisa El-Khoury, accompanied by pianist Marc Karam. The programme showcases the radiant brilliance of Vivaldi's Gloria (RV 589), alongside cherished Christmas carols and sacred arias, creating an uplifting and joyful musical experience that blends classical excellence with the warmth and spirit of the season.",
    image: "/culuture/orchestra-concert-hall-performance-dramatic-lighti.jpg",
    gallery: [
      "/culuture/abu-dhabi-cultural-festival-performance-orchestra-.jpg",
    ],
    date: "17-December-2025",
    time: "12:00 PM",
    location: "Abu Dhabi",
    venue: "St Francis — Abrahamic Family House",
    category: "concert",
    categoryLabel: "Concert",
    status: "Upcoming",
    featured: true,
    programme: [
      {
        part: "Part I",
        title: "A. Vivaldi (1678-1741)",
        composer: "Gloria (RV 589)",
        items: [
          "Gloria in excelsis Deo",
          "Et in terra pax hominibus",
          "Laudamus te",
          "Gratias agimus tibi",
          "Propter magnam gloriam tuam",
          "Domine Deus",
          "Domine Fili unigenite",
          "Domine Deus, Agnus Dei",
          "Qui tollis peccata mundi",
          "Qui sedes ad dexteram Patris",
          "Quoniam tu solus sanctus",
          "Cum Sancto Spiritu",
        ]
      },
      {
        part: "Part II",
        title: "Christmas Hymns",
        items: [
          "O Holy Night",
          "Silent Night",
          "Joy to the World",
          "Hark! The Herald Angels Sing",
        ]
      }
    ],
    artists: [
      { name: "Mira Aklé", role: "Soprano" },
      { name: "Grace Medawar", role: "Mezzo-soprano" },
      { name: "Louisa El-Khoury", role: "Soprano" },
      { name: "Marc Karam", role: "Piano" },
      { name: "Oussama Mhanna", role: "Conductor" },
    ],
    relatedActivities: [1, 4],
  },
  {
    id: 6,
    slug: "arabic-calligraphy-exhibition",
    title: "Contemporary Arabic Calligraphy Exhibition",
    description: "An immersive exhibition showcasing the evolution of Arabic calligraphy in modern art.",
    fullDescription: "This groundbreaking exhibition presents the works of leading contemporary calligraphers who are pushing the boundaries of traditional Arabic script. Featuring installations, paintings, and digital works, the exhibition explores how ancient letterforms are being reimagined for the 21st century while maintaining their spiritual and aesthetic essence.",
    image: "/culuture/louvre-abu-dhabi-museum-interior-dome-architecture.jpg",
    date: "15-January-2025",
    endDate: "15-March-2025",
    time: "10:00 AM - 8:00 PM",
    location: "Abu Dhabi",
    venue: "Manarat Al Saadiyat",
    category: "visual-arts",
    categoryLabel: "Visual Arts",
    status: "Upcoming",
    featured: false,
    relatedActivities: [1, 7],
  },
  {
    id: 7,
    slug: "young-filmmakers-workshop",
    title: "Young Filmmakers' Circle Workshop",
    description: "An intensive workshop for emerging filmmakers to develop their creative vision.",
    fullDescription: "The Young Filmmakers' Circle is an intensive two-week workshop designed to nurture the next generation of Emirati and Arab filmmakers. Participants will work with industry professionals to develop their storytelling skills, learn technical aspects of filmmaking, and create short films that will be screened at a special showcase event.",
    image: "/modern-art-gallery-with-minimalist-middle-eastern-.jpg",
    date: "10-January-2025",
    endDate: "24-January-2025",
    time: "9:00 AM - 5:00 PM",
    location: "Abu Dhabi",
    venue: "Cultural Foundation",
    category: "film-media",
    categoryLabel: "Film & Media",
    status: "Registration Open",
    featured: false,
    relatedActivities: [6, 8],
  },
  {
    id: 8,
    slug: "poetry-night-voices-gulf",
    title: "Poetry Night: Voices of the Gulf",
    description: "An evening celebrating contemporary poetry from the Gulf region.",
    fullDescription: "An enchanting evening of contemporary poetry featuring voices from across the Gulf region. Poets will share works exploring themes of identity, heritage, and modernity, presented in both Arabic and English. The event includes musical interludes featuring traditional Gulf instruments.",
    image: "/qasr-al-hosn-fort-abu-dhabi-heritage-site.jpg",
    date: "5-January-2025",
    time: "7:30 PM",
    location: "Abu Dhabi",
    venue: "Louvre Abu Dhabi Auditorium",
    category: "literature",
    categoryLabel: "Literature & Poetry",
    status: "Upcoming",
    featured: false,
    relatedActivities: [1, 4],
  },
]

// Helper function to get activity by ID
export function getActivityById(id: number): Activity | undefined {
  return activitiesData.find(a => a.id === id)
}

// Helper function to get activity by slug
export function getActivityBySlug(slug: string): Activity | undefined {
  return activitiesData.find(a => a.slug === slug)
}

// Helper function to get related activities
export function getRelatedActivities(activity: Activity): Activity[] {
  if (!activity.relatedActivities) return []
  return activity.relatedActivities
    .map(id => activitiesData.find(a => a.id === id))
    .filter((a): a is Activity => a !== undefined)
}