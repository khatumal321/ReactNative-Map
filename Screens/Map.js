import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';



export default class App extends React.Component {
    constructor() {
        super()
        state = {
            location: null,
            errorMessage: null,
        };
    }

    componentDidMount = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status.status !== 'granted') {
            alert("Check your react native Console")
        }
    }
    LocationFunc = async () => {
        alert("your location address send to console")
        let location = await Location.getCurrentPositionAsync({});
        console.log("=============your location====>", location);
        this.setState({ location });
    };


    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.mapStyle} />
                <View style={{ position: 'absolute', zIndex: 1}}>
                    <Button
                        title='Your Location'
                        onPress={() => this.LocationFunc()}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute"
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
