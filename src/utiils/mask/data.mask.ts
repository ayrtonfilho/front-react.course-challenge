function capitalizeWords(text: string) {
	const smallWords = ['e', 'ou', 'mas', 'se', 'como', 'um', 'uma', 'de', 'da', 'do', 'dos', 'das', 'para', 'com', 'em', 'por', 'ao', 'na', 'no', 'nas', 'nos'];

	const words = text.split(' ');

	const capitalizedWords = words.map(word => {
		const lowerCaseWord = word.toLowerCase();
		if (smallWords.includes(lowerCaseWord)) {
			return lowerCaseWord;
		} else {
			return word.charAt(0).toUpperCase() + word.slice(1);
		}
	});

	return capitalizedWords.join(' ');
}

function capitalizeFirstLetter(text: string) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatCPFNumber(value: string) {
    const cleaned = ('' + value).replace(/\D/g, '');

    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})$/);
    if (match) {
        return (!match[2] ? match[1] : match[1] + '.' + match[2] + (!match[3] ? '' : '.' + match[3]) + (!match[4] ? '' : '-' + match[4]));
    }
}

function formattedTime(time: Date) {
	const options = {
		month: '2-digit' as const,
		day: '2-digit' as const,
		year: 'numeric' as const,
	};

	const formattedDate = new Intl.DateTimeFormat('pt-BR', options).format(time);
	const formattedHour = time.toLocaleTimeString('pt-BR', { hour12: false });

	return `${formattedDate} às ${formattedHour}`;
}

export {capitalizeWords, capitalizeFirstLetter, formatCPFNumber, formattedTime};
