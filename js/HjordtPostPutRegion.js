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


// vi laver en async function postRegion. Den skal være async, fordi den skal await som hedder postRegion
async function postRegion(){
    // We create a object and set it to be the region, we get from getRegion function
    const region = getRegion()
    // We create a const that contains the post endpoint
    const postUrl = regionUrl +"/indsæt";
    // We create a const response that await while the object is posted as json
    // We call function postObjectAsJson with the required information
    const res = await postObjectAsJson(putUrl, region, "PUT")
}

// We create the postObjectAsJson async function
//It takes 3 parameters:
// url from previous function. Object (region) from previous function.






