### BUG 1:
	
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
	
### BUG 2:
	
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

### BUG 3: 

#### PATCH/:username

It should accept: {first_name, last_name, phone, email}

- Bug: No validation was accepting anything that the user send 

- Solution: Validation added using jsonschema, userUpdate.json created, userUpdateSchema use userUpdate.json for validation. If more property are send rise a error 


	  const validator = jsonschema.validate(fields, userUpdateSchema);
      if (!validator.valid) {
        const errs = validator.errors.map((e) => e.stack);
        throw new BadRequestError(errs);
      }
	

### BUG 4: 

#### auth POST/:login

- Bug: At the moment of authenticating the user, await was missing so was returning a promise

	  let user = User.authenticate(username, password);

- Solution: adding await

	  let user = await User.authenticate(username, password);

### BUG 5:

#### DELETE/:username

- Bug: Calling router.delete always return { message: "deleted" }, including the case that the user is not found and should return 404 

      User.delete(req.params.username);

- Solution adding await

	  await User.delete(req.params.username);

### BUG 6:

#### auth.js middleware authUser function

- Bug: The authUser function was decoding the token, this is bad because not take into consideration our secret key for proper validation  

	  let payload = jwt.decode(token);

- Solution correct validation added

	  let payload = jwt.verify(token, SECRET_KEY);


 




