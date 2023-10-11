var array = []
var id = 0;
var preview
const file = document.getElementById("file");
const galeria = document.querySelector(".container-fotos")
const prev = document.querySelector("#prev");
const input = document.getElementById("url");




input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value != "") {
    preview = input.value;

    input.value = "";
    showPreview();
  }
})



function render() {
  galeria.innerHTML = "";

  array.push({
    id: id,
    foto: preview
  })
  array.forEach((item) => {
    console.log(array)
    let container = document.createElement("img");

    container.className = "containerr";
    container.src = item.foto;

    galeria.appendChild(container);
  })
}

function showPreview() {
  prev.innerHTML = ""
  let img = document.createElement("img");
  img.className = "card-foto"
  img.src = preview;
  prev.appendChild(img)
}
file.addEventListener("change", (e) => {
  if (e.target.files.length > 0) {
    const file = e.target.files[0];
    const fileURL = URL.createObjectURL(file);

    preview = fileURL;
    showPreview();
  }
});
function Submit() {
  if(preview){
    render();
  }
}