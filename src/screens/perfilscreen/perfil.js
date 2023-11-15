import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../../assets/constants/index';

const Perfil = ({ navigation }) => {

  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(true);


  const logout = ()  => {
    Alert.alert(
      "Deslogar",
      "Tem certeza que deseja fazer Logout?",
      [
        {
          text: "Cancelar", onPress: () => console.log("cancel pressed")
        },
        {        
          text: "Continuar", onPress: () => console.log("continue pressed")
        }
      ],
      {defaultIndex: 1}
    )
  };
  const clearCache = ()  => {
    Alert.alert(
      "Limpar Cache",
      "Tem certeza que deseja continuar?",
      [
        {
          text: "Cancelar", onPress: () => console.log("cancel pressed")
        },
        {        
          text: "Continuar", onPress: () => console.log("continue pressed")
        }
      ],
      {defaultIndex: 1}
    )
  };
  const deleteAccont = ()  => {
    Alert.alert(
      "Deletar conta",
      "Tem certeza que deseja continuar?",
      [
        {
          text: "Cancelar", onPress: () => console.log("cancel pressed")
        },
        {        
          text: "Continuar", onPress: () => console.log("continue pressed")
        }
      ],
      {defaultIndex: 1}
    )
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.gray} />

        <View style={{ width: '100%' }}>
          <Image
<<<<<<< HEAD:src/screens/home/perfil.js
        
=======
            source={require("../../assets/space.jpg")}
            style={styles.cover}
>>>>>>> a908718b624c695edffd36f5c12b80ae72cdb749:src/screens/perfilscreen/perfil.js
          />
        </View>

        <View style={styles.profileContainer}>
          <Image
<<<<<<< HEAD:src/screens/home/perfil.js
        
=======
            source={require("../../assets/profile.jpg")}
            style={styles.profile}
>>>>>>> a908718b624c695edffd36f5c12b80ae72cdb749:src/screens/perfilscreen/perfil.js
          />
          <Text style={styles.name}>
            {userLogin === true ? "userData.name" : "Faça Login por favor"}
          </Text>
          {userLogin === false ?
            (
              <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
                <View style={styles.loginBtn}>
                  <Text style={styles.menuText}>  L O G I N  </Text>
                </View>
              </TouchableOpacity>
            ) :
            (
              <View style={styles.loginBtn}>
                <Text style={styles.menuText}>  email@usuario.com  </Text>
              </View>
            )
          }

          {userLogin === false ?
            (
              <View style={styles.menuWrapper}></View>
            ) :
            (
              <View style={styles.menuWrapper}>

                <TouchableOpacity onPress={() => {navigation.navigate('Editar Perfil')}}>
                  <View style={styles.menuItem(0.2)}>
                    <MaterialCommunityIcons
                      name="account-cog-outline"
                      color={COLORS.primary}
                      size={24} />
                    <Text style={styles.menuText}>Editar Perfil</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {clearCache()}}>
                  <View style={styles.menuItem(0.2)}>
                    <MaterialCommunityIcons
                      name="cached"
                      color={COLORS.primary}
                      size={24}
                    />
                    <Text style={styles.menuText}>Limpar Cache</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {deleteAccont()}}>
                  <View style={styles.menuItem(0.2)}>
                    <AntDesign
                      name="deleteuser"
                      color={COLORS.primary}
                      size={24}
                    />
                    <Text style={styles.menuText}>Deletar Conta</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {logout()}}>
                  <View style={styles.menuItem(0.2)}>
                    <AntDesign
                      name="logout"
                      color={COLORS.primary}
                      size={24}
                    />
                    <Text style={styles.menuText}>Logout</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('Configurações')}}>
                  <View style={styles.menuItem(0.2)}>
                    <MaterialCommunityIcons
                      name="cog-outline"
                      color={COLORS.primary}
                      size={24}
                    />
                    <Text style={styles.menuText}>Configurações</Text>
                  </View>
                </TouchableOpacity>

              </View>
            )}

        </View>

      </View>
    </ScrollView>
  )
}

<<<<<<< HEAD:src/screens/home/perfil.js

=======
export default Perfil;
>>>>>>> a908718b624c695edffd36f5c12b80ae72cdb749:src/screens/perfilscreen/perfil.js

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    borderStartColor: COLORS.lightWhite,
    backgroundColor: COLORS.lightWhite
  },
  cover: {
    height: 290,
    width: '100%',
    resizeMode: 'cover'
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center'
  },
  profile: {
    height: 155,
    width: 155,
    borderRadius: 100,
    borderColor: COLORS.primary,
    borderWidth: 1,
    resizeMode: 'cover',
    marginTop: -90
  },
  name: {
    color: COLORS.black,
    marginVertical: 5
  },
  loginBtn: {
    backgroundColor: COLORS.secondary,
    padding: 2,
    borderWidth: 0.4,
    borderColor: COLORS.primary,
    borderRadius: SIZES.large,
    marginBottom: SIZES.large
  },
  menuText: {
    padding: 4,
    fontWeight: '900',
    fontSize: 14,
    lineHeight: 16,
    color: COLORS.gray,
    marginHorizontal: SIZES.large
  },
  menuWrapper: {
    marginTop: SIZES.xlarge,
    width: SIZES.width - SIZES.large,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
  menuItem: (borderBottomWidth) => ({
    borderBottomWidth: borderBottomWidth,
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderColor: COLORS.gray
  })

})

export default Perfil;