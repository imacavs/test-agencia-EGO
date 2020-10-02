import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  general: {
    display: 'flex',
    alignItems: 'center',
  },
  textFilter: {
    width: 73,
    height: 14,
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: 600,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1,
    letterSpacing: 0.08,
    color: '  #373737',
  },
}));

export default useStyles;