import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	Button
} from 'react-native';

interface Props {
	navigation: any;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.button}>
					<Button
						onPress={() => navigation.navigate('Login')}
						title="登入"
						color="white"
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Button
						onPress={() => navigation.navigate('Register')}
						title="註冊"
						color="white"
					/>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#323633',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonContainer: {

	},
	button: {
		backgroundColor: '#f29435',
		fontWeight: '900',
		width: 100,
		margin: 15,
		borderRadius: 7
	}
});

export default HomeScreen;