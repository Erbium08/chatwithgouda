import ThemeToggle from './components/ThemeToggle';
import ChatInterface from './components/ChatInterface';
import AdPlaceholder from './components/AdPlaceholder';
import CheeseIcon from './components/CheeseIcon';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <CheeseIcon />
          <span>ChatWithGouda</span>
        </div>
        <ThemeToggle />
      </header>
      
      <div className="content-wrapper">
        <div className="main-content">
          <ChatInterface />
        </div>
        
        <aside className="sidebar">
          <AdPlaceholder type="ad-sidebar" text="Google Ad (Sidebar Top)" />
          <AdPlaceholder type="ad-sidebar" text="Google Ad (Sidebar Middle)" />
          <AdPlaceholder type="ad-sidebar" text="Google Ad (Sidebar Bottom)" />
        </aside>
      </div>
      
      <Footer />
    </div>
  );
}