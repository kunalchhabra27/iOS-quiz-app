import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'iOS Quiz Neon Lab',
  description: 'Interactive MCQ trainer for Swift, SwiftUI, Combine, Xcode, architecture, testing and SwiftData.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
