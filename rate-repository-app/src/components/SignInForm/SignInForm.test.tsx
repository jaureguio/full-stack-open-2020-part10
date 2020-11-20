import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';

import SignInFormContainer from './SignInFormContainer';

const credentials = {
  username: 'oscarj',
  password: '12345'
};

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct argumwnts when a valid form is submitted', async () => {
      const onSubmit = jest.fn();

      const { getByPlaceholderText, getByText } = render(<SignInFormContainer onSubmit={onSubmit} />);
      
      fireEvent.changeText(getByPlaceholderText('Username'), credentials.username);
      fireEvent.changeText(getByPlaceholderText('Password'), credentials.password);

      /**
       * The following warning is thrown even though act() call is awaited: 
       * 
       * Warning: You called act(async () => ...) without await. This could lead to unexpected testing behaviour,
       * interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);
       */
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      await act(async () => {
        await fireEvent.press(getByText(/sign in/i));
      });

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        expect(onSubmit.mock.calls[0][0]).toEqual(credentials);
      });
    });
  });
});