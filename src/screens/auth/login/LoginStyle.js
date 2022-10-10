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
    color: '#1D3557',
  },
  body: {
    flex: 3,
    backgroundColor: '#1D3557',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    width: '100%',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  input_Container: {
    flexDirection: 'row',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    alignItems: 'center',
    marginBottom: 30,
  },
  text_label: {
    color: 'white',
    fontSize: 18,
  },
  text_input: {
    paddingLeft: 10,
    color: 'white',
    width: '90%',
  },
  button_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});
