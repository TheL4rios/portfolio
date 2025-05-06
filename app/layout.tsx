import type { Metadata } from "next";
import localFont from "next/font/local";

import "@/styles/globals.css";
import { jsonLdOrganization, jsonLdPerson, jsonLdWebSite, SeoData } from "@/lib/constants/seo";

const cascadiaCode = localFont({
  src: [
    {
      path: '/fonts/CascadiaCode.woff2',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-cascadia',
});

export const metadata: Metadata = SeoData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdPerson),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebSite),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <link
          rel="preload"
          href="/fonts/CascadiaCode.woff2"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link rel="canonical" href="https://www.arturolarios.com/" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </head>
      <body
        className={`${cascadiaCode.className} antialiased dark bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]`}
      >
        {children}
      </body>
    </html>
  );
}
