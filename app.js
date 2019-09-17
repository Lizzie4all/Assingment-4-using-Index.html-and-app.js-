var students = [
    {
        name: "Emmanuel Elizabeth",
        age: 25,
        address: "Faringada",
        tribe: "Ibibio",
        gender: "female",
        Height: 0.55,
        department:"CSC",
        level: 400,
        grade: [60,70,80,90,100]
    },
    {
        name:"kaslong Kevin",
        age: 21,
        address:"Twad",
        tribe:"Yoruba",
        gender:"male",
        Height:0.60,
        department:"CSC",
        level:200,
        grade: [60,70,80,90,100]
    },
    {
        name:"Mark Adams",
        age: 20,
        address:"Rukuba Road",
        tribe:"Idoma",
        gender:"male",
        Height:0.65,
        department:"CSC",
        level:300,
        grade: [50,70,80,90,100]
    },
    {
        name:"Oyekale Tosin",
        age: 22,
        address:"Salama Hostel",
        tribe:"Yuroba",
        gender:"female",
        Height:"0.50",
        department:"CSC",
        level:400,
        grade: [30,40,80,90,100]
    },
    {
        name:"Susan Owoicho",
        age: 25,
        address:"Salama Hostel",
        tribe:"Idoma",
        gender:"female",
        Height:0.65,
        department:"CSC",
        level:300,
        grade: [30,40,60,90,100]
    },
    {
        name:"Yada Martins",
        age: 23,
        address:"Village Hostel",
        tribe:"^Kagoro",
        gender:"male",
        Height:0.56,
        department:"CSC",
        level:300,
        grade: [30,40,60,80,100]
    },
    {
        name:"Ifeoma Ibedu",
        age: 23,
        address:"Angwa Rukuba",
        tribe:"Igbo",
        gender:"female",
        Height:0.56,
        department:"CSC",
        level:300,
        grade: [30,40,50,90,100]
    },
    {
        name:"Peter Temitope Asalu",
        age: 22,
        address:"Celebridge",
        tribe:"Yagba",
        gender:"male",
        Height:0.50,
        department:"CSC",
        level:300,
        grade: [30,40,60,70,100]
    },
    {
        name:"Awari Yohanna Duada",
        age: 22,
        address:"Angwa Rukuba",
        tribe:"Afizare",
        gender:"male",
        Height:0.50,
        department:"CSC",
        level:300,
        grade: [30,40,60,80,90]
    },
    {
        name:"Josephine Sunday",
        age: 20,
        address:"Odus",
        tribe:"Eggon",
        gender:"female",
        Height:0.50,
        department:"CSC",
        level:300,
        grade: [30,50,50,90,100]
    },
    {
        name:"Nanbal Moses Kundam",
        age: 23,
        address:"Federal locust",
        tribe:"Mupun",
        gender:"male",
        Height:0.50,
        department:"CSC",
        level:300,
        grade: [30,40,60,100,100]
    },
    {
        name:"Victoria Bok",
        age: 22,
        address:"Oduns",
        tribe:"Berom",
        gender:"female",
        Height:0.50,
        department:"CSC",
        level:300,
        grade: [30,40,80,90,100]
    },
    {
        name:"Yusuf Paul Osanga",
        age: 25,
        address:"Rayfield",
        tribe:"Berom",
        gender:"male",
        Height:0.70,
        department:"CSC",
        level:400,
        grade: [30,70,80,90,100]
    },
    {
        name:"Bamigboye Christiana Temitope",
        age: 25,
        address:"Village Hostel",
        tribe:"Yoruba",
        gender:"female",
        Height:0.63,
        department:"CSC",
        level:300,
        grade: [30,60,80,90,100]
    },
    {
        name:"Job Gift Elejo",
        age: 22,
        address:"Village Hostel",
        tribe:"Igala",
        gender:"female",
        Height:0.50,
        department:"CSC",
        level:300,
        grade: [30,40,50,90,100]
    },
    {
        name:"Moses Deborah Kibba",
        age: 23,
        address:"Ring road",
        tribe:"Berom",
        gender:"female",
        Height:0.55,
        department:"CSC",
        level:300,
        grade: [30,40,80,80,100]
    },
    {
        name:"Joy Ohue Osedebamen",
        age: 24,
        address:"Oduns",
        tribe:"Idoma",
        gender:"female",
        Height:0.52,
        department:"CSC",
        level:300,
        grade: [30,40,60,90,100]
    },
    {
        name:"Ponfa Micheal",
        age: 22,
        address:"Oduns",
        tribe:"Berom",
        gender:"male",
        Height:0.54,
        department:"CSC",
        level:300,
        grade: [30,40,80,90,100]
    },
    {
        name:"Mabas Maryam",
        age: 20,
        address:"PTS, Jos",
        tribe:"Challa",
        gender:"female",
        Height:0.65,
        department:"CSC",
        level:400,
        grade: [30,40,80,90,100]
    },
    {
        name:"Uzaifat Ibrahim",
        age: 24,
        address:"Dodo street Jos",
        tribe:"Magwavul",
        gender:"female",
        Height:0.52,
        department:"CSC",
        level:300,
        grade: [30,40,80,90,100]
    },
    {
        name:"Stephen Nanrest",
        age: 23,
        address:"Ring Road",
        tribe:"Magwavul",
        gender:"female",

        Height:0.52,
        department:"CSC",
        level:300,
        grade: [30,40,80,90,100]
    }
];
// Getting Element By Id and Editing the Table by Adding style.
var table = document.getElementById("table");
students.forEach((student)=>{
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.style.textAlign = "center"; td1.style.backgroundColor = "brown"; td1.innerHTML = student.name;
    var td2 = document.createElement("td");
    td2.style.textAlign = "center"; td2.style.backgroundColor = "brown"; td2.innerHTML = student.age;
    var td3 = document.createElement("td");
    td3.style.textAlign = "center"; td3.style.backgroundColor = "brown";td3.innerHTML = student.address;
    var td4 = document.createElement("td");
    td4.style.textAlign = "center"; td4.style.backgroundColor = "brown"; td4.innerHTML = student.tribe;
    var td5 = document.createElement("td");
    td5.style.textAlign = "center"; td5.style.backgroundColor = "brown";td5.innerHTML = student.gender;
    var td6 = document.createElement("td");
    td6.style.textAlign = "center"; td6.style.backgroundColor = "brown";td6.innerHTML = student.Height;
    var td7 = document.createElement("td");
    td7.style.textAlign = "center"; td7.style.backgroundColor = "brown";td7.innerHTML = student.department;
    var td8 = document.createElement("td");
    td8.style.textAlign = "center"; td8.style.backgroundColor = "brown";td8.innerHTML = student.level;
    var td9 = document.createElement("td");
    td9.style.textAlign = "center"; td9.style.backgroundColor = "brown";td9.innerHTML = student.grade;
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
    table.appendChild (tr);
});

var name = document.getElementById ("Name");
var age = document.getElementById ("Age");
var address = document.getElementById ("Address");
var tribe= document.getElementById ("Tribe");
var gender = document.getElementById ("Gender");
var height = document.getElementById ("Height");
var department = document.getElementById ("Department");
var level = document.getElementById ("Level");
var grade = document.getElementById ("Grade");
var btm = document.getElementById ("btn");

// adding Event Listener to my Code
btn.addEventListener("click",()=>{
    console.log (name.value, level.value, address.value, tribe.value, gender.value, height.value, department.value, level.value, grade.value);

})
