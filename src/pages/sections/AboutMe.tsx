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
        <div className='w-[50%] text-[#141C3A] ml-[100px]'>
          <span className='text-2xl'>{ `${ t('aboutMe.about') } ` }</span>
          {
            schools.map((school: AboutMeSchool, index: number) => (
              <div className='flex items-center mt-[25px]' key={ index }>
                <IoSchool className='text-4xl'/>
                <div className='ml-4'>
                  <span className='font-semibold text-xl'>{ school.name }</span>
                  <br/>
                  <span className='text-xl'>{ school.career }</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
