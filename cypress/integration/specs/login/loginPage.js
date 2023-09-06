const USERNAME_INPUT = '[data-test="username"]' 
const PASSWORD_INPUT = '[data-test="password"]' 
const SUBMIT_BUTTON = '[data-test="login-button"]'
 

class LoginPage{
    static typeUsername(name) {
        cy.get(USERNAME_INPUT).type(name)
    }

    static typePassword(password) {
        cy.get(PASSWORD_INPUT).type(password)
    }

    static submit() {
        cy.get(SUBMIT_BUTTON).click()
    }
}

export default LoginPage