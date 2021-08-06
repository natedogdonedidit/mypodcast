import React from 'react';
import {ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

const KeyboardDismissView = () => {
	withScrollView?: Boolean;
}

const KeyboardDismissView: React.FC<Props> = (props) => {
	if (props.withScrollView) {
		return (
			<ScrollView keyboardShouldPersistTabs="never"
			contentContainerStyle={s.container}
			>
				{props.children}
			</ScrollView>
		);
	}
	return (
		<TouchableOpacity activeOpacity={1}>

		</TouchableOpacity>
	)
}

const s = StyleSheet.create({
	container: {
		flex: 1,
	}
})

export default KeyboardDismissView;