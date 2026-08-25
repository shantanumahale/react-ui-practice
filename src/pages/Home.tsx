import { Link } from 'react-router-dom';

import { routes } from '../routes';
import './Home.scss';

export default function Home() {
  return (
    <div className="home">
      <h1>React UI Practice</h1>
      <p className="home__intro">
        Each route below is a self-contained page. Pick one, or copy{' '}
        <code>src/practice/playground</code> to start something new.
      </p>

      <ul className="home__list">
        {routes.map((route) => (
          <li key={route.path} className="home__item">
            <Link to={`/${route.path}`}>{route.title}</Link>
            <span className="home__desc">{route.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
