import { Metadata } from "next";
import { Organization, Person, WebSite, WithContext } from "schema-dts";

export const SeoData: Metadata = {
    title: "Arturo Alejandro Larios Quiroz - Full Stack Developer",
    description: `
        Arturo Alejandro Larios Quiroz Full Stack Developer with 4+ years
        of experience in building scalable and accessible web applications.
        Focused on performance, user experience, and solving real-world problems.
    `,
    keywords: [
        "Full Stack Developer",
        "Web Developer Portfolio",
        "Next.js",
        "React",
        "Node.js",
        "JavaScript",
        "TypeScript",
        "Ionic",
        "Angular",
        "Nuxt.js",
        "Cyberpuerta",
        "Alveus Soft",
        "Software Development",
        "Web Application Development",
        "Performance Optimization",
        "Developer",
        "SEO",
        "Arturo Larios",
        "Arturo",
        "Larios Quiroz",
        "Larios"
    ],
    authors: [{ name: "Arturo Alejandro Larios Quiroz", url: "https://www.arturolarios.com" }],
    creator: "Arturo Alejandro Larios Quiroz",
    metadataBase: new URL("https://www.arturolarios.com"),
    icons: {
        icon: '/assets/logo-cropped.ico'
    },
    openGraph: {
        title: "Arturo Alejandro Larios Quiroz - Full Stack Developer",
        description:
            "Explore the portfolio of Arturo Alejandro Larios Quiroz, a Full Stack Developer with expertise in building scalable web applications. View projects, experience, and more.",
        url: "https://www.arturolarios.com",
        siteName: "Arturo Alejandro Larios Quiroz Portfolio",
        images: [
            {
                url: "/assets/preview.webp",
                width: 1200,
                height: 630,
                alt: "Preview of Arturo Alejandro Larios Quiroz's developer portfolio",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Arturo Alejandro Larios Quiroz - Full Stack Developer",
        description:
            "Full Stack Developer portfolio showcasing projects and experience in web development using Next.js, React, Node.js, and more.",
        images: ["/assets/preview.webp"],
    },
};

export const jsonLdPerson: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Arturo Alejandro Larios Quiroz",
    "image": "https://www.arturolarios.com/assets/logo-cropped.webp",
    "url": "https://www.arturolarios.com",
    "sameAs": [
        "https://www.linkedin.com/in/lariosquiroz/",
        "https://github.com/TheL4rios"
    ],
    "jobTitle": "Full Stack Developer",
    "description": "Full Stack Developer with +4 years of experience in building scalable, accessible web applications.",
    "skills": [
        "Next.js",
        "React",
        "Node.js",
        "JavaScript",
        "TypeScript",
        "Ionic",
        "Angular",
        "Nuxt.js",
        "Cypress",
        "Docker"
    ],
};

export const jsonLdWebSite: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.arturolarios.com",
    "name": "Arturo Larios Portfolio"
}

export const jsonLdOrganization: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Arturo Larios",
    "legalName": "Arturo Alejandro Larios Quiroz",
    "url": "https://www.arturolarios.com",
    "logo": "https://www.arturolarios.com/assets/logo-cropped.webp",
    "description": "Arturo Larios, Full Stack Developer specialized in modern web technologies such as React, Angular, and Node.js.",
    "founder": {
        "@type": "Person",
        "name": "Arturo Alejandro Larios Quiroz",
        "url": "https://www.arturolarios.com"
    },
    "sameAs": [
        "https://www.linkedin.com/in/lariosquiroz/",
        "https://github.com/TheL4rios"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "email": "arallariosqu@gmail.com",
        "contactType": "customer support",
        "availableLanguage": ["English", "Spanish"]
    }
};