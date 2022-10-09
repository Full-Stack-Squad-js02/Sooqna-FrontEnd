import React, {  useContext } from 'react';
import { MDBListGroup, MDBListGroupItem, MDBBadge, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { confirmOrder, deleteOneOrder, reciveOrder } from '../../api/api'
import { Context } from '../../context/context';

export default function OneOrder() {

  const states = useContext(Context);
  const { token, orders,orderCollection } = states
  // console.log(orderCollection)

  const status = (state) => {
    if (state === 'submitted') return 'info';
    if (state === 'confirmed') return 'warning';
    if (state === 'indelivery') return 'danger';
    if (state === 'recived') return 'success';
  }

  return (
    <MDBListGroup style={{ minWidth: '22rem', margin: '7rem 0', alignItems: 'center', paddingBottom: '28rem' }} light>
          <h1>My Orders</h1>
      <MDBListGroupItem style={{ backgroundColor: '#b7d3f2', borderRadius: '15px' }}  className='d-flex justify-content-between align-items-center w-50 mx-5 my-3'>
        <h5 >Order ID </h5>
        <h5 >Status</h5>
        <h5 style={{ marginRight: '5rem' }}>Actions</h5>
      </MDBListGroupItem>
      
      {orderCollection ?
        // orders.map((o, idx) => {
        // return(
          <MDBListGroupItem style={{ backgroundColor: '#f7f9f9', borderRadius: '15px' }}  className='d-flex justify-content-between align-items-center w-50 mx-5 my-3' >
            <div>
              <div className='fw-bold'>Order #{orderCollection.id}</div>
              <div className='text-muted'> {orderCollection.date}</div>
            <div className='text-muted' style={{ inlineSize: '193px' }}>To {orderCollection.adress}</div>
            </div>
          <MDBBadge pill light color={status(orderCollection.status)}>
              {orderCollection.status}
            </MDBBadge>
            <div style={{ display:'flex'}}>
            {orderCollection.status === 'submitted'?
            
            <button size='sm' className='m-1' style={{
              backgroundColor: 'rgb(59, 89, 152)',
              fontWeight: '700', borderRadius: '15px', marginRight: '-11rem'
              }} href='#' onClick={() => { deleteOneOrder(orderCollection.id,token) }}>
              cancel
            </button>
              : orderCollection.status === 'confirmed' || orderCollection.status === 'recived'?
              <button type="button" class="btn btn-primary" size='sm' className='m-1' style={{
                backgroundColor: 'rgb(59, 89, 152)', color:'white',
                fontWeight: '600', borderRadius: '15px', marginRight: '-11rem',
                opacity: "0.6",
                cursor: "not-allowed"
            
              }} href='#' onClick={() => { reciveOrder(token) }}>
                Recived
              </button>
                : orderCollection.status === 'indelivery'?
              <button type="button" class="btn btn-primary" size='sm' style={{
                backgroundColor: 'rgb(59, 89, 152)', color:'white',
                fontWeight: '600', borderRadius: '15px', marginRight: '-11rem',
             
            
              }} href='#' onClick={() => { reciveOrder(token) }}>
                Recived
              </button>
              :null
            }
            {orderCollection.status === 'submitted'?
             <button type="button" class="btn btn-primary"style={{ backgroundColor: 'rgb(59, 89, 152)',
              fontWeight: '600', borderRadius: '15px'
            }} href='#' onClick={() => { confirmOrder (token)}}>
              Confirm
            </button>
              : orderCollection.status === 'confirmed' ||orderCollection.status === 'recived'  ||orderCollection.status === 'indelivery'?
             <button type="button" class="btn btn-primary"style={{ backgroundColor: 'rgb(59, 89, 152)',
              fontWeight: '600', borderRadius: '15px', opacity: "0.6",
              cursor: "not-allowed"
            }} href='#' onClick={() => { confirmOrder (token)}}>
              Confirm
            </button>:null
        }
        </div>

        </MDBListGroupItem>
        // )
      // })
      :null}
    </MDBListGroup>
  );
}