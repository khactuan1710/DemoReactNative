import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: "blue"
    },
    deleteItem: {
        height: 30, width: 50, backgroundColor: "red"
    },
    inputAccount: {
        borderWidth: 1,
        borderRadius: 10,
        height: 30,
        width: 300,
        paddingLeft: 10
    },
    btnLogin: {
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 300,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 40,
        backgroundColor: "blue"
    },
    image: {
        height: 50,
        width: 50
    },
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default styles;