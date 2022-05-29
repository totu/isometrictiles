const tiles = [];
const h = 134;
const w = 134;
const startOffSet = w/2;

const load = () => {
    for (let i=0; i<5; i++) {
        for (let j=0; j<5; j++) {
            const tile = document.createElement("img");
            tile.src = "tile.png";
            tile.dataset.i = [i, 0.5];
            tile.dataset.j = [-1 * j, 0.5];
            tile.style.position = "absolute";
            tile.style.top = i*h*0.5+j*h*0.25 + "px";
            tile.style.left = j*w*0.5 - startOffSet + "px";
            document.body.appendChild(tile);
            tiles.push(tile);
        }
    }
    tiles.forEach(function(item, index, arr) {
        console.log(item, index, arr)
    });
};

document.addEventListener("readystatechange", function(event) {
    if (document.readyState === "complete") {
        load();
    }
}); 
