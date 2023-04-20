class Preloader  {
    constructor() {

    }
    preload (){
        window.onload = function (){
            let n = document.querySelector(".visible");
            n.style.display='none'

        }
    }

}
export default Preloader;
