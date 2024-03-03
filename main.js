const data = [
    {
        'question': "Capital of India",
        'a1': 'Mumbai',
        'true': 'Delhi',
        'a3': 'Chandigarh',
        'a4': 'Hyderabad'
    },
    {
        'question': "4 power 5",
        'a1': '240',
        'true': '1024',
        'a3': '32434',
        'a4': '224244'
    },
    {
        'question': "City of Love",
        'a1': 'Amritsar',
        'true': 'Dehradun',
        'a3': 'Nainital',
        'a4': 'Gurgaon'
    }
]


var n = Math.floor(Math.random()*data.length);
const list = data[n];

const qsn = document.getElementById("qsn");
qsn.innerText = list.question;

const ar = document.getElementsByClassName("ans"); 

switch(n){
    case 0:
            ar[0].nextElementSibling.innerHTML = list.true;
            ar[1].nextElementSibling.innerHTML = list.a1;
            ar[2].nextElementSibling.innerHTML = list.a3;
            ar[3].nextElementSibling.innerHTML = list.a4;
            break;
    case 1:
            ar[0].nextElementSibling.innerHTML = list.a1;
            ar[1].nextElementSibling.innerHTML = list.true;
            ar[2].nextElementSibling.innerHTML = list.a3;
            ar[3].nextElementSibling.innerHTML = list.a4;
        break;

    case 2:
            ar[0].nextElementSibling.innerHTML = list.a1;
            ar[1].nextElementSibling.innerHTML = list.a3;
            ar[2].nextElementSibling.innerHTML = list.true;
            ar[3].nextElementSibling.innerHTML = list.a4;
            break;

    case 3:
        
            ar[0].nextElementSibling.innerHTML = list.a1;
            ar[1].nextElementSibling.innerHTML = list.a4;
            ar[2].nextElementSibling.innerHTML = list.a3;
            ar[3].nextElementSibling.innerHTML = list.true;
    break; 

}

function clicked(i){
    if(ar[i].nextElementSibling.innerHTML==list.true){

    document.getElementsByClassName("damn")[i].classList.add("right");

    } else {
        document.getElementsByClassName("damn")[i].classList.add("wrong");
    }
}




