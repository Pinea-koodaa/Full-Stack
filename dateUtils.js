function getCurrentDate() {
    const date = new Date();
    return date.toLocaleDateString();
}

function formatDate(date) {
    const formattedDate = new Date(date);
    return formattedDate.toISOString().split('T')[0];
}

module.exports = { getCurrentDate, formatDate };