import { useTranslation } from 'react-i18next';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

export const MainCard = () => {

	const [t] = useTranslation('mainCard');

	return (
		<div className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 absolute left-0 h-auto py-[50px] md:py-[100px] top-[calc((100vh/2)-20%)] w-[90%] lg:w-[70%] xl:w-[52%] z-10 mx-auto right-0">
			<div className="px-6 py-4 flex flex-col items-center justify-center h-full text-2xl sm:text-5xl md:text-6xl">
				<div className="mb-2">
					<span className='text-white font-semibold'>Arturo Larios Quiroz</span>
				</div>
				<p className="text-white">
					{ `${ t('card.role') } ` }
				</p>
				<div className='absolute right-[10px] bottom-[10px] text-3xl flex'>
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
