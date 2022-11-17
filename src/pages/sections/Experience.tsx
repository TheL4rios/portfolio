import { useTranslation } from 'react-i18next';
import Wave from 'src/assets/wave.svg';
import { WorkExperience } from 'src/core/interfaces/translations/experience.interface';
import { Skills } from './Skills';

export const Experience = () => {

    const [t] = useTranslation('experience');
    const experiences: WorkExperience[] = t('experience.experiences', { returnObjects: true });

    return (
        <div className='relative mt-[80px] xl:mt-[0px]'>
            <img src={Wave} alt='wave' />
            <div className='bg-[#141C3A] w-full h-auto pb-[150px]'>
                <h1 className='text-center text-4xl text-white font-semibold xl:absolute top-[200px] left-0 right-0 mx-auto'>{`${t('experience.title')}`}</h1>
                <div className='container mx-auto pt-[40px] xl:mt-[-50px]'>
                    {
                        experiences.map((experience: WorkExperience, index: number) => (
                            <div className='flex items-start justify-center flex-col xl:flex-row px-5 sm:mx-auto' key={index}>
                                <img src={experience.urlLogo} alt={experience.name} className='w-[100px] mx-auto xl:mr-[50px] mb-[50px] xl:mb-[0px]' />
                                <div className='text-white text-lg'>
                                    <div>
                                        <span className='font-semibold'>{experience.name}</span> ({experience.initDate} - {experience.endDate})
                                        <br />
                                        <span>{experience.description}</span>
                                        <div className='mt-[20px]'>
                                            {
                                                experience.experience.map((txt: string, index: number) => (
                                                    <p key={index}>
                                                        {txt}
                                                        <br />
                                                    </p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Skills />
        </div>
    )
}