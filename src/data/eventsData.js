export const eventsData = [
  {
    id: '1',
    title: 'Research Fundamentals and Effective Poster Presentation',
    date: 'December 20, 2025',
    time: '04:30 PM - 6:00 PM IST',
    type: 'Workshop',
    mode: 'Offline',
    // status: 'past',
    status: 'upcoming',
    category: 'Session',
    description:
      'Practical introduction to the research fundamentals and guidelines for poster presentation.',
    fullDescription:
      'The event was designed for students interested in poster and research presentation on how to present your paper in an effective manner also an awareness talk that led students to develop interest in research and innovation.',
    image:
      '/Images/e0h.webp',
    participants: '90+',
    location: 'Seminar Hall 2, 2nd floor BGA',
    speaker: {
      name: 'Dr Bharat Jyoti Ranjan Sahu',
      designation: 'Associate Professor, SOA University',
      photo:
        '/Images/e0s.webp',
      bio: 'Associate Professor at Siksha ‘O’ Anusandhan, Bhubaneswar, with a Ph.D. in Computer Engineering and research expertise in wireless communication (LTE, 5G), IoT, Named Data Networking, and transport protocols. Former Post-Doctoral Researcher at Kyungpook National University, South Korea, and co-author of 8 SCI/SCIE journal publications.',
    },
    gallery: [
      '/Images/e0a.webp',
      '/Images/e0b.webp',
      '/Images/e0c.webp',
      '/Images/e0d.webp',
      '/Images/e0e.webp',
      '/Images/e0f.webp',
      
    ],
  },
  {
    id: '2',
    title: 'Mobile App Development with Flutter',
    date: 'May 05-09, 2025',
    time: '10:00 AM - 5:00 PM',
    mode: 'Offline',
    status: 'past',
    category: 'Workshop',
    description: '5-Day Hands-On Training Program',
    fullDescription:
      'This workshop aims to equip students with the programming and design skills required to build cross-platform mobile applications using Flutter and Dart. Through hands-on coding sessions, participants will learn how to develop and deploy Android and iOS apps using a single codebase, understand widget trees, handle state management, integrate APIs and Firebase, and design responsive UI/UX. The event seeks to bridge academic learning with real-world software development practices, inspiring students to explore mobile app development as a career pathway. By the end of the training, participants will have completed a mini-project app and gained practical knowledge applicable to internships and product-based roles.',
    image:
      '/Images/e1h.webp',
    participants: '25+',
    location: 'Conference Hall, Ground Floor, BGA',
    speaker: {
      name: 'Mr. Pawan Kumar',
      designation: 'Software Development Engineer I (SDE-I), Fidelity International',
      photo:
        '/Images/e1s.webp',
      bio: 'Pawan Kumar is an SDE I at Fidelity International and a B.Tech graduate, specializing in scalable backend systems, cloud-native technologies, and Flutter-based application development.',
    },
    gallery: [
      '/Images/e1a.webp',
      '/Images/e1b.webp',
      '/Images/e1c.webp',
      '/Images/e1d.webp',
    ],
  },
  {
    id: '3',
    title: 'Cloud Computing - The Next Frontier',
    date: 'April 27, 2024',
    time: '10:00 AM - 12:00 PM IST',
    mode: 'Offline',
    status: 'past',
    category: 'Tech Talk',
    description: 'A tech talk on the future of cloud computing and modern DevOps careers.',
    fullDescription:
      'The SOA ACM Student Chapter organized a Tech Talk on “Cloud Computing - The Next Frontier” on 27 April 2024 at the Bansuri Guru Auditorium, featuring Mr. Sitesh Behera, Senior DevOps Manager at PLIVO and an ITER alumnus, who shared insights on the evolution of cloud computing, including serverless architectures, AI–cloud integration, cloud security, and emerging career opportunities in cloud and DevOps, engaging over 350 students across multiple disciplines.',
    image:
      '/Images/e2h.webp',
    participants: '350+',
    location: 'Bansuri Guru Auditorium',
    speaker: {
      name: 'Mr Sitesh Behera',
      designation: 'Sr. DevOps Manager, Plivo',
      photo:
        '/Images/e2s.webp',
      bio: 'Sitesh Behera is a Senior DevOps and Platform Engineering leader with 13+ years of experience in cloud automation, scalable infrastructure, and reliability engineering, currently serving as Senior DevOps Manager at Plivo Inc.',
    },
    gallery: [
      '/Images/e2a.webp',
      '/Images/e2b.webp',
      '/Images/e2c.webp',
      '/Images/e2d.webp',
    ],
  },
  
  {
  id: '4',
  title: '4-Day Training Program on Cloud Computing and DevOps',
  date: 'May 15-18, 2023',
  time: '10:00 AM - 4:00 PM IST',
  mode: 'Offline',
  status: 'past',
  category: 'Training Programme',
  description: 'A hands-on training on cloud computing and DevOps fundamentals.',
  fullDescription:
    'A 4-day intensive training program on Cloud Computing and DevOps that provided students with hands-on experience in cloud platforms, automation workflows, CI/CD pipelines, containerization, and real-world application deployment, guided by industry experts to bridge the gap between academic learning and industry practices.',
  image: '/Images/e3h.webp',
  participants: '35+',
  location: 'SOA Campus - Computer Lab',

  speakers: [
    {
      name: 'Mr. Sourabh Kumar Singh',
      designation: 'SRE Intern, EPAM',
      photo: '/Images/e3s1.webp',
      bio: 'DevOps Intern with hands-on experience in CI/CD pipelines, and containerized infrastructure using Docker and Kubernetes.',
    },
    {
      name: 'Mr. Shri Rijul Das',
      designation: 'SRE Intern, EPAM',
      photo: '/Images/e3s2.webp',
      bio: 'SRE Intern specializing in system reliability, automation, observability, and building fault-tolerant, scalable cloud systems.',
    },
    {
      name: 'Mr. Amrit Kaphley',
      designation: 'DevOps Intern, PLIVO',
      photo: '/Images/e3s3.webp',
      bio: 'DevOps Intern focused on cloud-native infrastructure and optimizing deployment workflows for scalable systems.',
    },
    {
      name: 'Mr. Shashwat K. Pandhey',
      designation: 'SRE Intern, PLIVO',
      photo: '/Images/e3s4.webp',
      bio: 'SRE Intern passionate about reliability engineering, automation, observability, and building resilient, production-grade cloud systems.',
    },
  ],

  gallery: [
    '/Images/e3a.webp',
    '/Images/e3b.webp',
    '/Images/e3c.webp',
  ],
}

];

export const getEventById = (id) => {
  return eventsData.find((event) => event.id === id);
};

export const getFeaturedEvent = () => {
  return eventsData.find((event) => event.status === 'upcoming') || eventsData[0];
};

export const getPastEvents = () => {
  return eventsData.filter((event) => event.status === 'past');
};


