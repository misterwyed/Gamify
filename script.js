let player_select=-1;
const option=["Stone","Paper","Scissor"]
const game=document.getElementById("Game");
const res_div=document.getElementById("result");
const player=document.getElementById("Player");
const bot=document.getElementById("Computer");
const res=document.getElementById("res");
const res_img=document.getElementById("res-img");
const player_score=document.getElementById("player-score");
const computer_score=document.getElementById("computer-score");

let p_score=0;
let c_score=0;


function res_img_setting(){
    res_img.style.width="200px";
    res_img.style.height="230px";
    res_img.style.border="2px solid black";
    res_img.style.borderRadius="20%";
}


function game_started(){
    let bot_selected=Math.floor(Math.random()*3)
    console.log("Bot opted for:"+bot_selected+"\n"+"Player selected:" +player_select);
    res_div.style.borderTop="4px solid grey";
    res_div.style.borderLeft="4px solid grey";
    res_div.style.borderBottom="4px solid black";
    res_div.style.borderRight="4px solid black";
    res_div.style.borderRadius="6px";
    res_div.style.height="20%";
    res_div.style.width="50%";
    res_div.style.padding="4px";
    res_div.style.backgroundColor="#FFC300";
    game.innerText="The Game has been started!!!!!";
    player.innerText="The player has selected:  "+ option[player_select];
    const myTimeout = setTimeout(()=>{
    bot.innerText="The Computer has selected: "+ option[bot_selected];
    if(player_select===1 && bot_selected===0){
        res.innerText="Player Won!!!";
        res_img.src="paper_wins.jpg";
        res_img_setting();
        p_score+=1;
        player_score.innerText="Player Score: "+ p_score;
    }
    else if(player_select===0 && bot_selected===1){
        res.innerText="Computer Won!!!";
        res_img.src="paper_wins.jpg";
        res_img_setting();
        c_score+=1;
        computer_score.innerText="Computer Score: "+ c_score;
    }
    else if(player_select===1 && bot_selected===2){
        res.innerText="Computer Won!!!";
        res_img.src="scissor_wins.jpg";
        res_img_setting();
        c_score+=1;
        computer_score.innerText="Computer Score: "+ c_score;
    }
    else if(player_select===2 && bot_selected===1){
        res.innerText="Player Won!!!";
        res_img.src="scissor_wins.jpg";
        res_img_setting();
        p_score+=1;
        player_score.innerText="Player Score: "+ p_score;
    }
    else if(player_select===2 && bot_selected===0){
        res.innerText="Computer Won!!!";
        res_img.src="stone_wins.png";
        res_img_setting();
        c_score+=1;
        computer_score.innerText="Computer Score: "+ c_score;
    }
    else if(player_select===0 && bot_selected===2){
        res.innerText="Player Won!!!";
        res_img.src="stone_wins.png";
        res_img_setting();
        p_score+=1;
        player_score.innerText="Player Score: "+ p_score;
    }
    else{
        res.innerText="It's a Draw!!!";
        res_img.src="Tie.jpg";
        res_img_setting();
    }
    },1000);
    

}

function  selected_stone(){
    player_select=0;
    bot.innerText=""
    res.innerText=""
    res_img.src=""
    res_img.style.border="none"
    res_img.style.height="0"
    res_img.style.width="0"
    game_started();
}

function  selected_paper(){
    player_select=1;
    bot.innerText=""
    res.innerText=""
    res_img.src=""
    res_img.style.border="none"
    res_img.style.height="0"
    res_img.style.width="0"
    game_started();
}

function  selected_scissor(){
    player_select=2;
    bot.innerText=""
    res.innerText=""
    res_img.src=""
    res_img.style.border="none"
    res_img.style.height="0"
    res_img.style.width="0"
    game_started();
}