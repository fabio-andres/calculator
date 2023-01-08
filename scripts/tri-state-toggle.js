var buttons = document.getElementsByClassName("button");
var arr = [...buttons];

let toggle = arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      document.querySelector(".change").setAttribute("href", "./styles/dark.css")
    } else if (index == 1) {
        document.querySelector(".change").setAttribute("href", "./styles/light.css")
    } else {
        document.querySelector(".change").setAttribute("href", "./styles/dark2.css")
    }
    
    //elimina el chulo del checkbox al que se dio click previamente
     arr.filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});

export default {toggle}