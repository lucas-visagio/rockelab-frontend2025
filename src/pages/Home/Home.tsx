import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "../component/Counter";


const Home = () => {

    const navigate = useNavigate();

    const [count, setCount] = useState<number>(0);
    const [count2, setCount2] = useState<number>(0);
    const [count3, setCount3] = useState<number>(0);

    return (
        <>
            <div className="flex flex-row gap-4">
               
                {/* <button onClick={() => navigate('/test')}>Test</button> */}
                <Counter setCount={setCount} count={count} />
                <Counter setCount={setCount2} count={count2} />
                <Counter setCount={setCount3} count={count3} />
            </div>
        </>
    )
}

export default Home;