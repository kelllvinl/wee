// ------------!!!!有bug : 可以正常運作，但係個submit要禁兩次先可以行

window.onload = async () => {
    checkPasswork()  
}

function initRegForm() {
    const form = document.getElementById('reg-form')
    form.addEventListener('submit', async function (e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('username', form.username.value)
        formData.append('password', form.password.value)
        formData.append('day_of_birth', form.day_of_birth.value)
        formData.append('day_of_bnovisa', form.day_of_bnovisa.value)
        formData.append('email', form.email.value)
        formData.append('filename', form.filename.files[0])
        console.log(formData);
        // method: POST, Path: "/memo", Request Body
        const resp = await fetch('/member', {
            method: 'POST',
            body: formData,
        })
        if (resp.status === 200) {
            console.log('OK')
            window.location = "/login_page.html";
            form.reset()
        }
    })
}



function checkPasswork (){
    const form = document.getElementById('reg-form')
    form.addEventListener('submit', async function (e) {
        e.preventDefault()
        const formData = new FormData()
        if (form.password.value != form.pswRepeat.value) {
            alert("WEEEEE😫! Passwords Don't Match!");
        }  
        const resp = await fetch('/regist')
        const memberName = (await resp.json())
        console.log("call member username list ")
        console.log(memberName)
        console.log(form.username.value)
        
        const inputUserName = form.username.value
        console.log(inputUserName)
        const result= await memberName.find(memberName => memberName.username == inputUserName)  
        if (result === undefined || !result) {
            initRegForm()
            
        } else{alert("🤔... this username had been used!");} 

})}


 