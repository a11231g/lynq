import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'
import blue from '@material-ui/core/colors/blue'
import CssBaseline from '@material-ui/core/CssBaseline'
// A theme with custom primary and secondary color.
// It's optional.
export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#f7f4f9',
      main: 'rgb(235,198,42)'
    },
    textSecondary: {
      main: '#fff'
    },
    common: {
      yellow: 'rgb(235,198,42)',
      gray: '#9b9b9b'
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    },
    blue: {
      light: blue[300],
      main: blue[500],
      dark: blue[700]
    },
    red: {
      light: red[300],
      main: red[500],
      dark: red[700]
    }
  },
  spacing: 8,
  typography: {
    useNextVariants: true,
    body1: {
      fontSize: 14
    }
  },
  overrides: {
    MuiBox: {
      root: {
        padding: 0
      }
    },
    MuiExpansionPanel: {
      root: {
        boxShadow: 'none'
      }
    },
    MuiExpansionPanelDetails: {
      root: {
        display: 'block',
        padding: 15
      }
    },
    MuiExpansionPanelSummary: {
      expandIcon: {
        display: 'none',
        content: {
          display: 'block'
        },
        root: {
          display: 'block'
        }
      }
    },
    MuiPaper: {
      root: {
        boxShadow: 'none'
      },
      elevation: {
        boxShadow: 'none'
      }
    },
    MuiCollapse: {
      root: {
        maxHEight: '85%',
        overflow: 'scroll'
      }
    },
    MuiGridList: {
      root: {
        height: window.innerHeight - 180,
        overflow: 'scroll'
      }
    }
  }
})

function withRoot (Component) {
  function WithRoot (props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }
  return WithRoot
}
export default withRoot
