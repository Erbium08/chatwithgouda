import ThemeToggle from './components/ThemeToggle';
import ChatInterface from './components/ChatInterface';
import CheeseIcon from './components/CheeseIcon';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="container">
      <meta name="google-adsense-account" content="ca-pub-2629682720782125"></meta>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2629682720782125"
     crossorigin="anonymous"></script>
      <header className="header">
        <div className="logo">
          <CheeseIcon />
          <span>GoudaAI</span>
        </div>
        <ThemeToggle />
      </header>
      
      <div className="content-wrapper">
        <div className="main-content">
          <ChatInterface />
        </div>
        
        <aside className="sidebar">
        </aside>
      </div>
      
      <Footer />
    </div>
  );
}