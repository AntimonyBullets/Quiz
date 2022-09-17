let x = 0;
function check4() {
    let main = document.getElementById('main');
    let wrong3 = document.getElementById('first');
    let wrong2 = document.getElementById('second');
    let right = document.getElementById('third');
    let wrong1 = document.getElementById('fourth');
    setTimeout(() => {
        wrong1.style.backgroundColor = 'red';
        right.style.backgroundColor = 'green';
        wrong2.style.backgroundColor = 'red';
        wrong3.style.backgroundColor = 'red';
    }, 50);
    setTimeout(() => {
        if (x == 5) {
            main.innerHTML = `<p class="after-line" id ="win">You have scored ${x}/5.</p>
            <p class="after-line">You can retry by refreshing the page.</p>
            <a href="index.html" id = "play">Play again</a>`;
        }
        else if(x > 2){
            main.innerHTML = `<p class="after-line" id ="average">You have scored ${x}/5.</p>
            <p class="after-line">You can retry by refreshing the page.</p>
            <a href="index.html" id = "play">Play again</a>`;
        }
        else{
            main.innerHTML = `<p class="after-line" id ="lose">You have scored ${x}/5.</p>
            <p class="after-line">You can retry by refreshing the page.</p>
            <a href="index.html" id = "play">Play again</a>`;
        }
    }, 1000);
}
function check3() {
    let main = document.getElementById('main');
    let right = document.getElementById('first');
    let wrong2 = document.getElementById('second');
    let wrong3 = document.getElementById('third');
    let wrong1 = document.getElementById('fourth');
    setTimeout(() => {
        wrong1.style.backgroundColor = 'red';
        right.style.backgroundColor = 'green';
        wrong2.style.backgroundColor = 'red';
        wrong3.style.backgroundColor = 'red';
    }, 50);
    setTimeout(() => {
        main.innerHTML = `<p id="question">Q: Which king was the best among the following?</p>
        <div id="vikalp">
            <div class="options"><span>A:</span><button class="btn" id="first" onclick="check4(), ">Aurangzeb</button></div>
            <div class="options"><span>B:</span><button class="btn" id="second" onclick="check4()">Alauddin Khilji</button></div>
            <div class="options"><span>C:</span><button class="btn" id="third" onclick="check4(), score()">Chhatrapati Shivaji Maharaj</button></div>
            <div class="options"><span>D:</span><button class="btn" id="fourth" onclick="check4()">Babur</button></div>
        </div>`
    }, 1000);
}
function check2() {
    let main = document.getElementById('main');
    let wrong1 = document.getElementById('first');
    let wrong2 = document.getElementById('second');
    let wrong3 = document.getElementById('third');
    let right = document.getElementById('fourth');
    setTimeout(() => {
        wrong1.style.backgroundColor = 'red';
        right.style.backgroundColor = 'green';
        wrong2.style.backgroundColor = 'red';
        wrong3.style.backgroundColor = 'red';
    }, 50);
    setTimeout(() => {
        main.innerHTML = `<p id="question">Q: Amongst which of these particles nuclear force can be seen?</p>
        <div id="vikalp">
            <div class="options"><span>A:</span><button class="btn" id="first" onclick="check3(), score()">proton-proton</button></div>
            <div class="options"><span>B:</span><button class="btn" id="second" onclick="check3()">electron-electron</button></div>
            <div class="options"><span>C:</span><button class="btn" id="third" onclick="check3()">proton-electron</button></div>
            <div class="options"><span>D:</span><button class="btn" id="fourth" onclick="check3()">suon-suon</button></div>
        </div>`
    }, 1000);
}
function check1() {
    let main = document.getElementById('main');
    let wrong1 = document.getElementById('first');
    let right = document.getElementById('second');
    let wrong2 = document.getElementById('third');
    let wrong3 = document.getElementById('fourth');
    setTimeout(() => {
        wrong1.style.backgroundColor = 'red';
        right.style.backgroundColor = 'green';
        wrong2.style.backgroundColor = 'red';
        wrong3.style.backgroundColor = 'red';
    }, 50);
    setTimeout(() => {
        main.innerHTML = `<p id="question">Q: Imaginary number is denoted by:-</p>
        <div id="vikalp">
            <div class="options"><span>A:</span><button class="btn" id="first" onclick="check2()">x</button></div>
            <div class="options"><span>B:</span><button class="btn" id="second" onclick="check2()">a</button></div>
            <div class="options"><span>C:</span><button class="btn" id="third" onclick="check2()">n</button></div>
            <div class="options"><span>D:</span><button class="btn" id="fourth" onclick="check2(), score()">i</button></div>
        </div>`
    }, 1000);
}
function check() {
    let x = 0;
    let main = document.getElementById('main');
    let right = document.getElementById('first');
    let wrong1 = document.getElementById('second');
    let wrong2 = document.getElementById('third');
    let wrong3 = document.getElementById('fourth');
    setTimeout(() => {
        right.style.backgroundColor = 'green';
        wrong1.style.backgroundColor = 'red';
        wrong2.style.backgroundColor = 'red';
        wrong3.style.backgroundColor = 'red';
    }, 50);
    setTimeout(() => {
        main.innerHTML = `<p id="question">Q: Which country amongst these has the largest military?</p>
        <div id="vikalp">
            <div class="options"><span>A:</span><button class="btn" id="first" onclick="check1()">India</button></div>
            <div class="options"><span>B:</span><button class="btn" id="second" onclick="check1(), score()">China</button></div>
            <div class="options"><span>C:</span><button class="btn" id="third" onclick="check1()">Russia</button></div>
            <div class="options"><span>D:</span><button class="btn" id="fourth" onclick="check1()">USA</button></div>
        </div>`
    }, 1000);
}
function score() {
    function int_score() {
        x = x + 1;
        return x;
    }
    console.log(int_score());
}