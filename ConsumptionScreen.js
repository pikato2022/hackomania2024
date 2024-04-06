import { ScrollView, View, StyleSheet } from "react-native"

const Consumption = ({navigation}) =>{
    function renderHeader() {
        return (
            <View
                style= {{
                    width:"100%",
                    height: 290,
                    ...styles.shadow
                }}>

            </View>
        )
    }
    return (
        <ScrollView>
            <View style={{flex:1, paddingBottom: 130}}>
                {renderHeader()}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default Consumption;