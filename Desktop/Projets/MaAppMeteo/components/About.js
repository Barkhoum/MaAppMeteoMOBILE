import React from 'react'
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native'

export default class About extends React.Component{

 render () {
     return (
     <View style={style.view}>
             <Text style={style.title}>Appli Météo en REACT text à venir</Text>
             <Text>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                 "Il ny a personne qui naime la souffrance pour elle-même, qui ne la recherche et qui ne la veuille pour elle-même..."</Text>
                  <ActivityIndicator color="#FF0000" size="large" animating={true}/>
         </View>
         )
    }
}

const style = StyleSheet.create({

    view:{
        margin:20,
    },
    title: {
        fontSize: 22,
        marginBottom: 20
    }
})