//  Navbar Active Script






document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const sections = document.querySelectorAll("section[id]");
  
    // Smooth scroll on nav link click
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); 
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 70; // Adjust for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  
    // Active nav link underline on scroll
    window.addEventListener("scroll", () => {
      let currentSection = "";
      const scrollPos = window.scrollY + 75; // Adjust for navbar height
  
      sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          currentSection = section.getAttribute("id");
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    });
  });




// Email JS Script

document.getElementById('contact-form').addEventListener('submit',(e)=>{
    e.preventDefault()
    let params = {
        from_name: document.getElementById('full_name').value,
        email_id: document.getElementById('email_id').value,
        message: document.getElementById('message').value
    }
    emailjs.send("service_lg4ldew","template_u1qu5go",params).then(()=>{
        document.querySelector('.thank-you-msg').style.display = "block";
        document.getElementById('full_name').value = ""
        document.getElementById('email_id').value = ""
        document.getElementById('message').value = ""
        setTimeout(()=>{
            document.querySelector('.thank-you-msg').style.display = "none";
        },3500)
    })

})