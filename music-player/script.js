var songs=[
    {
        id:1,
        imageSrc: "./thumbnail/image1.jpg",
        audioSrc: "./audio/khaab.mp3",
        title: "Khaab",
    },
    {
        id:2,
        imageSrc: "./thumbnail/img2.jpg",
        audioSrc: "./audio/Waalian.mp3",
        title: "Walian",
    },
    {
        id:3,
        imageSrc: "./thumbnail/img3.jpg",
        audioSrc: "./audio/duniyan.mp3",
        title: "Duniyan",
    },
    {
        id:4,
        imageSrc: "./thumbnail/img4.jpg",
        audioSrc: "./audio/rovega.mp3",
        title: "TU_IK_DIN_ROVEGA",
    },
    {
        id:5,
        imageSrc: "./thumbnail/img5.jpg",
        audioSrc: "./audio/vichara.mp3",
        title: "Main Vichara",
    },
    {
        id:6,
        imageSrc: "./thumbnail/img6.jpg",
        audioSrc: "./audio/avega.mp3",
        title: "Kade ta tu aavega",
    }
]


function generateAudioCard()
{
    let htmlString="";

    songs.forEach(function(song,index){
        let songHTML=`
                    <div class="audio_img">
                        <img src="${song.imageSrc}"/>
                    </div>
                    <div class="audio_detail">
                        <h1 class="audio_title">${song.title}</h1>
                        <button class="btn" onclick="playAudio(${song.id})">Play   now</button>
                    </div>
        `;
        htmlString+=htmlString+songHTML;
    });
    document.getElementById("audios").innerHTML=htmlString;

}
generateAudioCard();

function playAudio(songid)
{
    var song = songs.find(function(song,index){return song.id===songid});
    document.getElementById("thumbnail_id").src=song.imageSrc;
    document.getElementById("audio_player").src=song.audioSrc;
    document.getElementById("audio_player-title").innerText=song.title;
    document.getElementById("audio_player").play();

    
     
}

