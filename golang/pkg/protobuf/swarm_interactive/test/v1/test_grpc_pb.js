// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var swarm_interactive_test_v1_test_pb = require('../../../swarm_interactive/test/v1/test_pb.js');

function serialize_swarm_interactive_test_v1_TestRequest(arg) {
  if (!(arg instanceof swarm_interactive_test_v1_test_pb.TestRequest)) {
    throw new Error('Expected argument of type swarm_interactive.test.v1.TestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_swarm_interactive_test_v1_TestRequest(buffer_arg) {
  return swarm_interactive_test_v1_test_pb.TestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_swarm_interactive_test_v1_TestResponse(arg) {
  if (!(arg instanceof swarm_interactive_test_v1_test_pb.TestResponse)) {
    throw new Error('Expected argument of type swarm_interactive.test.v1.TestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_swarm_interactive_test_v1_TestResponse(buffer_arg) {
  return swarm_interactive_test_v1_test_pb.TestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TestServiceService = exports.TestServiceService = {
  greet: {
    path: '/swarm_interactive.test.v1.TestService/Greet',
    requestStream: false,
    responseStream: false,
    requestType: swarm_interactive_test_v1_test_pb.TestRequest,
    responseType: swarm_interactive_test_v1_test_pb.TestResponse,
    requestSerialize: serialize_swarm_interactive_test_v1_TestRequest,
    requestDeserialize: deserialize_swarm_interactive_test_v1_TestRequest,
    responseSerialize: serialize_swarm_interactive_test_v1_TestResponse,
    responseDeserialize: deserialize_swarm_interactive_test_v1_TestResponse,
  },
};

exports.TestServiceClient = grpc.makeGenericClientConstructor(TestServiceService);
