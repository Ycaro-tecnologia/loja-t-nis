import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default function Shoes() {

function filterDesc(desc) {
    if(desc.length < 27) {
        return desc;
    }

    return `${desc.substring(0, 23)}...`;
}

    return (
        <TouchableOpacity>
            <Image
            source={require('../../assets/1.png')}
            style={styles.shoesImg}
            />
            <Text style={styles.shoesText}>
               {filterDesc('Nike Shox 10 do Ycaro-tecnologia')} 
            </Text>
            <View opacity={0.4}>
            <Text style={styles.shoesText}>
                R$190,99
            </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shoesImg: {
        width: 155,
        height: 155
    },
    shoesText: {
        fontSize: 14
    }
})