// onload => loadMemoData
// loadMemoData: ask server for the memo data
// memo data => UI (htmlStr + innHTML)

window.onload = async () => {
    const socket = io.connect()
    await loadBlogData()
    initBlogForm()
    await loadUserData()

    socket.on('new-blog', () => {
        loadBlogData()
    })
}


function initBlogForm() {
    const form = document.getElementById('blog-form')
    form.addEventListener('submit', async function (e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('subtitle', form.subtitle.value)
        formData.append('content', form.content.value)
        formData.append('categoryId', form.categoryId.value)
        formData.append('image', form.filename.files[0])
        console.log(formData);
        // method: POST, Path: "/memo", Request Body
        form.reset()

        const resp = await fetch('/blog', {
            method: 'POST',
            body: formData,
        })
        if (resp.status === 200) {
            console.log('OK')
            loadBlogData()
        }
    })
}
async function loadUserData() {


    // fetch -> HTTP Request (Method: GET + Path: /memos)
    const resp = await fetch('/bloginfo')
    const member = (await resp.json())
    console.log("front end")
    console.log(member)
    document.querySelector("#myusername").innerHTML = member[0].username;

    document.querySelector("#myprofilepic").innerHTML = `<img class="d-flex img-fluid" src="images/${member[0].profile_pic}" alt="profile pic">`;
}

async function loadBlogData() {
    // fetch -> HTTP Request (Method: GET + Path: /blog)
    const resp = await fetch('/blog')
    const blogs = (await resp.json()).data
    console.log(blogs)

    new Date().toISOString().slice(0, 19).replace('T', ' ');

    let htmlStr = ``
    for (const blog of blogs) {
        const image = blog.image
            ? `<img src="/images/${blog.image}" alt="" srcset="">`
            : ``
        const postDate = blog.post_date



        htmlStr += /*HTML*/ `
        
        <div class="media tm-flexbox-ie-fix tm-width-ie-fix">
        <div id = "blog-date-img" class="tm-media-img-container">
                    <!-- blogdate -->
                    <div class="text-center pt-31 pb-31 tm-timeline-date tm-bg-black">${postDate.slice(0, 10)}</div>
                    <!-- image -->
                    <img id="blog-img" class="d-flex img-fluid" src="/images/${blog.blog_img}" alt="where is my image">
                    </div>
                            <!-- subtitle-->
                            <div class="media-body tm-flexbox-ie-fix tm-width-ie-fix tm-bg-light-gray" style="margin-bottom: 58px">
                            <div class="p-5">
                            <h2 class="mb-4 mt-0 tm-blue-text tm-timeline-item-title">${blog.subtitle}</h2>
                            <!-- content-->        
                            <p class="mb-4">${blog.content}</p>
                            <p> ${blog.username} </p>
                            <!-- readmore -->
                            ${image}
                            <div class="btn btn-primary tm-button-rounded tm-button-yellow tm-button-no-border tm-button-normal tm-button-timeline trash-button" onclick="deleteBlog(${blog.blog_id})">DELETE</div>
                            <!-- <div class="btn btn-primary tm-button-rounded tm-button-yellow tm-button-no-border tm-button-normal tm-button-timeline edit-button" >EDIT</div>-->
            </div>
            </div>
            </div>
        </div>
        `
    }
    document.querySelector('.blog-container').innerHTML = htmlStr
    document.querySelector('#blog-container-3').querySelector(".text-secondary").textContent=blog.username;

}

async function deleteBlog(blog_id) {
    const resp = await fetch(`/blog/${blog_id}`, {
        method: 'DELETE',
    })
    if (resp.status === 200) {
        loadBlogData()
    }
}

//     async function editBlog(blog_id) {
//         const blog = document.getElementById('blog-form')
//         blog.addEventListener('edit-button', async function (e) {
//             const formData = new FormData()
//             formData.append('subtitle', form.subtitle.value)
//             formData.append('content', form.content.value)

//         const resp = await fetch(`/blog/${blog_id}`, {
//             method: 'PUT',
//             body: formData,
//         })
//         if (resp.status === 200) {
//             loadBlogData()
//         }
//     })
// }

//onclick="editBlog(${blog.blog_id})"//