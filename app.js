const footerElements = document.querySelectorAll(".footer-link");
const colors = ["royalblue", "mediumvioletred", "blue"];
footerElements.forEach((el, i) =>{
    el.addEventListener("mouseover", () =>{
        document.body.style.backgroundColor = colors[i];
    });
    el.addEventListener("mouseout", () =>{
        document.body.style.backgroundColor = "aliceblue";
    });
});