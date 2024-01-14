// Kodlar Buraya
function thumbNailChange() {
  let thumb = document.querySelectorAll('.main-navigation img');
  let purposeImg = document.getElementById('main-image');
  thumb.forEach((item) => {
    item.addEventListener('mouseenter', (event) => {
      purposeImg.src = event.target.src;
    });
  });
}

thumbNailChange();
