import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace arrow. */
export namespace arrow {

    /** Namespace flight. */
    namespace flight {

        /** Namespace protocol. */
        namespace protocol {

            /** Represents a FlightService */
            class FlightService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new FlightService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new FlightService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): FlightService;

                /** Calls Handshake. */
                handshake: arrow.flight.protocol.FlightService.Handshake;

                /** Calls ListFlights. */
                listFlights: arrow.flight.protocol.FlightService.ListFlights;

                /** Calls GetFlightInfo. */
                getFlightInfo: arrow.flight.protocol.FlightService.GetFlightInfo;

                /** Calls PollFlightInfo. */
                pollFlightInfo: arrow.flight.protocol.FlightService.PollFlightInfo;

                /** Calls GetSchema. */
                getSchema: arrow.flight.protocol.FlightService.GetSchema;

                /** Calls DoGet. */
                doGet: arrow.flight.protocol.FlightService.DoGet;

                /** Calls DoPut. */
                doPut: arrow.flight.protocol.FlightService.DoPut;

                /** Calls DoExchange. */
                doExchange: arrow.flight.protocol.FlightService.DoExchange;

                /** Calls DoAction. */
                doAction: arrow.flight.protocol.FlightService.DoAction;

                /** Calls ListActions. */
                listActions: arrow.flight.protocol.FlightService.ListActions;
            }

            namespace FlightService {

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#handshake}.
                 * @param error Error, if any
                 * @param [response] HandshakeResponse
                 */
                type HandshakeCallback = (error: (Error|null), response?: arrow.flight.protocol.HandshakeResponse) => void;

                /** Calls Handshake. */
                type Handshake = {
                  (request: arrow.flight.protocol.IHandshakeRequest, callback: arrow.flight.protocol.FlightService.HandshakeCallback): void;
                  (request: arrow.flight.protocol.IHandshakeRequest): Promise<arrow.flight.protocol.HandshakeResponse>;
                  readonly name: "Handshake";
                  readonly path: "/arrow.flight.protocol.FlightService/Handshake";
                  readonly requestType: "HandshakeRequest";
                  readonly responseType: "HandshakeResponse";
                  readonly requestStream: true;
                  readonly responseStream: true;
                };

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#listFlights}.
                 * @param error Error, if any
                 * @param [response] FlightInfo
                 */
                type ListFlightsCallback = (error: (Error|null), response?: arrow.flight.protocol.FlightInfo) => void;

                /** Calls ListFlights. */
                type ListFlights = {
                  (request: arrow.flight.protocol.ICriteria, callback: arrow.flight.protocol.FlightService.ListFlightsCallback): void;
                  (request: arrow.flight.protocol.ICriteria): Promise<arrow.flight.protocol.FlightInfo>;
                  readonly name: "ListFlights";
                  readonly path: "/arrow.flight.protocol.FlightService/ListFlights";
                  readonly requestType: "Criteria";
                  readonly responseType: "FlightInfo";
                  readonly requestStream: undefined;
                  readonly responseStream: true;
                };

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#getFlightInfo}.
                 * @param error Error, if any
                 * @param [response] FlightInfo
                 */
                type GetFlightInfoCallback = (error: (Error|null), response?: arrow.flight.protocol.FlightInfo) => void;

                /** Calls GetFlightInfo. */
                type GetFlightInfo = {
                  (request: arrow.flight.protocol.IFlightDescriptor, callback: arrow.flight.protocol.FlightService.GetFlightInfoCallback): void;
                  (request: arrow.flight.protocol.IFlightDescriptor): Promise<arrow.flight.protocol.FlightInfo>;
                  readonly name: "GetFlightInfo";
                  readonly path: "/arrow.flight.protocol.FlightService/GetFlightInfo";
                  readonly requestType: "FlightDescriptor";
                  readonly responseType: "FlightInfo";
                  readonly requestStream: undefined;
                  readonly responseStream: undefined;
                };

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#pollFlightInfo}.
                 * @param error Error, if any
                 * @param [response] PollInfo
                 */
                type PollFlightInfoCallback = (error: (Error|null), response?: arrow.flight.protocol.PollInfo) => void;

                /** Calls PollFlightInfo. */
                type PollFlightInfo = {
                  (request: arrow.flight.protocol.IFlightDescriptor, callback: arrow.flight.protocol.FlightService.PollFlightInfoCallback): void;
                  (request: arrow.flight.protocol.IFlightDescriptor): Promise<arrow.flight.protocol.PollInfo>;
                  readonly name: "PollFlightInfo";
                  readonly path: "/arrow.flight.protocol.FlightService/PollFlightInfo";
                  readonly requestType: "FlightDescriptor";
                  readonly responseType: "PollInfo";
                  readonly requestStream: undefined;
                  readonly responseStream: undefined;
                };

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#getSchema}.
                 * @param error Error, if any
                 * @param [response] SchemaResult
                 */
                type GetSchemaCallback = (error: (Error|null), response?: arrow.flight.protocol.SchemaResult) => void;

                /** Calls GetSchema. */
                type GetSchema = {
                  (request: arrow.flight.protocol.IFlightDescriptor, callback: arrow.flight.protocol.FlightService.GetSchemaCallback): void;
                  (request: arrow.flight.protocol.IFlightDescriptor): Promise<arrow.flight.protocol.SchemaResult>;
                  readonly name: "GetSchema";
                  readonly path: "/arrow.flight.protocol.FlightService/GetSchema";
                  readonly requestType: "FlightDescriptor";
                  readonly responseType: "SchemaResult";
                  readonly requestStream: undefined;
                  readonly responseStream: undefined;
                };

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#doGet}.
                 * @param error Error, if any
                 * @param [response] FlightData
                 */
                type DoGetCallback = (error: (Error|null), response?: arrow.flight.protocol.FlightData) => void;

                /** Calls DoGet. */
                type DoGet = {
                  (request: arrow.flight.protocol.ITicket, callback: arrow.flight.protocol.FlightService.DoGetCallback): void;
                  (request: arrow.flight.protocol.ITicket): Promise<arrow.flight.protocol.FlightData>;
                  readonly name: "DoGet";
                  readonly path: "/arrow.flight.protocol.FlightService/DoGet";
                  readonly requestType: "Ticket";
                  readonly responseType: "FlightData";
                  readonly requestStream: undefined;
                  readonly responseStream: true;
                };

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#doPut}.
                 * @param error Error, if any
                 * @param [response] PutResult
                 */
                type DoPutCallback = (error: (Error|null), response?: arrow.flight.protocol.PutResult) => void;

                /** Calls DoPut. */
                type DoPut = {
                  (request: arrow.flight.protocol.IFlightData, callback: arrow.flight.protocol.FlightService.DoPutCallback): void;
                  (request: arrow.flight.protocol.IFlightData): Promise<arrow.flight.protocol.PutResult>;
                  readonly name: "DoPut";
                  readonly path: "/arrow.flight.protocol.FlightService/DoPut";
                  readonly requestType: "FlightData";
                  readonly responseType: "PutResult";
                  readonly requestStream: true;
                  readonly responseStream: true;
                };

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#doExchange}.
                 * @param error Error, if any
                 * @param [response] FlightData
                 */
                type DoExchangeCallback = (error: (Error|null), response?: arrow.flight.protocol.FlightData) => void;

                /** Calls DoExchange. */
                type DoExchange = {
                  (request: arrow.flight.protocol.IFlightData, callback: arrow.flight.protocol.FlightService.DoExchangeCallback): void;
                  (request: arrow.flight.protocol.IFlightData): Promise<arrow.flight.protocol.FlightData>;
                  readonly name: "DoExchange";
                  readonly path: "/arrow.flight.protocol.FlightService/DoExchange";
                  readonly requestType: "FlightData";
                  readonly responseType: "FlightData";
                  readonly requestStream: true;
                  readonly responseStream: true;
                };

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#doAction}.
                 * @param error Error, if any
                 * @param [response] Result
                 */
                type DoActionCallback = (error: (Error|null), response?: arrow.flight.protocol.Result) => void;

                /** Calls DoAction. */
                type DoAction = {
                  (request: arrow.flight.protocol.IAction, callback: arrow.flight.protocol.FlightService.DoActionCallback): void;
                  (request: arrow.flight.protocol.IAction): Promise<arrow.flight.protocol.Result>;
                  readonly name: "DoAction";
                  readonly path: "/arrow.flight.protocol.FlightService/DoAction";
                  readonly requestType: "Action";
                  readonly responseType: "Result";
                  readonly requestStream: undefined;
                  readonly responseStream: true;
                };

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#listActions}.
                 * @param error Error, if any
                 * @param [response] ActionType
                 */
                type ListActionsCallback = (error: (Error|null), response?: arrow.flight.protocol.ActionType) => void;

                /** Calls ListActions. */
                type ListActions = {
                  (request: arrow.flight.protocol.IEmpty, callback: arrow.flight.protocol.FlightService.ListActionsCallback): void;
                  (request: arrow.flight.protocol.IEmpty): Promise<arrow.flight.protocol.ActionType>;
                  readonly name: "ListActions";
                  readonly path: "/arrow.flight.protocol.FlightService/ListActions";
                  readonly requestType: "Empty";
                  readonly responseType: "ActionType";
                  readonly requestStream: undefined;
                  readonly responseStream: true;
                };
            }

            /**
             * Properties of a HandshakeRequest.
             * @deprecated Use arrow.flight.protocol.HandshakeRequest.$Properties instead.
             */
            interface IHandshakeRequest extends arrow.flight.protocol.HandshakeRequest.$Properties {
            }

            /** Represents a HandshakeRequest. */
            class HandshakeRequest {

                /**
                 * Constructs a new HandshakeRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.HandshakeRequest.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** HandshakeRequest protocolVersion. */
                protocolVersion: (number|Long);

                /** HandshakeRequest payload. */
                payload: Uint8Array;

                /**
                 * Creates a new HandshakeRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HandshakeRequest instance
                 */
                static create(properties: arrow.flight.protocol.HandshakeRequest.$Shape): arrow.flight.protocol.HandshakeRequest & arrow.flight.protocol.HandshakeRequest.$Shape;
                static create(properties?: arrow.flight.protocol.HandshakeRequest.$Properties): arrow.flight.protocol.HandshakeRequest;

                /**
                 * Encodes the specified HandshakeRequest message. Does not implicitly {@link arrow.flight.protocol.HandshakeRequest.verify|verify} messages.
                 * @param message HandshakeRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.HandshakeRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HandshakeRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.HandshakeRequest.verify|verify} messages.
                 * @param message HandshakeRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.HandshakeRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HandshakeRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.HandshakeRequest & arrow.flight.protocol.HandshakeRequest.$Shape} HandshakeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.HandshakeRequest & arrow.flight.protocol.HandshakeRequest.$Shape;

                /**
                 * Decodes a HandshakeRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.HandshakeRequest & arrow.flight.protocol.HandshakeRequest.$Shape} HandshakeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.HandshakeRequest & arrow.flight.protocol.HandshakeRequest.$Shape;

                /**
                 * Verifies a HandshakeRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HandshakeRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HandshakeRequest
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.HandshakeRequest;

                /**
                 * Creates a plain object from a HandshakeRequest message. Also converts values to other types if specified.
                 * @param message HandshakeRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.HandshakeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HandshakeRequest to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for HandshakeRequest
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace HandshakeRequest {

                /** Properties of a HandshakeRequest. */
                interface $Properties {

                    /** HandshakeRequest protocolVersion */
                    protocolVersion?: (number|Long|null);

                    /** HandshakeRequest payload */
                    payload?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a HandshakeRequest. */
                type $Shape = arrow.flight.protocol.HandshakeRequest.$Properties;
            }

            /**
             * Properties of a HandshakeResponse.
             * @deprecated Use arrow.flight.protocol.HandshakeResponse.$Properties instead.
             */
            interface IHandshakeResponse extends arrow.flight.protocol.HandshakeResponse.$Properties {
            }

            /** Represents a HandshakeResponse. */
            class HandshakeResponse {

                /**
                 * Constructs a new HandshakeResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.HandshakeResponse.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** HandshakeResponse protocolVersion. */
                protocolVersion: (number|Long);

                /** HandshakeResponse payload. */
                payload: Uint8Array;

                /**
                 * Creates a new HandshakeResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HandshakeResponse instance
                 */
                static create(properties: arrow.flight.protocol.HandshakeResponse.$Shape): arrow.flight.protocol.HandshakeResponse & arrow.flight.protocol.HandshakeResponse.$Shape;
                static create(properties?: arrow.flight.protocol.HandshakeResponse.$Properties): arrow.flight.protocol.HandshakeResponse;

                /**
                 * Encodes the specified HandshakeResponse message. Does not implicitly {@link arrow.flight.protocol.HandshakeResponse.verify|verify} messages.
                 * @param message HandshakeResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.HandshakeResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HandshakeResponse message, length delimited. Does not implicitly {@link arrow.flight.protocol.HandshakeResponse.verify|verify} messages.
                 * @param message HandshakeResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.HandshakeResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HandshakeResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.HandshakeResponse & arrow.flight.protocol.HandshakeResponse.$Shape} HandshakeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.HandshakeResponse & arrow.flight.protocol.HandshakeResponse.$Shape;

                /**
                 * Decodes a HandshakeResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.HandshakeResponse & arrow.flight.protocol.HandshakeResponse.$Shape} HandshakeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.HandshakeResponse & arrow.flight.protocol.HandshakeResponse.$Shape;

                /**
                 * Verifies a HandshakeResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HandshakeResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HandshakeResponse
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.HandshakeResponse;

                /**
                 * Creates a plain object from a HandshakeResponse message. Also converts values to other types if specified.
                 * @param message HandshakeResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.HandshakeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HandshakeResponse to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for HandshakeResponse
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace HandshakeResponse {

                /** Properties of a HandshakeResponse. */
                interface $Properties {

                    /** HandshakeResponse protocolVersion */
                    protocolVersion?: (number|Long|null);

                    /** HandshakeResponse payload */
                    payload?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a HandshakeResponse. */
                type $Shape = arrow.flight.protocol.HandshakeResponse.$Properties;
            }

            /**
             * Properties of a BasicAuth.
             * @deprecated Use arrow.flight.protocol.BasicAuth.$Properties instead.
             */
            interface IBasicAuth extends arrow.flight.protocol.BasicAuth.$Properties {
            }

            /** Represents a BasicAuth. */
            class BasicAuth {

                /**
                 * Constructs a new BasicAuth.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.BasicAuth.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** BasicAuth username. */
                username: string;

                /** BasicAuth password. */
                password: string;

                /**
                 * Creates a new BasicAuth instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BasicAuth instance
                 */
                static create(properties: arrow.flight.protocol.BasicAuth.$Shape): arrow.flight.protocol.BasicAuth & arrow.flight.protocol.BasicAuth.$Shape;
                static create(properties?: arrow.flight.protocol.BasicAuth.$Properties): arrow.flight.protocol.BasicAuth;

                /**
                 * Encodes the specified BasicAuth message. Does not implicitly {@link arrow.flight.protocol.BasicAuth.verify|verify} messages.
                 * @param message BasicAuth message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.BasicAuth.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BasicAuth message, length delimited. Does not implicitly {@link arrow.flight.protocol.BasicAuth.verify|verify} messages.
                 * @param message BasicAuth message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.BasicAuth.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BasicAuth message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.BasicAuth & arrow.flight.protocol.BasicAuth.$Shape} BasicAuth
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.BasicAuth & arrow.flight.protocol.BasicAuth.$Shape;

                /**
                 * Decodes a BasicAuth message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.BasicAuth & arrow.flight.protocol.BasicAuth.$Shape} BasicAuth
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.BasicAuth & arrow.flight.protocol.BasicAuth.$Shape;

                /**
                 * Verifies a BasicAuth message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BasicAuth message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BasicAuth
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.BasicAuth;

                /**
                 * Creates a plain object from a BasicAuth message. Also converts values to other types if specified.
                 * @param message BasicAuth
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.BasicAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BasicAuth to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for BasicAuth
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace BasicAuth {

                /** Properties of a BasicAuth. */
                interface $Properties {

                    /** BasicAuth username */
                    username?: (string|null);

                    /** BasicAuth password */
                    password?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a BasicAuth. */
                type $Shape = arrow.flight.protocol.BasicAuth.$Properties;
            }

            /**
             * Properties of an Empty.
             * @deprecated Use arrow.flight.protocol.Empty.$Properties instead.
             */
            interface IEmpty extends arrow.flight.protocol.Empty.$Properties {
            }

            /** Represents an Empty. */
            class Empty {

                /**
                 * Constructs a new Empty.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.Empty.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /**
                 * Creates a new Empty instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Empty instance
                 */
                static create(properties: arrow.flight.protocol.Empty.$Shape): arrow.flight.protocol.Empty & arrow.flight.protocol.Empty.$Shape;
                static create(properties?: arrow.flight.protocol.Empty.$Properties): arrow.flight.protocol.Empty;

                /**
                 * Encodes the specified Empty message. Does not implicitly {@link arrow.flight.protocol.Empty.verify|verify} messages.
                 * @param message Empty message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.Empty.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Empty message, length delimited. Does not implicitly {@link arrow.flight.protocol.Empty.verify|verify} messages.
                 * @param message Empty message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.Empty.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Empty message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.Empty & arrow.flight.protocol.Empty.$Shape} Empty
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.Empty & arrow.flight.protocol.Empty.$Shape;

                /**
                 * Decodes an Empty message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.Empty & arrow.flight.protocol.Empty.$Shape} Empty
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.Empty & arrow.flight.protocol.Empty.$Shape;

                /**
                 * Verifies an Empty message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Empty message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Empty
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.Empty;

                /**
                 * Creates a plain object from an Empty message. Also converts values to other types if specified.
                 * @param message Empty
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Empty to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for Empty
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Empty {

                /** Properties of an Empty. */
                interface $Properties {

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an Empty. */
                type $Shape = arrow.flight.protocol.Empty.$Properties;
            }

            /**
             * Properties of an ActionType.
             * @deprecated Use arrow.flight.protocol.ActionType.$Properties instead.
             */
            interface IActionType extends arrow.flight.protocol.ActionType.$Properties {
            }

            /** Represents an ActionType. */
            class ActionType {

                /**
                 * Constructs a new ActionType.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.ActionType.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** ActionType type. */
                type: string;

                /** ActionType description. */
                description: string;

                /**
                 * Creates a new ActionType instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ActionType instance
                 */
                static create(properties: arrow.flight.protocol.ActionType.$Shape): arrow.flight.protocol.ActionType & arrow.flight.protocol.ActionType.$Shape;
                static create(properties?: arrow.flight.protocol.ActionType.$Properties): arrow.flight.protocol.ActionType;

                /**
                 * Encodes the specified ActionType message. Does not implicitly {@link arrow.flight.protocol.ActionType.verify|verify} messages.
                 * @param message ActionType message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.ActionType.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ActionType message, length delimited. Does not implicitly {@link arrow.flight.protocol.ActionType.verify|verify} messages.
                 * @param message ActionType message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.ActionType.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ActionType message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.ActionType & arrow.flight.protocol.ActionType.$Shape} ActionType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.ActionType & arrow.flight.protocol.ActionType.$Shape;

                /**
                 * Decodes an ActionType message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.ActionType & arrow.flight.protocol.ActionType.$Shape} ActionType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.ActionType & arrow.flight.protocol.ActionType.$Shape;

                /**
                 * Verifies an ActionType message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ActionType message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ActionType
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.ActionType;

                /**
                 * Creates a plain object from an ActionType message. Also converts values to other types if specified.
                 * @param message ActionType
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.ActionType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ActionType to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for ActionType
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace ActionType {

                /** Properties of an ActionType. */
                interface $Properties {

                    /** ActionType type */
                    type?: (string|null);

                    /** ActionType description */
                    description?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an ActionType. */
                type $Shape = arrow.flight.protocol.ActionType.$Properties;
            }

            /**
             * Properties of a Criteria.
             * @deprecated Use arrow.flight.protocol.Criteria.$Properties instead.
             */
            interface ICriteria extends arrow.flight.protocol.Criteria.$Properties {
            }

            /** Represents a Criteria. */
            class Criteria {

                /**
                 * Constructs a new Criteria.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.Criteria.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Criteria expression. */
                expression: Uint8Array;

                /**
                 * Creates a new Criteria instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Criteria instance
                 */
                static create(properties: arrow.flight.protocol.Criteria.$Shape): arrow.flight.protocol.Criteria & arrow.flight.protocol.Criteria.$Shape;
                static create(properties?: arrow.flight.protocol.Criteria.$Properties): arrow.flight.protocol.Criteria;

                /**
                 * Encodes the specified Criteria message. Does not implicitly {@link arrow.flight.protocol.Criteria.verify|verify} messages.
                 * @param message Criteria message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.Criteria.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Criteria message, length delimited. Does not implicitly {@link arrow.flight.protocol.Criteria.verify|verify} messages.
                 * @param message Criteria message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.Criteria.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Criteria message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.Criteria & arrow.flight.protocol.Criteria.$Shape} Criteria
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.Criteria & arrow.flight.protocol.Criteria.$Shape;

                /**
                 * Decodes a Criteria message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.Criteria & arrow.flight.protocol.Criteria.$Shape} Criteria
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.Criteria & arrow.flight.protocol.Criteria.$Shape;

                /**
                 * Verifies a Criteria message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Criteria message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Criteria
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.Criteria;

                /**
                 * Creates a plain object from a Criteria message. Also converts values to other types if specified.
                 * @param message Criteria
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.Criteria, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Criteria to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for Criteria
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Criteria {

                /** Properties of a Criteria. */
                interface $Properties {

                    /** Criteria expression */
                    expression?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a Criteria. */
                type $Shape = arrow.flight.protocol.Criteria.$Properties;
            }

            /**
             * Properties of an Action.
             * @deprecated Use arrow.flight.protocol.Action.$Properties instead.
             */
            interface IAction extends arrow.flight.protocol.Action.$Properties {
            }

            /** Represents an Action. */
            class Action {

                /**
                 * Constructs a new Action.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.Action.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Action type. */
                type: string;

                /** Action body. */
                body: Uint8Array;

                /**
                 * Creates a new Action instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Action instance
                 */
                static create(properties: arrow.flight.protocol.Action.$Shape): arrow.flight.protocol.Action & arrow.flight.protocol.Action.$Shape;
                static create(properties?: arrow.flight.protocol.Action.$Properties): arrow.flight.protocol.Action;

                /**
                 * Encodes the specified Action message. Does not implicitly {@link arrow.flight.protocol.Action.verify|verify} messages.
                 * @param message Action message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.Action.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Action message, length delimited. Does not implicitly {@link arrow.flight.protocol.Action.verify|verify} messages.
                 * @param message Action message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.Action.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Action message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.Action & arrow.flight.protocol.Action.$Shape} Action
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.Action & arrow.flight.protocol.Action.$Shape;

                /**
                 * Decodes an Action message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.Action & arrow.flight.protocol.Action.$Shape} Action
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.Action & arrow.flight.protocol.Action.$Shape;

                /**
                 * Verifies an Action message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Action message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Action
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.Action;

                /**
                 * Creates a plain object from an Action message. Also converts values to other types if specified.
                 * @param message Action
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.Action, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Action to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for Action
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Action {

                /** Properties of an Action. */
                interface $Properties {

                    /** Action type */
                    type?: (string|null);

                    /** Action body */
                    body?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an Action. */
                type $Shape = arrow.flight.protocol.Action.$Properties;
            }

            /**
             * Properties of a Result.
             * @deprecated Use arrow.flight.protocol.Result.$Properties instead.
             */
            interface IResult extends arrow.flight.protocol.Result.$Properties {
            }

            /** Represents a Result. */
            class Result {

                /**
                 * Constructs a new Result.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.Result.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Result body. */
                body: Uint8Array;

                /**
                 * Creates a new Result instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Result instance
                 */
                static create(properties: arrow.flight.protocol.Result.$Shape): arrow.flight.protocol.Result & arrow.flight.protocol.Result.$Shape;
                static create(properties?: arrow.flight.protocol.Result.$Properties): arrow.flight.protocol.Result;

                /**
                 * Encodes the specified Result message. Does not implicitly {@link arrow.flight.protocol.Result.verify|verify} messages.
                 * @param message Result message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.Result.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Result message, length delimited. Does not implicitly {@link arrow.flight.protocol.Result.verify|verify} messages.
                 * @param message Result message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.Result.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Result message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.Result & arrow.flight.protocol.Result.$Shape} Result
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.Result & arrow.flight.protocol.Result.$Shape;

                /**
                 * Decodes a Result message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.Result & arrow.flight.protocol.Result.$Shape} Result
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.Result & arrow.flight.protocol.Result.$Shape;

                /**
                 * Verifies a Result message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Result message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Result
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.Result;

                /**
                 * Creates a plain object from a Result message. Also converts values to other types if specified.
                 * @param message Result
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.Result, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Result to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for Result
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Result {

                /** Properties of a Result. */
                interface $Properties {

                    /** Result body */
                    body?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a Result. */
                type $Shape = arrow.flight.protocol.Result.$Properties;
            }

            /**
             * Properties of a SchemaResult.
             * @deprecated Use arrow.flight.protocol.SchemaResult.$Properties instead.
             */
            interface ISchemaResult extends arrow.flight.protocol.SchemaResult.$Properties {
            }

            /** Represents a SchemaResult. */
            class SchemaResult {

                /**
                 * Constructs a new SchemaResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.SchemaResult.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** SchemaResult schema. */
                schema: Uint8Array;

                /**
                 * Creates a new SchemaResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SchemaResult instance
                 */
                static create(properties: arrow.flight.protocol.SchemaResult.$Shape): arrow.flight.protocol.SchemaResult & arrow.flight.protocol.SchemaResult.$Shape;
                static create(properties?: arrow.flight.protocol.SchemaResult.$Properties): arrow.flight.protocol.SchemaResult;

                /**
                 * Encodes the specified SchemaResult message. Does not implicitly {@link arrow.flight.protocol.SchemaResult.verify|verify} messages.
                 * @param message SchemaResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.SchemaResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SchemaResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.SchemaResult.verify|verify} messages.
                 * @param message SchemaResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.SchemaResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SchemaResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.SchemaResult & arrow.flight.protocol.SchemaResult.$Shape} SchemaResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.SchemaResult & arrow.flight.protocol.SchemaResult.$Shape;

                /**
                 * Decodes a SchemaResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.SchemaResult & arrow.flight.protocol.SchemaResult.$Shape} SchemaResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.SchemaResult & arrow.flight.protocol.SchemaResult.$Shape;

                /**
                 * Verifies a SchemaResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SchemaResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SchemaResult
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.SchemaResult;

                /**
                 * Creates a plain object from a SchemaResult message. Also converts values to other types if specified.
                 * @param message SchemaResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.SchemaResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SchemaResult to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for SchemaResult
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace SchemaResult {

                /** Properties of a SchemaResult. */
                interface $Properties {

                    /** SchemaResult schema */
                    schema?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a SchemaResult. */
                type $Shape = arrow.flight.protocol.SchemaResult.$Properties;
            }

            /**
             * Properties of a FlightDescriptor.
             * @deprecated Use arrow.flight.protocol.FlightDescriptor.$Properties instead.
             */
            interface IFlightDescriptor extends arrow.flight.protocol.FlightDescriptor.$Properties {
            }

            /** Represents a FlightDescriptor. */
            class FlightDescriptor {

                /**
                 * Constructs a new FlightDescriptor.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.FlightDescriptor.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** FlightDescriptor type. */
                type: arrow.flight.protocol.FlightDescriptor.DescriptorType;

                /** FlightDescriptor cmd. */
                cmd: Uint8Array;

                /** FlightDescriptor path. */
                path: string[];

                /**
                 * Creates a new FlightDescriptor instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FlightDescriptor instance
                 */
                static create(properties: arrow.flight.protocol.FlightDescriptor.$Shape): arrow.flight.protocol.FlightDescriptor & arrow.flight.protocol.FlightDescriptor.$Shape;
                static create(properties?: arrow.flight.protocol.FlightDescriptor.$Properties): arrow.flight.protocol.FlightDescriptor;

                /**
                 * Encodes the specified FlightDescriptor message. Does not implicitly {@link arrow.flight.protocol.FlightDescriptor.verify|verify} messages.
                 * @param message FlightDescriptor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.FlightDescriptor.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FlightDescriptor message, length delimited. Does not implicitly {@link arrow.flight.protocol.FlightDescriptor.verify|verify} messages.
                 * @param message FlightDescriptor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.FlightDescriptor.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FlightDescriptor message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.FlightDescriptor & arrow.flight.protocol.FlightDescriptor.$Shape} FlightDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.FlightDescriptor & arrow.flight.protocol.FlightDescriptor.$Shape;

                /**
                 * Decodes a FlightDescriptor message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.FlightDescriptor & arrow.flight.protocol.FlightDescriptor.$Shape} FlightDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.FlightDescriptor & arrow.flight.protocol.FlightDescriptor.$Shape;

                /**
                 * Verifies a FlightDescriptor message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FlightDescriptor message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FlightDescriptor
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.FlightDescriptor;

                /**
                 * Creates a plain object from a FlightDescriptor message. Also converts values to other types if specified.
                 * @param message FlightDescriptor
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.FlightDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FlightDescriptor to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for FlightDescriptor
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace FlightDescriptor {

                /** Properties of a FlightDescriptor. */
                interface $Properties {

                    /** FlightDescriptor type */
                    type?: (arrow.flight.protocol.FlightDescriptor.DescriptorType|null);

                    /** FlightDescriptor cmd */
                    cmd?: (Uint8Array|null);

                    /** FlightDescriptor path */
                    path?: (string[]|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a FlightDescriptor. */
                type $Shape = arrow.flight.protocol.FlightDescriptor.$Properties;

                /** DescriptorType enum. */
                enum DescriptorType {

                    /** UNKNOWN value */
                    UNKNOWN = 0,

                    /** PATH value */
                    PATH = 1,

                    /** CMD value */
                    CMD = 2
                }
            }

            /**
             * Properties of a FlightInfo.
             * @deprecated Use arrow.flight.protocol.FlightInfo.$Properties instead.
             */
            interface IFlightInfo extends arrow.flight.protocol.FlightInfo.$Properties {
            }

            /** Represents a FlightInfo. */
            class FlightInfo {

                /**
                 * Constructs a new FlightInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.FlightInfo.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** FlightInfo schema. */
                schema: Uint8Array;

                /** FlightInfo flightDescriptor. */
                flightDescriptor?: (arrow.flight.protocol.FlightDescriptor.$Properties|null);

                /** FlightInfo endpoint. */
                endpoint: arrow.flight.protocol.FlightEndpoint.$Properties[];

                /** FlightInfo totalRecords. */
                totalRecords: (number|Long);

                /** FlightInfo totalBytes. */
                totalBytes: (number|Long);

                /** FlightInfo ordered. */
                ordered: boolean;

                /** FlightInfo appMetadata. */
                appMetadata: Uint8Array;

                /**
                 * Creates a new FlightInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FlightInfo instance
                 */
                static create(properties: arrow.flight.protocol.FlightInfo.$Shape): arrow.flight.protocol.FlightInfo & arrow.flight.protocol.FlightInfo.$Shape;
                static create(properties?: arrow.flight.protocol.FlightInfo.$Properties): arrow.flight.protocol.FlightInfo;

                /**
                 * Encodes the specified FlightInfo message. Does not implicitly {@link arrow.flight.protocol.FlightInfo.verify|verify} messages.
                 * @param message FlightInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.FlightInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FlightInfo message, length delimited. Does not implicitly {@link arrow.flight.protocol.FlightInfo.verify|verify} messages.
                 * @param message FlightInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.FlightInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FlightInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.FlightInfo & arrow.flight.protocol.FlightInfo.$Shape} FlightInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.FlightInfo & arrow.flight.protocol.FlightInfo.$Shape;

                /**
                 * Decodes a FlightInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.FlightInfo & arrow.flight.protocol.FlightInfo.$Shape} FlightInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.FlightInfo & arrow.flight.protocol.FlightInfo.$Shape;

                /**
                 * Verifies a FlightInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FlightInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FlightInfo
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.FlightInfo;

                /**
                 * Creates a plain object from a FlightInfo message. Also converts values to other types if specified.
                 * @param message FlightInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.FlightInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FlightInfo to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for FlightInfo
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace FlightInfo {

                /** Properties of a FlightInfo. */
                interface $Properties {

                    /** FlightInfo schema */
                    schema?: (Uint8Array|null);

                    /** FlightInfo flightDescriptor */
                    flightDescriptor?: (arrow.flight.protocol.FlightDescriptor.$Properties|null);

                    /** FlightInfo endpoint */
                    endpoint?: (arrow.flight.protocol.FlightEndpoint.$Properties[]|null);

                    /** FlightInfo totalRecords */
                    totalRecords?: (number|Long|null);

                    /** FlightInfo totalBytes */
                    totalBytes?: (number|Long|null);

                    /** FlightInfo ordered */
                    ordered?: (boolean|null);

                    /** FlightInfo appMetadata */
                    appMetadata?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a FlightInfo. */
                type $Shape = arrow.flight.protocol.FlightInfo.$Properties;
            }

            /**
             * Properties of a PollInfo.
             * @deprecated Use arrow.flight.protocol.PollInfo.$Properties instead.
             */
            interface IPollInfo extends arrow.flight.protocol.PollInfo.$Properties {
            }

            /** Represents a PollInfo. */
            class PollInfo {

                /**
                 * Constructs a new PollInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.PollInfo.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** PollInfo info. */
                info?: (arrow.flight.protocol.FlightInfo.$Properties|null);

                /** PollInfo flightDescriptor. */
                flightDescriptor?: (arrow.flight.protocol.FlightDescriptor.$Properties|null);

                /** PollInfo progress. */
                progress?: (number|null);

                /** PollInfo expirationTime. */
                expirationTime?: (google.protobuf.Timestamp.$Properties|null);

                /**
                 * Creates a new PollInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PollInfo instance
                 */
                static create(properties: arrow.flight.protocol.PollInfo.$Shape): arrow.flight.protocol.PollInfo & arrow.flight.protocol.PollInfo.$Shape;
                static create(properties?: arrow.flight.protocol.PollInfo.$Properties): arrow.flight.protocol.PollInfo;

                /**
                 * Encodes the specified PollInfo message. Does not implicitly {@link arrow.flight.protocol.PollInfo.verify|verify} messages.
                 * @param message PollInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.PollInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PollInfo message, length delimited. Does not implicitly {@link arrow.flight.protocol.PollInfo.verify|verify} messages.
                 * @param message PollInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.PollInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PollInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.PollInfo & arrow.flight.protocol.PollInfo.$Shape} PollInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.PollInfo & arrow.flight.protocol.PollInfo.$Shape;

                /**
                 * Decodes a PollInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.PollInfo & arrow.flight.protocol.PollInfo.$Shape} PollInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.PollInfo & arrow.flight.protocol.PollInfo.$Shape;

                /**
                 * Verifies a PollInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PollInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PollInfo
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.PollInfo;

                /**
                 * Creates a plain object from a PollInfo message. Also converts values to other types if specified.
                 * @param message PollInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.PollInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PollInfo to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for PollInfo
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace PollInfo {

                /** Properties of a PollInfo. */
                interface $Properties {

                    /** PollInfo info */
                    info?: (arrow.flight.protocol.FlightInfo.$Properties|null);

                    /** PollInfo flightDescriptor */
                    flightDescriptor?: (arrow.flight.protocol.FlightDescriptor.$Properties|null);

                    /** PollInfo progress */
                    progress?: (number|null);

                    /** PollInfo expirationTime */
                    expirationTime?: (google.protobuf.Timestamp.$Properties|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a PollInfo. */
                type $Shape = arrow.flight.protocol.PollInfo.$Properties;
            }

            /**
             * Properties of a CancelFlightInfoRequest.
             * @deprecated Use arrow.flight.protocol.CancelFlightInfoRequest.$Properties instead.
             */
            interface ICancelFlightInfoRequest extends arrow.flight.protocol.CancelFlightInfoRequest.$Properties {
            }

            /** Represents a CancelFlightInfoRequest. */
            class CancelFlightInfoRequest {

                /**
                 * Constructs a new CancelFlightInfoRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.CancelFlightInfoRequest.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** CancelFlightInfoRequest info. */
                info?: (arrow.flight.protocol.FlightInfo.$Properties|null);

                /**
                 * Creates a new CancelFlightInfoRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CancelFlightInfoRequest instance
                 */
                static create(properties: arrow.flight.protocol.CancelFlightInfoRequest.$Shape): arrow.flight.protocol.CancelFlightInfoRequest & arrow.flight.protocol.CancelFlightInfoRequest.$Shape;
                static create(properties?: arrow.flight.protocol.CancelFlightInfoRequest.$Properties): arrow.flight.protocol.CancelFlightInfoRequest;

                /**
                 * Encodes the specified CancelFlightInfoRequest message. Does not implicitly {@link arrow.flight.protocol.CancelFlightInfoRequest.verify|verify} messages.
                 * @param message CancelFlightInfoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.CancelFlightInfoRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CancelFlightInfoRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.CancelFlightInfoRequest.verify|verify} messages.
                 * @param message CancelFlightInfoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.CancelFlightInfoRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CancelFlightInfoRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.CancelFlightInfoRequest & arrow.flight.protocol.CancelFlightInfoRequest.$Shape} CancelFlightInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.CancelFlightInfoRequest & arrow.flight.protocol.CancelFlightInfoRequest.$Shape;

                /**
                 * Decodes a CancelFlightInfoRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.CancelFlightInfoRequest & arrow.flight.protocol.CancelFlightInfoRequest.$Shape} CancelFlightInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.CancelFlightInfoRequest & arrow.flight.protocol.CancelFlightInfoRequest.$Shape;

                /**
                 * Verifies a CancelFlightInfoRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CancelFlightInfoRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CancelFlightInfoRequest
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.CancelFlightInfoRequest;

                /**
                 * Creates a plain object from a CancelFlightInfoRequest message. Also converts values to other types if specified.
                 * @param message CancelFlightInfoRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.CancelFlightInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CancelFlightInfoRequest to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for CancelFlightInfoRequest
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace CancelFlightInfoRequest {

                /** Properties of a CancelFlightInfoRequest. */
                interface $Properties {

                    /** CancelFlightInfoRequest info */
                    info?: (arrow.flight.protocol.FlightInfo.$Properties|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a CancelFlightInfoRequest. */
                type $Shape = arrow.flight.protocol.CancelFlightInfoRequest.$Properties;
            }

            /** CancelStatus enum. */
            enum CancelStatus {

                /** CANCEL_STATUS_UNSPECIFIED value */
                CANCEL_STATUS_UNSPECIFIED = 0,

                /** CANCEL_STATUS_CANCELLED value */
                CANCEL_STATUS_CANCELLED = 1,

                /** CANCEL_STATUS_CANCELLING value */
                CANCEL_STATUS_CANCELLING = 2,

                /** CANCEL_STATUS_NOT_CANCELLABLE value */
                CANCEL_STATUS_NOT_CANCELLABLE = 3
            }

            /**
             * Properties of a CancelFlightInfoResult.
             * @deprecated Use arrow.flight.protocol.CancelFlightInfoResult.$Properties instead.
             */
            interface ICancelFlightInfoResult extends arrow.flight.protocol.CancelFlightInfoResult.$Properties {
            }

            /** Represents a CancelFlightInfoResult. */
            class CancelFlightInfoResult {

                /**
                 * Constructs a new CancelFlightInfoResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.CancelFlightInfoResult.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** CancelFlightInfoResult status. */
                status: arrow.flight.protocol.CancelStatus;

                /**
                 * Creates a new CancelFlightInfoResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CancelFlightInfoResult instance
                 */
                static create(properties: arrow.flight.protocol.CancelFlightInfoResult.$Shape): arrow.flight.protocol.CancelFlightInfoResult & arrow.flight.protocol.CancelFlightInfoResult.$Shape;
                static create(properties?: arrow.flight.protocol.CancelFlightInfoResult.$Properties): arrow.flight.protocol.CancelFlightInfoResult;

                /**
                 * Encodes the specified CancelFlightInfoResult message. Does not implicitly {@link arrow.flight.protocol.CancelFlightInfoResult.verify|verify} messages.
                 * @param message CancelFlightInfoResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.CancelFlightInfoResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CancelFlightInfoResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.CancelFlightInfoResult.verify|verify} messages.
                 * @param message CancelFlightInfoResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.CancelFlightInfoResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CancelFlightInfoResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.CancelFlightInfoResult & arrow.flight.protocol.CancelFlightInfoResult.$Shape} CancelFlightInfoResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.CancelFlightInfoResult & arrow.flight.protocol.CancelFlightInfoResult.$Shape;

                /**
                 * Decodes a CancelFlightInfoResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.CancelFlightInfoResult & arrow.flight.protocol.CancelFlightInfoResult.$Shape} CancelFlightInfoResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.CancelFlightInfoResult & arrow.flight.protocol.CancelFlightInfoResult.$Shape;

                /**
                 * Verifies a CancelFlightInfoResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CancelFlightInfoResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CancelFlightInfoResult
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.CancelFlightInfoResult;

                /**
                 * Creates a plain object from a CancelFlightInfoResult message. Also converts values to other types if specified.
                 * @param message CancelFlightInfoResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.CancelFlightInfoResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CancelFlightInfoResult to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for CancelFlightInfoResult
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace CancelFlightInfoResult {

                /** Properties of a CancelFlightInfoResult. */
                interface $Properties {

                    /** CancelFlightInfoResult status */
                    status?: (arrow.flight.protocol.CancelStatus|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a CancelFlightInfoResult. */
                type $Shape = arrow.flight.protocol.CancelFlightInfoResult.$Properties;
            }

            /**
             * Properties of a Ticket.
             * @deprecated Use arrow.flight.protocol.Ticket.$Properties instead.
             */
            interface ITicket extends arrow.flight.protocol.Ticket.$Properties {
            }

            /** Represents a Ticket. */
            class Ticket {

                /**
                 * Constructs a new Ticket.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.Ticket.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Ticket ticket. */
                ticket: Uint8Array;

                /**
                 * Creates a new Ticket instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Ticket instance
                 */
                static create(properties: arrow.flight.protocol.Ticket.$Shape): arrow.flight.protocol.Ticket & arrow.flight.protocol.Ticket.$Shape;
                static create(properties?: arrow.flight.protocol.Ticket.$Properties): arrow.flight.protocol.Ticket;

                /**
                 * Encodes the specified Ticket message. Does not implicitly {@link arrow.flight.protocol.Ticket.verify|verify} messages.
                 * @param message Ticket message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.Ticket.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Ticket message, length delimited. Does not implicitly {@link arrow.flight.protocol.Ticket.verify|verify} messages.
                 * @param message Ticket message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.Ticket.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Ticket message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.Ticket & arrow.flight.protocol.Ticket.$Shape} Ticket
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.Ticket & arrow.flight.protocol.Ticket.$Shape;

                /**
                 * Decodes a Ticket message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.Ticket & arrow.flight.protocol.Ticket.$Shape} Ticket
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.Ticket & arrow.flight.protocol.Ticket.$Shape;

                /**
                 * Verifies a Ticket message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Ticket message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Ticket
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.Ticket;

                /**
                 * Creates a plain object from a Ticket message. Also converts values to other types if specified.
                 * @param message Ticket
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.Ticket, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Ticket to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for Ticket
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Ticket {

                /** Properties of a Ticket. */
                interface $Properties {

                    /** Ticket ticket */
                    ticket?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a Ticket. */
                type $Shape = arrow.flight.protocol.Ticket.$Properties;
            }

            /**
             * Properties of a Location.
             * @deprecated Use arrow.flight.protocol.Location.$Properties instead.
             */
            interface ILocation extends arrow.flight.protocol.Location.$Properties {
            }

            /** Represents a Location. */
            class Location {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.Location.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Location uri. */
                uri: string;

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                static create(properties: arrow.flight.protocol.Location.$Shape): arrow.flight.protocol.Location & arrow.flight.protocol.Location.$Shape;
                static create(properties?: arrow.flight.protocol.Location.$Properties): arrow.flight.protocol.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link arrow.flight.protocol.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.Location.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link arrow.flight.protocol.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.Location.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.Location & arrow.flight.protocol.Location.$Shape} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.Location & arrow.flight.protocol.Location.$Shape;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.Location & arrow.flight.protocol.Location.$Shape} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.Location & arrow.flight.protocol.Location.$Shape;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for Location
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Location {

                /** Properties of a Location. */
                interface $Properties {

                    /** Location uri */
                    uri?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a Location. */
                type $Shape = arrow.flight.protocol.Location.$Properties;
            }

            /**
             * Properties of a FlightEndpoint.
             * @deprecated Use arrow.flight.protocol.FlightEndpoint.$Properties instead.
             */
            interface IFlightEndpoint extends arrow.flight.protocol.FlightEndpoint.$Properties {
            }

            /** Represents a FlightEndpoint. */
            class FlightEndpoint {

                /**
                 * Constructs a new FlightEndpoint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.FlightEndpoint.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** FlightEndpoint ticket. */
                ticket?: (arrow.flight.protocol.Ticket.$Properties|null);

                /** FlightEndpoint location. */
                location: arrow.flight.protocol.Location.$Properties[];

                /** FlightEndpoint expirationTime. */
                expirationTime?: (google.protobuf.Timestamp.$Properties|null);

                /** FlightEndpoint appMetadata. */
                appMetadata: Uint8Array;

                /**
                 * Creates a new FlightEndpoint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FlightEndpoint instance
                 */
                static create(properties: arrow.flight.protocol.FlightEndpoint.$Shape): arrow.flight.protocol.FlightEndpoint & arrow.flight.protocol.FlightEndpoint.$Shape;
                static create(properties?: arrow.flight.protocol.FlightEndpoint.$Properties): arrow.flight.protocol.FlightEndpoint;

                /**
                 * Encodes the specified FlightEndpoint message. Does not implicitly {@link arrow.flight.protocol.FlightEndpoint.verify|verify} messages.
                 * @param message FlightEndpoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.FlightEndpoint.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FlightEndpoint message, length delimited. Does not implicitly {@link arrow.flight.protocol.FlightEndpoint.verify|verify} messages.
                 * @param message FlightEndpoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.FlightEndpoint.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FlightEndpoint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.FlightEndpoint & arrow.flight.protocol.FlightEndpoint.$Shape} FlightEndpoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.FlightEndpoint & arrow.flight.protocol.FlightEndpoint.$Shape;

                /**
                 * Decodes a FlightEndpoint message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.FlightEndpoint & arrow.flight.protocol.FlightEndpoint.$Shape} FlightEndpoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.FlightEndpoint & arrow.flight.protocol.FlightEndpoint.$Shape;

                /**
                 * Verifies a FlightEndpoint message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FlightEndpoint message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FlightEndpoint
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.FlightEndpoint;

                /**
                 * Creates a plain object from a FlightEndpoint message. Also converts values to other types if specified.
                 * @param message FlightEndpoint
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.FlightEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FlightEndpoint to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for FlightEndpoint
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace FlightEndpoint {

                /** Properties of a FlightEndpoint. */
                interface $Properties {

                    /** FlightEndpoint ticket */
                    ticket?: (arrow.flight.protocol.Ticket.$Properties|null);

                    /** FlightEndpoint location */
                    location?: (arrow.flight.protocol.Location.$Properties[]|null);

                    /** FlightEndpoint expirationTime */
                    expirationTime?: (google.protobuf.Timestamp.$Properties|null);

                    /** FlightEndpoint appMetadata */
                    appMetadata?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a FlightEndpoint. */
                type $Shape = arrow.flight.protocol.FlightEndpoint.$Properties;
            }

            /**
             * Properties of a RenewFlightEndpointRequest.
             * @deprecated Use arrow.flight.protocol.RenewFlightEndpointRequest.$Properties instead.
             */
            interface IRenewFlightEndpointRequest extends arrow.flight.protocol.RenewFlightEndpointRequest.$Properties {
            }

            /** Represents a RenewFlightEndpointRequest. */
            class RenewFlightEndpointRequest {

                /**
                 * Constructs a new RenewFlightEndpointRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.RenewFlightEndpointRequest.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** RenewFlightEndpointRequest endpoint. */
                endpoint?: (arrow.flight.protocol.FlightEndpoint.$Properties|null);

                /**
                 * Creates a new RenewFlightEndpointRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RenewFlightEndpointRequest instance
                 */
                static create(properties: arrow.flight.protocol.RenewFlightEndpointRequest.$Shape): arrow.flight.protocol.RenewFlightEndpointRequest & arrow.flight.protocol.RenewFlightEndpointRequest.$Shape;
                static create(properties?: arrow.flight.protocol.RenewFlightEndpointRequest.$Properties): arrow.flight.protocol.RenewFlightEndpointRequest;

                /**
                 * Encodes the specified RenewFlightEndpointRequest message. Does not implicitly {@link arrow.flight.protocol.RenewFlightEndpointRequest.verify|verify} messages.
                 * @param message RenewFlightEndpointRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.RenewFlightEndpointRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RenewFlightEndpointRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.RenewFlightEndpointRequest.verify|verify} messages.
                 * @param message RenewFlightEndpointRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.RenewFlightEndpointRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RenewFlightEndpointRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.RenewFlightEndpointRequest & arrow.flight.protocol.RenewFlightEndpointRequest.$Shape} RenewFlightEndpointRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.RenewFlightEndpointRequest & arrow.flight.protocol.RenewFlightEndpointRequest.$Shape;

                /**
                 * Decodes a RenewFlightEndpointRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.RenewFlightEndpointRequest & arrow.flight.protocol.RenewFlightEndpointRequest.$Shape} RenewFlightEndpointRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.RenewFlightEndpointRequest & arrow.flight.protocol.RenewFlightEndpointRequest.$Shape;

                /**
                 * Verifies a RenewFlightEndpointRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RenewFlightEndpointRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RenewFlightEndpointRequest
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.RenewFlightEndpointRequest;

                /**
                 * Creates a plain object from a RenewFlightEndpointRequest message. Also converts values to other types if specified.
                 * @param message RenewFlightEndpointRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.RenewFlightEndpointRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RenewFlightEndpointRequest to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for RenewFlightEndpointRequest
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace RenewFlightEndpointRequest {

                /** Properties of a RenewFlightEndpointRequest. */
                interface $Properties {

                    /** RenewFlightEndpointRequest endpoint */
                    endpoint?: (arrow.flight.protocol.FlightEndpoint.$Properties|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a RenewFlightEndpointRequest. */
                type $Shape = arrow.flight.protocol.RenewFlightEndpointRequest.$Properties;
            }

            /**
             * Properties of a FlightData.
             * @deprecated Use arrow.flight.protocol.FlightData.$Properties instead.
             */
            interface IFlightData extends arrow.flight.protocol.FlightData.$Properties {
            }

            /** Represents a FlightData. */
            class FlightData {

                /**
                 * Constructs a new FlightData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.FlightData.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** FlightData flightDescriptor. */
                flightDescriptor?: (arrow.flight.protocol.FlightDescriptor.$Properties|null);

                /** FlightData dataHeader. */
                dataHeader: Uint8Array;

                /** FlightData appMetadata. */
                appMetadata: Uint8Array;

                /** FlightData dataBody. */
                dataBody: Uint8Array;

                /**
                 * Creates a new FlightData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FlightData instance
                 */
                static create(properties: arrow.flight.protocol.FlightData.$Shape): arrow.flight.protocol.FlightData & arrow.flight.protocol.FlightData.$Shape;
                static create(properties?: arrow.flight.protocol.FlightData.$Properties): arrow.flight.protocol.FlightData;

                /**
                 * Encodes the specified FlightData message. Does not implicitly {@link arrow.flight.protocol.FlightData.verify|verify} messages.
                 * @param message FlightData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.FlightData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FlightData message, length delimited. Does not implicitly {@link arrow.flight.protocol.FlightData.verify|verify} messages.
                 * @param message FlightData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.FlightData.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FlightData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.FlightData & arrow.flight.protocol.FlightData.$Shape} FlightData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.FlightData & arrow.flight.protocol.FlightData.$Shape;

                /**
                 * Decodes a FlightData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.FlightData & arrow.flight.protocol.FlightData.$Shape} FlightData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.FlightData & arrow.flight.protocol.FlightData.$Shape;

                /**
                 * Verifies a FlightData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FlightData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FlightData
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.FlightData;

                /**
                 * Creates a plain object from a FlightData message. Also converts values to other types if specified.
                 * @param message FlightData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.FlightData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FlightData to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for FlightData
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace FlightData {

                /** Properties of a FlightData. */
                interface $Properties {

                    /** FlightData flightDescriptor */
                    flightDescriptor?: (arrow.flight.protocol.FlightDescriptor.$Properties|null);

                    /** FlightData dataHeader */
                    dataHeader?: (Uint8Array|null);

                    /** FlightData appMetadata */
                    appMetadata?: (Uint8Array|null);

                    /** FlightData dataBody */
                    dataBody?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a FlightData. */
                type $Shape = arrow.flight.protocol.FlightData.$Properties;
            }

            /**
             * Properties of a PutResult.
             * @deprecated Use arrow.flight.protocol.PutResult.$Properties instead.
             */
            interface IPutResult extends arrow.flight.protocol.PutResult.$Properties {
            }

            /** The response message associated with the submission of a DoPut. */
            class PutResult {

                /**
                 * Constructs a new PutResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.PutResult.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** PutResult appMetadata. */
                appMetadata: Uint8Array;

                /**
                 * Creates a new PutResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PutResult instance
                 */
                static create(properties: arrow.flight.protocol.PutResult.$Shape): arrow.flight.protocol.PutResult & arrow.flight.protocol.PutResult.$Shape;
                static create(properties?: arrow.flight.protocol.PutResult.$Properties): arrow.flight.protocol.PutResult;

                /**
                 * Encodes the specified PutResult message. Does not implicitly {@link arrow.flight.protocol.PutResult.verify|verify} messages.
                 * @param message PutResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.PutResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PutResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.PutResult.verify|verify} messages.
                 * @param message PutResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.PutResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PutResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.PutResult & arrow.flight.protocol.PutResult.$Shape} PutResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.PutResult & arrow.flight.protocol.PutResult.$Shape;

                /**
                 * Decodes a PutResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.PutResult & arrow.flight.protocol.PutResult.$Shape} PutResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.PutResult & arrow.flight.protocol.PutResult.$Shape;

                /**
                 * Verifies a PutResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PutResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PutResult
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.PutResult;

                /**
                 * Creates a plain object from a PutResult message. Also converts values to other types if specified.
                 * @param message PutResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.PutResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PutResult to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for PutResult
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace PutResult {

                /** Properties of a PutResult. */
                interface $Properties {

                    /** PutResult appMetadata */
                    appMetadata?: (Uint8Array|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a PutResult. */
                type $Shape = arrow.flight.protocol.PutResult.$Properties;
            }

            /**
             * Properties of a SessionOptionValue.
             * @deprecated Use arrow.flight.protocol.SessionOptionValue.$Properties instead.
             */
            interface ISessionOptionValue extends arrow.flight.protocol.SessionOptionValue.$Properties {
            }

            /** Represents a SessionOptionValue. */
            class SessionOptionValue {

                /**
                 * Constructs a new SessionOptionValue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.SessionOptionValue.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** SessionOptionValue stringValue. */
                stringValue?: (string|null);

                /** SessionOptionValue boolValue. */
                boolValue?: (boolean|null);

                /** SessionOptionValue int64Value. */
                int64Value?: (number|Long|null);

                /** SessionOptionValue doubleValue. */
                doubleValue?: (number|null);

                /** SessionOptionValue stringListValue. */
                stringListValue?: (arrow.flight.protocol.SessionOptionValue.StringListValue.$Properties|null);

                /** SessionOptionValue optionValue. */
                optionValue?: ("stringValue"|"boolValue"|"int64Value"|"doubleValue"|"stringListValue");

                /**
                 * Creates a new SessionOptionValue instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SessionOptionValue instance
                 */
                static create(properties: arrow.flight.protocol.SessionOptionValue.$Shape): arrow.flight.protocol.SessionOptionValue & arrow.flight.protocol.SessionOptionValue.$Shape;
                static create(properties?: arrow.flight.protocol.SessionOptionValue.$Properties): arrow.flight.protocol.SessionOptionValue;

                /**
                 * Encodes the specified SessionOptionValue message. Does not implicitly {@link arrow.flight.protocol.SessionOptionValue.verify|verify} messages.
                 * @param message SessionOptionValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.SessionOptionValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SessionOptionValue message, length delimited. Does not implicitly {@link arrow.flight.protocol.SessionOptionValue.verify|verify} messages.
                 * @param message SessionOptionValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.SessionOptionValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SessionOptionValue message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.SessionOptionValue & arrow.flight.protocol.SessionOptionValue.$Shape} SessionOptionValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.SessionOptionValue & arrow.flight.protocol.SessionOptionValue.$Shape;

                /**
                 * Decodes a SessionOptionValue message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.SessionOptionValue & arrow.flight.protocol.SessionOptionValue.$Shape} SessionOptionValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.SessionOptionValue & arrow.flight.protocol.SessionOptionValue.$Shape;

                /**
                 * Verifies a SessionOptionValue message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SessionOptionValue message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SessionOptionValue
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.SessionOptionValue;

                /**
                 * Creates a plain object from a SessionOptionValue message. Also converts values to other types if specified.
                 * @param message SessionOptionValue
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.SessionOptionValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SessionOptionValue to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for SessionOptionValue
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace SessionOptionValue {

                /** Properties of a SessionOptionValue. */
                interface $Properties {

                    /** SessionOptionValue stringValue */
                    stringValue?: (string|null);

                    /** SessionOptionValue boolValue */
                    boolValue?: (boolean|null);

                    /** SessionOptionValue int64Value */
                    int64Value?: (number|Long|null);

                    /** SessionOptionValue doubleValue */
                    doubleValue?: (number|null);

                    /** SessionOptionValue stringListValue */
                    stringListValue?: (arrow.flight.protocol.SessionOptionValue.StringListValue.$Properties|null);

                    /** SessionOptionValue optionValue */
                    optionValue?: ("stringValue"|"boolValue"|"int64Value"|"doubleValue"|"stringListValue");

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Narrowed shape of a SessionOptionValue. */
                type $Shape = {
                  stringValue?: string|null;
                  boolValue?: boolean|null;
                  int64Value?: number|Long|null;
                  doubleValue?: number|null;
                  stringListValue?: arrow.flight.protocol.SessionOptionValue.StringListValue.$Shape|null;
                  $unknowns?: Uint8Array[];
                } & (
                  ({ optionValue?: undefined; stringValue?: null; boolValue?: null; int64Value?: null; doubleValue?: null; stringListValue?: null }|{ optionValue?: "stringValue"; stringValue: string; boolValue?: null; int64Value?: null; doubleValue?: null; stringListValue?: null }|{ optionValue?: "boolValue"; stringValue?: null; boolValue: boolean; int64Value?: null; doubleValue?: null; stringListValue?: null }|{ optionValue?: "int64Value"; stringValue?: null; boolValue?: null; int64Value: number|Long; doubleValue?: null; stringListValue?: null }|{ optionValue?: "doubleValue"; stringValue?: null; boolValue?: null; int64Value?: null; doubleValue: number; stringListValue?: null }|{ optionValue?: "stringListValue"; stringValue?: null; boolValue?: null; int64Value?: null; doubleValue?: null; stringListValue: arrow.flight.protocol.SessionOptionValue.StringListValue.$Shape })
                );

                /**
                 * Properties of a StringListValue.
                 * @deprecated Use arrow.flight.protocol.SessionOptionValue.StringListValue.$Properties instead.
                 */
                interface IStringListValue extends arrow.flight.protocol.SessionOptionValue.StringListValue.$Properties {
                }

                /** Represents a StringListValue. */
                class StringListValue {

                    /**
                     * Constructs a new StringListValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.SessionOptionValue.StringListValue.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** StringListValue values. */
                    values: string[];

                    /**
                     * Creates a new StringListValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StringListValue instance
                     */
                    static create(properties: arrow.flight.protocol.SessionOptionValue.StringListValue.$Shape): arrow.flight.protocol.SessionOptionValue.StringListValue & arrow.flight.protocol.SessionOptionValue.StringListValue.$Shape;
                    static create(properties?: arrow.flight.protocol.SessionOptionValue.StringListValue.$Properties): arrow.flight.protocol.SessionOptionValue.StringListValue;

                    /**
                     * Encodes the specified StringListValue message. Does not implicitly {@link arrow.flight.protocol.SessionOptionValue.StringListValue.verify|verify} messages.
                     * @param message StringListValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.SessionOptionValue.StringListValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StringListValue message, length delimited. Does not implicitly {@link arrow.flight.protocol.SessionOptionValue.StringListValue.verify|verify} messages.
                     * @param message StringListValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.SessionOptionValue.StringListValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StringListValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.SessionOptionValue.StringListValue & arrow.flight.protocol.SessionOptionValue.StringListValue.$Shape} StringListValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.SessionOptionValue.StringListValue & arrow.flight.protocol.SessionOptionValue.StringListValue.$Shape;

                    /**
                     * Decodes a StringListValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.SessionOptionValue.StringListValue & arrow.flight.protocol.SessionOptionValue.StringListValue.$Shape} StringListValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.SessionOptionValue.StringListValue & arrow.flight.protocol.SessionOptionValue.StringListValue.$Shape;

                    /**
                     * Verifies a StringListValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StringListValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StringListValue
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.SessionOptionValue.StringListValue;

                    /**
                     * Creates a plain object from a StringListValue message. Also converts values to other types if specified.
                     * @param message StringListValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.SessionOptionValue.StringListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StringListValue to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for StringListValue
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace StringListValue {

                    /** Properties of a StringListValue. */
                    interface $Properties {

                        /** StringListValue values */
                        values?: (string[]|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a StringListValue. */
                    type $Shape = arrow.flight.protocol.SessionOptionValue.StringListValue.$Properties;
                }
            }

            /**
             * Properties of a SetSessionOptionsRequest.
             * @deprecated Use arrow.flight.protocol.SetSessionOptionsRequest.$Properties instead.
             */
            interface ISetSessionOptionsRequest extends arrow.flight.protocol.SetSessionOptionsRequest.$Properties {
            }

            /** Represents a SetSessionOptionsRequest. */
            class SetSessionOptionsRequest {

                /**
                 * Constructs a new SetSessionOptionsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.SetSessionOptionsRequest.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** SetSessionOptionsRequest sessionOptions. */
                sessionOptions: { [k: string]: arrow.flight.protocol.SessionOptionValue.$Properties };

                /**
                 * Creates a new SetSessionOptionsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetSessionOptionsRequest instance
                 */
                static create(properties: arrow.flight.protocol.SetSessionOptionsRequest.$Shape): arrow.flight.protocol.SetSessionOptionsRequest & arrow.flight.protocol.SetSessionOptionsRequest.$Shape;
                static create(properties?: arrow.flight.protocol.SetSessionOptionsRequest.$Properties): arrow.flight.protocol.SetSessionOptionsRequest;

                /**
                 * Encodes the specified SetSessionOptionsRequest message. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsRequest.verify|verify} messages.
                 * @param message SetSessionOptionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.SetSessionOptionsRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetSessionOptionsRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsRequest.verify|verify} messages.
                 * @param message SetSessionOptionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.SetSessionOptionsRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetSessionOptionsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.SetSessionOptionsRequest & arrow.flight.protocol.SetSessionOptionsRequest.$Shape} SetSessionOptionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.SetSessionOptionsRequest & arrow.flight.protocol.SetSessionOptionsRequest.$Shape;

                /**
                 * Decodes a SetSessionOptionsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.SetSessionOptionsRequest & arrow.flight.protocol.SetSessionOptionsRequest.$Shape} SetSessionOptionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.SetSessionOptionsRequest & arrow.flight.protocol.SetSessionOptionsRequest.$Shape;

                /**
                 * Verifies a SetSessionOptionsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetSessionOptionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetSessionOptionsRequest
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.SetSessionOptionsRequest;

                /**
                 * Creates a plain object from a SetSessionOptionsRequest message. Also converts values to other types if specified.
                 * @param message SetSessionOptionsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.SetSessionOptionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetSessionOptionsRequest to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for SetSessionOptionsRequest
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace SetSessionOptionsRequest {

                /** Properties of a SetSessionOptionsRequest. */
                interface $Properties {

                    /** SetSessionOptionsRequest sessionOptions */
                    sessionOptions?: ({ [k: string]: arrow.flight.protocol.SessionOptionValue.$Properties }|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a SetSessionOptionsRequest. */
                type $Shape = {
                  sessionOptions?: { [k: string]: arrow.flight.protocol.SessionOptionValue.$Shape }|null;
                  $unknowns?: Uint8Array[];
                };
            }

            /**
             * Properties of a SetSessionOptionsResult.
             * @deprecated Use arrow.flight.protocol.SetSessionOptionsResult.$Properties instead.
             */
            interface ISetSessionOptionsResult extends arrow.flight.protocol.SetSessionOptionsResult.$Properties {
            }

            /** Represents a SetSessionOptionsResult. */
            class SetSessionOptionsResult {

                /**
                 * Constructs a new SetSessionOptionsResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.SetSessionOptionsResult.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** SetSessionOptionsResult errors. */
                errors: { [k: string]: arrow.flight.protocol.SetSessionOptionsResult.Error.$Properties };

                /**
                 * Creates a new SetSessionOptionsResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetSessionOptionsResult instance
                 */
                static create(properties: arrow.flight.protocol.SetSessionOptionsResult.$Shape): arrow.flight.protocol.SetSessionOptionsResult & arrow.flight.protocol.SetSessionOptionsResult.$Shape;
                static create(properties?: arrow.flight.protocol.SetSessionOptionsResult.$Properties): arrow.flight.protocol.SetSessionOptionsResult;

                /**
                 * Encodes the specified SetSessionOptionsResult message. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsResult.verify|verify} messages.
                 * @param message SetSessionOptionsResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.SetSessionOptionsResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetSessionOptionsResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsResult.verify|verify} messages.
                 * @param message SetSessionOptionsResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.SetSessionOptionsResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetSessionOptionsResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.SetSessionOptionsResult & arrow.flight.protocol.SetSessionOptionsResult.$Shape} SetSessionOptionsResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.SetSessionOptionsResult & arrow.flight.protocol.SetSessionOptionsResult.$Shape;

                /**
                 * Decodes a SetSessionOptionsResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.SetSessionOptionsResult & arrow.flight.protocol.SetSessionOptionsResult.$Shape} SetSessionOptionsResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.SetSessionOptionsResult & arrow.flight.protocol.SetSessionOptionsResult.$Shape;

                /**
                 * Verifies a SetSessionOptionsResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetSessionOptionsResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetSessionOptionsResult
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.SetSessionOptionsResult;

                /**
                 * Creates a plain object from a SetSessionOptionsResult message. Also converts values to other types if specified.
                 * @param message SetSessionOptionsResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.SetSessionOptionsResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetSessionOptionsResult to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for SetSessionOptionsResult
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace SetSessionOptionsResult {

                /** Properties of a SetSessionOptionsResult. */
                interface $Properties {

                    /** SetSessionOptionsResult errors */
                    errors?: ({ [k: string]: arrow.flight.protocol.SetSessionOptionsResult.Error.$Properties }|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a SetSessionOptionsResult. */
                type $Shape = arrow.flight.protocol.SetSessionOptionsResult.$Properties;

                /** ErrorValue enum. */
                enum ErrorValue {

                    /** UNSPECIFIED value */
                    UNSPECIFIED = 0,

                    /** INVALID_NAME value */
                    INVALID_NAME = 1,

                    /** INVALID_VALUE value */
                    INVALID_VALUE = 2,

                    /** ERROR value */
                    ERROR = 3
                }

                /**
                 * Properties of an Error.
                 * @deprecated Use arrow.flight.protocol.SetSessionOptionsResult.Error.$Properties instead.
                 */
                interface IError extends arrow.flight.protocol.SetSessionOptionsResult.Error.$Properties {
                }

                /** Represents an Error. */
                class Error {

                    /**
                     * Constructs a new Error.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.SetSessionOptionsResult.Error.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** Error value. */
                    value: arrow.flight.protocol.SetSessionOptionsResult.ErrorValue;

                    /**
                     * Creates a new Error instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Error instance
                     */
                    static create(properties: arrow.flight.protocol.SetSessionOptionsResult.Error.$Shape): arrow.flight.protocol.SetSessionOptionsResult.Error & arrow.flight.protocol.SetSessionOptionsResult.Error.$Shape;
                    static create(properties?: arrow.flight.protocol.SetSessionOptionsResult.Error.$Properties): arrow.flight.protocol.SetSessionOptionsResult.Error;

                    /**
                     * Encodes the specified Error message. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsResult.Error.verify|verify} messages.
                     * @param message Error message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.SetSessionOptionsResult.Error.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Error message, length delimited. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsResult.Error.verify|verify} messages.
                     * @param message Error message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.SetSessionOptionsResult.Error.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Error message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.SetSessionOptionsResult.Error & arrow.flight.protocol.SetSessionOptionsResult.Error.$Shape} Error
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.SetSessionOptionsResult.Error & arrow.flight.protocol.SetSessionOptionsResult.Error.$Shape;

                    /**
                     * Decodes an Error message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.SetSessionOptionsResult.Error & arrow.flight.protocol.SetSessionOptionsResult.Error.$Shape} Error
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.SetSessionOptionsResult.Error & arrow.flight.protocol.SetSessionOptionsResult.Error.$Shape;

                    /**
                     * Verifies an Error message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Error message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Error
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.SetSessionOptionsResult.Error;

                    /**
                     * Creates a plain object from an Error message. Also converts values to other types if specified.
                     * @param message Error
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.SetSessionOptionsResult.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Error to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for Error
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace Error {

                    /** Properties of an Error. */
                    interface $Properties {

                        /** Error value */
                        value?: (arrow.flight.protocol.SetSessionOptionsResult.ErrorValue|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an Error. */
                    type $Shape = arrow.flight.protocol.SetSessionOptionsResult.Error.$Properties;
                }
            }

            /**
             * Properties of a GetSessionOptionsRequest.
             * @deprecated Use arrow.flight.protocol.GetSessionOptionsRequest.$Properties instead.
             */
            interface IGetSessionOptionsRequest extends arrow.flight.protocol.GetSessionOptionsRequest.$Properties {
            }

            /** Represents a GetSessionOptionsRequest. */
            class GetSessionOptionsRequest {

                /**
                 * Constructs a new GetSessionOptionsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.GetSessionOptionsRequest.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /**
                 * Creates a new GetSessionOptionsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetSessionOptionsRequest instance
                 */
                static create(properties: arrow.flight.protocol.GetSessionOptionsRequest.$Shape): arrow.flight.protocol.GetSessionOptionsRequest & arrow.flight.protocol.GetSessionOptionsRequest.$Shape;
                static create(properties?: arrow.flight.protocol.GetSessionOptionsRequest.$Properties): arrow.flight.protocol.GetSessionOptionsRequest;

                /**
                 * Encodes the specified GetSessionOptionsRequest message. Does not implicitly {@link arrow.flight.protocol.GetSessionOptionsRequest.verify|verify} messages.
                 * @param message GetSessionOptionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.GetSessionOptionsRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetSessionOptionsRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.GetSessionOptionsRequest.verify|verify} messages.
                 * @param message GetSessionOptionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.GetSessionOptionsRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetSessionOptionsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.GetSessionOptionsRequest & arrow.flight.protocol.GetSessionOptionsRequest.$Shape} GetSessionOptionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.GetSessionOptionsRequest & arrow.flight.protocol.GetSessionOptionsRequest.$Shape;

                /**
                 * Decodes a GetSessionOptionsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.GetSessionOptionsRequest & arrow.flight.protocol.GetSessionOptionsRequest.$Shape} GetSessionOptionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.GetSessionOptionsRequest & arrow.flight.protocol.GetSessionOptionsRequest.$Shape;

                /**
                 * Verifies a GetSessionOptionsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetSessionOptionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetSessionOptionsRequest
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.GetSessionOptionsRequest;

                /**
                 * Creates a plain object from a GetSessionOptionsRequest message. Also converts values to other types if specified.
                 * @param message GetSessionOptionsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.GetSessionOptionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetSessionOptionsRequest to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for GetSessionOptionsRequest
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace GetSessionOptionsRequest {

                /** Properties of a GetSessionOptionsRequest. */
                interface $Properties {

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a GetSessionOptionsRequest. */
                type $Shape = arrow.flight.protocol.GetSessionOptionsRequest.$Properties;
            }

            /**
             * Properties of a GetSessionOptionsResult.
             * @deprecated Use arrow.flight.protocol.GetSessionOptionsResult.$Properties instead.
             */
            interface IGetSessionOptionsResult extends arrow.flight.protocol.GetSessionOptionsResult.$Properties {
            }

            /** Represents a GetSessionOptionsResult. */
            class GetSessionOptionsResult {

                /**
                 * Constructs a new GetSessionOptionsResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.GetSessionOptionsResult.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** GetSessionOptionsResult sessionOptions. */
                sessionOptions: { [k: string]: arrow.flight.protocol.SessionOptionValue.$Properties };

                /**
                 * Creates a new GetSessionOptionsResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetSessionOptionsResult instance
                 */
                static create(properties: arrow.flight.protocol.GetSessionOptionsResult.$Shape): arrow.flight.protocol.GetSessionOptionsResult & arrow.flight.protocol.GetSessionOptionsResult.$Shape;
                static create(properties?: arrow.flight.protocol.GetSessionOptionsResult.$Properties): arrow.flight.protocol.GetSessionOptionsResult;

                /**
                 * Encodes the specified GetSessionOptionsResult message. Does not implicitly {@link arrow.flight.protocol.GetSessionOptionsResult.verify|verify} messages.
                 * @param message GetSessionOptionsResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.GetSessionOptionsResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetSessionOptionsResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.GetSessionOptionsResult.verify|verify} messages.
                 * @param message GetSessionOptionsResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.GetSessionOptionsResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetSessionOptionsResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.GetSessionOptionsResult & arrow.flight.protocol.GetSessionOptionsResult.$Shape} GetSessionOptionsResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.GetSessionOptionsResult & arrow.flight.protocol.GetSessionOptionsResult.$Shape;

                /**
                 * Decodes a GetSessionOptionsResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.GetSessionOptionsResult & arrow.flight.protocol.GetSessionOptionsResult.$Shape} GetSessionOptionsResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.GetSessionOptionsResult & arrow.flight.protocol.GetSessionOptionsResult.$Shape;

                /**
                 * Verifies a GetSessionOptionsResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetSessionOptionsResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetSessionOptionsResult
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.GetSessionOptionsResult;

                /**
                 * Creates a plain object from a GetSessionOptionsResult message. Also converts values to other types if specified.
                 * @param message GetSessionOptionsResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.GetSessionOptionsResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetSessionOptionsResult to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for GetSessionOptionsResult
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace GetSessionOptionsResult {

                /** Properties of a GetSessionOptionsResult. */
                interface $Properties {

                    /** GetSessionOptionsResult sessionOptions */
                    sessionOptions?: ({ [k: string]: arrow.flight.protocol.SessionOptionValue.$Properties }|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a GetSessionOptionsResult. */
                type $Shape = {
                  sessionOptions?: { [k: string]: arrow.flight.protocol.SessionOptionValue.$Shape }|null;
                  $unknowns?: Uint8Array[];
                };
            }

            /**
             * Properties of a CloseSessionRequest.
             * @deprecated Use arrow.flight.protocol.CloseSessionRequest.$Properties instead.
             */
            interface ICloseSessionRequest extends arrow.flight.protocol.CloseSessionRequest.$Properties {
            }

            /** Represents a CloseSessionRequest. */
            class CloseSessionRequest {

                /**
                 * Constructs a new CloseSessionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.CloseSessionRequest.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /**
                 * Creates a new CloseSessionRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CloseSessionRequest instance
                 */
                static create(properties: arrow.flight.protocol.CloseSessionRequest.$Shape): arrow.flight.protocol.CloseSessionRequest & arrow.flight.protocol.CloseSessionRequest.$Shape;
                static create(properties?: arrow.flight.protocol.CloseSessionRequest.$Properties): arrow.flight.protocol.CloseSessionRequest;

                /**
                 * Encodes the specified CloseSessionRequest message. Does not implicitly {@link arrow.flight.protocol.CloseSessionRequest.verify|verify} messages.
                 * @param message CloseSessionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.CloseSessionRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CloseSessionRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.CloseSessionRequest.verify|verify} messages.
                 * @param message CloseSessionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.CloseSessionRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CloseSessionRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.CloseSessionRequest & arrow.flight.protocol.CloseSessionRequest.$Shape} CloseSessionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.CloseSessionRequest & arrow.flight.protocol.CloseSessionRequest.$Shape;

                /**
                 * Decodes a CloseSessionRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.CloseSessionRequest & arrow.flight.protocol.CloseSessionRequest.$Shape} CloseSessionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.CloseSessionRequest & arrow.flight.protocol.CloseSessionRequest.$Shape;

                /**
                 * Verifies a CloseSessionRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CloseSessionRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CloseSessionRequest
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.CloseSessionRequest;

                /**
                 * Creates a plain object from a CloseSessionRequest message. Also converts values to other types if specified.
                 * @param message CloseSessionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.CloseSessionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CloseSessionRequest to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for CloseSessionRequest
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace CloseSessionRequest {

                /** Properties of a CloseSessionRequest. */
                interface $Properties {

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a CloseSessionRequest. */
                type $Shape = arrow.flight.protocol.CloseSessionRequest.$Properties;
            }

            /**
             * Properties of a CloseSessionResult.
             * @deprecated Use arrow.flight.protocol.CloseSessionResult.$Properties instead.
             */
            interface ICloseSessionResult extends arrow.flight.protocol.CloseSessionResult.$Properties {
            }

            /** Represents a CloseSessionResult. */
            class CloseSessionResult {

                /**
                 * Constructs a new CloseSessionResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.CloseSessionResult.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** CloseSessionResult status. */
                status: arrow.flight.protocol.CloseSessionResult.Status;

                /**
                 * Creates a new CloseSessionResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CloseSessionResult instance
                 */
                static create(properties: arrow.flight.protocol.CloseSessionResult.$Shape): arrow.flight.protocol.CloseSessionResult & arrow.flight.protocol.CloseSessionResult.$Shape;
                static create(properties?: arrow.flight.protocol.CloseSessionResult.$Properties): arrow.flight.protocol.CloseSessionResult;

                /**
                 * Encodes the specified CloseSessionResult message. Does not implicitly {@link arrow.flight.protocol.CloseSessionResult.verify|verify} messages.
                 * @param message CloseSessionResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: arrow.flight.protocol.CloseSessionResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CloseSessionResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.CloseSessionResult.verify|verify} messages.
                 * @param message CloseSessionResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: arrow.flight.protocol.CloseSessionResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CloseSessionResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.CloseSessionResult & arrow.flight.protocol.CloseSessionResult.$Shape} CloseSessionResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.CloseSessionResult & arrow.flight.protocol.CloseSessionResult.$Shape;

                /**
                 * Decodes a CloseSessionResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.CloseSessionResult & arrow.flight.protocol.CloseSessionResult.$Shape} CloseSessionResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.CloseSessionResult & arrow.flight.protocol.CloseSessionResult.$Shape;

                /**
                 * Verifies a CloseSessionResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CloseSessionResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CloseSessionResult
                 */
                static fromObject(object: { [k: string]: any }): arrow.flight.protocol.CloseSessionResult;

                /**
                 * Creates a plain object from a CloseSessionResult message. Also converts values to other types if specified.
                 * @param message CloseSessionResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: arrow.flight.protocol.CloseSessionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CloseSessionResult to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for CloseSessionResult
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace CloseSessionResult {

                /** Properties of a CloseSessionResult. */
                interface $Properties {

                    /** CloseSessionResult status */
                    status?: (arrow.flight.protocol.CloseSessionResult.Status|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a CloseSessionResult. */
                type $Shape = arrow.flight.protocol.CloseSessionResult.$Properties;

                /** Status enum. */
                enum Status {

                    /** UNSPECIFIED value */
                    UNSPECIFIED = 0,

                    /** CLOSED value */
                    CLOSED = 1,

                    /** CLOSING value */
                    CLOSING = 2,

                    /** NOT_CLOSEABLE value */
                    NOT_CLOSEABLE = 3
                }
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /**
         * Properties of a Timestamp.
         * @deprecated Use google.protobuf.Timestamp.$Properties instead.
         */
        interface ITimestamp extends google.protobuf.Timestamp.$Properties {
        }

        /** Represents a Timestamp. */
        class Timestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.Timestamp.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Timestamp seconds. */
            seconds: (number|Long);

            /** Timestamp nanos. */
            nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            static create(properties: google.protobuf.Timestamp.$Shape): google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape;
            static create(properties?: google.protobuf.Timestamp.$Properties): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.Timestamp.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.Timestamp.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Timestamp
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Timestamp {

            /** Properties of a Timestamp. */
            interface $Properties {

                /** Timestamp seconds */
                seconds?: (number|Long|null);

                /** Timestamp nanos */
                nanos?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Timestamp. */
            type $Shape = google.protobuf.Timestamp.$Properties;
        }
    }
}
