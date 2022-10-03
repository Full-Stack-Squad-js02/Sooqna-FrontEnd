import React, { useEffect, useState } from 'react';
import { MDBListGroup, MDBListGroupItem, MDBBadge , MDBBtn} from 'mdb-react-ui-kit';
import { getAllOrdersToSumbit , approveOrders } from '../../api/api'
import { isAuthenticated } from '../../auth';

export default function SubmitOrder() {

  const [orders, setOrders] = useState([]);

  const { token } = isAuthenticated();

  const orderDetails = async () => {
    let x = await getAllOrdersToSumbit(token);
    setOrders(x)
  }
  
  console.log('LLLLLLLLLLLLL', orders)
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
           
            </div>
            <MDBBadge pill light color='primary'>
              {o.status}
            </MDBBadge>
            <MDBBtn size='sm' className='m-1' style={{ backgroundColor: '#3b5998', backgroundColor: 'rgb(59, 89, 152)',
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

