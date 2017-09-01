import React from 'react'
import { Container, CardGroup, Card, CardImg, CardBlock, CardText } from 'reactstrap'
import Navigation from './Navigation'
import Footer from './Footer'

const Products = () => {
  return (<div>
    <Container>
      <Navigation />
      <figure className='text-center'>
        <img src='_public/img/fourImages.jpg' alt='fourImages' width='75%' />
      </figure>
      <Container>
        <p className='font-weight-bold pt-1'>
            Пінобетон є сучасним будівельним матеріалом. У монолітно-каркасному будівництві,
            яке дедалі більше використовується, пінобетон є незамінним будматеріалом.
            Завдяки малій об'ємній вазі і коефіцієнту теплопровідності пінобетонні блоки мають неповторні властивості:
          </p>
        <CardGroup>
          <Card block outline color='secondary' className='text-center'>
            <CardBlock >
              <CardText >Екологічно чистий матеріал, який замінює 18 стандартних цеглин</CardText>
            </CardBlock>
            <CardImg top width='100%' src='_public/img/foamConcreteInWater.jpg' alt='Card image cap' />
          </Card>
          <Card block outline color='secondary' className='text-center'>
            <CardBlock >
              <CardText >Низька теплопровідність, що дає змогу зменшити товщину стіни в 2 рази</CardText>
            </CardBlock>
            <CardImg top width='100%' src='_public/img/archicadRender.jpg' alt='Card image cap' />
          </Card>
          <Card block outline color='secondary' className='text-center'>
            <CardBlock >
              <CardText >Легко піддається обробці, його можна пиляти, обтесувати і забивати цвяхи</CardText>
            </CardBlock>
            <CardImg top width='100%' src='_public/img/foamConcreteSplitted.jpg' alt='Card image cap' />
          </Card>
        </CardGroup>
      </Container>
    </Container>
    <Footer />
  </div>
  )
}
export default Products
