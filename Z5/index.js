//tạo id= contact-form 
//gắn bla bla để dùng vs js để lưu vào local storage

const form = documentById("contact-form");
form.onsubmit = function (event) {
    event.preventDefault(); //ngăn chặn hành động  j đó như chuyển trang
const name= document.getElementsByName("name")[0].value; //lấy cái đầu tiền
const email= document.getElementsByName("email")[0].value;
const phone= document.getElementsByName("phone")[0].value;
const opinion= document.getElementsByName("opinion")[0].value;

const data = {
    name,
    email,
    phone,
    opinion,
}

}