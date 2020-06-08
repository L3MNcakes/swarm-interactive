.PHONY: build logs start stop clean status

build:
	docker-compose build

logs:
	docker-compose logs

logs-ui:
	docker-compose logs --follow swarm-interactive-ui

start:
	docker-compose up -d

stop:
	docker-compose stop

clean:stop
	docker-compose down -v --remove-orphans

status:
	docker-compose ps
