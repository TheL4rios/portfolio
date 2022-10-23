import 'src/styles/main-card.css';
import { useTranslation } from 'react-i18next';

export const MainCard = () => {

	const [t, i18n] = useTranslation('mainCard');

	return (
		<div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 main-card__position">
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{ t('title.hello') }</div>
				<p className="text-gray-700 text-base">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
				</p>
			</div>
		</div>
	)
}
