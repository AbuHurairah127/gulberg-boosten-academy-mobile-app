import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperSection: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    // width: '100 %',
  },
  lowerSection: {
    flex: 1,
    justifyContent: 'space-around',
  },
  infosContainer: {
    margin: 15,
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
  },
  singleInfo: {
    flexDirection: 'row',
  },
  infoLabelContainer: {flex: 1, justifyContent: 'space-evenly'},
  infoLabel: {fontSize: 16, fontWeight: 'bold'},
  infoValContainer: {flex: 1, justifyContent: 'space-evenly'},
  infoVal: {fontSize: 16},
  logoutButtonContainer: {
    alignItems: 'center',
    margin: 10,
  },
});
