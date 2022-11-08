import { useTranslation } from 'react-i18next';
import Wave from 'src/assets/wave.svg';
import { WorkExperience } from 'src/core/interfaces/translations/experience.interface';
import { Skills } from './Skills';

export const Experience = () => {

    const [t] = useTranslation('experience');
    const experiences: WorkExperience[] = t('experience.experiences', { returnObjects: true });

    return (
        <div className='relative'>
            <img src={Wave} alt='wave' />
            <div className='bg-[#141C3A] w-full h-auto pb-[150px]'>
                <h1 className='text-center text-4xl text-white font-semibold absolute top-[200px] left-0 right-0 mx-auto'>{`${t('experience.title')}`}</h1>
                <div className='container mx-auto'>
                    {
                        experiences.map((experience: WorkExperience, index: number) => (
                            <div className='flex items-start justify-center' key={index}>
                                <img src={experience.urlLogo} alt={experience.name} className='w-[150px] mr-[50px]' />
                                <div className='text-white text-xl'>
                                    <span>
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
                                    </span>
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