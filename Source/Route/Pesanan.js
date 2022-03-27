import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwsome from 'react-native-vector-icons/FontAwesome';

function Pesanan_Saya() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={formStyle.header}>
        <Text style={formStyle.headerText}>Daftar Pemesanan</Text>
      </View>
      <View style={formStyle.boxrincian}>
        <Text style={formStyle.awal}>Bakauheni</Text>
        <FontAwsome
          style={formStyle.icon}
          name="arrow-right"
          size={25}
          color="black"
        />
        <Text style={formStyle.akhir}>Merak</Text>
        <Text style={formStyle.head}>Jadwal Masuk Pelabuhan</Text>
        <Text style={formStyle.textrincian}>Kamis, 17 Maret 2022</Text>
        <Text style={formStyle.textrincian}>15:30 WIB</Text>
        <Text style={formStyle.head}>Layanan</Text>
        <Text style={formStyle.textrincian}>First Class</Text>
        <Text style={formStyle.textrincian.orang}>Dewasa x 1</Text>
        <Text style={formStyle.textrincian.harga}>Rp. 1.000.000</Text>
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
    marginTop: -360,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: -30,
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

export default Pesanan_Saya;
