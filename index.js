const puppeteer = require('puppeteer');


(async()=>{
    const link = "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=stepper+motor&_sacat=0&LH_TitleDesc=0&_odkw=stepper+motor&_osacat=0"
    try{
        const browser = await puppeteer.launch({
            headless:false,
            slowMo: 50,
            devtools: true
        })
        const page = await browser.newPage()
        await page.goto(link)
        await page.waitForTimeout(5000)
        const html = await page.evaluate(async ()=>{
            const res = document.querySelectorAll('li.s-item__pl-on-bottom')
            console.log(res)
        })
    }catch (e){
        console.log(e)
    }
})()
