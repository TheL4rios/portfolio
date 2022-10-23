import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import mainCard_es from 'src/core/translations/es/MainCard.json';
import mainCard_en from 'src/core/translations/en/MainCard.json';

i18next.init({
  interpolation: {
    escapeValue: false
  },
  lng: 'es',
  resources: {
    es: {
      mainCard: mainCard_es
    },
    en: {
      mainCard: mainCard_en
    }
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={ i18next }>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
