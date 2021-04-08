import React, { useState } from 'react'
import './Input.css'

export default props => {

    const [value, setValue] = useState("");
    const [all, setAll] = useState([]);
    const [button, setButton] = useState("-");

    return (
        <div className="Input">

            <h2>Crie uma nova tarefa!</h2>

            <div className="AddTask">

                <form onSubmit={
                    e => {
                        e.preventDefault();
                        if (!!value) {
                            setAll([...all, value])
                            setValue("");
                        }
                        return;
                    }}>
                    <input type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)} />
                    <button type="submit">+</button>

                </form>

                <div className="ItemList">
                    <ul>
                        {all.map((all, index) => (
                            <li key={index}>{all}</li>
                        ))}
                        {all.map((all, index) => (
                            <button key={index}>{button}</button>
                        )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}