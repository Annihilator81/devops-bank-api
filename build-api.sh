#!/usr/bin/env bash

sudo docker-compose down
echo "Build..."
sudo docker build -t devops/bank-api -f Dockerfile.api .
echo "Compose..."
sudo docker-compose -f docker-compose.api.yml up -d
echo "Api launch"

