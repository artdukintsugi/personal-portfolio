import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "Evelyn Vybíralů",
  description: "Personal portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
