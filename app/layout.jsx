import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Providers from "./providers";
import ThemeSwitcher from "./ThemeSwitcher";

const nunito_sans = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Countries Wiki",
  description: "Frontend Mentor Challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito_sans.className}>
        <Providers>
          <ThemeSwitcher />
          {children}
        </Providers>
      </body>
    </html>
  );
}
