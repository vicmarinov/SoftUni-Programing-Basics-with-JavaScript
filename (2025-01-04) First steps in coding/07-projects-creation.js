function projectsCreation (architectName, projectsNumber) {
    let hours = projectsNumber * 3; // The architect needs 3 hours for creating one project
    console.log(`The architect ${architectName} will need ${hours} hours to complete ${projectsNumber} project/s.`);
}

projectsCreation("George", 4);
projectsCreation("Sanya", 9);