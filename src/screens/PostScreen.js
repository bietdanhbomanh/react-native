import { View, Text } from 'react-native';

function PostScreen({ route }) {
    return (
        <View>
            <Text>{route.params.title}</Text>
        </View>
    );
}

export default PostScreen;
