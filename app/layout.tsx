import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ScheduleProvider } from  "./contexts/ScheduleContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "900",
});

export const metadata: Metadata = {
  title: "German and Japanese Language Classes",
  description: "Online Classes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Wrap the children with the ScheduleProvider */}
        <ScheduleProvider>
          {children}
        </ScheduleProvider>
      </body>
    </html>
  );
}
