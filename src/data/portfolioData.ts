import {
  CourseItem,
  EducationItem,
  ExperienceItem,
  ExpertiseItem,
  NavItem,
  PatentItem,
  ProjectItem,
  PublicationItem,
  CertificationItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Mohd Tahir Irfan',
  title: 'Assistant Professor, Computer Science & Engineering',
  institution: 'JECRC University, Jaipur',
  department: 'Department of Computer Science & Engineering',
  location: 'Jaipur, Rajasthan, India',
  email: 'bgsbutahir@gmail.com',
  phone: '+91 9596949075',
  linkedin: 'https://www.linkedin.com/in/mohd-tahir-irfan-11a981175',
  github: 'https://github.com/MohdTahirkhan',
  avatar: '/src/assets/images/academic_headshot_1787290004092.jpg',
  aboutText:
    "I'm an Assistant Professor of Computer Science & Engineering with teaching experience at JECRC University and Lovely Professional University. My research focuses on Artificial Intelligence, Machine Learning, and IoT, with peer-reviewed publications in Procedia Computer Science and multiple granted patents to my name. I'm passionate about curriculum design, mentoring students, and guiding them through placement preparation and industry-oriented internships. My academic interests span computer vision, databases, cybersecurity, blockchain, and the Theory of Computation.",
  stats: [
    { label: 'Patents Published', value: '9', subtext: 'Published Jan 2024' },
    { label: 'Peer-Reviewed Papers', value: '2', subtext: 'Procedia Computer Science' },
    { label: 'Academic Experience', value: '2+ yrs', subtext: 'JECRC & LPU' },
    { label: 'Mentored Students', value: '450+', subtext: 'Placements & Projects' },
  ],
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Expertise', href: '#expertise', id: 'expertise' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Publications', href: '#publications', id: 'publications' },
  { label: 'Courses', href: '#courses', id: 'courses' },
  { label: 'Achievements', href: '#achievements', id: 'achievements' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const EXPERTISE_LIST: ExpertiseItem[] = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'Foundational AI architectures, heuristic search, intelligent agent modeling, and knowledge representation systems.',
    iconName: 'BrainCircuit',
    keywords: ['Knowledge Engineering', 'Intelligent Agents', 'Decision Systems'],
  },
  {
    id: 'ml-dl',
    title: 'Machine Learning & Deep Learning',
    description: 'Supervised/unsupervised algorithms, deep neural networks, Vision Transformers (ViT), and feature engineering.',
    iconName: 'Cpu',
    keywords: ['Neural Networks', 'Vision Transformers', 'Predictive Modeling'],
  },
  {
    id: 'iot',
    title: 'Internet of Things (IoT)',
    description: 'Connected sensor networks, embedded intelligence, edge computing nodes, and automated sanitation/solar systems.',
    iconName: 'Wifi',
    keywords: ['Smart Sensors', 'Edge Computing', 'Automated Actuation'],
  },
  {
    id: 'cv',
    title: 'Computer Vision',
    description: 'Image forensics, deepfake detection pipelines, feature extraction, transformer-based visual classification.',
    iconName: 'Eye',
    keywords: ['Deepfake Detection', 'Image Forensics', 'Pattern Recognition'],
  },
  {
    id: 'databases',
    title: 'Databases',
    description: 'Relational data modeling, schema normalization, ACID compliance, querying optimizations, and distributed NoSQL.',
    iconName: 'Database',
    keywords: ['Relational Schema', 'Query Optimization', 'NoSQL & MongoDB'],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Threat modeling, encryption mechanisms, secure system architectures, vulnerability assessment, and safe practices.',
    iconName: 'ShieldCheck',
    keywords: ['Threat Mitigation', 'Information Security', 'Access Controls'],
  },
  {
    id: 'blockchain',
    title: 'Blockchain',
    description: 'Decentralized ledgers, consensus protocols, transparent claim validation systems, and tamper-proof verification.',
    iconName: 'Blocks',
    keywords: ['Smart Contracts', 'Decentralized Ledgers', 'Claim Verification'],
  },
  {
    id: 'toc',
    title: 'Theory of Computation',
    description: 'Formal language grammars, finite automata, pushdown machines, Turing computability, and complexity theory.',
    iconName: 'Binary',
    keywords: ['Automata Theory', 'Formal Grammars', 'Turing Machines'],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'jecrc',
    role: 'Assistant Professor',
    institution: 'JECRC University, Jaipur',
    location: 'Jaipur, Rajasthan, India',
    period: 'July 2024 – Present',
    status: 'Current',
    highlights: [
      'Teach undergraduate and postgraduate CSE courses; design assessments and labs aligned with Outcome-Based Education (OBE).',
      'Mentor students for placement preparation, soft skills, technical interviews, and career guidance.',
      'Internship Coordinator: manage industry tie-ups and ensure student internship quality and compliance across tech domains.',
      'Guide research projects and contribute to curriculum review and departmental academic initiatives.',
    ],
  },
  {
    id: 'lpu',
    role: 'Assistant Professor',
    institution: 'Lovely Professional University',
    location: 'Punjab, India',
    period: 'July 2023 – November 2023',
    status: 'Completed',
    highlights: [
      'Delivered lectures and tutorials for core CSE courses; promoted active learning via interactive discussions and lab projects.',
      'Contributed to curriculum enhancement aligned with emerging industry standards and computational requirements.',
      'Provided academic advising, continuous mentoring, and student final project supervision.',
    ],
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    id: 'mtech',
    degree: 'M.Tech, Computer Science & Information Technology',
    institution: 'Central University of Jammu',
    location: 'Jammu, India',
    period: '2021 – 2023',
    focus: 'Specialized in Artificial Intelligence, Vision Transformers & Deepfake Forensics',
    scoreOrDetail: 'Dissertation on Deepfake Image Detection using Vision Transformers',
  },
  {
    id: 'btech',
    degree: 'B.Tech, Information Technology & Engineering',
    institution: 'Baba Ghulam Shah Badshah University',
    location: 'Rajouri, J&K, India',
    period: '2016 – 2020',
    focus: 'Comprehensive foundation in Software Engineering, Algorithms & Systems',
    scoreOrDetail: 'Major Project: Student Feedback Management System with multi-tier workflow',
  },
  {
    id: 'hss',
    degree: 'Higher Secondary School',
    institution: 'Govt. Higher Secondary School, Mandi',
    location: 'Mandi, J&K, India',
    period: '2016',
    focus: 'Science & Mathematics stream with distinction in physical sciences',
  },
  {
    id: 'secondary',
    degree: 'Secondary School',
    institution: 'Govt. Higher Secondary School, Mandi',
    location: 'Mandi, J&K, India',
    period: '2014',
    focus: 'Foundational secondary curriculum in Science, Mathematics and English',
  },
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: 'pub-deepfake',
    title: 'On Machine Learning and Deep Learning based Deepfake Generation and Detection',
    authors: ['M. T. Irfan', 'B. Arora', 'N. Sandotra', 'A. A. Raza'],
    tahirAuthorName: 'M. T. Irfan',
    journal: 'Procedia Computer Science',
    volume: 'Vol. 259',
    pages: 'pp. 1927–1936',
    month: 'January',
    year: '2025',
    proceedings:
      "Proceedings of the 6th International Conference on Futuristic Trends in Networks and Computing Technologies (FTNCT'06)",
    doi: '10.1016/j.procs.2025.04.148',
    url: 'https://doi.org/10.1016/j.procs.2025.04.148',
    abstractSnippet:
      'Investigates contemporary ML and DL architectures for synthesis and multi-spectral artifact detection in manipulated multimedia, evaluating feature extraction robustness and vision transformer paradigms.',
    tags: ['Machine Learning', 'Deep Learning', 'Deepfake Detection', 'Computer Vision', 'FTNCT'],
    bibtex: `@article{irfan2025deepfake,
  author    = {M. T. Irfan and B. Arora and N. Sandotra and A. A. Raza},
  title     = {On Machine Learning and Deep Learning based Deepfake Generation and Detection},
  journal   = {Procedia Computer Science},
  volume    = {259},
  pages     = {1927--1936},
  year      = {2025},
  month     = {January},
  doi       = {10.1016/j.procs.2025.04.148},
  note      = {Proc. 6th Int. Conf. on Futuristic Trends in Networks and Computing Technologies (FTNCT'06)}
}`,
  },
  {
    id: 'pub-blockchain',
    title: 'Securing Health Insurance Claims with Decentralization and Transparency: A Blockchain-based Approach',
    authors: ['A. A. Raza', 'B. Arora', 'M. T. Irfan'],
    tahirAuthorName: 'M. T. Irfan',
    journal: 'Procedia Computer Science',
    volume: 'Vol. 259',
    pages: 'pp. 1918–1926',
    month: 'January',
    year: '2025',
    proceedings: 'Procedia Computer Science, Elsevier',
    doi: '10.1016/j.procs.2025.04.147',
    url: 'https://doi.org/10.1016/j.procs.2025.04.147',
    abstractSnippet:
      'Presents a decentralized consensus-driven ledger protocol to mitigate fraudulent health insurance claims, providing transparent audit trails, automated validation, and cryptographic confidentiality.',
    tags: ['Blockchain', 'Health Informatics', 'Decentralization', 'Claim Verification', 'Security'],
    bibtex: `@article{raza2025blockchain,
  author    = {A. A. Raza and B. Arora and M. T. Irfan},
  title     = {Securing Health Insurance Claims with Decentralization and Transparency: A Blockchain-based Approach},
  journal   = {Procedia Computer Science},
  volume    = {259},
  pages     = {1918--1926},
  year      = {2025},
  month     = {January},
  doi       = {10.1016/j.procs.2025.04.147}
}`,
  },
];

export const COURSES: CourseItem[] = [
  {
    id: 'dbms',
    title: 'Databases',
    code: 'CSE-301',
    description:
      'Concepts and practical operations across relational and non-relational database systems, including design, querying, and management.',
    topics: [
      'Relational Data Models & ER Diagrams',
      'Functional Dependencies & Normalization (1NF-BCNF)',
      'Transaction Management & ACID Properties',
      'Concurrency Control & Recovery',
      'NoSQL Document Stores & MongoDB',
    ],
    level: 'Core Undergraduate / PG Course',
    iconName: 'Database',
  },
  {
    id: 'sql',
    title: 'SQL',
    code: 'CSE-302L',
    description:
      'Hands-on training in structured query language for data retrieval, manipulation, and database management.',
    topics: [
      'Complex Multi-Table Joins & Subqueries',
      'Window Functions & Aggregate Analytics',
      'Stored Procedures, Triggers & Views',
      'Index Optimization & Execution Plans',
      'Data Integrity & Schema Migration',
    ],
    level: 'Hands-on Lab & Applied Track',
    iconName: 'FileCode2',
  },
  {
    id: 'toc',
    title: 'Theory of Computation',
    code: 'CSE-401',
    description:
      'Study of formal languages, automata, and computational models — how machines are designed to solve problems and recognize patterns.',
    topics: [
      'DFA, NFA & Regular Expressions',
      'Context-Free Grammars & Pushdown Automata',
      'Pumping Lemma & Language Closures',
      'Turing Machines & Decidability',
      'P vs NP Computational Complexity',
    ],
    level: 'Core Theoretical Computer Science',
    iconName: 'Binary',
  },
  {
    id: 'cybersec',
    title: 'Cyber Security',
    code: 'CSE-405',
    description:
      'Core principles of information security, threat detection, and safe practices to protect digital systems.',
    topics: [
      'Cryptographic Algorithms (Symmetric & Asymmetric)',
      'Network Security Protocols (SSL/TLS, IPsec)',
      'Vulnerability Scanning & Penetration Testing',
      'Threat Modeling & Malware Analysis',
      'Security Policies & Zero-Trust Architecture',
    ],
    level: 'Advanced Department Elective',
    iconName: 'ShieldAlert',
  },
];

export const PATENTS: PatentItem[] = [
  {
    id: 'pat-1',
    title: 'Cheating Detection and System Thereof',
    applicationNumber: '202311082181',
    filingYear: 'January 2024',
    status: 'Published',
    category: 'AI & Healthcare',
    description: 'An automated proctoring surveillance system utilizing computer vision anomaly detection to identify academic integrity breaches in real time.',
  },
  {
    id: 'pat-2',
    title: 'Self-Cleaning Solar Panels',
    applicationNumber: '202311082180',
    filingYear: 'January 2024',
    status: 'Published',
    category: 'CleanTech',
    description: 'An automated IoT-actuated wiper and dust-detection mechanism to preserve optimal photovoltaic energy conversion efficiency.',
  },
  {
    id: 'pat-3',
    title: 'AI-Powered Virtual Reality Mental Therapy',
    applicationNumber: '202311082177',
    filingYear: 'January 2024',
    status: 'Published',
    category: 'AI & Healthcare',
    description: 'An immersive therapeutic VR environment adapting biofeedback cues and generative conversational prompts for guided anxiety relief.',
  },
  {
    id: 'pat-4',
    title: 'A Novel Track Monitoring System',
    applicationNumber: '202311082176',
    filingYear: 'January 2024',
    status: 'Published',
    category: 'IoT & Smart City',
    description: 'Sensorized railway track geometry and ultrasonic structural fault detection network communicating over telemetry nodes.',
  },
  {
    id: 'pat-5',
    title: 'Automatic Drainage Cleaner',
    applicationNumber: '202311082597',
    filingYear: 'January 2024',
    status: 'Published',
    category: 'Automation & Robotics',
    description: 'Autonomous mechanical filtration and motorized raking mechanism for municipal storm drains to prevent urban flooding.',
  },
  {
    id: 'pat-6',
    title: 'Self-Cleaning Street Using IoT Devices',
    applicationNumber: '202311086369',
    filingYear: 'January 2024',
    status: 'Published',
    category: 'IoT & Smart City',
    description: 'Coordinated IoT sanitation modules equipped with debris detection sensors and localized motorized suction sweeps.',
  },
  {
    id: 'pat-7',
    title: 'Blockchain-Based Certificate Validation',
    applicationNumber: '202311086376',
    filingYear: 'January 2024',
    status: 'Published',
    category: 'Security & Blockchain',
    description: 'Cryptographically hashed educational credential repository eliminating forgery through immutable verification ledgers.',
  },
  {
    id: 'pat-8',
    title: '3D Printer and Methods Thereof',
    applicationNumber: '202311086858',
    filingYear: 'January 2024',
    status: 'Published',
    category: 'Automation & Robotics',
    description: 'Enhanced additive manufacturing extruder mechanics and multi-material feed calibration methods for precision layer deposition.',
  },
  {
    id: 'pat-9',
    title: 'Precision Agricultural Surveillance System for Crop Health Management',
    applicationNumber: '202311086871',
    filingYear: 'January 2024',
    status: 'Published',
    category: 'AgriTech',
    description: 'Multispectral drone imagery combined with ground soil moisture probes for early blight detection and automated pesticide prescription.',
  },
];

export const NOTABLE_PROJECTS: ProjectItem[] = [
  {
    id: 'vit-deepfake',
    title: 'Deepfake Image Detection using Vision Transformers',
    subtitle: 'M.Tech Research Dissertation',
    type: 'M.Tech Dissertation',
    description:
      'Developed an AI-based forensic model to detect fake and manipulated facial images using a 140K image dataset from Kaggle. Leveraged self-attention mechanics in Vision Transformers (ViT) to capture subtle frequency and spatial pixel boundary artifacts, achieving superior detection accuracy compared to standard CNN baselines.',
    techStack: ['Python', 'PyTorch', 'Vision Transformers (ViT)', 'OpenCV', 'Kaggle Dataset'],
    metrics: 'Trained on 140,000+ images with benchmarked state-of-the-art classification metrics',
  },
  {
    id: 'feedback-sys',
    title: 'Student Feedback Management System',
    subtitle: 'B.Tech Major Capstone Project',
    type: 'B.Tech Major Project',
    description:
      'Designed and engineered a streamlined, secure complaint and feedback resolution system featuring an automated dean–faculty workflow. Implemented anonymous student feedback submissions, departmental escalation matrices, and administrative analytics dashboards.',
    techStack: ['JavaScript', 'HTML/CSS', 'SQL Database', 'Role-Based Access Control'],
    metrics: 'End-to-end multi-role university governance workflow with encrypted submission logs',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'fdp-nep',
    title: 'NEP Orientation and Sensitization Programme under MM-TTP',
    organization: 'Tezpur University',
    date: 'July 2025',
    type: 'FDP',
  },
  {
    id: 'fdp-tcs',
    title: 'FDP on Demystifying AI: Concepts, Applications & Trends (TCS)',
    organization: 'JECRC University',
    date: 'January 2025',
    type: 'FDP',
  },
  {
    id: 'fdp-iit',
    title: 'FDP on Python Engineering Applications',
    organization: 'EICT Academy, IIT Roorkee',
    date: 'March 2025',
    type: 'FDP',
  },
  {
    id: 'cert-mongo',
    title: 'Certification: MongoDB for SQL Experts',
    organization: 'MongoDB University',
    date: 'December 2024',
    type: 'Certification',
  },
  {
    id: 'cert-ai',
    title: 'Certification: Introduction to AI',
    organization: 'Coursera',
    date: 'August 2023',
    type: 'Certification',
  },
  {
    id: 'cert-sec',
    title: 'Certification: Information Security',
    organization: 'NIELIT',
    date: '2019',
    type: 'Certification',
  },
];

export const SKILL_CATEGORIES = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'C++', level: 'Advanced' },
      { name: 'Python', level: 'Advanced' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'HTML5 / CSS3', level: 'Proficient' },
    ],
  },
  {
    category: 'Databases & Storage',
    skills: [
      { name: 'SQL (Relational)', level: 'Advanced' },
      { name: 'MongoDB (NoSQL)', level: 'Certified' },
      { name: 'Database Normalization', level: 'Advanced' },
      { name: 'Query Optimization', level: 'Proficient' },
    ],
  },
  {
    category: 'Core Domains & Research',
    skills: [
      { name: 'Theory of Computation', level: 'Core Faculty Area' },
      { name: 'DBMS', level: 'Core Faculty Area' },
      { name: 'Machine Learning', level: 'Research Focus' },
      { name: 'Deep Learning & ViT', level: 'Research Focus' },
      { name: 'Internet of Things (IoT)', level: 'Patent Author' },
      { name: 'Cybersecurity', level: 'Certified Area' },
      { name: 'Blockchain Technology', level: 'Published Paper' },
      { name: 'Computer Vision', level: 'Research Focus' },
    ],
  },
];
