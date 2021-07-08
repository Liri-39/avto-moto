const ONE_STAR_PERCENT = 20;
const MS_IN_MIN = 60000;

export const priceFormat = (data) => {
    const price = Number.prototype.toFixed.call(parseFloat(data) || 0);
    return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
}

export const getRatingPercentage = (rating) => `${Math.round(rating) * ONE_STAR_PERCENT}%`;

export const getDateDiff = (date) => {
    const now = new Date();
    const reviewDate = new Date(date);
    const diff = Math.floor((now - new Date(date))/MS_IN_MIN);
    return (diff < 60) ?
         `${diff} минут назад`:
         `${reviewDate.getDate()}.${reviewDate.getMonth()+1}.${reviewDate.getFullYear()}`
}

export const getRandomInteger = (a = 2, b = 100) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));

    return Math.floor(lower + Math.random() * (upper - lower + 1));
};
