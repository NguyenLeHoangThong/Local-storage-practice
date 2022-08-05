// const saveBtn = document.getElementById('save')
// const getBtn = document.getElementById('get')

// const cars = ["BMW", "Honda", "Toyota"]
// const student = {
//     name: "John",
//     age: 15,
// }

// function handleSave(){
//     localStorage.setItem("Cars", JSON.stringify(cars))
//     localStorage.setItem("Student", JSON.stringify(student))
// }

// function handleGet(){
//     console.log(JSON.parse(localStorage.getItem("Cars")))
//     console.log(JSON.parse(localStorage.getItem("Student")))
// }

// saveBtn.onclick = handleSave
// getBtn.onclick = handleGet

// Sua bai tap ve nha buoi 5

// const students = ["Long", "Tuan", "Phuoc", "Khoi", "Nguyen"]
// for (let i = 0; i < students.length; i++){
//     if (students[i] === "Phuoc"){
//         students[i] = "Ha"
//     }
// }
// localStorage.setItem("Students", JSON.stringify(students))
// console.log(students)


// Buoi 7

// let cars
// if (JSON.parse(localStorage.getItem("Cars")) === null){
//     cars = []
// }
// else{
//     cars = JSON.parse(localStorage.getItem("Cars"))
// }

// function render() {
//     const carsWrapper = document.getElementById("car-list");
//     carsWrapper.innerHTML = ""

//     for (let i = 0; i < cars.length; i++) {
//         const car = document.createElement("li");

//         const brand = document.createElement("p");
//         brand.innerText = cars[i].brand

//         const model = document.createElement("p");
//         model.innerText = cars[i].model

//         const price = document.createElement("p");
//         price.innerText = cars[i].price

//         const color = document.createElement("p");
//         color.innerText = cars[i].color


//         car.appendChild(brand)
//         car.appendChild(model)
//         car.appendChild(price)
//         car.appendChild(color)

//         carsWrapper.appendChild(car)
//     }
// }
// render()

// function handleOnclick(){
//     const brandInput = document.getElementById("brand-input");
//     const modelInput = document.getElementById("model-input");
//     const priceInput = document.getElementById("price-input");
//     const colorInput = document.getElementById("color-input");

//     const newCar = {
//         brand: brandInput.value,
//         model: modelInput.value,
//         price: priceInput.value,
//         color: colorInput.value
//     }    

//     cars.push(newCar)
//     localStorage.setItem("Cars", JSON.stringify(cars))
//     render()
// }

// const submitBtn = document.getElementById("submit");
// submitBtn.onclick = handleOnclick








// Tóm tắt: 
// let,const(ES6) - var (ES5)
// Scope: {} - tạo ra 1 môi trường của riêng nó
// Function => Arrow function



//ES5
function chuViHinhTron(r){
    console.log(r)
}

//ES6
const chuViHinhTronES6 = (r) => 2 * 3.14 * r


const car = {
    name: "Cup",
    brand: "Honda",
    price: 1000,
    owner: "John"
}




function studentCreator(name, sclass, age){
    return {
        student_name: name,
        student_class: sclass,
        student_age: age
    }
}

console.log(studentCreator("Anna", 15, 900).student_name)






















