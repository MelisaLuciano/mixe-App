import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { Center } from './Center';

interface CommentStackProps {}

const Stack = createStackNavigator();

function Feed() {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./images/oaxaca.jpeg')}
        resizeMode="cover"
        style={styles.image}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Escribe tus comentarios aquí"
        />
        <Center>
          <Button title="Enviar comentarios" />
        </Center>
      </ImageBackground>
    </View>
  );
}
export const CommentStack: React.FC<CommentStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Diccionario"
        options={{
          headerTitle: 'Comentarios',
        }}
        component={Feed}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 80,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
