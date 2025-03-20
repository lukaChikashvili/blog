import NavBar from "../components/NavBar";
import { ThemeProvider } from "next-themes";

export default function Layout({ children}: Readonly<{children: React.ReactNode}>) {
   return (
    <ThemeProvider attribute="class"  defaultTheme="system" enableSystem >
        <NavBar />
        {children}
    </ThemeProvider>
   )
}