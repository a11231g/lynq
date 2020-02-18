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
    textAlign: 'left'
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
  deleteIcon: {
    color: 'rgba(157,97,107)',
    marginLeft: 15,
    fontSize: 25
  },
  mainContainer: { maxWidth: '100%', maxHeight: 80 },
  wrapper: { display: 'flex', marginBottom: 25 },
  container2: { position: 'relative', marginRight: 10 },
  remove: {
    color: '#fff'
  }
}
export default styles
