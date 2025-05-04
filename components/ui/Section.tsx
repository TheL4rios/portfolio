import { JSX } from "react";

interface ISectionProps {
    id: string;
    title: string;
    className?: string;
    children: JSX.Element
}

export const Section = ({id, title, className, children}: ISectionProps) => {
    return (
        <section id={id} className={`flex m-auto w-full max-w-[1000px] gap-15 flex-col items-center justify-content-center scroll-mt-[100px] ${ className || '' }`}>
            <h2 className="text-3xl lg:text-5xl">{ title }</h2>

            {children}
        </section>
    );
};