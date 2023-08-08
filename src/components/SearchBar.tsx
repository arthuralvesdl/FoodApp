import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SearchBar = (props: any) => {
    return (
        <View style={styles.backgroundStyle}>
            <Icon style={styles.iconStyle} name="search" />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder='Search'
                value={props.term}
                onChangeText={props.onTermChange}
                onEndEditing={props.onTermSubmit} //WHEN ENTER OR CONFIRM
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#dfdfdf',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
        color: '#0D0D0D'
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
        color: "#0D0D0D"
    }
})

export default SearchBar