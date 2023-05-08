import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [listaMateriais, setListaMateriais] = useState([]);
  const [nomeMaterial, setNomeMaterial] = useState('');
  const [precoMaterial, setPrecoMaterial] = useState('');

  function adicionarMaterial() {
    if (nomeMaterial.trim() === '' || precoMaterial.trim() === '') {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    
    const novoMaterial = { nome: nomeMaterial, preco: parseFloat(precoMaterial) };
    setListaMateriais([...listaMateriais, novoMaterial]);
    setNomeMaterial('');
    setPrecoMaterial('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Material Escolar</Text>

      <FlatList
        data={listaMateriais}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>{`R$ ${item.preco.toFixed(2)}`}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <TextInput
        style={styles.input}
        placeholder={'Nome do material'}
        onChangeText={setNomeMaterial}
        value={nomeMaterial}
      />
      <TextInput
        style={styles.input}
        placeholder={'Preço'}
        keyboardType={'numeric'}
        onChangeText={setPrecoMaterial}
        value={precoMaterial}
      />
      <Button
        title={'Comprar Material'}
        onPress={adicionarMaterial}
        color={'red'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 20
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
  nome: {
    fontSize: 20
  },
  preco: {
    color: 'red',
    fontSize: 16,
    marginLeft: 10
  },
  input: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'stretch'
  }
});
