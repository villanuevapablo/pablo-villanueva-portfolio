import { EngineeringNote, QueuedNoteTopic } from '../types/portfolio';

export const ENGINEERING_NOTES: EngineeringNote[] = [
  {
    id: 'preventing-lookahead-bias-timeseries',
    number: 'NOTE 01',
    title: {
      en: 'Preventing Lookahead Bias & Understanding Tree Extrapolation in Time-Series ML',
      es: 'Evitar el Sesgo de Anticipación y Entender los Límites de Extrapolación en Series Temporales',
    },
    date: '2026-05',
    topic: {
      en: 'Machine Learning',
      es: 'Machine Learning',
    },
    readingTime: '4 min',
    shortIntro: {
      en: 'Why standard K-Fold validation corrupts sequential financial predictions and why Random Forest underperformed Linear Regression during unseen BTC highs.',
      es: 'Por qué el K-Fold tradicional contamina predicciones secuenciales y por qué Random Forest quedó por detrás de Regresión Lineal ante máximos históricos inéditos.',
    },
    explanation: {
      en: [
        'When building the BTC-USD dissertation pipeline in train_models.py, the target variable represents tomorrow\'s closing price (df["Close"].shift(-1)) while features use rolling moving averages (SMA 7, SMA 30), rolling volatility, and 1-to-3-day lag closes. Calling train_test_split with shuffle=True allows adjacent days with nearly identical rolling averages to appear in both train and test folds, producing artificially optimistic R² scores.',
        'To eliminate leakage, train_models.py enforces a strict slice split (X.iloc[:split_index]) without shuffling, and analysis.py validates across 5 expanding chronological windows via sklearn TimeSeriesSplit.',
        'Evaluating strictly out-of-sample revealed a counter-intuitive benchmark: Linear Regression achieved lower error (MAE ~$1,684, RMSE ~$2,317, R² 0.9830) than Random Forest (MAE ~$3,550, RMSE ~$4,564, R² 0.9342). Because decision trees compute weighted averages of training target bins, a Random Forest cannot output values outside the minimum and maximum closes seen during training. Whenever Bitcoin crossed above the training range, tree predictions hit a structural ceiling, whereas linear weights extrapolated linearly along lag_1.',
      ],
      es: [
        'Al construir el pipeline de predicción BTC-USD en train_models.py, la variable objetivo es el cierre del día siguiente (df["Close"].shift(-1)), mientras que las entradas emplean medias móviles (SMA 7 y 30), volatilidad móvil y cierres retardados. Usar train_test_split con barajado aleatorio (shuffle=True) filtra días contiguos entre entrenamiento y test, inflando artificialmente el rendimiento.',
        'Para eliminar el data leakage, train_models.py aplica un corte secuencial estricto sin barajar (X.iloc[:split_index]) y analysis.py evalúa mediante 5 pliegues expansivos cronológicos con TimeSeriesSplit.',
        'La evaluación cronológica mostró un resultado instructivo: Regresión Lineal obtuvo menos error (MAE ~$1.684, R² 0.9830) que Random Forest (MAE ~$3.550, R² 0.9342). Como los árboles de decisión promedian valores observados dentro de sus hojas de entrenamiento, Random Forest no puede extrapolar fuera del rango máximo histórico aprendido cuando el activo entra en nuevos máximos.',
      ],
    },
    codeOrDiagram: {
      label: {
        en: 'train_models.py — Chronological split & shared inference feature contract',
        es: 'train_models.py — División cronológica y contrato compartido de variables',
      },
      snippet: `# Target is tomorrow's close; drop initial 30-day rolling NaNs
data["target"] = data["Close"].shift(-1)
data.dropna(inplace=True)

# Chronological split: preserve time ordering (never shuffle)
split_index = int(len(data) * 0.8)
X_train, X_test = X.iloc[:split_index], X.iloc[split_index:]
y_train, y_test = y.iloc[:split_index], y.iloc[split_index:]

# Observation from test set evaluation:
# Linear Regression : MAE ~$1,684 | RMSE ~$2,317 | R2 0.9830
# Random Forest     : MAE ~$3,550 | RMSE ~$4,564 | R2 0.9342`,
    },
    whatILearned: {
      en: 'High R² in raw price forecasting mostly tracks lag autocorrelation (tomorrow looks close to today). Predicting stationary percentage returns—rather than raw USD price—is essential if tree ensembles need to generalize across rising regimes.',
      es: 'Un R² alto sobre precios absolutos refleja en gran parte autocorrelación con el cierre previo. Para que modelos basados en árboles generalicen ante nuevos rangos de precio, conviene predecir retornos porcentuales estacionarios en lugar del valor absoluto.',
    },
    relatedProjectId: 'bitcoin-price-forecasting',
    relatedProjectTitle: 'Bitcoin Price Forecasting & Analytics System',
  },
  {
    id: 'go-stdlib-auth-csrf-concurrency',
    number: 'NOTE 02',
    title: {
      en: 'Thread-Safe CSRF & Dual Rate-Limiting Using Go Standard Library',
      es: 'CSRF Atómico y Rate Limiting Concurrency-Safe con la Biblioteca Estándar de Go',
    },
    date: '2026-04',
    topic: {
      en: 'Backend Architecture',
      es: 'Arquitectura Backend',
    },
    readingTime: '5 min',
    shortIntro: {
      en: 'Handling Go net/http concurrent goroutine map access while implementing one-time CSRF tokens, IP throttling, and SQLite WAL pragmas in SRMS.',
      es: 'Cómo evitar condiciones de carrera en mapas Go bajo net/http al implementar tokens CSRF de un uso, limitación por IP y SQLite en modo WAL.',
    },
    explanation: {
      en: [
        'Each incoming HTTP request handled by Go\'s net/http server runs in its own goroutine. Tracking in-memory login request timestamps or CSRF tokens in a plain Go map without synchronization causes fatal concurrent read/write panics under parallel traffic.',
        'In SRMS-MEDICAL (srms/main.go), both security stores are isolated behind explicit sync.Mutex guards. When validateCSRFToken checks a submitted POST form, it acquires the lock, verifies expiration (30-minute TTL), and deletes the token immediately so replay attacks fail on the second request.',
        'To protect SQLite against "database is locked" contention during concurrent session reads and audit writes, database initialization applies explicit pragmas on connect: _pragma=journal_mode(WAL)&_pragma=foreign_keys(1), backed by bcrypt hashing (cost 12) and two-tier brute-force mitigation (5 IP attempts/min + 15-minute database account lockout).',
      ],
      es: [
        'Cada petición entrante en net/http de Go se ejecuta en su propia goroutine. Leer y escribir mapas globales para tokens CSRF o contadores de intentos en paralelo sin sincronización provoca un panic fatal en tiempo de ejecución.',
        'En SRMS-MEDICAL (srms/main.go), ambos registros están protegidos por sync.Mutex dedicados. Cuando validateCSRFToken verifica un formulario POST, adquiere el bloqueo, valida su TTL de 30 minutos y elimina el token de inmediato (one-time use) antes de liberar el mutex.',
        'Para evitar errores "database is locked" en SQLite bajo lecturas concurrentes de sesión y escritura de intentos fallidos, la conexión activa explícitamente _pragma=journal_mode(WAL)&_pragma=foreign_keys(1) junto a hashing bcrypt con coste 12.',
      ],
    },
    codeOrDiagram: {
      label: {
        en: 'srms/main.go — Atomic single-use CSRF validation & SQLite WAL init',
        es: 'srms/main.go — Validación CSRF atómica de un uso e inicio SQLite WAL',
      },
      snippet: `func validateCSRFToken(r *http.Request) bool {
    formToken := r.FormValue("csrf_token")
    if formToken == "" {
        return false
    }
    csrfMu.Lock()
    expiry, exists := csrfTokens[formToken]
    if exists {
        delete(csrfTokens, formToken) // Consume immediately
    }
    csrfMu.Unlock()
    return exists && time.Now().Before(expiry)
}

// Connection string enabling WAL concurrency & FK enforcement
db, err = sql.Open("sqlite", "./srms.db?_pragma=journal_mode(WAL)&_pragma=foreign_keys(1)")`,
    },
    whatILearned: {
      en: 'Building authentication without external middleware libraries makes every security boundary—cookie SameSite flags, atomic token deletion, and concurrent memory synchronization—impossible to take for granted.',
      es: 'Construir autenticación y defensa HTTP sin middlewares externos obliga a verificar explícitamente cada frontera crítica: cookies SameSite=Strict, consumo atómico de tokens y sincronización concurrente.',
    },
    relatedProjectId: 'srms-medical',
    relatedProjectTitle: 'Secure Record Management System (SRMS)',
  },
  {
    id: 'os-file-locks-python-watchdog',
    number: 'NOTE 03',
    title: {
      en: 'Resolving Race Conditions & OS File Locks in Python Watchdog Monitors',
      es: 'Condiciones de Carrera y Bloqueos de Archivo al Monitorizar Descargas con Watchdog',
    },
    date: '2026-04',
    topic: {
      en: 'Debugging & Automation',
      es: 'Depuración y Automatización',
    },
    readingTime: '4 min',
    shortIntro: {
      en: 'Why filesystem creation events fire before browser downloads flush to disk, causing pypdf crashes and PermissionError exceptions.',
      es: 'Por qué los eventos de creación se disparan antes de que el navegador termine de escribir un PDF, provocando PermissionError y lecturas truncadas.',
    },
    explanation: {
      en: [
        'When Smart File Organizer monitors a Downloads directory using Python\'s watchdog library, FileSystemEventHandler fires on_created the instant an application allocates a new file handle—often milliseconds before the full byte payload is written.',
        'Attempting immediate PDF text extraction triggers truncated-stream errors or OS-level PermissionError locks. Similarly, Chromium and Firefox create temporary staging names (.crdownload, .part, .tmp) and then emit an on_moved event once the download completes.',
        'In watcher.py, incoming paths pass through two filters before reaching extractor.py: an ignored extension/dotfile filter that discards incomplete browser files cleanly, followed by _wait_until_file_stable(), which polls stat().st_size until stable across intervals and probes open("rb").read(1) to confirm the writing process has released the OS lock.',
      ],
      es: [
        'Cuando Smart File Organizer observa una carpeta de Descargas mediante watchdog, on_created se dispara en cuanto otra aplicación reserva el archivo, a menudo mucho antes de finalizar la escritura completa en disco.',
        'Intentar extraer texto PDF en ese instante provoca errores de archivo truncado o excepciones PermissionError en Windows. Además, navegadores como Chrome crean nombres temporales (.crdownload, .part) y emiten un evento on_moved al terminar.',
        'En watcher.py, cada ruta atraviesa dos barreras antes de pasar a extractor.py: primero descarta ficheros ocultos y extensiones temporales compuestas, y después ejecuta _wait_until_file_stable(), comprobando que st_size sea constante y probando open("rb").read(1) para asegurar que el proceso escritor ha liberado el bloqueo.',
      ],
    },
    codeOrDiagram: {
      label: {
        en: 'watcher.py — Size stability + OS file lock release probe',
        es: 'watcher.py — Verificación de tamaño constante y liberación de bloqueo',
      },
      snippet: `# Wait until file size stops growing and writing handle closes
if current_size == last_size and current_size > 0:
    try:
        with file_path.open("rb") as handle:
            handle.read(1)
        return True
    except (PermissionError, OSError):
        pass  # Still locked by browser or copy operation`,
    },
    whatILearned: {
      en: 'Event-driven filesystem tools must treat creation notifications as "intent to write" rather than "ready to consume", guarding downstream parsers with stability probes and deduplication sets.',
      es: 'Un evento on_created indica inicio de escritura, no disponibilidad completa; cualquier pipeline de archivos necesita filtros temporales, comprobación de bloqueos y control de concurrencia.',
    },
    relatedProjectId: 'smart-file-organizer',
    relatedProjectTitle: 'Smart File Organizer (Local AI Daemon)',
  },
  {
    id: 'debugging-ios-safari-black-screen',
    number: 'NOTE 04',
    title: {
      en: 'Debugging a Blank Screen on iPhone Safari: localStorage SecurityError & WebKit Motion Quirks',
      es: 'Depurando una Pantalla Negra en iPhone Safari: SecurityError en localStorage y Animaciones WebKit',
    },
    date: '2026-11',
    topic: {
      en: 'Frontend & Cross-Browser Debugging',
      es: 'Frontend y Compatibilidad Safari iOS',
    },
    readingTime: '4 min',
    shortIntro: {
      en: 'Root-cause breakdown of an actual production issue on this portfolio where mobile Safari unmounted React 18 cleanly without throwing on desktop.',
      es: 'Análisis real del fallo crítico en este portfolio por el cual iPhone Safari mostraba únicamente un fondo negro mientras en escritorio funcionaba perfectamente.',
    },
    explanation: {
      en: [
        'After deploying the first version of this portfolio to Vercel, desktop browsers rendered cleanly while several iOS Safari sessions (private tabs, restricted-cookie profiles, and embedded in-app WebViews) displayed an empty background with zero DOM content inside #root.',
        'Inspecting initialization order exposed a synchronous crash inside LanguageContext: calling localStorage.getItem() inside a useState initializer before mount threw an unhandled SecurityError in storage-restricted iOS WebKit contexts. Because React 18 had no root ErrorBoundary, that single exception unmounted the entire application tree cleanly before painting.',
        'Two secondary Safari hazards amplified visibility risk: applying overflow-x: hidden directly on <body> breaks WebKit\'s viewport IntersectionObserver triggers (preventing whileInView reveals), and global CSS rules with transition-duration: 0.01ms !important inside @media (prefers-reduced-motion) froze Framer Motion initial opacity states.',
      ],
      es: [
        'Tras el despliegue inicial de este portfolio en Vercel, los navegadores de escritorio funcionaban correctamente pero en Safari de iOS (modo privado, cookies restringidas o WebViews integradas) la pantalla quedaba totalmente en negro.',
        'La causa raíz síncrona estaba en LanguageContext: invocar localStorage.getItem() sin try/catch al inicializar el estado lanzaba una excepción SecurityError en contextos restringidos de WebKit. Sin un ErrorBoundary en raíz, React 18 desmontaba todo el árbol antes de renderizar un solo píxel.',
        'Además, aplicar overflow-x: hidden al <body> afectaba al IntersectionObserver de WebKit, y las reglas CSS globales con transition-duration: 0.01ms !important en prefers-reduced-motion congelaban elementos con opacity: 0. La solución sustituyó esas reglas por <MotionConfig reducedMotion="user">, almacenamiento seguro con fallback en memoria y ErrorBoundary global.',
      ],
    },
    codeOrDiagram: {
      label: {
        en: 'src/context/LanguageContext.tsx — Safe storage probe + ErrorBoundary guard',
        es: 'src/context/LanguageContext.tsx — Lectura segura y respaldo en memoria',
      },
      snippet: `const getInitialLanguage = (): Language => {
  try {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      const saved = window.localStorage.getItem('pv_portfolio_lang');
      if (saved === 'es' || saved === 'en') return saved;
    }
  } catch {
    // Safari Private Mode / in-app WebView SecurityError fallback
  }
  return 'en';
};`,
    },
    whatILearned: {
      en: 'Never gate core DOM visibility on CSS opacity: 0 waiting for JS observers, always wrap synchronous Web Storage reads during React initialization, and test target bundles explicitly on Safari WebKit.',
      es: 'Nunca supeditar la visibilidad básica del contenido a animaciones opacity: 0, envolver siempre las lecturas síncronas de Web Storage en el arranque y probar explícitamente en condiciones reales de Safari iOS.',
    },
    relatedProjectId: 'portfolio-platform',
    relatedProjectTitle: 'Pablo Villanueva Portfolio (GitHub)',
  },
];

export const QUEUED_NOTE_TOPICS: QueuedNoteTopic[] = [
  {
    id: 'queue-sqlite-indexing',
    topic: { en: 'SQLite Query Indexing', es: 'Indexación SQLite' },
    workingTitle: {
      en: 'Composite Unique Constraints & WAL Tuning in Local Analytics Tools',
      es: 'Índices Compuestos y Modo WAL en Herramientas Analíticas Locales',
    },
    plannedScope: {
      en: 'Queued note structure ready — reserved for deeper SQLite query plan benchmarking across larger datasets.',
      es: 'Espacio reservado — pendiente de añadir mediciones reales de planes de consulta sobre datasets más extensos.',
    },
  },
  {
    id: 'queue-api-testing',
    topic: { en: 'Testing & Maintainability', es: 'Testing y Mantenibilidad' },
    workingTitle: {
      en: 'Contract Testing Third-Party REST Integrations Without Flaky Mocks',
      es: 'Pruebas de Integración de APIs REST Evitando Mocks Frágiles',
    },
    plannedScope: {
      en: 'Queued note structure ready — to be published when backed by open-source code examples.',
      es: 'Estructura preparada — se redactará únicamente cuando vaya acompañada de ejemplos abiertos verificables.',
    },
  },
];
