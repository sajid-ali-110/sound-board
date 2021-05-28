const sounds = ['tune-1', 'tune-2', 'tune-3', 'tune-4', 'tune-5', 'tune-6']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound
    
    btn.addEventListener('click', ()=> {
        stopSongs()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').
    appendChild(btn)
})

function stopSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0;
    });
}