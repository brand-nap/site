import React from 'react'

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> {observer.observe(el)});

const Experience = () => {
  return (
    <div id='exp-page'>

      <section className='hidden' id='exp-edu'>
        <h3>Education</h3>
        <p>I'm currently majoring in Computer Science with a focus on Deep Learning applications at the University of Colorado - Boulder. In my time at CU, I've covered fine-tuning hyperparameters for models, scraping and denoising data, and measuring the validity of Deep Learning models.</p>
        <p id='sko'>Sko Buffs!</p>
        <ul>
          <li>BS: Computer Science</li>
          <li>Graduate: Spring, 2026</li>
        </ul>
        <div className='edu-icons'>
          <img src="/pics/sko_buffs.png" alt="" />
          <img src="/pics/buff_medallion.png" alt="" />
        </div>
      </section>

      <section className='hidden' id='exp-certs'>
        <h3>Certifications</h3>
        <p>While completing my Bachelor's, I also completed multiple certifications and bootcamps on Deep Learning and Data Science with companies like NVIDIA, IBM, and Tech Elevator</p>
        <ul>
          <li><img src="" alt="" /><a href="https://learn.nvidia.com/certificates?id=f51d52195d8a436ea4ece4d99517620c">Building Transformer-Based Natural Language Processing Applications</a></li>
          <p>a week long course using </p>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className='cert-icons'>
          <img src="/pics/sko_buffs.png" alt="" />
          <img src="/pics/buff_medallion.png" alt="" />
        </div>
        
      </section>

      <section className='hidden' id='exp-pro'>
        <h3>Professional Experience</h3>
        
      </section>
      
    </div>
  )
}

export default Experience