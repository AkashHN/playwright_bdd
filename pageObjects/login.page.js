const Page = require("./page");
const expect = require("chai").expect;
class LoginPage extends Page {
  get inputUsername() {
    return global.page.locator("#user-name");
  }

  get inputPassword() {
    return global.page.locator("#password");
  }

  get btnSubmit() {
    return global.page.locator("#login-button");
  }
  get swagLabsLogo() {
    return global.page.locator(".app_logo");
  }

  async login(username, password) {
    expect(await this.inputUsername.isVisible()).to.be.true;
    expect(await this.inputPassword.isVisible()).to.be.true;
    expect(await this.btnSubmit.isVisible()).to.be.true;
    await this.inputUsername.fill(username);
    await this.inputPassword.fill(password);
    await this.btnSubmit.click();
  }

  open() {
    return super.open("v1/");
  }
}

module.exports = new LoginPage();
