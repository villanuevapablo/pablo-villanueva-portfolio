import {
  PersonalInfo,
  ExperienceItem,
  EducationItem,
  ProjectItem,
  FocusAreaItem,
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
  brandSubtitle: 'SOFTWARE · AI · DATA',
  title: {
    en: 'Software Engineer | AI & Data Enthusiast',
    es: 'Ingeniero de Software | Interés en IA y Datos',
  },
  editorialSummary: {
    en: 'Software engineering graduate interested in artificial intelligence, machine learning and data analytics, with experience building full-stack applications and practical software solutions.',
    es: 'Graduado en ingeniería de software interesado en inteligencia artificial, machine learning y analítica de datos, con experiencia desarrollando aplicaciones full-stack y soluciones de software prácticas.',
  },
  interests: [
    {
      id: 'ai',
      label: { en: 'Artificial Intelligence', es: 'Inteligencia Artificial' },
      note: { en: 'Local LLM inference pipelines & structured JSON workflows', es: 'Pipelines locales con LLMs y flujos con JSON estructurado' },
    },
    {
      id: 'ml',
      label: { en: 'Machine Learning', es: 'Machine Learning' },
      note: { en: 'Regression models, Random Forest, TimeSeriesSplit & evaluation', es: 'Modelos de regresión, Random Forest, validación temporal y evaluación' },
    },
    {
      id: 'data',
      label: { en: 'Data Analytics & Data Science', es: 'Analítica y Ciencia de Datos' },
      note: { en: 'Data preprocessing, Pandas/NumPy pipelines, regex ETL & visualization', es: 'Preprocesamiento, Pandas/NumPy, extracción regex y visualización' },
    },
    {
      id: 'swe',
      label: { en: 'Software Engineering', es: 'Ingeniería de Software' },
      note: { en: 'Clean architecture, relational modeling & software testing', es: 'Arquitectura limpia, modelado relacional y pruebas de software' },
    },
    {
      id: 'fullstack',
      label: { en: 'Full Stack Development', es: 'Desarrollo Full Stack' },
      note: { en: 'React, TypeScript, Go, Java, Python & SQLite', es: 'React, TypeScript, Go, Java, Python y SQLite' },
    },
  ],
  location: {
    en: 'Madrid, Spain',
    es: 'Madrid, España',
  },
  availability: {
    en: 'Open to opportunities in Software Engineering, Artificial Intelligence, Machine Learning and Data Analytics.',
    es: 'Abierto a oportunidades en Ingeniería de Software, Inteligencia Artificial, Machine Learning y Analítica de Datos.',
  },
  statusBadge: {
    en: 'Open to Software, AI & Data Roles',
    es: 'Abierto a oportunidades en Software, IA y Datos',
  },
  targetRoles: {
    en: 'Target roles: Junior AI / ML Engineer · Junior Data Analyst / Scientist · Junior Data Engineer · Junior Software Engineer / Full Stack Developer',
    es: 'Puestos objetivo: Junior AI / ML Engineer · Junior Data Analyst / Scientist · Junior Data Engineer · Junior Software Engineer / Full Stack Developer',
  },
  cvFilename: {
    en: 'cv-pablo-villanueva-en.pdf',
    es: 'cv-pablo-villanueva-es.pdf',
  },
  aboutParagraphs: {
    en: [
      'My academic background combines Higher Vocational Training in Cross-Platform Application Development (DAM, 2023–2025) at Instituto Nebrija with a BSc (Hons) in Software Engineering (2025–2026) at York St John University, graduating with First-Class Honours (9/10 equivalent).',
      'During my time as a Development Technician at Universidad Nebrija (Apr–Jun 2025), I gained hands-on experience building full-stack web features, integrating external services, writing unit and integration tests, and collaborating with Git in a production environment.',
      'Today my focus centers on Artificial Intelligence, Machine Learning, and Data Analytics. I enjoy working directly with raw datasets—collecting data, cleaning and transforming variables, engineering features, evaluating predictive models honestly, and exploring practical automation with local language models—while maintaining full-stack development and relational data modeling as core engineering foundations.',
    ],
    es: [
      'Mi formación combina el Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM, 2023–2025) en el Instituto Nebrija con el grado universitario BSc (Hons) Software Engineering (2025–2026) en York St John University, completado con First-Class Honours (nota media equivalente 9/10).',
      'Como Técnico de Desarrollo en la Universidad Nebrija (abril–junio de 2025), trabajé desarrollando funcionalidades de aplicaciones web completas, realizando integraciones externas y ejecutando pruebas unitarias y de integración dentro de flujos con Git.',
      'Actualmente oriento mi desarrollo profesional hacia la Inteligencia Artificial, el Machine Learning y la Analítica de Datos. Disfruto trabajando con datos para detectar patrones—desde la captura y limpieza hasta la ingeniería de características, evaluación temporal de modelos y automatización con LLMs locales—, apoyándome en una base sólida de ingeniería de software.',
    ],
  },
  problemSolvingApproach: {
    en: 'Approach new problems by inspecting the raw data and constraints before writing abstractions. Validate models strictly without leakage (chronological splits for time series), document model boundaries transparently alongside benchmarks, and test software behavior systematically.',
    es: 'Abordo cada problema revisando primero los datos reales y las restricciones antes de añadir abstracciones. Valido los modelos sin filtración futura (particiones cronológicas en series temporales), documento con honestidad tanto logros como límites y verifico cada módulo mediante pruebas.',
  },
  languagesSpoken: {
    en: 'English (Professional working proficiency — UK BSc Hons) • Spanish (Native)',
    es: 'Inglés (Fluidez profesional — Grado cursado en Reino Unido) • Español (Nativo)',
  },
  otherDetails: {
    en: [
      'Available immediately for on-site (Madrid), hybrid, or remote positions',
      'Category B Driving License',
      'Curious and self-driven continuous learner across AI, Data, and Software projects',
    ],
    es: [
      'Disponibilidad inmediata para puestos presenciales (Madrid), híbridos o remotos',
      'Permiso de conducir Categoría B',
      'Aprendizaje continuo en proyectos aplicados de IA, Datos e Ingeniería de Software',
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
      en: 'Practical Software Experience (3 months)',
      es: 'Experiencia Práctica en Desarrollo (3 meses)',
    },
    contextNote: {
      en: 'Practical development placement within the university technical team alongside completion of the DAM qualification.',
      es: 'Estancia práctica de desarrollo integrada en el equipo técnico de la universidad al finalizar el ciclo formativo DAM.',
    },
    summary: {
      en: 'Full-stack software development in a production codebase: implementing application features, connecting external services, and executing unit and integration tests.',
      es: 'Desarrollo de aplicaciones full-stack en entorno productivo: implementación de funcionalidades, conexión con servicios externos y ejecución de pruebas unitarias y de integración.',
    },
    responsibilities: {
      en: [
        'Developed and maintained full-stack application features across UI interfaces and backend logic.',
        'Integrated REST APIs for application data exchange and third-party services.',
        'Wrote and executed unit and integration tests to verify application stability before release.',
        'Collaborated under Git version control and structured team workflows.',
      ],
      es: [
        'Implementación y mantenimiento de funcionalidades full-stack entre interfaz y lógica servidor.',
        'Integración de servicios mediante APIs REST para el intercambio de datos de la aplicación.',
        'Ejecución de pruebas unitarias y de integración para validar la estabilidad del código.',
        'Trabajo colaborativo con control de versiones Git y metodologías ágiles.',
      ],
    },
    technologies: ['Full-Stack Development', 'Unit Testing', 'Integration Testing', 'Git', 'REST Integration', 'Agile Workflows'],
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
      en: 'University Honours Degree',
      es: 'Grado Universitario Oficial (Reino Unido)',
    },
    grade: {
      en: 'First-Class Honours (Class I) • 9/10 equivalent average',
      es: 'First-Class Honours (Clase I) • Nota media equivalente: 9/10',
    },
    description: {
      en: 'British university degree covering software architecture, applied machine learning research, IoT systems, and secure web development.',
      es: 'Grado universitario británico enfocado en ingeniería de software, investigación aplicada en machine learning, sistemas IoT y desarrollo web seguro.',
    },
    highlights: {
      en: [
        'Graduated with First-Class Honours (Class I), equivalent to 9/10 average grade',
        'Final Degree Project (COM6016M): Bitcoin Price Forecasting & Analytics System — Grade: 9.0/10',
        'Key practical coursework in IoT Edge Processing (COM6017M) and Go Secure Systems (SRMS)',
      ],
      es: [
        'Graduado con First-Class Honours (Clase I), nota media equivalente a 9/10',
        'Trabajo de Fin de Grado (COM6016M): Sistema de Predicción de Bitcoin y Analítica — Nota: 9.0/10',
        'Proyectos universitarios evaluados en sistemas embebidos IoT (COM6017M) y seguridad en Go (SRMS)',
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
      en: '2023 – 2025',
      es: '2023 – 2025',
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
      en: 'Vocational software development qualification focused on Java object-oriented programming, relational database modeling (MySQL, PostgreSQL, SQLite, JDBC), frontend frameworks, and multiplatform apps.',
      es: 'Ciclo formativo superior centrado en programación orientada a objetos en Java, modelado relacional (MySQL, PostgreSQL, SQLite, JDBC), desarrollo de interfaces y aplicaciones multiplataforma.',
    },
    highlights: {
      en: [
        'Object-oriented software design and multiplatform development in Java',
        'Relational database modeling, SQL queries, and persistence with JDBC and SQLite',
        'Academic training across web interfaces, Python basics, and cloud data tooling',
      ],
      es: [
        'Programación orientada a objetos y desarrollo de aplicaciones multiplataforma en Java',
        'Diseño de bases de datos relacionales, consultas SQL y persistencia mediante JDBC y SQLite',
        'Base académica en desarrollo web frontend y herramientas de datos',
      ],
    },
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'bitcoin-price-forecasting',
    projectNumber: '01',
    title: 'Bitcoin Price Forecasting & Analytics System',
    subtitle: {
      en: 'Data Collection, Feature Engineering, ML Models & Time-Series Validation (TFG — 9.0/10)',
      es: 'Recolección, Preprocesamiento, Modelos ML y Validación Temporal (TFG — 9.0/10)',
    },
    category: 'ai-ml',
    categoryLabel: {
      en: 'Machine Learning & Data Analytics',
      es: 'Machine Learning & Analítica de Datos',
    },
    editorialVariant: 'dark-research',
    grade: '9.0 / 10',
    year: '2026',
    shortDescription: {
      en: 'End-to-end Python data and machine learning pipeline: automated OHLCV data collection (yfinance), cleaning & preprocessing, technical feature engineering, Linear Regression & Random Forest training, strict TimeSeriesSplit validation, error evaluation, and Streamlit/Plotly visual analytics.',
      es: 'Pipeline integral de datos y machine learning en Python: captura automatizada OHLCV (yfinance), limpieza y preprocesamiento, ingeniería de variables técnicas, entrenamiento con Regresión Lineal y Random Forest, validación estricta TimeSeriesSplit, evaluación de error y visualización en Streamlit/Plotly.',
    },
    technologies: ['Python 3.13', 'Scikit-learn', 'Pandas', 'NumPy', 'TimeSeriesSplit', 'yfinance', 'Matplotlib / Seaborn', 'Plotly & Streamlit'],
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
        en: 'Developed for the BSc (Hons) Software Engineering dissertation (COM6016M), this system brings together data engineering, machine learning, and data visualization. It collects four years of historical BTC-USD market data, runs preprocessing and feature creation, compares Linear Regression against Random Forest under chronological validation, generates evaluation charts (residuals, heatmaps, feature importance), and serves model outputs through Streamlit and Telegram.',
        es: 'Desarrollado como Trabajo de Fin de Grado (COM6016M), este proyecto conecta ingeniería de datos, machine learning y visualización. Recolecta cuatro años de datos históricos de BTC-USD, realiza limpieza y creación de variables, compara Regresión Lineal y Random Forest mediante validación cronológica, genera gráficos de diagnóstico y expone los resultados vía Streamlit y Telegram.',
      },
      theChallenge: {
        en: 'Standard supervised ML workflows randomly shuffle data before splitting. In sequential market datasets, shuffling introduces lookahead bias (data leakage), allowing models to peek at future volatility when predicting earlier points. Furthermore, noisy raw series require structured preprocessing and realistic metric inspection rather than optimistic overfit assumptions.',
        es: 'Los flujos supervisados estándar mezclan las muestras antes de dividir entrenamiento y test. En series temporales financieras, barajar introduce sesgo de anticipación (data leakage). Además, los datos en bruto requieren limpieza rigurosa e interpretación crítica de las métricas frente a la autocorrelación.',
      },
      theSolution: {
        en: 'Constructed an end-to-end Python pipeline in train_models.py and analysis.py: flattening yfinance MultiIndex tables, engineering 8 domain features (SMA 7, SMA 30, 14-day rolling volatility, daily percentage returns, lag closes t-1/t-2/t-3, and volume SMA 7), shifting Closing Price (-1) as target, removing leading NaN warm-up rows, and enforcing unshuffled 80/20 chronological splitting alongside 5-fold TimeSeriesSplit evaluation.',
        es: 'Construí un pipeline completo en Python (train_models.py y analysis.py): normalización de columnas MultiIndex de yfinance, cálculo de 8 variables técnicas (SMA 7/30, volatilidad móvil de 14 días, retorno diario %, cierres t-1/t-2/t-3 y volumen SMA 7), desplazamiento del objetivo (-1), limpieza de valores NaN iniciales y validación estricta con corte cronológico 80/20 y 5 pliegues TimeSeriesSplit.',
      },
      architecture: {
        summary: {
          en: 'Shared FEATURE_COLUMNS specification tying automated data ingestion, chronological ML evaluation, automated chart export, interactive Streamlit analytics, and Telegram serving into one consistent pipeline.',
          es: 'Contrato compartido FEATURE_COLUMNS que une captura de datos, entrenamiento y validación temporal, generación de gráficos, dashboard Streamlit y bot en Telegram sin discrepancias.',
        },
        modules: [
          {
            name: 'Data Collection & Preprocessing',
            role: { en: 'Fetches 4-year BTC-USD OHLCV history via yfinance, normalizes MultiIndex columns, and drops 30-day rolling warm-up NaNs cleanly.', es: 'Descarga 4 años de histórico BTC-USD con yfinance, aplana encabezados MultiIndex y filtra los NaNs iniciales.' },
          },
          {
            name: 'Feature Engineering & ML Validation',
            role: { en: 'Generates 8 technical/lag features and benchmarks LinearRegression & RandomForestRegressor across 80/20 holdout and 5-fold TimeSeriesSplit.', es: 'Genera 8 variables técnicas/retardos y compara LinearRegression y RandomForestRegressor bajo partición cronológica 80/20 y TimeSeriesSplit.' },
          },
          {
            name: 'Data Visualization (analysis.py & dashboard.py)',
            role: { en: 'Produces 7 diagnostic Matplotlib/Seaborn figures plus an interactive Streamlit/Plotly dashboard for correlations, actual vs predicted curves, and residuals.', es: 'Exporta 7 gráficos diagnósticos Matplotlib/Seaborn y ofrece panel interactivo Streamlit/Plotly de correlaciones y residuos.' },
          },
          {
            name: 'Model Inference Interface',
            role: { en: 'Serializes trained pipelines with Joblib for reproducible live estimation via Streamlit and Telegram commands (/predict).', es: 'Serializa los modelos con Joblib para inferencia reproducible desde Streamlit y el bot de Telegram.' },
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

# Chronological split: prevent lookahead leakage
split_index = int(len(df) * 0.8)
X_train, X_test = X.iloc[:split_index], X.iloc[split_index:]
y_train, y_test = y.iloc[:split_index], y.iloc[split_index:]`,
        },
      },
      engineeringDecisions: [
        {
          decision: { en: 'Chronological 80/20 Split + TimeSeriesSplit over Random K-Fold', es: 'Split cronológico 80/20 + TimeSeriesSplit frente a K-Fold aleatorio' },
          rationale: { en: 'Preserves strict causal time order so no future trend features ever influence historical training windows.', es: 'Preserva estrictamente la causalidad temporal para impedir que información futura contamine la ventana de entrenamiento.' },
        },
        {
          decision: { en: 'Comparing Linear Baseline vs Non-Linear Tree Ensemble', es: 'Comparación entre modelo lineal base y conjunto de árboles' },
          rationale: { en: 'Revealed how tree ensembles handle non-linear dynamics vs where linear regression maintains trend continuity beyond historical price peaks.', es: 'Permitió observar cuándo los árboles capturan interacciones complejas y dónde la regresión lineal mantiene continuidad fuera del máximo histórico.' },
        },
        {
          decision: { en: 'Explicit Pipeline Consistency Across Modules', es: 'Consistencia explícita de variables entre scripts' },
          rationale: { en: 'Keeping FEATURE_COLUMNS synchronized guarantees training scripts, analytical plots, and inference outputs process identical arrays.', es: 'Mantener un contrato único FEATURE_COLUMNS garantiza la reproducibilidad entre análisis offline, dashboard e inferencia.' },
        },
      ],
      challenges: {
        en: [
          'Random Forest range bounding: Decision-tree averages cannot extrapolate above the maximum target observed in training data, causing higher MAE (~$3,550) during new market highs versus Linear Regression (~$1,684).',
          'Interpreting R² critically: High raw R² (0.9830 for Linear Regression) reflects strong t-1 autocorrelation in price levels rather than reliable trading signals, highlighting why percentage return targets are preferable for future iterations.',
        ],
        es: [
          'Límite de extrapolación en Random Forest: Al ser promedios de hojas entrenadas, los árboles quedaron acotados cuando Bitcoin superó sus máximos previos (MAE ~$3.550 frente a ~$1.684 en Regresión Lineal).',
          'Interpretación crítica del R²: Un R² alto sobre precio absoluto refleja autocorrelación directa con el cierre previo y no capacidad financiera predictiva.',
        ],
      },
      resultsAndLearnings: {
        results: {
          en: [
            'Academic dissertation evaluated at 9.0 / 10 (First-Class standing).',
            'Out-of-sample test measurements: Linear Regression MAE ~$1,684, RMSE ~$2,317, R² 0.9830; Random Forest MAE ~$3,550, RMSE ~$4,564, R² 0.9342.',
            'Delivered reproducible data collection, feature scripts, 7 analytical plots, and interactive visual tools.',
          ],
          es: [
            'Proyecto evaluado en el TFG universitario con una calificación de 9.0 / 10.',
            'Métricas reales medidas en test cronológico: Regresión Lineal MAE ~$1.684, RMSE ~$2.317, R² 0.9830; Random Forest MAE ~$3.550, RMSE ~$4.564, R² 0.9342.',
            'Sistema completo y reproducible desde la ingesta OHLCV hasta los 7 gráficos diagnósticos y el dashboard visual.',
          ],
        },
        limitations: {
          en: [
            'Strictly academic exploration using historical price/volume series only—not financial advice or a live trading model.',
            'Predicting percentage returns rather than raw price levels would improve stationarity and tree generalization.',
          ],
          es: [
            'Investigación estrictamente académica sin señales externas ni uso como recomendación financiera.',
            'Modelar variaciones porcentuales estacionarias sería el paso natural para mejorar la generalización de árboles.',
          ],
        },
      },
    },
  },
  {
    id: 'smart-file-organizer',
    projectNumber: '02',
    title: 'Smart File Organizer (Local AI Classification)',
    subtitle: {
      en: 'Event-Driven Document Extraction & Local Ollama JSON Schema Inference',
      es: 'Extracción Documental Reactiva e Inferencia Local Estructurada con Ollama',
    },
    category: 'ai-ml',
    categoryLabel: {
      en: 'Applied AI & Python Automation',
      es: 'IA Aplicada & Automatización Python',
    },
    editorialVariant: 'pipeline-monograph',
    year: '2026',
    shortDescription: {
      en: 'Local-first Python application and background service combining real-time filesystem event handling (watchdog), PDF/text content extraction (pypdf), and local LLM inference via Ollama with structured JSON validation and resilient fallbacks.',
      es: 'Aplicación Python local y servicio en segundo plano que combina monitorización de archivos (watchdog), extracción documental (pypdf/texto) e inferencia con LLMs locales mediante Ollama con esquemas JSON y fallback seguro.',
    },
    technologies: ['Python 3.10+', 'Local LLMs (Ollama)', 'JSON Schema', 'pypdf', 'watchdog', 'Tkinter / ttk', 'unittest'],
    visualType: 'smart-organizer',
    githubUrl: 'https://github.com/villanuevapablo/smart-file-organizer',
    liveDemoUrl: null,
    status: {
      en: 'Completed • Python AI Utility + Unit Tests (2026)',
      es: 'Completado • Utilidad IA en Python con Tests (2026)',
    },
    caseStudy: {
      introduction: {
        en: 'Smart File Organizer applies local large language models (via Ollama) to inspect, categorize, and standardize messy local documents automatically without sending private data to commercial cloud APIs. It ships with both a CLI background watcher and a desktop Tkinter control window.',
        es: 'Smart File Organizer aplica modelos de lenguaje locales mediante Ollama para analizar, clasificar y renombrar documentos personales sin exponer archivos privados a servidores externos, integrando modo consola e interfaz de escritorio Tkinter.',
      },
      theChallenge: {
        en: 'Filesystem watchers fire creation hooks before browser downloads finish writing (triggering OS write-lock exceptions or corrupt PDF reads), while lightweight local LLMs can emit extra prose, forbidden path characters, or mismatched file extensions.',
        es: 'Los observadores de sistema de archivos disparan eventos antes de cerrarse las descargas del navegador (generando errores PermissionError o lecturas truncadas), y los modelos locales pueden devolver formato inválido o alterar extensiones.',
      },
      theSolution: {
        en: 'Implemented extension/dotfile filtering, binary file-lock stability polling in watcher.py, 1,500-character multi-format extraction (plain text, 2-page PDF via pypdf, and metadata fallback), deterministic prompting (temperature 0.1, JSON format) with regex sanitization, and fallback routing to "Otros" when Ollama is unreachable.',
        es: 'Implementé filtros de temporales, comprobación de bloqueos de archivo en watcher.py, extracción multiformato (texto y 2 primeras páginas PDF con pypdf), consultas estructuradas en Ollama (temperature 0.1, format="json") con saneamiento estricto y ruta alternativa a "Otros" si el modelo está apagado.',
      },
      architecture: {
        summary: {
          en: 'Six modular Python components paired with an automated unittest suite mocking Ollama API responses to verify sanitization and offline fallback behavior.',
          es: 'Seis módulos Python desacoplados respaldados por pruebas unittest con mocks HTTP de Ollama para verificar saneamiento y tolerancia a fallos.',
        },
        modules: [
          {
            name: 'watcher.py',
            role: { en: 'Intercepts directory events via watchdog, ignores partial browser files (.crdownload, .part), and waits for size stabilization + read-lock release.', es: 'Captura eventos de carpeta, filtra descargas parciales y verifica liberación de bloqueo antes de procesar.' },
          },
          {
            name: 'extractor.py',
            role: { en: 'Extracts up to 1,500 UTF-8 characters from text documents or pypdf streams; extracts filesystem metadata for images/binaries.', es: 'Extrae hasta 1.500 caracteres en texto o PDFs con pypdf, usando metadatos para binarios.' },
          },
          {
            name: 'ai_classifier.py',
            role: { en: 'Queries local Ollama /api/generate with system constraints, parses JSON safely, enforces authentic file extensions, and gracefully falls back if offline.', es: 'Consulta Ollama local en formato JSON, verifica categoría y preserva siempre la extensión auténtica original.' },
          },
          {
            name: 'file_manager.py & gui.py',
            role: { en: 'Strips OS invalid characters, deduplicates colliding names (_1, _2), safely moves documents, and renders live status inside Tkinter.', es: 'Limpia caracteres inválidos, evita colisiones (_1, _2) y muestra la actividad en Tkinter.' },
          },
        ],
        codeSnippet: {
          filename: 'watcher.py',
          language: 'python',
          code: `if current_size == last_size and current_size > 0:
    try:
        with file_path.open("rb") as handle:
            handle.read(1)
        return True  # File size settled AND write lock closed
    except (PermissionError, OSError):
        pass  # Ongoing browser write`,
        },
      },
      engineeringDecisions: [
        {
          decision: { en: 'Local Ollama Inference + Deterministic Fallback', es: 'Inferencia Local con Ollama + Fallback Determinista' },
          rationale: { en: 'Preserves full file privacy on-device and ensures zero dropped files even when the local LLM service is turned off.', es: 'Garantiza privacidad total en equipo local y evita pérdidas o errores cuando Ollama no está ejecutándose.' },
        },
        {
          decision: { en: 'Post-Model Regex & Extension Lock', es: 'Bloqueo de Extensión y Saneamiento Post-Modelo' },
          rationale: { en: 'Guarantees structured filenames never lose their real extension or break Windows path syntax regardless of LLM token sampling.', es: 'Impide que el modelo corrompa rutas en Windows o cambie extensiones reales de archivo.' },
        },
      ],
      challenges: {
        en: [
          'Asynchronous browser downloads on Windows caused intermittent PermissionError collisions; resolved by verifying both constant file size and binary read availability.',
          'Eliminated brittle dependency requirements by degrading HTTP transport smoothly from requests to standard library urllib when needed.',
        ],
        es: [
          'Descargas concurrentes en Windows provocaban colisiones PermissionError; resuelto verificando estabilidad de tamaño y lectura binaria.',
          'Respaldo automático hacia urllib estándar en caso de entornos sin requests instalado.',
        ],
      },
      resultsAndLearnings: {
        results: {
          en: [
            'Reliable local document triage verified via unittest tests covering sanitization, collision deduplication, binary extraction, and mocked Ollama failures.',
          ],
          es: [
            'Clasificación local fiable validada mediante suite unittest cubriendo saneamiento, colisiones y respuestas online/offline.',
          ],
        },
        limitations: {
          en: [
            'Image-only scanned PDFs fall back to metadata classification because heavy OCR engines were intentionally left out.',
          ],
          es: [
            'PDFs escaneados sin capa de texto se procesan por metadatos al omitir OCR pesado.',
          ],
        },
      },
    },
  },
  {
    id: 'preflop-hero',
    projectNumber: '03',
    title: 'Preflop Hero: Data Parsing & Analytics Pipeline',
    subtitle: {
      en: 'Regex Text Extraction Engine, Relational SQLite Persistence & Statistical Auditor',
      es: 'Motor Regex de Extracción, Persistencia SQLite y Analítica Estadística',
    },
    category: 'data',
    categoryLabel: {
      en: 'Data Analytics & ETL Parsing',
      es: 'Analítica de Datos & Parsing ETL',
    },
    editorialVariant: 'data-notebook',
    year: '2026',
    shortDescription: {
      en: 'Zero-dependency Python analytics tool and companion browser analyzer converting unstructured raw session text files from two formats into normalized SQLite records with composite duplicate checks and automated KPI evaluation (VPIP, PFR, Gap).',
      es: 'Herramienta analítica en Python puro y aplicación web cliente que transforma registros de texto no estructurados en tablas SQLite normalizadas sin duplicados, calculando métricas agregadas VPIP, PFR y brechas.',
    },
    technologies: ['Python 3.12 (Stdlib)', 'Regex Parsing', 'SQLite 3', 'SQL Aggregations', 'HTML5 / SVG', 'Statistical Auditing'],
    visualType: 'preflop-hero',
    githubUrl: 'https://github.com/villanuevapablo/preflop-hero',
    liveDemoUrl: null,
    status: {
      en: 'Completed • Python Data Tool + Web UI (2026)',
      es: 'Completado • Herramienta de Datos Python + Web UI (2026)',
    },
    caseStudy: {
      introduction: {
        en: 'Preflop Hero automates data cleaning, extraction, storage, and summary evaluation over raw poker hand history exports. Implemented in standard Python without external dependencies alongside a standalone HTML browser analyzer, it parses heterogeneous plain-text logs into an indexed SQLite database and quantifies behavioral tendencies against 6-max reference bands.',
        es: 'Preflop Hero automatiza la limpieza, extracción regex, persistencia y análisis estadístico de historiales en texto plano exportados por distintas plataformas, almacenándolos en SQLite e incorporando una versión HTML ejecutada íntegramente en el navegador.',
      },
      theChallenge: {
        en: 'Source logs differ dramatically in syntax across platforms (delimiter markers, bracket spacing, comma formatting) and require separating forced blind postings from voluntary actions while preventing duplicate counts across overlapping batch imports.',
        es: 'Los logs difieren en delimitadores y formato de cartas según la sala, exigen distinguir apuestas forzadas de entradas voluntarias y requieren evitar duplicidades si el usuario reimporta ficheros solapados.',
      },
      theSolution: {
        en: 'Authored compiled regex extractors tailored per platform isolating preflop boundaries cleanly, persisted parsed rows with UNIQUE(hand_id, platform) constraints for idempotent ingestion, computed SQL SUM/COUNT ratios in database.py, and added client-side browser support for private drag-and-drop analysis.',
        es: 'Implementé patrones regex compilados específicos por plataforma delimitando la fase preflop, apliqué restricción UNIQUE(hand_id, platform) en SQLite para idempotencia automática y construí agregaciones SQL directas junto a un analizador web cliente.',
      },
      architecture: {
        summary: {
          en: 'Four clean stdlib Python modules (parser, database, analyzer, CLI main) plus a zero-server HTML dashboard running client-side regex and SVG gauges.',
          es: 'Cuatro módulos en biblioteca estándar Python más una interfaz HTML autónoma para análisis privado en navegador.',
        },
        modules: [
          {
            name: 'parser.py',
            role: { en: 'Splits mixed text logs, detects Winamax vs 888poker signatures, strips irregular card punctuation, and extracts VPIP/PFR binary flags.', es: 'Segmenta historiales mixtos, detecta plataforma, normaliza texto de cartas y calcula indicadores VPIP/PFR.' },
          },
          {
            name: 'database.py',
            role: { en: 'Context-managed SQLite layer maintaining UNIQUE(hand_id, platform) integrity and running SQL aggregate metrics.', es: 'Capa SQLite con gestor de contexto, unicidad compuesta y consultas agregadas.' },
          },
          {
            name: 'analyzer.py',
            role: { en: 'Evaluates empirical session ratios against theoretical 6-max targets (VPIP 20–27%, PFR 17–23%, Gap 3–6 pp) to flag tendencies.', es: 'Evalúa métricas agregadas frente a referencias teóricas 6-max generando diagnósticos claros.' },
          },
          {
            name: 'index.html',
            role: { en: 'Privacy-preserving browser interface processing pasted or dropped text logs locally with zero network transfer.', es: 'Interfaz web autónoma para procesar logs en local sin subir datos a ningún servidor.' },
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
          decision: { en: 'Composite Relational Uniqueness for Idempotent Ingestion', es: 'Restricción Única Compuesta para Ingesta Idempotente' },
          rationale: { en: 'Enforcing UNIQUE(hand_id, platform) in SQLite eliminates redundant pre-insert SELECT lookups and safely ignores repeated imports.', es: 'Delegar la deduplicación en SQLite evita consultas previas costosas y garantiza integridad entre lotes solapados.' },
        },
        {
          decision: { en: 'Zero-Dependency Python Standard Library Design', es: 'Diseño sin Dependencias Externas en Python' },
          rationale: { en: 'Runs cleanly on any Python 3.10+ environment using only sqlite3 and re modules.', es: 'Ejecutable en cualquier Python 3.10+ estándar usando exclusivamente sqlite3 y re.' },
        },
      ],
      challenges: {
        en: [
          'Properly matching hands that fold out before any flop is dealt (requiring preflop boundaries terminated by either FLOP or SUMMARY).',
          'Cleaning irregular formatting variations such as commas inside card arrays across 888poker exports.',
        ],
        es: [
          'Detectar correctamente manos que terminan antes del flop alternando delimitadores FLOP y SUMMARY.',
          'Normalizar formatos dispares de comas y espacios en historiales exportados.',
        ],
      },
      resultsAndLearnings: {
        results: {
          en: [
            'Cleanly converts unstructured raw logs into auditable relational analytics across CLI and browser UI.',
          ],
          es: [
            'Conversión fiable de ficheros de texto heterogéneos en tablas SQLite consultables tanto por terminal como por navegador.',
          ],
        },
        limitations: {
          en: [
            'Scope covers Winamax and 888poker preflop decisions; postflop actions and seat-position segmentation are natural future additions.',
          ],
          es: [
            'Alcance actual enfocado en fase preflop para Winamax y 888poker; juego postflop y filtrado por posición serían futuras extensiones.',
          ],
        },
      },
    },
  },
  {
    id: 'srms-medical',
    projectNumber: '04',
    title: 'Secure Record Management System (SRMS)',
    subtitle: {
      en: 'Go Standard Library Web Application & Relational SQLite Architecture',
      es: 'Aplicación Web en Go Estándar y Persistencia Relacional SQLite',
    },
    category: 'backend-security',
    categoryLabel: {
      en: 'Software Engineering & Systems',
      es: 'Ingeniería de Software & Sistemas',
    },
    editorialVariant: 'dossier-spec',
    year: '2026',
    shortDescription: {
      en: 'Full-stack medical record management web application built in Go (net/http, html/template) and CGO-free SQLite (WAL mode). Implements parameterized queries, RBAC separation, one-time CSRF checks, bcrypt hashing, and rate limiting.',
      es: 'Aplicación web full-stack para registros clínicos desarrollada con Go (net/http, html/template) y SQLite en modo WAL. Integra consultas parametrizadas, RBAC, tokens CSRF, hashing bcrypt y control de intentos.',
    },
    technologies: ['Go 1.26', 'net/http', 'html/template', 'modernc.org/sqlite', 'SQLite WAL', 'bcrypt (cost 12)', 'sync.Mutex', 'RBAC'],
    visualType: 'srms-security',
    githubUrl: 'https://github.com/villanuevapablo/SRMS-MEDICAL',
    liveDemoUrl: null,
    status: {
      en: 'Completed • University Engineering Assessment (2026)',
      es: 'Completado • Proyecto Universitario Evaluado (2026)',
    },
    caseStudy: {
      introduction: {
        en: 'SRMS demonstrates clean full-stack systems engineering in Go without external web frameworks. It delivers server-rendered clinical record workflows backed by an indexed 4-table SQLite relational database with structured security boundaries and audit tracking.',
        es: 'SRMS muestra un sistema full-stack construido directamente sobre la biblioteca estándar de Go y una base relacional SQLite en cuatro tablas, priorizando el diseño de datos y controles explícitos de seguridad.',
      },
      theChallenge: {
        en: 'Protecting multi-user record applications requires coordinated defenses against SQL injection, XSS, CSRF, broken access control between admins and regular users, and automated credential guessing.',
        es: 'Gestionar historiales clínicos multiusuario requiere coordinar mitigaciones contra inyección SQL, XSS, CSRF, acceso indebido entre roles y fuerza bruta.',
      },
      theSolution: {
        en: 'Used pure Go net/http and modernc.org/sqlite with WAL mode enabled, parameter-bound SQL queries, mutex-guarded one-time CSRF tokens, HttpOnly/SameSiteStrict sessions, bcrypt cost-12 password storage, and account lockout thresholds.',
        es: 'Utilicé net/http de Go y modernc.org/sqlite en modo WAL con consultas parametrizadas estrictas, tokens CSRF de un solo uso bajo sync.Mutex, cookies seguras, bcrypt y bloqueo por intentos fallidos.',
      },
      architecture: {
        summary: {
          en: 'Four-table SQLite schema coupled to typed Go handlers, server-rendered HTML templates, and background session expiration cleanup.',
          es: 'Esquema relacional en cuatro tablas conectado a controladores Go tipados, plantillas html/template y limpieza automática de sesiones expiradas.',
        },
        modules: [
          {
            name: 'schema.sql',
            role: { en: 'Users, patient_records, sessions, and login_attempts tables with B-tree indexes and audit timestamps.', es: 'Tablas users, patient_records, sessions y login_attempts con índices y columnas de auditoría.' },
          },
          {
            name: 'main.go',
            role: { en: 'Initializes SQLite WAL + foreign keys, mutex-guarded rate limiters/CSRF state, and background expiration cleanup.', es: 'Inicializa SQLite WAL, sincronización de mapas por mutex y limpieza periódica de tokens.' },
          },
          {
            name: 'handlers.go',
            role: { en: 'Processes authenticated requests, validates inputs via regex, and isolates admin vs regular permissions.', es: 'Gestiona rutas HTTP autenticadas, valida formatos por regex y separa alcances admin y regular.' },
          },
          {
            name: 'templates/*.html',
            role: { en: 'Six Go html/template views benefiting from contextual auto-escaping against XSS.', es: 'Seis vistas html/template con escape contextual automático.' },
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
)`,
        },
      },
      engineeringDecisions: [
        {
          decision: { en: 'Standard Library Primitives Over Heavy Web Frameworks', es: 'Primitivas Estándar de Go frente a Frameworks Pesados' },
          rationale: { en: 'Keeps every validation step, header flag, and database binding explicit and transparent to inspect.', es: 'Mantiene cada validación, cabecera y consulta completamente explícita y legible.' },
        },
        {
          decision: { en: 'Pure-Go SQLite Driver with WAL Concurrency', es: 'Driver SQLite puro en Go con concurrencia WAL' },
          rationale: { en: 'Simplifies cross-OS compilation without CGO while supporting concurrent session reads cleanly.', es: 'Facilita compilación sin dependencias C y mejora lecturas concurrentes de sesión.' },
        },
      ],
      challenges: {
        en: [
          'Preventing concurrent map write panics across HTTP request goroutines using sync.Mutex protection around rate-limit and CSRF maps.',
          'Combining in-memory IP throttling with persisted DB lockouts for consistent enforcement.',
        ],
        es: [
          'Evitar condiciones de carrera sobre mapas compartidos mediante sync.Mutex.',
          'Coordinar limitación por IP en memoria con bloqueo persistente en base de datos.',
        ],
      },
      resultsAndLearnings: {
        results: {
          en: [
            'Auditable Go + SQLite web application implementing end-to-end RBAC, audit tracking, and multi-layer defenses.',
          ],
          es: [
            'Aplicación web Go + SQLite completa con control de roles, auditoría y mitigación frente a ataques comunes.',
          ],
        },
        limitations: {
          en: [
            'Session cookie Secure flag is set to false for local HTTP testing and requires TLS enablement in live production.',
          ],
          es: [
            'Atributo Secure de cookie configurado para HTTP local; requiere activación tras HTTPS en producción.',
          ],
        },
      },
    },
  },
  {
    id: 'iot-edge-security',
    projectNumber: '05',
    title: 'IoT Security System (Arduino UNO R4 WiFi)',
    subtitle: {
      en: 'COM6017M On-Device Sensor Processing & Real-Time Embedded UI',
      es: 'Procesamiento Local en Microcontrolador COM6017M e Interfaz Embebida',
    },
    category: 'iot',
    categoryLabel: {
      en: 'Embedded C++ & Edge Computing',
      es: 'C++ Embebido & Edge Computing',
    },
    editorialVariant: 'hardware-schematic',
    year: '2026',
    shortDescription: {
      en: 'Autonomous C++ microcontroller system on Arduino UNO R4 WiFi that captures 3-sample averaged ultrasonic distance measurements, executes local noise filtering and threshold classification, drives a 12×8 LED matrix, and serves an embedded AJAX web monitor.',
      es: 'Sistema físico autónomo en C++ sobre Arduino UNO R4 WiFi que promedia muestras ultrasónicas localmente, ejecuta filtrado y clasificación en tres estados, controla la matriz LED 12×8 y sirve un panel AJAX embebido.',
    },
    technologies: ['Arduino UNO R4 WiFi', 'C++', 'WiFiS3', 'HC-SR04 Ultrasonic', 'LED Matrix', 'AJAX Polling'],
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
        en: 'Built for the COM6017M Internet of Things module, this prototype removes cloud latency dependencies by executing ultrasonic sampling, noise filtering, alert state classification, hardware LED signaling, and web telemetry directly on Arduino UNO R4 WiFi hardware.',
        es: 'Desarrollado en la asignatura COM6017M, este dispositivo prescinde de servidores externos ejecutando captura ultrasónica, filtrado de ruido, clasificación local y servidor web directamente en Arduino UNO R4 WiFi.',
      },
      theChallenge: {
        en: 'Ultrasonic pulses produce erratic outliers if read unaveraged, while an embedded web server on constrained SRAM requires strict buffer limits to prevent crashes during continuous operation.',
        es: 'Las lecturas ultrasónicas simples presentan picos esporádicos y un servidor embebido con poca SRAM requiere limitar el tamaño de historial para no bloquear el microcontrolador.',
      },
      theSolution: {
        en: 'Averaged 3 consecutive valid pulseIn distance readings per cycle (0–400cm), mapped output to 3 states (<20cm INTRUDER, 20–80cm WARNING, >80cm SECURE) with matrix bitmaps, and capped stored logs at 1,000 characters served over lightweight GET /data AJAX JSON polling.',
        es: 'Implementé un promedio de 3 lecturas válidas (0–400cm), clasificación en 3 estados (<20cm INTRUDER, 20–80cm WARNING, >80cm SECURE) sobre matriz LED y un buffer acotado a 1.000 caracteres servido mediante sondeo JSON GET /data.',
      },
      architecture: {
        summary: {
          en: 'Single microcontroller sketch uniting GPIO pulse timing, deterministic state transitions, onboard LED matrix graphics, and local HTTP JSON responses.',
          es: 'Firmware autónomo que unifica temporización GPIO, clasificación de estados, gráficos en matriz LED y servidor HTTP JSON local.',
        },
        modules: [
          {
            name: 'Ultrasonic Sampler (D3/D4)',
            role: { en: 'Triggers 3 consecutive ultrasonic pulses and discards out-of-range timeouts.', es: 'Emite 3 pulsos ultrasónicos consecutivos descartando lecturas fuera de rango.' },
          },
          {
            name: 'Classifier & Matrix UI',
            role: { en: 'Drives red/yellow/green pins and renders 32-bit hex icon frames across the 12×8 LED grid.', es: 'Controla los pines LED y carga bitmaps hexadecimales en la matriz 12×8.' },
          },
          {
            name: 'Embedded HTTP Server',
            role: { en: 'Handles /, /data JSON telemetry, and /reset event flushing on port 80.', es: 'Atiende rutas /, /data JSON y /reset directamente desde la placa en red local.' },
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
          decision: { en: 'Bounded 1,000-Char In-Memory Event Buffer', es: 'Buffer de Eventos Acotado a 1.000 Caracteres' },
          rationale: { en: 'Protects limited microcontroller SRAM from heap exhaustion over long sessions.', es: 'Protege la memoria limitada de la placa frente a desbordamientos durante usos prolongados.' },
        },
        {
          decision: { en: 'JSON Telemetry Polling Instead of Full Page Reloads', es: 'Telemetría JSON en Lugar de Recarga Completa' },
          rationale: { en: 'Tiny ~80-byte /data responses minimize WiFi socket blocking on embedded hardware.', es: 'Las respuestas ligeras en /data evitan recargas completas y parpadeos visuales.' },
        },
      ],
      challenges: {
        en: [
          'Sanitized quotes and newlines inside HTML event snippets before embedding them inside GET /data JSON strings.',
          'Filtered zero-cm sensor timeouts so noisy echoes never trigger spurious intrusion alerts.',
        ],
        es: [
          'Escapado de comillas y saltos antes de serializar filas de historial en respuestas JSON.',
          'Descarte de timeouts 0cm para evitar falsos avisos de intrusión.',
        ],
      },
      resultsAndLearnings: {
        results: {
          en: [
            'Standalone local LAN hardware monitor synchronizing physical LEDs, matrix frames, and mobile/desktop browser views.',
          ],
          es: [
            'Monitor hardware autónomo en LAN local sincronizando LEDs físicos, matriz y navegador móvil.',
          ],
        },
        limitations: {
          en: [
            'Logs remain in volatile RAM rather than persistent SD storage; designed for local demonstration without HTTPS.',
          ],
          es: [
            'Registro volátil en RAM (sin tarjeta SD) pensado para entorno demostrativo en red local.',
          ],
        },
      },
    },
  },
];

export const FOCUS_AREAS: FocusAreaItem[] = [
  {
    id: 'focus-ai-ml',
    number: '01',
    title: {
      en: 'Artificial Intelligence & Machine Learning',
      es: 'Inteligencia Artificial y Machine Learning',
    },
    description: {
      en: 'Building end-to-end ML pipelines with chronological validation, evaluating regression and ensemble behavior objectively, and experimenting with structured local LLM workflows.',
      es: 'Construcción de pipelines de machine learning con validación cronológica, evaluación objetiva de regresión y árboles, y experimentación con flujos estructurados sobre LLMs locales.',
    },
    focusPoints: {
      en: [
        'Time-series forecasting models (Linear Regression & Random Forest)',
        'Chronological holdouts & 5-fold TimeSeriesSplit without data leakage',
        'Local LLM classification using Ollama REST APIs and JSON schemas',
        'On-device sensor noise filtering and threshold classification',
      ],
      es: [
        'Modelos predictivos en series temporales (Regresión Lineal y Random Forest)',
        'Validación cronológica estricta y pliegues TimeSeriesSplit sin data leakage',
        'Clasificación local con modelos Ollama mediante API REST y esquemas JSON',
        'Filtrado de señales y clasificación autónoma en dispositivos hardware',
      ],
    },
    relatedProjects: [
      { id: 'bitcoin-price-forecasting', label: '01 — Bitcoin Price Forecasting' },
      { id: 'smart-file-organizer', label: '02 — Smart File Organizer' },
      { id: 'iot-edge-security', label: '05 — IoT Security System' },
    ],
  },
  {
    id: 'focus-data-analytics',
    number: '02',
    title: {
      en: 'Data Analytics & Applied Research',
      es: 'Analítica de Datos e Investigación Aplicada',
    },
    description: {
      en: 'Transforming unstructured logs and noisy market datasets into clean tabular schemas, meaningful engineered features, statistical summaries, and clear visual diagnostics.',
      es: 'Transformación de registros sin estructurar y series de mercado en esquemas tabulares limpios, ingeniería de variables, indicadores estadísticos y visualizaciones diagnósticas.',
    },
    focusPoints: {
      en: [
        'Automated data collection, cleaning & preprocessing in Pandas/NumPy',
        'Technical feature engineering (moving averages, rolling volatility, lags)',
        'Multi-platform regex extraction pipelines persisted in SQLite',
        'Diagnostic evaluation plots with Matplotlib, Seaborn, Plotly & Streamlit',
      ],
      es: [
        'Captura automatizada, limpieza y preprocesamiento con Pandas y NumPy',
        'Ingeniería de características (medias móviles, volatilidad móvil y retardos)',
        'Motores regex multiplataforma con persistencia idempotente en SQLite',
        'Visualización exploratoria y evaluación con Matplotlib, Seaborn, Plotly y Streamlit',
      ],
    },
    relatedProjects: [
      { id: 'bitcoin-price-forecasting', label: '01 — Bitcoin Price Forecasting' },
      { id: 'preflop-hero', label: '03 — Preflop Hero Analytics' },
    ],
  },
  {
    id: 'focus-software-dev',
    number: '03',
    title: {
      en: 'Software Development & Engineering',
      es: 'Desarrollo e Ingeniería de Software',
    },
    description: {
      en: 'Designing maintainable full-stack applications, relational database schemas, automated unit/integration tests, and dependable systems that support real-world data and user workflows.',
      es: 'Diseño de aplicaciones full-stack mantenibles, bases de datos relacionales, pruebas unitarias y de integración, y sistemas fiables sobre los que operan los flujos de datos.',
    },
    focusPoints: {
      en: [
        'Production full-stack delivery & testing at Universidad Nebrija',
        'Typed React & TypeScript interfaces with Safari iOS compatibility',
        'Clean Go standard library systems & explicit relational schemas',
        'Automated test verification using unittest and integration checks',
      ],
      es: [
        'Desarrollo full-stack y pruebas en entorno productivo en Universidad Nebrija',
        'Interfaces tipadas en React y TypeScript con compatibilidad móvil',
        'Sistemas limpios en Go estándar y diseño relacional en SQLite/SQL',
        'Verificación sistemática con pruebas unitarias e integración',
      ],
    },
    relatedProjects: [
      { id: 'srms-medical', label: '04 — Secure Record Management (SRMS)' },
      { id: 'smart-file-organizer', label: '02 — Smart File Organizer' },
    ],
  },
];

export const TOOLKIT_CATEGORIES: ToolkitCategory[] = [
  {
    id: 'ai-ml',
    number: 'T.01',
    title: {
      en: 'Artificial Intelligence & Machine Learning',
      es: 'Inteligencia Artificial y Machine Learning',
    },
    subtitle: {
      en: 'Supervised modeling, validation methodology & local LLM workflows backed by project code',
      es: 'Modelado supervisado, validación temporal y experimentación con LLMs locales respaldados por código',
    },
    skills: [
      {
        name: 'Scikit-learn & Machine Learning',
        evidence: { en: 'BTC Forecasting TFG — training, splitting & metric evaluation', es: 'TFG Bitcoin — entrenamiento, validación y evaluación de error' },
        tier: 'practical',
      },
      {
        name: 'Regression & Random Forest',
        evidence: { en: 'Out-of-sample benchmarking of LinearRegression vs RandomForestRegressor', es: 'Comparativa real LinearRegression frente a RandomForestRegressor' },
        tier: 'practical',
      },
      {
        name: 'Time Series Validation (TimeSeriesSplit)',
        evidence: { en: '5-fold chronological walk-forward validation preventing leakage', es: 'Validación cronológica en 5 pliegues evitando filtración futura' },
        tier: 'practical',
      },
      {
        name: 'Model Evaluation (MAE, RMSE, R²)',
        evidence: { en: 'Residual distributions & out-of-sample diagnostic comparisons', es: 'Análisis de residuos y comparativas métricas out-of-sample' },
        tier: 'practical',
      },
      {
        name: 'Local LLMs (Ollama + JSON Schema)',
        evidence: { en: 'Smart File Organizer — structured document classification at temp=0.1', es: 'Smart File Organizer — clasificación documental estructurada local' },
        tier: 'practical',
      },
      {
        name: 'Applied ML & Deepening AI Foundations',
        evidence: { en: 'Active career focus — exploring advanced analytics & ML workflows', es: 'Foco actual — profundizando en flujos de ML y analítica avanzada' },
        tier: 'interest',
      },
    ],
  },
  {
    id: 'data-analytics',
    number: 'T.02',
    title: {
      en: 'Data Analytics & Data Processing',
      es: 'Analítica y Procesamiento de Datos',
    },
    subtitle: {
      en: 'Data collection, cleaning, feature pipelines, statistical checks & exploratory visual analytics',
      es: 'Captura, limpieza, ingeniería de características, estadística y visualización exploratoria',
    },
    skills: [
      {
        name: 'Python (Data & Automation)',
        evidence: { en: '3 complete repositories — ML pipelines, watchdog ETL & regex CLI', es: '3 repositorios propios — ML, automatización documental y ETL regex' },
        tier: 'practical',
      },
      {
        name: 'Pandas & NumPy',
        evidence: { en: 'OHLCV preprocessing, MultiIndex normalization & NaN cleaning', es: 'Preprocesamiento OHLCV, normalización y limpieza de nulos' },
        tier: 'practical',
      },
      {
        name: 'Feature Engineering',
        evidence: { en: 'Moving averages (SMA 7/30), 14-day rolling volatility & lag transformations', es: 'Medias móviles (SMA 7/30), volatilidad móvil 14d y variables retardadas' },
        tier: 'practical',
      },
      {
        name: 'Data Cleaning & Regex ETL',
        evidence: { en: 'Preflop Hero & Smart File Organizer — text/PDF extraction (pypdf)', es: 'Preflop Hero y File Organizer — parsing regex y extracción pypdf' },
        tier: 'practical',
      },
      {
        name: 'Statistical Analysis',
        evidence: { en: 'Correlation matrices, residuals & behavioral metrics (VPIP, PFR)', es: 'Matrices de correlación, análisis residual y métricas VPIP/PFR' },
        tier: 'practical',
      },
      {
        name: 'Matplotlib, Seaborn, Plotly & Streamlit',
        evidence: { en: '7 automated research plots + interactive BTC analytical dashboard', es: '7 gráficos analíticos automatizados y panel interactivo Streamlit' },
        tier: 'practical',
      },
    ],
  },
  {
    id: 'software-engineering',
    number: 'T.03',
    title: {
      en: 'Software Engineering & Development',
      es: 'Ingeniería y Desarrollo de Software',
    },
    subtitle: {
      en: 'Core languages, full-stack web architecture & coursework technologies separated honestly',
      es: 'Lenguajes, desarrollo full-stack y tecnologías académicas diferenciadas por nivel de uso',
    },
    skills: [
      {
        name: 'TypeScript / JavaScript & React',
        evidence: { en: 'Portfolio web architecture, state routing & responsive interactive UIs', es: 'Arquitectura web tipada, enrutado SPA e interfaces responsivas' },
        tier: 'practical',
      },
      {
        name: 'Go (Golang)',
        evidence: { en: 'SRMS-MEDICAL — net/http server, middleware & html/template views', es: 'SRMS-MEDICAL — servidor web net/http y plantillas HTML' },
        tier: 'practical',
      },
      {
        name: 'C++ (Embedded)',
        evidence: { en: 'IoT Security System — Arduino UNO R4 WiFi ultrasonic firmware', es: 'Sistema IoT — firmware C++ en placa Arduino UNO R4 WiFi' },
        tier: 'practical',
      },
      {
        name: 'Full-Stack & Software Testing',
        evidence: { en: 'Universidad Nebrija (Apr–Jun 2025) & unittest suites in Python', es: 'Universidad Nebrija (abr–jun 2025) y pruebas unitarias/integración' },
        tier: 'practical',
      },
      {
        name: 'REST API Integration (Foundational)',
        evidence: { en: 'External service integrations at Nebrija, yfinance & Ollama REST calls', es: 'Integraciones externas en Nebrija, llamadas REST a Ollama/yfinance' },
        tier: 'practical',
      },
      {
        name: 'Java (OOP & Architecture)',
        evidence: { en: 'DAM (2023–2025) core curriculum — OOP, JDBC & client apps', es: 'Troncal en DAM (2023–2025) — POO, diseño y JDBC' },
        tier: 'academic',
      },
      {
        name: 'Spring Boot / Angular / Svelte',
        evidence: { en: 'Academic / CV coursework foundations (studied prior to AI/Python focus)', es: 'Base formativa y práctica académica en CV' },
        tier: 'academic',
      },
    ],
  },
  {
    id: 'databases-tools',
    number: 'T.04',
    title: {
      en: 'Databases, Tools & Infrastructure',
      es: 'Bases de Datos, Herramientas e Infraestructura',
    },
    subtitle: {
      en: 'Relational schemas, version control, Linux environments & deployment workflows',
      es: 'Bases relacionales, control de versiones Git, consola Linux y despliegue continuo',
    },
    skills: [
      {
        name: 'SQLite (Indexed Schemas & WAL)',
        evidence: { en: 'Used across Preflop Hero (UNIQUE deduplication) & SRMS (4 tables)', es: 'Usado en Preflop Hero (clave única) y SRMS (4 tablas WAL)' },
        tier: 'practical',
      },
      {
        name: 'MySQL, PostgreSQL & JDBC',
        evidence: { en: 'Relational modeling & SQL querying during DAM (2023–2025)', es: 'Modelado relacional y consultas SQL en formación DAM (2023–2025)' },
        tier: 'academic',
      },
      {
        name: 'Firebase',
        evidence: { en: 'Cloud persistence tooling covered in academic CV training', es: 'Base de datos cloud vista en etapa formativa y CV' },
        tier: 'academic',
      },
      {
        name: 'Git & GitHub',
        evidence: { en: 'Team version control at Nebrija + 6 verified public repositories', es: 'Flujos de equipo en Nebrija y 6 repositorios públicos verificables' },
        tier: 'practical',
      },
      {
        name: 'Linux CLI & Development Tooling',
        evidence: { en: 'Command-line workflows, environments & service configuration', es: 'Consola Linux, entornos virtuales y configuración de servicios' },
        tier: 'practical',
      },
      {
        name: 'Vite, Tailwind CSS & Vercel',
        evidence: { en: 'SPA production bundling, responsive verification & continuous hosting', es: 'Empaquetado SPA, verificación móvil Safari y despliegue en Vercel' },
        tier: 'practical',
      },
    ],
  },
];

export const UI_COPY = {
  nav: {
    overview: { en: '01 / OVERVIEW', es: '01 / INICIO' },
    work: { en: '02 / PROJECTS', es: '02 / PROYECTOS' },
    interests: { en: '03 / FOCUS AREAS', es: '03 / ÁREAS DE INTERÉS' },
    profile: { en: '04 / PROFILE', es: '04 / PERFIL' },
    contact: { en: '05 / CONTACT', es: '05 / CONTACTO' },
  },
  cover: {
    topTag: { en: 'MADRID, SPAIN · SOFTWARE · AI · DATA', es: 'MADRID, ESPAÑA · SOFTWARE · IA · DATOS' },
    locationMeta: { en: 'YORK ST JOHN (BSC HONS) · NEBRIJA (DAM)', es: 'YORK ST JOHN (BSC HONS) · NEBRIJA (DAM)' },
    credentialMeta: { en: 'FIRST-CLASS HONOURS (9/10)', es: 'FIRST-CLASS HONOURS (9/10)' },
    interestHeading: { en: 'PRIMARY FOCUS & INTERESTS (PRIORITY ORDER)', es: 'ÁREAS DE INTERÉS PRINCIPALES (ORDEN DE PRIORIDAD)' },
    portraitCaption: { en: 'AUTHOR · PABLO VILLANUEVA', es: 'AUTOR · PABLO VILLANUEVA' },
    featuredBoxLabel: { en: 'FEATURED AI & DATA WORK', es: 'PROYECTO DESTACADO EN IA Y DATOS' },
    readSelectedWork: { en: 'View Projects', es: 'Ver Proyectos' },
    openCv: { en: 'Download CV (EN / ES)', es: 'Descargar CV (ES / EN)' },
  },
  selectedWork: {
    sectionKicker: { en: '02 // SELECTED WORK & TECHNICAL CASE STUDIES', es: '02 // PROYECTOS SELECCIONADOS Y CASOS DE ESTUDIO' },
    sectionTitle: { en: 'Projects & Technical Case Studies', es: 'Proyectos y Casos de Estudio Técnicos' },
    sectionSubtitle: {
      en: 'Five self-contained projects across machine learning, local AI, data analytics, software systems, and embedded hardware. Select any project for detailed pipeline breakdowns and code.',
      es: 'Cinco proyectos propios en machine learning, IA local, analítica de datos, sistemas web y hardware embebido. Abre cualquier proyecto para ver su arquitectura, decisiones técnicas y código.',
    },
    readCaseStudy: { en: 'View Case Study', es: 'Ver Caso de Estudio' },
    viewRepo: { en: 'Source Code on GitHub', es: 'Código en GitHub' },
    filterAll: { en: 'All Projects (05)', es: 'Todos (05)' },
    filterAiMl: { en: 'AI & ML (02)', es: 'IA y ML (02)' },
    filterData: { en: 'Data Analytics (01)', es: 'Analítica de Datos (01)' },
    filterSoftware: { en: 'Software & Systems (01)', es: 'Software y Sistemas (01)' },
    filterIot: { en: 'Embedded IoT (01)', es: 'IoT Embebido (01)' },
  },
  caseStudyChapters: {
    backToIndex: { en: 'Back to Projects', es: 'Volver a Proyectos' },
    c01: { en: '01 — INTRODUCTION', es: '01 — INTRODUCCIÓN' },
    c02: { en: '02 — THE CHALLENGE', es: '02 — EL DESAFÍO' },
    c03: { en: '03 — THE SOLUTION', es: '03 — LA SOLUCIÓN' },
    c04: { en: '04 — ARCHITECTURE', es: '04 — ARQUITECTURA' },
    c05: { en: '05 — ENGINEERING DECISIONS', es: '05 — DECISIONES TÉCNICAS' },
    c06: { en: '06 — CHALLENGES & DEBUGGING', es: '06 — RETOS Y DEPURACIÓN' },
    c07: { en: '07 — RESULTS & LIMITATIONS', es: '07 — RESULTADOS Y LÍMITES' },
    c08: { en: '08 — SOURCE CODE', es: '08 — CÓDIGO FUENTE' },
    achievedLabel: { en: 'Verified Outcomes', es: 'Resultados Comprobados' },
    limitationsLabel: { en: 'Known Boundaries & Limitations', es: 'Límites Técnicos y Alcance' },
    prevStory: { en: 'Previous Project', es: 'Proyecto Anterior' },
    nextStory: { en: 'Next Project', es: 'Siguiente Proyecto' },
  },
  focusAreas: {
    sectionKicker: { en: '03 // AREAS OF INTEREST', es: '03 // ÁREAS DE INTERÉS' },
    sectionTitle: { en: 'Where My Work Concentrates', es: 'Áreas de Interés y Aplicación Técnica' },
    sectionSubtitle: {
      en: 'Connecting formal software engineering training with hands-on machine learning workflows, data pipelines, and applied automation.',
      es: 'Combinando mi base académica en ingeniería de software con flujos aplicados de machine learning, pipelines de datos y automatización práctica.',
    },
    relatedWorkLabel: { en: 'Backed by Projects', es: 'Respaldado por Proyectos' },
  },
  profile: {
    sectionKicker: { en: '04 // PROFILE, EXPERIENCE, EDUCATION & TOOLKIT', es: '04 // PERFIL, EXPERIENCIA, EDUCACIÓN Y HERRAMIENTAS' },
    sectionTitle: { en: 'Background & Technical Toolkit', es: 'Trayectoria y Competencias Técnicas' },
    narrativeHeading: { en: 'Background & Career Focus', es: 'Trayectoria y Dirección Profesional' },
    approachHeading: { en: 'Engineering & Data Approach', es: 'Enfoque de Trabajo con Código y Datos' },
    experienceHeading: { en: 'Work Experience', es: 'Experiencia Laboral' },
    educationHeading: { en: 'Education & Qualifications', es: 'Educación y Titulaciones' },
    toolkitHeading: { en: 'Technical Toolkit — Organized Around AI, Data & Software', es: 'Inventario Técnico — Organizado por IA, Datos y Software' },
    tierLegendTitle: { en: 'EXPERIENCE LEVELS (TRANSPARENT CLASSIFICATION)', es: 'NIVELES DE EXPERIENCIA (CLASIFICACIÓN HONESTA)' },
    practicalLabel: { en: 'A. Practical Experience (Built in projects or production)', es: 'A. Experiencia Práctica (Proyectos reales o entorno laboral)' },
    academicLabel: { en: 'B. Academic Experience (University & DAM curriculum)', es: 'B. Experiencia Académica (Grado y formación DAM)' },
    interestLabel: { en: 'C. Current Exploration (Active learning in AI & Data)', es: 'C. Intereses Actuales (Exploración activa en IA y Datos)' },
  },
  contact: {
    sectionKicker: { en: '05 // CONTACT & DIRECT CHANNELS', es: '05 // CONTACTO Y CANALES DIRECTOS' },
    headline: {
      en: 'Open to opportunities in Software, AI & Data.',
      es: 'Abierto a oportunidades en Software, IA y Datos.',
    },
    subline: {
      en: 'Interested in Junior AI / Machine Learning Engineer, Junior Data Analyst / Scientist, Junior Data Engineer, and Junior Software / Full Stack Developer roles. Available in Madrid, hybrid, or remote.',
      es: 'Interesado en posiciones de Junior AI / ML Engineer, Junior Data Analyst / Scientist, Junior Data Engineer y Junior Software Engineer / Full Stack. Disponible en Madrid, híbrido o remoto.',
    },
    copyEmail: { en: 'Copy Address', es: 'Copiar Correo' },
    copied: { en: 'Copied to clipboard', es: 'Copiado al portapapeles' },
    formHeading: { en: 'Send a Direct Email', es: 'Enviar Mensaje Directo' },
    sendBtn: { en: 'Open in Email Client', es: 'Abrir en Cliente de Correo' },
    cvDownloadLabel: { en: 'Download Official CV (PDF)', es: 'Descargar CV Oficial (PDF)' },
  },
};
