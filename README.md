# Faces (Cultural and Sports) Event - FCRIT College

## Overview
This repository contains the code for the Faces Event website, which is dedicated to showcasing both cultural and sports events at our college. The project was designed in Figma, and its implementation is divided into frontend and backend components.

## Design
The design of the website was meticulously crafted using Figma to ensure an attractive and user-friendly interface that reflects the vibrant spirit of our college's cultural and sports events. Link to [Figma](https://www.figma.com/file/Ht14lagBlajIk2jRYy2iVp/FACES-2023?type=design&node-id=0-1&mode=design&t=fwSObRzHWRFTE9T9-0)

## Frontend
The frontend of the website was developed using React.js, a popular JavaScript library for building user interfaces. To enhance its functionality, various npm packages were integrated to provide a seamless user experience.

## Backend
The backend of the Faces Event website was implemented using Django, a high-level Python web framework known for its robustness and versatility. The backend code is hosted in a separate repository, which can be found [here](https://github.com/jayesnc2512/facesBackend).

## Connection Between Frontend and Backend
To ensure communication between the frontend and backend, Axios, a promise-based HTTP client, was used to make API requests.

## Deployment
Both the frontend and backend of the website were deployed on Google Cloud. The deployment setup includes:

- **Frontend Server**: It is connected via tmux to prevent shutdown when the laptop is turned off.

- **Backend Server**: It is connected via Nginx and Gunicorn for efficient handling of incoming requests. You can learn more about Nginx and Gunicorn in this [DigitalOcean tutorial](https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-22-04).

## Domain and SSL Certificate
The website is accessible via the domain [faces.fcrit.ac.in](https://faces.fcrit.ac.in), which was configured by the college faculty. An SSL certificate was obtained to ensure secure and encrypted communication. The certificate was set up using the following commands:

```shell
sudo apt-get install python3-certbot-nginx
sudo apt-get install certbot
sudo certbot --nginx
```

## Team
This project was brought to life by the collaborative efforts of the following team members:
- Savio
- Tahir
- Mathew
- Jayesh
- Aniket
- Chandresh
- Agrima
- Aniruddha

## Video Demo
You can watch a video demo of the website below

https://github.com/tahir-1134/faces-frontend/assets/91362589/2067db93-8ccc-4a46-a3d1-1b57ad960b6a



Thank you for visiting the Faces Event repository. We hope you enjoy exploring our work!
