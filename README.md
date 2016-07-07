# Monterail technical review

###Fron-End Development Tools

**Gulp** - The streaming build system<br>
**Knockout JS** - dynamic JavaScript UIs with the Model-View-View Model (MVVM) pattern<br>
**SCSS** - stylesheet language<br>
**jQuery** - JavaScript library<br>

###Task 1: Implement views

I have managed to implement all views. If you want to open the "profile" view just click on avatar. When it comes to the "single question" it just need to hit on one of the question headers. I let myself to use different images baceuse I could not handle with cutting images out of png files.

###Task 2: Make them responsive

I was able to apply RWD for two views, for "base" view and for "profile" view. Unfortunately I did not manage to apply responsive view for "single question view". 

###Task 3: Connect modal to users

The user profile modal has been applied for users on "base" view site. You can also display modal on the "single question" view but it does not contain any data. The reason is that all data in modal are downloaded from Knockout model and I could not apply multiple bindings.

###Task 4: Use templates

For this purpose I used Knockout JS. Despite the fact that I really would like to learn Angular I decided to choose Knockout because I had a chance to work with this UIs before. All data resides in main.js file. I tried to use templetes for almost every place that can hold varying content. As I wrote earlier I could not apply data from collections for modal in "single question" view because of multiple VieModel apply binding error.

###Task 5: Add pagination and sorting
:(

###Task 6: Add search

Search bar was made 
