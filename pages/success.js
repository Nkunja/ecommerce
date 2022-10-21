import React, {useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
// import { useRouter } from 'next/router';

import { useStateContext } from '../context/StateContext';
import { runFireWorks } from '../lib/utils';

const Success= () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect (() =>{
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireWorks();
    }, []);
    // const [order, setOrder] = useState(null);
  return (
    <div className="success-wrapper">
        <div className="success">
            <p className="icon">
                <BsBagCheckFill />
            </p>
            <h2>Thank You For Shopping With Us</h2>
            <p className="email-msg">Check Your Email Inbox for your Receipt</p>
            <p className="description">
                In case of any questions Please email at:
                <a className="email" href="mailto: munene01denis@gmail.com">munene01denis@gmail.com</a>
            </p>
            <Link href="/">
                <button type="button" width="300px" className="btn">
                    Continue Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success