//Parsování data
const parseDate = (date) => {
    return {
        day: Number(date.slice(0,2)),
        month: Number(date.slice(3,5)),
        year: Number(date.slice(6,9)),
    }
 }

 //Formátování data

const formatDate = (datum) => {
    let den = String (datum.day)
    let mesic = String (datum.month)
    let rok = String (datum.year)

    return den.padStart(2, 0) + '.' + mesic.padStart(2, 0) + '.' + rok
}

let zadaneDatum = { day: 5, month: 3, year: 2015 }

console.log(formatDate(zadaneDatum))

//Python zaokrouhlování
const round = (cislo) => {
    let celeCislo = Math.trunc(cislo)
    let desetinky = cislo - celeCislo
    if (Math.abs(desetinky) < 0.5) {
		if (celeCislo % 2 === 0) {
			return celeCislo
		} else {
			return celeCislo + 2 * desetinky
		}
	}
	return Math.round(cislo)
}
