import { StatusBar } from 'expo-status-bar';
import react, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image, FlatList } from 'react-native';
import styles from './styles';
export default function App() {
  const [username, setUsername] = useState("123")
  const [password, setPassword] = useState("pass")
  
  const login =() => {
    if(username === "user123" && password === "admin") {
      Alert.alert("Đăng nhập thành công")
    } else {
      Alert.alert("Đăng nhập thất bại")
    }
  }
  const DATA = [
    {
      id: 1,
      title: 'First Item',
    },
    {
      id: 2,
      title: 'Second Item',
    },
    {
      id: 3,
      title: 'Third Item',
    },
    {
      id: 4,
      title: 'Third Item',
    },
    {
      id: 5,
      title: 'Third Item',
    },
    {
      id: 6,
      title: 'Third Item',
    },
    {
      id: 7,
      title: 'Third Item',
    },
  ];
  const [data, setData] = useState(DATA);

  const deleteItem = (item) => {
    const _data = data.filter((_item) => {
      return(_item.id != item.id)
    })

    setData(_data)
  }
  

  const Header = (props) => {
    return (<View>
      <Text>{props.text}</Text>
    </View>)
  }

  return (
    <View style={styles.container}>
      <Header text = {"App Chat"}/>
      <Text style={styles.title}>Hello world</Text>
      <Image 
      style={styles.image}
      source = {require('./assets/favicon.png')}/>
      <TextInput 
      onChangeText={(username) =>{
        setUsername(username)
      }}
      style={styles.inputAccount}
        placeholder='Nhập tài khoản'
      />
       <TextInput 
       onChangeText={(pass) => {
          setPassword(pass)
       }}
      style={[styles.inputAccount, {marginTop: 30}]}
        placeholder='Nhập mật khẩu'
      />
      <TouchableOpacity
      onPress={() => {
        login();
      }}
      style={styles.btnLogin}>
        <Text>Thêm</Text>
      </TouchableOpacity>

      <FlatList 
      ListEmptyComponent={() => {
        return(<View>
          <Text>List Empty</Text>
        </View>)
      }}
      data={data}
      renderItem = {({item}) => {
        return(<View style={{height: 50, marginHorizontal: 20, borderWidth: 1, width: 300, marginTop: 30}}>
          <Text>
          {item.id}
          </Text>
          <TouchableOpacity style={styles.deleteItem}
              onPress={() => {
                deleteItem(item)
              }}
          >
            <Text>Xoá</Text>
          </TouchableOpacity>
        </View>)
      }}
      />

    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
