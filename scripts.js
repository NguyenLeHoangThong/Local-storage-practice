const saveBtn = document.getElementById('save')
const getBtn = document.getElementById('get')

const cars = ["BMW", "Honda", "Toyota"]
const student = {
    name: "John",
    age: 15,
}

function handleSave(){
    localStorage.setItem("Cars", JSON.stringify(cars))
    localStorage.setItem("Student", JSON.stringify(student))
}

function handleGet(){
    console.log(JSON.parse(localStorage.getItem("Cars")))
    console.log(JSON.parse(localStorage.getItem("Student")))
}

saveBtn.onclick = handleSave
getBtn.onclick = handleGet


