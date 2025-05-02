import { calculateDuration, formatDate } from "@/lib/utils";
import { IProject } from "@/types/project";
import Image from "next/image";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export const ProjectItem = ({
    name,
    image,
    description,
    link,
    githubLink,
    tags,
}: Omit<IProject, 'id'>) => {
    return (
        <div className="mb-10 ms-6 flex items-center justify-content-center gap-10">
            <Image alt={name} src={image} className="w-full max-w-[473px] h-[310px] rounded-2xl object-cover" />
            <div className="max-w-[32rem] w-full flex flex-col gap-4">
                <h3 className="text-2xl text-white">{name}</h3>

                <div className="flex itesm-center gap-2">
                    {
                        tags.map(({name, link, icon: Icon}, index) => (
                            <a
                                key={index}
                                href={link}
                                target="_blank"
                                className="p-1 px-2 text-xs rounded-full flex w-fit items-center gap-2 bg-gray-800 border border-gray-600 text-white hover:bg-gray-100 hover:border-gray-300 hover:text-[#333] transition"
                            >
                                <Icon />
                                <span>{name}</span>
                            </a>
                        ))
                    }
                </div>

                <p className="text-gray-300">{description}</p>

                <InteractiveHoverButton href={link} target="_blank" className="bg-transparent text-white border-white w-fit">
                    View Project
                </InteractiveHoverButton>
            </div>
        </div>
    );
};

