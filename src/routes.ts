import type { ComponentType } from 'react';

import Counter from './practice/counter/Counter';
import Playground from './practice/playground/Playground';
import Users from './practice/users/Users';

export interface PracticeRoute {
  /** URL segment, e.g. "counter" -> /counter */
  path: string;
  /** Shown in the sidebar and as the page heading. */
  title: string;
  /** One-line note about what this page is for. */
  description: string;
  component: ComponentType;
}

/**
 * The single place to register a practice page.
 *
 * To add one:
 *   1. mkdir src/practice/my-thing
 *   2. add My Thing.tsx + MyThing.scss in there
 *   3. import it above and add an entry to this array
 *
 * It shows up in the sidebar and at /my-thing automatically.
 */
export const routes: PracticeRoute[] = [
  {
    path: 'counter',
    title: 'Counter',
    description: 'Redux Toolkit slice wired up with typed hooks.',
    component: Counter,
  },
  {
    path: 'users',
    title: 'Users',
    description: 'TanStack Query fetching a list from a public API.',
    component: Users,
  },
  {
    path: 'playground',
    title: 'Playground',
    description: 'Empty page. Copy it as the starting point for anything new.',
    component: Playground,
  },
];
