
window.onload = () => {
    initShopForm()

}

function initShopForm() {
    const form = document.getElementById('shop-form')
    form.addEventListener('submit', async function (e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('shopName', form.shopName.value)
        formData.append('shopAddress', form.shopAddress.value)
        formData.append('openingHour', form.openingHour.value)
        formData.append('shopTel', form.shopTel.value)
        formData.append('categoryId', form.categoryId.value)
        formData.append('remarks', form.remarks.value)
        formData.append('shopImg', form.shopImg.files[0])
        console.log(formData);
        // method: POST, Path: "/admin", Request Body
        form.reset()

        const resp = await fetch('/shop', {
            method: 'POST',
            body: formData,
        })
        if (resp.status === 200) {
            console.log('OK')
        }
    })
}