const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('no peleemos mas porfa amemonos me acoste tarde programando esto JKASHJKA pero mañana va a ser un dia muy hermoso para los dos mi amor te amo como no te lo imaginas te amo como nadie lo ha echo te amo')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})