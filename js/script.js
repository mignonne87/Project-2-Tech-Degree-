/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   

const studentList = document.querySelectorAll('li'); // global variables that store elmements

const itemsPerPage = 10;  // 10 students per page


const showPage = (studentList,pageNumber) => {   
   let endIndex = (pageNumber * itemsPerPage);
   let startIndex = (endIndex - itemsPerPage); 
   for (let i = 0; i < studentList.length; i++) {

      if (i >= startIndex && i < endIndex) {
         studentList[i].style.display = 'block'; // show the studentList 
      } else { 
         studentList[i].style.display = 'none'; // hide the StudentList

      }
   
   } 
};
showPage(studentList, 1)  // calls ShowPage StudentList
   

const appendPageLinks = studentList => {   // appendPageLinks studentList for pagination

   let div = document.createElement("div");
   let ul = document.createElement("ul");
   let page = document.querySelector('.page');
   
   let getPageNumber = Math.ceil(studentList.length / itemsPerPage) // pages needed from studentList divided by items per page
   
   div.setAttribute('class', 'pagination');
   page.appendChild(div);
   div.appendChild(ul);


   for(let j = 0; j < getPageNumber; j++) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.textContent = `${j + 1}`;

      if (j === 0) {
         a.className = "active";
      }  
      li.appendChild(a);
      ul.appendChild(li);
   }
   ul.addEventListener("click", e => {     // show a different student list on each page
      const link = e.target;
      if (link.tagName === "A") {
         let pageNumber = link.textContent;
         const links = document.querySelectorAll(".pagination a");

         for (let l = 0; l < links.length; l++) {
            links[l].classList.remove("active");  // remove class from link

         }
         link.className = "active";
         showPage(studentList, pageNumber);

      }
      
   });
};
         appendPageLinks(studentList);


 
      


      

    
    


   
   
   



