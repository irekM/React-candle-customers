import React from 'react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { screen, fireEvent} from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';


describe('Form Field', () => {
    it(' adds new user to the list', () => {
        renderWithProviders(
        <>
        <AddUser/>
        <Dashboard/>
        </>
        );
        fireEvent.change(screen.getByTestId('Name'), {target: {value: 'Irek'}});
        fireEvent.change(screen.getByTestId('Attendance'), {target: {value: '55%'}});
        fireEvent.change(screen.getByTestId('Avarge'), {target: {value: '4.5'}});
        fireEvent.click(screen.getByTestId('Consent'));
        fireEvent.click(screen.getByTestId('Add'));
        screen.getByText('Irek');
    });

    it(' prevents adding new user if consent is not checked', () => {
        renderWithProviders(
        <>
        <AddUser/>
        <Dashboard/>
        </>
        );
        fireEvent.change(screen.getByTestId('Name'), {target: {value: 'Irek'}});
        fireEvent.change(screen.getByTestId('Attendance'), {target: {value: '55%'}});
        fireEvent.change(screen.getByTestId('Avarge'), {target: {value: '4.5'}});
        fireEvent.click(screen.getByTestId('Add'));
        const newUser = screen.getByText('Irek');
        console.log('newUser', newUser);
        expect(newUser).not.toBeInTheDocument();
    });
});
