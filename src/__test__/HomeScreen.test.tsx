import {render, screen, fireEvent} from '@testing-library/react-native'
import HomeScreen from '../screens/HomeScreen'


describe('Render Home Screen', () => { 
    it(' Should render Home Screen', () => {
        render(<HomeScreen />)
    })

    it(' Should render textinput ', () => {
        render(<HomeScreen />)
        expect(screen.getByTestId('input-test')).toBeVisible()
    })

    it(' Should update the input value ', () => {
        render(<HomeScreen />)
        fireEvent.changeText(screen.getByTestId('input-test'),"jhon")
        expect(screen.getByTestId('input-test')).toHaveProp("value","jhon")
    })

    it(' Should render alert name button and press ', () => {
        render(<HomeScreen />)
        expect(screen.getByTestId('alert-button-test')).toBeVisible()
        fireEvent.press(screen.getByTestId('alert-button-test'))
    })
 })