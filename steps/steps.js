const expect = require("chai").expect;
const {Given, When, Then } = require('@cucumber/cucumber')
const LoginPage = require('../pageObjects/login.page');
const ProductPage = require('../pageObjects/productPage')
const CartPage = require('../pageObjects/cartPage')
const CheckoutPage = require('../pageObjects/checkoutPage')

const pages = {
    login: LoginPage
}
Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
    expect(await LoginPage.swagLabsLogo.isVisible()).to.be.true;
    const loginPageTitle = await global.page.title();
    expect(loginPageTitle).to.equal('Swag Labs');
});

When(/^I add all items to the cart$/, async() => {
	await ProductPage.addAllItemsToCart()
});

When(/^I proceed to checkout$/, async() => {
	await ProductPage.openCart()
    await CartPage.checkout()
});

When(/^I fill the checkout information with '(.*)', '(.*)', and '(.*)'$/, async(firstName, lastName, zipCode) => {
    await CheckoutPage.fillCheckoutInfo(firstName, lastName, zipCode)
});

When(/^I complete the checkout process$/,async () => {
    await CheckoutPage.completeCheckout()
});

Then(/^I should see the order confirmation page$/, async() => {
    expect(await CheckoutPage.confirmation.isVisible()).not.to.be.true;
});