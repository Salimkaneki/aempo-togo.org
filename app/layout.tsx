import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const montserrat = localFont({
  src: [
    {
      path: "../public/fonts/Montserrat/Montserrat-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat/Montserrat-Italic-VariableFont_wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

const onest = localFont({
  src: "../public/fonts/Onest/Onest-VariableFont_wght.ttf",
  variable: "--font-onest",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aempo-togo.org"),
  title: {
    template: "%s | AEMPO-TOGO",
    default: "AEMPO-TOGO — Association des Étudiants en Médecine, Pharmacie et Odonto-Stomatologie du Togo",
  },
  description:
    "L'AEMPO-TOGO fédère les étudiants en Médecine, Pharmacie et Odonto-Stomatologie de la FSS pour promouvoir l'excellence, l'innovation et l'engagement sanitaire au Togo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${onest.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-montserrat" suppressHydrationWarning>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
