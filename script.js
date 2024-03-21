// Function to toggle the navigation and hamburger menu
function toggleMenu() {
  const nav = document.querySelector('nav ul')
  nav.classList.toggle('active')
  console.log(111)

  // Toggle the hamburger button content
  const hamburger = document.querySelector('.hamburger')
  if (nav.classList.contains('active')) {
    hamburger.innerHTML = '&times;' // Change to '×' when the menu is active
  } else {
    hamburger.innerHTML = '&#9776;' // Change back to '☰' when the menu is inactive
  }
}

// Add an event listener to toggle the menu and button content
document.querySelector('.hamburger').addEventListener('click', toggleMenu)

// form
function clearForm(event) {
  const form = document.getElementById('contact-form')

  // Clear form fields
  form.reset()

  // Clear error messages
  clearErrorMessages()
}

function displayErrorMessage(elementId, errorMessage) {
  const errorElement = document.getElementById(elementId)
  errorElement.textContent = errorMessage
}

function clearErrorMessages() {
  // Clear all error messages
  const errorElements = document.querySelectorAll('.error-message')
  errorElements.forEach((element) => (element.textContent = ''))
}

function submitForm() {
  event.preventDefault() // Prevent the default form submission

  // Get form data
  const formData = new FormData(document.getElementById('contact-form'))
  const name = formData.get('name')
  const email = formData.get('email')
  const qualification = formData.get('qualification')
  const userMessage = formData.get('message')
  const phone = formData.get('phone')

  // Clear previous error messages
  clearErrorMessages()

  // Validation flags
  let formValid = true

  // Validate name (not empty)
  if (!name.trim()) {
    formValid = false
    displayErrorMessage('name-error', 'Please enter your name.')
  }

  // Validate email (format)
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  if (email.trim() && !email.match(emailRegex)) {
    formValid = false
    displayErrorMessage('email-error', 'Please enter a valid email address.')
  }

  const phoneRegex = /^(02|03|04|05|06|07|08)\d{8}$/
  if (phone.trim() && !phone.match(phoneRegex)) {
    formValid = false
    displayErrorMessage(
      'phone-error',
      'Please enter a valid phone number (e.g.,0234567899).'
    )
  }

  // Validate userMessage (not empty)
  if (!userMessage.trim()) {
    formValid = false
    displayErrorMessage('message-error', 'Please enter a message.')
  }

  if (formValid) {
    // Define variables for the message content and link based on the selected qualification
    let messageContent = ''
    let link = ''

    switch (qualification) {
      case 'IT':
        messageContent = 'IT Qualification Information'
        link =
          'https://www.tafensw.edu.au/course-areas/information-and-communication-technology/courses/certificate-iv-in-information-technology--ICT40120-01'
        break
      case 'Nursing':
        messageContent = 'Nursing Qualification Information'
        link =
          'https://www.tafensw.edu.au/course-areas/healthcare/courses/diploma-of-nursing--HLT54121-01'
        break

      case 'Construction':
        messageContent = 'Construction Qualification Information'
        link =
          'https://www.tafensw.edu.au/course-areas/building-construction-and-trades/courses/certificate-ii-in-construction--CPC20120-01'
        break
      case 'Finance':
        messageContent = 'Finance Qualification Information'
        link =
          'https://www.tafensw.edu.au/course-areas/accounting-and-finance/courses/certificate-iii-in-financial-services--FNS30122-01'
        break
      case 'Childcare':
        messageContent = 'Childcare Qualification Information'
        link =
          'https://www.tafensw.edu.au/course-areas/education-and-training/courses/certificate-iii-in-early-childhood-education-and-care--CHC30121-01'
        break
      case 'Accounting':
        messageContent = 'Accounting Qualification Information'
        link =
          'https://www.tafensw.edu.au/course-areas/accounting-and-finance/courses/certificate-iv-in-accounting-and-bookkeeping--FNS40222-01'
        break
    }

    // Create the message with the link
    const message = `Hello ${name}, thank you for your interest in ${qualification}. Someone will reply to you shortly. Here is the course information link to learn more about it: <a class="message-link" href="${link}">${messageContent}</a>`

    // Hide the form and display the message
    document.getElementById('contact-form').style.display = 'none'

    const messageDiv = document.getElementById('message')
    messageDiv.style.display = 'block'
    const messageContentDiv = document.getElementById('message-content')
    messageContentDiv.innerHTML = message

    return false // Prevent the form from being submitted
  }
}

// qualifications info
function displayInfo() {
  if (event.target.id === 'IT') {
    info =
      'IT Qualification info<br> Fees:$8,150-$11,610<br>Duration:6months-12months'
  } else if (event.target.id === 'Construction') {
    info =
      'Construction Qualification info<br> Fees:$8,150-$11,610<br>Duration:7months-13months'
  } else if (event.target.id === 'Nursing') {
    info =
      'Nursing Qualification info<br> Fees:$8,150-$11,610<br>Duration:4months-11months'
  } else if (event.target.id === 'Finance') {
    info =
      'Finance Qualification info<br> Fees:$8,150-$11,610<br>Duration:5months-11months'
  } else if (event.target.id === 'Childcare') {
    info =
      'Childcare Qualification info<br> Fees:$8,150-$11,610<br>Duration:8months-13months'
  } else if (event.target.id === 'Accounting') {
    info =
      'Accounting Qualification info<br> Fees:$8,150-$11,6106<br>Duration:9months-14months'
  } else {
    return
  }
  document.getElementById('display').innerHTML = info
}

const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')
if (slider) {
  const indicators = document.querySelectorAll('.indicator')
  let currentSlide = 0
  let interval
  function showSlide(index) {
    const slideWidth = slider.clientWidth
    slider.style.transform = `translateX(-${index * slideWidth}px)`
  }

  // function showSlide(index) {
  //   slider.style.transform = `translateX(-${index * 100}%)`
  // }

  function setActiveIndicator(index) {
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index)
    })
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length
    showSlide(currentSlide)
    setActiveIndicator(currentSlide)
  }

  function startAutoPlay() {
    interval = setInterval(nextSlide, 3000)
  }

  function stopAutoPlay() {
    clearInterval(interval)
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentSlide = index
      showSlide(currentSlide)
      setActiveIndicator(currentSlide)
      stopAutoPlay()
    })
  })

  slider.addEventListener('mouseenter', stopAutoPlay)
  slider.addEventListener('mouseleave', startAutoPlay)

  startAutoPlay()

  const leftArrow = document.querySelector('.left-arrow')
  const rightArrow = document.querySelector('.right-arrow')

  leftArrow.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length
    showSlide(currentSlide)
    setActiveIndicator(currentSlide)
    stopAutoPlay()
  })

  rightArrow.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length
    showSlide(currentSlide)
    setActiveIndicator(currentSlide)
    stopAutoPlay()
  })
}

// Get all the links on the page and add the 'target="_blank"' attribute
document
  .querySelectorAll('a')
  .forEach((link) => link.setAttribute('target', '_blank'))
