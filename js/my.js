function deleteTilite (title) {
    title.remove()
}
function changeColorOfSomeTitle (title) {
    title.className = 'redTitle'
}

function myNormalFunc (text) {
    const titles = document.querySelectorAll('h1');
    const header = document.querySelector('header');

    const button = document.createElement('button');
    header.appendChild(button);
    button.innerHTML = ' delete the second element and edit the first ';

    button.addEventListener('click', () => {
        const firstTitle = titles[0];
        const secondTitle = titles[1];
        const lastTitle = titles[titles.length - 1];

       changeColorOfSomeTitle(firstTitle);
       deleteTilite(secondTitle);
    })
}   


myNormalFunc()

var i = 2;

function changeTitleStyle (scndSctnTitle) {
    scndSctnTitle.classList.toggle("titleCian"); 
}

function myYobaFunc (txt) {
    const yobaTitles = document.querySelectorAll('.yobahomework__title');

    const scndSctn = document.querySelector('.yobahomework');

    const scndBtn = document.createElement('button');
    scndSctn.appendChild(scndBtn);
    scndBtn.innerHTML = ' change last element style and add text ';

    //
    

    scndBtn.addEventListener('click', () => {
        
        

            
            
        if ( i % 2 == 0 ){    
            const scndSctnTxt = document.createElement('div');
            scndSctnTxt.id = "secondaryText";
            scndSctn.append(scndSctnTxt);
            scndSctnTxt.innerHTML = '<div style="background:orange" ><h2>Lorem Ipsum</h2> мазафакабичезз вот это я программист  <p>lorem*69</p></div> ';
            
        }
        else {
            secondaryText.remove()
            
        }
        i += 1;
        console.log(i)
    
        
        const lastOfTitle = yobaTitles[3];
        changeTitleStyle(lastOfTitle);
        
    })
}

myYobaFunc()

