import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { MdOutlineLanguage } from "react-icons/md";

import EUA from 'src/assets/flagEua.webp';
import MEX from 'src/assets/flagMexico.webp';
import { getLocalLanguage } from '../helpers/getLocalLanguage';
import { Spinner } from './ui/Spinner';

export type Languages = 'es' | 'en';

export const Translation = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState<Languages>('es');
  const { i18n, ready } = useTranslation();

  const setLanguage = async (lang: Languages) => {
    setLang(lang);
    await i18n.changeLanguage(lang);
  }

  const onChangeLanguage = () => {
    setIsLoading(true);
    if (lang === 'en') {
      setLanguage('es');
    } else {
      setLanguage('en');
    }
    setIsLoading(false);
  }

  useEffect(() => {
    setLang(getLocalLanguage());
    setIsLoading(false);
  }, [ready]);

  return (
    <div className='absolute top-[0px] right-[0px] z-20 text-white'>
      <button onClick={onChangeLanguage} className='flex items-center m-3'>
        <Spinner isLoading={isLoading}/>
        <MdOutlineLanguage className='text-2xl'/>
        <img draggable={ false } key={lang} alt='Language' src={ lang === 'en' ? EUA : MEX } className='w-[32px] ml-3 animate__animated animate__bounceIn'/>
      </button>
    </div>
  )
}
