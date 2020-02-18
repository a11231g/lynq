import React from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import GridList from '@material-ui/core/GridList'
import styles from './styles'
function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      key={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps (index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  }
}

const useStyles = makeStyles(theme => styles(theme))

export default function FullWidthTabs (props) {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState(0)
  const [beer, setBeer] = React.useState({})
  const [open, setOpen] = React.useState(false)

  const showModal = beer => {
    setOpen(true)
    setBeer(beer)
  }
  const handleCloseModal = () => {
    setOpen(false)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = index => {
    setValue(index)
  }

  const addToCard = () => {
    handleCloseModal()
    props.addToCard && props.addToCard(beer)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static' color='default' className={classes.noBoxShadow}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          centered
          aria-label='full width tabs example'
          classes={{
            indicator: classes.indicator,
            selected: classes.selectedTab,
            root: classes.tabContainer
          }}
        >
          {props.item.map((tab, index) => {
            return (
              <Tab
                key={`tab-${index}`}
                classes={{ selected: classes.selectedTab }}
                label={tab.label}
                {...a11yProps(0)}
                className={classes.unactiveTab}
              />
            )
          })}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {props.item.map((tab, index) => {
          return (
            <TabPanel
              value={value}
              key={`tabPanel-${index}`}
              index={index}
              dir={theme.direction}
            >
              <div>
                {tab.label === 'ALL' ? (
                  <React.Fragment>
                    <Button
                      color='primary'
                      variant={'outlined'}
                      onClick={() => {
                        props.sort('cheap')
                      }}
                    >
                      cheapest
                    </Button>
                    <Button
                      color='primary'
                      variant={'outlined'}
                      onClick={() => {
                        props.sort('expensive')
                      }}
                    >
                      most expensive
                    </Button>
                  </React.Fragment>
                ) : null}

                <Modal
                  aria-labelledby='transition-modal-title'
                  aria-describedby='transition-modal-description'
                  className={classes.modal}
                  open={open}
                  onClose={handleCloseModal}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500
                  }}
                >
                  <Fade in={open}>
                    <div className={classes.paper}>
                      <Button
                        className={classes.close}
                        onClick={handleCloseModal}
                      >
                        close
                      </Button>
                      <Box
                        display='flex'
                        justifyContent='center'
                        directrion={'row'}
                        style={{ display: 'flex', width: '100%' }}
                        width={1}
                      >
                        <Box style={{ width: '70%' }}>
                          <Box className={classes.modalTitle} mb={1}>
                            {beer.name}
                          </Box>
                          <Box className={classes.modalDescription}>
                            {beer.tagline}
                          </Box>
                          <Box className={classes.modalDescription}>
                            {beer.abv}
                          </Box>
                          <Box className={classes.modalDescription}>
                            <p className={classes.modalDescription}>
                              {beer.description}
                            </p>
                          </Box>
                          <Box className={classes.modalDescription}>
                            {beer.food_pairing}
                          </Box>
                        </Box>
                        <Box>
                          <img
                            src={beer.image_url}
                            className={classes.ModalImage}
                            alt={'beer'}
                          />
                        </Box>
                      </Box>
                      <Box
                        style={{ display: 'flex', justifyContent: 'flex-end' }}
                      >
                        <Button
                          className={classes.addToCard}
                          onClick={addToCard}
                        >
                          Add to card
                        </Button>
                      </Box>
                    </div>
                  </Fade>
                </Modal>
              </div>
              <GridList key={tab.label + '-list'} cols={3}>
                {tab.data.map((beer, index) => {
                  return (
                    <ListItem
                      button
                      key={`listItem-${index}`}
                      onClick={() => {
                        showModal(beer)
                      }}
                    >
                      <Box className={classes.itemContainer} width={1}>
                        <Box mb={1} width={1}>
                          <img
                            src={beer.image_url}
                            className={classes.img}
                            alt={'beer'}
                          />
                        </Box>
                        <Box width={1} className={classes.beerName}>
                          {beer.name}
                        </Box>
                      </Box>
                    </ListItem>
                  )
                })}
              </GridList>
            </TabPanel>
          )
        })}
      </SwipeableViews>
    </div>
  )
}
