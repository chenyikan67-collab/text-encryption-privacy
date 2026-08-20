import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEXT ENCRYPTION Privacy Policy",
  description:
    "Privacy Policy for TEXT ENCRYPTION, a local text encryption tool.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
