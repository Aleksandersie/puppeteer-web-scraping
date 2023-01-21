const puppeteer = require('puppeteer');


(async()=>{

    const selector = '.i0X6df'

    const link = 'https://www.google.com/search?tbm=shop&hl=ru&psb=1&ved=2ahUKEwiY6bOMl9T8AhUaHwYAHbQ_CfwQu-kFegQIABAK&q=+6ES72111AE400XB0&oq=+6ES72111AE400XB0&gs_lcp=Cgtwcm9kdWN0cy1jYxADUABYAGAAaABwAHgAgAEAiAEAkgEAmAEA&sclient=products-cc'
    const linkTwo ="https://www.google.com/search?q=simotics+m+built-in&hl=ru&tbm=shop&sxsrf=AJOqlzVK2rL7X_SeuI6OSyhX-Wxjncu7iw%3A1674161179939&psb=1&ei=G6zJY6rYONKBi-gP_JOR0Ak&ved=0ahUKEwjq0bSzwNT8AhXSwAIHHfxJBJoQ4dUDCAg&oq=simotics+m+built-in&gs_lcp=Cgtwcm9kdWN0cy1jYxAMSgQIQRgAUABYAGAAaABwAHgAgAEAiAEAkgEAmAEA&sclient=products-cc"
    try{
        const browser = await puppeteer.launch({
            headless:false,
            slowMo: 50,
            devtools: true
        })
        const page = await browser.newPage()
        await page.goto(linkTwo)
        await page.waitForSelector('h3.tAxDx')

        const html = await page.evaluate( ()=>{
            const res = []
            try{
                const card = document.querySelectorAll(".i0X6df")
                card.forEach(el=>{
                    const title = el.querySelector("h3.tAxDx")
                    const price = el.querySelector("span.a8Pemb")
                    const supplier = el.querySelector("div.aULzUe")

                    const obj ={
                        title: title.innerText,
                        price: price.innerText,
                        supplier: supplier.innerHTML
                    }
                    res.push(obj)
                    console.log(obj)
                })
                console.log(res)
            }catch (e){
                console.log(e)
            }
            return res
        })
        console.log(html)
    }catch (e){
        console.log(e)
    }

})()
