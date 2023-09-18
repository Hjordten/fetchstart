console.log("jeg er i postregion")

const pbPostRegion = document.getElementById("pbPostRegion")

const inpKode = document.getElementById("inpKode")
const inpNavn = document.getElementById("inpNavn")
const inpHref = document.getElementById("inpHref")

const regionUrl = "http://localhost:8080/region/indæst"

function getRegion() {
    const region = {}
    region.kode = inpKode.value
    region.navn = inpNavn.value
    region.Href = inpHref.value
    console.log(region)
}


async function postRegion() {
    const res = await postObjectAsJson(regionUrl, region)
}

async function postObjectAsJson(url, region) {
    const objectAsJsonString = JSON.stringify(region)
    console.log(objectAsJsonString)
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: objectAsJsonString
    }

    const response = await fetch(url, fetchOptions)

    if (!response.ok) {
        const errorMessage = await response.text()
        throw new Error(errorMessage)
    } else {
        alert("Region saved")
    }

    return response
}

function actionPostRegion() {
    postRegion()
    console.log("Hej nu har jeg postet")
}


pbPostRegion.addEventListener('click', postRegion)

