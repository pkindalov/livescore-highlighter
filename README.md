# livescore-highlighter
Search and if find team highlight background with yellow and underline team name


<p>In pictures below the results which contains teams with FC in their names.</p>

<p><u><strong>Important.</strong> When refresh browser the site will return on it original states. For better effect you must use <em>Tampermonkey</em> extension for Chrome and load this function on it.</u></p>


<img src="images/screenshot1.png" alt="result picture one" />
<img src="images/screenshot2.png" alt="result picture one" />

<p>To use script <strong><em>first</em></strong> you must change searching team name or just enter some word in Livescore Highlighter.js The variable you must change is <strong><em>team1 = "your text here"</em></strong></p>

<p><strong><em>Secondly</em></strong> you must open livescore on tab in your browser. Then you must run console (f12 in Chrome) and then paste code from Livescore-Highlighter.js and wait 30 seconds to load. You can change load time from 30 seconds to what you want in this piece of code.
<code>
	window.setInterval(function() {
                  findMyTeam();
                }, 30000); 
</code>
</p>


<p><strong>How to put this code in Google Chrome ?</strong>
Firsty, you must install Chrome plugin called <strong><em>Tampermonkey</em></strong> If you have installed it properly then icon must appeart top right near to address bar. Show it in next screenshot.
<img src="images/Tampermonkey installed.png" alt="Picture show icon to now installed Tampermonkey top right to address bar" />
</p>

<p>Secondly... Now when you have installed Tampermonkey plugin to your Chrome browser, now must open Tampermonkey dashboard.<br />
<img src="images/Tampermonkey Dashboard.png" alt="Showing Tampermonkey`s dashboard" />
</p>

<p>
Next step is to click on a little green plus sign, left on installed userscripts tab.
<img src="images/AddNewScriptGreenPlusSign.png" alt="You must click on green plus icon on the left of userscripts tab." />
</p>

<p>
Now you must see this window...
<img src="images/UserscriptsDefaultEditor.png" alt="Picture is showing usercripts default editor" />
</p>

<p>
Next step is to copy/paste all code from Livescore Highlighter.js in this window like it is showing on the next screenshot.
<img src="images/All code is pasted.png" alt="Showing where to paste code from Livescore Highlighter.js" />
</p>

<p>
When you paste code and you are ready, next you must do is to click on save icon(second icon from left to right under the Editor tab). After this step on tab installed superscripts must appear the new sript like on screenshot below.
<img src="images/TheNewScriptShowing.png" alt="The new saved script now appear in installed userscripts tab" /> 
</p>

<p>
Now you can click on "OFF" button to turn on script like picture bellow.
<img src="images/TurnOnNewScript.png" alt="The new script is turned on" />
</p>

<p>
Now when load livescore.com on Chrome, after 30 seconds or eventually your number of seconds all teams who contain text on variable team1 will appear if are founded.
</p>

