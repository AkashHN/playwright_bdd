const expect = require("chai").expect;

class CheckoutPage {
  get firstNameInput() {
    return global.page.locator('input[data-test="firstName"]');
  }
  get lastNameInput() {
    return global.page.locator('input[data-test="lastName"]');
  }
  get zipCodeInput() {
    return global.page.locator('input[data-test="postalCode"]');
  }
  get continueButton() {
    return global.page.locator("//input[@value='CONTINUE']");
  }
  get finishButton() {
    return global.page.locator("//a[text()='FINISH']");
  }
  get confirmation(){
    return global.page.locator("//h2[text()='THANK YOU FOR YOUR ORDER']")
  }

  async fillCheckoutInfo(firstName, lastName, zipCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.zipCodeInput.fill(zipCode);
    await this.continueButton.click();
  }

  async completeCheckout() {
    expect(await this.finishButton.isVisible()).to.be.true;
    await this.finishButton.click();
  }
}

module.exports = new CheckoutPage();
