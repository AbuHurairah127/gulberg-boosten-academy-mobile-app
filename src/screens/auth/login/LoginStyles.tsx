import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flex: 1,
    width: '100%',
    padding: 5,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  header_text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#212529',
  },
  body: {
    flex: 3,
    backgroundColor: '#212529',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    width: '100%',
  },
});
