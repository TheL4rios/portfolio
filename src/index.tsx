import 'animate.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import mainCard_es from 'src/core/translations/es/MainCard.json';
import aboutMe_es from 'src/core/translations/es/AboutMe.json';
import experience_es from 'src/core/translations/es/Experience.json';
import skill_es from 'src/core/translations/es/Skill.json';
import myProjects_es from 'src/core/translations/es/MyProjects.json';

import mainCard_en from 'src/core/translations/en/MainCard.json';
import aboutMe_en from 'src/core/translations/en/AboutMe.json';
import experience_en from 'src/core/translations/en/Experience.json';
import skill_en from 'src/core/translations/en/Skill.json';
import myProjects_en from 'src/core/translations/en/MyProjects.json';
import { getLocalLanguage } from './core/helpers/getLocalLanguage';

i18next.init({
  interpolation: {
    escapeValue: false
  },
  lng: getLocalLanguage(),
  resources: {
    es: {
      mainCard: mainCard_es,
      aboutMe: aboutMe_es,
      experience: experience_es,
      skill: skill_es,
      myProjects: myProjects_es
    },
    en: {
      mainCard: mainCard_en,
      aboutMe: aboutMe_en,
      experience: experience_en,
      skill: skill_en,
      myProjects: myProjects_en
    }
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <I18nextProvider i18n={i18next}>
    <main className='overflow-hidden select-none'>
      <App />
    </main>
  </I18nextProvider>
);
