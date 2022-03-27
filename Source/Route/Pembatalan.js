import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Pembatalan() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={formStyle.header}>
        <Text style={formStyle.headerText}>Daftar Pembatalan</Text>
      </View>
      <View style={formStyle.batal}>
        <Text style={formStyle.textbatal}>
          Tidak Ada Aktivitas Pembatalan Tiket
        </Text>
      </View>
    </View>
  );
}
const formStyle = StyleSheet.create({
  header: {
    backgroundColor: '#024d88',
    height: 100,
    width: '100%',
    marginBottom: 20,
    marginTop: -620,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbatal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00579c',
    justifyContent: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: -40,
  },
  top: {
    marginTop: -100,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  boxrincian: {
    paddingLeft: 10,
    paddingRight: 20,
    backgroundColor: '#EEEEEE',
    borderRadius: 3,
    marginLeft: 0,
    padding: 50,
    width: '80%',
    marginTop: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textrincian: {
    harga: {
      fontSize: 12,
      marginTop: 15,
      marginBottom: -35,
      marginLeft: 160,
    },
    orang: {
      fontSize: 12,
      marginTop: 15,
      marginBottom: -30,
      marginLeft: 0,
    },
    fontSize: 12,
    color: '#000',
    marginBottom: 5,
  },
  awal: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 110,
    marginTop: -25,
  },
  akhir: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 140,
    marginTop: -25,
  },
  head: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 25,
  },
});

export default Pembatalan;
