let header = document.getElementById("header") as HTMLDivElement
let title = document.getElementById("title") as HTMLHeadElement
let excerpt = document.getElementById("excerpt") as HTMLDivElement
let profile_img = document.getElementById("profile_img") as HTMLImageElement
let nameU  = document.getElementById("name") as HTMLElement
let data = document.getElementById("date") as HTMLElement;

const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bgs_texts = document.querySelectorAll(".animated-bg-text")

setTimeout(getData,2500)

function getData () {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
    title.innerHTML = "Title card "
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis';
    profile_img.innerHTML = '<img src="profile.png" alt="" />'
    nameU.innerHTML = "Mohamed salah"
    data.innerHTML = "Des 19 2003"

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}