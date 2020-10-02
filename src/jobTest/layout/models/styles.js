import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  containerGeneral: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 147px',
  },
  container2: {
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
  },
  container: {
    margin: 11.5,
    marginBottom: 75,
    width: 268,
    height: 210,
  },
  title: {
    fontSize: 50,
    letterSpacing: -1,
    fontWeight: 'bold',
    marginTop: 50,
  },
  containerFiltrado: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: {
    width: 268,
    height: 132,
    objectFit: 'contain',
  },
  p: {
    fontSize: 14,
    textAlign: 'center',
    letterSpacing: -0,
    margin: 0,
  },
  hr: {
    height: 0.1,
    width: '100%',
    backgroundColor: 'gray',
  },
  texto: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 8,
  },
}));

export default useStyles;