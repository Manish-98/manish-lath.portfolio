import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { portfolioData } from '@/data/portfolio';
import { defaultTheme, themes } from '@/theme/themes';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata = {
  title: portfolioData.site.title,
  description: portfolioData.site.description,
};

const themeBootstrapScript = `(() => {
  const themes = ${JSON.stringify(themes)};
  const defaultTheme = '${defaultTheme}';
  const savedTheme = localStorage.getItem('theme');
  const themeName = Object.prototype.hasOwnProperty.call(themes, savedTheme)
    ? savedTheme
    : defaultTheme;

  document.documentElement.setAttribute('data-theme', themeName);

  const palette = themes[themeName];
  Object.entries(palette).forEach(([token, value]) => {
    document.documentElement.style.setProperty('--' + token, value);
  });
})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter antialiased flex flex-col min-h-screen`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
