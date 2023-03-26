

let allMusic = getSongs();

function getSongs() {
    const playlistId = window.localStorage.getItem('playlistid');
    switch (playlistId) {
        case '1':
            return [

                {
                    name: "Dildara",
                    artist: "Shafqat Ali",
                    img: "Dildara",
                    src: "Dildara"
                },
                {
                    name: "Kal Ho Na Ho",
                    artist: "Sonu Nigam",
                    img: "Kal Ho Naa Ho",
                    src: "Kal Ho Naa Ho"
                },
                {
                    name: "Love You Zindagi",
                    artist: "Jim Yosef x Roy",
                    img: "Love You Zindagi",
                    src: "Love You Zindagi"
                },
                {
                    name: "Manwa Laage",
                    artist: "Arjit-Shreya",
                    img: "Manwa Laage",
                    src: "Manwa Laage"
                },
                {
                    name: "Bol Na Halke",
                    artist: "Mike Archangelo",
                    img: "Bol-Na-Halke-Halke",
                    src: "Bol-Na-Halke-Halke"
                },
                {
                    name: "Saibo",
                    artist: "Sachin-Jigar",
                    img: "Saibo",
                    src: "Saibo"
                },
                {
                    name: "Tere Naina",
                    artist: "Shankar-Ehsaan-Loy",
                    img: "Tere Naina",
                    src: "Tere Naina"
                },
                {
                    name: "Kesariya",
                    artist: "Arjit",
                    img: "Kesariya",
                    src: "Kesariya"
                },
                {
                    name: "Mitwa",
                    artist: "Shafqat Ali",
                    img: "Mitwa",
                    src: "Mitwa"
                }

            ];
        case '2':
            return [

                {
                    name: "Pasoori",
                    artist: "Ali Sethi",
                    img: "Pasoori",
                    src: "Pasoori"
                },
                {
                    name: "Dil Luteya",
                    artist: "Audio Library",
                    img: "dil-lutya",
                    src: "dil-lutya"
                },
                {
                    name: "Brown Rangde",
                    artist: "Honey Singh",
                    img: "brown-rangde",
                    src: "brown-rangde"
                },
                {
                    name: "Chaiya-Chaiya",
                    artist: "Sukhwinder Singh",
                    img: "Chaiya-Chaiya",
                    src: "Chaiya-Chaiya"
                },
                {
                    name: "Jim - Sun Goes Down",
                    artist: "Jim Yosef x Roy",
                    img: "Breathless",
                    src: "Breathless"
                },
                {
                    name: "Uff-Teri-Ada",
                    artist: "Beauz & Jvna",
                    img: "Uff-Teri-Ada",
                    src: "Uff-Teri-Ada"
                },
                {
                    name: "Waka-Waka",
                    artist: "Audio Library",
                    img: "Waka-Waka",
                    src: "Waka-Waka"
                },
                {
                    name: "Rock N Roll",
                    artist: "Jim Yosef x Roy",
                    img: "Rock-N-Roll",
                    src: "Rock-N-Roll"
                },
                {
                    name: "Ishq Tadpave",
                    artist: "Jim Yosef x Roy",
                    img: "ishq-tera-tadpave",
                    src: "ishq-tera-tadpave"
                },
                {
                    name: "Tum HI Ho Bandu",
                    artist: "Jim Yosef x Roy",
                    img: "Tum hi ho Bandhu",
                    src: "Tum hi ho Bandhu"
                }


            ];
        case '3':
            return [
                {
                    name: "Aasman Ko chukar Dekha",
                    artist: "Daler Mehndi",
                    img: "hanuman",
                    src: "hanuman"
                },
                {
                    name: "Yeh Ladka Hai Allah",
                    artist: "Audio Library",
                    img: "Yeh-Ladka",
                    src: "Yeh-Ladka"
                },
                {
                    name: "Masakali",
                    artist: "Mohit Chauhan",
                    img: "Masakali",
                    src: "Masakali"
                },
                {
                    name: "Genda-Phool",
                    artist: "Mohit Chauhan",
                    img: "Genda-Phool",
                    src: "Genda-Phool"
                },
                {
                    name: "Haule-Haule",
                    artist: "Mohit Chauhan",
                    img: "Haule-Haule",
                    src: "Haule-Haule"
                },
                {
                    name: "London Thumakda",
                    artist: "Beauz & Jvna",
                    img: "London Thumakda",
                    src: "London Thumakda"
                },
                {
                    name: "Udd Gaye",
                    artist: "Audio Library",
                    img: "Udd Gaye",
                    src: "Udd Gaye"
                },
                {
                    name: "Kaajra re",
                    artist: "Beauz & Jvna",
                    img: "kajra-re",
                    src: "kajra-re"
                },
                {
                    name: "Chaudhary",
                    artist: "Beauz & Jvna",
                    img: "Chaudhary",
                    src: "Chaudhary"
                },
                {
                    name: "Ghagra",
                    artist: "Beauz & Jvna",
                    img: "Ghagra",
                    src: "Ghagra"
                },
                {
                    name: "Prem Ki Nayiya",
                    artist: "Neeraj-Shridhar",
                    img: "prem-ki-naiyya",
                    src: "prem-ki-naiyya"
                }

            ];
        case '4':
            return [

                {
                    name: "Abhi Na Jao",
                    artist: "Mohammed Rafi",
                    img: "abhi-na-jao",
                    src: "abhi-na-jao"
                },
                {
                    name: "Yoon Shabnami",
                    artist: "Mohammed Rafi",
                    img: "Yoon Shabnami",
                    src: "Yoon Shabnami"
                },
                {
                    name: "Din Chadeya",
                    artist: "Mike Archangelo",
                    img: "Ajj_Din_Chadeya",
                    src: "Ajj_Din_Chadeya"
                },
                {
                    name: "Harley Bird - Home",
                    artist: "Jordan Schor",
                    img: "Raataan_Lambiyan",
                    src: "Raataan_Lambiyan"
                },
                {
                    name: "Hardwind - Want Me",
                    artist: "Mike Archangelo",
                    img: "Shukran Allah",
                    src: "Shukran Allah"
                },
                {
                    name: "Jim - Sun Goes Down",
                    artist: "Jim Yosef x Roy",
                    img: "Yeh-shaam",
                    src: "Yeh-shaam"
                },
                {
                    name: "Tumse-Milke",
                    artist: "Sonu Nigam",
                    img: "Tumse-Milke-Dil-Ka",
                    src: "Tumse-Milke-Dil-Ka"
                },
                {
                    name: "O Re Piya",
                    artist: "NCS Release",
                    img: "O Re Piya",
                    src: "O Re Piya"
                },
                {
                    name: "Tumhi Dekho Naa",
                    artist: "NCS Release",
                    img: "Tumhi Dekho Naa",
                    src: "Tumhi Dekho Naa"
                },
                {
                    name: "Tumhi Dekho Naa",
                    artist: "NCS Release",
                    img: "Ajab si",
                    src: "Ajab si"
                },
                {
                    name: "Lost Sky - Vision NCS",
                    artist: "NCS Release",
                    img: "Peheli Nazar",
                    src: "Peheli Nazar"
                }


            ];
        case '5':
            return [
                {
                    name: "We Will Rock U",
                    artist: "Queen",
                    img: "we-will-rock-u",
                    src: "we-will-rock-u"
                },
                {
                    name: "Harley Bird - Home",
                    artist: "One Direction",
                    img: "Night-Changes",
                    src: "Night-Changes"
                },
                {
                    name: "Bones",
                    artist: "Imagine Dragons",
                    img: "Bones",
                    src: "Bones"
                },
                {
                    name: "Harley Bird - Home",
                    artist: "Jordan Schor",
                    img: "Perfect",
                    src: "Perfect"
                },
                {
                    name: "Until I Found You",
                    artist: "Stephan Sanchez",
                    img: "Until-I-Found-You",
                    src: "Until-I-Found-You"
                },
                {
                    name: "Senorita",
                    artist: "Shawn Mendes",
                    img: "Senorita",
                    src: "Senorita"
                },
                {
                    name: "Thunder",
                    artist: "Imagine Dragons",
                    img: "Thunder",
                    src: "Thunder"
                },


            ];
        case '6':
            return [

                {
                    name: "Yeh-Raatein",
                    artist: "Jordan Schor",
                    img: "Yeh-Raatein",
                    src: "Yeh-Raatein"
                },
                {
                    name: "Gullabi Aankhein",
                    artist: "Jordan Schor",
                    img: "Gulabi Aankhein",
                    src: "Gulabi Aankhein"
                },
                {
                    name: "Illahi",
                    artist: "Arjit Singh",
                    img: "ilahi",
                    src: "ilahi"
                },
                {
                    name: "Sajda",
                    artist: "Jordan Schor",
                    img: "Sajda",
                    src: "Sajda"
                },
                {
                    name: "Kun Faya Kun",
                    artist: "Audio Library",
                    img: "Kun Faya Kun",
                    src: "Kun Faya Kun"
                },
                {
                    name: "In-Ankhon-Ki-Masti",
                    artist: "Beauz & Jvna",
                    img: "In-Ankhon-Ki-Masti",
                    src: "In-Ankhon-Ki-Masti"
                },
                {
                    name: "Meri-Samne-Vali",
                    artist: "Kishore Kumar",
                    img: "Meri-Samne-Vali",
                    src: "Meri-Samne-Vali"
                },
                {
                    name: "Dekha-ek-Khwab",
                    artist: "Audio Library",
                    img: "Dekha-ek-Khwab",
                    src: "Dekha-ek-Khwab"
                },
                {
                    name: "Afreen Afreen",
                    artist: "Rahat Fateh Ali Khan",
                    img: "Afreen-Afreen",
                    src: "Afreen-Afreen"
                },
                {
                    name: "Mere Mehboob",
                    artist: "Kishore Kumar",
                    img: "Mere-mehboob",
                    src: "Mere-mehboob"
                }

            ];

    }

}
/*
function updateSongs() {
    console.log("Upfste songs", window.localStorage.getItem('playlistId'));
    allMusic = getSongs();
    console.log(allMusic)
}*/

const wrapper = document.querySelector(".wrapper"),
    musicImg = wrapper.querySelector(".img-area img"),
    musicName = wrapper.querySelector(".song-details .name"),
    musicArtist = wrapper.querySelector(".song-details .artist"),
    playPauseBtn = wrapper.querySelector(".play-pause"),
    prevBtn = wrapper.querySelector("#prev"),
    nextBtn = wrapper.querySelector("#next"),
    mainAudio = wrapper.querySelector("#main-audio"),
    progressArea = wrapper.querySelector(".progress-area"),
    progressBar = progressArea.querySelector(".progress-bar"),
    musicList = wrapper.querySelector(".music-list"),
    moreMusicBtn = wrapper.querySelector("#more-music"),
    closemoreMusic = musicList.querySelector("#close"),
    addplaylist = musicList.querySelector("#add");


let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
isMusicPaused = true;

window.addEventListener("load", () => {
    loadMusic(musicIndex);
    playingSong();
});

function loadMusic(indexNumb) {
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = `images/${allMusic[indexNumb - 1].src}.jpg`;
    mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
}

//play music function
function playMusic() {
    wrapper.classList.add("paused");
    playPauseBtn.querySelector("i").innerText = "pause";
    mainAudio.play();
}

//pause music function
function pauseMusic() {
    wrapper.classList.remove("paused");
    playPauseBtn.querySelector("i").innerText = "play_arrow";
    mainAudio.pause();
}

//prev music function
function prevMusic() {
    musicIndex--; //decrement of musicIndex by 1
    //if musicIndex is less than 1 then musicIndex will be the array length so the last music play
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingSong();
}

//next music function
function nextMusic() {
    musicIndex++; //increment of musicIndex by 1
    //if musicIndex is greater than array length then musicIndex will be 1 so the first music play
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingSong();
}

// play or pause button event
playPauseBtn.addEventListener("click", () => {
    const isMusicPlay = wrapper.classList.contains("paused");
    //if isPlayMusic is true then call pauseMusic else call playMusic
    isMusicPlay ? pauseMusic() : playMusic();
    playingSong();
});

//prev music button event
prevBtn.addEventListener("click", () => {
    prevMusic();
});

//next music button event
nextBtn.addEventListener("click", () => {
    nextMusic();
});

// update progress bar width according to music current time
mainAudio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime; //getting playing song currentTime
    const duration = e.target.duration; //getting playing song total duration
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

    let musicCurrentTime = wrapper.querySelector(".current-time"),
        musicDuartion = wrapper.querySelector(".max-duration");
    mainAudio.addEventListener("loadeddata", () => {
        // update song total duration
        let mainAdDuration = mainAudio.duration;
        let totalMin = Math.floor(mainAdDuration / 60);
        let totalSec = Math.floor(mainAdDuration % 60);
        if (totalSec < 10) { //if sec is less than 10 then add 0 before it
            totalSec = `0${totalSec}`;
        }
        musicDuartion.innerText = `${totalMin}:${totalSec}`;
    });
    // update playing song current time
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) { //if sec is less than 10 then add 0 before it
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

// update playing song currentTime on according to the progress bar width
progressArea.addEventListener("click", (e) => {
    let progressWidth = progressArea.clientWidth; //getting width of progress bar
    let clickedOffsetX = e.offsetX; //getting offset x value
    let songDuration = mainAudio.duration; //getting song total duration

    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic(); //calling playMusic function
    playingSong();
});

//change loop, shuffle, repeat icon onclick
const repeatBtn = wrapper.querySelector("#repeat-plist");
repeatBtn.addEventListener("click", () => {
    let getText = repeatBtn.innerText; //getting this tag innerText
    switch (getText) {
        case "repeat":
            repeatBtn.innerText = "repeat_one";
            repeatBtn.setAttribute("title", "Song looped");
            break;
        case "repeat_one":
            repeatBtn.innerText = "shuffle";
            repeatBtn.setAttribute("title", "Playback shuffled");
            break;
        case "shuffle":
            repeatBtn.innerText = "repeat";
            repeatBtn.setAttribute("title", "Playlist looped");
            break;
    }
});

//code for what to do after song ended
mainAudio.addEventListener("ended", () => {
    // we'll do according to the icon means if user has set icon to
    // loop song then we'll repeat the current song and will do accordingly
    let getText = repeatBtn.innerText; //getting this tag innerText
    switch (getText) {
        case "repeat":
            nextMusic(); //calling nextMusic function
            break;
        case "repeat_one":
            mainAudio.currentTime = 0; //setting audio current time to 0
            loadMusic(musicIndex); //calling loadMusic function with argument, in the argument there is a index of current song
            playMusic(); //calling playMusic function
            break;
        case "shuffle":
            let randIndex = Math.floor((Math.random() * allMusic.length) + 1); //genereting random index/numb with max range of array length
            do {
                randIndex = Math.floor((Math.random() * allMusic.length) + 1);
            } while (musicIndex == randIndex); //this loop run until the next random number won't be the same of current musicIndex
            musicIndex = randIndex; //passing randomIndex to musicIndex
            loadMusic(musicIndex);
            playMusic();
            playingSong();
            break;
    }
});

//show music list onclick of music icon
moreMusicBtn.addEventListener("click", () => {
    musicList.classList.toggle("show");
});
closemoreMusic.addEventListener("click", () => {
    moreMusicBtn.click();
});

addplaylist.addEventListener("click", () => {
    var url = './_library.php';
    var formData = new FormData();
    formData.append('data', JSON.stringify(allMusic));

    fetch(url, { method: 'POST', body: formData })
        .then(function (response) {
            return response.text();
        })
        .then(function (body) {
            console.log(body);
        });
    // fetch('./_library.php', {
    //     method: 'POST',
    //     body: { allMusic: JSON.stringify(allMusic) }
    // });
    // $.ajax({
    //     url: "./_library.php",
    //     method: "POST",
    //     dataType: 'json',
    //     data: { allMusic: JSON.stringify(allMusic) },
    //     success: function (res) {
    //         console.log(res)
    //     }
    // });
});
const ulTag = wrapper.querySelector("ul");
// let create li tags according to array length for list
for (let i = 0; i < allMusic.length; i++) {
    //let's pass the song name, artist from the array
    let liTag = `<li li-index="${i + 1}">
                <div class="row">
                  <span>${allMusic[i].name}</span>
                  <p>${allMusic[i].artist}</p>
                </div>
                <span id="${allMusic[i].src}" class="audio-duration">3:40</span>
                <audio class="${allMusic[i].src}" src="songs/${allMusic[i].src}.mp3"></audio>
              </li>`;
    ulTag.insertAdjacentHTML("beforeend", liTag); //inserting the li inside ul tag

    let liAudioDuartionTag = ulTag.querySelector(`#${allMusic[i].src}`);
    let liAudioTag = ulTag.querySelector(`.${allMusic[i].src}`);
    liAudioTag.addEventListener("loadeddata", () => {
        let duration = liAudioTag.duration;
        let totalMin = Math.floor(duration / 60);
        let totalSec = Math.floor(duration % 60);
        if (totalSec < 10) { //if sec is less than 10 then add 0 before it
            totalSec = `0${totalSec}`;
        };
        liAudioDuartionTag.innerText = `${totalMin}:${totalSec}`; //passing total duation of song
        liAudioDuartionTag.setAttribute("t-duration", `${totalMin}:${totalSec}`); //adding t-duration attribute with total duration value
    });
}

//play particular song from the list onclick of li tag
function playingSong() {
    const allLiTag = ulTag.querySelectorAll("li");

    for (let j = 0; j < allLiTag.length; j++) {
        let audioTag = allLiTag[j].querySelector(".audio-duration");

        if (allLiTag[j].classList.contains("playing")) {
            allLiTag[j].classList.remove("playing");
            let adDuration = audioTag.getAttribute("t-duration");
            audioTag.innerText = adDuration;
        }

        //if the li tag index is equal to the musicIndex then add playing class in it
        if (allLiTag[j].getAttribute("li-index") == musicIndex) {
            allLiTag[j].classList.add("playing");
            audioTag.innerText = "Playing";
        }

        allLiTag[j].setAttribute("onclick", "clicked(this)");
    }
}

//particular li clicked function
function clicked(element) {
    let getLiIndex = element.getAttribute("li-index");
    musicIndex = getLiIndex; //updating current song index with clicked li index
    loadMusic(musicIndex);
    playMusic();
    playingSong();
}