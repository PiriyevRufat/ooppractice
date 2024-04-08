// class Riyaziyyat {
//     constructor(value){
//         this.value=value
//         return this
//     }
//     plus(plus){
//         this.value=this.value+plus
//         return this
//     }
//     minus(minus){
//         this.value=this.value-minus
//         return this
//     }
//     multiply(multi){
//         this.value=this.value*multi
//         return this
//     }
//     divide(divide){
//         this.value=this.value/divide
//         return this
//     }    
// }
// var result = new Riyaziyyat(50).plus(6).minus(30).multiply(3).divide(2)
// console.log(result);

//practiceoop

// class Kitablar{
//     constructor(ad,yazici,neshrIli,price){
//         this.ad=ad
//         this.yazici=yazici
//         this.neshrIli=neshrIli
//         this.price=price
//     }
//     qiymetIste(faiz){
//         this.price=this.price*(100-faiz)/100
//         return this
//     }
// }
// var result= new Kitablar('The Prince','Niccolo Machiavelli',1532,10)
// console.log(result)
// console.log(result.qiymetIste(15))

const employers= [
    {
        "id": 1,
        "first_name": "Sigismundo",
        "last_name": "Ida",
        "job_title": "Software Engineer III",
        "salary": 1290
    },
    {
        "id": 2,
        "first_name": "Hasheem",
        "last_name": "Bodega",
        "job_title": "Marketing Assistant",
        "salary": 1831
    },
    {
        "id": 3,
        "first_name": "Carny",
        "last_name": "Pipe",
        "job_title": "Sales Associate",
        "salary": 2234
    },
    {
        "id": 4,
        "first_name": "Talyah",
        "last_name": "Habeshaw",
        "job_title": "Staff Scientist",
        "salary": 2477
    },
    {
        "id": 5,
        "first_name": "Chere",
        "last_name": "Patten",
        "job_title": "Professor",
        "salary": 1513
    },
    {
        "id": 6,
        "first_name": "Edyth",
        "last_name": "Dono",
        "job_title": "Computer Systems Analyst II",
        "salary": 776
    },
    {
        "id": 7,
        "first_name": "Asher",
        "last_name": "Dumper",
        "job_title": "Web Designer III",
        "salary": 1163
    },
    {
        "id": 8,
        "first_name": "Marcellus",
        "last_name": "Larter",
        "job_title": "Professor",
        "salary": 3465
    },
    {
        "id": 9,
        "first_name": "Tonia",
        "last_name": "Wyrall",
        "job_title": "Account Coordinator",
        "salary": 654
    },
    {
        "id": 10,
        "first_name": "Byrom",
        "last_name": "Salomon",
        "job_title": "Legal Assistant",
        "salary": 861
    }
]
// function findHardWorker(employers) {
//     for (let i = 0; i < employers.length; i++) {
//         if (employers[i].salary>2000) {
//             console.log(employers[i].N);
//         }
//     }
// }
// findHardWorker(employers)
// function findName(employers){
//     for (let i = 0; i < employers.length; i++) {
//              if (employers[i].first_name==="MemmedAga") {
//                 console.log(employers[i].id);
//              } 
//     }
// }
// findName(employers)

//?Praktika


// function sortEmployers(employers) {
//     for (let i = 0; i < employers.length; i++) {
//             for (let j = 0; j < employers.length - 1 - i; j++) {
//                 if (employers[j].salary < employers[j + 1].salary) {
//                     let temp = employers[j];
//                     employers[j] = employers[j + 1];
//                     employers[j + 1] = temp;
//                 }
//             }
//         }
//     }
// sortEmployers(employers)
// console.log(employers);


//?



// function findInName(employers) {
//     for (let i = 0; i < employers.length; i++) {  
//          if (employers[i].id%2==0) {
//             if (employers[i].first_name.includes("a")) {
//                 console.log(employers[i].first_name);
//             }
//          }
//     }
// }
// findInName(employers)