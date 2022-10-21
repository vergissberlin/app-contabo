import {StatusBar} from 'expo-status-bar'
import {StyleSheet, Text, View} from 'react-native'

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>contabo</Text>
            <StatusBar style="auto" />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#00aaeb",
        textTransform: "uppercase",
    }
})
