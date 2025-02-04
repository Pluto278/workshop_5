# workshop_5
link:https://pluto278.github.io/workshop_5

# tasks

# notes

## 1.Variable Declarations
data: An array used to store the data read from the "mood.csv" file.
click: A variable representing the click state, with an initial value of -1.
img2, img1, img0: Used to store the images loaded from the files "2.png", "1.png", and "0.png" respectively.

## 2.preload Function
Function Functionality:
The loadImage function is used to load three different image files ("2.png", "1.png", "0.png") and assign them to the variables img2, img1, and img0 respectively.
The data variable is populated with data from the "mood.csv" file using the loadTable function. The file is read as a CSV file with an empty delimiter.
```
function preload() {
    img2 = loadImage('2.png');
    img1 = loadImage('1.png');
    img0 = loadImage('0.png');
    data = loadTable('mood.csv', 'csv', '');
}
```

## 3.setup Function
Function Functionality:
A canvas with a size of 600x600 pixels is created using the createCanvas function.
The img1 image is displayed at the position (0, 0) with a size of 100x100 pixels on the canvas.
```
function setup() {
    createCanvas(600, 600);
    image(img1, 0, 0, 100, 100);
}
```

## 4.draw Function
Function Functionality:
The background color of the canvas is set to a very dark color (value 2).
If the click variable is -1 (i.e., no click has occurred yet), a text message "Click to Reveal Mood Data" is displayed in the center of the canvas with a text size of 20, white color, and centered alignment.
If the click variable is not -1, the drawmood function is called to display the images based on the data.
```
function draw() {
    background(2);
    if (click == -1) {
        textSize(20);
        fill(255);
        textAlign(CENTER);
        text("Click to Reveal Mood Data", width / 2, height / 2);
    } else {
        drawmood();
    }
}
```

## 5.drawmood Function
Function Functionality:
For each row in the data array up to the click index, it retrieves the row data.
For each value (up to 24 values per row), it checks the value. If the value is 2, it displays the img2 image at a specific position on the canvas. If the value is 1, it displays the img1 image, and if the value is 0, it displays the img0 image. The position of the image is calculated based on the row index (i) and column index (j).
```
function drawmood() {
    for (let i = 0; i <= click; i++) {
        let day_mood = data.getRow(i);
        for (let j = 0; j < 24; j++) {
            mood = day_mood.get(j);
            console.log(mood);
            if (mood == 2) {
                image(img2, 100 * i, 25 * j, 25, 25);
            } else if (mood == 1) {
                image(img1, 100 * i, 25 * j, 25, 25);
            } else {
                image(img0, 100 * i, 25 * j, 25, 25);
            }
        }
    }
}
```

## 6.mousePressed Function
Function Functionality:
When the mouse is pressed, if the click variable is less than 6, it increments the click variable. If the click variable reaches 6, it resets the click variable to -1.
```
function mousePressed() {
    if (click < 6) {
        click++;
    } else {
        click = -1;
    }
}
```
