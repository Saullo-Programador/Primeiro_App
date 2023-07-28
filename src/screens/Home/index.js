import { StyleSheet, Image, View } from 'react-native';

import logo from '../../'; 

export default function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image/>
            <Image/>
        </View>

        <View style={styles.card}></View>
        <View style={styles.card}></View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#820AD1',
    alignItems: 'center',
    
  },
});
