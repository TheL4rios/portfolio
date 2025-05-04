import { IProject } from "@/types/project";
import Image from "next/image";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Badge } from "@/components/ui/Badge";

export const ProjectItem = ({
    name,
    image,
    description,
    link,
    tags,
    reverse,
    isLast,
}: Omit<IProject, 'id'> & {reverse?: boolean; isLast?: boolean;}) => {
    return (
        <article className={`${!isLast ? 'mb-10' : ''} flex flex-col lg:flex-row items-center justify-content-center gap-10 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
            <div className="rounded-2xl overflow-hidden">
                <Image loading="lazy" alt={name} src={image} className="w-full max-w-[473px] lg:h-[310px] object-cover hover:scale-105 transition duration-500" />
            </div>
            <div className="max-w-[32rem] w-full flex flex-col gap-4">
                <h3 className="text-xl lg:text-2xl text-white">{name}</h3>

                <div className="flex flex-wrap itesm-center gap-2">
                    {
                        tags.map((tag, index) => <Badge key={index} {...tag} />)
                    }
                </div>

                <p className="text-gray-300 text-sm lg:text-l">{description}</p>

                <InteractiveHoverButton href={link} target="_blank" className="bg-transparent text-white border-white w-fit text-sm lg:text-l">
                    View Project
                </InteractiveHoverButton>
            </div>
        </article>
    );
};

