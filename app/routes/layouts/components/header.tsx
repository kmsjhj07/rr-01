import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router';

import { Theme } from '~/common/constants';
import { Button } from '~/components/ui/button';
import { useTheme } from '~/hooks/use-theme';

export default function Header() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <header>
      <div className="header-logo">
        <h1>RR V7</h1>
      </div>
      <nav className="header-nav">
        <Link to="#">홈</Link>
        <Link to="#">소개</Link>
      </nav>
      <div className="header-actions">
        <Button variant="ghost" onClick={toggleTheme}>
          {theme === Theme.LIGHT ? <Moon /> : <Sun />}
        </Button>
      </div>
    </header>
  );
}
