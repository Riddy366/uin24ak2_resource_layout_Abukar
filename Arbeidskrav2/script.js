let resourceHTML = "";
const resourceContent = document.getElementById("resourceContent");

function updateContent(category) {
    const selectedResource = resources.find(resource => resource.category === category);

    if (selectedResource) {
        const titleURL = selectedResource.sources.map(source => `
            <li><a href="${source.url}" target="_blank">${source.title}</a></li>
        `).join('');

        resourceContent.innerHTML = `
            <h2>${selectedResource.category}</h2>
            <p>${selectedResource.text}</p>
            ${titleURL}
        `;
    }
}

function buttonClick(category) {
    console.log(`Button clicked for category: ${category}`);
    updateContent(category);
}

resources.forEach((resource) => {
    resourceHTML += `<li><button onclick="buttonClick('${resource.category}')">${resource.category}</button></li>`;
});

const resourceList = document.getElementById("resourceList");
resourceList.innerHTML = resourceHTML;

if (resources.length > 0) {
    updateContent(resources[0].category);
}
