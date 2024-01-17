# informative_toddlers

This is the github repo data folder for the informative-toddlers project.  As of January 2024, it should appear to be empty except for this readme file! This is because we want
to avoid uploading any data via this channel until we have established a workflow that definitely does not share any of the data (of minor participants!) that we should
not publicly share. 

Raw data for this project is hosted and coded for children's responses elsewhere, and the resulting processed data should be copied into this
subfolder for analysis.  Here is how to do that succesfully:

0) As usual, always start from a clean GH repository - pull from the online master version, resolve any conflicts, make sure any other local work is synced up.

1) Make a folder for the experiment/data subgroup you are analyzing.  Following the coding manual (see Dropbox!), you will be adding just the final processing steps
of the dataset-level (step-2TOCODE) and participant-level(step-3CODED) CSVs.  Now your data directory should look like this *on your laptop*: 


```
informative_toddlers_repo/
	.git
	.gitignore
	analysis/
	data/
		YOURSTUDYGROUP_dummytest_development/
			study-YOURSTUDYGROUP_step-2TOCODE_session-all_type-combined_data.csv
			study-YOURSTUDYGROUP_step-3CODED_framedata_per_session/
				study-YOURSTUDYGROUP_session-LONG-UID-STRING1_step-3CODED_type-frames_data.csv
				study-YOURSTUDYGROUP_session-LONG-UID-STRING2_step-3CODED_type-frames_data.csv
				...
	LICENSE
	README.md
	stimuli/
	stimuli-code/
```

2) To check that you are safe to never accidentally upload this data (until we mean to do so!!), run `git add .`, then run `git status` . You should see this message:

```
On branch setup-data-and-analysis
nothing to commit, working tree clean
```

...because from git's perspective, you haven't added anything, because git has been told to flat out ignore anything in the data file apart from this readme. 