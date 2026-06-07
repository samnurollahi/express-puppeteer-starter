const pup = require("puppeteer-core");

let browser;

async function createBrowser() {
  browser = await pup.launch({
    headless: "shell",
    executablePath:
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    blocklist: ["https://zarebin.ir"],
    timeout: 50_000, // 50s
  });

  console.log("browser created");
}
createBrowser();

module.exports = () => browser;
