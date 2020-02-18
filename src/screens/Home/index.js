import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Tabs from '../../components/Tab'
import InnerTabs from '../../components/Tab/belowTabs'
import styles from './style'
import Collapse from '../../components/collapse'
import { connect } from 'react-redux'
import { load, sort } from '../../redux/Modules/beer'
import { load as loadWithPizza } from '../../redux/Modules/beerWithPizza'
import { load as loadWithSteak } from '../../redux/Modules/beerWithSteak'
import { add } from '../../redux/Modules/shoppingCard'

class Home extends React.Component {
  componentDidMount () {
    this.props.load()
    this.props.loadWithPizza()
    this.props.loadWithSteak()
  }

  render () {
    const { AllBeers, add, beerWithPizza, beerWithSteak, sort } = this.props
    return (
      <div>
        <Tabs
          firstComponent={
            <InnerTabs
              item={[
                { label: 'ALL', data: AllBeers },
                { label: 'PIZZA', data: beerWithPizza },
                { label: 'STEAK', data: beerWithSteak }
              ]}
              addToCard={add}
              sort={sort}
            />
          }
          secondComponent={<InnerTabs item={[{ label: 'All FOOD' }]} />}
          thirdComponent={<InnerTabs item={[]} />}
          forthComponent={<InnerTabs item={[]} />}
        />
        <Collapse AllBeers={AllBeers} />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    AllBeers: state.Beer.AllBeers,
    beerWithPizza: state.beerWithPizza.AllBeers,
    beerWithSteak: state.beerWithSteak.AllBeers
  }
}
const mapDispatchToProps = {
  load,
  add,
  loadWithPizza,
  loadWithSteak,
  sort
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Home))
