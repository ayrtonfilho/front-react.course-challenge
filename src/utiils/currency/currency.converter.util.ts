export function brlToNumber(brlString: string): number {
    const cleanString = brlString.replace('R$ ', '').replace(',', '.');

    return parseFloat(cleanString);
}

export function numberToBrl(number: number): string {
    const brlString = `R$ ${number.toFixed(2)}`;

    return brlString;
}
