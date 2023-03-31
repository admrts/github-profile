import "../styles/reset.css";
import "../styles/index.css";
import "../styles/theme.css";
import { Header } from "@/components";
import { Providers } from "./provider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <head>
          <title>Github Profile</title>
        </head>
        <body>
          <Header />

          <main> {children}</main>
        </body>
      </Providers>
    </html>
  );
}
