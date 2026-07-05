import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ankit Kumar | Full-Stack Web Engineer & Creative Developer",
  description: "Interactive portfolio of Ankit Kumar, specializing in high-fidelity motion design, Next.js web applications, and performant user experiences.",
  keywords: [
    "Ankit Kumar",
    "Portfolio",
    "Creative Developer",
    "Full-Stack Web Engineer",
    "Next.js",
    "Framer Motion",
    "Tailwind CSS",
    "TypeScript",
    "Web Developer",
    "Developer Portfolio",
  ],
  authors: [{ name: "Ankit Kumar", url: "https://ankit.dev" }],
  creator: "Ankit Kumar",
  openGraph: {
    title: "Ankit Kumar | Full-Stack Web Engineer",
    description: "Interactive portfolio of Ankit Kumar, specializing in high-fidelity motion design, Next.js web applications, and performant user experiences.",
    url: "https://ankit.dev",
    siteName: "Ankit Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Kumar | Full-Stack Web Engineer",
    description: "Interactive portfolio of Ankit Kumar, specializing in high-fidelity motion design, Next.js web applications, and performant user experiences.",
    creator: "@ankit",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
  
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Blocking inline script — runs before paint, eliminates flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme:dark)').matches;if(t==='light'||(!t&&!d)){document.documentElement.classList.add('light');}else{document.documentElement.classList.remove('light');}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
