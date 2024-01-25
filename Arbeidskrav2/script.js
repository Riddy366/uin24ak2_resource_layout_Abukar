let resourceHTML = "";
const resourceContent = document.getElementById("resourceContent");
const resourceList = document.getElementById("resourceList");

// Funksjon for å oppdatere innholdet basert på kategorien
function updateContent(category) {
    const selectedResource = resources.find(resource => resource.category === category);

    // Hvis det er valgt en ressurs
    if (selectedResource) {
        const titleURL = selectedResource.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join('');

        // Oppdaterer innholdet med valgt ressurs
        resourceContent.innerHTML = `<h2>${selectedResource.category}</h2><p>${selectedResource.text}</p>${titleURL}`;
    }
}

// Funksjon som kalles når en knapp klikkes
function buttonClick(category) {
    console.log(`Button clicked for category: ${category}`);
    updateContent(category);
}

// Genererer knapper basert på tilgjengelige ressurser
resources.forEach(resource => {
    resourceHTML += `<li><button onclick="buttonClick('${resource.category}')">${resource.category}</button></li>`;
});

// Setter inn knappene i ressurslisten
resourceList.innerHTML = resourceHTML;

// Hvis det er ressurser tilgjengelig, oppdaterer innholdet med den første ressursen
if (resources.length > 0) {
    updateContent(resources[0].category);
}
