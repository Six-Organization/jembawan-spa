import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";
import { site } from "@/data/site";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

// Runtime polyfills for iOS 15.0–15.3 / older Safari (Array.at, String.at,
// Object.hasOwn land in Safari 15.4). Loaded before app JS so hydration works.
const IOS_POLYFILLS = `(function(){var A=function(n){n=Math.trunc(n)||0;if(n<0)n+=this.length;return (n<0||n>=this.length)?undefined:this[n]};if(!Array.prototype.at){Object.defineProperty(Array.prototype,'at',{value:A,writable:true,configurable:true})}if(!String.prototype.at){Object.defineProperty(String.prototype,'at',{value:A,writable:true,configurable:true})}if(!Object.hasOwn){Object.defineProperty(Object,'hasOwn',{value:function(o,p){return Object.prototype.hasOwnProperty.call(o,p)},writable:true,configurable:true})}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} — Traditional Balinese Massage & Spa`,
    template: `%s | ${site.name}`,
  },
  description:
    "Jembawan Spa — traditional Balinese massage & spa in the heart of Ubud, Bali. Rated 4.8 by 885+ guests. Book your treatment on WhatsApp. Pijat Bali & spa di Ubud.",
  keywords: [
    "Jembawan Spa",
    "Balinese massage Ubud",
    "spa Ubud",
    "pijat Bali Ubud",
    "massage Ubud",
    "day spa Ubud Bali",
  ],
  openGraph: {
    title: `${site.fullName} — Balinese Massage & Spa in Ubud`,
    description:
      "Traditional Balinese massage & spa in the heart of Ubud. Rated 4.8 by 885+ guests. Book on WhatsApp.",
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          id="ios-polyfills"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: IOS_POLYFILLS }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
