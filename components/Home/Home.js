import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-web';


const Home = ({ navigation }) => {

    return (
        <View>
            <Button title="Recherche" onPress={()=>navigation.navigate('Search')} />
            <Text>Accueil</Text>
        </View>
    )

}


const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginBottom: 20
    },
    view: {
        margin:20
    }
}) 

export default Home;