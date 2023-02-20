class OrderPage {
    elements = {
        txtEmailAddress: () => cy.get("#customer-email"),
        txtFirstName: () => cy.get("[name='firstname']"),
        txtLastName: () => cy.get("[name='lastname']"),
        txtCompany: () => cy.get("[name='company']"),
        txtStreetAddress: () => cy.get("[name='street[0]']"),
        txtCity: () => cy.get("[name='city']"),
        ddlState: () => cy.get("[name='region_id']"),
        txtZip: () => cy.get("[name='postcode']"),
        ddlCountry: () => cy.get("[name='country_id']"),
        txtPhoneNumber: () => cy.get("[name='telephone']"),
        rdoShippingMethod: () => cy.get("[type='radio']"),
        btnNext: () => cy.contains("Next"),
        chkCheck: () => cy.get("[name='billing-address-same-as-shipping']"),
        btnPlaceOrder: () => cy.contains("Place Order"),
        msgOrderSuccessfully: () => cy.get("[data-ui-id='page-title-wrapper']")
    }

    fillInformations(userData) {
        this.elements.txtEmailAddress().eq(0).type(userData.emailAddress)
        this.elements.txtFirstName().type(userData.firstName)
        this.elements.txtLastName().type(userData.lastName)
        this.elements.txtCompany().type(userData.company)
        this.elements.txtStreetAddress().type(userData.streetAddress)
        this.elements.txtCity().type(userData.city)
        this.elements.ddlState().select(userData.state)
        this.elements.txtZip().type(userData.zip)
        this.elements.ddlCountry().select(userData.country)
        this.elements.txtPhoneNumber().type(userData.phoneNumber)
        this.elements.rdoShippingMethod().check(userData.shippingMethodFixed)
        this.elements.btnNext().click()
    }

    placeOder() {
        this.elements.chkCheck().check()
        this.elements.btnPlaceOrder().click()
    }

    verifyOrderSuccessfully() {
        this.elements.msgOrderSuccessfully().should('have.text', 'Thank you for your purchase!')
    }
}

export default new OrderPage()