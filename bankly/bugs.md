### Error 1:
	
#### GET/:username Route

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
	
#### PATCH/:username

Only the user themselves or any admin user can use this.

- Bug: requireAdmin middleware  was protecting the route this is unneeded inside the route there is a validation to ensure that the user is admin or is the owner user. 

	  router.patch('/:username', authUser, requireLogin, requireAdmin, async function(){}

- Solution: Remove requireAdmin

	  router.patch('/:username', authUser, requireLogin, async function(){}
	 
	- Inside route validation

          if (!req.curr_admin && req.curr_username !== req.params.username) {
    	       throw new ExpressError('Only  that user or admin can edit a user.', 401);
   		  }

### Error 3: 

#### PATCH/:username

It should accept: {first_name, last_name, phone, email}

- Bug: No validation was accepting anything that the user send 

- Solution: Validation added using jsonschema, userUpdate.json created, userUpdateSchema use userUpdate.json for validation


	  const validator = jsonschema.validate(req.body, userUpdateSchema);
      if (!validator.valid) {
        const errs = validator.errors.map((e) => e.stack);
        throw new BadRequestError(errs);
      }

### Error 4: 

#### PATCH/:username

- Bug: The update is returning the password and if the user is admin I think that is not needed.

- Solution: Delete those fields from the user

      let user = await User.update(req.params.username, fields);
      delete user.password;
      delete user.admin;
	

### Error 5: 

#### auth POST/:login

- Bug: At the moment of authenticating the user, await was missing so was returning a promise

	  let user = User.authenticate(username, password);

- Solution: add await

	  let user = await User.authenticate(username, password);




