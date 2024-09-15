import puppeteer from "puppeteer";

describe("validateCard Form", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test("Form should render on page start", async () => {
    await page.goto("http://localhost:9000");

    await page.waitForSelector(".form-inline");
  });

  test('Form input should remove class cdisabled from "card diners_club cdisabled" if card number is 30569309025904', async () => {
    jest.setTimeout(20000);
    await page.goto("http://localhost:9000");

    const form = await page.waitForSelector(".form-inline");

    const input = await form.$(".form-control");

    await input.type("30569309025904");

    await page.waitForSelector(".card.diners_club.check");
  }, 30000);

  afterEach(async () => {
    await browser.close();
  });
});
