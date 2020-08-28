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
    },
    title_cards: {
        fontSize: 28,
        margin: 5,
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    card: {
        width: '50%',
        height: '30%',
        padding: 10,
        marginTop: 30,
        marginBottom: 30
    },
    cardinner: {
        flex: 1,
        padding: 6,
        borderRadius: 20,
        backgroundColor: '#ec625f',
        alignItems: 'center',
        justifyContent: 'center'
    }
    // },
    // card: {
    //     flex: 1,
    //     flexWrap: 'wrap',
    //     flexDirection: 'row',
    //     borderRadius: 6,
    //     elevation: 3,
    //     backgroundColor: '#fff',
    //     marginHorizontal: 4,
    //     marginVertical: 6,
    //     shadowOffset: { width: 1, height: 1 },
    //     shadowColor: '#333',
    //     shadowOpacity: 0.3,
    //     shadowRadius: 2
    // },
    // cardContent: {
    //     marginHorizontal: 18,
    //     marginVertical: 10
    // }
});