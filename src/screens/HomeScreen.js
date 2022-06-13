import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './ProfileScreen';
import Post from './PostScreen';

const Stack = createNativeStackNavigator();

function HomeScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen component={Profile} name="Profile" options={{ title: 'Profile Title' }} />
            <Stack.Screen component={Post} name="Post" options={{ title: 'Post Title' }} />
        </Stack.Navigator>
    );
}

export default HomeScreen;
