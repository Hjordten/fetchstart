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

btnPost.addEventListener('click', actionPostRegion)
btnPut.addEventListener('click', actionPutRegion)

/* Functions */

// GetRegion function (Den skal bare oprette en region, og fylde informationer i objektet.
function getRegion(){
    // først laver vi et tomt element
    const region = {
    }
    // Vi sætter elementerne til at være de respektive attributer for region
    region.kode = inpKode.value
    region.navn = inpNavn.value
    region.href = inpHref.value
    // Vi returnere det fyldte object
    return region
}


// vi laver en async function putRegion. Den skal være async, fordi den skal await
async function



