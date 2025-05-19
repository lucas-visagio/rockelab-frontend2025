import { type CounterProps } from "../types/CounterInterface";




export const Counter = ({ count, setCount }: CounterProps) => {
    
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>{count}</p>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}