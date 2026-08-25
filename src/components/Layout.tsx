import { Link, NavLink, Outlet } from 'react-router-dom';

import { routes } from '../routes';
import './Layout.scss';

export default function Layout() {
  return (
    <div className="layout">
      <aside className="layout__sidebar">
        <Link to="/" className="layout__brand">
          React UI Practice
        </Link>

        <nav className="layout__nav">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={`/${route.path}`}
              className={({ isActive }) =>
                isActive ? 'layout__link layout__link--active' : 'layout__link'
              }
            >
              {route.title}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="layout__main">
        <Outlet />
      </main>
    </div>
  );
}
