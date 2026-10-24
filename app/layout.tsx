import "./globals.css";
import type { Metadata } from "next";
import { AuthProvider } from "@/components/auth/auth-context";

export const metadata: Metadata = {
  title: "MELLA",
  description: "Discover culinary stories, communities, and heritage dining experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
