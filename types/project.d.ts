import { StaticImageData } from "next/image";

export interface IProject {
    id: number;
    name: string;
    image: StaticImageData;
    description: string;
    link: string;
    githubLink?: string;
    tags: ITag[];
}

export interface ITag {
    link: string;
    name: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
}