function virus() 
{
	const newWin = window.open("", "", "height=800,width=800");
	const forkScript = win.document.createElement("script"); 
	script.innerHTML = forkScript + "\n" + "forkScript();"; 
	newWin.document.head.appendChild(script); 
	setTimeout(function() {fork()}, 100) 
} 
virus();