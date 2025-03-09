import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Providers } from "./providers"; // Import Wagmi provider

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI-Powered Adaptive Learning Platform",
  description: "Learn at your own pace with AI-powered adaptive learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers> {/* Wrap your app inside Wagmi */}
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
