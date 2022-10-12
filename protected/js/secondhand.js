// onload => loadMemoData
// loadMemoData: ask server for the memo data
// memo data => UI (htmlStr + innHTML)

window.onload = async () => {
    const socket = io.connect()
    await loadSecondhandData()
    initSecondhandForm()
    await loadUserData()
    
    socket.on('new-secondhand', () => {
        loadSecondhandData()
    })
}


function initSecondhandForm() {
    const form = document.getElementById('secondhand-form')
    form.addEventListener('submit', async function (e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('secondhandName', form.secondhandName.value)
        formData.append('description', form.description.value)
        formData.append('categoryId', form.categoryId.value)
        formData.append('filename', form.filename.files[0])
        formData.append('price', form.price.value)
        console.log(formData);
        // method: POST, Path: "/secondhand", Request Body
        form.reset()

        const resp = await fetch('/secondhand', {
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

async function loadSecondhandData() {
    // fetch -> HTTP Request (Method: GET + Path: /blog)
    const resp = await fetch('/secondhand')
    const secondhands = (await resp.json()).data
    console.log(secondhands)

    let htmlStr = ``
    for (const secondhand of secondhands) {
        const image = secondhand.image
            ? `<img src="/images/${secondhand.secondhand_img}" alt="" srcset="">`
            : ``
        htmlStr += /*HTML*/ `
        
        <div class="media tm-flexbox-ie-fix tm-width-ie-fix">
        <div id = "blog-date-img" class="tm-media-img-container">
                    <!-- blogdate -->
                    <div class="text-center pt-31 pb-31 tm-timeline-date tm-bg-pink"> ${secondhand.update_date}</div>
                    <!-- image -->
                    <img id="blog-img" class="d-flex img-fluid" src="/images/${secondhand.secondhand_img}" alt="where is my image">
                    </div>
                            <!-- name-->
                            <div class="media-body tm-flexbox-ie-fix tm-width-ie-fix tm-bg-light-gray" style="margin-bottom: 58px">
                            <div class="p-5">
                            <h2 class="mb-4 mt-0 tm-blue-text tm-timeline-item-title">${secondhand.secondhand_name}</h2>
                            <!-- content-->        
                            <p class="mb-4">${secondhand.description}</p>
                            <p> <span> SOLD by: </span> ${secondhand.username} </p>
                            <!-- readmore -->
                            <a href="#" class="btn btn-primary tm-button-rounded tm-button-pink tm-button-no-border tm-button-normal tm-button-timeline">Read More</a>
            </div>
            </div>
            </div>
        </div>
        `
    }
    document.querySelector('.secondhand-container').innerHTML = htmlStr
    
}

// async function deleteBlog(mid) {
//     const resp = await fetch(`/blog/${mid}`, {
//         method: 'DELETE',
//     })
//     if (resp.status === 200) {
//         loadBlogData()
//     }
// }

// async function editBlog(mid) {
//     const blog = document.getElementById(`blog-${mid}`)
//     console.log(blog.textContent)
// }
