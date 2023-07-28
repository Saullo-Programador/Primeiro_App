import { StyleSheet, Image, View, Text, ScrollView} from 'react-native';

import logo from '../../assets/logo.png';
import setting from '../../assets/setting.png'; 
import mastercard from '../../assets/mastercard.png';
import Wallet from '../../assets/Wallet.png';
import pix from '../../assets/pix.png';
import boleto from '../../assets/boleto.png';
import dinheiro from '../../assets/dinheiro.png';

export default function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.header}>
                <Image source={logo}/>
                <Image source={setting}/>
            </View>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <View/>
                    <Image source={mastercard}/>
                </View>
                <Text style={styles.cardText}>Lara Ribeiro</Text>
            </View>

            <View style={styles.cardDetails}>
                <View style={styles.cardDetailsHeader}>
                    <Text style={styles.cardDetailsHeaderText}>Saldo disponivel</Text>
                    <Image source={Wallet}/>
                </View>
                <Text style={styles.cardDetailsText}>R$1.959.750.000,00</Text>
            </View>
        </View>
        <View style={styles.footer}>
            <Text style={styles.footerText}>Do que precisa?</Text>
            
            <ScrollView style={styles.footerContentScrollView}
            showsHorizontalScrollIndicator={false} 
            horizontal={true}>
                <View style={styles.footerCard}>
                    <Image source={pix}/>
                    <Text style={styles.footerCardText}>Fazer um Pix</Text>
                </View>

                <View style={styles.footerCard}>
                    <Image source={boleto}/>
                    <Text style={styles.footerCardText}>Pagar um Boleto</Text>
                </View>

                <View style={styles.footerCard}>
                    <Image source={dinheiro}/>
                    <Text style={styles.footerCardText}>Fazer um Deposito</Text>
                </View>

                <View style={styles.footerCard}>
                    <Image source={pix}/>
                    <Text style={styles.footerCardText}>Fazer um Pix</Text>
                </View>

                <View style={styles.footerCard}>
                    <Image source={pix}/>
                    <Text style={styles.footerCardText}>Fazer um Pix</Text>
                </View>
            </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#820AD1',
  },
  content:{
    paddingHorizontal: 30,
  },
  header:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60
  },
  card:{
    width: '100%',
    height: 200,
    backgroundColor: "#9500F6",
    borderRadius: 20,
    elevation: 5,
    marginBottom: 30,
    padding: 20,
    justifyContent: "space-between",
  },
  cardDetails:{
    width: '100%',
    height: 140,
    backgroundColor: "#9500F6",
    borderRadius: 20,
    elevation: 5,
    padding: 20,
    paddingTop: 25,
    justifyContent: "space-between"
  },
  cardHeader:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardText:{
    color: "#FFFFFF",
    fontSize: 26,
    lineHeight: 36,
    fontWeight: "600",
    paddingLeft: 10,
  },
  cardDetailsHeader:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardDetailsText:{
    color: "#FFFFFF",
    fontSize: 33,
    fontWeight: '600',
  },
  cardDetailsHeaderText:{
    color: "#FFFFFF",
    fontSize: 16,
  },
  footer:{
    paddingTop: 50,
    paddingLeft: 20,
  },
  footerText:{
    color: "#FFFFFF",
    marginHorizontal: 20,
    paddingBottom: 30,
    fontSize:  14,
    fontWeight: "600",
  },
  footerCard: {
    width: 100,
    height: 127,
    backgroundColor: "#9500F6",
    borderRadius: 20,
    elevation: 5,
    padding: 20,
    justifyContent: "space-between",
    marginLeft: 10,
  },
  footerCardText:{
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 18,
  },
  footerContentScrollView:{
    height: 400,
  },
});
