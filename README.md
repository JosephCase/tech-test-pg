# Overview

The app is split into 3 sections

- Header
- Search details
- Property details

Considering the simplicity of the app I didn't go over the top with making things too generic or global. When scaling it would be a case of understanding which are the common elements or behaviours and encapsulating them in a way that they be re-used. However in this view each section appeared to have fairly unique elements and behaviours, so I left them in-situ.

I started the app quickly in JS and was thinking to switch to typescript, but considering that there are not many props or data moving around, it didn't really seem worth it. Usually I prefer working with typescript though.

I didn't write any tests, again without too much data it didn't seem that valuable, especially considering that from the description I understood that this should be a quick exercise.