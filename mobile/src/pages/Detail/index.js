import React from 'react';
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';

import logoImg from '../../assets/logo.png';


export default function Detail() {
    const navigate = useNavigation();
    const mensage = 'Ola apad, estou entrando em contato pois gostaria de ajudar no caso "dogs do mal" com o valor de R$ 120,00';

    function navigateBack() {
        navigate.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            //assusto da mensagem
            subject: 'Herói do caso: dogs do mal',
            //pra quem vai ser enviado
            recipients: ['alexandre.yucra@gmail.com'],
            //mensagem q vai ser enviada
            body: mensage,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=5511943666677&text=${mensage}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e82041" />                    
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop:0 } ]}>ONG:</Text>
                <Text style={styles.incidentValue}>apad</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>dogs do mal</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}