import { UserProvider } from "@/redux/usercontext";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";
import Pageload from "@/components/pageload";

export const metadata = {
  title: "Dashboard-Brandzeals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Pageload />}>
          <UserProvider>{children}</UserProvider>
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}
