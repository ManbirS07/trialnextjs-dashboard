import '@/app/ui/global.css' //globally defined css rules which we can apply to all applications
import { Inter } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <body className={`${Inter.className} antialiased`}>{children}</body>
    </html>
  );
}
