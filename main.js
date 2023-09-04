// navigate to different page on

const fonts = document.createElement("link");
fonts.setAttribute("rel", "stylesheet");
fonts.setAttribute("href", "https://fonts.googleapis.com/css2?family=Irish+Grover");
document.body.appendChild(fonts);
document.body.style.background = "#E5E5E5";
//alert(document.body.outerHTML);

/*
const title = document.createElement("h1");
title.innerHTML = "Feeling Advent-urous?";
title.style.color = "#C39A2E";
title.style.fontFamily = "Irish Grover, serif";
title.style.textAlign = "center";
title.style.fontSize = "60px";
title.style.fontStyle = "normal";
title.style.fontWeight = "600";
title.style.lineHeight = "normal";
document.body.appendChild(title);
*/

const title_container = document.createElement("div");
title_container.style.margin = "20px";
//title_container.style.border = "solid";
const title = document.createElement("object");
//title.style.border = "solid";
const svg_image = document.createElement("img");
  title.setAttribute("data", "https://raw.githubusercontent.com/p-d-c/images/main/Title_Panel.svg");
  svg_image.setAttribute("src", "https://raw.githubusercontent.com/p-d-c/images/main/Title_Panel.svg");
title.appendChild(svg_image);
title_container.appendChild(title);
//title_container.style.display = "block";
//title_container.style.justifyContents = "center";
title_container.style.textAlign = "center";
document.body.appendChild(title_container);

const grid = document.createElement("div");
grid.classList.add("grid");
grid.style.display = "grid"; //("")
grid.style.gridTemplateColumns = "repeat(1, auto auto auto auto auto)";
grid.style.gridRowGap = "20px";
//grid.style.border = "solid";
grid.style.alignItems = "center";
grid.style.justifyContent = "center";
grid.style.gridColumnGap = "120px";
document.body.appendChild(grid);

for (var i = 0; i < 25; i++) {

	const grid_item = document.createElement("div")
  grid_item.classList.add("grid_item");
  grid_item.style.width = "100px";
  grid_item.style.height = "100px";
  grid_item.style.border = "9px dashed #c39A2E";
  grid_item.style.background = "rgba(195, 154, 46, 0.50)";
  grid_item.style.boxShadow = "0px 4px 4px 0px rgba(0, 0, 0, 0.25)";
  grid_item.style.display = "flex";
  grid_item.style.justifyContent = "center";
  grid_item.style.alignItems = "center";
  grid_item.style.cursor = "pointer";
  grid_item.style.transition = "roate 0.1s";
  grid_item.addEventListener("click", function() {
  	alert("hello");
    window.location.href = "https://www.baskinrobbins.com/en";
  })
  grid.appendChild(grid_item);
  
  const grid_container = document.createElement("div");
  grid_container.classList.add("grid_container");
  grid_container.style.width = "100%";
  grid_container.style.height = "100%";
  grid_container.style.flexShrink = "0";
  grid_item.appendChild(grid_container);
  
  const question_text = document.createElement("div");
  question_text.innerText = "?";
  //alert(question_text.innerHTML);
  question_text.classList.add("question_text");
  question_text.style.width = "64px";
  question_text.style.height = "20px";
  question_text.style.color = "#C39A2E";
  question_text.style.fontFamily = "Irish Grover, serif";
  question_text.style.fontSize = "80px";
  question_text.style.fontStyle = "normal";
  question_text.style.fontWeight = "400";
  question_text.style.lineHeight = "normal";
  question_text.style.top = "5px";
  question_text.style.left = "30px";
  question_text.style.position = "relative";
  grid_container.appendChild(question_text);
}
