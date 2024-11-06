 
  
  
  let score=JSON.parse(localStorage.getItem('score')) || {
    
    win:0,
    lose:0,
    tie:0
  };
      scoreubdate();

       function gameresult(pickermove){
         const color=document.querySelector('.body');
            let commove=computermoves();
            let result=' ';
            if(pickermove==='rock'){

                if(commove==='paper'){
                    result='You win';
                }
                else if(commove==='scissors'){
                    result='You lose';
                }
                else if(commove==='rock'){
                    result='game Tie';
                }
                color.classList.add('color1');
                color.classList.remove('color2');
                color.classList.remove('color3');
                
            }
            if(pickermove==='paper'){

                if(commove==='paper'){
                    result='game Tie';
                }
                else if(commove==='scissors'){
                    result='You lose';
                }
                else if(commove==='rock'){
                    result='You win';
                }
                color.classList.add('color2');
                color.classList.remove('color1');
                color.classList.remove('color3');
                

            }if(pickermove==='scissors'){

                if(commove==='paper'){
                    result='You win';
                }
                else if(commove==='scissors'){
                    result='game Tie';
                }
                else if(commove==='rock'){
                    result='You lose';
                }
                color.classList.add('color3');
                color.classList.remove('color1');
                color.classList.remove('color2');
               
            }

            if(result==='You win'){
                score.win +=1 ;

            }
            else if(result==='You lose'){
                score.lose +=1;
            }
            else if(result==='game Tie'){
                score.tie+=1;
            }

            localStorage.setItem('score', JSON.stringify(score));
            
          document.querySelector('.js-result').innerHTML= result;
         document.querySelector('.js-move').innerHTML= ` YOU  
      <img src="images/${pickermove}-emoji.png" class="image">
      <img src="images/${computermove}-emoji.png" class="image"> COMPUTER`;
            scoreubdate();  
   }
   function scoreubdate(){
    document.querySelector('.js-score')
    .innerHTML= `win :${score.win}, lose :${score.lose},
     Tie :${score.tie}`;
   }
  
let computermove='';
function computermoves(){
        const random= Math.random();
       if(random >=0 && random <=1/3) {
           computermove='rock';
         }
        else if(random >1/3 && random <2/3){
            computermove='paper';
        } 
        else if(random >= 2/3 && random <=1){
            computermove='scissors';
        } 
       return computermove; 
}

