import React from 'react';
import {PhotoEditorModal} from 'react-native-photoeditorsdk';

const App: () => React$Node = () => {
  return (
    <PhotoEditorModal visible={true} image={require('./assets/photo.jpg')} />
  );
};

export default App;
