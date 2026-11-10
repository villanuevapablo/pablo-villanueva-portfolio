import {
  PersonalInfo,
  ExperienceItem,
  EducationItem,
  ProjectItem,
  ToolkitCategory,
  SocialLinks,
} from '../types/portfolio';

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
  publicationName: 'THE ENGINEERING JOURNAL',
  title: {
    en: 'Software Engineer / Full Stack Developer',
    es: 'Ingeniero de Software / Desarrollador Full Stack',
  },
  editorialSummary: {
    en: 'BSc (Hons) Software Engineering graduate (First-Class Honours, York St John University) and DAM Higher Vocational graduate (Nebrija). I build full-stack web applications, backend systems in Go and Java, Python automation tools, and applied machine learning pipelines.',
    es: 'Graduado en BSc (Hons) Software Engineering (First-Class Honours, York St John University) y Técnico Superior DAM (Nebrija). Desarrollo aplicaciones web full-stack, servicios backend en Go y Java, utilidades en Python y pipelines aplicados de machine learning.',
  },
  interests: [
    {
      id: 'fullstack',
      label: { en: 'Full-stack software development', es: 'Desarrollo de software full-stack' },
      note: { en: 'React, TypeScript, Go templates & SQLite/SQL', es: 'React, TypeScript, plantillas Go y SQLite/SQL' },
    },
    {
      id: 'backend',
      label: { en: 'Backend engineering', es: 'Ingeniería backend' },
      note: { en: 'HTTP servers, auth middleware, RBAC & relational modeling', es: 'Servidores HTTP, middleware de autenticación, RBAC y modelado relacional' },
    },
    {
      id: 'ai',
      label: { en: 'Artificial Intelligence', es: 'Inteligencia Artificial' },
      note: { en: 'Local LLM inference pipelines via Ollama JSON schemas', es: 'Pipelines con LLMs locales mediante esquemas JSON en Ollama' },
    },
    {
      id: 'ml',
      label: { en: 'Machine Learning', es: 'Machine Learning' },
      note: { en: 'Time-series regression, feature engineering & temporal CV', es: 'Regresión de series temporales, variables técnicas y validación temporal' },
    },
    {
      id: 'data',
      label: { en: 'Data Analytics', es: 'Analítica de Datos' },
      note: { en: 'Regex extraction engines, Pandas & statistical auditing', es: 'Motores de extracción regex, Pandas y auditoría estadística' },
    },
  ],
  location: {
    en: 'Madrid, Spain',
    es: 'Madrid, España',
  },
  availability: {
    en: 'Immediate availability • On-site (Madrid), hybrid, or remote',
    es: 'Disponibilidad inmediata • Presencial (Madrid), híbrido o remoto',
  },
  statusBadge: {
    en: 'Seeking Junior Software Engineer / Full Stack Roles',
    es: 'Disponible para Junior Software Engineer / Full Stack',
  },
  cvFilename: {
    en: 'cv-pablo-villanueva-en.pdf',
    es: 'cv-pablo-villanueva-es.pdf',
  },
  aboutParagraphs: {
    en: [
      'I am a software engineer based in Madrid, Spain, focused on building reliable web applications, clear backend architectures, and practical data software. My technical training started with a Higher Level Vocational Degree in Cross-Platform Application Development (DAM) at Instituto Nebrija, followed by a BSc (Hons) in Software Engineering at York St John University, graduating with First-Class Honours (Class I, 9/10 equivalent).',
      'During my time as a Development Technician at Universidad Nebrija (April–June 2025), I worked in a production development team implementing full-stack application features, integrating REST APIs with external services, and writing unit and integration tests using Git and agile workflows.',
      'Outside coursework and team delivery, I document and build end-to-end projects around problems I encounter firsthand: a framework-free medical record server in Go built around explicit threat mitigations, an automated desktop file sorter backed by local Ollama models, a regex-to-SQLite hand history analyzer, and an Arduino UNO R4 proximity monitor.',
    ],
    es: [
      'Soy ingeniero de software en Madrid, España, enfocado en desarrollar aplicaciones web fiables, arquitecturas backend claras y herramientas prácticas de datos. Mi base técnica comenzó con el Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) en el Instituto Nebrija y continuó con el grado BSc (Hons) Software Engineering en York St John University, graduándome con First-Class Honours (Clase I, nota media equivalente 9/10).',
      'Durante mi etapa como Técnico de Desarrollo en la Universidad Nebrija (abril–junio de 2025), trabajé en un entorno real implementando funcionalidades full-stack, integrando APIs REST con servicios de terceros y redactando pruebas unitarias y de integración dentro de flujos Git.',
      'Además de la formación reglada, construyo y documento proyectos completos sobre problemas concretos: un servidor de registros clínicos en Go puro centrado en mitigaciones de seguridad, un organizador local en Python conectado a Ollama, un analizador de historiales de texto hacia SQLite y un sistema de detección con Arduino UNO R4.',
    ],
  },
  problemSolvingApproach: {
    en: 'Start with the data schema and failure modes before picking abstractions. Favor standard library primitives when dependencies add opacity, validate assumptions against real constraints (chronological splits instead of random shuffles; file lock checks before reading downloads), and document limitations alongside results.',
    es: 'Empezar por el esquema de datos y los modos de fallo antes de elegir abstracciones. Priorizar primitivas de la biblioteca estándar cuando los frameworks oscurecen el flujo, validar hipótesis con restricciones reales (particiones temporales en lugar de aleatorias; verificación de bloqueos antes de leer descargas) y documentar tanto limitaciones como aciertos.',
  },
  languagesSpoken: {
    en: 'English (Professional working proficiency — UK BSc Hons) • Spanish (Native)',
    es: 'Inglés (Fluidez profesional — Grado cursado en Reino Unido) • Español (Nativo)',
  },
  otherDetails: {
    en: [
      'Target Roles: Junior Software Engineer, Graduate Software Engineer, Full Stack Developer',
      'Immediate availability • Category B Driving License',
      'Direct links: all 5 project repositories verified public on GitHub',
    ],
    es: [
      'Puestos objetivo: Junior Software Engineer, Graduate Software Engineer, Desarrollador Full Stack',
      'Disponibilidad inmediata • Permiso de conducir Categoría B',
      'Transparencia técnica: los 5 repositorios de proyectos son públicos y verificables en GitHub',
    ],
  },
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'nebrija-technician',
    role: {
      en: 'Development Technician',
      es: 'Técnico de Desarrollo',
    },
    company: 'Universidad Nebrija',
    period: {
      en: 'Apr 2025 – Jun 2025',
      es: 'Abril 2025 – Junio 2025',
    },
    location: {
      en: 'Madrid, Spain',
      es: 'Madrid, España',
    },
    type: {
      en: 'Production Engineering Role (3 months)',
      es: 'Experiencia en Desarrollo (3 meses)',
    },
    contextNote: {
      en: 'Timeline aligns with Spanish DAM vocational workplace training (FCT / practical placement) integrated within the university development team.',
      es: 'Periodo correspondiente a prácticas en entorno productivo integradas en el equipo de desarrollo de la universidad.',
    },
    summary: {
      en: 'Contributed to full-stack feature development, REST API integrations with third-party services, and software test coverage in a team production codebase.',
      es: 'Contribución al desarrollo full-stack de funcionalidades, integración de APIs REST con servicios de terceros y cobertura de pruebas en entorno productivo.',
    },
    responsibilities: {
      en: [
        'Implemented and maintained full-stack features across user-facing views and backend logic.',
        'Designed and integrated REST API endpoints for external service data exchange.',
        'Authored unit and integration tests to verify expected behavior and reduce production regressions.',
        'Worked under Git version control and team review workflows.',
      ],
      es: [
        'Desarrollo y mantenimiento de funcionalidades full-stack entre la capa de interfaz y la lógica servidor.',
        'Diseño e integración de APIs REST para intercambio de datos y conexión con servicios externos.',
        'Ejecución de pruebas unitarias y de integración para validar estabilidad y evitar regresiones en producción.',
        'Colaboración diaria con control de versiones Git y estándares del equipo.',
      ],
    },
    technologies: ['Full-Stack Development', 'REST APIs', 'Unit Testing', 'Integration Testing', 'Git', 'Agile Workflows'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'york-st-john',
    degree: {
      en: 'BSc (Hons) Software Engineering',
      es: 'BSc (Hons) Software Engineering',
    },
    institution: 'York St John University',
    period: {
      en: '2025 – 2026',
      es: '2025 – 2026',
    },
    location: {
      en: 'York, United Kingdom',
      es: 'York, Reino Unido',
    },
    level: {
      en: 'Undergraduate Honours Degree (UK Level 6)',
      es: 'Grado Universitario Oficial (Reino Unido)',
    },
    grade: {
      en: 'First-Class Honours (Class I) • 9/10 equivalent average',
      es: 'First-Class Honours (Clase I) • Nota media equivalente: 9/10',
    },
    description: {
      en: 'Final-year top-up honours programme in software engineering, secure system implementation, Internet of Things hardware/software integration, and applied research methodology.',
      es: 'Programa universitario británico de ingeniería de software centrado en arquitectura de sistemas, desarrollo web seguro, sistemas embebidos IoT y metodología de investigación.',
    },
    highlights: {
      en: [
        'Awarded First-Class Honours (Class I), equivalent to a 9/10 average grade',
        'COM6016M Dissertation (TFG): Bitcoin Price Forecasting & Analytics System — Grade: 9.0/10',
        'Assessed coursework includes Go security engineering (SRMS-MEDICAL) and Embedded IoT (COM6017M)',
      ],
      es: [
        'Graduado con First-Class Honours (Clase I), nota media equivalente a 9/10',
        'Trabajo de Fin de Grado (COM6016M): Sistema de Predicción de Bitcoin — Nota: 9.0/10',
        'Prácticas evaluadas destacadas: SRMS en Go seguro y sistema embebido IoT en Arduino UNO R4 (COM6017M)',
      ],
    },
  },
  {
    id: 'dam-nebrija',
    degree: {
      en: 'Higher Level Vocational Training in Cross-Platform Application Development (DAM)',
      es: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
    },
    institution: 'Instituto de Formación Profesional Nebrija',
    period: {
      en: 'Completed (Dates not specified on source CV)',
      es: 'Completado (Años exactos pendientes de precisar en CV fuente)',
    },
    location: {
      en: 'Madrid, Spain',
      es: 'Madrid, España',
    },
    level: {
      en: 'EQF Level 5 Vocational Qualification',
      es: 'Formación Profesional de Grado Superior',
    },
    description: {
      en: 'Hands-on software engineering training centered on Java object-oriented design, relational databases (SQL/JDBC/SQLite), desktop/mobile UI development, and software deployment.',
      es: 'Formación técnica centrada en programación orientada a objetos en Java, bases de datos relacionales (SQL, JDBC, SQLite), desarrollo cliente multiplataforma y despliegue de aplicaciones.',
    },
    highlights: {
      en: [
        'Object-oriented architecture and design patterns in Java',
        'Relational schema design, SQL querying, and JDBC data persistence',
        'Foundational exposure to frontend frameworks and multiplatform UI delivery',
      ],
      es: [
        'Arquitectura orientada a objetos y patrones de diseño en Java',
        'Modelado relacional, consultas SQL y persistencia mediante JDBC',
        'Base técnica en interfaces cliente y frameworks web multiplataforma',
      ],
    },
    uncertaintyFlag: {
      en: 'Flagged for accuracy: Exact start/end years for DAM are not printed on the source CVs; labeled strictly as Completed rather than estimating.',
      es: 'Nota de rigor: Las fechas de inicio/fin de DAM no figuran explícitas en el CV fuente; se mantiene como Completado sin estimar años.',
    },
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'bitcoin-price-forecasting',
    issueNumber: '01',
    title: 'Bitcoin Price Forecasting & Analytics System',
    subtitle: {
      en: 'COM6016M Dissertation (TFG) — Grade: 9.0 / 10',
      es: 'Trabajo de Fin de Grado COM6016M — Nota: 9.0 / 10',
    },
    category: 'ai-ml',
    categoryLabel: {
      en: 'Machine Learning & Time-Series',
      es: 'Machine Learning & Series Temporales',
    },
    editorialVariant: 'dark-research',
    grade: '9.0 / 10',
    year: '2026',
    shortDescription: {
      en: 'End-to-end Python regression pipeline forecasting next-day BTC-USD closing prices using chronological 80/20 splitting, 5-fold TimeSeriesSplit validation, Streamlit visual diagnostics, and a Telegram inference bot.',
      es: 'Pipeline de regresión en Python para estimar el cierre diario siguiente de BTC-USD mediante partición cronológica 80/20, validación TimeSeriesSplit de 5 pliegues, panel Streamlit y bot de Telegram.',
    },
    technologies: ['Python 3.13', 'Scikit-learn', 'Pandas', 'NumPy', 'yfinance', 'Streamlit', 'Plotly', 'pyTelegramBotAPI', 'Joblib'],
    visualType: 'btc-forecast',
    githubUrl: 'https://github.com/villanuevapablo/bitcoin-price-forecasting',
    liveDemoUrl: null,
    status: {
      en: 'Completed • Dissertation Grade 9.0/10',
      es: 'Completado • Nota TFG 9.0/10',
    },
    academicContext: {
      en: 'York St John University • COM6016M Dissertation (Supervised by Alexandros Evangelidis)',
      es: 'York St John University • Trabajo de Fin de Grado COM6016M (Tutorizado por Alexandros Evangelidis)',
    },
    caseStudy: {
      introduction: {
        en: 'Developed for the BSc (Hons) Software Engineering dissertation (COM6016M) at York St John University, this system fetches four years of historical BTC-USD OHLCV data, builds an 8-feature technical dataset, trains and compares Linear Regression and Random Forest models, and serves daily predictions through both a multi-page Streamlit web dashboard and an automated Telegram bot.',
        es: 'Desarrollado como Trabajo de Fin de Grado (COM6016M) en York St John University, este sistema descarga cuatro años de datos históricos OHLCV de BTC-USD, construye un conjunto de 8 variables técnicas, entrena modelos de Regresión Lineal y Random Forest, y ofrece predicciones a través de un panel Streamlit y un bot en Telegram.',
      },
      theChallenge: {
        en: 'Standard supervised ML examples randomly shuffle rows before splitting train and test sets. Applied to financial time series, shuffling causes severe lookahead bias (data leakage), letting a model see tomorrow\'s moving averages to predict today. The goal was to build a disciplined, strictly sequential training and serving pipeline while comparing linear trend tracking against tree-based non-linear ensembles.',
        es: 'Los ejemplos habituales de ML mezclan filas aleatoriamente antes de dividir entrenamiento y test. En series financieras esto provoca sesgo de anticipación (data leakage), permitiendo que el modelo vea el futuro para predecir el presente. El reto era construir un pipeline estrictamente cronológico comparando regresión lineal con conjuntos no lineales de árboles.',
      },
      theSolution: {
        en: 'Implemented shared feature engineering in train_models.py and analysis.py computing 7-day and 30-day SMAs, 14-day rolling standard deviation, daily percentage return, lag closes (t-1, t-2, t-3), and 7-day volume averages, shifting Closing Price by -1 as the next-day target and dropping the initial 30 NaN rows. Enforced an 80/20 unshuffled chronological holdout alongside 5-fold TimeSeriesSplit cross-validation, then serialized both trained models via Joblib for downstream serving.',
        es: 'Implementé una extracción de características idéntica en train_models.py y analysis.py calculando medias móviles SMA 7/30, volatilidad móvil de 14 días, retorno porcentual diario, cierres retardados (t-1, t-2, t-3) y volumen SMA 7, desplazando el precio de cierre (-1) como objetivo. Apliqué división cronológica 80/20 sin barajar junto a 5 pliegues TimeSeriesSplit y serialización con Joblib.',
      },
      architecture: {
        summary: {
          en: 'Modular four-script architecture sharing an identical FEATURE_COLUMNS contract so offline research charts, interactive web exploration, and Telegram inference use identical feature transformations.',
          es: 'Arquitectura modular en cuatro scripts que comparten la constante FEATURE_COLUMNS para garantizar que análisis, dashboard web y bot apliquen exactamente las mismas transformaciones.',
        },
        modules: [
          {
            name: 'train_models.py',
            role: { en: 'Downloads 4-year BTC-USD data via yfinance, handles MultiIndex columns, trains LR and RF regressors on 80/20 chronological split, and dumps .pkl binaries.', es: 'Descarga 4 años de BTC-USD con yfinance, aplana columnas MultiIndex, entrena LR y RF con división cronológica 80/20 y exporta binarios .pkl.' },
          },
          {
            name: 'analysis.py',
            role: { en: 'Runs 5-fold TimeSeriesSplit validation and exports 7 high-DPI diagnostic figures (heatmaps, residuals, feature importance).', es: 'Ejecuta validación cruzada temporal de 5 pliegues y genera 7 gráficos diagnósticos de alta resolución.' },
          },
          {
            name: 'dashboard.py',
            role: { en: 'Multi-page Streamlit interface featuring Plotly candlesticks, residual analysis, correlation matrices, and error metrics.', es: 'Aplicación Streamlit multipágina con gráficos de velas Plotly, residuos, correlaciones y comparativa de error.' },
          },
          {
            name: 'telegram_bot.py',
            role: { en: 'Stateless bot listener exposing /start, /predict, and /help commands backed by the serialized Joblib models.', es: 'Bot conversacional con comandos /start, /predict y /help conectado a los modelos entrenados.' },
          },
        ],
        codeSnippet: {
          filename: 'train_models.py',
          language: 'python',
          code: `FEATURE_COLUMNS = [
    "sma_7", "sma_30", "volatility_14",
    "daily_return_pct", "close_lag_1",
    "close_lag_2", "close_lag_3", "volume_sma_7",
]

# Unshuffled chronological split — never shuffle time series
split_index = int(len(df) * 0.8)
X_train, X_test = X.iloc[:split_index], X.iloc[split_index:]
y_train, y_test = y.iloc[:split_index], y.iloc[split_index:]`,
        },
      },
      engineeringDecisions: [
        {
          decision: { en: 'Chronological 80/20 Split + TimeSeriesSplit over K-Fold', es: 'Split cronológico 80/20 + TimeSeriesSplit en lugar de K-Fold' },
          rationale: { en: 'Standard K-Fold leaks future price volatility into earlier folds. Enforcing strict chronological boundaries reflects real out-of-sample forecasting constraints.', es: 'K-Fold tradicional filtra información futura hacia el entrenamiento. Los pliegues cronológicos replican las condiciones reales de predicción.' },
        },
        {
          decision: { en: 'Shared FEATURE_COLUMNS Constant Across Training & Serving', es: 'Contrato FEATURE_COLUMNS compartido entre entrenamiento y servicio' },
          rationale: { en: 'Prevents training-serving skew where the Telegram bot or Streamlit dashboard orders columns differently from the pickled scikit-learn estimators.', es: 'Evita inconsistencias de orden o definición de variables entre el entrenamiento offline y las consultas en vivo del bot o dashboard.' },
        },
        {
          decision: { en: 'Explicit yfinance >= 0.2 MultiIndex Flattening', es: 'Aplanado explícito de columnas MultiIndex en yfinance >= 0.2' },
          rationale: { en: 'Newer yfinance releases wrap single-ticker downloads in hierarchical column tuples, which breaks pandas rolling calculations unless explicitly normalized.', es: 'Versiones recientes de yfinance devuelven columnas jerárquicas incluso con un único ticker, rompiendo las ventanas móviles si no se normalizan.' },
        },
      ],
      challenges: {
        en: [
          'Tree-based extrapolation limit: During strong upward rallies exceeding the training window peak, Random Forest Regressor capped predictions at its highest seen leaf values, raising test MAE (~$3,550) compared to Linear Regression (~$1,684).',
          'Non-stationarity & high autocorrelation: A high R² (0.9830 for Linear Regression) reflects next-day price proximity to t-1 close rather than genuine market alpha, underscoring why raw RMSE/R² must be interpreted cautiously in financial series.',
        ],
        es: [
          'Límite de extrapolación en árboles: Al alcanzar Bitcoin máximos superiores al conjunto de entrenamiento, Random Forest quedó acotado a los valores de sus hojas máximas, elevando su MAE (~$3.550) frente a Regresión Lineal (~$1.684).',
          'No estacionariedad y autocorrelación: Un R² de 0.9830 en Regresión Lineal refleja sobre todo la cercanía al cierre t-1 y no capacidad mágica de predicción, exigiendo cautela al interpretar métricas.',
        ],
      },
      resultsAndLearnings: {
        results: {
          en: [
            'Dissertation evaluated at 9.0 / 10 (First-Class standing).',
            'Measured out-of-sample benchmarks: Linear Regression MAE ~$1,684, RMSE ~$2,317, R² 0.9830; Random Forest MAE ~$3,550, RMSE ~$4,564, R² 0.9342.',
            'Delivered reproducible chart generation (7 analytical plots) plus live Streamlit dashboard and Telegram inference interface.',
          ],
          es: [
            'Trabajo de Fin de Grado calificado con 9.0 / 10.',
            'Métricas medidas sobre test cronológico: Regresión Lineal MAE ~$1.684, RMSE ~$2.317, R² 0.9830; Random Forest MAE ~$3.550, RMSE ~$4.564, R² 0.9342.',
            'Generación reproducible de 7 figuras de análisis más dashboard interactivo Streamlit y bot funcional en Telegram.',
          ],
        },
        limitations: {
          en: [
            'Models rely strictly on lagged technical price/volume features without macroeconomic or on-chain signals; explicitly disclaimed as academic research rather than financial advice.',
            'Tree ensembles require target differencing (predicting return % instead of raw USD price) to extrapolate cleanly into new price discovery regimes.',
          ],
          es: [
            'Los modelos utilizan únicamente precio histórico y volumen sin variables macroeconómicas ni on-chain; uso estrictamente académico.',
            'Predecir retornos porcentuales en lugar del precio absoluto permitiría que los árboles extrapolaran mejor en nuevos máximos históricos.',
          ],
        },
      },
    },
  },
  {
    id: 'srms-medical',
    issueNumber: '02',
    title: 'Secure Record Management System (SRMS)',
    subtitle: {
      en: 'Defense-in-Depth Clinical Web Application in Go & SQLite',
      es: 'Aplicación Web Clínica con Defensa en Profundidad en Go y SQLite',
    },
    category: 'backend-security',
    categoryLabel: {
      en: 'Go Backend & Web Security',
      es: 'Backend en Go & Seguridad Web',
    },
    editorialVariant: 'dossier-spec',
    year: '2026',
    shortDescription: {
      en: 'Full-stack medical record platform built on Go standard library net/http and CGO-free SQLite (WAL mode). Enforces parameterized SQL, per-IP rate limiting, persistent account lockout, one-time CSRF tokens, bcrypt (cost 12), and RBAC.',
      es: 'Plataforma web de registros médicos construida con Go net/http y SQLite sin CGO en modo WAL. Implementa consultas preparadas, rate limiting por IP, bloqueo de cuentas, tokens CSRF de un solo uso, bcrypt (cost 12) y RBAC.',
    },
    technologies: ['Go 1.26', 'net/http', 'html/template', 'modernc.org/sqlite', 'SQLite WAL', 'bcrypt (cost 12)', 'sync.Mutex', 'RBAC'],
    visualType: 'srms-security',
    githubUrl: 'https://github.com/villanuevapablo/SRMS-MEDICAL',
    liveDemoUrl: null,
    status: {
      en: 'Completed • Assessed Security Engineering Build (2026)',
      es: 'Completado • Proyecto Evaluado de Seguridad Web (2026)',
    },
    caseStudy: {
      introduction: {
        en: 'SRMS (City Health Clinic) is a server-rendered medical record management system engineered in Go without external web frameworks (Gin, Fiber, or ORMs). Packaged cleanly inside the repository as a Go module alongside schema.sql and six html/template views, it handles clinician and patient access while hardening every attack surface against OWASP Top 10 risks.',
        es: 'SRMS (City Health Clinic) es un sistema de gestión de historiales médicos renderizado en servidor con Go puro, sin frameworks web externos ni ORMs. Incluye su módulo Go, schema.sql y seis plantillas html/template diseñadas aplicando mitigaciones concretas frente al OWASP Top 10.',
      },
      theChallenge: {
        en: 'Handling protected clinical data invites multiple simultaneous attack vectors: SQL injection in lookup forms, cross-site scripting in medical notes, cross-site request forgery on record edits, Insecure Direct Object References (IDOR) across patient IDs, and credential stuffing / brute-force login attempts.',
        es: 'Gestionar datos clínicos expone múltiples vectores críticos simultáneos: inyección SQL en búsquedas, XSS en notas médicas, CSRF en modificaciones, referencias directas inseguras a objetos (IDOR) entre pacientes y ataques de fuerza bruta sobre el login.',
      },
      theSolution: {
        en: 'Built an explicit multi-layer defense architecture directly on net/http: server-side session tokens stored in SQLite with HttpOnly + SameSite=Strict cookies, mutex-protected one-time CSRF tokens (32 random bytes, 30-min TTL), dual brute-force mitigation (5 attempts/min IP sliding window + 5-failure 15-min DB account lock), regex field validators, and strict parameterized SQL queries with WAL concurrency.',
        es: 'Implementé una defensa multicapa explícita sobre net/http: sesiones almacenadas en SQLite con cookies HttpOnly + SameSite=Strict, tokens CSRF de un solo uso protegidos por mutex, mitigación doble ante fuerza bruta (límite deslizante de 5 intentos/min por IP + bloqueo de cuenta de 15 min en BD), validadores regex y SQL parametrizado en modo WAL.',
      },
      architecture: {
        summary: {
          en: 'Compact four-table SQLite relational schema paired with Go server handlers, background expiry cleanup goroutine, and role-segmented views.',
          es: 'Esquema relacional SQLite en cuatro tablas junto a controladores HTTP en Go, goroutine de limpieza periódica y vistas separadas por rol.',
        },
        modules: [
          {
            name: 'schema.sql',
            role: { en: 'Defines users (admin | regular CHECK constraint, failed_attempts, locked_until), patient_records (audit columns), sessions, and login_attempts with 3 indexes.', es: 'Define las tablas users (roles admin | regular, contadores de bloqueo), patient_records (con auditoría), sessions y login_attempts con 3 índices.' },
          },
          {
            name: 'main.go',
            role: { en: 'Initializes SQLite WAL + foreign_keys pragmas, seeds test accounts, manages CSRF/rate-limit mutex maps, and runs a 10-minute session/token cleanup goroutine.', es: 'Configura SQLite WAL y claves foráneas, gestiona mapas protegidos con sync.Mutex para CSRF/rate-limit y ejecuta una goroutine de limpieza cada 10 minutos.' },
          },
          {
            name: 'handlers.go',
            role: { en: 'Enforces HTTP method guards, CSRF checks, IP rate-limiting, bcrypt cost-12 comparison, regex contact validation, and admin vs regular authorization scopes.', es: 'Valida método HTTP, token CSRF, límite por IP, bcrypt cost 12, validación regex y separación estricta de permisos admin/regular.' },
          },
          {
            name: 'templates/*.html',
            role: { en: 'Six Go html/template views (login, dashboard, view_record, edit_record, admin_records, admin_edit_record) with automatic contextual XSS escaping.', es: 'Seis vistas html/template de Go con escape contextual automático contra XSS.' },
          },
        ],
        codeSnippet: {
          filename: 'srms/main.go',
          language: 'go',
          code: `const (
    sessionCookieName = "srms_session"
    csrfTokenLength   = 32
    sessionDuration   = 2 * time.Hour
    bcryptCost        = 12
    rateLimitWindow   = 1 * time.Minute
    rateLimitMax      = 5
    accountLockTime   = 15 * time.Minute
    maxFailedLogins   = 5
)`,
        },
      },
      engineeringDecisions: [
        {
          decision: { en: 'Pure-Go modernc.org/sqlite + WAL Pragma over CGO Drivers', es: 'modernc.org/sqlite puro en Go + modo WAL frente a drivers CGO' },
          rationale: { en: 'Eliminates C compiler toolchain friction across platforms while enabling Write-Ahead Logging (_pragma=journal_mode(WAL)) and enforced foreign keys cleanly in Go.', es: 'Evita dependencias de compilación C entre sistemas operativos manteniendo concurrencia de lectura/escritura mediante WAL y claves foráneas activas.' },
        },
        {
          decision: { en: 'Zero Web Frameworks (Standard library net/http + html/template)', es: 'Sin frameworks web (Go estándar net/http + html/template)' },
          rationale: { en: 'Using standard library primitives makes every security boundary (cookie attributes, CSRF consumption, SQL arguments, header execution) explicitly readable and auditable.', es: 'Trabajar sin frameworks hace visible y auditable cada frontera de seguridad: atributos de cookie, invalidación CSRF y consultas parametrizadas.' },
        },
      ],
      challenges: {
        en: [
          'Concurrent map access in Go HTTP handlers triggers fatal panics; mitigated by wrapping both csrfTokens and rateAttempts slices behind dedicated sync.Mutex locks.',
          'Balancing IP-level rate limiting against targeted single-account attacks required combining an in-memory sliding IP window with persisted locked_until timestamps in SQLite.',
        ],
        es: [
          'El acceso concurrente a mapas desde goroutines HTTP en Go provoca panics; resuelto aislando csrfTokens y rateAttempts bajo sync.Mutex dedicados.',
          'Combinar límite por IP en memoria con bloqueo persistido de cuenta en base de datos para frenar tanto ataques distribuidos como dirigidos a un usuario.',
        ],
      },
      resultsAndLearnings: {
        results: {
          en: [
            'Built an auditable Go web server implementing full auth, RBAC (\'admin\' vs \'regular\'), audit trails (last_updated_by/at), and defense against SQLi, XSS, CSRF, and brute-force logins.',
            'Repository note: SRMS-MEDICAL root README follows a general template while the actual verified Go codebase resides inside the repository bundle (SRMS.zip).',
          ],
          es: [
            'Servidor Go completo con autenticación, RBAC (\'admin\' frente a \'regular\'), columnas de auditoría y mitigación verificada contra SQLi, XSS, CSRF y fuerza bruta.',
            'Nota de repositorio: El README raíz sigue una plantilla general, mientras que la implementación real en Go reside completa dentro del paquete del repositorio.',
          ],
        },
        limitations: {
          en: [
            'Session cookie Secure flag defaults to false for local HTTP testing (localhost:8080) and must be flipped or placed behind a TLS terminator in production.',
            'In-memory CSRF map does not share state across multiple horizontal server instances without externalizing token storage.',
          ],
          es: [
            'El atributo Secure de la cookie figura a false para pruebas locales en HTTP (:8080) y debe activarse tras TLS en producción.',
            'El almacenamiento de CSRF en memoria funciona en instancia única; escalar horizontalmente requeriría persistirlos en base de datos o caché compartida.',
          ],
        },
      },
    },
  },
  {
    id: 'smart-file-organizer',
    issueNumber: '03',
    title: 'Smart File Organizer (Local AI Daemon)',
    subtitle: {
      en: 'Real-Time Python Watchdog Service & Deterministic Ollama Classification',
      es: 'Servicio Reactivo en Python & Clasificación Local Determinista con Ollama',
    },
    category: 'automation',
    categoryLabel: {
      en: 'Process Automation & Local LLMs',
      es: 'Automatización & LLMs Locales',
    },
    editorialVariant: 'pipeline-monograph',
    year: '2026',
    shortDescription: {
      en: 'Local-first desktop utility and background service built with Python watchdog, pypdf, Tkinter, and Ollama REST API. Verifies file download stability before enforcing JSON classification schemas and collision-safe moves.',
      es: 'Utilidad local de escritorio y servicio en segundo plano con Python watchdog, pypdf, Tkinter y la API REST de Ollama. Verifica estabilidad de descargas antes de clasificar con JSON estricto y manejo seguro de colisiones.',
    },
    technologies: ['Python 3.10+', 'watchdog', 'Ollama REST API', 'pypdf', 'JSON Schema', 'Tkinter / ttk', 'unittest'],
    visualType: 'smart-organizer',
    githubUrl: 'https://github.com/villanuevapablo/smart-file-organizer',
    liveDemoUrl: null,
    status: {
      en: 'Completed • Unit Tested CLI + GUI Utility (2026)',
      es: 'Completado • Utilidad CLI + GUI con Tests Unitarios (2026)',
    },
    caseStudy: {
      introduction: {
        en: 'Smart File Organizer watches active local folders (such as Windows Downloads) and automatically categorizes, renames, and moves incoming documents locally without sending private files to commercial cloud APIs. It ships with both a foreground/background CLI daemon and a native Tkinter desktop control panel.',
        es: 'Smart File Organizer monitoriza carpetas locales activas (como Descargas) y clasifica, renombra y mueve documentos localmente sin enviar archivos privados a servicios en la nube. Incluye un modo daemon en consola y una interfaz de escritorio en Tkinter.',
      },
      theChallenge: {
        en: 'Two practical systems bugs break naive file-watching scripts: first, browsers fire filesystem creation events on incomplete downloads (.crdownload, .part) or while holding active Windows write locks; second, local LLMs frequently return markdown chatter or hallucinate invalid path characters or wrong file extensions.',
        es: 'Dos fallos prácticos rompen los scripts simples de vigilancia: primero, los navegadores disparan eventos antes de terminar descargas (.crdownload, .part) o mientras mantienen bloqueos de escritura; segundo, los LLMs locales suelen devolver texto fuera de esquema o caracteres inválidos para nombres de archivo.',
      },
      theSolution: {
        en: 'Engineered a multi-stage guarded pipeline: extension and dotfile filtering, size-stability polling with explicit binary read-lock checks, 1,500-character multi-format extraction (plain text + first 2 PDF pages via pypdf + binary metadata fallback), structured Ollama API inference ("format": "json", temperature 0.1), regex filename sanitization, collision counters (_1, _2), and automatic fallback to "Otros" if Ollama is offline.',
        es: 'Diseñé un pipeline protegido por etapas: filtrado de extensiones temporales, polling de estabilidad de tamaño con apertura de prueba de bloqueo, extracción multiformato limitada a 1.500 caracteres (texto plano + 2 primeras páginas PDF con pypdf + metadatos), consulta estructurada a Ollama ("format": "json", temperature 0.1), saneamiento regex, resolución de colisiones (_1, _2) y fallback automático a "Otros".',
      },
      architecture: {
        summary: {
          en: 'Six cleanly separated Python modules paired with a dedicated unittest suite mocking Ollama HTTP responses and verifying edge cases.',
          es: 'Seis módulos Python desacoplados junto a una suite unittest que simula respuestas Ollama y verifica casos límite de sistema de archivos.',
        },
        modules: [
          {
            name: 'watcher.py',
            role: { en: 'Watchdog FileSystemEventHandler with temporary-extension filters and _wait_until_file_stable lock verification loop.', es: 'Manejador watchdog con filtrado de temporales y bucle _wait_until_file_stable de verificación de bloqueos.' },
          },
          {
            name: 'extractor.py',
            role: { en: 'Extracts up to 1,500 UTF-8 characters from text files or first 2 pages of PDFs (pypdf), falling back to metadata for binaries/images.', es: 'Extrae hasta 1.500 caracteres en texto o las 2 primeras páginas de PDFs (pypdf), usando metadatos en binarios/imágenes.' },
          },
          {
            name: 'ai_classifier.py',
            role: { en: 'Constructs strict category system prompt, invokes local Ollama /api/generate with fallback to urllib if requests is absent, enforces YYYY_MM_DD_ formatting and extension lock.', es: 'Construye el prompt estricto por categorías, consulta Ollama local con fallback a urllib y garantiza formato fecha y extensión original.' },
          },
          {
            name: 'file_manager.py & gui.py',
            role: { en: 'Sanitizes OS forbidden characters (/:*?"<>|), resolves collisions (_1, _2), safely moves via shutil, and renders a live status table in Tkinter.', es: 'Sanea caracteres prohibidos del SO, resuelve colisiones, mueve de forma segura con shutil y muestra actividad en tiempo real en Tkinter.' },
          },
        ],
        codeSnippet: {
          filename: 'watcher.py',
          language: 'python',
          code: `if current_size == last_size and current_size > 0:
    try:
        with file_path.open("rb") as handle:
            handle.read(1)
        return True  # Stable size AND OS write lock released
    except (PermissionError, OSError):
        pass  # Browser still flushing download bytes`,
        },
      },
      engineeringDecisions: [
        {
          decision: { en: 'Local Ollama Inference with Deterministic Fallback Over Cloud APIs', es: 'Inferencia Local en Ollama con Fallback Determinista frente a APIs Cloud' },
          rationale: { en: 'Personal invoices, contracts, and CVs never leave the user\'s disk; if the local daemon is stopped, connection errors degrade gracefully into date-prefixed "Otros" sorting instead of crashing.', es: 'Facturas, contratos y CVs nunca salen del disco local; si Ollama no responde, los documentos pasan de forma segura a "Otros" con prefijo de fecha sin perder ningún archivo.' },
        },
        {
          decision: { en: 'Hard Post-LLM Extension & Regex Path Validation', es: 'Validación Estricta de Extensión y Caracteres Post-LLM' },
          rationale: { en: 'Even with low temperature (0.1) and JSON formatting, LLMs occasionally alter file suffixes or emit spaces/colons. _sanitize_and_validate_filename forcibly restores the authentic original extension.', es: 'Incluso con temperatura 0.1, un LLM puede cambiar una extensión o emitir signos inválidos. El validador impone la extensión original auténtica del fichero.' },
        },
      ],
      challenges: {
        en: [
          'Asynchronous browser downloads on Windows trigger PermissionError during rapid watchdog creation callbacks; resolved via multi-attempt size polling and binary read probing.',
          'Handling missing optional packages safely: ai_classifier falls back gracefully to Python standard library urllib.request if requests is not installed in a minimal environment.',
        ],
        es: [
          'Las descargas en Windows generan PermissionError en el evento on_created inicial; resuelto combinando comprobación de tamaño estable y lectura de prueba.',
          'Tolerancia ante ausencia de paquetes: si requests no está instalado, ai_classifier recurre automáticamente a urllib.request de la biblioteca estándar.',
        ],
      },
      resultsAndLearnings: {
        results: {
          en: [
            'Cleanly tested across tests/test_modules.py (filename sanitization, _1/_2 collision resolution, binary extraction, and mocked Ollama online/offline classification paths).',
            'Zero-cost privacy-preserving local workflow supporting Finanzas_Facturas, Vehiculos_Mantenimiento, Universidad_Estudios, Trabajo_CV, Codigo_Scripts, and Otros.',
          ],
          es: [
            'Cubierto por tests unitarios en tests/test_modules.py verificando saneamiento, colisiones, extracción binaria y rutas éxito/fallback ante Ollama.',
            'Flujo 100% local y privado adaptado a categorías reales mediante daemon CLI e interfaz gráfica Tkinter.',
          ],
        },
        limitations: {
          en: [
            'Scanned image-only PDFs without embedded text layers fall back to metadata classification since OCR (e.g., Tesseract) is intentionally omitted to keep dependencies lightweight.',
          ],
          es: [
            'Los PDFs puramente escaneados como imagen sin texto embebido se clasifican mediante sus metadatos de archivo al no incluir OCR pesado.',
          ],
        },
      },
    },
  },
  {
    id: 'iot-edge-security',
    issueNumber: '04',
    title: 'IoT Security System (Arduino UNO R4 WiFi)',
    subtitle: {
      en: 'COM6017M Hardware Sensing, Edge Classification & Embedded HTTP Server',
      es: 'Sistema Embebido COM6017M con Procesamiento Local y Servidor Web AJAX',
    },
    category: 'iot',
    categoryLabel: {
      en: 'Embedded C++ & Hardware',
      es: 'C++ Embebido & Hardware',
    },
    editorialVariant: 'hardware-schematic',
    year: '2026',
    shortDescription: {
      en: 'Autonomous physical perimeter detector programmed in C++ on Arduino UNO R4 WiFi (Renesas RA4M1 + ESP32-S3). Averages 3 HC-SR04 ultrasonic pings locally, classifies proximity into 3 security zones, drives an LED matrix, and hosts an AJAX dashboard.',
      es: 'Sistema físico autónomo programado en C++ sobre Arduino UNO R4 WiFi. Promedia 3 pulsos ultrasónicos HC-SR04 localmente, clasifica 3 estados en la placa, controla la matriz LED y sirve un panel AJAX embebido.',
    },
    technologies: ['Arduino UNO R4 WiFi', 'C++', 'WiFiS3', 'HC-SR04 Ultrasonic', 'Arduino LED Matrix', 'Embedded HTTP/JSON', 'AJAX Polling'],
    visualType: 'iot-edge',
    githubUrl: 'https://github.com/villanuevapablo/IoT-Edge-AI-Security-System',
    liveDemoUrl: null,
    status: {
      en: 'Completed • University Module COM6017M (2026)',
      es: 'Completado • Asignatura Universitaria COM6017M (2026)',
    },
    academicContext: {
      en: 'York St John University • COM6017M Internet of Things Module',
      es: 'York St John University • Módulo COM6017M Internet of Things',
    },
    caseStudy: {
      introduction: {
        en: 'Developed for the COM6017M Internet of Things module, this project eliminates external cloud MQTT brokers by running all distance sensing, moving-average signal denoising, threat-state classification, visual signaling, and web dashboard serving directly on an Arduino UNO R4 WiFi board.',
        es: 'Desarrollado para el módulo COM6017M de Internet of Things, este sistema prescinde de servidores cloud externos ejecutando la lectura ultrasónica, filtrado de ruido, clasificación de estado, señalización física y servidor web directamente en un Arduino UNO R4 WiFi.',
      },
      theChallenge: {
        en: 'Raw HC-SR04 ultrasonic reflections often produce intermittent spike outliers, while serving an interactive monitoring UI from a constrained microcontroller risks memory fragmentation if unbounded logs accumulate.',
        es: 'Las lecturas ultrasónicas HC-SR04 brutas sufren picos erróneos de señal, mientras que alojar un panel web en tiempo real desde un microcontrolador exige limitar el consumo de memoria RAM al registrar alertas.',
      },
      theSolution: {
        en: 'Implemented a 3-sample valid-range ultrasonic filter (0 < cm < 400), deterministic 3-tier threshold classification (<20cm INTRUDER, 20–80cm WARNING, >80cm SECURE) coupled to traffic-light LEDs and 12x8 hex LED matrix bitmaps, plus an embedded WiFiServer listening on port 80 exposing /, /data (JSON), and /reset.',
        es: 'Implementé un promedio de 3 lecturas válidas (0 < cm < 400), clasificación en tres estados (<20cm INTRUDER, 20–80cm WARNING, >80cm SECURE) reflejada en tres LEDs y la matriz LED integrada (icon_cross, icon_warn, icon_heart), junto a un servidor HTTP embebido con endpoints /, /data JSON y /reset.',
      },
      architecture: {
        summary: {
          en: 'Single microcontroller firmware coordinating GPIO sensor timing, local deterministic classification, matrix bitmap rendering, and stateless JSON polling.',
          es: 'Firmware autónomo que coordina pulsos GPIO, filtrado local, iconos hexadecimales en matriz LED y respuestas JSON por WiFi local.',
        },
        modules: [
          {
            name: 'Ultrasonic Sampler (D3/D4)',
            role: { en: 'Fires 10µs trigger pulses 3x per loop iteration, converts pulseIn echoes to cm, discards out-of-range noise (0..400cm), and averages valid readings.', es: 'Dispara pulsos de 10µs tres veces por ciclo, filtra ecos fuera de rango (0–400cm) y calcula la distancia media.' },
          },
          {
            name: 'Rule Classifier & Matrix',
            role: { en: 'Maps averaged distance to INTRUDER (<20cm), WARNING (20–80cm), or SECURE (>80cm) and renders 32-bit hex bitmaps onto the 12x8 onboard LED matrix.', es: 'Clasifica la distancia en INTRUDER, WARNING o SECURE, enciende el LED D5/D6/D7 correspondiente y carga bitmaps en la matriz LED.' },
          },
          {
            name: 'Embedded HTTP /data & UI',
            role: { en: 'WiFiServer(80) serves an embedded mobile-friendly dashboard polling /data every 1000ms and exposes /reset to flush stored logs.', es: 'WiFiServer en el puerto 80 sirviendo el panel AJAX con sondeo cada 1000ms a /data y limpieza en /reset.' },
          },
        ],
        codeSnippet: {
          filename: 'src/main.ino',
          language: 'cpp',
          code: `if (distance > 0 && distance < 20) {
  currentSystemState = "INTRUDER";
  digitalWrite(LED_R, HIGH);
  matrix.loadFrame(icon_cross);
} else if (distance >= 20 && distance <= 80) {
  currentSystemState = "WARNING";
  digitalWrite(LED_Y, HIGH);
  matrix.loadFrame(icon_warn);
} else {
  currentSystemState = "SECURE";
  digitalWrite(LED_G, HIGH);
  matrix.loadFrame(icon_heart);
}`,
        },
      },
      engineeringDecisions: [
        {
          decision: { en: 'Bounded Event Log Buffer (1,000-char String Guard)', es: 'Límite Estricto de Historial en Memoria (Guardia de 1.000 caracteres)' },
          rationale: { en: 'On constrained SRAM, unbounded log appending crashes the WiFi stack over long runtimes. Capping csvLogs at 1,000 characters keeps HTTP responses predictable.', es: 'Concatenar eventos sin límite agotaría la SRAM del microcontrolador; limitar el buffer a 1.000 caracteres mantiene estable el servidor.' },
        },
        {
          decision: { en: '1000ms AJAX JSON Polling (/data) Over Full-Page Reloads', es: 'Sondeo AJAX JSON (/data) cada 1s en lugar de recargas HTML' },
          rationale: { en: 'Transmitting tiny ~80-byte JSON payloads reduces socket stall time on the ESP32-S3 co-processor and prevents visual UI flicker.', es: 'Enviar un JSON compacto reduce la carga sobre el módulo WiFi y actualiza la barra de distancia sin parpadeos.' },
        },
      ],
      challenges: {
        en: [
          'JSON injection / broken payloads from HTML row fragments inside log responses were fixed by escaping double quotes and stripping newlines before serializing the /data response.',
          'Handling noisy echoes that produce 0cm timeouts required falling back cleanly to validReadings tracking instead of falsely firing INTRUDER alerts.',
        ],
        es: [
          'Escapar comillas y saltos de línea en las filas de eventos antes de enviarlas dentro del JSON de /data para evitar errores de parseo en fetch().',
          'Evitar falsas alarmas de INTRUDER cuando el sensor retorna 0 por timeout descartando lecturas fuera del rango válido 0..400cm.',
        ],
      },
      resultsAndLearnings: {
        results: {
          en: [
            'Fully autonomous local WiFi alarm prototype requiring zero external internet connectivity after LAN association.',
            'Sub-second physical LED & matrix feedback synchronized with a browser monitor usable on desktop and mobile.',
          ],
          es: [
            'Prototipo físico completamente autónomo en red local sin dependencia de nube externa.',
            'Respuesta física simultánea en semáforo LED, matriz 12x8 y navegador móvil en tiempo real.',
          ],
        },
        limitations: {
          en: [
            'Event logs live purely in RAM and clear on device reset or when exceeding the 1,000-character safeguard; persistent SD card storage would be required for long-term auditing.',
            'HTTP server operates unencrypted on local LAN as standard for lightweight embedded demos.',
          ],
          es: [
            'El historial reside en RAM (sin tarjeta SD), perdiéndose al reiniciar o al superar el límite de 1.000 caracteres.',
            'Comunicación HTTP plana dentro de red local LAN adecuada al ámbito demostrativo embebido.',
          ],
        },
      },
    },
  },
  {
    id: 'preflop-hero',
    issueNumber: '05',
    title: 'Preflop Hero: Hand History Parser & Analytics',
    subtitle: {
      en: 'Zero-Dependency Regex ETL Engine, SQLite Ledger & Client-Side Auditor',
      es: 'Motor ETL Regex sin Dependencias, SQLite & Auditor de Estrategia',
    },
    category: 'data',
    categoryLabel: {
      en: 'Data Analytics & Parsing',
      es: 'Analítica de Datos & Parsing',
    },
    editorialVariant: 'data-notebook',
    year: '2026',
    shortDescription: {
      en: 'Dual-mode Python CLI/SQLite pipeline and standalone HTML analyzer that extracts structured preflop decisions from raw Winamax and 888poker hand histories, enforces idempotent ingestion, and benchmarks VPIP, PFR, and cold-call gap against 6-max targets.',
      es: 'Pipeline dual Python/SQLite y aplicación web autónoma que extrae decisiones preflop desde historiales en bruto de Winamax y 888poker, evita duplicados con índice único y evalúa VPIP, PFR y brecha frente a referencias 6-max.',
    },
    technologies: ['Python 3.12 (Stdlib)', 'Regex Parsing', 'SQLite 3', 'HTML5 / SVG', 'Statistical Auditing'],
    visualType: 'preflop-hero',
    githubUrl: 'https://github.com/villanuevapablo/preflop-hero',
    liveDemoUrl: null,
    status: {
      en: 'Completed • Python CLI + Standalone Web UI (2026)',
      es: 'Completado • CLI Python + Interfaz Web Autónoma (2026)',
    },
    caseStudy: {
      introduction: {
        en: 'Preflop Hero turns unstructured raw text session logs exported by Winamax and 888poker into clean, queryable relational records. Built using zero external pip dependencies in Python alongside a standalone single-file HTML/JS analyzer (index.html), it audits three foundational 6-max strategy indicators: VPIP (Voluntarily Put $ in Pot), PFR (Preflop Raise), and the passive PFR/VPIP gap.',
        es: 'Preflop Hero transforma archivos de texto en bruto exportados por Winamax y 888poker en registros relacionales auditables. Construido íntegramente con la biblioteca estándar de Python más un analizador web autónomo (index.html), mide VPIP, PFR y la brecha de llamadas pasivas frente a referencias teóricas 6-max.',
      },
      theChallenge: {
        en: 'Every poker client uses distinct headers, card syntax, and street delimiters (e.g. Winamax "*** PRE-FLOP ***" vs 888poker "** Dealing down cards **"). Crucially, forced blinds and antes must not falsely inflate VPIP unless Hero makes a subsequent voluntary call, bet, or raise—and re-uploading overlapping session files cannot double-count hands.',
        es: 'Cada sala utiliza cabeceras, notación de cartas y delimitadores propios (Winamax frente a 888poker). Además, las ciegas obligatorias no deben contabilizarse como VPIP voluntario, y reimportar archivos solapados nunca debe duplicar estadísticas.',
      },
      theSolution: {
        en: 'Designed platform-specific compiled regular expressions isolating only the preflop block and matching Hero actions explicitly ("raises|calls|bets"). Normalized parsed outputs into SQLite with a composite UNIQUE(hand_id, platform) constraint catching IntegrityError safely for idempotent batch imports.',
        es: 'Diseñé expresiones regulares compiladas específicas por plataforma que aíslan estrictamente la sección preflop y evalúan acciones voluntarias de Hero ("raises|calls|bets"). La persistencia en SQLite emplea UNIQUE(hand_id, platform) para ignorar duplicados de forma idempotente.',
      },
      architecture: {
        summary: {
          en: 'Four-module Python stdlib package coupled cleanly to a standalone zero-server HTML dashboard for browser-side parsing.',
          es: 'Paquete Python de cuatro módulos en biblioteca estándar junto a un dashboard HTML independiente que procesa datos localmente en el navegador.',
        },
        modules: [
          {
            name: 'parser.py',
            role: { en: 'Splits mixed-platform log streams, detects Winamax vs 888poker signatures, strips comma spacing in hole cards, and derives binary VPIP/PFR flags.', es: 'Segmenta lotes de manos, identifica plataforma, normaliza las cartas propias y evalúa flags binarios VPIP/PFR.' },
          },
          {
            name: 'database.py',
            role: { en: 'Context-managed SQLite interface managing the hand_statistics schema with composite UNIQUE(hand_id, platform) deduplication and SQL aggregate queries.', es: 'Gestor SQLite por contexto sobre hand_statistics con clave única compuesta y agregaciones SQL directas.' },
          },
          {
            name: 'analyzer.py',
            role: { en: 'Compares empirical VPIP (target 20–27%), PFR (17–23%), and gap (3–6 pp) to output structured diagnostic recommendations.', es: 'Compara métricas agregadas contra objetivos teóricos 6-max para generar diagnósticos concretos.' },
          },
          {
            name: 'index.html',
            role: { en: 'Standalone client-side JS implementation allowing drag-and-drop analysis with zero data leaving the user\'s browser.', es: 'Interfaz web autónoma para análisis drag-and-drop íntegramente en el navegador.' },
          },
        ],
        codeSnippet: {
          filename: 'database.py',
          language: 'sql',
          code: `CREATE TABLE IF NOT EXISTS hand_statistics (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    hand_id     TEXT    NOT NULL,
    platform    TEXT    NOT NULL,
    hero_cards  TEXT,
    vpip        INTEGER NOT NULL,
    pfr         INTEGER NOT NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(hand_id, platform)
);`,
        },
      },
      engineeringDecisions: [
        {
          decision: { en: 'Database-Enforced Uniqueness (UNIQUE(hand_id, platform)) Over Application-Side Lookups', es: 'Unicidad en Base de Datos (UNIQUE(hand_id, platform)) frente a comprobaciones previas' },
          rationale: { en: 'Letting SQLite reject duplicate keys cleanly via IntegrityError makes bulk re-ingestion atomic, fast, and simpler to maintain.', es: 'Delegar la deduplicación al motor relacional convierte las reimportaciones en operaciones idempotentes sin consultas SELECT previas.' },
        },
        {
          decision: { en: 'Pure Python Stdlib + Companion Client-Side Web App', es: 'Biblioteca Estándar Python + Analizador Web Autónomo' },
          rationale: { en: 'Requires zero pip install steps for quick CLI testing while giving non-technical users an immediate privacy-first browser interface.', es: 'Permite ejecutar el motor CLI en cualquier Python 3.10+ sin dependencias y analizar archivos directamente en el navegador.' },
        },
      ],
      challenges: {
        en: [
          'Isolating preflop boundaries carefully when hands end early preflop (going straight from preflop actions to SUMMARY instead of FLOP), handled via non-greedy regex alternation.',
          'Normalizing platform differences like comma-separated 888poker hole cards ("[ Qh, Qd ]") into consistent display strings.',
        ],
        es: [
          'Delimitar correctamente las manos que terminan antes del flop (pasando directamente a SUMMARY), resuelto con alternancia regex no codiciosa.',
          'Normalizar variaciones de formato en cartas de 888poker con comas y espacios extra.',
        ],
      },
      resultsAndLearnings: {
        results: {
          en: [
            'Clean dual-execution toolkit: SQLite-backed CLI pipeline plus interactive client-side SVG web analyzer.',
            'Zero external dependencies and idempotent re-ingestion across multi-platform hand histories.',
          ],
          es: [
            'Herramienta dual limpia: pipeline CLI sobre SQLite y analizador web cliente autónomo.',
            'Cero dependencias externas y soporte idempotente entre múltiples historiales de salas.',
          ],
        },
        limitations: {
          en: [
            'Currently focuses on preflop metrics (VPIP/PFR) and 6-max cash benchmarks for Winamax and 888poker formats; postflop streets and positional filtering (UTG/BTN/BB) remain natural next extensions.',
          ],
          es: [
            'Centrado actualmente en métricas preflop (VPIP/PFR) para formatos Winamax y 888poker; el desglose posicional (UTG/BTN/BB) y postflop quedarían como ampliaciones futuras.',
          ],
        },
      },
    },
  },
];

export const TOOLKIT_CATEGORIES: ToolkitCategory[] = [
  {
    id: 'software-development',
    number: 'T.01',
    title: {
      en: 'Software Development',
      es: 'Desarrollo de Software',
    },
    subtitle: {
      en: 'Languages & application frameworks across production and project delivery',
      es: 'Lenguajes y frameworks aplicados en producción y proyectos completos',
    },
    skills: [
      {
        name: 'Go (Golang)',
        evidence: { en: 'SRMS-MEDICAL — net/http server, auth middleware, html/template', es: 'SRMS-MEDICAL — servidor net/http, middleware de seguridad y plantillas' },
        tier: 'primary',
      },
      {
        name: 'Python',
        evidence: { en: '3 repositories — ML pipeline, watchdog daemon, regex/SQLite CLI', es: '3 repositorios — pipeline ML, servicio watchdog y motor regex/SQLite' },
        tier: 'primary',
      },
      {
        name: 'TypeScript & JavaScript',
        evidence: { en: 'Interactive web UIs, React state systems & client-side parsers', es: 'Interfaces web tipadas, gestión de estado y analizadores cliente' },
        tier: 'primary',
      },
      {
        name: 'React',
        evidence: { en: 'Component architecture, custom routing & accessible interactive views', es: 'Arquitectura de componentes, vistas editoriales y accesibilidad' },
        tier: 'primary',
      },
      {
        name: 'Java',
        evidence: { en: 'DAM curriculum — OOP, architecture & application delivery', es: 'Formación DAM — POO, arquitectura y aplicaciones multiplataforma' },
        tier: 'primary',
      },
      {
        name: 'C++ (Embedded)',
        evidence: { en: 'IoT Security System — Arduino UNO R4 WiFi firmware', es: 'Sistema IoT — firmware C++ en microcontrolador Arduino UNO R4 WiFi' },
        tier: 'primary',
      },
      {
        name: 'Spring Boot / Angular / Svelte',
        evidence: { en: 'Foundational & CV coursework exposure (secondary to core stack)', es: 'Base formativa y práctica académica en CV (complementario al stack principal)' },
        tier: 'academic',
      },
    ],
  },
  {
    id: 'backend-data',
    number: 'T.02',
    title: {
      en: 'Backend & Data',
      es: 'Backend y Datos',
    },
    subtitle: {
      en: 'APIs, persistence modeling, security controls & relational querying',
      es: 'APIs, persistencia relacional, controles de seguridad y modelado de datos',
    },
    skills: [
      {
        name: 'REST API Design & Integration',
        evidence: { en: 'Universidad Nebrija integrations, Ollama REST & Telegram webhooks/polling', es: 'Integraciones en Universidad Nebrija, API Ollama y bot de Telegram' },
        tier: 'primary',
      },
      {
        name: 'SQLite (WAL & Indexed Schemas)',
        evidence: { en: 'SRMS-MEDICAL (4-table schema) & Preflop Hero (unique deduplication)', es: 'SRMS-MEDICAL (esquema de 4 tablas) y Preflop Hero (deduplicación única)' },
        tier: 'primary',
      },
      {
        name: 'MySQL, PostgreSQL & JDBC',
        evidence: { en: 'Relational schema design and transactional persistence foundations', es: 'Diseño relacional y persistencia transaccional en formación técnica' },
        tier: 'primary',
      },
      {
        name: 'Auth & Security Primitives',
        evidence: { en: 'bcrypt (cost 12), one-time CSRF tokens, HttpOnly cookies, IP rate limits', es: 'bcrypt (coste 12), tokens CSRF de un uso, cookies HttpOnly y límite por IP' },
        tier: 'primary',
      },
      {
        name: 'Firebase',
        evidence: { en: 'Academic / CV cloud database & hosting exposure', es: 'Uso en entorno académico / base de datos cloud reflejada en CV' },
        tier: 'academic',
      },
    ],
  },
  {
    id: 'tools-testing',
    number: 'T.03',
    title: {
      en: 'Tools & Engineering Practice',
      es: 'Herramientas y Calidad',
    },
    subtitle: {
      en: 'Version control, verification workflows, OS environments & deployment',
      es: 'Control de versiones, verificación con pruebas, sistemas y despliegue',
    },
    skills: [
      {
        name: 'Git & GitHub',
        evidence: { en: 'Team delivery at Universidad Nebrija & 6 public repositories', es: 'Flujos de equipo en Universidad Nebrija y 6 repositorios públicos' },
        tier: 'primary',
      },
      {
        name: 'Unit & Integration Testing',
        evidence: { en: 'Production QA at Nebrija + Python unittest suites (mocking Ollama APIs)', es: 'Pruebas en producción en Nebrija y suites unittest con mocks' },
        tier: 'primary',
      },
      {
        name: 'Linux CLI & Windows PowerShell',
        evidence: { en: 'Daemon scripting, systemd/Task Scheduler deployment docs & debugging', es: 'Automatización de servicios, consola Linux y depuración de procesos' },
        tier: 'primary',
      },
      {
        name: 'Vite, Tailwind CSS & Vercel',
        evidence: { en: 'Production SPA builds, Safari compatibility targets & automated deployments', es: 'Builds SPA optimizados, compatibilidad Safari iOS y despliegue continuo' },
        tier: 'primary',
      },
    ],
  },
  {
    id: 'ai-data-experiments',
    number: 'T.04',
    title: {
      en: 'AI & Data Experiments',
      es: 'IA y Experimentos de Datos',
    },
    subtitle: {
      en: 'Applied areas of interest backed by working pipelines and hardware experiments',
      es: 'Áreas de interés aplicadas respaldadas por pipelines y prototipos reales',
    },
    skills: [
      {
        name: 'Scikit-learn & Time-Series Validation',
        evidence: { en: 'Linear Regression & Random Forest tested under 5-fold TimeSeriesSplit', es: 'Regresión Lineal y Random Forest evaluados bajo TimeSeriesSplit' },
        tier: 'primary',
      },
      {
        name: 'Pandas, NumPy & Feature Engineering',
        evidence: { en: 'Rolling windows (SMA 7/30, Volatility 14) & financial lag transforms', es: 'Ventanas móviles (SMA 7/30, Volatilidad 14) y variables retardadas' },
        tier: 'primary',
      },
      {
        name: 'Local LLMs (Ollama REST + JSON Mode)',
        evidence: { en: 'Structured document classification with deterministic schema sanitization', es: 'Clasificación documental estructurada con saneamiento determinista' },
        tier: 'primary',
      },
      {
        name: 'Matplotlib, Seaborn, Plotly & Streamlit',
        evidence: { en: '7 diagnostic research plots & multi-page interactive evaluation UI', es: '7 gráficos diagnósticos de investigación y panel interactivo' },
        tier: 'primary',
      },
      {
        name: 'Edge Signal Processing (Arduino UNO R4)',
        evidence: { en: 'Local sensor denoising and autonomous rule-based perimeter alerts', es: 'Filtrado de señal en dispositivo y clasificación local autónoma' },
        tier: 'primary',
      },
    ],
  },
];

export const UI_COPY = {
  nav: {
    index: { en: '01 / INDEX', es: '01 / PORTADA' },
    work: { en: '02 / SELECTED WORK', es: '02 / PROYECTOS' },
    notes: { en: '03 / NOTES', es: '03 / NOTAS' },
    profile: { en: '04 / PROFILE', es: '04 / PERFIL' },
    contact: { en: '05 / CONTACT', es: '05 / CONTACTO' },
  },
  cover: {
    editionTag: { en: 'ISSUE 01 — ENGINEERING JOURNAL', es: 'EDICIÓN 01 — DIARIO DE INGENIERÍA' },
    locationMeta: { en: 'MADRID, SPAIN · UTC+1', es: 'MADRID, ESPAÑA · UTC+1' },
    credentialMeta: { en: 'BSC (HONS) FIRST-CLASS HONOURS', es: 'BSC (HONS) FIRST-CLASS HONOURS' },
    interestHeading: { en: 'AREAS OF FOCUS & INTEREST', es: 'ÁREAS DE TRABAJO E INTERÉS' },
    portraitCaption: { en: 'FIG. 00 — PABLO VILLANUEVA PICAZO / AUTHOR EDITION', es: 'FIG. 00 — PABLO VILLANUEVA PICAZO / EDICIÓN DE AUTOR' },
    leadDispatchLabel: { en: 'LEAD MONOGRAPH IN THIS ISSUE', es: 'MONOGRAFÍA DESTACADA' },
    readSelectedWork: { en: 'Read Selected Work', es: 'Explorar Proyectos' },
    openCv: { en: 'Download CV (EN / ES)', es: 'Descargar CV (ES / EN)' },
  },
  selectedWork: {
    sectionKicker: { en: '02 // SELECTED WORK & TECHNICAL CASE STUDIES', es: '02 // PROYECTOS SELECCIONADOS Y CASOS DE ESTUDIO' },
    sectionTitle: { en: 'Selected Engineering Monographs', es: 'Monografías de Ingeniería Seleccionadas' },
    sectionSubtitle: {
      en: 'Five self-contained projects across machine learning, framework-free Go security, Python automation, embedded systems, and data parsing. Select any monograph for full architecture, code notes, and limitations.',
      es: 'Cinco proyectos verificables en machine learning, seguridad backend en Go puro, automatización en Python, sistemas embebidos y parsing de datos. Selecciona cualquier monografía para leer su arquitectura completa.',
    },
    readCaseStudy: { en: 'Open Full Case Study', es: 'Abrir Caso de Estudio' },
    viewRepo: { en: 'Source Code on GitHub', es: 'Código en GitHub' },
    filterAll: { en: 'All Monographs (05)', es: 'Todas (05)' },
    filterMl: { en: 'Machine Learning', es: 'Machine Learning' },
    filterBackend: { en: 'Go & Security', es: 'Go y Seguridad' },
    filterAutomation: { en: 'Local AI & Python', es: 'IA Local y Python' },
    filterIot: { en: 'Embedded IoT', es: 'IoT Embebido' },
    filterData: { en: 'Data Analytics', es: 'Analítica de Datos' },
  },
  caseStudyChapters: {
    backToIndex: { en: 'Back to Selected Work', es: 'Volver al Índice de Proyectos' },
    c01: { en: '01 — INTRODUCTION', es: '01 — INTRODUCCIÓN' },
    c02: { en: '02 — THE CHALLENGE', es: '02 — EL DESAFÍO' },
    c03: { en: '03 — THE SOLUTION', es: '03 — LA SOLUCIÓN' },
    c04: { en: '04 — ARCHITECTURE', es: '04 — ARQUITECTURA' },
    c05: { en: '05 — ENGINEERING DECISIONS', es: '05 — DECISIONES TÉCNICAS' },
    c06: { en: '06 — CHALLENGES & DEBUGGING', es: '06 — RETO Y DEPURACIÓN' },
    c07: { en: '07 — RESULTS & LIMITATIONS', es: '07 — RESULTADOS Y LÍMITES' },
    c08: { en: '08 — SOURCE CODE', es: '08 — CÓDIGO FUENTE' },
    achievedLabel: { en: 'Verified Outcomes', es: 'Resultados Comprobados' },
    limitationsLabel: { en: 'Known Boundaries & Limitations', es: 'Límites Técnicos y Alcance' },
    prevStory: { en: 'Previous Monograph', es: 'Monografía Anterior' },
    nextStory: { en: 'Next Monograph', es: 'Siguiente Monografía' },
  },
  notes: {
    sectionKicker: { en: '03 // FIELD DISPATCHES & DEBUGGING LOG', es: '03 // NOTAS DE INGENIERÍA Y DEPURACIÓN' },
    sectionTitle: { en: 'Engineering Notes', es: 'Notas de Ingeniería' },
    sectionSubtitle: {
      en: 'Concrete implementation findings, bugs resolved, and architectural lessons documented directly from my repositories. Future topics remain openly flagged until verified by real code.',
      es: 'Hallazgos técnicos reales, fallos depurados y decisiones documentadas directamente sobre mis repositorios. Los temas futuros se dejan indicados sin inventar artículos.',
    },
    readNote: { en: 'Read Technical Note', es: 'Leer Nota Técnica' },
    backToNotes: { en: 'Back to Engineering Notes', es: 'Volver a Notas de Ingeniería' },
    learnedHeading: { en: 'Key Engineering Takeaway', es: 'Aprendizaje Clave' },
    relatedProjectHeading: { en: 'Verified in Project', es: 'Verificado en el Proyecto' },
    queuedHeading: { en: 'EDITORIAL LEDGER — UPCOMING / QUEUED TOPICS (NOT YET WRITTEN)', es: 'ARCHIVO EDITORIAL — TEMAS PRÓXIMOS PENDIENTES DE ESCRITURA' },
    queuedNote: {
      en: 'Only verified notes grounded in real codebase experience are published above. Additional entries will be added as new systems are built and tested.',
      es: 'Aquí únicamente se publican notas basadas en código real ya escrito y depurado. El catálogo crecerá con nuevos desarrollos verificados.',
    },
  },
  profile: {
    sectionKicker: { en: '04 // AUTHOR DOSSIER, EXPERIENCE, EDUCATION & TOOLKIT', es: '04 // PERFIL, EXPERIENCIA, EDUCACIÓN Y HERRAMIENTAS' },
    sectionTitle: { en: 'Engineering Background & Toolkit', es: 'Trayectoria Técnica y Herramientas' },
    narrativeHeading: { en: 'Background & Engineering Narrative', es: 'Trayectoria y Enfoque' },
    approachHeading: { en: 'Problem-Solving Approach', es: 'Metodología de Resolución' },
    experienceHeading: { en: 'Industry Experience', es: 'Experiencia Profesional' },
    educationHeading: { en: 'Academic Credentials', es: 'Formación Académica' },
    toolkitHeading: { en: 'Technical Toolkit — Categorized Index', es: 'Inventario Técnico — Índice Estructurado' },
    primaryBadge: { en: 'Core Stack / Built Projects', es: 'Uso Principal / Proyectos' },
    academicBadge: { en: 'Academic / Secondary Exposure', es: 'Exposición Académica / CV' },
  },
  contact: {
    sectionKicker: { en: '05 // BACK COVER & DIRECT CHANNELS', es: '05 // CONTRAPORTADA Y CONTACTO DIRECTO' },
    headline: {
      en: 'Open to Junior Software Engineer & Full Stack Developer Roles.',
      es: 'Disponible para puestos de Junior Software Engineer y Desarrollador Full Stack.',
    },
    subline: {
      en: 'Based in Madrid, Spain with immediate availability for on-site, hybrid, or remote teams. Download either CV edition or reach out directly.',
      es: 'Ubicado en Madrid, con disponibilidad inmediata para equipos presenciales, híbridos o remotos. Descarga el CV en español/inglés o escríbeme directamente.',
    },
    copyEmail: { en: 'Copy Address', es: 'Copiar Correo' },
    copied: { en: 'Copied to clipboard', es: 'Copiado al portapapeles' },
    formHeading: { en: 'Compose Direct Mailto Dispatch', es: 'Redactar Mensaje Directo (Email)' },
    sendBtn: { en: 'Open in Email Client', es: 'Abrir en Cliente de Correo' },
    cvDownloadLabel: { en: 'Official Curricula Vitae', es: 'Currículum Vitae Oficial' },
  },
};
