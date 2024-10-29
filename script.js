console.log("Welcome to Spotify");

// initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Dekha Hai Pehli Baar", filePath: "songs/1.mp3", coverPath: "covers/11.jpg"},
    {songName: "Tere Mere Beech Men", filePath: "songs/2.mp3", coverPath: "covers/12.jpg"},
    {songName: "Nila Kaaigiradhu", filePath: "songs/3.mp3", coverPath: "covers/13.jpg"},
    {songName: "Malargal Kaettaen", filePath: "songs/4.mp3", coverPath: "covers/14.jpg"},
    {songName: "Annul Maelae", filePath: "songs/5.mp3", coverPath: "covers/15.jpg"},
    {songName: "Innisai", filePath: "songs/6.mp3", coverPath: "covers/16.jpg"},
    {songName: "Kadhalaada Kadhal Aada", filePath: "songs/7.mp3", coverPath: "covers/17.jpg"},
    {songName: "Moongil Thottam", filePath: "songs/8.mp3", coverPath: "covers/18.jpg"},
    {songName: "Kallai Mattum Kandal", filePath: "songs/9.mp3", coverPath: "covers/19.jpg"},
    {songName: "Naatu Naatu", filePath: "songs/10.mp3", coverPath: "covers/20.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// handling play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// listening to events
audioElement.addEventListener('timeupdate', ()=>{ 
    // update progressbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

// Assume you have an array of song durations in minutes
const songDurations = [3, 4, 5, 2, 3];

// Calculate the total watch time
const totalWatchTime = songDurations.reduce((acc, duration) => acc + duration, 0);

// Display the total watch time in the span element
document.getElementById('totalWatchTime').textContent = totalWatchTime;
