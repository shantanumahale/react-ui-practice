# React UI Practice

A deliberately minimal Vite + React + TypeScript playground. Every URL route is a
self-contained page, so you can build or solve one thing without touching anything else.

## Stack

| Purpose      | Package                                  |
| ------------ | ---------------------------------------- |
| Build        | Vite                                     |
| Language     | TypeScript (strict)                      |
| Routing      | React Router                             |
| Styling      | SCSS (`sass`), one `.scss` file per page |
| Global state | Redux Toolkit + React Redux              |
| Server state | TanStack Query                           |

## Getting started

Requires **Node 18+** and **Yarn**.

```bash
yarn          # install
yarn dev      # dev server at http://localhost:5173
```

Other scripts:

```bash
yarn build     # typecheck + production build into dist/
yarn preview   # serve the production build
yarn lint      # oxlint
```

## Adding a practice page

Three steps.

**1.** Create a folder under `src/practice/`:

```
src/practice/my-thing/
  MyThing.tsx
  MyThing.scss
```

**2.** Write the component. Import its stylesheet and pull tokens from `src/styles/_variables.scss`:

```tsx
// MyThing.tsx
import './MyThing.scss';

export default function MyThing() {
  return <div className="my-thing">...</div>;
}
```

```scss
// MyThing.scss
@use '../../styles/variables' as v;

.my-thing {
  color: v.$text;
}
```

**3.** Register it in `src/routes.ts`:

```ts
import MyThing from './practice/my-thing/MyThing';

export const routes: PracticeRoute[] = [
  // ...
  {
    path: 'my-thing',
    title: 'My Thing',
    description: 'What this page is for.',
    component: MyThing,
  },
];
```

That's it. `routes.ts` is the only shared file you edit — it drives the `<Route>` list in
`App.tsx`, the sidebar links, and the index on the home page. The page is now live at
`/my-thing`.

Easiest start: copy `src/practice/playground/` and rename it.

## Layout

```
src/
  main.tsx                  Providers: Redux, TanStack Query, Router
  App.tsx                   Route table, generated from routes.ts
  routes.ts                 Route registry — the one file you edit per new page
  components/
    Layout.tsx / .scss      Sidebar + <Outlet> shell
  pages/
    Home.tsx / .scss        Index of all practice routes
    NotFound.tsx            404
  store/
    index.ts                configureStore + RootState / AppDispatch types
    hooks.ts                Typed useAppDispatch / useAppSelector
    counterSlice.ts          Example slice
  styles/
    _variables.scss         Colors, spacing, fonts
    global.scss             Reset + base element styles
  practice/
    counter/                Redux Toolkit example
    users/                  TanStack Query example
    playground/             Empty page — copy this one
```

## Notes

- **State**: reach for `useState` first. Use Redux only when a page genuinely needs
  shared state; add a slice in `src/store/` and register it in `store/index.ts`.
- **Styling**: plain SCSS with BEM-ish class names, no CSS modules or utility framework.
  Add shared tokens to `_variables.scss`; keep everything else page-local.
- **The `users` page** hits `jsonplaceholder.typicode.com`, so it needs a network
  connection.
