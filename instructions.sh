// Instalar react-navigation/native
npm install @react-navigation/native

// Instalar las dependencias

npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

// Instalar navegación en Stack

npm i @react-navigation/stack

// Si desarrollas una app para iOS 

cd ios/
pod install

// En Android android/app/build.gradle
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'

// en el App.js 
import 'react-native-gesture-handler';

//React Native Paper
yarn add react-native-paper
yarn add react-native-vector-icons
# react-native link react-native-vector-icons