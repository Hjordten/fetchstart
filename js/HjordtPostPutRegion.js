console.log("jeger i postregion")


/* Get elements */


const btnPost = document.getElementById("btnPost")
const btnPut = document.getElementById("btnPut")

const inpKode = document.getElementById("inpKode")
const inpNavn = document.getElementById("inpNavn")
const inpHref = document.getElementById("inpHref")

/* Nessesary const to use in file */

const regionUrl = "http://localhost:8080/region"

/* event listener on nessesary inputs from HTML file */

btnPost.addEventListener('click')
btnPut.addEventListener('click')


