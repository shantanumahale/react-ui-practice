import { useQuery } from '@tanstack/react-query';

import './Users.scss';

interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

export default function Users() {
  const { data, isPending, isError, error, refetch, isFetching } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  return (
    <div className="users">
      <h1>Users</h1>
      <p>Fetched with TanStack Query. Needs an internet connection.</p>

      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? 'Refetching...' : 'Refetch'}
      </button>

      {isPending && <p>Loading...</p>}
      {isError && <p className="users__error">{error.message}</p>}

      <ul className="users__list">
        {data?.map((user) => (
          <li key={user.id} className="users__item">
            <strong>{user.name}</strong>
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
