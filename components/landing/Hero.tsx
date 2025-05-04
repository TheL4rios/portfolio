import { Meteors } from "@/components/magicui/meteors";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export const Hero = () => {
	return (
		<section id="home" className="relative flex min-h-[100dvh] w-full flex-col items-center justify-content-center overflow-hidden">
			<Meteors number={30} />
			<div className="hero-bg m-auto max-w-[1000px] flex justify-content-start items-start gap-5 lg:gap-10 flex-col">
				<div>
					<h1 className="text-3xl lg:text-5xl">Arturo Alejandro Larios Quiroz</h1>
					<h2 className="w-full m-0 p-0 text-xl lg:text-5xl text-purple-200">
						Full Stack Developer
					</h2>
				</div>
				<p className="text-sm lg:text-l">
					Computer Systems Engineer with +4 years of experience
					in building scalable, accessible web applications.
					Focused on performance, user experience, and solving
					real-world problems.
				</p>
				<div className="flex items-center justify-content-start gap-5 w-full text-sm lg:text-l">
					<InteractiveHoverButton href="mailto:arallariosqu@gmail.com" className="bg-transparent text-white border-white">
						Contact Me
					</InteractiveHoverButton>
					<InteractiveHoverButton href="https://www.linkedin.com/in/lariosquiroz/" target="_blank" className="bg-transparent text-white border-white">
						LinkedIn
					</InteractiveHoverButton>
				</div>
			</div>
		</section>
	);
};
