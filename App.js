import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <HomeScreen />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default App;
