import {useState} from 'react'

import {StyleSheet, View, Text, TextInput} from 'react-native'


const Search = () => {

    const [ville, setVille] = useState('');
    
    return (
        <View>
            <Text style={Styles.title}>Entrer une ville</Text>
            <TextInput 
                style={Styles.input} 
                // value='Creteil' 
                onChangeText={text => setVille(text)}
            />
            
        </View>
    )

}

const Styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding : 10,
    },
    title : {
        fontSize: 20,
        margin:20,
    }

})


export default Search