function projectsCreation (architectName, projectsQuantity) {
    let hours = projectsQuantity * 3; // The architect needs 3 hours for creating one project
    console.log(`The architect ${architectName} will need ${hours} hours to complete ${projectsQuantity} project/s.`);
}

projectsCreation("George", 4);
projectsCreation("Sanya", 9);