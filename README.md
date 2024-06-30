The Project is available at : https://course-hub-blue.vercel.app/

# COURSE HUB
A react project created with react redux and integrated with firebase's firestore databse and realtime database.

The Project uses firebase's authentication(SignUp and Login and Signout) funtionalities for this project and navigates to home page conditionally.

Upon Signing in, a User collection is added in the firestore database for relevant information to be fetched and displayed.
Realtime Database contains dummy courses and all its information so that it is easy to interact with the data.

Courses have Enroll and like functions, so if a user enrolls in a course, its database is updated with relevant course.

Upon liking the course, the course likes are updated realtime and fetched from database.


You can simply, browse the deployment at : https://course-hub-blue.vercel.app/
or clone this repo and "npm install" to install all the relevant dependencies.

Upon installtion run the script "npm run start" to start the project. 