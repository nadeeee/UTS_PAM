import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Jadwal, Layanan, Jenis} from '../Db/database';

const Stack = createNativeStackNavigator();

// const FormSearch =({navigation}) => {
//     const [Text, onChangeText] = useState({

//     });
function SearchPage({navigation}) {
  // const [selectedValue, setSelectedValue,] = React.useState('');
  var pelabuhan1 = Jadwal.map(function (el) {
    return el.awal;
  });
  var pelabuhan2 = Jadwal.map(function (el) {
    return el.akhir;
  });
  var kelas_layanan = Layanan.map(function (el) {
    return el.layanan;
  });
  var jenis = Jenis.map(function (el) {
    return el.jenis;
  });
  return (
    <SafeAreaView style={formStyle.container}>
      <ScrollView
        style={formStyle.ScrollView}
        horizontal={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}>
        <View style={formStyle.box}>
          <Text style={formStyle.judul}> KAPALZY</Text>
          <View style={formStyle.boxInput}>
            <Text style={formStyle.text}>Pelabuhan Awal</Text>
            <View style={formStyle.input}>
              <SelectDropdown
                style={formStyle.input}
                data={pelabuhan1}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={formStyle.dropdown1BtnStyle}
                // renderDropdownIcon={isOpened => {
                //   return (
                //     <FontAwesome
                //       name={isOpened ? 'chevron-up' : 'chevron-down'}
                //       color={'#444'}
                //       size={18}
                //     />
                //   );
                // }}
              />
            </View>
            <View style={formStyle.boxIcon}>
              <FontAwsome name="ship" size={20} color="tomato" />
            </View>
          </View>
          <View style={formStyle.boxInput}>
            <Text style={formStyle.text}>Pelabuhan Akhir</Text>
            <View style={formStyle.input}>
              <SelectDropdown
                style={formStyle.input}
                data={pelabuhan2}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={formStyle.dropdown1BtnStyle}
                // renderDropdownIcon={isOpened => {
                //   return (
                //     <FontAwesome
                //       name={isOpened ? 'chevron-up' : 'chevron-down'}
                //       color={'#444'}
                //       size={18}
                //     />
                //   );
                // }}
              />
            </View>
            <View style={formStyle.boxIcon}>
              <FontAwsome name="ship" size={20} color="tomato" />
            </View>
          </View>
          <View style={formStyle.boxInput}>
            <Text style={formStyle.text}>Kelas Layanan</Text>
            <View style={formStyle.input}>
              <SelectDropdown
                style={formStyle.input}
                data={kelas_layanan}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={formStyle.dropdown1BtnStyle}
                // renderDropdownIcon={isOpened => {
                //   return (
                //     <FontAwesome
                //       name={isOpened ? 'chevron-up' : 'chevron-down'}
                //       color={'#444'}
                //       size={18}
                //     />
                //   );
                // }}
              />
            </View>

            <View style={formStyle.boxIcon}>
              <FontAwsome name="wheelchair" size={20} color="tomato" />
            </View>
          </View>
          <View style={formStyle.boxInput}>
            <Text style={formStyle.text}>Tanggal Masuk Pelabuhan</Text>
            <TextInput
              style={formStyle.input}
              placeholder="Pilih Tanggal Masuk Pelabuhan"
            />
            <View style={formStyle.boxIcon}>
              <FontAwsome name="calendar" size={20} color="tomato" />
            </View>
          </View>
          <View style={formStyle.boxInput}>
            <Text style={formStyle.text}>Jam Masuk Pelabuhan</Text>
            <TextInput
              style={formStyle.input}
              placeholder="Pilih Jam Masuk Pelabuhan"
            />
            <View style={formStyle.boxIcon}>
              <FontAwsome name="clock-o" size={20} color="tomato" />
            </View>
          </View>

          <Pressable
            onPress={() => {
              navigation.navigate('ResultPage', {Text});
            }}
            style={formStyle.button}>
            <FontAwsome
              style={formStyle.search}
              name="search"
              size={20}
              color="white"
            />
            <Text style={formStyle.txtbutton}>Buat Tiket</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function ResultPage({route, navigation}) {
  const {data} = route.params;
  console.log(data);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={formStyle.box}>
        <Text style={formStyle.judul}> KAPALZY</Text>
        <Text style={formStyle.kouta}>Kouta tersedia (100)</Text>
        <Text style={formStyle.rincian}>Rincian Tiket</Text>
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
        <View style={formStyle.total}>
          <Text style={formStyle.texttotal}>Total</Text>
          <Text style={formStyle.texttotal}>Rp. 1.000.000</Text>
        </View>
        <View style={formStyle.button2}>
          <Pressable
            onPress={() => {
              navigation.navigate('SearchPage');
            }}
            style={formStyle.kembali}>
            <Text style={formStyle.txtbutton1}>Kembali</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('DetailPage');
            }}
            style={formStyle.lanjut}>
            <Text style={formStyle.txtbutton}>Lanjutkan</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

function DetailPage({route, navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={formStyle.container}>
      <ScrollView>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={formStyle.boxdetail}>
            <Text style={formStyle.judul}>KAPALZY</Text>
            <Text style={formStyle.head}>Informasi Pemesanan</Text>
            <Text style={formStyle.awal}>Bakauheni</Text>
            <FontAwsome
              style={formStyle.icon}
              name="arrow-right"
              size={25}
              color="black"
            />
            <Text style={formStyle.akhir}> Merak</Text>
            <Text style={formStyle.head}>Jadwal Masuk Pelabuhan</Text>
            <Text style={formStyle.textrincian}>Kamis, 17 Maret 2022</Text>
            <Text style={formStyle.textrincian}>15:30 WIB</Text>
            <Text style={formStyle.head}>Layanan</Text>
            <Text style={formStyle.textrincian}>First Class</Text>
            <Text style={formStyle.textrincian.orang}>Dewasa x 1</Text>
            <Text style={formStyle.textrincian.harga}>Rp. 1.000.000</Text>
            <View style={formStyle.datapemesanan}>
              <Text style={formStyle.datapemesanan}>Data Pemesanan</Text>
              <Text style={formStyle.textrincian}>Nama Legkap</Text>
              <TextInput style={formStyle.input} placeholder="Fulan Ahmad" />
              <Text style={formStyle.textrincian}>Identitas</Text>
              <TextInput style={formStyle.input} placeholder="Laki-Laki" />
              <Text style={formStyle.textrincian}>Umur</Text>
              <TextInput style={formStyle.input} placeholder="20" />
            </View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={formStyle.centeredView}>
                <View style={formStyle.modalView}>
                  <Text style={formStyle.modalText}>
                    Transfer ke nomer rekening 824721xxxxxxxxx                  Bank BAC
                  </Text>
                  <Pressable
                    style={[formStyle.button, formStyle.buttonClose]}
                    onPress={() =>
                      setModalVisible(
                        !modalVisible,
                        navigation.navigate('Pesanan_Saya'),
                      )
                    }>
                    <Text style={formStyle.textStyle}>Selesai</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable
              style={[formStyle.button, formStyle.buttonOpen]}
              onPress={() => setModalVisible(true)}>
              <Text style={formStyle.txtbutton}>Konfirmasi</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Feed() {
  return (
    <Stack.Navigator
      initialRouteName="SearchPage"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SearchPage" component={SearchPage} />
      <Stack.Screen name="ResultPage" component={ResultPage} />
      <Stack.Screen name="DetailPage" component={DetailPage} />
    </Stack.Navigator>
  );
}

const formStyle = StyleSheet.create({
  txtbutton: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    flex: 1,
  },
  ScrollView: {
    marginHorizontal: 0,
  },
  judul: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: -25,
    textAlign: 'center',
    color: '#00579c',
  },
  box: {
    backgroundColor: '#EEEEEE',
    borderRadius: 5,
    padding: 40,
    width: '80%',
    marginTop: 30,
    position: 'absolute',
    top: '10%',
    left: '10%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  boxInput: {
    marginTop: 20,
  },
  text: {
    fontSize: 12,
    color: '#000',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginTop: 0,
  },
  boxIcon: {
    position: 'absolute',
    marginLeft: -30,
    marginTop: 28,
  },
  button: {
    backgroundColor: '#EE9E54',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 4,
    marginTop: 20,
    width: '100%',
  },
  kouta: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: -20,
  },
  rincian: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 0,
    marginLeft: -20,
  },
  boxrincian: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#E9E9E9',
    borderRadius: 4,
    marginLeft: -25,
    padding: 50,
    width: '120%',
    marginTop: 20,
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
      borderTopWidth: 1,
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
  back: {
    backgroundColor: '#EE9E54',
    alignItems: 'center',
    padding: 10,
    borderRadius: 4,
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  button2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  lanjut: {
    backgroundColor: '#00579c',
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  kembali: {
    backgroundColor: '#ffffff',
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderWidthColor: '#00579c',
  },
  head: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 25,
  },
  dropdown1BtnStyle: {
    width: '100%',
    height: 20,
  },
  total: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  texttotal: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  search: {
    marginLeft: -180,
    marginBottom: -17,
  },
  boxdetail: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#EEEEEE',
    borderRadius: 3,
    padding: 50,
    width: '90%',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  datapemesanan: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 35,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 70,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  // button: {
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 2,
  // },
  buttonOpen: {
    backgroundColor: '#EE9E54',
  },
  buttonClose: {
    backgroundColor: '#EE9E54',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  txtbutton1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#00579c',
  },
});

export default Feed;
