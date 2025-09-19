import { StyleSheet, Text, View } from 'react-native';
import Cadastro from './componentes/Cadastro';
import Login from './componentes/Login';
import Gemini from './componentes/Gemini';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Gemini></Gemini>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
