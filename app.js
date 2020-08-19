window.onload = function () {
  var myAudio = document.getElementById("my-audio");

  myAudio.addEventListener("progress", function () {
    console.log("myAudio.buffered.end", myAudio.buffered.length - 1);
    var bufferedEnd = myAudio.buffered.end(myAudio.buffered.length - 1);
    var duration = myAudio.duration;
    if (duration > 0) {
      document.getElementById("buffered-amount").style.width =
        (bufferedEnd / duration) * 100 + "%";
    }
  });

  myAudio.addEventListener("timeupdate", function () {
    var duration = myAudio.duration;
    if (duration > 0) {
      document.getElementById("progress-amount").style.width =
        (myAudio.currentTime / duration) * 100 + "%";
    }
  });

  let val = 0;
  const rangeAmount = document.querySelector("#range-amount");
  myAudio.addEventListener("timeupdate", function () {
    const duration = myAudio.duration;

    console.log("duration", duration);
    if (duration > 0) {
      console.log(
        "a",
        (rangeAmount.value = (myAudio.currentTime / duration) * 100)
      );

      val = myAudio.currentTime / duration;
      rangeAmount.value = (myAudio.currentTime / duration) * 100;
    }
  });

  rangeAmount.addEventListener("input", function (e) {
    const inp = e.currentTarget;
    const duration = myAudio.duration;
    myAudio.pause();
    myAudio.currentTime = (inp.value * duration) / 100;
    myAudio.play();
  });
};
