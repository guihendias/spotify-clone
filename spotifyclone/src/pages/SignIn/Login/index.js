import React, {useState, useEffect, useRef} from 'react';
import {Animated, Dimensions} from 'react-native';

import {
  TitleContainer,
  Icon,
  BackButton,
  Title,
  Form,
  InputContainer,
  Label,
  Input,
  SubmitButton,
  SubmitText,
  ForgotPassButton,
  ForgotPassText,
} from './styles';

import Background from '~/components/Background';
const AnimatedInput = Animated.createAnimatedComponent(InputContainer);
const {width} = Dimensions.get('window');

export default function Login({navigation}) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [focused, setFocused] = useState(null);
  const userRef = useRef();
  const passwordRef = useRef();
  const position = new Animated.Value(width);

  useEffect(() => {
    Animated.timing(position, {
      toValue: 0,
      duration: 500,
      // useNativeDriver: true,
    }).start();
  }, []);

  function handleFocus({nativeEvent: {target}}) {
    setFocused(target);
  }

  return (
    <Background>
      <TitleContainer>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon />
        </BackButton>
        <Title>Entrar</Title>
      </TitleContainer>

      <Form>
        <AnimatedInput style={{left: position}}>
          <Label>E-mail ou nome de usuário</Label>
          <Input
            ref={userRef}
            value={user}
            onFocus={handleFocus}
            onChangeText={setUser}
            focused={userRef.current && userRef.current.isFocused()}
          />
        </AnimatedInput>
        <AnimatedInput style={{left: position}}>
          <Label>Senha</Label>
          <Input
            ref={passwordRef}
            secureTextEntry
            onFocus={handleFocus}
            value={password}
            onChangeText={setPassword}
            focused={passwordRef.current && passwordRef.current.isFocused()}
          />
        </AnimatedInput>

        <SubmitButton disabled={!user || !password}>
          <SubmitText>ENTRAR</SubmitText>
        </SubmitButton>

        <ForgotPassButton>
          <ForgotPassText>ESQUECEU SUA SENHA?</ForgotPassText>
        </ForgotPassButton>
      </Form>
    </Background>
  );
}
