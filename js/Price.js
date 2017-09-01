import React, { Component, PropTypes } from 'react'
import { Container, Table } from 'reactstrap'
import shortid from 'shortid'
import { connect } from 'react-redux'
import { getGSheetsData } from './actionCreactors'
import Navigation from './Navigation'
import Footer from './Footer'

class Price extends Component {
  componentDidMount () {
    this.props.dispatch(getGSheetsData())
  }

  tableBodyData () {
    const convertT = (data) => {
      let arr = data.split(/(?:,\s)?_[a-z\d]+:\s/g)
      arr.shift()
      return arr
    }
    return (
      this.props.gSheetsData.map((item, index) => {
        let rowInput = convertT(item.content.$t)
        return (
          <tr key={shortid.generate()}>
            <td>{index + 1}</td>
            <td>
              <span>{item.title.$t}</span>
            </td>
            <td>{rowInput[0]}</td>
            <td>{rowInput[1]}</td>
            <td>{rowInput[2]}</td>
          </tr>)
      }))
  }

  render () {
    var updateDate = new Date(this.props.gSheetsData[0] ? this.props.gSheetsData[0].updated.$t : null)

    return (
      <div>
        <Container>
          <Navigation />
          <h4 className='text-center'>Перелік товарних пропозицій: </h4>
          <Table hover bordered responsive size='sm'>
            <thead>
              <tr>
                <th>#</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
              </tr>
            </thead>
            <tbody>
              { this.tableBodyData() }
            </tbody>
          </Table>
          <p>Ціни станом на {updateDate.toLocaleDateString('en-GB')}.</p>
        </Container>
        <Footer />
      </div>)
  }
}

Price.propTypes = {
  gSheetsData: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    gSheetsData: state.gSheetsData
  }
}

export default connect(mapStateToProps)(Price)
