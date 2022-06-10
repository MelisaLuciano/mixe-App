import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContext} from './AuthProviders';

interface HomeStackProps {}

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
          placeholder="Busca una palabra"
        />
        <Button
          title="Buscar"
          onPress={() => {
            navigation.navigate('Comment');
          }}
        />
      </ImageBackground>
    </View>
  );
}

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  const {logout} = useContext(AuthContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Diccionario"
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  logout();
                }}>
                <Text style={styles.textOut}>Salir</Text>
              </TouchableOpacity>
            );
          },
        }}
        component={Feed}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  textOut: {
    color: 'black',
    justifyContent: 'flex-start',
  },
});
