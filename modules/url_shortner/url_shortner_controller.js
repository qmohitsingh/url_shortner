const validurl = require('valid-url');
const Urls     = require('./url_shortner');
const ShortId  = require('shortid');
const Usages   = require('./usage_statistics')

const getShortenedURL = (req, res) => {
    try {

        let params = req.params;

        //Analytical
        Usages.totalHits++;
        Usages.getShortenedURLHits++;

        if (!validurl.isWebUri(params.url)) {
            throw new Error("Invalid url")
        }


        if (!params.clientId)
            throw new Error("Invalid clientId")


         let short_url  = Urls.ClientIdMap[params.clientId] ? Urls.ClientIdMap[params.clientId] : newShortUrl(params.url, params.clientId);

        res.status(200).json({
            original_url: params.url,
            short_url   : short_url,
            status_code : 200
        });
    } catch(error) {
        Usages.totalInvalidHits++;
        res.status(200).json({
            message: error.toString(),
            status_code : 400
        });
    }
}

const getOriginalURL = (req, res) => {
    try {

        let params = req.params;

        //Analytical
        Usages.totalHits++;
        Usages.totalGetOriginalURLHits++;

        if (!Urls.shortUrlMap[params.url]) {
            throw new Error("Invalid url");
        }

        res.status(200).json({
            original_url: Urls.shortUrlMap[params.url],
            short_url   : params.url,
            status_code : 200
        });

    } catch(error) {
        Usages.totalInvalidHits++;
        res.status(200).json({
            message: error.toString(),
            status_code : 400
        });
    }
}

const getStatisticsUsage = (req, res) => {
    try {

        //Analytical
        Usages.totalHits++;
        Usages.getStatisticsUsageHits++;

        res.status(200).json({
            usages_statistics : Usages,
            status_code : 200
        });
    } catch (error) {
        Usages.totalInvalidHits++;
        res.status(200).json({
            message: error.toString(),
            status_code : 400
        });
    }
}


const newShortUrl = (longUrl, clientId) => {
    const urlCode = ShortId.generate();
    Urls.ClientIdMap[clientId] = Urls.baseUrl+urlCode;

    Urls.shortUrlMap[Urls.ClientIdMap[clientId]] = longUrl;

    return Urls.ClientIdMap[clientId]
}

module.exports = {
    getShortenedURL,
    getOriginalURL,
    getStatisticsUsage
}