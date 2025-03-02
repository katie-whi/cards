var num =['green.png','orange.png','light_blue.png','brown.png',
    'mint.png','yellow.png','pink.png','purple.png',
    'blue.png','green.png','orange.png','light_blue.png','brown.png',
    'mint.png','yellow.png','pink.png','purple.png',
    'blue.png',];
    
    var two_cards=[];
    var cards_id =[];    
    var checked =[];
    
    var i=0;
        
    var cont;
     
    var div_container =[];
    var new_cards=[];
    
    var countPair = 0;
    var countClicks=0;
           
    for (let j = 0; j < 19; j++) { 
        var  div_card = num[Math.floor(Math.random()*num.length)];
        num.splice(num.indexOf(div_card),1);
        new_cards.push(div_card);
    }
    
    function clickMe(n,m,p) { 
        var newcard=document.querySelector(n)
        newcard.src=new_cards[m];
    
        two_cards.push(new_cards[m]);
        cards_id.push(n);
        div_container.push(p);
    
        document.getElementById(p).style.pointerEvents = "none";
        cheking();
        countClicks++;
        upCount();
    }
        
    function upCount() { 
        document.getElementById("flipped").innerHTML=countClicks;
    }
    
    function cheking(){
    
        if(two_cards.length==2){
    
        compere();
    }}
    
    function compere(){
        if(two_cards[0]!==two_cards[1]){
        setTimeout(function different (){
    
            var newcard=document.querySelector(cards_id[0]);
            newcard.src='card.png';
            var newcard=document.querySelector(cards_id[1]);
            newcard.src='card.png';
            checked.push(two_cards[0],two_cards[1]);
            two_cards.splice(0,2);
            cards_id.splice(0,2);
    
            var g =div_container[0];
            var h = div_container[1];
    
    
            document.getElementById(g).style.pointerEvents = "auto";
            document.getElementById(h).style.pointerEvents = "auto";
            div_container.splice(0,2);
    
    }, 500);
    
    
         }else{
    
            countPair++;
            
            function countPairs() { 
            document.getElementById("pairs").innerHTML=countPair;
            arrayUnique()               
    }
            countPairs();
            two_cards.splice(0,2);
            cards_id.splice(0,2);
            div_container.splice(0,2);
    
            function finish(){
    
                if (countPair==9){
                    stop();
                    document.getElementById("f_flipped").innerHTML=countClicks+1;
                    document.getElementById("f_pairs").innerHTML=countPair;
                    document.getElementById("f_first_try").innerHTML=i;
                    document.getElementById("finish_page").style.display = "block";
    }}
    
    finish();
    
    }
    }
    
        function arrayUnique() {
    
            var unique=checked.includes(two_cards[0]);
    
                if (unique==false) {
                    i++
                    document.getElementById("first_try").innerHTML=i;
       }
    }
    
    
    
      function hideAside(){
    
        if (document.getElementById("count").style.display !== "block"){
            document.getElementById("count").style.display = "block";
            document.getElementById("scroll").style.backgroundImage ="url(arrow_up.png)";
        
          } else {
              
            document.getElementById("count").style.display = "none";
            document.getElementById("scroll").style.backgroundImage = "url(arrow.png)";
            
        }
    }
           
    var timer = 0;
    var timerInterval;
    
    
    function start() {
        stop();
        timerInterval = setInterval(function() {
        timer += 1/60;
        msVal = Math.floor((timer - Math.floor(timer))*100);
        secondVal = Math.floor(timer) - Math.floor(timer/60) * 60;
        minuteVal = Math.floor(timer/60);
        var ms ;
        var ms = msVal < 10 ? "0" + msVal.toString() : msVal;
        document.getElementById('ms').innerHTML  = ms;
        var second;
        var second =secondVal < 10 ? "0" + secondVal.toString() : secondVal;
        document.getElementById('second').innerHTML = second;
        var minute;
        var minute= minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
        document.getElementById('minute').innerHTML = minute;
      
        document.getElementById("f_ms").innerHTML=ms;
        document.getElementById("f_second").innerHTML=second;
        document.getElementById("f_minute").innerHTML=minute;
      }, 1000/60);
      
      
    }
    
    function stop() {
    
      clearInterval(timerInterval);
      
    }
    
    function hiddenStart () {
    
        document.getElementById("start_page").style.display = "none";
        
        start();
    
    }
    