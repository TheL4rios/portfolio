import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { BorderBeam } from "@/components/magicui/border-beam";

export const Cta = () => {
    return (
        <section className="relative flex flex-col items-center text-center justify-center gap-4 p-5 lg:p-10 mx-auto w-full max-w-[1000px] rounded-xl border">
            <h2 className="text-3xl lg:text-5xl">Inbox <span className="text-purple-300">open</span></h2>
            <h3 className="text-xl lg:text-3xl mb-10">Reach out when you&apos;re ready</h3>
            <div className="flex items-center justify-center gap-5 w-full text-sm lg:text-l">
                <InteractiveHoverButton href="mailto:arallariosqu@gmail.com" className="bg-transparent text-white border-white">
                    Contact Me
                </InteractiveHoverButton>
                <InteractiveHoverButton href="https://www.linkedin.com/in/lariosquiroz/" target="_blank" className="bg-transparent text-white border-white">
                    LinkedIn
                </InteractiveHoverButton>
            </div>
            <BorderBeam/>
        </section>
    );
};