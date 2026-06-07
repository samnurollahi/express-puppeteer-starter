const browser = require("../browser");
const createPage = require("../page");

module.exports = class {
  constructor() {}

  async searchInGoogle() {
    const page = await createPage(browser());
    await page.goto("https://google.com");
  }
};
