import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomIcon from '../../components/CustomIcons';

const Login = () => {
  return (
    <View style={styles.logContainer}>
      <Image
        source={require('./../../../assets/login.png')}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.welcomeText}>Education app</Text>
        <Text style={styles.logText}>Login / Signup</Text>
        <TouchableOpacity style={styles.signBtn} onPress={() => {}}>
          <CustomIcon
            size={18}
            color="#fff"
            name="google-plus"
            type="FontAwesome"
          />
          <Text style={styles.signText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
  },
  container: {
    backgroundColor: '#fff',
    marginTop: -30,
    padding: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 1,
  },
  welcomeText: {
    fontSize: 40,
    textAlign: 'center',
    color: '#000',
  },
  logText: {
    marginTop: 60,
    marginBottom: 60,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  signBtn: {
    backgroundColor: '#000',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default Login;
