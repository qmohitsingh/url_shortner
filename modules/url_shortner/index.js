const urlController = require('./url_shortner_controller')

module.exports = {
    getShortenedURL    : urlController.getShortenedURL,
    getOriginalURL     : urlController.getOriginalURL,
    getStatisticsUsage : urlController.getStatisticsUsage
}