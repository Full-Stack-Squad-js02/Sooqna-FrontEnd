import React, { useState } from 'react';
import { MDBListGroup, MDBListGroupItem, MDBBadge } from 'mdb-react-ui-kit';
import { createOrder } from '../../api/api'

export default function OneOrder() {

  const [order, setOrder] = useState({});

  const orderDetails = async () => {
    let x = await createOrder();
  }

  // console.log(createOrder());

  return (
    <MDBListGroup style={{ minWidth: '22rem', margin:'2rem 0', alignItems:'center' }} light>
      <MDBListGroupItem className='d-flex justify-content-between align-items-center w-50 mx-5 my-3'>
        <div>
          <div className='fw-bold'>John Doe</div>
          <div className='text-muted'>john.doe@gmail.com</div>
        </div>
        <MDBBadge pill light color='success'>
          Active
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-center w-50 mx-5 my-3'>
        <div>
          <div className='fw-bold'>Alex Ray</div>
          <div className='text-muted'>alex.ray@gmail.com</div>
        </div>
        <MDBBadge pill light color='primary'>
          Onboarding
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-center w-50 mx-5 my-3'>
        <div>
          <div className='fw-bold'>Kate Hunington</div>
          <div className='text-muted'>kate.hunington@gmail.com</div>
        </div>
        <MDBBadge pill light color='warning'>
          Awaiting
        </MDBBadge>
      </MDBListGroupItem>
    </MDBListGroup>
  );
}