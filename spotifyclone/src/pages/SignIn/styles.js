import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const LogoContainer = styled.View`
  flex: 0.5;
  justify-content: center;
`;

export const Logo = styled.Image.attrs({resizeMode: 'contain'})`
  aspect-ratio: 1.5;
`;

export const InfoContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Info = styled.Text`
  font-weight: bold;
  color: #fff;
  text-align: center;
  font-size: 32px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  width: 100%;
`;

export const Button = styled(RectButton)`
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background: ${props => props.background || '#fff'};
  margin: 8px 0;
`;

export const ButtonText = styled.Text`
  color: ${props => props.color || '#fff'};
  font-weight: bold;
`;
