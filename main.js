

let n=1

init()
setInterval(()=>{
    makeLeave(getImage(n))
    .one('transitionend',(e)=>{
        makeEnter($(e.currentTarget))
    })
    makeCurrent(getImage(n+1))
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


function init(){
    $('.images > img:nth-child(1)').addClass('current')
    .siblings().addClass('enter')
}

function getImage(n){
    return $(`.images > img:nth-child(${x(n)})`)
}

function makeCurrent($node){
    return $node.removeClass('leave enter').addClass('current')
}

function makeLeave($node){
    return $node.removeClass("current enter").addClass('leave')
}

function makeEnter($node){
    return $node.removeClass("current leave").addClass('enter')
}