var header = document.getElementById('header');
var menuMobile = document.getElementById('mobile-menu');

// Đoạn này là để lấy giá trị Height của header (để không cần phải nhập số chính xác của height)
var headerHeight = header.clientHeight;
// Đóng mở menu mobile 
menuMobile.onclick = function() {
        // Đoạn này so sánh height của #header có phải là 46px không
        // var isClose = header.clientHeight === 46;

        // Vì biến ở trên lấy giá trị height của Header nên dù sửa header
        // thành giá trị khác thì nó vẫn sẽ hoạt động được
        var isClose = header.clientHeight === headerHeight
            // nếu isclose giống các giá trị header và bằng chiều cao của header 

        // Xài Điều kiện IF ELSE, nếu isClose có giá trị bằng headerHeight thì sẽ chuyển thằng null

        if (isClose) {
            // đây là thêm css vào dòng code HTML (css inline nên được ưu tiên)
            header.style.height = "auto";
        } else {
            // có thể dùng 2 cách như dưới, đa số xài null
            // header.style.height = "46px";
            header.style.height = null;
        }
    }
    // Tự động đóng khi chọn Menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
    // Sử dụng vòng lặp for
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    // nextElementSibling : được hiểu là lấy giá trị có 2 thuộc tính anh em liền kề phụ thuộc nhau
    console.log(menuItem.nextElementSibling);
    // event sự kiện khi click vào
    menuItem.onclick = function(event) {
        // this có nghĩa là lấy ra giá trị mà người dùng click vào (khi click tour thì ra giá trị #tour)
        // isParentMenu = giá trị mà có ae liền kề và ae đó có chứa classsid là subnav thì mới thỏa điều kiện
        // nếu isParentMenu chỉ thỏa 1 trong 2 điều kiện thì cũng sẽ thành fails và ko lấy ra được giá trị
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            //    khi isParentMenu thỏa 2 điều kiện thì
            event.preventDefault();
            // preventDefault là chặn giá trị mặc định của nó
            // vì event này là khi click vào các a href sẽ chạy 
            // nên preventDefault này sẽ chặn hoạt động của href và làm nó dừng hoạt động
        } else {
            //    ngược lại nếu isParent không thỏa 2 điều kiện thì
            // tắt bảng menu
            header.style.height = null;

        }

    }
}
// menuItems.length: lấy các giá trị trong menuItems
// menuItems có 9 giá trị là các href= # (Home, Band, Tour, Ticket, More , ...)
// khi onclick (nhận được click từ người dùng) thì style sẽ được set về null (nghĩa là tắt menu)