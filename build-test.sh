#!/usr/bin/env bash

sudo docker-compose -f docker-compose.test.yml down
sudo docker build -t devops/bank-api -f Dockerfile.api .
sudo docker build -t devops/bank-api-test -f Dockerfile.test .
sudo cp docker-compose.test.yml docker-compose.yml
sudo docker-compose run --rm -d db node-api
sudo docker-compose run --rm node-api-test
status=$?
echo "Exit status : $status"
sudo rm docker-compose.yml
exit $status
