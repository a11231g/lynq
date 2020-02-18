import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Backdrop from '@material-ui/core/Backdrop'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import LocalMallIcon from '@material-ui/icons/LocalMall'
import MaximizeIcon from '@material-ui/icons/Maximize'
import { Swipeable } from 'react-swipeable'
import {
  close,
  open,
  increase,
  decrease
} from '../../redux/Modules/shoppingCard'
import { connect } from 'react-redux'
import ShoppingCardItem from '../../components/shoppingCardItem'
import withStyles from '@material-ui/core/styles/withStyles'
import styles from './styles'

class Collapse extends React.Component {
  swipe = dir => {
    if (dir === 'Down') {
      this.props.close()
    } else {
      this.props.open()
    }
  }
  render () {
    const { classes, shoppingCard } = this.props
    return (
      <React.Fragment>
        <Backdrop
          open={shoppingCard.expand}
          onClick={() => {
            this.swipe('Down')
          }}
          className={classes.backDrop}
        />
        <Swipeable
          onSwiped={eventData => this.swipe(eventData.dir)}
          className={classes.root}
        >
          <ExpansionPanel
            classes={{ root: classes.container }}
            expanded={shoppingCard.expand}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
              onClick={() => {
                this.swipe('Up')
              }}
            >
              <div className={classes.heading}>
                <div className={classes.heading} style={{ height: 10 }}>
                  <MaximizeIcon />
                </div>
                <LocalMallIcon style={{ fontSize: 12 }} />
                Shopping card
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                {shoppingCard.items[shoppingCard.firstItem] ? (
                  <ShoppingCardItem
                    key={`first`}
                    beer={shoppingCard.items[shoppingCard.firstItem]}
                    count={shoppingCard.items[shoppingCard.firstItem].count}
                  />
                ) : null}
              </div>
              <div>
                <ExpansionPanel
                  classes={{ root: classes.secondContainer }}
                  expanded={shoppingCard.expandFull}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel2a-content'
                    id='panel2a-header'
                    className={classes.noHeight}
                  />
                  <ExpansionPanelDetails className={classes.noPadding}>
                    <div className={classes.heading}>
                      {Object.keys(shoppingCard.items).map((item, index) => {
                        if (
                          shoppingCard.items[item].id !== shoppingCard.firstItem
                        ) {
                          return (
                            <ShoppingCardItem
                              key={`rest-${index}`}
                              beer={shoppingCard.items[item]}
                              count={shoppingCard.items[item].count}
                            />
                          )
                        } else {
                          return false
                        }
                      })}
                      <Box className={classes.grow}> tips for waiters</Box>
                      <Box
                        display='flex'
                        justifyContent='center'
                        directrion={'row'}
                        style={{ display: 'flex' }}
                      >
                        <Box className={classes.zero}>ZERO</Box>
                        <Box className={classes.roundup}>ROUND UP</Box>
                        <Box className={classes.roundup}>10%</Box>
                        <Box className={classes.last}>CUSTOM</Box>
                      </Box>
                      <Box
                        display='flex'
                        justifyContent='center'
                        directrion={'row'}
                        style={{ display: 'flex' }}
                      >
                        <Box className={classes.grow}>subTotal</Box>
                        <Box>0</Box>
                      </Box>
                      <Box
                        display='flex'
                        justifyContent='center'
                        directrion={'row'}
                        style={{ display: 'flex' }}
                      >
                        <Box className={classes.grow}>tips</Box>
                        <Box>2$</Box>
                      </Box>
                      <Box
                        display='flex'
                        justifyContent='center'
                        directrion={'row'}
                        style={{ display: 'flex' }}
                      >
                        <Box className={classes.grow}>total</Box>
                        <Box>{Math.floor(shoppingCard.totalPrice + 2)}$</Box>
                      </Box>
                      <Button variant='contained' color='primary' fullWidth>
                        Confirm payment
                      </Button>
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Swipeable>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return { shoppingCard: state.shoppingCard }
}
const mapDispatchToProps = {
  close,
  open,
  increase,
  decrease
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Collapse))
