class ProductPage {
  get addToCartButton() {
    return global.page.locator("(//button[text()='ADD TO CART'])[1]");
  }
  get shoppingCartLink() {
    return global.page.locator("a.shopping_cart_link");
  }
  async addAllItemsToCart() {
    const button = await this.addToCartButton.click();
  }

  async openCart() {
    await this.shoppingCartLink.click();
  }
}

module.exports = new ProductPage();
