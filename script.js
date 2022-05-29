const matrix = [];

const h = 134;
const w = 134;
const startOffSet = w/2;
const duration = 2000;

const tileBob = [
    { transform: 'translate(0, 0px)' }, 
    { transform: 'translate(0, 10px)' }, 
    { transform: 'translate(0, -10px)' }, 
    { transform: 'translate(0, 0px)' }, 
];

const tileTiming = {
    duration: duration,
    iterations: 2
}

const load = () => {
    for (let i=0; i<5; i++) {
        for (let j=0; j<5; j++) {
            matrix.push([i, j]);
        }
    }
    matrix.forEach((item, index, arr) => {
        const i = item[0];
        const j = item[1];
        const tile = document.createElement("img");
        tile.src = "tile.png";
        tile.dataset.coords = [i, j];
        tile.style.top = i*h*0.25+j*h*0.25 + window.innerHeight/4 + "px";
        tile.style.left = j*w*0.5-i*w*0.5 + window.innerWidth/2 - startOffSet+ "px";
        document.body.appendChild(tile);
    });
    const animate = () => {
        matrix.forEach(async (item, index, arr) => {
            const i = item[0];
            const j = item[1];
            const tiles = document.querySelectorAll("[data-coords~='" + i + "," + j + "']");
            setTimeout(() => {
                tiles[0].animate(tileBob, tileTiming);
            }, i*500+j*500+index*50);
        });
    }
    setInterval(() => {
        animate();
    }, duration);
    animate();
};

document.addEventListener("readystatechange", function(event) {
    if (document.readyState === "complete") {
        load();
    }
}); 
