import { useState } from 'react'


function Counter({ printValueCount }) {

    let [value, setValue] = useState(0)

    // let count = 0; // Normal variable
    function incriment() {
        // count++;

        // setValue(value + 1);
        // setValue(value + 1);
        // setValue(value + 1);
        // setValue((prev) => prev + 1)
        // setValue((prev) => prev + 1)
        // setValue((prev) => prev + 1)

        // setValue(value++)
        // setValue(value++)
        // setValue(value++)

        setValue(++value)
        printValueCount(value++)

        // setValue(++value)
        // setValue(++value)

    }

    function decriment() {
        // count--;
        setValue(--value)
        printValueCount(value--)
    }

    return (
        <div>
            <h1>Counter</h1>

            <button onClick={incriment}>+</button>
            <p>{value}</p>
            <button onClick={decriment}>-</button>
        </div>
    )
}

export default Counter