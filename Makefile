.PHONY: client up down

client: ## Start client server
	cd client && npm run start

up:
	sudo docker-compose up

down:
	sudo docker-compose down