import {StyleSheet, Dimensions} from 'react-native';
const deviceWidth = Math.round(Dimensions.get('window').width);
export const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 25,
    height: 325,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    padding: 15,
  },
  cardHeader: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  cardHeaderText: {
    textAlign: 'center',
    padding: 3,
    fontSize: 15,
  },
  cardBody: {
    fontSize: 15,
    height: 300,
    backgroundColor: 'green',
  },
  leftSection: {
    justifyContent: 'space-between',
    height: 300,
    backgroundColor: 'white',
  },
});
