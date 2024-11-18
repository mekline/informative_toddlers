function generateProtocol(child, pastSessions) {
    // Lookit uses version ECMA 5 of JavaScript

	// we are taking the data hog approach
	// original Experiment runner version (commit SHA): afb2fda97f9325476da70e2bc0e4602816011c60

	// base frames that do not change btwn or within participants
	let frame_sequence = [];
     let frames = {
    	"video-consent": {
        	"kind": "exp-lookit-video-consent",
        	"template": "consent_005",
        	"PIName": "Laura Schulz",
        	"institution": "MIT",
        	"PIContact": " Lia Washington at bw18@mit.edu",
        	"purpose": "This study is about whether children who are just beginning to talk tend to refer to things their audience doesn't already know.",
        	"procedures": "Today we are going to show your child four 30 second animated movies about ordinary events (e.g., animals entering a park). There will be a part of the movie where we ask you to cover your eyes and ears. We don't mind if you peek ;) and we know you will probably be able to hear. The idea is just to have your child believe that you don't know what happened during this part of the movie. Then we will ask your child to tell you what happened when you weren't looking.",
        	"risk_statement": "There are no expected risks if you participate in the study.",
        	"voluntary_participation": "You and your child are free to choose whether to be in this study. If you and your child choose to participate, it's okay to stop at any point during the session. Please do pause or stop the session if your child becomes very fussy or does not want to participate! If this is a study with multiple sessions, it's okay not to complete all the sessions.",
        	"payment": "After you finish the study, we will email you a $5 Amazon gift card within three days. To be eligible for the gift card your child must be in the age range for this study, you need to submit a valid consent statement, and we need to see that there is a child with you. But we will send a gift card even if you do not finish the whole study or we are not able to use your child's data! There are no other direct benefits to you or your child from participating, but we hope you will enjoy the experience.",
        	"datause": "During the session, you and your child will be recorded by your computer's webcam and microphone. These webcam recordings, and other data like answers you enter in forms, are sent securely to the Lookit platform. You can view your past recordings on Lookit at any time.Data are stored securely on Lookit servers and by researchers, and are only shared as described in this document. However, there is always a small risk that data transmitted over the internet may be intercepted or that the security of stored data may be compromised.",
        	"include_databrary": true,
        	"additional_video_privacy_statement": "We will also ask your permission to use your videos as stimuli for other parents.",
        	"gdpr": false,
        	"research_rights_statement": "You are not waiving any legal claims, rights or remedies because of your participation in this research study. If you feel you have been treated unfairly, or you have questions regarding your rights as a research subject, you may contact Lia Washington at bw18@mit.edu",
    	},
		"video-config": {
        	"kind": "exp-video-config",
        	"troubleshootingIntro": ""
    	},
        "exit-survey": {
        	"kind": "exp-lookit-exit-survey",
        	"debriefing": {
            	"text": "Thank you for your participation!",
            	"title": "Exit Survey"
        	}
    	}, 
        "study-intro": {
			"kind": "exp-lookit-instruction-video",
			"instructionsVideo": [{
					"src": "https://raw.githubusercontent.com/mekline/informative_toddlers/master/stimuli/v2_oct2024/mp4/v2_intro.mp4",
					"type": "video/mp4"
				}],
			"introText": "Welcome to the study! Please watch this video to get started. \n(Or you can read the summary to the right if you prefer.)",
			"transcriptTitle": "Video summary",
			"transcriptBlocks": [{
				"listblocks": [{
						"text": "Hi, parents.Thank you so much for participating in our study."
					},
					{
						"text": "You and your child will watch four 30 second animated movies today depicting ordinary events like an animal entering a park."
					},
					{
						"text": "A few seconds into each movie we will ask you as the parent to close your eyes and cover your ears."
					},
					{
						"text": "When we do that, please go like this and keep your eyes closed and your ears covered for the next few seconds until you hear us say \"now your parent can open their eyes\"."
					},
					{
						"text": "It's actually ok to peek and listen when your eyes are covered."
					},
					{
						"text": "But we want your child to think that only they know what happened in that period, because what we're gonna do next is ask your child to tell you what happened in the movie right then."
					},
					{
						"text": "If your child is quiet and doesn't say anything at all, you can prompt them by saying \"What happened?\", \"I didn’t see it.\", \"Can you tell me what you saw?\"."
					},
					{
						"text": "But, please don't repeat the names of the animals or objects mentioned in the movie."
					},
					{
						"text": "Sometimes toddlers are shy or they're so interested in the movies that they don't say anything, even if they usually talk a lot to you at home."
					},
					{
						"text": "That's ok, it's exactly why we test so many children."
					},
					{
						"text": "We know that verbal responses may be rare."
					},
					{
						"text": "After each movie we will ask you to type in exactly what your child said, word for word, if they said something and to type \"nothing\" if they said nothing."
					},
					{
						"text": "Then you can hit the next button to go to the next movie."
					},
					{
						"text": "Let's get started."
					},
					{
						"text": "We'll start with a warm up game where we just show you and your child a few pictures and we ask your child to say what they see."
					},
					{
						"text": "Thank you so much parents."
					},
					{
						"text": "We're looking forward to working with you and your child."
				}]
        	}],
			"warningText": "Please watch the video or read the summary before proceeding.",
			"nextButtonText": "I'm ready to make sure my webcam is connected!",
			"title": "Study instructions",
			"showPreviousButton": false
    	},
		"thank-you": {
			"kind": "exp-lookit-images-audio",
			"audio": "we_are_all_done_now",
			"images": [{
				'id': 'smile',
				'src': 'smile.png',
				'position': "fill",

			}],
			"baseDir": "https://raw.githubusercontent.com/mekline/informative_toddlers/master/stimuli/v1_jan2024",
			"autoProceed": false,
			"parentTextBlock": {
        		"text": "",
        		"title": "Thank you for participating in our study!",
				"css": {
					"background-color": "white",
				}
    		},
			"backgroundColor": "white"
		},
		"study-debrief" : {
			"kind": "exp-lookit-text",
			"blocks":[
				{
					"title": "Study Debrief",
					"text": "As adults, we communicate information selectively: We mostly tell people things they don’t already know, and we avoid referring to topics that are common knowledge. What about when children first learn to speak? Young toddlers start with very limited vocabularies. At first, they only produce one or two words in each utterance. Many things might affect what toddlers decide to say, including how familiar a word is, or how interested the child is in the topic. Still, we wondered if even toddlers just learning to talk might, like adults, try  to communicate information their audience does not know."
				},
				{
					"text": "Here we showed your child scenes where both you and your child both knew some things about the scene, but something interesting always happened when your eyes were closed. In those stories, we wanted to know if on average, children would refer to the new event rather than the parts of the scene you already knew (i.e, the events that took place while your eyes were open)."
				},
				{
					"text": "Depending on your child's age and mood, they might have been very quiet for all of these movies, spoken in full sentences throughout, or said something else we didn’t predict. All of that is perfectly fine! There is no one \“right\“ answer in these studies and however your child responded could make perfect sense. One of the things we often learn from studying children is that our ideas are wrong and need to change them! Thank you so much for your participation! Research on child development would be impossible without your support and we are very grateful for your time!"
				}
			]
		}		
	}; // closing bracket for frames list object
	frame_sequence.push('video-config');
	frame_sequence.push('video-consent');
	frame_sequence.push('study-intro');	
   
	
	//mvp1 frames and variables

	// images for mvp1Train1
	let mvp1Train1Images = [
		'training_bunny.png',
		'training_apple.png'
	];

	// 2 mvp1-train frames 
	
	for (iTrial = 0; iTrial < 2; iTrial++){

		// parse out nono words using the file names
		let image_name = mvp1Train1Images[iTrial];
		let first_clean = image_name.split(".");
		let second_clean = first_clean[0].split("_");
		let word = second_clean[1];
		let image_ans = "If your child doesn't answer you can ask them \"Do you know what that is?\". If they still don't answer you can say: \"That’s a \"" + word + "\". Can you say \"" + word + "\" ?\" " + "When you think your child is done (even if your child stays quiet), hit Next.";
		
		startRecordingTrial = {
			"kind": "exp-lookit-start-recording",
    		"baseDir": "https://www.mit.edu/~kimscott/placeholderstimuli/",
    		"videoTypes": [
        		"webm",
        		"mp4"
    		],
    		"video": "attentiongrabber",
    		"displayFullscreen": true,
    		"waitForVideoMessage": " "
		};
		thisTrial = {
			"kind": "exp-lookit-images-audio",
			"images": [
				{
					"id": "train1-image",
					"src": mvp1Train1Images[iTrial],
					"position": "fill"
				}
			],
			"audio": "training_audio",
			"audioTypes": [
				"mp3",
				"ogg"
			],
			"baseDir": "https://raw.githubusercontent.com/mekline/informative_toddlers/master/stimuli/v2_oct2024",
			"parentTextBlock": {
				"text": image_ans,
				"css": {
					"background-color": "white",
				}
			},
			"pageColor": "white",
			"backgroundColor": "white",
			'showPreviousButton':  false
		};
		stopRecordingTrial = {
			"kind": "exp-lookit-stop-recording",
			"baseDir": "https://www.mit.edu/~kimscott/placeholderstimuli/",
			"videoTypes": [
				"webm",
				"mp4"
			],
			"video": "attentiongrabber",
			"displayFullscreen": true,
			"waitForVideoMessage": " "
		};
		parentTranscript = {
			"kind": "exp-lookit-survey",
			'displayFullscreenOverride': true,
    		"formSchema": {
				"schema": {
					"type": "object",
					"properties": {
						"parentResponseTranscription": {
							"type": "string",
							"required": true
						}
					}
				},
				"options": {
					"fields": {
						"parentResponseTranscription": {
							"type": "text",
							"label": "Please type here the words your child said, exactly as they said them. If your child didn't respond, please just write \"nothing\". When you have completed the text box, please hit the next button and the movies will start.",
							"placeholder": "Enter your child's response here..."
						}
					}
				}
			}
		};

		// make frame ids for each frame in above sequence
		startRecordingFrameId = 'startRecordingTrain1-' + (iTrial + 1);
		frameId = 'train1-' + (iTrial + 1);
		stopRecordingFrameId = 'stopRecordingTrain1-' + (iTrial + 1);
		parentTranscriptFrameId = 'parentTranscript1-' + (iTrial + 1);
		
		// insert the frames into the frame list using the frame ids
		frames[startRecordingFrameId] = startRecordingTrial;
		frames[frameId] = thisTrial;
		frames[stopRecordingFrameId] = stopRecordingTrial;
		frames[parentTranscriptFrameId] = parentTranscript;
		
		// push the frame ids into the frame sequence (determines order)
		frame_sequence.push(startRecordingFrameId);
		frame_sequence.push(frameId);
		frame_sequence.push(stopRecordingFrameId);
		frame_sequence.push(parentTranscriptFrameId);
	} // closing bracket of for loop

	// stimuli for actual trials
	let order1 = [
		'bear_cow_bear_before_cow',
		'ball_hat_hat_after_ball',
		'cat_dog_cat_before_dog',
		'balloon_car_car_after_balloon'
	];
	let order2 = [
		'hat_ball_hat_before_ball',
		'dog_cat_cat_after_dog',
		'car_balloon_car_before_balloon',
		'cow_bear_bear_after_cow'
	];
	let order3 = [ // contrast to order1
		'cow_bear_cow_before_bear',
		'hat_ball_ball_after_hat',
		'dog_cat_dog_before_cat',
		'car_balloon_balloon_after_car'
	];
	let order4 = [ // contrast to order2
		'ball_hat_ball_before_hat',
		'cat_dog_dog_after_cat',
		'balloon_car_balloon_before_car',
		'bear_cow_cow_after_bear'
	];
	
	// pick an order at random
	let orders = [order1, order2, order3, order4];
	let num =  Math.floor(Math.random() * 4);
	let order_selected = orders[num];
	
	// for loop for actual trials
	for (iTrial = 0; iTrial < 4; iTrial++){
		startRecordingActualTrial = {
			"kind": "exp-lookit-start-recording",
			"baseDir": "https://www.mit.edu/~kimscott/placeholderstimuli/",
			"videoTypes": [
				"webm",
				"mp4"
			],
			"video": "attentiongrabber",
			"displayFullscreen": true,
			"waitForVideoMessage": " "
		};
		actualTrial = {
			"kind": "exp-lookit-video",
			"video":{
					"source": order_selected[iTrial],
					"position": "fill"
			},
			"backgroundColor": "white",
			"autoProceed": true,
			'requireVideoCount': 1,
			"baseDir": "https://raw.githubusercontent.com/mekline/informative_toddlers/master/stimuli/v2_oct2024",
			"videoTypes": [
				"webm",
				"mp4"
			],
			"audioTypes": [
				"ogg",
				"mp3"
			]
		};
		stopRecordingActualTrial = {
			"kind": "exp-lookit-stop-recording",
			"baseDir": "https://www.mit.edu/~kimscott/placeholderstimuli/",
			"videoTypes": [
				"webm",
				"mp4"
			],
			"video": "attentiongrabber",
			"displayFullscreen": true,
			"waitForVideoMessage": " "
		};
		parentPromptWithCurtain = {
			"kind": "exp-lookit-images-audio",
			"images": [{
				'id': "curtains",
				"src": "hd_curtains.png",
				"position": "fill"
			}],
			"baseDir": "https://raw.githubusercontent.com/mekline/informative_toddlers/master/stimuli/v2_oct2024",
			"pageColor": "white",
			"backgroundColor": "white",
			"parentTextBlock": {
				"css": {
					"background-color": "white",
				},
				"text": "If your child doesn't answer, you can prompt them (\"I didn't see it. What did you see?\") but please do not say any of the nouns in the scene. When you think your child is done (even if they don't talk) please hit the Next button."
			}
		};
		parentTranscriptActualTrial = {
			"kind": "exp-lookit-survey",
			'displayFullscreenOverride': true,
			"formSchema": {
				"schema": {
					"type": "object",
					"properties": {
						"parentResponseTranscription": {
							"type": "string",
							"required": true
						}
					}
				},
				"options": {
					"fields": {
						"parentResponseTranscription": {
							"type": "text",
							"label": "Please type here the words your child said, exactly as they said them. If your child didn't respond, please just write \"nothing\". When you have completed the text box, please hit the next button and the movies will start.",
							"placeholder": "Enter your child's response here..."
						}
					}
				}
			}
		};

		// make frameIds for each of the above frames
		startRecordingActualTrialFrameId = 'startRecordingActualTrial-' + (iTrial + 1);
		actualTrialFrameId = 'actualTrial-' + (iTrial + 1);
		parentPromptWithCurtainFrameId = 'parentPromptWithCurtain-' + (iTrial + 1);
		stopRecordingActualTrialFrameId = 'stopRecordingActualTrial-' + (iTrial + 1);
		parentTranscriptActualTrialFrameId = 'parentTranscriptActualTrial-' + (iTrial + 1);
		
		// insert frames into frame list using frameIds
		frames[startRecordingActualTrialFrameId] = startRecordingActualTrial;
		frames[actualTrialFrameId] = actualTrial;
		frames[stopRecordingActualTrialFrameId] = stopRecordingActualTrial;
		frames[parentPromptWithCurtainFrameId] = parentPromptWithCurtain;
		frames[parentTranscriptActualTrialFrameId] = parentTranscriptActualTrial;

		// push frame ids into frame sequence
		frame_sequence.push(startRecordingActualTrialFrameId);
		frame_sequence.push(actualTrialFrameId);
		frame_sequence.push(parentPromptWithCurtainFrameId);
		frame_sequence.push(stopRecordingActualTrialFrameId);
		frame_sequence.push(parentTranscriptActualTrialFrameId);
	} // closing bracket for for loop

	frame_sequence = frame_sequence.concat(['thank-you']);
	frame_sequence = frame_sequence.concat(['study-debrief']);
	frame_sequence = frame_sequence.concat(['exit-survey']);
	var protocol = {
		frames: frames,
		sequence: frame_sequence
	};
	return protocol;
} // closing bracket for generateProtocol