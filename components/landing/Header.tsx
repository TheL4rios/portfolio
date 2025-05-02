"use client";
import { IItem } from "@/types/item";
import { useEffect, useState } from "react";

const items: IItem[] = [
  { id: "home", text: "Home" },
  { id: "experience", text: "Experience" },
  { id: "projects", text: "Projects" },
  { id: "skills", text: "Skills" },
  { id: "about", text: "About" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // centra el punto de intersección
        threshold: 0,
      }
    );

    items.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="w-full py-4 px-6 flex justify-center items-center fixed top-0 z-50">
      <nav
        className={`
        h-[67px] flex items-center justify-center gap-10 p-5 rounded-full transition-all duration-300
        ${
          scrolled
            ? "bg-black/40 backdrop-blur-md"
            : "bg-transparent backdrop-blur-0"
        }
    `}
      >
        {items.map(({ id, text }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`transition hover:text-purple-100 ${
              activeSection === id
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
