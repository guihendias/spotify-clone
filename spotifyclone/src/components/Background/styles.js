import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {RectButton} from 'react-native-gesture-handler';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled(LinearGradient).attrs({
  start: {x: 0, y: 0.25},
  end: {x: 0.5, y: 1},
  locations: [0, 0.4, 1],
  useAngle: true,
  angle: 140,
  angleCenter: {x: 0.5, y: 0.5},
  colors: ['#7715d8', '#a459c1', '#e31277'],
})`
  flex: 1;
  padding: ${getStatusBarHeight(true) + 24}px 24px 24px;
  align-items: center;
`;
