import { useTranslation } from 'react-i18next';

import AvatarImg from 'src/assets/profile/avatar.svg';

import { IoSchool } from 'react-icons/io5';
import { AboutMeSchool } from 'src/core/interfaces/translations/about-me.interface';

export const AboutMe = () => {

  const [t] = useTranslation('aboutMe');
  const schools: AboutMeSchool[] = t('aboutMe.school', { returnObjects: true });

  return (
    <div className='container mx-auto'>
      <h1 className='text-center mt-[70px] text-4xl font-semibold'>{ `${ t('aboutMe.title') } ` }</h1>
      <div className='flex items-center justify-center'>
        <img src={ AvatarImg } alt='avatar' className='w-[400px]'/>
        <div className='w-[50%]'>
          <span className='text-xl'>{ `${ t('aboutMe.about') } ` }</span>
          {
            schools.map(school => (
              <div className='flex items-center'>
                <IoSchool className='text-4xl bg-text-color'/>
                <div className='ml-4'>
                  <span>{ school.name }</span>
                  <br/>
                  <span>{ school.career }</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
