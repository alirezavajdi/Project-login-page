
let myArray = [
  { name: "گوشی موبایل اپل  iPhone 11" , price: "۱۵/۰۰۰/۰۰۰ تومان"  , img :  './assets/img/owl-6.jpg' }, 
  { name: "لپ تاپ 15.6 اینچی اچ‌پی", price: "۲۰/۰۰۰/۰۰۰ تومان" , img :  './assets/img/img-2.jpg' },
  { name: "پایه نگهدارنده لپ تاپ ", price: "۵۰/۰۰۰ تومان" , img :  './assets/img/img-3.jpg'},
  { name: "ماوس پد مخصوص بازی ", price: "۱۵۰/۰۰۰ تومان" ,img :  './assets/img/img-4.jpg' },
  { name: "ماوس اونیکوما مدل CW902", price: "۲۸۰/۰۰۰ تومان" , img :  './assets/img/img-5.jpg'},
  { name: "فلش مموری کوئین تک   ظرفیت 64 گیگابایت", price: "۱۰۰/۰۰۰ تومان" , img :  './assets/img/img-6.jpg'},
  { name: "اسپیکر بلوتوثی قابل حمل لیتو  ", price: "۲/۵۰۰/۰۰۰ تومان" , img :  './assets/img/img-7.jpg'},
  { name: "هندزفری بلوتوثی لیتو مدل ", price: "۷۰۰/۰۰۰ تومان" , img :  './assets/img/img-8.jpg'},
  { name: "هدفون بلوتوثی سامسونگ مدل L-7", price: "۵۵۰۰/۰۰۰ تومان" , img :  './assets/img/img-9.jpg'},
  { name: "هدفون بی سیم ال جی  ", price: "۲۰۰/۰۰۰ تومان" , img :  './assets/img/img-10.jpg'},
  { name: " هنذفری شیاءومی  ", price: "۴۰۰/۰۰۰ تومان" , img :  './assets/img/img-11.jpg'},
  { name: "اسپیکر بسیار قوی ", price: "۱۲/۰۰۰/۰۰۰ تومان" , img :  './assets/img/img-12.jpg'},
];

for (let value of Object.values(myArray)){
    var cardDiv = document.createElement('div');
    cardDiv.innerHTML = `
    <div class="item">
    <div class="img-item">
        <img src="${value.img}" class="img-item-1 img-fluid" alt="">
    </div>
    <div class="item-title">
    <h3>${value.name}</h3>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها لازم است</p>
    </div>
    <div class="footer-item d-flex justify-content-between">
        <button class="item-btn">افزودن به سبد خرید</button>
        <span class="item-price">${value.price}</span>
    </div>
</div>`
document.getElementsByClassName('prodacts')[0].appendChild(cardDiv);
}



   
 