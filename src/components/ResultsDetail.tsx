import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = (props: any) => {
    return <View style={style.container}>
        <Image style={style.image} source={{ uri: props.result.image_url }} />
        <Text style={style.name}>{props.result.name}</Text>
        <Text style={style.rating} >
            <Text>{props.result.rating} ★ </Text>
            - {props.result.review_count} reviews
        </Text>
    </View>
}

const style = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 7,
        marginBottom: 5,
    },
    name: {
        fontWeight: "500",
        fontSize: 16,
        color: '#290404',
    },
    rating: {
        fontSize: 14,
        fontWeight: "800",
        color: '#390000',
    }

})

export default ResultsDetail