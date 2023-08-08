import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultList = (props: any) => {

    if (!props.results.length) {
        return null
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>{props.title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={props.results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('Result Search Screen', { id: item.id, name: item.name })
                        }}>
                            <ResultsDetail
                                result={item}
                            />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>)
}

const style = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
        color: '#400101'
    }
})

export default ResultList