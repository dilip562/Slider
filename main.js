const track = document.querySelector('.img-container');
const imgs = Array.from(track.children);
const btns = document.querySelector('.btn-container');
const btn = Array.from(btns.children);
const detailContainer = document.querySelector('.detail');
const eachDetail = Array.from(detailContainer.children);
const takeSize = document.querySelector('.part2')


imgSize = imgs[0].getBoundingClientRect().width;
partSize = takeSize.getBoundingClientRect().width;
console.log(partSize)
detailSize = eachDetail[0].getBoundingClientRect().height;
// console.log(imgSize)

imgs.forEach((img, index) => {
    img.style.left = partSize * index + 'px';
})

eachDetail.forEach((detail, index) => {
    detail.style.top = detailSize * index + 'px';
})

const moveToSlide = (track, currentSlide, targetSlide) => {
    const amountToMove = targetSlide.style.left;
    // console.log(amountToMove)
    track.style.transform = 'translateX(-' + amountToMove + ')'
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide')
}

const moveToTop = (track, currentSlide, targetSlide) => {
    const amountToMove = targetSlide.style.top;
    // console.log(amountToMove)
    track.style.transform = 'translateY(-' + amountToMove + ')'
    currentSlide.classList.remove('current-detail');
    targetSlide.classList.add('current-detail')
}

btns.addEventListener('click', e => {
    const targetbtn = e.target.closest('button');
    // console.log(targetbtn)
    if (!targetbtn) return;

    const currentSlide = track.querySelector('.current-slide');
    // console.log(currentSlide)
    const currentbtn = btns.querySelector('.current-btn');
    const currentDetail = detailContainer.querySelector('.current-detail');
    // console.log(btn)
    const targetIndex = btn.findIndex(btn => btn === targetbtn)
    // console.log(targetIndex / 2)
    const targetSlide = imgs[targetIndex / 2];
    const targetDetail = eachDetail[targetIndex / 2];

    moveToSlide(track, currentSlide, targetSlide);
    moveToTop(detailContainer, currentDetail, targetDetail)

    currentbtn.classList.remove('current-btn')
    targetbtn.classList.add('current-btn')
})

