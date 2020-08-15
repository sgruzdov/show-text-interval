function showTextInterval({selector = '.text-interval', interval = 50, opacity = '1'} = {}) {
    const arrSel = document.querySelectorAll(selector);
    
    arrSel.forEach(elem => {
        let x = 0,
            str = elem.textContent;

        elem.textContent = '';
        elem.style.opacity = opacity;
        const timer = setInterval(()=> { (x == str.length) ? clearInterval(timer) : elem.textContent += str[x]; x++ }, interval);
    })
}
