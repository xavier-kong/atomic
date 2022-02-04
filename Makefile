.PHONY: client

client: ## Start client server
	cd client && npm run start

server:
	sudo dockerc-compose up