/**
 * @fileoverview gRPC-Web generated client stub for swarm_interactive.test.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.swarm_interactive = {};
proto.swarm_interactive.test = {};
proto.swarm_interactive.test.v1 = require('./test_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.swarm_interactive.test.v1.TestServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.swarm_interactive.test.v1.TestServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.swarm_interactive.test.v1.TestRequest,
 *   !proto.swarm_interactive.test.v1.TestResponse>}
 */
const methodDescriptor_TestService_Greet = new grpc.web.MethodDescriptor(
  '/swarm_interactive.test.v1.TestService/Greet',
  grpc.web.MethodType.UNARY,
  proto.swarm_interactive.test.v1.TestRequest,
  proto.swarm_interactive.test.v1.TestResponse,
  /**
   * @param {!proto.swarm_interactive.test.v1.TestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.swarm_interactive.test.v1.TestResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.swarm_interactive.test.v1.TestRequest,
 *   !proto.swarm_interactive.test.v1.TestResponse>}
 */
const methodInfo_TestService_Greet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.swarm_interactive.test.v1.TestResponse,
  /**
   * @param {!proto.swarm_interactive.test.v1.TestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.swarm_interactive.test.v1.TestResponse.deserializeBinary
);


/**
 * @param {!proto.swarm_interactive.test.v1.TestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.swarm_interactive.test.v1.TestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.swarm_interactive.test.v1.TestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.swarm_interactive.test.v1.TestServiceClient.prototype.greet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/swarm_interactive.test.v1.TestService/Greet',
      request,
      metadata || {},
      methodDescriptor_TestService_Greet,
      callback);
};


/**
 * @param {!proto.swarm_interactive.test.v1.TestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.swarm_interactive.test.v1.TestResponse>}
 *     A native promise that resolves to the response
 */
proto.swarm_interactive.test.v1.TestServicePromiseClient.prototype.greet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/swarm_interactive.test.v1.TestService/Greet',
      request,
      metadata || {},
      methodDescriptor_TestService_Greet);
};


module.exports = proto.swarm_interactive.test.v1;

