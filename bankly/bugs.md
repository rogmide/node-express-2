### Error 1:
	
 GET/:username Route

 If user cannot be found, return a 404 err
	
- Bug: Was returning an empty object  on the User.get(username) method

	  if (!user) {
		new ExpressError('No such user', 404);
      }
- Solution: return added to stop the code and return the error

	  if (!user) {
		return new ExpressError('No such user', 404);
      }
	
### Error 2:
	
PATCH/:username

Only the user themselves or any admin user can use this.

- Bug: was protecting the route with requireAdmin middleware this is unneeded inside the route there is a validation to ensure that the user is admin or is the owner user. And will stop any future request to this route if you have no Admin Access.


	  router.patch('/:username', authUser, requireLogin, requireAdmin, async function(){}

- Solution: Remove requireAdmin

	  router.patch('/:username', authUser, requireLogin, async function(){}
	 
	- Inside route validation

          if (!req.curr_admin && req.curr_username !== 			  req.params.username) {
    	       throw new ExpressError('Only  that user or admin can edit a user.', 401);
   		  }

