###############################
#		DOCKER COMMANDS
###############################

TAG ?= latest
TARGET ?= development
PROJECT ?= portfolio
COMPOSE := TAG=$(TAG)-$(TARGET) TARGET=$(TARGET) docker -D compose -p $(PROJECT)

up:
	@$(COMPOSE) -f docker-compose.yaml up --build -d

up-fg:
	@$(COMPOSE) -f docker-compose.yaml up --build

down:
	@$(COMPOSE) down

start:
	@$(MAKE) up -d

stop:
	@$(COMPOSE) stop

restart:
	@$(MAKE) down
	@$(MAKE) up

top:
	@docker compose top


.PHONY: up up-foreground down start stop restart top