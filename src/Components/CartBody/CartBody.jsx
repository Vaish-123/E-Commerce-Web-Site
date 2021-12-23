import React, { useState } from 'react'

function CartBody() {
    const [state, setstate] = useState([])
    const abc = () => {
        var temp = JSON.parse(localStorage.getItem('lclstore'))
        setstate([state, temp])
        state.map((obj) => {
            <h1>{obj.name}</h1>
            console.log(obj);
        })

    }
    return (
        <div>
            <button className='btn btn-primary' onClick={() => { abc() }}>Click To View</button>
        </div>
    )
}

export default CartBody
