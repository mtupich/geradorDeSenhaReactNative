import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hooks/useStorage'
import { PasswordItem } from '../passwords/components/passwordItem'

export function Passwords() {
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    useEffect(() => {
        async function loadPasswords(){
            const passwords = await getItem("@pass")
            setListPasswords(passwords)
        }

        loadPasswords()
    }, [focused])

    async function handleDeletePassword(item) {
        const password = await removeItem("@pass", item)
        setListPasswords(password)
    }

    return(
        <SafeAreaView style={{ flex:1, }}>
             <View style={styles.header}>
                <Text style={styles.title}>Minhas Senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList
                    style={{ flex: 1, padding: 14, }}
                    data={listPasswords}
                    keyExtractor={ (item) => String(item) }
                    renderItem={ ({ item }) => <PasswordItem data={item} removePassword={ () => handleDeletePassword(item) }/> }
                />
            </View>
        </SafeAreaView>

     
    )
}

const styles= StyleSheet.create({
    header:{
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },
    title:{
        fontSize: 18, 
        color: "#FFF",
        fontWeight: 'bold',
    },
    content:{
        flex:1,
        paddingRight: 14,
        paddingLeft: 14,
    }
})