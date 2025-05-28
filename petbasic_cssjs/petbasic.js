let learnAnimals = document.querySelector('.learn_animals')
let feedingManagement = document.querySelector('.feeding_management')
let healthCare = document.querySelector('.health_care')
let behavioralTraining = document.querySelector('.behavioral_training')
let to1 = document.querySelector('.to1')
let to2 = document.querySelector('.to2')
let to3 = document.querySelector('.to3')
let to4 = document.querySelector('.to4')

document.addEventListener('DOMContentLoaded', function() {
    to1.addEventListener('click', function() {
        learnAnimals.scrollIntoView({ behavior: "smooth", block: "start" })
    });
    to2.addEventListener('click', function() {
        feedingManagement.scrollIntoView({ behavior: "smooth", block: "start" })
    });
    to3.addEventListener('click', function() {
        healthCare.scrollIntoView({ behavior: "smooth", block: "start" })
    });
    to4.addEventListener('click', function() {
        behavioralTraining.scrollIntoView({ behavior: "smooth", block: "start" })
    });
});
