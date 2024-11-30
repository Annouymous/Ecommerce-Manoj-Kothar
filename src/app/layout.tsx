import type { Metadata } from "next";
import "@/style/globals.css";
import { AuthorProvider } from "@/context/authorization";
import { Inter } from "next/font/google";
import toast, { Toaster } from "react-hot-toast";
import { Toaster as Sooner } from "@/components/ui/sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce Dashboard - Manage Products & Sales Efficiently",
  description:
    "A powerful e-commerce dashboard tailored to seamlessly manage their products, track sales, and monitor performance with real-time insights.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth`}>
        <AuthorProvider>
          <Toaster />
          <Sooner />
          <div className="flex h-screen w-full items-center justify-center md:hidden">
            <p className="text-center text-gray-500">
              Dashboard does not support in Mobile Phone. Please use Your
              Machine or contact your developer.
            </p>
          </div>
          <div className="hidden md:block">{children}</div>
        </AuthorProvider>
      </body>
    </html>
  );
}
