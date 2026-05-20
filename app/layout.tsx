// @ts-ignore: allow side-effect import for global CSS
import "./globals.css";

export const metadata = {
  title: "Marc Adrian M. Cuano — Software Engineer · QA · Embedded",
  description:
    "Portfolio of Marc Adrian M. Cuano — Software Engineer, QA Test Specialist, and Embedded Systems Programmer based in Batangas City, Philippines.",
  keywords: [
    "Marc Adrian Cuano",
    "Software Engineer",
    "Web Developer",
    "Embedded Systems",
    "QA Engineer",
    "React",
    "Next.js",
    "Arduino",
    "Flutter",
  ],
  authors: [{ name: "Marc Adrian M. Cuano" }],
  openGraph: {
    title: "Marc Adrian M. Cuano — Developer Portfolio",
    description:
      "Full-stack web, mobile, and embedded systems engineer with a QA-first mindset.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/berrylogo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0b0f19] text-white antialiased">
        {children}
      </body>
    </html>
  );
}