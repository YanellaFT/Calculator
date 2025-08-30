let screen;
let total = 0;
let key0, key1, key2, key3, key4, key5, key6, key7, key8, key9;
let keyAdd, keySub, keyMul, keyDiv, keyEq, keyClr;
let keyDot, keyNeg;
let keyPi, keyExp, keySqrt, keyParO, keyParC;

function setup() {
    createCanvas(400, 550);

    textStyle(BOLD);
    textSize(20);

    screen = new Sprite(200, 50, 350, 70);
    screen.color = "white";
    //screen.text = total;


    key0 = new Sprite(180, 500, 40, 40);
    key0.color = "lightgrey";
    key0.text = "0";

    key1 = new Sprite(100, 450, 40, 40);
    key1.color = "lightgrey";
    key1.text = "1";

    key2 = new Sprite(180, 450, 40, 40);
    key2.color = "lightgrey";
    key2.text = "2";

    key3 = new Sprite(260, 450, 40, 40);
    key3.color = "lightgrey";
    key3.text = "3";

    key4 = new Sprite(100, 400, 40, 40);
    key4.color = "lightgrey";
    key4.text = "4";

    key5 = new Sprite(180, 400, 40, 40);
    key5.color = "lightgrey";
    key5.text = "5";

    key6 = new Sprite(260, 400, 40, 40);
    key6.color = "lightgrey";
    key6.text = "6";

    key7 = new Sprite(100, 350, 40, 40);
    key7.color = "lightgrey";
    key7.text = "7";

    key8 = new Sprite(180, 350, 40, 40);
    key8.color = "lightgrey";
    key8.text = "8";

    key9 = new Sprite(260, 350, 40, 40);
    key9.color = "lightgrey";
    key9.text = "9";


    keyEq = new Sprite(340, 500, 40, 40);
    keyEq.color = "orange";
    keyEq.text = "=";

    keyAdd = new Sprite(340, 450, 40, 40);
    keyAdd.color = "orange";
    keyAdd.text = "+";

    keySub = new Sprite(340, 400, 40, 40);
    keySub.color = "orange";
    keySub.text = "-";

    keyMul = new Sprite(340, 350, 40, 40);
    keyMul.color = "orange";
    keyMul.text = "*";

    keyDiv = new Sprite(340, 300, 40, 40);
    keyDiv.color = "orange";
    keyDiv.text = "/";


    keyDot = new Sprite(260, 500, 40, 40);
    keyDot.color = "lightgrey";
    keyDot.text = ".";

    keyNeg = new Sprite(100, 500, 40, 40);
    keyNeg.color = "lightgrey";
    keyNeg.text = "+/-";


    keyClr = new Sprite(340, 250, 40, 40);
    keyClr.color = "red";
    keyClr.text = "C";

    keyPi = new Sprite(100, 300, 40, 40);
    keyPi.color = "lightgrey";
    keyPi.text = "π";

    keyParO = new Sprite(180, 300, 40, 40);
    keyParO.color = "lightgrey";
    keyParO.text = "(";

    keyParC = new Sprite(260, 300, 40, 40);
    keyParC.color = "lightgrey";
    keyParC.text = ")";

    keySqrt = new Sprite(180, 250, 40, 40);
    keySqrt.color = "lightgrey";
    keySqrt.text = "√";
    
    keyExp = new Sprite(260, 250, 40, 40); 
    keyExp.color = "lightgrey";
    keyExp.text = "^";
}

function draw() {
    background("#575353ff");

 
    if (keyAdd.mouse.pressed()) {
        screen.text = "Adding total: 0";

        if (key0.mouse.pressed()) {
            total = total + 0;
        }
        if (key1.mouse.pressed()) {
            total = total + 1;
        }
        if (key2.mouse.pressed()) {
            total = total + 2;
        }
    
        screen.text = "Adding total: " + total
    }

}