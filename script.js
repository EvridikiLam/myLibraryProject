const form = document.getElementById("bookForm");

form.addEventListener("submit",function (e) {
    e.preventDefault(); //stop page refresh

    const formData = {
        btitle: document.getElementById("btitle"),
        bauthor: document.getElementById("bauthor"),
        bstatus: document.getElementById("bstatus"),
        rating: document.getElementById("rating"),
        notes: document.getElementById("notes"),
    };

    localStorage.setItem("userFormData",JSON.stringify(formData));

    alert("Form data saved!");
});

//load saved data
window.addEventListener("DOMContentLoaded",function () {
    const savedData = this.localStorage.getItem("userFormData");

    if (savedData) {
        const data = JSON.parse(savedData);

        document.getElementById("btitle").value = data.btitle || "";
        document.getElementById("bauthor").value = data.bauthor || "";
        document.getElementById("bstatus").value = data.bstatus || "";
        document.getElementById("rating").value = data.rating || "";
        document.getElementById("notes").value = data.notes || "";
    }
})