import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3B82F6" />
        <link rel="apple-touch-icon" href="/logo-icon.svg" />

        {/* Schema.org markup for Google */}
        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Corby Chemists",
              alternateName: "Corby Chemists",
              url: "https://Corby Chemists.com",
              logo: "https://Corby Chemists.com/logo.png",
              description:
                "Leading software development company in Birtamode, Jhapa, Nepal specializing in custom software development, AI solutions, web applications, and digital transformation services.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "988 1st Ave, New York, NY 10022, US",
                addressLocality: "Birtamode",
                addressRegion: "Jhapa",
                postalCode: "57204",
                addressCountry: "Nepal",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+977-9817996672",
                contactType: "customer service",
                email: "admin@koshilabs.com",
                availableLanguage: ["English", "Nepali"],
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "10:00",
                  closes: "14:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/koshilabs",
                "https://www.linkedin.com/company/koshilabs",
              ],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
