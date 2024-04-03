/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Modal,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Modal
        supportedOrientations={['portrait']}
        animationType="slide"
        transparent={false}
        visible={true}>
        <Text style={{marginTop: 100}}>Hello</Text>
      </Modal>
    </SafeAreaView>
  );
}

export default App;
