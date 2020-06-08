.PHONY: protobuf

SOURCE := $(shell git rev-parse --show-toplevel)
PROTOBUF_DIR := $(SOURCE)/protobuf
PROTOBUF_DIST := $(PROTOBUF_DIR)/dist
PROTOBUF_PUBLISH_GO := $(SOURCE)/golang/pkg/protobuf
PROTOBUF_PUBLISH_UI := $(SOURCE)/typescript/swarm-interactive-ui/protobuf

protobuf: protobuf-npm-install protobuf-clean protobuf-mkdir protobuf-build protobuf-publish

protobuf-npm-install:
	npm --prefix $(PROTOBUF_DIR) install --pure-lockfile

protobuf-clean:
	rm -rf $(PROTOBUF_DIST) && \
	rm -rf $(PROTOBUF_PUBLISH_GO) && \
	rm -rf $(PROTOBUF_PUBLISH_UI)

protobuf-mkdir:
	mkdir -p $(PROTOBUF_DIST)

protobuf-build:
	protoc \
	--proto_path=$(PROTOBUF_DIR) \
	--plugin=protoc-gen-ts=$(PROTOBUF_DIR)/node_modules/.bin/protoc-gen-ts \
	--plugin=protoc-gen-grpc=$(PROTOBUF_DIR)/node_modules/.bin/grpc_tools_node_protoc_plugin \
	--js_out="import_style=commonjs:${PROTOBUF_DIST}" \
	--ts_out="service=grpc-node:${PROTOBUF_DIST}" \
	--grpc_out=${PROTOBUF_DIST} \
	--grpc-web_out=import_style=commonjs,mode=grpcwebtext:${PROTOBUF_DIST} \
	--go_out=plugins=grpc:$(PROTOBUF_DIST) \
	`find $(PROTOBUF_DIR)/swarm_interactive -name *.proto | xargs echo`

protobuf-publish:
	cp -R $(PROTOBUF_DIST) $(PROTOBUF_PUBLISH_GO) && \
	cp -R $(PROTOBUF_DIST) $(PROTOBUF_PUBLISH_UI)
