function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VemYmEbSV/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Posso ouvir - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Precisão - ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img1 = document.getElementById('Animal1');
        img2 = document.getElementById('Animal2');
        img3 = document.getElementById('Animal3');
        img4 = document.getElementById('Animal4');
        img5 = document.getElementById('Animal5');

        if (results[0].label == "Barulho de Baleia") {
            img1.src = 'baleia.gif';
            img2.src = 'gaivota.png';
            img3.src = 'rato.png';
            img4.src = 'sapo.png';
            img5.src = 'aliens-01.png';
        } else if (results[0].label == "Gaivota") {
            img1.src = 'baleia.png';
            img2.src = 'gaivota.gif';
            img3.src = 'rato.png';
            img4.src = 'sapo.png';
            img5.src = 'aliens-01.png';
        } else if (results[0].label == "Barulho de rato") {
            img1.src = 'baleia.png';
            img2.src = 'gaivota.png';
            img3.src = 'rato.gif';
            img4.src = 'sapo.png';
            img5.src = 'aliens-01.png';
        } else if (results[0].label == "sapo") {
            img1.src = 'baleia.png';
            img2.src = 'gaivota.png';
            img3.src = 'rato.png';
            img4.src = 'sapo.gif';
            img5.src = 'aliens-01.png';
        }else {
            img1.src = 'baleia.png';
            img2.src = 'gaivota.png';
            img3.src = 'rato.png';
            img4.src = 'sapo.png';
            img5.src = 'aliens-01.gif';
        }
    }
}