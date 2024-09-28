import {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  const [inputValue, setInputValue] = useState('');
  //   const deger = useState(8);
  //   console.log(deger);

  //1) Bileşenin ekrana basılma olayını izle
  //   useEffect(() => {
  //     console.log('!!!!!!!! BİLEŞEN EKRANA BASILDI!!!');
  //   }, []);

  //2) Bileşen ekrandan gitme olayını izle
  //   useEffect(() => {
  //     return () => console.log('>>>>>>>BİLEŞEN EKRANDAN GİTTİ');
  //   }, []);

  //3)BİLEŞENİN EKRANA GELME VE GİTME OLAYINI İZLE
  //   useEffect(() => {
  //     console.log('!!!!!!!! BİLEŞEN EKRANA BASILDI!!!');
  //     return () => console.log('>>>>>>>BİLEŞEN EKRANDAN GİTTİ');
  //   }, []);

  //4)BİLEŞENİN UPDATE OLMA OLAYINI İZLE
  //   useEffect(() => {
  //     console.log('!!!!!BİLEŞEN RENDER OLDU STATE VEYA PROPS DEĞİŞTİ.');
  //   });

  //5) INPUT DEĞİŞİME BAĞIMLI OLAN DEĞERİ İZLE
  useEffect(() => {
    console.log('INPUT DEĞERİ DEĞİŞTİ:', inputValue);
  }, [inputValue]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Değer girin"
        value={inputValue}
        onChangeText={setInputValue}
      />

      <TouchableOpacity
        onPress={() => setCount(count - 1)}
        disabled={count === 0}
        style={[
          styles.button,
          {backgroundColor: count < 10 ? 'red' : 'green'},
        ]}>
        <Text style={styles.buttonText}>Azalt</Text>
      </TouchableOpacity>

      <Text style={styles.countText}>{count}</Text>

      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={[
          styles.button,
          {backgroundColor: count > 10 ? 'red' : 'green'},
        ]}>
        <Text style={styles.buttonText}>Arttır</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setCount(0)}
        style={[styles.button, {backgroundColor: 'blue'}]}>
        <Text style={styles.buttonText}>Sıfırla</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  countText: {
    fontSize: 60,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '80%',
  },
});
