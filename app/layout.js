import './globals.css';
import { ThemeProvider } from './ThemeProvider';

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
        </ThemeProvider>
      </body>
    </html>
  );
}