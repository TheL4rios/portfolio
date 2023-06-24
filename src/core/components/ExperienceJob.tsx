import { WorkExperience } from 'src/core/interfaces/translations/experience.interface';

export const ExperienceJob = ({ experience, index }: { experience: WorkExperience; index: number; }) => {
    return (
        <div className='flex items-start justify-center flex-row md:px-5 sm:mx-auto relative pt-5'>
            <div className={ `w-[58px] h-[58px] md:w-[90px] md:h-[90px] absolute left-[16px] md:left-1/2 -ml-[43px] bg-[#343230] rounded-full flex justify-center items-center border-4 border-white ${ experience.isCurrent ? 'pulse' : '' }` }>
                <img src={experience.urlLogo} alt={experience.name} className='w-[28px] h-[28px] md:w-[60px] md:h-[60px] -mt-1'/>
            </div>
            <div className='text-white text-lg relative pl-14 md:pl-0'>
                <div className='max-w-full md:max-w-[44%] rounded-3xl pb-5 px-3 border-b-2'>
                    <span className='font-bold text-2xl'>{experience.name}</span>
                    <br/>
                    <span className='text-gray-400'>{ experience.position }</span>
                    <br />
                    <div className='mt-[20px] mb-5 md:mb-0'>
                        {
                            experience.experience.map((txt: string, index: number) => (
                                <p key={index}>
                                    {txt}
                                    <br />
                                </p>
                            ))
                        }
                    </div>

                    <span className='text-gray-300 md:mt-0 md:absolute md:left-1/2 md:ml-[70px] md:top-8'>{experience.initDate} - {experience.endDate}</span>
                </div>
            </div>
        </div>
    )
}
