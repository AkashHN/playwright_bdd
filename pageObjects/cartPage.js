class CartPage {
  get checkoutButton() {
    return global.page.locator("//a[text()='CHECKOUT']");
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}

module.exports = new CartPage();
