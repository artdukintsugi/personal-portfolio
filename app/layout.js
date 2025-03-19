import "./globals.css";

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
