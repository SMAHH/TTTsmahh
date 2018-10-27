const puppeteer = require("puppeteer");
const request = require("supertest");
const app = require("../src/app");

//describe("OPTIONS /api", () => {
//  it("should return 200 status code", async () => {
//    const res = await request(app).options("/api");
//    expect(res.status).toBe(200);
//  });
//});

describe("Index tests", () => {
  let browser, page;
  let url = 'localhost:5000';


  it("should return 200 status code", async () => {
    const res = await request(app).options("/dist");
    expect(res.status).toBe(200);
  });

  beforeEach(async () => {
      browser = await puppeteer.launch({ headless: false, slowMo: 400 });
              //await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
              //await puppeteer.launch({ headless: false, slowMo: 400 });
      page = await browser.newPage();
  });
  afterEach(() =>{
    browser.close();
  });

  it("should select and click 1st square", async () => {
    //const res = await request(app).options("/dist");
    await page.goto(url);
    await page.focus('#btn0');
    await page.keyboard.type('\n');
    const value = await page.evaluate(() => document.querySelector('#btn0').innerHTML);
    console.log("i see value " +value);
    expect(value).toBe('X');
  });

  //it("should take a screenshot of the page", async () => {
  //  await page.setViewport({ width: 800, height: 650 });
  //  await page.goto(url);
  //  await page.screenshot({path: "index-screenshot.png"});
  //});


});

