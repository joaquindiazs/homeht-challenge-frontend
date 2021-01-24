import { render, fireEvent, screen } from '@testing-library/react';
import FormTenantDetails from './FormTenantDetails'
import Confirm from './Confirm'

const values = { firstName: 'John', lastName: 'Doe', email: 'johndoe@test.com', phoneNumber: '(+49)0123456', salaryIndicator: '0 - 1000' }
it('should render the Confirm component if all the inputs are filled', () => {
    render(<FormTenantDetails values = {values} handleChange={()=>{}} nextStep={()=>{}} />);
    const continueButton = screen.getByText('Continue')
    fireEvent.click(continueButton)
    render(<Confirm values = {values} handleChange={()=>{}} nextStep={()=>{}} />);
    expect(screen.getByText('Confirm Tenant Data')).toBeInTheDocument()
});

it('should render error class if an input is empty', () => {
    values.email = ''
    render(<FormTenantDetails values = {values} handleChange={()=>{}} nextStep={()=>{}} />);
    const continueButton = screen.getByText('Continue')
    fireEvent.click(continueButton)
    expect(screen.getByText('Enter Your Email')).toHaveClass('Mui-error', {exact: false}) 
});