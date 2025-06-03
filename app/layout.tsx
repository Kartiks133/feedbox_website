import './globals.css';
export const metadata = {
  title: "Your App Title",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Add this viewport meta tag inside <head> */}
        <meta
          name="viewport"
          content="width=768, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
