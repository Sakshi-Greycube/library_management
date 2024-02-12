import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()

frappe.jsConfetti=jsConfetti

console.log('inside js confetti main library')
console.log('jsConfetti',jsConfetti)
// const jsConfetti = new JSConfetti()

// jsConfetti.addConfetti()

// jsConfetti.addConfetti({
//     emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
//  })

// jsConfetti.addConfetti({
//     confettiColors: [
//       '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
//     ],
//   })

// jsConfetti.addConfetti({
//     confettiRadius: 6,
//     confettiNumber: 1000, 
//   }) 

// jsConfetti.addConfetti({
//     emojis: ['🌸'],
//     emojiSize: 50,
//     confettiNumber: 300,
//   })

//   console.log(typeof(jsConfetti) + "...jsConfetti")
//   console.log(typeof(JSConfetti) + "...JSConfetti")

// console.log('hello world') 

 
// frappe.ready(function() {
// 	console.log("ready")
//   function clickEvent() {  
//     console.log("now the Click Event is triggered ")  
//    } 
// })