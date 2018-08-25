Describe your submission here.

The idea is to come up with a class of Accounts, and Account.grant(Grant) and evaluate that in a way that is easy to read and maintain

Example:

Account.grant(Partner A, date 1, duration, offer)
       .grant(Partner A, date 2, null, revoke)
       .grant(Partner B, date 3, duration, offer)
       .grant(Partner B, date 4, duration, offer)

~~or maybe I should go with .revoke(args) instead~~

and in the end, when Account is inspected, the value of days offer is already calculated because calculation occurs on invocation of .grant()

if .grant(revoke) is not called for a particular partner , calculation of days granted will fail
