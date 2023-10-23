import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log("App executed");
  
  return (
    <View style={styles.container}>
      <Text>CountEZ</Text>
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
