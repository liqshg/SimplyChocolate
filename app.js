(() => {
    const mobileMenu =document.getElementById("mobilemenu")
    const openMenu =document.getElementById("openmenu")
    openMenu.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        alert("add_class");
        });
})