import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GithubIcon } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://justfuckingusedocker.com";
const siteTitle = "Just Fucking Use Docker";
const siteDescription =
  "An opinionated guide on why and when to use Docker.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | " + siteTitle,
  },
  description: siteDescription,
  keywords: [
    "docker",
    "containerization",
    "rant",
    "deployment best practices",
    "docker development",
    "software deployment",
    "docker containers",
    "devops",
    "ci/cd",
    "container orchestration",
    "docker vs bare metal",
    "docker workflow"
  ],
  authors: [
    { name: "Maxinger15", url: "https://github.com/maxinger15" },
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    images: [
      {
        url: siteUrl + "/og.png",
        width: 2048,
        height: 2048,
        alt: siteTitle,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    site: "@maxinger15",
    creator: "@maxinger15",
    images: [siteUrl + "/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <div className="fixed top-4 right-4 flex gap-2 z-50">
          <button className="w-16 h-16">
            <a
              href="https://github.com/maxinger15/just-use-docker"
              target="_blank"
              rel="noopener noreferrer"
              title="View the source code on GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          </button>
        </div>
        {children}
        <div className="w-full flex justify-center items-center fixed bottom-4 left-0 right-0 z-50">
          <button >
            <a
              href="https://github.com/maxinger15/just-use-docker"
              target="_blank"
              rel="noopener noreferrer"
              title="View the source code on GitHub"
            >
              <div className="flex items-center flex-row">
                <GithubIcon className="h-4 w-4 mr-2" />
                Github
              </div>
            </a>
          </button>
        </div>
      </body>
    </html>
  );
}
