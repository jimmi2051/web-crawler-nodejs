const puppeteer = require('puppeteer');
const download = require('image-downloader');
const file = require('fs');
(async () => {
    //Open chrome 
    const browser = await puppeteer.launch();
    //Open new tab  
    const page = await browser.newPage();
    //Go to page tgdd
    await page.goto('https://www.thegioididong.com/dtdd/samsung-galaxy-m20', { waitUntil: 'networkidle2' });
    //Screen shot
    await page.screenshot({ path: 'data/screenshot.png' });

    //Get content all html
    const content = await page.evaluate(() => {
        var get_content = document.getElementsByClassName('right_content')[0].children[0].innerHTML;
        return get_content;
    });
    file.writeFileSync('data/index.html', content, function (err) {
        if (err) {
            return console.log(err);
        }
    });
    
    //Get content text 
    const context_text = await page.evaluate(() => {
        var get_content = document.getElementsByClassName('right_content')[0].children[0].innerText;
        return get_content;
    });
    file.writeFileSync('data/indexText.html', context_text, function (err) {
        if (err) {
            return console.log(err);
        }
    });

    //Get link image
    const imgLinks = await page.evaluate(() => {
        var imgElements = document.querySelectorAll('.item > img');
        var result = [];
        for (var i = 0; i < imgElements.length; i++) {
            var item = imgElements[i].getAttribute('src');
            if (item == null)
                item = imgElements[i].getAttribute('data-src');
            if (item[0] == '/')
                item = "https:" + item;
            result[i] = item;
        }
        return result;
    });
    //Download Image
    await Promise.all(imgLinks.map(imgUrl => download.image({
        url: imgUrl,
        dest: 'data/'
    })));
    console.log("Finish")
    await browser.close();s
})();