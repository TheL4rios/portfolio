import { useCallback } from 'react';

import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Particles from 'react-tsparticles';
import { AiOutlineArrowDown } from "react-icons/ai";

import { MainCard } from 'src/core/components/MainCard';

import { configParticle } from 'src/core/config/configParticle';
import { Translation } from 'src/core/components/Translation';

export const Main = () => {

	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFull(engine);
	}, []);

	const moveToNextSection = () => {
		window.scroll({
			top: window.innerHeight,
			behavior: 'smooth'
		});
	}

	return (
		<>
			<Particles width='100%' height='100vh' init={particlesInit} options={configParticle} />
			<MainCard/>
			<AiOutlineArrowDown onClick={moveToNextSection} className='text-white text-4xl animate-bounce absolute left-[0px] right-[0px] mx-auto top-[calc((100vh/2)+150px)] sm:top-[calc((100vh/2)+190px)] z-10 cursor-pointer'/>
			<Translation/>
		</>
	)
}
