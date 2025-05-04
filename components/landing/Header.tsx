"use client";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { IItem } from "@/types/item";

const items: IItem[] = [
	{ id: "home", text: "Home" },
	{ id: "experience", text: "Experience" },
	{ id: "projects", text: "Projects" },
	{ id: "skills", text: "Skills" },
];

export const Header = () => {
	const { scrolled, activeSection } = useScrollSpy(items);

	return (
		<header className="w-full py-2 px-6 flex justify-center items-center fixed top-0 z-50">
			<nav
				className={`
					flex items-center justify-center gap-10 p-5 py-3 rounded-full transition-all duration-500
					${scrolled
						? "bg-black/40 backdrop-blur-md"
						: "bg-transparent backdrop-blur-0"
					}
    			`}
			>
				{items.map(({ id, text }) => (
					<a
						key={id}
						href={`#${id}`}
						className={`transition hover:text-purple-100 text-sm lg:text-lg ${activeSection === id
								? "text-purple-300 font-semibold"
								: "text-white"
							}`}
					>
						{text}
					</a>
				))}
			</nav>
		</header>
	);
};
