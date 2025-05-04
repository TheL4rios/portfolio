import { ComponentType, SVGProps } from "react";

interface IBadgeProps {
    link: string;
    name: string;
    size?: 'xs' | 'md' | 'lg' | 'xl';
    icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const Badge = ({link, name, icon: Icon, size = 'xs'}: IBadgeProps) => {
    return (
        <a
            href={link}
            target="_blank"
            className={`p-1 px-2 text-${size} rounded-full flex w-fit items-center gap-2 bg-gray-800 border border-gray-600 text-white hover:bg-gray-100 hover:border-gray-300 hover:text-[#333] transition`}
        >
            <Icon />
            <span>{name}</span>
        </a>
    );
};