import { type LinksFunction, Outlet } from 'react-router';

import Header from './components/header';
import styles from './default-layout.css?url';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <footer>푸터</footer>
    </>
  );
}
