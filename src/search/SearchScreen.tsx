import React from 'react';
import {Text, TextInput, StyleSheet, View, FlatList} from 'react-native';
import {Box} from 'react-native-design-utility';
import { theme } from '../constants/theme';

const SearchScreen = () => {
	return(
		
		<Box f={1} bg='white'>
			<Box h={50} w='100%' mt='sm' px='sm' my='sm'>
				<TextInput style={s.input} placeholder="Search Podcast"/>
			</Box>
			<FlatList 
			style={s.list}
			data={[{id: 1}, {id: 2}, {id: 3}]}
			renderItem={() => (
				<Box h={90} bg="white" dir='row' align='center' px='sm'>
					<Box h={70} w={70} bg="blueLight" radius={10} mr={10}/>
					<Box>
					<Text >Joe Rogan</Text>
					<Text>This is subtitle</Text>
					<Text>400 Episodes</Text>
					</Box>
				</Box>

			)}

			/>
		</Box>
	
	)
}


const s = StyleSheet.create ({
	input: {
		height: 400,
		flex: 1,
		backgroundColor: theme.color.greyLightest,
		borderRadius: 10,
		paddingHorizontal: theme.space.sm,
		fontSize: theme.text.size.md,
		marginBottom: 0,
		alignItems: 'center',
	},
	list: {
		minHeight: '100%',
	}
})

export default SearchScreen;