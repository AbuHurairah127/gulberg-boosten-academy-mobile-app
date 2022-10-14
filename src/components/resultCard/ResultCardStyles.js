import {StyleSheet, Dimensions} from 'react-native';
const deviceWidth = Math.round(Dimensions.get('window').width);
export const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 35,
    height: 328,
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
    margin: 15,
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
    flexDirection: 'row',
  },
  cardBodyLeft: {
    height: 270,
    justifyContent: 'space-around',
    width: parseInt((deviceWidth - 65) / 2),
  },
  cardBodyLeftText: {
    fontSize: 15,
  },
  cardBodyRight: {
    width: parseInt((deviceWidth - 65) / 2),
    height: 270,
    justifyContent: 'space-around',
    borderLeftWidth: 1,
    paddingLeft: 15,
  },
});
