// export default function Home({age}) {
//     {
//         return age > 18 ? <h2>Welcome</h2> : <h2>Not allowed</h2>;
//     }
// };

// export default function Home({age}) {
//     {
//         return age > 18 && <h2>Welcome</h2>;
//     }
// };

// export default function Home({age}) {
//     const handleClick = () => {
//         alert("Hello");
//     };
//     const handleSubmit = (name) => {
//         alert(`Hello ${name}`);
//     };
//     return (
//         <>
//             <h2>Hello world</h2>
//             <button onClick={handleClick}>Click</button>
//             <button onClick={() => handleSubmit("Prem")}>Submit</button>
//         </>
//     )
// }

import { useState } from "react"
export default function Home() {
    const [score, setScore] = useState(0);
    const increment = () => {
        setScore(score + 1);
    }
    const decrement = () => {
        setScore(score - 1);
    }
    return (
        <>
            <p>{score}</p>
            <button onClick={increment}>Increment Score</button>
            <button onClick={decrement}>Decrement Score</button>
        </>
    );
}
