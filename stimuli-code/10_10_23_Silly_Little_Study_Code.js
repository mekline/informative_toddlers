function generateProtocol(child, pastSessions) {
    // Lookit uses version ECMA 5 of JavaScript
    // base frames that do not change btwn or within participants

	let frame_sequence = [];
     let frames = {
        "video-config": {
        	"kind": "exp-video-config",
        	"troubleshootingIntro": "If you're having any trouble and need help, don't!"
    	},
    	"video-consent": {
        	"kind": "exp-lookit-video-consent",
        	"template": "consent_005",
        	"PIName": "Laura Schulz",
        	"institution": "MIT",
        	"PIContact": "Laura Schulz [LS email]",
        	"purpose": "[UNDER CONSTRUCTION]",
        	"procedures": "[UNDER CONSTRUCTION",
        	"risk_statement": "There are no expected risks if you participate in the study.",
        	"voluntary_participation": "[UNDER CONSTRUCTION]",
        	"payment": "[UNDER CONSTRUCTION]",
        	"datause": "During the session, you and your child will be recorded by your computer's webcam and microphone. These webcam recordings, and other data like answers you enter in forms, are sent securely to the Lookit platform. You can view your past recordings on Lookit at any time.Data are stored securely on Lookit servers and by researchers, and are only shared as described in this document. However, there is always a small risk that data transmitted over the internet may be intercepted or that the security of stored data may be compromised.",
        	"include_databrary": true,
        	"additional_video_privacy_statement": "We will also ask your permission to use your videos as stimuli for other parents.",
        	"gdpr": false,
        	"research_rights_statement": "You are not waiving any legal claims, rights or remedies because of your participation in this research study.  If you feel you have been treated unfairly, or you have questions regarding your rights as a research subject, you may contact the [IRB NAME], MIT, [ADDRESS/CONTACT]",
        	"additional_segments": [
            	{
                	"title": "US Patriot Act Disclosure",
                	"text": "[EXAMPLE ONLY, PLEASE REMOVE ADDITIONAL_SEGMENTS UNLESS YOU NEED THEM.] Lookit is a U.S. organization and all information gathered from the website is stored on servers based in the U.S. Therefore, your video recordings are subject to U.S. laws, such as the US Patriot Act. This act allows authorities access to the records of internet service providers. If you choose to participate in this study, you understand that your video recording will be stored and accessed in the USA. The security and privacy policy for Lookit can be found at the following link: <a href='https://lookit.mit.edu/privacy/' target='_blank' rel='noopener'>https://lookit.mit.edu/privacy/</a>."
            	}
        	]
    	},
        "exit-survey": {
        	"kind": "exp-lookit-exit-survey",
        	"debriefing": {
            	"text": "[UNDER CONSTRUCTION]",
            	"title": "Thank you!"
        	}
    	}, 
        "study-intro": {
        	"kind": "exp-lookit-text",
        	"showPreviousButton": false,
        	"blocks": [
            	{
                	"title": "Welcome!",
                	"emph": true,
                	"text": "Thank you so much for participating! Your child does not need to be with you until the videos begin. First, let's go over what will happen!"
            	},
            	{
                	"text": "During this study, your child will watch a few videos and then discuss these scenes with Elmo after each one."
            	},
            	{
                	"text": "The video section will take about 10 minutes."
            	},
            	{
                	"text": "After the videos, you will answer a few final questions. Then you're all done!"
            	}
        	]
    	}		
	}; // closing bracket for frames list object	
    frame_sequence.push('video-consent');

	// non-lookit frames and variables

	//mvp1 frames and variables
	frames["mvp1-intro"] = {
		"kind": "exp-lookit-text",
		"showPreviousButton": false,
		"blocks":
		[
			{
				"title": "Intro!"
			}
		]
	};
	frame_sequence.push('mvp1-intro');

	// images for mvp1Train1
	let mvp1Train1Images = [
		"dog.png",
		'cat1.png',
		'apple.png'
	];

	// 3 mvp1-train frames 
	
	for (iTrial = 0; iTrial < 3; iTrial++){
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
		bufferTrial = {
			"kind": "exp-lookit-images-audio",
			"audio": "sample_1",
			"images": [
				{
					"id": "train1-image",
					"src": mvp1Train1Images[iTrial],
					"position": "fill"
				}
			],
			"baseDir": "https://raw.githubusercontent.com/mekline/informative_toddlers/master/stimuli/",
			"pageColor": "white",
			"backgroundColor": "white",
			"audioTypes": [
				"mp3"
			],
			'autoProceed': true,
			"parentTextBlock": {
				"title": "Eyes: Open"
			}
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
			"baseDir": "https://raw.githubusercontent.com/mekline/informative_toddlers/master/stimuli/",
			"pageColor": "white",
			"backgroundColor": "white",
			"parentTextBlock": {
				"title": "Eyes: Open",
				"text": "Prompt your child to speak"
			}
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

		// make frame ids for each frame in above sequence
		startRecordingFrameId = 'startRecordingTrain1-' + (iTrial + 1);
		bufferFrameId = 'bufferTrain1-' + (iTrial + 1);
		frameId = 'train1-' + (iTrial + 1);
		stopRecordingFrameId = 'stopRecordingTrain1-' + (iTrial + 1);
		
		// insert the frames into the frame list using the frame ids
		frames[startRecordingFrameId] = startRecordingTrial;
		frames[bufferFrameId] = bufferTrial;
		frames[frameId] = thisTrial;
		frames[stopRecordingFrameId] = stopRecordingTrial;
		
		// push the frame ids into the frame sequence (determines order)
		frame_sequence.push(startRecordingFrameId);
		frame_sequence.push(bufferFrameId);
		frame_sequence.push(frameId);
		frame_sequence.push(stopRecordingFrameId);
	}

	frames["mvp1-instructions"] = {
		"kind": "exp-lookit-text",
		"blocks": 
		[
			{
				"title": "Instructions!"
			}
		]
	};
	frame_sequence.push('mvp1-instructions');

	// assests for mvp1Train2
	let mvp1Train2Images = [
		'ball.png',
		'standing_bear.png',
		'milk_with_carton.png',
		'hd_curtains.png',
	];

	// 3 mvp1Train2 frames
	for (iTrial = 0; iTrial < 3; iTrial++){
		startRecordingTrial2 = {
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
		buffer1Trial = {
			"kind": "exp-lookit-images-audio",
			"audio": "sample_1",
			"images": [
				{
					"id": "train2-image",
					"src": 'hd_curtains.png',
					"position": "fill"
				}
			],
			"baseDir": "https://raw.githubusercontent.com/mekline/informative_toddlers/master/stimuli/",
			"pageColor": "white",
			"backgroundColor": "white",
			"audioTypes": [
				"mp3"
			],
			'autoProceed': true,
			"parentTextBlock": {
				"title": "Eyes: Open",
				"text": "Parents: Get Ready"
			}
		};
		buffer2Trial = {
			"kind": "exp-lookit-images-audio",
			"images": [
				{
					"id": "train2-image",
					"src": 'hd_curtains.png',
					"position": "fill"
				}
			],
			"baseDir": "https://raw.githubusercontent.com/mekline/informative_toddlers/master/stimuli/",
			"pageColor": "white",
			"backgroundColor": "white",
			'autoProceed': true,
			"parentTextBlock": {
				"title": "Eyes: Closed",
				"text": "Parents: Close your eyes"
			}
		};
		thisTrial = {
			"kind": "exp-lookit-images-audio",
			"audio": "sample_1",
			"images": [
				{
					"id": "train2-image",
					"src": mvp1Train2Images[iTrial],
					"position": "fill"
				}
			],
			"baseDir": "https://raw.githubusercontent.com/mekline/informative_toddlers/master/stimuli/",
			"pageColor": "white",
			"backgroundColor": "white",
			"audioTypes": [
				"mp3"
			],
			"parentTextBlock": {
				"title": "Eyes: Closed",
				"text": "Parents: Keep your eyes closed"
			}
		};
		buffer3Trial = {
			"kind": "exp-lookit-images-audio",
			"audio": "sample_1",
			"images": [
				{
					"id": "train2-image",
					"src": 'hd_curtains.png',
					"position": "fill"
				}
			],
			"baseDir": "https://raw.githubusercontent.com/mekline/informative_toddlers/master/stimuli/",
			"pageColor": "white",
			"backgroundColor": "white",
			"audioTypes": [
				"mp3"
			],
			"parentTextBlock": {
				"title": "Eyes: Open",
				"text": "Parents: Avoid saying [object]"
			}
		};
		stopRecordingTrial2 = {
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

		// make frame ids for each frame in above sequence
		startRecording2FrameId = 'startRecordingTrain2-' + (iTrial + 1);
		buffer1FrameId = 'buffer1Train2-' + (iTrial + 1);
		buffer2FrameId = 'buffer2Train2-' + (iTrial + 1);
		frameId = 'train2-' + (iTrial + 1);
		buffer3FrameId = 'buffer3Train2-' + (iTrial + 1);
		stopRecording2FrameId = 'stopRecordingTrain2-' + (iTrial + 1);

		// insert the frames into the frame list using the frame ids
		frames[startRecording2FrameId] = startRecordingTrial2;
		frames[buffer1FrameId] = buffer1Trial;
		frames[buffer2FrameId] = buffer2Trial;
		frames[frameId] = thisTrial;
		frames[buffer3FrameId] = buffer3Trial;
		frames[stopRecording2FrameId] = stopRecordingTrial2;

		// push the frame ids into the frame sequence (determines order)
		frame_sequence.push(startRecording2FrameId);
		frame_sequence.push(buffer1FrameId);
		frame_sequence.push(buffer2FrameId);
		frame_sequence.push(frameId);
		frame_sequence.push(buffer3FrameId);
		frame_sequence.push(stopRecording2FrameId);
	} 

	// mvp1ActualTrial assests
	let item_order1 = [
		'event_eat_agent_cat_dog_apple',
		'event_drink_patient_baby_milk_juice',
		'event_appear_common_ground_duck_ball',
		'event_eat_patient_dog_apple_banana',
		'event_drink_agent_bird_baby_milk',
		'event_wear_common_ground_bear_shoes'
	];
	let item_order2 = [
		'event_drink_agent_baby_bird_juice',
		'event_eat_patient_cat_banana_apple',
		'event_wear_common_ground_bear_shoes',
		'event_drink_patient_bird_juice_milk',
		'event_eat_agent_dog_cat_banana',
		'event_appear_common_ground_duck_ball'
	];
	let item_orders = [item_order1, item_order2];
	let item_order_selected = item_order1; // item_orders[Math.floor(Math.random()*item_orders.length)]

	// 6 mvp1ActualTrial frames
	for (iTrial = 0; iTrial < 6; iTrial++){
		startRecordingTrial3 = {
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
		buffer1AcutalTrial = {
			"kind": "exp-lookit-images-audio",
			"audio": "sample_1",
			"images": [
				{
					"id": "train2-image",
					"src": 'hd_curtains.png',
					"position": "fill"
				}
			],
			"baseDir": "https://raw.githubusercontent.com/mekline/informative_toddlers/master/stimuli/",
			"pageColor": "white",
			"backgroundColor": "white",
			"audioTypes": [
				"mp3"
			],
			'autoProceed': true,
			"parentTextBlock": {
				"title": "Eyes: Open",
				"text": "Parents: Get Ready"
			}
		};
		buffer2ActualTrial = {
			"kind": "exp-lookit-images-audio",
			"images": [
				{
					"id": "train2-image",
					"src": 'hd_curtains.png',
					"position": "fill"
				}
			],
			"baseDir": "https://raw.githubusercontent.com/mekline/informative_toddlers/master/stimuli/",
			"pageColor": "white",
			"backgroundColor": "white",
			'autoProceed': true,
			"parentTextBlock": {
				"title": "Eyes: Closed",
				"text": "Parents: Close your eyes"
			}
		};
		thisActualTrial = {
			"kind": "exp-lookit-video",
			"video":{
					"source": item_order1[iTrial],
					"position": "fill"
			},
			"backgroundColor": "white",
			"parentTextBlock": {
				"title": "Eyes: Closed",
				"text": "Parents: Keep your eyes closed"
			},
			'requireVideoCount': 1,
			"baseDir": "https://raw.githubusercontent.com/mekline/informative_toddlers/master/stimuli/",
			"videoTypes": [
				"webm",
				"mp4"
			]
		};
		buffer3ActualTrial = {
			"kind": "exp-lookit-images-audio",
			"audio": "sample_1",
			"images": [
				{
					"id": "train2-image",
					"src": 'hd_curtains.png',
					"position": "fill"
				}
			],
			"baseDir": "https://raw.githubusercontent.com/mekline/informative_toddlers/master/stimuli/",
			"pageColor": "white",
			"backgroundColor": "white",
			"audioTypes": [
				"mp3"
			],
			"parentTextBlock": {
				"title": "Eyes: Open",
				"text": "Parents: Avoid saying [object]"
			}
		};
		stopRecordingTrial3 = {
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

		// make frameIds for each of the above frames
		startRecording3FrameId = 'startRecording3ActualTrials-' + (iTrial + 1);
		buffer1ActualFrameId = 'buffer1ActualTrials-' + (iTrial + 1);
		buffer2ActualFrameId = 'buffer2ActualTrials-' + (iTrial + 1);
		frameIdActual = 'actualTrials-' + (iTrial + 1);
		buffer3ActualFrameId = 'buffer3Actualtrials-' + (iTrial + 1);
		stopRecording3FrameId = 'stopRecording3ActualTrials-' + (iTrial + 1);

		// insert frames into frame list using frameIds
		frames[startRecording3FrameId] = startRecordingTrial3;
		frames[buffer1ActualFrameId] = buffer1AcutalTrial;
		frames[buffer2ActualFrameId] = buffer2ActualTrial;
		frames[frameIdActual] = thisActualTrial;
		frames[buffer3ActualFrameId] = buffer3ActualTrial;
		frames[stopRecording3FrameId] = stopRecordingTrial3;

		// push frame ids into frame sequence
		frame_sequence.push(startRecording3FrameId);
		frame_sequence.push(buffer1ActualFrameId);
		frame_sequence.push(buffer2ActualFrameId);
		frame_sequence.push(frameIdActual);
		frame_sequence.push(buffer3ActualFrameId);
		frame_sequence.push(stopRecording3FrameId);
	}

	frame_sequence = frame_sequence.concat(['exit-survey']);

	var protocol = {
		frames: frames,
		sequence: frame_sequence
	};
	return protocol;
} // closing bracket for generateProtocol





// experimental and out-of-date frames
/*
	// create a random number and decide whether or not it is even/odd
	let _RANDOM_NUM = Math.floor(Math.random() * 1001)
	// removed the .toString bc it may not be necessary but if this doesn't work try putting it back in first
	let _EVEN_ODD = _RANDOM_NUM%2 === 0? "even" : "odd"
	let rand_num_text = "the number is " + _RANDOM_NUM + " and it is " + _EVEN_ODD
	
    // display the random number and whether it's even or odd
	frames['random-number-report'] = {
		"kind": "exp-lookit-text",
		"showPreviousButton": true,
		"blocks": [
			{
				"emph": true,
				"text": rand_num_text
			}
		]
	}

	// create a frame with 3 pictures on it and you have to click on one of the pictures
	frames['pick-a-pic'] = {
		"kind": "exp-lookit-images-audio",
		"images": [
			{
				"id": "option1",
				"src": "happy_remy.jpg",
				"position": "center",
			},
			{
				"id": "option2",
				"src": "happy_zenna.jpg",
				"position": "left",
				"displayDelayMs": 2000
			},
			{
				"id": "option3",
				"src": "annoyed_zenna.jpg",
				"position": "right",
				"displayDelayMs": 2000
			}
		],
		"baseDir": "https://www.mit.edu/~kimscott/placeholderstimuli/",
		"autoProceed": false,
		"doRecording": true,
		"choiceRequired": true,
		"parentTextBlock": {
			"text": "Choose one of the three pitctures",
			"title": "Instructions"
		},
		"allowUserPause": false
	} 
	
	"first-stimuli": {
        	"kind": "exp-lookit-video",
        	"video": {
            	"top": 10,
            	"left": 10,
            	"loop": false,
            	"width": 115,
            	"source": "single_slide_lookit_demo"
        	},
        	"backgroundColor": "white",
        	"autoProceed": true,
        	"parentTextBlock": {
            	"text": "If your child needs a break, press the space bar to pause!"
        	},
        	"requiredDuration": 0,
        	"requireAudioCount": 0,
        	"requireVideoCount": 1,
        	"doRecording": false,
        	"frameOffsetAfterPause": 0,
        	"pauseAudio": "",
        	"unpauseAudio": "",
        	"pauseVideo": "",
        	"baseDir": "https://raw.githubusercontent.com/mekline/informative_toddlers/master/stimuli/",
        	"audioTypes": [
            	"ogg",
            	"mp3"
        	],
        	"videoTypes": [
            	"webm",
            	"mp4"
        	]
    	}
		 "parent-notice": {
        	"kind": "exp-lookit-text",
        	"blocks": [
            	{
                	"title": "Important Things to Note",
                	"emph": true,
                	"text": "Parents, please do not point to any object or character in the story, or repeat out loud any of the words used in the story."
            	},
            	{
                	"text": "You may point at the center of the screen to  guide your child's attention and you can encourage your child generally (e.g., 'Great job!', 'Can you help Elmo?', 'Do you want to tell Elmo what you saw?')."
            	},
            	{
                	"text": "You may also respond to your child's unrelated questions or needs (e.g., 'No bib.', 'See my toe?'), just please try to redirect your child's attention to the study afterwards."
            	},
            	{
                	"text": "At the end of the study, we will explain what we are trying to learn and answer some common questions you may have about the study."
            	},
            	{
                	"emph": true,
                	"text": "Let's begin!"
            	}
        	]
    	}
		*/
