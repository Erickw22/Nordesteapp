import * as React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Text } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import styles from '../style/MainStyle';

export default function Perfil({navigation}) {

    const logout = (navigation) => {
        AsyncStorage.setItem("TOKEN","").then(() => {
            navigation.reset({
                index: 0,
                routes: [{name: "Login"}]
            })
        }).catch((error) => {
            console.log(error)
            Alert.alert("Erro ao sair")
        })
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>          

        </View>
        <Button
            icon={
              <Icon
              
                name="check"
                size={15}
                color="white"
              />
            }
            title="Sair"
            buttonStyle={styles.button}
            onPress={() => logout(navigation)}
          />
      </View>
    );
  }