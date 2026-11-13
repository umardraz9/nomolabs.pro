// Optional browser QA: install playwright locally before running this script.
import {chromium} from 'playwright';
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
for(const width of [390,768,1440]){
const page=await browser.newPage({viewport:{width,height:1000}});await page.goto('http://127.0.0.1:4174');await page.evaluate(()=>document.fonts.ready);console.log(JSON.stringify(await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,over:[...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().right>innerWidth+2).map(e=>e.className).slice(0,15)}))));await page.locator('.feature-image img').scrollIntoViewIfNeeded();await page.waitForFunction(()=>[...document.images].every(img=>img.complete));await page.screenshot({path:`qa-${width}.png`,fullPage:true});await page.getByRole('button',{name:'Apps 02'}).click();console.log('Apps visible:',await page.locator('[data-kind]:visible').count());await page.close();}
await browser.close();

