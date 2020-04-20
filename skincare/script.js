
		var inputName = document.getElementById('name');
		
		var name;
		var skintype;
		var skin;
		var hydra;
		var sleep;
		var stress;
		
//		function user(name, skintype, hydra, sleep, stress){
//			this.name = name;
//			this.skintype = skintype;
//			this.hydra = hydra;
//			this.sleep = sleep;
//			this.stress = stress;
//		}
		
		
		
		var sendpressed = document.querySelector('.send');
		var answers = document.querySelectorAll('button');
		var send = document.createElement('button');
		send.textContent = 'Finished';
		send.setAttribute('class', 'send');
		
		
		
//button color change
		
function clearselection(selection){
		
		var buttons = document.querySelectorAll(selection);
		for(var i=0; i < buttons.length; i++){
			buttons[i].style.backgroundColor = '#CFE3FA';
		}
	}
		
		
		function addEvent(){
			for(var i=0; i < answers.length; i++){
				answers[i].onclick = function(){
					console.log(skintype);
					if(this.getAttribute('class') == 'skin'){
				clearselection('.skin');
				skin = this.getAttribute('id');
				skintype = this.getAttribute('id') + '.png';
				this.style.backgroundColor = 'peachpuff';
			} else if (this.getAttribute('class') == 'water'){
				clearselection('.water');
				hydra = this.getAttribute('id') + '.png';
				this.style.backgroundColor = 'peachpuff';
			} else if (this.getAttribute('class') == 'sleep'){
				clearselection('.sleep');
				sleep = this.getAttribute('id') + '.png';
				this.style.backgroundColor = 'peachpuff';
			} else if (this.getAttribute('class') == 'stress'){
				clearselection('.stress');
				stress = this.getAttribute('id') + '.png';
				this.style.backgroundColor = 'peachpuff';
			} 
				}
			}
		}
		
		addEvent();
		
		
		
		
		//record answers
		
		var reliability;
		var overall;
		
		function recordAnswer(){
			console.log('called');
			var selectanswer1 = document.querySelectorAll('.answers1');
			console.log(selectanswer1.length);
			for(var i=0; i < selectanswer1.length; i++){
				selectanswer1[i].onclick = function(){
				clearselection('.answers1');
				reliability = this.getAttribute('id');
				this.style.backgroundColor = 'peachpuff';
				}
				
			}
			
			var selectanswer2 = document.querySelectorAll('.answers2');
			console.log(selectanswer2.length);
			for(var i=0; i < selectanswer2.length; i++){
				selectanswer2[i].onclick = function(){
				clearselection('.answers2');
				overall = this.getAttribute('id');
				this.style.backgroundColor = 'peachpuff';
				}
			}
			
		}
		
		
		sendpressed.onclick = function(){
			
			name = inputName.value;
//			var newuser = new user(name, skintype, hydra, sleep, stress);
			
			var intro = document.createElement('p');
			var skintypetitle = document.createElement('p');
			var skintyperesult = document.createElement('img');
			var habit = document.createElement('p');
			var habitHydration = document.createElement('img');
			var habitSleep = document.createElement('img');
			var habitStress = document.createElement('img');
			
			
			
			var routine = document.createElement('p');
			
			var section1 = document.createElement('section');
			var section2 = document.createElement('section');
			var section3 = document.createElement('section');
			
			var clean1 = document.createElement('img');
			var clean2 = document.createElement('img');
			var clean3 = document.createElement('img');
			var sun1 = document.createElement('img');
			var sun2 = document.createElement('img');
			var sun3 = document.createElement('img');
			var hydrate1 = document.createElement('img');
			var hydrate2 = document.createElement('img');
			var hydrate3 = document.createElement('img');
			
			var opt1 = document.createElement('h3');
			var opt2 = document.createElement('h3');
			var opt3 = document.createElement('h3');
			
			var selections = document.createElement('section');
			
			
			var div = document.createElement('h1');
			var questions = document.createElement('h1');
			
			var question1 = document.createElement('h1');
			var div1 = document.createElement('div');
			var option1_1 = document.createElement('button');
			var option1_2 = document.createElement('button');
			var option1_3 = document.createElement('button');
			
			var question2 = document.createElement('h1');
			var div2 = document.createElement('div');
			var option2_1 = document.createElement('button');
			var option2_2 = document.createElement('button');
			var option2_3 = document.createElement('button');
			
//			if(skintype == 'oil'){
//				skintyperesult.setAttribute('src', 'oilyskin.png');
//			} else if (skintype == 'normal'){
//				skintyperesult.setAttribute('src', 'oilyskin.png');
//			} else if (skintype == 'dry'){
//				skintyperesult.setAttribute('src', 'oilyskin.png');
//			} (skintype == 'sensitive'){
//				skintyperesult.setAttribute('src', 'oilyskin.png');
//			}
//			
//			if(hydra == '200ml'){
//				
//			}
			
			console.log(name);
			console.log(skintype);
			
			intro.textContent = 'Hi, ' + name + '!';
			skintypetitle.textContent = 'Your skintype:';
			skintyperesult.setAttribute('src', skintype);
			skintyperesult.setAttribute('class', 'skintype');
			
			
			
			habit.textContent = 'Besides your natural skin type, your skin problems may develop because of your…';
			habitHydration.setAttribute('src', hydra);
			habitSleep.setAttribute('src', sleep);
			habitStress.setAttribute('src', stress);
			habitHydration.setAttribute('class', 'habithydration');
			habitSleep.setAttribute('class', 'habit');
			habitStress.setAttribute('class', 'habit');
			
			routine.textContent = 'Recommended routine:';
			
			section1.setAttribute('class', 'routine');
			section2.setAttribute('class', 'routine');
			section3.setAttribute('class', 'routine');
			
			clean1.setAttribute('src', 'pic/' + skin + 'cleans.png');
			clean1.setAttribute('class', 'products');
			clean2.setAttribute('src', 'pic/' + skin + 'cleanm.png');
			clean2.setAttribute('class', 'products');
			clean3.setAttribute('src', 'pic/' + skin + 'cleanl.png');
			clean3.setAttribute('class', 'products');
			sun1.setAttribute('src', 'pic/' + skin + 'suns.png');
			sun1.setAttribute('class', 'products');
			sun2.setAttribute('src', 'pic/' + skin + 'sunm.png');
			sun2.setAttribute('class', 'products');
			sun3.setAttribute('src', 'pic/' + skin + 'sunl.png');
			sun3.setAttribute('class', 'products');
			hydrate1.setAttribute('src', 'pic/' + skin + 'hydrates.png');
			hydrate1.setAttribute('class', 'products');
			hydrate2.setAttribute('src', 'pic/' + skin + 'hydratem.png');
			hydrate2.setAttribute('class', 'products');
			hydrate3.setAttribute('src', 'pic/' + skin + 'hydratel.png');
			hydrate3.setAttribute('class', 'products');
			
			
			opt1.textContent = 'Option 1';
			opt2.textContent = 'Option 2';
			opt3.textContent = 'Option 3';
			
			selections.setAttribute('id', 'selections');
			
			div.textContent = '_';
			questions.textContent = 'Please answer these questions based on the information provided in your results:';
			
			question1.textContent = 'Which set of product information do you consider the most reliable?';
			option1_1.textContent = 'Option1';
			option1_2.textContent = 'Option2';
			option1_3.textContent = 'Option3';
			option1_1.setAttribute('class', 'answers1');
			option1_1.setAttribute('id', 'Option1');
			option1_2.setAttribute('class', 'answers1');
			option1_2.setAttribute('id', 'Option2');
			option1_3.setAttribute('class', 'answers1');
			option1_3.setAttribute('id', 'Option3');
			
			
			
			question2.textContent = 'Which set of product information helps you the most in deciding what to purchase and how to build skincare routine?';
			option2_1.textContent = 'Option1';
			option2_2.textContent = 'Option2';
			option2_3.textContent = 'Option3';
			option2_1.setAttribute('class', 'answers2');
			option2_1.setAttribute('id', 'Option1');
			option2_2.setAttribute('class', 'answers2');
			option2_2.setAttribute('id', 'Option2');
			option2_3.setAttribute('class', 'answers2');
			option2_3.setAttribute('id', 'Option3');
			
			
			document.body.appendChild(intro);
			document.body.appendChild(skintypetitle);
			document.body.appendChild(skintyperesult);
			
			if(hydra == '200ml.png' || sleep == 'sleepless.png' || stress == 'yes.png'){
				
			document.body.appendChild(habit);
			document.body.appendChild(habitHydration);
			document.body.appendChild(habitSleep);
			document.body.appendChild(habitStress);
				
			}
			
			
			
			
			document.body.appendChild(routine);
			
			
			section1.appendChild(opt1);
			section1.appendChild(clean1);
			section1.appendChild(sun1);
			section1.appendChild(hydrate1);
			section2.appendChild(opt2);
			section2.appendChild(clean2);
			section2.appendChild(sun2);
			section2.appendChild(hydrate2);
			section3.appendChild(opt3);
			section3.appendChild(clean3);
			section3.appendChild(sun3);
			section3.appendChild(hydrate3);
			
			document.body.appendChild(section1);
			document.body.appendChild(section2);
			document.body.appendChild(section3);
			
			
			
			selections.appendChild(div);
			selections.appendChild(questions);
			
			selections.appendChild(question1);
			div1.appendChild(option1_1);
			div1.appendChild(option1_2);
			div1.appendChild(option1_3);
			selections.appendChild(div1);
			
			selections.appendChild(question2);
			div2.appendChild(option2_1);
			div2.appendChild(option2_2);
			div2.appendChild(option2_3);
			selections.appendChild(div2);
			
			recordAnswer();
			
			selections.appendChild(send);
			
			document.body.appendChild(selections);
			
			recordAnswer();
			
		}
		
		
		send.onclick = function(){
			var mail = document.createElement('button');
			mail.setAttribute('id', 'sendanswers');
			
			var appendbutton = document.getElementById('selections');
			
			var url = document.createElement('a');
			
			console.log('mailto:xiyali2@illinois.edu?&subject=' + name + '&body=Question1:%20' + reliability + '%20Question2:%20' + overall);
			
			url.setAttribute('href', 'mailto:xiyali2@illinois.edu?&subject=' + name + '&body=Question1:%20' + reliability + '%20Question2:%20' + overall);
			url.textContent = 'Send answers';
			
			mail.appendChild(url);
			appendbutton.appendChild(mail);
		}

	
	