const UsageStatistics = function () {
    this.totalHits   = 0;
    this.getShortenedURLHits = 0;
    this.totalGetOriginalURLHits = 0;
    this.getStatisticsUsageHits = 0;
    this.totalInvalidHits       = 0;
}


module.exports = new UsageStatistics();