module.exports = class Page {
  open(path) {
    return global.page.goto(`https://www.saucedemo.com/${path}`);
  }
};
