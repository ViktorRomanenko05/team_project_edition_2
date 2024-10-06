//Объект с данными сотрудников
const employees ={
    yulya: {
        previewPhoto: "pictures/ceo.jpg",
        photo: "pictures/ceo.jpg",
        name: "Yulya",
        surname: "Dietz",
        city: "Heidelberg",
        position: "CEO",
        experience: "5 years in banking, 10 years in \
                     franchise brokerage and advisory services",
        info: "I create and set the company's vision and mission. \
              Leading the development and execution of business strategy, along with motivating \
              all employees, is also an important part of my work.",
    },

    lina: {
        previewPhoto: "./pictures/code.jpg",
        photo: "./pictures/code.jpg",
        name: "Lina",
        surname: "Göbel",
        city: "Lichtenfels",
        position: "Back End",
        experience: "10 years in IT",
        info: "I am a dedicated back-end developer with 10\
              years of experience in IT. I specialize in creating robust and\
              scalable solutions, and I enjoy solving complex problems. In my\
              free time, I explore new technologies and contribute to\
              open-source projects.",
    },

    tatiana: {
        previewPhoto: "pictures/Produktmanager1.png",
        photo: "pictures/Produktmanager12.png",
        name: "Tatiana",
        surname: "Novikova",
        city: "Berlin",
        position: "Product manager",
        experience: "10 years",
        info: "I determine which customer requirements and\
              overarching company goals a product or feature should meet. It\
              defines how success is defined in a product and motivates a team\
              to make that vision come true.",
    },

    alexander: {
        previewPhoto: "./pictures/devOps1.webp",
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
        previewPhoto: "./pictures/depositphotos_180736330-stock-illustration-logo-quality-assurance-qa-testing.jpg",
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
        previewPhoto: "pictures/founder.jpg",
        photo: "pictures/founder.jpg",
        name: "Stanislav",
        surname: "Borysenko",
        city: "Worldwide",
        position: "Founder",
        experience: "10 years",
        info: "I am creative and innovative head of the business. I have experience in creating more\
               than 10 successful start-ups.",
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
yulyaPicture.src = employees.yulya.previewPhoto;
linaPicture.src = employees.lina.previewPhoto;
tatianaPicture.src = employees.tatiana.previewPhoto;
alexanderPicture.src = employees.alexander.previewPhoto;
viktorPicture.src = employees.viktor.previewPhoto;
stanislavPicture.src = employees.stanislav.previewPhoto;

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