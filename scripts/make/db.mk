.PHONY: db db-reset db-setup db-seed

db: db-reset db-setup db-seed

db-reset:
	docker-compose exec swarm-interactive-db /tmp/mysql/bin/reset

db-setup:
	docker-compose exec swarm-interactive-db /tmp/mysql/bin/setup

db-seed:
	docker-compose exec swarm-interactive-db /tmp/mysql/bin/seed

