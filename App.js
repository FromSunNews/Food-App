import React from 'react';
import Providers from './navigation/index';
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native'
import { COLORS, SIZES } from './constants';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer.js'

import { useFonts } from 'expo-font';
//create store
const store = createStore(reducer)

Amplify.configure(config)

function App() {
  const [loaded] = useFonts({
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),


  });
  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <Providers></Providers>
    </Provider>

  );
}
const signUpConfig = {
  header: "Sign Up Your Account",
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Full name",
      key: "name",
      required: true,
      displayOrder: 1,
      type: "string",
    },
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 2,
      type: "string",
    },
    {
      label: "Username",
      key: "preferred_username",
      required: true,
      displayOrder: 3,
      type: "string",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 4,
      type: "password",
    },

  ],
};
const customTheme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: COLORS.yellowMain,
    borderRadius: SIZES.radius,
    borderWidth: 1,
  },
  buttonText: {
    color: COLORS.blackMain,
    fontSize: 14,
    fontWeight: '600'
  },
  input: {
    padding: 16,
    borderWidth: 1,
    borderRadius: SIZES.radius,
    borderColor: COLORS.lightGray1,
    color: COLORS.blackMain,
  },
  buttonDisabled: {
    ...AmplifyTheme.buttonDisabled,
    backgroundColor: COLORS.lightGray1,
    borderRadius: SIZES.radius,
  },
  sectionFooterLink: {
    fontSize: 14,
    color: COLORS.blue,
    alignItems: 'baseline',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  sectionHeaderText: {
    color: COLORS.blackMain,
    fontSize: 24,
    fontWeight: '500',
  },
  linkUnderlay: {
    color: COLORS.blue,
  },
  sectionFooterLinkDisabled: {
    fontSize: 14,
    color: 'gray',
    alignItems: 'baseline',
    textAlign: 'center',
    fontWeight: 'bold'
  },
}
export default withAuthenticator(App, { signUpConfig, theme: customTheme });
