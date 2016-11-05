// ==UserScript==
// @name         Livescore Highlighter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.livescore.com
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

 let findMyTeam = function() {
    'use strict';
     //works only for www.livescore.com
    
    
    $(document).ready(function(){
        
    //word for searching, probably team name
    let team1 = "FC";
    	 
    
    //search team name in all DOM elements
    let findingWord = $(`*:contains(${team1})`);
    
    //search team name only in divs with classes row-gray even and row-gray which are in div#content
    let mainContent = $(`div.row-gray even,div.row-gray:contains(${team1})`);
    
        
    //Make background yellow on main content - div#content
    mainContent.css('background', 'yellow');
    
  

    //Make finded team name underlined
    findingWord.css({
        'text-decoration' : 'underline',
    });
    
   
    $(`div.col-6.name:contains(${team1})`).css('background', 'yellow');
    
    $('div.content').prepend(mainContent);
   
    
    
    });
    
   
};


window.setInterval(function() {
                  findMyTeam();
                }, 30000); 


window.setInterval(function() {
                  window.location.reload();
                }, 120000); 


