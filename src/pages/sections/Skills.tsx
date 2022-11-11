import { useTranslation } from 'react-i18next';

import { skills } from 'src/core/constants/skills';

export const Skills = () => {

    const [t] = useTranslation('skill');

    return (
        <div className="rounded shadow-lg absolute left-0 mx-auto right-0 w-[52%] h-auto bottom-[-30px] bg-white">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{ `${ t('card.title') }` }</div>
                <div className='flex flex-wrap justify-center'>
                    {
                        skills.map(skill => (
                            <div className='p-3 flex flex-col justify-end items-center'>
                                <img className='w-[64px]' src={ skill.img }/>
                                <span>{ skill.name }</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

