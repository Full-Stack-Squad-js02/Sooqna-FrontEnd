import React from 'react';
import MyProductLogo from '../../Assests/my-products.png';
import MyOrderLogo from '../../Assests/my-orders.png';
import { useNavigate } from 'react-router-dom';

export default function UserPage() {
    const navigate = useNavigate();
    return (
        <>
            <img src={MyProductLogo} onClick={() => { navigate('/myproducts'); }} />
            <img src={MyOrderLogo} onClick={() => { navigate('/myorders'); }} />
        </>
    )
}
