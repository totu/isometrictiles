const tiles = [];
const h = 134;
const w = 134;
const startOffSet = w/2;

const load = () => {
    const matrix = [];
    for (let i=0; i<5; i++) {
        for (let j=0; j<5; j++) {
            matrix.push([i, j]);
        }
    }
    matrix.forEach(function(item, index, arr) {
        const i = item[0];
        const j = item[1];
        const tile = document.createElement("img");
        tile.src = "tile.png";
        tile.style.top = i*h*0.25+j*h*0.25 + "px";
        tile.style.left = j*w*0.5-i*w*0.5 + window.innerWidth/2 - startOffSet+ "px";
        document.body.appendChild(tile);
    });
};

document.addEventListener("readystatechange", function(event) {
    if (document.readyState === "complete") {
        load();
    }
}); 
