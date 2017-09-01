import React from 'react'
import { Container, Jumbotron } from 'reactstrap'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Landing = React.createClass({
  render () {
    return (
      <div>
        <Container>
          <Navigation />
          <div className='text-sm-center'>
            <img
              src={'_public/img/harazd.jpg'}
              className='img-fluid img-thumbnail'
              alt='Responsive image'
            />
          </div>
          <Jumbotron>
            <h2 className='text-center'>
              Виробничо-транспортне підприємство 'ГаразД'
            </h2>
            <ul type='square'>
              <li> Цемент</li>
              <li><Link to='/services'>Щебінь</Link></li>
              <li><Link to='/services'>Пісок</Link></li>
              <li><Link to='/services'>Гранітний відсів</Link></li>
              <li>
                <Link to='/price'>
                  Гуртова та роздрібна торгівля<br />
                  будівельними та господарськими товарами
                </Link>
              </li>
              <li><Link to='/services'>Надання транспортних послуг</Link></li>
              <li><Link to='/products'>Виробництво піноблоків</Link></li>
              <li> Будівельно-монтажні роботи</li>
            </ul>
          </Jumbotron>
        </Container>
        <Footer />
      </div>
    )
  }
})

export default Landing
