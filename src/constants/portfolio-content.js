import Work1 from '../../public/work/kitawarga.png'
import Work2 from '../../public/work/work1.png'
import Work3 from '../../public/work/work2.png'
import Work4 from '../../public/work/work3.png'
import Work5 from '../../public/work/work4.png'
import Work6 from '../../public/work/work5.png'
import Work7 from '../../public/work/work6.png'
import Work8 from '../../public/work/work7.png'
import Work9 from '../../public/work/work9.jpeg'
import Work10 from '../../public/work/work10.png'
import Work11 from '../../public/work/work11.png'
import Work12 from '../../public/work/work12.jpg'

const title = 'Portfolio'
const subtitle = 'Most recent work'

const portfolio_item = [
  {
    id: 1,
    image: Work2,
    title: 'PT Bank SMBC Indonesia Tbk',
    category: 'Mobile Application',
    description: 'Develop Mobile Application for Jenius Daya with React Native',
    info: [
      {
        id: 1,
        title: 'Develop mobile application for Jenius Daya with React Native'
      },
      {
        id: 2,
        title: 'Develop feature for Jenius Daya'
      },
      {
        id: 3,
        title: 'Responsible to maintain the unit tests and managing to get 100% coverage'
      },
      {
        id: 4,
        title: 'Create and enhance Jenius Daya ui-kit'
      },
      {
        id: 5,
        title: 'Cross-collaboration with other teams to make sure the feature that we developed is working smoothly'
      }
    ],
    result: [
      {
        id: 1,
        icon: 'bxl-google',
        link: 'google.com',
        title: 'Android'
      }
    ],
    filterId: 1,
    position: 'Senior Mobile Developer'
  },
  {
    id: 2,
    image: Work5,
    title: 'Bank Permata',
    category: 'Mobile Application',
    description: 'Develop Mobile Aplication for Bank Permata with React Native',
    info: [
      {
        id: 1,
        title: 'Apps Performance Optimization Spesialist'
      },
      {
        id: 2,
        title: 'Develop feature for Permata Mobile X / Permata ME'
      },
      {
        id: 3,
        title: 'Create Standarization Code for Permata Mobile X / Permata ME'
      },
      {
        id: 4,
        title: 'Create CI/CD for Permata Mobile X / Permata ME'
      },
      {
        id: 5,
        title: 'Create SDK iOS for Opening Account Permata Bank with Swift & Clean Architecture'
      }, 
      {
        id: 6,
        title: 'Refactoring Code for Permata Mobile X / Permata ME'
      }, 

    ],
    result: [
      {
        id: 1,
        icon: 'bxl-apple',
        link: 'https://apps.apple.com/id/app/permata-me/id1323973644',
        title: 'App Store'
      },
      {
        id: 2,
        icon: 'bxl-google',
        link: 'https://play.google.com/store/apps/details?id=net.myinfosys.PermataMobileX&hl=id',
        title: 'Google Play Store'
      }
    ],
    filterId: 1,
    position: 'Co Lead Mobile Developer'
  },
  {
    id: 3,
    image: Work6,
    title: 'Pegadaian Digital',
    category: 'Mobile Application',
    description: 'Develop Mobile Aplication for Pegadaian Digital with React Native',
    info: [
      {
        id: 1,
        title: 'Reskin/Revamp for Pegadaian Digital'
      },
      {
        id: 2,
        title: 'Develop feature for Pegadaian Digital'
      },
      {
        id: 3,
        title: 'Integrate API Payment with Bank'
      },
      {
        id: 4,
        title: 'Integrate API with Gojek'
      },
      {
        id: 5,
        title: 'Create Standarization Code for Pegadaian Digital'
      },
      {
        id: 6,
        title: 'Create CI/CD for Pegadaian Digital'
      },
      {
        id: 6,
        title: 'Deploy to App Store and Google Play Store'
      },
      {
        id: 7,
        title: 'Horizontal Scalling for Pegadaian Digital'
      },
    ],
    result: [
      {
        id: 1,
        icon: 'bxl-apple',
        link: 'https://apps.apple.com/us/app/pegadaian-digital/id1350501409',
        title: 'App Store'
      },
      {
        id: 2,
        icon: 'bxl-google',
        link: 'https://play.google.com/store/apps/details?id=com.pegadaiandigital&hl=id',
        title: 'Google Play Store'
      },
    ],
    filterId: 1,
    position: 'Tech Lead Mobile Developer'
  },
  {
    id: 4,
    image: Work3,
    title: 'b2app.io',
    category: 'Website & Mobile Application',
    description: 'Develop website for convert website to mobile application and build APK, iOS.',
    info: [
      {
        id: 1,
        title: 'Develop website b2app.io with Next JS'
      },
      {
        id: 2,
        title: 'Develop website dashboard b2app.io with Next JS'
      },
      {
        id: 3,
        title: 'Develop website admin b2app.io with React JS'
      },
      {
        id: 4,
        title: 'Create CI/CD with CodeMagic and integrate to Bitbucket'
      },
      {
        id: 5,
        title: 'Develop base app for b2app.io with Flutter'
      },
      {
        id: 6,
        title: 'Develop backend for b2app.io with Golang and PostgreSQL'
      }
    ],
    result: [
      {
        id: 1,
        icon: 'bx-link',
        link: 'https://b2app.io/',
        title: 'Website'
      }
    ],
    filterId: 1,
    position: 'Freelance - Fullstack Developer'
  },
  {
    id: 5,
    image: Work4,
    title: 'ScoreQuest',
    category: 'Mobile & Website Application',
    description: 'Develop mobile application and website for update score E-Sports and manage tournament.',
    info: [
      {
        id: 1,
        title: 'Develop mobile application for ScoreQuest with Flutter'
      },
      {
        id: 2,
        title: 'Develop website for ScoreQuest with React JS'
      },
      {
        id: 3,
        title: 'Develop backend for ScoreQuest with Golang and PostgreSQL'
      },
      {
        id: 4,
        title: 'Develop CMS for ScoreQuest with React JS'
      },
      {
        id: 5,
        title: 'Create Notification for ScoreQuest with FCM'
      },
      {
        id: 6,
        title: 'Integrate Bracket Tournament with chalonge'
      }
    ],
    result: [
      {
        id: 1,
        icon: 'bxl-apple',
        link: 'https://apps.apple.com/id/app/scorequest/id6475076922',
        title: 'App Store'
      },
      {
        id: 2,
        icon: 'bxl-google',
        link: 'https://play.google.com/store/apps/details?id=com.project.scorequest&hl=id',
        title: 'Google Play Store'
      },
      {
        id: 3,
        icon: 'bx-link',
        link: 'https://scorequest.id/',
        title: 'Website'
      }
    ],
    filterId: 1,
    position: 'Freelance - Fullstack Developer'
  },
  {
    id: 6,
    image: Work1,
    title: 'KitaWarga',
    category: 'Mobile & Website Application',
    description: 'Develop Mobile Apps, Website and Backend for KitaWarga with Flutter',
    info: [
      {
        id: 1,
        title: 'Develop mobile application for KitaWarga with Flutter'
      },
      {
        id: 2,
        title: 'Develop feature for KitaWarga'
      },
      {
        id: 3,
        title: 'Develop website for KitaWarga with React JS'
      },
      {
        id: 4,
        title: 'Develop backend for KitaWarga with Express JS'
      },
      {
        id: 5,
        title: 'Implement push notifications with firebase'
      },
      {
        id: 6,
        title: 'Integration Payment with Xendit'
      },
      {
        id: 7,
        title: 'Maintain and develop feature for KitaWarga'
      },
      {
        id: 8,
        title: 'Deployment KitaWarga to Server'
      }
    ],
    result: [
      {
        id: 1,
        icon: 'bx-link',
        link: 'https://kitawarga.com/',
        title: 'Website'
      },
      {
        id: 2,
        icon: 'bxl-google',
        link: 'https://play.google.com/store/apps/details?id=com.project.kita_warga_apps&hl=id',
        title: 'Google Play Store'
      }
    ],
    filterId: 1,
    position: 'Fullstack Developer'
  },
  {
    id: 7,
    image: Work11,
    title: 'Praktisi Mengajar',
    category: 'Dosen',
    description: 'Dosen Praktisi Mengajar di Universitas Teknokrat Indonesia',
    info: [
      {
        id: 1,
        title: 'Dosen Matakuliah UI/UX'
      },
     
    ],
    result: [
      
    ],
    filterId: 1,
    position: 'Dosen Praktisi Mengajar'
  },
 
  
  {
    id: 8,
    image: Work7,
    title: 'Pegadaian Digital Syariah',
    category: 'Mobile Application',
    description: 'Develop Mobile Aplication for Pegadaian Digital Syariah with Java and Swift',
    info: [
      {
        id: 1,
        title: 'Reskin/Revamp for Pegadaian Digital Syariah'
      },
      {
        id: 2,
        title: 'Develop feature for Pegadaian Digital Syariah with MVVM + Clean Architecture'
      },
      {
        id: 3,
        title: 'Integrate API Payment with Bank Syariah'
      },
      {
        id: 4,
        title: 'Re-Design Architecture for Pegadaian Digital Syariah'
      },
      {
        id: 5,
        title: 'Create Standarization Code for Pegadaian Digital Syariah'
      },
      {
        id: 6,
        title: 'Create CI/CD for Pegadaian Digital Syariah'
      },
      {
        id: 6,
        title: 'Deploy to App Store and Google Play Store'
      },
      {
        id: 7,
        title: 'Implement Object Storage with min.io'
      },
      {
        id: 8,
        title: 'Implement Centralized Logging with ELK'
      },
      {
        id: 8,
        title: 'Implement Analytics with Google Analytics'
      },
      {
        id: 8,
        title: 'Implement Docker for Backend and Frontend'
      },
      {
        id: 9,
        title: 'Develop Feature for Pegadaian Digital Syariah (Backend) with Spring Boot and MySQL'
      },
      {
        id: 10,
        title: 'Develop Feature for Pegadaian Digital Syariah (Frontend) with React JS and Redux'
      },
    ],
    result: [
      {
        id: 1,
        icon: 'bxl-apple',
        link: 'https://apps.apple.com/id/app/pegadaian-syariah-digital/id1463026343',
        title: 'App Store'
      },
      {
        id: 2,
        icon: 'bxl-google',
        link: 'https://play.google.com/store/apps/details?id=co.pegadaian.syariah.nasabah&hl=id',
        title: 'Google Play Store'
      },
    ],
    filterId: 1,
    position: 'Tech Lead Mobile Developer'
  },
  {
    id: 9,
    image: Work8,
    title: 'Agen Pegadaian Syariah',
    category: 'Mobile Application',
    description: 'Develop Mobile Aplication for Agen Pegadaian Syariah with Java',
    info: [
      {
        id: 1,
        title: 'Develop feature for Pegadaian Digital Syariah with MVVM + Clean Architecture'
      },
      {
        id: 2,
        title: 'Integrate API Payment with Bank Syariah'
      },
      {
        id: 3,
        title: 'Re-Design Architecture for Agen Pegadaian Syariah'
      },
      {
        id: 4,
        title: 'Create Standarization Code for Pegadaian Digital Syariah'
      },
      {
        id: 5,
        title: 'Create CI/CD for Pegadaian Digital Syariah'
      },
      {
        id: 6,
        title: 'Deploy to Google Play Store'
      },
      {
        id: 7,
        title: 'Implement Object Storage with min.io'
      },
      {
        id: 8,
        title: 'Implement Centralized Logging with ELK'
      },
      {
        id: 8,
        title: 'Implement Analytics with Google Analytics'
      },
      {
        id: 8,
        title: 'Implement Docker for Backend and Frontend'
      },
      {
        id: 9,
        title: 'Develop Feature for Agen Pegadaian Syariah (Backend) with Spring Boot and MySQL'
      },
      {
        id: 10,
        title: 'Develop Feature for Agen Pegadaian Syariah (Frontend) with React JS and Redux'
      },
    ],
    result: [
      {
        id: 1,
        icon: 'bxl-google',
        link: 'https://play.google.com/store/apps/details?id=co.pegadaian.syariah.agen&hl=id',
        title: 'Google Play Store'
      },
    ],
    filterId: 1,
    position: 'Tech Lead Mobile Developer'
  },
  {
    id: 10,
    image: Work9,
    title: 'Kemendikbud RI',
    category: 'Website Application',
    description: 'Develop Website Aplication Bidikmisi for Kemendikbud RI with Yii Framework',
    info: [
      {
        id: 1,
        title: 'Develop feature for bidikmisi with Yii Framework'
      }
    ],
    result: [],
    filterId: 1,
    position: 'Web Developer'
  },
  {
    id: 11,
    image: Work10,
    title: 'Kompasiana.com',
    category: 'Website Application',
    description: 'Develop Website Aplication for Kompasiana.com',
    info: [
      {
        id: 1,
        title: 'Develop feature for kompasiana with CodeIgniter Framework'
      },
      {
        id: 2,
        title: 'Develop feature for kompasiana with Laravel Framework'
      },
      {
        id: 3,
        title: 'Develop feature for kompasiana with MongoDB'
      }
    ],
    result: [
      {
        id: 1,
        icon: 'bx-link',
        link: 'https://www.kompasiana.com/',
        title: 'Website Kompasiana.com'
      },
      {
        id: 2,
        icon: 'bx-link',
        link: 'https://ramadan.kompasiana.com/',
        title: 'Website THR Kompasiana.com'
      },
      {
        id: 1,
        icon: 'bx-link',
        link: 'https://www.kompasiana.com/',
        title: 'Website ICD Kompasiana.com'
      },
    ],
    filterId: 1,
    position: 'Web Developer'
  },
  {
    id: 12,
    image: Work12,
    title: 'Universitas Teknokrat Indonesia',
    category: 'IT Support',
    description: 'IT Support & Dosen for Universitas Teknokrat Indonesia',
    info: [
      {
        id: 1,
        title: 'Maintance Laboratory for Universitas Teknokrat Indonesia'
      },
      {
        id: 2,
        title: 'Dosen Praktikum for Universitas Teknokrat Indonesia'
      },
      {
        id: 3,
        title: 'Develop System for Universitas Teknokrat Indonesia'
      }
    ],
    result: [
      {
        id: 1,
        icon: 'bx-link',
        link: 'https://www.kompasiana.com/',
        title: 'Website Kompasiana.com'
      },
      {
        id: 2,
        icon: 'bx-link',
        link: 'https://ramadan.kompasiana.com/',
        title: 'Website THR Kompasiana.com'
      },
      {
        id: 1,
        icon: 'bx-link',
        link: 'https://www.kompasiana.com/',
        title: 'Website ICD Kompasiana.com'
      },
    ],
    filterId: 1,
    position: 'Dosen & IT Support'
  },
]

const portfolio_filter = [
  {
    id: 1,
    title: 'Project'
  }
]

const portfolio_content = {
	title,
  subtitle,
  portfolio_item,
  portfolio_filter
}

export default portfolio_content