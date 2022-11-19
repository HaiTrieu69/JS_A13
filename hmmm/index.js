
// Danh sách sản phẩm (thông tin về nhiều đối tượng) => sử dụng array (mảng)
// => tạo ra một mảng các sản phẩm

// Thông tin về 1 sản phẩm (thông tin về 1 đối tượng cụ thể) => sử dụng object (đối tượng)
// => tạo ra mỗi sản phẩm là 1 object

// Tạo danh sách sản phẩm ---------------------------------------------------------------------
var sp1 = {
    ten: "San pham 1",
    anh: "https://images.unsplash.com/photo-1661961112134-fbce0fdf3d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1972&q=80",
    gia: 1000000,
};

var sp2 = {
    ten: "San pham 2",
    anh: "https://images.unsplash.com/photo-1661961112134-fbce0fdf3d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1972&q=80",
    gia: 2000000,
};

var sp3 = {
    ten: "San pham 3",
    anh: "https://images.unsplash.com/photo-1661961112134-fbce0fdf3d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1972&q=80",
    gia: 3000000,
};

var dssp = [sp1, sp2, sp3];
localStorage.setItem("dssp", JSON.stringify(dssp));

// Xây dựng giao diện mua hàng từ dssp lấy trong localStorage --------------------------------------
var dsspFromLS = localStorage.getItem("dssp");
dsspFromLS = JSON.parse(dsspFromLS);

// Foreach nhận vào một hàm khác để làm tham số (callback)
// Hàm mà sử dụng để làm tham số cho hàm khác được gọi là callback
// forEach sẽ duyệt qua toàn bộ phân tử ở bên trong biến mảng (dsspFromLS), cứ mỗi lần duyệt qua 1 phân tử, lại đem gán phần tử đó vào tham số trong callback (sanpham), và thực hiện cùng 1 logic giống nhau (logic này viết trong callback)
dsspFromLS.forEach(function (sanpham) {
    // Logic
    // Hàm createElement nhận vào 1 chuỗi là tên thẻ muốn tạo
    var liElement = document.createElement("li");
    liElement.classList.add("sanpham");

    var anhElement = document.createElement("img");
    anhElement.src = sanpham.anh;
    anhElement.alt = "Ảnh sản phẩm";
    liElement.appendChild(anhElement);

    var tenElement = document.createElement("h2");
    tenElement.textContent = sanpham.ten;
    liElement.appendChild(tenElement);

    var giaElement = document.createElement("div");
    giaElement.classList.add("gia");
    liElement.appendChild(giaElement);

    var spanElement = document.createElement("span");
    spanElement.textContent = sanpham.gia.toLocaleString() + " VND";
    giaElement.appendChild(spanElement);

    var cartElement = document.createElement("button");
    cartElement.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/></svg>';
    giaElement.appendChild(cartElement);

    document.querySelector("ul.dssp").appendChild(liElement);
});