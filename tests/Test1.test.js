import { render, screen } from "@testing-library/react-native";
import '@testing-library/react-native/extend-expect';
import Calculator from "../components/Calculator";


describe('Chek components', () => {
    it('Is there a text inputs', () => {
        const doc = render(<Calculator/>).toJSON();
        expect( doc.children.filter(e => e.type == 'TextInput').length).toBe(2);
    });
    it('Is there a text for result', () => {
        const doc = render(<Calculator/>).toJSON();
        expect( doc.children.filter(e => e.type == 'Text').length).toBeGreaterThan(0);
    });
    it('Is there a button component with correct text', () => {
        const doc = render(<Calculator/>).toJSON();
        expect( screen.getByRole('button')).toBeOnTheScreen();
    });
});


