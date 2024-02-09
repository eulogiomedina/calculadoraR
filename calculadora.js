// En tu componente Calculadora
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Boton, Caja } from './Atomicos';
import { estilos } from './Estilos';

export const Calculadora = () => {
  const botones = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    '+/-', 'CE', 'C', 'X',
  ];

  const renderBotones = () => {
    return botones.map((texto, index) => (
      <TouchableOpacity key={index} style={estilos.botonGrande}>
        <Boton texto={texto} />
      </TouchableOpacity>
    ));
  };

  return (
    <View>
      <View>
        <Caja valor={'55'} />
      </View>
      <View style={estilos.botonescontainer}>{renderBotones()}</View>
    </View>
  );
};
