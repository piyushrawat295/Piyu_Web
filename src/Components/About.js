import React from 'react';

export default function About() {
  return (
    <>
        <div class="container col-xxl-10 px-3 py-2">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img src="10.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">About Web Developement</h1>
          <p class="lead">Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites. Choosing the appropriate technology at the same time for the various industries' needs is challenging. We can assist you with this. Visit our local web services at Web Design Near Me and schedule a free consultation right away.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Read</button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">view</button>
          </div>
        </div>
      </div>
    </div>

  
  <div class="container px-4 py-5" id="custom-cards">
    <h2 class="pb-2 border-bottom">Our Speciality</h2>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col">
      <div className="card card-cover h-100vh overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('17.jpg')" }}>
  
      </div>

          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Soft Web Design Skills To Set You Apart</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src="11.jpg" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white"/>
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em"><use href="#geo-fill"></use></svg>
                <small>Earth</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use href="#calendar3"></use></svg>
                <small>3d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col">
      <div className="card card-cover h-100vh overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('20.jpg')" }}>
  
      </div>

          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">The skillset of SEO, digital marketing</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src="12.jpg" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white"/>
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em"><use href="#geo-fill"></use></svg>
                <small>Hindustan</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use href="#calendar3"></use></svg>
                <small>4d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col">
      <div className="card card-cover h-100vh overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('3.jpg')", color: 'white', fontSize: '16px' }}>
      </div>

          <div class="d-flex flex-column h-100vh p-5 pb-3 text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">we teach visual design(digital portal)</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img src="13.jpg" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white"/>
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em"><use href="#geo-fill"></use></svg>
                <small>California</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use href="#calendar3"></use></svg>
                <small>5d</small>
              </li>
            </ul>
          </div>
        </div>
      
    
  

</>
  );
}
