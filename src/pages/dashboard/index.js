import React, { useEffect, useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Card from '../../components/Card';

import { getFood } from "../../utils/food"

export default function Dashboard() {
    const [food, setFood] = useState([]);
    const [isNotGet, setIsNotGet] = useState(true);

    const fetchData = () => {
        getFood()
            .then((res) => {
                console.log(res)
                setFood(res.data)
            })
            .catch((err) => {
                console.log(err)
            });
    };

    useEffect(() => {
        if (food.length === 0 && isNotGet) {
            fetchData();
            setIsNotGet(false);
        }
    }, [food, isNotGet])

    return (
        <>
            <main>
                <Navbar />
                <div className='row'>
                    <div className='col-md-4 food'>
                        <Link style={{ textDecoration: 'none' }}
                            to={`/Food`}>
                            <div>Food</div>
                        </Link>
                    </div>
                    <div className='col-md-8 transaction'>
                        <Link style={{ textDecoration: 'none' }}
                            to={`/`}>
                            <div>Transaksi</div>
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='row col-md-8'>
                        {food.map((foods) => {
                            return (
                                <>
                                    <Card
                                        id={foods.id}
                                        food_name={foods.food_name}
                                        image={foods.image}
                                        price={foods.price}
                                    />
                                </>
                            )
                        })}
                    </div>
                    <div className='col-md-4'>Pesanan</div>
                </div>
            </main>
        </>
    )
}
