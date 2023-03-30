import "../styles/reset.css";
import "../styles/index.css";
import "../styles/theme.css";
import { Header } from "@/components";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Github Profile</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
