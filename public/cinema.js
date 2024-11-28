
let currentDate = document.getElementById("currentDate")
let theDate = new Date()
currentDate.innerHTML = theDate.toDateString()
let dayDate = document.getElementById("dayDate")
let carouselContainer = document.getElementById('carouselContainer')
let movieName = document.getElementById('movieName')
let movieWriter = document.getElementById("movieWriter")
let movieDescription = document.getElementById('movieDescription')
let dayOne = document.getElementById('dayOne')
let indexNum = document.getElementById("indexNum")
let detailsInnerDiv = document.getElementById("detailsInnerDiv")
let theMovies = document.getElementById("theMovies")
let movieDiv = document.getElementById("movieDiv")
// class
let sectionFiveInnerDiv = document.getElementById("sectionFiveInnerDiv")
let ade = cinMov()
getData()

function getData() {
    let infor = []

    db.collection("movieCarousel").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            infor.push(doc.data())

        });
    });
    return infor;
    console.log(infor.length);


} 

let info = getData()

console.log(info);

let index = 0

setTimeout(() => {
    if (info.length > 0) {
        displayData()
        availableMovieImages()
        cinMov()
    }
}, 3000);


setInterval(() => {
    displayData()

}, 5000);



displayData()
function displayData() {
    detailsInnerDiv.style.backgroundImage = `url(https://firebasestorage.googleapis.com/v0/b/cinemawebsite-8056d.appspot.com/o/images%2FBlacksmith-Alagbede.jpeg?alt=media&token=fd325fd2-4ceb-4bb4-b071-076c6cc936fd)`;
    detailsInnerDiv.innerHTML = ""
    detailsInnerDiv.innerHTML += `

     <h1 id="movieName">${info[index].title}</h1>
    <span id="movieWriter">A movie by ${info[index].writer}</span>
    <p id="movieDescription">${info[index].description}</p>
    
    `


    if (index == info.length - 1) {
        index = 0
    } else {
        index++
    }

}

availableMovieImages()
function availableMovieImages() {

    db.collection("weeklyMovies").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

        
        
        movieDiv.innerHTML += `
    <div id="movieImage"><img src="${doc.data().image}" alt=""></div>
    <div id="movieTitle">
    <h3 id="theMovieName">${doc.data().weekTitle}</h3>
    <h3 id="theMovieType">${doc.data().weekGenre}</h3>
    <P id="theMovieDescription">${doc.data().weeKDescription}</P>
    <div>
    <div class="screenTime"><span>${doc.data().screenNumberOne}</span><span class="screen">${doc.data().movieTimeOne}</span></div>
    <div class="screenTime"><span>${doc.data().screenNumberTwo}</span><span class="screen">${doc.data().movieTimeTwo}</span></div>
    </div>
    </div>
`
    });
});

   
}

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];


for (let index = 0; index < 6; index++) {
    dayOne.innerHTML += `<div id="viewDate"><p>${theDate.getDate() + index} JUNE</p>
  <p>${weekday[theDate.getDay() + index]}</p></div>`
}
cinMov()
function cinMov(){
    document.getElementById("garfield").style.color = "#ff515a"
    sectionFiveInnerDiv.style.backgroundImage = "url('garfield.jpg')"
}
    


function furiosa(){
    document.getElementById("furiosa").style.color = "#ff515a"
    sectionFiveInnerDiv.style.backgroundImage = "url('furiosa.jpeg')"
    document.getElementById("garfield").style.color = "black"
    
}