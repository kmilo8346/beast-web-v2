export const toCurrency = (value: number): string => {
    if (!value) {
      return '';
    }
    const formatted = value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
    return `$${formatted.substring(0, formatted.length - 3)}`;
}