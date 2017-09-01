import React from 'react'
import { Container } from 'reactstrap'
import Navigation from './Navigation'
import Map from './Map'
import Footer from './Footer'
import Icon from './Icon'

const Contacts = React.createClass({
  render () {
    const location = { lat: 48.6873109, lng: 24.6135303 }
    return (
      <div>
        <Container>
          <Navigation />
          <figure className='text-center'>
            <img
              src='_public/img/pinoblock.jpg'
              className='img-fluid img-thumbnail'
              alt='Responsive image'
            />
          </figure>
          <div className='row p-2'>
            <div className='col-sm-4'>
              <h5 className=' font-weight-bold text-center my-1'>
                Як нас знайти ?
              </h5>
              <hr />
              <Icon icon='addressCard' width={2} color='antiquewhite' />
              <p>
                вул. Залізнична, 6а,<br /> с. Лісна Тарновиця,<br />
                Надвірнянський р-н.,<br /> Івано-Франківська обл., 78422
              </p>
              <hr />
              <Icon icon='boss' width={2} color='antiquewhite' />
              <p>
                Ген. директор: <br />
                Гараздюк Василь Дмитрович
              </p>
              <hr />
              <Icon icon='clock' width={2} color='antiquewhite' />
              <p>
                8:00 - 17:30 (Пн. - Пт.)<br />
                8:00 - 13:00 (Сб.)
              </p>
              <hr />
            </div>
            <div className='col-sm-8'>
              <Map center={location} marker={{position: location, defaultAnimation: 2}} zoom={15} />
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    )
  }
})

export default Contacts
