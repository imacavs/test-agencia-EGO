import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  containerGeneral: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
  },
  hijos: {
    flex: 1,
  },
  img: {
    width: 268,
    height: 132,
    objectFit: 'contain',
  },
  carousel: {
    margin: 1,
    padding: 1,
    border: 2,
    textAlign: 'center',
  },
}));

export default useStyles;