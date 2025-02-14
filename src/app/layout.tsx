import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical assessment",
  description: "Technical assessment list change mode",
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
