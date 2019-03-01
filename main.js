$('.images > img:nth-child(1)').addClass('current')
$('.images > img:nth-child(2)').addClass('enter')
$('.images > img:nth-child(3)').addClass('enter')
$('.images > img:nth-child(4)').addClass('enter')
$('.images > img:nth-child(5)').addClass('enter')

let n = 1
setInterval(()=>{
    let currentImg = $(`.images > img:nth-child(${x(n)})`)  //获取到当前展示的图片
    let nextImg = $(`.images > img:nth-child(${x(n+1)})`)   //获取到下一张要展示的图片

    currentImg.removeClass('current').addClass('leave')     //3秒结束后为leave区元素去掉leave加上enter
    .one('transitionend',(e)=>{
        $(e.currentTarget).removeClass('leave').addClass('enter')
    })
    nextImg.removeClass('enter').addClass('current')
    n += 1
},3000)


let allimages = $('.images > img')
let size = allimages.length

function x(n){            //保证n 在 size内循环
    if(n>size){
        n = n%size
        if(n===0){
            n=size
        }
    }
    return n
}