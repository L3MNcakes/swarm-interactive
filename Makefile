SOURCE := $(shell git rev-parse --show-toplevel)

include $(SOURCE)/scripts/make/docker.mk
include $(SOURCE)/scripts/make/protobuf.mk
include $(SOURCE)/scripts/make/db.mk
include $(SOURCE)/scripts/make/server.mk
