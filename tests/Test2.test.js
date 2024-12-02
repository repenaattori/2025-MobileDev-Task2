import { fireEvent, render, screen, userEvent } from "@testing-library/react-native";
import '@testing-library/react-native/extend-expect';
import Calculator from "../components/Calculator";


describe('Check calculation', () => {
    it('First sum test', async () => {
        render(<Calculator/>);

        await fireEvent.changeText(screen.getByPlaceholderText('Num1'), '2');
        await fireEvent.changeText(screen.getByPlaceholderText('Num2'), '2');
        await fireEvent.press(screen.getByRole('button'));

        expect(screen.getByText('4')).toBeOnTheScreen();
        
    });
    it('Second sum test', async () => {
        render(<Calculator/>);

        await fireEvent.changeText(screen.getByPlaceholderText('Num1'), '10');
        await fireEvent.changeText(screen.getByPlaceholderText('Num2'), '7');
        await fireEvent.press(screen.getByRole('button'));

        expect(screen.getByText('17')).toBeOnTheScreen();
        
    });

});


