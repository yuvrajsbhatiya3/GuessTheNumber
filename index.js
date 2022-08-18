let n=Math.floor(Math.random() * 100) + 1;
        let lives=6;
        let array=[];
        function game(){
            let num=document.querySelector('#number').value;
            if(lives>0){
                if(num==n){
                    document.querySelector('#result').innerHTML="🤩 Yippie You Win!!";
                }
                else if(n>num){
                    document.querySelector('#result').innerHTML="Entered Number is Smaller";

                }
                else if(n<num){
                    document.querySelector('#result').innerHTML="Entered Number is Greater";
                    

                }
                document.querySelector('#chance').innerHTML="No. Of Guesses Left: " + lives;
                lives --;
                array.push(num);
                document.querySelector('#previous').innerHTML="Guessed Numbers are: " +array ;

            }
            else{
                document.querySelector('#chance').innerHTML=" Chances left " + lives;
                document.querySelector('#result').innerHTML="😢 Sorry! You Lose";

            }
        }