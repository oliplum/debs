import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Deborah Tsavousis, coil ceramics",
  description: "Deborah Tsavousis, ceramics artist",
    generator: 'Next.js',
    applicationName: 'Ceramics1',
    referrer: 'origin-when-cross-origin',
    keywords: ['Deborah', 'Tsavousis', 'Ceramics', 'Coil'],
    authors: [{ name: 'Oli' }, { name: 'Josh', url: 'https://olivision.net' }],
    creator: 'Oli',
    publisher: 'Olivision web design',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  }
;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="background">
          <div>
            <Header />
            </div>
            <div >
              <Nav />
              </div>
              <div className="main-area">
        {children}
        </div>
        <div className="footer"> 
          <Footer />
        </div>
        </div>


      </body>
    </html>
  );
}
