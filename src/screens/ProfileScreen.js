import { View, Text, Button } from 'react-native';

function Profile({ navigation }) {
    return (
        <View>
            <Button
                color={'red'}
                onPress={() => navigation.navigate('Post', { title: 'From Profile' })}
                title="Hello"
            />
        </View>
    );
}

export default Profile;
