import React from 'react';
import ReactDOM from 'react-dom/client';
import { MotionConfig } from 'framer-motion';
import App from './App';
import './index.css';
import { LanguageProvider } from './context/LanguageContext';
import { ErrorBoundary } from './components/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <LanguageProvider>
        <MotionConfig reducedMotion="user">
          <App />
        </MotionConfig>
      </LanguageProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
