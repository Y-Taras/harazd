import React from 'react'
import { Container, Row } from 'reactstrap'
import Icon from './Icon'

const Footer = () => {
  return (
    <Container className='mt-1'>
      <Row className='justify-content-around align-items-center'>
        <div className='col-sm'>
          <div className='myFlexFooterItems'id='mobile'>
            <Icon icon='mobile' width={1.5} color='darkgrey' />
            <p>067 343 15 18
              <br /> 050 622 13 43 </p>
          </div>
        </div>
        <div className='col-sm'>
          <div className='myFlexFooterItems'>
            <Icon icon='envelope' width={2} color='darkgrey' />
            <p>harazd@ukr.net</p>
          </div>
        </div>
        <div className='col-sm'>
          <div className='myFlexFooterItems'>
            <Icon icon='addressCard' width={2} color='darkgrey' />
            <p>с. Лісна Тарновиця,
              <br /> Надвірнянський р-н.
            </p>
          </div>
        </div>
      </Row>
      <p className='text-sm-center author'>
        верстка та дизайн сайту "Y-studio"&nbsp;|&nbsp;
        <a href='https://kapeluh.com'
          target='_blank'>www.kapeluh.com</a>
      </p>
    </Container>
  )
}
export default Footer
