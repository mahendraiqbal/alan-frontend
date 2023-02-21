import React from 'react';
import './style.css'

export default function AddProduct() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Tambahkan Menu Makanan yang ada di resto
                </div>
                <div className="card-body">
                    <a href="/AddFood" className="btn btn-primary">+ Tambah Menu</a>
                </div>
            </div >
        </>
    )
}
