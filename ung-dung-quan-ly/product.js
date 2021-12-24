var allProduct = ["Sony Xperia", "Samsung Galaxy", "Nokia 6",
    "xiaomi Redmi Note 4", "Appple iphone 6S", "Xiaomi Mi 5 Plus",
    "Apple iphone 8 Plus", "Fujistu F-04E", "Oppo A71"
]


//hàm ẩn danh sách sản phẩm
function hideList() {
    document.getElementById('listProduct').innerHTML = ""
}
//hàm hiển thị danh sách sản phẩm
showList();
function showList() {
    let drawTable = "";
    drawTable += `<table border="0">`
    drawTable += `<tr>
    <th>ID</th>
    <th>Name Product</th>
    <th>Tool</th>
    <th>${allProduct.length} Product<th>
    </tr>`
    for (let i = 0; i < allProduct.length; i++) {
        drawTable += `<tr>
        <td>${i+1}</td>
        <td class="">${allProduct[i]}</td>
        <td>
        <button class="btn" onclick="editProduct(${i})">Edit</button>
        <button class="btn" onclick="deleteProduct(${i})">Delete</button>
        </td>
        <td></td>
        </tr>`
    }
    drawTable += `</table>`
    document.getElementById('listProduct').innerHTML = drawTable;
}

//sự kiện thêm sản phẩm 
function addProduct() {
    let product = document.getElementById('product').value;
    allProduct.push(product);
    showList();
}
//sự kiện xóa sản phẩm
function deleteProduct(a) {
    allProduct.splice(a, 1);
    showList();
}
//sự kiện sửa sản phẩm
function editProduct(data) {
    let drawInput = "";
    drawInput = `<input type="text" id="editPro" value=' ${allProduct[data]} '>
                <button onclick="saveProduct(${data})">Save</button>`;
    document.getElementById('edit').innerHTML = drawInput;
    showList();
}
// sự kiện lưu sản phẩm sau khi sửa
function saveProduct(data) {
    let newPro = document.getElementById('editPro').value;
    allProduct[data] = newPro;
    document.getElementById('edit').innerHTML = "";
    showList();
}