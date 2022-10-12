window.onload = () => {
  loadThemeData();
  loadBlogData();
  loadShopData();
  }

// get shops for living
async function loadShopData() {
  // fetch -> HTTP Request (Method: GET + Path: /theme)
  const resp = await fetch('/themelivingshop')
  const shops = (await resp.json()).data
  console.log("is it running for shops?")
  console.log(shops)

  let htmlStr = ``
  for (const shop of shops) {
      const image = shop.image
          ? `<img src="/${shop.image}" alt="" srcset="">`
          : ``
      htmlStr += /*HTML*/ `

      <div class="col-md-3 m-2 m-md-0" style="
      padding-top: 12px;
      padding-bottom: 12px;
  ">
<div class="p-2 media-photo bg-image-card card">
<!--img-->
<img src="/images/${shop.shop_img}" class="img-fluid" alt="Where is my shop?" />
<div class="title-pair m-2">
<!--name-->
  <h3 class="pair-title">${shop.shop_name}</h3>
<!--description-->
  <div class="pair-sub text-secondary">${shop.shop_address}</div>
  <div class="pair-sub text-secondary">${shop.opening_hour}</div>
  <div class="pair-sub text-secondary">${shop.shop_tel}</div>
  <div class="pair-sub text-secondary">${shop.remarks}</div>
</div>
</div>
</div>

      `
  }
  document.querySelector('#shop-container-3').innerHTML = htmlStr
}


// get secondhand for living
async function loadThemeData() {
  // fetch -> HTTP Request (Method: GET + Path: /theme)
  const resp = await fetch('/themelivingsecondhand')
  const themes = (await resp.json()).data
  console.log("is it running for market place?")
  console.log(themes)

  let htmlStr = ``
  for (const theme of themes) {
      const image = theme.image
          ? `<img src="/${theme.image}" alt="" srcset="">`
          : ``
      htmlStr += /*HTML*/ `
      
      <div class="col-md-3 m-2 m-md-0" style="
      padding-top: 12px;
      padding-bottom: 12px;
  ">
      <div class="p-2 media-photo bg-image-card card">
<!--img-->
<img src="/images/${theme.secondhand_img}" class="img-fluid" alt="Where is my home?" />
<div class="title-pair m-2">
<!--name-->
  <h3 class="pair-title">${theme.secondhand_name}</h3>
<!--description-->
  <div class="pair-sub text-secondary">${theme.description}</div>
  <div class="pair-sub text-secondary">${theme.price}</div>
  <div class="pair-sub text-secondary">${theme.update_date}</div>
  <div class="pair-sub text-secondary">${theme.username}</div>
  </div>
  </div>
  </div>

      `
  }
  document.querySelector('#theme-container-3').innerHTML = htmlStr
}

// get blog for living
async function loadBlogData() {
  // fetch -> HTTP Request (Method: GET + Path: /theme)
  const resp = await fetch('/themelivingblog')
  const blogs = (await resp.json()).data
  console.log("is it running for blog?")
  console.log(blogs)

  let htmlStr = ``
  for (const blog of blogs) {
      const image = blog.image
          ? `<img src="/${blog.image}" alt="" srcset="">`
          : ``
      htmlStr += /*HTML*/ `
      <div class="col-md-3 m-2 m-md-0" style="
      padding-top: 12px;
      padding-bottom: 12px;
  ">
      <div class="p-2 media-photo bg-image-card card">
<!--img-->
<img src="/images/${blog.blog_img}" class="img-fluid" alt="Where is my blog?" />
<div class="title-pair m-2">
<!--name-->
  <h3 class="pair-title">${blog.subtitle}</h3>
<!--description-->
  <div class="pair-sub text-secondary">${blog.content}</div>
  <div class="pair-sub text-secondary">${blog.post_date}</div>
  <div class="pair-sub text-secondary">${blog.username}</div>
  </div>
  </div>
  </div>
      `
  }
  document.querySelector('#blog-container-3').innerHTML = htmlStr
  document.querySelector('#blog-container-3').querySelector(".text-secondary").textContent=blog.username;
}

// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 2000,
//   wrap: false,
// })
// console.log(carousel)
// for (let button of document.querySelectorAll('.carousel-indicators button')) {
//   button.addEventListener('click', () => {
//     let page = button.dataset.bsSlideTo
//     console.log(page)

//     let allItems = document.querySelectorAll('.carousel-item')
//     let oldItem = document.querySelector('.carousel-item.active')

//     let oldButton = document.querySelector('.carousel-indicators button.active')
//     oldButton.classList.remove('active')
//     button.classList.add('active')

//     oldItem.classList.remove('active')
//     allItems[page].classList.add('active')

//     // carousel.to(page)
//   })
// }
