window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound")
    const pads = document.querySelectorAll(".pads div")
    const visual = document.querySelectorAll('.visual')
    const colors=[
        "#60d394",
        "#83b18f",
        "#b77fe6",
        "#9fe74c",
        "#f04a6e",
        "#438eb1"
    ];
    // console.log(sounds[0]);

    pads.forEach((pad, index) => 
    {
        pad.addEventListener("click", function()
        {
            sounds[index].currentTime=0;
            sounds[index].play();
            createbubbles(index);

        });

    });  
    const createbubbles=(index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index] 
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);

        }); 

    };

});

// console.log(sounds);