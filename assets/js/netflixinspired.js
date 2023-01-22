function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    trailer.classList.toggle('active');

    video.currentTime = 0;
    video.pause();
}

function blacknavbar(){
const nav = document.getElementById('nav');

window.addEventListener('scroll', () =>{
    if(window.scrollY >=200){
        nav.classList.add('nav_black')
    }else{
        nav.classList.remove('nav_black')
    }
});
}