import { PersonalInfo, ExperienceItem, EducationItem, ProjectItem, SkillCategory, SocialLinks } from '../types/portfolio';

/**
 * ============================================================================
 * PORTFOLIO DATA - PABLO VILLANUEVA PICAZO
 * ============================================================================
 * 
 * Software Engineer | Full Stack Developer
 * Interested in Artificial Intelligence, Machine Learning and Data Analytics.
 * 
 * Education:
 * - BSc (Hons) Software Engineering (First-Class Honours, 9/10) - York St John University
 * - Higher Vocational Training DAM (Cross-Platform Application Development) - Nebrija
 * 
 * Experience:
 * - Development Technician - Universidad Nebrija
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
    en: 'Software Engineer | Full Stack Developer',
    es: 'Ingeniero de Software | Desarrollador Full Stack',
  },
  heroHeading: {
    en: 'Software Engineer | Full Stack Developer',
    es: 'Ingeniero de Software | Desarrollador Full Stack',
  },
  heroSubheading: {
    en: 'Interested in Artificial Intelligence, Machine Learning and Data Analytics.',
    es: 'Interesado en Inteligencia Artificial, Machine Learning y Analítica de Datos.',
  },
  heroIntro: {
    en: 'Software Engineering graduate (First-Class Honours, 9/10) from York St John University and Higher Vocational DAM from Nebrija. Focused on building robust web applications, reliable backend systems, and practical data tools with Go, Python, TypeScript, and React.',
    es: 'Graduado en Software Engineering (First-Class Honours, 9/10) por York St John University y Técnico Superior DAM por Nebrija. Enfocado en el desarrollo de aplicaciones web robustas, sistemas backend fiables y herramientas prácticas con Go, Python, TypeScript y React.',
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
    en: 'Available for Opportunities • Madrid, Spain',
    es: 'Disponible para incorporación • Madrid, España',
  },
  cvFilename: {
    en: 'cv-pablo-villanueva-en.pdf',
    es: 'cv-pablo-villanueva-es.pdf',
  },
  professionalProfile: {
    en: 'Software Engineer and Full Stack Developer with strong foundations in software design, backend architectures, relational databases, and modern web interfaces. Proven academic performance (First-Class Honours, 9/10) coupled with practical development experience. Actively curious about Artificial Intelligence, Machine Learning, and Data Analytics, applying them as practical solutions in software projects.',
    es: 'Ingeniero de Software y Desarrollador Full Stack con sólida base en diseño de software, arquitecturas backend, bases de datos relacionales e interfaces web modernas. Destacado rendimiento académico (First-Class Honours, 9/10) y experiencia práctica en desarrollo. Activo interés en Inteligencia Artificial, Machine Learning y Analítica de Datos, aplicándolos como herramientas prácticas en proyectos reales.',
  },
  aboutText: {
    en: [
      'I am a Software Engineer and Full Stack Developer based in Madrid, Spain. My technical background began with practical multiplatform application development (DAM at Nebrija), followed by a Bachelor of Science (Honours) in Software Engineering at York St John University, where I graduated with First-Class Honours (Class I, 9/10 equivalent).',
      'I focus on building reliable, maintainable software across the full stack: from structuring relational databases and building efficient backend services in Go and Java, to developing responsive, typed web applications with React and TypeScript. During my time as a Development Technician at Universidad Nebrija, I contributed to full-stack features, third-party API integrations, and unit/integration testing in production.',
      'Alongside core software engineering, I maintain an active interest in Artificial Intelligence, Machine Learning, and Data Analytics. Rather than treating them as abstract concepts, I build practical tools around them: time-series forecasting models, automated local LLM workflows, and data parsing utilities for statistical analysis.'
    ],
    es: [
      'Soy Ingeniero de Software y Desarrollador Full Stack en Madrid, España. Mi formación técnica comenzó con el Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM en Nebrija), complementado con el Grado en Software Engineering por York St John University, donde me gradué con First-Class Honours (Clase I, nota media equivalente: 9/10).',
      'Me enfoco en construir software fiable, limpio y mantenible en todo el stack: desde el modelado de bases de datos relacionales y el desarrollo de servicios backend en Go y Java, hasta la creación de interfaces web tipadas y reactivas con React y TypeScript. Durante mi etapa como Técnico de Desarrollo en la Universidad Nebrija, participé en el desarrollo de funcionalidades full-stack, integración de APIs y pruebas de software en producción.',
      'Junto a la ingeniería de software tradicional, tengo un interés continuo por la Inteligencia Artificial, el Machine Learning y la Analítica de Datos. Me gusta aplicarlos de forma práctica en proyectos reales: modelos predictivos de series temporales, flujos de automatización local con LLMs y herramientas de parsing para análisis estadístico.'
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
        value: 'BSc (Hons) + Vocational DAM',
        description: 'Rigorous dual background in practical and academic engineering'
      },
      {
        label: 'Primary Focus',
        value: 'Full Stack & Software Engineering',
        description: 'Go, Python, TypeScript, React, Java & SQL'
      },
      {
        label: 'Areas of Interest',
        value: 'AI, Machine Learning & Analytics',
        description: 'Applied ML models, data pipelines and local LLM workflows'
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
        value: 'Grado Software Eng. + DAM',
        description: 'Sólida base combinada entre práctica profesional y grado universitario'
      },
      {
        label: 'Especialidad Principal',
        value: 'Full Stack e Ingeniería de Software',
        description: 'Go, Python, TypeScript, React, Java y SQL'
      },
      {
        label: 'Áreas de Interés',
        value: 'IA, Machine Learning y Analítica',
        description: 'Modelos aplicados, pipelines de datos y flujos con LLMs locales'
      }
    ]
  },
  otherData: {
    en: [
      'Immediate availability for on-site (Madrid), hybrid, or remote software engineering roles',
      'Driving License (Category B)',
      'Practical experience with Git version control, testing methodologies, and Linux environments',
      'Motivated by writing clean code, solving technical problems, and continuous learning'
    ],
    es: [
      'Disponibilidad inmediata para puestos presenciales (Madrid), híbridos o remotos',
      'Permiso de conducir (Categoría B)',
      'Experiencia práctica con control de versiones Git, metodologías de testing y entornos Linux',
      'Motivado por escribir código limpio, resolver problemas técnicos y el aprendizaje continuo'
    ]
  }
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'nebrija-technician',
    role: {
      en: 'Development Technician',
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
      en: 'Full-stack software development in a production environment, building application features, integrating REST APIs, and implementing unit and integration testing.',
      es: 'Desarrollo de software full-stack en entorno de producción, implementando funcionalidades de aplicación, integración de APIs REST y pruebas unitarias y de integración.',
    },
    responsibilities: {
      en: [
        'Developed and maintained full-stack application features across frontend interfaces and backend logic.',
        'Designed and implemented REST APIs for data communication and third-party service integration.',
        'Wrote unit and integration tests to ensure code quality and prevent regressions in production.',
        'Collaborated using Git version control, following team development standards and agile workflows.'
      ],
      es: [
        'Desarrollo y mantenimiento de funcionalidades full-stack en frontend y backend de aplicaciones.',
        'Diseño e integración de APIs REST para la comunicación de datos y conexión con servicios externos.',
        'Ejecución de pruebas unitarias y de integración para asegurar la estabilidad del código en producción.',
        'Trabajo colaborativo con control de versiones Git y flujos de trabajo ágiles.'
      ]
    },
    technologies: ['Full-Stack', 'REST APIs', 'Software Testing', 'Unit Testing', 'Integration Testing', 'Git', 'Agile']
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
      en: 'British honours degree covering software architecture, distributed engineering, machine learning pipelines, and research methodology.',
      es: 'Grado británico oficial de máximo honor enfocado en ingeniería de software, arquitectura de sistemas, pipelines de machine learning y metodología de investigación.',
    },
    highlights: {
      en: [
        'Graduated with First-Class Honours (Class I), equivalent to 9/10 average grade',
        'Final Degree Project (TFG): Bitcoin Price Forecasting System & Edge AI (Grade: 9.0/10)',
        'Core curriculum in software design, algorithms, machine learning, and systems verification'
      ],
      es: [
        'Graduado con First-Class Honours (Clase I), equivalente a 9/10 de nota media',
        'Trabajo de Fin de Grado (TFG): Sistema de Predicción de Bitcoin y Edge AI (Nota: 9.0/10)',
        'Formación en diseño de software, algoritmos, machine learning y verificación de sistemas'
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
      en: 'Practical technical training in multiplatform software development, object-oriented programming with Java, relational database modeling, and application architecture.',
      es: 'Formación técnica y práctica en desarrollo de software multiplataforma, programación orientada a objetos en Java, modelado de bases de datos relacionales y arquitectura de aplicaciones.',
    },
    highlights: {
      en: [
        'Solid OOP fundamentals with Java, design patterns, and clean code practices',
        'Relational database design and persistence with SQL, SQLite, and JDBC',
        'Frontend and desktop client application development'
      ],
      es: [
        'Fundamentos sólidos de POO con Java, patrones de diseño y buenas prácticas de código',
        'Modelado y persistencia en bases de datos relacionales con SQL, SQLite y JDBC',
        'Desarrollo de interfaces de usuario y aplicaciones cliente multiplataforma'
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
    title: 'Bitcoin Price Forecasting System (TFG)',
    category: 'ai-ml',
    categoryLabel: {
      en: 'Machine Learning & Time-Series',
      es: 'Machine Learning & Series Temporales',
    },
    grade: '9.0 / 10',
    year: '2026',
    shortDescription: {
      en: 'Machine learning forecasting pipeline for Bitcoin time-series data using Scikit-learn and chronological cross-validation, coupled with an Edge AI architecture for low-latency decentralized inference.',
      es: 'Pipeline de predicción con machine learning para series temporales de Bitcoin en Scikit-learn con validación cronológica, junto a una arquitectura Edge AI para inferencia descentralizada de baja latencia.',
    },
    longDescription: {
      en: 'Academic dissertation evaluated with a 9.0/10 mark. The project investigates financial time-series forecasting using technical indicators and machine learning regression models (Random Forest, Linear Regression). It evaluates decentralized Edge AI inference to reduce server latency and avoid centralized processing bottlenecks.',
      es: 'Trabajo de Fin de Grado calificado con 9.0/10. Investiga la predicción de series temporales financieras mediante indicadores técnicos y modelos de regresión en machine learning (Random Forest, Regresión Lineal), evaluando inferencia descentralizada en Edge AI para reducir la latencia.',
    },
    problem: {
      en: 'Cryptocurrency price data is highly noisy, volatile, and non-stationary. Standard random cross-validation introduces severe lookahead bias (data leakage) by training models on future data to predict the past. Centralized cloud models also incur latency and cloud hosting costs.',
      es: 'Las series de precios de criptomonedas tienen alta volatilidad, ruido y no estacionariedad. La validación cruzada aleatoria estándar introduce sesgo de anticipación (data leakage) al entrenar con datos del futuro para predecir el pasado. Además, los modelos centralizados en la nube sufren latencia y costes de infraestructura.',
    },
    solution: {
      en: 'Engineered an end-to-end Python pipeline using Scikit-learn and Pandas. Built technical feature extractors (moving averages, lag returns, rolling volatility), enforced strict walk-forward chronological validation (TimeSeriesSplit) to guarantee realistic evaluation, and designed an Edge AI framework for localized inference.',
      es: 'Desarrollé un pipeline en Python con Scikit-learn y Pandas. Creé extractores de características técnicas (medias móviles, retardos, volatilidad móvil), apliqué validación cronológica hacia adelante (TimeSeriesSplit) para garantizar una evaluación realista y diseñé un esquema Edge AI para inferencia localizada.',
    },
    myContribution: {
      en: 'Conceived and implemented the full codebase: automated data ingestion with yfinance, feature engineering routines, model training and hyperparameter tuning, validation splits, and authoring the complete academic dissertation (evaluated at 9.0/10).',
      es: 'Diseñé e implementé el código completo: ingesta automatizada con yfinance, rutinas de ingeniería de características, entrenamiento y ajuste de hiperparámetros, particiones de validación temporal y redacción de la memoria académica (calificada con 9.0/10).',
    },
    challengesAndLearnings: {
      en: 'Learned the critical distinction between standard ML benchmarks and real-world sequential data: preventing data leakage requires strict temporal splits. Discovered that data quality, feature design, and realistic metrics (MAE, directional accuracy) matter far more than model complexity.',
      es: 'Aprendí la diferencia fundamental entre problemas estándar de ML y datos secuenciales reales: evitar data leakage requiere particiones temporales estrictas. Comprobé que la calidad de los datos, el diseño de variables y métricas realistas (MAE y acierto direccional) son mucho más importantes que añadir complejidad al modelo.',
    },
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'TimeSeriesSplit', 'Edge AI', 'yfinance', 'Technical Indicators'],
    visualType: 'btc-forecast',
    githubUrl: 'https://github.com/villanuevapablo/bitcoin-price-forecasting',
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
        'End-to-end Python pipeline for historical market data ingestion and technical indicator computation',
        'Strict chronological walk-forward cross-validation (TimeSeriesSplit) to prevent lookahead bias',
        'Trained and benchmarked regression models (Random Forest, Linear Regression) with MAE and directional metrics',
        'Edge AI architecture designed for localized, decentralized inference to minimize latency'
      ],
      es: [
        'Pipeline completo en Python para ingesta de datos de mercado y cálculo de indicadores técnicos',
        'Validación cruzada cronológica estricta (TimeSeriesSplit) para eliminar cualquier sesgo de anticipación',
        'Entrenamiento y comparación de modelos de regresión (Random Forest, Regresión Lineal) con MAE y métricas direccionales',
        'Diseño de arquitectura Edge AI orientada a inferencia local descentralizada con mínima latencia'
      ]
    }
  },
  {
    id: 'secure-record-management-system',
    title: 'Secure Record Management System (SRMS)',
    category: 'security',
    categoryLabel: {
      en: 'Go Backend & Systems',
      es: 'Backend en Go & Sistemas',
    },
    year: '2026',
    shortDescription: {
      en: 'Full-stack medical record management web application built with native Go and SQLite, implementing defense-in-depth security principles against OWASP Top 10 vulnerabilities.',
      es: 'Aplicación web full-stack de gestión de registros médicos construida con Go nativo y SQLite, aplicando principios de defensa en profundidad contra vulnerabilidades OWASP Top 10.',
    },
    longDescription: {
      en: 'A high-security medical record management platform built with standard library Go (net/http, html/template) and SQLite. Designed with security-first architecture: complete mitigation of SQL injection via parameterized queries, XSS prevention through context-aware template escaping, synchronized CSRF tokens, bcrypt password hashing, role-based access control, and IP rate limiting.',
      es: 'Plataforma de gestión de registros médicos desarrollada con Go estándar (net/http, html/template) y SQLite. Diseñada con arquitectura de seguridad en profundidad: mitigación total de inyección SQL mediante consultas preparadas, prevención de XSS con escape contextual, tokens CSRF, bcrypt, control de acceso por roles y rate limiting por IP.',
    },
    problem: {
      en: 'Web applications handling sensitive patient records are frequent targets of SQL injection, cross-site scripting (XSS), cross-site request forgery (CSRF), and credential brute-forcing.',
      es: 'Las aplicaciones web que gestionan registros de pacientes son objetivo frecuente de inyecciones SQL, cross-site scripting (XSS), ataques CSRF y fuerza bruta en autenticación.',
    },
    solution: {
      en: 'Engineered a secure web application utilizing Go standard library. Implemented parameterized queries for all database operations, secure session cookies (HttpOnly, SameSite), CSRF token validation on state-changing requests, bcrypt password hashing, and in-memory IP rate limiting to block brute-force attempts.',
      es: 'Desarrollé una aplicación web segura con la biblioteca estándar de Go. Implementé consultas preparadas para todas las operaciones en base de datos, cookies de sesión seguras (HttpOnly, SameSite), tokens CSRF en peticiones mutables, hashing bcrypt y un rate limiter en memoria por IP para mitigar fuerza bruta.',
    },
    myContribution: {
      en: 'Built the application end-to-end: modeled the relational database schema in SQLite, wrote authentication middleware, implemented role-based access control (differentiating doctors, admins, and patients), and created the responsive frontend templates.',
      es: 'Desarrollé la aplicación de principio a fin: modelé el esquema relacional en SQLite, programé middleware de autenticación, implementé control de acceso por roles (separando médicos, administradores y pacientes) y creé las plantillas web responsivas.',
    },
    challengesAndLearnings: {
      en: 'Working without heavy third-party web frameworks required building clean HTTP middleware chaining in Go and understanding cookie security flags deeply. Reinforced the principle that web security must be built into the architectural foundation rather than added as an afterthought.',
      es: 'Prescindir de frameworks externos me exigió dominar el encadenamiento de middleware HTTP en Go y comprender a fondo las directivas de seguridad en cookies. Reforzó el principio de que la seguridad debe ser parte de la arquitectura desde el primer momento.',
    },
    technologies: ['Go (Golang)', 'net/http', 'html/template', 'SQLite', 'bcrypt', 'RBAC', 'CSRF Protection', 'Rate Limiting'],
    visualType: 'srms-security',
    githubUrl: 'https://github.com/villanuevapablo/SRMS-MEDICAL',
    liveDemoUrl: null,
    isPlaceholderUrl: false,
    status: {
      en: 'Go Full-Stack Application (2026)',
      es: 'Aplicación Full-Stack en Go (2026)',
    },
    features: {
      en: [
        'Engineered with Go standard library (net/http, html/template) with zero heavy external web dependencies',
        'Relational data persistence in SQLite with strictly parameterized queries preventing SQL injection',
        'Role-Based Access Control (RBAC) separating administrative, physician, and patient views',
        'Cryptographic password hashing via bcrypt, CSRF protection, and in-memory IP rate limiting'
      ],
      es: [
        'Desarrollada con la biblioteca estándar de Go (net/http, html/template) sin dependencias web pesadas',
        'Persistencia relacional en SQLite con consultas preparadas que eliminan el riesgo de inyección SQL',
        'Control de acceso por roles (RBAC) que separa permisos entre administración, médicos y pacientes',
        'Hashing de contraseñas con bcrypt, protección contra CSRF y limitador de tasa por IP en memoria'
      ]
    }
  },
  {
    id: 'smart-file-organizer',
    title: 'Smart File Organizer',
    category: 'ai-ml',
    categoryLabel: {
      en: 'Automation & Local AI',
      es: 'Automatización & IA Local',
    },
    year: '2026',
    shortDescription: {
      en: 'Python automation utility and background service that monitors filesystem directories in real time, extracts document text, and categorizes files using a local Ollama model with enforced JSON schemas.',
      es: 'Utilidad de automatización en Python y servicio en segundo plano que monitoriza carpetas en tiempo real, extrae texto de documentos y clasifica archivos mediante un LLM local en Ollama con esquemas JSON.',
    },
    longDescription: {
      en: 'A desktop automation tool and background service engineered in Python. It watches target folders (e.g., Downloads) via watchdog, validates file lock status to prevent premature reads during active downloads, extracts text and metadata across multiple formats (text, PDF multi-page parsing with pypdf), and queries a local Ollama LLM with strict JSON schema constraints for deterministic file categorization and renaming.',
      es: 'Herramienta de automatización y servicio en segundo plano desarrollada en Python. Monitoriza directorios con watchdog, valida el bloqueo de archivos para evitar lecturas de descargas en curso, extrae texto y metadatos multiformato (incluyendo PDFs con pypdf) y consulta a un modelo local en Ollama con esquemas JSON estructurados para clasificar y renombrar.',
    },
    problem: {
      en: 'Local download directories quickly accumulate poorly named and disorganized documents. Commercial cloud sorting solutions require paid subscriptions, consume external API tokens, and expose private personal files to third-party servers.',
      es: 'Las carpetas de descargas se llenan de archivos desordenados y nombres poco descriptivos. Las soluciones cloud requieren suscripciones de pago y exponen documentos personales privados a servidores externos.',
    },
    solution: {
      en: 'Built a local-first Python application that runs 100% on the user\'s machine with zero recurring costs and complete privacy. Uses watchdog for event-driven filesystem monitoring, implements file stability checks, and leverages local Ollama models with enforced JSON output schemas for deterministic sorting.',
      es: 'Construí una aplicación en Python 100% local, sin costes recurrentes y con total privacidad. Utiliza watchdog para monitorización reactiva de carpetas, implementa comprobaciones de estabilidad de archivos y aprovecha modelos locales en Ollama con esquemas JSON estructurados.',
    },
    myContribution: {
      en: 'Created the event-driven filesystem listener, built the multi-format content extractors (handling PDFs, text, and binary metadata), integrated the Ollama REST API with prompt templates and JSON schema validation, and created a clean Tkinter desktop interface alongside the background daemon.',
      es: 'Programé el listener reactivo del sistema de archivos, desarrollé los extractores de contenido multiformato (con soporte multipágina de PDFs), integré la API REST de Ollama con validación de esquemas JSON y construí una interfaz de escritorio en Tkinter además del servicio en segundo plano.',
    },
    challengesAndLearnings: {
      en: 'Handled OS-level file locking issues where creation events fire while a browser is still actively writing a download. Solved this with polling checks on file size and handle availability. Learned how to reliably constrain generative language models to produce valid, parseable JSON.',
      es: 'Resolví problemas de concurrencia y bloqueo de archivos cuando el sistema notifica eventos de creación mientras el navegador aún sigue escribiendo la descarga (solucionado mediante polling de tamaño y disponibilidad). Aprendí a forzar salidas JSON deterministas y válidas en modelos de lenguaje.',
    },
    technologies: ['Python', 'watchdog', 'Ollama API', 'Local LLMs', 'pypdf', 'JSON Schema', 'Tkinter GUI'],
    visualType: 'smart-organizer',
    githubUrl: 'https://github.com/villanuevapablo/smart-file-organizer',
    liveDemoUrl: null,
    isPlaceholderUrl: false,
    status: {
      en: 'Python Desktop App & Daemon (2026)',
      es: 'App de Escritorio & Servicio Python (2026)',
    },
    features: {
      en: [
        'Real-time folder monitoring with watchdog for automatic detection of new files',
        'File stability and lock verification to avoid premature reading of in-progress downloads',
        'Multi-format content extraction: text streams, PDF multi-page parsing with pypdf, and metadata',
        'Local LLM inference via Ollama REST API with strictly enforced JSON schemas for deterministic sorting'
      ],
      es: [
        'Monitorización de carpetas en tiempo real con watchdog para detección automática de nuevos archivos',
        'Comprobación de estabilidad y bloqueo para evitar leer descargas que aún están en progreso',
        'Extracción de contenido multiformato: flujos de texto, análisis de PDFs con pypdf y metadatos',
        'Inferencia con LLM local mediante Ollama con validación estricta de esquemas JSON estructurados'
      ]
    }
  },
  {
    id: 'iot-edge-ai-security',
    title: 'IoT Security System (Arduino UNO R4)',
    category: 'iot',
    categoryLabel: {
      en: 'Embedded Systems & C++',
      es: 'Sistemas Embebidos & C++',
    },
    year: '2026',
    shortDescription: {
      en: 'Autonomous hardware security system built on Arduino UNO R4 WiFi in C++, featuring local ultrasonic presence detection, embedded web server, AJAX real-time dashboard, and CSV event logging.',
      es: 'Sistema de seguridad hardware autónomo en Arduino UNO R4 WiFi desarrollado en C++, con detección de presencia ultrasónica local, servidor web embebido, panel AJAX y volcado de eventos a CSV.',
    },
    longDescription: {
      en: 'An embedded physical security appliance developed in C++ on the Arduino UNO R4 WiFi microcontroller platform. Eliminates reliance on external cloud servers by running presence detection logic directly on the device using ultrasonic sensors. Embeds a lightweight HTTP server serving a real-time AJAX web dashboard to browsers without page reloads, and records persistent event logs.',
      es: 'Dispositivo físico de seguridad embebido desarrollado en C++ sobre el microcontrolador Arduino UNO R4 WiFi. Elimina la dependencia de servidores cloud ejecutando la lógica de detección directamente en el dispositivo mediante sensores ultrasónicos. Aloja un servidor HTTP ligero que sirve un panel web AJAX en tiempo real y registra eventos en CSV.',
    },
    problem: {
      en: 'Commercial smart sensors rely heavily on third-party cloud infrastructure, which introduces latency, creates vendor lock-in, and fails when local internet access goes down.',
      es: 'Muchos sensores comerciales dependen por completo de la nube de terceros, lo que añade latencia, dependencia de proveedores y causa fallos totales ante caídas de internet.',
    },
    solution: {
      en: 'Programmed an autonomous microcontroller appliance in C++ that processes sensor data on-chip. Filters ultrasonic distance readings, triggers alerts based on configurable proximity thresholds, serves an embedded web interface over local WiFi, and updates dashboard metrics via asynchronous AJAX calls.',
      es: 'Programé un dispositivo autónomo en C++ que procesa las lecturas de sensores directamente en el chip. Filtra mediciones de distancia, dispara alertas según umbrales configurables, aloja una interfaz web en su WiFi local y actualiza métricas mediante peticiones asíncronas AJAX.',
    },
    myContribution: {
      en: 'Developed the complete C++ firmware: wrote the non-blocking sensor acquisition loop (avoiding delay()), crafted the embedded HTTP response handlers, programmed the front-end AJAX dashboard stored in flash memory, and added CSV event recording.',
      es: 'Desarrollé el firmware completo en C++: programé el bucle de lectura no bloqueante (evitando delay()), construí las respuestas HTTP del servidor embebido, diseñé el panel AJAX servido desde la memoria flash y programé el volcado de eventos a CSV.',
    },
    challengesAndLearnings: {
      en: 'Managing limited microcontroller memory (SRAM) required careful optimization of string handling and buffer sizes. Taught me non-blocking asynchronous state machines and the mechanics of serving web protocols from embedded hardware.',
      es: 'Trabajar con memoria restringida (SRAM) me exigió optimizar el manejo de cadenas y buffers. Me enseñó a estructurar máquinas de estados asíncronas no bloqueantes y a servir protocolos web directamente desde hardware embebido.',
    },
    technologies: ['Arduino UNO R4 WiFi', 'C++ / Embedded', 'Ultrasonic Sensors', 'HTTP Server', 'AJAX', 'Hardware Registers', 'CSV Logging'],
    visualType: 'iot-edge',
    githubUrl: 'https://github.com/villanuevapablo/IoT-Edge-AI-Security-System',
    liveDemoUrl: null,
    isPlaceholderUrl: false,
    status: {
      en: 'Embedded C++ Project (2026)',
      es: 'Proyecto Embebido en C++ (2026)',
    },
    features: {
      en: [
        'On-device presence detection logic executing autonomously on Arduino UNO R4 WiFi hardware',
        'Ultrasonic spatial sensing with distance thresholding and signal noise filtering',
        'Embedded lightweight web server hosting an interactive real-time AJAX control dashboard',
        'Persistent CSV event logging for security auditing and timestamped intrusion tracking'
      ],
      es: [
        'Lógica de detección ejecutada de forma autónoma en el hardware de Arduino UNO R4 WiFi',
        'Muestreo espacial ultrasónico con umbrales configurables y filtrado de ruido de señal',
        'Servidor web embebido ligero que sirve un panel de control interactivo por AJAX en tiempo real',
        'Registro persistente de eventos en formato CSV para auditoría y seguimiento temporal'
      ]
    }
  },
  {
    id: 'preflop-hero',
    title: 'Preflop Hero: Hand History Parser & Analytics',
    category: 'data',
    categoryLabel: {
      en: 'Data Analytics & SQLite',
      es: 'Analítica de Datos & SQLite',
    },
    year: '2026',
    shortDescription: {
      en: 'Python data analytics tool and web dashboard that parses raw text hand histories from online poker rooms, computes gameplay statistics (VPIP, PFR), and stores records in SQLite for analysis.',
      es: 'Herramienta de analítica de datos y dashboard web en Python que procesa historiales de texto de salas de poker, calcula estadísticas de juego (VPIP, PFR) y almacena datos en SQLite.',
    },
    longDescription: {
      en: 'A data parsing and analytics engine paired with a web dashboard. Uses regular expressions to extract structured information from unstructured hand histories (Winamax and 888poker), calculates core statistical metrics (VPIP, PFR, cold-call frequencies), stores parsed data in an indexed SQLite database, and presents performance metrics on an interactive dashboard.',
      es: 'Motor de parsing y analítica de datos junto a un panel web. Utiliza expresiones regulares para extraer información estructurada a partir de historiales de texto (Winamax y 888poker), calcula métricas estadísticas clave (VPIP, PFR), persiste los registros en una base de datos SQLite indexada y presenta métricas en un dashboard interactivo.',
    },
    problem: {
      en: 'Analyzing decision-making across thousands of game sessions requires parsing thousands of messy, unstructured text files exported by different platforms, each with proprietary formatting.',
      es: 'Analizar la toma de decisiones a lo largo de miles de manos requiere procesar ficheros de texto no estructurados de distintas plataformas, cada una con su formato particular.',
    },
    solution: {
      en: 'Created an automated Python parsing pipeline with regular expressions capable of reading raw logs, extracting player actions and cards, calculating statistical metrics, and saving records to an indexed SQLite database for analytical reporting.',
      es: 'Creé un pipeline de parsing en Python mediante expresiones regulares capaz de leer logs en bruto, extraer cartas y acciones de jugadores, calcular métricas estadísticas y almacenar los registros en una base de datos SQLite indexada.',
    },
    myContribution: {
      en: 'Designed the regex parsing rules to handle syntax variations between platforms, modeled the relational database schema in SQLite with proper indexes for fast aggregation queries, and built the analytics dashboard interface.',
      es: 'Diseñé las reglas de parsing con expresiones regulares adaptadas a las diferencias entre salas, modelé el esquema relacional en SQLite con índices optimizados para agregaciones rápidas y creé la interfaz del panel analítico.',
    },
    challengesAndLearnings: {
      en: 'Handling edge cases in text parsing (split pots, dead blinds, disconnected player actions) required writing fault-tolerant pattern matchers. Reinforced database design principles for analytical queries over thousands of sequential records.',
      es: 'Resolver casos límite en el análisis de texto (botes divididos, ciegas muertas, desconexiones) me exigió crear patrones regex robustos y tolerantes a fallos. Reforzó principios de diseño de bases de datos para consultas analíticas sobre miles de registros.',
    },
    technologies: ['Python', 'SQLite', 'Data Analytics', 'Regex Parsing', 'Pandas', 'Web Dashboard', 'Statistical Modeling'],
    visualType: 'preflop-hero',
    githubUrl: 'https://github.com/villanuevapablo/preflop-hero',
    liveDemoUrl: null,
    isPlaceholderUrl: false,
    status: {
      en: 'Python Analytics Tool (2026)',
      es: 'Herramienta Analítica en Python (2026)',
    },
    features: {
      en: [
        'Multi-platform regex parser supporting raw Winamax and 888poker text hand histories',
        'Automated calculation of core indicators: VPIP (Voluntarily Put $ in Pot) and PFR (Preflop Raise)',
        'Relational data persistence in SQLite with indexed tables for fast statistical queries',
        'Clean dashboard interface with key performance indicators and positional distribution metrics'
      ],
      es: [
        'Parser regex multiplataforma compatible con ficheros de texto en bruto de Winamax y 888poker',
        'Cálculo automático de indicadores clave de juego: VPIP (Voluntarily Put $ in Pot) y PFR (Preflop Raise)',
        'Persistencia relacional en SQLite con tablas indexadas para consultas analíticas de alta velocidad',
        'Interfaz de panel limpia con métricas clave de rendimiento y distribuciones por posición'
      ]
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages-frameworks',
    title: {
      en: 'Software Engineering & Full Stack',
      es: 'Ingeniería de Software & Full Stack',
    },
    icon: 'Code2',
    skills: [
      { name: 'Go (Golang)', levelHint: { en: 'Backend, Net/HTTP, Clean Architecture', es: 'Backend, Net/HTTP, Arquitectura limpia' }, featured: true },
      { name: 'Python', levelHint: { en: 'Data Analytics, Automation, Scikit-learn', es: 'Analítica de datos, Automatización, Scikit-learn' }, featured: true },
      { name: 'Java', levelHint: { en: 'OOP, Enterprise Architecture, JDBC', es: 'POO, Arquitectura empresarial, JDBC' }, featured: true },
      { name: 'TypeScript / JavaScript', levelHint: { en: 'Type-Safe Web Apps & Modern React', es: 'Desarrollo web tipado y React moderno' }, featured: true },
      { name: 'React', levelHint: { en: 'Component Architecture, Hooks, State', es: 'Arquitectura de componentes, Hooks, Estado' }, featured: true },
      { name: 'Spring Boot', levelHint: { en: 'Java Backend Services & REST APIs', es: 'Servicios backend y APIs REST en Java' }, featured: true },
      { name: 'Unit & Integration Testing', levelHint: { en: 'Test-Driven Quality & Verification', es: 'Calidad de software y verificación' }, featured: true },
      { name: 'Git & Linux CLI', levelHint: { en: 'Version Control & Development Tooling', es: 'Control de versiones y entorno Linux' }, featured: true },
      { name: 'Angular / Svelte', levelHint: { en: 'Frontend Interface Development', es: 'Desarrollo de interfaces frontend' } },
    ]
  },
  {
    id: 'databases-systems',
    title: {
      en: 'Databases & Systems',
      es: 'Bases de Datos & Sistemas',
    },
    icon: 'Database',
    skills: [
      { name: 'SQLite', levelHint: { en: 'Embedded Relational Database & Queries', es: 'Base de datos relacional embebida y SQL' }, featured: true },
      { name: 'MySQL & PostgreSQL', levelHint: { en: 'Relational Database Schema Design', es: 'Diseño de esquemas y consultas relacionales' }, featured: true },
      { name: 'JDBC & Data Persistence', levelHint: { en: 'Database Connectivity & Transactions', es: 'Conectividad y persistencia de datos' }, featured: true },
      { name: 'C++ / Embedded', levelHint: { en: 'Microcontrollers, Arduino UNO R4, IoT', es: 'Microcontroladores, Arduino UNO R4, IoT' }, featured: true },
      { name: 'REST API Design', levelHint: { en: 'HTTP Services & Data Serialization', es: 'Servicios HTTP y serialización de datos' }, featured: true },
      { name: 'Cloud Deployment', levelHint: { en: 'Vercel, Git CI/CD & Hosting', es: 'Vercel, Git CI/CD y alojamiento web' }, featured: true },
    ]
  },
  {
    id: 'ai-automation-data',
    title: {
      en: 'Areas of Interest: AI, Automation & Data',
      es: 'Áreas de Interés: IA, Automatización y Datos',
    },
    icon: 'Brain',
    skills: [
      { name: 'Machine Learning (Scikit-learn)', levelHint: { en: 'Regression, Time-Series & Cross-Validation', es: 'Regresión, series temporales y validación' }, featured: true },
      { name: 'Data Analytics (Pandas & NumPy)', levelHint: { en: 'Feature Engineering & Data Manipulation', es: 'Ingeniería de variables y tratamiento de datos' }, featured: true },
      { name: 'Local LLMs (Ollama REST API)', levelHint: { en: 'Structured JSON Extraction & Prompting', es: 'Extracción estructurada con esquemas JSON' }, featured: true },
      { name: 'Filesystem Automation (watchdog)', levelHint: { en: 'Event-Driven Background Processing', es: 'Procesamiento en segundo plano por eventos' }, featured: true },
      { name: 'Edge AI & Microcontroller Logic', levelHint: { en: 'Localized Inference on Constrained Devices', es: 'Inferencia localizada en dispositivos físicos' }, featured: true },
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
    terminalTag: { en: 'Software Engineer | Full Stack Developer', es: 'Ingeniero de Software | Desarrollador Full Stack' },
    gradeBadge: { en: 'BSc (Hons) First-Class Honours (9/10)', es: 'BSc (Hons) First-Class Honours (9/10)' },
    specCol1Title: { en: '// Role', es: '// Rol' },
    specCol1Value: { en: 'Software Engineer & Full Stack', es: 'Software Engineer & Full Stack' },
    specCol2Title: { en: '// Primary Stack', es: '// Stack Principal' },
    specCol2Value: { en: 'Go • Python • TypeScript • React', es: 'Go • Python • TypeScript • React' },
    specCol3Title: { en: '// Areas of Interest', es: '// Áreas de Interés' },
    specCol3Value: { en: 'Applied AI • ML • Data Analytics', es: 'IA Aplicada • ML • Analítica de Datos' },
    specCol4Title: { en: '// Availability', es: '// Disponibilidad' },
    specCol4Value: { en: 'Immediate • Madrid / Hybrid', es: 'Inmediata • Madrid / Híbrido' },
  },
  about: {
    title: { en: 'About Me', es: 'Sobre Mí' },
    subtitle: { en: 'Software engineering background, professional experience and areas of technical interest', es: 'Trayectoria en ingeniería de software, experiencia profesional e intereses técnicos' },
    downloadCv: { en: 'Download CV (PDF)', es: 'Descargar CV (PDF)' },
    cvNotice: { en: 'Official resume available in English & Spanish', es: 'CV oficial disponible en inglés y español' },
    academicFoundation: { en: 'Academic Background', es: 'Formación Académica' },
    coreInterests: { en: 'Areas of Interest', es: 'Áreas de Interés' },
    otherDetailsTitle: { en: 'Key Details & Availability', es: 'Detalles Clave y Disponibilidad' },
  },
  experience: {
    title: { en: 'Work Experience', es: 'Experiencia Laboral' },
    subtitle: { en: 'Hands-on software development roles in production environments', es: 'Desarrollo de software práctico en entornos de producción' },
    responsibilitiesTitle: { en: 'Key Responsibilities & Scope', es: 'Responsabilidades Clave y Alcance' },
  },
  education: {
    title: { en: 'Education & Training', es: 'Educación y Formación' },
    subtitle: { en: 'Academic degrees, university honors and certified vocational technical training', es: 'Titulaciones académicas, honores universitarios y formación técnica profesional' },
    keyCompetencies: { en: 'Key Achievements & Focus', es: 'Logros Clave y Enfoque' },
  },
  projects: {
    title: { en: 'Featured Projects', es: 'Proyectos Destacados' },
    subtitle: { en: 'Selected software engineering codebases across full-stack applications, machine learning, embedded systems, and data tools', es: 'Proyectos de ingeniería de software en desarrollo full-stack, machine learning, sistemas embebidos y herramientas de datos' },
    filterAll: { en: 'All Projects', es: 'Todos los Proyectos' },
    filterAi: { en: 'ML & AI', es: 'ML & IA' },
    filterIot: { en: 'Embedded & IoT', es: 'Embebidos & IoT' },
    filterSecurity: { en: 'Go & Full-Stack', es: 'Go & Full-Stack' },
    filterData: { en: 'Data Analytics', es: 'Analítica de Datos' },
    viewDetails: { en: 'View Technical Details', es: 'Ver Detalles Técnicos' },
    sourceCode: { en: 'Source Code', es: 'Código Fuente' },
    liveDemo: { en: 'Live Demo', es: 'Demostración' },
    statusCompleted: { en: 'Completed', es: 'Completado' },
  },
  skills: {
    title: { en: 'Technical Skills', es: 'Habilidades Técnicas' },
    subtitle: { en: 'Software engineering fundamentals, databases, frameworks, and applied technical interests', es: 'Fundamentos de ingeniería de software, bases de datos, frameworks e intereses técnicos' },
    allTab: { en: 'All Skills', es: 'Todas las Habilidades' },
    clarificationNote: {
      en: 'Honest assessment of technologies used across production roles, academic projects, and open-source repositories.',
      es: 'Evaluación sincera de tecnologías utilizadas en entornos de producción, proyectos académicos y repositorios abiertos.',
    },
  },
  contact: {
    title: { en: 'Get In Touch', es: 'Contacto' },
    subtitle: { en: 'Open to software engineering and full-stack development opportunities', es: 'Disponible para oportunidades en ingeniería de software y desarrollo full-stack' },
    socialText: { en: 'Direct Communication', es: 'Comunicación Directa' },
    directEmail: { en: 'Personal Email', es: 'Correo Personal' },
    phoneNumber: { en: 'Phone Number', es: 'Teléfono Móvil' },
    formTitle: { en: 'Send a Message', es: 'Enviar un Mensaje' },
    nameLabel: { en: 'Your Name', es: 'Tu Nombre' },
    namePlaceholder: { en: 'e.g. John Doe', es: 'ej. Alejandro Gómez' },
    emailLabel: { en: 'Your Email', es: 'Tu Correo Electrónico' },
    emailPlaceholder: { en: 'e.g. john@company.com', es: 'ej. alejandro@empresa.com' },
    subjectLabel: { en: 'Subject', es: 'Asunto' },
    subjectPlaceholder: { en: 'Software Engineer Role / Inquiries', es: 'Puesto de Ingeniero de Software / Consulta' },
    messageLabel: { en: 'Message', es: 'Mensaje' },
    messagePlaceholder: { en: 'Write your message here...', es: 'Escribe tu mensaje aquí...' },
    submitButton: { en: 'Send Message via Email Client', es: 'Enviar Mensaje vía Cliente de Correo' },
    successMessage: { en: 'Preparing your email client...', es: 'Abriendo tu cliente de correo...' },
    prototypeNotice: { en: 'Opens your preferred desktop or web email client with the fields pre-filled.', es: 'Abre tu cliente de correo preferido con los campos listos para enviar.' },
  },
  footer: {
    rightsReserved: { en: 'All rights reserved.', es: 'Todos los derechos reservados.' },
    craftedWith: { en: 'Designed with React & TypeScript', es: 'Desarrollado con React y TypeScript' },
    backToTop: { en: 'Back to top', es: 'Volver arriba' },
  }
};
