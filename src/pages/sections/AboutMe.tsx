import { useTranslation } from 'react-i18next';

import AvatarImg from 'src/assets/profile/avatar.svg';

import { AboutMeSchool } from 'src/core/interfaces/translations/about-me.interface';
import { Education } from 'src/core/components/Education';

export const AboutMe = () => {

  const [t] = useTranslation('aboutMe');
  const schools: AboutMeSchool[] = t('aboutMe.school', { returnObjects: true });

  return (
    <div className='container px-5 sm:mx-auto'>
      <h1 className='text-center mt-[70px] text-4xl font-semibold'>{ `${ t('aboutMe.title') } ` }</h1>
      <div className='flex items-center justify-center flex-col xl:flex-row'>
        <img draggable={ false } src={ AvatarImg } alt='avatar' className='w-[350px]'/>
        <div className='w-full xl:w-[50%] text-[#141C3A] xl:ml-[100px] mt-[30px] xl:mt-[50px]'>
          <span className='text-xl'>{ `${ t('aboutMe.about') } ` }</span>
          {
            schools.map((school: AboutMeSchool, index: number) => (
              <Education school={school} key={ index }/>
            ))
          }
        </div>
      </div>
    </div>
  )
}
