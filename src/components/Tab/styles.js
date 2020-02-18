const styles = theme => {
  return {
    root: {
      backgroundColor: theme.palette.background.paper,
      width: '100%'
    },
    tabContainer: {
      backgroundColor: 'rgb(53, 53, 53)'
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
    },
    img: {
      height: 100,
      maxWidth: '100%'
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    paper: {
      position: 'relative',
      backgroundColor: 'rgb(35,36, 47)',
      width: '90%',
      paddingTop: 30,
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 15,
      color: 'white',
      borderRadius: 12
    },
    close: {
      position: 'absolute',
      top: -38,
      left: 0,
      backgroundColor: 'rgb(200,31,20)',
      fontWeight: 'bold',
      borderRadius: 15
    },
    itemContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%'
    },
    beerName: {
      textAlign: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%'
    },
    ModalImage: {
      maxHeight: 100,
      padding: 20,
      borderRadius: 10,
      backgroundColor: 'white',
      marginLeft: 10
    },
    modalDescription: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      max: '100%',
      margin: 0,
      color: '#aaa'
    },
    modalTitle: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 10
    },
    addToCard: {
      backgroundColor: 'white',
      borderRadius: 12,
      marginTop: 10
    }
  }
}
export default styles
