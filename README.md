
# Introduction

This repository pulls in the src from the  React Automation Studio repository https://github.com/React-Automation-Studio/React-Automation-Studio and acts a test project for  the OPC UA EPICS BRIDGE https://github.com/React-Automation-Studio/OPCUA-EPICS-BRIDGE .


# 1 Installation
The development and production versions of React Automation Studio have been containerized with Docker.

It is advised to only use the containerized version with a Linux environment. (See the FAQ section on other operating systems).




**Prerequisites: git , latest version of docker-ce and docker compose**

# 1 Installation
The development and production versions of React Automation Studio have been containerized with Docker.

It is advised to only use the containerized version with a Linux environment. (See the FAQ section on other operating systems).


Prerequisites: git, latest version of docker-ce and docker compose 

( At the time of writing the system used Docker V20.10.17 and docker compose V2.6.0 )

To install docker-ce on Unbuntu follow:

https://docs.docker.com/engine/install/ubuntu/

It is advised to the follow the Post Installation steps for Linux:

https://docs.docker.com/engine/install/linux-postinstall/


And docker compose (if it is not installed via the previous steps):

https://docs.docker.com/compose/install/compose-plugin/#installing-compose-on-linux-systems


Then first clone this repo:
```bash
git clone --recurse-submodules https://github.com/wduckitt/React-Automation-Studio-Example-OPCUA.git
```


To checkout version 4.0.2 run:
```bash
 git checkout tags/V4.0.2
```



To confirm the correct git submodule version :
```bash
git submodule status
```
Should contain `submodules/React-Automation-Studio (V4.0.2)` in the output for version 4.0.2 .

If not and you previously checked out a different version run:
```bash
git pull --recurse-submodules
```
# 2 Launching the Docker compose files
The systems uses Docker to create isolated production and development environments. There are several docker-compose configuration files.




Will launch the production build with demoIOCs included.


```bash
docker compose  up
```

Will launch the compiled production version with out the demoIOC's and styleguide

```bash

docker compose -f docker-compose-prod-with-demoioc.yml up 

```
Will launch the production build with all the RAS demoIOCs included.


```bash
docker compose -f docker-compose-dev.yml up
```
Will launch the development version with the demoIOC's and styleguide.






**Note**: Any of the above containers can be rebuilt by add **--build** at the end of the command.








# 3 Contributing

Site specific components and app screens should be kept in your repository. If you wish to contribute to the main repository for bug fixes then this must be done in  the main repository at https://github.com/React-Automation-Studio/React-Automation-Studio. If you wish to add in new components then please create them in the staging folder. If the new component requires custom EPICS code then please add it to the demo IOC.

# 4 Contact

Contact us at Github Discussions: https://github.com/React-Automation-Studio/React-Automation-Studio/discussions

# FAQ

### 1.   Which operating systems are supported?

  The client is web based and can be accessed from any modern browser on any modern OS..

  We currently only build and test on Ubuntu and Chrome. We unfortunately don't have the time to test on the other systems. In theory all up to date Linux systems should be supported.

### 2.  Are other systems such as  Windows or Mac OS supported?
  
  The docker containers for RAS run in network  mode host. This is done to enable EPICS to communicate seamlessly with any IOC's on the same subnet as the host. Other OSes such as Windows may not support the host mode and will run in the bridged mode. This may break the communication between the micro services. It is therefore recommended to run the RAS containers on a Linux VM that is minimally running Ubuntu Server. Please ensure the the VM network interface is assigned an IP on the same subnet as your EPICS network in order for communication with the IOC's to occur seamlessly.
