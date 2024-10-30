import React, {useEffect} from 'react';

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
  useEffect(() => {
    document.documentElement.style.setProperty('--background', '#565351');
  }, []);
  return (
    <div id='exp-page'>

      <section>
        <div>
          

        </div>
        <div>

        </div>

      </section>

      <section>

      </section>

      

      
      
    </div>
  )
}

export default Experience