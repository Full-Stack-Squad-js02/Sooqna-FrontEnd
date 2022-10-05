import React, { useEffect, useState } from 'react';
import { MDBListGroup, MDBListGroupItem, MDBBadge , MDBBtn} from 'mdb-react-ui-kit';
import { getAllOrdersToSumbit , approveOrders,deleteOneOrder } from '../../api/api'
import { isAuthenticated } from '../../auth';

export default function SubmitOrder() {

  const [orders, setOrders] = useState([]);

  const { token } = isAuthenticated();

  const orderDetails = async () => {
    let x = await getAllOrdersToSumbit(token);
    setOrders(x)
  }
  
  // console.log('LLLLLLLLLLLLL', orders)
  useEffect(() => {
    orderDetails()
  }, [orders])


  return (
    <MDBListGroup style={{ minWidth: '22rem', alignItems: 'center' ,marginTop: '7rem',
      paddingBottom: '28rem'
    }} light>
      <h1>Confirmed Orders</h1>
       <MDBListGroupItem style={{ backgroundColor: '#b7d3f2', borderRadius: '15px' }}  className='d-flex justify-content-between align-items-center w-50 mx-5 my-3'>
        <h5 >Order ID </h5>
        <h5 >Status</h5>
        <h5 style={{ marginRight: '9rem' }}>Actions</h5>
      </MDBListGroupItem>
      {orders ? orders.map((o,idx) => {
        return(
          <MDBListGroupItem style={{ backgroundColor: '#f7f9f9', borderRadius: '15px' }} className='d-flex justify-content-between align-items-center w-50 mx-5 my-3' key={idx}>
            <div>
              <div className='fw-bold'>Order #{o.id}</div>
              <div className='text-muted'> {o.createdAt}</div>
              <div className='text-muted'>To {o.adress}</div>
            </div>
            <MDBBadge pill light color='primary'>
              {o.status}
            </MDBBadge>
            <MDBBtn size='sm' className='m-1' style={{
              backgroundColor: 'rgb(59, 89, 152)',
              fontWeight: '700', borderRadius: '24px', marginRight: '-11rem'
            }} href='#' onClick={() => {deleteOneOrder(o.id,token) }}>
              Reject
            </MDBBtn>
            <MDBBtn size='sm' className='m-1' style={{backgroundColor: 'rgb(59, 89, 152)',
              fontWeight: '700', borderRadius: '24px'
            }} href='#' onClick={() => {approveOrders(token)}}>
              Checkout To Delivery
            </MDBBtn>
          </MDBListGroupItem>
        )
      }):null}


    </MDBListGroup>
  );
}

