import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/app/components/navbar";
import Footer from "@/app/components/footer-section";
import { AppProvider } from "./store";
import "@/utils/styles/fonts.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Nard Portfolio",
  description:
    "Crafting stunning and performant user interfaces, one pixel at a time",
  icons: {
    icon: "favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <html lang="en" className="dark" suppressHydrationWarning>
        <body
          className={`min-h-screen bg-background font-geist text-foreground`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className="sticky top-0 z-[999]">
              <NavBar />
            </header>
            <>{children}</>
            <footer>
              <Footer />
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </AppProvider>
  );
}
