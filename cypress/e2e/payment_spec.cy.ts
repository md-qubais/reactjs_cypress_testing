const {v4:uuidv4}=require('uuid');

describe('payment', () => {
  it('user can make payment', () => {


    // login
    cy.visit('http://localhost:3000');
    cy.findByRole('textbox',{name:/username/i}).type('johndoe') ;
    cy.findByLabelText(/password/i).type('s3cret');
    cy.findByRole('checkbox',{name:/remember me/i}).check();
    cy.findByRole('button',{name:/sign in/i}).click();
    // login completed


    //check account balance
    let oldBalance;
    cy.get('[data-test=sidenav-user-balance]').then($balance=>oldBalance=$balance.text());
    //check account balance completed

 
    //click on new button
    cy.findByRole('button',{name:/new/i}).click();
    // click on new button completed

    // search for the user
    cy.findByRole('textbox').type('devon becker')
    // search for the user completed

    //click on the searched user
    cy.findByText(/devon becker/i).click();
    // click on the searched user completed

    // add amount and note and then click on pay
    const paymentAmount='5.00';
    cy.findByPlaceholderText(/amount/i).type(paymentAmount);
    const note=uuidv4();
    cy.findByPlaceholderText(/add a note/i).type(note);
    cy.findByRole('button',{name:/pay/i}).click();
    // add amount and note and then click on pay completed

    // return to transactions
    cy.findByRole('button',{name:/return to transactions/i}).click();
    // return to transactions completed


    // go to personal payments
    cy.findByRole('tab',{name:/mine/i}).click();
    // go to personal payments completed

    // click on payments
    cy.findByText(note).click({force:true});
    //click on payments completed


    // verify if the payment was made
    cy.findByText(`-$${paymentAmount}`).should('be.visible');
    cy.findByText(note).should('be.visible');




  })
})