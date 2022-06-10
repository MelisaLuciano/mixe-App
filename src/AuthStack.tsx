import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Center} from './Center';
import {Text, Button, View, ImageBackground, StyleSheet} from 'react-native';
import {AuthNavProps, AuthParamList} from './AuthParamList';
import {AuthContext} from './AuthProviders';

interface AuthStackProps { }

const Stack = createStackNavigator<AuthParamList>();

function Login({navigation}: AuthNavProps<'Bienvenidos'>) {
  const {login} = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./images/floresOaxaca.jpeg')}
        resizeMode="cover"
        style={styles.image}>
        <Center>
          <Text style={styles.text}>Bienvenidos</Text>
          <Button
            title="Ingresar"
            onPress={() => {
              login();
            }}
          />
          <Button
            title="Acerca de..."
            onPress={() => {
              navigation.navigate('Comment');
            }}
          />
        </Center>
      </ImageBackground>
    </View>
  );
}

function Comentarios({navigation}: AuthNavProps<'Comment'>) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./images/1oaxaca.jpeg')}
        resizeMode="cover"
        style={styles.image}>
        <Center>
          <Text style={styles.textAbout}>
            Esta aplicación se hizo con el fin de ayudar a las personas a
            aprender la lengua Mixe.
          </Text>
          <Button
            title="Ir al inicio"
            onPress={() => {
              navigation.navigate('Bienvenidos');
              //navigation.goBack();
            }}
          />
        </Center>
      </ImageBackground>
    </View>
  );
}

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Bienvenidos">
      <Stack.Screen
        options={{
          headerTitle: 'MixeApp',
        }}
        name="Bienvenidos"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Acerca de...',
        }}
        name="Comment"
        component={Comentarios}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  textAbout: {
    color: 'white',
    fontSize: 22,
    lineHeight: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
