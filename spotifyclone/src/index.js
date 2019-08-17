import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './App';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Routes />
    </>
  );
}
