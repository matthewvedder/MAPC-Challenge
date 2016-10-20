# MAPC-Challenge
A form built in React with front end validations and a Rails API.

## Setup
Clone the repository and run:
  + npm install  
  + npm start  
  + visit localhost:8080  
  
...and you should be all set! The Rails API is hosted on Heroku, so no setup needed there.

## Summary
I decided to use React to build this form so that I could leverage validations on the front end to ensure quality user experience. For the 
back end, I built a very small Rails app in API mode with a User model, validations, and a users controller that is routed to serve as the
end point. You can check out the code for the API [here](https://github.com/veddster/MAPC-Challenge-API).

I used the [formsy](https://github.com/christianalfoni/formsy-react) extension, which provides many pre-built validations. I chose to use
formsy so that I could focus less on boilerplate code, and more on implementing specific features.

The form will not let the user submit until all fields are valid. This way, we can avoid having users submit data and wait for it
to hit the back end, only to find that their inputs were invalid. The validation messages for the email and password fields appear while 
there is input in a field and the input is invalid. They are removed immediately when the input becomes valid.

After the form is submitted,the rails api returns an object: { email_exists: < bool > }. If the email already exists in the database, the 
react app updates the Form Component's state with an error message including user specific data. If the email does not exist, the user is
redirected to a thank you page. Before this happens, the form component sets the router's state to include the user's first name and email,
giving access to the pertinent user data in the ThankYou component.

## Time Breakdown - total time: 6 hours 
 + Design 1 hour
 + Front End 2.5 hours
 + Back End 1 hour
 + Linking front and back ends 1 hour
 + Documentation .5 hours
 
## React Components
#### Input 
  * Handles data and validations for individual inputs
  * Displays error messages

#### InputContainer
  * Allows for grouping of multiple Inputs
  * Provides title

#### MyForm 
  * Implements formsy extension
  * Contains Inputs inside of multiple InputContainers
  * Makes asynchronous call to Rails API
  
#### MainContainer
  * Provides optional title and bootstrap class
  * This could be refactored with the InputContainer to create one Container component
  
#### ThankYou
  * Renders the thank you page
  
