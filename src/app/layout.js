import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './globals.css'
import { Inter } from 'next/font/google'
import FooterLayout from './Footer/layout'
import HeaderLayout from "./Header/layout";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderLayout />
        {children}
        <FooterLayout />
        </body>
    </html>
  )
}
