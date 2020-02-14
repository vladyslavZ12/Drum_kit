(() => {
  let keys = Array.from(document.querySelectorAll('.key'));

  keys.forEach(key => key.addEventListener('transitionend', resetKey));

  function resetKey(){
    this.classList.remove('playing');
  }

  function playSound(event){


    //debugger;
    let audioElement = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    let key = document.querySelector(`div[data-key="${event.keyCode}"]`)

    if (!audioElement) { return }

    audioElement.currentTime = 0;
    audioElement.play();

key.classList.add('playing');
  }

  window.addEventListener('keydown', playSound);

})();
