import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
	return (
		<View style={styles.background}>
			<Text style={styles.text}>Home screen</Text>
			<Link href='/about' style={styles.button}>
				Go to About screen
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
		alignItems: 'center',
		backgroundColor: 'purple',
		flex: 1,
		justifyContent: 'center',
	},
	text: {
		color: 'white',
	},
	button: {
		color: '#fff',
		fontSize: 20,
		marginTop: 40,
		textDecorationLine: 'underline',
	},
});
