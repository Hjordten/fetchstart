console.log("jeg er i postregion")

const pbPostRegion = document.getElementById("pbPostRegion")
const pbPutRegion = document.getElementById("pbPutRegion")

const inpKode = document.getElementById("inpKode")
const inpNavn = document.getElementById("inpNavn")
const inpHref = document.getElementById("inpHref")

const regionUrl = "http://localhost:8080/region"

function getRegion() {
    const region = {}
    region.kode = inpKode.value
    region.navn = inpNavn.value
    region.href = inpHref.value
    console.log(region)
    return region
}

async function postRegion() {
    const region = getRegion()
    const postUrl = regionUrl + "/indsæt";
    const res = await postObjectAsJson(postUrl, region, "POST")
    if (res.ok) {
        alert("Region saved")
    }
}

async function putRegion() {
    const region = getRegion()
    const putUrl = regionUrl + "/opdater/kode/" + region.kode
    console.log(putUrl)
    const res = await postObjectAsJson(putUrl, region, "PUT")
    if (res.ok) {
        alert("Region updated")
    }
}

async function postObjectAsJson(url, object, httpVerbum) {
    const objectAsJsonString = JSON.stringify(object)
    console.log(objectAsJsonString)
    const fetchOptions = {
        method: httpVerbum,
        headers: {
            "Content-Type": "application/json",
        },
        body: objectAsJsonString
    }
    const response = await fetch(url, fetchOptions)
    return response
}

function actionPostRegion() {
    postRegion()
}

function actionPutRegion() {
    console.log("kalder putregion")
    putRegion()
}

pbPostRegion.addEventListener('click', actionPostRegion)
pbPutRegion.addEventListener('click', actionPutRegion)