document.getElementById("down").addEventListener("click", function() {
    const jobExperienceSection = document.getElementById("JobExperience");
    jobExperienceSection.scrollIntoView({
        behavior: "smooth"
    });
});
