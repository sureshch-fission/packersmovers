import React from 'react';
import { View,Text } from 'react-native';
import { Appbar } from 'react-native-paper';

export const HeaderComponent= (props) =>{
    return (
        <Appbar>
            <Appbar.BackAction />
            <Appbar.Content title={props.title} />
        </Appbar>
    )
}