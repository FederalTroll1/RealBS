#README

Project Overview
-
This Project acts as a basic Library Management System. The Project builds on
a MERN Web Stack and implements many current DevOp tools, techniques and
principles to allow a user to perform basic CRUD operations on a NoSQL
database.

DevOp Principles
-
The key DevOp topics that this project covers can be seen listed below:

* CI/CD
* Deployment
* Maintainability
* Scalability
* Observability
* Load Balancing
* Security

Running The Project
-
The project uses Docker Containers to run. In order to do this, navigate to the
root directory of the project and run the following command that will run
the docker-compose.yml file.
````
docker-compose up
````
This will then run the Docker Container and navigating to LocalHost:3000 will
display the project where the user is able to interact with the system.

Troubleshooting
-
In the event that there is an issue running the Docker Container you can attempt
the build the Container using the following command.
````
docker-compose build run
````
Failing this support can be found on Docker's Official [Website](https://docs.docker.com/).

Authors
-
George Hayfield (UG).

License
-
George Hayfield (UG) Newcastle University.

