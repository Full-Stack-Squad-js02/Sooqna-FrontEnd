import React, { useEffect, useState } from 'react';
import { MDBListGroup, MDBListGroupItem, MDBBadge, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { getAllOrdersForUser, confirmOrder } from '../../api/api'
import { isAuthenticated } from '../../auth';

export default function OneOrder() {

  const [orders, setOrders] = useState([]);

  const { token } = isAuthenticated();

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
    <MDBListGroup style={{ minWidth: '22rem', margin: '2rem 0', alignItems: 'center' }} light>
      {orders ? orders.map((o,idx) => {
        return(
          <MDBListGroupItem className='d-flex justify-content-between align-items-center w-50 mx-5 my-3' key={idx}>
            <div>
              <div className='fw-bold'>Order #{o.id}</div>
              <div className='text-muted'>john.doe@gmail.com</div>
            </div>
            <MDBBadge pill light color='primary'>
              {o.status}
            </MDBBadge>
            <MDBBtn size='sm' className='m-1' style={{ backgroundColor: '#3b5998', backgroundColor: 'rgb(59, 89, 152)',
              fontWeight: '700', borderRadius: '24px'
            }} href='#' onClick={() => { confirmOrder (token)}}>
              Confirm
            </MDBBtn>
          </MDBListGroupItem>

        )
      }):null}

      {/* <MDBListGroupItem className='d-flex justify-content-between align-items-center w-50 mx-5 my-3'>
        <div>
          <div className='fw-bold'>Alex Ray</div>
          <div className='text-muted'>alex.ray@gmail.com</div>
        </div>
        <MDBBadge pill light color='primary'>
          Onboarding
        </MDBBadge>
      </MDBListGroupItem> */}

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