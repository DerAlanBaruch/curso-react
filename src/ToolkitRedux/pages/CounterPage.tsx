import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { decrement, increment, incrementByAmount } from "../store/slices";

export const CounterPage: FC = () => {
  const { counter } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header>
        <h1>Counter with Redux: {counter}</h1>
        <p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => dispatch(increment())}
          >
            <span>Increment</span>
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => dispatch(decrement())}
          >
            <span>Decrement</span>
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => dispatch(incrementByAmount(2))}
          >
            <span>Increment by 2</span>
          </button>
        </p>
      </header>
    </div>
  );
};
