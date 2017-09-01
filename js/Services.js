import React from 'react'
import {
  Card,
  CardGroup,
  CardBlock,
  CardTitle,
  CardText,
  CardImg,
  Container,
  Jumbotron
} from 'reactstrap'
import Navigation from './Navigation'
import Footer from './Footer'

const Services = () => {
  return (
    <div>
      <Container>
        <Navigation />
        <Jumbotron className='text-center'>
          <img
            src='_public/img/serviceBigPict.jpg'
            className='img-fluid my-1'
            width='75%'
            alt='Responsive image'
          />
          <h5 className='font-weight-bold'>
            Доставка піску,щебеню,гранітного відсіву по доступних цінах та в вигідний для Вас час.
          </h5>
        </Jumbotron>
        <CardGroup className='servicesCard text-center'>
          <Card block outline color='secondary'>
            <CardBlock>
              <CardTitle>Щебінь</CardTitle>
              <CardText>
                Щебінь будь-яких фракцій Пасічнянського карєру, річковий щебінь
              </CardText>
            </CardBlock>
            <CardImg
              width='100%'
              src='_public/img/shchebin.jpeg'
              alt='Card image'
            />
          </Card>
          <Card block outline color='secondary'>
            <CardBlock>
              <CardTitle>Пісок</CardTitle>
              <CardText>
                Пісок рогатинський білий, долинський зелений, річковий митий
              </CardText>
            </CardBlock>
            <CardImg
              width='100%'
              src='_public/img/pisok.jpeg'
              alt='Card image'
            />
          </Card>
          <Card block outline color='secondary'>
            <CardBlock>
              <CardTitle>Відсів граніту</CardTitle>
              <CardText>
                Гранітний відсів вінницького, житомирського або пасічнянського карєру
              </CardText>
            </CardBlock>
            <CardImg
              width='100%'
              src='_public/img/vidsiv.jpg'
              alt='Card image'
            />
          </Card>
          <Card block outline color='secondary'>
            <CardBlock>
              <CardTitle>Оренда автотранспорту</CardTitle>
              <CardText>
                Будь які вантажні перевезення здійснюються по замовленню до 300 км
              </CardText>
            </CardBlock>
            <CardImg
              width='100%'
              src='_public/img/kamaz.jpg'
              alt='Card image'
            />
          </Card>
        </CardGroup>
      </Container>
      <Footer />
    </div>
  )
}

export default Services
