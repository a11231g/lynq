import React from 'react'
import Box from '@material-ui/core/Box'
import RemoveIcon from '@material-ui/icons/Remove'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import AddIcon from '@material-ui/icons/Add'
import {
  decrease,
  increase,
  deleteItem
} from '../../redux/Modules/shoppingCard'
import { connect } from 'react-redux'
import withStyles from '@material-ui/core/styles/withStyles'
import styles from './styles'

class ShoppingCardItem extends React.PureComponent {
  render () {
    const { beer, classes } = this.props
    return (
      <Box
        display='flex'
        justifyContent='center'
        directrion={'row'}
        className={classes.wrapper}
      >
        <Box className={classes.container2}>
          <Box style={{ width: 50 }}>
            <img
              src={beer.image_url}
              alt={'beer'}
              className={classes.mainContainer}
            />
          </Box>
          <Box className={classes.price}>{beer.abv}$</Box>
        </Box>
        <Box className={classes.grow}>
          <Box className={classes.title}>{beer.name}</Box>
          <Box className={classes.description}>additional information here</Box>
        </Box>
        <Box>
          <Box
            display='flex'
            justifyContent='center'
            directrion={'row'}
            style={{ display: 'flex' }}
          >
            <Box
              className={classes.minues}
              onClick={() => {
                this.props.decrease(beer)
              }}
            >
              <RemoveIcon className={classes.remove} />
            </Box>
            <Box className={classes.count}>{beer.count}</Box>
            <Box
              className={classes.plus}
              onClick={() => {
                this.props.increase(beer)
              }}
            >
              <AddIcon />
            </Box>
          </Box>
        </Box>
        <Box>
          <DeleteForeverIcon
            className={classes.deleteIcon}
            onClick={() => {
              this.props.deleteItem(beer)
            }}
          />
        </Box>
      </Box>
    )
  }
}

const mapDispatchToProps = {
  increase,
  decrease,
  deleteItem
}

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(ShoppingCardItem))
