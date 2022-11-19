import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { MdOutlineLanguage } from "react-icons/md";

import EUA from 'src/assets/flagEua.png';
import MEX from 'src/assets/flagMexico.png';
import { Spinner } from './ui/Spinner';

export const Translation = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const { i18n } = useTranslation();

  const onChangeLanguage = () => {
    setIsLoading(true);
    if (lang === 'en') {
      setLang('es');
      i18n.changeLanguage('es');
    } else {
      setLang('en');
      i18n.changeLanguage('en');
    }
    setIsLoading(false);
  }

  useEffect(() => {
    const localLang = window.navigator.language;

    if (localLang !== 'es-ES') {
      setLang('en');
      i18n.changeLanguage('en');
    }
    setIsLoading(false);
  }, [i18n]);

  return (
    <div className='absolute top-[0px] right-[0px] z-20 text-white'>
      <button onClick={onChangeLanguage} className='flex items-center m-3'>
        <Spinner isLoading={isLoading}/>
        <MdOutlineLanguage className='text-2xl'/>
        <img alt='Language' src={ lang === 'en' ? EUA : MEX } className='w-[32px] ml-3'/>
      </button>
    </div>
  )
}
