import {DefaultTheme} from 'react-native-paper';
import colors from '../Colors';

const theme = {
  ...DefaultTheme,
  id: 1,
  dark: false,
  roundness: 7,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5c80bc',
    accent: '#a5be00',
    bottom: '#ffecce',
    background: '#ffc478',
    text: colors.panegrey,
    placeholder: colors.ashgrey,
    header: '#f8b45c',
    headerTitle: colors.white,
    surface: colors.white,
    primaryText: colors.darkgunmetal,
  },
};

export default theme;