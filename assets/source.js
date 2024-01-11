document.getElementById("year").innerHTML = new Date().getFullYear();

function buy(product_name, product_price) {
    const message = `Hallo saya mau beli ${product_name} - ${product_price}`;
    const whatsapp = `https://wa.me/6282117753459?text=${message}`;
    open(whatsapp, "_blank");
}
function chat() {
    const message = `Hallo saya mau nanya `;
    const whatsapp = `https://wa.me/6282117753459?text=${message}`;
    open(whatsapp, "_blank");
}
