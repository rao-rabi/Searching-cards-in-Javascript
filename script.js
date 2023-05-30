// cards data

let dataStudent = [
    {
        id: "252101",
        name: "Rao Rabi",
        status: "In-Progress",
        university: "GCUF"
    },
    {
        id: "252102",
        name: "Rana Subhan",
        status: "Graduated",
        university: "GCUF"
    },
    {
        id: "425516",
        name: "Nasir Zia",
        status: "In-Progress",
        university: "NUML"
    },
    {
        id: "252103",
        name: "Mian Umar",
        status: "In-Progress",
        university: "GCUF"
    },
    {
        id: "252104",
        name: "Dr. Zohaib",
        status: "In-Progress",
        university: "GCUF"
    },
    {
        id: "252105",
        name: "Mian Usama",
        status: "Graduated",
        university: "None"
    },
    {
        id: "252106",
        name: "Asad Ali",
        status: "In-Progress",
        university: "GCUF"
    },
    {
        id: "252101",
        name: "Rao Rabi",
        status: "Graduated",
        university: "NUML"
    },
    {
        id: "425519",
        name: "Azhar Ali",
        status: "In-Progress",
        university: "NUML"
    },
    {
        id: "345612",
        name: "Rana Subhan",
        status: "In-Progress",
        university: "UET"
    },
    {
        id: "355623",
        name: "Rana Ahmad",
        status: "Graduated",
        university: "UET"
    },
    {
        id: "252123",
        name: "Rai Hamza",
        status: "In-Progress",
        university: "GCUF"
    }
];

//getting cards div

const cardContainer = document.getElementById("cardContainer")
// console.log(cardContainer);

// data entry in cards

function renderData(dataStudent) {
    cardContainer.innerHTML = "";
    dataStudent.forEach((data) => {

        cardContainer.innerHTML += `
        <div class="card p-4 mb-2 col-lg-3 col-md-6 col-12 me-2 lead fw-normal border border-warning border-5">
        <p><span class="h4">ID:</span> ${data.id}</p>
        <p><span class="h4">Name:</span> ${data.name}</p>
        <p><span class="h4">Status:</span> ${data.status}</p>
        <p><span class="h4">University:</span> ${data.university}</p>
        </div>`;
    });

}


//searching through name and uni name

function searchingFunc() {
    const searchInput = document.getElementById('searchbox');
    const searchedItem = searchInput.value.toLowerCase();

    let fiteredData = dataStudent.filter((item) => {
        let uniMatch = item.university.toLowerCase().includes(searchedItem);
        let nameMatch = item.name.toLowerCase().includes(searchedItem);
        return uniMatch || nameMatch;
    });
    renderData(fiteredData)
}

//searching through radio buttons

function searchRadio(e) {
    // console.log("e-->",e);
    if (e.target.value === "graduated") {
        let filteredGraduated = dataStudent.filter((item) => {
            let graduated = item.status.includes('Graduated');
            return graduated;
        })
        renderData(filteredGraduated);
       
    }
    else if(e.target.value === "in-progress"){
        let filteredProgress = dataStudent.filter((item) => {
                let inProgress = item.status.includes('In-Progress');
                return inProgress;
            })
        renderData(filteredProgress)
    }
}
