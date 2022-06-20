// window.onload = function () {
//   let section1 = document.querySelector('.section1')
//   let section2 = document.querySelector('.section2')
//   let section3 = document.querySelector('.section3')
//   let section4 = document.querySelector('.section4')
//   let bt1 = document.querySelector('#bt1')
//   let bt2 = document.querySelector('#bt2')
//   let bt3 = document.querySelector('#bt3')
//   let qh = document.querySelector('.qh')
//   let back = document.querySelector('.back')
//   let font = document.querySelector('.font')
//   let font1 = document.querySelector('.font1')
//   let font3 = document.querySelector('.font3')
//   let font4 = document.querySelector('.font4')
//   let font5 = document.querySelector('.font5')
//   let text

//   let addLis = document.querySelector('.add').querySelectorAll('li')
//   let add2Lis = document.querySelector('.add2').querySelectorAll('li')
//   let add3Lis = document.querySelector('.add3').querySelectorAll('li')
//   let add4Lis = document.querySelector('.add4').querySelectorAll('li')
//   let add5Lis = document.querySelector('.add5').querySelectorAll('li')

//   let tijiaos = document.querySelectorAll('.tijiao')
//   let zhezhao = document.querySelector('.zhezhao')
//   // 答案
//   let answer = ['B', 'C', 'C', 'A', 'C']
//   // 成绩
//   let grades = 0;
//   // 存储正确题数
//   let right = 0
//   // 存储错误题数
//   let mistake = 0
//   bt1.onclick = function () {
//     section1.style.display = 'none'
//     section2.style.display = 'block'
//     // 重置选项框
//     fun(addLis)
//     // 重置变量
//     grades = 0
//     right = 0
//     mistake = 0
//   }
//   bt2.onclick = function () {
//     section1.style.display = 'none'
//     section3.style.display = 'block'

//     qh.classList.add('six1')
//     setTimeout(function () {
//       qh.classList.remove('six1')
//       qh.classList.add('six')
//     }, 6000)
//   }
//   bt3.onclick = function () {
//     section1.style.display = 'none'
//     section4.style.display = 'block'
//   }
//   qh.onclick = function () {
//     section1.style.display = 'block'
//     section3.style.display = 'none'
//   }
//   back.onclick = function () {
//     section1.style.display = 'block'
//     section4.style.display = 'none'
//   }

//   // 转换图片函数
//   function fun(value) {
//     for (let s = 0; s < value.length; s++) {
//       value[s].children[0].src = './img/未选中.png'
//     }
//   }

//   // 第一题判断
//   for (let i = 0; i < addLis.length; i++) {
//     addLis[i].onclick = function () {
//       for (let s = 0; s < addLis.length; s++) {
//         addLis[s].children[0].src = './img/未选中.png'
//       }
//       this.children[0].src = './img/对.png'
//       // console.log(this.children[1].innerHTML);
//       // substr() 表示截取字符串
//       text = this.children[1].innerHTML.substr(0, 1)
//     }
//   }

//   tijiaos[0].onclick = function () {
//     fun(add2Lis)
//     font.style.display = 'none'
//     font1.style.display = 'block'
//     if (text == answer[0]) {
//       grades += 20
//       right++
//     } else {
//       grades += 0
//       mistake++
//     }
//     console.log(grades);
//     text = null
//   }

//   // 第二题
//   for (let i = 0; i < add2Lis.length; i++) {
//     add2Lis[i].onclick = function () {
//       for (let s = 0; s < add2Lis.length; s++) {
//         add2Lis[s].children[0].src = './img/未选中.png'
//       }
//       this.children[0].src = './img/对.png'
//       // console.log(this.children[1].innerHTML);
//       // substr() 表示截取字符串
//       text = this.children[1].innerHTML.substr(0, 1)
//     }
//   }

//   tijiaos[1].onclick = function () {
//     fun(add3Lis)
//     font1.style.display = 'none'
//     font3.style.display = 'block'
//     if (text == answer[1]) {
//       grades += 20
//       right++
//     } else {
//       grades += 0
//       mistake++
//     }
//     console.log(grades);
//     text = null
//   }

//   // 第三题
//   for (let i = 0; i < add3Lis.length; i++) {
//     add3Lis[i].onclick = function () {
//       for (let s = 0; s < add3Lis.length; s++) {
//         add3Lis[s].children[0].src = './img/未选中.png'
//       }
//       this.children[0].src = './img/对.png'
//       // console.log(this.children[1].innerHTML);
//       // substr() 表示截取字符串
//       text = this.children[1].innerHTML.substr(0, 1)
//     }
//   }

//   tijiaos[2].onclick = function () {
//     fun(add4Lis)
//     font3.style.display = 'none'
//     font4.style.display = 'block'
//     if (text == answer[2]) {
//       grades += 20
//       right++
//     } else {
//       grades += 0
//       mistake++
//     }
//     console.log(grades);
//     text = null
//   }

//   // 第四题
//   for (let i = 0; i < add4Lis.length; i++) {
//     add4Lis[i].onclick = function () {
//       for (let s = 0; s < add4Lis.length; s++) {
//         add4Lis[s].children[0].src = './img/未选中.png'
//       }
//       this.children[0].src = './img/对.png'
//       // console.log(this.children[1].innerHTML);
//       // substr() 表示截取字符串
//       text = this.children[1].innerHTML.substr(0, 1)
//     }
//   }

//   tijiaos[3].onclick = function () {
//     fun(add5Lis)
//     font4.style.display = 'none'
//     font5.style.display = 'block'
//     if (text == answer[3]) {
//       grades += 20
//       right++
//     } else {
//       grades += 0
//       mistake++
//     }
//     console.log(grades);
//     text = null
//   }

//   // 第五题
//   for (let i = 0; i < add5Lis.length; i++) {
//     add5Lis[i].onclick = function () {
//       for (let s = 0; s < add5Lis.length; s++) {
//         add5Lis[s].children[0].src = './img/未选中.png'
//       }
//       this.children[0].src = './img/对.png'
//       // console.log(this.children[1].innerHTML);
//       // substr() 表示截取字符串
//       text = this.children[1].innerHTML.substr(0, 1)
//     }
//   }

//   let h2 = document.querySelector('.zhezhao').querySelector('h2')
//   let h3 = document.querySelector('.zhezhao').querySelector('h3')
//   let h4 = document.querySelector('.zhezhao').querySelector('h4')
//   let h5 = document.querySelector('.zhezhao').querySelector('h5')

//   tijiaos[4].onclick = function () {
//     font5.style.display = 'none'
//     zhezhao.style.display = 'block'
//     if (text == answer[4]) {
//       grades += 20
//       right++
//     } else {
//       grades += 0
//       mistake++
//     }
//     h2.innerHTML = grades
//     h3.innerHTML = right
//     if (grades == 100) {
//       h4.innerHTML = '满分'
//     } else if (grades == 80) {
//       h4.innerHTML = '良好'
//     } else if (grades == 60) {
//       h4.innerHTML = '及格'
//     } else {
//       h4.innerHTML = '不及格'
//     }
//     h5.innerHTML = mistake
//     text = null
//   }

//   // 返回按钮
//   let xback = document.querySelector('.xback')
//   xback.onclick = function () {
//     zhezhao.style.display = 'none'
//     section1.style.display = 'block'
//     section2.style.display = 'none'
//     font.style.display = 'block'
//   }

// }