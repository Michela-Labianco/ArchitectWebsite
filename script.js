// document.getElementsByTagName('a')
// .forEach(control => { //forEach takes one argument
//     control.addEventListener('click', (e) => { //e = event object
//         e.preventDefault()
//     })
// })

document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('change');
})

document.querySelector('.header').addEventListener('click', () => {
    document.querySelector('.container').classList.remove('change');
})


//you can code smooth behaviour also in javascript with the arrow at the end of the page
// document.querySelector('.scroll-btn').addEventListener('click', () => {
//     document.querySelector('html').style.scrollBehavior = 'smooth';
//     setTimeout(() => {
//         document.querySelector('html').style.scrollBehavior = 'unset';
//     }, 1000);
// })
//once we click the button, we will assign to the HTML 
//element the property called scroll behavior and we will set it to smooth.
//And then after a second we will remove it, because if we don't do that, then the smooth scroll will
//work if we click any of the links on the page.


//once the page is loaded after 4 seconds we have to add to body a new class.
window.onload = () => { //executed once the page is loaded
    //to display the container using that new class.
    //So we need the global window object and we have to attach to it onLoad Event handler.
    setTimeout(() => {
        document.querySelector('body').classList.add('display');
    }, 4000);
}