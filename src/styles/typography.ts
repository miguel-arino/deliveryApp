import { StyleSheet } from 'react-native';
import colors from './colors';

const typography = StyleSheet.create({
    headline1: {
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 24,
        // lineHeight: 16,
        color: '#000000'
    },
    headline2: {
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 16,
        color: '#000000'
    },
    subtitle1: {
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 12,
        lineHeight: 16,
        color: colors.subtitle
    },
    title1: {
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 18,
        color: '#000000',
        // display:'flex',
        // alignItems: 'center'
    },
    title2: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 20,
        color: '#000000',
        // display:'flex',
        // alignItems: 'center'
    },
    footer1: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 12,
        color: '#000000',
    },
    footer2: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 10,
        lineHeight: 12,
        color: '#000000',
    },
});

export default typography;

