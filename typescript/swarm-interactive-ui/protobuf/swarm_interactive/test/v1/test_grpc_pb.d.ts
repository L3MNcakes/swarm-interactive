// GENERATED CODE -- DO NOT EDIT!

// package: swarm_interactive.test.v1
// file: swarm_interactive/test/v1/test.proto

import * as swarm_interactive_test_v1_test_pb from "../../../swarm_interactive/test/v1/test_pb";
import * as grpc from "grpc";

interface ITestServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  greet: grpc.MethodDefinition<swarm_interactive_test_v1_test_pb.TestRequest, swarm_interactive_test_v1_test_pb.TestResponse>;
}

export const TestServiceService: ITestServiceService;

export class TestServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  greet(argument: swarm_interactive_test_v1_test_pb.TestRequest, callback: grpc.requestCallback<swarm_interactive_test_v1_test_pb.TestResponse>): grpc.ClientUnaryCall;
  greet(argument: swarm_interactive_test_v1_test_pb.TestRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<swarm_interactive_test_v1_test_pb.TestResponse>): grpc.ClientUnaryCall;
  greet(argument: swarm_interactive_test_v1_test_pb.TestRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<swarm_interactive_test_v1_test_pb.TestResponse>): grpc.ClientUnaryCall;
}
