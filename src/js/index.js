(function () {
  const getTagsTemplate = (tags) => {
    let tagString = '';
    tags.forEach((item) => {
      tagString += `<div class="tag">${item}</div>`;
    });

    return tagString;
  };
  const getTemplate = (job) => {
    return `<div class="job-card">
      <div class="job-logo">
        <img src="${job.logo}" alt="${job.company}" />
      </div>
      <div class="job-text">
        <h3 class="job-company">${job.company}</h3>
        <h2 class="job-title">${job.name}</h2>
        <div class="job-tags">
        ${getTagsTemplate(job.tags)}
        </div>
      </div>
      <div class="job-cta">
        <button class="btn">Aplicar</button>
      </div>
    </div>;`;
  };

  const setJob = (template) => {
    const jobsListElem = document.querySelector('#jobs');
    console.log(jobsListElem);
    jobsListElem.innerHTML += template;
  };

  const jobs = [
    {
      logo: './assets/img/manage.png',
      company: 'Manage',
      name: 'Senior Frontend Developer',
      tags: ['Frontend', 'React', 'Sass'],
    },
    {
      logo: './assets/img/air.png',
      company: 'Air',
      name: 'Fullstack Developer',
      tags: ['Frontend', 'Backend'],
    },
    {
      logo: './assets/img/insure.png',
      company: 'Insure',
      name: 'Junior Frontend Developer',
      tags: ['Html', 'css', 'js'],
    },
  ];

  jobs.forEach((item) => {
    console.log(item);
    let template = getTemplate(item);
    setJob(template);
  });
})();

/* <div class="job-card">
  <div class="job-logo">
    <img src="./assets/img/manage.png" alt="Manage" />
  </div>
  <div class="job-text">
    <h3 class="job-company">Manage</h3>
    <h2 class="job-title">Senior Frontend Developer</h2>
    <div class="job-tags">
      <div class="tag">Frontend</div>
      <div class="tag">React</div>
      <div class="tag">Sass</div>
    </div>
  </div>
  <div class="job-cta">
    <button class="btn">Aplicar</button>
  </div>
</div>; */
