#!/usr/bin/env bash

sudo docker-compose down
echo "Build..."
sudo docker build -t devops/bank-api -f Dockerfile.api .
#cp docker-compose.api.yml docker-compose.yml
echo "Compose..."
sudo docker-compose -f docker-compose.api.yml up -d
echo "Api launch"
#rm docker-compose.yml
