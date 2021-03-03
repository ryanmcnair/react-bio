import axios from 'axios';

const baseUrl = 'https://bio-site-1b4b9.firebaseio.com';

const getAllProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/Projects.json`)
    .then((response) => {
      const projects = [];
      Object.values(response.data).forEach((project) => {
        projects.push(project);
      });
      resolve(projects);
    })
    .catch((error) => reject(error));
});

export default getAllProjects;
