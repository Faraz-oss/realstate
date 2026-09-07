import "./globals.css";

export const metadata = {
  title: "Nazim — A place to belong | Naya Nazimabad",
  description: "Discover a thoughtful way to find your next home in Naya Nazimabad, Karachi. Explore homes, save your favorites and plan a visit.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
