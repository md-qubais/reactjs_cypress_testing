import { render,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import TransactionCreateStepTwo from "./TransactionCreateStepTwo"


// below 2 are the unit test 
// test('on initial render, the pay button is disabled',async ()=>{
//     render(<TransactionCreateStepTwo sender={{id:"5"}} receiver={{id:"5"}} />);
//     expect(await screen.findByRole('button',{name:/pay/i})).toBeDisabled();
// })

// test('if amount and the note is entered, the pay button is enabled', ()=>{
//     render(<TransactionCreateStepTwo sender={{id:"5"}} receiver={{id:"5"}} />);
//     userEvent.type(screen.getByPlaceholderText(/amount/i),'50');
//     userEvent.type(screen.getByPlaceholderText(/add a note/i),'dinner');
//     expect( screen.getByRole('button',{name:/pay/i})).toBeEnabled();
// })


// intergration test is nothing but combining 2 or more unit test/ combining 2 or more test cases or group of test cases
test('if amount and the note is entered, the pay button is enabled',async ()=>{
    render(<TransactionCreateStepTwo sender={{id:"5"}} receiver={{id:"5"}} />);
    expect(await screen.findByRole('button',{name:/pay/i})).toBeDisabled();
    userEvent.type(screen.getByPlaceholderText(/amount/i),'50');
    userEvent.type(screen.getByPlaceholderText(/add a note/i),'dinner');
    expect( screen.getByRole('button',{name:/pay/i})).toBeEnabled();
})

// End to End testing is the most best and the effective way of testing an application



