import './globals.css';
import { ThemeProvider } from './ThemeProvider';
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: 'Chat with Gouda',
  description: 'A minimalist AI chatbot powered by Gouda',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}