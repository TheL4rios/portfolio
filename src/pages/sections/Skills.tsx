import { useTranslation } from 'react-i18next';

import { skills } from 'src/core/constants/skills';

export const Skills = () => {

    const [t] = useTranslation('skill');

    return (
        <div className="rounded-2xl shadow-lg mx-auto w-[90%] sm:w-[60%] h-auto mt-[-100px] bg-white">
            <div className="sm:px-6 sm:py-4">
                <div className="font-bold text-4xl mb-2 text-center py-[30px]">{ `${ t('card.title') }` }</div>
                <div className='flex flex-wrap justify-center'>
                    <div className='flex flex-wrap justify-center'>
                        {
                            skills.map(skill => (
                                <div key={skill.name} className='p-3 flex flex-col justify-end items-center m-3 w-[120px] sm:w-[128px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
                                    <img className='w-[64px]' src={ skill.img } alt={ skill.name }/>
                                    <span>{ skill.name }</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

