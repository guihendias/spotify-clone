import styled from 'styled-components/native';
import MdIcon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const TitleContainer = styled.View`
  flex: 0.25;
  width: 100%;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Icon = styled(MdIcon).attrs({
  name: 'arrow-back',
  size: 24,
  color: '#fff',
})``;

export const Title = styled.Text`
  color: #fff;
  font-size: 28px;
  text-align: center;
  font-weight: bold;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  /* justify-content: center; */
  align-items: center;
`;

export const InputContainer = styled.View`
  width: 100%;
  margin: 4px 0;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Input = styled.TextInput.attrs({
  autoCapitalize: 'none',
  autoCorrect: false,
})`
  height: 50px;
  width: 100%;
  border-radius: 4px;
  opacity: ${props => (props.focused ? 1 : 0.5)};
  padding-left: 10px;
  margin: 4px 0;
  background: #fff;
`;

export const SubmitButton = styled(RectButton)`
  height: 50px;
  width: 50%;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
  background: #fff;
  margin: 36px 0;
`;

export const SubmitText = styled.Text`
  color: #000;
  font-weight: bold;
`;

export const ForgotPassButton = styled(RectButton)`
  border-width: ${StyleSheet.hairlineWidth}px;
  width: 55%;
  height: 24px;
  border-color: #eee;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 12px;
`;

export const ForgotPassText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;
