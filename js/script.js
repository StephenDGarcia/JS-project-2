/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   //Start Index = (page parameter * items per page) - items per page
   let startIndex = (page * list.length) - list.length;
   //End Index = page parameter * items per page
   let endIndex = page * list.length;
   //Select the UL element with a class of student-list and assign its value to a variable.
   let studentList = document.querySelector('.student-list');
   //Use the innerHTML property set the HTML content of the student-list variable you just created to an empty string. This will remove any students that might have previously been displayed.
   studentList.innerHTML = '';
   //Loop over the list parameter.
   for ( let i = 0; i < list.length; i++ ) {
   //Inside the loop:
      //Write a conditional statement that checks if the current index (i) is greater than or equal to the start index variable and less than the end index variable.
      if ( i >= startIndex && i <= endIndex) {
      //Inside that conditional:
      //Create the DOM elements needed to display the information for each matching student as you iterate over the list parameter. Here is an example of what the the final version of these elements should look like:
         //Pro Tip: Because you will need to create multiple elements to display the information for each student, you might consider using a template literal for this
      //Insert the elements you have created to the student-list variable you created earlier. The insertAdjacentHTML method and beforeend option works well for this.
      let studentItem = list[i];
      console.log(studentItem);
      
      studentItem.insertAdjacentHTML( beforeend, `
      <li class="student-item cf">
      <div class="student-details">
        <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
        <h3>${list.name}</h3>
        <span class="email">ethel.dean@example.com</span>
      </div>
      <div class="joined-details">
        <span class="date">Joined 12-15-2005</span>
      </div>
    </li>
      `)
      }
   }
 
 console.log(startIndex);
 console.log(endIndex);

};

showPage(data, 1);
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
