import { PersonalInfo, ExperienceItem, EducationItem, ProjectItem, SkillCategory, SocialLinks } from '../types/portfolio';

/**
 * ============================================================================
 * VERIFIED RESUME DATA - PABLO VILLANUEVA PICAZO
 * ============================================================================
 * 
 * Synchronized with official English & Spanish CV documents:
 * - Software Engineer — Full-Stack Developer
 * - First-Class Honours (Class I) - York St John University (9/10)
 * - Instituto de Formación Profesional Nebrija (DAM)
 * - Universidad Nebrija (Development Technician)
 * - Real projects: TFG Bitcoin Prediction (9.0/10) & Secure Record Management (SRMS in Go)
 */

export const SOCIAL_LINKS: SocialLinks = {
  github: 'https://github.com/villanuevapablo',
  linkedin: 'https://www.linkedin.com/in/pablovillanuevapicazo/',
  email: 'pablovillanueva48@gmail.com',
  phone: '+34 684262439',
};

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Pablo Villanueva',
  fullName: 'Pablo Villanueva Picazo',
  initials: 'PV',
  avatarUrl: '/pablo-portrait.jpg',
  title: {
    en: 'Software Engineer — Full-Stack Developer',
    es: 'Ingeniero de Software — Desarrollador Full-Stack',
  },
  heroHeading: {
    en: 'Building software.\nExploring intelligence.\nCreating impact.',
    es: 'Construyendo software.\nExplorando inteligencia.\nCreando impacto.',
  },
  heroSubheading: {
    en: 'Software Engineer passionate about building scalable digital products, high-integrity backend systems, and exploring Artificial Intelligence.',
    es: 'Ingeniero de Software enfocado en la resolución de problemas complejos mediante código limpio, arquitectura de datos y principios de seguridad web.',
  },
  heroIntro: {
    en: 'Graduate with First-Class Honours (Class I, 9/10) in Software Engineering from York St John University and Higher Vocational DAM from Nebrija. Experienced in full-stack architecture, REST APIs, Web Security (OWASP), and Edge AI.',
    es: 'Graduado con First-Class Honours (Nota media: 9/10) en Software Engineering por York St John University y Técnico Superior en DAM por Nebrija. Experiencia en full-stack, APIs REST, seguridad web (OWASP) y Edge AI.',
  },
  location: {
    en: 'Madrid, Spain',
    es: 'Madrid, España',
  },
  availability: {
    en: 'Immediate availability • Category B Driving License',
    es: 'Disponibilidad inmediata • Permiso de conducir B',
  },
  statusBadge: {
    en: 'Available for Immediate Hire • Madrid, Spain',
    es: 'Disponibilidad inmediata • Madrid, España',
  },
  cvFilename: {
    en: 'cv-pablo-villanueva-en.pdf',
    es: 'cv-pablo-villanueva-es.pdf',
  },
  professionalProfile: {
    en: 'Highly technical Software Engineer, focused on solving complex problems through clean and efficient code. Experience in full-stack development, data architecture, and agile methodologies. Demonstrated ability to design scalable solutions, optimize system performance, and apply web security principles in dynamic environments.',
    es: 'Ingeniero de Software altamente técnico, enfocado en la resolución de problemas complejos mediante código limpio y eficiente. Experiencia en desarrollo full-stack, arquitectura de datos y metodologías ágiles. Capacidad demostrada para diseñar soluciones escalables, optimizar el rendimiento de sistemas y aplicar principios de seguridad web en entornos dinámicos.',
  },
  aboutText: {
    en: [
      'Highly technical Software Engineer, focused on solving complex problems through clean and efficient code.',
      'My background combines practical full-stack development, data architecture, robust backend engineering, and an increasing focus on Machine Learning and Edge AI.',
      'I possess demonstrated ability to design scalable solutions, optimize system performance, and enforce rigorous web security principles (OWASP Top 10, RBAC, CSRF mitigation) in production-grade environments.'
    ],
    es: [
      'Ingeniero de Software altamente técnico, enfocado en la resolución de problemas complejos mediante código limpio y eficiente.',
      'Mi trayectoria combina desarrollo práctico full-stack, arquitectura de datos, ingeniería de backend robusta y un enfoque activo en Machine Learning y Edge AI.',
      'Cuento con capacidad demostrada para diseñar soluciones escalables, optimizar el rendimiento de sistemas y aplicar principios rigurosos de seguridad web (OWASP Top 10, RBAC, mitigación CSRF) en entornos de producción.'
    ]
  },
  quickHighlights: {
    en: [
      {
        label: 'Academic Standing',
        value: 'First-Class Honours (Class I)',
        description: 'York St John University • Grade 9/10 equivalent'
      },
      {
        label: 'Technical Foundation',
        value: 'DAM Vocational + BSc (Hons)',
        description: 'Instituto Nebrija & York St John dual technical depth'
      },
      {
        label: 'Core Specialties',
        value: 'Full-Stack, Security & Edge AI',
        description: 'Go, Java, Python, Spring Boot, React & OWASP standards'
      },
      {
        label: 'Languages',
        value: 'English (B2 Prof.) • Spanish (Native)',
        description: 'Certified B2 professional working fluency'
      }
    ],
    es: [
      {
        label: 'Rendimiento Académico',
        value: 'First-Class Honours (Clase I)',
        description: 'York St John University • Nota media equivalente: 9/10'
      },
      {
        label: 'Base Técnica',
        value: 'FP Superior DAM + Grado',
        description: 'Instituto Nebrija y York St John: sólida base práctica y teórica'
      },
      {
        label: 'Especialidades',
        value: 'Full-Stack, Seguridad y Edge AI',
        description: 'Go, Java, Python, Spring Boot, React y estándares OWASP'
      },
      {
        label: 'Idiomas',
        value: 'Inglés (B2 Cert.) • Español (Nativo)',
        description: 'Certificación B2 y fluidez profesional'
      }
    ]
  },
  otherData: {
    en: [
      'Immediate availability for on-site, hybrid, or remote engineering positions',
      'Driving License (Category B)',
      'Continuous technical learning and rapid adaptability to evolving tech stacks',
      'Solid foundations in Agile methodologies and Git collaborative workflows'
    ],
    es: [
      'Disponibilidad inmediata para incorporación presencial, híbrida o remota',
      'Permiso de conducir (Categoría B)',
      'Adaptabilidad tecnológica continua y capacidad de aprendizaje autónomo',
      'Sólidas bases en metodologías ágiles y flujos colaborativos en Git'
    ]
  }
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'nebrija-technician',
    role: {
      en: 'Development Technician (Técnico de Desarrollo)',
      es: 'Técnico de Desarrollo',
    },
    company: 'Universidad Nebrija (Madrid)',
    period: {
      en: 'Apr 2025 – Jun 2025',
      es: 'Abril 2025 – Junio 2025',
    },
    location: {
      en: 'Madrid, Spain',
      es: 'Madrid, España',
    },
    type: {
      en: 'Work Experience',
      es: 'Experiencia Laboral',
    },
    summary: {
      en: 'Full-stack software development in production environments, building scalable solutions, creating secure REST APIs, and running systematic unit and integration testing.',
      es: 'Desarrollo full-stack de soluciones robustas, diseño e implementación de APIs REST seguras e integración de pruebas para garantizar calidad en producción.',
    },
    responsibilities: {
      en: [
        'Full-stack development of robust solutions, optimizing user experience, stability, and system scalability (Frontend and Backend).',
        'Design and implementation of efficient REST APIs to integrate third-party services, ensuring security in data transfer.',
        'Execution of unit and integration tests (software testing) to ensure code quality and reduce failures in production.'
      ],
      es: [
        'Desarrollo full-stack de soluciones robustas, optimizando la experiencia de usuario, la estabilidad y la escalabilidad del sistema (Frontend y Backend).',
        'Diseño e implementación de APIs REST eficientes para integrar servicios de terceros, garantizando la seguridad en la transferencia de datos.',
        'Ejecución de pruebas unitarias y de integración (software testing) para asegurar la calidad del código y reducir fallos en producción.'
      ]
    },
    technologies: ['Full-Stack', 'REST APIs', 'Software Testing', 'Unit Testing', 'Integration Testing', 'System Scalability', 'Data Transfer Security']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'york-st-john',
    degree: {
      en: 'BSc (Hons) Software Engineering',
      es: 'BSc (Hons) Software Engineering',
    },
    institution: 'York St John University',
    period: '2025 – 2026',
    location: {
      en: 'York, United Kingdom',
      es: 'York, Reino Unido',
    },
    level: {
      en: 'University Degree (BSc Hons)',
      es: 'Grado Universitario Oficial',
    },
    grade: {
      en: 'Equivalent average grade: 9/10 | First-Class Honours (Class I)',
      es: 'Nota media equivalente: 9/10 | First-Class Honours (Class I)',
    },
    description: {
      en: 'Rigorous British honours degree covering software architecture, distributed engineering, machine learning pipelines, and research methodology.',
      es: 'Titulación británica oficial de máximo honor enfocada en ingeniería de software, arquitectura de sistemas, pipelines de machine learning y metodología de investigación.',
    },
    highlights: {
      en: [
        'Awarded First-Class Honours (Class I) with an equivalent 9/10 average grade',
        'Final Degree Project (TFG): Bitcoin Price Prediction System & Edge AI (Grade: 9.0/10)',
        'Advanced system design, empirical research, and rigorous code verification'
      ],
      es: [
        'Calificación First-Class Honours (Clase I) con nota media equivalente de 9/10',
        'Trabajo de Fin de Grado (TFG): Sistema de Predicción de Bitcoin y Edge AI (Nota: 9.0/10)',
        'Diseño avanzado de sistemas, validación empírica y verificación rigurosa de código'
      ]
    },
    statusBadge: {
      en: 'First-Class Honours (9/10)',
      es: 'First-Class Honours (9/10)',
    }
  },
  {
    id: 'dam-nebrija',
    degree: {
      en: 'Higher Level Vocational Training in Cross-Platform Application Development (DAM)',
      es: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
    },
    institution: 'Instituto de Formación Profesional Nebrija (Madrid)',
    period: 'Completed',
    location: {
      en: 'Madrid, Spain',
      es: 'Madrid, España',
    },
    level: {
      en: 'Higher Vocational Training (Nivel 5 EQF / Formación Profesional)',
      es: 'Formación Profesional de Grado Superior',
    },
    description: {
      en: 'In-depth practical engineering in multiplatform architecture, object-oriented programming with Java, relational database modeling (JDBC, SQL), and multiplatform client interfaces.',
      es: 'Formación eminentemente técnica y práctica en desarrollo multiplataforma, programación orientada a objetos (Java), diseño de bases de datos (JDBC, SQL) y arquitecturas empresariales.',
    },
    highlights: {
      en: [
        'Strong OOP fundamentals: Java, Spring Boot, design patterns and clean code',
        'Data persistence and storage: SQLite, JDBC, Firebase and relational schemas',
        'Cross-platform development and responsive user experiences'
      ],
      es: [
        'Fundamentos sólidos de POO: Java, Spring Boot, patrones de diseño y código limpio',
        'Persistencia y almacenamiento: SQLite, JDBC, Firebase y modelado relacional',
        'Desarrollo multiplataforma y diseño de interfaces optimizadas'
      ]
    },
    statusBadge: {
      en: 'Graduated • Nebrija',
      es: 'Graduado • Nebrija',
    }
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'tfg-bitcoin-prediction',
    title: 'Final Degree Project (TFG): Bitcoin Prediction System',
    category: 'ai-ml',
    categoryLabel: {
      en: 'Machine Learning & Edge AI',
      es: 'Machine Learning & Edge AI',
    },
    grade: '9.0 / 10',
    year: '2026',
    shortDescription: {
      en: 'Machine Learning forecasting system for Bitcoin price estimation coupled with an Edge AI architecture for decentralized, low-latency real-time data processing.',
      es: 'Desarrollo de un modelo de predicción del precio de Bitcoin mediante algoritmos de Machine Learning y diseño de una arquitectura Edge AI para procesamiento descentralizado en tiempo real.',
    },
    longDescription: {
      en: 'Academic dissertation evaluated with a 9.0/10 mark. Combines time-series feature engineering (moving averages, lag returns, rolling volatility metrics) with regression algorithms. Integrates an Edge AI architecture to decentralize live market processing, minimizing server latency and resource consumption.',
      es: 'Trabajo de Fin de Grado calificado con 9.0/10. Combina ingeniería de características temporales (medias móviles, retardos, volatilidad móvil) con modelos de regresión y una arquitectura Edge AI para procesamiento descentralizado en tiempo real con mínima latencia.',
    },
    technologies: ['Python', 'Machine Learning', 'Edge AI', 'Scikit-learn', 'Pandas', 'NumPy', 'Technical Analysis', 'Decentralized Processing'],
    visualType: 'btc-forecast',
    githubUrl: null,
    liveDemoUrl: null,
    isPlaceholderUrl: false,
    status: {
      en: 'Grade: 9.0/10 • Completed (2026)',
      es: 'Nota: 9.0/10 • Completado (2026)',
    },
    academicContext: {
      en: 'BSc (Hons) Software Engineering TFG • York St John University',
      es: 'TFG Grado en Ingeniería de Software • York St John University',
    },
    features: {
      en: [
        'Development of a Bitcoin price prediction model using ML algorithms focused on technical market analysis',
        'Design of an Edge AI architecture for decentralized real-time data processing, optimizing resources and latency',
        'Rigorous time-series validation protocols to eliminate lookahead bias and ensure empirical integrity',
        'Real-time data feeds, automated feature extraction, and predictive trend evaluation'
      ],
      es: [
        'Desarrollo de un modelo de predicción del precio de Bitcoin utilizando algoritmos de Machine Learning enfocados en análisis técnico',
        'Diseño de una arquitectura Edge AI para procesamiento de datos descentralizado en tiempo real, optimizando recursos y latencia',
        'Protocolos de validación temporal rigurosos para eliminar sesgo de anticipación y garantizar rigor empírico',
        'Flujos de datos en tiempo real, extracción automatizada de características y estimación de tendencias'
      ]
    }
  },
  {
    id: 'secure-record-management-system',
    title: 'Secure Record Management System (SRMS)',
    category: 'security',
    categoryLabel: {
      en: 'Web Security & Go Backend',
      es: 'Seguridad Web & Backend Go',
    },
    year: '2026',
    shortDescription: {
      en: 'High-security web application built in Go adhering to OWASP Top 10 standards with RBAC, CSRF mitigation, bcrypt hashing, and IP rate limiting.',
      es: 'Aplicación web de gestión de registros médicos en Go con net/http y SQLite, implementando mitigaciones estrictas frente al OWASP Top 10, RBAC, CSRF y rate limiting.',
    },
    longDescription: {
      en: 'Enterprise medical record platform engineered with native Go (net/http and html/template) and SQLite. Designed with security-first defense-in-depth: complete prevention of SQL injection and XSS following the OWASP Top 10, Role-Based Access Control (RBAC), CSRF tokens, bcrypt password hashing, IP rate limiting, and automated account lockout after failed logins.',
      es: 'Plataforma de gestión de registros médicos construida con Go nativo (net/http y html/template) y SQLite. Diseñada con arquitectura de seguridad en profundidad: prevención total de inyección SQL y XSS siguiendo el OWASP Top 10, control de acceso por roles (RBAC), protección CSRF, hashing de contraseñas con bcrypt, rate limiting por IP y bloqueo de cuentas tras intentos fallidos.',
    },
    technologies: ['Go (Golang)', 'net/http', 'SQLite', 'Web Security', 'OWASP Top 10', 'RBAC', 'bcrypt', 'CSRF Protection', 'Rate Limiting'],
    visualType: 'srms-security',
    githubUrl: null,
    liveDemoUrl: null,
    isPlaceholderUrl: false,
    status: {
      en: 'Production-Grade Security Architecture (2026)',
      es: 'Arquitectura de Seguridad Empresarial (2026)',
    },
    features: {
      en: [
        'Web application engineered in Go using standard library net/http, html/template, and SQLite database',
        'Strict prevention of SQL injection and Cross-Site Scripting (XSS) adhering to the OWASP Top 10',
        'Role-Based Access Control (RBAC) separating administrative, physician, and user permissions',
        'CSRF token validation and cryptographic password hashing with bcrypt',
        'IP rate limiting and automated account lockout after repeated failed authentication attempts'
      ],
      es: [
        'Aplicación web desarrollada en Go con net/http, html/template y base de datos SQLite',
        'Prevención estricta de inyección SQL y Cross-Site Scripting (XSS) siguiendo las pautas de OWASP Top 10',
        'Control de acceso basado en roles (RBAC) para separar permisos de administración, facultativos y usuarios',
        'Validación de tokens CSRF y hashing criptográfico de contraseñas mediante bcrypt',
        'Rate limiting por dirección IP y bloqueo temporal de cuenta tras intentos fallidos de inicio de sesión'
      ]
    }
  },
  {
    id: 'fullstack-architecture-app',
    title: 'Full-Stack Distributed Application',
    category: 'fullstack',
    categoryLabel: {
      en: 'Full-Stack Architecture',
      es: 'Arquitectura Full-Stack',
    },
    shortDescription: {
      en: 'Decoupled full-stack system demonstrating clean architecture, RESTful API design, database persistence, and automated test coverage.',
      es: 'Sistema desacoplado full-stack que demuestra arquitectura limpia, diseño de APIs REST, persistencia relacional y cobertura de pruebas automatizadas.',
    },
    longDescription: {
      en: 'Multi-tier web application built with a decoupled architecture. Features structured RESTful endpoints, relational data normalization, transaction integrity, and robust unit & integration testing to reduce defects in production.',
      es: 'Aplicación web multicapa construida con arquitectura desacoplada. Incorpora endpoints REST limpios, normalización de datos relacionales, integridad transaccional y pruebas unitarias y de integración para reducir fallos en producción.',
    },
    technologies: ['TypeScript', 'React', 'Node.js / Java', 'Spring Boot', 'REST APIs', 'SQL / JDBC', 'Testing'],
    visualType: 'fullstack-arch',
    githubUrl: null,
    liveDemoUrl: null,
    isPlaceholderUrl: false,
    status: {
      en: 'Enterprise Architecture Pattern',
      es: 'Patrón de Arquitectura Empresarial',
    },
    features: {
      en: [
        'Decoupled frontend & backend services with strict boundary contracts',
        'REST API design for seamless third-party and client data exchange',
        'Database abstraction with JDBC / SQL schemas',
        'Systematic unit and integration testing suite for deployment safety'
      ],
      es: [
        'Servicios desacoplados de frontend y backend con contratos estrictos',
        'Diseño de APIs REST para intercambio seguro de datos con terceros',
        'Abstracción de bases de datos mediante esquemas SQL y JDBC',
        'Suite de pruebas unitarias y de integración para seguridad en despliegue'
      ]
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages-frameworks',
    title: {
      en: 'Languages & Frameworks',
      es: 'Lenguajes y Frameworks',
    },
    icon: 'Code2',
    skills: [
      { name: 'Go (Golang)', levelHint: { en: 'Backend, Net/HTTP, Concurrency', es: 'Backend, Net/HTTP, Concurrencia' }, featured: true },
      { name: 'Java', levelHint: { en: 'Core OOP, Enterprise, JDBC', es: 'POO, Entornos empresariales, JDBC' }, featured: true },
      { name: 'Python', levelHint: { en: 'Machine Learning, Edge AI, Data', es: 'Machine Learning, Edge AI, Datos' }, featured: true },
      { name: 'JavaScript', levelHint: { en: 'Modern ES6+, Web Services', es: 'ES6+ moderno, Servicios Web' }, featured: true },
      { name: 'TypeScript', levelHint: { en: 'Type-Safe Applications', es: 'Desarrollo tipado escalable' }, featured: true },
      { name: 'Spring Boot', levelHint: { en: 'Java Microservices & APIs', es: 'Microservicios y APIs en Java' }, featured: true },
      { name: 'React', levelHint: { en: 'SPA, Hooks, State Systems', es: 'SPA, Hooks, Gestión de estado' }, featured: true },
      { name: 'Angular', levelHint: { en: 'Enterprise Frontend Architecture', es: 'Arquitectura frontend empresarial' } },
      { name: 'Svelte', levelHint: { en: 'Reactive Modern Interfaces', es: 'Interfaces reactivas modernas' } },
    ]
  },
  {
    id: 'security-specialties',
    title: {
      en: 'Web Security & IT Specialties',
      es: 'Seguridad Web y Especialidades IT',
    },
    icon: 'Shield',
    skills: [
      { name: 'Web Security (OWASP Top 10)', levelHint: { en: 'SQLi, XSS, CSRF Mitigation', es: 'Mitigación de SQLi, XSS, CSRF' }, featured: true },
      { name: 'RBAC (Role-Based Access Control)', levelHint: { en: 'Granular Privilege Separation', es: 'Separación granular de privilegios' }, featured: true },
      { name: 'Cryptographic Hashing (bcrypt)', levelHint: { en: 'Credential Protection & Salt', es: 'Protección de credenciales y salting' }, featured: true },
      { name: 'IP Rate Limiting & Account Lockout', levelHint: { en: 'Brute-Force & Abuse Defense', es: 'Defensa frente a fuerza bruta' }, featured: true },
      { name: 'REST APIs Design & Integration', levelHint: { en: 'Secure Data Transfer', es: 'Transferencia segura de datos' }, featured: true },
      { name: 'Software Testing (Unit & Integration)', levelHint: { en: 'Defect Reduction in Production', es: 'Reducción de fallos en producción' }, featured: true },
      { name: 'Full-Stack Architecture', levelHint: { en: 'Scalable System Engineering', es: 'Ingeniería de sistemas escalables' }, featured: true },
      { name: 'Edge AI', levelHint: { en: 'Decentralized Real-Time Inference', es: 'Inferencia descentralizada en tiempo real' }, featured: true },
      { name: 'Machine Learning', levelHint: { en: 'Predictive Modeling & Scikit-learn', es: 'Modelos predictivos y Scikit-learn' }, featured: true },
      { name: 'Linux', levelHint: { en: 'Environment & Command Line', es: 'Entorno de sistemas y CLI' } },
      { name: 'Git & GitHub', levelHint: { en: 'Version Control & Agile Flow', es: 'Control de versiones y flujo ágil' }, featured: true },
    ]
  },
  {
    id: 'databases-cloud',
    title: {
      en: 'Databases & Cloud',
      es: 'Bases de Datos y Cloud',
    },
    icon: 'Database',
    skills: [
      { name: 'SQLite', levelHint: { en: 'Embedded Lightweight RDBMS', es: 'SGBD relacional ligero embebido' }, featured: true },
      { name: 'JDBC', levelHint: { en: 'Java Database Connectivity', es: 'Conectividad de datos en Java' }, featured: true },
      { name: 'Firebase', levelHint: { en: 'Cloud NoSQL & Services', es: 'NoSQL en la nube y servicios' }, featured: true },
      { name: 'Cloud Computing & Deployment', levelHint: { en: 'Hosting, Compute & Scaling', es: 'Despliegue y computación en la nube' }, featured: true },
      { name: 'MySQL', levelHint: { en: 'Relational Database Schema', es: 'Esquema relacional de bases de datos' } },
      { name: 'PostgreSQL', levelHint: { en: 'ACID Relational Engine', es: 'Motor relacional ACID' } },
    ]
  }
];

export const UI_TRANSLATIONS = {
  nav: {
    home: { en: 'Home', es: 'Inicio' },
    about: { en: 'About', es: 'Sobre mí' },
    experience: { en: 'Experience', es: 'Experiencia' },
    education: { en: 'Education', es: 'Educación' },
    projects: { en: 'Projects', es: 'Proyectos' },
    skills: { en: 'Skills', es: 'Habilidades' },
    contact: { en: 'Contact', es: 'Contacto' },
  },
  hero: {
    viewProjects: { en: 'View projects', es: 'Ver proyectos' },
    getInTouch: { en: 'Get in touch', es: 'Contactar' },
    githubProfile: { en: 'GitHub profile', es: 'Perfil de GitHub' },
    downloadCv: { en: 'Download CV (PDF)', es: 'Descargar CV (PDF)' },
    terminalTag: { en: 'Software Engineer — Full-Stack Developer', es: 'Ingeniero de Software — Desarrollador Full-Stack' },
    gradeBadge: { en: 'BSc (Hons) First-Class Honours (9/10)', es: 'BSc (Hons) First-Class Honours (9/10)' },
  },
  about: {
    title: { en: 'About Me', es: 'Sobre Mí' },
    subtitle: { en: 'Professional profile, engineering mindset and academic honors', es: 'Perfil profesional, enfoque de ingeniería y distinciones académicas' },
    downloadCv: { en: 'Download Verified CV', es: 'Descargar CV Verificado' },
    cvNotice: { en: 'Official PDF available in English & Spanish', es: 'PDF oficial disponible en inglés y español' },
    academicFoundation: { en: 'Academic Foundation', es: 'Base Académica' },
    coreInterests: { en: 'Areas of Interest', es: 'Áreas de Especialización' },
    otherDetailsTitle: { en: 'Availability & Competencies', es: 'Disponibilidad y Competencias' },
  },
  experience: {
    title: { en: 'Work Experience', es: 'Experiencia Laboral' },
    subtitle: { en: 'Hands-on roles in software engineering and production development', es: 'Roles prácticos en ingeniería de software y desarrollo en producción' },
    responsibilitiesTitle: { en: 'Key Responsibilities & Scope', es: 'Responsabilidades Clave y Alcance' },
  },
  education: {
    title: { en: 'Education & Training', es: 'Educación y Formación' },
    subtitle: { en: 'Academic degrees, university honors and certified vocational training', es: 'Titulaciones académicas, honores universitarios y formación técnica' },
    keyCompetencies: { en: 'Key Achievements & Focus', es: 'Logros Clave y Enfoque' },
  },
  projects: {
    title: { en: 'Key Projects', es: 'Proyectos Destacados' },
    subtitle: { en: 'Verified software implementations across Edge AI, Machine Learning, Web Security and Full-Stack', es: 'Proyectos reales en Edge AI, Machine Learning, Seguridad Web (OWASP) y Full-Stack' },
    filterAll: { en: 'All Projects', es: 'Todos' },
    filterAi: { en: 'AI & Machine Learning', es: 'IA y ML' },
    filterSecurity: { en: 'Security & Go', es: 'Seguridad y Go' },
    filterFullstack: { en: 'Full-Stack', es: 'Full-Stack' },
    filterData: { en: 'Data Analytics', es: 'Analítica' },
    viewDetails: { en: 'View Details', es: 'Ver Detalles' },
    codeRepository: { en: 'View Repository', es: 'Ver Repositorio' },
    liveDemo: { en: 'Live Demo', es: 'Demostración' },
    placeholderBadge: { en: 'Verified Academic & Practical Engineering', es: 'Proyectos Reales Verificados' },
  },
  skills: {
    title: { en: 'Technical Skills', es: 'Competencias Técnicas' },
    subtitle: { en: 'Languages, frameworks, databases, cloud, and security competencies from verified CV', es: 'Lenguajes, frameworks, bases de datos, cloud y seguridad contrastados en CV' },
    allTab: { en: 'All Technologies', es: 'Todas las Competencias' },
    clarificationNote: { en: 'Verified competencies from official curriculum vitae. No arbitrary percentage bars.', es: 'Competencias técnicas verificadas según currículum oficial. Sin porcentajes arbitrarios.' },
  },
  contact: {
    title: { en: "Let's build something together.", es: 'Construyamos algo juntos.' },
    subtitle: { en: "I'm always interested in connecting with people, exploring new opportunities, and discussing engineering challenges.", es: 'Siempre interesado en conectar, explorar nuevas oportunidades laborales y abordar retos técnicos.' },
    nameLabel: { en: 'Your Name', es: 'Tu Nombre' },
    namePlaceholder: { en: 'e.g. Sarah Jenkins', es: 'ej. Alejandro Gómez' },
    emailLabel: { en: 'Email Address', es: 'Correo Electrónico' },
    emailPlaceholder: { en: 'e.g. sarah@company.com', es: 'ej. alejandro@empresa.com' },
    subjectLabel: { en: 'Subject', es: 'Asunto' },
    subjectPlaceholder: { en: 'e.g. Software Engineering Opportunity at [Company]', es: 'ej. Oportunidad como Ingeniero de Software' },
    messageLabel: { en: 'Message', es: 'Mensaje' },
    messagePlaceholder: { en: 'Tell me about the role, project, or what you would like to discuss...', es: 'Cuéntame sobre el rol, el proyecto o qué te gustaría comentar...' },
    submitButton: { en: 'Send Message', es: 'Enviar Mensaje' },
    prototypeNotice: { en: 'Client validation active. You can also reach me directly at pablovillanueva48@gmail.com or via LinkedIn / Phone.', es: 'Validación de cliente activa. También puedes contactarme directamente en pablovillanueva48@gmail.com, LinkedIn o teléfono.' },
    successMessage: { en: 'Thank you! Your message has been validated successfully.', es: '¡Gracias! Tu mensaje ha sido validado correctamente.' },
    directEmail: { en: 'Direct Email', es: 'Correo Directo' },
    phoneNumber: { en: 'Phone Number', es: 'Teléfono' },
    locationText: { en: 'Location', es: 'Ubicación' },
    socialText: { en: 'Contact & Professional Networks', es: 'Contacto y Redes Profesionales' },
    availabilityText: { en: 'Availability', es: 'Disponibilidad' },
  },
  footer: {
    rightsReserved: { en: 'All rights reserved.', es: 'Todos los derechos reservados.' },
    backToTop: { en: 'Back to top', es: 'Volver arriba' },
    craftedWith: { en: 'Engineered with React, TypeScript & Tailwind CSS', es: 'Diseñado con React, TypeScript y Tailwind CSS' },
  }
};
