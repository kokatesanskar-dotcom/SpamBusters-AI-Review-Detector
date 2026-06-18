# SpamBusters: Fake Review Detector

**Stop being fooled by bot-generated praise.**. 
SpamBusters is a Chrome extension that detects fake, AI-generated, and suspicious product reviews in real-time. It uses a sophisticated hybrid system combining a custom heuristic scoring engine with the power of **Google Gemini 1.5 Flash**.


## The Problem

Online shopping relies heavily on social proof, but the rise of LLMs has made it nearly impossible to distinguish between a genuine customer and an AI-generated bot review. Users are often misled by "10/10" ratings that are entirely fabricated.SpamBusters helps users evaluate review authenticity directly on the page, saving time and money.

## Demo-Video Link-
https://youtu.be/4ivGEatwJm8?si=2QhOTWH0dauhBMsK

## Installation and setup

### 1.Installation:
-Clone this repository: git clone [Your Repo URL]
-Open Chrome and navigate to chrome://extensions/.
-Enable Developer Mode (top right).
-Click Load Unpacked and select the project folder.

### 2.API Setup
 You must add your own Gemini API key in popup.js at line 144 to enable the AI features.

## The Problem

Online shopping relies heavily on social proof, but the rise of LLMs has made it nearly impossible to distinguish between a genuine customer and an AI-generated bot review. Users are often misled by "10/10" ratings that are entirely fabricated.

## Key Features

-Real-time analysis of reviews
-AI Review Auditing: Leverages the Gemini 1.5 Flash model to perform a deep-dive analysis of review sentiment 
 and structure.
-Hybrid Scoring Engine: Combines AI verification with a heuristic model that checks for first-person language, 
 physical context, and suspicious marketing phrases.
-Visual Authenticity Graph: Provides an instant bar chart of review "Trust Scores" within the extension popup.
-On-Page Highlighting: Directly highlights suspicious keywords (Red) and AI phrases (Blue) on the product page.

## Tech Stack

-Platform: 	Chrome Extension (Manifest V3)
-Frontend:	HTML5, CSS3, JavaScript
-AI Backend:	Google Gemini 1.5 Flash API
-Permissions:	Scripting, ActiveTab

## How it Works: The Scoring Logic

-Unlike simple keyword blockers, SpamBusters uses a weighted scoring system:
-Human Signals (+): Points awarded for first-person pronouns ("I", "my"), mentions of physical sensations 
 ("sweat", "grip"), and casual typos.
-Bot Flags (-): Points deducted for marketing jargon ("mind blowing", "must buy") or formal AI transition 
 phrases ("in conclusion", "to summarize").
-AI Verification: If a review is deemed "Suspicious" by the heuristic model, it is sent to Gemini AI for a final 
 audit.


## Challenges:

-The biggest challenge was scraping dynamically loaded reviews from Amazon's complex CSS classes without 
 breaking the page layout.
-One other challenge was creating the rules for the scoring in the heuristic model.

## Future Scope:
 We plan to add:
 -Review authenticity dataset training
 -Multi-browser support
 -Cross-platform review comparison
 -Add behavioural sforensics of reviewers



