/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
// import './Contact.css'

export default function Contact() {
  return (
    <MDBFooter id='contact' style={{ backgroundColor: '#003566' ,
    bottom: '0',
    width: '100%'}} className='text-center text-lg-start text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section style={{margin: '-65px 92px'}}>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" style={{ margin: '0 3px' }} /> {' '}
                <span>vision of SooQna </span>
              </h6>
              <p>
              This site was created to facilitate the buying and selling process for people
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4' style={{textAlign:'initial'}}>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" /> {' '}
                Jordan - Amman
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" /> {' '}
                sooqna@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> {' '} +96270000000
              </p>
              {/* <p>
                <MDBIcon icon="print" className="me-3" /> +96270000000
              </p> */}
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4' style={{ textAlign: 'initial'}}>

              <section>
                <div className='me-5 d-none d-lg-block'>
                  <span>Social Media :</span>
                </div>
                <br />
                <MDBBtn
                  floating
                  className='m-1'
                  style={{ backgroundColor: '#3b5998' }}
                  href='#!'
                  role='button'
                >
                  <MDBIcon fab icon='facebook-f' />
                </MDBBtn>

                <MDBBtn
                  floating
                  className='m-1'
                  style={{ backgroundColor: '#55acee' }}
                  href='#!'
                  role='button'
                >
                  <MDBIcon fab icon='twitter' />
                </MDBBtn>

                <MDBBtn
                  floating
                  className='m-1'
                  style={{ backgroundColor: '#ac2bac' }}
                  href='#!'
                  role='button'
                >
                  <MDBIcon fab icon='instagram' />
                </MDBBtn>
              </section>
                {/* <div class="social-buttons">
                  <a href="#" class="social-buttons__button social-button social-button--facebook" aria-label="Facebook">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social-buttons__button social-button social-button--linkedin" aria-label="LinkedIn">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" class="social-buttons__button social-button social-button--snapchat" aria-label="SnapChat">
                    <i class="fab fa-snapchat-ghost"></i>
                  </a>
                  <a href="#" class="social-buttons__button social-button social-button--github" aria-label="GitHub">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="#" class="social-buttons__button social-button social-button--codepen" aria-label="CodePen">
                    <i class="fab fa-codepen"></i>
                  </a>
                </div> */}
        </MDBCol>

          </MDBRow>
        </MDBContainer>
      </section>
            </MDBContainer>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <span>© 2021 Copyright : </span>
        <a className='text-reset fw-bold' href='https://sooqna.com/'> sooqna.com </a>
      </div>
    </MDBFooter>
  );
}