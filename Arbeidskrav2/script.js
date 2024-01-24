let recourceHTML = "";

// Funksjon for å oppdatere innholdet basert på kategori
function updateContent(category, title) {
    const resourceContent = document.getElementById("resourceContent");
    const selectedResource = resources.find(resource => resource.category === category);


    if (selectedResource) {
        resourceContent.innerHTML = `
            <h2>${selectedResource.category}</h2>
            <p>${selectedResource.text}</p>
        `;
    }
    
}



console.log()
// Funksjon for knappetrykk
function handleButtonClick(category) {
    console.log(`Button clicked for category: ${category}`);
    updateContent(category);
}


// Generer HTML for ressurslisten
resources.forEach((resource) => {
    recourceHTML += `
        <li><a href="#"><button onclick="handleButtonClick('${resource.category}')">${resource.category}</button></a></li>
    `;
});

// Sett HTML for ressurslisten
const resourceList = document.getElementById("resourceList");
resourceList.innerHTML = recourceHTML;

// Vis innholdet for første kategori som standard
if (resources.length > 0) {
    updateContent(resources[0].category);
}
