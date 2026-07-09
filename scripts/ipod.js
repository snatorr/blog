let player;
let current = 0;
let progressInterval;
let isPlaying = false;

const playlist = [
    {
        title: "cooL",
        file: "assets/music/cool.mp3",
        cover: "assets/cover/zelly.jpg"
    },
    {
        title: "lo que pasa",
        file: "assets/music/lo-que-pasa.mp3",
        cover: "assets/cover/lo-que-pasa.png"
    },
    {
        title: "fumo uno fumo dos",
        file: "assets/music/fumo-uno-fumo-dos.mp3",
        cover: "assets/cover/pilf.jpg"
    },
    {
        title: "diamante",
        file: "assets/music/diamante.mp3",
        cover: "assets/cover/bdv.jpg"
    }
];

function initPlayer() {
    player = new Audio(playlist[current].file);
    updateUI();

    player.onended = () => {
        nextTrack();
    };
}

function updateUI() {
    document.getElementById("track-title").textContent = playlist[current].title;
    document.getElementById("cover").src = playlist[current].cover;
}

document.getElementById("play").onclick = () => {
    if (!player) return;
    const btnPlay = document.getElementById("play");

    if (player.paused) {
        player.play();
        btnPlay.classList.remove("state-paused");
        btnPlay.classList.add("state-playing");
        startProgressTimer();
    } else {
        player.pause();
        btnPlay.classList.remove("state-playing");
        btnPlay.classList.add("state-paused");
        clearInterval(progressInterval);
    }
};

function nextTrack() {
    if (!player) return;
    const wasPlaying = !player.paused;

    current = (current + 1) % playlist.length;
    player.src = playlist[current].file;
    updateUI();

    if (wasPlaying) {
        player.play();
    } else {
        document.getElementById("play").className = "ipod-btn btn-play-pause state-paused";
        clearInterval(progressInterval);
        document.getElementById("progress-bar").style.width = "0%";
    }
}
document.getElementById("next").onclick = nextTrack;

document.getElementById("prev").onclick = () => {
    if (!player) return;
    const wasPlaying = !player.paused;

    current = (current - 1 + playlist.length) % playlist.length;
    player.src = playlist[current].file;
    updateUI();

    if (wasPlaying) {
        player.play();
    } else {
        document.getElementById("play").className = "ipod-btn btn-play-pause state-paused";
        clearInterval(progressInterval);
        document.getElementById("progress-bar").style.width = "0%";
    }
};

function startProgressTimer() {
    clearInterval(progressInterval);
    progressInterval = setInterval(() => {
        if (player && !player.paused) {
            const currentTime = player.currentTime;
            const duration = player.duration;

            if (duration > 0) {
                const percentage = (currentTime / duration) * 100;
                document.getElementById("progress-bar").style.width = percentage + "%";
                document.getElementById("current-time").textContent = formatTime(currentTime);
                document.getElementById("duration-time").textContent = formatTime(duration);
            }
        }
    }, 250);
}

function formatTime(time) {
    if (isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return mins + ":" + (secs < 10 ? "0" : "") + secs;
}

document.getElementById("progress-container").onclick = function(e) {
    if (player && player.duration) {
        const rect = this.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const duration = player.duration;

        if (duration > 0) {
            const newTime = (clickX / width) * duration;
            player.currentTime = newTime;
            document.getElementById("progress-bar").style.width = (clickX / width) * 100 + "%";
            document.getElementById("current-time").textContent = formatTime(newTime);
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    initPlayer();
});