export const priceFormat = (data) => {
    const price = Number.prototype.toFixed.call(parseFloat(data) || 0);
    return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
}

const ONE_STAR_PERCENT = 20;

export const getRatingPercentage = (rating) => `${Math.round(rating) * ONE_STAR_PERCENT}%`;

export const getDateDiff = (date) => {
    const now = Date.now();
    const diff = (now - Date.parse(date));
    if (diff < 86400000) {
        return `${diff/1000} минут назад`;
    } else {
        return date
    }
}
