import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import LocalCafeOutlinedIcon from '@material-ui/icons/LocalCafeOutlined'
import RestaurantOutlinedIcon from '@material-ui/icons/RestaurantOutlined'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined'

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%'
  },
  tabs: {
    backgroundColor: 'rgb(200, 31, 19)',
    padding: 0
  },
  unactiveTab: {
    color: 'white'
  },
  noBoxShadow: {
    boxShadow: 'none'
  },
  title: {
    backgroundColor: 'rgb(200, 31, 19)',
    color: '#000',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  indicator: {
    height: 0
  },
  selectedTab: {
    backgroundColor: 'rgb(53, 53, 53)',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    color: 'white'
  }
}))

export default function FullWidthTabs (props) {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static' color='default' className={classes.noBoxShadow}>
        <Typography component='div' className={classes.title}>
          demo app
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
          aria-label='full width tabs example'
          classes={{
            indicator: classes.indicator,
            selected: classes.selectedTab,
            root: classes.tabs
          }}
        >
          <Tab
            key={'tab1'}
            classes={{ selected: classes.selectedTab }}
            icon={<LocalCafeOutlinedIcon />}
            {...a11yProps(0)}
            className={classes.unactiveTab}
          />
          <Tab
            key={'tab2'}
            classes={{ selected: classes.selectedTab }}
            icon={<RestaurantOutlinedIcon />}
            {...a11yProps(1)}
            className={classes.unactiveTab}
          />
          <Tab
            key={'tab3'}
            classes={{ selected: classes.selectedTab }}
            icon={<MonetizationOnOutlinedIcon />}
            {...a11yProps(2)}
            className={classes.unactiveTab}
          />
          <Tab
            key={'tab4'}
            classes={{ selected: classes.selectedTab }}
            icon={<SearchOutlinedIcon />}
            {...a11yProps(4)}
            className={classes.unactiveTab}
          />
        </Tabs>
      </AppBar>
      <div>
        <TabPanel
          classes={{
            root: classes.tabs
          }}
          value={value}
          index={0}
          dir={theme.direction}
        >
          {props.firstComponent}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {props.secondComponent}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          {props.thirdComponent}
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          {props.forthComponent}
        </TabPanel>
      </div>
    </div>
  )
}
