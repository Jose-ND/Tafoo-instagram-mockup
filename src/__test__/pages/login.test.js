import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Login from '../../pages/login';
import FirebaseContext from '../../context/firebase';
import { act } from 'react-dom/test-utils';
import * as ROUTES from '../../constants/routes';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush
    })  
}));

jest.mock('../../services/firebase');

describe('<Login />', () => {

    //-this clears out all the mocks in the form
    beforeEach(() => {
        jest.clearAllMocks();
    })
    //---------------
    it('renders the login page with a form submission and logs the user in', async () => {
        const failToLogin = jest.fn(() => Promise.reject(new Error('Cannot sign in')));
        const firebase = {
            auth: jest.fn(() => ({
                signInWithEmailAndPassword: failToLogin
            }))
        }
        const { getByTestId, getByPlaceholderText, queryByTestId } = render(
            <Router>
                <FirebaseContext.Provider value={{ firebase }}>
                    <Login />
                </FirebaseContext.Provider>
            </Router>
        );

        await act(async () => {
        expect(document.title).toEqual('Login - Tafoo');

        await fireEvent.change(getByPlaceholderText('Email address'), {
            target: { value: 'issaidiaz2@gmail.com' }
        });

        await fireEvent.change(getByPlaceholderText('Password'), {
            target: { value: '123test' }
        });

        fireEvent.submit(getByTestId('login'));

        // expect(succeedToLogin).toHaveBeenCalled();
        // expect(succeedToLogin).toHaveBeenCalledWith('issaidiaz2@gmail.com', '123test');

        await waitFor(() => {
            expect(mockHistoryPush).toHaveBeenCalledWith(ROUTES.DASHBOARD);
            expect(getByPlaceholderText('Email address').value).toBe('issaidiaz2@gmail.com');
            expect(getByPlaceholderText('Password').value).toBe('123test');
            expect(queryByTestId('error')).toBeFalsy();
        })
    });
    });

    //-----you are now creating a fail test 1/22/2022

    it('renders the login page with a form submission and fails to login the user', async () => {
        const succeedToLogin = jest.fn(() => Promise.resolve('I am signed in!'));
        const firebase = {
            auth: jest.fn(() => ({
                signInWithEmailAndPassword: jest.fn(() => Promise.resolve('I am signed in!'))
            }))
        }
        const { getByTestId, getByPlaceholderText, queryByTestId } = render(
            <Router>
                <FirebaseContext.Provider value={{ firebase }}>
                    <Login />
                </FirebaseContext.Provider>
            </Router>
        );

        await act(async () => {
        expect(document.title).toEqual('Login - Tafoo');

        await fireEvent.change(getByPlaceholderText('Email address'), {
            target: { value: 'issaidiaz@gmail.com' }
        });

        await fireEvent.change(getByPlaceholderText('Password'), {
            target: { value: '123test' }
        });

        fireEvent.submit(getByTestId('login'));

        expect(failToLogin).toHaveBeenCalled();
        expect(failToLogin).toHaveBeenCalledWith('issaidiaz2@gmail.com', '123test');

        await waitFor(() => {
            expect(mockHistoryPush).not.toHaveBeenCalledWith(ROUTES.DASHBOARD);
            expect(getByPlaceholderText('Email address').value).toBe('');
            expect(getByPlaceholderText('Password').value).toBe('');
            expect(queryByTestId('error')).toBeTruthy();
        })
    });
    });
});

