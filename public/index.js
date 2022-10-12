window.onload = async () => {
  LoginForm();
 
};

function LoginForm() {
  const form = document.getElementById("login-form");
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formObjct = {};
    formObjct["username"] = form["username"].value;
    formObjct["password"] = form["password"].value;
    const resp = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObjct),
    });
    if (resp.status === 200) {
      window.location = "/index_after.html";
    } else if (resp.status === 400){
      const errMessage = (await resp.json()).message
      alert(errMessage)
    }
  });
}









// function initBlogForm() {
//   const form = document.getElementById("blog-form");
//   form.addEventListener("submit", async function (e) {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("subtitle", form.subtitle.value);
//     formData.append("content", form.content.value);
//     formData.append("categoryId", form.categoryId.value);
//     formData.append("image", form.filename.files[0]);
//     console.log(formData);
//     // method: POST, Path: "/memo", Request Body
//     form.reset();

//     const resp = await fetch("/blog", {
//       method: "POST",
//       body: formData,
//     });
//     if (resp.status === 200) {
//       console.log("OK");
//       loadBlogData();
//     }
//   });
// }

// async function loadBlogData() {
//   // fetch -> HTTP Request (Method: GET + Path: /blog)
//   const resp = await fetch("/blog");
//   const blogs = (await resp.json()).data;
//   console.log(blogs);

//   let htmlStr = ``;
//   for (const blog of blogs) {
//     const image = blog.image
//       ? `<img src="/images/${blog.image}" alt="" srcset="">`
//       : ``;
//     htmlStr += /*HTML*/ `
//         <div id="blog-${blog.id}" class="blog" contenteditable="true">
//         <div class="media tm-flexbox-ie-fix tm-width-ie-fix">
//         <div class="tm-media-img-container">
//                     <!-- blogdate -->
//                     <div class="text-center pt-31 pb-31 tm-timeline-date tm-bg-pink"> ${blog.post_date}</div>
//                     <!-- image -->
//                     <img id="blog-img" class="d-flex img-fluid" src="/images/${blog.blog_img}" alt="where is my image">
//                 </div>
//                             <!-- subtitle-->
//                             <div class="media-body tm-flexbox-ie-fix tm-width-ie-fix tm-bg-light-gray" style="margin-bottom: 58px">
//                             <div class="p-5">
//                             <h2 class="mb-4 mt-0 tm-blue-text tm-timeline-item-title">${blog.subtitle}</h2>
//                             <!-- content-->        
//                             <p class="mb-4">${blog.content}</p>

//                             <!-- readmore -->
//                             <a href="#" class="btn btn-primary tm-button-rounded tm-button-pink tm-button-no-border tm-button-normal tm-button-timeline">Read More</a>
//             </div>
//             </div>
//             </div>
//         </div>
//         `;
//   }
//   document.querySelector(".blog-container").innerHTML = htmlStr;
// }

// async function deleteBlog(mid) {
//   const resp = await fetch(`/blog/${mid}`, {
//     method: "DELETE",
//   });
//   if (resp.status === 200) {
//     loadBlogData();
//   }
// }

// function editBlog(mid) {
//   const blog = document.getElementById(`blog-${mid}`);
//   console.log(blog.textContent);
// }
