### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

	 JWT - JSON Web Token open standard that defines a compact and self-contained way for securely transmitting information between parties.

- What is the signature portion of the JWT?  What does it do?

	Portion of the signature is generated by combining the header, body, and a shared private key, using the HS256 hashing method sample.

		HMACSHA256(
 		 base64UrlEncode(header) + "." +
  	 	 base64UrlEncode(payload),
		 - your-256-bit-secret -
		 )

	The signature is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is

- If a JWT is intercepted, can the attacker see what's inside the payload?

	Yes, can use website like [https://www.jstoolset.com/jwt ](url)to decode the payload.

- How can you implement authentication with a JWT?  Describe how it works at a high level.

	To authenticate a user, a client application must send a JWT in the authorization header of the HTTP request to your backend. Then we use an authentication middleware to validate the token and protect our routes 

- Compare and contrast unit, integration and end-to-end tests.

	- Unit Test
	
		- Test Individual units or components of a software 
		- Is to validate that each unit of the software code performs as expected.

	- Integration
	
		- Process of testing the interface between two software units or modules.
		- It focuses on determining the correctness of the interface.
		- The purpose of integration testing is to expose faults in the interaction between integrated units

	- End-To-End (E2E)

		- Technique that tests the entire software product from beginning to end.
		- Ensures all integrated pieces work together as expected
		- Ensure the application flow behaves as expected

- What is a mock? What are some things you would mock?
	
	Mocking means creating a fake version of an external or internal service that can stand in for the real one, helping your tests run more quickly and more reliably. Sample

		random() => return a random number using Math.random()

		describe("#random", function() {
			-- Mock Math.random to return 0.5 that why can be tested 
 			Math.random = jest.fn(() => 0.5);

			test("Mocking Random", function() {
    		expect(random(6)).toEqual(3);
			expect(random(2)).toEqual(1);
  			});
		});
	

- What is continuous integration?

	Software development practice where developers regularly merge their code into a central repository, after which automated builds and tests are run. The key goals of continuous integration are to find and address bugs quicker, improve software quality, and reduce the time it takes to validate and release new software updates.

- What is an environment variable and what are they used for?

	Environment variables is that they give you the flexibility to set/store conditions/variable for how you want the application or software to behave.

- What is TDD? What are some benefits and drawbacks?

	TDD - Test-driven development style of programming in which three activities are tightly interwoven: coding, testing and design

	- Benefits
		
		- Significant reductions in defect rates, at the cost of a moderate increase in initial development effort
		- Reduction in effort in projects??? final phases
		- Improved design qualities in the code, and more generally a higher degree of ???internal??? or technical quality

	- Drawbacks
		
		- Writing too many tests at once
		- Partial adoption ??? only a few developers on the team use TDD
		- Poor maintenance of the test suite ??? most commonly leading to a test suite with a prohibitively long running time


- What is the value of using JSONSchema for validation?

	Lightweight data interchange format that generates clear, easy-to-understand documentation, making validation and testing simple and easier

- What are some ways to decide which code to test?

	- Test areas of the software with the biggest impact on the users
	- Test defects based on their severity
	- Test that verifies the desired functionality  

- What does `RETURNING` do in SQL? When would you use it?

	The `RETURNING` clause allows you to retrieve values of columns, that were modified by an insert, delete or update.?? I will use `RETURNING` every time that I need data back from my query that is not a `SELECT` statement.

- What are some differences between Web Sockets and HTTP?

	 Web Sockets
		
	- Bidirectional communication protocol that can send the data from the client to the server or from the server to the client.
	- Receive the data on a single communication channel.
	- Faster than HTTP Connection

	HTTP

	-  Unidirectional protocol that works on top of TCP protocol which is a connection-oriented transport layer protocol.
	- Create the connection by using HTTP request methods after getting the response HTTP connection get closed.
	- Simple RESTful application uses HTTP protocol which is stateless.


- Did you prefer using Flask over Express? Why or why not (there is no right
  
	I like software engineering??and all that comes with it, flask and express are tools that we need to learn to stay on top of our game. But I will stay with Express do that I like Javascript more than Python and with the current market javascript for a web developer is probably better than Python. So I chose to master javascript, node.js, etc..., but if I get a job in another language or tool that I don't??know I will master what the employer requires.??
