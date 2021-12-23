import React, { useEffect, useState } from 'react'
import { data } from '../../jsonData'
import './Body.css'

function Body() {
    const [dat, setDat] = useState([])
    const [condition, setCondition] = useState('category')
    const [add, setAdd] = useState([])
    useEffect(() => {
        setDat(data);
        console.log(data);
    }, [])
    const option = () => {
        setCondition(document.getElementById('opt').value)
    }
    const AddCart = (index) => {
        var temp = dat.map((obj, i) => {
            if (index == i) {
                setAdd([...add, obj])
                localStorage.setItem('pqrs', JSON.stringify(add))
                console.log(add);
            }
            else
                return obj;
        })
    }
    return (
        <div className='mainBody'>
            <div className='ml-5 mt-3'>
                <select className='btn btn-info' onChange={option} name="category" id='opt'>
                    <option value="category">Categories</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Vegetables">Vegetables</option>
                </select>
            </div>
            <div className="container">
                <div className='row'>
                    {
                        dat.map((obj, index) => {
                            if (obj.category == condition) {
                                return (
                                    <div className="card col-12 col-md-4" style={{ width: "15rem;" }}>
                                        <img className="card-img-top img-fluid img" src={obj.imgId} alt='Image Here' />
                                        <div className="card-body">
                                            <h5 className="card-title">{obj.name}</h5>
                                            <b className="card-text">Price : {obj.price}<img src="https://img.icons8.com/material/16/000000/rupee--v1.png" /></b><br />
                                            {obj.available ? <button className='btn btn-success mt-3' onClick={() => { AddCart(index) }}>Add To Cart</button> : <h5 className='mt-3 mb-0'>Product Out of stock</h5>}
                                            <br /><i className="card-text">Vendor : {obj.vendor}</i>
                                            {obj.available ? <img src="https://img.icons8.com/external-bearicons-gradient-bearicons/64/000000/external-In-Stock-miscellany-texts-and-badges-bearicons-gradient-bearicons.png" /> : <img src="https://img.icons8.com/material-rounded/50/000000/out-of-stock.png" />}
                                        </div>
                                    </div>
                                )
                            }
                            else if (condition == "category") {
                                return (
                                    <div className="card col-12 col-md-4" style={{ width: "15rem;" }}>
                                        <img className="card-img-top img-fluid img" src={obj.imgId} alt="Image Here" />
                                        <div className="card-body">
                                            <h5 className="card-title">{obj.name}</h5>
                                            <b className="card-text">Price : {obj.price} <i class="fas fa-rupee-sign"></i></b><br />
                                            <button className='btn btn-success mt-3' onClick={() => { AddCart(index) }}>Add To Cart</button><br />
                                            <i className="card-text">Vendor : {obj.vendor}</i>
                                            {obj.available ? <img src="https://img.icons8.com/external-bearicons-gradient-bearicons/64/000000/external-In-Stock-miscellany-texts-and-badges-bearicons-gradient-bearicons.png" /> : <img src="https://img.icons8.com/material-rounded/50/000000/out-of-stock.png" />}
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Body
