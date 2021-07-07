export const priceFormat = (data) => {
    const price = Number.prototype.toFixed.call(parseFloat(data) || 0);
    return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
}

const ONE_STAR_PERCENT = 20;

const MS_IN_MIN = 60000;

export const getRatingPercentage = (rating) => `${Math.round(rating) * ONE_STAR_PERCENT}%`;

export const getDateDiff = (date) => {
    const now = new Date();
    const reviewDate = new Date(date);
    const diff = (now - new Date(date));
    if (diff < 3600000) {
        return `${Math.floor(diff/MS_IN_MIN)} минут назад`;
    } else {
        return `${reviewDate.getDate()}.${reviewDate.getMonth()+1}.${reviewDate.getFullYear()}`
    }
}
