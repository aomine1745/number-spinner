const numberUI = document.getElementById('number')

function nextNumber () {
	let number = Number(numberUI.innerHTML)
	if (number === 100) numberUI.innerHTML = 0
		else numberUI.innerHTML = number + 1
	}
function prevNumber () {
	let number = Number(numberUI.innerHTML)
	if (number === 0) numberUI.innerHTML = 100
		else numberUI.innerHTML = number - 1
	}