import React from "react";

export default class Botones extends React.Component{
    render() {
        return (
            <div>
                <button onClick={() => alert('Mensaje 1')}>Modulo 1</button>
                <button onClick={() => alert('Mensaje 2')}>Modulo 2</button>
            </div>
        )
    }
}

