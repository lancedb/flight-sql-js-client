/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $RangeError = $util.global.RangeError, $TypeError = $util.global.TypeError, $Number = $util.global.Number, $parseInt = $util.global.parseInt, $String = $util.global.String, $BigInt = $util.global.BigInt, $Array = $util.global.Array, $Boolean = $util.global.Boolean, $isFinite = $util.global.isFinite;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.arrow = (function() {

    /**
     * Namespace arrow.
     * @exports arrow
     * @namespace
     */
    var arrow = {};

    arrow.flight = (function() {

        /**
         * Namespace flight.
         * @memberof arrow
         * @namespace
         */
        var flight = {};

        flight.protocol = (function() {

            /**
             * Namespace protocol.
             * @memberof arrow.flight
             * @namespace
             */
            var protocol = {};

            protocol.FlightService = (function() {

                /**
                 * Constructs a new FlightService service.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a FlightService
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                var FlightService = function(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                };

                $Object.defineProperty(FlightService.prototype = $Object.create($protobuf.rpc.Service.prototype), "constructor", { value: FlightService, writable: true, enumerable: false, configurable: true });

                /**
                 * Creates new FlightService service using the specified rpc implementation.
                 * @function create
                 * @memberof arrow.flight.protocol.FlightService
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {FlightService} RPC service. Useful where requests and/or responses are streamed.
                 */
                FlightService.create = function(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#handshake}.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef HandshakeCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {arrow.flight.protocol.HandshakeResponse} [response] HandshakeResponse
                 */

                /**
                 * Calls Handshake.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef Handshake
                 * @type {{
                 *   (request: arrow.flight.protocol.IHandshakeRequest, callback: arrow.flight.protocol.FlightService.HandshakeCallback): void;
                 *   (request: arrow.flight.protocol.IHandshakeRequest): Promise<arrow.flight.protocol.HandshakeResponse>;
                 *   readonly name: "Handshake";
                 *   readonly path: "/arrow.flight.protocol.FlightService/Handshake";
                 *   readonly requestType: "HandshakeRequest";
                 *   readonly responseType: "HandshakeResponse";
                 *   readonly requestStream: true;
                 *   readonly responseStream: true;
                 * }}
                 */

                /**
                 * Calls Handshake.
                 * @name arrow.flight.protocol.FlightService#handshake
                 * @type {arrow.flight.protocol.FlightService.Handshake}
                 */
                $Object.defineProperties(FlightService.prototype.handshake = function(request, callback) {
                    return $protobuf.rpc.Service.prototype.rpcCall.call(this, FlightService.prototype.handshake, $root.arrow.flight.protocol.HandshakeRequest, $root.arrow.flight.protocol.HandshakeResponse, request, callback);
                }, {
                    name: { value: "Handshake" },
                    path: { value: "/arrow.flight.protocol.FlightService/Handshake" },
                    requestType: { value: "HandshakeRequest" },
                    responseType: { value: "HandshakeResponse" },
                    requestStream: { value: true },
                    responseStream: { value: true }
                });

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#listFlights}.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef ListFlightsCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {arrow.flight.protocol.FlightInfo} [response] FlightInfo
                 */

                /**
                 * Calls ListFlights.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef ListFlights
                 * @type {{
                 *   (request: arrow.flight.protocol.ICriteria, callback: arrow.flight.protocol.FlightService.ListFlightsCallback): void;
                 *   (request: arrow.flight.protocol.ICriteria): Promise<arrow.flight.protocol.FlightInfo>;
                 *   readonly name: "ListFlights";
                 *   readonly path: "/arrow.flight.protocol.FlightService/ListFlights";
                 *   readonly requestType: "Criteria";
                 *   readonly responseType: "FlightInfo";
                 *   readonly requestStream: undefined;
                 *   readonly responseStream: true;
                 * }}
                 */

                /**
                 * Calls ListFlights.
                 * @name arrow.flight.protocol.FlightService#listFlights
                 * @type {arrow.flight.protocol.FlightService.ListFlights}
                 */
                $Object.defineProperties(FlightService.prototype.listFlights = function(request, callback) {
                    return $protobuf.rpc.Service.prototype.rpcCall.call(this, FlightService.prototype.listFlights, $root.arrow.flight.protocol.Criteria, $root.arrow.flight.protocol.FlightInfo, request, callback);
                }, {
                    name: { value: "ListFlights" },
                    path: { value: "/arrow.flight.protocol.FlightService/ListFlights" },
                    requestType: { value: "Criteria" },
                    responseType: { value: "FlightInfo" },
                    requestStream: { value: $undefined },
                    responseStream: { value: true }
                });

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#getFlightInfo}.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef GetFlightInfoCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {arrow.flight.protocol.FlightInfo} [response] FlightInfo
                 */

                /**
                 * Calls GetFlightInfo.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef GetFlightInfo
                 * @type {{
                 *   (request: arrow.flight.protocol.IFlightDescriptor, callback: arrow.flight.protocol.FlightService.GetFlightInfoCallback): void;
                 *   (request: arrow.flight.protocol.IFlightDescriptor): Promise<arrow.flight.protocol.FlightInfo>;
                 *   readonly name: "GetFlightInfo";
                 *   readonly path: "/arrow.flight.protocol.FlightService/GetFlightInfo";
                 *   readonly requestType: "FlightDescriptor";
                 *   readonly responseType: "FlightInfo";
                 *   readonly requestStream: undefined;
                 *   readonly responseStream: undefined;
                 * }}
                 */

                /**
                 * Calls GetFlightInfo.
                 * @name arrow.flight.protocol.FlightService#getFlightInfo
                 * @type {arrow.flight.protocol.FlightService.GetFlightInfo}
                 */
                $Object.defineProperties(FlightService.prototype.getFlightInfo = function(request, callback) {
                    return $protobuf.rpc.Service.prototype.rpcCall.call(this, FlightService.prototype.getFlightInfo, $root.arrow.flight.protocol.FlightDescriptor, $root.arrow.flight.protocol.FlightInfo, request, callback);
                }, {
                    name: { value: "GetFlightInfo" },
                    path: { value: "/arrow.flight.protocol.FlightService/GetFlightInfo" },
                    requestType: { value: "FlightDescriptor" },
                    responseType: { value: "FlightInfo" },
                    requestStream: { value: $undefined },
                    responseStream: { value: $undefined }
                });

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#pollFlightInfo}.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef PollFlightInfoCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {arrow.flight.protocol.PollInfo} [response] PollInfo
                 */

                /**
                 * Calls PollFlightInfo.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef PollFlightInfo
                 * @type {{
                 *   (request: arrow.flight.protocol.IFlightDescriptor, callback: arrow.flight.protocol.FlightService.PollFlightInfoCallback): void;
                 *   (request: arrow.flight.protocol.IFlightDescriptor): Promise<arrow.flight.protocol.PollInfo>;
                 *   readonly name: "PollFlightInfo";
                 *   readonly path: "/arrow.flight.protocol.FlightService/PollFlightInfo";
                 *   readonly requestType: "FlightDescriptor";
                 *   readonly responseType: "PollInfo";
                 *   readonly requestStream: undefined;
                 *   readonly responseStream: undefined;
                 * }}
                 */

                /**
                 * Calls PollFlightInfo.
                 * @name arrow.flight.protocol.FlightService#pollFlightInfo
                 * @type {arrow.flight.protocol.FlightService.PollFlightInfo}
                 */
                $Object.defineProperties(FlightService.prototype.pollFlightInfo = function(request, callback) {
                    return $protobuf.rpc.Service.prototype.rpcCall.call(this, FlightService.prototype.pollFlightInfo, $root.arrow.flight.protocol.FlightDescriptor, $root.arrow.flight.protocol.PollInfo, request, callback);
                }, {
                    name: { value: "PollFlightInfo" },
                    path: { value: "/arrow.flight.protocol.FlightService/PollFlightInfo" },
                    requestType: { value: "FlightDescriptor" },
                    responseType: { value: "PollInfo" },
                    requestStream: { value: $undefined },
                    responseStream: { value: $undefined }
                });

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#getSchema}.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef GetSchemaCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {arrow.flight.protocol.SchemaResult} [response] SchemaResult
                 */

                /**
                 * Calls GetSchema.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef GetSchema
                 * @type {{
                 *   (request: arrow.flight.protocol.IFlightDescriptor, callback: arrow.flight.protocol.FlightService.GetSchemaCallback): void;
                 *   (request: arrow.flight.protocol.IFlightDescriptor): Promise<arrow.flight.protocol.SchemaResult>;
                 *   readonly name: "GetSchema";
                 *   readonly path: "/arrow.flight.protocol.FlightService/GetSchema";
                 *   readonly requestType: "FlightDescriptor";
                 *   readonly responseType: "SchemaResult";
                 *   readonly requestStream: undefined;
                 *   readonly responseStream: undefined;
                 * }}
                 */

                /**
                 * Calls GetSchema.
                 * @name arrow.flight.protocol.FlightService#getSchema
                 * @type {arrow.flight.protocol.FlightService.GetSchema}
                 */
                $Object.defineProperties(FlightService.prototype.getSchema = function(request, callback) {
                    return $protobuf.rpc.Service.prototype.rpcCall.call(this, FlightService.prototype.getSchema, $root.arrow.flight.protocol.FlightDescriptor, $root.arrow.flight.protocol.SchemaResult, request, callback);
                }, {
                    name: { value: "GetSchema" },
                    path: { value: "/arrow.flight.protocol.FlightService/GetSchema" },
                    requestType: { value: "FlightDescriptor" },
                    responseType: { value: "SchemaResult" },
                    requestStream: { value: $undefined },
                    responseStream: { value: $undefined }
                });

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#doGet}.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef DoGetCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {arrow.flight.protocol.FlightData} [response] FlightData
                 */

                /**
                 * Calls DoGet.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef DoGet
                 * @type {{
                 *   (request: arrow.flight.protocol.ITicket, callback: arrow.flight.protocol.FlightService.DoGetCallback): void;
                 *   (request: arrow.flight.protocol.ITicket): Promise<arrow.flight.protocol.FlightData>;
                 *   readonly name: "DoGet";
                 *   readonly path: "/arrow.flight.protocol.FlightService/DoGet";
                 *   readonly requestType: "Ticket";
                 *   readonly responseType: "FlightData";
                 *   readonly requestStream: undefined;
                 *   readonly responseStream: true;
                 * }}
                 */

                /**
                 * Calls DoGet.
                 * @name arrow.flight.protocol.FlightService#doGet
                 * @type {arrow.flight.protocol.FlightService.DoGet}
                 */
                $Object.defineProperties(FlightService.prototype.doGet = function(request, callback) {
                    return $protobuf.rpc.Service.prototype.rpcCall.call(this, FlightService.prototype.doGet, $root.arrow.flight.protocol.Ticket, $root.arrow.flight.protocol.FlightData, request, callback);
                }, {
                    name: { value: "DoGet" },
                    path: { value: "/arrow.flight.protocol.FlightService/DoGet" },
                    requestType: { value: "Ticket" },
                    responseType: { value: "FlightData" },
                    requestStream: { value: $undefined },
                    responseStream: { value: true }
                });

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#doPut}.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef DoPutCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {arrow.flight.protocol.PutResult} [response] PutResult
                 */

                /**
                 * Calls DoPut.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef DoPut
                 * @type {{
                 *   (request: arrow.flight.protocol.IFlightData, callback: arrow.flight.protocol.FlightService.DoPutCallback): void;
                 *   (request: arrow.flight.protocol.IFlightData): Promise<arrow.flight.protocol.PutResult>;
                 *   readonly name: "DoPut";
                 *   readonly path: "/arrow.flight.protocol.FlightService/DoPut";
                 *   readonly requestType: "FlightData";
                 *   readonly responseType: "PutResult";
                 *   readonly requestStream: true;
                 *   readonly responseStream: true;
                 * }}
                 */

                /**
                 * Calls DoPut.
                 * @name arrow.flight.protocol.FlightService#doPut
                 * @type {arrow.flight.protocol.FlightService.DoPut}
                 */
                $Object.defineProperties(FlightService.prototype.doPut = function(request, callback) {
                    return $protobuf.rpc.Service.prototype.rpcCall.call(this, FlightService.prototype.doPut, $root.arrow.flight.protocol.FlightData, $root.arrow.flight.protocol.PutResult, request, callback);
                }, {
                    name: { value: "DoPut" },
                    path: { value: "/arrow.flight.protocol.FlightService/DoPut" },
                    requestType: { value: "FlightData" },
                    responseType: { value: "PutResult" },
                    requestStream: { value: true },
                    responseStream: { value: true }
                });

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#doExchange}.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef DoExchangeCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {arrow.flight.protocol.FlightData} [response] FlightData
                 */

                /**
                 * Calls DoExchange.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef DoExchange
                 * @type {{
                 *   (request: arrow.flight.protocol.IFlightData, callback: arrow.flight.protocol.FlightService.DoExchangeCallback): void;
                 *   (request: arrow.flight.protocol.IFlightData): Promise<arrow.flight.protocol.FlightData>;
                 *   readonly name: "DoExchange";
                 *   readonly path: "/arrow.flight.protocol.FlightService/DoExchange";
                 *   readonly requestType: "FlightData";
                 *   readonly responseType: "FlightData";
                 *   readonly requestStream: true;
                 *   readonly responseStream: true;
                 * }}
                 */

                /**
                 * Calls DoExchange.
                 * @name arrow.flight.protocol.FlightService#doExchange
                 * @type {arrow.flight.protocol.FlightService.DoExchange}
                 */
                $Object.defineProperties(FlightService.prototype.doExchange = function(request, callback) {
                    return $protobuf.rpc.Service.prototype.rpcCall.call(this, FlightService.prototype.doExchange, $root.arrow.flight.protocol.FlightData, $root.arrow.flight.protocol.FlightData, request, callback);
                }, {
                    name: { value: "DoExchange" },
                    path: { value: "/arrow.flight.protocol.FlightService/DoExchange" },
                    requestType: { value: "FlightData" },
                    responseType: { value: "FlightData" },
                    requestStream: { value: true },
                    responseStream: { value: true }
                });

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#doAction}.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef DoActionCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {arrow.flight.protocol.Result} [response] Result
                 */

                /**
                 * Calls DoAction.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef DoAction
                 * @type {{
                 *   (request: arrow.flight.protocol.IAction, callback: arrow.flight.protocol.FlightService.DoActionCallback): void;
                 *   (request: arrow.flight.protocol.IAction): Promise<arrow.flight.protocol.Result>;
                 *   readonly name: "DoAction";
                 *   readonly path: "/arrow.flight.protocol.FlightService/DoAction";
                 *   readonly requestType: "Action";
                 *   readonly responseType: "Result";
                 *   readonly requestStream: undefined;
                 *   readonly responseStream: true;
                 * }}
                 */

                /**
                 * Calls DoAction.
                 * @name arrow.flight.protocol.FlightService#doAction
                 * @type {arrow.flight.protocol.FlightService.DoAction}
                 */
                $Object.defineProperties(FlightService.prototype.doAction = function(request, callback) {
                    return $protobuf.rpc.Service.prototype.rpcCall.call(this, FlightService.prototype.doAction, $root.arrow.flight.protocol.Action, $root.arrow.flight.protocol.Result, request, callback);
                }, {
                    name: { value: "DoAction" },
                    path: { value: "/arrow.flight.protocol.FlightService/DoAction" },
                    requestType: { value: "Action" },
                    responseType: { value: "Result" },
                    requestStream: { value: $undefined },
                    responseStream: { value: true }
                });

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#listActions}.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef ListActionsCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {arrow.flight.protocol.ActionType} [response] ActionType
                 */

                /**
                 * Calls ListActions.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef ListActions
                 * @type {{
                 *   (request: arrow.flight.protocol.IEmpty, callback: arrow.flight.protocol.FlightService.ListActionsCallback): void;
                 *   (request: arrow.flight.protocol.IEmpty): Promise<arrow.flight.protocol.ActionType>;
                 *   readonly name: "ListActions";
                 *   readonly path: "/arrow.flight.protocol.FlightService/ListActions";
                 *   readonly requestType: "Empty";
                 *   readonly responseType: "ActionType";
                 *   readonly requestStream: undefined;
                 *   readonly responseStream: true;
                 * }}
                 */

                /**
                 * Calls ListActions.
                 * @name arrow.flight.protocol.FlightService#listActions
                 * @type {arrow.flight.protocol.FlightService.ListActions}
                 */
                $Object.defineProperties(FlightService.prototype.listActions = function(request, callback) {
                    return $protobuf.rpc.Service.prototype.rpcCall.call(this, FlightService.prototype.listActions, $root.arrow.flight.protocol.Empty, $root.arrow.flight.protocol.ActionType, request, callback);
                }, {
                    name: { value: "ListActions" },
                    path: { value: "/arrow.flight.protocol.FlightService/ListActions" },
                    requestType: { value: "Empty" },
                    responseType: { value: "ActionType" },
                    requestStream: { value: $undefined },
                    responseStream: { value: true }
                });

                return FlightService;
            })();

            protocol.HandshakeRequest = (function() {

                /**
                 * Properties of a HandshakeRequest.
                 * @typedef {Object} arrow.flight.protocol.HandshakeRequest.$Properties
                 * @property {number|Long|null} [protocolVersion] HandshakeRequest protocolVersion
                 * @property {Uint8Array|null} [payload] HandshakeRequest payload
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a HandshakeRequest.
                 * @memberof arrow.flight.protocol
                 * @interface IHandshakeRequest
                 * @augments arrow.flight.protocol.HandshakeRequest.$Properties
                 * @deprecated Use arrow.flight.protocol.HandshakeRequest.$Properties instead.
                 */

                /**
                 * Shape of a HandshakeRequest.
                 * @typedef {arrow.flight.protocol.HandshakeRequest.$Properties} arrow.flight.protocol.HandshakeRequest.$Shape
                 */

                /**
                 * Constructs a new HandshakeRequest.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a HandshakeRequest.
                 * @constructor
                 * @param {arrow.flight.protocol.HandshakeRequest.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var HandshakeRequest = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * HandshakeRequest protocolVersion.
                 * @member {number|Long} protocolVersion
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @instance
                 */
                HandshakeRequest.prototype.protocolVersion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * HandshakeRequest payload.
                 * @member {Uint8Array} payload
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @instance
                 */
                HandshakeRequest.prototype.payload = $util.newBuffer([]);

                /**
                 * Creates a new HandshakeRequest instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @static
                 * @param {arrow.flight.protocol.HandshakeRequest.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.HandshakeRequest} HandshakeRequest instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.HandshakeRequest.$Shape): arrow.flight.protocol.HandshakeRequest & arrow.flight.protocol.HandshakeRequest.$Shape;
                 *   (properties?: arrow.flight.protocol.HandshakeRequest.$Properties): arrow.flight.protocol.HandshakeRequest;
                 * }}
                 */
                HandshakeRequest.create = function(properties) {
                    return new HandshakeRequest(properties);
                };

                /**
                 * Encodes the specified HandshakeRequest message. Does not implicitly {@link arrow.flight.protocol.HandshakeRequest.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @static
                 * @param {arrow.flight.protocol.HandshakeRequest.$Properties} message HandshakeRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HandshakeRequest.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.protocolVersion != null && $Object.hasOwnProperty.call(message, "protocolVersion") && (typeof message.protocolVersion === "object" ? message.protocolVersion.low || message.protocolVersion.high : message.protocolVersion !== 0))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.protocolVersion);
                    if (message.payload != null && $Object.hasOwnProperty.call(message, "payload") && message.payload.length)
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.payload);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified HandshakeRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.HandshakeRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @static
                 * @param {arrow.flight.protocol.HandshakeRequest.$Properties} message HandshakeRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HandshakeRequest.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a HandshakeRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.HandshakeRequest & arrow.flight.protocol.HandshakeRequest.$Shape} HandshakeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HandshakeRequest.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.HandshakeRequest();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 0)
                                    break;
                                if (typeof (value = reader.uint64()) === "object" ? value.low || value.high : value !== 0)
                                    message.protocolVersion = value;
                                else
                                    delete message.protocolVersion;
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.bytes()).length)
                                    message.payload = value;
                                else
                                    delete message.payload;
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a HandshakeRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.HandshakeRequest & arrow.flight.protocol.HandshakeRequest.$Shape} HandshakeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HandshakeRequest.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HandshakeRequest message.
                 * @function verify
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HandshakeRequest.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.protocolVersion != null && $Object.hasOwnProperty.call(message, "protocolVersion"))
                        if (!$util.isInteger(message.protocolVersion) && !(message.protocolVersion && $util.isInteger(message.protocolVersion.low) && $util.isInteger(message.protocolVersion.high)))
                            return "protocolVersion: integer|Long expected";
                    if (message.payload != null && $Object.hasOwnProperty.call(message, "payload"))
                        if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                            return "payload: buffer expected";
                    return null;
                };

                /**
                 * Creates a HandshakeRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.HandshakeRequest} HandshakeRequest
                 */
                HandshakeRequest.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.HandshakeRequest)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.HandshakeRequest: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.HandshakeRequest();
                    if (object.protocolVersion != null)
                        if (typeof object.protocolVersion === "object" ? object.protocolVersion.low || object.protocolVersion.high : $Number(object.protocolVersion) !== 0)
                            if ($util.Long)
                                message.protocolVersion = $util.Long.fromValue(object.protocolVersion, true);
                            else if (typeof object.protocolVersion === "string")
                                message.protocolVersion = $parseInt(object.protocolVersion, 10);
                            else if (typeof object.protocolVersion === "number")
                                message.protocolVersion = object.protocolVersion;
                            else if (typeof object.protocolVersion === "object")
                                message.protocolVersion = new $util.LongBits(object.protocolVersion.low >>> 0, object.protocolVersion.high >>> 0).toNumber(true);
                    if (object.payload != null)
                        if (object.payload.length)
                            if (typeof object.payload === "string")
                                $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                            else if (object.payload.length >= 0)
                                message.payload = object.payload;
                    return message;
                };

                /**
                 * Creates a plain object from a HandshakeRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @static
                 * @param {arrow.flight.protocol.HandshakeRequest} message HandshakeRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                HandshakeRequest.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.protocolVersion = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                        } else
                            object.protocolVersion = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                        if (options.bytes === $String)
                            object.payload = "";
                        else {
                            object.payload = [];
                            if (options.bytes !== $Array)
                                object.payload = $util.newBuffer(object.payload);
                        }
                    }
                    if (message.protocolVersion != null && $Object.hasOwnProperty.call(message, "protocolVersion"))
                        if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                            object.protocolVersion = typeof message.protocolVersion === "number" ? $BigInt(message.protocolVersion) : $util.Long.fromBits(message.protocolVersion.low >>> 0, message.protocolVersion.high >>> 0, true).toBigInt();
                        else if (typeof message.protocolVersion === "number")
                            object.protocolVersion = options.longs === $String ? $String(message.protocolVersion) : message.protocolVersion;
                        else
                            object.protocolVersion = options.longs === $String ? $util.Long.prototype.toString.call(message.protocolVersion) : options.longs === $Number ? new $util.LongBits(message.protocolVersion.low >>> 0, message.protocolVersion.high >>> 0).toNumber(true) : message.protocolVersion;
                    if (message.payload != null && $Object.hasOwnProperty.call(message, "payload"))
                        object.payload = options.bytes === $String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.payload) : message.payload;
                    return object;
                };

                /**
                 * Converts this HandshakeRequest to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                HandshakeRequest.prototype.toJSON = function() {
                    return HandshakeRequest.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for HandshakeRequest
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                HandshakeRequest.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.HandshakeRequest";
                };

                return HandshakeRequest;
            })();

            protocol.HandshakeResponse = (function() {

                /**
                 * Properties of a HandshakeResponse.
                 * @typedef {Object} arrow.flight.protocol.HandshakeResponse.$Properties
                 * @property {number|Long|null} [protocolVersion] HandshakeResponse protocolVersion
                 * @property {Uint8Array|null} [payload] HandshakeResponse payload
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a HandshakeResponse.
                 * @memberof arrow.flight.protocol
                 * @interface IHandshakeResponse
                 * @augments arrow.flight.protocol.HandshakeResponse.$Properties
                 * @deprecated Use arrow.flight.protocol.HandshakeResponse.$Properties instead.
                 */

                /**
                 * Shape of a HandshakeResponse.
                 * @typedef {arrow.flight.protocol.HandshakeResponse.$Properties} arrow.flight.protocol.HandshakeResponse.$Shape
                 */

                /**
                 * Constructs a new HandshakeResponse.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a HandshakeResponse.
                 * @constructor
                 * @param {arrow.flight.protocol.HandshakeResponse.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var HandshakeResponse = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * HandshakeResponse protocolVersion.
                 * @member {number|Long} protocolVersion
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @instance
                 */
                HandshakeResponse.prototype.protocolVersion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * HandshakeResponse payload.
                 * @member {Uint8Array} payload
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @instance
                 */
                HandshakeResponse.prototype.payload = $util.newBuffer([]);

                /**
                 * Creates a new HandshakeResponse instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @static
                 * @param {arrow.flight.protocol.HandshakeResponse.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.HandshakeResponse} HandshakeResponse instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.HandshakeResponse.$Shape): arrow.flight.protocol.HandshakeResponse & arrow.flight.protocol.HandshakeResponse.$Shape;
                 *   (properties?: arrow.flight.protocol.HandshakeResponse.$Properties): arrow.flight.protocol.HandshakeResponse;
                 * }}
                 */
                HandshakeResponse.create = function(properties) {
                    return new HandshakeResponse(properties);
                };

                /**
                 * Encodes the specified HandshakeResponse message. Does not implicitly {@link arrow.flight.protocol.HandshakeResponse.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @static
                 * @param {arrow.flight.protocol.HandshakeResponse.$Properties} message HandshakeResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HandshakeResponse.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.protocolVersion != null && $Object.hasOwnProperty.call(message, "protocolVersion") && (typeof message.protocolVersion === "object" ? message.protocolVersion.low || message.protocolVersion.high : message.protocolVersion !== 0))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.protocolVersion);
                    if (message.payload != null && $Object.hasOwnProperty.call(message, "payload") && message.payload.length)
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.payload);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified HandshakeResponse message, length delimited. Does not implicitly {@link arrow.flight.protocol.HandshakeResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @static
                 * @param {arrow.flight.protocol.HandshakeResponse.$Properties} message HandshakeResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HandshakeResponse.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a HandshakeResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.HandshakeResponse & arrow.flight.protocol.HandshakeResponse.$Shape} HandshakeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HandshakeResponse.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.HandshakeResponse();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 0)
                                    break;
                                if (typeof (value = reader.uint64()) === "object" ? value.low || value.high : value !== 0)
                                    message.protocolVersion = value;
                                else
                                    delete message.protocolVersion;
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.bytes()).length)
                                    message.payload = value;
                                else
                                    delete message.payload;
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a HandshakeResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.HandshakeResponse & arrow.flight.protocol.HandshakeResponse.$Shape} HandshakeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HandshakeResponse.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HandshakeResponse message.
                 * @function verify
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HandshakeResponse.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.protocolVersion != null && $Object.hasOwnProperty.call(message, "protocolVersion"))
                        if (!$util.isInteger(message.protocolVersion) && !(message.protocolVersion && $util.isInteger(message.protocolVersion.low) && $util.isInteger(message.protocolVersion.high)))
                            return "protocolVersion: integer|Long expected";
                    if (message.payload != null && $Object.hasOwnProperty.call(message, "payload"))
                        if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                            return "payload: buffer expected";
                    return null;
                };

                /**
                 * Creates a HandshakeResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.HandshakeResponse} HandshakeResponse
                 */
                HandshakeResponse.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.HandshakeResponse)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.HandshakeResponse: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.HandshakeResponse();
                    if (object.protocolVersion != null)
                        if (typeof object.protocolVersion === "object" ? object.protocolVersion.low || object.protocolVersion.high : $Number(object.protocolVersion) !== 0)
                            if ($util.Long)
                                message.protocolVersion = $util.Long.fromValue(object.protocolVersion, true);
                            else if (typeof object.protocolVersion === "string")
                                message.protocolVersion = $parseInt(object.protocolVersion, 10);
                            else if (typeof object.protocolVersion === "number")
                                message.protocolVersion = object.protocolVersion;
                            else if (typeof object.protocolVersion === "object")
                                message.protocolVersion = new $util.LongBits(object.protocolVersion.low >>> 0, object.protocolVersion.high >>> 0).toNumber(true);
                    if (object.payload != null)
                        if (object.payload.length)
                            if (typeof object.payload === "string")
                                $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                            else if (object.payload.length >= 0)
                                message.payload = object.payload;
                    return message;
                };

                /**
                 * Creates a plain object from a HandshakeResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @static
                 * @param {arrow.flight.protocol.HandshakeResponse} message HandshakeResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                HandshakeResponse.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.protocolVersion = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                        } else
                            object.protocolVersion = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                        if (options.bytes === $String)
                            object.payload = "";
                        else {
                            object.payload = [];
                            if (options.bytes !== $Array)
                                object.payload = $util.newBuffer(object.payload);
                        }
                    }
                    if (message.protocolVersion != null && $Object.hasOwnProperty.call(message, "protocolVersion"))
                        if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                            object.protocolVersion = typeof message.protocolVersion === "number" ? $BigInt(message.protocolVersion) : $util.Long.fromBits(message.protocolVersion.low >>> 0, message.protocolVersion.high >>> 0, true).toBigInt();
                        else if (typeof message.protocolVersion === "number")
                            object.protocolVersion = options.longs === $String ? $String(message.protocolVersion) : message.protocolVersion;
                        else
                            object.protocolVersion = options.longs === $String ? $util.Long.prototype.toString.call(message.protocolVersion) : options.longs === $Number ? new $util.LongBits(message.protocolVersion.low >>> 0, message.protocolVersion.high >>> 0).toNumber(true) : message.protocolVersion;
                    if (message.payload != null && $Object.hasOwnProperty.call(message, "payload"))
                        object.payload = options.bytes === $String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.payload) : message.payload;
                    return object;
                };

                /**
                 * Converts this HandshakeResponse to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                HandshakeResponse.prototype.toJSON = function() {
                    return HandshakeResponse.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for HandshakeResponse
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                HandshakeResponse.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.HandshakeResponse";
                };

                return HandshakeResponse;
            })();

            protocol.BasicAuth = (function() {

                /**
                 * Properties of a BasicAuth.
                 * @typedef {Object} arrow.flight.protocol.BasicAuth.$Properties
                 * @property {string|null} [username] BasicAuth username
                 * @property {string|null} [password] BasicAuth password
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a BasicAuth.
                 * @memberof arrow.flight.protocol
                 * @interface IBasicAuth
                 * @augments arrow.flight.protocol.BasicAuth.$Properties
                 * @deprecated Use arrow.flight.protocol.BasicAuth.$Properties instead.
                 */

                /**
                 * Shape of a BasicAuth.
                 * @typedef {arrow.flight.protocol.BasicAuth.$Properties} arrow.flight.protocol.BasicAuth.$Shape
                 */

                /**
                 * Constructs a new BasicAuth.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a BasicAuth.
                 * @constructor
                 * @param {arrow.flight.protocol.BasicAuth.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var BasicAuth = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * BasicAuth username.
                 * @member {string} username
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @instance
                 */
                BasicAuth.prototype.username = "";

                /**
                 * BasicAuth password.
                 * @member {string} password
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @instance
                 */
                BasicAuth.prototype.password = "";

                /**
                 * Creates a new BasicAuth instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @static
                 * @param {arrow.flight.protocol.BasicAuth.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.BasicAuth} BasicAuth instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.BasicAuth.$Shape): arrow.flight.protocol.BasicAuth & arrow.flight.protocol.BasicAuth.$Shape;
                 *   (properties?: arrow.flight.protocol.BasicAuth.$Properties): arrow.flight.protocol.BasicAuth;
                 * }}
                 */
                BasicAuth.create = function(properties) {
                    return new BasicAuth(properties);
                };

                /**
                 * Encodes the specified BasicAuth message. Does not implicitly {@link arrow.flight.protocol.BasicAuth.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @static
                 * @param {arrow.flight.protocol.BasicAuth.$Properties} message BasicAuth message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BasicAuth.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.username != null && $Object.hasOwnProperty.call(message, "username") && message.username !== "")
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
                    if (message.password != null && $Object.hasOwnProperty.call(message, "password") && message.password !== "")
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified BasicAuth message, length delimited. Does not implicitly {@link arrow.flight.protocol.BasicAuth.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @static
                 * @param {arrow.flight.protocol.BasicAuth.$Properties} message BasicAuth message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BasicAuth.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a BasicAuth message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.BasicAuth & arrow.flight.protocol.BasicAuth.$Shape} BasicAuth
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BasicAuth.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.BasicAuth();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.stringVerify()).length)
                                    message.username = value;
                                else
                                    delete message.username;
                                continue;
                            }
                        case 3: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.stringVerify()).length)
                                    message.password = value;
                                else
                                    delete message.password;
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a BasicAuth message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.BasicAuth & arrow.flight.protocol.BasicAuth.$Shape} BasicAuth
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BasicAuth.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a BasicAuth message.
                 * @function verify
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BasicAuth.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                        if (!$util.isString(message.username))
                            return "username: string expected";
                    if (message.password != null && $Object.hasOwnProperty.call(message, "password"))
                        if (!$util.isString(message.password))
                            return "password: string expected";
                    return null;
                };

                /**
                 * Creates a BasicAuth message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.BasicAuth} BasicAuth
                 */
                BasicAuth.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.BasicAuth)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.BasicAuth: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.BasicAuth();
                    if (object.username != null)
                        if (typeof object.username !== "string" || object.username.length)
                            message.username = $String(object.username);
                    if (object.password != null)
                        if (typeof object.password !== "string" || object.password.length)
                            message.password = $String(object.password);
                    return message;
                };

                /**
                 * Creates a plain object from a BasicAuth message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @static
                 * @param {arrow.flight.protocol.BasicAuth} message BasicAuth
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BasicAuth.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        object.username = "";
                        object.password = "";
                    }
                    if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                        object.username = message.username;
                    if (message.password != null && $Object.hasOwnProperty.call(message, "password"))
                        object.password = message.password;
                    return object;
                };

                /**
                 * Converts this BasicAuth to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BasicAuth.prototype.toJSON = function() {
                    return BasicAuth.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for BasicAuth
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                BasicAuth.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.BasicAuth";
                };

                return BasicAuth;
            })();

            protocol.Empty = (function() {

                /**
                 * Properties of an Empty.
                 * @typedef {Object} arrow.flight.protocol.Empty.$Properties
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of an Empty.
                 * @memberof arrow.flight.protocol
                 * @interface IEmpty
                 * @augments arrow.flight.protocol.Empty.$Properties
                 * @deprecated Use arrow.flight.protocol.Empty.$Properties instead.
                 */

                /**
                 * Shape of an Empty.
                 * @typedef {arrow.flight.protocol.Empty.$Properties} arrow.flight.protocol.Empty.$Shape
                 */

                /**
                 * Constructs a new Empty.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents an Empty.
                 * @constructor
                 * @param {arrow.flight.protocol.Empty.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var Empty = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * Creates a new Empty instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.Empty
                 * @static
                 * @param {arrow.flight.protocol.Empty.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.Empty} Empty instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.Empty.$Shape): arrow.flight.protocol.Empty & arrow.flight.protocol.Empty.$Shape;
                 *   (properties?: arrow.flight.protocol.Empty.$Properties): arrow.flight.protocol.Empty;
                 * }}
                 */
                Empty.create = function(properties) {
                    return new Empty(properties);
                };

                /**
                 * Encodes the specified Empty message. Does not implicitly {@link arrow.flight.protocol.Empty.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.Empty
                 * @static
                 * @param {arrow.flight.protocol.Empty.$Properties} message Empty message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Empty.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Empty message, length delimited. Does not implicitly {@link arrow.flight.protocol.Empty.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.Empty
                 * @static
                 * @param {arrow.flight.protocol.Empty.$Properties} message Empty message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Empty.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes an Empty message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.Empty
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.Empty & arrow.flight.protocol.Empty.$Shape} Empty
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Empty.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.Empty();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        reader.skipType(tag & 7, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes an Empty message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.Empty
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.Empty & arrow.flight.protocol.Empty.$Shape} Empty
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Empty.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Empty message.
                 * @function verify
                 * @memberof arrow.flight.protocol.Empty
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Empty.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    return null;
                };

                /**
                 * Creates an Empty message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.Empty
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.Empty} Empty
                 */
                Empty.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.Empty)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.Empty: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    return new $root.arrow.flight.protocol.Empty();
                };

                /**
                 * Creates a plain object from an Empty message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.Empty
                 * @static
                 * @param {arrow.flight.protocol.Empty} message Empty
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Empty.toObject = function () {
                    return {};
                };

                /**
                 * Converts this Empty to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.Empty
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Empty.prototype.toJSON = function() {
                    return Empty.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for Empty
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.Empty
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                Empty.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.Empty";
                };

                return Empty;
            })();

            protocol.ActionType = (function() {

                /**
                 * Properties of an ActionType.
                 * @typedef {Object} arrow.flight.protocol.ActionType.$Properties
                 * @property {string|null} [type] ActionType type
                 * @property {string|null} [description] ActionType description
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of an ActionType.
                 * @memberof arrow.flight.protocol
                 * @interface IActionType
                 * @augments arrow.flight.protocol.ActionType.$Properties
                 * @deprecated Use arrow.flight.protocol.ActionType.$Properties instead.
                 */

                /**
                 * Shape of an ActionType.
                 * @typedef {arrow.flight.protocol.ActionType.$Properties} arrow.flight.protocol.ActionType.$Shape
                 */

                /**
                 * Constructs a new ActionType.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents an ActionType.
                 * @constructor
                 * @param {arrow.flight.protocol.ActionType.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var ActionType = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * ActionType type.
                 * @member {string} type
                 * @memberof arrow.flight.protocol.ActionType
                 * @instance
                 */
                ActionType.prototype.type = "";

                /**
                 * ActionType description.
                 * @member {string} description
                 * @memberof arrow.flight.protocol.ActionType
                 * @instance
                 */
                ActionType.prototype.description = "";

                /**
                 * Creates a new ActionType instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.ActionType
                 * @static
                 * @param {arrow.flight.protocol.ActionType.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.ActionType} ActionType instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.ActionType.$Shape): arrow.flight.protocol.ActionType & arrow.flight.protocol.ActionType.$Shape;
                 *   (properties?: arrow.flight.protocol.ActionType.$Properties): arrow.flight.protocol.ActionType;
                 * }}
                 */
                ActionType.create = function(properties) {
                    return new ActionType(properties);
                };

                /**
                 * Encodes the specified ActionType message. Does not implicitly {@link arrow.flight.protocol.ActionType.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.ActionType
                 * @static
                 * @param {arrow.flight.protocol.ActionType.$Properties} message ActionType message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ActionType.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.type != null && $Object.hasOwnProperty.call(message, "type") && message.type !== "")
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                    if (message.description != null && $Object.hasOwnProperty.call(message, "description") && message.description !== "")
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified ActionType message, length delimited. Does not implicitly {@link arrow.flight.protocol.ActionType.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.ActionType
                 * @static
                 * @param {arrow.flight.protocol.ActionType.$Properties} message ActionType message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ActionType.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes an ActionType message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.ActionType
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.ActionType & arrow.flight.protocol.ActionType.$Shape} ActionType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ActionType.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.ActionType();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.stringVerify()).length)
                                    message.type = value;
                                else
                                    delete message.type;
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.stringVerify()).length)
                                    message.description = value;
                                else
                                    delete message.description;
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes an ActionType message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.ActionType
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.ActionType & arrow.flight.protocol.ActionType.$Shape} ActionType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ActionType.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an ActionType message.
                 * @function verify
                 * @memberof arrow.flight.protocol.ActionType
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ActionType.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                        if (!$util.isString(message.type))
                            return "type: string expected";
                    if (message.description != null && $Object.hasOwnProperty.call(message, "description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    return null;
                };

                /**
                 * Creates an ActionType message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.ActionType
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.ActionType} ActionType
                 */
                ActionType.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.ActionType)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.ActionType: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.ActionType();
                    if (object.type != null)
                        if (typeof object.type !== "string" || object.type.length)
                            message.type = $String(object.type);
                    if (object.description != null)
                        if (typeof object.description !== "string" || object.description.length)
                            message.description = $String(object.description);
                    return message;
                };

                /**
                 * Creates a plain object from an ActionType message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.ActionType
                 * @static
                 * @param {arrow.flight.protocol.ActionType} message ActionType
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ActionType.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        object.type = "";
                        object.description = "";
                    }
                    if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                        object.type = message.type;
                    if (message.description != null && $Object.hasOwnProperty.call(message, "description"))
                        object.description = message.description;
                    return object;
                };

                /**
                 * Converts this ActionType to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.ActionType
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ActionType.prototype.toJSON = function() {
                    return ActionType.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for ActionType
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.ActionType
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                ActionType.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.ActionType";
                };

                return ActionType;
            })();

            protocol.Criteria = (function() {

                /**
                 * Properties of a Criteria.
                 * @typedef {Object} arrow.flight.protocol.Criteria.$Properties
                 * @property {Uint8Array|null} [expression] Criteria expression
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a Criteria.
                 * @memberof arrow.flight.protocol
                 * @interface ICriteria
                 * @augments arrow.flight.protocol.Criteria.$Properties
                 * @deprecated Use arrow.flight.protocol.Criteria.$Properties instead.
                 */

                /**
                 * Shape of a Criteria.
                 * @typedef {arrow.flight.protocol.Criteria.$Properties} arrow.flight.protocol.Criteria.$Shape
                 */

                /**
                 * Constructs a new Criteria.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a Criteria.
                 * @constructor
                 * @param {arrow.flight.protocol.Criteria.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var Criteria = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * Criteria expression.
                 * @member {Uint8Array} expression
                 * @memberof arrow.flight.protocol.Criteria
                 * @instance
                 */
                Criteria.prototype.expression = $util.newBuffer([]);

                /**
                 * Creates a new Criteria instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.Criteria
                 * @static
                 * @param {arrow.flight.protocol.Criteria.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.Criteria} Criteria instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.Criteria.$Shape): arrow.flight.protocol.Criteria & arrow.flight.protocol.Criteria.$Shape;
                 *   (properties?: arrow.flight.protocol.Criteria.$Properties): arrow.flight.protocol.Criteria;
                 * }}
                 */
                Criteria.create = function(properties) {
                    return new Criteria(properties);
                };

                /**
                 * Encodes the specified Criteria message. Does not implicitly {@link arrow.flight.protocol.Criteria.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.Criteria
                 * @static
                 * @param {arrow.flight.protocol.Criteria.$Properties} message Criteria message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Criteria.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.expression != null && $Object.hasOwnProperty.call(message, "expression") && message.expression.length)
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.expression);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Criteria message, length delimited. Does not implicitly {@link arrow.flight.protocol.Criteria.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.Criteria
                 * @static
                 * @param {arrow.flight.protocol.Criteria.$Properties} message Criteria message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Criteria.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a Criteria message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.Criteria
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.Criteria & arrow.flight.protocol.Criteria.$Shape} Criteria
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Criteria.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.Criteria();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.bytes()).length)
                                    message.expression = value;
                                else
                                    delete message.expression;
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a Criteria message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.Criteria
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.Criteria & arrow.flight.protocol.Criteria.$Shape} Criteria
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Criteria.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Criteria message.
                 * @function verify
                 * @memberof arrow.flight.protocol.Criteria
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Criteria.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.expression != null && $Object.hasOwnProperty.call(message, "expression"))
                        if (!(message.expression && typeof message.expression.length === "number" || $util.isString(message.expression)))
                            return "expression: buffer expected";
                    return null;
                };

                /**
                 * Creates a Criteria message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.Criteria
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.Criteria} Criteria
                 */
                Criteria.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.Criteria)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.Criteria: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.Criteria();
                    if (object.expression != null)
                        if (object.expression.length)
                            if (typeof object.expression === "string")
                                $util.base64.decode(object.expression, message.expression = $util.newBuffer($util.base64.length(object.expression)), 0);
                            else if (object.expression.length >= 0)
                                message.expression = object.expression;
                    return message;
                };

                /**
                 * Creates a plain object from a Criteria message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.Criteria
                 * @static
                 * @param {arrow.flight.protocol.Criteria} message Criteria
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Criteria.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === $String)
                            object.expression = "";
                        else {
                            object.expression = [];
                            if (options.bytes !== $Array)
                                object.expression = $util.newBuffer(object.expression);
                        }
                    if (message.expression != null && $Object.hasOwnProperty.call(message, "expression"))
                        object.expression = options.bytes === $String ? $util.base64.encode(message.expression, 0, message.expression.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.expression) : message.expression;
                    return object;
                };

                /**
                 * Converts this Criteria to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.Criteria
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Criteria.prototype.toJSON = function() {
                    return Criteria.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for Criteria
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.Criteria
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                Criteria.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.Criteria";
                };

                return Criteria;
            })();

            protocol.Action = (function() {

                /**
                 * Properties of an Action.
                 * @typedef {Object} arrow.flight.protocol.Action.$Properties
                 * @property {string|null} [type] Action type
                 * @property {Uint8Array|null} [body] Action body
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of an Action.
                 * @memberof arrow.flight.protocol
                 * @interface IAction
                 * @augments arrow.flight.protocol.Action.$Properties
                 * @deprecated Use arrow.flight.protocol.Action.$Properties instead.
                 */

                /**
                 * Shape of an Action.
                 * @typedef {arrow.flight.protocol.Action.$Properties} arrow.flight.protocol.Action.$Shape
                 */

                /**
                 * Constructs a new Action.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents an Action.
                 * @constructor
                 * @param {arrow.flight.protocol.Action.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var Action = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * Action type.
                 * @member {string} type
                 * @memberof arrow.flight.protocol.Action
                 * @instance
                 */
                Action.prototype.type = "";

                /**
                 * Action body.
                 * @member {Uint8Array} body
                 * @memberof arrow.flight.protocol.Action
                 * @instance
                 */
                Action.prototype.body = $util.newBuffer([]);

                /**
                 * Creates a new Action instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.Action
                 * @static
                 * @param {arrow.flight.protocol.Action.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.Action} Action instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.Action.$Shape): arrow.flight.protocol.Action & arrow.flight.protocol.Action.$Shape;
                 *   (properties?: arrow.flight.protocol.Action.$Properties): arrow.flight.protocol.Action;
                 * }}
                 */
                Action.create = function(properties) {
                    return new Action(properties);
                };

                /**
                 * Encodes the specified Action message. Does not implicitly {@link arrow.flight.protocol.Action.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.Action
                 * @static
                 * @param {arrow.flight.protocol.Action.$Properties} message Action message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Action.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.type != null && $Object.hasOwnProperty.call(message, "type") && message.type !== "")
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                    if (message.body != null && $Object.hasOwnProperty.call(message, "body") && message.body.length)
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.body);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Action message, length delimited. Does not implicitly {@link arrow.flight.protocol.Action.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.Action
                 * @static
                 * @param {arrow.flight.protocol.Action.$Properties} message Action message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Action.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes an Action message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.Action
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.Action & arrow.flight.protocol.Action.$Shape} Action
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Action.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.Action();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.stringVerify()).length)
                                    message.type = value;
                                else
                                    delete message.type;
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.bytes()).length)
                                    message.body = value;
                                else
                                    delete message.body;
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes an Action message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.Action
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.Action & arrow.flight.protocol.Action.$Shape} Action
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Action.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Action message.
                 * @function verify
                 * @memberof arrow.flight.protocol.Action
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Action.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                        if (!$util.isString(message.type))
                            return "type: string expected";
                    if (message.body != null && $Object.hasOwnProperty.call(message, "body"))
                        if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                            return "body: buffer expected";
                    return null;
                };

                /**
                 * Creates an Action message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.Action
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.Action} Action
                 */
                Action.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.Action)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.Action: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.Action();
                    if (object.type != null)
                        if (typeof object.type !== "string" || object.type.length)
                            message.type = $String(object.type);
                    if (object.body != null)
                        if (object.body.length)
                            if (typeof object.body === "string")
                                $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                            else if (object.body.length >= 0)
                                message.body = object.body;
                    return message;
                };

                /**
                 * Creates a plain object from an Action message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.Action
                 * @static
                 * @param {arrow.flight.protocol.Action} message Action
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Action.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        object.type = "";
                        if (options.bytes === $String)
                            object.body = "";
                        else {
                            object.body = [];
                            if (options.bytes !== $Array)
                                object.body = $util.newBuffer(object.body);
                        }
                    }
                    if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                        object.type = message.type;
                    if (message.body != null && $Object.hasOwnProperty.call(message, "body"))
                        object.body = options.bytes === $String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.body) : message.body;
                    return object;
                };

                /**
                 * Converts this Action to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.Action
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Action.prototype.toJSON = function() {
                    return Action.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for Action
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.Action
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                Action.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.Action";
                };

                return Action;
            })();

            protocol.Result = (function() {

                /**
                 * Properties of a Result.
                 * @typedef {Object} arrow.flight.protocol.Result.$Properties
                 * @property {Uint8Array|null} [body] Result body
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a Result.
                 * @memberof arrow.flight.protocol
                 * @interface IResult
                 * @augments arrow.flight.protocol.Result.$Properties
                 * @deprecated Use arrow.flight.protocol.Result.$Properties instead.
                 */

                /**
                 * Shape of a Result.
                 * @typedef {arrow.flight.protocol.Result.$Properties} arrow.flight.protocol.Result.$Shape
                 */

                /**
                 * Constructs a new Result.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a Result.
                 * @constructor
                 * @param {arrow.flight.protocol.Result.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var Result = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * Result body.
                 * @member {Uint8Array} body
                 * @memberof arrow.flight.protocol.Result
                 * @instance
                 */
                Result.prototype.body = $util.newBuffer([]);

                /**
                 * Creates a new Result instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.Result
                 * @static
                 * @param {arrow.flight.protocol.Result.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.Result} Result instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.Result.$Shape): arrow.flight.protocol.Result & arrow.flight.protocol.Result.$Shape;
                 *   (properties?: arrow.flight.protocol.Result.$Properties): arrow.flight.protocol.Result;
                 * }}
                 */
                Result.create = function(properties) {
                    return new Result(properties);
                };

                /**
                 * Encodes the specified Result message. Does not implicitly {@link arrow.flight.protocol.Result.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.Result
                 * @static
                 * @param {arrow.flight.protocol.Result.$Properties} message Result message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Result.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.body != null && $Object.hasOwnProperty.call(message, "body") && message.body.length)
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.body);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Result message, length delimited. Does not implicitly {@link arrow.flight.protocol.Result.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.Result
                 * @static
                 * @param {arrow.flight.protocol.Result.$Properties} message Result message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Result.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a Result message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.Result
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.Result & arrow.flight.protocol.Result.$Shape} Result
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Result.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.Result();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.bytes()).length)
                                    message.body = value;
                                else
                                    delete message.body;
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a Result message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.Result
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.Result & arrow.flight.protocol.Result.$Shape} Result
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Result.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Result message.
                 * @function verify
                 * @memberof arrow.flight.protocol.Result
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Result.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.body != null && $Object.hasOwnProperty.call(message, "body"))
                        if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                            return "body: buffer expected";
                    return null;
                };

                /**
                 * Creates a Result message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.Result
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.Result} Result
                 */
                Result.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.Result)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.Result: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.Result();
                    if (object.body != null)
                        if (object.body.length)
                            if (typeof object.body === "string")
                                $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                            else if (object.body.length >= 0)
                                message.body = object.body;
                    return message;
                };

                /**
                 * Creates a plain object from a Result message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.Result
                 * @static
                 * @param {arrow.flight.protocol.Result} message Result
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Result.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === $String)
                            object.body = "";
                        else {
                            object.body = [];
                            if (options.bytes !== $Array)
                                object.body = $util.newBuffer(object.body);
                        }
                    if (message.body != null && $Object.hasOwnProperty.call(message, "body"))
                        object.body = options.bytes === $String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.body) : message.body;
                    return object;
                };

                /**
                 * Converts this Result to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.Result
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Result.prototype.toJSON = function() {
                    return Result.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for Result
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.Result
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                Result.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.Result";
                };

                return Result;
            })();

            protocol.SchemaResult = (function() {

                /**
                 * Properties of a SchemaResult.
                 * @typedef {Object} arrow.flight.protocol.SchemaResult.$Properties
                 * @property {Uint8Array|null} [schema] SchemaResult schema
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a SchemaResult.
                 * @memberof arrow.flight.protocol
                 * @interface ISchemaResult
                 * @augments arrow.flight.protocol.SchemaResult.$Properties
                 * @deprecated Use arrow.flight.protocol.SchemaResult.$Properties instead.
                 */

                /**
                 * Shape of a SchemaResult.
                 * @typedef {arrow.flight.protocol.SchemaResult.$Properties} arrow.flight.protocol.SchemaResult.$Shape
                 */

                /**
                 * Constructs a new SchemaResult.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a SchemaResult.
                 * @constructor
                 * @param {arrow.flight.protocol.SchemaResult.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var SchemaResult = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * SchemaResult schema.
                 * @member {Uint8Array} schema
                 * @memberof arrow.flight.protocol.SchemaResult
                 * @instance
                 */
                SchemaResult.prototype.schema = $util.newBuffer([]);

                /**
                 * Creates a new SchemaResult instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.SchemaResult
                 * @static
                 * @param {arrow.flight.protocol.SchemaResult.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.SchemaResult} SchemaResult instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.SchemaResult.$Shape): arrow.flight.protocol.SchemaResult & arrow.flight.protocol.SchemaResult.$Shape;
                 *   (properties?: arrow.flight.protocol.SchemaResult.$Properties): arrow.flight.protocol.SchemaResult;
                 * }}
                 */
                SchemaResult.create = function(properties) {
                    return new SchemaResult(properties);
                };

                /**
                 * Encodes the specified SchemaResult message. Does not implicitly {@link arrow.flight.protocol.SchemaResult.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.SchemaResult
                 * @static
                 * @param {arrow.flight.protocol.SchemaResult.$Properties} message SchemaResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SchemaResult.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.schema != null && $Object.hasOwnProperty.call(message, "schema") && message.schema.length)
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.schema);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified SchemaResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.SchemaResult.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.SchemaResult
                 * @static
                 * @param {arrow.flight.protocol.SchemaResult.$Properties} message SchemaResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SchemaResult.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a SchemaResult message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.SchemaResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.SchemaResult & arrow.flight.protocol.SchemaResult.$Shape} SchemaResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SchemaResult.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.SchemaResult();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.bytes()).length)
                                    message.schema = value;
                                else
                                    delete message.schema;
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a SchemaResult message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.SchemaResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.SchemaResult & arrow.flight.protocol.SchemaResult.$Shape} SchemaResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SchemaResult.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SchemaResult message.
                 * @function verify
                 * @memberof arrow.flight.protocol.SchemaResult
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SchemaResult.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.schema != null && $Object.hasOwnProperty.call(message, "schema"))
                        if (!(message.schema && typeof message.schema.length === "number" || $util.isString(message.schema)))
                            return "schema: buffer expected";
                    return null;
                };

                /**
                 * Creates a SchemaResult message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.SchemaResult
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.SchemaResult} SchemaResult
                 */
                SchemaResult.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.SchemaResult)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.SchemaResult: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.SchemaResult();
                    if (object.schema != null)
                        if (object.schema.length)
                            if (typeof object.schema === "string")
                                $util.base64.decode(object.schema, message.schema = $util.newBuffer($util.base64.length(object.schema)), 0);
                            else if (object.schema.length >= 0)
                                message.schema = object.schema;
                    return message;
                };

                /**
                 * Creates a plain object from a SchemaResult message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.SchemaResult
                 * @static
                 * @param {arrow.flight.protocol.SchemaResult} message SchemaResult
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SchemaResult.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === $String)
                            object.schema = "";
                        else {
                            object.schema = [];
                            if (options.bytes !== $Array)
                                object.schema = $util.newBuffer(object.schema);
                        }
                    if (message.schema != null && $Object.hasOwnProperty.call(message, "schema"))
                        object.schema = options.bytes === $String ? $util.base64.encode(message.schema, 0, message.schema.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.schema) : message.schema;
                    return object;
                };

                /**
                 * Converts this SchemaResult to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.SchemaResult
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SchemaResult.prototype.toJSON = function() {
                    return SchemaResult.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for SchemaResult
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.SchemaResult
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                SchemaResult.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.SchemaResult";
                };

                return SchemaResult;
            })();

            protocol.FlightDescriptor = (function() {

                /**
                 * Properties of a FlightDescriptor.
                 * @typedef {Object} arrow.flight.protocol.FlightDescriptor.$Properties
                 * @property {arrow.flight.protocol.FlightDescriptor.DescriptorType|null} [type] FlightDescriptor type
                 * @property {Uint8Array|null} [cmd] FlightDescriptor cmd
                 * @property {Array.<string>|null} [path] FlightDescriptor path
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a FlightDescriptor.
                 * @memberof arrow.flight.protocol
                 * @interface IFlightDescriptor
                 * @augments arrow.flight.protocol.FlightDescriptor.$Properties
                 * @deprecated Use arrow.flight.protocol.FlightDescriptor.$Properties instead.
                 */

                /**
                 * Shape of a FlightDescriptor.
                 * @typedef {arrow.flight.protocol.FlightDescriptor.$Properties} arrow.flight.protocol.FlightDescriptor.$Shape
                 */

                /**
                 * Constructs a new FlightDescriptor.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a FlightDescriptor.
                 * @constructor
                 * @param {arrow.flight.protocol.FlightDescriptor.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var FlightDescriptor = function (properties) {
                    this.path = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * FlightDescriptor type.
                 * @member {arrow.flight.protocol.FlightDescriptor.DescriptorType} type
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @instance
                 */
                FlightDescriptor.prototype.type = 0;

                /**
                 * FlightDescriptor cmd.
                 * @member {Uint8Array} cmd
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @instance
                 */
                FlightDescriptor.prototype.cmd = $util.newBuffer([]);

                /**
                 * FlightDescriptor path.
                 * @member {Array.<string>} path
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @instance
                 */
                FlightDescriptor.prototype.path = $util.emptyArray;

                /**
                 * Creates a new FlightDescriptor instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @static
                 * @param {arrow.flight.protocol.FlightDescriptor.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.FlightDescriptor} FlightDescriptor instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.FlightDescriptor.$Shape): arrow.flight.protocol.FlightDescriptor & arrow.flight.protocol.FlightDescriptor.$Shape;
                 *   (properties?: arrow.flight.protocol.FlightDescriptor.$Properties): arrow.flight.protocol.FlightDescriptor;
                 * }}
                 */
                FlightDescriptor.create = function(properties) {
                    return new FlightDescriptor(properties);
                };

                /**
                 * Encodes the specified FlightDescriptor message. Does not implicitly {@link arrow.flight.protocol.FlightDescriptor.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @static
                 * @param {arrow.flight.protocol.FlightDescriptor.$Properties} message FlightDescriptor message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FlightDescriptor.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.type != null && $Object.hasOwnProperty.call(message, "type") && message.type !== 0)
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    if (message.cmd != null && $Object.hasOwnProperty.call(message, "cmd") && message.cmd.length)
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.cmd);
                    if (message.path != null && message.path.length)
                        for (var i = 0; i < message.path.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.path[i]);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified FlightDescriptor message, length delimited. Does not implicitly {@link arrow.flight.protocol.FlightDescriptor.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @static
                 * @param {arrow.flight.protocol.FlightDescriptor.$Properties} message FlightDescriptor message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FlightDescriptor.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a FlightDescriptor message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.FlightDescriptor & arrow.flight.protocol.FlightDescriptor.$Shape} FlightDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FlightDescriptor.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.FlightDescriptor();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 0)
                                    break;
                                if (value = reader.int32())
                                    message.type = value;
                                else
                                    delete message.type;
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.bytes()).length)
                                    message.cmd = value;
                                else
                                    delete message.cmd;
                                continue;
                            }
                        case 3: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                message.path.push(reader.stringVerify());
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a FlightDescriptor message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.FlightDescriptor & arrow.flight.protocol.FlightDescriptor.$Shape} FlightDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FlightDescriptor.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FlightDescriptor message.
                 * @function verify
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FlightDescriptor.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                        if (typeof message.type !== "number" || (message.type | 0) !== message.type)
                            return "type: enum value expected";
                    if (message.cmd != null && $Object.hasOwnProperty.call(message, "cmd"))
                        if (!(message.cmd && typeof message.cmd.length === "number" || $util.isString(message.cmd)))
                            return "cmd: buffer expected";
                    if (message.path != null && $Object.hasOwnProperty.call(message, "path")) {
                        if (!$Array.isArray(message.path))
                            return "path: array expected";
                        for (var i = 0; i < message.path.length; ++i)
                            if (!$util.isString(message.path[i]))
                                return "path: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a FlightDescriptor message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.FlightDescriptor} FlightDescriptor
                 */
                FlightDescriptor.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.FlightDescriptor)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.FlightDescriptor: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.FlightDescriptor();
                    if (object.type !== 0 && (typeof object.type !== "string" || $root.arrow.flight.protocol.FlightDescriptor.DescriptorType[object.type] !== 0))
                        switch (object.type) {
                        case "UNKNOWN":
                        case 0:
                            message.type = 0;
                            break;
                        case "PATH":
                        case 1:
                            message.type = 1;
                            break;
                        case "CMD":
                        case 2:
                            message.type = 2;
                            break;
                        default:
                            if (typeof object.type === "number" && (object.type | 0) === object.type)
                                message.type = object.type;
                        }
                    if (object.cmd != null)
                        if (object.cmd.length)
                            if (typeof object.cmd === "string")
                                $util.base64.decode(object.cmd, message.cmd = $util.newBuffer($util.base64.length(object.cmd)), 0);
                            else if (object.cmd.length >= 0)
                                message.cmd = object.cmd;
                    if (object.path) {
                        if (!$Array.isArray(object.path))
                            throw $TypeError(".arrow.flight.protocol.FlightDescriptor.path: array expected");
                        message.path = $Array(object.path.length);
                        for (var i = 0; i < object.path.length; ++i)
                            message.path[i] = $String(object.path[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a FlightDescriptor message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @static
                 * @param {arrow.flight.protocol.FlightDescriptor} message FlightDescriptor
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FlightDescriptor.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.path = [];
                    if (options.defaults) {
                        object.type = options.enums === $String ? "UNKNOWN" : 0;
                        if (options.bytes === $String)
                            object.cmd = "";
                        else {
                            object.cmd = [];
                            if (options.bytes !== $Array)
                                object.cmd = $util.newBuffer(object.cmd);
                        }
                    }
                    if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                        object.type = options.enums === $String ? $root.arrow.flight.protocol.FlightDescriptor.DescriptorType[message.type] === $undefined ? message.type : $root.arrow.flight.protocol.FlightDescriptor.DescriptorType[message.type] : message.type;
                    if (message.cmd != null && $Object.hasOwnProperty.call(message, "cmd"))
                        object.cmd = options.bytes === $String ? $util.base64.encode(message.cmd, 0, message.cmd.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.cmd) : message.cmd;
                    if (message.path && message.path.length) {
                        object.path = $Array(message.path.length);
                        for (var j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    return object;
                };

                /**
                 * Converts this FlightDescriptor to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FlightDescriptor.prototype.toJSON = function() {
                    return FlightDescriptor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for FlightDescriptor
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                FlightDescriptor.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.FlightDescriptor";
                };

                /**
                 * DescriptorType enum.
                 * @name arrow.flight.protocol.FlightDescriptor.DescriptorType
                 * @enum {number}
                 * @property {number} UNKNOWN=0 UNKNOWN value
                 * @property {number} PATH=1 PATH value
                 * @property {number} CMD=2 CMD value
                 */
                FlightDescriptor.DescriptorType = (function() {
                    var valuesById = $Object.create(null), values = $Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "PATH"] = 1;
                    values[valuesById[2] = "CMD"] = 2;
                    return values;
                })();

                return FlightDescriptor;
            })();

            protocol.FlightInfo = (function() {

                /**
                 * Properties of a FlightInfo.
                 * @typedef {Object} arrow.flight.protocol.FlightInfo.$Properties
                 * @property {Uint8Array|null} [schema] FlightInfo schema
                 * @property {arrow.flight.protocol.FlightDescriptor.$Properties|null} [flightDescriptor] FlightInfo flightDescriptor
                 * @property {Array.<arrow.flight.protocol.FlightEndpoint.$Properties>|null} [endpoint] FlightInfo endpoint
                 * @property {number|Long|null} [totalRecords] FlightInfo totalRecords
                 * @property {number|Long|null} [totalBytes] FlightInfo totalBytes
                 * @property {boolean|null} [ordered] FlightInfo ordered
                 * @property {Uint8Array|null} [appMetadata] FlightInfo appMetadata
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a FlightInfo.
                 * @memberof arrow.flight.protocol
                 * @interface IFlightInfo
                 * @augments arrow.flight.protocol.FlightInfo.$Properties
                 * @deprecated Use arrow.flight.protocol.FlightInfo.$Properties instead.
                 */

                /**
                 * Shape of a FlightInfo.
                 * @typedef {arrow.flight.protocol.FlightInfo.$Properties} arrow.flight.protocol.FlightInfo.$Shape
                 */

                /**
                 * Constructs a new FlightInfo.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a FlightInfo.
                 * @constructor
                 * @param {arrow.flight.protocol.FlightInfo.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var FlightInfo = function (properties) {
                    this.endpoint = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * FlightInfo schema.
                 * @member {Uint8Array} schema
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @instance
                 */
                FlightInfo.prototype.schema = $util.newBuffer([]);

                /**
                 * FlightInfo flightDescriptor.
                 * @member {arrow.flight.protocol.FlightDescriptor.$Properties|null|undefined} flightDescriptor
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @instance
                 */
                FlightInfo.prototype.flightDescriptor = null;

                /**
                 * FlightInfo endpoint.
                 * @member {Array.<arrow.flight.protocol.FlightEndpoint.$Properties>} endpoint
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @instance
                 */
                FlightInfo.prototype.endpoint = $util.emptyArray;

                /**
                 * FlightInfo totalRecords.
                 * @member {number|Long} totalRecords
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @instance
                 */
                FlightInfo.prototype.totalRecords = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * FlightInfo totalBytes.
                 * @member {number|Long} totalBytes
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @instance
                 */
                FlightInfo.prototype.totalBytes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * FlightInfo ordered.
                 * @member {boolean} ordered
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @instance
                 */
                FlightInfo.prototype.ordered = false;

                /**
                 * FlightInfo appMetadata.
                 * @member {Uint8Array} appMetadata
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @instance
                 */
                FlightInfo.prototype.appMetadata = $util.newBuffer([]);

                /**
                 * Creates a new FlightInfo instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @static
                 * @param {arrow.flight.protocol.FlightInfo.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.FlightInfo} FlightInfo instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.FlightInfo.$Shape): arrow.flight.protocol.FlightInfo & arrow.flight.protocol.FlightInfo.$Shape;
                 *   (properties?: arrow.flight.protocol.FlightInfo.$Properties): arrow.flight.protocol.FlightInfo;
                 * }}
                 */
                FlightInfo.create = function(properties) {
                    return new FlightInfo(properties);
                };

                /**
                 * Encodes the specified FlightInfo message. Does not implicitly {@link arrow.flight.protocol.FlightInfo.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @static
                 * @param {arrow.flight.protocol.FlightInfo.$Properties} message FlightInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FlightInfo.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.schema != null && $Object.hasOwnProperty.call(message, "schema") && message.schema.length)
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.schema);
                    if (message.flightDescriptor != null && $Object.hasOwnProperty.call(message, "flightDescriptor"))
                        $root.arrow.flight.protocol.FlightDescriptor.encode(message.flightDescriptor, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                    if (message.endpoint != null && message.endpoint.length)
                        for (var i = 0; i < message.endpoint.length; ++i)
                            $root.arrow.flight.protocol.FlightEndpoint.encode(message.endpoint[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                    if (message.totalRecords != null && $Object.hasOwnProperty.call(message, "totalRecords") && (typeof message.totalRecords === "object" ? message.totalRecords.low || message.totalRecords.high : message.totalRecords !== 0))
                        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.totalRecords);
                    if (message.totalBytes != null && $Object.hasOwnProperty.call(message, "totalBytes") && (typeof message.totalBytes === "object" ? message.totalBytes.low || message.totalBytes.high : message.totalBytes !== 0))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.totalBytes);
                    if (message.ordered != null && $Object.hasOwnProperty.call(message, "ordered") && message.ordered !== false)
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.ordered);
                    if (message.appMetadata != null && $Object.hasOwnProperty.call(message, "appMetadata") && message.appMetadata.length)
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.appMetadata);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified FlightInfo message, length delimited. Does not implicitly {@link arrow.flight.protocol.FlightInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @static
                 * @param {arrow.flight.protocol.FlightInfo.$Properties} message FlightInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FlightInfo.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a FlightInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.FlightInfo & arrow.flight.protocol.FlightInfo.$Shape} FlightInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FlightInfo.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.FlightInfo();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.bytes()).length)
                                    message.schema = value;
                                else
                                    delete message.schema;
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                message.flightDescriptor = $root.arrow.flight.protocol.FlightDescriptor.decode(reader, reader.uint32(), $undefined, _depth + 1, message.flightDescriptor);
                                continue;
                            }
                        case 3: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.endpoint && message.endpoint.length))
                                    message.endpoint = [];
                                message.endpoint.push($root.arrow.flight.protocol.FlightEndpoint.decode(reader, reader.uint32(), $undefined, _depth + 1));
                                continue;
                            }
                        case 4: {
                                if (wireType !== 0)
                                    break;
                                if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                    message.totalRecords = value;
                                else
                                    delete message.totalRecords;
                                continue;
                            }
                        case 5: {
                                if (wireType !== 0)
                                    break;
                                if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                    message.totalBytes = value;
                                else
                                    delete message.totalBytes;
                                continue;
                            }
                        case 6: {
                                if (wireType !== 0)
                                    break;
                                if (value = reader.bool())
                                    message.ordered = value;
                                else
                                    delete message.ordered;
                                continue;
                            }
                        case 7: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.bytes()).length)
                                    message.appMetadata = value;
                                else
                                    delete message.appMetadata;
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a FlightInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.FlightInfo & arrow.flight.protocol.FlightInfo.$Shape} FlightInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FlightInfo.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FlightInfo message.
                 * @function verify
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FlightInfo.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.schema != null && $Object.hasOwnProperty.call(message, "schema"))
                        if (!(message.schema && typeof message.schema.length === "number" || $util.isString(message.schema)))
                            return "schema: buffer expected";
                    if (message.flightDescriptor != null && $Object.hasOwnProperty.call(message, "flightDescriptor")) {
                        var error = $root.arrow.flight.protocol.FlightDescriptor.verify(message.flightDescriptor, _depth + 1);
                        if (error)
                            return "flightDescriptor." + error;
                    }
                    if (message.endpoint != null && $Object.hasOwnProperty.call(message, "endpoint")) {
                        if (!$Array.isArray(message.endpoint))
                            return "endpoint: array expected";
                        for (var i = 0; i < message.endpoint.length; ++i) {
                            var error = $root.arrow.flight.protocol.FlightEndpoint.verify(message.endpoint[i], _depth + 1);
                            if (error)
                                return "endpoint." + error;
                        }
                    }
                    if (message.totalRecords != null && $Object.hasOwnProperty.call(message, "totalRecords"))
                        if (!$util.isInteger(message.totalRecords) && !(message.totalRecords && $util.isInteger(message.totalRecords.low) && $util.isInteger(message.totalRecords.high)))
                            return "totalRecords: integer|Long expected";
                    if (message.totalBytes != null && $Object.hasOwnProperty.call(message, "totalBytes"))
                        if (!$util.isInteger(message.totalBytes) && !(message.totalBytes && $util.isInteger(message.totalBytes.low) && $util.isInteger(message.totalBytes.high)))
                            return "totalBytes: integer|Long expected";
                    if (message.ordered != null && $Object.hasOwnProperty.call(message, "ordered"))
                        if (typeof message.ordered !== "boolean")
                            return "ordered: boolean expected";
                    if (message.appMetadata != null && $Object.hasOwnProperty.call(message, "appMetadata"))
                        if (!(message.appMetadata && typeof message.appMetadata.length === "number" || $util.isString(message.appMetadata)))
                            return "appMetadata: buffer expected";
                    return null;
                };

                /**
                 * Creates a FlightInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.FlightInfo} FlightInfo
                 */
                FlightInfo.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.FlightInfo)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.FlightInfo: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.FlightInfo();
                    if (object.schema != null)
                        if (object.schema.length)
                            if (typeof object.schema === "string")
                                $util.base64.decode(object.schema, message.schema = $util.newBuffer($util.base64.length(object.schema)), 0);
                            else if (object.schema.length >= 0)
                                message.schema = object.schema;
                    if (object.flightDescriptor != null) {
                        if (!$util.isObject(object.flightDescriptor))
                            throw $TypeError(".arrow.flight.protocol.FlightInfo.flightDescriptor: object expected");
                        message.flightDescriptor = $root.arrow.flight.protocol.FlightDescriptor.fromObject(object.flightDescriptor, _depth + 1);
                    }
                    if (object.endpoint) {
                        if (!$Array.isArray(object.endpoint))
                            throw $TypeError(".arrow.flight.protocol.FlightInfo.endpoint: array expected");
                        message.endpoint = $Array(object.endpoint.length);
                        for (var i = 0; i < object.endpoint.length; ++i) {
                            if (!$util.isObject(object.endpoint[i]))
                                throw $TypeError(".arrow.flight.protocol.FlightInfo.endpoint: object expected");
                            message.endpoint[i] = $root.arrow.flight.protocol.FlightEndpoint.fromObject(object.endpoint[i], _depth + 1);
                        }
                    }
                    if (object.totalRecords != null)
                        if (typeof object.totalRecords === "object" ? object.totalRecords.low || object.totalRecords.high : $Number(object.totalRecords) !== 0)
                            if ($util.Long)
                                message.totalRecords = $util.Long.fromValue(object.totalRecords, false);
                            else if (typeof object.totalRecords === "string")
                                message.totalRecords = $parseInt(object.totalRecords, 10);
                            else if (typeof object.totalRecords === "number")
                                message.totalRecords = object.totalRecords;
                            else if (typeof object.totalRecords === "object")
                                message.totalRecords = new $util.LongBits(object.totalRecords.low >>> 0, object.totalRecords.high >>> 0).toNumber();
                    if (object.totalBytes != null)
                        if (typeof object.totalBytes === "object" ? object.totalBytes.low || object.totalBytes.high : $Number(object.totalBytes) !== 0)
                            if ($util.Long)
                                message.totalBytes = $util.Long.fromValue(object.totalBytes, false);
                            else if (typeof object.totalBytes === "string")
                                message.totalBytes = $parseInt(object.totalBytes, 10);
                            else if (typeof object.totalBytes === "number")
                                message.totalBytes = object.totalBytes;
                            else if (typeof object.totalBytes === "object")
                                message.totalBytes = new $util.LongBits(object.totalBytes.low >>> 0, object.totalBytes.high >>> 0).toNumber();
                    if (object.ordered != null)
                        if (object.ordered)
                            message.ordered = $Boolean(object.ordered);
                    if (object.appMetadata != null)
                        if (object.appMetadata.length)
                            if (typeof object.appMetadata === "string")
                                $util.base64.decode(object.appMetadata, message.appMetadata = $util.newBuffer($util.base64.length(object.appMetadata)), 0);
                            else if (object.appMetadata.length >= 0)
                                message.appMetadata = object.appMetadata;
                    return message;
                };

                /**
                 * Creates a plain object from a FlightInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @static
                 * @param {arrow.flight.protocol.FlightInfo} message FlightInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FlightInfo.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.endpoint = [];
                    if (options.defaults) {
                        if (options.bytes === $String)
                            object.schema = "";
                        else {
                            object.schema = [];
                            if (options.bytes !== $Array)
                                object.schema = $util.newBuffer(object.schema);
                        }
                        object.flightDescriptor = null;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.totalRecords = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                        } else
                            object.totalRecords = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.totalBytes = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                        } else
                            object.totalBytes = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                        object.ordered = false;
                        if (options.bytes === $String)
                            object.appMetadata = "";
                        else {
                            object.appMetadata = [];
                            if (options.bytes !== $Array)
                                object.appMetadata = $util.newBuffer(object.appMetadata);
                        }
                    }
                    if (message.schema != null && $Object.hasOwnProperty.call(message, "schema"))
                        object.schema = options.bytes === $String ? $util.base64.encode(message.schema, 0, message.schema.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.schema) : message.schema;
                    if (message.flightDescriptor != null && $Object.hasOwnProperty.call(message, "flightDescriptor"))
                        object.flightDescriptor = $root.arrow.flight.protocol.FlightDescriptor.toObject(message.flightDescriptor, options, _depth + 1);
                    if (message.endpoint && message.endpoint.length) {
                        object.endpoint = $Array(message.endpoint.length);
                        for (var j = 0; j < message.endpoint.length; ++j)
                            object.endpoint[j] = $root.arrow.flight.protocol.FlightEndpoint.toObject(message.endpoint[j], options, _depth + 1);
                    }
                    if (message.totalRecords != null && $Object.hasOwnProperty.call(message, "totalRecords"))
                        if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                            object.totalRecords = typeof message.totalRecords === "number" ? $BigInt(message.totalRecords) : $util.Long.fromBits(message.totalRecords.low >>> 0, message.totalRecords.high >>> 0, false).toBigInt();
                        else if (typeof message.totalRecords === "number")
                            object.totalRecords = options.longs === $String ? $String(message.totalRecords) : message.totalRecords;
                        else
                            object.totalRecords = options.longs === $String ? $util.Long.prototype.toString.call(message.totalRecords) : options.longs === $Number ? new $util.LongBits(message.totalRecords.low >>> 0, message.totalRecords.high >>> 0).toNumber() : message.totalRecords;
                    if (message.totalBytes != null && $Object.hasOwnProperty.call(message, "totalBytes"))
                        if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                            object.totalBytes = typeof message.totalBytes === "number" ? $BigInt(message.totalBytes) : $util.Long.fromBits(message.totalBytes.low >>> 0, message.totalBytes.high >>> 0, false).toBigInt();
                        else if (typeof message.totalBytes === "number")
                            object.totalBytes = options.longs === $String ? $String(message.totalBytes) : message.totalBytes;
                        else
                            object.totalBytes = options.longs === $String ? $util.Long.prototype.toString.call(message.totalBytes) : options.longs === $Number ? new $util.LongBits(message.totalBytes.low >>> 0, message.totalBytes.high >>> 0).toNumber() : message.totalBytes;
                    if (message.ordered != null && $Object.hasOwnProperty.call(message, "ordered"))
                        object.ordered = message.ordered;
                    if (message.appMetadata != null && $Object.hasOwnProperty.call(message, "appMetadata"))
                        object.appMetadata = options.bytes === $String ? $util.base64.encode(message.appMetadata, 0, message.appMetadata.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.appMetadata) : message.appMetadata;
                    return object;
                };

                /**
                 * Converts this FlightInfo to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FlightInfo.prototype.toJSON = function() {
                    return FlightInfo.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for FlightInfo
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                FlightInfo.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.FlightInfo";
                };

                return FlightInfo;
            })();

            protocol.PollInfo = (function() {

                /**
                 * Properties of a PollInfo.
                 * @typedef {Object} arrow.flight.protocol.PollInfo.$Properties
                 * @property {arrow.flight.protocol.FlightInfo.$Properties|null} [info] PollInfo info
                 * @property {arrow.flight.protocol.FlightDescriptor.$Properties|null} [flightDescriptor] PollInfo flightDescriptor
                 * @property {number|null} [progress] PollInfo progress
                 * @property {google.protobuf.Timestamp.$Properties|null} [expirationTime] PollInfo expirationTime
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a PollInfo.
                 * @memberof arrow.flight.protocol
                 * @interface IPollInfo
                 * @augments arrow.flight.protocol.PollInfo.$Properties
                 * @deprecated Use arrow.flight.protocol.PollInfo.$Properties instead.
                 */

                /**
                 * Shape of a PollInfo.
                 * @typedef {arrow.flight.protocol.PollInfo.$Properties} arrow.flight.protocol.PollInfo.$Shape
                 */

                /**
                 * Constructs a new PollInfo.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a PollInfo.
                 * @constructor
                 * @param {arrow.flight.protocol.PollInfo.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var PollInfo = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * PollInfo info.
                 * @member {arrow.flight.protocol.FlightInfo.$Properties|null|undefined} info
                 * @memberof arrow.flight.protocol.PollInfo
                 * @instance
                 */
                PollInfo.prototype.info = null;

                /**
                 * PollInfo flightDescriptor.
                 * @member {arrow.flight.protocol.FlightDescriptor.$Properties|null|undefined} flightDescriptor
                 * @memberof arrow.flight.protocol.PollInfo
                 * @instance
                 */
                PollInfo.prototype.flightDescriptor = null;

                /**
                 * PollInfo progress.
                 * @member {number|null|undefined} progress
                 * @memberof arrow.flight.protocol.PollInfo
                 * @instance
                 */
                PollInfo.prototype.progress = null;

                /**
                 * PollInfo expirationTime.
                 * @member {google.protobuf.Timestamp.$Properties|null|undefined} expirationTime
                 * @memberof arrow.flight.protocol.PollInfo
                 * @instance
                 */
                PollInfo.prototype.expirationTime = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(PollInfo.prototype, "_progress", {
                    get: $util.oneOfGetter($oneOfFields = ["progress"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new PollInfo instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.PollInfo
                 * @static
                 * @param {arrow.flight.protocol.PollInfo.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.PollInfo} PollInfo instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.PollInfo.$Shape): arrow.flight.protocol.PollInfo & arrow.flight.protocol.PollInfo.$Shape;
                 *   (properties?: arrow.flight.protocol.PollInfo.$Properties): arrow.flight.protocol.PollInfo;
                 * }}
                 */
                PollInfo.create = function(properties) {
                    return new PollInfo(properties);
                };

                /**
                 * Encodes the specified PollInfo message. Does not implicitly {@link arrow.flight.protocol.PollInfo.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.PollInfo
                 * @static
                 * @param {arrow.flight.protocol.PollInfo.$Properties} message PollInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PollInfo.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.info != null && $Object.hasOwnProperty.call(message, "info"))
                        $root.arrow.flight.protocol.FlightInfo.encode(message.info, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                    if (message.flightDescriptor != null && $Object.hasOwnProperty.call(message, "flightDescriptor"))
                        $root.arrow.flight.protocol.FlightDescriptor.encode(message.flightDescriptor, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                    if (message.progress != null && $Object.hasOwnProperty.call(message, "progress"))
                        writer.uint32(/* id 3, wireType 1 =*/25).double(message.progress);
                    if (message.expirationTime != null && $Object.hasOwnProperty.call(message, "expirationTime"))
                        $root.google.protobuf.Timestamp.encode(message.expirationTime, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified PollInfo message, length delimited. Does not implicitly {@link arrow.flight.protocol.PollInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.PollInfo
                 * @static
                 * @param {arrow.flight.protocol.PollInfo.$Properties} message PollInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PollInfo.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a PollInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.PollInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.PollInfo & arrow.flight.protocol.PollInfo.$Shape} PollInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PollInfo.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.PollInfo();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                message.info = $root.arrow.flight.protocol.FlightInfo.decode(reader, reader.uint32(), $undefined, _depth + 1, message.info);
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                message.flightDescriptor = $root.arrow.flight.protocol.FlightDescriptor.decode(reader, reader.uint32(), $undefined, _depth + 1, message.flightDescriptor);
                                continue;
                            }
                        case 3: {
                                if (wireType !== 1)
                                    break;
                                message.progress = reader.double();
                                message._progress = "progress";
                                continue;
                            }
                        case 4: {
                                if (wireType !== 2)
                                    break;
                                message.expirationTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32(), $undefined, _depth + 1, message.expirationTime);
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a PollInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.PollInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.PollInfo & arrow.flight.protocol.PollInfo.$Shape} PollInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PollInfo.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PollInfo message.
                 * @function verify
                 * @memberof arrow.flight.protocol.PollInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PollInfo.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    var properties = {};
                    if (message.info != null && $Object.hasOwnProperty.call(message, "info")) {
                        var error = $root.arrow.flight.protocol.FlightInfo.verify(message.info, _depth + 1);
                        if (error)
                            return "info." + error;
                    }
                    if (message.flightDescriptor != null && $Object.hasOwnProperty.call(message, "flightDescriptor")) {
                        var error = $root.arrow.flight.protocol.FlightDescriptor.verify(message.flightDescriptor, _depth + 1);
                        if (error)
                            return "flightDescriptor." + error;
                    }
                    if (message.progress != null && $Object.hasOwnProperty.call(message, "progress")) {
                        properties._progress = 1;
                        if (typeof message.progress !== "number")
                            return "progress: number expected";
                    }
                    if (message.expirationTime != null && $Object.hasOwnProperty.call(message, "expirationTime")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.expirationTime, _depth + 1);
                        if (error)
                            return "expirationTime." + error;
                    }
                    return null;
                };

                /**
                 * Creates a PollInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.PollInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.PollInfo} PollInfo
                 */
                PollInfo.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.PollInfo)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.PollInfo: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.PollInfo();
                    if (object.info != null) {
                        if (!$util.isObject(object.info))
                            throw $TypeError(".arrow.flight.protocol.PollInfo.info: object expected");
                        message.info = $root.arrow.flight.protocol.FlightInfo.fromObject(object.info, _depth + 1);
                    }
                    if (object.flightDescriptor != null) {
                        if (!$util.isObject(object.flightDescriptor))
                            throw $TypeError(".arrow.flight.protocol.PollInfo.flightDescriptor: object expected");
                        message.flightDescriptor = $root.arrow.flight.protocol.FlightDescriptor.fromObject(object.flightDescriptor, _depth + 1);
                    }
                    if (object.progress != null)
                        message.progress = $Number(object.progress);
                    if (object.expirationTime != null) {
                        if (!$util.isObject(object.expirationTime))
                            throw $TypeError(".arrow.flight.protocol.PollInfo.expirationTime: object expected");
                        message.expirationTime = $root.google.protobuf.Timestamp.fromObject(object.expirationTime, _depth + 1);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PollInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.PollInfo
                 * @static
                 * @param {arrow.flight.protocol.PollInfo} message PollInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PollInfo.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        object.info = null;
                        object.flightDescriptor = null;
                        object.expirationTime = null;
                    }
                    if (message.info != null && $Object.hasOwnProperty.call(message, "info"))
                        object.info = $root.arrow.flight.protocol.FlightInfo.toObject(message.info, options, _depth + 1);
                    if (message.flightDescriptor != null && $Object.hasOwnProperty.call(message, "flightDescriptor"))
                        object.flightDescriptor = $root.arrow.flight.protocol.FlightDescriptor.toObject(message.flightDescriptor, options, _depth + 1);
                    if (message.progress != null && $Object.hasOwnProperty.call(message, "progress"))
                        object.progress = options.json && !$isFinite(message.progress) ? $String(message.progress) : message.progress;
                    if (message.expirationTime != null && $Object.hasOwnProperty.call(message, "expirationTime"))
                        object.expirationTime = $root.google.protobuf.Timestamp.toObject(message.expirationTime, options, _depth + 1);
                    return object;
                };

                /**
                 * Converts this PollInfo to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.PollInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PollInfo.prototype.toJSON = function() {
                    return PollInfo.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for PollInfo
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.PollInfo
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                PollInfo.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.PollInfo";
                };

                return PollInfo;
            })();

            protocol.CancelFlightInfoRequest = (function() {

                /**
                 * Properties of a CancelFlightInfoRequest.
                 * @typedef {Object} arrow.flight.protocol.CancelFlightInfoRequest.$Properties
                 * @property {arrow.flight.protocol.FlightInfo.$Properties|null} [info] CancelFlightInfoRequest info
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a CancelFlightInfoRequest.
                 * @memberof arrow.flight.protocol
                 * @interface ICancelFlightInfoRequest
                 * @augments arrow.flight.protocol.CancelFlightInfoRequest.$Properties
                 * @deprecated Use arrow.flight.protocol.CancelFlightInfoRequest.$Properties instead.
                 */

                /**
                 * Shape of a CancelFlightInfoRequest.
                 * @typedef {arrow.flight.protocol.CancelFlightInfoRequest.$Properties} arrow.flight.protocol.CancelFlightInfoRequest.$Shape
                 */

                /**
                 * Constructs a new CancelFlightInfoRequest.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a CancelFlightInfoRequest.
                 * @constructor
                 * @param {arrow.flight.protocol.CancelFlightInfoRequest.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var CancelFlightInfoRequest = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * CancelFlightInfoRequest info.
                 * @member {arrow.flight.protocol.FlightInfo.$Properties|null|undefined} info
                 * @memberof arrow.flight.protocol.CancelFlightInfoRequest
                 * @instance
                 */
                CancelFlightInfoRequest.prototype.info = null;

                /**
                 * Creates a new CancelFlightInfoRequest instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.CancelFlightInfoRequest
                 * @static
                 * @param {arrow.flight.protocol.CancelFlightInfoRequest.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.CancelFlightInfoRequest} CancelFlightInfoRequest instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.CancelFlightInfoRequest.$Shape): arrow.flight.protocol.CancelFlightInfoRequest & arrow.flight.protocol.CancelFlightInfoRequest.$Shape;
                 *   (properties?: arrow.flight.protocol.CancelFlightInfoRequest.$Properties): arrow.flight.protocol.CancelFlightInfoRequest;
                 * }}
                 */
                CancelFlightInfoRequest.create = function(properties) {
                    return new CancelFlightInfoRequest(properties);
                };

                /**
                 * Encodes the specified CancelFlightInfoRequest message. Does not implicitly {@link arrow.flight.protocol.CancelFlightInfoRequest.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.CancelFlightInfoRequest
                 * @static
                 * @param {arrow.flight.protocol.CancelFlightInfoRequest.$Properties} message CancelFlightInfoRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CancelFlightInfoRequest.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.info != null && $Object.hasOwnProperty.call(message, "info"))
                        $root.arrow.flight.protocol.FlightInfo.encode(message.info, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified CancelFlightInfoRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.CancelFlightInfoRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.CancelFlightInfoRequest
                 * @static
                 * @param {arrow.flight.protocol.CancelFlightInfoRequest.$Properties} message CancelFlightInfoRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CancelFlightInfoRequest.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a CancelFlightInfoRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.CancelFlightInfoRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.CancelFlightInfoRequest & arrow.flight.protocol.CancelFlightInfoRequest.$Shape} CancelFlightInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CancelFlightInfoRequest.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.CancelFlightInfoRequest();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                message.info = $root.arrow.flight.protocol.FlightInfo.decode(reader, reader.uint32(), $undefined, _depth + 1, message.info);
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a CancelFlightInfoRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.CancelFlightInfoRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.CancelFlightInfoRequest & arrow.flight.protocol.CancelFlightInfoRequest.$Shape} CancelFlightInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CancelFlightInfoRequest.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CancelFlightInfoRequest message.
                 * @function verify
                 * @memberof arrow.flight.protocol.CancelFlightInfoRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CancelFlightInfoRequest.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.info != null && $Object.hasOwnProperty.call(message, "info")) {
                        var error = $root.arrow.flight.protocol.FlightInfo.verify(message.info, _depth + 1);
                        if (error)
                            return "info." + error;
                    }
                    return null;
                };

                /**
                 * Creates a CancelFlightInfoRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.CancelFlightInfoRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.CancelFlightInfoRequest} CancelFlightInfoRequest
                 */
                CancelFlightInfoRequest.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.CancelFlightInfoRequest)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.CancelFlightInfoRequest: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.CancelFlightInfoRequest();
                    if (object.info != null) {
                        if (!$util.isObject(object.info))
                            throw $TypeError(".arrow.flight.protocol.CancelFlightInfoRequest.info: object expected");
                        message.info = $root.arrow.flight.protocol.FlightInfo.fromObject(object.info, _depth + 1);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CancelFlightInfoRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.CancelFlightInfoRequest
                 * @static
                 * @param {arrow.flight.protocol.CancelFlightInfoRequest} message CancelFlightInfoRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CancelFlightInfoRequest.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.info = null;
                    if (message.info != null && $Object.hasOwnProperty.call(message, "info"))
                        object.info = $root.arrow.flight.protocol.FlightInfo.toObject(message.info, options, _depth + 1);
                    return object;
                };

                /**
                 * Converts this CancelFlightInfoRequest to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.CancelFlightInfoRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CancelFlightInfoRequest.prototype.toJSON = function() {
                    return CancelFlightInfoRequest.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for CancelFlightInfoRequest
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.CancelFlightInfoRequest
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                CancelFlightInfoRequest.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.CancelFlightInfoRequest";
                };

                return CancelFlightInfoRequest;
            })();

            /**
             * CancelStatus enum.
             * @name arrow.flight.protocol.CancelStatus
             * @enum {number}
             * @property {number} CANCEL_STATUS_UNSPECIFIED=0 CANCEL_STATUS_UNSPECIFIED value
             * @property {number} CANCEL_STATUS_CANCELLED=1 CANCEL_STATUS_CANCELLED value
             * @property {number} CANCEL_STATUS_CANCELLING=2 CANCEL_STATUS_CANCELLING value
             * @property {number} CANCEL_STATUS_NOT_CANCELLABLE=3 CANCEL_STATUS_NOT_CANCELLABLE value
             */
            protocol.CancelStatus = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "CANCEL_STATUS_UNSPECIFIED"] = 0;
                values[valuesById[1] = "CANCEL_STATUS_CANCELLED"] = 1;
                values[valuesById[2] = "CANCEL_STATUS_CANCELLING"] = 2;
                values[valuesById[3] = "CANCEL_STATUS_NOT_CANCELLABLE"] = 3;
                return values;
            })();

            protocol.CancelFlightInfoResult = (function() {

                /**
                 * Properties of a CancelFlightInfoResult.
                 * @typedef {Object} arrow.flight.protocol.CancelFlightInfoResult.$Properties
                 * @property {arrow.flight.protocol.CancelStatus|null} [status] CancelFlightInfoResult status
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a CancelFlightInfoResult.
                 * @memberof arrow.flight.protocol
                 * @interface ICancelFlightInfoResult
                 * @augments arrow.flight.protocol.CancelFlightInfoResult.$Properties
                 * @deprecated Use arrow.flight.protocol.CancelFlightInfoResult.$Properties instead.
                 */

                /**
                 * Shape of a CancelFlightInfoResult.
                 * @typedef {arrow.flight.protocol.CancelFlightInfoResult.$Properties} arrow.flight.protocol.CancelFlightInfoResult.$Shape
                 */

                /**
                 * Constructs a new CancelFlightInfoResult.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a CancelFlightInfoResult.
                 * @constructor
                 * @param {arrow.flight.protocol.CancelFlightInfoResult.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var CancelFlightInfoResult = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * CancelFlightInfoResult status.
                 * @member {arrow.flight.protocol.CancelStatus} status
                 * @memberof arrow.flight.protocol.CancelFlightInfoResult
                 * @instance
                 */
                CancelFlightInfoResult.prototype.status = 0;

                /**
                 * Creates a new CancelFlightInfoResult instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.CancelFlightInfoResult
                 * @static
                 * @param {arrow.flight.protocol.CancelFlightInfoResult.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.CancelFlightInfoResult} CancelFlightInfoResult instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.CancelFlightInfoResult.$Shape): arrow.flight.protocol.CancelFlightInfoResult & arrow.flight.protocol.CancelFlightInfoResult.$Shape;
                 *   (properties?: arrow.flight.protocol.CancelFlightInfoResult.$Properties): arrow.flight.protocol.CancelFlightInfoResult;
                 * }}
                 */
                CancelFlightInfoResult.create = function(properties) {
                    return new CancelFlightInfoResult(properties);
                };

                /**
                 * Encodes the specified CancelFlightInfoResult message. Does not implicitly {@link arrow.flight.protocol.CancelFlightInfoResult.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.CancelFlightInfoResult
                 * @static
                 * @param {arrow.flight.protocol.CancelFlightInfoResult.$Properties} message CancelFlightInfoResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CancelFlightInfoResult.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.status != null && $Object.hasOwnProperty.call(message, "status") && message.status !== 0)
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified CancelFlightInfoResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.CancelFlightInfoResult.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.CancelFlightInfoResult
                 * @static
                 * @param {arrow.flight.protocol.CancelFlightInfoResult.$Properties} message CancelFlightInfoResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CancelFlightInfoResult.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a CancelFlightInfoResult message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.CancelFlightInfoResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.CancelFlightInfoResult & arrow.flight.protocol.CancelFlightInfoResult.$Shape} CancelFlightInfoResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CancelFlightInfoResult.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.CancelFlightInfoResult();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 0)
                                    break;
                                if (value = reader.int32())
                                    message.status = value;
                                else
                                    delete message.status;
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a CancelFlightInfoResult message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.CancelFlightInfoResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.CancelFlightInfoResult & arrow.flight.protocol.CancelFlightInfoResult.$Shape} CancelFlightInfoResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CancelFlightInfoResult.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CancelFlightInfoResult message.
                 * @function verify
                 * @memberof arrow.flight.protocol.CancelFlightInfoResult
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CancelFlightInfoResult.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                        if (typeof message.status !== "number" || (message.status | 0) !== message.status)
                            return "status: enum value expected";
                    return null;
                };

                /**
                 * Creates a CancelFlightInfoResult message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.CancelFlightInfoResult
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.CancelFlightInfoResult} CancelFlightInfoResult
                 */
                CancelFlightInfoResult.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.CancelFlightInfoResult)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.CancelFlightInfoResult: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.CancelFlightInfoResult();
                    if (object.status !== 0 && (typeof object.status !== "string" || $root.arrow.flight.protocol.CancelStatus[object.status] !== 0))
                        switch (object.status) {
                        case "CANCEL_STATUS_UNSPECIFIED":
                        case 0:
                            message.status = 0;
                            break;
                        case "CANCEL_STATUS_CANCELLED":
                        case 1:
                            message.status = 1;
                            break;
                        case "CANCEL_STATUS_CANCELLING":
                        case 2:
                            message.status = 2;
                            break;
                        case "CANCEL_STATUS_NOT_CANCELLABLE":
                        case 3:
                            message.status = 3;
                            break;
                        default:
                            if (typeof object.status === "number" && (object.status | 0) === object.status)
                                message.status = object.status;
                        }
                    return message;
                };

                /**
                 * Creates a plain object from a CancelFlightInfoResult message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.CancelFlightInfoResult
                 * @static
                 * @param {arrow.flight.protocol.CancelFlightInfoResult} message CancelFlightInfoResult
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CancelFlightInfoResult.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.status = options.enums === $String ? "CANCEL_STATUS_UNSPECIFIED" : 0;
                    if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                        object.status = options.enums === $String ? $root.arrow.flight.protocol.CancelStatus[message.status] === $undefined ? message.status : $root.arrow.flight.protocol.CancelStatus[message.status] : message.status;
                    return object;
                };

                /**
                 * Converts this CancelFlightInfoResult to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.CancelFlightInfoResult
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CancelFlightInfoResult.prototype.toJSON = function() {
                    return CancelFlightInfoResult.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for CancelFlightInfoResult
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.CancelFlightInfoResult
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                CancelFlightInfoResult.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.CancelFlightInfoResult";
                };

                return CancelFlightInfoResult;
            })();

            protocol.Ticket = (function() {

                /**
                 * Properties of a Ticket.
                 * @typedef {Object} arrow.flight.protocol.Ticket.$Properties
                 * @property {Uint8Array|null} [ticket] Ticket ticket
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a Ticket.
                 * @memberof arrow.flight.protocol
                 * @interface ITicket
                 * @augments arrow.flight.protocol.Ticket.$Properties
                 * @deprecated Use arrow.flight.protocol.Ticket.$Properties instead.
                 */

                /**
                 * Shape of a Ticket.
                 * @typedef {arrow.flight.protocol.Ticket.$Properties} arrow.flight.protocol.Ticket.$Shape
                 */

                /**
                 * Constructs a new Ticket.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a Ticket.
                 * @constructor
                 * @param {arrow.flight.protocol.Ticket.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var Ticket = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * Ticket ticket.
                 * @member {Uint8Array} ticket
                 * @memberof arrow.flight.protocol.Ticket
                 * @instance
                 */
                Ticket.prototype.ticket = $util.newBuffer([]);

                /**
                 * Creates a new Ticket instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.Ticket
                 * @static
                 * @param {arrow.flight.protocol.Ticket.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.Ticket} Ticket instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.Ticket.$Shape): arrow.flight.protocol.Ticket & arrow.flight.protocol.Ticket.$Shape;
                 *   (properties?: arrow.flight.protocol.Ticket.$Properties): arrow.flight.protocol.Ticket;
                 * }}
                 */
                Ticket.create = function(properties) {
                    return new Ticket(properties);
                };

                /**
                 * Encodes the specified Ticket message. Does not implicitly {@link arrow.flight.protocol.Ticket.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.Ticket
                 * @static
                 * @param {arrow.flight.protocol.Ticket.$Properties} message Ticket message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Ticket.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.ticket != null && $Object.hasOwnProperty.call(message, "ticket") && message.ticket.length)
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ticket);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Ticket message, length delimited. Does not implicitly {@link arrow.flight.protocol.Ticket.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.Ticket
                 * @static
                 * @param {arrow.flight.protocol.Ticket.$Properties} message Ticket message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Ticket.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a Ticket message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.Ticket
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.Ticket & arrow.flight.protocol.Ticket.$Shape} Ticket
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Ticket.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.Ticket();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.bytes()).length)
                                    message.ticket = value;
                                else
                                    delete message.ticket;
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a Ticket message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.Ticket
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.Ticket & arrow.flight.protocol.Ticket.$Shape} Ticket
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Ticket.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Ticket message.
                 * @function verify
                 * @memberof arrow.flight.protocol.Ticket
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Ticket.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.ticket != null && $Object.hasOwnProperty.call(message, "ticket"))
                        if (!(message.ticket && typeof message.ticket.length === "number" || $util.isString(message.ticket)))
                            return "ticket: buffer expected";
                    return null;
                };

                /**
                 * Creates a Ticket message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.Ticket
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.Ticket} Ticket
                 */
                Ticket.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.Ticket)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.Ticket: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.Ticket();
                    if (object.ticket != null)
                        if (object.ticket.length)
                            if (typeof object.ticket === "string")
                                $util.base64.decode(object.ticket, message.ticket = $util.newBuffer($util.base64.length(object.ticket)), 0);
                            else if (object.ticket.length >= 0)
                                message.ticket = object.ticket;
                    return message;
                };

                /**
                 * Creates a plain object from a Ticket message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.Ticket
                 * @static
                 * @param {arrow.flight.protocol.Ticket} message Ticket
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Ticket.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === $String)
                            object.ticket = "";
                        else {
                            object.ticket = [];
                            if (options.bytes !== $Array)
                                object.ticket = $util.newBuffer(object.ticket);
                        }
                    if (message.ticket != null && $Object.hasOwnProperty.call(message, "ticket"))
                        object.ticket = options.bytes === $String ? $util.base64.encode(message.ticket, 0, message.ticket.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.ticket) : message.ticket;
                    return object;
                };

                /**
                 * Converts this Ticket to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.Ticket
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Ticket.prototype.toJSON = function() {
                    return Ticket.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for Ticket
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.Ticket
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                Ticket.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.Ticket";
                };

                return Ticket;
            })();

            protocol.Location = (function() {

                /**
                 * Properties of a Location.
                 * @typedef {Object} arrow.flight.protocol.Location.$Properties
                 * @property {string|null} [uri] Location uri
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a Location.
                 * @memberof arrow.flight.protocol
                 * @interface ILocation
                 * @augments arrow.flight.protocol.Location.$Properties
                 * @deprecated Use arrow.flight.protocol.Location.$Properties instead.
                 */

                /**
                 * Shape of a Location.
                 * @typedef {arrow.flight.protocol.Location.$Properties} arrow.flight.protocol.Location.$Shape
                 */

                /**
                 * Constructs a new Location.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a Location.
                 * @constructor
                 * @param {arrow.flight.protocol.Location.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var Location = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * Location uri.
                 * @member {string} uri
                 * @memberof arrow.flight.protocol.Location
                 * @instance
                 */
                Location.prototype.uri = "";

                /**
                 * Creates a new Location instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.Location
                 * @static
                 * @param {arrow.flight.protocol.Location.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.Location} Location instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.Location.$Shape): arrow.flight.protocol.Location & arrow.flight.protocol.Location.$Shape;
                 *   (properties?: arrow.flight.protocol.Location.$Properties): arrow.flight.protocol.Location;
                 * }}
                 */
                Location.create = function(properties) {
                    return new Location(properties);
                };

                /**
                 * Encodes the specified Location message. Does not implicitly {@link arrow.flight.protocol.Location.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.Location
                 * @static
                 * @param {arrow.flight.protocol.Location.$Properties} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.uri != null && $Object.hasOwnProperty.call(message, "uri") && message.uri !== "")
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link arrow.flight.protocol.Location.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.Location
                 * @static
                 * @param {arrow.flight.protocol.Location.$Properties} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.Location & arrow.flight.protocol.Location.$Shape} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.Location();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.stringVerify()).length)
                                    message.uri = value;
                                else
                                    delete message.uri;
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.Location & arrow.flight.protocol.Location.$Shape} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Location message.
                 * @function verify
                 * @memberof arrow.flight.protocol.Location
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Location.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.uri != null && $Object.hasOwnProperty.call(message, "uri"))
                        if (!$util.isString(message.uri))
                            return "uri: string expected";
                    return null;
                };

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.Location
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.Location} Location
                 */
                Location.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.Location)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.Location: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.Location();
                    if (object.uri != null)
                        if (typeof object.uri !== "string" || object.uri.length)
                            message.uri = $String(object.uri);
                    return message;
                };

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.Location
                 * @static
                 * @param {arrow.flight.protocol.Location} message Location
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Location.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.uri = "";
                    if (message.uri != null && $Object.hasOwnProperty.call(message, "uri"))
                        object.uri = message.uri;
                    return object;
                };

                /**
                 * Converts this Location to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.Location
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Location.prototype.toJSON = function() {
                    return Location.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for Location
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.Location
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                Location.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.Location";
                };

                return Location;
            })();

            protocol.FlightEndpoint = (function() {

                /**
                 * Properties of a FlightEndpoint.
                 * @typedef {Object} arrow.flight.protocol.FlightEndpoint.$Properties
                 * @property {arrow.flight.protocol.Ticket.$Properties|null} [ticket] FlightEndpoint ticket
                 * @property {Array.<arrow.flight.protocol.Location.$Properties>|null} [location] FlightEndpoint location
                 * @property {google.protobuf.Timestamp.$Properties|null} [expirationTime] FlightEndpoint expirationTime
                 * @property {Uint8Array|null} [appMetadata] FlightEndpoint appMetadata
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a FlightEndpoint.
                 * @memberof arrow.flight.protocol
                 * @interface IFlightEndpoint
                 * @augments arrow.flight.protocol.FlightEndpoint.$Properties
                 * @deprecated Use arrow.flight.protocol.FlightEndpoint.$Properties instead.
                 */

                /**
                 * Shape of a FlightEndpoint.
                 * @typedef {arrow.flight.protocol.FlightEndpoint.$Properties} arrow.flight.protocol.FlightEndpoint.$Shape
                 */

                /**
                 * Constructs a new FlightEndpoint.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a FlightEndpoint.
                 * @constructor
                 * @param {arrow.flight.protocol.FlightEndpoint.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var FlightEndpoint = function (properties) {
                    this.location = [];
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * FlightEndpoint ticket.
                 * @member {arrow.flight.protocol.Ticket.$Properties|null|undefined} ticket
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @instance
                 */
                FlightEndpoint.prototype.ticket = null;

                /**
                 * FlightEndpoint location.
                 * @member {Array.<arrow.flight.protocol.Location.$Properties>} location
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @instance
                 */
                FlightEndpoint.prototype.location = $util.emptyArray;

                /**
                 * FlightEndpoint expirationTime.
                 * @member {google.protobuf.Timestamp.$Properties|null|undefined} expirationTime
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @instance
                 */
                FlightEndpoint.prototype.expirationTime = null;

                /**
                 * FlightEndpoint appMetadata.
                 * @member {Uint8Array} appMetadata
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @instance
                 */
                FlightEndpoint.prototype.appMetadata = $util.newBuffer([]);

                /**
                 * Creates a new FlightEndpoint instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @static
                 * @param {arrow.flight.protocol.FlightEndpoint.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.FlightEndpoint} FlightEndpoint instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.FlightEndpoint.$Shape): arrow.flight.protocol.FlightEndpoint & arrow.flight.protocol.FlightEndpoint.$Shape;
                 *   (properties?: arrow.flight.protocol.FlightEndpoint.$Properties): arrow.flight.protocol.FlightEndpoint;
                 * }}
                 */
                FlightEndpoint.create = function(properties) {
                    return new FlightEndpoint(properties);
                };

                /**
                 * Encodes the specified FlightEndpoint message. Does not implicitly {@link arrow.flight.protocol.FlightEndpoint.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @static
                 * @param {arrow.flight.protocol.FlightEndpoint.$Properties} message FlightEndpoint message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FlightEndpoint.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.ticket != null && $Object.hasOwnProperty.call(message, "ticket"))
                        $root.arrow.flight.protocol.Ticket.encode(message.ticket, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                    if (message.location != null && message.location.length)
                        for (var i = 0; i < message.location.length; ++i)
                            $root.arrow.flight.protocol.Location.encode(message.location[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                    if (message.expirationTime != null && $Object.hasOwnProperty.call(message, "expirationTime"))
                        $root.google.protobuf.Timestamp.encode(message.expirationTime, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                    if (message.appMetadata != null && $Object.hasOwnProperty.call(message, "appMetadata") && message.appMetadata.length)
                        writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.appMetadata);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified FlightEndpoint message, length delimited. Does not implicitly {@link arrow.flight.protocol.FlightEndpoint.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @static
                 * @param {arrow.flight.protocol.FlightEndpoint.$Properties} message FlightEndpoint message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FlightEndpoint.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a FlightEndpoint message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.FlightEndpoint & arrow.flight.protocol.FlightEndpoint.$Shape} FlightEndpoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FlightEndpoint.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.FlightEndpoint();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                message.ticket = $root.arrow.flight.protocol.Ticket.decode(reader, reader.uint32(), $undefined, _depth + 1, message.ticket);
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                if (!(message.location && message.location.length))
                                    message.location = [];
                                message.location.push($root.arrow.flight.protocol.Location.decode(reader, reader.uint32(), $undefined, _depth + 1));
                                continue;
                            }
                        case 3: {
                                if (wireType !== 2)
                                    break;
                                message.expirationTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32(), $undefined, _depth + 1, message.expirationTime);
                                continue;
                            }
                        case 4: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.bytes()).length)
                                    message.appMetadata = value;
                                else
                                    delete message.appMetadata;
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a FlightEndpoint message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.FlightEndpoint & arrow.flight.protocol.FlightEndpoint.$Shape} FlightEndpoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FlightEndpoint.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FlightEndpoint message.
                 * @function verify
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FlightEndpoint.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.ticket != null && $Object.hasOwnProperty.call(message, "ticket")) {
                        var error = $root.arrow.flight.protocol.Ticket.verify(message.ticket, _depth + 1);
                        if (error)
                            return "ticket." + error;
                    }
                    if (message.location != null && $Object.hasOwnProperty.call(message, "location")) {
                        if (!$Array.isArray(message.location))
                            return "location: array expected";
                        for (var i = 0; i < message.location.length; ++i) {
                            var error = $root.arrow.flight.protocol.Location.verify(message.location[i], _depth + 1);
                            if (error)
                                return "location." + error;
                        }
                    }
                    if (message.expirationTime != null && $Object.hasOwnProperty.call(message, "expirationTime")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.expirationTime, _depth + 1);
                        if (error)
                            return "expirationTime." + error;
                    }
                    if (message.appMetadata != null && $Object.hasOwnProperty.call(message, "appMetadata"))
                        if (!(message.appMetadata && typeof message.appMetadata.length === "number" || $util.isString(message.appMetadata)))
                            return "appMetadata: buffer expected";
                    return null;
                };

                /**
                 * Creates a FlightEndpoint message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.FlightEndpoint} FlightEndpoint
                 */
                FlightEndpoint.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.FlightEndpoint)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.FlightEndpoint: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.FlightEndpoint();
                    if (object.ticket != null) {
                        if (!$util.isObject(object.ticket))
                            throw $TypeError(".arrow.flight.protocol.FlightEndpoint.ticket: object expected");
                        message.ticket = $root.arrow.flight.protocol.Ticket.fromObject(object.ticket, _depth + 1);
                    }
                    if (object.location) {
                        if (!$Array.isArray(object.location))
                            throw $TypeError(".arrow.flight.protocol.FlightEndpoint.location: array expected");
                        message.location = $Array(object.location.length);
                        for (var i = 0; i < object.location.length; ++i) {
                            if (!$util.isObject(object.location[i]))
                                throw $TypeError(".arrow.flight.protocol.FlightEndpoint.location: object expected");
                            message.location[i] = $root.arrow.flight.protocol.Location.fromObject(object.location[i], _depth + 1);
                        }
                    }
                    if (object.expirationTime != null) {
                        if (!$util.isObject(object.expirationTime))
                            throw $TypeError(".arrow.flight.protocol.FlightEndpoint.expirationTime: object expected");
                        message.expirationTime = $root.google.protobuf.Timestamp.fromObject(object.expirationTime, _depth + 1);
                    }
                    if (object.appMetadata != null)
                        if (object.appMetadata.length)
                            if (typeof object.appMetadata === "string")
                                $util.base64.decode(object.appMetadata, message.appMetadata = $util.newBuffer($util.base64.length(object.appMetadata)), 0);
                            else if (object.appMetadata.length >= 0)
                                message.appMetadata = object.appMetadata;
                    return message;
                };

                /**
                 * Creates a plain object from a FlightEndpoint message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @static
                 * @param {arrow.flight.protocol.FlightEndpoint} message FlightEndpoint
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FlightEndpoint.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.location = [];
                    if (options.defaults) {
                        object.ticket = null;
                        object.expirationTime = null;
                        if (options.bytes === $String)
                            object.appMetadata = "";
                        else {
                            object.appMetadata = [];
                            if (options.bytes !== $Array)
                                object.appMetadata = $util.newBuffer(object.appMetadata);
                        }
                    }
                    if (message.ticket != null && $Object.hasOwnProperty.call(message, "ticket"))
                        object.ticket = $root.arrow.flight.protocol.Ticket.toObject(message.ticket, options, _depth + 1);
                    if (message.location && message.location.length) {
                        object.location = $Array(message.location.length);
                        for (var j = 0; j < message.location.length; ++j)
                            object.location[j] = $root.arrow.flight.protocol.Location.toObject(message.location[j], options, _depth + 1);
                    }
                    if (message.expirationTime != null && $Object.hasOwnProperty.call(message, "expirationTime"))
                        object.expirationTime = $root.google.protobuf.Timestamp.toObject(message.expirationTime, options, _depth + 1);
                    if (message.appMetadata != null && $Object.hasOwnProperty.call(message, "appMetadata"))
                        object.appMetadata = options.bytes === $String ? $util.base64.encode(message.appMetadata, 0, message.appMetadata.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.appMetadata) : message.appMetadata;
                    return object;
                };

                /**
                 * Converts this FlightEndpoint to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FlightEndpoint.prototype.toJSON = function() {
                    return FlightEndpoint.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for FlightEndpoint
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                FlightEndpoint.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.FlightEndpoint";
                };

                return FlightEndpoint;
            })();

            protocol.RenewFlightEndpointRequest = (function() {

                /**
                 * Properties of a RenewFlightEndpointRequest.
                 * @typedef {Object} arrow.flight.protocol.RenewFlightEndpointRequest.$Properties
                 * @property {arrow.flight.protocol.FlightEndpoint.$Properties|null} [endpoint] RenewFlightEndpointRequest endpoint
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a RenewFlightEndpointRequest.
                 * @memberof arrow.flight.protocol
                 * @interface IRenewFlightEndpointRequest
                 * @augments arrow.flight.protocol.RenewFlightEndpointRequest.$Properties
                 * @deprecated Use arrow.flight.protocol.RenewFlightEndpointRequest.$Properties instead.
                 */

                /**
                 * Shape of a RenewFlightEndpointRequest.
                 * @typedef {arrow.flight.protocol.RenewFlightEndpointRequest.$Properties} arrow.flight.protocol.RenewFlightEndpointRequest.$Shape
                 */

                /**
                 * Constructs a new RenewFlightEndpointRequest.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a RenewFlightEndpointRequest.
                 * @constructor
                 * @param {arrow.flight.protocol.RenewFlightEndpointRequest.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var RenewFlightEndpointRequest = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * RenewFlightEndpointRequest endpoint.
                 * @member {arrow.flight.protocol.FlightEndpoint.$Properties|null|undefined} endpoint
                 * @memberof arrow.flight.protocol.RenewFlightEndpointRequest
                 * @instance
                 */
                RenewFlightEndpointRequest.prototype.endpoint = null;

                /**
                 * Creates a new RenewFlightEndpointRequest instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.RenewFlightEndpointRequest
                 * @static
                 * @param {arrow.flight.protocol.RenewFlightEndpointRequest.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.RenewFlightEndpointRequest} RenewFlightEndpointRequest instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.RenewFlightEndpointRequest.$Shape): arrow.flight.protocol.RenewFlightEndpointRequest & arrow.flight.protocol.RenewFlightEndpointRequest.$Shape;
                 *   (properties?: arrow.flight.protocol.RenewFlightEndpointRequest.$Properties): arrow.flight.protocol.RenewFlightEndpointRequest;
                 * }}
                 */
                RenewFlightEndpointRequest.create = function(properties) {
                    return new RenewFlightEndpointRequest(properties);
                };

                /**
                 * Encodes the specified RenewFlightEndpointRequest message. Does not implicitly {@link arrow.flight.protocol.RenewFlightEndpointRequest.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.RenewFlightEndpointRequest
                 * @static
                 * @param {arrow.flight.protocol.RenewFlightEndpointRequest.$Properties} message RenewFlightEndpointRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RenewFlightEndpointRequest.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.endpoint != null && $Object.hasOwnProperty.call(message, "endpoint"))
                        $root.arrow.flight.protocol.FlightEndpoint.encode(message.endpoint, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified RenewFlightEndpointRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.RenewFlightEndpointRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.RenewFlightEndpointRequest
                 * @static
                 * @param {arrow.flight.protocol.RenewFlightEndpointRequest.$Properties} message RenewFlightEndpointRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RenewFlightEndpointRequest.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a RenewFlightEndpointRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.RenewFlightEndpointRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.RenewFlightEndpointRequest & arrow.flight.protocol.RenewFlightEndpointRequest.$Shape} RenewFlightEndpointRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RenewFlightEndpointRequest.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.RenewFlightEndpointRequest();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                message.endpoint = $root.arrow.flight.protocol.FlightEndpoint.decode(reader, reader.uint32(), $undefined, _depth + 1, message.endpoint);
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a RenewFlightEndpointRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.RenewFlightEndpointRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.RenewFlightEndpointRequest & arrow.flight.protocol.RenewFlightEndpointRequest.$Shape} RenewFlightEndpointRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RenewFlightEndpointRequest.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RenewFlightEndpointRequest message.
                 * @function verify
                 * @memberof arrow.flight.protocol.RenewFlightEndpointRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RenewFlightEndpointRequest.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.endpoint != null && $Object.hasOwnProperty.call(message, "endpoint")) {
                        var error = $root.arrow.flight.protocol.FlightEndpoint.verify(message.endpoint, _depth + 1);
                        if (error)
                            return "endpoint." + error;
                    }
                    return null;
                };

                /**
                 * Creates a RenewFlightEndpointRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.RenewFlightEndpointRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.RenewFlightEndpointRequest} RenewFlightEndpointRequest
                 */
                RenewFlightEndpointRequest.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.RenewFlightEndpointRequest)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.RenewFlightEndpointRequest: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.RenewFlightEndpointRequest();
                    if (object.endpoint != null) {
                        if (!$util.isObject(object.endpoint))
                            throw $TypeError(".arrow.flight.protocol.RenewFlightEndpointRequest.endpoint: object expected");
                        message.endpoint = $root.arrow.flight.protocol.FlightEndpoint.fromObject(object.endpoint, _depth + 1);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a RenewFlightEndpointRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.RenewFlightEndpointRequest
                 * @static
                 * @param {arrow.flight.protocol.RenewFlightEndpointRequest} message RenewFlightEndpointRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RenewFlightEndpointRequest.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.endpoint = null;
                    if (message.endpoint != null && $Object.hasOwnProperty.call(message, "endpoint"))
                        object.endpoint = $root.arrow.flight.protocol.FlightEndpoint.toObject(message.endpoint, options, _depth + 1);
                    return object;
                };

                /**
                 * Converts this RenewFlightEndpointRequest to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.RenewFlightEndpointRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RenewFlightEndpointRequest.prototype.toJSON = function() {
                    return RenewFlightEndpointRequest.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for RenewFlightEndpointRequest
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.RenewFlightEndpointRequest
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                RenewFlightEndpointRequest.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.RenewFlightEndpointRequest";
                };

                return RenewFlightEndpointRequest;
            })();

            protocol.FlightData = (function() {

                /**
                 * Properties of a FlightData.
                 * @typedef {Object} arrow.flight.protocol.FlightData.$Properties
                 * @property {arrow.flight.protocol.FlightDescriptor.$Properties|null} [flightDescriptor] FlightData flightDescriptor
                 * @property {Uint8Array|null} [dataHeader] FlightData dataHeader
                 * @property {Uint8Array|null} [appMetadata] FlightData appMetadata
                 * @property {Uint8Array|null} [dataBody] FlightData dataBody
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a FlightData.
                 * @memberof arrow.flight.protocol
                 * @interface IFlightData
                 * @augments arrow.flight.protocol.FlightData.$Properties
                 * @deprecated Use arrow.flight.protocol.FlightData.$Properties instead.
                 */

                /**
                 * Shape of a FlightData.
                 * @typedef {arrow.flight.protocol.FlightData.$Properties} arrow.flight.protocol.FlightData.$Shape
                 */

                /**
                 * Constructs a new FlightData.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a FlightData.
                 * @constructor
                 * @param {arrow.flight.protocol.FlightData.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var FlightData = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * FlightData flightDescriptor.
                 * @member {arrow.flight.protocol.FlightDescriptor.$Properties|null|undefined} flightDescriptor
                 * @memberof arrow.flight.protocol.FlightData
                 * @instance
                 */
                FlightData.prototype.flightDescriptor = null;

                /**
                 * FlightData dataHeader.
                 * @member {Uint8Array} dataHeader
                 * @memberof arrow.flight.protocol.FlightData
                 * @instance
                 */
                FlightData.prototype.dataHeader = $util.newBuffer([]);

                /**
                 * FlightData appMetadata.
                 * @member {Uint8Array} appMetadata
                 * @memberof arrow.flight.protocol.FlightData
                 * @instance
                 */
                FlightData.prototype.appMetadata = $util.newBuffer([]);

                /**
                 * FlightData dataBody.
                 * @member {Uint8Array} dataBody
                 * @memberof arrow.flight.protocol.FlightData
                 * @instance
                 */
                FlightData.prototype.dataBody = $util.newBuffer([]);

                /**
                 * Creates a new FlightData instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.FlightData
                 * @static
                 * @param {arrow.flight.protocol.FlightData.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.FlightData} FlightData instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.FlightData.$Shape): arrow.flight.protocol.FlightData & arrow.flight.protocol.FlightData.$Shape;
                 *   (properties?: arrow.flight.protocol.FlightData.$Properties): arrow.flight.protocol.FlightData;
                 * }}
                 */
                FlightData.create = function(properties) {
                    return new FlightData(properties);
                };

                /**
                 * Encodes the specified FlightData message. Does not implicitly {@link arrow.flight.protocol.FlightData.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.FlightData
                 * @static
                 * @param {arrow.flight.protocol.FlightData.$Properties} message FlightData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FlightData.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.flightDescriptor != null && $Object.hasOwnProperty.call(message, "flightDescriptor"))
                        $root.arrow.flight.protocol.FlightDescriptor.encode(message.flightDescriptor, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                    if (message.dataHeader != null && $Object.hasOwnProperty.call(message, "dataHeader") && message.dataHeader.length)
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.dataHeader);
                    if (message.appMetadata != null && $Object.hasOwnProperty.call(message, "appMetadata") && message.appMetadata.length)
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.appMetadata);
                    if (message.dataBody != null && $Object.hasOwnProperty.call(message, "dataBody") && message.dataBody.length)
                        writer.uint32(/* id 1000, wireType 2 =*/8002).bytes(message.dataBody);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified FlightData message, length delimited. Does not implicitly {@link arrow.flight.protocol.FlightData.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.FlightData
                 * @static
                 * @param {arrow.flight.protocol.FlightData.$Properties} message FlightData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FlightData.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a FlightData message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.FlightData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.FlightData & arrow.flight.protocol.FlightData.$Shape} FlightData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FlightData.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.FlightData();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                message.flightDescriptor = $root.arrow.flight.protocol.FlightDescriptor.decode(reader, reader.uint32(), $undefined, _depth + 1, message.flightDescriptor);
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.bytes()).length)
                                    message.dataHeader = value;
                                else
                                    delete message.dataHeader;
                                continue;
                            }
                        case 3: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.bytes()).length)
                                    message.appMetadata = value;
                                else
                                    delete message.appMetadata;
                                continue;
                            }
                        case 1000: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.bytes()).length)
                                    message.dataBody = value;
                                else
                                    delete message.dataBody;
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a FlightData message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.FlightData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.FlightData & arrow.flight.protocol.FlightData.$Shape} FlightData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FlightData.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FlightData message.
                 * @function verify
                 * @memberof arrow.flight.protocol.FlightData
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FlightData.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.flightDescriptor != null && $Object.hasOwnProperty.call(message, "flightDescriptor")) {
                        var error = $root.arrow.flight.protocol.FlightDescriptor.verify(message.flightDescriptor, _depth + 1);
                        if (error)
                            return "flightDescriptor." + error;
                    }
                    if (message.dataHeader != null && $Object.hasOwnProperty.call(message, "dataHeader"))
                        if (!(message.dataHeader && typeof message.dataHeader.length === "number" || $util.isString(message.dataHeader)))
                            return "dataHeader: buffer expected";
                    if (message.appMetadata != null && $Object.hasOwnProperty.call(message, "appMetadata"))
                        if (!(message.appMetadata && typeof message.appMetadata.length === "number" || $util.isString(message.appMetadata)))
                            return "appMetadata: buffer expected";
                    if (message.dataBody != null && $Object.hasOwnProperty.call(message, "dataBody"))
                        if (!(message.dataBody && typeof message.dataBody.length === "number" || $util.isString(message.dataBody)))
                            return "dataBody: buffer expected";
                    return null;
                };

                /**
                 * Creates a FlightData message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.FlightData
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.FlightData} FlightData
                 */
                FlightData.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.FlightData)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.FlightData: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.FlightData();
                    if (object.flightDescriptor != null) {
                        if (!$util.isObject(object.flightDescriptor))
                            throw $TypeError(".arrow.flight.protocol.FlightData.flightDescriptor: object expected");
                        message.flightDescriptor = $root.arrow.flight.protocol.FlightDescriptor.fromObject(object.flightDescriptor, _depth + 1);
                    }
                    if (object.dataHeader != null)
                        if (object.dataHeader.length)
                            if (typeof object.dataHeader === "string")
                                $util.base64.decode(object.dataHeader, message.dataHeader = $util.newBuffer($util.base64.length(object.dataHeader)), 0);
                            else if (object.dataHeader.length >= 0)
                                message.dataHeader = object.dataHeader;
                    if (object.appMetadata != null)
                        if (object.appMetadata.length)
                            if (typeof object.appMetadata === "string")
                                $util.base64.decode(object.appMetadata, message.appMetadata = $util.newBuffer($util.base64.length(object.appMetadata)), 0);
                            else if (object.appMetadata.length >= 0)
                                message.appMetadata = object.appMetadata;
                    if (object.dataBody != null)
                        if (object.dataBody.length)
                            if (typeof object.dataBody === "string")
                                $util.base64.decode(object.dataBody, message.dataBody = $util.newBuffer($util.base64.length(object.dataBody)), 0);
                            else if (object.dataBody.length >= 0)
                                message.dataBody = object.dataBody;
                    return message;
                };

                /**
                 * Creates a plain object from a FlightData message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.FlightData
                 * @static
                 * @param {arrow.flight.protocol.FlightData} message FlightData
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FlightData.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults) {
                        object.flightDescriptor = null;
                        if (options.bytes === $String)
                            object.dataHeader = "";
                        else {
                            object.dataHeader = [];
                            if (options.bytes !== $Array)
                                object.dataHeader = $util.newBuffer(object.dataHeader);
                        }
                        if (options.bytes === $String)
                            object.appMetadata = "";
                        else {
                            object.appMetadata = [];
                            if (options.bytes !== $Array)
                                object.appMetadata = $util.newBuffer(object.appMetadata);
                        }
                        if (options.bytes === $String)
                            object.dataBody = "";
                        else {
                            object.dataBody = [];
                            if (options.bytes !== $Array)
                                object.dataBody = $util.newBuffer(object.dataBody);
                        }
                    }
                    if (message.flightDescriptor != null && $Object.hasOwnProperty.call(message, "flightDescriptor"))
                        object.flightDescriptor = $root.arrow.flight.protocol.FlightDescriptor.toObject(message.flightDescriptor, options, _depth + 1);
                    if (message.dataHeader != null && $Object.hasOwnProperty.call(message, "dataHeader"))
                        object.dataHeader = options.bytes === $String ? $util.base64.encode(message.dataHeader, 0, message.dataHeader.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.dataHeader) : message.dataHeader;
                    if (message.appMetadata != null && $Object.hasOwnProperty.call(message, "appMetadata"))
                        object.appMetadata = options.bytes === $String ? $util.base64.encode(message.appMetadata, 0, message.appMetadata.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.appMetadata) : message.appMetadata;
                    if (message.dataBody != null && $Object.hasOwnProperty.call(message, "dataBody"))
                        object.dataBody = options.bytes === $String ? $util.base64.encode(message.dataBody, 0, message.dataBody.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.dataBody) : message.dataBody;
                    return object;
                };

                /**
                 * Converts this FlightData to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.FlightData
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FlightData.prototype.toJSON = function() {
                    return FlightData.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for FlightData
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.FlightData
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                FlightData.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.FlightData";
                };

                return FlightData;
            })();

            protocol.PutResult = (function() {

                /**
                 * Properties of a PutResult.
                 * @typedef {Object} arrow.flight.protocol.PutResult.$Properties
                 * @property {Uint8Array|null} [appMetadata] PutResult appMetadata
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a PutResult.
                 * @memberof arrow.flight.protocol
                 * @interface IPutResult
                 * @augments arrow.flight.protocol.PutResult.$Properties
                 * @deprecated Use arrow.flight.protocol.PutResult.$Properties instead.
                 */

                /**
                 * Shape of a PutResult.
                 * @typedef {arrow.flight.protocol.PutResult.$Properties} arrow.flight.protocol.PutResult.$Shape
                 */

                /**
                 * Constructs a new PutResult.
                 * @memberof arrow.flight.protocol
                 * @classdesc The response message associated with the submission of a DoPut.
                 * @constructor
                 * @param {arrow.flight.protocol.PutResult.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var PutResult = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * PutResult appMetadata.
                 * @member {Uint8Array} appMetadata
                 * @memberof arrow.flight.protocol.PutResult
                 * @instance
                 */
                PutResult.prototype.appMetadata = $util.newBuffer([]);

                /**
                 * Creates a new PutResult instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.PutResult
                 * @static
                 * @param {arrow.flight.protocol.PutResult.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.PutResult} PutResult instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.PutResult.$Shape): arrow.flight.protocol.PutResult & arrow.flight.protocol.PutResult.$Shape;
                 *   (properties?: arrow.flight.protocol.PutResult.$Properties): arrow.flight.protocol.PutResult;
                 * }}
                 */
                PutResult.create = function(properties) {
                    return new PutResult(properties);
                };

                /**
                 * Encodes the specified PutResult message. Does not implicitly {@link arrow.flight.protocol.PutResult.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.PutResult
                 * @static
                 * @param {arrow.flight.protocol.PutResult.$Properties} message PutResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PutResult.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.appMetadata != null && $Object.hasOwnProperty.call(message, "appMetadata") && message.appMetadata.length)
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.appMetadata);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified PutResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.PutResult.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.PutResult
                 * @static
                 * @param {arrow.flight.protocol.PutResult.$Properties} message PutResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PutResult.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a PutResult message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.PutResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.PutResult & arrow.flight.protocol.PutResult.$Shape} PutResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PutResult.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.PutResult();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                if ((value = reader.bytes()).length)
                                    message.appMetadata = value;
                                else
                                    delete message.appMetadata;
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a PutResult message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.PutResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.PutResult & arrow.flight.protocol.PutResult.$Shape} PutResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PutResult.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PutResult message.
                 * @function verify
                 * @memberof arrow.flight.protocol.PutResult
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PutResult.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.appMetadata != null && $Object.hasOwnProperty.call(message, "appMetadata"))
                        if (!(message.appMetadata && typeof message.appMetadata.length === "number" || $util.isString(message.appMetadata)))
                            return "appMetadata: buffer expected";
                    return null;
                };

                /**
                 * Creates a PutResult message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.PutResult
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.PutResult} PutResult
                 */
                PutResult.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.PutResult)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.PutResult: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.PutResult();
                    if (object.appMetadata != null)
                        if (object.appMetadata.length)
                            if (typeof object.appMetadata === "string")
                                $util.base64.decode(object.appMetadata, message.appMetadata = $util.newBuffer($util.base64.length(object.appMetadata)), 0);
                            else if (object.appMetadata.length >= 0)
                                message.appMetadata = object.appMetadata;
                    return message;
                };

                /**
                 * Creates a plain object from a PutResult message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.PutResult
                 * @static
                 * @param {arrow.flight.protocol.PutResult} message PutResult
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PutResult.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === $String)
                            object.appMetadata = "";
                        else {
                            object.appMetadata = [];
                            if (options.bytes !== $Array)
                                object.appMetadata = $util.newBuffer(object.appMetadata);
                        }
                    if (message.appMetadata != null && $Object.hasOwnProperty.call(message, "appMetadata"))
                        object.appMetadata = options.bytes === $String ? $util.base64.encode(message.appMetadata, 0, message.appMetadata.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.appMetadata) : message.appMetadata;
                    return object;
                };

                /**
                 * Converts this PutResult to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.PutResult
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PutResult.prototype.toJSON = function() {
                    return PutResult.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for PutResult
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.PutResult
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                PutResult.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.PutResult";
                };

                return PutResult;
            })();

            protocol.SessionOptionValue = (function() {

                /**
                 * Properties of a SessionOptionValue.
                 * @typedef {Object} arrow.flight.protocol.SessionOptionValue.$Properties
                 * @property {string|null} [stringValue] SessionOptionValue stringValue
                 * @property {boolean|null} [boolValue] SessionOptionValue boolValue
                 * @property {number|Long|null} [int64Value] SessionOptionValue int64Value
                 * @property {number|null} [doubleValue] SessionOptionValue doubleValue
                 * @property {arrow.flight.protocol.SessionOptionValue.StringListValue.$Properties|null} [stringListValue] SessionOptionValue stringListValue
                 * @property {"stringValue"|"boolValue"|"int64Value"|"doubleValue"|"stringListValue"} [optionValue] SessionOptionValue optionValue
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a SessionOptionValue.
                 * @memberof arrow.flight.protocol
                 * @interface ISessionOptionValue
                 * @augments arrow.flight.protocol.SessionOptionValue.$Properties
                 * @deprecated Use arrow.flight.protocol.SessionOptionValue.$Properties instead.
                 */

                /**
                 * Narrowed shape of a SessionOptionValue.
                 * @typedef {{
                 *   stringValue?: string|null;
                 *   boolValue?: boolean|null;
                 *   int64Value?: number|Long|null;
                 *   doubleValue?: number|null;
                 *   stringListValue?: arrow.flight.protocol.SessionOptionValue.StringListValue.$Shape|null;
                 *   $unknowns?: Array.<Uint8Array>;
                 * } & (
                 *   ({ optionValue?: undefined; stringValue?: null; boolValue?: null; int64Value?: null; doubleValue?: null; stringListValue?: null }|{ optionValue?: "stringValue"; stringValue: string; boolValue?: null; int64Value?: null; doubleValue?: null; stringListValue?: null }|{ optionValue?: "boolValue"; stringValue?: null; boolValue: boolean; int64Value?: null; doubleValue?: null; stringListValue?: null }|{ optionValue?: "int64Value"; stringValue?: null; boolValue?: null; int64Value: number|Long; doubleValue?: null; stringListValue?: null }|{ optionValue?: "doubleValue"; stringValue?: null; boolValue?: null; int64Value?: null; doubleValue: number; stringListValue?: null }|{ optionValue?: "stringListValue"; stringValue?: null; boolValue?: null; int64Value?: null; doubleValue?: null; stringListValue: arrow.flight.protocol.SessionOptionValue.StringListValue.$Shape })
                 * )} arrow.flight.protocol.SessionOptionValue.$Shape
                 */

                /**
                 * Constructs a new SessionOptionValue.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a SessionOptionValue.
                 * @constructor
                 * @param {arrow.flight.protocol.SessionOptionValue.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var SessionOptionValue = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * SessionOptionValue stringValue.
                 * @member {string|null|undefined} stringValue
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @instance
                 */
                SessionOptionValue.prototype.stringValue = null;

                /**
                 * SessionOptionValue boolValue.
                 * @member {boolean|null|undefined} boolValue
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @instance
                 */
                SessionOptionValue.prototype.boolValue = null;

                /**
                 * SessionOptionValue int64Value.
                 * @member {number|Long|null|undefined} int64Value
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @instance
                 */
                SessionOptionValue.prototype.int64Value = null;

                /**
                 * SessionOptionValue doubleValue.
                 * @member {number|null|undefined} doubleValue
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @instance
                 */
                SessionOptionValue.prototype.doubleValue = null;

                /**
                 * SessionOptionValue stringListValue.
                 * @member {arrow.flight.protocol.SessionOptionValue.StringListValue.$Properties|null|undefined} stringListValue
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @instance
                 */
                SessionOptionValue.prototype.stringListValue = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * SessionOptionValue optionValue.
                 * @member {"stringValue"|"boolValue"|"int64Value"|"doubleValue"|"stringListValue"|undefined} optionValue
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @instance
                 */
                $Object.defineProperty(SessionOptionValue.prototype, "optionValue", {
                    get: $util.oneOfGetter($oneOfFields = ["stringValue", "boolValue", "int64Value", "doubleValue", "stringListValue"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new SessionOptionValue instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @static
                 * @param {arrow.flight.protocol.SessionOptionValue.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.SessionOptionValue} SessionOptionValue instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.SessionOptionValue.$Shape): arrow.flight.protocol.SessionOptionValue & arrow.flight.protocol.SessionOptionValue.$Shape;
                 *   (properties?: arrow.flight.protocol.SessionOptionValue.$Properties): arrow.flight.protocol.SessionOptionValue;
                 * }}
                 */
                SessionOptionValue.create = function(properties) {
                    return new SessionOptionValue(properties);
                };

                /**
                 * Encodes the specified SessionOptionValue message. Does not implicitly {@link arrow.flight.protocol.SessionOptionValue.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @static
                 * @param {arrow.flight.protocol.SessionOptionValue.$Properties} message SessionOptionValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SessionOptionValue.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.stringValue != null && $Object.hasOwnProperty.call(message, "stringValue"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.stringValue);
                    if (message.boolValue != null && $Object.hasOwnProperty.call(message, "boolValue"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.boolValue);
                    if (message.int64Value != null && $Object.hasOwnProperty.call(message, "int64Value"))
                        writer.uint32(/* id 3, wireType 1 =*/25).sfixed64(message.int64Value);
                    if (message.doubleValue != null && $Object.hasOwnProperty.call(message, "doubleValue"))
                        writer.uint32(/* id 4, wireType 1 =*/33).double(message.doubleValue);
                    if (message.stringListValue != null && $Object.hasOwnProperty.call(message, "stringListValue"))
                        $root.arrow.flight.protocol.SessionOptionValue.StringListValue.encode(message.stringListValue, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified SessionOptionValue message, length delimited. Does not implicitly {@link arrow.flight.protocol.SessionOptionValue.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @static
                 * @param {arrow.flight.protocol.SessionOptionValue.$Properties} message SessionOptionValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SessionOptionValue.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a SessionOptionValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.SessionOptionValue & arrow.flight.protocol.SessionOptionValue.$Shape} SessionOptionValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SessionOptionValue.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.SessionOptionValue();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                message.stringValue = reader.stringVerify();
                                message.optionValue = "stringValue";
                                continue;
                            }
                        case 2: {
                                if (wireType !== 0)
                                    break;
                                message.boolValue = reader.bool();
                                message.optionValue = "boolValue";
                                continue;
                            }
                        case 3: {
                                if (wireType !== 1)
                                    break;
                                message.int64Value = reader.sfixed64();
                                message.optionValue = "int64Value";
                                continue;
                            }
                        case 4: {
                                if (wireType !== 1)
                                    break;
                                message.doubleValue = reader.double();
                                message.optionValue = "doubleValue";
                                continue;
                            }
                        case 5: {
                                if (wireType !== 2)
                                    break;
                                message.stringListValue = $root.arrow.flight.protocol.SessionOptionValue.StringListValue.decode(reader, reader.uint32(), $undefined, _depth + 1, message.stringListValue);
                                message.optionValue = "stringListValue";
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a SessionOptionValue message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.SessionOptionValue & arrow.flight.protocol.SessionOptionValue.$Shape} SessionOptionValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SessionOptionValue.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SessionOptionValue message.
                 * @function verify
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SessionOptionValue.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    var properties = {};
                    if (message.stringValue != null && $Object.hasOwnProperty.call(message, "stringValue")) {
                        properties.optionValue = 1;
                        if (!$util.isString(message.stringValue))
                            return "stringValue: string expected";
                    }
                    if (message.boolValue != null && $Object.hasOwnProperty.call(message, "boolValue")) {
                        if (properties.optionValue === 1)
                            return "optionValue: multiple values";
                        properties.optionValue = 1;
                        if (typeof message.boolValue !== "boolean")
                            return "boolValue: boolean expected";
                    }
                    if (message.int64Value != null && $Object.hasOwnProperty.call(message, "int64Value")) {
                        if (properties.optionValue === 1)
                            return "optionValue: multiple values";
                        properties.optionValue = 1;
                        if (!$util.isInteger(message.int64Value) && !(message.int64Value && $util.isInteger(message.int64Value.low) && $util.isInteger(message.int64Value.high)))
                            return "int64Value: integer|Long expected";
                    }
                    if (message.doubleValue != null && $Object.hasOwnProperty.call(message, "doubleValue")) {
                        if (properties.optionValue === 1)
                            return "optionValue: multiple values";
                        properties.optionValue = 1;
                        if (typeof message.doubleValue !== "number")
                            return "doubleValue: number expected";
                    }
                    if (message.stringListValue != null && $Object.hasOwnProperty.call(message, "stringListValue")) {
                        if (properties.optionValue === 1)
                            return "optionValue: multiple values";
                        properties.optionValue = 1;
                        {
                            var error = $root.arrow.flight.protocol.SessionOptionValue.StringListValue.verify(message.stringListValue, _depth + 1);
                            if (error)
                                return "stringListValue." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a SessionOptionValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.SessionOptionValue} SessionOptionValue
                 */
                SessionOptionValue.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.SessionOptionValue)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.SessionOptionValue: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.SessionOptionValue();
                    if (object.stringValue != null)
                        message.stringValue = $String(object.stringValue);
                    if (object.boolValue != null)
                        message.boolValue = $Boolean(object.boolValue);
                    if (object.int64Value != null)
                        if ($util.Long)
                            message.int64Value = $util.Long.fromValue(object.int64Value, false);
                        else if (typeof object.int64Value === "string")
                            message.int64Value = $parseInt(object.int64Value, 10);
                        else if (typeof object.int64Value === "number")
                            message.int64Value = object.int64Value;
                        else if (typeof object.int64Value === "object")
                            message.int64Value = new $util.LongBits(object.int64Value.low >>> 0, object.int64Value.high >>> 0).toNumber();
                    if (object.doubleValue != null)
                        message.doubleValue = $Number(object.doubleValue);
                    if (object.stringListValue != null) {
                        if (!$util.isObject(object.stringListValue))
                            throw $TypeError(".arrow.flight.protocol.SessionOptionValue.stringListValue: object expected");
                        message.stringListValue = $root.arrow.flight.protocol.SessionOptionValue.StringListValue.fromObject(object.stringListValue, _depth + 1);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SessionOptionValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @static
                 * @param {arrow.flight.protocol.SessionOptionValue} message SessionOptionValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SessionOptionValue.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (message.stringValue != null && $Object.hasOwnProperty.call(message, "stringValue")) {
                        object.stringValue = message.stringValue;
                        if (options.oneofs)
                            object.optionValue = "stringValue";
                    }
                    if (message.boolValue != null && $Object.hasOwnProperty.call(message, "boolValue")) {
                        object.boolValue = message.boolValue;
                        if (options.oneofs)
                            object.optionValue = "boolValue";
                    }
                    if (message.int64Value != null && $Object.hasOwnProperty.call(message, "int64Value")) {
                        if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                            object.int64Value = typeof message.int64Value === "number" ? $BigInt(message.int64Value) : $util.Long.fromBits(message.int64Value.low >>> 0, message.int64Value.high >>> 0, false).toBigInt();
                        else if (typeof message.int64Value === "number")
                            object.int64Value = options.longs === $String ? $String(message.int64Value) : message.int64Value;
                        else
                            object.int64Value = options.longs === $String ? $util.Long.prototype.toString.call(message.int64Value) : options.longs === $Number ? new $util.LongBits(message.int64Value.low >>> 0, message.int64Value.high >>> 0).toNumber() : message.int64Value;
                        if (options.oneofs)
                            object.optionValue = "int64Value";
                    }
                    if (message.doubleValue != null && $Object.hasOwnProperty.call(message, "doubleValue")) {
                        object.doubleValue = options.json && !$isFinite(message.doubleValue) ? $String(message.doubleValue) : message.doubleValue;
                        if (options.oneofs)
                            object.optionValue = "doubleValue";
                    }
                    if (message.stringListValue != null && $Object.hasOwnProperty.call(message, "stringListValue")) {
                        object.stringListValue = $root.arrow.flight.protocol.SessionOptionValue.StringListValue.toObject(message.stringListValue, options, _depth + 1);
                        if (options.oneofs)
                            object.optionValue = "stringListValue";
                    }
                    return object;
                };

                /**
                 * Converts this SessionOptionValue to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SessionOptionValue.prototype.toJSON = function() {
                    return SessionOptionValue.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for SessionOptionValue
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                SessionOptionValue.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.SessionOptionValue";
                };

                SessionOptionValue.StringListValue = (function() {

                    /**
                     * Properties of a StringListValue.
                     * @typedef {Object} arrow.flight.protocol.SessionOptionValue.StringListValue.$Properties
                     * @property {Array.<string>|null} [values] StringListValue values
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of a StringListValue.
                     * @memberof arrow.flight.protocol.SessionOptionValue
                     * @interface IStringListValue
                     * @augments arrow.flight.protocol.SessionOptionValue.StringListValue.$Properties
                     * @deprecated Use arrow.flight.protocol.SessionOptionValue.StringListValue.$Properties instead.
                     */

                    /**
                     * Shape of a StringListValue.
                     * @typedef {arrow.flight.protocol.SessionOptionValue.StringListValue.$Properties} arrow.flight.protocol.SessionOptionValue.StringListValue.$Shape
                     */

                    /**
                     * Constructs a new StringListValue.
                     * @memberof arrow.flight.protocol.SessionOptionValue
                     * @classdesc Represents a StringListValue.
                     * @constructor
                     * @param {arrow.flight.protocol.SessionOptionValue.StringListValue.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    var StringListValue = function (properties) {
                        this.values = [];
                        if (properties)
                            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * StringListValue values.
                     * @member {Array.<string>} values
                     * @memberof arrow.flight.protocol.SessionOptionValue.StringListValue
                     * @instance
                     */
                    StringListValue.prototype.values = $util.emptyArray;

                    /**
                     * Creates a new StringListValue instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.SessionOptionValue.StringListValue
                     * @static
                     * @param {arrow.flight.protocol.SessionOptionValue.StringListValue.$Properties=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.SessionOptionValue.StringListValue} StringListValue instance
                     * @type {{
                     *   (properties: arrow.flight.protocol.SessionOptionValue.StringListValue.$Shape): arrow.flight.protocol.SessionOptionValue.StringListValue & arrow.flight.protocol.SessionOptionValue.StringListValue.$Shape;
                     *   (properties?: arrow.flight.protocol.SessionOptionValue.StringListValue.$Properties): arrow.flight.protocol.SessionOptionValue.StringListValue;
                     * }}
                     */
                    StringListValue.create = function(properties) {
                        return new StringListValue(properties);
                    };

                    /**
                     * Encodes the specified StringListValue message. Does not implicitly {@link arrow.flight.protocol.SessionOptionValue.StringListValue.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.SessionOptionValue.StringListValue
                     * @static
                     * @param {arrow.flight.protocol.SessionOptionValue.StringListValue.$Properties} message StringListValue message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StringListValue.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.values != null && message.values.length)
                            for (var i = 0; i < message.values.length; ++i)
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.values[i]);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (var i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified StringListValue message, length delimited. Does not implicitly {@link arrow.flight.protocol.SessionOptionValue.StringListValue.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.SessionOptionValue.StringListValue
                     * @static
                     * @param {arrow.flight.protocol.SessionOptionValue.StringListValue.$Properties} message StringListValue message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StringListValue.encodeDelimited = function(message, writer) {
                        return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                    };

                    /**
                     * Decodes a StringListValue message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.SessionOptionValue.StringListValue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.SessionOptionValue.StringListValue & arrow.flight.protocol.SessionOptionValue.StringListValue.$Shape} StringListValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StringListValue.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        var end, message;
                        if (length === $undefined)
                            end = reader.len;
                        else {
                            end = reader.pos + length;
                            if (end > reader.len)
                                throw $RangeError("index out of range");
                            length = reader.len;
                            reader.len = end;
                        }
                        message = _target || new $root.arrow.flight.protocol.SessionOptionValue.StringListValue();
                        while (reader.pos < end) {
                            var start = reader.pos;
                            var tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            var wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 2)
                                        break;
                                    if (!(message.values && message.values.length))
                                        message.values = [];
                                    message.values.push(reader.stringVerify());
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (length !== $undefined) {
                            if (reader.pos !== end)
                                throw $RangeError("index out of range");
                            reader.len = length;
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes a StringListValue message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.SessionOptionValue.StringListValue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.SessionOptionValue.StringListValue & arrow.flight.protocol.SessionOptionValue.StringListValue.$Shape} StringListValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StringListValue.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a StringListValue message.
                     * @function verify
                     * @memberof arrow.flight.protocol.SessionOptionValue.StringListValue
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    StringListValue.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.values != null && $Object.hasOwnProperty.call(message, "values")) {
                            if (!$Array.isArray(message.values))
                                return "values: array expected";
                            for (var i = 0; i < message.values.length; ++i)
                                if (!$util.isString(message.values[i]))
                                    return "values: string[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a StringListValue message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.SessionOptionValue.StringListValue
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.SessionOptionValue.StringListValue} StringListValue
                     */
                    StringListValue.fromObject = function (object, _depth) {
                        if (object instanceof $root.arrow.flight.protocol.SessionOptionValue.StringListValue)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".arrow.flight.protocol.SessionOptionValue.StringListValue: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var message = new $root.arrow.flight.protocol.SessionOptionValue.StringListValue();
                        if (object.values) {
                            if (!$Array.isArray(object.values))
                                throw $TypeError(".arrow.flight.protocol.SessionOptionValue.StringListValue.values: array expected");
                            message.values = $Array(object.values.length);
                            for (var i = 0; i < object.values.length; ++i)
                                message.values[i] = $String(object.values[i]);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a StringListValue message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.SessionOptionValue.StringListValue
                     * @static
                     * @param {arrow.flight.protocol.SessionOptionValue.StringListValue} message StringListValue
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    StringListValue.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.values = [];
                        if (message.values && message.values.length) {
                            object.values = $Array(message.values.length);
                            for (var j = 0; j < message.values.length; ++j)
                                object.values[j] = message.values[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this StringListValue to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.SessionOptionValue.StringListValue
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    StringListValue.prototype.toJSON = function() {
                        return StringListValue.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for StringListValue
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.SessionOptionValue.StringListValue
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    StringListValue.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/arrow.flight.protocol.SessionOptionValue.StringListValue";
                    };

                    return StringListValue;
                })();

                return SessionOptionValue;
            })();

            protocol.SetSessionOptionsRequest = (function() {

                /**
                 * Properties of a SetSessionOptionsRequest.
                 * @typedef {Object} arrow.flight.protocol.SetSessionOptionsRequest.$Properties
                 * @property {Object.<string,arrow.flight.protocol.SessionOptionValue.$Properties>|null} [sessionOptions] SetSessionOptionsRequest sessionOptions
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a SetSessionOptionsRequest.
                 * @memberof arrow.flight.protocol
                 * @interface ISetSessionOptionsRequest
                 * @augments arrow.flight.protocol.SetSessionOptionsRequest.$Properties
                 * @deprecated Use arrow.flight.protocol.SetSessionOptionsRequest.$Properties instead.
                 */

                /**
                 * Shape of a SetSessionOptionsRequest.
                 * @typedef {{
                 *   sessionOptions?: Object.<string,arrow.flight.protocol.SessionOptionValue.$Shape>|null;
                 *   $unknowns?: Array.<Uint8Array>;
                 * }} arrow.flight.protocol.SetSessionOptionsRequest.$Shape
                 */

                /**
                 * Constructs a new SetSessionOptionsRequest.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a SetSessionOptionsRequest.
                 * @constructor
                 * @param {arrow.flight.protocol.SetSessionOptionsRequest.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var SetSessionOptionsRequest = function (properties) {
                    this.sessionOptions = {};
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * SetSessionOptionsRequest sessionOptions.
                 * @member {Object.<string,arrow.flight.protocol.SessionOptionValue.$Properties>} sessionOptions
                 * @memberof arrow.flight.protocol.SetSessionOptionsRequest
                 * @instance
                 */
                SetSessionOptionsRequest.prototype.sessionOptions = $util.emptyObject;

                /**
                 * Creates a new SetSessionOptionsRequest instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.SetSessionOptionsRequest
                 * @static
                 * @param {arrow.flight.protocol.SetSessionOptionsRequest.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.SetSessionOptionsRequest} SetSessionOptionsRequest instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.SetSessionOptionsRequest.$Shape): arrow.flight.protocol.SetSessionOptionsRequest & arrow.flight.protocol.SetSessionOptionsRequest.$Shape;
                 *   (properties?: arrow.flight.protocol.SetSessionOptionsRequest.$Properties): arrow.flight.protocol.SetSessionOptionsRequest;
                 * }}
                 */
                SetSessionOptionsRequest.create = function(properties) {
                    return new SetSessionOptionsRequest(properties);
                };

                /**
                 * Encodes the specified SetSessionOptionsRequest message. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.SetSessionOptionsRequest
                 * @static
                 * @param {arrow.flight.protocol.SetSessionOptionsRequest.$Properties} message SetSessionOptionsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SetSessionOptionsRequest.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.sessionOptions != null && $Object.hasOwnProperty.call(message, "sessionOptions"))
                        for (var keys = $Object.keys(message.sessionOptions), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.arrow.flight.protocol.SessionOptionValue.encode(message.sessionOptions[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim().ldelim();
                        }
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified SetSessionOptionsRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.SetSessionOptionsRequest
                 * @static
                 * @param {arrow.flight.protocol.SetSessionOptionsRequest.$Properties} message SetSessionOptionsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SetSessionOptionsRequest.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a SetSessionOptionsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.SetSessionOptionsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.SetSessionOptionsRequest & arrow.flight.protocol.SetSessionOptionsRequest.$Shape} SetSessionOptionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SetSessionOptionsRequest.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, key, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.SetSessionOptionsRequest();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                if (message.sessionOptions === $util.emptyObject)
                                    message.sessionOptions = {};
                                var end2 = reader.uint32() + reader.pos;
                                if (end2 > reader.len)
                                    throw $RangeError("index out of range");
                                reader.len = end2;
                                key = "";
                                value = null;
                                while (reader.pos < end2) {
                                    var tag2 = reader.tag();
                                    wireType = tag2 & 7;
                                    switch (tag2 >>>= 3) {
                                    case 1:
                                        if (wireType !== 2)
                                            break;
                                        key = reader.stringVerify();
                                        continue;
                                    case 2:
                                        if (wireType !== 2)
                                            break;
                                        value = $root.arrow.flight.protocol.SessionOptionValue.decode(reader, reader.uint32(), $undefined, _depth + 1, value);
                                        continue;
                                    }
                                    reader.skipType(wireType, _depth, tag2);
                                }
                                if (reader.pos !== end2)
                                    throw $RangeError("index out of range");
                                reader.len = end;
                                if (key === "__proto__")
                                    $util.makeProp(message.sessionOptions, key);
                                message.sessionOptions[key] = value || new $root.arrow.flight.protocol.SessionOptionValue();
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a SetSessionOptionsRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.SetSessionOptionsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.SetSessionOptionsRequest & arrow.flight.protocol.SetSessionOptionsRequest.$Shape} SetSessionOptionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SetSessionOptionsRequest.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SetSessionOptionsRequest message.
                 * @function verify
                 * @memberof arrow.flight.protocol.SetSessionOptionsRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SetSessionOptionsRequest.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.sessionOptions != null && $Object.hasOwnProperty.call(message, "sessionOptions")) {
                        if (!$util.isObject(message.sessionOptions))
                            return "sessionOptions: object expected";
                        var key = $Object.keys(message.sessionOptions);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.arrow.flight.protocol.SessionOptionValue.verify(message.sessionOptions[key[i]], _depth + 1);
                            if (error)
                                return "sessionOptions." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a SetSessionOptionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.SetSessionOptionsRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.SetSessionOptionsRequest} SetSessionOptionsRequest
                 */
                SetSessionOptionsRequest.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.SetSessionOptionsRequest)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.SetSessionOptionsRequest: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.SetSessionOptionsRequest();
                    if (object.sessionOptions) {
                        if (!$util.isObject(object.sessionOptions))
                            throw $TypeError(".arrow.flight.protocol.SetSessionOptionsRequest.sessionOptions: object expected");
                        message.sessionOptions = {};
                        for (var keys = $Object.keys(object.sessionOptions), i = 0; i < keys.length; ++i) {
                            if (keys[i] === "__proto__")
                                $util.makeProp(message.sessionOptions, keys[i]);
                            if (!$util.isObject(object.sessionOptions[keys[i]]))
                                throw $TypeError(".arrow.flight.protocol.SetSessionOptionsRequest.sessionOptions: object expected");
                            message.sessionOptions[keys[i]] = $root.arrow.flight.protocol.SessionOptionValue.fromObject(object.sessionOptions[keys[i]], _depth + 1);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SetSessionOptionsRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.SetSessionOptionsRequest
                 * @static
                 * @param {arrow.flight.protocol.SetSessionOptionsRequest} message SetSessionOptionsRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SetSessionOptionsRequest.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.objects || options.defaults)
                        object.sessionOptions = {};
                    var keys2;
                    if (message.sessionOptions && (keys2 = $Object.keys(message.sessionOptions)).length) {
                        object.sessionOptions = {};
                        for (var j = 0; j < keys2.length; ++j) {
                            if (keys2[j] === "__proto__")
                                $util.makeProp(object.sessionOptions, keys2[j]);
                            object.sessionOptions[keys2[j]] = $root.arrow.flight.protocol.SessionOptionValue.toObject(message.sessionOptions[keys2[j]], options, _depth + 1);
                        }
                    }
                    return object;
                };

                /**
                 * Converts this SetSessionOptionsRequest to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.SetSessionOptionsRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SetSessionOptionsRequest.prototype.toJSON = function() {
                    return SetSessionOptionsRequest.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for SetSessionOptionsRequest
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.SetSessionOptionsRequest
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                SetSessionOptionsRequest.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.SetSessionOptionsRequest";
                };

                return SetSessionOptionsRequest;
            })();

            protocol.SetSessionOptionsResult = (function() {

                /**
                 * Properties of a SetSessionOptionsResult.
                 * @typedef {Object} arrow.flight.protocol.SetSessionOptionsResult.$Properties
                 * @property {Object.<string,arrow.flight.protocol.SetSessionOptionsResult.Error.$Properties>|null} [errors] SetSessionOptionsResult errors
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a SetSessionOptionsResult.
                 * @memberof arrow.flight.protocol
                 * @interface ISetSessionOptionsResult
                 * @augments arrow.flight.protocol.SetSessionOptionsResult.$Properties
                 * @deprecated Use arrow.flight.protocol.SetSessionOptionsResult.$Properties instead.
                 */

                /**
                 * Shape of a SetSessionOptionsResult.
                 * @typedef {arrow.flight.protocol.SetSessionOptionsResult.$Properties} arrow.flight.protocol.SetSessionOptionsResult.$Shape
                 */

                /**
                 * Constructs a new SetSessionOptionsResult.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a SetSessionOptionsResult.
                 * @constructor
                 * @param {arrow.flight.protocol.SetSessionOptionsResult.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var SetSessionOptionsResult = function (properties) {
                    this.errors = {};
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * SetSessionOptionsResult errors.
                 * @member {Object.<string,arrow.flight.protocol.SetSessionOptionsResult.Error.$Properties>} errors
                 * @memberof arrow.flight.protocol.SetSessionOptionsResult
                 * @instance
                 */
                SetSessionOptionsResult.prototype.errors = $util.emptyObject;

                /**
                 * Creates a new SetSessionOptionsResult instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.SetSessionOptionsResult
                 * @static
                 * @param {arrow.flight.protocol.SetSessionOptionsResult.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.SetSessionOptionsResult} SetSessionOptionsResult instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.SetSessionOptionsResult.$Shape): arrow.flight.protocol.SetSessionOptionsResult & arrow.flight.protocol.SetSessionOptionsResult.$Shape;
                 *   (properties?: arrow.flight.protocol.SetSessionOptionsResult.$Properties): arrow.flight.protocol.SetSessionOptionsResult;
                 * }}
                 */
                SetSessionOptionsResult.create = function(properties) {
                    return new SetSessionOptionsResult(properties);
                };

                /**
                 * Encodes the specified SetSessionOptionsResult message. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsResult.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.SetSessionOptionsResult
                 * @static
                 * @param {arrow.flight.protocol.SetSessionOptionsResult.$Properties} message SetSessionOptionsResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SetSessionOptionsResult.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.errors != null && $Object.hasOwnProperty.call(message, "errors"))
                        for (var keys = $Object.keys(message.errors), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.arrow.flight.protocol.SetSessionOptionsResult.Error.encode(message.errors[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim().ldelim();
                        }
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified SetSessionOptionsResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsResult.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.SetSessionOptionsResult
                 * @static
                 * @param {arrow.flight.protocol.SetSessionOptionsResult.$Properties} message SetSessionOptionsResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SetSessionOptionsResult.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a SetSessionOptionsResult message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.SetSessionOptionsResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.SetSessionOptionsResult & arrow.flight.protocol.SetSessionOptionsResult.$Shape} SetSessionOptionsResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SetSessionOptionsResult.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, key, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.SetSessionOptionsResult();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                if (message.errors === $util.emptyObject)
                                    message.errors = {};
                                var end2 = reader.uint32() + reader.pos;
                                if (end2 > reader.len)
                                    throw $RangeError("index out of range");
                                reader.len = end2;
                                key = "";
                                value = null;
                                while (reader.pos < end2) {
                                    var tag2 = reader.tag();
                                    wireType = tag2 & 7;
                                    switch (tag2 >>>= 3) {
                                    case 1:
                                        if (wireType !== 2)
                                            break;
                                        key = reader.stringVerify();
                                        continue;
                                    case 2:
                                        if (wireType !== 2)
                                            break;
                                        value = $root.arrow.flight.protocol.SetSessionOptionsResult.Error.decode(reader, reader.uint32(), $undefined, _depth + 1, value);
                                        continue;
                                    }
                                    reader.skipType(wireType, _depth, tag2);
                                }
                                if (reader.pos !== end2)
                                    throw $RangeError("index out of range");
                                reader.len = end;
                                if (key === "__proto__")
                                    $util.makeProp(message.errors, key);
                                message.errors[key] = value || new $root.arrow.flight.protocol.SetSessionOptionsResult.Error();
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a SetSessionOptionsResult message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.SetSessionOptionsResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.SetSessionOptionsResult & arrow.flight.protocol.SetSessionOptionsResult.$Shape} SetSessionOptionsResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SetSessionOptionsResult.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SetSessionOptionsResult message.
                 * @function verify
                 * @memberof arrow.flight.protocol.SetSessionOptionsResult
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SetSessionOptionsResult.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.errors != null && $Object.hasOwnProperty.call(message, "errors")) {
                        if (!$util.isObject(message.errors))
                            return "errors: object expected";
                        var key = $Object.keys(message.errors);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.arrow.flight.protocol.SetSessionOptionsResult.Error.verify(message.errors[key[i]], _depth + 1);
                            if (error)
                                return "errors." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a SetSessionOptionsResult message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.SetSessionOptionsResult
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.SetSessionOptionsResult} SetSessionOptionsResult
                 */
                SetSessionOptionsResult.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.SetSessionOptionsResult)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.SetSessionOptionsResult: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.SetSessionOptionsResult();
                    if (object.errors) {
                        if (!$util.isObject(object.errors))
                            throw $TypeError(".arrow.flight.protocol.SetSessionOptionsResult.errors: object expected");
                        message.errors = {};
                        for (var keys = $Object.keys(object.errors), i = 0; i < keys.length; ++i) {
                            if (keys[i] === "__proto__")
                                $util.makeProp(message.errors, keys[i]);
                            if (!$util.isObject(object.errors[keys[i]]))
                                throw $TypeError(".arrow.flight.protocol.SetSessionOptionsResult.errors: object expected");
                            message.errors[keys[i]] = $root.arrow.flight.protocol.SetSessionOptionsResult.Error.fromObject(object.errors[keys[i]], _depth + 1);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SetSessionOptionsResult message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.SetSessionOptionsResult
                 * @static
                 * @param {arrow.flight.protocol.SetSessionOptionsResult} message SetSessionOptionsResult
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SetSessionOptionsResult.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.objects || options.defaults)
                        object.errors = {};
                    var keys2;
                    if (message.errors && (keys2 = $Object.keys(message.errors)).length) {
                        object.errors = {};
                        for (var j = 0; j < keys2.length; ++j) {
                            if (keys2[j] === "__proto__")
                                $util.makeProp(object.errors, keys2[j]);
                            object.errors[keys2[j]] = $root.arrow.flight.protocol.SetSessionOptionsResult.Error.toObject(message.errors[keys2[j]], options, _depth + 1);
                        }
                    }
                    return object;
                };

                /**
                 * Converts this SetSessionOptionsResult to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.SetSessionOptionsResult
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SetSessionOptionsResult.prototype.toJSON = function() {
                    return SetSessionOptionsResult.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for SetSessionOptionsResult
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.SetSessionOptionsResult
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                SetSessionOptionsResult.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.SetSessionOptionsResult";
                };

                /**
                 * ErrorValue enum.
                 * @name arrow.flight.protocol.SetSessionOptionsResult.ErrorValue
                 * @enum {number}
                 * @property {number} UNSPECIFIED=0 UNSPECIFIED value
                 * @property {number} INVALID_NAME=1 INVALID_NAME value
                 * @property {number} INVALID_VALUE=2 INVALID_VALUE value
                 * @property {number} ERROR=3 ERROR value
                 */
                SetSessionOptionsResult.ErrorValue = (function() {
                    var valuesById = $Object.create(null), values = $Object.create(valuesById);
                    values[valuesById[0] = "UNSPECIFIED"] = 0;
                    values[valuesById[1] = "INVALID_NAME"] = 1;
                    values[valuesById[2] = "INVALID_VALUE"] = 2;
                    values[valuesById[3] = "ERROR"] = 3;
                    return values;
                })();

                SetSessionOptionsResult.Error = (function() {

                    /**
                     * Properties of an Error.
                     * @typedef {Object} arrow.flight.protocol.SetSessionOptionsResult.Error.$Properties
                     * @property {arrow.flight.protocol.SetSessionOptionsResult.ErrorValue|null} [value] Error value
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */

                    /**
                     * Properties of an Error.
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult
                     * @interface IError
                     * @augments arrow.flight.protocol.SetSessionOptionsResult.Error.$Properties
                     * @deprecated Use arrow.flight.protocol.SetSessionOptionsResult.Error.$Properties instead.
                     */

                    /**
                     * Shape of an Error.
                     * @typedef {arrow.flight.protocol.SetSessionOptionsResult.Error.$Properties} arrow.flight.protocol.SetSessionOptionsResult.Error.$Shape
                     */

                    /**
                     * Constructs a new Error.
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult
                     * @classdesc Represents an Error.
                     * @constructor
                     * @param {arrow.flight.protocol.SetSessionOptionsResult.Error.$Properties=} [properties] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                     */
                    var Error = function (properties) {
                        if (properties)
                            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                    this[keys[i]] = properties[keys[i]];
                    };

                    /**
                     * Error value.
                     * @member {arrow.flight.protocol.SetSessionOptionsResult.ErrorValue} value
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult.Error
                     * @instance
                     */
                    Error.prototype.value = 0;

                    /**
                     * Creates a new Error instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult.Error
                     * @static
                     * @param {arrow.flight.protocol.SetSessionOptionsResult.Error.$Properties=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.SetSessionOptionsResult.Error} Error instance
                     * @type {{
                     *   (properties: arrow.flight.protocol.SetSessionOptionsResult.Error.$Shape): arrow.flight.protocol.SetSessionOptionsResult.Error & arrow.flight.protocol.SetSessionOptionsResult.Error.$Shape;
                     *   (properties?: arrow.flight.protocol.SetSessionOptionsResult.Error.$Properties): arrow.flight.protocol.SetSessionOptionsResult.Error;
                     * }}
                     */
                    Error.create = function(properties) {
                        return new Error(properties);
                    };

                    /**
                     * Encodes the specified Error message. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsResult.Error.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult.Error
                     * @static
                     * @param {arrow.flight.protocol.SetSessionOptionsResult.Error.$Properties} message Error message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Error.encode = function (message, writer, _depth) {
                        if (!writer)
                            writer = $Writer.create();
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (message.value != null && $Object.hasOwnProperty.call(message, "value") && message.value !== 0)
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                        if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                            for (var i = 0; i < message.$unknowns.length; ++i)
                                writer.raw(message.$unknowns[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified Error message, length delimited. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsResult.Error.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult.Error
                     * @static
                     * @param {arrow.flight.protocol.SetSessionOptionsResult.Error.$Properties} message Error message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Error.encodeDelimited = function(message, writer) {
                        return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                    };

                    /**
                     * Decodes an Error message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult.Error
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.SetSessionOptionsResult.Error & arrow.flight.protocol.SetSessionOptionsResult.Error.$Shape} Error
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Error.decode = function (reader, length, _end, _depth, _target) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        var end, message, value;
                        if (length === $undefined)
                            end = reader.len;
                        else {
                            end = reader.pos + length;
                            if (end > reader.len)
                                throw $RangeError("index out of range");
                            length = reader.len;
                            reader.len = end;
                        }
                        message = _target || new $root.arrow.flight.protocol.SetSessionOptionsResult.Error();
                        while (reader.pos < end) {
                            var start = reader.pos;
                            var tag = reader.tag();
                            if (tag === _end) {
                                _end = $undefined;
                                break;
                            }
                            var wireType = tag & 7;
                            switch (tag >>>= 3) {
                            case 1: {
                                    if (wireType !== 0)
                                        break;
                                    if (value = reader.int32())
                                        message.value = value;
                                    else
                                        delete message.value;
                                    continue;
                                }
                            }
                            reader.skipType(wireType, _depth, tag);
                            if (!reader.discardUnknown) {
                                $util.makeProp(message, "$unknowns", false);
                                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                            }
                        }
                        if (length !== $undefined) {
                            if (reader.pos !== end)
                                throw $RangeError("index out of range");
                            reader.len = length;
                        }
                        if (_end !== $undefined)
                            throw $Error("missing end group");
                        return message;
                    };

                    /**
                     * Decodes an Error message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult.Error
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.SetSessionOptionsResult.Error & arrow.flight.protocol.SetSessionOptionsResult.Error.$Shape} Error
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Error.decodeDelimited = function(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Error message.
                     * @function verify
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult.Error
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Error.verify = function (message, _depth) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            return "max depth exceeded";
                        if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
                            if (typeof message.value !== "number" || (message.value | 0) !== message.value)
                                return "value: enum value expected";
                        return null;
                    };

                    /**
                     * Creates an Error message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult.Error
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.SetSessionOptionsResult.Error} Error
                     */
                    Error.fromObject = function (object, _depth) {
                        if (object instanceof $root.arrow.flight.protocol.SetSessionOptionsResult.Error)
                            return object;
                        if (!$util.isObject(object))
                            throw $TypeError(".arrow.flight.protocol.SetSessionOptionsResult.Error: object expected");
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var message = new $root.arrow.flight.protocol.SetSessionOptionsResult.Error();
                        if (object.value !== 0 && (typeof object.value !== "string" || $root.arrow.flight.protocol.SetSessionOptionsResult.ErrorValue[object.value] !== 0))
                            switch (object.value) {
                            case "UNSPECIFIED":
                            case 0:
                                message.value = 0;
                                break;
                            case "INVALID_NAME":
                            case 1:
                                message.value = 1;
                                break;
                            case "INVALID_VALUE":
                            case 2:
                                message.value = 2;
                                break;
                            case "ERROR":
                            case 3:
                                message.value = 3;
                                break;
                            default:
                                if (typeof object.value === "number" && (object.value | 0) === object.value)
                                    message.value = object.value;
                            }
                        return message;
                    };

                    /**
                     * Creates a plain object from an Error message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult.Error
                     * @static
                     * @param {arrow.flight.protocol.SetSessionOptionsResult.Error} message Error
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Error.toObject = function (message, options, _depth) {
                        if (!options)
                            options = {};
                        if (_depth === $undefined)
                            _depth = 0;
                        if (_depth > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var object = {};
                        if (options.defaults)
                            object.value = options.enums === $String ? "UNSPECIFIED" : 0;
                        if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
                            object.value = options.enums === $String ? $root.arrow.flight.protocol.SetSessionOptionsResult.ErrorValue[message.value] === $undefined ? message.value : $root.arrow.flight.protocol.SetSessionOptionsResult.ErrorValue[message.value] : message.value;
                        return object;
                    };

                    /**
                     * Converts this Error to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult.Error
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Error.prototype.toJSON = function() {
                        return Error.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the type url for Error
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult.Error
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    Error.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/arrow.flight.protocol.SetSessionOptionsResult.Error";
                    };

                    return Error;
                })();

                return SetSessionOptionsResult;
            })();

            protocol.GetSessionOptionsRequest = (function() {

                /**
                 * Properties of a GetSessionOptionsRequest.
                 * @typedef {Object} arrow.flight.protocol.GetSessionOptionsRequest.$Properties
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a GetSessionOptionsRequest.
                 * @memberof arrow.flight.protocol
                 * @interface IGetSessionOptionsRequest
                 * @augments arrow.flight.protocol.GetSessionOptionsRequest.$Properties
                 * @deprecated Use arrow.flight.protocol.GetSessionOptionsRequest.$Properties instead.
                 */

                /**
                 * Shape of a GetSessionOptionsRequest.
                 * @typedef {arrow.flight.protocol.GetSessionOptionsRequest.$Properties} arrow.flight.protocol.GetSessionOptionsRequest.$Shape
                 */

                /**
                 * Constructs a new GetSessionOptionsRequest.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a GetSessionOptionsRequest.
                 * @constructor
                 * @param {arrow.flight.protocol.GetSessionOptionsRequest.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var GetSessionOptionsRequest = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * Creates a new GetSessionOptionsRequest instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.GetSessionOptionsRequest
                 * @static
                 * @param {arrow.flight.protocol.GetSessionOptionsRequest.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.GetSessionOptionsRequest} GetSessionOptionsRequest instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.GetSessionOptionsRequest.$Shape): arrow.flight.protocol.GetSessionOptionsRequest & arrow.flight.protocol.GetSessionOptionsRequest.$Shape;
                 *   (properties?: arrow.flight.protocol.GetSessionOptionsRequest.$Properties): arrow.flight.protocol.GetSessionOptionsRequest;
                 * }}
                 */
                GetSessionOptionsRequest.create = function(properties) {
                    return new GetSessionOptionsRequest(properties);
                };

                /**
                 * Encodes the specified GetSessionOptionsRequest message. Does not implicitly {@link arrow.flight.protocol.GetSessionOptionsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.GetSessionOptionsRequest
                 * @static
                 * @param {arrow.flight.protocol.GetSessionOptionsRequest.$Properties} message GetSessionOptionsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetSessionOptionsRequest.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified GetSessionOptionsRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.GetSessionOptionsRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.GetSessionOptionsRequest
                 * @static
                 * @param {arrow.flight.protocol.GetSessionOptionsRequest.$Properties} message GetSessionOptionsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetSessionOptionsRequest.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a GetSessionOptionsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.GetSessionOptionsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.GetSessionOptionsRequest & arrow.flight.protocol.GetSessionOptionsRequest.$Shape} GetSessionOptionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetSessionOptionsRequest.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.GetSessionOptionsRequest();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        reader.skipType(tag & 7, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a GetSessionOptionsRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.GetSessionOptionsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.GetSessionOptionsRequest & arrow.flight.protocol.GetSessionOptionsRequest.$Shape} GetSessionOptionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetSessionOptionsRequest.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetSessionOptionsRequest message.
                 * @function verify
                 * @memberof arrow.flight.protocol.GetSessionOptionsRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetSessionOptionsRequest.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    return null;
                };

                /**
                 * Creates a GetSessionOptionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.GetSessionOptionsRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.GetSessionOptionsRequest} GetSessionOptionsRequest
                 */
                GetSessionOptionsRequest.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.GetSessionOptionsRequest)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.GetSessionOptionsRequest: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    return new $root.arrow.flight.protocol.GetSessionOptionsRequest();
                };

                /**
                 * Creates a plain object from a GetSessionOptionsRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.GetSessionOptionsRequest
                 * @static
                 * @param {arrow.flight.protocol.GetSessionOptionsRequest} message GetSessionOptionsRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetSessionOptionsRequest.toObject = function () {
                    return {};
                };

                /**
                 * Converts this GetSessionOptionsRequest to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.GetSessionOptionsRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetSessionOptionsRequest.prototype.toJSON = function() {
                    return GetSessionOptionsRequest.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for GetSessionOptionsRequest
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.GetSessionOptionsRequest
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                GetSessionOptionsRequest.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.GetSessionOptionsRequest";
                };

                return GetSessionOptionsRequest;
            })();

            protocol.GetSessionOptionsResult = (function() {

                /**
                 * Properties of a GetSessionOptionsResult.
                 * @typedef {Object} arrow.flight.protocol.GetSessionOptionsResult.$Properties
                 * @property {Object.<string,arrow.flight.protocol.SessionOptionValue.$Properties>|null} [sessionOptions] GetSessionOptionsResult sessionOptions
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a GetSessionOptionsResult.
                 * @memberof arrow.flight.protocol
                 * @interface IGetSessionOptionsResult
                 * @augments arrow.flight.protocol.GetSessionOptionsResult.$Properties
                 * @deprecated Use arrow.flight.protocol.GetSessionOptionsResult.$Properties instead.
                 */

                /**
                 * Shape of a GetSessionOptionsResult.
                 * @typedef {{
                 *   sessionOptions?: Object.<string,arrow.flight.protocol.SessionOptionValue.$Shape>|null;
                 *   $unknowns?: Array.<Uint8Array>;
                 * }} arrow.flight.protocol.GetSessionOptionsResult.$Shape
                 */

                /**
                 * Constructs a new GetSessionOptionsResult.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a GetSessionOptionsResult.
                 * @constructor
                 * @param {arrow.flight.protocol.GetSessionOptionsResult.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var GetSessionOptionsResult = function (properties) {
                    this.sessionOptions = {};
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * GetSessionOptionsResult sessionOptions.
                 * @member {Object.<string,arrow.flight.protocol.SessionOptionValue.$Properties>} sessionOptions
                 * @memberof arrow.flight.protocol.GetSessionOptionsResult
                 * @instance
                 */
                GetSessionOptionsResult.prototype.sessionOptions = $util.emptyObject;

                /**
                 * Creates a new GetSessionOptionsResult instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.GetSessionOptionsResult
                 * @static
                 * @param {arrow.flight.protocol.GetSessionOptionsResult.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.GetSessionOptionsResult} GetSessionOptionsResult instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.GetSessionOptionsResult.$Shape): arrow.flight.protocol.GetSessionOptionsResult & arrow.flight.protocol.GetSessionOptionsResult.$Shape;
                 *   (properties?: arrow.flight.protocol.GetSessionOptionsResult.$Properties): arrow.flight.protocol.GetSessionOptionsResult;
                 * }}
                 */
                GetSessionOptionsResult.create = function(properties) {
                    return new GetSessionOptionsResult(properties);
                };

                /**
                 * Encodes the specified GetSessionOptionsResult message. Does not implicitly {@link arrow.flight.protocol.GetSessionOptionsResult.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.GetSessionOptionsResult
                 * @static
                 * @param {arrow.flight.protocol.GetSessionOptionsResult.$Properties} message GetSessionOptionsResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetSessionOptionsResult.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.sessionOptions != null && $Object.hasOwnProperty.call(message, "sessionOptions"))
                        for (var keys = $Object.keys(message.sessionOptions), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.arrow.flight.protocol.SessionOptionValue.encode(message.sessionOptions[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim().ldelim();
                        }
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified GetSessionOptionsResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.GetSessionOptionsResult.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.GetSessionOptionsResult
                 * @static
                 * @param {arrow.flight.protocol.GetSessionOptionsResult.$Properties} message GetSessionOptionsResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetSessionOptionsResult.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a GetSessionOptionsResult message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.GetSessionOptionsResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.GetSessionOptionsResult & arrow.flight.protocol.GetSessionOptionsResult.$Shape} GetSessionOptionsResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetSessionOptionsResult.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, key, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.GetSessionOptionsResult();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 2)
                                    break;
                                if (message.sessionOptions === $util.emptyObject)
                                    message.sessionOptions = {};
                                var end2 = reader.uint32() + reader.pos;
                                if (end2 > reader.len)
                                    throw $RangeError("index out of range");
                                reader.len = end2;
                                key = "";
                                value = null;
                                while (reader.pos < end2) {
                                    var tag2 = reader.tag();
                                    wireType = tag2 & 7;
                                    switch (tag2 >>>= 3) {
                                    case 1:
                                        if (wireType !== 2)
                                            break;
                                        key = reader.stringVerify();
                                        continue;
                                    case 2:
                                        if (wireType !== 2)
                                            break;
                                        value = $root.arrow.flight.protocol.SessionOptionValue.decode(reader, reader.uint32(), $undefined, _depth + 1, value);
                                        continue;
                                    }
                                    reader.skipType(wireType, _depth, tag2);
                                }
                                if (reader.pos !== end2)
                                    throw $RangeError("index out of range");
                                reader.len = end;
                                if (key === "__proto__")
                                    $util.makeProp(message.sessionOptions, key);
                                message.sessionOptions[key] = value || new $root.arrow.flight.protocol.SessionOptionValue();
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a GetSessionOptionsResult message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.GetSessionOptionsResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.GetSessionOptionsResult & arrow.flight.protocol.GetSessionOptionsResult.$Shape} GetSessionOptionsResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetSessionOptionsResult.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetSessionOptionsResult message.
                 * @function verify
                 * @memberof arrow.flight.protocol.GetSessionOptionsResult
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetSessionOptionsResult.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.sessionOptions != null && $Object.hasOwnProperty.call(message, "sessionOptions")) {
                        if (!$util.isObject(message.sessionOptions))
                            return "sessionOptions: object expected";
                        var key = $Object.keys(message.sessionOptions);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.arrow.flight.protocol.SessionOptionValue.verify(message.sessionOptions[key[i]], _depth + 1);
                            if (error)
                                return "sessionOptions." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a GetSessionOptionsResult message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.GetSessionOptionsResult
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.GetSessionOptionsResult} GetSessionOptionsResult
                 */
                GetSessionOptionsResult.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.GetSessionOptionsResult)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.GetSessionOptionsResult: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.GetSessionOptionsResult();
                    if (object.sessionOptions) {
                        if (!$util.isObject(object.sessionOptions))
                            throw $TypeError(".arrow.flight.protocol.GetSessionOptionsResult.sessionOptions: object expected");
                        message.sessionOptions = {};
                        for (var keys = $Object.keys(object.sessionOptions), i = 0; i < keys.length; ++i) {
                            if (keys[i] === "__proto__")
                                $util.makeProp(message.sessionOptions, keys[i]);
                            if (!$util.isObject(object.sessionOptions[keys[i]]))
                                throw $TypeError(".arrow.flight.protocol.GetSessionOptionsResult.sessionOptions: object expected");
                            message.sessionOptions[keys[i]] = $root.arrow.flight.protocol.SessionOptionValue.fromObject(object.sessionOptions[keys[i]], _depth + 1);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a GetSessionOptionsResult message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.GetSessionOptionsResult
                 * @static
                 * @param {arrow.flight.protocol.GetSessionOptionsResult} message GetSessionOptionsResult
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetSessionOptionsResult.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.objects || options.defaults)
                        object.sessionOptions = {};
                    var keys2;
                    if (message.sessionOptions && (keys2 = $Object.keys(message.sessionOptions)).length) {
                        object.sessionOptions = {};
                        for (var j = 0; j < keys2.length; ++j) {
                            if (keys2[j] === "__proto__")
                                $util.makeProp(object.sessionOptions, keys2[j]);
                            object.sessionOptions[keys2[j]] = $root.arrow.flight.protocol.SessionOptionValue.toObject(message.sessionOptions[keys2[j]], options, _depth + 1);
                        }
                    }
                    return object;
                };

                /**
                 * Converts this GetSessionOptionsResult to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.GetSessionOptionsResult
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetSessionOptionsResult.prototype.toJSON = function() {
                    return GetSessionOptionsResult.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for GetSessionOptionsResult
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.GetSessionOptionsResult
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                GetSessionOptionsResult.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.GetSessionOptionsResult";
                };

                return GetSessionOptionsResult;
            })();

            protocol.CloseSessionRequest = (function() {

                /**
                 * Properties of a CloseSessionRequest.
                 * @typedef {Object} arrow.flight.protocol.CloseSessionRequest.$Properties
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a CloseSessionRequest.
                 * @memberof arrow.flight.protocol
                 * @interface ICloseSessionRequest
                 * @augments arrow.flight.protocol.CloseSessionRequest.$Properties
                 * @deprecated Use arrow.flight.protocol.CloseSessionRequest.$Properties instead.
                 */

                /**
                 * Shape of a CloseSessionRequest.
                 * @typedef {arrow.flight.protocol.CloseSessionRequest.$Properties} arrow.flight.protocol.CloseSessionRequest.$Shape
                 */

                /**
                 * Constructs a new CloseSessionRequest.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a CloseSessionRequest.
                 * @constructor
                 * @param {arrow.flight.protocol.CloseSessionRequest.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var CloseSessionRequest = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * Creates a new CloseSessionRequest instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.CloseSessionRequest
                 * @static
                 * @param {arrow.flight.protocol.CloseSessionRequest.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.CloseSessionRequest} CloseSessionRequest instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.CloseSessionRequest.$Shape): arrow.flight.protocol.CloseSessionRequest & arrow.flight.protocol.CloseSessionRequest.$Shape;
                 *   (properties?: arrow.flight.protocol.CloseSessionRequest.$Properties): arrow.flight.protocol.CloseSessionRequest;
                 * }}
                 */
                CloseSessionRequest.create = function(properties) {
                    return new CloseSessionRequest(properties);
                };

                /**
                 * Encodes the specified CloseSessionRequest message. Does not implicitly {@link arrow.flight.protocol.CloseSessionRequest.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.CloseSessionRequest
                 * @static
                 * @param {arrow.flight.protocol.CloseSessionRequest.$Properties} message CloseSessionRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CloseSessionRequest.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified CloseSessionRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.CloseSessionRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.CloseSessionRequest
                 * @static
                 * @param {arrow.flight.protocol.CloseSessionRequest.$Properties} message CloseSessionRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CloseSessionRequest.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a CloseSessionRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.CloseSessionRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.CloseSessionRequest & arrow.flight.protocol.CloseSessionRequest.$Shape} CloseSessionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CloseSessionRequest.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.CloseSessionRequest();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        reader.skipType(tag & 7, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a CloseSessionRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.CloseSessionRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.CloseSessionRequest & arrow.flight.protocol.CloseSessionRequest.$Shape} CloseSessionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CloseSessionRequest.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CloseSessionRequest message.
                 * @function verify
                 * @memberof arrow.flight.protocol.CloseSessionRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CloseSessionRequest.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    return null;
                };

                /**
                 * Creates a CloseSessionRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.CloseSessionRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.CloseSessionRequest} CloseSessionRequest
                 */
                CloseSessionRequest.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.CloseSessionRequest)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.CloseSessionRequest: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    return new $root.arrow.flight.protocol.CloseSessionRequest();
                };

                /**
                 * Creates a plain object from a CloseSessionRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.CloseSessionRequest
                 * @static
                 * @param {arrow.flight.protocol.CloseSessionRequest} message CloseSessionRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CloseSessionRequest.toObject = function () {
                    return {};
                };

                /**
                 * Converts this CloseSessionRequest to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.CloseSessionRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CloseSessionRequest.prototype.toJSON = function() {
                    return CloseSessionRequest.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for CloseSessionRequest
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.CloseSessionRequest
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                CloseSessionRequest.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.CloseSessionRequest";
                };

                return CloseSessionRequest;
            })();

            protocol.CloseSessionResult = (function() {

                /**
                 * Properties of a CloseSessionResult.
                 * @typedef {Object} arrow.flight.protocol.CloseSessionResult.$Properties
                 * @property {arrow.flight.protocol.CloseSessionResult.Status|null} [status] CloseSessionResult status
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a CloseSessionResult.
                 * @memberof arrow.flight.protocol
                 * @interface ICloseSessionResult
                 * @augments arrow.flight.protocol.CloseSessionResult.$Properties
                 * @deprecated Use arrow.flight.protocol.CloseSessionResult.$Properties instead.
                 */

                /**
                 * Shape of a CloseSessionResult.
                 * @typedef {arrow.flight.protocol.CloseSessionResult.$Properties} arrow.flight.protocol.CloseSessionResult.$Shape
                 */

                /**
                 * Constructs a new CloseSessionResult.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a CloseSessionResult.
                 * @constructor
                 * @param {arrow.flight.protocol.CloseSessionResult.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var CloseSessionResult = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * CloseSessionResult status.
                 * @member {arrow.flight.protocol.CloseSessionResult.Status} status
                 * @memberof arrow.flight.protocol.CloseSessionResult
                 * @instance
                 */
                CloseSessionResult.prototype.status = 0;

                /**
                 * Creates a new CloseSessionResult instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.CloseSessionResult
                 * @static
                 * @param {arrow.flight.protocol.CloseSessionResult.$Properties=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.CloseSessionResult} CloseSessionResult instance
                 * @type {{
                 *   (properties: arrow.flight.protocol.CloseSessionResult.$Shape): arrow.flight.protocol.CloseSessionResult & arrow.flight.protocol.CloseSessionResult.$Shape;
                 *   (properties?: arrow.flight.protocol.CloseSessionResult.$Properties): arrow.flight.protocol.CloseSessionResult;
                 * }}
                 */
                CloseSessionResult.create = function(properties) {
                    return new CloseSessionResult(properties);
                };

                /**
                 * Encodes the specified CloseSessionResult message. Does not implicitly {@link arrow.flight.protocol.CloseSessionResult.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.CloseSessionResult
                 * @static
                 * @param {arrow.flight.protocol.CloseSessionResult.$Properties} message CloseSessionResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CloseSessionResult.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.status != null && $Object.hasOwnProperty.call(message, "status") && message.status !== 0)
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified CloseSessionResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.CloseSessionResult.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.CloseSessionResult
                 * @static
                 * @param {arrow.flight.protocol.CloseSessionResult.$Properties} message CloseSessionResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CloseSessionResult.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a CloseSessionResult message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.CloseSessionResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.CloseSessionResult & arrow.flight.protocol.CloseSessionResult.$Shape} CloseSessionResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CloseSessionResult.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end, message, value;
                    if (length === $undefined)
                        end = reader.len;
                    else {
                        end = reader.pos + length;
                        if (end > reader.len)
                            throw $RangeError("index out of range");
                        length = reader.len;
                        reader.len = end;
                    }
                    message = _target || new $root.arrow.flight.protocol.CloseSessionResult();
                    while (reader.pos < end) {
                        var start = reader.pos;
                        var tag = reader.tag();
                        if (tag === _end) {
                            _end = $undefined;
                            break;
                        }
                        var wireType = tag & 7;
                        switch (tag >>>= 3) {
                        case 1: {
                                if (wireType !== 0)
                                    break;
                                if (value = reader.int32())
                                    message.status = value;
                                else
                                    delete message.status;
                                continue;
                            }
                        }
                        reader.skipType(wireType, _depth, tag);
                        if (!reader.discardUnknown) {
                            $util.makeProp(message, "$unknowns", false);
                            (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                        }
                    }
                    if (length !== $undefined) {
                        if (reader.pos !== end)
                            throw $RangeError("index out of range");
                        reader.len = length;
                    }
                    if (_end !== $undefined)
                        throw $Error("missing end group");
                    return message;
                };

                /**
                 * Decodes a CloseSessionResult message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.CloseSessionResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.CloseSessionResult & arrow.flight.protocol.CloseSessionResult.$Shape} CloseSessionResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CloseSessionResult.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CloseSessionResult message.
                 * @function verify
                 * @memberof arrow.flight.protocol.CloseSessionResult
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CloseSessionResult.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                        if (typeof message.status !== "number" || (message.status | 0) !== message.status)
                            return "status: enum value expected";
                    return null;
                };

                /**
                 * Creates a CloseSessionResult message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.CloseSessionResult
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.CloseSessionResult} CloseSessionResult
                 */
                CloseSessionResult.fromObject = function (object, _depth) {
                    if (object instanceof $root.arrow.flight.protocol.CloseSessionResult)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".arrow.flight.protocol.CloseSessionResult: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.arrow.flight.protocol.CloseSessionResult();
                    if (object.status !== 0 && (typeof object.status !== "string" || $root.arrow.flight.protocol.CloseSessionResult.Status[object.status] !== 0))
                        switch (object.status) {
                        case "UNSPECIFIED":
                        case 0:
                            message.status = 0;
                            break;
                        case "CLOSED":
                        case 1:
                            message.status = 1;
                            break;
                        case "CLOSING":
                        case 2:
                            message.status = 2;
                            break;
                        case "NOT_CLOSEABLE":
                        case 3:
                            message.status = 3;
                            break;
                        default:
                            if (typeof object.status === "number" && (object.status | 0) === object.status)
                                message.status = object.status;
                        }
                    return message;
                };

                /**
                 * Creates a plain object from a CloseSessionResult message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.CloseSessionResult
                 * @static
                 * @param {arrow.flight.protocol.CloseSessionResult} message CloseSessionResult
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CloseSessionResult.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (options.defaults)
                        object.status = options.enums === $String ? "UNSPECIFIED" : 0;
                    if (message.status != null && $Object.hasOwnProperty.call(message, "status"))
                        object.status = options.enums === $String ? $root.arrow.flight.protocol.CloseSessionResult.Status[message.status] === $undefined ? message.status : $root.arrow.flight.protocol.CloseSessionResult.Status[message.status] : message.status;
                    return object;
                };

                /**
                 * Converts this CloseSessionResult to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.CloseSessionResult
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CloseSessionResult.prototype.toJSON = function() {
                    return CloseSessionResult.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for CloseSessionResult
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.CloseSessionResult
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                CloseSessionResult.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/arrow.flight.protocol.CloseSessionResult";
                };

                /**
                 * Status enum.
                 * @name arrow.flight.protocol.CloseSessionResult.Status
                 * @enum {number}
                 * @property {number} UNSPECIFIED=0 UNSPECIFIED value
                 * @property {number} CLOSED=1 CLOSED value
                 * @property {number} CLOSING=2 CLOSING value
                 * @property {number} NOT_CLOSEABLE=3 NOT_CLOSEABLE value
                 */
                CloseSessionResult.Status = (function() {
                    var valuesById = $Object.create(null), values = $Object.create(valuesById);
                    values[valuesById[0] = "UNSPECIFIED"] = 0;
                    values[valuesById[1] = "CLOSED"] = 1;
                    values[valuesById[2] = "CLOSING"] = 2;
                    values[valuesById[3] = "NOT_CLOSEABLE"] = 3;
                    return values;
                })();

                return CloseSessionResult;
            })();

            return protocol;
        })();

        return flight;
    })();

    return arrow;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @typedef {Object} google.protobuf.Timestamp.$Properties
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @augments google.protobuf.Timestamp.$Properties
             * @deprecated Use google.protobuf.Timestamp.$Properties instead.
             */

            /**
             * Shape of a Timestamp.
             * @typedef {google.protobuf.Timestamp.$Properties} google.protobuf.Timestamp.$Shape
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @constructor
             * @param {google.protobuf.Timestamp.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var Timestamp = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp.$Properties=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             * @type {{
             *   (properties: google.protobuf.Timestamp.$Shape): google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape;
             *   (properties?: google.protobuf.Timestamp.$Properties): google.protobuf.Timestamp;
             * }}
             */
            Timestamp.create = function(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp.$Properties} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.seconds != null && $Object.hasOwnProperty.call(message, "seconds") && (typeof message.seconds === "object" ? message.seconds.low || message.seconds.high : message.seconds !== 0))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && $Object.hasOwnProperty.call(message, "nanos") && message.nanos !== 0)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp.$Properties} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                                message.seconds = value;
                            else
                                delete message.seconds;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.nanos = value;
                            else
                                delete message.nanos;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.seconds != null && $Object.hasOwnProperty.call(message, "seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && $Object.hasOwnProperty.call(message, "nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function (object, _depth) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".google.protobuf.Timestamp: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if (typeof object.seconds === "object" ? object.seconds.low || object.seconds.high : $Number(object.seconds) !== 0)
                        if ($util.Long)
                            message.seconds = $util.Long.fromValue(object.seconds, false);
                        else if (typeof object.seconds === "string")
                            message.seconds = $parseInt(object.seconds, 10);
                        else if (typeof object.seconds === "number")
                            message.seconds = object.seconds;
                        else if (typeof object.seconds === "object")
                            message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    if ($Number(object.nanos) !== 0)
                        message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                    } else
                        object.seconds = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && $Object.hasOwnProperty.call(message, "seconds"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.seconds = typeof message.seconds === "number" ? $BigInt(message.seconds) : $util.Long.fromBits(message.seconds.low >>> 0, message.seconds.high >>> 0, false).toBigInt();
                    else if (typeof message.seconds === "number")
                        object.seconds = options.longs === $String ? $String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === $String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === $Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && $Object.hasOwnProperty.call(message, "nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function() {
                return Timestamp.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Timestamp
             * @function getTypeUrl
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Timestamp.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/google.protobuf.Timestamp";
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
