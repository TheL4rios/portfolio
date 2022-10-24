import { useTranslation } from 'react-i18next';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

import 'src/styles/main-card.css';

export const MainCard = () => {

	const [t] = useTranslation('mainCard');

	return (
		<div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 main-card__position">
			<div className="px-6 py-4 flex flex-col items-center justify-center h-full text-6xl select-none">
				<div className="mb-2">
					<span className='text-white font-bold'>Arturo Larios Quiroz</span>
				</div>
				<p className="text-white">
					{ `${ t('card.role') } ` }
				</p>
				<div className='main-card__social text-3xl flex'>
					<a rel='noopenner noreferrer' href='https://github.com/TheL4rios' target='_blank'>
						<AiFillGithub className='text-white'/>
					</a>
					<a rel='noopenner noreferrer' href='https://www.linkedin.com/in/lariosquiroz/' target='_blank' className='ml-2'>
						<AiFillLinkedin className='text-white'/>
					</a>
					<a rel='noopenner noreferrer' href='mailto:arallariosqu@gmail.com' target='_blank' className='ml-2'>
						<AiFillMail className='text-white'/>
					</a>
				</div>
			</div>
		</div>
	)
}
