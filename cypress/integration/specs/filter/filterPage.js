const SORT_BUTTON = '[data-test="product_sort_container"]'

class FilterPage{
    static ascendingNameSort() {
        cy.get(SORT_BUTTON).select('Name (A to Z)')
    }

    static descendingNameSort() {
        cy.get(SORT_BUTTON).select('Name (Z to A)')
    }

    static ascendingPriceSort() {
        cy.get(SORT_BUTTON).select('Price (low to high)')
    }

    static descendingPriceSort() {
        cy.get(SORT_BUTTON).select('Price (high to low)')
    }

    static verifyAscendingFilterByName() {
        cy.get('[ class="product_sort_container"]')
        .select('az')
        .should("have.value","az")
        cy.get('[class="inventory_item_name"]').should(($item1) => {
            expect($item1).to.have.length(6)
        });
        cy.get('[class="inventory_item_name"]').eq(0).should("have.text","Sauce Labs Backpack")
        cy.get('[class="inventory_item_name"]').eq(1).should("have.text","Sauce Labs Bike Light")
        cy.get('[class="inventory_item_name"]').eq(2).should("have.text","Sauce Labs Bolt T-Shirt")
        cy.get('[class="inventory_item_name"]').eq(3).should("have.text","Sauce Labs Fleece Jacket")
        cy.get('[class="inventory_item_name"]').eq(4).should("have.text","Sauce Labs Onesie")
        cy.get('[class="inventory_item_name"]').eq(5).should("have.text","Test.allTheThings() T-Shirt (Red)")
    }

    static verifyDescendingFilterByName() {
        cy.get('[ class="product_sort_container"]')
        .select('za')
        .should("have.value","za")
        cy.get('[class="inventory_item_name"]').should(($item1) => {
            expect($item1).to.have.length(6) 
        });
        cy.get('[class="inventory_item_name"]').eq(0).should("have.text","Test.allTheThings() T-Shirt (Red)")
        cy.get('[class="inventory_item_name"]').eq(1).should("have.text","Sauce Labs Onesie");
        cy.get('[class="inventory_item_name"]').eq(2).should("have.text","Sauce Labs Fleece Jacket")
        cy.get('[class="inventory_item_name"]').eq(3).should("have.text","Sauce Labs Bolt T-Shirt")
        cy.get('[class="inventory_item_name"]').eq(4).should("have.text","Sauce Labs Bike Light")
        cy.get('[class="inventory_item_name"]').eq(5).should("have.text","Sauce Labs Backpack")
    }

    static verifyAscendingFilterByPrice() {
        cy.get('[ class="product_sort_container"]')
        .select('lohi')
        .should("have.value","lohi")
        cy.get('[class="inventory_item_name"]').should(($item1) => {
            expect($item1).to.have.length(6)
        });
        cy.get('[class="inventory_item_price"]').eq(0).should("have.text","$7.99")
        cy.get('[class="inventory_item_price"]').eq(1).should("have.text","$9.99")
        cy.get('[class="inventory_item_price"]').eq(2).should("have.text","$15.99")
        cy.get('[class="inventory_item_price"]').eq(3).should("have.text","$15.99")
        cy.get('[class="inventory_item_price"]').eq(4).should("have.text","$29.99")
        cy.get('[class="inventory_item_price"]').eq(5).should("have.text","$49.99")
    }

    static verifyDescendingFilterByPrice() {
        cy.get('[ class="product_sort_container"]')
        .select('hilo')
        // .should("have.value","hilo")
        cy.get('[class="inventory_item_name"]').should(($item1) => {
            expect($item1).to.have.length(6)
        });
        cy.get('[class="inventory_item_price"]').eq(0).should("have.text","$49.99")
        cy.get('[class="inventory_item_price"]').eq(1).should("have.text","$29.99")
        cy.get('[class="inventory_item_price"]').eq(2).should("have.text","$15.99")
        cy.get('[class="inventory_item_price"]').eq(3).should("have.text","$15.99")
        cy.get('[class="inventory_item_price"]').eq(4).should("have.text","$9.99")
        cy.get('[class="inventory_item_price"]').eq(5).should("have.text","$7.99")
    }
}


export default FilterPage