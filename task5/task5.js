
let inputText = document.getElementById("inputText");
let addButton = document.getElementById("addButton");
let listTask = document.getElementById("listTask");

let arr = JSON.parse(localStorage.getItem("task")) || [];

for (let i = 0; i < arr.length; i++) {

    listTask.innerHTML +=
        "<p>" +
        arr[i] +
        "<button onclick='deleteTask(this)'>Delete</button>" +
        "</p>";
}


addButton.onclick = function () {

    let task = inputText.value;

    arr.push(task);

    localStorage.setItem("task", JSON.stringify(arr));

    listTask.innerHTML +=
        "<p>" +
        task +
        "<button onclick='deleteTask(this)'>Delete</button>" +
        "</p>";

    inputText.value = "";
};


function deleteTask(text) {
//هات اسم الـ task الذي ضغطت على Delete بجانبه وخزّنه في متغير اسمه task.
// معرفه اسم التاسك
    let task = text.parentElement.firstChild.textContent;


// هون بدي اعرف مكان التاسك بال array
    let index = arr.indexOf(task);


    // منشيك هون حتى نحذف الاندكس من الاري بدءا باندكس 1
    if (index !== -1) {
        arr.splice(index, 1);
    }
//   بعد الحذف بنحفظ الاري الجديده ب لوكال عشان نحدثه وياخذ البيانات الجديده
//  لانه بكون لسا محتفظ بالبيانات القديمه
//منحدث ال local storage  ومنحول الاري ال سترينغ نص حتى نقدر نخزنها
    localStorage.setItem("task", JSON.stringify(arr));
// حذفه من الصفحه
    text.parentElement.remove();
}
