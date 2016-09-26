(function(){




  // Initialize Firebase
  	const config = {
    	apiKey: "AIzaSyCuWAvUnbjSAGD7XqansTe2tUoqPORncl0",
    	authDomain: "masp-9a79d.firebaseapp.com",
    	databaseURL: "https://masp-9a79d.firebaseio.com",
    	storageBucket: "masp-9a79d.appspot.com",
    	messagingSenderId: "686393566018"
  	};
  	firebase.initializeApp(config);

  	const txtEmail = document.getElementById('txtEmail');
  	const txtPassword = document.getElementById('txtPassword');
  	const btnLogIn = document.getElementById('btnLogIn');
  	const	btnSignUp = document.getElementById('btnSignUp');
  	const btnLogOut = document.getElementById('btnLogOut');

  	//add login event
  	btnLogIn.addEventListener('click', e => {

  	//get email and pass
  		const email = txtEmail.value;
  		const pass = txtPassword.value;
  		const auth = firebase.auth();

		const promise = auth.signInWithEmailAndPassword(email,pass);

		promise.catch(e => console.log(e.message));
	//auth.signIn(email,pass);
	
	//auth.createUserWithEmailAndPassword(email,pass);
	//auth.createUser(email,pass);

	//auth.onAuthStateChanged(firebaseUser => {});



  	});

  	//Add Sign up 
 	btnSignUp.addEventListener('click', e => {

  		const email = txtEmail.value;
  		const pass = txtPassword.value;
  		const auth = firebase.auth();
		const promise = auth.createUserWithEmailAndPassword(email,pass);

		promise
			.catch(e => console.log(e.message));
		//auth.signIn(email,pass);

  	});

 	btnLogOut.addEventListener('click', e => {
 		firebase.auth().signOut();

 	});


	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
			console.log(firebaseUser);
			btnLogOut.classList.remove('hide');
		}
		else{
			console.log('not logged in');
			btnLogOut.classList.add('hide');
		}
	});






}());







