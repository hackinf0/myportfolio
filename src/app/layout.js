import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "I am Henry Joel",
  description: "Discover my portfolio",

};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow bg-background pt-20 pb-0"> {children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
