import React from 'react';
import { darken } from 'polished';
import {
  LogoContainer,
  Logo,
  InfoContainer,
  Info,
  ButtonContainer,
  Button,
  ButtonText,
} from './styles';

import Background from '~/components/Background';

import colors from '~/util/colors';
import logo from '~/assets/logo.png';

export default function Login({ navigation }) {
  return (
    <Background>
      <LogoContainer>
        <Logo source={logo} />
      </LogoContainer>
      <InfoContainer>
        <Info>{`Milhões de músicas à sua escolha.\nGrátis no Spotify.`}</Info>
      </InfoContainer>
      <ButtonContainer>
        <Button background={darken(0.05, colors.primary)}>
          <ButtonText>INSCREVA-SE GRÁTIS</ButtonText>
        </Button>
        <Button background="#3C5A99">
          <ButtonText>CONTINUAR COM O FACEBOOK</ButtonText>
        </Button>
        <Button onPress={() => navigation.navigate('Login')}>
          <ButtonText color={colors.black}>ENTRAR</ButtonText>
        </Button>
      </ButtonContainer>
    </Background>
  );
}
