/* Do setup is starting scene */
document.querySelector(".setupexe .start").addEventListener("click", () => {
    document.querySelector(".setupexe").style.display = "none";
    document.querySelector(".setupstarttxt").style.display = "block";
    setTimeout(() => {
        document.querySelector(".setupexe").style.display = "block";
        document.querySelector(".setupstarttxt").style.display = "none";
        document.querySelector(".setupexe .start").style.display = "none";
        document.querySelector(".setupexe .os").style.display = "block";
    }, 5000);
});
/* Do this to go to the operating system simulator websites */
function os(osName) {
    location.assign(`https://mark6132014.github.io/${osName}`);
}