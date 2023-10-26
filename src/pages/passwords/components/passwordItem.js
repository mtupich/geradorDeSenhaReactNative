import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useState } from 'react'

export function PasswordItem({ data, removePassword }) {
    const [passwordVisible, setPasswordVisible] = useState(true);

    const handleShowHideAction = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={styles.title}>{data}</Text>

            <IconButton
                    icon={passwordVisible ? "eye" : "eye-off"}
                    color="#FFFFFF"
                    size={20}
                    onPress={handleShowHideAction}
                />

        </Pressable>
     
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0e0e0e",
        padding: 14, 
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title:{
        color: "#FFFFFF"
    }
})