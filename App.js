import React from 'react';
import { FlatList, StyleSheet, Text, Image, View, ScrollView, Dimensions } from 'react-native';
import { useLayoutEffect, useState } from 'react/cjs/react.development';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    img: {
        flex: 1,
        alignSelf: 'stretch',
        width: win.width,
    },
});

const logo = {
    uri: 'https://cpad.ask.fm/450/774/576/-29996968-1tfd7tc-gpggmmc5d0og3a0/original/image.jpg',
    width: win.width,
    height: win.width,
};

const FlatListBasics = () => {
    const [data, setData] = useState([]);
    useLayoutEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                const demo = data.map((item) => {
                    return { key: item.name };
                });
                setData([...demo, ...demo]);
            });
    }, []);
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={logo} />
                <FlatList
                    keyExtractor={(item, index) => index}
                    data={data}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        </ScrollView>
    );
};

export default FlatListBasics;
