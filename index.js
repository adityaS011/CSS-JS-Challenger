function showContent(number, data, colorBox) {
    var box10 = document.getElementById("box-10");
    box10.innerHTML = `<h1>Content of Box ${number}</h1> <br> <p>${data}</p>`;
    box10.style.backgroundColor = colorBox;
    box10.style.borderLeft = '0';
    box10.style.borderTopLeftRadius = '9px';
    box10.style.height = 'auto'; 
}

function hideContent() {
    var box10 = document.getElementById("box-10");
    box10.innerHTML = "Nothing to show";
    box10.style.backgroundColor = "#FFCCBC"; // Default background color for #box-10
    box10.style.borderLeft = '2px solid rgb(42, 255, 42);'; // Default background color for #box-10
    
}


document.addEventListener('DOMContentLoaded', function () {
    var boxes = document.querySelectorAll('.box');

    boxes.forEach(function (box, index) {
        var data = box.querySelector('p').innerHTML;

        box.addEventListener('mouseover', function () {
            showContent(index + 1, data, window.getComputedStyle(box).backgroundColor);
            box.style.transform = 'translateX(100px)';
            box.style.border = '0';
            box.style.opacity = '0.6';
            box.style.borderLeft = '9px solid rgb(122, 248, 105)';
            box.style.borderTopRightRadius = '100%';
            box.style.borderTopLeftRadius = '20%';
            box.style.borderBottomRightRadius = '100%';
            box.style.borderBottomLeftRadius = '20%';
            box.style.zIndex = '1';
        });

        box.addEventListener('mouseout', function () {
            hideContent();
            box.style.transform = 'none';
            box.style.border = '2px solid rgb(42, 255, 42)';
            box.style.opacity = '1';
            box.style.borderLeft = 'none';
            box.style.borderTopRightRadius = '0';
            box.style.borderTopLeftRadius = '0%';
            box.style.borderBottomRightRadius = '0';
            box.style.borderBottomLeftRadius = '0%';
            box.style.zIndex = 'auto';
        });
    });
});
