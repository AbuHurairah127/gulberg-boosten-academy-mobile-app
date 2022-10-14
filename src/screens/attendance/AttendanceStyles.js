import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  graphContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  attendanceInfoContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 8,
  },
  singleInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelColor: {
    width: 10,
    height: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
});
