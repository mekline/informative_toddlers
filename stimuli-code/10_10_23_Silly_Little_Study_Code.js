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
			"kind": "exp-lookit-instruction-video",
			"instructionsVideo": [{
					"src": "https://raw.githubusercontent.com/mekline/informative_toddlers/master/stimuli/mp4/parent_intro_compressed.mp4",
					"type": "video/mp4"
				}],
			"introText": "Welcome to the study! Please watch this video to get started. \n(Or you can read the summary to the right if you prefer.)",
			"transcriptTitle": "Video summary",
			"transcriptBlocks": [{
				"listblocks": [{
						"text": "Hi, parents.Thank you so much for participating in our study."
					},
					{
						"text": "You and your child will watch six 10 second animated movies today depicting ordinary events like an animal eating a piece of fruit or getting dressed."
					},
					{
						"text": "A few seconds into each movie we will ask you as the parent to close your eyes and cover your ears."
					},
					{
						"text": "When we do that, please go like this and keep your eyes closed and your ears covered for the next few seconds until you hear us say ‘now your parent can open their eyes’."
					},
					{
						"text": "It's actually ok to peek and listen when your eyes are covered."
					},
					{
						"text": "But we want your child to think that only they know what happened in that period, because what we're gonna do next is ask your child to tell you what happened in the movie right then."
					},
					{
						"text": "If your child is quiet and doesn't say anything at all, you can prompt them by saying ‘What happened?’, ‘I didn’t see it.’, ‘Can you tell me what you saw?’."
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
						"text": "After each movie we will ask you to type in exactly what your child said, word for word, if they said something and to type ‘nothing’ if they said nothing."
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
    	}		
	}; // closing bracket for frames list object
	frame_sequence.push('study-intro');	
    frame_sequence.push('video-consent');
	
	//mvp1 frames and variables

	// images for mvp1Train1
	let mvp1Train1Images = [
		'training_bunny.png',
		'training_car_red.png'
	];

	// 2 mvp1-train frames 
	
	for (iTrial = 0; iTrial < 2; iTrial++){

		let image_name = mvp1Train1Images[iTrial];
		let first_clean = image_name.split(".");
		let second_clean = first_clean[0].split("_");
		let word = second_clean[1];
		let image_ans = "If your child doesn't answer you can ask them 'Do you know what that is?'. If they still don't answer you can say: 'That’s a '" + word + "'. Can you say '" + word + "' ?' " + "When you think your child is done (even if your child stays quiet), hit Next.";
		
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
			"baseDir": "https://raw.githubusercontent.com/mekline/informative_toddlers/master/stimuli/",
			"parentTextBlock": {
				"text": image_ans
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
							"label": "Please type here the words your child said, exactly as they said them. If your child didn't respond, please just write 'nothing'. When you have completed the text box, please hit the next button and the movies will start.",
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
	}

	/*
	// mvp1ActualTrial staging images, curtain videos, and event videos
	let event_order1 = [
		'event_eat_agent_cat_dog_apple',
		'event_drink_patient_baby_milk_juice',
		'event_appear_common_ground_duck_ball',
		'event_eat_patient_dog_apple_banana',
		'event_drink_agent_bird_baby_milk',
		'event_wear_common_ground_bear_shoes'
	];
	let audio_order1 = [
		'test-trials_long_agentpatient-1_cat-eat-apple',
		'test-trials_long_agentpatient-2_baby-drink-milk',
		'test-trials_long_informativity-1_duck-ball',
		'test-trials_long_agentpatient-1_dog-eat-banana',
		'test-trials_long_agentpatient-2_bird-drink-milk',
		'test-trials_long_informativity-2_bear-shoes'
	];

	// assests for order2
	let event_order2 = [
		'event_drink_agent_baby_bird_juice',
		'event_eat_patient_cat_banana_apple',
		'event_wear_common_ground_bear_shoes',
		'event_drink_patient_bird_juice_milk',
		'event_eat_agent_dog_cat_banana',
		'event_appear_common_ground_duck_ball'
	];
	let audio_order2 = [
		'sample_1',
		'sample_1',
		'test-trials_long_informativity-2_bear-shoes',
		'test-trials_long_agentpatient-2_bird-drink-juice',
		'test-trials_long_agentpatient-1_dog-eat-banana',
		'test-trials_long_informativity-1_duck-ball'
	];

	let event_orders = [event_order1, event_order2, event_order3, event_order4];
	
	// select an event and audio order
	let event_order_selected = event_order1; // item_orders[Math.floor(Math.random()*item_orders.length)]
	let audio_order = (event_order_selected = event_order1) ? audio_order1 : audio_order2;

	// 6 mvp1ActualTrial frames
	for (iTrial = 0; iTrial < 6; iTrial++){
		// parse file so you can tell parents what not to say
		let video_name = event_order_selected[iTrial];
		let video_arr = video_name.split("_");
		let video_ans = "Please avoid saying '" + video_arr[video_arr.length-1] + "', '" + video_arr[video_arr.length-2] + "', or '" + video_arr[video_arr.length-3] + "'.";

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
		staging_image = {
			"kind": "exp-lookit-images-audio",
			"audio": "sample_1",
			"images": [
				{
					"id": "staging-image",
					"src": stage_order[iTrial],
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
				"title": "Parent's Eyes: Open",
				"text": "Parents: Get ready to close your eyes. "
			},
			'durationSeconds': 5
		};
		curtain_opening = {
			"kind": "exp-lookit-video",
			"video":{
					"source": curtain_open_order[iTrial],
					"position": "fill"
			},
			"backgroundColor": "white",
			"parentTextBlock": {
				"title": "Parent's Eyes: Closed",
				"text": "Parents: Please close your eyes."
			},
			'requireVideoCount': 1,
			"baseDir": "https://raw.githubusercontent.com/mekline/informative_toddlers/master/stimuli/",
			"videoTypes": [
				"webm",
				"mp4"
			]
		};
		thisActualTrial = {
			"kind": "exp-lookit-video",
			"video":{
					"source": event_order_selected[iTrial],
					"position": "fill"
			},
			"audio": {
				"loop": false,
				"source": audio_order[iTrial]
			},
			"backgroundColor": "white",
			"parentTextBlock": {
				"title": "Parent's Eyes: Closed",
				"text": "Parents: Please keep your eyes closed."
			},
			'requireVideoCount': 1,
			"baseDir": "https://raw.githubusercontent.com/mekline/informative_toddlers/master/stimuli/",
			"videoTypes": [
				"webm",
				"mp4"
			]
		};
		curtain_closing = {
			"kind": "exp-lookit-video",
			"video":{
					"source": curtain_close_order[iTrial],
					"position": "fill"
			},
			"backgroundColor": "white",
			"parentTextBlock": {
				"title": "Parent's Eyes: Open",
				"text": video_ans
			},
			'requireVideoCount': 1,
			"baseDir": "https://raw.githubusercontent.com/mekline/informative_toddlers/master/stimuli/",
			"videoTypes": [
				"webm",
				"mp4"
			],
			'autoProceed': false
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
		stagingImageFrameId = 'stagingImageTrials-' + (iTrial + 1);
		curtainOpeningFrameId = 'curtainOpeningTrials-' + (iTrial + 1);
		frameIdActual = 'actualTrials-' + (iTrial + 1);
		curtainClosingFrameId = 'curtainClosingTrials-' + (iTrial + 1);
		stopRecording3FrameId = 'stopRecording3ActualTrials-' + (iTrial + 1);

		// insert frames into frame list using frameIds
		frames[startRecording3FrameId] = startRecordingTrial3;
		frames[stagingImageFrameId] = staging_image;
		frames[curtainOpeningFrameId] = curtain_opening;
		frames[frameIdActual] = thisActualTrial;
		frames[curtainClosingFrameId] = curtain_closing;
		frames[stopRecording3FrameId] = stopRecordingTrial3;

		// push frame ids into frame sequence
		frame_sequence.push(startRecording3FrameId);
		frame_sequence.push(stagingImageFrameId);
		frame_sequence.push(curtainOpeningFrameId);
		frame_sequence.push(frameIdActual);
		frame_sequence.push(curtainClosingFrameId);
		frame_sequence.push(stopRecording3FrameId);
	}

	frame_sequence = frame_sequence.concat(['exit-survey']);
*/
	var protocol = {
		frames: frames,
		sequence: frame_sequence
	};
	return protocol;
} // closing bracket for generateProtocol
