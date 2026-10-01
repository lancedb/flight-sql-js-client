import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace arrow. */
export namespace arrow {

    /** Namespace flight. */
    namespace flight {

        /** Namespace protocol. */
        namespace protocol {

            /** Namespace sql. */
            namespace sql {

                /**
                 * Properties of a CommandGetSqlInfo.
                 * @deprecated Use arrow.flight.protocol.sql.CommandGetSqlInfo.$Properties instead.
                 */
                interface ICommandGetSqlInfo extends arrow.flight.protocol.sql.CommandGetSqlInfo.$Properties {
                }

                /** Represents a CommandGetSqlInfo. */
                class CommandGetSqlInfo {

                    /**
                     * Constructs a new CommandGetSqlInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.CommandGetSqlInfo.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** CommandGetSqlInfo info. */
                    info: number[];

                    /**
                     * Creates a new CommandGetSqlInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandGetSqlInfo instance
                     */
                    static create(properties: arrow.flight.protocol.sql.CommandGetSqlInfo.$Shape): arrow.flight.protocol.sql.CommandGetSqlInfo & arrow.flight.protocol.sql.CommandGetSqlInfo.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.CommandGetSqlInfo.$Properties): arrow.flight.protocol.sql.CommandGetSqlInfo;

                    /**
                     * Encodes the specified CommandGetSqlInfo message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetSqlInfo.verify|verify} messages.
                     * @param message CommandGetSqlInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.CommandGetSqlInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandGetSqlInfo message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetSqlInfo.verify|verify} messages.
                     * @param message CommandGetSqlInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.CommandGetSqlInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandGetSqlInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandGetSqlInfo & arrow.flight.protocol.sql.CommandGetSqlInfo.$Shape} CommandGetSqlInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandGetSqlInfo & arrow.flight.protocol.sql.CommandGetSqlInfo.$Shape;

                    /**
                     * Decodes a CommandGetSqlInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandGetSqlInfo & arrow.flight.protocol.sql.CommandGetSqlInfo.$Shape} CommandGetSqlInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandGetSqlInfo & arrow.flight.protocol.sql.CommandGetSqlInfo.$Shape;

                    /**
                     * Verifies a CommandGetSqlInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandGetSqlInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandGetSqlInfo
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandGetSqlInfo;

                    /**
                     * Creates a plain object from a CommandGetSqlInfo message. Also converts values to other types if specified.
                     * @param message CommandGetSqlInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.CommandGetSqlInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandGetSqlInfo to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for CommandGetSqlInfo
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace CommandGetSqlInfo {

                    /** Properties of a CommandGetSqlInfo. */
                    interface $Properties {

                        /** CommandGetSqlInfo info */
                        info?: (number[]|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a CommandGetSqlInfo. */
                    type $Shape = arrow.flight.protocol.sql.CommandGetSqlInfo.$Properties;
                }

                /** SqlInfo enum. */
                enum SqlInfo {

                    /** FLIGHT_SQL_SERVER_NAME value */
                    FLIGHT_SQL_SERVER_NAME = 0,

                    /** FLIGHT_SQL_SERVER_VERSION value */
                    FLIGHT_SQL_SERVER_VERSION = 1,

                    /** FLIGHT_SQL_SERVER_ARROW_VERSION value */
                    FLIGHT_SQL_SERVER_ARROW_VERSION = 2,

                    /** FLIGHT_SQL_SERVER_READ_ONLY value */
                    FLIGHT_SQL_SERVER_READ_ONLY = 3,

                    /** FLIGHT_SQL_SERVER_SQL value */
                    FLIGHT_SQL_SERVER_SQL = 4,

                    /** FLIGHT_SQL_SERVER_SUBSTRAIT value */
                    FLIGHT_SQL_SERVER_SUBSTRAIT = 5,

                    /** FLIGHT_SQL_SERVER_SUBSTRAIT_MIN_VERSION value */
                    FLIGHT_SQL_SERVER_SUBSTRAIT_MIN_VERSION = 6,

                    /** FLIGHT_SQL_SERVER_SUBSTRAIT_MAX_VERSION value */
                    FLIGHT_SQL_SERVER_SUBSTRAIT_MAX_VERSION = 7,

                    /** FLIGHT_SQL_SERVER_TRANSACTION value */
                    FLIGHT_SQL_SERVER_TRANSACTION = 8,

                    /** FLIGHT_SQL_SERVER_CANCEL value */
                    FLIGHT_SQL_SERVER_CANCEL = 9,

                    /** FLIGHT_SQL_SERVER_BULK_INGESTION value */
                    FLIGHT_SQL_SERVER_BULK_INGESTION = 10,

                    /** FLIGHT_SQL_SERVER_INGEST_TRANSACTIONS_SUPPORTED value */
                    FLIGHT_SQL_SERVER_INGEST_TRANSACTIONS_SUPPORTED = 11,

                    /** FLIGHT_SQL_SERVER_STATEMENT_TIMEOUT value */
                    FLIGHT_SQL_SERVER_STATEMENT_TIMEOUT = 100,

                    /** FLIGHT_SQL_SERVER_TRANSACTION_TIMEOUT value */
                    FLIGHT_SQL_SERVER_TRANSACTION_TIMEOUT = 101,

                    /** SQL_DDL_CATALOG value */
                    SQL_DDL_CATALOG = 500,

                    /** SQL_DDL_SCHEMA value */
                    SQL_DDL_SCHEMA = 501,

                    /** SQL_DDL_TABLE value */
                    SQL_DDL_TABLE = 502,

                    /** SQL_IDENTIFIER_CASE value */
                    SQL_IDENTIFIER_CASE = 503,

                    /** SQL_IDENTIFIER_QUOTE_CHAR value */
                    SQL_IDENTIFIER_QUOTE_CHAR = 504,

                    /** SQL_QUOTED_IDENTIFIER_CASE value */
                    SQL_QUOTED_IDENTIFIER_CASE = 505,

                    /** SQL_ALL_TABLES_ARE_SELECTABLE value */
                    SQL_ALL_TABLES_ARE_SELECTABLE = 506,

                    /** SQL_NULL_ORDERING value */
                    SQL_NULL_ORDERING = 507,

                    /** SQL_KEYWORDS value */
                    SQL_KEYWORDS = 508,

                    /** SQL_NUMERIC_FUNCTIONS value */
                    SQL_NUMERIC_FUNCTIONS = 509,

                    /** SQL_STRING_FUNCTIONS value */
                    SQL_STRING_FUNCTIONS = 510,

                    /** SQL_SYSTEM_FUNCTIONS value */
                    SQL_SYSTEM_FUNCTIONS = 511,

                    /** SQL_DATETIME_FUNCTIONS value */
                    SQL_DATETIME_FUNCTIONS = 512,

                    /** SQL_SEARCH_STRING_ESCAPE value */
                    SQL_SEARCH_STRING_ESCAPE = 513,

                    /** SQL_EXTRA_NAME_CHARACTERS value */
                    SQL_EXTRA_NAME_CHARACTERS = 514,

                    /** SQL_SUPPORTS_COLUMN_ALIASING value */
                    SQL_SUPPORTS_COLUMN_ALIASING = 515,

                    /** SQL_NULL_PLUS_NULL_IS_NULL value */
                    SQL_NULL_PLUS_NULL_IS_NULL = 516,

                    /** SQL_SUPPORTS_CONVERT value */
                    SQL_SUPPORTS_CONVERT = 517,

                    /** SQL_SUPPORTS_TABLE_CORRELATION_NAMES value */
                    SQL_SUPPORTS_TABLE_CORRELATION_NAMES = 518,

                    /** SQL_SUPPORTS_DIFFERENT_TABLE_CORRELATION_NAMES value */
                    SQL_SUPPORTS_DIFFERENT_TABLE_CORRELATION_NAMES = 519,

                    /** SQL_SUPPORTS_EXPRESSIONS_IN_ORDER_BY value */
                    SQL_SUPPORTS_EXPRESSIONS_IN_ORDER_BY = 520,

                    /** SQL_SUPPORTS_ORDER_BY_UNRELATED value */
                    SQL_SUPPORTS_ORDER_BY_UNRELATED = 521,

                    /** SQL_SUPPORTED_GROUP_BY value */
                    SQL_SUPPORTED_GROUP_BY = 522,

                    /** SQL_SUPPORTS_LIKE_ESCAPE_CLAUSE value */
                    SQL_SUPPORTS_LIKE_ESCAPE_CLAUSE = 523,

                    /** SQL_SUPPORTS_NON_NULLABLE_COLUMNS value */
                    SQL_SUPPORTS_NON_NULLABLE_COLUMNS = 524,

                    /** SQL_SUPPORTED_GRAMMAR value */
                    SQL_SUPPORTED_GRAMMAR = 525,

                    /** SQL_ANSI92_SUPPORTED_LEVEL value */
                    SQL_ANSI92_SUPPORTED_LEVEL = 526,

                    /** SQL_SUPPORTS_INTEGRITY_ENHANCEMENT_FACILITY value */
                    SQL_SUPPORTS_INTEGRITY_ENHANCEMENT_FACILITY = 527,

                    /** SQL_OUTER_JOINS_SUPPORT_LEVEL value */
                    SQL_OUTER_JOINS_SUPPORT_LEVEL = 528,

                    /** SQL_SCHEMA_TERM value */
                    SQL_SCHEMA_TERM = 529,

                    /** SQL_PROCEDURE_TERM value */
                    SQL_PROCEDURE_TERM = 530,

                    /** SQL_CATALOG_TERM value */
                    SQL_CATALOG_TERM = 531,

                    /** SQL_CATALOG_AT_START value */
                    SQL_CATALOG_AT_START = 532,

                    /** SQL_SCHEMAS_SUPPORTED_ACTIONS value */
                    SQL_SCHEMAS_SUPPORTED_ACTIONS = 533,

                    /** SQL_CATALOGS_SUPPORTED_ACTIONS value */
                    SQL_CATALOGS_SUPPORTED_ACTIONS = 534,

                    /** SQL_SUPPORTED_POSITIONED_COMMANDS value */
                    SQL_SUPPORTED_POSITIONED_COMMANDS = 535,

                    /** SQL_SELECT_FOR_UPDATE_SUPPORTED value */
                    SQL_SELECT_FOR_UPDATE_SUPPORTED = 536,

                    /** SQL_STORED_PROCEDURES_SUPPORTED value */
                    SQL_STORED_PROCEDURES_SUPPORTED = 537,

                    /** SQL_SUPPORTED_SUBQUERIES value */
                    SQL_SUPPORTED_SUBQUERIES = 538,

                    /** SQL_CORRELATED_SUBQUERIES_SUPPORTED value */
                    SQL_CORRELATED_SUBQUERIES_SUPPORTED = 539,

                    /** SQL_SUPPORTED_UNIONS value */
                    SQL_SUPPORTED_UNIONS = 540,

                    /** SQL_MAX_BINARY_LITERAL_LENGTH value */
                    SQL_MAX_BINARY_LITERAL_LENGTH = 541,

                    /** SQL_MAX_CHAR_LITERAL_LENGTH value */
                    SQL_MAX_CHAR_LITERAL_LENGTH = 542,

                    /** SQL_MAX_COLUMN_NAME_LENGTH value */
                    SQL_MAX_COLUMN_NAME_LENGTH = 543,

                    /** SQL_MAX_COLUMNS_IN_GROUP_BY value */
                    SQL_MAX_COLUMNS_IN_GROUP_BY = 544,

                    /** SQL_MAX_COLUMNS_IN_INDEX value */
                    SQL_MAX_COLUMNS_IN_INDEX = 545,

                    /** SQL_MAX_COLUMNS_IN_ORDER_BY value */
                    SQL_MAX_COLUMNS_IN_ORDER_BY = 546,

                    /** SQL_MAX_COLUMNS_IN_SELECT value */
                    SQL_MAX_COLUMNS_IN_SELECT = 547,

                    /** SQL_MAX_COLUMNS_IN_TABLE value */
                    SQL_MAX_COLUMNS_IN_TABLE = 548,

                    /** SQL_MAX_CONNECTIONS value */
                    SQL_MAX_CONNECTIONS = 549,

                    /** SQL_MAX_CURSOR_NAME_LENGTH value */
                    SQL_MAX_CURSOR_NAME_LENGTH = 550,

                    /** SQL_MAX_INDEX_LENGTH value */
                    SQL_MAX_INDEX_LENGTH = 551,

                    /** SQL_DB_SCHEMA_NAME_LENGTH value */
                    SQL_DB_SCHEMA_NAME_LENGTH = 552,

                    /** SQL_MAX_PROCEDURE_NAME_LENGTH value */
                    SQL_MAX_PROCEDURE_NAME_LENGTH = 553,

                    /** SQL_MAX_CATALOG_NAME_LENGTH value */
                    SQL_MAX_CATALOG_NAME_LENGTH = 554,

                    /** SQL_MAX_ROW_SIZE value */
                    SQL_MAX_ROW_SIZE = 555,

                    /** SQL_MAX_ROW_SIZE_INCLUDES_BLOBS value */
                    SQL_MAX_ROW_SIZE_INCLUDES_BLOBS = 556,

                    /** SQL_MAX_STATEMENT_LENGTH value */
                    SQL_MAX_STATEMENT_LENGTH = 557,

                    /** SQL_MAX_STATEMENTS value */
                    SQL_MAX_STATEMENTS = 558,

                    /** SQL_MAX_TABLE_NAME_LENGTH value */
                    SQL_MAX_TABLE_NAME_LENGTH = 559,

                    /** SQL_MAX_TABLES_IN_SELECT value */
                    SQL_MAX_TABLES_IN_SELECT = 560,

                    /** SQL_MAX_USERNAME_LENGTH value */
                    SQL_MAX_USERNAME_LENGTH = 561,

                    /** SQL_DEFAULT_TRANSACTION_ISOLATION value */
                    SQL_DEFAULT_TRANSACTION_ISOLATION = 562,

                    /** SQL_TRANSACTIONS_SUPPORTED value */
                    SQL_TRANSACTIONS_SUPPORTED = 563,

                    /** SQL_SUPPORTED_TRANSACTIONS_ISOLATION_LEVELS value */
                    SQL_SUPPORTED_TRANSACTIONS_ISOLATION_LEVELS = 564,

                    /** SQL_DATA_DEFINITION_CAUSES_TRANSACTION_COMMIT value */
                    SQL_DATA_DEFINITION_CAUSES_TRANSACTION_COMMIT = 565,

                    /** SQL_DATA_DEFINITIONS_IN_TRANSACTIONS_IGNORED value */
                    SQL_DATA_DEFINITIONS_IN_TRANSACTIONS_IGNORED = 566,

                    /** SQL_SUPPORTED_RESULT_SET_TYPES value */
                    SQL_SUPPORTED_RESULT_SET_TYPES = 567,

                    /** SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_UNSPECIFIED value */
                    SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_UNSPECIFIED = 568,

                    /** SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_FORWARD_ONLY value */
                    SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_FORWARD_ONLY = 569,

                    /** SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_SCROLL_SENSITIVE value */
                    SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_SCROLL_SENSITIVE = 570,

                    /** SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_SCROLL_INSENSITIVE value */
                    SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_SCROLL_INSENSITIVE = 571,

                    /** SQL_BATCH_UPDATES_SUPPORTED value */
                    SQL_BATCH_UPDATES_SUPPORTED = 572,

                    /** SQL_SAVEPOINTS_SUPPORTED value */
                    SQL_SAVEPOINTS_SUPPORTED = 573,

                    /** SQL_NAMED_PARAMETERS_SUPPORTED value */
                    SQL_NAMED_PARAMETERS_SUPPORTED = 574,

                    /** SQL_LOCATORS_UPDATE_COPY value */
                    SQL_LOCATORS_UPDATE_COPY = 575,

                    /** SQL_STORED_FUNCTIONS_USING_CALL_SYNTAX_SUPPORTED value */
                    SQL_STORED_FUNCTIONS_USING_CALL_SYNTAX_SUPPORTED = 576
                }

                /** SqlSupportedTransaction enum. */
                enum SqlSupportedTransaction {

                    /** SQL_SUPPORTED_TRANSACTION_NONE value */
                    SQL_SUPPORTED_TRANSACTION_NONE = 0,

                    /** SQL_SUPPORTED_TRANSACTION_TRANSACTION value */
                    SQL_SUPPORTED_TRANSACTION_TRANSACTION = 1,

                    /** SQL_SUPPORTED_TRANSACTION_SAVEPOINT value */
                    SQL_SUPPORTED_TRANSACTION_SAVEPOINT = 2
                }

                /** SqlSupportedCaseSensitivity enum. */
                enum SqlSupportedCaseSensitivity {

                    /** SQL_CASE_SENSITIVITY_UNKNOWN value */
                    SQL_CASE_SENSITIVITY_UNKNOWN = 0,

                    /** SQL_CASE_SENSITIVITY_CASE_INSENSITIVE value */
                    SQL_CASE_SENSITIVITY_CASE_INSENSITIVE = 1,

                    /** SQL_CASE_SENSITIVITY_UPPERCASE value */
                    SQL_CASE_SENSITIVITY_UPPERCASE = 2,

                    /** SQL_CASE_SENSITIVITY_LOWERCASE value */
                    SQL_CASE_SENSITIVITY_LOWERCASE = 3
                }

                /** SqlNullOrdering enum. */
                enum SqlNullOrdering {

                    /** SQL_NULLS_SORTED_HIGH value */
                    SQL_NULLS_SORTED_HIGH = 0,

                    /** SQL_NULLS_SORTED_LOW value */
                    SQL_NULLS_SORTED_LOW = 1,

                    /** SQL_NULLS_SORTED_AT_START value */
                    SQL_NULLS_SORTED_AT_START = 2,

                    /** SQL_NULLS_SORTED_AT_END value */
                    SQL_NULLS_SORTED_AT_END = 3
                }

                /** SupportedSqlGrammar enum. */
                enum SupportedSqlGrammar {

                    /** SQL_MINIMUM_GRAMMAR value */
                    SQL_MINIMUM_GRAMMAR = 0,

                    /** SQL_CORE_GRAMMAR value */
                    SQL_CORE_GRAMMAR = 1,

                    /** SQL_EXTENDED_GRAMMAR value */
                    SQL_EXTENDED_GRAMMAR = 2
                }

                /** SupportedAnsi92SqlGrammarLevel enum. */
                enum SupportedAnsi92SqlGrammarLevel {

                    /** ANSI92_ENTRY_SQL value */
                    ANSI92_ENTRY_SQL = 0,

                    /** ANSI92_INTERMEDIATE_SQL value */
                    ANSI92_INTERMEDIATE_SQL = 1,

                    /** ANSI92_FULL_SQL value */
                    ANSI92_FULL_SQL = 2
                }

                /** SqlOuterJoinsSupportLevel enum. */
                enum SqlOuterJoinsSupportLevel {

                    /** SQL_JOINS_UNSUPPORTED value */
                    SQL_JOINS_UNSUPPORTED = 0,

                    /** SQL_LIMITED_OUTER_JOINS value */
                    SQL_LIMITED_OUTER_JOINS = 1,

                    /** SQL_FULL_OUTER_JOINS value */
                    SQL_FULL_OUTER_JOINS = 2
                }

                /** SqlSupportedGroupBy enum. */
                enum SqlSupportedGroupBy {

                    /** SQL_GROUP_BY_UNRELATED value */
                    SQL_GROUP_BY_UNRELATED = 0,

                    /** SQL_GROUP_BY_BEYOND_SELECT value */
                    SQL_GROUP_BY_BEYOND_SELECT = 1
                }

                /** SqlSupportedElementActions enum. */
                enum SqlSupportedElementActions {

                    /** SQL_ELEMENT_IN_PROCEDURE_CALLS value */
                    SQL_ELEMENT_IN_PROCEDURE_CALLS = 0,

                    /** SQL_ELEMENT_IN_INDEX_DEFINITIONS value */
                    SQL_ELEMENT_IN_INDEX_DEFINITIONS = 1,

                    /** SQL_ELEMENT_IN_PRIVILEGE_DEFINITIONS value */
                    SQL_ELEMENT_IN_PRIVILEGE_DEFINITIONS = 2
                }

                /** SqlSupportedPositionedCommands enum. */
                enum SqlSupportedPositionedCommands {

                    /** SQL_POSITIONED_DELETE value */
                    SQL_POSITIONED_DELETE = 0,

                    /** SQL_POSITIONED_UPDATE value */
                    SQL_POSITIONED_UPDATE = 1
                }

                /** SqlSupportedSubqueries enum. */
                enum SqlSupportedSubqueries {

                    /** SQL_SUBQUERIES_IN_COMPARISONS value */
                    SQL_SUBQUERIES_IN_COMPARISONS = 0,

                    /** SQL_SUBQUERIES_IN_EXISTS value */
                    SQL_SUBQUERIES_IN_EXISTS = 1,

                    /** SQL_SUBQUERIES_IN_INS value */
                    SQL_SUBQUERIES_IN_INS = 2,

                    /** SQL_SUBQUERIES_IN_QUANTIFIEDS value */
                    SQL_SUBQUERIES_IN_QUANTIFIEDS = 3
                }

                /** SqlSupportedUnions enum. */
                enum SqlSupportedUnions {

                    /** SQL_UNION value */
                    SQL_UNION = 0,

                    /** SQL_UNION_ALL value */
                    SQL_UNION_ALL = 1
                }

                /** SqlTransactionIsolationLevel enum. */
                enum SqlTransactionIsolationLevel {

                    /** SQL_TRANSACTION_NONE value */
                    SQL_TRANSACTION_NONE = 0,

                    /** SQL_TRANSACTION_READ_UNCOMMITTED value */
                    SQL_TRANSACTION_READ_UNCOMMITTED = 1,

                    /** SQL_TRANSACTION_READ_COMMITTED value */
                    SQL_TRANSACTION_READ_COMMITTED = 2,

                    /** SQL_TRANSACTION_REPEATABLE_READ value */
                    SQL_TRANSACTION_REPEATABLE_READ = 3,

                    /** SQL_TRANSACTION_SERIALIZABLE value */
                    SQL_TRANSACTION_SERIALIZABLE = 4
                }

                /** SqlSupportedTransactions enum. */
                enum SqlSupportedTransactions {

                    /** SQL_TRANSACTION_UNSPECIFIED value */
                    SQL_TRANSACTION_UNSPECIFIED = 0,

                    /** SQL_DATA_DEFINITION_TRANSACTIONS value */
                    SQL_DATA_DEFINITION_TRANSACTIONS = 1,

                    /** SQL_DATA_MANIPULATION_TRANSACTIONS value */
                    SQL_DATA_MANIPULATION_TRANSACTIONS = 2
                }

                /** SqlSupportedResultSetType enum. */
                enum SqlSupportedResultSetType {

                    /** SQL_RESULT_SET_TYPE_UNSPECIFIED value */
                    SQL_RESULT_SET_TYPE_UNSPECIFIED = 0,

                    /** SQL_RESULT_SET_TYPE_FORWARD_ONLY value */
                    SQL_RESULT_SET_TYPE_FORWARD_ONLY = 1,

                    /** SQL_RESULT_SET_TYPE_SCROLL_INSENSITIVE value */
                    SQL_RESULT_SET_TYPE_SCROLL_INSENSITIVE = 2,

                    /** SQL_RESULT_SET_TYPE_SCROLL_SENSITIVE value */
                    SQL_RESULT_SET_TYPE_SCROLL_SENSITIVE = 3
                }

                /** SqlSupportedResultSetConcurrency enum. */
                enum SqlSupportedResultSetConcurrency {

                    /** SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED value */
                    SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED = 0,

                    /** SQL_RESULT_SET_CONCURRENCY_READ_ONLY value */
                    SQL_RESULT_SET_CONCURRENCY_READ_ONLY = 1,

                    /** SQL_RESULT_SET_CONCURRENCY_UPDATABLE value */
                    SQL_RESULT_SET_CONCURRENCY_UPDATABLE = 2
                }

                /** SqlSupportsConvert enum. */
                enum SqlSupportsConvert {

                    /** SQL_CONVERT_BIGINT value */
                    SQL_CONVERT_BIGINT = 0,

                    /** SQL_CONVERT_BINARY value */
                    SQL_CONVERT_BINARY = 1,

                    /** SQL_CONVERT_BIT value */
                    SQL_CONVERT_BIT = 2,

                    /** SQL_CONVERT_CHAR value */
                    SQL_CONVERT_CHAR = 3,

                    /** SQL_CONVERT_DATE value */
                    SQL_CONVERT_DATE = 4,

                    /** SQL_CONVERT_DECIMAL value */
                    SQL_CONVERT_DECIMAL = 5,

                    /** SQL_CONVERT_FLOAT value */
                    SQL_CONVERT_FLOAT = 6,

                    /** SQL_CONVERT_INTEGER value */
                    SQL_CONVERT_INTEGER = 7,

                    /** SQL_CONVERT_INTERVAL_DAY_TIME value */
                    SQL_CONVERT_INTERVAL_DAY_TIME = 8,

                    /** SQL_CONVERT_INTERVAL_YEAR_MONTH value */
                    SQL_CONVERT_INTERVAL_YEAR_MONTH = 9,

                    /** SQL_CONVERT_LONGVARBINARY value */
                    SQL_CONVERT_LONGVARBINARY = 10,

                    /** SQL_CONVERT_LONGVARCHAR value */
                    SQL_CONVERT_LONGVARCHAR = 11,

                    /** SQL_CONVERT_NUMERIC value */
                    SQL_CONVERT_NUMERIC = 12,

                    /** SQL_CONVERT_REAL value */
                    SQL_CONVERT_REAL = 13,

                    /** SQL_CONVERT_SMALLINT value */
                    SQL_CONVERT_SMALLINT = 14,

                    /** SQL_CONVERT_TIME value */
                    SQL_CONVERT_TIME = 15,

                    /** SQL_CONVERT_TIMESTAMP value */
                    SQL_CONVERT_TIMESTAMP = 16,

                    /** SQL_CONVERT_TINYINT value */
                    SQL_CONVERT_TINYINT = 17,

                    /** SQL_CONVERT_VARBINARY value */
                    SQL_CONVERT_VARBINARY = 18,

                    /** SQL_CONVERT_VARCHAR value */
                    SQL_CONVERT_VARCHAR = 19
                }

                /**
                 * The JDBC/ODBC-defined type of any object.
                 * All the values here are the same as in the JDBC and ODBC specs.
                 */
                enum XdbcDataType {

                    /** XDBC_UNKNOWN_TYPE value */
                    XDBC_UNKNOWN_TYPE = 0,

                    /** XDBC_CHAR value */
                    XDBC_CHAR = 1,

                    /** XDBC_NUMERIC value */
                    XDBC_NUMERIC = 2,

                    /** XDBC_DECIMAL value */
                    XDBC_DECIMAL = 3,

                    /** XDBC_INTEGER value */
                    XDBC_INTEGER = 4,

                    /** XDBC_SMALLINT value */
                    XDBC_SMALLINT = 5,

                    /** XDBC_FLOAT value */
                    XDBC_FLOAT = 6,

                    /** XDBC_REAL value */
                    XDBC_REAL = 7,

                    /** XDBC_DOUBLE value */
                    XDBC_DOUBLE = 8,

                    /** XDBC_DATETIME value */
                    XDBC_DATETIME = 9,

                    /** XDBC_INTERVAL value */
                    XDBC_INTERVAL = 10,

                    /** XDBC_VARCHAR value */
                    XDBC_VARCHAR = 12,

                    /** XDBC_DATE value */
                    XDBC_DATE = 91,

                    /** XDBC_TIME value */
                    XDBC_TIME = 92,

                    /** XDBC_TIMESTAMP value */
                    XDBC_TIMESTAMP = 93,

                    /** XDBC_LONGVARCHAR value */
                    XDBC_LONGVARCHAR = -1,

                    /** XDBC_BINARY value */
                    XDBC_BINARY = -2,

                    /** XDBC_VARBINARY value */
                    XDBC_VARBINARY = -3,

                    /** XDBC_LONGVARBINARY value */
                    XDBC_LONGVARBINARY = -4,

                    /** XDBC_BIGINT value */
                    XDBC_BIGINT = -5,

                    /** XDBC_TINYINT value */
                    XDBC_TINYINT = -6,

                    /** XDBC_BIT value */
                    XDBC_BIT = -7,

                    /** XDBC_WCHAR value */
                    XDBC_WCHAR = -8,

                    /** XDBC_WVARCHAR value */
                    XDBC_WVARCHAR = -9
                }

                /** Detailed subtype information for XDBC_TYPE_DATETIME and XDBC_TYPE_INTERVAL. */
                enum XdbcDatetimeSubcode {

                    /** XDBC_SUBCODE_UNKNOWN value */
                    XDBC_SUBCODE_UNKNOWN = 0,

                    /** XDBC_SUBCODE_YEAR value */
                    XDBC_SUBCODE_YEAR = 1,

                    /** XDBC_SUBCODE_DATE value */
                    XDBC_SUBCODE_DATE = 1,

                    /** XDBC_SUBCODE_TIME value */
                    XDBC_SUBCODE_TIME = 2,

                    /** XDBC_SUBCODE_MONTH value */
                    XDBC_SUBCODE_MONTH = 2,

                    /** XDBC_SUBCODE_TIMESTAMP value */
                    XDBC_SUBCODE_TIMESTAMP = 3,

                    /** XDBC_SUBCODE_DAY value */
                    XDBC_SUBCODE_DAY = 3,

                    /** XDBC_SUBCODE_TIME_WITH_TIMEZONE value */
                    XDBC_SUBCODE_TIME_WITH_TIMEZONE = 4,

                    /** XDBC_SUBCODE_HOUR value */
                    XDBC_SUBCODE_HOUR = 4,

                    /** XDBC_SUBCODE_TIMESTAMP_WITH_TIMEZONE value */
                    XDBC_SUBCODE_TIMESTAMP_WITH_TIMEZONE = 5,

                    /** XDBC_SUBCODE_MINUTE value */
                    XDBC_SUBCODE_MINUTE = 5,

                    /** XDBC_SUBCODE_SECOND value */
                    XDBC_SUBCODE_SECOND = 6,

                    /** XDBC_SUBCODE_YEAR_TO_MONTH value */
                    XDBC_SUBCODE_YEAR_TO_MONTH = 7,

                    /** XDBC_SUBCODE_DAY_TO_HOUR value */
                    XDBC_SUBCODE_DAY_TO_HOUR = 8,

                    /** XDBC_SUBCODE_DAY_TO_MINUTE value */
                    XDBC_SUBCODE_DAY_TO_MINUTE = 9,

                    /** XDBC_SUBCODE_DAY_TO_SECOND value */
                    XDBC_SUBCODE_DAY_TO_SECOND = 10,

                    /** XDBC_SUBCODE_HOUR_TO_MINUTE value */
                    XDBC_SUBCODE_HOUR_TO_MINUTE = 11,

                    /** XDBC_SUBCODE_HOUR_TO_SECOND value */
                    XDBC_SUBCODE_HOUR_TO_SECOND = 12,

                    /** XDBC_SUBCODE_MINUTE_TO_SECOND value */
                    XDBC_SUBCODE_MINUTE_TO_SECOND = 13,

                    /** XDBC_SUBCODE_INTERVAL_YEAR value */
                    XDBC_SUBCODE_INTERVAL_YEAR = 101,

                    /** XDBC_SUBCODE_INTERVAL_MONTH value */
                    XDBC_SUBCODE_INTERVAL_MONTH = 102,

                    /** XDBC_SUBCODE_INTERVAL_DAY value */
                    XDBC_SUBCODE_INTERVAL_DAY = 103,

                    /** XDBC_SUBCODE_INTERVAL_HOUR value */
                    XDBC_SUBCODE_INTERVAL_HOUR = 104,

                    /** XDBC_SUBCODE_INTERVAL_MINUTE value */
                    XDBC_SUBCODE_INTERVAL_MINUTE = 105,

                    /** XDBC_SUBCODE_INTERVAL_SECOND value */
                    XDBC_SUBCODE_INTERVAL_SECOND = 106,

                    /** XDBC_SUBCODE_INTERVAL_YEAR_TO_MONTH value */
                    XDBC_SUBCODE_INTERVAL_YEAR_TO_MONTH = 107,

                    /** XDBC_SUBCODE_INTERVAL_DAY_TO_HOUR value */
                    XDBC_SUBCODE_INTERVAL_DAY_TO_HOUR = 108,

                    /** XDBC_SUBCODE_INTERVAL_DAY_TO_MINUTE value */
                    XDBC_SUBCODE_INTERVAL_DAY_TO_MINUTE = 109,

                    /** XDBC_SUBCODE_INTERVAL_DAY_TO_SECOND value */
                    XDBC_SUBCODE_INTERVAL_DAY_TO_SECOND = 110,

                    /** XDBC_SUBCODE_INTERVAL_HOUR_TO_MINUTE value */
                    XDBC_SUBCODE_INTERVAL_HOUR_TO_MINUTE = 111,

                    /** XDBC_SUBCODE_INTERVAL_HOUR_TO_SECOND value */
                    XDBC_SUBCODE_INTERVAL_HOUR_TO_SECOND = 112,

                    /** XDBC_SUBCODE_INTERVAL_MINUTE_TO_SECOND value */
                    XDBC_SUBCODE_INTERVAL_MINUTE_TO_SECOND = 113
                }

                /** Nullable enum. */
                enum Nullable {

                    /** Indicates that the fields does not allow the use of null values. */
                    NULLABILITY_NO_NULLS = 0,

                    /** Indicates that the fields allow the use of null values. */
                    NULLABILITY_NULLABLE = 1,

                    /** Indicates that nullability of the fields cannot be determined. */
                    NULLABILITY_UNKNOWN = 2
                }

                /** Searchable enum. */
                enum Searchable {

                    /** Indicates that column cannot be used in a WHERE clause. */
                    SEARCHABLE_NONE = 0,

                    /**
                     * Indicates that the column can be used in a WHERE clause if it is using a
                     * LIKE operator.
                     */
                    SEARCHABLE_CHAR = 1,

                    /**
                     * Indicates that the column can be used In a WHERE clause with any
                     * operator other than LIKE.
                     *
                     * - Allowed operators: comparison, quantified comparison, BETWEEN,
                     * DISTINCT, IN, MATCH, and UNIQUE.
                     */
                    SEARCHABLE_BASIC = 2,

                    /** Indicates that the column can be used in a WHERE clause using any operator. */
                    SEARCHABLE_FULL = 3
                }

                /**
                 * Properties of a CommandGetXdbcTypeInfo.
                 * @deprecated Use arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.$Properties instead.
                 */
                interface ICommandGetXdbcTypeInfo extends arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.$Properties {
                }

                /** Represents a CommandGetXdbcTypeInfo. */
                class CommandGetXdbcTypeInfo {

                    /**
                     * Constructs a new CommandGetXdbcTypeInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** CommandGetXdbcTypeInfo dataType. */
                    dataType?: (number|null);

                    /**
                     * Creates a new CommandGetXdbcTypeInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandGetXdbcTypeInfo instance
                     */
                    static create(properties: arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.$Shape): arrow.flight.protocol.sql.CommandGetXdbcTypeInfo & arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.$Properties): arrow.flight.protocol.sql.CommandGetXdbcTypeInfo;

                    /**
                     * Encodes the specified CommandGetXdbcTypeInfo message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.verify|verify} messages.
                     * @param message CommandGetXdbcTypeInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandGetXdbcTypeInfo message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.verify|verify} messages.
                     * @param message CommandGetXdbcTypeInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandGetXdbcTypeInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandGetXdbcTypeInfo & arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.$Shape} CommandGetXdbcTypeInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandGetXdbcTypeInfo & arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.$Shape;

                    /**
                     * Decodes a CommandGetXdbcTypeInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandGetXdbcTypeInfo & arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.$Shape} CommandGetXdbcTypeInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandGetXdbcTypeInfo & arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.$Shape;

                    /**
                     * Verifies a CommandGetXdbcTypeInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandGetXdbcTypeInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandGetXdbcTypeInfo
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandGetXdbcTypeInfo;

                    /**
                     * Creates a plain object from a CommandGetXdbcTypeInfo message. Also converts values to other types if specified.
                     * @param message CommandGetXdbcTypeInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.CommandGetXdbcTypeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandGetXdbcTypeInfo to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for CommandGetXdbcTypeInfo
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace CommandGetXdbcTypeInfo {

                    /** Properties of a CommandGetXdbcTypeInfo. */
                    interface $Properties {

                        /** CommandGetXdbcTypeInfo dataType */
                        dataType?: (number|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a CommandGetXdbcTypeInfo. */
                    type $Shape = arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.$Properties;
                }

                /**
                 * Properties of a CommandGetCatalogs.
                 * @deprecated Use arrow.flight.protocol.sql.CommandGetCatalogs.$Properties instead.
                 */
                interface ICommandGetCatalogs extends arrow.flight.protocol.sql.CommandGetCatalogs.$Properties {
                }

                /** Represents a CommandGetCatalogs. */
                class CommandGetCatalogs {

                    /**
                     * Constructs a new CommandGetCatalogs.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.CommandGetCatalogs.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new CommandGetCatalogs instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandGetCatalogs instance
                     */
                    static create(properties: arrow.flight.protocol.sql.CommandGetCatalogs.$Shape): arrow.flight.protocol.sql.CommandGetCatalogs & arrow.flight.protocol.sql.CommandGetCatalogs.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.CommandGetCatalogs.$Properties): arrow.flight.protocol.sql.CommandGetCatalogs;

                    /**
                     * Encodes the specified CommandGetCatalogs message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetCatalogs.verify|verify} messages.
                     * @param message CommandGetCatalogs message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.CommandGetCatalogs.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandGetCatalogs message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetCatalogs.verify|verify} messages.
                     * @param message CommandGetCatalogs message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.CommandGetCatalogs.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandGetCatalogs message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandGetCatalogs & arrow.flight.protocol.sql.CommandGetCatalogs.$Shape} CommandGetCatalogs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandGetCatalogs & arrow.flight.protocol.sql.CommandGetCatalogs.$Shape;

                    /**
                     * Decodes a CommandGetCatalogs message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandGetCatalogs & arrow.flight.protocol.sql.CommandGetCatalogs.$Shape} CommandGetCatalogs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandGetCatalogs & arrow.flight.protocol.sql.CommandGetCatalogs.$Shape;

                    /**
                     * Verifies a CommandGetCatalogs message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandGetCatalogs message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandGetCatalogs
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandGetCatalogs;

                    /**
                     * Creates a plain object from a CommandGetCatalogs message. Also converts values to other types if specified.
                     * @param message CommandGetCatalogs
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.CommandGetCatalogs, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandGetCatalogs to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for CommandGetCatalogs
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace CommandGetCatalogs {

                    /** Properties of a CommandGetCatalogs. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a CommandGetCatalogs. */
                    type $Shape = arrow.flight.protocol.sql.CommandGetCatalogs.$Properties;
                }

                /**
                 * Properties of a CommandGetDbSchemas.
                 * @deprecated Use arrow.flight.protocol.sql.CommandGetDbSchemas.$Properties instead.
                 */
                interface ICommandGetDbSchemas extends arrow.flight.protocol.sql.CommandGetDbSchemas.$Properties {
                }

                /** Represents a CommandGetDbSchemas. */
                class CommandGetDbSchemas {

                    /**
                     * Constructs a new CommandGetDbSchemas.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.CommandGetDbSchemas.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** CommandGetDbSchemas catalog. */
                    catalog?: (string|null);

                    /** CommandGetDbSchemas dbSchemaFilterPattern. */
                    dbSchemaFilterPattern?: (string|null);

                    /**
                     * Creates a new CommandGetDbSchemas instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandGetDbSchemas instance
                     */
                    static create(properties: arrow.flight.protocol.sql.CommandGetDbSchemas.$Shape): arrow.flight.protocol.sql.CommandGetDbSchemas & arrow.flight.protocol.sql.CommandGetDbSchemas.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.CommandGetDbSchemas.$Properties): arrow.flight.protocol.sql.CommandGetDbSchemas;

                    /**
                     * Encodes the specified CommandGetDbSchemas message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetDbSchemas.verify|verify} messages.
                     * @param message CommandGetDbSchemas message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.CommandGetDbSchemas.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandGetDbSchemas message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetDbSchemas.verify|verify} messages.
                     * @param message CommandGetDbSchemas message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.CommandGetDbSchemas.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandGetDbSchemas message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandGetDbSchemas & arrow.flight.protocol.sql.CommandGetDbSchemas.$Shape} CommandGetDbSchemas
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandGetDbSchemas & arrow.flight.protocol.sql.CommandGetDbSchemas.$Shape;

                    /**
                     * Decodes a CommandGetDbSchemas message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandGetDbSchemas & arrow.flight.protocol.sql.CommandGetDbSchemas.$Shape} CommandGetDbSchemas
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandGetDbSchemas & arrow.flight.protocol.sql.CommandGetDbSchemas.$Shape;

                    /**
                     * Verifies a CommandGetDbSchemas message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandGetDbSchemas message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandGetDbSchemas
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandGetDbSchemas;

                    /**
                     * Creates a plain object from a CommandGetDbSchemas message. Also converts values to other types if specified.
                     * @param message CommandGetDbSchemas
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.CommandGetDbSchemas, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandGetDbSchemas to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for CommandGetDbSchemas
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace CommandGetDbSchemas {

                    /** Properties of a CommandGetDbSchemas. */
                    interface $Properties {

                        /** CommandGetDbSchemas catalog */
                        catalog?: (string|null);

                        /** CommandGetDbSchemas dbSchemaFilterPattern */
                        dbSchemaFilterPattern?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a CommandGetDbSchemas. */
                    type $Shape = arrow.flight.protocol.sql.CommandGetDbSchemas.$Properties;
                }

                /**
                 * Properties of a CommandGetTables.
                 * @deprecated Use arrow.flight.protocol.sql.CommandGetTables.$Properties instead.
                 */
                interface ICommandGetTables extends arrow.flight.protocol.sql.CommandGetTables.$Properties {
                }

                /** Represents a CommandGetTables. */
                class CommandGetTables {

                    /**
                     * Constructs a new CommandGetTables.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.CommandGetTables.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** CommandGetTables catalog. */
                    catalog?: (string|null);

                    /** CommandGetTables dbSchemaFilterPattern. */
                    dbSchemaFilterPattern?: (string|null);

                    /** CommandGetTables tableNameFilterPattern. */
                    tableNameFilterPattern?: (string|null);

                    /** CommandGetTables tableTypes. */
                    tableTypes: string[];

                    /** CommandGetTables includeSchema. */
                    includeSchema: boolean;

                    /**
                     * Creates a new CommandGetTables instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandGetTables instance
                     */
                    static create(properties: arrow.flight.protocol.sql.CommandGetTables.$Shape): arrow.flight.protocol.sql.CommandGetTables & arrow.flight.protocol.sql.CommandGetTables.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.CommandGetTables.$Properties): arrow.flight.protocol.sql.CommandGetTables;

                    /**
                     * Encodes the specified CommandGetTables message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetTables.verify|verify} messages.
                     * @param message CommandGetTables message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.CommandGetTables.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandGetTables message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetTables.verify|verify} messages.
                     * @param message CommandGetTables message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.CommandGetTables.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandGetTables message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandGetTables & arrow.flight.protocol.sql.CommandGetTables.$Shape} CommandGetTables
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandGetTables & arrow.flight.protocol.sql.CommandGetTables.$Shape;

                    /**
                     * Decodes a CommandGetTables message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandGetTables & arrow.flight.protocol.sql.CommandGetTables.$Shape} CommandGetTables
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandGetTables & arrow.flight.protocol.sql.CommandGetTables.$Shape;

                    /**
                     * Verifies a CommandGetTables message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandGetTables message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandGetTables
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandGetTables;

                    /**
                     * Creates a plain object from a CommandGetTables message. Also converts values to other types if specified.
                     * @param message CommandGetTables
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.CommandGetTables, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandGetTables to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for CommandGetTables
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace CommandGetTables {

                    /** Properties of a CommandGetTables. */
                    interface $Properties {

                        /** CommandGetTables catalog */
                        catalog?: (string|null);

                        /** CommandGetTables dbSchemaFilterPattern */
                        dbSchemaFilterPattern?: (string|null);

                        /** CommandGetTables tableNameFilterPattern */
                        tableNameFilterPattern?: (string|null);

                        /** CommandGetTables tableTypes */
                        tableTypes?: (string[]|null);

                        /** CommandGetTables includeSchema */
                        includeSchema?: (boolean|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a CommandGetTables. */
                    type $Shape = arrow.flight.protocol.sql.CommandGetTables.$Properties;
                }

                /**
                 * Properties of a CommandGetTableTypes.
                 * @deprecated Use arrow.flight.protocol.sql.CommandGetTableTypes.$Properties instead.
                 */
                interface ICommandGetTableTypes extends arrow.flight.protocol.sql.CommandGetTableTypes.$Properties {
                }

                /** Represents a CommandGetTableTypes. */
                class CommandGetTableTypes {

                    /**
                     * Constructs a new CommandGetTableTypes.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.CommandGetTableTypes.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new CommandGetTableTypes instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandGetTableTypes instance
                     */
                    static create(properties: arrow.flight.protocol.sql.CommandGetTableTypes.$Shape): arrow.flight.protocol.sql.CommandGetTableTypes & arrow.flight.protocol.sql.CommandGetTableTypes.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.CommandGetTableTypes.$Properties): arrow.flight.protocol.sql.CommandGetTableTypes;

                    /**
                     * Encodes the specified CommandGetTableTypes message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetTableTypes.verify|verify} messages.
                     * @param message CommandGetTableTypes message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.CommandGetTableTypes.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandGetTableTypes message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetTableTypes.verify|verify} messages.
                     * @param message CommandGetTableTypes message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.CommandGetTableTypes.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandGetTableTypes message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandGetTableTypes & arrow.flight.protocol.sql.CommandGetTableTypes.$Shape} CommandGetTableTypes
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandGetTableTypes & arrow.flight.protocol.sql.CommandGetTableTypes.$Shape;

                    /**
                     * Decodes a CommandGetTableTypes message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandGetTableTypes & arrow.flight.protocol.sql.CommandGetTableTypes.$Shape} CommandGetTableTypes
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandGetTableTypes & arrow.flight.protocol.sql.CommandGetTableTypes.$Shape;

                    /**
                     * Verifies a CommandGetTableTypes message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandGetTableTypes message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandGetTableTypes
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandGetTableTypes;

                    /**
                     * Creates a plain object from a CommandGetTableTypes message. Also converts values to other types if specified.
                     * @param message CommandGetTableTypes
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.CommandGetTableTypes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandGetTableTypes to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for CommandGetTableTypes
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace CommandGetTableTypes {

                    /** Properties of a CommandGetTableTypes. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a CommandGetTableTypes. */
                    type $Shape = arrow.flight.protocol.sql.CommandGetTableTypes.$Properties;
                }

                /**
                 * Properties of a CommandGetPrimaryKeys.
                 * @deprecated Use arrow.flight.protocol.sql.CommandGetPrimaryKeys.$Properties instead.
                 */
                interface ICommandGetPrimaryKeys extends arrow.flight.protocol.sql.CommandGetPrimaryKeys.$Properties {
                }

                /** Represents a CommandGetPrimaryKeys. */
                class CommandGetPrimaryKeys {

                    /**
                     * Constructs a new CommandGetPrimaryKeys.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.CommandGetPrimaryKeys.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** CommandGetPrimaryKeys catalog. */
                    catalog?: (string|null);

                    /** CommandGetPrimaryKeys dbSchema. */
                    dbSchema?: (string|null);

                    /** CommandGetPrimaryKeys table. */
                    table: string;

                    /**
                     * Creates a new CommandGetPrimaryKeys instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandGetPrimaryKeys instance
                     */
                    static create(properties: arrow.flight.protocol.sql.CommandGetPrimaryKeys.$Shape): arrow.flight.protocol.sql.CommandGetPrimaryKeys & arrow.flight.protocol.sql.CommandGetPrimaryKeys.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.CommandGetPrimaryKeys.$Properties): arrow.flight.protocol.sql.CommandGetPrimaryKeys;

                    /**
                     * Encodes the specified CommandGetPrimaryKeys message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetPrimaryKeys.verify|verify} messages.
                     * @param message CommandGetPrimaryKeys message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.CommandGetPrimaryKeys.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandGetPrimaryKeys message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetPrimaryKeys.verify|verify} messages.
                     * @param message CommandGetPrimaryKeys message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.CommandGetPrimaryKeys.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandGetPrimaryKeys message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandGetPrimaryKeys & arrow.flight.protocol.sql.CommandGetPrimaryKeys.$Shape} CommandGetPrimaryKeys
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandGetPrimaryKeys & arrow.flight.protocol.sql.CommandGetPrimaryKeys.$Shape;

                    /**
                     * Decodes a CommandGetPrimaryKeys message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandGetPrimaryKeys & arrow.flight.protocol.sql.CommandGetPrimaryKeys.$Shape} CommandGetPrimaryKeys
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandGetPrimaryKeys & arrow.flight.protocol.sql.CommandGetPrimaryKeys.$Shape;

                    /**
                     * Verifies a CommandGetPrimaryKeys message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandGetPrimaryKeys message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandGetPrimaryKeys
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandGetPrimaryKeys;

                    /**
                     * Creates a plain object from a CommandGetPrimaryKeys message. Also converts values to other types if specified.
                     * @param message CommandGetPrimaryKeys
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.CommandGetPrimaryKeys, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandGetPrimaryKeys to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for CommandGetPrimaryKeys
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace CommandGetPrimaryKeys {

                    /** Properties of a CommandGetPrimaryKeys. */
                    interface $Properties {

                        /** CommandGetPrimaryKeys catalog */
                        catalog?: (string|null);

                        /** CommandGetPrimaryKeys dbSchema */
                        dbSchema?: (string|null);

                        /** CommandGetPrimaryKeys table */
                        table?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a CommandGetPrimaryKeys. */
                    type $Shape = arrow.flight.protocol.sql.CommandGetPrimaryKeys.$Properties;
                }

                /** UpdateDeleteRules enum. */
                enum UpdateDeleteRules {

                    /** CASCADE value */
                    CASCADE = 0,

                    /** RESTRICT value */
                    RESTRICT = 1,

                    /** SET_NULL value */
                    SET_NULL = 2,

                    /** NO_ACTION value */
                    NO_ACTION = 3,

                    /** SET_DEFAULT value */
                    SET_DEFAULT = 4
                }

                /**
                 * Properties of a CommandGetExportedKeys.
                 * @deprecated Use arrow.flight.protocol.sql.CommandGetExportedKeys.$Properties instead.
                 */
                interface ICommandGetExportedKeys extends arrow.flight.protocol.sql.CommandGetExportedKeys.$Properties {
                }

                /** Represents a CommandGetExportedKeys. */
                class CommandGetExportedKeys {

                    /**
                     * Constructs a new CommandGetExportedKeys.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.CommandGetExportedKeys.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** CommandGetExportedKeys catalog. */
                    catalog?: (string|null);

                    /** CommandGetExportedKeys dbSchema. */
                    dbSchema?: (string|null);

                    /** CommandGetExportedKeys table. */
                    table: string;

                    /**
                     * Creates a new CommandGetExportedKeys instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandGetExportedKeys instance
                     */
                    static create(properties: arrow.flight.protocol.sql.CommandGetExportedKeys.$Shape): arrow.flight.protocol.sql.CommandGetExportedKeys & arrow.flight.protocol.sql.CommandGetExportedKeys.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.CommandGetExportedKeys.$Properties): arrow.flight.protocol.sql.CommandGetExportedKeys;

                    /**
                     * Encodes the specified CommandGetExportedKeys message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetExportedKeys.verify|verify} messages.
                     * @param message CommandGetExportedKeys message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.CommandGetExportedKeys.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandGetExportedKeys message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetExportedKeys.verify|verify} messages.
                     * @param message CommandGetExportedKeys message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.CommandGetExportedKeys.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandGetExportedKeys message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandGetExportedKeys & arrow.flight.protocol.sql.CommandGetExportedKeys.$Shape} CommandGetExportedKeys
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandGetExportedKeys & arrow.flight.protocol.sql.CommandGetExportedKeys.$Shape;

                    /**
                     * Decodes a CommandGetExportedKeys message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandGetExportedKeys & arrow.flight.protocol.sql.CommandGetExportedKeys.$Shape} CommandGetExportedKeys
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandGetExportedKeys & arrow.flight.protocol.sql.CommandGetExportedKeys.$Shape;

                    /**
                     * Verifies a CommandGetExportedKeys message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandGetExportedKeys message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandGetExportedKeys
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandGetExportedKeys;

                    /**
                     * Creates a plain object from a CommandGetExportedKeys message. Also converts values to other types if specified.
                     * @param message CommandGetExportedKeys
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.CommandGetExportedKeys, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandGetExportedKeys to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for CommandGetExportedKeys
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace CommandGetExportedKeys {

                    /** Properties of a CommandGetExportedKeys. */
                    interface $Properties {

                        /** CommandGetExportedKeys catalog */
                        catalog?: (string|null);

                        /** CommandGetExportedKeys dbSchema */
                        dbSchema?: (string|null);

                        /** CommandGetExportedKeys table */
                        table?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a CommandGetExportedKeys. */
                    type $Shape = arrow.flight.protocol.sql.CommandGetExportedKeys.$Properties;
                }

                /**
                 * Properties of a CommandGetImportedKeys.
                 * @deprecated Use arrow.flight.protocol.sql.CommandGetImportedKeys.$Properties instead.
                 */
                interface ICommandGetImportedKeys extends arrow.flight.protocol.sql.CommandGetImportedKeys.$Properties {
                }

                /** Represents a CommandGetImportedKeys. */
                class CommandGetImportedKeys {

                    /**
                     * Constructs a new CommandGetImportedKeys.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.CommandGetImportedKeys.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** CommandGetImportedKeys catalog. */
                    catalog?: (string|null);

                    /** CommandGetImportedKeys dbSchema. */
                    dbSchema?: (string|null);

                    /** CommandGetImportedKeys table. */
                    table: string;

                    /**
                     * Creates a new CommandGetImportedKeys instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandGetImportedKeys instance
                     */
                    static create(properties: arrow.flight.protocol.sql.CommandGetImportedKeys.$Shape): arrow.flight.protocol.sql.CommandGetImportedKeys & arrow.flight.protocol.sql.CommandGetImportedKeys.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.CommandGetImportedKeys.$Properties): arrow.flight.protocol.sql.CommandGetImportedKeys;

                    /**
                     * Encodes the specified CommandGetImportedKeys message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetImportedKeys.verify|verify} messages.
                     * @param message CommandGetImportedKeys message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.CommandGetImportedKeys.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandGetImportedKeys message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetImportedKeys.verify|verify} messages.
                     * @param message CommandGetImportedKeys message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.CommandGetImportedKeys.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandGetImportedKeys message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandGetImportedKeys & arrow.flight.protocol.sql.CommandGetImportedKeys.$Shape} CommandGetImportedKeys
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandGetImportedKeys & arrow.flight.protocol.sql.CommandGetImportedKeys.$Shape;

                    /**
                     * Decodes a CommandGetImportedKeys message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandGetImportedKeys & arrow.flight.protocol.sql.CommandGetImportedKeys.$Shape} CommandGetImportedKeys
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandGetImportedKeys & arrow.flight.protocol.sql.CommandGetImportedKeys.$Shape;

                    /**
                     * Verifies a CommandGetImportedKeys message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandGetImportedKeys message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandGetImportedKeys
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandGetImportedKeys;

                    /**
                     * Creates a plain object from a CommandGetImportedKeys message. Also converts values to other types if specified.
                     * @param message CommandGetImportedKeys
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.CommandGetImportedKeys, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandGetImportedKeys to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for CommandGetImportedKeys
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace CommandGetImportedKeys {

                    /** Properties of a CommandGetImportedKeys. */
                    interface $Properties {

                        /** CommandGetImportedKeys catalog */
                        catalog?: (string|null);

                        /** CommandGetImportedKeys dbSchema */
                        dbSchema?: (string|null);

                        /** CommandGetImportedKeys table */
                        table?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a CommandGetImportedKeys. */
                    type $Shape = arrow.flight.protocol.sql.CommandGetImportedKeys.$Properties;
                }

                /**
                 * Properties of a CommandGetCrossReference.
                 * @deprecated Use arrow.flight.protocol.sql.CommandGetCrossReference.$Properties instead.
                 */
                interface ICommandGetCrossReference extends arrow.flight.protocol.sql.CommandGetCrossReference.$Properties {
                }

                /** Represents a CommandGetCrossReference. */
                class CommandGetCrossReference {

                    /**
                     * Constructs a new CommandGetCrossReference.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.CommandGetCrossReference.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * The catalog name where the parent table is.
                     * An empty string retrieves those without a catalog.
                     * If omitted the catalog name should not be used to narrow the search.
                     */
                    pkCatalog?: (string|null);

                    /**
                     * The Schema name where the parent table is.
                     * An empty string retrieves those without a schema.
                     * If omitted the schema name should not be used to narrow the search.
                     */
                    pkDbSchema?: (string|null);

                    /** The parent table name. It cannot be null. */
                    pkTable: string;

                    /**
                     * The catalog name where the foreign table is.
                     * An empty string retrieves those without a catalog.
                     * If omitted the catalog name should not be used to narrow the search.
                     */
                    fkCatalog?: (string|null);

                    /**
                     * The schema name where the foreign table is.
                     * An empty string retrieves those without a schema.
                     * If omitted the schema name should not be used to narrow the search.
                     */
                    fkDbSchema?: (string|null);

                    /** The foreign table name. It cannot be null. */
                    fkTable: string;

                    /**
                     * Creates a new CommandGetCrossReference instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandGetCrossReference instance
                     */
                    static create(properties: arrow.flight.protocol.sql.CommandGetCrossReference.$Shape): arrow.flight.protocol.sql.CommandGetCrossReference & arrow.flight.protocol.sql.CommandGetCrossReference.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.CommandGetCrossReference.$Properties): arrow.flight.protocol.sql.CommandGetCrossReference;

                    /**
                     * Encodes the specified CommandGetCrossReference message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetCrossReference.verify|verify} messages.
                     * @param message CommandGetCrossReference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.CommandGetCrossReference.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandGetCrossReference message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetCrossReference.verify|verify} messages.
                     * @param message CommandGetCrossReference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.CommandGetCrossReference.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandGetCrossReference message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandGetCrossReference & arrow.flight.protocol.sql.CommandGetCrossReference.$Shape} CommandGetCrossReference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandGetCrossReference & arrow.flight.protocol.sql.CommandGetCrossReference.$Shape;

                    /**
                     * Decodes a CommandGetCrossReference message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandGetCrossReference & arrow.flight.protocol.sql.CommandGetCrossReference.$Shape} CommandGetCrossReference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandGetCrossReference & arrow.flight.protocol.sql.CommandGetCrossReference.$Shape;

                    /**
                     * Verifies a CommandGetCrossReference message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandGetCrossReference message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandGetCrossReference
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandGetCrossReference;

                    /**
                     * Creates a plain object from a CommandGetCrossReference message. Also converts values to other types if specified.
                     * @param message CommandGetCrossReference
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.CommandGetCrossReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandGetCrossReference to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for CommandGetCrossReference
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace CommandGetCrossReference {

                    /** Properties of a CommandGetCrossReference. */
                    interface $Properties {

                        /**
                         * The catalog name where the parent table is.
                         * An empty string retrieves those without a catalog.
                         * If omitted the catalog name should not be used to narrow the search.
                         */
                        pkCatalog?: (string|null);

                        /**
                         * The Schema name where the parent table is.
                         * An empty string retrieves those without a schema.
                         * If omitted the schema name should not be used to narrow the search.
                         */
                        pkDbSchema?: (string|null);

                        /** The parent table name. It cannot be null. */
                        pkTable?: (string|null);

                        /**
                         * The catalog name where the foreign table is.
                         * An empty string retrieves those without a catalog.
                         * If omitted the catalog name should not be used to narrow the search.
                         */
                        fkCatalog?: (string|null);

                        /**
                         * The schema name where the foreign table is.
                         * An empty string retrieves those without a schema.
                         * If omitted the schema name should not be used to narrow the search.
                         */
                        fkDbSchema?: (string|null);

                        /** The foreign table name. It cannot be null. */
                        fkTable?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a CommandGetCrossReference. */
                    type $Shape = arrow.flight.protocol.sql.CommandGetCrossReference.$Properties;
                }

                /**
                 * Properties of an ActionCreatePreparedStatementRequest.
                 * @deprecated Use arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.$Properties instead.
                 */
                interface IActionCreatePreparedStatementRequest extends arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.$Properties {
                }

                /** Represents an ActionCreatePreparedStatementRequest. */
                class ActionCreatePreparedStatementRequest {

                    /**
                     * Constructs a new ActionCreatePreparedStatementRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ActionCreatePreparedStatementRequest query. */
                    query: string;

                    /** ActionCreatePreparedStatementRequest transactionId. */
                    transactionId?: (Uint8Array|null);

                    /**
                     * Creates a new ActionCreatePreparedStatementRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionCreatePreparedStatementRequest instance
                     */
                    static create(properties: arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.$Shape): arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest & arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.$Properties): arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest;

                    /**
                     * Encodes the specified ActionCreatePreparedStatementRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.verify|verify} messages.
                     * @param message ActionCreatePreparedStatementRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionCreatePreparedStatementRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.verify|verify} messages.
                     * @param message ActionCreatePreparedStatementRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionCreatePreparedStatementRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest & arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.$Shape} ActionCreatePreparedStatementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest & arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.$Shape;

                    /**
                     * Decodes an ActionCreatePreparedStatementRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest & arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.$Shape} ActionCreatePreparedStatementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest & arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.$Shape;

                    /**
                     * Verifies an ActionCreatePreparedStatementRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionCreatePreparedStatementRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionCreatePreparedStatementRequest
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest;

                    /**
                     * Creates a plain object from an ActionCreatePreparedStatementRequest message. Also converts values to other types if specified.
                     * @param message ActionCreatePreparedStatementRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionCreatePreparedStatementRequest to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ActionCreatePreparedStatementRequest
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ActionCreatePreparedStatementRequest {

                    /** Properties of an ActionCreatePreparedStatementRequest. */
                    interface $Properties {

                        /** ActionCreatePreparedStatementRequest query */
                        query?: (string|null);

                        /** ActionCreatePreparedStatementRequest transactionId */
                        transactionId?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an ActionCreatePreparedStatementRequest. */
                    type $Shape = arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.$Properties;
                }

                /**
                 * Properties of a SubstraitPlan.
                 * @deprecated Use arrow.flight.protocol.sql.SubstraitPlan.$Properties instead.
                 */
                interface ISubstraitPlan extends arrow.flight.protocol.sql.SubstraitPlan.$Properties {
                }

                /** Represents a SubstraitPlan. */
                class SubstraitPlan {

                    /**
                     * Constructs a new SubstraitPlan.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.SubstraitPlan.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** SubstraitPlan plan. */
                    plan: Uint8Array;

                    /** SubstraitPlan version. */
                    version: string;

                    /**
                     * Creates a new SubstraitPlan instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SubstraitPlan instance
                     */
                    static create(properties: arrow.flight.protocol.sql.SubstraitPlan.$Shape): arrow.flight.protocol.sql.SubstraitPlan & arrow.flight.protocol.sql.SubstraitPlan.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.SubstraitPlan.$Properties): arrow.flight.protocol.sql.SubstraitPlan;

                    /**
                     * Encodes the specified SubstraitPlan message. Does not implicitly {@link arrow.flight.protocol.sql.SubstraitPlan.verify|verify} messages.
                     * @param message SubstraitPlan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.SubstraitPlan.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SubstraitPlan message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.SubstraitPlan.verify|verify} messages.
                     * @param message SubstraitPlan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.SubstraitPlan.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SubstraitPlan message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.SubstraitPlan & arrow.flight.protocol.sql.SubstraitPlan.$Shape} SubstraitPlan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.SubstraitPlan & arrow.flight.protocol.sql.SubstraitPlan.$Shape;

                    /**
                     * Decodes a SubstraitPlan message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.SubstraitPlan & arrow.flight.protocol.sql.SubstraitPlan.$Shape} SubstraitPlan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.SubstraitPlan & arrow.flight.protocol.sql.SubstraitPlan.$Shape;

                    /**
                     * Verifies a SubstraitPlan message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SubstraitPlan message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SubstraitPlan
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.SubstraitPlan;

                    /**
                     * Creates a plain object from a SubstraitPlan message. Also converts values to other types if specified.
                     * @param message SubstraitPlan
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.SubstraitPlan, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SubstraitPlan to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for SubstraitPlan
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace SubstraitPlan {

                    /** Properties of a SubstraitPlan. */
                    interface $Properties {

                        /** SubstraitPlan plan */
                        plan?: (Uint8Array|null);

                        /** SubstraitPlan version */
                        version?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a SubstraitPlan. */
                    type $Shape = arrow.flight.protocol.sql.SubstraitPlan.$Properties;
                }

                /**
                 * Properties of an ActionCreatePreparedSubstraitPlanRequest.
                 * @deprecated Use arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.$Properties instead.
                 */
                interface IActionCreatePreparedSubstraitPlanRequest extends arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.$Properties {
                }

                /** Represents an ActionCreatePreparedSubstraitPlanRequest. */
                class ActionCreatePreparedSubstraitPlanRequest {

                    /**
                     * Constructs a new ActionCreatePreparedSubstraitPlanRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ActionCreatePreparedSubstraitPlanRequest plan. */
                    plan?: (arrow.flight.protocol.sql.SubstraitPlan.$Properties|null);

                    /** ActionCreatePreparedSubstraitPlanRequest transactionId. */
                    transactionId?: (Uint8Array|null);

                    /**
                     * Creates a new ActionCreatePreparedSubstraitPlanRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionCreatePreparedSubstraitPlanRequest instance
                     */
                    static create(properties: arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.$Shape): arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest & arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.$Properties): arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest;

                    /**
                     * Encodes the specified ActionCreatePreparedSubstraitPlanRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.verify|verify} messages.
                     * @param message ActionCreatePreparedSubstraitPlanRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionCreatePreparedSubstraitPlanRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.verify|verify} messages.
                     * @param message ActionCreatePreparedSubstraitPlanRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionCreatePreparedSubstraitPlanRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest & arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.$Shape} ActionCreatePreparedSubstraitPlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest & arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.$Shape;

                    /**
                     * Decodes an ActionCreatePreparedSubstraitPlanRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest & arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.$Shape} ActionCreatePreparedSubstraitPlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest & arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.$Shape;

                    /**
                     * Verifies an ActionCreatePreparedSubstraitPlanRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionCreatePreparedSubstraitPlanRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionCreatePreparedSubstraitPlanRequest
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest;

                    /**
                     * Creates a plain object from an ActionCreatePreparedSubstraitPlanRequest message. Also converts values to other types if specified.
                     * @param message ActionCreatePreparedSubstraitPlanRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionCreatePreparedSubstraitPlanRequest to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ActionCreatePreparedSubstraitPlanRequest
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ActionCreatePreparedSubstraitPlanRequest {

                    /** Properties of an ActionCreatePreparedSubstraitPlanRequest. */
                    interface $Properties {

                        /** ActionCreatePreparedSubstraitPlanRequest plan */
                        plan?: (arrow.flight.protocol.sql.SubstraitPlan.$Properties|null);

                        /** ActionCreatePreparedSubstraitPlanRequest transactionId */
                        transactionId?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an ActionCreatePreparedSubstraitPlanRequest. */
                    type $Shape = arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.$Properties;
                }

                /**
                 * Properties of an ActionCreatePreparedStatementResult.
                 * @deprecated Use arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.$Properties instead.
                 */
                interface IActionCreatePreparedStatementResult extends arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.$Properties {
                }

                /** Represents an ActionCreatePreparedStatementResult. */
                class ActionCreatePreparedStatementResult {

                    /**
                     * Constructs a new ActionCreatePreparedStatementResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ActionCreatePreparedStatementResult preparedStatementHandle. */
                    preparedStatementHandle: Uint8Array;

                    /** ActionCreatePreparedStatementResult datasetSchema. */
                    datasetSchema: Uint8Array;

                    /** ActionCreatePreparedStatementResult parameterSchema. */
                    parameterSchema: Uint8Array;

                    /**
                     * Creates a new ActionCreatePreparedStatementResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionCreatePreparedStatementResult instance
                     */
                    static create(properties: arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.$Shape): arrow.flight.protocol.sql.ActionCreatePreparedStatementResult & arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.$Properties): arrow.flight.protocol.sql.ActionCreatePreparedStatementResult;

                    /**
                     * Encodes the specified ActionCreatePreparedStatementResult message. Does not implicitly {@link arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.verify|verify} messages.
                     * @param message ActionCreatePreparedStatementResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionCreatePreparedStatementResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.verify|verify} messages.
                     * @param message ActionCreatePreparedStatementResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionCreatePreparedStatementResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionCreatePreparedStatementResult & arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.$Shape} ActionCreatePreparedStatementResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionCreatePreparedStatementResult & arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.$Shape;

                    /**
                     * Decodes an ActionCreatePreparedStatementResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionCreatePreparedStatementResult & arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.$Shape} ActionCreatePreparedStatementResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionCreatePreparedStatementResult & arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.$Shape;

                    /**
                     * Verifies an ActionCreatePreparedStatementResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionCreatePreparedStatementResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionCreatePreparedStatementResult
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionCreatePreparedStatementResult;

                    /**
                     * Creates a plain object from an ActionCreatePreparedStatementResult message. Also converts values to other types if specified.
                     * @param message ActionCreatePreparedStatementResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.ActionCreatePreparedStatementResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionCreatePreparedStatementResult to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ActionCreatePreparedStatementResult
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ActionCreatePreparedStatementResult {

                    /** Properties of an ActionCreatePreparedStatementResult. */
                    interface $Properties {

                        /** ActionCreatePreparedStatementResult preparedStatementHandle */
                        preparedStatementHandle?: (Uint8Array|null);

                        /** ActionCreatePreparedStatementResult datasetSchema */
                        datasetSchema?: (Uint8Array|null);

                        /** ActionCreatePreparedStatementResult parameterSchema */
                        parameterSchema?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an ActionCreatePreparedStatementResult. */
                    type $Shape = arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.$Properties;
                }

                /**
                 * Properties of an ActionClosePreparedStatementRequest.
                 * @deprecated Use arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.$Properties instead.
                 */
                interface IActionClosePreparedStatementRequest extends arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.$Properties {
                }

                /** Represents an ActionClosePreparedStatementRequest. */
                class ActionClosePreparedStatementRequest {

                    /**
                     * Constructs a new ActionClosePreparedStatementRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ActionClosePreparedStatementRequest preparedStatementHandle. */
                    preparedStatementHandle: Uint8Array;

                    /**
                     * Creates a new ActionClosePreparedStatementRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionClosePreparedStatementRequest instance
                     */
                    static create(properties: arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.$Shape): arrow.flight.protocol.sql.ActionClosePreparedStatementRequest & arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.$Properties): arrow.flight.protocol.sql.ActionClosePreparedStatementRequest;

                    /**
                     * Encodes the specified ActionClosePreparedStatementRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.verify|verify} messages.
                     * @param message ActionClosePreparedStatementRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionClosePreparedStatementRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.verify|verify} messages.
                     * @param message ActionClosePreparedStatementRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionClosePreparedStatementRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionClosePreparedStatementRequest & arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.$Shape} ActionClosePreparedStatementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionClosePreparedStatementRequest & arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.$Shape;

                    /**
                     * Decodes an ActionClosePreparedStatementRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionClosePreparedStatementRequest & arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.$Shape} ActionClosePreparedStatementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionClosePreparedStatementRequest & arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.$Shape;

                    /**
                     * Verifies an ActionClosePreparedStatementRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionClosePreparedStatementRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionClosePreparedStatementRequest
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionClosePreparedStatementRequest;

                    /**
                     * Creates a plain object from an ActionClosePreparedStatementRequest message. Also converts values to other types if specified.
                     * @param message ActionClosePreparedStatementRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.ActionClosePreparedStatementRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionClosePreparedStatementRequest to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ActionClosePreparedStatementRequest
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ActionClosePreparedStatementRequest {

                    /** Properties of an ActionClosePreparedStatementRequest. */
                    interface $Properties {

                        /** ActionClosePreparedStatementRequest preparedStatementHandle */
                        preparedStatementHandle?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an ActionClosePreparedStatementRequest. */
                    type $Shape = arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.$Properties;
                }

                /**
                 * Properties of an ActionBeginTransactionRequest.
                 * @deprecated Use arrow.flight.protocol.sql.ActionBeginTransactionRequest.$Properties instead.
                 */
                interface IActionBeginTransactionRequest extends arrow.flight.protocol.sql.ActionBeginTransactionRequest.$Properties {
                }

                /** Represents an ActionBeginTransactionRequest. */
                class ActionBeginTransactionRequest {

                    /**
                     * Constructs a new ActionBeginTransactionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ActionBeginTransactionRequest.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /**
                     * Creates a new ActionBeginTransactionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionBeginTransactionRequest instance
                     */
                    static create(properties: arrow.flight.protocol.sql.ActionBeginTransactionRequest.$Shape): arrow.flight.protocol.sql.ActionBeginTransactionRequest & arrow.flight.protocol.sql.ActionBeginTransactionRequest.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.ActionBeginTransactionRequest.$Properties): arrow.flight.protocol.sql.ActionBeginTransactionRequest;

                    /**
                     * Encodes the specified ActionBeginTransactionRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginTransactionRequest.verify|verify} messages.
                     * @param message ActionBeginTransactionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.ActionBeginTransactionRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionBeginTransactionRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginTransactionRequest.verify|verify} messages.
                     * @param message ActionBeginTransactionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.ActionBeginTransactionRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionBeginTransactionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionBeginTransactionRequest & arrow.flight.protocol.sql.ActionBeginTransactionRequest.$Shape} ActionBeginTransactionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionBeginTransactionRequest & arrow.flight.protocol.sql.ActionBeginTransactionRequest.$Shape;

                    /**
                     * Decodes an ActionBeginTransactionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionBeginTransactionRequest & arrow.flight.protocol.sql.ActionBeginTransactionRequest.$Shape} ActionBeginTransactionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionBeginTransactionRequest & arrow.flight.protocol.sql.ActionBeginTransactionRequest.$Shape;

                    /**
                     * Verifies an ActionBeginTransactionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionBeginTransactionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionBeginTransactionRequest
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionBeginTransactionRequest;

                    /**
                     * Creates a plain object from an ActionBeginTransactionRequest message. Also converts values to other types if specified.
                     * @param message ActionBeginTransactionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.ActionBeginTransactionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionBeginTransactionRequest to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ActionBeginTransactionRequest
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ActionBeginTransactionRequest {

                    /** Properties of an ActionBeginTransactionRequest. */
                    interface $Properties {

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an ActionBeginTransactionRequest. */
                    type $Shape = arrow.flight.protocol.sql.ActionBeginTransactionRequest.$Properties;
                }

                /**
                 * Properties of an ActionBeginSavepointRequest.
                 * @deprecated Use arrow.flight.protocol.sql.ActionBeginSavepointRequest.$Properties instead.
                 */
                interface IActionBeginSavepointRequest extends arrow.flight.protocol.sql.ActionBeginSavepointRequest.$Properties {
                }

                /** Represents an ActionBeginSavepointRequest. */
                class ActionBeginSavepointRequest {

                    /**
                     * Constructs a new ActionBeginSavepointRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ActionBeginSavepointRequest.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ActionBeginSavepointRequest transactionId. */
                    transactionId: Uint8Array;

                    /** ActionBeginSavepointRequest name. */
                    name: string;

                    /**
                     * Creates a new ActionBeginSavepointRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionBeginSavepointRequest instance
                     */
                    static create(properties: arrow.flight.protocol.sql.ActionBeginSavepointRequest.$Shape): arrow.flight.protocol.sql.ActionBeginSavepointRequest & arrow.flight.protocol.sql.ActionBeginSavepointRequest.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.ActionBeginSavepointRequest.$Properties): arrow.flight.protocol.sql.ActionBeginSavepointRequest;

                    /**
                     * Encodes the specified ActionBeginSavepointRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginSavepointRequest.verify|verify} messages.
                     * @param message ActionBeginSavepointRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.ActionBeginSavepointRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionBeginSavepointRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginSavepointRequest.verify|verify} messages.
                     * @param message ActionBeginSavepointRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.ActionBeginSavepointRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionBeginSavepointRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionBeginSavepointRequest & arrow.flight.protocol.sql.ActionBeginSavepointRequest.$Shape} ActionBeginSavepointRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionBeginSavepointRequest & arrow.flight.protocol.sql.ActionBeginSavepointRequest.$Shape;

                    /**
                     * Decodes an ActionBeginSavepointRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionBeginSavepointRequest & arrow.flight.protocol.sql.ActionBeginSavepointRequest.$Shape} ActionBeginSavepointRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionBeginSavepointRequest & arrow.flight.protocol.sql.ActionBeginSavepointRequest.$Shape;

                    /**
                     * Verifies an ActionBeginSavepointRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionBeginSavepointRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionBeginSavepointRequest
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionBeginSavepointRequest;

                    /**
                     * Creates a plain object from an ActionBeginSavepointRequest message. Also converts values to other types if specified.
                     * @param message ActionBeginSavepointRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.ActionBeginSavepointRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionBeginSavepointRequest to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ActionBeginSavepointRequest
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ActionBeginSavepointRequest {

                    /** Properties of an ActionBeginSavepointRequest. */
                    interface $Properties {

                        /** ActionBeginSavepointRequest transactionId */
                        transactionId?: (Uint8Array|null);

                        /** ActionBeginSavepointRequest name */
                        name?: (string|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an ActionBeginSavepointRequest. */
                    type $Shape = arrow.flight.protocol.sql.ActionBeginSavepointRequest.$Properties;
                }

                /**
                 * Properties of an ActionBeginTransactionResult.
                 * @deprecated Use arrow.flight.protocol.sql.ActionBeginTransactionResult.$Properties instead.
                 */
                interface IActionBeginTransactionResult extends arrow.flight.protocol.sql.ActionBeginTransactionResult.$Properties {
                }

                /** Represents an ActionBeginTransactionResult. */
                class ActionBeginTransactionResult {

                    /**
                     * Constructs a new ActionBeginTransactionResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ActionBeginTransactionResult.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ActionBeginTransactionResult transactionId. */
                    transactionId: Uint8Array;

                    /**
                     * Creates a new ActionBeginTransactionResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionBeginTransactionResult instance
                     */
                    static create(properties: arrow.flight.protocol.sql.ActionBeginTransactionResult.$Shape): arrow.flight.protocol.sql.ActionBeginTransactionResult & arrow.flight.protocol.sql.ActionBeginTransactionResult.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.ActionBeginTransactionResult.$Properties): arrow.flight.protocol.sql.ActionBeginTransactionResult;

                    /**
                     * Encodes the specified ActionBeginTransactionResult message. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginTransactionResult.verify|verify} messages.
                     * @param message ActionBeginTransactionResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.ActionBeginTransactionResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionBeginTransactionResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginTransactionResult.verify|verify} messages.
                     * @param message ActionBeginTransactionResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.ActionBeginTransactionResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionBeginTransactionResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionBeginTransactionResult & arrow.flight.protocol.sql.ActionBeginTransactionResult.$Shape} ActionBeginTransactionResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionBeginTransactionResult & arrow.flight.protocol.sql.ActionBeginTransactionResult.$Shape;

                    /**
                     * Decodes an ActionBeginTransactionResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionBeginTransactionResult & arrow.flight.protocol.sql.ActionBeginTransactionResult.$Shape} ActionBeginTransactionResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionBeginTransactionResult & arrow.flight.protocol.sql.ActionBeginTransactionResult.$Shape;

                    /**
                     * Verifies an ActionBeginTransactionResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionBeginTransactionResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionBeginTransactionResult
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionBeginTransactionResult;

                    /**
                     * Creates a plain object from an ActionBeginTransactionResult message. Also converts values to other types if specified.
                     * @param message ActionBeginTransactionResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.ActionBeginTransactionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionBeginTransactionResult to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ActionBeginTransactionResult
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ActionBeginTransactionResult {

                    /** Properties of an ActionBeginTransactionResult. */
                    interface $Properties {

                        /** ActionBeginTransactionResult transactionId */
                        transactionId?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an ActionBeginTransactionResult. */
                    type $Shape = arrow.flight.protocol.sql.ActionBeginTransactionResult.$Properties;
                }

                /**
                 * Properties of an ActionBeginSavepointResult.
                 * @deprecated Use arrow.flight.protocol.sql.ActionBeginSavepointResult.$Properties instead.
                 */
                interface IActionBeginSavepointResult extends arrow.flight.protocol.sql.ActionBeginSavepointResult.$Properties {
                }

                /** Represents an ActionBeginSavepointResult. */
                class ActionBeginSavepointResult {

                    /**
                     * Constructs a new ActionBeginSavepointResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ActionBeginSavepointResult.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ActionBeginSavepointResult savepointId. */
                    savepointId: Uint8Array;

                    /**
                     * Creates a new ActionBeginSavepointResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionBeginSavepointResult instance
                     */
                    static create(properties: arrow.flight.protocol.sql.ActionBeginSavepointResult.$Shape): arrow.flight.protocol.sql.ActionBeginSavepointResult & arrow.flight.protocol.sql.ActionBeginSavepointResult.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.ActionBeginSavepointResult.$Properties): arrow.flight.protocol.sql.ActionBeginSavepointResult;

                    /**
                     * Encodes the specified ActionBeginSavepointResult message. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginSavepointResult.verify|verify} messages.
                     * @param message ActionBeginSavepointResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.ActionBeginSavepointResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionBeginSavepointResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginSavepointResult.verify|verify} messages.
                     * @param message ActionBeginSavepointResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.ActionBeginSavepointResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionBeginSavepointResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionBeginSavepointResult & arrow.flight.protocol.sql.ActionBeginSavepointResult.$Shape} ActionBeginSavepointResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionBeginSavepointResult & arrow.flight.protocol.sql.ActionBeginSavepointResult.$Shape;

                    /**
                     * Decodes an ActionBeginSavepointResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionBeginSavepointResult & arrow.flight.protocol.sql.ActionBeginSavepointResult.$Shape} ActionBeginSavepointResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionBeginSavepointResult & arrow.flight.protocol.sql.ActionBeginSavepointResult.$Shape;

                    /**
                     * Verifies an ActionBeginSavepointResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionBeginSavepointResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionBeginSavepointResult
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionBeginSavepointResult;

                    /**
                     * Creates a plain object from an ActionBeginSavepointResult message. Also converts values to other types if specified.
                     * @param message ActionBeginSavepointResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.ActionBeginSavepointResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionBeginSavepointResult to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ActionBeginSavepointResult
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ActionBeginSavepointResult {

                    /** Properties of an ActionBeginSavepointResult. */
                    interface $Properties {

                        /** ActionBeginSavepointResult savepointId */
                        savepointId?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an ActionBeginSavepointResult. */
                    type $Shape = arrow.flight.protocol.sql.ActionBeginSavepointResult.$Properties;
                }

                /**
                 * Properties of an ActionEndTransactionRequest.
                 * @deprecated Use arrow.flight.protocol.sql.ActionEndTransactionRequest.$Properties instead.
                 */
                interface IActionEndTransactionRequest extends arrow.flight.protocol.sql.ActionEndTransactionRequest.$Properties {
                }

                /** Represents an ActionEndTransactionRequest. */
                class ActionEndTransactionRequest {

                    /**
                     * Constructs a new ActionEndTransactionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ActionEndTransactionRequest.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ActionEndTransactionRequest transactionId. */
                    transactionId: Uint8Array;

                    /** ActionEndTransactionRequest action. */
                    action: arrow.flight.protocol.sql.ActionEndTransactionRequest.EndTransaction;

                    /**
                     * Creates a new ActionEndTransactionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionEndTransactionRequest instance
                     */
                    static create(properties: arrow.flight.protocol.sql.ActionEndTransactionRequest.$Shape): arrow.flight.protocol.sql.ActionEndTransactionRequest & arrow.flight.protocol.sql.ActionEndTransactionRequest.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.ActionEndTransactionRequest.$Properties): arrow.flight.protocol.sql.ActionEndTransactionRequest;

                    /**
                     * Encodes the specified ActionEndTransactionRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionEndTransactionRequest.verify|verify} messages.
                     * @param message ActionEndTransactionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.ActionEndTransactionRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionEndTransactionRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionEndTransactionRequest.verify|verify} messages.
                     * @param message ActionEndTransactionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.ActionEndTransactionRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionEndTransactionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionEndTransactionRequest & arrow.flight.protocol.sql.ActionEndTransactionRequest.$Shape} ActionEndTransactionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionEndTransactionRequest & arrow.flight.protocol.sql.ActionEndTransactionRequest.$Shape;

                    /**
                     * Decodes an ActionEndTransactionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionEndTransactionRequest & arrow.flight.protocol.sql.ActionEndTransactionRequest.$Shape} ActionEndTransactionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionEndTransactionRequest & arrow.flight.protocol.sql.ActionEndTransactionRequest.$Shape;

                    /**
                     * Verifies an ActionEndTransactionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionEndTransactionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionEndTransactionRequest
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionEndTransactionRequest;

                    /**
                     * Creates a plain object from an ActionEndTransactionRequest message. Also converts values to other types if specified.
                     * @param message ActionEndTransactionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.ActionEndTransactionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionEndTransactionRequest to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ActionEndTransactionRequest
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ActionEndTransactionRequest {

                    /** Properties of an ActionEndTransactionRequest. */
                    interface $Properties {

                        /** ActionEndTransactionRequest transactionId */
                        transactionId?: (Uint8Array|null);

                        /** ActionEndTransactionRequest action */
                        action?: (arrow.flight.protocol.sql.ActionEndTransactionRequest.EndTransaction|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an ActionEndTransactionRequest. */
                    type $Shape = arrow.flight.protocol.sql.ActionEndTransactionRequest.$Properties;

                    /** EndTransaction enum. */
                    enum EndTransaction {

                        /** END_TRANSACTION_UNSPECIFIED value */
                        END_TRANSACTION_UNSPECIFIED = 0,

                        /** END_TRANSACTION_COMMIT value */
                        END_TRANSACTION_COMMIT = 1,

                        /** END_TRANSACTION_ROLLBACK value */
                        END_TRANSACTION_ROLLBACK = 2
                    }
                }

                /**
                 * Properties of an ActionEndSavepointRequest.
                 * @deprecated Use arrow.flight.protocol.sql.ActionEndSavepointRequest.$Properties instead.
                 */
                interface IActionEndSavepointRequest extends arrow.flight.protocol.sql.ActionEndSavepointRequest.$Properties {
                }

                /** Represents an ActionEndSavepointRequest. */
                class ActionEndSavepointRequest {

                    /**
                     * Constructs a new ActionEndSavepointRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ActionEndSavepointRequest.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ActionEndSavepointRequest savepointId. */
                    savepointId: Uint8Array;

                    /** ActionEndSavepointRequest action. */
                    action: arrow.flight.protocol.sql.ActionEndSavepointRequest.EndSavepoint;

                    /**
                     * Creates a new ActionEndSavepointRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionEndSavepointRequest instance
                     */
                    static create(properties: arrow.flight.protocol.sql.ActionEndSavepointRequest.$Shape): arrow.flight.protocol.sql.ActionEndSavepointRequest & arrow.flight.protocol.sql.ActionEndSavepointRequest.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.ActionEndSavepointRequest.$Properties): arrow.flight.protocol.sql.ActionEndSavepointRequest;

                    /**
                     * Encodes the specified ActionEndSavepointRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionEndSavepointRequest.verify|verify} messages.
                     * @param message ActionEndSavepointRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.ActionEndSavepointRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionEndSavepointRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionEndSavepointRequest.verify|verify} messages.
                     * @param message ActionEndSavepointRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.ActionEndSavepointRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionEndSavepointRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionEndSavepointRequest & arrow.flight.protocol.sql.ActionEndSavepointRequest.$Shape} ActionEndSavepointRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionEndSavepointRequest & arrow.flight.protocol.sql.ActionEndSavepointRequest.$Shape;

                    /**
                     * Decodes an ActionEndSavepointRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionEndSavepointRequest & arrow.flight.protocol.sql.ActionEndSavepointRequest.$Shape} ActionEndSavepointRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionEndSavepointRequest & arrow.flight.protocol.sql.ActionEndSavepointRequest.$Shape;

                    /**
                     * Verifies an ActionEndSavepointRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionEndSavepointRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionEndSavepointRequest
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionEndSavepointRequest;

                    /**
                     * Creates a plain object from an ActionEndSavepointRequest message. Also converts values to other types if specified.
                     * @param message ActionEndSavepointRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.ActionEndSavepointRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionEndSavepointRequest to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ActionEndSavepointRequest
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ActionEndSavepointRequest {

                    /** Properties of an ActionEndSavepointRequest. */
                    interface $Properties {

                        /** ActionEndSavepointRequest savepointId */
                        savepointId?: (Uint8Array|null);

                        /** ActionEndSavepointRequest action */
                        action?: (arrow.flight.protocol.sql.ActionEndSavepointRequest.EndSavepoint|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an ActionEndSavepointRequest. */
                    type $Shape = arrow.flight.protocol.sql.ActionEndSavepointRequest.$Properties;

                    /** EndSavepoint enum. */
                    enum EndSavepoint {

                        /** END_SAVEPOINT_UNSPECIFIED value */
                        END_SAVEPOINT_UNSPECIFIED = 0,

                        /** END_SAVEPOINT_RELEASE value */
                        END_SAVEPOINT_RELEASE = 1,

                        /** END_SAVEPOINT_ROLLBACK value */
                        END_SAVEPOINT_ROLLBACK = 2
                    }
                }

                /**
                 * Properties of a CommandStatementQuery.
                 * @deprecated Use arrow.flight.protocol.sql.CommandStatementQuery.$Properties instead.
                 */
                interface ICommandStatementQuery extends arrow.flight.protocol.sql.CommandStatementQuery.$Properties {
                }

                /** Represents a CommandStatementQuery. */
                class CommandStatementQuery {

                    /**
                     * Constructs a new CommandStatementQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.CommandStatementQuery.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** CommandStatementQuery query. */
                    query: string;

                    /** CommandStatementQuery transactionId. */
                    transactionId?: (Uint8Array|null);

                    /**
                     * Creates a new CommandStatementQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandStatementQuery instance
                     */
                    static create(properties: arrow.flight.protocol.sql.CommandStatementQuery.$Shape): arrow.flight.protocol.sql.CommandStatementQuery & arrow.flight.protocol.sql.CommandStatementQuery.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.CommandStatementQuery.$Properties): arrow.flight.protocol.sql.CommandStatementQuery;

                    /**
                     * Encodes the specified CommandStatementQuery message. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementQuery.verify|verify} messages.
                     * @param message CommandStatementQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.CommandStatementQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandStatementQuery message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementQuery.verify|verify} messages.
                     * @param message CommandStatementQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.CommandStatementQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandStatementQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandStatementQuery & arrow.flight.protocol.sql.CommandStatementQuery.$Shape} CommandStatementQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandStatementQuery & arrow.flight.protocol.sql.CommandStatementQuery.$Shape;

                    /**
                     * Decodes a CommandStatementQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandStatementQuery & arrow.flight.protocol.sql.CommandStatementQuery.$Shape} CommandStatementQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandStatementQuery & arrow.flight.protocol.sql.CommandStatementQuery.$Shape;

                    /**
                     * Verifies a CommandStatementQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandStatementQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandStatementQuery
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandStatementQuery;

                    /**
                     * Creates a plain object from a CommandStatementQuery message. Also converts values to other types if specified.
                     * @param message CommandStatementQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.CommandStatementQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandStatementQuery to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for CommandStatementQuery
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace CommandStatementQuery {

                    /** Properties of a CommandStatementQuery. */
                    interface $Properties {

                        /** CommandStatementQuery query */
                        query?: (string|null);

                        /** CommandStatementQuery transactionId */
                        transactionId?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a CommandStatementQuery. */
                    type $Shape = arrow.flight.protocol.sql.CommandStatementQuery.$Properties;
                }

                /**
                 * Properties of a CommandStatementSubstraitPlan.
                 * @deprecated Use arrow.flight.protocol.sql.CommandStatementSubstraitPlan.$Properties instead.
                 */
                interface ICommandStatementSubstraitPlan extends arrow.flight.protocol.sql.CommandStatementSubstraitPlan.$Properties {
                }

                /** Represents a CommandStatementSubstraitPlan. */
                class CommandStatementSubstraitPlan {

                    /**
                     * Constructs a new CommandStatementSubstraitPlan.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.CommandStatementSubstraitPlan.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** CommandStatementSubstraitPlan plan. */
                    plan?: (arrow.flight.protocol.sql.SubstraitPlan.$Properties|null);

                    /** CommandStatementSubstraitPlan transactionId. */
                    transactionId?: (Uint8Array|null);

                    /**
                     * Creates a new CommandStatementSubstraitPlan instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandStatementSubstraitPlan instance
                     */
                    static create(properties: arrow.flight.protocol.sql.CommandStatementSubstraitPlan.$Shape): arrow.flight.protocol.sql.CommandStatementSubstraitPlan & arrow.flight.protocol.sql.CommandStatementSubstraitPlan.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.CommandStatementSubstraitPlan.$Properties): arrow.flight.protocol.sql.CommandStatementSubstraitPlan;

                    /**
                     * Encodes the specified CommandStatementSubstraitPlan message. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementSubstraitPlan.verify|verify} messages.
                     * @param message CommandStatementSubstraitPlan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.CommandStatementSubstraitPlan.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandStatementSubstraitPlan message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementSubstraitPlan.verify|verify} messages.
                     * @param message CommandStatementSubstraitPlan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.CommandStatementSubstraitPlan.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandStatementSubstraitPlan message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandStatementSubstraitPlan & arrow.flight.protocol.sql.CommandStatementSubstraitPlan.$Shape} CommandStatementSubstraitPlan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandStatementSubstraitPlan & arrow.flight.protocol.sql.CommandStatementSubstraitPlan.$Shape;

                    /**
                     * Decodes a CommandStatementSubstraitPlan message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandStatementSubstraitPlan & arrow.flight.protocol.sql.CommandStatementSubstraitPlan.$Shape} CommandStatementSubstraitPlan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandStatementSubstraitPlan & arrow.flight.protocol.sql.CommandStatementSubstraitPlan.$Shape;

                    /**
                     * Verifies a CommandStatementSubstraitPlan message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandStatementSubstraitPlan message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandStatementSubstraitPlan
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandStatementSubstraitPlan;

                    /**
                     * Creates a plain object from a CommandStatementSubstraitPlan message. Also converts values to other types if specified.
                     * @param message CommandStatementSubstraitPlan
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.CommandStatementSubstraitPlan, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandStatementSubstraitPlan to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for CommandStatementSubstraitPlan
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace CommandStatementSubstraitPlan {

                    /** Properties of a CommandStatementSubstraitPlan. */
                    interface $Properties {

                        /** CommandStatementSubstraitPlan plan */
                        plan?: (arrow.flight.protocol.sql.SubstraitPlan.$Properties|null);

                        /** CommandStatementSubstraitPlan transactionId */
                        transactionId?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a CommandStatementSubstraitPlan. */
                    type $Shape = arrow.flight.protocol.sql.CommandStatementSubstraitPlan.$Properties;
                }

                /**
                 * Properties of a TicketStatementQuery.
                 * @deprecated Use arrow.flight.protocol.sql.TicketStatementQuery.$Properties instead.
                 */
                interface ITicketStatementQuery extends arrow.flight.protocol.sql.TicketStatementQuery.$Properties {
                }

                /**
                 * Represents a ticket resulting from GetFlightInfo with a CommandStatementQuery.
                 * This should be used only once and treated as an opaque value, that is, clients should not attempt to parse this.
                 */
                class TicketStatementQuery {

                    /**
                     * Constructs a new TicketStatementQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.TicketStatementQuery.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** TicketStatementQuery statementHandle. */
                    statementHandle: Uint8Array;

                    /**
                     * Creates a new TicketStatementQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TicketStatementQuery instance
                     */
                    static create(properties: arrow.flight.protocol.sql.TicketStatementQuery.$Shape): arrow.flight.protocol.sql.TicketStatementQuery & arrow.flight.protocol.sql.TicketStatementQuery.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.TicketStatementQuery.$Properties): arrow.flight.protocol.sql.TicketStatementQuery;

                    /**
                     * Encodes the specified TicketStatementQuery message. Does not implicitly {@link arrow.flight.protocol.sql.TicketStatementQuery.verify|verify} messages.
                     * @param message TicketStatementQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.TicketStatementQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TicketStatementQuery message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.TicketStatementQuery.verify|verify} messages.
                     * @param message TicketStatementQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.TicketStatementQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TicketStatementQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.TicketStatementQuery & arrow.flight.protocol.sql.TicketStatementQuery.$Shape} TicketStatementQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.TicketStatementQuery & arrow.flight.protocol.sql.TicketStatementQuery.$Shape;

                    /**
                     * Decodes a TicketStatementQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.TicketStatementQuery & arrow.flight.protocol.sql.TicketStatementQuery.$Shape} TicketStatementQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.TicketStatementQuery & arrow.flight.protocol.sql.TicketStatementQuery.$Shape;

                    /**
                     * Verifies a TicketStatementQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TicketStatementQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TicketStatementQuery
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.TicketStatementQuery;

                    /**
                     * Creates a plain object from a TicketStatementQuery message. Also converts values to other types if specified.
                     * @param message TicketStatementQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.TicketStatementQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TicketStatementQuery to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for TicketStatementQuery
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace TicketStatementQuery {

                    /** Properties of a TicketStatementQuery. */
                    interface $Properties {

                        /** TicketStatementQuery statementHandle */
                        statementHandle?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a TicketStatementQuery. */
                    type $Shape = arrow.flight.protocol.sql.TicketStatementQuery.$Properties;
                }

                /**
                 * Properties of a CommandPreparedStatementQuery.
                 * @deprecated Use arrow.flight.protocol.sql.CommandPreparedStatementQuery.$Properties instead.
                 */
                interface ICommandPreparedStatementQuery extends arrow.flight.protocol.sql.CommandPreparedStatementQuery.$Properties {
                }

                /** Represents a CommandPreparedStatementQuery. */
                class CommandPreparedStatementQuery {

                    /**
                     * Constructs a new CommandPreparedStatementQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.CommandPreparedStatementQuery.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** CommandPreparedStatementQuery preparedStatementHandle. */
                    preparedStatementHandle: Uint8Array;

                    /**
                     * Creates a new CommandPreparedStatementQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandPreparedStatementQuery instance
                     */
                    static create(properties: arrow.flight.protocol.sql.CommandPreparedStatementQuery.$Shape): arrow.flight.protocol.sql.CommandPreparedStatementQuery & arrow.flight.protocol.sql.CommandPreparedStatementQuery.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.CommandPreparedStatementQuery.$Properties): arrow.flight.protocol.sql.CommandPreparedStatementQuery;

                    /**
                     * Encodes the specified CommandPreparedStatementQuery message. Does not implicitly {@link arrow.flight.protocol.sql.CommandPreparedStatementQuery.verify|verify} messages.
                     * @param message CommandPreparedStatementQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.CommandPreparedStatementQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandPreparedStatementQuery message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandPreparedStatementQuery.verify|verify} messages.
                     * @param message CommandPreparedStatementQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.CommandPreparedStatementQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandPreparedStatementQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandPreparedStatementQuery & arrow.flight.protocol.sql.CommandPreparedStatementQuery.$Shape} CommandPreparedStatementQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandPreparedStatementQuery & arrow.flight.protocol.sql.CommandPreparedStatementQuery.$Shape;

                    /**
                     * Decodes a CommandPreparedStatementQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandPreparedStatementQuery & arrow.flight.protocol.sql.CommandPreparedStatementQuery.$Shape} CommandPreparedStatementQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandPreparedStatementQuery & arrow.flight.protocol.sql.CommandPreparedStatementQuery.$Shape;

                    /**
                     * Verifies a CommandPreparedStatementQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandPreparedStatementQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandPreparedStatementQuery
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandPreparedStatementQuery;

                    /**
                     * Creates a plain object from a CommandPreparedStatementQuery message. Also converts values to other types if specified.
                     * @param message CommandPreparedStatementQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.CommandPreparedStatementQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandPreparedStatementQuery to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for CommandPreparedStatementQuery
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace CommandPreparedStatementQuery {

                    /** Properties of a CommandPreparedStatementQuery. */
                    interface $Properties {

                        /** CommandPreparedStatementQuery preparedStatementHandle */
                        preparedStatementHandle?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a CommandPreparedStatementQuery. */
                    type $Shape = arrow.flight.protocol.sql.CommandPreparedStatementQuery.$Properties;
                }

                /**
                 * Properties of a CommandStatementUpdate.
                 * @deprecated Use arrow.flight.protocol.sql.CommandStatementUpdate.$Properties instead.
                 */
                interface ICommandStatementUpdate extends arrow.flight.protocol.sql.CommandStatementUpdate.$Properties {
                }

                /** Represents a CommandStatementUpdate. */
                class CommandStatementUpdate {

                    /**
                     * Constructs a new CommandStatementUpdate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.CommandStatementUpdate.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** CommandStatementUpdate query. */
                    query: string;

                    /** CommandStatementUpdate transactionId. */
                    transactionId?: (Uint8Array|null);

                    /**
                     * Creates a new CommandStatementUpdate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandStatementUpdate instance
                     */
                    static create(properties: arrow.flight.protocol.sql.CommandStatementUpdate.$Shape): arrow.flight.protocol.sql.CommandStatementUpdate & arrow.flight.protocol.sql.CommandStatementUpdate.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.CommandStatementUpdate.$Properties): arrow.flight.protocol.sql.CommandStatementUpdate;

                    /**
                     * Encodes the specified CommandStatementUpdate message. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementUpdate.verify|verify} messages.
                     * @param message CommandStatementUpdate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.CommandStatementUpdate.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandStatementUpdate message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementUpdate.verify|verify} messages.
                     * @param message CommandStatementUpdate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.CommandStatementUpdate.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandStatementUpdate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandStatementUpdate & arrow.flight.protocol.sql.CommandStatementUpdate.$Shape} CommandStatementUpdate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandStatementUpdate & arrow.flight.protocol.sql.CommandStatementUpdate.$Shape;

                    /**
                     * Decodes a CommandStatementUpdate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandStatementUpdate & arrow.flight.protocol.sql.CommandStatementUpdate.$Shape} CommandStatementUpdate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandStatementUpdate & arrow.flight.protocol.sql.CommandStatementUpdate.$Shape;

                    /**
                     * Verifies a CommandStatementUpdate message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandStatementUpdate message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandStatementUpdate
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandStatementUpdate;

                    /**
                     * Creates a plain object from a CommandStatementUpdate message. Also converts values to other types if specified.
                     * @param message CommandStatementUpdate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.CommandStatementUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandStatementUpdate to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for CommandStatementUpdate
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace CommandStatementUpdate {

                    /** Properties of a CommandStatementUpdate. */
                    interface $Properties {

                        /** CommandStatementUpdate query */
                        query?: (string|null);

                        /** CommandStatementUpdate transactionId */
                        transactionId?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a CommandStatementUpdate. */
                    type $Shape = arrow.flight.protocol.sql.CommandStatementUpdate.$Properties;
                }

                /**
                 * Properties of a CommandPreparedStatementUpdate.
                 * @deprecated Use arrow.flight.protocol.sql.CommandPreparedStatementUpdate.$Properties instead.
                 */
                interface ICommandPreparedStatementUpdate extends arrow.flight.protocol.sql.CommandPreparedStatementUpdate.$Properties {
                }

                /** Represents a CommandPreparedStatementUpdate. */
                class CommandPreparedStatementUpdate {

                    /**
                     * Constructs a new CommandPreparedStatementUpdate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.CommandPreparedStatementUpdate.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** CommandPreparedStatementUpdate preparedStatementHandle. */
                    preparedStatementHandle: Uint8Array;

                    /**
                     * Creates a new CommandPreparedStatementUpdate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandPreparedStatementUpdate instance
                     */
                    static create(properties: arrow.flight.protocol.sql.CommandPreparedStatementUpdate.$Shape): arrow.flight.protocol.sql.CommandPreparedStatementUpdate & arrow.flight.protocol.sql.CommandPreparedStatementUpdate.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.CommandPreparedStatementUpdate.$Properties): arrow.flight.protocol.sql.CommandPreparedStatementUpdate;

                    /**
                     * Encodes the specified CommandPreparedStatementUpdate message. Does not implicitly {@link arrow.flight.protocol.sql.CommandPreparedStatementUpdate.verify|verify} messages.
                     * @param message CommandPreparedStatementUpdate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.CommandPreparedStatementUpdate.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandPreparedStatementUpdate message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandPreparedStatementUpdate.verify|verify} messages.
                     * @param message CommandPreparedStatementUpdate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.CommandPreparedStatementUpdate.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandPreparedStatementUpdate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandPreparedStatementUpdate & arrow.flight.protocol.sql.CommandPreparedStatementUpdate.$Shape} CommandPreparedStatementUpdate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandPreparedStatementUpdate & arrow.flight.protocol.sql.CommandPreparedStatementUpdate.$Shape;

                    /**
                     * Decodes a CommandPreparedStatementUpdate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandPreparedStatementUpdate & arrow.flight.protocol.sql.CommandPreparedStatementUpdate.$Shape} CommandPreparedStatementUpdate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandPreparedStatementUpdate & arrow.flight.protocol.sql.CommandPreparedStatementUpdate.$Shape;

                    /**
                     * Verifies a CommandPreparedStatementUpdate message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandPreparedStatementUpdate message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandPreparedStatementUpdate
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandPreparedStatementUpdate;

                    /**
                     * Creates a plain object from a CommandPreparedStatementUpdate message. Also converts values to other types if specified.
                     * @param message CommandPreparedStatementUpdate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.CommandPreparedStatementUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandPreparedStatementUpdate to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for CommandPreparedStatementUpdate
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace CommandPreparedStatementUpdate {

                    /** Properties of a CommandPreparedStatementUpdate. */
                    interface $Properties {

                        /** CommandPreparedStatementUpdate preparedStatementHandle */
                        preparedStatementHandle?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a CommandPreparedStatementUpdate. */
                    type $Shape = arrow.flight.protocol.sql.CommandPreparedStatementUpdate.$Properties;
                }

                /**
                 * Properties of a CommandStatementIngest.
                 * @deprecated Use arrow.flight.protocol.sql.CommandStatementIngest.$Properties instead.
                 */
                interface ICommandStatementIngest extends arrow.flight.protocol.sql.CommandStatementIngest.$Properties {
                }

                /** Represents a CommandStatementIngest. */
                class CommandStatementIngest {

                    /**
                     * Constructs a new CommandStatementIngest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.CommandStatementIngest.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** CommandStatementIngest tableDefinitionOptions. */
                    tableDefinitionOptions?: (arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.$Properties|null);

                    /** CommandStatementIngest table. */
                    table: string;

                    /** CommandStatementIngest schema. */
                    schema?: (string|null);

                    /** CommandStatementIngest catalog. */
                    catalog?: (string|null);

                    /** CommandStatementIngest temporary. */
                    temporary: boolean;

                    /** CommandStatementIngest transactionId. */
                    transactionId?: (Uint8Array|null);

                    /** CommandStatementIngest options. */
                    options: { [k: string]: string };

                    /**
                     * Creates a new CommandStatementIngest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandStatementIngest instance
                     */
                    static create(properties: arrow.flight.protocol.sql.CommandStatementIngest.$Shape): arrow.flight.protocol.sql.CommandStatementIngest & arrow.flight.protocol.sql.CommandStatementIngest.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.CommandStatementIngest.$Properties): arrow.flight.protocol.sql.CommandStatementIngest;

                    /**
                     * Encodes the specified CommandStatementIngest message. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementIngest.verify|verify} messages.
                     * @param message CommandStatementIngest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.CommandStatementIngest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandStatementIngest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementIngest.verify|verify} messages.
                     * @param message CommandStatementIngest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.CommandStatementIngest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandStatementIngest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandStatementIngest & arrow.flight.protocol.sql.CommandStatementIngest.$Shape} CommandStatementIngest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandStatementIngest & arrow.flight.protocol.sql.CommandStatementIngest.$Shape;

                    /**
                     * Decodes a CommandStatementIngest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandStatementIngest & arrow.flight.protocol.sql.CommandStatementIngest.$Shape} CommandStatementIngest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandStatementIngest & arrow.flight.protocol.sql.CommandStatementIngest.$Shape;

                    /**
                     * Verifies a CommandStatementIngest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandStatementIngest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandStatementIngest
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandStatementIngest;

                    /**
                     * Creates a plain object from a CommandStatementIngest message. Also converts values to other types if specified.
                     * @param message CommandStatementIngest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.CommandStatementIngest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandStatementIngest to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for CommandStatementIngest
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace CommandStatementIngest {

                    /** Properties of a CommandStatementIngest. */
                    interface $Properties {

                        /** CommandStatementIngest tableDefinitionOptions */
                        tableDefinitionOptions?: (arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.$Properties|null);

                        /** CommandStatementIngest table */
                        table?: (string|null);

                        /** CommandStatementIngest schema */
                        schema?: (string|null);

                        /** CommandStatementIngest catalog */
                        catalog?: (string|null);

                        /** CommandStatementIngest temporary */
                        temporary?: (boolean|null);

                        /** CommandStatementIngest transactionId */
                        transactionId?: (Uint8Array|null);

                        /** CommandStatementIngest options */
                        options?: ({ [k: string]: string }|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a CommandStatementIngest. */
                    type $Shape = arrow.flight.protocol.sql.CommandStatementIngest.$Properties;

                    /**
                     * Properties of a TableDefinitionOptions.
                     * @deprecated Use arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.$Properties instead.
                     */
                    interface ITableDefinitionOptions extends arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.$Properties {
                    }

                    /** Represents a TableDefinitionOptions. */
                    class TableDefinitionOptions {

                        /**
                         * Constructs a new TableDefinitionOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.$Properties);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];

                        /** TableDefinitionOptions ifNotExist. */
                        ifNotExist: arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableNotExistOption;

                        /** TableDefinitionOptions ifExists. */
                        ifExists: arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableExistsOption;

                        /**
                         * Creates a new TableDefinitionOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TableDefinitionOptions instance
                         */
                        static create(properties: arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.$Shape): arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions & arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.$Shape;
                        static create(properties?: arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.$Properties): arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions;

                        /**
                         * Encodes the specified TableDefinitionOptions message. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.verify|verify} messages.
                         * @param message TableDefinitionOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        static encode(message: arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TableDefinitionOptions message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.verify|verify} messages.
                         * @param message TableDefinitionOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        static encodeDelimited(message: arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TableDefinitionOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns {arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions & arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.$Shape} TableDefinitionOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions & arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.$Shape;

                        /**
                         * Decodes a TableDefinitionOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns {arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions & arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.$Shape} TableDefinitionOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions & arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.$Shape;

                        /**
                         * Verifies a TableDefinitionOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TableDefinitionOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TableDefinitionOptions
                         */
                        static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions;

                        /**
                         * Creates a plain object from a TableDefinitionOptions message. Also converts values to other types if specified.
                         * @param message TableDefinitionOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        static toObject(message: arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TableDefinitionOptions to JSON.
                         * @returns JSON object
                         */
                        toJSON(): { [k: string]: any };

                        /**
                         * Gets the type url for TableDefinitionOptions
                         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                         * @returns The type url
                         */
                        static getTypeUrl(prefix?: string): string;
                    }

                    namespace TableDefinitionOptions {

                        /** Properties of a TableDefinitionOptions. */
                        interface $Properties {

                            /** TableDefinitionOptions ifNotExist */
                            ifNotExist?: (arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableNotExistOption|null);

                            /** TableDefinitionOptions ifExists */
                            ifExists?: (arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableExistsOption|null);

                            /** Unknown fields preserved while decoding when enabled */
                            $unknowns?: Uint8Array[];
                        }

                        /** Shape of a TableDefinitionOptions. */
                        type $Shape = arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.$Properties;

                        /** TableNotExistOption enum. */
                        enum TableNotExistOption {

                            /** TABLE_NOT_EXIST_OPTION_UNSPECIFIED value */
                            TABLE_NOT_EXIST_OPTION_UNSPECIFIED = 0,

                            /** TABLE_NOT_EXIST_OPTION_CREATE value */
                            TABLE_NOT_EXIST_OPTION_CREATE = 1,

                            /** TABLE_NOT_EXIST_OPTION_FAIL value */
                            TABLE_NOT_EXIST_OPTION_FAIL = 2
                        }

                        /** TableExistsOption enum. */
                        enum TableExistsOption {

                            /** TABLE_EXISTS_OPTION_UNSPECIFIED value */
                            TABLE_EXISTS_OPTION_UNSPECIFIED = 0,

                            /** TABLE_EXISTS_OPTION_FAIL value */
                            TABLE_EXISTS_OPTION_FAIL = 1,

                            /** TABLE_EXISTS_OPTION_APPEND value */
                            TABLE_EXISTS_OPTION_APPEND = 2,

                            /** TABLE_EXISTS_OPTION_REPLACE value */
                            TABLE_EXISTS_OPTION_REPLACE = 3
                        }
                    }
                }

                /**
                 * Properties of a DoPutUpdateResult.
                 * @deprecated Use arrow.flight.protocol.sql.DoPutUpdateResult.$Properties instead.
                 */
                interface IDoPutUpdateResult extends arrow.flight.protocol.sql.DoPutUpdateResult.$Properties {
                }

                /** Represents a DoPutUpdateResult. */
                class DoPutUpdateResult {

                    /**
                     * Constructs a new DoPutUpdateResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.DoPutUpdateResult.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** DoPutUpdateResult recordCount. */
                    recordCount: (number|Long);

                    /**
                     * Creates a new DoPutUpdateResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DoPutUpdateResult instance
                     */
                    static create(properties: arrow.flight.protocol.sql.DoPutUpdateResult.$Shape): arrow.flight.protocol.sql.DoPutUpdateResult & arrow.flight.protocol.sql.DoPutUpdateResult.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.DoPutUpdateResult.$Properties): arrow.flight.protocol.sql.DoPutUpdateResult;

                    /**
                     * Encodes the specified DoPutUpdateResult message. Does not implicitly {@link arrow.flight.protocol.sql.DoPutUpdateResult.verify|verify} messages.
                     * @param message DoPutUpdateResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.DoPutUpdateResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DoPutUpdateResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.DoPutUpdateResult.verify|verify} messages.
                     * @param message DoPutUpdateResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.DoPutUpdateResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DoPutUpdateResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.DoPutUpdateResult & arrow.flight.protocol.sql.DoPutUpdateResult.$Shape} DoPutUpdateResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.DoPutUpdateResult & arrow.flight.protocol.sql.DoPutUpdateResult.$Shape;

                    /**
                     * Decodes a DoPutUpdateResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.DoPutUpdateResult & arrow.flight.protocol.sql.DoPutUpdateResult.$Shape} DoPutUpdateResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.DoPutUpdateResult & arrow.flight.protocol.sql.DoPutUpdateResult.$Shape;

                    /**
                     * Verifies a DoPutUpdateResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DoPutUpdateResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DoPutUpdateResult
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.DoPutUpdateResult;

                    /**
                     * Creates a plain object from a DoPutUpdateResult message. Also converts values to other types if specified.
                     * @param message DoPutUpdateResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.DoPutUpdateResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DoPutUpdateResult to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for DoPutUpdateResult
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace DoPutUpdateResult {

                    /** Properties of a DoPutUpdateResult. */
                    interface $Properties {

                        /** DoPutUpdateResult recordCount */
                        recordCount?: (number|Long|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a DoPutUpdateResult. */
                    type $Shape = arrow.flight.protocol.sql.DoPutUpdateResult.$Properties;
                }

                /**
                 * Properties of a DoPutPreparedStatementResult.
                 * @deprecated Use arrow.flight.protocol.sql.DoPutPreparedStatementResult.$Properties instead.
                 */
                interface IDoPutPreparedStatementResult extends arrow.flight.protocol.sql.DoPutPreparedStatementResult.$Properties {
                }

                /** Represents a DoPutPreparedStatementResult. */
                class DoPutPreparedStatementResult {

                    /**
                     * Constructs a new DoPutPreparedStatementResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.DoPutPreparedStatementResult.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** DoPutPreparedStatementResult preparedStatementHandle. */
                    preparedStatementHandle?: (Uint8Array|null);

                    /**
                     * Creates a new DoPutPreparedStatementResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DoPutPreparedStatementResult instance
                     */
                    static create(properties: arrow.flight.protocol.sql.DoPutPreparedStatementResult.$Shape): arrow.flight.protocol.sql.DoPutPreparedStatementResult & arrow.flight.protocol.sql.DoPutPreparedStatementResult.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.DoPutPreparedStatementResult.$Properties): arrow.flight.protocol.sql.DoPutPreparedStatementResult;

                    /**
                     * Encodes the specified DoPutPreparedStatementResult message. Does not implicitly {@link arrow.flight.protocol.sql.DoPutPreparedStatementResult.verify|verify} messages.
                     * @param message DoPutPreparedStatementResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.DoPutPreparedStatementResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DoPutPreparedStatementResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.DoPutPreparedStatementResult.verify|verify} messages.
                     * @param message DoPutPreparedStatementResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.DoPutPreparedStatementResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DoPutPreparedStatementResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.DoPutPreparedStatementResult & arrow.flight.protocol.sql.DoPutPreparedStatementResult.$Shape} DoPutPreparedStatementResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.DoPutPreparedStatementResult & arrow.flight.protocol.sql.DoPutPreparedStatementResult.$Shape;

                    /**
                     * Decodes a DoPutPreparedStatementResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.DoPutPreparedStatementResult & arrow.flight.protocol.sql.DoPutPreparedStatementResult.$Shape} DoPutPreparedStatementResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.DoPutPreparedStatementResult & arrow.flight.protocol.sql.DoPutPreparedStatementResult.$Shape;

                    /**
                     * Verifies a DoPutPreparedStatementResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DoPutPreparedStatementResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DoPutPreparedStatementResult
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.DoPutPreparedStatementResult;

                    /**
                     * Creates a plain object from a DoPutPreparedStatementResult message. Also converts values to other types if specified.
                     * @param message DoPutPreparedStatementResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.DoPutPreparedStatementResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DoPutPreparedStatementResult to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for DoPutPreparedStatementResult
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace DoPutPreparedStatementResult {

                    /** Properties of a DoPutPreparedStatementResult. */
                    interface $Properties {

                        /** DoPutPreparedStatementResult preparedStatementHandle */
                        preparedStatementHandle?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of a DoPutPreparedStatementResult. */
                    type $Shape = arrow.flight.protocol.sql.DoPutPreparedStatementResult.$Properties;
                }

                /**
                 * Properties of an ActionCancelQueryRequest.
                 * @deprecated Use arrow.flight.protocol.sql.ActionCancelQueryRequest.$Properties instead.
                 */
                interface IActionCancelQueryRequest extends arrow.flight.protocol.sql.ActionCancelQueryRequest.$Properties {
                }

                /** Represents an ActionCancelQueryRequest. */
                class ActionCancelQueryRequest {

                    /**
                     * Constructs a new ActionCancelQueryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ActionCancelQueryRequest.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ActionCancelQueryRequest info. */
                    info: Uint8Array;

                    /**
                     * Creates a new ActionCancelQueryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionCancelQueryRequest instance
                     */
                    static create(properties: arrow.flight.protocol.sql.ActionCancelQueryRequest.$Shape): arrow.flight.protocol.sql.ActionCancelQueryRequest & arrow.flight.protocol.sql.ActionCancelQueryRequest.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.ActionCancelQueryRequest.$Properties): arrow.flight.protocol.sql.ActionCancelQueryRequest;

                    /**
                     * Encodes the specified ActionCancelQueryRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionCancelQueryRequest.verify|verify} messages.
                     * @param message ActionCancelQueryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.ActionCancelQueryRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionCancelQueryRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionCancelQueryRequest.verify|verify} messages.
                     * @param message ActionCancelQueryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.ActionCancelQueryRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionCancelQueryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionCancelQueryRequest & arrow.flight.protocol.sql.ActionCancelQueryRequest.$Shape} ActionCancelQueryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionCancelQueryRequest & arrow.flight.protocol.sql.ActionCancelQueryRequest.$Shape;

                    /**
                     * Decodes an ActionCancelQueryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionCancelQueryRequest & arrow.flight.protocol.sql.ActionCancelQueryRequest.$Shape} ActionCancelQueryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionCancelQueryRequest & arrow.flight.protocol.sql.ActionCancelQueryRequest.$Shape;

                    /**
                     * Verifies an ActionCancelQueryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionCancelQueryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionCancelQueryRequest
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionCancelQueryRequest;

                    /**
                     * Creates a plain object from an ActionCancelQueryRequest message. Also converts values to other types if specified.
                     * @param message ActionCancelQueryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.ActionCancelQueryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionCancelQueryRequest to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ActionCancelQueryRequest
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ActionCancelQueryRequest {

                    /** Properties of an ActionCancelQueryRequest. */
                    interface $Properties {

                        /** ActionCancelQueryRequest info */
                        info?: (Uint8Array|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an ActionCancelQueryRequest. */
                    type $Shape = arrow.flight.protocol.sql.ActionCancelQueryRequest.$Properties;
                }

                /**
                 * Properties of an ActionCancelQueryResult.
                 * @deprecated Use arrow.flight.protocol.sql.ActionCancelQueryResult.$Properties instead.
                 */
                interface IActionCancelQueryResult extends arrow.flight.protocol.sql.ActionCancelQueryResult.$Properties {
                }

                /** Represents an ActionCancelQueryResult. */
                class ActionCancelQueryResult {

                    /**
                     * Constructs a new ActionCancelQueryResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ActionCancelQueryResult.$Properties);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];

                    /** ActionCancelQueryResult result. */
                    result: arrow.flight.protocol.sql.ActionCancelQueryResult.CancelResult;

                    /**
                     * Creates a new ActionCancelQueryResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionCancelQueryResult instance
                     */
                    static create(properties: arrow.flight.protocol.sql.ActionCancelQueryResult.$Shape): arrow.flight.protocol.sql.ActionCancelQueryResult & arrow.flight.protocol.sql.ActionCancelQueryResult.$Shape;
                    static create(properties?: arrow.flight.protocol.sql.ActionCancelQueryResult.$Properties): arrow.flight.protocol.sql.ActionCancelQueryResult;

                    /**
                     * Encodes the specified ActionCancelQueryResult message. Does not implicitly {@link arrow.flight.protocol.sql.ActionCancelQueryResult.verify|verify} messages.
                     * @param message ActionCancelQueryResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encode(message: arrow.flight.protocol.sql.ActionCancelQueryResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionCancelQueryResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionCancelQueryResult.verify|verify} messages.
                     * @param message ActionCancelQueryResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    static encodeDelimited(message: arrow.flight.protocol.sql.ActionCancelQueryResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionCancelQueryResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionCancelQueryResult & arrow.flight.protocol.sql.ActionCancelQueryResult.$Shape} ActionCancelQueryResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionCancelQueryResult & arrow.flight.protocol.sql.ActionCancelQueryResult.$Shape;

                    /**
                     * Decodes an ActionCancelQueryResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionCancelQueryResult & arrow.flight.protocol.sql.ActionCancelQueryResult.$Shape} ActionCancelQueryResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionCancelQueryResult & arrow.flight.protocol.sql.ActionCancelQueryResult.$Shape;

                    /**
                     * Verifies an ActionCancelQueryResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionCancelQueryResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionCancelQueryResult
                     */
                    static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionCancelQueryResult;

                    /**
                     * Creates a plain object from an ActionCancelQueryResult message. Also converts values to other types if specified.
                     * @param message ActionCancelQueryResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    static toObject(message: arrow.flight.protocol.sql.ActionCancelQueryResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionCancelQueryResult to JSON.
                     * @returns JSON object
                     */
                    toJSON(): { [k: string]: any };

                    /**
                     * Gets the type url for ActionCancelQueryResult
                     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns The type url
                     */
                    static getTypeUrl(prefix?: string): string;
                }

                namespace ActionCancelQueryResult {

                    /** Properties of an ActionCancelQueryResult. */
                    interface $Properties {

                        /** ActionCancelQueryResult result */
                        result?: (arrow.flight.protocol.sql.ActionCancelQueryResult.CancelResult|null);

                        /** Unknown fields preserved while decoding when enabled */
                        $unknowns?: Uint8Array[];
                    }

                    /** Shape of an ActionCancelQueryResult. */
                    type $Shape = arrow.flight.protocol.sql.ActionCancelQueryResult.$Properties;

                    /** CancelResult enum. */
                    enum CancelResult {

                        /** CANCEL_RESULT_UNSPECIFIED value */
                        CANCEL_RESULT_UNSPECIFIED = 0,

                        /** CANCEL_RESULT_CANCELLED value */
                        CANCEL_RESULT_CANCELLED = 1,

                        /** CANCEL_RESULT_CANCELLING value */
                        CANCEL_RESULT_CANCELLING = 2,

                        /** CANCEL_RESULT_NOT_CANCELLABLE value */
                        CANCEL_RESULT_NOT_CANCELLABLE = 3
                    }
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
         * Properties of a FileDescriptorSet.
         * @deprecated Use google.protobuf.FileDescriptorSet.$Properties instead.
         */
        interface IFileDescriptorSet extends google.protobuf.FileDescriptorSet.$Properties {
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.FileDescriptorSet.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** FileDescriptorSet file. */
            file: google.protobuf.FileDescriptorProto.$Properties[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            static create(properties: google.protobuf.FileDescriptorSet.$Shape): google.protobuf.FileDescriptorSet & google.protobuf.FileDescriptorSet.$Shape;
            static create(properties?: google.protobuf.FileDescriptorSet.$Properties): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.FileDescriptorSet.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.FileDescriptorSet.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorSet & google.protobuf.FileDescriptorSet.$Shape} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet & google.protobuf.FileDescriptorSet.$Shape;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorSet & google.protobuf.FileDescriptorSet.$Shape} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet & google.protobuf.FileDescriptorSet.$Shape;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for FileDescriptorSet
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace FileDescriptorSet {

            /** Properties of a FileDescriptorSet. */
            interface $Properties {

                /** FileDescriptorSet file */
                file?: (google.protobuf.FileDescriptorProto.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a FileDescriptorSet. */
            type $Shape = google.protobuf.FileDescriptorSet.$Properties;
        }

        /** Edition enum. */
        enum Edition {

            /** EDITION_UNKNOWN value */
            EDITION_UNKNOWN = 0,

            /** EDITION_LEGACY value */
            EDITION_LEGACY = 900,

            /** EDITION_PROTO2 value */
            EDITION_PROTO2 = 998,

            /** EDITION_PROTO3 value */
            EDITION_PROTO3 = 999,

            /** EDITION_2023 value */
            EDITION_2023 = 1000,

            /** EDITION_2024 value */
            EDITION_2024 = 1001,

            /** EDITION_2026 value */
            EDITION_2026 = 1002,

            /** EDITION_1_TEST_ONLY value */
            EDITION_1_TEST_ONLY = 1,

            /** EDITION_2_TEST_ONLY value */
            EDITION_2_TEST_ONLY = 2,

            /** EDITION_99997_TEST_ONLY value */
            EDITION_99997_TEST_ONLY = 99997,

            /** EDITION_99998_TEST_ONLY value */
            EDITION_99998_TEST_ONLY = 99998,

            /** EDITION_99999_TEST_ONLY value */
            EDITION_99999_TEST_ONLY = 99999,

            /** EDITION_MAX value */
            EDITION_MAX = 2147483647
        }

        /**
         * Properties of a FileDescriptorProto.
         * @deprecated Use google.protobuf.FileDescriptorProto.$Properties instead.
         */
        interface IFileDescriptorProto extends google.protobuf.FileDescriptorProto.$Properties {
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.FileDescriptorProto.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** FileDescriptorProto name. */
            name: string;

            /** FileDescriptorProto package. */
            package: string;

            /** FileDescriptorProto dependency. */
            dependency: string[];

            /** FileDescriptorProto publicDependency. */
            publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            weakDependency: number[];

            /** FileDescriptorProto optionDependency. */
            optionDependency: string[];

            /** FileDescriptorProto messageType. */
            messageType: google.protobuf.DescriptorProto.$Properties[];

            /** FileDescriptorProto enumType. */
            enumType: google.protobuf.EnumDescriptorProto.$Properties[];

            /** FileDescriptorProto service. */
            service: google.protobuf.ServiceDescriptorProto.$Properties[];

            /** FileDescriptorProto extension. */
            extension: google.protobuf.FieldDescriptorProto.$Properties[];

            /** FileDescriptorProto options. */
            options?: (google.protobuf.FileOptions.$Properties|null);

            /** FileDescriptorProto sourceCodeInfo. */
            sourceCodeInfo?: (google.protobuf.SourceCodeInfo.$Properties|null);

            /** FileDescriptorProto syntax. */
            syntax: string;

            /** FileDescriptorProto edition. */
            edition: google.protobuf.Edition;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            static create(properties: google.protobuf.FileDescriptorProto.$Shape): google.protobuf.FileDescriptorProto & google.protobuf.FileDescriptorProto.$Shape;
            static create(properties?: google.protobuf.FileDescriptorProto.$Properties): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.FileDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.FileDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorProto & google.protobuf.FileDescriptorProto.$Shape} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto & google.protobuf.FileDescriptorProto.$Shape;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorProto & google.protobuf.FileDescriptorProto.$Shape} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto & google.protobuf.FileDescriptorProto.$Shape;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for FileDescriptorProto
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace FileDescriptorProto {

            /** Properties of a FileDescriptorProto. */
            interface $Properties {

                /** FileDescriptorProto name */
                name?: (string|null);

                /** FileDescriptorProto package */
                "package"?: (string|null);

                /** FileDescriptorProto dependency */
                dependency?: (string[]|null);

                /** FileDescriptorProto publicDependency */
                publicDependency?: (number[]|null);

                /** FileDescriptorProto weakDependency */
                weakDependency?: (number[]|null);

                /** FileDescriptorProto optionDependency */
                optionDependency?: (string[]|null);

                /** FileDescriptorProto messageType */
                messageType?: (google.protobuf.DescriptorProto.$Properties[]|null);

                /** FileDescriptorProto enumType */
                enumType?: (google.protobuf.EnumDescriptorProto.$Properties[]|null);

                /** FileDescriptorProto service */
                service?: (google.protobuf.ServiceDescriptorProto.$Properties[]|null);

                /** FileDescriptorProto extension */
                extension?: (google.protobuf.FieldDescriptorProto.$Properties[]|null);

                /** FileDescriptorProto options */
                options?: (google.protobuf.FileOptions.$Properties|null);

                /** FileDescriptorProto sourceCodeInfo */
                sourceCodeInfo?: (google.protobuf.SourceCodeInfo.$Properties|null);

                /** FileDescriptorProto syntax */
                syntax?: (string|null);

                /** FileDescriptorProto edition */
                edition?: (google.protobuf.Edition|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a FileDescriptorProto. */
            type $Shape = google.protobuf.FileDescriptorProto.$Properties;
        }

        /**
         * Properties of a DescriptorProto.
         * @deprecated Use google.protobuf.DescriptorProto.$Properties instead.
         */
        interface IDescriptorProto extends google.protobuf.DescriptorProto.$Properties {
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.DescriptorProto.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** DescriptorProto name. */
            name: string;

            /** DescriptorProto field. */
            field: google.protobuf.FieldDescriptorProto.$Properties[];

            /** DescriptorProto extension. */
            extension: google.protobuf.FieldDescriptorProto.$Properties[];

            /** DescriptorProto nestedType. */
            nestedType: google.protobuf.DescriptorProto.$Properties[];

            /** DescriptorProto enumType. */
            enumType: google.protobuf.EnumDescriptorProto.$Properties[];

            /** DescriptorProto extensionRange. */
            extensionRange: google.protobuf.DescriptorProto.ExtensionRange.$Properties[];

            /** DescriptorProto oneofDecl. */
            oneofDecl: google.protobuf.OneofDescriptorProto.$Properties[];

            /** DescriptorProto options. */
            options?: (google.protobuf.MessageOptions.$Properties|null);

            /** DescriptorProto reservedRange. */
            reservedRange: google.protobuf.DescriptorProto.ReservedRange.$Properties[];

            /** DescriptorProto reservedName. */
            reservedName: string[];

            /** DescriptorProto visibility. */
            visibility: google.protobuf.SymbolVisibility;

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            static create(properties: google.protobuf.DescriptorProto.$Shape): google.protobuf.DescriptorProto & google.protobuf.DescriptorProto.$Shape;
            static create(properties?: google.protobuf.DescriptorProto.$Properties): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.DescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.DescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.DescriptorProto & google.protobuf.DescriptorProto.$Shape} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto & google.protobuf.DescriptorProto.$Shape;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.DescriptorProto & google.protobuf.DescriptorProto.$Shape} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto & google.protobuf.DescriptorProto.$Shape;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for DescriptorProto
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace DescriptorProto {

            /** Properties of a DescriptorProto. */
            interface $Properties {

                /** DescriptorProto name */
                name?: (string|null);

                /** DescriptorProto field */
                field?: (google.protobuf.FieldDescriptorProto.$Properties[]|null);

                /** DescriptorProto extension */
                extension?: (google.protobuf.FieldDescriptorProto.$Properties[]|null);

                /** DescriptorProto nestedType */
                nestedType?: (google.protobuf.DescriptorProto.$Properties[]|null);

                /** DescriptorProto enumType */
                enumType?: (google.protobuf.EnumDescriptorProto.$Properties[]|null);

                /** DescriptorProto extensionRange */
                extensionRange?: (google.protobuf.DescriptorProto.ExtensionRange.$Properties[]|null);

                /** DescriptorProto oneofDecl */
                oneofDecl?: (google.protobuf.OneofDescriptorProto.$Properties[]|null);

                /** DescriptorProto options */
                options?: (google.protobuf.MessageOptions.$Properties|null);

                /** DescriptorProto reservedRange */
                reservedRange?: (google.protobuf.DescriptorProto.ReservedRange.$Properties[]|null);

                /** DescriptorProto reservedName */
                reservedName?: (string[]|null);

                /** DescriptorProto visibility */
                visibility?: (google.protobuf.SymbolVisibility|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a DescriptorProto. */
            type $Shape = google.protobuf.DescriptorProto.$Properties;

            /**
             * Properties of an ExtensionRange.
             * @deprecated Use google.protobuf.DescriptorProto.ExtensionRange.$Properties instead.
             */
            interface IExtensionRange extends google.protobuf.DescriptorProto.ExtensionRange.$Properties {
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.ExtensionRange.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** ExtensionRange start. */
                start: number;

                /** ExtensionRange end. */
                end: number;

                /** ExtensionRange options. */
                options?: (google.protobuf.ExtensionRangeOptions.$Properties|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                static create(properties: google.protobuf.DescriptorProto.ExtensionRange.$Shape): google.protobuf.DescriptorProto.ExtensionRange & google.protobuf.DescriptorProto.ExtensionRange.$Shape;
                static create(properties?: google.protobuf.DescriptorProto.ExtensionRange.$Properties): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: google.protobuf.DescriptorProto.ExtensionRange.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: google.protobuf.DescriptorProto.ExtensionRange.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange & google.protobuf.DescriptorProto.ExtensionRange.$Shape} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange & google.protobuf.DescriptorProto.ExtensionRange.$Shape;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange & google.protobuf.DescriptorProto.ExtensionRange.$Shape} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange & google.protobuf.DescriptorProto.ExtensionRange.$Shape;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for ExtensionRange
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace ExtensionRange {

                /** Properties of an ExtensionRange. */
                interface $Properties {

                    /** ExtensionRange start */
                    start?: (number|null);

                    /** ExtensionRange end */
                    end?: (number|null);

                    /** ExtensionRange options */
                    options?: (google.protobuf.ExtensionRangeOptions.$Properties|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an ExtensionRange. */
                type $Shape = google.protobuf.DescriptorProto.ExtensionRange.$Properties;
            }

            /**
             * Properties of a ReservedRange.
             * @deprecated Use google.protobuf.DescriptorProto.ReservedRange.$Properties instead.
             */
            interface IReservedRange extends google.protobuf.DescriptorProto.ReservedRange.$Properties {
            }

            /** Represents a ReservedRange. */
            class ReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.ReservedRange.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** ReservedRange start. */
                start: number;

                /** ReservedRange end. */
                end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                static create(properties: google.protobuf.DescriptorProto.ReservedRange.$Shape): google.protobuf.DescriptorProto.ReservedRange & google.protobuf.DescriptorProto.ReservedRange.$Shape;
                static create(properties?: google.protobuf.DescriptorProto.ReservedRange.$Properties): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: google.protobuf.DescriptorProto.ReservedRange.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: google.protobuf.DescriptorProto.ReservedRange.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ReservedRange & google.protobuf.DescriptorProto.ReservedRange.$Shape} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange & google.protobuf.DescriptorProto.ReservedRange.$Shape;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ReservedRange & google.protobuf.DescriptorProto.ReservedRange.$Shape} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange & google.protobuf.DescriptorProto.ReservedRange.$Shape;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for ReservedRange
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace ReservedRange {

                /** Properties of a ReservedRange. */
                interface $Properties {

                    /** ReservedRange start */
                    start?: (number|null);

                    /** ReservedRange end */
                    end?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a ReservedRange. */
                type $Shape = google.protobuf.DescriptorProto.ReservedRange.$Properties;
            }
        }

        /**
         * Properties of an ExtensionRangeOptions.
         * @deprecated Use google.protobuf.ExtensionRangeOptions.$Properties instead.
         */
        interface IExtensionRangeOptions extends google.protobuf.ExtensionRangeOptions.$Properties {
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ExtensionRangeOptions.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ExtensionRangeOptions uninterpretedOption. */
            uninterpretedOption: google.protobuf.UninterpretedOption.$Properties[];

            /** ExtensionRangeOptions declaration. */
            declaration: google.protobuf.ExtensionRangeOptions.Declaration.$Properties[];

            /** ExtensionRangeOptions features. */
            features?: (google.protobuf.FeatureSet.$Properties|null);

            /** ExtensionRangeOptions verification. */
            verification: google.protobuf.ExtensionRangeOptions.VerificationState;

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            static create(properties: google.protobuf.ExtensionRangeOptions.$Shape): google.protobuf.ExtensionRangeOptions & google.protobuf.ExtensionRangeOptions.$Shape;
            static create(properties?: google.protobuf.ExtensionRangeOptions.$Properties): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.ExtensionRangeOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.ExtensionRangeOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.ExtensionRangeOptions & google.protobuf.ExtensionRangeOptions.$Shape} ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions & google.protobuf.ExtensionRangeOptions.$Shape;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.ExtensionRangeOptions & google.protobuf.ExtensionRangeOptions.$Shape} ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions & google.protobuf.ExtensionRangeOptions.$Shape;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ExtensionRangeOptions
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ExtensionRangeOptions {

            /** Properties of an ExtensionRangeOptions. */
            interface $Properties {

                /** ExtensionRangeOptions uninterpretedOption */
                uninterpretedOption?: (google.protobuf.UninterpretedOption.$Properties[]|null);

                /** ExtensionRangeOptions declaration */
                declaration?: (google.protobuf.ExtensionRangeOptions.Declaration.$Properties[]|null);

                /** ExtensionRangeOptions features */
                features?: (google.protobuf.FeatureSet.$Properties|null);

                /** ExtensionRangeOptions verification */
                verification?: (google.protobuf.ExtensionRangeOptions.VerificationState|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an ExtensionRangeOptions. */
            type $Shape = google.protobuf.ExtensionRangeOptions.$Properties;

            /**
             * Properties of a Declaration.
             * @deprecated Use google.protobuf.ExtensionRangeOptions.Declaration.$Properties instead.
             */
            interface IDeclaration extends google.protobuf.ExtensionRangeOptions.Declaration.$Properties {
            }

            /** Represents a Declaration. */
            class Declaration {

                /**
                 * Constructs a new Declaration.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.ExtensionRangeOptions.Declaration.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Declaration number. */
                number: number;

                /** Declaration fullName. */
                fullName: string;

                /** Declaration type. */
                type: string;

                /** Declaration reserved. */
                reserved: boolean;

                /** Declaration repeated. */
                repeated: boolean;

                /**
                 * Creates a new Declaration instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Declaration instance
                 */
                static create(properties: google.protobuf.ExtensionRangeOptions.Declaration.$Shape): google.protobuf.ExtensionRangeOptions.Declaration & google.protobuf.ExtensionRangeOptions.Declaration.$Shape;
                static create(properties?: google.protobuf.ExtensionRangeOptions.Declaration.$Properties): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Encodes the specified Declaration message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: google.protobuf.ExtensionRangeOptions.Declaration.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Declaration message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: google.protobuf.ExtensionRangeOptions.Declaration.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Declaration message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {google.protobuf.ExtensionRangeOptions.Declaration & google.protobuf.ExtensionRangeOptions.Declaration.$Shape} Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions.Declaration & google.protobuf.ExtensionRangeOptions.Declaration.$Shape;

                /**
                 * Decodes a Declaration message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {google.protobuf.ExtensionRangeOptions.Declaration & google.protobuf.ExtensionRangeOptions.Declaration.$Shape} Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions.Declaration & google.protobuf.ExtensionRangeOptions.Declaration.$Shape;

                /**
                 * Verifies a Declaration message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Declaration message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Declaration
                 */
                static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Creates a plain object from a Declaration message. Also converts values to other types if specified.
                 * @param message Declaration
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: google.protobuf.ExtensionRangeOptions.Declaration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Declaration to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for Declaration
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Declaration {

                /** Properties of a Declaration. */
                interface $Properties {

                    /** Declaration number */
                    number?: (number|null);

                    /** Declaration fullName */
                    fullName?: (string|null);

                    /** Declaration type */
                    type?: (string|null);

                    /** Declaration reserved */
                    reserved?: (boolean|null);

                    /** Declaration repeated */
                    repeated?: (boolean|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a Declaration. */
                type $Shape = google.protobuf.ExtensionRangeOptions.Declaration.$Properties;
            }

            /** VerificationState enum. */
            enum VerificationState {

                /** DECLARATION value */
                DECLARATION = 0,

                /** UNVERIFIED value */
                UNVERIFIED = 1
            }
        }

        /**
         * Properties of a FieldDescriptorProto.
         * @deprecated Use google.protobuf.FieldDescriptorProto.$Properties instead.
         */
        interface IFieldDescriptorProto extends google.protobuf.FieldDescriptorProto.$Properties {
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.FieldDescriptorProto.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** FieldDescriptorProto name. */
            name: string;

            /** FieldDescriptorProto number. */
            number: number;

            /** FieldDescriptorProto label. */
            label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            typeName: string;

            /** FieldDescriptorProto extendee. */
            extendee: string;

            /** FieldDescriptorProto defaultValue. */
            defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            jsonName: string;

            /** FieldDescriptorProto options. */
            options?: (google.protobuf.FieldOptions.$Properties|null);

            /** FieldDescriptorProto proto3Optional. */
            proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            static create(properties: google.protobuf.FieldDescriptorProto.$Shape): google.protobuf.FieldDescriptorProto & google.protobuf.FieldDescriptorProto.$Shape;
            static create(properties?: google.protobuf.FieldDescriptorProto.$Properties): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.FieldDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.FieldDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.FieldDescriptorProto & google.protobuf.FieldDescriptorProto.$Shape} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto & google.protobuf.FieldDescriptorProto.$Shape;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldDescriptorProto & google.protobuf.FieldDescriptorProto.$Shape} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto & google.protobuf.FieldDescriptorProto.$Shape;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for FieldDescriptorProto
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace FieldDescriptorProto {

            /** Properties of a FieldDescriptorProto. */
            interface $Properties {

                /** FieldDescriptorProto name */
                name?: (string|null);

                /** FieldDescriptorProto number */
                number?: (number|null);

                /** FieldDescriptorProto label */
                label?: (google.protobuf.FieldDescriptorProto.Label|null);

                /** FieldDescriptorProto type */
                type?: (google.protobuf.FieldDescriptorProto.Type|null);

                /** FieldDescriptorProto typeName */
                typeName?: (string|null);

                /** FieldDescriptorProto extendee */
                extendee?: (string|null);

                /** FieldDescriptorProto defaultValue */
                defaultValue?: (string|null);

                /** FieldDescriptorProto oneofIndex */
                oneofIndex?: (number|null);

                /** FieldDescriptorProto jsonName */
                jsonName?: (string|null);

                /** FieldDescriptorProto options */
                options?: (google.protobuf.FieldOptions.$Properties|null);

                /** FieldDescriptorProto proto3Optional */
                proto3Optional?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a FieldDescriptorProto. */
            type $Shape = google.protobuf.FieldDescriptorProto.$Properties;

            /** Type enum. */
            enum Type {

                /** TYPE_DOUBLE value */
                TYPE_DOUBLE = 1,

                /** TYPE_FLOAT value */
                TYPE_FLOAT = 2,

                /** TYPE_INT64 value */
                TYPE_INT64 = 3,

                /** TYPE_UINT64 value */
                TYPE_UINT64 = 4,

                /** TYPE_INT32 value */
                TYPE_INT32 = 5,

                /** TYPE_FIXED64 value */
                TYPE_FIXED64 = 6,

                /** TYPE_FIXED32 value */
                TYPE_FIXED32 = 7,

                /** TYPE_BOOL value */
                TYPE_BOOL = 8,

                /** TYPE_STRING value */
                TYPE_STRING = 9,

                /** TYPE_GROUP value */
                TYPE_GROUP = 10,

                /** TYPE_MESSAGE value */
                TYPE_MESSAGE = 11,

                /** TYPE_BYTES value */
                TYPE_BYTES = 12,

                /** TYPE_UINT32 value */
                TYPE_UINT32 = 13,

                /** TYPE_ENUM value */
                TYPE_ENUM = 14,

                /** TYPE_SFIXED32 value */
                TYPE_SFIXED32 = 15,

                /** TYPE_SFIXED64 value */
                TYPE_SFIXED64 = 16,

                /** TYPE_SINT32 value */
                TYPE_SINT32 = 17,

                /** TYPE_SINT64 value */
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {

                /** LABEL_OPTIONAL value */
                LABEL_OPTIONAL = 1,

                /** LABEL_REPEATED value */
                LABEL_REPEATED = 3,

                /** LABEL_REQUIRED value */
                LABEL_REQUIRED = 2
            }
        }

        /**
         * Properties of a OneofDescriptorProto.
         * @deprecated Use google.protobuf.OneofDescriptorProto.$Properties instead.
         */
        interface IOneofDescriptorProto extends google.protobuf.OneofDescriptorProto.$Properties {
        }

        /** Represents a OneofDescriptorProto. */
        class OneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.OneofDescriptorProto.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** OneofDescriptorProto name. */
            name: string;

            /** OneofDescriptorProto options. */
            options?: (google.protobuf.OneofOptions.$Properties|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            static create(properties: google.protobuf.OneofDescriptorProto.$Shape): google.protobuf.OneofDescriptorProto & google.protobuf.OneofDescriptorProto.$Shape;
            static create(properties?: google.protobuf.OneofDescriptorProto.$Properties): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.OneofDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.OneofDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.OneofDescriptorProto & google.protobuf.OneofDescriptorProto.$Shape} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto & google.protobuf.OneofDescriptorProto.$Shape;

            /**
             * Decodes a OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofDescriptorProto & google.protobuf.OneofDescriptorProto.$Shape} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto & google.protobuf.OneofDescriptorProto.$Shape;

            /**
             * Verifies a OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from a OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for OneofDescriptorProto
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace OneofDescriptorProto {

            /** Properties of a OneofDescriptorProto. */
            interface $Properties {

                /** OneofDescriptorProto name */
                name?: (string|null);

                /** OneofDescriptorProto options */
                options?: (google.protobuf.OneofOptions.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a OneofDescriptorProto. */
            type $Shape = google.protobuf.OneofDescriptorProto.$Properties;
        }

        /**
         * Properties of an EnumDescriptorProto.
         * @deprecated Use google.protobuf.EnumDescriptorProto.$Properties instead.
         */
        interface IEnumDescriptorProto extends google.protobuf.EnumDescriptorProto.$Properties {
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.EnumDescriptorProto.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** EnumDescriptorProto name. */
            name: string;

            /** EnumDescriptorProto value. */
            value: google.protobuf.EnumValueDescriptorProto.$Properties[];

            /** EnumDescriptorProto options. */
            options?: (google.protobuf.EnumOptions.$Properties|null);

            /** EnumDescriptorProto reservedRange. */
            reservedRange: google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties[];

            /** EnumDescriptorProto reservedName. */
            reservedName: string[];

            /** EnumDescriptorProto visibility. */
            visibility: google.protobuf.SymbolVisibility;

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            static create(properties: google.protobuf.EnumDescriptorProto.$Shape): google.protobuf.EnumDescriptorProto & google.protobuf.EnumDescriptorProto.$Shape;
            static create(properties?: google.protobuf.EnumDescriptorProto.$Properties): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.EnumDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.EnumDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.EnumDescriptorProto & google.protobuf.EnumDescriptorProto.$Shape} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto & google.protobuf.EnumDescriptorProto.$Shape;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumDescriptorProto & google.protobuf.EnumDescriptorProto.$Shape} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto & google.protobuf.EnumDescriptorProto.$Shape;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for EnumDescriptorProto
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumDescriptorProto. */
            interface $Properties {

                /** EnumDescriptorProto name */
                name?: (string|null);

                /** EnumDescriptorProto value */
                value?: (google.protobuf.EnumValueDescriptorProto.$Properties[]|null);

                /** EnumDescriptorProto options */
                options?: (google.protobuf.EnumOptions.$Properties|null);

                /** EnumDescriptorProto reservedRange */
                reservedRange?: (google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties[]|null);

                /** EnumDescriptorProto reservedName */
                reservedName?: (string[]|null);

                /** EnumDescriptorProto visibility */
                visibility?: (google.protobuf.SymbolVisibility|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an EnumDescriptorProto. */
            type $Shape = google.protobuf.EnumDescriptorProto.$Properties;

            /**
             * Properties of an EnumReservedRange.
             * @deprecated Use google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties instead.
             */
            interface IEnumReservedRange extends google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties {
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** EnumReservedRange start. */
                start: number;

                /** EnumReservedRange end. */
                end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                static create(properties: google.protobuf.EnumDescriptorProto.EnumReservedRange.$Shape): google.protobuf.EnumDescriptorProto.EnumReservedRange & google.protobuf.EnumDescriptorProto.EnumReservedRange.$Shape;
                static create(properties?: google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange & google.protobuf.EnumDescriptorProto.EnumReservedRange.$Shape} EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange & google.protobuf.EnumDescriptorProto.EnumReservedRange.$Shape;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange & google.protobuf.EnumDescriptorProto.EnumReservedRange.$Shape} EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange & google.protobuf.EnumDescriptorProto.EnumReservedRange.$Shape;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for EnumReservedRange
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace EnumReservedRange {

                /** Properties of an EnumReservedRange. */
                interface $Properties {

                    /** EnumReservedRange start */
                    start?: (number|null);

                    /** EnumReservedRange end */
                    end?: (number|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an EnumReservedRange. */
                type $Shape = google.protobuf.EnumDescriptorProto.EnumReservedRange.$Properties;
            }
        }

        /**
         * Properties of an EnumValueDescriptorProto.
         * @deprecated Use google.protobuf.EnumValueDescriptorProto.$Properties instead.
         */
        interface IEnumValueDescriptorProto extends google.protobuf.EnumValueDescriptorProto.$Properties {
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.EnumValueDescriptorProto.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** EnumValueDescriptorProto name. */
            name: string;

            /** EnumValueDescriptorProto number. */
            number: number;

            /** EnumValueDescriptorProto options. */
            options?: (google.protobuf.EnumValueOptions.$Properties|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            static create(properties: google.protobuf.EnumValueDescriptorProto.$Shape): google.protobuf.EnumValueDescriptorProto & google.protobuf.EnumValueDescriptorProto.$Shape;
            static create(properties?: google.protobuf.EnumValueDescriptorProto.$Properties): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.EnumValueDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.EnumValueDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueDescriptorProto & google.protobuf.EnumValueDescriptorProto.$Shape} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto & google.protobuf.EnumValueDescriptorProto.$Shape;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueDescriptorProto & google.protobuf.EnumValueDescriptorProto.$Shape} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto & google.protobuf.EnumValueDescriptorProto.$Shape;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for EnumValueDescriptorProto
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace EnumValueDescriptorProto {

            /** Properties of an EnumValueDescriptorProto. */
            interface $Properties {

                /** EnumValueDescriptorProto name */
                name?: (string|null);

                /** EnumValueDescriptorProto number */
                number?: (number|null);

                /** EnumValueDescriptorProto options */
                options?: (google.protobuf.EnumValueOptions.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an EnumValueDescriptorProto. */
            type $Shape = google.protobuf.EnumValueDescriptorProto.$Properties;
        }

        /**
         * Properties of a ServiceDescriptorProto.
         * @deprecated Use google.protobuf.ServiceDescriptorProto.$Properties instead.
         */
        interface IServiceDescriptorProto extends google.protobuf.ServiceDescriptorProto.$Properties {
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ServiceDescriptorProto.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ServiceDescriptorProto name. */
            name: string;

            /** ServiceDescriptorProto method. */
            method: google.protobuf.MethodDescriptorProto.$Properties[];

            /** ServiceDescriptorProto options. */
            options?: (google.protobuf.ServiceOptions.$Properties|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            static create(properties: google.protobuf.ServiceDescriptorProto.$Shape): google.protobuf.ServiceDescriptorProto & google.protobuf.ServiceDescriptorProto.$Shape;
            static create(properties?: google.protobuf.ServiceDescriptorProto.$Properties): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.ServiceDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.ServiceDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceDescriptorProto & google.protobuf.ServiceDescriptorProto.$Shape} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto & google.protobuf.ServiceDescriptorProto.$Shape;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceDescriptorProto & google.protobuf.ServiceDescriptorProto.$Shape} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto & google.protobuf.ServiceDescriptorProto.$Shape;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ServiceDescriptorProto
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ServiceDescriptorProto {

            /** Properties of a ServiceDescriptorProto. */
            interface $Properties {

                /** ServiceDescriptorProto name */
                name?: (string|null);

                /** ServiceDescriptorProto method */
                method?: (google.protobuf.MethodDescriptorProto.$Properties[]|null);

                /** ServiceDescriptorProto options */
                options?: (google.protobuf.ServiceOptions.$Properties|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ServiceDescriptorProto. */
            type $Shape = google.protobuf.ServiceDescriptorProto.$Properties;
        }

        /**
         * Properties of a MethodDescriptorProto.
         * @deprecated Use google.protobuf.MethodDescriptorProto.$Properties instead.
         */
        interface IMethodDescriptorProto extends google.protobuf.MethodDescriptorProto.$Properties {
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.MethodDescriptorProto.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** MethodDescriptorProto name. */
            name: string;

            /** MethodDescriptorProto inputType. */
            inputType: string;

            /** MethodDescriptorProto outputType. */
            outputType: string;

            /** MethodDescriptorProto options. */
            options?: (google.protobuf.MethodOptions.$Properties|null);

            /** MethodDescriptorProto clientStreaming. */
            clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            static create(properties: google.protobuf.MethodDescriptorProto.$Shape): google.protobuf.MethodDescriptorProto & google.protobuf.MethodDescriptorProto.$Shape;
            static create(properties?: google.protobuf.MethodDescriptorProto.$Properties): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.MethodDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.MethodDescriptorProto.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.MethodDescriptorProto & google.protobuf.MethodDescriptorProto.$Shape} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto & google.protobuf.MethodDescriptorProto.$Shape;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodDescriptorProto & google.protobuf.MethodDescriptorProto.$Shape} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto & google.protobuf.MethodDescriptorProto.$Shape;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for MethodDescriptorProto
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace MethodDescriptorProto {

            /** Properties of a MethodDescriptorProto. */
            interface $Properties {

                /** MethodDescriptorProto name */
                name?: (string|null);

                /** MethodDescriptorProto inputType */
                inputType?: (string|null);

                /** MethodDescriptorProto outputType */
                outputType?: (string|null);

                /** MethodDescriptorProto options */
                options?: (google.protobuf.MethodOptions.$Properties|null);

                /** MethodDescriptorProto clientStreaming */
                clientStreaming?: (boolean|null);

                /** MethodDescriptorProto serverStreaming */
                serverStreaming?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a MethodDescriptorProto. */
            type $Shape = google.protobuf.MethodDescriptorProto.$Properties;
        }

        /**
         * Properties of a FileOptions.
         * @deprecated Use google.protobuf.FileOptions.$Properties instead.
         */
        interface IFileOptions extends google.protobuf.FileOptions.$Properties {
        }

        /** Represents a FileOptions. */
        class FileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.FileOptions.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** FileOptions javaPackage. */
            javaPackage: string;

            /** FileOptions javaOuterClassname. */
            javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            goPackage: string;

            /** FileOptions ccGenericServices. */
            ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            pyGenericServices: boolean;

            /** FileOptions deprecated. */
            deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            rubyPackage: string;

            /** FileOptions features. */
            features?: (google.protobuf.FeatureSet.$Properties|null);

            /** FileOptions uninterpretedOption. */
            uninterpretedOption: google.protobuf.UninterpretedOption.$Properties[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            static create(properties: google.protobuf.FileOptions.$Shape): google.protobuf.FileOptions & google.protobuf.FileOptions.$Shape;
            static create(properties?: google.protobuf.FileOptions.$Properties): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.FileOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.FileOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.FileOptions & google.protobuf.FileOptions.$Shape} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions & google.protobuf.FileOptions.$Shape;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.FileOptions & google.protobuf.FileOptions.$Shape} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions & google.protobuf.FileOptions.$Shape;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for FileOptions
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace FileOptions {

            /** Properties of a FileOptions. */
            interface $Properties {

                /** FileOptions javaPackage */
                javaPackage?: (string|null);

                /** FileOptions javaOuterClassname */
                javaOuterClassname?: (string|null);

                /** FileOptions javaMultipleFiles */
                javaMultipleFiles?: (boolean|null);

                /** FileOptions javaGenerateEqualsAndHash */
                javaGenerateEqualsAndHash?: (boolean|null);

                /** FileOptions javaStringCheckUtf8 */
                javaStringCheckUtf8?: (boolean|null);

                /** FileOptions optimizeFor */
                optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

                /** FileOptions goPackage */
                goPackage?: (string|null);

                /** FileOptions ccGenericServices */
                ccGenericServices?: (boolean|null);

                /** FileOptions javaGenericServices */
                javaGenericServices?: (boolean|null);

                /** FileOptions pyGenericServices */
                pyGenericServices?: (boolean|null);

                /** FileOptions deprecated */
                deprecated?: (boolean|null);

                /** FileOptions ccEnableArenas */
                ccEnableArenas?: (boolean|null);

                /** FileOptions objcClassPrefix */
                objcClassPrefix?: (string|null);

                /** FileOptions csharpNamespace */
                csharpNamespace?: (string|null);

                /** FileOptions swiftPrefix */
                swiftPrefix?: (string|null);

                /** FileOptions phpClassPrefix */
                phpClassPrefix?: (string|null);

                /** FileOptions phpNamespace */
                phpNamespace?: (string|null);

                /** FileOptions phpMetadataNamespace */
                phpMetadataNamespace?: (string|null);

                /** FileOptions rubyPackage */
                rubyPackage?: (string|null);

                /** FileOptions features */
                features?: (google.protobuf.FeatureSet.$Properties|null);

                /** FileOptions uninterpretedOption */
                uninterpretedOption?: (google.protobuf.UninterpretedOption.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a FileOptions. */
            type $Shape = google.protobuf.FileOptions.$Properties;

            /** OptimizeMode enum. */
            enum OptimizeMode {

                /** SPEED value */
                SPEED = 1,

                /** CODE_SIZE value */
                CODE_SIZE = 2,

                /** LITE_RUNTIME value */
                LITE_RUNTIME = 3
            }
        }

        /**
         * Properties of a MessageOptions.
         * @deprecated Use google.protobuf.MessageOptions.$Properties instead.
         */
        interface IMessageOptions extends google.protobuf.MessageOptions.$Properties {
        }

        /** Represents a MessageOptions. */
        class MessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.MessageOptions.$Properties);

            /** MessageOptions .arrow.flight.protocol.sql.experimental */
            ".arrow.flight.protocol.sql.experimental": boolean;

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** MessageOptions messageSetWireFormat. */
            messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            deprecated: boolean;

            /** MessageOptions mapEntry. */
            mapEntry: boolean;

            /** MessageOptions deprecatedLegacyJsonFieldConflicts. */
            deprecatedLegacyJsonFieldConflicts: boolean;

            /** MessageOptions features. */
            features?: (google.protobuf.FeatureSet.$Properties|null);

            /** MessageOptions uninterpretedOption. */
            uninterpretedOption: google.protobuf.UninterpretedOption.$Properties[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            static create(properties: google.protobuf.MessageOptions.$Shape): google.protobuf.MessageOptions & google.protobuf.MessageOptions.$Shape;
            static create(properties?: google.protobuf.MessageOptions.$Properties): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.MessageOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.MessageOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.MessageOptions & google.protobuf.MessageOptions.$Shape} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions & google.protobuf.MessageOptions.$Shape;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.MessageOptions & google.protobuf.MessageOptions.$Shape} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions & google.protobuf.MessageOptions.$Shape;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for MessageOptions
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace MessageOptions {

            /** Properties of a MessageOptions. */
            interface $Properties {

                /** MessageOptions messageSetWireFormat */
                messageSetWireFormat?: (boolean|null);

                /** MessageOptions noStandardDescriptorAccessor */
                noStandardDescriptorAccessor?: (boolean|null);

                /** MessageOptions deprecated */
                deprecated?: (boolean|null);

                /** MessageOptions mapEntry */
                mapEntry?: (boolean|null);

                /** MessageOptions deprecatedLegacyJsonFieldConflicts */
                deprecatedLegacyJsonFieldConflicts?: (boolean|null);

                /** MessageOptions features */
                features?: (google.protobuf.FeatureSet.$Properties|null);

                /** MessageOptions uninterpretedOption */
                uninterpretedOption?: (google.protobuf.UninterpretedOption.$Properties[]|null);

                /** MessageOptions .arrow.flight.protocol.sql.experimental */
                ".arrow.flight.protocol.sql.experimental"?: (boolean|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a MessageOptions. */
            type $Shape = google.protobuf.MessageOptions.$Properties;
        }

        /**
         * Properties of a FieldOptions.
         * @deprecated Use google.protobuf.FieldOptions.$Properties instead.
         */
        interface IFieldOptions extends google.protobuf.FieldOptions.$Properties {
        }

        /** Represents a FieldOptions. */
        class FieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.FieldOptions.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** FieldOptions ctype. */
            ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            packed: boolean;

            /** FieldOptions jstype. */
            jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            lazy: boolean;

            /** FieldOptions unverifiedLazy. */
            unverifiedLazy: boolean;

            /** FieldOptions deprecated. */
            deprecated: boolean;

            /** FieldOptions weak. */
            weak: boolean;

            /** FieldOptions debugRedact. */
            debugRedact: boolean;

            /** FieldOptions retention. */
            retention: google.protobuf.FieldOptions.OptionRetention;

            /** FieldOptions targets. */
            targets: google.protobuf.FieldOptions.OptionTargetType[];

            /** FieldOptions editionDefaults. */
            editionDefaults: google.protobuf.FieldOptions.EditionDefault.$Properties[];

            /** FieldOptions features. */
            features?: (google.protobuf.FeatureSet.$Properties|null);

            /** FieldOptions featureSupport. */
            featureSupport?: (google.protobuf.FieldOptions.FeatureSupport.$Properties|null);

            /** FieldOptions uninterpretedOption. */
            uninterpretedOption: google.protobuf.UninterpretedOption.$Properties[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            static create(properties: google.protobuf.FieldOptions.$Shape): google.protobuf.FieldOptions & google.protobuf.FieldOptions.$Shape;
            static create(properties?: google.protobuf.FieldOptions.$Properties): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.FieldOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.FieldOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.FieldOptions & google.protobuf.FieldOptions.$Shape} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions & google.protobuf.FieldOptions.$Shape;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldOptions & google.protobuf.FieldOptions.$Shape} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions & google.protobuf.FieldOptions.$Shape;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for FieldOptions
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace FieldOptions {

            /** Properties of a FieldOptions. */
            interface $Properties {

                /** FieldOptions ctype */
                ctype?: (google.protobuf.FieldOptions.CType|null);

                /** FieldOptions packed */
                packed?: (boolean|null);

                /** FieldOptions jstype */
                jstype?: (google.protobuf.FieldOptions.JSType|null);

                /** FieldOptions lazy */
                lazy?: (boolean|null);

                /** FieldOptions unverifiedLazy */
                unverifiedLazy?: (boolean|null);

                /** FieldOptions deprecated */
                deprecated?: (boolean|null);

                /** FieldOptions weak */
                weak?: (boolean|null);

                /** FieldOptions debugRedact */
                debugRedact?: (boolean|null);

                /** FieldOptions retention */
                retention?: (google.protobuf.FieldOptions.OptionRetention|null);

                /** FieldOptions targets */
                targets?: (google.protobuf.FieldOptions.OptionTargetType[]|null);

                /** FieldOptions editionDefaults */
                editionDefaults?: (google.protobuf.FieldOptions.EditionDefault.$Properties[]|null);

                /** FieldOptions features */
                features?: (google.protobuf.FeatureSet.$Properties|null);

                /** FieldOptions featureSupport */
                featureSupport?: (google.protobuf.FieldOptions.FeatureSupport.$Properties|null);

                /** FieldOptions uninterpretedOption */
                uninterpretedOption?: (google.protobuf.UninterpretedOption.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a FieldOptions. */
            type $Shape = google.protobuf.FieldOptions.$Properties;

            /** CType enum. */
            enum CType {

                /** STRING value */
                STRING = 0,

                /** CORD value */
                CORD = 1,

                /** STRING_PIECE value */
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {

                /** JS_NORMAL value */
                JS_NORMAL = 0,

                /** JS_STRING value */
                JS_STRING = 1,

                /** JS_NUMBER value */
                JS_NUMBER = 2
            }

            /** OptionRetention enum. */
            enum OptionRetention {

                /** RETENTION_UNKNOWN value */
                RETENTION_UNKNOWN = 0,

                /** RETENTION_RUNTIME value */
                RETENTION_RUNTIME = 1,

                /** RETENTION_SOURCE value */
                RETENTION_SOURCE = 2
            }

            /** OptionTargetType enum. */
            enum OptionTargetType {

                /** TARGET_TYPE_UNKNOWN value */
                TARGET_TYPE_UNKNOWN = 0,

                /** TARGET_TYPE_FILE value */
                TARGET_TYPE_FILE = 1,

                /** TARGET_TYPE_EXTENSION_RANGE value */
                TARGET_TYPE_EXTENSION_RANGE = 2,

                /** TARGET_TYPE_MESSAGE value */
                TARGET_TYPE_MESSAGE = 3,

                /** TARGET_TYPE_FIELD value */
                TARGET_TYPE_FIELD = 4,

                /** TARGET_TYPE_ONEOF value */
                TARGET_TYPE_ONEOF = 5,

                /** TARGET_TYPE_ENUM value */
                TARGET_TYPE_ENUM = 6,

                /** TARGET_TYPE_ENUM_ENTRY value */
                TARGET_TYPE_ENUM_ENTRY = 7,

                /** TARGET_TYPE_SERVICE value */
                TARGET_TYPE_SERVICE = 8,

                /** TARGET_TYPE_METHOD value */
                TARGET_TYPE_METHOD = 9
            }

            /**
             * Properties of an EditionDefault.
             * @deprecated Use google.protobuf.FieldOptions.EditionDefault.$Properties instead.
             */
            interface IEditionDefault extends google.protobuf.FieldOptions.EditionDefault.$Properties {
            }

            /** Represents an EditionDefault. */
            class EditionDefault {

                /**
                 * Constructs a new EditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.EditionDefault.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** EditionDefault edition. */
                edition: google.protobuf.Edition;

                /** EditionDefault value. */
                value: string;

                /**
                 * Creates a new EditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EditionDefault instance
                 */
                static create(properties: google.protobuf.FieldOptions.EditionDefault.$Shape): google.protobuf.FieldOptions.EditionDefault & google.protobuf.FieldOptions.EditionDefault.$Shape;
                static create(properties?: google.protobuf.FieldOptions.EditionDefault.$Properties): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Encodes the specified EditionDefault message. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: google.protobuf.FieldOptions.EditionDefault.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: google.protobuf.FieldOptions.EditionDefault.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldOptions.EditionDefault & google.protobuf.FieldOptions.EditionDefault.$Shape} EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.EditionDefault & google.protobuf.FieldOptions.EditionDefault.$Shape;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldOptions.EditionDefault & google.protobuf.FieldOptions.EditionDefault.$Shape} EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.EditionDefault & google.protobuf.FieldOptions.EditionDefault.$Shape;

                /**
                 * Verifies an EditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EditionDefault
                 */
                static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Creates a plain object from an EditionDefault message. Also converts values to other types if specified.
                 * @param message EditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: google.protobuf.FieldOptions.EditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EditionDefault to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for EditionDefault
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace EditionDefault {

                /** Properties of an EditionDefault. */
                interface $Properties {

                    /** EditionDefault edition */
                    edition?: (google.protobuf.Edition|null);

                    /** EditionDefault value */
                    value?: (string|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an EditionDefault. */
                type $Shape = google.protobuf.FieldOptions.EditionDefault.$Properties;
            }

            /**
             * Properties of a FeatureSupport.
             * @deprecated Use google.protobuf.FieldOptions.FeatureSupport.$Properties instead.
             */
            interface IFeatureSupport extends google.protobuf.FieldOptions.FeatureSupport.$Properties {
            }

            /** Represents a FeatureSupport. */
            class FeatureSupport {

                /**
                 * Constructs a new FeatureSupport.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.FeatureSupport.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** FeatureSupport editionIntroduced. */
                editionIntroduced: google.protobuf.Edition;

                /** FeatureSupport editionDeprecated. */
                editionDeprecated: google.protobuf.Edition;

                /** FeatureSupport deprecationWarning. */
                deprecationWarning: string;

                /** FeatureSupport editionRemoved. */
                editionRemoved: google.protobuf.Edition;

                /**
                 * Creates a new FeatureSupport instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSupport instance
                 */
                static create(properties: google.protobuf.FieldOptions.FeatureSupport.$Shape): google.protobuf.FieldOptions.FeatureSupport & google.protobuf.FieldOptions.FeatureSupport.$Shape;
                static create(properties?: google.protobuf.FieldOptions.FeatureSupport.$Properties): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Encodes the specified FeatureSupport message. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: google.protobuf.FieldOptions.FeatureSupport.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSupport message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: google.protobuf.FieldOptions.FeatureSupport.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldOptions.FeatureSupport & google.protobuf.FieldOptions.FeatureSupport.$Shape} FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.FeatureSupport & google.protobuf.FieldOptions.FeatureSupport.$Shape;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldOptions.FeatureSupport & google.protobuf.FieldOptions.FeatureSupport.$Shape} FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.FeatureSupport & google.protobuf.FieldOptions.FeatureSupport.$Shape;

                /**
                 * Verifies a FeatureSupport message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSupport message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSupport
                 */
                static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Creates a plain object from a FeatureSupport message. Also converts values to other types if specified.
                 * @param message FeatureSupport
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: google.protobuf.FieldOptions.FeatureSupport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSupport to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for FeatureSupport
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace FeatureSupport {

                /** Properties of a FeatureSupport. */
                interface $Properties {

                    /** FeatureSupport editionIntroduced */
                    editionIntroduced?: (google.protobuf.Edition|null);

                    /** FeatureSupport editionDeprecated */
                    editionDeprecated?: (google.protobuf.Edition|null);

                    /** FeatureSupport deprecationWarning */
                    deprecationWarning?: (string|null);

                    /** FeatureSupport editionRemoved */
                    editionRemoved?: (google.protobuf.Edition|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a FeatureSupport. */
                type $Shape = google.protobuf.FieldOptions.FeatureSupport.$Properties;
            }
        }

        /**
         * Properties of a OneofOptions.
         * @deprecated Use google.protobuf.OneofOptions.$Properties instead.
         */
        interface IOneofOptions extends google.protobuf.OneofOptions.$Properties {
        }

        /** Represents a OneofOptions. */
        class OneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.OneofOptions.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** OneofOptions features. */
            features?: (google.protobuf.FeatureSet.$Properties|null);

            /** OneofOptions uninterpretedOption. */
            uninterpretedOption: google.protobuf.UninterpretedOption.$Properties[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            static create(properties: google.protobuf.OneofOptions.$Shape): google.protobuf.OneofOptions & google.protobuf.OneofOptions.$Shape;
            static create(properties?: google.protobuf.OneofOptions.$Properties): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.OneofOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.OneofOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.OneofOptions & google.protobuf.OneofOptions.$Shape} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions & google.protobuf.OneofOptions.$Shape;

            /**
             * Decodes a OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofOptions & google.protobuf.OneofOptions.$Shape} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions & google.protobuf.OneofOptions.$Shape;

            /**
             * Verifies a OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from a OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for OneofOptions
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace OneofOptions {

            /** Properties of a OneofOptions. */
            interface $Properties {

                /** OneofOptions features */
                features?: (google.protobuf.FeatureSet.$Properties|null);

                /** OneofOptions uninterpretedOption */
                uninterpretedOption?: (google.protobuf.UninterpretedOption.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a OneofOptions. */
            type $Shape = google.protobuf.OneofOptions.$Properties;
        }

        /**
         * Properties of an EnumOptions.
         * @deprecated Use google.protobuf.EnumOptions.$Properties instead.
         */
        interface IEnumOptions extends google.protobuf.EnumOptions.$Properties {
        }

        /** Represents an EnumOptions. */
        class EnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.EnumOptions.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** EnumOptions allowAlias. */
            allowAlias: boolean;

            /** EnumOptions deprecated. */
            deprecated: boolean;

            /** EnumOptions deprecatedLegacyJsonFieldConflicts. */
            deprecatedLegacyJsonFieldConflicts: boolean;

            /** EnumOptions features. */
            features?: (google.protobuf.FeatureSet.$Properties|null);

            /** EnumOptions uninterpretedOption. */
            uninterpretedOption: google.protobuf.UninterpretedOption.$Properties[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            static create(properties: google.protobuf.EnumOptions.$Shape): google.protobuf.EnumOptions & google.protobuf.EnumOptions.$Shape;
            static create(properties?: google.protobuf.EnumOptions.$Properties): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.EnumOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.EnumOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.EnumOptions & google.protobuf.EnumOptions.$Shape} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions & google.protobuf.EnumOptions.$Shape;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumOptions & google.protobuf.EnumOptions.$Shape} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions & google.protobuf.EnumOptions.$Shape;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for EnumOptions
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace EnumOptions {

            /** Properties of an EnumOptions. */
            interface $Properties {

                /** EnumOptions allowAlias */
                allowAlias?: (boolean|null);

                /** EnumOptions deprecated */
                deprecated?: (boolean|null);

                /** EnumOptions deprecatedLegacyJsonFieldConflicts */
                deprecatedLegacyJsonFieldConflicts?: (boolean|null);

                /** EnumOptions features */
                features?: (google.protobuf.FeatureSet.$Properties|null);

                /** EnumOptions uninterpretedOption */
                uninterpretedOption?: (google.protobuf.UninterpretedOption.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an EnumOptions. */
            type $Shape = google.protobuf.EnumOptions.$Properties;
        }

        /**
         * Properties of an EnumValueOptions.
         * @deprecated Use google.protobuf.EnumValueOptions.$Properties instead.
         */
        interface IEnumValueOptions extends google.protobuf.EnumValueOptions.$Properties {
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.EnumValueOptions.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** EnumValueOptions deprecated. */
            deprecated: boolean;

            /** EnumValueOptions features. */
            features?: (google.protobuf.FeatureSet.$Properties|null);

            /** EnumValueOptions debugRedact. */
            debugRedact: boolean;

            /** EnumValueOptions featureSupport. */
            featureSupport?: (google.protobuf.FieldOptions.FeatureSupport.$Properties|null);

            /** EnumValueOptions uninterpretedOption. */
            uninterpretedOption: google.protobuf.UninterpretedOption.$Properties[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            static create(properties: google.protobuf.EnumValueOptions.$Shape): google.protobuf.EnumValueOptions & google.protobuf.EnumValueOptions.$Shape;
            static create(properties?: google.protobuf.EnumValueOptions.$Properties): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.EnumValueOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.EnumValueOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueOptions & google.protobuf.EnumValueOptions.$Shape} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions & google.protobuf.EnumValueOptions.$Shape;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueOptions & google.protobuf.EnumValueOptions.$Shape} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions & google.protobuf.EnumValueOptions.$Shape;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for EnumValueOptions
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace EnumValueOptions {

            /** Properties of an EnumValueOptions. */
            interface $Properties {

                /** EnumValueOptions deprecated */
                deprecated?: (boolean|null);

                /** EnumValueOptions features */
                features?: (google.protobuf.FeatureSet.$Properties|null);

                /** EnumValueOptions debugRedact */
                debugRedact?: (boolean|null);

                /** EnumValueOptions featureSupport */
                featureSupport?: (google.protobuf.FieldOptions.FeatureSupport.$Properties|null);

                /** EnumValueOptions uninterpretedOption */
                uninterpretedOption?: (google.protobuf.UninterpretedOption.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an EnumValueOptions. */
            type $Shape = google.protobuf.EnumValueOptions.$Properties;
        }

        /**
         * Properties of a ServiceOptions.
         * @deprecated Use google.protobuf.ServiceOptions.$Properties instead.
         */
        interface IServiceOptions extends google.protobuf.ServiceOptions.$Properties {
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ServiceOptions.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** ServiceOptions features. */
            features?: (google.protobuf.FeatureSet.$Properties|null);

            /** ServiceOptions deprecated. */
            deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            uninterpretedOption: google.protobuf.UninterpretedOption.$Properties[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            static create(properties: google.protobuf.ServiceOptions.$Shape): google.protobuf.ServiceOptions & google.protobuf.ServiceOptions.$Shape;
            static create(properties?: google.protobuf.ServiceOptions.$Properties): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.ServiceOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.ServiceOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceOptions & google.protobuf.ServiceOptions.$Shape} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions & google.protobuf.ServiceOptions.$Shape;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceOptions & google.protobuf.ServiceOptions.$Shape} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions & google.protobuf.ServiceOptions.$Shape;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ServiceOptions
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ServiceOptions {

            /** Properties of a ServiceOptions. */
            interface $Properties {

                /** ServiceOptions features */
                features?: (google.protobuf.FeatureSet.$Properties|null);

                /** ServiceOptions deprecated */
                deprecated?: (boolean|null);

                /** ServiceOptions uninterpretedOption */
                uninterpretedOption?: (google.protobuf.UninterpretedOption.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ServiceOptions. */
            type $Shape = google.protobuf.ServiceOptions.$Properties;
        }

        /**
         * Properties of a MethodOptions.
         * @deprecated Use google.protobuf.MethodOptions.$Properties instead.
         */
        interface IMethodOptions extends google.protobuf.MethodOptions.$Properties {
        }

        /** Represents a MethodOptions. */
        class MethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.MethodOptions.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** MethodOptions deprecated. */
            deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            idempotencyLevel: google.protobuf.MethodOptions.IdempotencyLevel;

            /** MethodOptions features. */
            features?: (google.protobuf.FeatureSet.$Properties|null);

            /** MethodOptions uninterpretedOption. */
            uninterpretedOption: google.protobuf.UninterpretedOption.$Properties[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            static create(properties: google.protobuf.MethodOptions.$Shape): google.protobuf.MethodOptions & google.protobuf.MethodOptions.$Shape;
            static create(properties?: google.protobuf.MethodOptions.$Properties): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.MethodOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.MethodOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.MethodOptions & google.protobuf.MethodOptions.$Shape} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions & google.protobuf.MethodOptions.$Shape;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodOptions & google.protobuf.MethodOptions.$Shape} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions & google.protobuf.MethodOptions.$Shape;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for MethodOptions
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace MethodOptions {

            /** Properties of a MethodOptions. */
            interface $Properties {

                /** MethodOptions deprecated */
                deprecated?: (boolean|null);

                /** MethodOptions idempotencyLevel */
                idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|null);

                /** MethodOptions features */
                features?: (google.protobuf.FeatureSet.$Properties|null);

                /** MethodOptions uninterpretedOption */
                uninterpretedOption?: (google.protobuf.UninterpretedOption.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a MethodOptions. */
            type $Shape = google.protobuf.MethodOptions.$Properties;

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {

                /** IDEMPOTENCY_UNKNOWN value */
                IDEMPOTENCY_UNKNOWN = 0,

                /** NO_SIDE_EFFECTS value */
                NO_SIDE_EFFECTS = 1,

                /** IDEMPOTENT value */
                IDEMPOTENT = 2
            }
        }

        /**
         * Properties of an UninterpretedOption.
         * @deprecated Use google.protobuf.UninterpretedOption.$Properties instead.
         */
        interface IUninterpretedOption extends google.protobuf.UninterpretedOption.$Properties {
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.UninterpretedOption.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** UninterpretedOption name. */
            name: google.protobuf.UninterpretedOption.NamePart.$Properties[];

            /** UninterpretedOption identifierValue. */
            identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            doubleValue: number;

            /** UninterpretedOption stringValue. */
            stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            static create(properties: google.protobuf.UninterpretedOption.$Shape): google.protobuf.UninterpretedOption & google.protobuf.UninterpretedOption.$Shape;
            static create(properties?: google.protobuf.UninterpretedOption.$Properties): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.UninterpretedOption.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.UninterpretedOption.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.UninterpretedOption & google.protobuf.UninterpretedOption.$Shape} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption & google.protobuf.UninterpretedOption.$Shape;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.UninterpretedOption & google.protobuf.UninterpretedOption.$Shape} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption & google.protobuf.UninterpretedOption.$Shape;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for UninterpretedOption
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace UninterpretedOption {

            /** Properties of an UninterpretedOption. */
            interface $Properties {

                /** UninterpretedOption name */
                name?: (google.protobuf.UninterpretedOption.NamePart.$Properties[]|null);

                /** UninterpretedOption identifierValue */
                identifierValue?: (string|null);

                /** UninterpretedOption positiveIntValue */
                positiveIntValue?: (number|Long|null);

                /** UninterpretedOption negativeIntValue */
                negativeIntValue?: (number|Long|null);

                /** UninterpretedOption doubleValue */
                doubleValue?: (number|null);

                /** UninterpretedOption stringValue */
                stringValue?: (Uint8Array|null);

                /** UninterpretedOption aggregateValue */
                aggregateValue?: (string|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an UninterpretedOption. */
            type $Shape = google.protobuf.UninterpretedOption.$Properties;

            /**
             * Properties of a NamePart.
             * @deprecated Use google.protobuf.UninterpretedOption.NamePart.$Properties instead.
             */
            interface INamePart extends google.protobuf.UninterpretedOption.NamePart.$Properties {
            }

            /** Represents a NamePart. */
            class NamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.NamePart.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** NamePart namePart. */
                namePart: string;

                /** NamePart isExtension. */
                isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                static create(properties: google.protobuf.UninterpretedOption.NamePart.$Shape): google.protobuf.UninterpretedOption.NamePart & google.protobuf.UninterpretedOption.NamePart.$Shape;
                static create(properties?: google.protobuf.UninterpretedOption.NamePart.$Properties): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: google.protobuf.UninterpretedOption.NamePart.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: google.protobuf.UninterpretedOption.NamePart.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption.NamePart & google.protobuf.UninterpretedOption.NamePart.$Shape} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart & google.protobuf.UninterpretedOption.NamePart.$Shape;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption.NamePart & google.protobuf.UninterpretedOption.NamePart.$Shape} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart & google.protobuf.UninterpretedOption.NamePart.$Shape;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for NamePart
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace NamePart {

                /** Properties of a NamePart. */
                interface $Properties {

                    /** NamePart namePart */
                    namePart: string;

                    /** NamePart isExtension */
                    isExtension: boolean;

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a NamePart. */
                type $Shape = google.protobuf.UninterpretedOption.NamePart.$Properties;
            }
        }

        /**
         * Properties of a FeatureSet.
         * @deprecated Use google.protobuf.FeatureSet.$Properties instead.
         */
        interface IFeatureSet extends google.protobuf.FeatureSet.$Properties {
        }

        /** Represents a FeatureSet. */
        class FeatureSet {

            /**
             * Constructs a new FeatureSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.FeatureSet.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** FeatureSet fieldPresence. */
            fieldPresence: google.protobuf.FeatureSet.FieldPresence;

            /** FeatureSet enumType. */
            enumType: google.protobuf.FeatureSet.EnumType;

            /** FeatureSet repeatedFieldEncoding. */
            repeatedFieldEncoding: google.protobuf.FeatureSet.RepeatedFieldEncoding;

            /** FeatureSet utf8Validation. */
            utf8Validation: google.protobuf.FeatureSet.Utf8Validation;

            /** FeatureSet messageEncoding. */
            messageEncoding: google.protobuf.FeatureSet.MessageEncoding;

            /** FeatureSet jsonFormat. */
            jsonFormat: google.protobuf.FeatureSet.JsonFormat;

            /** FeatureSet enforceNamingStyle. */
            enforceNamingStyle: google.protobuf.FeatureSet.EnforceNamingStyle;

            /** FeatureSet defaultSymbolVisibility. */
            defaultSymbolVisibility: google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility;

            /** FeatureSet enforceProtoLimits. */
            enforceProtoLimits: google.protobuf.FeatureSet.ProtoLimitsFeature.EnforceProtoLimits;

            /**
             * Creates a new FeatureSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSet instance
             */
            static create(properties: google.protobuf.FeatureSet.$Shape): google.protobuf.FeatureSet & google.protobuf.FeatureSet.$Shape;
            static create(properties?: google.protobuf.FeatureSet.$Properties): google.protobuf.FeatureSet;

            /**
             * Encodes the specified FeatureSet message. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.FeatureSet.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSet message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.FeatureSet.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.FeatureSet & google.protobuf.FeatureSet.$Shape} FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet & google.protobuf.FeatureSet.$Shape;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.FeatureSet & google.protobuf.FeatureSet.$Shape} FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet & google.protobuf.FeatureSet.$Shape;

            /**
             * Verifies a FeatureSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSet
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet;

            /**
             * Creates a plain object from a FeatureSet message. Also converts values to other types if specified.
             * @param message FeatureSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.FeatureSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSet to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for FeatureSet
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace FeatureSet {

            /** Properties of a FeatureSet. */
            interface $Properties {

                /** FeatureSet fieldPresence */
                fieldPresence?: (google.protobuf.FeatureSet.FieldPresence|null);

                /** FeatureSet enumType */
                enumType?: (google.protobuf.FeatureSet.EnumType|null);

                /** FeatureSet repeatedFieldEncoding */
                repeatedFieldEncoding?: (google.protobuf.FeatureSet.RepeatedFieldEncoding|null);

                /** FeatureSet utf8Validation */
                utf8Validation?: (google.protobuf.FeatureSet.Utf8Validation|null);

                /** FeatureSet messageEncoding */
                messageEncoding?: (google.protobuf.FeatureSet.MessageEncoding|null);

                /** FeatureSet jsonFormat */
                jsonFormat?: (google.protobuf.FeatureSet.JsonFormat|null);

                /** FeatureSet enforceNamingStyle */
                enforceNamingStyle?: (google.protobuf.FeatureSet.EnforceNamingStyle|null);

                /** FeatureSet defaultSymbolVisibility */
                defaultSymbolVisibility?: (google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|null);

                /** FeatureSet enforceProtoLimits */
                enforceProtoLimits?: (google.protobuf.FeatureSet.ProtoLimitsFeature.EnforceProtoLimits|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a FeatureSet. */
            type $Shape = google.protobuf.FeatureSet.$Properties;

            /** FieldPresence enum. */
            enum FieldPresence {

                /** FIELD_PRESENCE_UNKNOWN value */
                FIELD_PRESENCE_UNKNOWN = 0,

                /** EXPLICIT value */
                EXPLICIT = 1,

                /** IMPLICIT value */
                IMPLICIT = 2,

                /** LEGACY_REQUIRED value */
                LEGACY_REQUIRED = 3
            }

            /** EnumType enum. */
            enum EnumType {

                /** ENUM_TYPE_UNKNOWN value */
                ENUM_TYPE_UNKNOWN = 0,

                /** OPEN value */
                OPEN = 1,

                /** CLOSED value */
                CLOSED = 2
            }

            /** RepeatedFieldEncoding enum. */
            enum RepeatedFieldEncoding {

                /** REPEATED_FIELD_ENCODING_UNKNOWN value */
                REPEATED_FIELD_ENCODING_UNKNOWN = 0,

                /** PACKED value */
                PACKED = 1,

                /** EXPANDED value */
                EXPANDED = 2
            }

            /** Utf8Validation enum. */
            enum Utf8Validation {

                /** UTF8_VALIDATION_UNKNOWN value */
                UTF8_VALIDATION_UNKNOWN = 0,

                /** VERIFY value */
                VERIFY = 2,

                /** NONE value */
                NONE = 3
            }

            /** MessageEncoding enum. */
            enum MessageEncoding {

                /** MESSAGE_ENCODING_UNKNOWN value */
                MESSAGE_ENCODING_UNKNOWN = 0,

                /** LENGTH_PREFIXED value */
                LENGTH_PREFIXED = 1,

                /** DELIMITED value */
                DELIMITED = 2
            }

            /** JsonFormat enum. */
            enum JsonFormat {

                /** JSON_FORMAT_UNKNOWN value */
                JSON_FORMAT_UNKNOWN = 0,

                /** ALLOW value */
                ALLOW = 1,

                /** LEGACY_BEST_EFFORT value */
                LEGACY_BEST_EFFORT = 2
            }

            /** EnforceNamingStyle enum. */
            enum EnforceNamingStyle {

                /** ENFORCE_NAMING_STYLE_UNKNOWN value */
                ENFORCE_NAMING_STYLE_UNKNOWN = 0,

                /** STYLE2024 value */
                STYLE2024 = 1,

                /** STYLE_LEGACY value */
                STYLE_LEGACY = 2,

                /** STYLE2026 value */
                STYLE2026 = 3
            }

            /**
             * Properties of a VisibilityFeature.
             * @deprecated Use google.protobuf.FeatureSet.VisibilityFeature.$Properties instead.
             */
            interface IVisibilityFeature extends google.protobuf.FeatureSet.VisibilityFeature.$Properties {
            }

            /** Represents a VisibilityFeature. */
            class VisibilityFeature {

                /**
                 * Constructs a new VisibilityFeature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSet.VisibilityFeature.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /**
                 * Creates a new VisibilityFeature instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VisibilityFeature instance
                 */
                static create(properties: google.protobuf.FeatureSet.VisibilityFeature.$Shape): google.protobuf.FeatureSet.VisibilityFeature & google.protobuf.FeatureSet.VisibilityFeature.$Shape;
                static create(properties?: google.protobuf.FeatureSet.VisibilityFeature.$Properties): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Encodes the specified VisibilityFeature message. Does not implicitly {@link google.protobuf.FeatureSet.VisibilityFeature.verify|verify} messages.
                 * @param message VisibilityFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: google.protobuf.FeatureSet.VisibilityFeature.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VisibilityFeature message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.VisibilityFeature.verify|verify} messages.
                 * @param message VisibilityFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: google.protobuf.FeatureSet.VisibilityFeature.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VisibilityFeature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {google.protobuf.FeatureSet.VisibilityFeature & google.protobuf.FeatureSet.VisibilityFeature.$Shape} VisibilityFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet.VisibilityFeature & google.protobuf.FeatureSet.VisibilityFeature.$Shape;

                /**
                 * Decodes a VisibilityFeature message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {google.protobuf.FeatureSet.VisibilityFeature & google.protobuf.FeatureSet.VisibilityFeature.$Shape} VisibilityFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet.VisibilityFeature & google.protobuf.FeatureSet.VisibilityFeature.$Shape;

                /**
                 * Verifies a VisibilityFeature message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VisibilityFeature message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VisibilityFeature
                 */
                static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Creates a plain object from a VisibilityFeature message. Also converts values to other types if specified.
                 * @param message VisibilityFeature
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: google.protobuf.FeatureSet.VisibilityFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VisibilityFeature to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for VisibilityFeature
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace VisibilityFeature {

                /** Properties of a VisibilityFeature. */
                interface $Properties {

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a VisibilityFeature. */
                type $Shape = google.protobuf.FeatureSet.VisibilityFeature.$Properties;

                /** DefaultSymbolVisibility enum. */
                enum DefaultSymbolVisibility {

                    /** DEFAULT_SYMBOL_VISIBILITY_UNKNOWN value */
                    DEFAULT_SYMBOL_VISIBILITY_UNKNOWN = 0,

                    /** EXPORT_ALL value */
                    EXPORT_ALL = 1,

                    /** EXPORT_TOP_LEVEL value */
                    EXPORT_TOP_LEVEL = 2,

                    /** LOCAL_ALL value */
                    LOCAL_ALL = 3,

                    /** STRICT value */
                    STRICT = 4
                }
            }

            /**
             * Properties of a ProtoLimitsFeature.
             * @deprecated Use google.protobuf.FeatureSet.ProtoLimitsFeature.$Properties instead.
             */
            interface IProtoLimitsFeature extends google.protobuf.FeatureSet.ProtoLimitsFeature.$Properties {
            }

            /** Represents a ProtoLimitsFeature. */
            class ProtoLimitsFeature {

                /**
                 * Constructs a new ProtoLimitsFeature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSet.ProtoLimitsFeature.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /**
                 * Creates a new ProtoLimitsFeature instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProtoLimitsFeature instance
                 */
                static create(properties: google.protobuf.FeatureSet.ProtoLimitsFeature.$Shape): google.protobuf.FeatureSet.ProtoLimitsFeature & google.protobuf.FeatureSet.ProtoLimitsFeature.$Shape;
                static create(properties?: google.protobuf.FeatureSet.ProtoLimitsFeature.$Properties): google.protobuf.FeatureSet.ProtoLimitsFeature;

                /**
                 * Encodes the specified ProtoLimitsFeature message. Does not implicitly {@link google.protobuf.FeatureSet.ProtoLimitsFeature.verify|verify} messages.
                 * @param message ProtoLimitsFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: google.protobuf.FeatureSet.ProtoLimitsFeature.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProtoLimitsFeature message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.ProtoLimitsFeature.verify|verify} messages.
                 * @param message ProtoLimitsFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: google.protobuf.FeatureSet.ProtoLimitsFeature.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProtoLimitsFeature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {google.protobuf.FeatureSet.ProtoLimitsFeature & google.protobuf.FeatureSet.ProtoLimitsFeature.$Shape} ProtoLimitsFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet.ProtoLimitsFeature & google.protobuf.FeatureSet.ProtoLimitsFeature.$Shape;

                /**
                 * Decodes a ProtoLimitsFeature message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {google.protobuf.FeatureSet.ProtoLimitsFeature & google.protobuf.FeatureSet.ProtoLimitsFeature.$Shape} ProtoLimitsFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet.ProtoLimitsFeature & google.protobuf.FeatureSet.ProtoLimitsFeature.$Shape;

                /**
                 * Verifies a ProtoLimitsFeature message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProtoLimitsFeature message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProtoLimitsFeature
                 */
                static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet.ProtoLimitsFeature;

                /**
                 * Creates a plain object from a ProtoLimitsFeature message. Also converts values to other types if specified.
                 * @param message ProtoLimitsFeature
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: google.protobuf.FeatureSet.ProtoLimitsFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProtoLimitsFeature to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for ProtoLimitsFeature
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace ProtoLimitsFeature {

                /** Properties of a ProtoLimitsFeature. */
                interface $Properties {

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a ProtoLimitsFeature. */
                type $Shape = google.protobuf.FeatureSet.ProtoLimitsFeature.$Properties;

                /** EnforceProtoLimits enum. */
                enum EnforceProtoLimits {

                    /** PROTO_LIMITS_UNKNOWN value */
                    PROTO_LIMITS_UNKNOWN = 0,

                    /** LEGACY_NO_EXPLICIT_LIMITS value */
                    LEGACY_NO_EXPLICIT_LIMITS = 1,

                    /** PROTO_LIMITS2026 value */
                    PROTO_LIMITS2026 = 2
                }
            }
        }

        /**
         * Properties of a FeatureSetDefaults.
         * @deprecated Use google.protobuf.FeatureSetDefaults.$Properties instead.
         */
        interface IFeatureSetDefaults extends google.protobuf.FeatureSetDefaults.$Properties {
        }

        /** Represents a FeatureSetDefaults. */
        class FeatureSetDefaults {

            /**
             * Constructs a new FeatureSetDefaults.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.FeatureSetDefaults.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** FeatureSetDefaults defaults. */
            defaults: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties[];

            /** FeatureSetDefaults minimumEdition. */
            minimumEdition: google.protobuf.Edition;

            /** FeatureSetDefaults maximumEdition. */
            maximumEdition: google.protobuf.Edition;

            /**
             * Creates a new FeatureSetDefaults instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSetDefaults instance
             */
            static create(properties: google.protobuf.FeatureSetDefaults.$Shape): google.protobuf.FeatureSetDefaults & google.protobuf.FeatureSetDefaults.$Shape;
            static create(properties?: google.protobuf.FeatureSetDefaults.$Properties): google.protobuf.FeatureSetDefaults;

            /**
             * Encodes the specified FeatureSetDefaults message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.FeatureSetDefaults.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSetDefaults message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.FeatureSetDefaults.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.FeatureSetDefaults & google.protobuf.FeatureSetDefaults.$Shape} FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults & google.protobuf.FeatureSetDefaults.$Shape;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.FeatureSetDefaults & google.protobuf.FeatureSetDefaults.$Shape} FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults & google.protobuf.FeatureSetDefaults.$Shape;

            /**
             * Verifies a FeatureSetDefaults message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSetDefaults message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSetDefaults
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults;

            /**
             * Creates a plain object from a FeatureSetDefaults message. Also converts values to other types if specified.
             * @param message FeatureSetDefaults
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.FeatureSetDefaults, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSetDefaults to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for FeatureSetDefaults
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace FeatureSetDefaults {

            /** Properties of a FeatureSetDefaults. */
            interface $Properties {

                /** FeatureSetDefaults defaults */
                defaults?: (google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties[]|null);

                /** FeatureSetDefaults minimumEdition */
                minimumEdition?: (google.protobuf.Edition|null);

                /** FeatureSetDefaults maximumEdition */
                maximumEdition?: (google.protobuf.Edition|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a FeatureSetDefaults. */
            type $Shape = google.protobuf.FeatureSetDefaults.$Properties;

            /**
             * Properties of a FeatureSetEditionDefault.
             * @deprecated Use google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties instead.
             */
            interface IFeatureSetEditionDefault extends google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties {
            }

            /** Represents a FeatureSetEditionDefault. */
            class FeatureSetEditionDefault {

                /**
                 * Constructs a new FeatureSetEditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** FeatureSetEditionDefault edition. */
                edition: google.protobuf.Edition;

                /** FeatureSetEditionDefault overridableFeatures. */
                overridableFeatures?: (google.protobuf.FeatureSet.$Properties|null);

                /** FeatureSetEditionDefault fixedFeatures. */
                fixedFeatures?: (google.protobuf.FeatureSet.$Properties|null);

                /**
                 * Creates a new FeatureSetEditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSetEditionDefault instance
                 */
                static create(properties: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Shape): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault & google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Shape;
                static create(properties?: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Encodes the specified FeatureSetEditionDefault message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSetEditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault & google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Shape} FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault & google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Shape;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault & google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Shape} FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault & google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Shape;

                /**
                 * Verifies a FeatureSetEditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSetEditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSetEditionDefault
                 */
                static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Creates a plain object from a FeatureSetEditionDefault message. Also converts values to other types if specified.
                 * @param message FeatureSetEditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSetEditionDefault to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for FeatureSetEditionDefault
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace FeatureSetEditionDefault {

                /** Properties of a FeatureSetEditionDefault. */
                interface $Properties {

                    /** FeatureSetEditionDefault edition */
                    edition?: (google.protobuf.Edition|null);

                    /** FeatureSetEditionDefault overridableFeatures */
                    overridableFeatures?: (google.protobuf.FeatureSet.$Properties|null);

                    /** FeatureSetEditionDefault fixedFeatures */
                    fixedFeatures?: (google.protobuf.FeatureSet.$Properties|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a FeatureSetEditionDefault. */
                type $Shape = google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.$Properties;
            }
        }

        /**
         * Properties of a SourceCodeInfo.
         * @deprecated Use google.protobuf.SourceCodeInfo.$Properties instead.
         */
        interface ISourceCodeInfo extends google.protobuf.SourceCodeInfo.$Properties {
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.SourceCodeInfo.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** SourceCodeInfo location. */
            location: google.protobuf.SourceCodeInfo.Location.$Properties[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            static create(properties: google.protobuf.SourceCodeInfo.$Shape): google.protobuf.SourceCodeInfo & google.protobuf.SourceCodeInfo.$Shape;
            static create(properties?: google.protobuf.SourceCodeInfo.$Properties): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.SourceCodeInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.SourceCodeInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.SourceCodeInfo & google.protobuf.SourceCodeInfo.$Shape} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo & google.protobuf.SourceCodeInfo.$Shape;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.SourceCodeInfo & google.protobuf.SourceCodeInfo.$Shape} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo & google.protobuf.SourceCodeInfo.$Shape;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SourceCodeInfo
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SourceCodeInfo {

            /** Properties of a SourceCodeInfo. */
            interface $Properties {

                /** SourceCodeInfo location */
                location?: (google.protobuf.SourceCodeInfo.Location.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SourceCodeInfo. */
            type $Shape = google.protobuf.SourceCodeInfo.$Properties;

            /**
             * Properties of a Location.
             * @deprecated Use google.protobuf.SourceCodeInfo.Location.$Properties instead.
             */
            interface ILocation extends google.protobuf.SourceCodeInfo.Location.$Properties {
            }

            /** Represents a Location. */
            class Location {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.Location.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Location path. */
                path: number[];

                /** Location span. */
                span: number[];

                /** Location leadingComments. */
                leadingComments: string;

                /** Location trailingComments. */
                trailingComments: string;

                /** Location leadingDetachedComments. */
                leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                static create(properties: google.protobuf.SourceCodeInfo.Location.$Shape): google.protobuf.SourceCodeInfo.Location & google.protobuf.SourceCodeInfo.Location.$Shape;
                static create(properties?: google.protobuf.SourceCodeInfo.Location.$Properties): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: google.protobuf.SourceCodeInfo.Location.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: google.protobuf.SourceCodeInfo.Location.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo.Location & google.protobuf.SourceCodeInfo.Location.$Shape} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location & google.protobuf.SourceCodeInfo.Location.$Shape;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo.Location & google.protobuf.SourceCodeInfo.Location.$Shape} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location & google.protobuf.SourceCodeInfo.Location.$Shape;

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
                static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Location path */
                    path?: (number[]|null);

                    /** Location span */
                    span?: (number[]|null);

                    /** Location leadingComments */
                    leadingComments?: (string|null);

                    /** Location trailingComments */
                    trailingComments?: (string|null);

                    /** Location leadingDetachedComments */
                    leadingDetachedComments?: (string[]|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of a Location. */
                type $Shape = google.protobuf.SourceCodeInfo.Location.$Properties;
            }
        }

        /**
         * Properties of a GeneratedCodeInfo.
         * @deprecated Use google.protobuf.GeneratedCodeInfo.$Properties instead.
         */
        interface IGeneratedCodeInfo extends google.protobuf.GeneratedCodeInfo.$Properties {
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.GeneratedCodeInfo.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** GeneratedCodeInfo annotation. */
            annotation: google.protobuf.GeneratedCodeInfo.Annotation.$Properties[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            static create(properties: google.protobuf.GeneratedCodeInfo.$Shape): google.protobuf.GeneratedCodeInfo & google.protobuf.GeneratedCodeInfo.$Shape;
            static create(properties?: google.protobuf.GeneratedCodeInfo.$Properties): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.GeneratedCodeInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.GeneratedCodeInfo & google.protobuf.GeneratedCodeInfo.$Shape} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo & google.protobuf.GeneratedCodeInfo.$Shape;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.GeneratedCodeInfo & google.protobuf.GeneratedCodeInfo.$Shape} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo & google.protobuf.GeneratedCodeInfo.$Shape;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for GeneratedCodeInfo
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace GeneratedCodeInfo {

            /** Properties of a GeneratedCodeInfo. */
            interface $Properties {

                /** GeneratedCodeInfo annotation */
                annotation?: (google.protobuf.GeneratedCodeInfo.Annotation.$Properties[]|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a GeneratedCodeInfo. */
            type $Shape = google.protobuf.GeneratedCodeInfo.$Properties;

            /**
             * Properties of an Annotation.
             * @deprecated Use google.protobuf.GeneratedCodeInfo.Annotation.$Properties instead.
             */
            interface IAnnotation extends google.protobuf.GeneratedCodeInfo.Annotation.$Properties {
            }

            /** Represents an Annotation. */
            class Annotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.Annotation.$Properties);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];

                /** Annotation path. */
                path: number[];

                /** Annotation sourceFile. */
                sourceFile: string;

                /** Annotation begin. */
                begin: number;

                /** Annotation end. */
                end: number;

                /** Annotation semantic. */
                semantic: google.protobuf.GeneratedCodeInfo.Annotation.Semantic;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                static create(properties: google.protobuf.GeneratedCodeInfo.Annotation.$Shape): google.protobuf.GeneratedCodeInfo.Annotation & google.protobuf.GeneratedCodeInfo.Annotation.$Shape;
                static create(properties?: google.protobuf.GeneratedCodeInfo.Annotation.$Properties): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encode(message: google.protobuf.GeneratedCodeInfo.Annotation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.Annotation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation & google.protobuf.GeneratedCodeInfo.Annotation.$Shape} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation & google.protobuf.GeneratedCodeInfo.Annotation.$Shape;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation & google.protobuf.GeneratedCodeInfo.Annotation.$Shape} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation & google.protobuf.GeneratedCodeInfo.Annotation.$Shape;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for Annotation
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                static getTypeUrl(prefix?: string): string;
            }

            namespace Annotation {

                /** Properties of an Annotation. */
                interface $Properties {

                    /** Annotation path */
                    path?: (number[]|null);

                    /** Annotation sourceFile */
                    sourceFile?: (string|null);

                    /** Annotation begin */
                    begin?: (number|null);

                    /** Annotation end */
                    end?: (number|null);

                    /** Annotation semantic */
                    semantic?: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|null);

                    /** Unknown fields preserved while decoding when enabled */
                    $unknowns?: Uint8Array[];
                }

                /** Shape of an Annotation. */
                type $Shape = google.protobuf.GeneratedCodeInfo.Annotation.$Properties;

                /** Semantic enum. */
                enum Semantic {

                    /** NONE value */
                    NONE = 0,

                    /** SET value */
                    SET = 1,

                    /** ALIAS value */
                    ALIAS = 2
                }
            }
        }

        /** SymbolVisibility enum. */
        enum SymbolVisibility {

            /** VISIBILITY_UNSET value */
            VISIBILITY_UNSET = 0,

            /** VISIBILITY_LOCAL value */
            VISIBILITY_LOCAL = 1,

            /** VISIBILITY_EXPORT value */
            VISIBILITY_EXPORT = 2
        }
    }
}
