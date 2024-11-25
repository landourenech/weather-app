// import "./globals.css";

export const metadata = {
  title: {
    template: "Weather-app",
    default: "Weather-app",
  },
  description: "Weather-app is an app to check the weather in the metro.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
