import { Inter } from "next/font/google";
import "../styles/index.scss";
import { Footer, Navbar } from "@/shared/components";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next JS + Sanity",
  description: "Generated by create next app",
};

const theme = createTheme()
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <Navbar />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
