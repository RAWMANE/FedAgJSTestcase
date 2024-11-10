SHELL := /bin/bash

PROJECT_NAME := MyReactProject

install:
	@echo "Installing dependencies..."
	npm install

start:
	@echo "Starting the project..."
	npm start

build:
	@echo "Building the project for production..."
	npm run build

test:
	@echo "Running tests..."
	npm test

clean:
	@echo "Cleaning build files..."
	rm -rf node_modules dist build

reinstall: clean install

help:
	@echo "Available commands:"
	@echo "  make install       Install all dependencies"
	@echo "  make start         Start the project (localhost:3000)"
	@echo "  make build         Build the project for production"
	@echo "  make test          Run tests"
	@echo "  make clean         Clean up node_modules and build files"
	@echo "  make reinstall     Clean and reinstall dependencies"