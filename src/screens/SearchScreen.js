import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {

    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }
    return (
        <>
            <ScrollView
                style={styles.searchScreen}
            >
                <SearchBar
                    term={term}
                    onTermChange={setTerm}
                    onTermSubmit={() => { searchApi(term) }}
                />
                {errorMessage ? <Text>{errorMessage}</Text> : null}
                {/* SCROLL VIEW PARA RENDERIZAR ELEMENTOS MESMO NÃO MOSTRADOS NA TELA */}
                <ResultList
                    results={filterResultsByPrice('$')}
                    title="Cost Effective"
                    navigation={navigation}
                />
                <ResultList
                    results={filterResultsByPrice('$$')}
                    title="Bit Pricier"
                    navigation={navigation}
                />
                <ResultList
                    results={filterResultsByPrice('$$$')}
                    title="Bit Spender"
                    navigation={navigation}
                />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    searchScreen: {
        backgroundColor: '#efefef',

    }

})

export default SearchScreen