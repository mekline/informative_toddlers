library(tidyverse)
library(lme4)

# load in the data frames relevant to both hypotheses
trial_data_h1 <- read.csv("data.csv") %>%
  as_tibble() 

trial_data_h2 <- read.csv("trial_data_h2.csv") %>%
  as_tibble() 

# make a seperate data frame for each model (technically not necessary but :p)
h1_kids <- trial_data_h1 %>%
  select(id = child_id, 
         inform = response_included_informative, 
         uninform = response_included_uninformative, 
         selective = inf_uninformative_diff,
         session_id) %>%
  filter(selective == 1)

h2a_kids <- trial_data_h2 %>%
  select(id = child_id, 
         inform = response_included_info_noun,
         uninform = response_included_uninformative_noun,
         selective = inf_uninformative_diff) %>%
  filter(selective == 1)

# saying subject in the agent ambig
h2b_kids <- trial_data_h2 %>%
  select(id = child_id,
         inform = response_included_info_noun,
         uninform = response_included_uninformative_noun,
         selective = inf_uninformative_diff,
         response_included_subject,
         stimulus_condition) %>%
  filter(selective == 1)

# saying object in patient ambig
h2c_kids <- trial_data_h2 %>% 
  select(id = child_id,
         inform = response_included_info_noun,
         uninform = response_included_uninformative_noun,
         selective = inf_uninformative_diff,
         response_included_object,
         stimulus_condition) %>%
  filter(selective == 1)

# special Laura request: run H1 BUT without the cg trials
h3_kids <- trial_data_h1 %>% 
  select(id = child_id, 
                  inform = response_included_informative, 
                  uninform = response_included_uninformative, 
                  selective = inf_uninformative_diff,
                  stimulus_condition) %>%
  filter(selective == 1,
         stimulus_condition %in% c("agent_ambig","patient_ambig"))
         



# models
h1_kids_model <- glmer(inform ~ 1 + (1|id), family = "binomial", data = h1_kids)
h2a_kids_model <- glmer(inform ~ 1 + (1|id), family = "binomial", data = h2a_kids)
h2b_kids_model <- glmer(response_included_subject ~ 1 + stimulus_condition + (1|id), family = "binomial", data = h2b_kids)
h2c_kids_model <- glmer(response_included_object ~ 1 + stimulus_condition + (1|id), family = "binomial", data = h2c_kids)
h3_kids_model <- glmer(inform ~ 1 + (1|id), family = "binomial", data = h3_kids)
  
log.odds.to.prob <- function(x){
  exp(x) / (1 + exp(x))
}

# summaries!

# H1 summary p-val .0002*
summary(h1_kids_model)
# H2a summary p-val is 0.12
summary(h2a_kids_model)
# H2b summary p-val 0.186
summary(h2b_kids_model)
# H2c summary p-val 0.186
summary(h2c_kids_model)
# Special H3 summary p-val 0.0107*
summary(h3_kids_model)

# This is a comparison of the log-odds of being informative to 0, where log-odds of 0 is the same as probability = .5.
# So a significant result here tells you that the probability of being informative is not .5.

# Log odds of the error bars
confint(h1_kids_model, method = "Wald") 
confint(h2a_kids_model, method = "Wald") 
confint(h2b_kids_model, method = "Wald") 
confint(h2c_kids_model, method = "Wald") 

# making tables to put into the plots, the estimate is the beta val from summary and the cis are from the confint above
plot_data_h1 <- tibble(val = "Selective kids",
                    estimate = log.odds.to.prob(-0.8342),
                    lower.ci = log.odds.to.prob(-1.274363),
                    upper.ci = log.odds.to.prob(-0.3940703))
plot_data_h2a <- tibble(val = "Selective kids",
                        estimate = log.odds.to.prob(-0.3814),
                        lower.ci = log.odds.to.prob(-0.8618767),
                        upper.ci = log.odds.to.prob(0.09914156))
# may need to redo this if we settle on doing only selective kids for this one
plot_data_h2b <- tibble(val = "Selective kids",
                        estimate = log.odds.to.prob(9.163e-01),
                        lower.ci = log.odds.to.prob(0.08474831),
                        upper.ci = log.odds.to.prob(1.7478331))
# may need to redo this if we settle on doing only selective kids for this one
plot_data_h2c <- tibble(val = "Selective kids",
                        estimate = log.odds.to.prob(-0.2699),
                        lower.ci = log.odds.to.prob(-1.160630),
                        upper.ci = log.odds.to.prob(0.6207853))

# H1 plot
ggplot(plot_data_h1, aes(x = val, y = estimate)) +
  geom_errorbar(aes(ymin = lower.ci,
                    ymax = upper.ci), width = .05) +
  geom_point(size = 5, shape = 23, fill = "white") +
  ylim(0,1) +
  theme_bw() +
  labs(x = "", y = "Probability of being informative (among selective kids)") +
  theme(text = element_text(size = 14))


# H2a plot
ggplot(plot_data_h2a, aes(x = val, y = estimate)) +
  geom_errorbar(aes(ymin = lower.ci,
                    ymax = upper.ci), width = .05) +
  geom_point(size = 5, shape = 23, fill = "white") +
  ylim(0,1) +
  theme_bw() +
  labs(x = "", y = "Probability of being informative in ambiguous trials (among selective kids)") +
  theme(text = element_text(size = 14))

# H2b plot
ggplot(plot_data_h2b, aes(x = val, y = estimate)) +
  geom_errorbar(aes(ymin = lower.ci,
                    ymax = upper.ci), width = .05) +
  geom_point(size = 5, shape = 23, fill = "white") +
  ylim(0,1) +
  theme_bw() +
  labs(x = "", y = "Probability of being informative in ambiguous trials (among selective kids)") +
  theme(text = element_text(size = 14))

# H2c plot
ggplot(plot_data_h2c, aes(x = val, y = estimate)) +
  geom_errorbar(aes(ymin = lower.ci,
                    ymax = upper.ci), width = .05) +
  geom_point(size = 5, shape = 23, fill = "white") +
  ylim(0,1) +
  theme_bw() +
  labs(x = "", y = "Probability of being informative in ambiguous trials (among selective kids)") +
  theme(text = element_text(size = 14))
