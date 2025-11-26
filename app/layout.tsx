import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0e0f13] text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
