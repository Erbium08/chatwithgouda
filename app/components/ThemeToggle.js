'use client';
import { useTheme } from '../ThemeProvider';

export default function ThemeToggle() {
  const { theme, changeTheme } = useTheme();
  
  return (
    <div className="theme-toggle">
      <button 
        className={`theme-button light-theme ${theme === 'light' ? 'active' : ''}`}
        onClick={() => changeTheme('light')}
        aria-label="Light theme"
      />
      <button 
        className={`theme-button dark-theme ${theme === 'dark' ? 'active' : ''}`}
        onClick={() => changeTheme('dark')}
        aria-label="Dark theme"
      />
      <button 
        className={`theme-button brown-theme ${theme === 'brown' ? 'active' : ''}`}
        onClick={() => changeTheme('brown')}
        aria-label="Brown theme"
      />
    </div>
  );
}