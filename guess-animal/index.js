const img = document.getElementById("img");

const input = document.getElementById("img-file");

input.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    img.src = reader.result;

    document.getElementById("animal").innerHTML = "Guessing...";
    mobilenet.load().then((model) => {
      // Classify the image.
      model.classify(img).then((predictions) => {
        document.getElementById("animal").innerHTML = predictions[0].className;
      });
    });
  });
  reader.readAsDataURL(file);
});
