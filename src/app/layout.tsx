import { Inter } from "next/font/google";
import "../styles/index.scss";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme()
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
