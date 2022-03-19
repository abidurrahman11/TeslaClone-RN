import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles  from './styles';
import StyledButton from '../StyledButton';

const CarItem = (props) => {

    const { name, tagLine, tagLineCTA, image } = props.car;

    return (
        <View style={styles.carCointainer}>

            <ImageBackground source={image} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagLine}
                    {' '}
                    <Text style={styles.subtitleCTA}>
                        {tagLineCTA}
                    </Text>
                </Text>
            </View>


            <View style={styles.buttonsContainer}>
                <StyledButton
                    type="primary"
                    content={"Custom Order"}
                    onPress={() => {
                        console.warn('custom was pressed')
                    }}
                />

                <StyledButton
                    type="secondary"
                    content={"Existing Inventory"}
                    onPress={() => {
                        console.warn('secondary was pressed')
                    }}
                />
            </View>

            

        </View>
    );
};

export default CarItem;