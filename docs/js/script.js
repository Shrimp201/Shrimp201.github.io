document.addEventListener('DOMContentLoaded', (event) => {
    function show_image(src, width, height, alt) {
        let img = document.createElement("img");
        img.src = src;
        img.width = width;
        img.height = height;
        img.alt = alt;

        document.body.appendChild(img);
    }

    alert('Shrimp');
    let shrimp = prompt("Are you a shrimp", "say yes");
    console.log(shrimp);

    if (shrimp === "yes") {
        show_image("gag.png", 1900, 800, "gfg logo");
    }
    else{
        show_image("egg.png", 1900, 900, "gfg logo"); 
    }
});





