import React, { useState, useEffect } from 'react';


function setupProfile() {

  // useEffect(() => {
  let currentTab = 0; // Current tab is set to be the first tab (0)
  showTab(currentTab); // Display the current tab

  function showTab(n) {
    if (typeof document !== 'undefined') {
      let x = document.getElementsByClassName("step");
      if (n < 0 || n >= x.length) {
        return; // don't do anything if n is out of bounds
      }
      x[n].style.display = "block";
      if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
      } else {
        document.getElementById("prevBtn").style.display = "inline";
      }
      if (n == x.length - 1) {
        document.getElementById("nextBtn").innerHTML = "Submit";
      } else {
        document.getElementById("nextBtn").innerHTML = "Next";
      }
      // fixStepIndicator(n);

    }
  }


  function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("step");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
      // ... the form gets submitted:
      document.getElementById("signUpForm").submit();
      return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);

  }
  function validateForm() {
    // This function deals with validation of the form fields
    let x, y, i, valid = true;
    x = document.getElementsByClassName("step");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
      if (y[i].value == "") {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
        // and set the current valid status to false
        valid = false;
      }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
      document.getElementsByClassName("stepIndicator")[currentTab].className += " finish";
    }
    return valid; // return the valid status
    return valid; // return the valid status

  }
  function handleNext() {
    nextPrev(1);

  }
  function handlePrev() {
    nextPrev(-1);

  }
  const [image, setImage] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => setImage(event.target.result);
    reader.readAsDataURL(file);
  };
  // function fixStepIndicator(n) {
  //   // This function removes the "active" class of all steps...
  //   let i, x = document.getElementsByClassName("step");
  //   for (i = 0; i < x.length; i++) {
  //     x[i].className = x[i].className.replace(" active", "");
  //   }
  //   //... and adds the "active" class to the current step:
  //   x[n].className += " active";
  // }
  let numTabs = ""

  if (typeof document !== 'undefined') {

    numTabs = document.getElementsByClassName("step").length;

    // Attach event listeners to the previous and next buttons
    document.getElementById("prevBtn").addEventListener("click", handlePrev);
    document.getElementById("nextBtn").addEventListener("click", handleNext);
  }

  // // If the valid status is true, mark the step as finished and valid:
  // if (valid) {
  //   document.getElementsByClassName("stepIndicator")[currentTab].className += " finish";
  // }
  // return valid; // return the valid status


  function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    if (typeof document !== 'undefined') {
      let i, x = document.getElementsByClassName("stepIndicator");
      for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
      }
      //... and adds the "active" class on the current step:
      console.log(n)
      x[n].className += " active";

    }
  }


  // },[]);


  return (
    <>

      <h1 className="text-lg font-bold text-gray-700 leading-tight text-center mt-12 mb-5">Profile setup Form</h1>
      <form id="signUpForm" className="p-12 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8" action="#!">
        {/* start step indicators */}
        <div className="form-header flex gap-3 mb-4 text-xs text-center">
          <span className="stepIndicator flex-1 pb-8 relative">Your Profile</span>
          <span className="stepIndicator flex-1 pb-8 relative">Professional</span>
          <span className="stepIndicator flex-1 pb-8 relative">Years of experience</span>
        </div>
        {/* end step indicators */}

        {/* step one */}
        <div className="step">
          <p className="text-md text-gray-700 leading-tight text-center mt-8 mb-5">Your profile</p>
          <div className="py-10">
            <div className="mb-5 text-center">
              <div className="mx-auto w-32 h-32 mb-2 border rounded-full relative bg-gray-100 mb-4 shadow-inset">
                <img id="image" className="object-cover w-full h-32 rounded-full" src={image} alt="" />
              </div>

              <label
                htmlFor="fileInput"
                className="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                  <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
                Browse Photo
              </label>

              <div className="mx-auto w-48 text-gray-500 text-xs text-center mt-1">Click to add profile picture</div>

              <input
                name="photo"
                id="fileInput"
                accept="image/*"
                className="hidden"
                type="file"
                onChange={handleImageUpload}
              />
            </div>
          </div>

          <div className="mb-6">
            <input type="Username" placeholder="Username" name="username"
              className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200" oninput="this.className = 'w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200'" />
          </div>
          <div className="mb-6">
            <input type="email" placeholder="email" name="email"
              className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200" oninput="this.className = 'w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200'" />
          </div>

        </div>

        {/* step two */}
        <div className="step">
          <p className="text-md text-gray-700 leading-tight text-center mt-8 mb-5">Your profession</p>
          <div className="mb-6">
            <input type="text" placeholder="professional" name="profession"
              className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200" oninput="this.className = 'w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200'" />
          </div>


        </div>

        {/* step three */}
        <div className="step">
          <p className="text-md text-gray-700 leading-tight text-center mt-8 mb-5">How many years of experience do you have?</p>
          <div className="inline-centre rounded-md shadow-sm">
            <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-blue-700 align-middle hover:bg-blue-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-blue-800 dark:hover:bg-blue-800 dark:border-blue-700 dark:text-blue-400">
              0-2
            </button>
            <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-blue-700 align-middle hover:bg-blue-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-blue-800 dark:hover:bg-blue-800 dark:border-blue-700 dark:text-blue-400">
              2-4
            </button>
            <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-blue-700 align-middle hover:bg-blue-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-blue-800 dark:hover:bg-blue-800 dark:border-blue-700 dark:text-blue-400">
              4-6
            </button>
          </div>
          
          <div className="mb-6">
            <input type="text" placeholder="Tell us more" name="Tell us more"
              className="w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200" oninput="this.className = 'w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200'" />
          </div>
        </div>

        {/* start previous / next buttons */}
        <div className="form-footer flex gap-3">
          {/* Render the current tab */}
          <div className="step">
            {/* Your tab content here */}
          </div>

          {/* Previous and Next buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              id="prevBtn"
              className="flex-1 focus:outline-none border border-gray-300 py-2 px-5 rounded-lg shadow-sm text-center text-gray-700 bg-white hover:bg-gray-100 text-lg"
              onClick={handlePrev}
              disabled={currentTab === 0} // Disable previous button on first tab
            >
              Previous
            </button>
            <button
              type="button"
              id="nextBtn"
              className="flex-1 border border-transparent focus:outline-none p-3 rounded-md text-center text-white bg-indigo-600 hover:bg-indigo-700 text-lg"
              onClick={handleNext}
              disabled={currentTab === numTabs - 1} // Disable next button on last tab
            >
              Next
            </button>
          </div>
        </div>
        {/* end previous / next buttons */}
      </form>


      {/* tailwind css */}
      <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" />
      {/* google font */}
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet"></link>
    </>

  )


}



export default setupProfile;
