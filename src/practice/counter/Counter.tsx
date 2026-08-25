import { addBy, decrement, increment, reset } from '../../store/counterSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './Counter.scss';

export default function Counter() {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="counter">
      <h1>Counter</h1>
      <p>Reads and writes Redux state via the typed hooks in <code>src/store/hooks.ts</code>.</p>

      <div className="counter__value">{value}</div>

      <div className="counter__actions">
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(addBy(10))}>+10</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}
