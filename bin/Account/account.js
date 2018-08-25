class Account{

    constructor(number, name){
        this.number = number;           // primary key number
        this.name = name;               // name
        this.current_grant = null;      // current grant info
        this.days = 0;                 // days of promotion accrued
    }

    grant(grant){
        if(this.current_grant === null){
            this.current_grant = grant;
            
            if(grant.duration !== null){
                try {
                    
                } catch (error) {
                    
                }
            }
        }

        // First, if current grant has a duration,
        // if incoming grant's start date is after the current grant's duration + start date,
        // Accept the next grant

        // Second, if current grant has no duration, and if the current grant is a revoke,
        // if incoming grant's grant name is the same as current grant's name,
        // then take the difference in dates and add it to the counter 

        // Third, if current grant is null, add the incoming grant
        // if there is a duration, add duration

        // Downsides: not retroactive
        // Potential solution: add a grant_history to "rebase" all previous grants, sorted by date 
    }

    _

}

module.exports = Account;

