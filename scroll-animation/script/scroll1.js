const bg = document.querySelectorAll('.bg')
const link_a = document.querySelectorAll('.link a')

link_a.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()
        window.scrollTo(0, bg[i].offsetTop)
    })
})