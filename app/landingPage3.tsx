import { BackButton, TitleCard } from '@/components/TitleCard';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import landingPage2 from './landingPage2';

export default function landingPage3() {
    return (
        <View styles>
            {BackButton()}
            {TitleCard()}
        </View>
    )
}