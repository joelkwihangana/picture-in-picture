const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//prompt to select a media strem, pass to video element, and then play

const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("opps!, error happened: " + error);
  }
};

button.addEventListener("click", async () => {
  //disable button
  button.disabled = true;
  //start picture in picture
  await videoElement.requestPictureInPicture();
  //reset the button
  button.disabled = false;
});

//on load
selectMediaStream();
