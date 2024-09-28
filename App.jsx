import {View, Button} from 'react-native';
import React, {useState} from 'react';
import Counter from './src/Counter';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 60,
      }}>
      <View style={{marginBottom: 20}}>
        <Button
          title="Gizle / Göster"
          onPress={() => setIsVisible(!isVisible)}
        />
      </View>

      {isVisible && <Counter />}
    </View>
  );
};
