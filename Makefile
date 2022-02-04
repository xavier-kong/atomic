.PHONY: client

client: ## Start client server
	cd client && npm run start

server:
	cd server && sudo docker-compose up