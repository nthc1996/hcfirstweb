const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalclose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
    // Hàm hiển thị ra bảng mua vé
function showBuyticket() {

    // const modal = document.querySelector('.js-modal') - dùng khi add kiểm tra hành vi người dùng thẳng vào html
    modal.classList.add('open')
}
// Hàm tắt bảng mua vé
function hideBuyticket() {

    modal.classList.remove('open')

}
// Lặp lại qua từng thẻ và nghe hành vi Click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyticket)

}
// Nghe hành vi click vào nút Close button
modalclose.addEventListener('click', hideBuyticket)
    //khi click ngoài khung thì sẽ bị tắt bảng mua vé 
modal.addEventListener('click', hideBuyticket)
    // Vì ở trên là phần cha, các thuộc tính trong nó đều bị ảnh hưởng nên
    //vì Container chứa bảng thông tin, mình sẽ tạm dừng hành vi của thuộc tính cha
    // bằng cách stopPropagation() 
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})