import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native'
import yelp from '../api/yelp';

const ResultSearchScreen = ({ route }) => {
    const [result, setResult] = useState(null)
    const { id } = route.params;
    const getResult = async (id) => {
        const response = await yelp.get(`${id}`)
        setResult(response.data)
    }
    useEffect(() => {
        getResult(id)
    }, [])
    if (!result) {
        return null
    }

    return (
        <>
            <View
                style={styles.container}
            >
                <View style={styles.infos}>
                    <Text style={styles.text}>Adress: {result.location.address1} - {result.location.city} - {result.location.country}</Text>
                    <Text style={styles.text}>Phone: {result.phone}</Text>
                    <Text style={styles.text}>Categories: {result.categories.map(category => category.title).join(', ')}</Text>
                    <Text style={styles.text}>{result.rating} ★</Text>
                    <Text style={{ ...styles.text, color: result.hours[0].is_open_now ? '#267302' : '#F20505' }}>
                        {result.hours[0].is_open_now ? 'Open now' : 'Closed'}
                    </Text>
                </View>

                <FlatList
                    data={result.photos}
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                    keyExtractor={(photo) => photo}
                    renderItem={({ item }) => {
                        return <Image style={styles.image} source={{ uri: item }} />
                    }}
                />
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        marginBottom: 10,
    },
    infos: {
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        elevation: 10,
        backgroundColor: '#eeeeee'
    },
    name: {
        fontWeight: '600',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 15,
        color: '#BF0404',
    },
    text: {
        fontWeight: '600',
        color: '#2F261D',
        marginBottom: 15,
        fontSize: 16
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 7,
        marginBottom: 10,
    },

})

export default ResultSearchScreen
