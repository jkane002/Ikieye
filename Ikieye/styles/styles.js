import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    screencontainer: {
        flex: 1,
        backgroundColor: '#ebecf1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    title: {
        fontSize: 36,
        marginBottom: 16
    },
    cardouter: {
        flex: 1,
        height: '100%',
        width: '85%',
        padding: 5,
        flexDirection: 'row'
    },
    cardcontainer: {
        flexWrap: 'wrap',
    }
});