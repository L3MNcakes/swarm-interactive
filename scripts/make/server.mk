.PHONY: build-server logs-server start-server stop-server

build-server:
	docker-compose build swarm-interactive-server

logs-server:
	docker-compose logs --follow swarm-interactive-server

start-server:
	docker-compose up -d swarm-interactive-server

stop-server:
	docker-compose stop swarm-interactive-server
