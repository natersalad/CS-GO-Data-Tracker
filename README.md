
![csgoThumbnail](https://github.com/natersalad/CS-GO-Data-Tracker/assets/4565342/9f6c6559-aa1d-4be6-9b66-fa427183c0d0)

# DSA-Project-3
Team Name: Bit Smashers
Team Members: Shuqing Chen, Nathan Wand, Nicolas Prothero
Project Title: CS:GO Data Tracker
Github: https://github.com/ddr4x/DSA-Project-3
Video: https://www.youtube.com/watch?v=Y1WVu4rH7d8

Problem
With this project, we are trying to solve the issue of figuring out the best loadout to use in the tactical shooter game, CS:GO, depending on what map the player is on and what criteria they want to maximize or minimize. It can be difficult to figure out what the best loadout is on every map in the game, so we want to provide an app that displays the top guns to use for achieving different goals. 

Motivation
CSGO is a hyper competitive game by nature and it can be very frustrating losing rounds or whole games. Loading up for a game is a 30 min - 1 hour time commitment so it is important to know what the best strategy is depending on the map. Our group seeks to minimize the frustration of losing by ensuring users have knowledge of which guns are better for achieving certain things.

Features Implemented
Our goal for this project was to create a web app style interface that allows the users to select what type of data they want to sort by. The users will start off by selecting what map they want to pull data from, then selecting what criteria to sort by (total damage, weapon name), and finally picking two sorting algorithms to see runtime comparisons with. After sorting the data, the top weapons will be displayed on the screen for the user. 

Description of Data
The data we are using is from a public dataset of CS:GO competitive matchmaking information found on Kaggle. It is a csv file of over 100,000 rows, with each row being a damage entry that contains information on weapon used, armor damage, health damage, and more. This dataset contains over 900,000 rows, which we condensed down to 100,000 for the sake of sorting speed for the demonstration. The initial data is not sorted by any of the metrics we are testing such as damage dealt, so we can assume that the passed in data for sorting is randomized. 

Tools
For our project, we are using HTML, CSS, and Javascript. The front end uses HTML and CSS for styling, the backend is composed entirely of Javascript. We used node.js for reading and exporting the dataset information and express.js for the backend server which allowed our front and back end to communicate.

Algorithms
Our group implemented different sorting algorithms for the user to compare. These included insertion, selection, bubble, merge, heap, and quicksort, and shell sort.

Additional Data Structures/Algorithms
For parsing and reading in the data from the csv file, our group decided to store the entries in an array, since this made the most sense to apply sorting algorithms to. The actual entries stored in the array were custom class objects we created that represented a row of data in the data set. The custom classes were named damageOccurence and damageOccurenceEntries which held an array of damageOccurence objects. Each damageOccurence object stores information on: weapon name, hp damage, armor damage, hitbox, total damage. These fields are possible parameters that the user can choose to sort by. 

Roles
Nicolas took responsibility of the front end implementation and design. Shuqing was responsible for implementing the sorting algorithms, and Nathan was responsible for creating the custom objects classes and parsing the input data. For implementing the backend express.js server, we all worked together to figure it out. 

Analysis
Some changes that we made from the initial project proposal were removing the headshot percentage and round type statistics, and writing the sorting algorithms all in Javascript instead of with C++. With how the data was set up and how we designed our custom objects, tracking the headshot percentage of each weapon would have required the use of a map type container which we felt took away from the sorting focus of the project. Displaying the data by round type would have reduced the number of elements in each sort operation which did not allow for the time differences of sorting algorithms to be properly showcased. 
We ultimately decided to do everything in HTML, CSS, and Javascript because none of us had experience with setting up a backend server for the C++ scripts to send data to the front end. We were more comfortable and experienced with using an express.js server, so doing everything in Javascript made the most sense.
We also changed how to represent the results of the sorting algorithms. Originally, we had wanted to create line graphs to show the results, but this did not make sense to do in the context of our problem. The sorting only occurs on the passed in array, so our team decided displaying actual run times made more sense and provided a more direct and clear comparison for the user to see. This avoids us having to run the sorting algorithms on multiple arrays of different sizes for the output. While making this change, we also decided to just display either the highest or lowest weapon after sorting to keep the output design simple and clean.
For the sorting algorithms, the runtime complexity are as follow: insertion sort O(n^2), selection sort O(n^2), bubble sort O(n^2), heap sort O(nlogn), merge sort O(nlogn), quick sort O(nlogn), shell short O(n^5/4). In this case, n is the number of elements in the array that needs to be sorted, or the number of damage occurrences entries.

Reflection
Overall, this was a very fun project to work on. We chose CS:GO data to sort because we all played the game growing up and it made the project cooler to work on for us. We had some experience with Javascript before this project, but we ran into many issues that forced us to learn on our own. This was a very educational experience and we all feel more confident in our development skills with Javascript. 
We faced many challenges working on this, with a major one being figuring out how to implement a backend server with C++ scripts. After researching, our group came to the consensus that it would be easier to implement a server with express.js in Javascript since we had exposure to this prior. This influenced us to scrap C++ and do all the sorting in Javascript. Another challenge we faced had more to do with learning Javascript; we realized that when passing the array into the sort functions, Javascript by default “passes by reference” so we had to lookup how to create a shallow copy of an array using the spread operator. 
Shuqing: I became more comfortable coding in Javascript and working with import and export function in Javascript. 
Nathan: I learned how to use node.js to read in csv data and how to set up an express.js server for connecting front and backends. 
Nicolas: I learned how to change HTML values using a Javascript file and connecting front end actions to a backend server. 
If we were to start once again as a group, we would start with connecting the front end and back end first, because figuring it out at the end got very messy and stressful. Also, we would use Typescript since Javascript is a pain to deal with at times. Another big issue we ran into that we would address at the start is with the workflow of this project. From the start, each of us should have had our own working branch to avoid conflicts when pushing to the main branch of the Github repo.

References
https://medium.com/featurepreneur/develop-a-backend-server-for-your-application-using-express-29deeae40ed1
https://nodejs.org/en/docs
https://expressjs.com/en/guide/routing.html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Aman’s Lecture Slides
