import React, { useEffect, useState } from 'react';
import { MDBListGroup, MDBListGroupItem, MDBBadge, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { getAllOrdersForUser, confirmOrder, deleteOneOrder, reciveOrder } from '../../api/api'
import { isAuthenticated } from '../../auth';

export default function OneOrder() {

  const [orders, setOrders] = useState([]);

  const { token } = isAuthenticated();

  const status = (state) => {
    if (state === 'submitted') return 'info';
    if (state === 'confirmed') return 'warning';
    if (state === 'indelivery') return 'danger';
    if (state === 'recived') return 'success';
  }

  const orderDetails = async () => {
    let x = await getAllOrdersForUser(token);
    // console.log('RRRRRRRR', x)
    setOrders(x)
  }
  
  // console.log('LLLLLLLLLLLLL', orders)
  useEffect(() => {
    orderDetails()
  }, [orders])


  return (
    <MDBListGroup style={{ minWidth: '22rem', margin: '7rem 0', alignItems: 'center', paddingBottom: '28rem' }} light>
          <h1>My Orders</h1>
      <MDBListGroupItem style={{ backgroundColor: '#b7d3f2', borderRadius: '15px' }}  className='d-flex justify-content-between align-items-center w-50 mx-5 my-3'>
        <h5 >Order ID </h5>
        <h5 >Status</h5>
        <h5 style={{ marginRight: '5rem' }}>Actions</h5>
      </MDBListGroupItem>
      
      {orders ? orders.map((o,idx) => {
        return(
          <MDBListGroupItem style={{ backgroundColor: '#f7f9f9', borderRadius: '15px' }}  className='d-flex justify-content-between align-items-center w-50 mx-5 my-3' key={idx}>
            <div >
              <div className='fw-bold'>Order #{o.id}</div>
              <div className='text-muted'> {o.createdAt}</div>
              <div className='text-muted' style={{inlineSize: '193px'}}>To {o.adress}</div>
            </div>
            <MDBBadge pill light color={status(o.status)}>
              {o.status}
            </MDBBadge>
            {o.status === 'submitted'?
            <MDBBtn size='sm' className='m-1' style={{
              backgroundColor: 'rgb(59, 89, 152)',
              fontWeight: '700', borderRadius: '24px', marginRight: '-11rem'
              }} href='#' onClick={() => { deleteOneOrder(o.id,token) }}>
              cancel
            </MDBBtn>
              : 
              <MDBBtn size='sm' className='m-1' style={{
                backgroundColor: 'rgb(59, 89, 152)',
                fontWeight: '700', borderRadius: '24px', marginRight: '-11rem'
              }} href='#' onClick={() => { reciveOrder(token) }}>
                Recived
              </MDBBtn>
            }
            <MDBBtn size='sm' className='m-1' style={{ backgroundColor: 'rgb(59, 89, 152)',
              fontWeight: '700', borderRadius: '24px'
            }} href='#' onClick={() => { confirmOrder (token)}}>
              Confirm
            </MDBBtn>
          </MDBListGroupItem>

        )
      }):null}


      {/* <MDBListGroupItem className='d-flex justify-content-between align-items-center w-50 mx-5 my-3'>
        <div>
          <div className='fw-bold'>Kate Hunington</div>
          <div className='text-muted'>kate.hunington@gmail.com</div>
        </div>
        <MDBBadge pill light color='warning'>
          Awaiting
        </MDBBadge>
      </MDBListGroupItem> */}
    </MDBListGroup>
  );
}