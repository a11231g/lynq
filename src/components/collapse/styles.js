const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 2
  },
  heading: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    width: '100%'
  },
  container: {
    backgroundColor: 'rgb(35,36, 47)',
    zIndex: 2
  },
  secondContainer: {
    backgroundColor: 'rgb(35,36, 47)',
    zIndex: 2,
    padding: 0
  },
  title: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold'
  },
  description: {
    fontSize: 11,
    color: '#aaa'
  },
  price: {
    position: 'absolute',
    backgroundColor: 'rgb(235,198,42)',
    fontSize: 16,
    color: '#666',
    fontWeight: 'bold',
    top: -15,
    right: 15,
    borderRadius: 10,
    padding: 5
  },
  minues: {
    padding: 2,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#888',
    height: 30,
    marginRight: 15,
    marginLeft: 15
  },
  plus: {
    padding: 2,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#888',
    height: 30,
    backgroundColor: 'rgb(235,198,42)',
    marginLeft: 15
  },
  count: {
    paddingTop: 3,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  grow: {
    flexGrow: 1,
    textAlign: 'left',
    marginBottom: 7
  },
  zero: {
    padding: 5,
    marginRight: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: 'rgb(235,198,42)',
    fontSize: 14,
    color: '#222',
    flexGrow: 1
  },
  roundup: {
    padding: 5,
    marginRight: 1,
    backgroundColor: 'rgb(235,198,42)',
    fontSize: 14,
    color: '#222',
    flexGrow: 1
  },
  last: {
    padding: 5,
    marginRight: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'rgb(235,198,42)',
    fontSize: 14,
    color: '#222',
    flexGrow: 1
  },
  backDrop: {
    zIndex: 1
  },
  noHeight: {
    height: 0,
    minHeight: '0 !important'
  },
  noPadding: {
    padding: 0
  },
  marginBottom: {
    marginBottom: 7
  }
}

export default styles
