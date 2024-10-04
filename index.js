//Объект с данными сотрудников
const employees ={
    yulya: {
        photo: "LINK НА ФОТО",
        name: "Yulya",
        surname: "Dietz",
        city: "Berlin",
        position: "CEO",
        experience: "10 years",
        info: "Hi, I`m here",
    },

    lina: {
        photo: "LINK НА ФОТО",
        name: "Lina",
        surname: "Göbel",
        city: "Berlin",
        position: "CTO",
        experience: "10 years",
        info: "Hi, I`m here",
    },

    tatiana: {
        photo: "LINK НА ФОТО",
        name: "Tatiana",
        surname: "N",
        city: "Berlin",
        position: "Product manager",
        experience: "10 years",
        info: "Hi, I`m here",
    },

    alexander: {
        photo: "./pictures/DevOps.webp",
        name: "Alexander",
        surname: "Anischenko",
        city: "Worms",
        position: "DevOps",
        experience: "10 years",
        info: "DevOps professional with 10 years of experience, specializing in automating workflows, \
        optimizing systems, and enhancing collaboration between development and operations teams for efficient solutions.",
    },

    viktor: {
        photo: "./pictures/circle.png",
        name: "Viktor",
        surname: "Romanenko",
        city: "Wehr",
        position: "QA",
        experience: "10 years in QA",
        info: "I am a QA specialist with experience in software testing and automation. \
        I focus on ensuring productquality, optimizing testing, and minimizing defects.",
    },

    stanislav: {
        photo: "LINK НА ФОТО",
        name: "Stanislav",
        surname: "Borysenko",
        city: "Berlin",
        position: "Software engineer",
        experience: "10 years",
        info: "Hi, I`m here",
    },
};
//Выбор необходимых элементов
//страница превью
const mainPage = document.querySelector("#team-member-preview");
const yulyaPicture = document.querySelector("#yulya-picture"); 
const linaPicture = document.querySelector("#lina-picture");
const tatianaPicture = document.querySelector("#tatiana-picture");
const alexanderPicture = document.querySelector("#alexander-picture");
const viktorPicture = document.querySelector("#viktor-picture");
const stanislavPicture = document.querySelector("#stanislav-picture");
//кнопки
const yulyaButton = document.querySelector("#button-yulya");
const linaButton = document.querySelector("#button-lina");
const tatianaButton = document.querySelector("#button-tatiana");
const alexanderButton = document.querySelector("#button-alexander");
const viktorButton = document.querySelector("#button-viktor");
const stanislavButton = document.querySelector("#button-stanislav");

//страница сотрудника
const teamMemberOutput = document.querySelector("#team-member-info");
//поля с данными сотрудника
const outputPhoto = document.querySelector("#picture-in-profile")
const outputName = document.querySelector("#output-name");
const outputSurname = document.querySelector("#output-surname");
const outputCity = document.querySelector("#output-city");
const outputPosition = document.querySelector("#output-position");
const outputExperience = document.querySelector("#output-experience");
const outputInfo = document.querySelector("#output-about-me");
//кнопка фозврата на страницу превью
const backButton = document.querySelector("#button-back");

//устанавливаем фото на страницу превью
yulyaPicture.src = employees.yulya.photo;
linaPicture.src = employees.lina.photo;
tatianaPicture.src = employees.tatiana.photo;
alexanderPicture.src = employees.alexander.photo;
viktorPicture.src = employees.viktor.photo;
stanislavPicture.src = employees.stanislav.photo;

//Функция отображения данных сотрудника на странице профиля
const showEmployeeInfo = (employeeName) =>{

    const selectedEmployee = employees[employeeName];

    mainPage.classList.add("hide");
    teamMemberOutput.classList.remove("hide");

    outputPhoto.src = selectedEmployee.photo
    outputPhoto.alt = `${selectedEmployee.name} ${selectedEmployee.surname}`;
    outputName.textContent = selectedEmployee.name;
    outputSurname.textContent = selectedEmployee.surname;
    outputCity.textContent = selectedEmployee.city;
    outputPosition.textContent = selectedEmployee.position;
    outputExperience.textContent = selectedEmployee.experience;
    outputInfo.textContent = selectedEmployee.info;
}

//Функция возврата на страницу превью
const backPreview = () => {
    mainPage.classList.remove("hide");
    teamMemberOutput.classList.add("hide");
}

//Добавляем обработчики события для кнопок профилей
yulyaButton.addEventListener("click", () => {showEmployeeInfo("yulya")});
linaButton.addEventListener("click", () => {showEmployeeInfo("lina")});
tatianaButton.addEventListener("click", () => {showEmployeeInfo("tatiana")});
alexanderButton.addEventListener("click", () => {showEmployeeInfo("alexander")});
viktorButton.addEventListener("click", () => {showEmployeeInfo("viktor")});
stanislavButton.addEventListener("click", () => {showEmployeeInfo("stanislav")});

//Добавляем обработчик события для кнопки возврата
backButton.addEventListener("click", () => {backPreview()});