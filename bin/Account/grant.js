class Offer{

    constructor(grant_name, start_date, duration, grant_or_revoke) {
        this.grant_name = grant_name;
        this.start_date = start_date;
        this.duration = duration ? duration : null;
        this.grant_or_revoke = grant_or_revoke ? true : false; // true to grant, false to revoke
        
    }
}

module.exports = Offer;