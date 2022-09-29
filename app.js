const productsCount = document.querySelector('#products-count')
console.log(productsCount);

const addToCartBtns = document.querySelectorAll('.add-btn');
console.log(addToCartBtns);


// for (let i = 0; i < addToCartBtns.length; i++) {
//     addToCartBtns[i].addEventListener("click", function () {
//         console.log("clicked - for");
//     });
// }
addToCartBtns.forEach((item) => {
    item.addEventListener("click", function () {
        // console.log("clicked");
        let prevProductsCount = +productsCount.textContent;
        productsCount.textContent = prevProductsCount + 1;

        console.log(prevProductsCount);
    });
});


// let like = document.querySelectorAll('.like');
// console.log(like);
// like.forEach((item) => {
//     item.addEventListener("click", function () {
//         // console.log('liked');
//         if (item.classList.contains('liked')) {
//             item.classList.remove('liked')
//         } else {
//             item.classList.add('liked')
//         }
//     });
// });

let like = document.querySelectorAll('.like');
console.log(like);
like.forEach((item) => {
    item.addEventListener("click", function () {
        item.classList.toggle('liked')
    });
});


//modal
let modal = document.querySelector('.modal');
// console.log(modal);
let moreDetailsBtns = document.querySelectorAll('.details-btn');
console.log(moreDetailsBtns);
let closeBtn = document.querySelector('.btn-close');

// moreDetailsBtns.forEach((item) => {
//     item.addEventListener("click", function () {
//         modal.classList.add('show')
//     });
// });

// closeBtn.addEventListener('click', function () {
//     modal.classList.add('hide');
//     modal.classList.remove('show');
// })

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}
moreDetailsBtns.forEach((item) => {
    item.addEventListener("click", openModal);
});

closeBtn.addEventListener("click", closeModal);

modal.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    // e.preventDefault();
    if (e.target === modal) {
        closeModal()
    }
});

$('.slider').slick({
    dots: true
});

// функцию нищадно закопипастил, не судите строго))

window.onscroll = function () {
    var offset = window.pageYOffset || document.documentElement.scrollTop,
        windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        progress = Math.floor(offset / windowHeight * 100);
    if (progress >= 50) {
        openModal()
    } else if (progress < 50) {
        closeModal()
    }
    console.log(progress + '%');
}
