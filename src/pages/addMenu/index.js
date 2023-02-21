import React, { useState } from 'react'

import { addFood } from "../../utils/food"

export default function AddMenu() {
    const [data, setData] = useState({
        food_name: '',
        image: '',
        price: ''
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value,
        });
    };

    const handleSubmit = () => {
        const body = {
            food_name: data.food_name,
            // image: data.image,
            price: data.price,
        }
        console.log(body)
        addFood(body)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <>
            <div className="card">
                <div className="card-header mt-2">
                    Tambahkan Menu
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Nama Menu</label> <br />
                            <input type="text" className="col-md-12" name='food_name' onChange={handleChange} />
                        </div>
                        <div>
                            <label>Gambar</label> <br />
                            <input type="file" className="col-md-12" name='image' onChange={handleChange} />
                        </div>
                        <div>
                            <label>Harga</label> <br />
                            <input type="text" className="col-md-12" name='price' onChange={handleChange} />
                        </div>
                        <button type='submit' onClick={handleSubmit}>Simpan</button>
                    </form>
                </div>
            </div >
        </>
    )
}
