
console.log("myparty.js")

//method-1
// frappe.ready(function () {
//     document.querySelector(".button").addEventListener("click", function (e) {
//         console.log("Clicked!!");
//         frappe.party.confetti(this);
//     });
//     })


//Method-2
// frappe.ready(function (){
//     document.querySelector(".button").addEventListener("click", function (e) {
//                 console.log("Clicked!!");
//             });
// })


//Method-3
function myFunction(mybtn){
    // console.log(mybtn,'Hiiiii!!',frappe.party);
    frappe.party.confetti(mybtn);
}

