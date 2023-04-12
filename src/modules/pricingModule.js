function Pricing(numGallons, state, history) {
    var gallons = parseInt(numGallons)
    var locationFactor
    var rateHistoryFactor
    var galReqFactor
    var companyProfitFactor = .1 
    var margin   
    var ppGal

    if (state === "TX") {
        locationFactor = .02
    } else {
        locationFactor = .04
    }

    if (history > 0) {
        rateHistoryFactor = .01
    } else {
        rateHistoryFactor = 0
    }

    if (gallons > 1000) {
        galReqFactor = .02
    } else {
        galReqFactor = .03
    }

    margin = (locationFactor - rateHistoryFactor + galReqFactor + companyProfitFactor) * 1.50
    ppGal = margin + 1.50
    
    var total = gallons * ppGal
    var roundedTotal = total.toFixed(2)

    return {
        ppGal: ppGal,
        roundedTotal: roundedTotal
        }
    
}

module.exports = Pricing;