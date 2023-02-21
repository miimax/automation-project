class ProductDetailPage {
    elements = {
        btnAddToCart: () => cy.get("#product-addtocart-button"),
        btnViewCart: () => cy.get(".counter-number"),
        lblOderTotal: () => cy.get("[data-bind='i18n: title']"),
        btnProceedToCheckout: () => cy.contains("Proceed to Checkout")
    }

    chooseProductSizeAndColor(productSize, productColor) {
        cy.get(`[aria-label=${productSize}]`).click()
        cy.get(`[aria-label=${productColor}]`).click()
        this.elements.btnAddToCart().click()
    }

    clickViewCart() {
        cy.wait(2000)
        this.elements.btnViewCart().click()
        cy.contains("View and Edit Cart").click()
    }

    clickProceedToCheckout() {
        // cy.get("[data-bind="i18n: title"]", { timeout: 10000 }).should("be.visible")
        cy.wait(1000)
        cy.get("[data-bind='i18n: title']").should("be.visible")
        this.elements.btnProceedToCheckout().click({ force: true })
    }


    verifyIfProductNameIsCorrected(productName) {
        cy.get("h1").should("include.text", productName)
    }

    verifyURLIsCorrected(path) {
        cy.url().should("include", path)
    }
}

export default new ProductDetailPage()