/* 代码为自动生成、请勿手动修改 */

namespace IApi {
  export type Name = string;
  export type Phone = string;
  export type Detail = string;

  export interface AddressBase {
    name: Name;
    phone: Phone;
    detail: Detail;
  }

  export type AddressOutName = string;
  export type AddressOutPhone = string;
  export type AddressOutDetail = string;
  export type Id = number;
  export type UpdateTime = string;

  export interface AddressOut {
    name: AddressOutName;
    phone: AddressOutPhone;
    detail: AddressOutDetail;
    id: Id;
    update_time: UpdateTime;
  }

  export type AddressUpdateName = string;
  export type AddressUpdatePhone = string;
  export type AddressUpdateDetail = string;
  export type AddressUpdateId = string;

  export interface AddressUpdate {
    name: AddressUpdateName;
    phone: AddressUpdatePhone;
    detail: AddressUpdateDetail;
    id: AddressUpdateId;
  }

  export type BannerBaseId = number;
  export type Location = string;
  export type Url = string;
  export type Path = string;

  export interface BannerBase {
    id: BannerBaseId;
    location: Location;
    url: Url;
    path: Path;
  }

  export type File = string;

  export interface BodyUploadFileApiWechatbannerPcUploadPost {
    file: File;
  }

  export type BodyUploadFileApiWechatorderUploadPostFile = string;

  export interface BodyUploadFileApiWechatorderUploadPost {
    file: BodyUploadFileApiWechatorderUploadPostFile;
  }

  export type Propertyname = string;

  export interface Discriminator {
    propertyName: Propertyname;
    mapping?: Mapping;
  }
  export interface Mapping {
    [k: string]: string;
  }

  export type Contenttype = string;
  export type Description = string;
  export type Required = boolean;
  export type Deprecated = boolean;
  export type Style = string;
  export type Explode = boolean;
  export type Allowreserved = boolean;
  export type Schema = EncodingSchema | Reference;
  export type $Schema = string;
  export type $Vocabulary = string;
  export type $Id = string;
  export type $Anchor = string;
  export type $Dynamicanchor = string;
  export type $Ref = string;
  export type $Dynamicref = string;
  export type $Comment = string;
  export type Allof = (EncodingSchema | boolean)[];
  export type Anyof = (EncodingSchema | boolean)[];
  export type Oneof = (EncodingSchema | boolean)[];
  export type Not = EncodingSchema | boolean;
  export type If = EncodingSchema | boolean;
  export type Then = EncodingSchema | boolean;
  export type Else = EncodingSchema | boolean;
  export type Prefixitems = (EncodingSchema | boolean)[];
  export type Items = (EncodingSchema | boolean) | (EncodingSchema | boolean)[];
  export type Contains = EncodingSchema | boolean;
  export type Additionalproperties = EncodingSchema | boolean;
  export type Propertynames = EncodingSchema | boolean;
  export type Unevaluateditems = EncodingSchema | boolean;
  export type Unevaluatedproperties = EncodingSchema | boolean;
  export type Type = string;
  export type Enum = unknown[];
  export type Multipleof = number;
  export type Maximum = number;
  export type Exclusivemaximum = number;
  export type Minimum = number;
  export type Exclusiveminimum = number;
  export type Maxlength = number;
  export type Minlength = number;
  export type Pattern = string;
  export type Maxitems = number;
  export type Minitems = number;
  export type Uniqueitems = boolean;
  export type Maxcontains = number;
  export type Mincontains = number;
  export type Maxproperties = number;
  export type Minproperties = number;
  export type EncodingRequired = string[];
  export type Format = string;
  export type Contentencoding = string;
  export type Contentmediatype = string;
  export type Contentschema = EncodingSchema | boolean;
  export type Title = string;
  export type EncodingDescription = string;
  export type EncodingDeprecated = boolean;
  export type Readonly = boolean;
  export type Writeonly = boolean;
  export type Examples = unknown[];
  export type EncodingPropertyname = string;
  export type EncodingName = string;
  export type Namespace = string;
  export type Prefix = string;
  export type Attribute = boolean;
  export type Wrapped = boolean;
  export type EncodingDescription1 = string;
  export type EncodingUrl = string;
  export type Summary = string;
  export type EncodingDescription2 = string;
  export type Externalvalue = string;
  export type EncodingSchema1 = EncodingSchema | Reference;
  export type EncodingStyle = string;
  export type EncodingExplode = boolean;
  export type EncodingAllowreserved = boolean;

  export interface Encoding {
    contentType?: Contenttype;
    headers?: Headers;
    style?: EncodingStyle;
    explode?: EncodingExplode;
    allowReserved?: EncodingAllowreserved;
  }
  export interface Headers {
    [k: string]: Header | Reference;
  }
  export interface Header {
    description?: Description;
    required?: Required;
    deprecated?: Deprecated;
    style?: Style;
    explode?: Explode;
    allowReserved?: Allowreserved;
    schema?: Schema;
    example?: EncodingExample;
    examples?: EncodingExamples;
    content?: Content;
  }
  export interface EncodingSchema {
    $schema?: $Schema;
    $vocabulary?: $Vocabulary;
    $id?: $Id;
    $anchor?: $Anchor;
    $dynamicAnchor?: $Dynamicanchor;
    $ref?: $Ref;
    $dynamicRef?: $Dynamicref;
    $defs?: $Defs;
    $comment?: $Comment;
    allOf?: Allof;
    anyOf?: Anyof;
    oneOf?: Oneof;
    not?: Not;
    if?: If;
    then?: Then;
    else?: Else;
    dependentSchemas?: Dependentschemas;
    prefixItems?: Prefixitems;
    items?: Items;
    contains?: Contains;
    properties?: Properties;
    patternProperties?: Patternproperties;
    additionalProperties?: Additionalproperties;
    propertyNames?: Propertynames;
    unevaluatedItems?: Unevaluateditems;
    unevaluatedProperties?: Unevaluatedproperties;
    type?: Type;
    enum?: Enum;
    const?: Const;
    multipleOf?: Multipleof;
    maximum?: Maximum;
    exclusiveMaximum?: Exclusivemaximum;
    minimum?: Minimum;
    exclusiveMinimum?: Exclusiveminimum;
    maxLength?: Maxlength;
    minLength?: Minlength;
    pattern?: Pattern;
    maxItems?: Maxitems;
    minItems?: Minitems;
    uniqueItems?: Uniqueitems;
    maxContains?: Maxcontains;
    minContains?: Mincontains;
    maxProperties?: Maxproperties;
    minProperties?: Minproperties;
    required?: EncodingRequired;
    dependentRequired?: Dependentrequired;
    format?: Format;
    contentEncoding?: Contentencoding;
    contentMediaType?: Contentmediatype;
    contentSchema?: Contentschema;
    title?: Title;
    description?: EncodingDescription;
    default?: Default;
    deprecated?: EncodingDeprecated;
    readOnly?: Readonly;
    writeOnly?: Writeonly;
    examples?: Examples;
    discriminator?: EncodingDiscriminator;
    xml?: XML;
    externalDocs?: ExternalDocumentation;
    example?: Example;
  }
  export interface $Defs {
    [k: string]: EncodingSchema | boolean;
  }
  export interface Dependentschemas {
    [k: string]: EncodingSchema | boolean;
  }
  export interface Properties {
    [k: string]: EncodingSchema | boolean;
  }
  export interface Patternproperties {
    [k: string]: EncodingSchema | boolean;
  }
  export interface Const {
    [k: string]: unknown;
  }
  export interface Dependentrequired {
    [k: string]: string[];
  }
  export interface Default {
    [k: string]: unknown;
  }
  export interface EncodingDiscriminator {
    propertyName: EncodingPropertyname;
    mapping?: EncodingMapping;
  }
  export interface EncodingMapping {
    [k: string]: string;
  }
  export interface XML {
    name?: EncodingName;
    namespace?: Namespace;
    prefix?: Prefix;
    attribute?: Attribute;
    wrapped?: Wrapped;
  }
  export interface ExternalDocumentation {
    description?: EncodingDescription1;
    url: EncodingUrl;
  }
  export interface Example {
    [k: string]: unknown;
  }
  export interface Reference {
    allOf?: [{ $ref: { type: "string"; title: "$Ref" } }];
  }
  export interface EncodingExample {
    [k: string]: unknown;
  }
  export interface EncodingExamples {
    [k: string]: EncodingExample1 | Reference;
  }
  export interface EncodingExample1 {
    summary?: Summary;
    description?: EncodingDescription2;
    value?: Value;
    externalValue?: Externalvalue;
  }
  export interface Value {
    [k: string]: unknown;
  }
  export interface Content {
    [k: string]: MediaType;
  }
  export interface MediaType {
    schema?: EncodingSchema1;
    example?: EncodingExample2;
    examples?: EncodingExamples1;
    encoding?: EncodingEncoding;
  }
  export interface EncodingExample2 {
    [k: string]: unknown;
  }
  export interface EncodingExamples1 {
    [k: string]: EncodingExample1 | Reference;
  }
  export interface EncodingEncoding {
    [k: string]: Encoding;
  }

  export type ExampleSummary = string;
  export type ExampleDescription = string;
  export type ExampleExternalvalue = string;

  export interface ExampleExample {
    summary?: ExampleSummary;
    description?: ExampleDescription;
    value?: ExampleValue;
    externalValue?: ExampleExternalvalue;
  }
  export interface ExampleValue {
    [k: string]: unknown;
  }

  export type ExternalDocumentationDescription = string;
  export type ExternalDocumentationUrl = string;

  export interface ExternalDocumentationExternalDocumentation {
    description?: ExternalDocumentationDescription;
    url: ExternalDocumentationUrl;
  }

  export type HTTPValidationErrorLocation = (string | number)[];
  export type Message = string;
  export type ErrorType = string;
  export type HTTPValidationErrorDetail = ValidationError[];

  export interface HTTPValidationError {
    detail?: HTTPValidationErrorDetail;
  }
  export interface ValidationError {
    loc: HTTPValidationErrorLocation;
    msg: Message;
    type: ErrorType;
  }

  export type HeaderDescription = string;
  export type HeaderRequired = boolean;
  export type HeaderDeprecated = boolean;
  export type HeaderStyle = string;
  export type HeaderExplode = boolean;
  export type HeaderAllowreserved = boolean;
  export type HeaderSchema = HeaderSchema1 | HeaderReference;
  export type Header$Schema = string;
  export type Header$Vocabulary = string;
  export type Header$Id = string;
  export type Header$Anchor = string;
  export type Header$Dynamicanchor = string;
  export type Header$Ref = string;
  export type Header$Dynamicref = string;
  export type Header$Comment = string;
  export type HeaderAllof = (HeaderSchema1 | boolean)[];
  export type HeaderAnyof = (HeaderSchema1 | boolean)[];
  export type HeaderOneof = (HeaderSchema1 | boolean)[];
  export type HeaderNot = HeaderSchema1 | boolean;
  export type HeaderIf = HeaderSchema1 | boolean;
  export type HeaderThen = HeaderSchema1 | boolean;
  export type HeaderElse = HeaderSchema1 | boolean;
  export type HeaderPrefixitems = (HeaderSchema1 | boolean)[];
  export type HeaderItems =
    | (HeaderSchema1 | boolean)
    | (HeaderSchema1 | boolean)[];
  export type HeaderContains = HeaderSchema1 | boolean;
  export type HeaderAdditionalproperties = HeaderSchema1 | boolean;
  export type HeaderPropertynames = HeaderSchema1 | boolean;
  export type HeaderUnevaluateditems = HeaderSchema1 | boolean;
  export type HeaderUnevaluatedproperties = HeaderSchema1 | boolean;
  export type HeaderType = string;
  export type HeaderEnum = unknown[];
  export type HeaderMultipleof = number;
  export type HeaderMaximum = number;
  export type HeaderExclusivemaximum = number;
  export type HeaderMinimum = number;
  export type HeaderExclusiveminimum = number;
  export type HeaderMaxlength = number;
  export type HeaderMinlength = number;
  export type HeaderPattern = string;
  export type HeaderMaxitems = number;
  export type HeaderMinitems = number;
  export type HeaderUniqueitems = boolean;
  export type HeaderMaxcontains = number;
  export type HeaderMincontains = number;
  export type HeaderMaxproperties = number;
  export type HeaderMinproperties = number;
  export type HeaderRequired1 = string[];
  export type HeaderFormat = string;
  export type HeaderContentencoding = string;
  export type HeaderContentmediatype = string;
  export type HeaderContentschema = HeaderSchema1 | boolean;
  export type HeaderTitle = string;
  export type HeaderDescription1 = string;
  export type HeaderDeprecated1 = boolean;
  export type HeaderReadonly = boolean;
  export type HeaderWriteonly = boolean;
  export type HeaderExamples = unknown[];
  export type HeaderPropertyname = string;
  export type HeaderName = string;
  export type HeaderNamespace = string;
  export type HeaderPrefix = string;
  export type HeaderAttribute = boolean;
  export type HeaderWrapped = boolean;
  export type HeaderDescription2 = string;
  export type HeaderUrl = string;
  export type HeaderSummary = string;
  export type HeaderDescription3 = string;
  export type HeaderExternalvalue = string;
  export type HeaderSchema2 = HeaderSchema1 | HeaderReference;
  export type HeaderContenttype = string;
  export type HeaderStyle1 = string;
  export type HeaderExplode1 = boolean;
  export type HeaderAllowreserved1 = boolean;

  export interface HeaderHeader {
    description?: HeaderDescription;
    required?: HeaderRequired;
    deprecated?: HeaderDeprecated;
    style?: HeaderStyle;
    explode?: HeaderExplode;
    allowReserved?: HeaderAllowreserved;
    schema?: HeaderSchema;
    example?: HeaderExample1;
    examples?: HeaderExamples1;
    content?: HeaderContent;
  }
  export interface HeaderSchema1 {
    $schema?: Header$Schema;
    $vocabulary?: Header$Vocabulary;
    $id?: Header$Id;
    $anchor?: Header$Anchor;
    $dynamicAnchor?: Header$Dynamicanchor;
    $ref?: Header$Ref;
    $dynamicRef?: Header$Dynamicref;
    $defs?: Header$Defs;
    $comment?: Header$Comment;
    allOf?: HeaderAllof;
    anyOf?: HeaderAnyof;
    oneOf?: HeaderOneof;
    not?: HeaderNot;
    if?: HeaderIf;
    then?: HeaderThen;
    else?: HeaderElse;
    dependentSchemas?: HeaderDependentschemas;
    prefixItems?: HeaderPrefixitems;
    items?: HeaderItems;
    contains?: HeaderContains;
    properties?: HeaderProperties;
    patternProperties?: HeaderPatternproperties;
    additionalProperties?: HeaderAdditionalproperties;
    propertyNames?: HeaderPropertynames;
    unevaluatedItems?: HeaderUnevaluateditems;
    unevaluatedProperties?: HeaderUnevaluatedproperties;
    type?: HeaderType;
    enum?: HeaderEnum;
    const?: HeaderConst;
    multipleOf?: HeaderMultipleof;
    maximum?: HeaderMaximum;
    exclusiveMaximum?: HeaderExclusivemaximum;
    minimum?: HeaderMinimum;
    exclusiveMinimum?: HeaderExclusiveminimum;
    maxLength?: HeaderMaxlength;
    minLength?: HeaderMinlength;
    pattern?: HeaderPattern;
    maxItems?: HeaderMaxitems;
    minItems?: HeaderMinitems;
    uniqueItems?: HeaderUniqueitems;
    maxContains?: HeaderMaxcontains;
    minContains?: HeaderMincontains;
    maxProperties?: HeaderMaxproperties;
    minProperties?: HeaderMinproperties;
    required?: HeaderRequired1;
    dependentRequired?: HeaderDependentrequired;
    format?: HeaderFormat;
    contentEncoding?: HeaderContentencoding;
    contentMediaType?: HeaderContentmediatype;
    contentSchema?: HeaderContentschema;
    title?: HeaderTitle;
    description?: HeaderDescription1;
    default?: HeaderDefault;
    deprecated?: HeaderDeprecated1;
    readOnly?: HeaderReadonly;
    writeOnly?: HeaderWriteonly;
    examples?: HeaderExamples;
    discriminator?: HeaderDiscriminator;
    xml?: HeaderXML;
    externalDocs?: HeaderExternalDocumentation;
    example?: HeaderExample;
  }
  export interface Header$Defs {
    [k: string]: HeaderSchema1 | boolean;
  }
  export interface HeaderDependentschemas {
    [k: string]: HeaderSchema1 | boolean;
  }
  export interface HeaderProperties {
    [k: string]: HeaderSchema1 | boolean;
  }
  export interface HeaderPatternproperties {
    [k: string]: HeaderSchema1 | boolean;
  }
  export interface HeaderConst {
    [k: string]: unknown;
  }
  export interface HeaderDependentrequired {
    [k: string]: string[];
  }
  export interface HeaderDefault {
    [k: string]: unknown;
  }
  export interface HeaderDiscriminator {
    propertyName: HeaderPropertyname;
    mapping?: HeaderMapping;
  }
  export interface HeaderMapping {
    [k: string]: string;
  }
  export interface HeaderXML {
    name?: HeaderName;
    namespace?: HeaderNamespace;
    prefix?: HeaderPrefix;
    attribute?: HeaderAttribute;
    wrapped?: HeaderWrapped;
  }
  export interface HeaderExternalDocumentation {
    description?: HeaderDescription2;
    url: HeaderUrl;
  }
  export interface HeaderExample {
    [k: string]: unknown;
  }
  export interface HeaderReference {
    allOf?: [{ $ref: { type: "string"; title: "$Ref" } }];
  }
  export interface HeaderExample1 {
    [k: string]: unknown;
  }
  export interface HeaderExamples1 {
    [k: string]: HeaderExample2 | HeaderReference;
  }
  export interface HeaderExample2 {
    summary?: HeaderSummary;
    description?: HeaderDescription3;
    value?: HeaderValue;
    externalValue?: HeaderExternalvalue;
  }
  export interface HeaderValue {
    [k: string]: unknown;
  }
  export interface HeaderContent {
    [k: string]: HeaderMediaType;
  }
  export interface HeaderMediaType {
    schema?: HeaderSchema2;
    example?: HeaderExample3;
    examples?: HeaderExamples2;
    encoding?: HeaderEncoding;
  }
  export interface HeaderExample3 {
    [k: string]: unknown;
  }
  export interface HeaderExamples2 {
    [k: string]: HeaderExample2 | HeaderReference;
  }
  export interface HeaderEncoding {
    [k: string]: HeaderEncoding1;
  }
  export interface HeaderEncoding1 {
    contentType?: HeaderContenttype;
    headers?: HeaderHeaders;
    style?: HeaderStyle1;
    explode?: HeaderExplode1;
    allowReserved?: HeaderAllowreserved1;
  }
  export interface HeaderHeaders {
    [k: string]: HeaderHeader | HeaderReference;
  }

  export type Operationref = string;
  export type Operationid = string;
  export type Requestbody = string;
  export type LinkDescription = string;
  export type LinkUrl = string;
  export type LinkDescription1 = string;
  export type LinkEnum = string[];
  export type LinkDefault = string;
  export type LinkDescription2 = string;

  export interface Link {
    operationRef?: Operationref;
    operationId?: Operationid;
    parameters?: Parameters;
    requestBody?: Requestbody;
    description?: LinkDescription;
    server?: Server;
  }
  export interface Parameters {
    [k: string]: string;
  }
  export interface Server {
    url: LinkUrl;
    description?: LinkDescription1;
    variables?: Variables;
  }
  export interface Variables {
    [k: string]: ServerVariable;
  }
  export interface ServerVariable {
    enum?: LinkEnum;
    default: LinkDefault;
    description?: LinkDescription2;
  }

  export type MediaTypeSchema = MediaTypeSchema1 | MediaTypeReference;
  export type MediaType$Schema = string;
  export type MediaType$Vocabulary = string;
  export type MediaType$Id = string;
  export type MediaType$Anchor = string;
  export type MediaType$Dynamicanchor = string;
  export type MediaType$Ref = string;
  export type MediaType$Dynamicref = string;
  export type MediaType$Comment = string;
  export type MediaTypeAllof = (MediaTypeSchema1 | boolean)[];
  export type MediaTypeAnyof = (MediaTypeSchema1 | boolean)[];
  export type MediaTypeOneof = (MediaTypeSchema1 | boolean)[];
  export type MediaTypeNot = MediaTypeSchema1 | boolean;
  export type MediaTypeIf = MediaTypeSchema1 | boolean;
  export type MediaTypeThen = MediaTypeSchema1 | boolean;
  export type MediaTypeElse = MediaTypeSchema1 | boolean;
  export type MediaTypePrefixitems = (MediaTypeSchema1 | boolean)[];
  export type MediaTypeItems =
    | (MediaTypeSchema1 | boolean)
    | (MediaTypeSchema1 | boolean)[];
  export type MediaTypeContains = MediaTypeSchema1 | boolean;
  export type MediaTypeAdditionalproperties = MediaTypeSchema1 | boolean;
  export type MediaTypePropertynames = MediaTypeSchema1 | boolean;
  export type MediaTypeUnevaluateditems = MediaTypeSchema1 | boolean;
  export type MediaTypeUnevaluatedproperties = MediaTypeSchema1 | boolean;
  export type MediaTypeType = string;
  export type MediaTypeEnum = unknown[];
  export type MediaTypeMultipleof = number;
  export type MediaTypeMaximum = number;
  export type MediaTypeExclusivemaximum = number;
  export type MediaTypeMinimum = number;
  export type MediaTypeExclusiveminimum = number;
  export type MediaTypeMaxlength = number;
  export type MediaTypeMinlength = number;
  export type MediaTypePattern = string;
  export type MediaTypeMaxitems = number;
  export type MediaTypeMinitems = number;
  export type MediaTypeUniqueitems = boolean;
  export type MediaTypeMaxcontains = number;
  export type MediaTypeMincontains = number;
  export type MediaTypeMaxproperties = number;
  export type MediaTypeMinproperties = number;
  export type MediaTypeRequired = string[];
  export type MediaTypeFormat = string;
  export type MediaTypeContentencoding = string;
  export type MediaTypeContentmediatype = string;
  export type MediaTypeContentschema = MediaTypeSchema1 | boolean;
  export type MediaTypeTitle = string;
  export type MediaTypeDescription = string;
  export type MediaTypeDeprecated = boolean;
  export type MediaTypeReadonly = boolean;
  export type MediaTypeWriteonly = boolean;
  export type MediaTypeExamples = unknown[];
  export type MediaTypePropertyname = string;
  export type MediaTypeName = string;
  export type MediaTypeNamespace = string;
  export type MediaTypePrefix = string;
  export type MediaTypeAttribute = boolean;
  export type MediaTypeWrapped = boolean;
  export type MediaTypeDescription1 = string;
  export type MediaTypeUrl = string;
  export type MediaTypeSummary = string;
  export type MediaTypeDescription2 = string;
  export type MediaTypeExternalvalue = string;
  export type MediaTypeContenttype = string;
  export type MediaTypeDescription3 = string;
  export type MediaTypeRequired1 = boolean;
  export type MediaTypeDeprecated1 = boolean;
  export type MediaTypeStyle = string;
  export type MediaTypeExplode = boolean;
  export type MediaTypeAllowreserved = boolean;
  export type MediaTypeSchema2 = MediaTypeSchema1 | MediaTypeReference;
  export type MediaTypeStyle1 = string;
  export type MediaTypeExplode1 = boolean;
  export type MediaTypeAllowreserved1 = boolean;

  export interface MediaTypeMediaType {
    schema?: MediaTypeSchema;
    example?: MediaTypeExample1;
    examples?: MediaTypeExamples1;
    encoding?: MediaTypeEncoding;
  }
  export interface MediaTypeSchema1 {
    $schema?: MediaType$Schema;
    $vocabulary?: MediaType$Vocabulary;
    $id?: MediaType$Id;
    $anchor?: MediaType$Anchor;
    $dynamicAnchor?: MediaType$Dynamicanchor;
    $ref?: MediaType$Ref;
    $dynamicRef?: MediaType$Dynamicref;
    $defs?: MediaType$Defs;
    $comment?: MediaType$Comment;
    allOf?: MediaTypeAllof;
    anyOf?: MediaTypeAnyof;
    oneOf?: MediaTypeOneof;
    not?: MediaTypeNot;
    if?: MediaTypeIf;
    then?: MediaTypeThen;
    else?: MediaTypeElse;
    dependentSchemas?: MediaTypeDependentschemas;
    prefixItems?: MediaTypePrefixitems;
    items?: MediaTypeItems;
    contains?: MediaTypeContains;
    properties?: MediaTypeProperties;
    patternProperties?: MediaTypePatternproperties;
    additionalProperties?: MediaTypeAdditionalproperties;
    propertyNames?: MediaTypePropertynames;
    unevaluatedItems?: MediaTypeUnevaluateditems;
    unevaluatedProperties?: MediaTypeUnevaluatedproperties;
    type?: MediaTypeType;
    enum?: MediaTypeEnum;
    const?: MediaTypeConst;
    multipleOf?: MediaTypeMultipleof;
    maximum?: MediaTypeMaximum;
    exclusiveMaximum?: MediaTypeExclusivemaximum;
    minimum?: MediaTypeMinimum;
    exclusiveMinimum?: MediaTypeExclusiveminimum;
    maxLength?: MediaTypeMaxlength;
    minLength?: MediaTypeMinlength;
    pattern?: MediaTypePattern;
    maxItems?: MediaTypeMaxitems;
    minItems?: MediaTypeMinitems;
    uniqueItems?: MediaTypeUniqueitems;
    maxContains?: MediaTypeMaxcontains;
    minContains?: MediaTypeMincontains;
    maxProperties?: MediaTypeMaxproperties;
    minProperties?: MediaTypeMinproperties;
    required?: MediaTypeRequired;
    dependentRequired?: MediaTypeDependentrequired;
    format?: MediaTypeFormat;
    contentEncoding?: MediaTypeContentencoding;
    contentMediaType?: MediaTypeContentmediatype;
    contentSchema?: MediaTypeContentschema;
    title?: MediaTypeTitle;
    description?: MediaTypeDescription;
    default?: MediaTypeDefault;
    deprecated?: MediaTypeDeprecated;
    readOnly?: MediaTypeReadonly;
    writeOnly?: MediaTypeWriteonly;
    examples?: MediaTypeExamples;
    discriminator?: MediaTypeDiscriminator;
    xml?: MediaTypeXML;
    externalDocs?: MediaTypeExternalDocumentation;
    example?: MediaTypeExample;
  }
  export interface MediaType$Defs {
    [k: string]: MediaTypeSchema1 | boolean;
  }
  export interface MediaTypeDependentschemas {
    [k: string]: MediaTypeSchema1 | boolean;
  }
  export interface MediaTypeProperties {
    [k: string]: MediaTypeSchema1 | boolean;
  }
  export interface MediaTypePatternproperties {
    [k: string]: MediaTypeSchema1 | boolean;
  }
  export interface MediaTypeConst {
    [k: string]: unknown;
  }
  export interface MediaTypeDependentrequired {
    [k: string]: string[];
  }
  export interface MediaTypeDefault {
    [k: string]: unknown;
  }
  export interface MediaTypeDiscriminator {
    propertyName: MediaTypePropertyname;
    mapping?: MediaTypeMapping;
  }
  export interface MediaTypeMapping {
    [k: string]: string;
  }
  export interface MediaTypeXML {
    name?: MediaTypeName;
    namespace?: MediaTypeNamespace;
    prefix?: MediaTypePrefix;
    attribute?: MediaTypeAttribute;
    wrapped?: MediaTypeWrapped;
  }
  export interface MediaTypeExternalDocumentation {
    description?: MediaTypeDescription1;
    url: MediaTypeUrl;
  }
  export interface MediaTypeExample {
    [k: string]: unknown;
  }
  export interface MediaTypeReference {
    allOf?: [{ $ref: { type: "string"; title: "$Ref" } }];
  }
  export interface MediaTypeExample1 {
    [k: string]: unknown;
  }
  export interface MediaTypeExamples1 {
    [k: string]: MediaTypeExample2 | MediaTypeReference;
  }
  export interface MediaTypeExample2 {
    summary?: MediaTypeSummary;
    description?: MediaTypeDescription2;
    value?: MediaTypeValue;
    externalValue?: MediaTypeExternalvalue;
  }
  export interface MediaTypeValue {
    [k: string]: unknown;
  }
  export interface MediaTypeEncoding {
    [k: string]: MediaTypeEncoding1;
  }
  export interface MediaTypeEncoding1 {
    contentType?: MediaTypeContenttype;
    headers?: MediaTypeHeaders;
    style?: MediaTypeStyle1;
    explode?: MediaTypeExplode1;
    allowReserved?: MediaTypeAllowreserved1;
  }
  export interface MediaTypeHeaders {
    [k: string]: MediaTypeHeader | MediaTypeReference;
  }
  export interface MediaTypeHeader {
    description?: MediaTypeDescription3;
    required?: MediaTypeRequired1;
    deprecated?: MediaTypeDeprecated1;
    style?: MediaTypeStyle;
    explode?: MediaTypeExplode;
    allowReserved?: MediaTypeAllowreserved;
    schema?: MediaTypeSchema2;
    example?: MediaTypeExample3;
    examples?: MediaTypeExamples2;
    content?: MediaTypeContent;
  }
  export interface MediaTypeExample3 {
    [k: string]: unknown;
  }
  export interface MediaTypeExamples2 {
    [k: string]: MediaTypeExample2 | MediaTypeReference;
  }
  export interface MediaTypeContent {
    [k: string]: MediaTypeMediaType;
  }

  export type Openid = string;
  export type ProductIds = number[];

  export interface OrderCreate {
    openid: Openid;
    product_ids: ProductIds;
  }

  export type OrderDetailResponseId = number;
  export type UserId = number;
  export type Status = number;
  export type DeliverySite = string;
  export type TrackingCode = string;
  export type AddressId = number;
  export type FinallyCost = number;
  export type CreateTime = string;
  export type OrderDetailResponseUpdateTime = string;
  export type OrderDetailResponseId1 = number;
  export type OrderDetailResponseUserId = number;
  export type ProductName = string;
  export type ProductCode = string;
  export type OrderDetailResponseDescription = string;
  export type OrderDetailResponseCreateTime = string;
  export type OrderDetailResponseUpdateTime1 = string;
  export type OrderDetailResponseId2 = number;
  export type Size = string;
  export type Number = number;
  export type OrderDetailResponseStatus = number;
  export type Price = number;
  export type OrderDetailResponseDescription1 = string;
  export type FinallyPrice = number;
  export type Reason = string;
  export type ProductInfos = ProductInfoResponse[];
  export type OrderDetailResponseUrl = string;
  export type ProductUrls = ProductUrlResponse[];
  export type OrderDetailResponseStatus1 = number;
  export type Products = ProductResponse[];
  export type DeliveryName = string;
  export type DeliveryPhone = string;
  export type ReturnAddress = string;
  export type OrderDetailResponseName = string;
  export type OrderDetailResponsePhone = string;

  export interface OrderDetailResponse {
    id: OrderDetailResponseId;
    user_id: UserId;
    status: Status;
    delivery_site?: DeliverySite;
    tracking_code?: TrackingCode;
    address_id?: AddressId;
    finally_cost?: FinallyCost;
    create_time: CreateTime;
    update_time?: OrderDetailResponseUpdateTime;
    products: Products;
    delivery_name?: DeliveryName;
    delivery_phone?: DeliveryPhone;
    return_address?: ReturnAddress;
    name?: OrderDetailResponseName;
    phone?: OrderDetailResponsePhone;
  }
  export interface ProductResponse {
    id: OrderDetailResponseId1;
    user_id: OrderDetailResponseUserId;
    product_name: ProductName;
    product_code: ProductCode;
    description?: OrderDetailResponseDescription;
    create_time: OrderDetailResponseCreateTime;
    update_time?: OrderDetailResponseUpdateTime1;
    product_infos?: ProductInfos;
    product_urls?: ProductUrls;
    status: OrderDetailResponseStatus1;
  }
  export interface ProductInfoResponse {
    id: OrderDetailResponseId2;
    size: Size;
    number: Number;
    status: OrderDetailResponseStatus;
    price: Price;
    description?: OrderDetailResponseDescription1;
    finally_price: FinallyPrice;
    reason?: Reason;
  }
  export interface ProductUrlResponse {
    url: OrderDetailResponseUrl;
  }

  export type OrderUpdateFinallyCost = number;
  export type OrderUpdateStatus = number;
  export type OrderUpdateAddressId = number;
  export type MoneyToUser = number;
  export type PhoneCode = string;

  export interface OrderUpdate {
    finally_cost?: OrderUpdateFinallyCost;
    status: OrderUpdateStatus;
    address_id?: OrderUpdateAddressId;
    money_to_user?: MoneyToUser;
    phone_code?: PhoneCode;
  }

  export type ProductCreateUserId = number;
  /**
   * openid
   */
  export type ProductCreateOpenid = string;
  /**
   * 产品名称
   */
  export type ProductCreateProductName = string;
  /**
   * 货号
   */
  export type ProductCreateProductCode = string;
  /**
   * 瑕疵描述
   */
  export type ProductCreateDescription = string;
  /**
   * 产品尺寸
   */
  export type ProductCreateSize = string;
  /**
   * 产品数量
   */
  export type ProductCreateNumber = number;
  /**
   * 产品信息列表
   */
  export type ProductCreateProductInfos = ProductInfoCreate[];
  /**
   * 产品图片链接
   */
  export type ProductCreateUrl = string;
  /**
   * 图片路径
   */
  export type ProductCreatePath = string;
  /**
   * 产品链接列表
   */
  export type ProductCreateProductUrls = ProductUrlCreate[];

  export interface ProductCreate {
    user_id?: ProductCreateUserId;
    openid: ProductCreateOpenid;
    product_name: ProductCreateProductName;
    product_code: ProductCreateProductCode;
    description?: ProductCreateDescription;
    product_infos: ProductCreateProductInfos;
    product_urls?: ProductCreateProductUrls;
  }
  export interface ProductInfoCreate {
    size: ProductCreateSize;
    number: ProductCreateNumber;
  }
  export interface ProductUrlCreate {
    url: ProductCreateUrl;
    path: ProductCreatePath;
  }

  /**
   * 产品尺寸
   */
  export type ProductInfoCreateSize = string;
  /**
   * 产品数量
   */
  export type ProductInfoCreateNumber = number;

  export interface ProductInfoCreateProductInfoCreate {
    size: ProductInfoCreateSize;
    number: ProductInfoCreateNumber;
  }

  export type ProductInfoResponseId = number;
  export type ProductInfoResponseSize = string;
  export type ProductInfoResponseNumber = number;
  export type ProductInfoResponseStatus = number;
  export type ProductInfoResponsePrice = number;
  export type ProductInfoResponseDescription = string;
  export type ProductInfoResponseFinallyPrice = number;
  export type ProductInfoResponseReason = string;

  export interface ProductInfoResponseProductInfoResponse {
    id: ProductInfoResponseId;
    size: ProductInfoResponseSize;
    number: ProductInfoResponseNumber;
    status: ProductInfoResponseStatus;
    price: ProductInfoResponsePrice;
    description?: ProductInfoResponseDescription;
    finally_price: ProductInfoResponseFinallyPrice;
    reason?: ProductInfoResponseReason;
  }

  export type ProductInfoUpdateSize = string;
  export type ProductInfoUpdateNumber = number;
  export type ProductInfoUpdateStatus = number;
  export type ProductInfoUpdatePrice = number;
  export type ProductInfoUpdateDescription = string;
  export type ProductInfoUpdateFinallyPrice = number;
  export type ProductInfoUpdateReason = string;

  export interface ProductInfoUpdate {
    size?: ProductInfoUpdateSize;
    number?: ProductInfoUpdateNumber;
    status?: ProductInfoUpdateStatus;
    price?: ProductInfoUpdatePrice;
    description?: ProductInfoUpdateDescription;
    finally_price?: ProductInfoUpdateFinallyPrice;
    reason?: ProductInfoUpdateReason;
  }

  export type ProductResponseId = number;
  export type ProductResponseUserId = number;
  export type ProductResponseProductName = string;
  export type ProductResponseProductCode = string;
  export type ProductResponseDescription = string;
  export type ProductResponseCreateTime = string;
  export type ProductResponseUpdateTime = string;
  export type ProductResponseId1 = number;
  export type ProductResponseSize = string;
  export type ProductResponseNumber = number;
  export type ProductResponseStatus = number;
  export type ProductResponsePrice = number;
  export type ProductResponseDescription1 = string;
  export type ProductResponseFinallyPrice = number;
  export type ProductResponseReason = string;
  export type ProductResponseProductInfos =
    ProductResponseProductInfoResponse[];
  export type ProductResponseUrl = string;
  export type ProductResponseProductUrls = ProductResponseProductUrlResponse[];
  export type ProductResponseStatus1 = number;

  export interface ProductResponseProductResponse {
    id: ProductResponseId;
    user_id: ProductResponseUserId;
    product_name: ProductResponseProductName;
    product_code: ProductResponseProductCode;
    description?: ProductResponseDescription;
    create_time: ProductResponseCreateTime;
    update_time?: ProductResponseUpdateTime;
    product_infos?: ProductResponseProductInfos;
    product_urls?: ProductResponseProductUrls;
    status: ProductResponseStatus1;
  }
  export interface ProductResponseProductInfoResponse {
    id: ProductResponseId1;
    size: ProductResponseSize;
    number: ProductResponseNumber;
    status: ProductResponseStatus;
    price: ProductResponsePrice;
    description?: ProductResponseDescription1;
    finally_price: ProductResponseFinallyPrice;
    reason?: ProductResponseReason;
  }
  export interface ProductResponseProductUrlResponse {
    url: ProductResponseUrl;
  }

  /**
   * 产品图片链接
   */
  export type ProductUrlCreateUrl = string;
  /**
   * 图片路径
   */
  export type ProductUrlCreatePath = string;

  export interface ProductUrlCreateProductUrlCreate {
    url: ProductUrlCreateUrl;
    path: ProductUrlCreatePath;
  }

  export type ProductUrlResponseUrl = string;

  export interface ProductUrlResponseProductUrlResponse {
    url: ProductUrlResponseUrl;
  }

  export interface ReferenceReference {
    allOf?: [{ $ref: { type: "string"; title: "$Ref" } }];
  }

  export type Code = string;
  export type RegistryRequestName = string;
  export type RegistryRequestPhone = string;
  export type IdCode = string;
  export type VerifyCode = string;

  export interface RegistryRequest {
    code: Code;
    name: RegistryRequestName;
    phone: RegistryRequestPhone;
    id_code: IdCode;
    verify_code: VerifyCode;
  }

  export type ResponseDescription = string;
  export type ResponseDescription1 = string;
  export type ResponseRequired = boolean;
  export type ResponseDeprecated = boolean;
  export type ResponseStyle = string;
  export type ResponseExplode = boolean;
  export type ResponseAllowreserved = boolean;
  export type ResponseSchema = ResponseSchema1 | ResponseReference;
  export type Response$Schema = string;
  export type Response$Vocabulary = string;
  export type Response$Id = string;
  export type Response$Anchor = string;
  export type Response$Dynamicanchor = string;
  export type Response$Ref = string;
  export type Response$Dynamicref = string;
  export type Response$Comment = string;
  export type ResponseAllof = (ResponseSchema1 | boolean)[];
  export type ResponseAnyof = (ResponseSchema1 | boolean)[];
  export type ResponseOneof = (ResponseSchema1 | boolean)[];
  export type ResponseNot = ResponseSchema1 | boolean;
  export type ResponseIf = ResponseSchema1 | boolean;
  export type ResponseThen = ResponseSchema1 | boolean;
  export type ResponseElse = ResponseSchema1 | boolean;
  export type ResponsePrefixitems = (ResponseSchema1 | boolean)[];
  export type ResponseItems =
    | (ResponseSchema1 | boolean)
    | (ResponseSchema1 | boolean)[];
  export type ResponseContains = ResponseSchema1 | boolean;
  export type ResponseAdditionalproperties = ResponseSchema1 | boolean;
  export type ResponsePropertynames = ResponseSchema1 | boolean;
  export type ResponseUnevaluateditems = ResponseSchema1 | boolean;
  export type ResponseUnevaluatedproperties = ResponseSchema1 | boolean;
  export type ResponseType = string;
  export type ResponseEnum = unknown[];
  export type ResponseMultipleof = number;
  export type ResponseMaximum = number;
  export type ResponseExclusivemaximum = number;
  export type ResponseMinimum = number;
  export type ResponseExclusiveminimum = number;
  export type ResponseMaxlength = number;
  export type ResponseMinlength = number;
  export type ResponsePattern = string;
  export type ResponseMaxitems = number;
  export type ResponseMinitems = number;
  export type ResponseUniqueitems = boolean;
  export type ResponseMaxcontains = number;
  export type ResponseMincontains = number;
  export type ResponseMaxproperties = number;
  export type ResponseMinproperties = number;
  export type ResponseRequired1 = string[];
  export type ResponseFormat = string;
  export type ResponseContentencoding = string;
  export type ResponseContentmediatype = string;
  export type ResponseContentschema = ResponseSchema1 | boolean;
  export type ResponseTitle = string;
  export type ResponseDescription2 = string;
  export type ResponseDeprecated1 = boolean;
  export type ResponseReadonly = boolean;
  export type ResponseWriteonly = boolean;
  export type ResponseExamples = unknown[];
  export type ResponsePropertyname = string;
  export type ResponseName = string;
  export type ResponseNamespace = string;
  export type ResponsePrefix = string;
  export type ResponseAttribute = boolean;
  export type ResponseWrapped = boolean;
  export type ResponseDescription3 = string;
  export type ResponseUrl = string;
  export type ResponseSummary = string;
  export type ResponseDescription4 = string;
  export type ResponseExternalvalue = string;
  export type ResponseSchema2 = ResponseSchema1 | ResponseReference;
  export type ResponseContenttype = string;
  export type ResponseStyle1 = string;
  export type ResponseExplode1 = boolean;
  export type ResponseAllowreserved1 = boolean;
  export type ResponseOperationref = string;
  export type ResponseOperationid = string;
  export type ResponseRequestbody = string;
  export type ResponseDescription5 = string;
  export type ResponseUrl1 = string;
  export type ResponseDescription6 = string;
  export type ResponseEnum1 = string[];
  export type ResponseDefault1 = string;
  export type ResponseDescription7 = string;

  export interface Response {
    description: ResponseDescription;
    headers?: ResponseHeaders;
    content?: ResponseContent1;
    links?: Links;
  }
  export interface ResponseHeaders {
    [k: string]: ResponseHeader | ResponseReference;
  }
  export interface ResponseHeader {
    description?: ResponseDescription1;
    required?: ResponseRequired;
    deprecated?: ResponseDeprecated;
    style?: ResponseStyle;
    explode?: ResponseExplode;
    allowReserved?: ResponseAllowreserved;
    schema?: ResponseSchema;
    example?: ResponseExample1;
    examples?: ResponseExamples1;
    content?: ResponseContent;
  }
  export interface ResponseSchema1 {
    $schema?: Response$Schema;
    $vocabulary?: Response$Vocabulary;
    $id?: Response$Id;
    $anchor?: Response$Anchor;
    $dynamicAnchor?: Response$Dynamicanchor;
    $ref?: Response$Ref;
    $dynamicRef?: Response$Dynamicref;
    $defs?: Response$Defs;
    $comment?: Response$Comment;
    allOf?: ResponseAllof;
    anyOf?: ResponseAnyof;
    oneOf?: ResponseOneof;
    not?: ResponseNot;
    if?: ResponseIf;
    then?: ResponseThen;
    else?: ResponseElse;
    dependentSchemas?: ResponseDependentschemas;
    prefixItems?: ResponsePrefixitems;
    items?: ResponseItems;
    contains?: ResponseContains;
    properties?: ResponseProperties;
    patternProperties?: ResponsePatternproperties;
    additionalProperties?: ResponseAdditionalproperties;
    propertyNames?: ResponsePropertynames;
    unevaluatedItems?: ResponseUnevaluateditems;
    unevaluatedProperties?: ResponseUnevaluatedproperties;
    type?: ResponseType;
    enum?: ResponseEnum;
    const?: ResponseConst;
    multipleOf?: ResponseMultipleof;
    maximum?: ResponseMaximum;
    exclusiveMaximum?: ResponseExclusivemaximum;
    minimum?: ResponseMinimum;
    exclusiveMinimum?: ResponseExclusiveminimum;
    maxLength?: ResponseMaxlength;
    minLength?: ResponseMinlength;
    pattern?: ResponsePattern;
    maxItems?: ResponseMaxitems;
    minItems?: ResponseMinitems;
    uniqueItems?: ResponseUniqueitems;
    maxContains?: ResponseMaxcontains;
    minContains?: ResponseMincontains;
    maxProperties?: ResponseMaxproperties;
    minProperties?: ResponseMinproperties;
    required?: ResponseRequired1;
    dependentRequired?: ResponseDependentrequired;
    format?: ResponseFormat;
    contentEncoding?: ResponseContentencoding;
    contentMediaType?: ResponseContentmediatype;
    contentSchema?: ResponseContentschema;
    title?: ResponseTitle;
    description?: ResponseDescription2;
    default?: ResponseDefault;
    deprecated?: ResponseDeprecated1;
    readOnly?: ResponseReadonly;
    writeOnly?: ResponseWriteonly;
    examples?: ResponseExamples;
    discriminator?: ResponseDiscriminator;
    xml?: ResponseXML;
    externalDocs?: ResponseExternalDocumentation;
    example?: ResponseExample;
  }
  export interface Response$Defs {
    [k: string]: ResponseSchema1 | boolean;
  }
  export interface ResponseDependentschemas {
    [k: string]: ResponseSchema1 | boolean;
  }
  export interface ResponseProperties {
    [k: string]: ResponseSchema1 | boolean;
  }
  export interface ResponsePatternproperties {
    [k: string]: ResponseSchema1 | boolean;
  }
  export interface ResponseConst {
    [k: string]: unknown;
  }
  export interface ResponseDependentrequired {
    [k: string]: string[];
  }
  export interface ResponseDefault {
    [k: string]: unknown;
  }
  export interface ResponseDiscriminator {
    propertyName: ResponsePropertyname;
    mapping?: ResponseMapping;
  }
  export interface ResponseMapping {
    [k: string]: string;
  }
  export interface ResponseXML {
    name?: ResponseName;
    namespace?: ResponseNamespace;
    prefix?: ResponsePrefix;
    attribute?: ResponseAttribute;
    wrapped?: ResponseWrapped;
  }
  export interface ResponseExternalDocumentation {
    description?: ResponseDescription3;
    url: ResponseUrl;
  }
  export interface ResponseExample {
    [k: string]: unknown;
  }
  export interface ResponseReference {
    allOf?: [{ $ref: { type: "string"; title: "$Ref" } }];
  }
  export interface ResponseExample1 {
    [k: string]: unknown;
  }
  export interface ResponseExamples1 {
    [k: string]: ResponseExample2 | ResponseReference;
  }
  export interface ResponseExample2 {
    summary?: ResponseSummary;
    description?: ResponseDescription4;
    value?: ResponseValue;
    externalValue?: ResponseExternalvalue;
  }
  export interface ResponseValue {
    [k: string]: unknown;
  }
  export interface ResponseContent {
    [k: string]: ResponseMediaType;
  }
  export interface ResponseMediaType {
    schema?: ResponseSchema2;
    example?: ResponseExample3;
    examples?: ResponseExamples2;
    encoding?: ResponseEncoding;
  }
  export interface ResponseExample3 {
    [k: string]: unknown;
  }
  export interface ResponseExamples2 {
    [k: string]: ResponseExample2 | ResponseReference;
  }
  export interface ResponseEncoding {
    [k: string]: ResponseEncoding1;
  }
  export interface ResponseEncoding1 {
    contentType?: ResponseContenttype;
    headers?: ResponseHeaders1;
    style?: ResponseStyle1;
    explode?: ResponseExplode1;
    allowReserved?: ResponseAllowreserved1;
  }
  export interface ResponseHeaders1 {
    [k: string]: ResponseHeader | ResponseReference;
  }
  export interface ResponseContent1 {
    [k: string]: ResponseMediaType;
  }
  export interface Links {
    [k: string]: ResponseLink | ResponseReference;
  }
  export interface ResponseLink {
    operationRef?: ResponseOperationref;
    operationId?: ResponseOperationid;
    parameters?: ResponseParameters;
    requestBody?: ResponseRequestbody;
    description?: ResponseDescription5;
    server?: ResponseServer;
  }
  export interface ResponseParameters {
    [k: string]: string;
  }
  export interface ResponseServer {
    url: ResponseUrl1;
    description?: ResponseDescription6;
    variables?: ResponseVariables;
  }
  export interface ResponseVariables {
    [k: string]: ResponseServerVariable;
  }
  export interface ResponseServerVariable {
    enum?: ResponseEnum1;
    default: ResponseDefault1;
    description?: ResponseDescription7;
  }

  export type ResultSchemaCode = number;
  export type Data = unknown[];
  export type Total = number;
  export type Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchema {
    code: ResultSchemaCode;
    data?: Data;
    total?: Total;
    msg?: Msg;
  }

  export type ResultSchema_UserLoginResponse_Code = number;
  export type ResultSchema_UserLoginResponse_Data =
    | UserLoginResponse
    | UserLoginResponse[];
  export type AccessToken = string;
  export type TokenType = string;
  export type ResultSchema_UserLoginResponse_Total = number;
  export type ResultSchema_UserLoginResponse_Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaUserLoginResponse {
    code: ResultSchema_UserLoginResponse_Code;
    data?: ResultSchema_UserLoginResponse_Data;
    total?: ResultSchema_UserLoginResponse_Total;
    msg?: ResultSchema_UserLoginResponse_Msg;
  }
  export interface UserLoginResponse {
    access_token: AccessToken;
    token_type: TokenType;
  }

  export type ResultSchema_WeChatLoginResponse_Code = number;
  export type ResultSchema_WeChatLoginResponse_Data =
    | WeChatLoginResponse
    | WeChatLoginResponse[];
  export type ResultSchema_WeChatLoginResponse_Openid = string;
  export type ResultSchema_WeChatLoginResponse_Total = number;
  export type ResultSchema_WeChatLoginResponse_Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaWeChatLoginResponse {
    code: ResultSchema_WeChatLoginResponse_Code;
    data?: ResultSchema_WeChatLoginResponse_Data;
    total?: ResultSchema_WeChatLoginResponse_Total;
    msg?: ResultSchema_WeChatLoginResponse_Msg;
  }
  export interface WeChatLoginResponse {
    openid: ResultSchema_WeChatLoginResponse_Openid;
  }

  export type ResultSchema_WeChatUserInformationOut_Code = number;
  export type ResultSchema_WeChatUserInformationOut_Data =
    | WeChatUserInformationOut
    | WeChatUserInformationOut[];
  export type ResultSchema_WeChatUserInformationOut_Openid = string;
  export type ResultSchema_WeChatUserInformationOut_Name = string;
  export type ResultSchema_WeChatUserInformationOut_IdCode = string;
  export type Balance = string;
  export type ReceiveName = string;
  export type ReceiveCode = string;
  export type ResultSchema_WeChatUserInformationOut_Phone = string;
  export type ResultSchema_WeChatUserInformationOut_Id = number;
  export type ResultSchema_WeChatUserInformationOut_CreateTime = string;
  export type IsDeleted = number;
  export type AdminImage = string;
  export type ResultSchema_WeChatUserInformationOut_Total = number;
  export type ResultSchema_WeChatUserInformationOut_Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaWeChatUserInformationOut {
    code: ResultSchema_WeChatUserInformationOut_Code;
    data?: ResultSchema_WeChatUserInformationOut_Data;
    total?: ResultSchema_WeChatUserInformationOut_Total;
    msg?: ResultSchema_WeChatUserInformationOut_Msg;
  }
  export interface WeChatUserInformationOut {
    openid: ResultSchema_WeChatUserInformationOut_Openid;
    name: ResultSchema_WeChatUserInformationOut_Name;
    id_code: ResultSchema_WeChatUserInformationOut_IdCode;
    balance: Balance;
    receive_name?: ReceiveName;
    receive_code?: ReceiveCode;
    phone: ResultSchema_WeChatUserInformationOut_Phone;
    id: ResultSchema_WeChatUserInformationOut_Id;
    create_time: ResultSchema_WeChatUserInformationOut_CreateTime;
    is_deleted: IsDeleted;
    admin_image?: AdminImage;
  }

  export type ResultSchemaBool_Code = number;
  export type ResultSchemaBool_Data = boolean | boolean[];
  export type ResultSchemaBool_Total = number;
  export type ResultSchemaBool_Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaBool {
    code: ResultSchemaBool_Code;
    data?: ResultSchemaBool_Data;
    total?: ResultSchemaBool_Total;
    msg?: ResultSchemaBool_Msg;
  }

  export type ResultSchemaList__T__Code = number;
  export type ResultSchemaList__T__Data = unknown[] | unknown[][];
  export type ResultSchemaList__T__Total = number;
  export type ResultSchemaList__T__Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaListT {
    code: ResultSchemaList__T__Code;
    data?: ResultSchemaList__T__Data;
    total?: ResultSchemaList__T__Total;
    msg?: ResultSchemaList__T__Msg;
  }

  export type ResultSchemaListSchemasAddressAddressOut__Code = number;
  export type ResultSchemaListSchemasAddressAddressOut__Data =
    | ResultSchemaListSchemasAddressAddressOut__AddressOut[]
    | ResultSchemaListSchemasAddressAddressOut__AddressOut[][];
  export type ResultSchemaListSchemasAddressAddressOut__Name = string;
  export type ResultSchemaListSchemasAddressAddressOut__Phone = string;
  export type ResultSchemaListSchemasAddressAddressOut__Detail = string;
  export type ResultSchemaListSchemasAddressAddressOut__Id = number;
  export type ResultSchemaListSchemasAddressAddressOut__UpdateTime = string;
  export type ResultSchemaListSchemasAddressAddressOut__Total = number;
  export type ResultSchemaListSchemasAddressAddressOut__Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaListSchemasAddressAddressOut {
    code: ResultSchemaListSchemasAddressAddressOut__Code;
    data?: ResultSchemaListSchemasAddressAddressOut__Data;
    total?: ResultSchemaListSchemasAddressAddressOut__Total;
    msg?: ResultSchemaListSchemasAddressAddressOut__Msg;
  }
  export interface ResultSchemaListSchemasAddressAddressOut__AddressOut {
    name: ResultSchemaListSchemasAddressAddressOut__Name;
    phone: ResultSchemaListSchemasAddressAddressOut__Phone;
    detail: ResultSchemaListSchemasAddressAddressOut__Detail;
    id: ResultSchemaListSchemasAddressAddressOut__Id;
    update_time: ResultSchemaListSchemasAddressAddressOut__UpdateTime;
  }

  export type ResultSchemaListSchemasBannerBannerBase__Code = number;
  export type ResultSchemaListSchemasBannerBannerBase__Data =
    | ResultSchemaListSchemasBannerBannerBase__BannerBase[]
    | ResultSchemaListSchemasBannerBannerBase__BannerBase[][];
  export type ResultSchemaListSchemasBannerBannerBase__Id = number;
  export type ResultSchemaListSchemasBannerBannerBase__Location = string;
  export type ResultSchemaListSchemasBannerBannerBase__Url = string;
  export type ResultSchemaListSchemasBannerBannerBase__Path = string;
  export type ResultSchemaListSchemasBannerBannerBase__Total = number;
  export type ResultSchemaListSchemasBannerBannerBase__Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaListSchemasBannerBannerBase {
    code: ResultSchemaListSchemasBannerBannerBase__Code;
    data?: ResultSchemaListSchemasBannerBannerBase__Data;
    total?: ResultSchemaListSchemasBannerBannerBase__Total;
    msg?: ResultSchemaListSchemasBannerBannerBase__Msg;
  }
  export interface ResultSchemaListSchemasBannerBannerBase__BannerBase {
    id: ResultSchemaListSchemasBannerBannerBase__Id;
    location: ResultSchemaListSchemasBannerBannerBase__Location;
    url: ResultSchemaListSchemasBannerBannerBase__Url;
    path: ResultSchemaListSchemasBannerBannerBase__Path;
  }

  export type ResultSchemaListSchemasOrderOrderDetailResponse__Code = number;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__Data =
    | ResultSchemaListSchemasOrderOrderDetailResponse__OrderDetailResponse[]
    | ResultSchemaListSchemasOrderOrderDetailResponse__OrderDetailResponse[][];
  export type ResultSchemaListSchemasOrderOrderDetailResponse__Id = number;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__UserId = number;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__Status = number;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__DeliverySite =
    string;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__TrackingCode =
    string;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__AddressId =
    number;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__FinallyCost =
    number;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__CreateTime =
    string;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__UpdateTime =
    string;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__Id1 = number;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__UserId1 = number;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__ProductName =
    string;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__ProductCode =
    string;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__Description =
    string;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__CreateTime1 =
    string;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__UpdateTime1 =
    string;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__Id2 = number;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__Size = string;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__Number = number;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__Status1 = number;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__Price = number;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__Description1 =
    string;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__FinallyPrice =
    number;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__Reason = string;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__ProductInfos =
    ResultSchemaListSchemasOrderOrderDetailResponse__ProductInfoResponse[];
  export type ResultSchemaListSchemasOrderOrderDetailResponse__Url = string;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__ProductUrls =
    ResultSchemaListSchemasOrderOrderDetailResponse__ProductUrlResponse[];
  export type ResultSchemaListSchemasOrderOrderDetailResponse__Status2 = number;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__Products =
    ResultSchemaListSchemasOrderOrderDetailResponse__ProductResponse[];
  export type ResultSchemaListSchemasOrderOrderDetailResponse__DeliveryName =
    string;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__DeliveryPhone =
    string;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__ReturnAddress =
    string;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__Name = string;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__Phone = string;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__Total = number;
  export type ResultSchemaListSchemasOrderOrderDetailResponse__Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaListSchemasOrderOrderDetailResponse {
    code: ResultSchemaListSchemasOrderOrderDetailResponse__Code;
    data?: ResultSchemaListSchemasOrderOrderDetailResponse__Data;
    total?: ResultSchemaListSchemasOrderOrderDetailResponse__Total;
    msg?: ResultSchemaListSchemasOrderOrderDetailResponse__Msg;
  }
  export interface ResultSchemaListSchemasOrderOrderDetailResponse__OrderDetailResponse {
    id: ResultSchemaListSchemasOrderOrderDetailResponse__Id;
    user_id: ResultSchemaListSchemasOrderOrderDetailResponse__UserId;
    status: ResultSchemaListSchemasOrderOrderDetailResponse__Status;
    delivery_site?: ResultSchemaListSchemasOrderOrderDetailResponse__DeliverySite;
    tracking_code?: ResultSchemaListSchemasOrderOrderDetailResponse__TrackingCode;
    address_id?: ResultSchemaListSchemasOrderOrderDetailResponse__AddressId;
    finally_cost?: ResultSchemaListSchemasOrderOrderDetailResponse__FinallyCost;
    create_time: ResultSchemaListSchemasOrderOrderDetailResponse__CreateTime;
    update_time?: ResultSchemaListSchemasOrderOrderDetailResponse__UpdateTime;
    products: ResultSchemaListSchemasOrderOrderDetailResponse__Products;
    delivery_name?: ResultSchemaListSchemasOrderOrderDetailResponse__DeliveryName;
    delivery_phone?: ResultSchemaListSchemasOrderOrderDetailResponse__DeliveryPhone;
    return_address?: ResultSchemaListSchemasOrderOrderDetailResponse__ReturnAddress;
    name?: ResultSchemaListSchemasOrderOrderDetailResponse__Name;
    phone?: ResultSchemaListSchemasOrderOrderDetailResponse__Phone;
  }
  export interface ResultSchemaListSchemasOrderOrderDetailResponse__ProductResponse {
    id: ResultSchemaListSchemasOrderOrderDetailResponse__Id1;
    user_id: ResultSchemaListSchemasOrderOrderDetailResponse__UserId1;
    product_name: ResultSchemaListSchemasOrderOrderDetailResponse__ProductName;
    product_code: ResultSchemaListSchemasOrderOrderDetailResponse__ProductCode;
    description?: ResultSchemaListSchemasOrderOrderDetailResponse__Description;
    create_time: ResultSchemaListSchemasOrderOrderDetailResponse__CreateTime1;
    update_time?: ResultSchemaListSchemasOrderOrderDetailResponse__UpdateTime1;
    product_infos?: ResultSchemaListSchemasOrderOrderDetailResponse__ProductInfos;
    product_urls?: ResultSchemaListSchemasOrderOrderDetailResponse__ProductUrls;
    status: ResultSchemaListSchemasOrderOrderDetailResponse__Status2;
  }
  export interface ResultSchemaListSchemasOrderOrderDetailResponse__ProductInfoResponse {
    id: ResultSchemaListSchemasOrderOrderDetailResponse__Id2;
    size: ResultSchemaListSchemasOrderOrderDetailResponse__Size;
    number: ResultSchemaListSchemasOrderOrderDetailResponse__Number;
    status: ResultSchemaListSchemasOrderOrderDetailResponse__Status1;
    price: ResultSchemaListSchemasOrderOrderDetailResponse__Price;
    description?: ResultSchemaListSchemasOrderOrderDetailResponse__Description1;
    finally_price: ResultSchemaListSchemasOrderOrderDetailResponse__FinallyPrice;
    reason?: ResultSchemaListSchemasOrderOrderDetailResponse__Reason;
  }
  export interface ResultSchemaListSchemasOrderOrderDetailResponse__ProductUrlResponse {
    url: ResultSchemaListSchemasOrderOrderDetailResponse__Url;
  }

  export type ResultSchemaListSchemasUserWeChatUserInformationOut__Code =
    number;
  export type ResultSchemaListSchemasUserWeChatUserInformationOut__Data =
    | ResultSchemaListSchemasUserWeChatUserInformationOut__WeChatUserInformationOut[]
    | ResultSchemaListSchemasUserWeChatUserInformationOut__WeChatUserInformationOut[][];
  export type ResultSchemaListSchemasUserWeChatUserInformationOut__Openid =
    string;
  export type ResultSchemaListSchemasUserWeChatUserInformationOut__Name =
    string;
  export type ResultSchemaListSchemasUserWeChatUserInformationOut__IdCode =
    string;
  export type ResultSchemaListSchemasUserWeChatUserInformationOut__Balance =
    string;
  export type ResultSchemaListSchemasUserWeChatUserInformationOut__ReceiveName =
    string;
  export type ResultSchemaListSchemasUserWeChatUserInformationOut__ReceiveCode =
    string;
  export type ResultSchemaListSchemasUserWeChatUserInformationOut__Phone =
    string;
  export type ResultSchemaListSchemasUserWeChatUserInformationOut__Id = number;
  export type ResultSchemaListSchemasUserWeChatUserInformationOut__CreateTime =
    string;
  export type ResultSchemaListSchemasUserWeChatUserInformationOut__IsDeleted =
    number;
  export type ResultSchemaListSchemasUserWeChatUserInformationOut__AdminImage =
    string;
  export type ResultSchemaListSchemasUserWeChatUserInformationOut__Total =
    number;
  export type ResultSchemaListSchemasUserWeChatUserInformationOut__Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaListSchemasUserWeChatUserInformationOut {
    code: ResultSchemaListSchemasUserWeChatUserInformationOut__Code;
    data?: ResultSchemaListSchemasUserWeChatUserInformationOut__Data;
    total?: ResultSchemaListSchemasUserWeChatUserInformationOut__Total;
    msg?: ResultSchemaListSchemasUserWeChatUserInformationOut__Msg;
  }
  export interface ResultSchemaListSchemasUserWeChatUserInformationOut__WeChatUserInformationOut {
    openid: ResultSchemaListSchemasUserWeChatUserInformationOut__Openid;
    name: ResultSchemaListSchemasUserWeChatUserInformationOut__Name;
    id_code: ResultSchemaListSchemasUserWeChatUserInformationOut__IdCode;
    balance: ResultSchemaListSchemasUserWeChatUserInformationOut__Balance;
    receive_name?: ResultSchemaListSchemasUserWeChatUserInformationOut__ReceiveName;
    receive_code?: ResultSchemaListSchemasUserWeChatUserInformationOut__ReceiveCode;
    phone: ResultSchemaListSchemasUserWeChatUserInformationOut__Phone;
    id: ResultSchemaListSchemasUserWeChatUserInformationOut__Id;
    create_time: ResultSchemaListSchemasUserWeChatUserInformationOut__CreateTime;
    is_deleted: ResultSchemaListSchemasUserWeChatUserInformationOut__IsDeleted;
    admin_image?: ResultSchemaListSchemasUserWeChatUserInformationOut__AdminImage;
  }

  export type ResultSchemaListSchemasWithdrawalWithdrawalOut__Code = number;
  export type ResultSchemaListSchemasWithdrawalWithdrawalOut__Data =
    | WithdrawalOut[]
    | WithdrawalOut[][];
  export type ResultSchemaListSchemasWithdrawalWithdrawalOut__Openid = string;
  export type WithdrawalMoney = string;
  export type ResultSchemaListSchemasWithdrawalWithdrawalOut__Id = number;
  export type ResultSchemaListSchemasWithdrawalWithdrawalOut__UserId = number;
  export type ResultSchemaListSchemasWithdrawalWithdrawalOut__CreateTime =
    string;
  export type ResultSchemaListSchemasWithdrawalWithdrawalOut__IdCode = string;
  export type ResultSchemaListSchemasWithdrawalWithdrawalOut__ReceiveCode =
    string;
  export type ResultSchemaListSchemasWithdrawalWithdrawalOut__Status = number;
  export type ResultSchemaListSchemasWithdrawalWithdrawalOut__Name = string;
  export type ResultSchemaListSchemasWithdrawalWithdrawalOut__Reason = string;
  export type ResultSchemaListSchemasWithdrawalWithdrawalOut__Phone = string;
  export type ResultSchemaListSchemasWithdrawalWithdrawalOut__Total = number;
  export type ResultSchemaListSchemasWithdrawalWithdrawalOut__Msg = string;

  /**
   * 结果数据模型
   */
  export interface ResultSchemaListSchemasWithdrawalWithdrawalOut {
    code: ResultSchemaListSchemasWithdrawalWithdrawalOut__Code;
    data?: ResultSchemaListSchemasWithdrawalWithdrawalOut__Data;
    total?: ResultSchemaListSchemasWithdrawalWithdrawalOut__Total;
    msg?: ResultSchemaListSchemasWithdrawalWithdrawalOut__Msg;
  }
  export interface WithdrawalOut {
    openid: ResultSchemaListSchemasWithdrawalWithdrawalOut__Openid;
    withdrawal_money?: WithdrawalMoney;
    id: ResultSchemaListSchemasWithdrawalWithdrawalOut__Id;
    user_id: ResultSchemaListSchemasWithdrawalWithdrawalOut__UserId;
    create_time: ResultSchemaListSchemasWithdrawalWithdrawalOut__CreateTime;
    id_code: ResultSchemaListSchemasWithdrawalWithdrawalOut__IdCode;
    receive_code?: ResultSchemaListSchemasWithdrawalWithdrawalOut__ReceiveCode;
    status: ResultSchemaListSchemasWithdrawalWithdrawalOut__Status;
    name?: ResultSchemaListSchemasWithdrawalWithdrawalOut__Name;
    reason?: ResultSchemaListSchemasWithdrawalWithdrawalOut__Reason;
    phone?: ResultSchemaListSchemasWithdrawalWithdrawalOut__Phone;
  }

  export type ProductId = number;
  export type ProductInfoId = number;
  export type OrderId = number;
  export type ReturnDeliverySite = string;
  export type ReturnTrackingCode = string;

  export interface ReturnGoodsAdd {
    product_id: ProductId;
    product_info_id: ProductInfoId;
    order_id: OrderId;
    return_delivery_site: ReturnDeliverySite;
    return_tracking_code: ReturnTrackingCode;
  }

  export type Schema$Schema = string;
  export type Schema$Vocabulary = string;
  export type Schema$Id = string;
  export type Schema$Anchor = string;
  export type Schema$Dynamicanchor = string;
  export type Schema$Ref = string;
  export type Schema$Dynamicref = string;
  export type Schema$Comment = string;
  export type SchemaAllof = (SchemaSchema | boolean)[];
  export type SchemaAnyof = (SchemaSchema | boolean)[];
  export type SchemaOneof = (SchemaSchema | boolean)[];
  export type SchemaNot = SchemaSchema | boolean;
  export type SchemaIf = SchemaSchema | boolean;
  export type SchemaThen = SchemaSchema | boolean;
  export type SchemaElse = SchemaSchema | boolean;
  export type SchemaPrefixitems = (SchemaSchema | boolean)[];
  export type SchemaItems =
    | (SchemaSchema | boolean)
    | (SchemaSchema | boolean)[];
  export type SchemaContains = SchemaSchema | boolean;
  export type SchemaAdditionalproperties = SchemaSchema | boolean;
  export type SchemaPropertynames = SchemaSchema | boolean;
  export type SchemaUnevaluateditems = SchemaSchema | boolean;
  export type SchemaUnevaluatedproperties = SchemaSchema | boolean;
  export type SchemaType = string;
  export type SchemaEnum = unknown[];
  export type SchemaMultipleof = number;
  export type SchemaMaximum = number;
  export type SchemaExclusivemaximum = number;
  export type SchemaMinimum = number;
  export type SchemaExclusiveminimum = number;
  export type SchemaMaxlength = number;
  export type SchemaMinlength = number;
  export type SchemaPattern = string;
  export type SchemaMaxitems = number;
  export type SchemaMinitems = number;
  export type SchemaUniqueitems = boolean;
  export type SchemaMaxcontains = number;
  export type SchemaMincontains = number;
  export type SchemaMaxproperties = number;
  export type SchemaMinproperties = number;
  export type SchemaRequired = string[];
  export type SchemaFormat = string;
  export type SchemaContentencoding = string;
  export type SchemaContentmediatype = string;
  export type SchemaContentschema = SchemaSchema | boolean;
  export type SchemaTitle = string;
  export type SchemaDescription = string;
  export type SchemaDeprecated = boolean;
  export type SchemaReadonly = boolean;
  export type SchemaWriteonly = boolean;
  export type SchemaExamples = unknown[];
  export type SchemaPropertyname = string;
  export type SchemaName = string;
  export type SchemaNamespace = string;
  export type SchemaPrefix = string;
  export type SchemaAttribute = boolean;
  export type SchemaWrapped = boolean;
  export type SchemaDescription1 = string;
  export type SchemaUrl = string;

  export interface SchemaSchema {
    $schema?: Schema$Schema;
    $vocabulary?: Schema$Vocabulary;
    $id?: Schema$Id;
    $anchor?: Schema$Anchor;
    $dynamicAnchor?: Schema$Dynamicanchor;
    $ref?: Schema$Ref;
    $dynamicRef?: Schema$Dynamicref;
    $defs?: Schema$Defs;
    $comment?: Schema$Comment;
    allOf?: SchemaAllof;
    anyOf?: SchemaAnyof;
    oneOf?: SchemaOneof;
    not?: SchemaNot;
    if?: SchemaIf;
    then?: SchemaThen;
    else?: SchemaElse;
    dependentSchemas?: SchemaDependentschemas;
    prefixItems?: SchemaPrefixitems;
    items?: SchemaItems;
    contains?: SchemaContains;
    properties?: SchemaProperties;
    patternProperties?: SchemaPatternproperties;
    additionalProperties?: SchemaAdditionalproperties;
    propertyNames?: SchemaPropertynames;
    unevaluatedItems?: SchemaUnevaluateditems;
    unevaluatedProperties?: SchemaUnevaluatedproperties;
    type?: SchemaType;
    enum?: SchemaEnum;
    const?: SchemaConst;
    multipleOf?: SchemaMultipleof;
    maximum?: SchemaMaximum;
    exclusiveMaximum?: SchemaExclusivemaximum;
    minimum?: SchemaMinimum;
    exclusiveMinimum?: SchemaExclusiveminimum;
    maxLength?: SchemaMaxlength;
    minLength?: SchemaMinlength;
    pattern?: SchemaPattern;
    maxItems?: SchemaMaxitems;
    minItems?: SchemaMinitems;
    uniqueItems?: SchemaUniqueitems;
    maxContains?: SchemaMaxcontains;
    minContains?: SchemaMincontains;
    maxProperties?: SchemaMaxproperties;
    minProperties?: SchemaMinproperties;
    required?: SchemaRequired;
    dependentRequired?: SchemaDependentrequired;
    format?: SchemaFormat;
    contentEncoding?: SchemaContentencoding;
    contentMediaType?: SchemaContentmediatype;
    contentSchema?: SchemaContentschema;
    title?: SchemaTitle;
    description?: SchemaDescription;
    default?: SchemaDefault;
    deprecated?: SchemaDeprecated;
    readOnly?: SchemaReadonly;
    writeOnly?: SchemaWriteonly;
    examples?: SchemaExamples;
    discriminator?: SchemaDiscriminator;
    xml?: SchemaXML;
    externalDocs?: SchemaExternalDocumentation;
    example?: SchemaExample;
  }
  export interface Schema$Defs {
    [k: string]: SchemaSchema | boolean;
  }
  export interface SchemaDependentschemas {
    [k: string]: SchemaSchema | boolean;
  }
  export interface SchemaProperties {
    [k: string]: SchemaSchema | boolean;
  }
  export interface SchemaPatternproperties {
    [k: string]: SchemaSchema | boolean;
  }
  export interface SchemaConst {
    [k: string]: unknown;
  }
  export interface SchemaDependentrequired {
    [k: string]: string[];
  }
  export interface SchemaDefault {
    [k: string]: unknown;
  }
  export interface SchemaDiscriminator {
    propertyName: SchemaPropertyname;
    mapping?: SchemaMapping;
  }
  export interface SchemaMapping {
    [k: string]: string;
  }
  export interface SchemaXML {
    name?: SchemaName;
    namespace?: SchemaNamespace;
    prefix?: SchemaPrefix;
    attribute?: SchemaAttribute;
    wrapped?: SchemaWrapped;
  }
  export interface SchemaExternalDocumentation {
    description?: SchemaDescription1;
    url: SchemaUrl;
  }
  export interface SchemaExample {
    [k: string]: unknown;
  }

  export type PhoneNumber = string;

  export interface SendCodeRequest {
    phone_number: PhoneNumber;
  }

  export type ServerUrl = string;
  export type ServerDescription = string;
  export type ServerEnum = string[];
  export type ServerDefault = string;
  export type ServerDescription1 = string;

  export interface ServerServer {
    url: ServerUrl;
    description?: ServerDescription;
    variables?: ServerVariables;
  }
  export interface ServerVariables {
    [k: string]: ServerServerVariable;
  }
  export interface ServerServerVariable {
    enum?: ServerEnum;
    default: ServerDefault;
    description?: ServerDescription1;
  }

  export type ServerVariableEnum = string[];
  export type ServerVariableDefault = string;
  export type ServerVariableDescription = string;

  export interface ServerVariableServerVariable {
    enum?: ServerVariableEnum;
    default: ServerVariableDefault;
    description?: ServerVariableDescription;
  }

  export type UpdateProductListProductId = number;
  export type ProductInfoIds = number[];
  export type UnProductInfoIds = number[];

  export interface UpdateProductList {
    product_id: UpdateProductListProductId;
    product_info_ids: ProductInfoIds;
    un_product_info_ids: UnProductInfoIds;
  }

  export type Username = string;
  export type Password = string;

  /**
   * 登录
   */
  export interface UserLogin {
    username: Username;
    password: Password;
  }

  export type UserLoginResponseAccessToken = string;
  export type UserLoginResponseTokenType = string;

  export interface UserLoginResponseUserLoginResponse {
    access_token: UserLoginResponseAccessToken;
    token_type: UserLoginResponseTokenType;
  }

  export type ValidationErrorLocation = (string | number)[];
  export type ValidationErrorMessage = string;
  export type ValidationErrorErrorType = string;

  export interface ValidationErrorValidationError {
    loc: ValidationErrorLocation;
    msg: ValidationErrorMessage;
    type: ValidationErrorErrorType;
  }

  export type VerifyCodeRequestPhoneNumber = string;
  export type VerifyCodeRequestCode = string;

  export interface VerifyCodeRequest {
    phone_number: VerifyCodeRequestPhoneNumber;
    code: VerifyCodeRequestCode;
  }

  export type WeChatAuthReqOpenid = string;
  export type WeChatAuthReqName = string;
  export type WeChatAuthReqIdCode = string;

  export interface WeChatAuthReq {
    openid: WeChatAuthReqOpenid;
    name: WeChatAuthReqName;
    id_code: WeChatAuthReqIdCode;
  }

  export type WeChatLoginRequestCode = string;
  export type WeChatLoginRequestPhone = string;
  export type WeChatLoginRequestVerifyCode = string;

  export interface WeChatLoginRequest {
    code: WeChatLoginRequestCode;
    phone: WeChatLoginRequestPhone;
    verify_code: WeChatLoginRequestVerifyCode;
  }

  export type WeChatLoginResponseOpenid = string;

  export interface WeChatLoginResponseWeChatLoginResponse {
    openid: WeChatLoginResponseOpenid;
  }

  export type WeChatUserInformationOutOpenid = string;
  export type WeChatUserInformationOutName = string;
  export type WeChatUserInformationOutIdCode = string;
  export type WeChatUserInformationOutBalance = string;
  export type WeChatUserInformationOutReceiveName = string;
  export type WeChatUserInformationOutReceiveCode = string;
  export type WeChatUserInformationOutPhone = string;
  export type WeChatUserInformationOutId = number;
  export type WeChatUserInformationOutCreateTime = string;
  export type WeChatUserInformationOutIsDeleted = number;
  export type WeChatUserInformationOutAdminImage = string;

  export interface WeChatUserInformationOutWeChatUserInformationOut {
    openid: WeChatUserInformationOutOpenid;
    name: WeChatUserInformationOutName;
    id_code: WeChatUserInformationOutIdCode;
    balance: WeChatUserInformationOutBalance;
    receive_name?: WeChatUserInformationOutReceiveName;
    receive_code?: WeChatUserInformationOutReceiveCode;
    phone: WeChatUserInformationOutPhone;
    id: WeChatUserInformationOutId;
    create_time: WeChatUserInformationOutCreateTime;
    is_deleted: WeChatUserInformationOutIsDeleted;
    admin_image?: WeChatUserInformationOutAdminImage;
  }

  export type WechatUserDeliveryReqOpenid = string;
  export type WechatUserDeliveryReqOrderId = number;
  export type WechatUserDeliveryReqProductId = number;
  export type WechatUserDeliveryReqProductInfoIds = number[];
  export type WechatUserDeliveryReqUnProductInfoIds = number[];
  export type UpdateProduct = WechatUserDeliveryReqUpdateProductList[];
  export type WechatUserDeliveryReqDeliverySite = string;
  export type WechatUserDeliveryReqTrackingCode = string;
  export type WechatUserDeliveryReqDeliveryName = string;
  export type WechatUserDeliveryReqDeliveryPhone = string;
  export type WechatUserDeliveryReqReturnAddress = string;

  export interface WechatUserDeliveryReq {
    openid: WechatUserDeliveryReqOpenid;
    order_id: WechatUserDeliveryReqOrderId;
    update_product: UpdateProduct;
    delivery_site: WechatUserDeliveryReqDeliverySite;
    tracking_code: WechatUserDeliveryReqTrackingCode;
    delivery_name: WechatUserDeliveryReqDeliveryName;
    delivery_phone: WechatUserDeliveryReqDeliveryPhone;
    return_address: WechatUserDeliveryReqReturnAddress;
  }
  export interface WechatUserDeliveryReqUpdateProductList {
    product_id: WechatUserDeliveryReqProductId;
    product_info_ids: WechatUserDeliveryReqProductInfoIds;
    un_product_info_ids: WechatUserDeliveryReqUnProductInfoIds;
  }

  export type WithdrawalCreateOpenid = string;
  export type WithdrawalCreateWithdrawalMoney = string;

  export interface WithdrawalCreate {
    openid: WithdrawalCreateOpenid;
    withdrawal_money?: WithdrawalCreateWithdrawalMoney;
  }

  export type WithdrawalOutOpenid = string;
  export type WithdrawalOutWithdrawalMoney = string;
  export type WithdrawalOutId = number;
  export type WithdrawalOutUserId = number;
  export type WithdrawalOutCreateTime = string;
  export type WithdrawalOutIdCode = string;
  export type WithdrawalOutReceiveCode = string;
  export type WithdrawalOutStatus = number;
  export type WithdrawalOutName = string;
  export type WithdrawalOutReason = string;
  export type WithdrawalOutPhone = string;

  export interface WithdrawalOutWithdrawalOut {
    openid: WithdrawalOutOpenid;
    withdrawal_money?: WithdrawalOutWithdrawalMoney;
    id: WithdrawalOutId;
    user_id: WithdrawalOutUserId;
    create_time: WithdrawalOutCreateTime;
    id_code: WithdrawalOutIdCode;
    receive_code?: WithdrawalOutReceiveCode;
    status: WithdrawalOutStatus;
    name?: WithdrawalOutName;
    reason?: WithdrawalOutReason;
    phone?: WithdrawalOutPhone;
  }

  export type XMLName = string;
  export type XMLNamespace = string;
  export type XMLPrefix = string;
  export type XMLAttribute = boolean;
  export type XMLWrapped = boolean;

  export interface XMLXML {
    name?: XMLName;
    namespace?: XMLNamespace;
    prefix?: XMLPrefix;
    attribute?: XMLAttribute;
    wrapped?: XMLWrapped;
  }

  export type UserLoginForAccessTokenApiWechatuserPcLoginPostBody =
    UserLoginForAccessTokenApiWechatuserPcLoginPostBodyUserLogin;
  export type UserLoginForAccessTokenApiWechatuserPcLoginPostBodyUsername =
    string;
  export type UserLoginForAccessTokenApiWechatuserPcLoginPostBodyPassword =
    string;

  /**
   * 登录
   */
  export interface UserLoginForAccessTokenApiWechatuserPcLoginPostBodyUserLogin {
    username: UserLoginForAccessTokenApiWechatuserPcLoginPostBodyUsername;
    password: UserLoginForAccessTokenApiWechatuserPcLoginPostBodyPassword;
  }

  export type UserLoginForAccessTokenApiWechatuserPcLoginPostResponses =
    UserLoginForAccessTokenApiWechatuserPcLoginPostResponsesResultSchemaUserLoginResponse;
  export type UserLoginForAccessTokenApiWechatuserPcLoginPostResponsesCode =
    number;
  export type UserLoginForAccessTokenApiWechatuserPcLoginPostResponsesData =
    | UserLoginForAccessTokenApiWechatuserPcLoginPostResponsesUserLoginResponse
    | UserLoginForAccessTokenApiWechatuserPcLoginPostResponsesUserLoginResponse[];
  export type UserLoginForAccessTokenApiWechatuserPcLoginPostResponsesAccessToken =
    string;
  export type UserLoginForAccessTokenApiWechatuserPcLoginPostResponsesTokenType =
    string;
  export type UserLoginForAccessTokenApiWechatuserPcLoginPostResponsesTotal =
    number;
  export type UserLoginForAccessTokenApiWechatuserPcLoginPostResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface UserLoginForAccessTokenApiWechatuserPcLoginPostResponsesResultSchemaUserLoginResponse {
    code: UserLoginForAccessTokenApiWechatuserPcLoginPostResponsesCode;
    data?: UserLoginForAccessTokenApiWechatuserPcLoginPostResponsesData;
    total?: UserLoginForAccessTokenApiWechatuserPcLoginPostResponsesTotal;
    msg?: UserLoginForAccessTokenApiWechatuserPcLoginPostResponsesMsg;
  }
  export interface UserLoginForAccessTokenApiWechatuserPcLoginPostResponsesUserLoginResponse {
    access_token: UserLoginForAccessTokenApiWechatuserPcLoginPostResponsesAccessToken;
    token_type: UserLoginForAccessTokenApiWechatuserPcLoginPostResponsesTokenType;
  }

  export type UserGetUsersApiWechatuserPcWechatGetParamsName = string;
  export type UserGetUsersApiWechatuserPcWechatGetParamsPhone = string;
  export type UserGetUsersApiWechatuserPcWechatGetParamsIdCode = string;
  export type UserGetUsersApiWechatuserPcWechatGetParamsIsDeleted = number;
  export type Page = number;
  export type PageSize = number;

  export interface UserGetUsersApiWechatuserPcWechatGetParams {
    name?: UserGetUsersApiWechatuserPcWechatGetParamsName;
    phone?: UserGetUsersApiWechatuserPcWechatGetParamsPhone;
    id_code?: UserGetUsersApiWechatuserPcWechatGetParamsIdCode;
    is_deleted?: UserGetUsersApiWechatuserPcWechatGetParamsIsDeleted;
    page?: Page;
    page_size?: PageSize;
  }

  export type UserGetUsersApiWechatuserPcWechatGetResponses =
    UserGetUsersApiWechatuserPcWechatGetResponsesResultSchemaListSchemasUserWeChatUserInformationOut;
  export type UserGetUsersApiWechatuserPcWechatGetResponsesCode = number;
  export type UserGetUsersApiWechatuserPcWechatGetResponsesData =
    | UserGetUsersApiWechatuserPcWechatGetResponsesWeChatUserInformationOut[]
    | UserGetUsersApiWechatuserPcWechatGetResponsesWeChatUserInformationOut[][];
  export type UserGetUsersApiWechatuserPcWechatGetResponsesOpenid = string;
  export type UserGetUsersApiWechatuserPcWechatGetResponsesName = string;
  export type UserGetUsersApiWechatuserPcWechatGetResponsesIdCode = string;
  export type UserGetUsersApiWechatuserPcWechatGetResponsesBalance = string;
  export type UserGetUsersApiWechatuserPcWechatGetResponsesReceiveName = string;
  export type UserGetUsersApiWechatuserPcWechatGetResponsesReceiveCode = string;
  export type UserGetUsersApiWechatuserPcWechatGetResponsesPhone = string;
  export type UserGetUsersApiWechatuserPcWechatGetResponsesId = number;
  export type UserGetUsersApiWechatuserPcWechatGetResponsesCreateTime = string;
  export type UserGetUsersApiWechatuserPcWechatGetResponsesIsDeleted = number;
  export type UserGetUsersApiWechatuserPcWechatGetResponsesAdminImage = string;
  export type UserGetUsersApiWechatuserPcWechatGetResponsesTotal = number;
  export type UserGetUsersApiWechatuserPcWechatGetResponsesMsg = string;

  /**
   * 结果数据模型
   */
  export interface UserGetUsersApiWechatuserPcWechatGetResponsesResultSchemaListSchemasUserWeChatUserInformationOut {
    code: UserGetUsersApiWechatuserPcWechatGetResponsesCode;
    data?: UserGetUsersApiWechatuserPcWechatGetResponsesData;
    total?: UserGetUsersApiWechatuserPcWechatGetResponsesTotal;
    msg?: UserGetUsersApiWechatuserPcWechatGetResponsesMsg;
  }
  export interface UserGetUsersApiWechatuserPcWechatGetResponsesWeChatUserInformationOut {
    openid: UserGetUsersApiWechatuserPcWechatGetResponsesOpenid;
    name: UserGetUsersApiWechatuserPcWechatGetResponsesName;
    id_code: UserGetUsersApiWechatuserPcWechatGetResponsesIdCode;
    balance: UserGetUsersApiWechatuserPcWechatGetResponsesBalance;
    receive_name?: UserGetUsersApiWechatuserPcWechatGetResponsesReceiveName;
    receive_code?: UserGetUsersApiWechatuserPcWechatGetResponsesReceiveCode;
    phone: UserGetUsersApiWechatuserPcWechatGetResponsesPhone;
    id: UserGetUsersApiWechatuserPcWechatGetResponsesId;
    create_time: UserGetUsersApiWechatuserPcWechatGetResponsesCreateTime;
    is_deleted: UserGetUsersApiWechatuserPcWechatGetResponsesIsDeleted;
    admin_image?: UserGetUsersApiWechatuserPcWechatGetResponsesAdminImage;
  }

  export type UserUnbanWechatUserApiWechatuserPcWechatPostParamsId = number;

  export interface UserUnbanWechatUserApiWechatuserPcWechatPostParams {
    id?: UserUnbanWechatUserApiWechatuserPcWechatPostParamsId;
  }

  export type UserUnbanWechatUserApiWechatuserPcWechatPostResponses =
    UserUnbanWechatUserApiWechatuserPcWechatPostResponsesResultSchema;
  export type UserUnbanWechatUserApiWechatuserPcWechatPostResponsesCode =
    number;
  export type UserUnbanWechatUserApiWechatuserPcWechatPostResponsesData =
    unknown[];
  export type UserUnbanWechatUserApiWechatuserPcWechatPostResponsesTotal =
    number;
  export type UserUnbanWechatUserApiWechatuserPcWechatPostResponsesMsg = string;

  /**
   * 结果数据模型
   */
  export interface UserUnbanWechatUserApiWechatuserPcWechatPostResponsesResultSchema {
    code: UserUnbanWechatUserApiWechatuserPcWechatPostResponsesCode;
    data?: UserUnbanWechatUserApiWechatuserPcWechatPostResponsesData;
    total?: UserUnbanWechatUserApiWechatuserPcWechatPostResponsesTotal;
    msg?: UserUnbanWechatUserApiWechatuserPcWechatPostResponsesMsg;
  }

  export type UserBanWechatUserApiWechatuserPcWechatDeleteParamsId = number;

  export interface UserBanWechatUserApiWechatuserPcWechatDeleteParams {
    id?: UserBanWechatUserApiWechatuserPcWechatDeleteParamsId;
  }

  export type UserBanWechatUserApiWechatuserPcWechatDeleteResponses =
    UserBanWechatUserApiWechatuserPcWechatDeleteResponsesResultSchema;
  export type UserBanWechatUserApiWechatuserPcWechatDeleteResponsesCode =
    number;
  export type UserBanWechatUserApiWechatuserPcWechatDeleteResponsesData =
    unknown[];
  export type UserBanWechatUserApiWechatuserPcWechatDeleteResponsesTotal =
    number;
  export type UserBanWechatUserApiWechatuserPcWechatDeleteResponsesMsg = string;

  /**
   * 结果数据模型
   */
  export interface UserBanWechatUserApiWechatuserPcWechatDeleteResponsesResultSchema {
    code: UserBanWechatUserApiWechatuserPcWechatDeleteResponsesCode;
    data?: UserBanWechatUserApiWechatuserPcWechatDeleteResponsesData;
    total?: UserBanWechatUserApiWechatuserPcWechatDeleteResponsesTotal;
    msg?: UserBanWechatUserApiWechatuserPcWechatDeleteResponsesMsg;
  }

  export type UserModifyBalanceApiWechatuserPcWechatPatchParamsId = number;
  export type UserModifyBalanceApiWechatuserPcWechatPatchParamsBalance = string;

  export interface UserModifyBalanceApiWechatuserPcWechatPatchParams {
    id?: UserModifyBalanceApiWechatuserPcWechatPatchParamsId;
    balance?: UserModifyBalanceApiWechatuserPcWechatPatchParamsBalance;
  }

  export type UserModifyBalanceApiWechatuserPcWechatPatchResponses =
    UserModifyBalanceApiWechatuserPcWechatPatchResponsesResultSchema;
  export type UserModifyBalanceApiWechatuserPcWechatPatchResponsesCode = number;
  export type UserModifyBalanceApiWechatuserPcWechatPatchResponsesData =
    unknown[];
  export type UserModifyBalanceApiWechatuserPcWechatPatchResponsesTotal =
    number;
  export type UserModifyBalanceApiWechatuserPcWechatPatchResponsesMsg = string;

  /**
   * 结果数据模型
   */
  export interface UserModifyBalanceApiWechatuserPcWechatPatchResponsesResultSchema {
    code: UserModifyBalanceApiWechatuserPcWechatPatchResponsesCode;
    data?: UserModifyBalanceApiWechatuserPcWechatPatchResponsesData;
    total?: UserModifyBalanceApiWechatuserPcWechatPatchResponsesTotal;
    msg?: UserModifyBalanceApiWechatuserPcWechatPatchResponsesMsg;
  }

  export type UserSendVerificationCodeApiWechatuserPcSendVerificationCodePostResponses =
    UserSendVerificationCodeApiWechatuserPcSendVerificationCodePostResponsesResultSchema;
  export type UserSendVerificationCodeApiWechatuserPcSendVerificationCodePostResponsesCode =
    number;
  export type UserSendVerificationCodeApiWechatuserPcSendVerificationCodePostResponsesData =
    unknown[];
  export type UserSendVerificationCodeApiWechatuserPcSendVerificationCodePostResponsesTotal =
    number;
  export type UserSendVerificationCodeApiWechatuserPcSendVerificationCodePostResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface UserSendVerificationCodeApiWechatuserPcSendVerificationCodePostResponsesResultSchema {
    code: UserSendVerificationCodeApiWechatuserPcSendVerificationCodePostResponsesCode;
    data?: UserSendVerificationCodeApiWechatuserPcSendVerificationCodePostResponsesData;
    total?: UserSendVerificationCodeApiWechatuserPcSendVerificationCodePostResponsesTotal;
    msg?: UserSendVerificationCodeApiWechatuserPcSendVerificationCodePostResponsesMsg;
  }

  export type UserWechatLoginApiWechatuserLoginPostBody =
    UserWechatLoginApiWechatuserLoginPostBodyWeChatLoginRequest;
  export type UserWechatLoginApiWechatuserLoginPostBodyCode = string;
  export type UserWechatLoginApiWechatuserLoginPostBodyPhone = string;
  export type UserWechatLoginApiWechatuserLoginPostBodyVerifyCode = string;

  export interface UserWechatLoginApiWechatuserLoginPostBodyWeChatLoginRequest {
    code: UserWechatLoginApiWechatuserLoginPostBodyCode;
    phone: UserWechatLoginApiWechatuserLoginPostBodyPhone;
    verify_code: UserWechatLoginApiWechatuserLoginPostBodyVerifyCode;
  }

  export type UserWechatLoginApiWechatuserLoginPostResponses =
    UserWechatLoginApiWechatuserLoginPostResponsesResultSchemaWeChatLoginResponse;
  export type UserWechatLoginApiWechatuserLoginPostResponsesCode = number;
  export type UserWechatLoginApiWechatuserLoginPostResponsesData =
    | UserWechatLoginApiWechatuserLoginPostResponsesWeChatLoginResponse
    | UserWechatLoginApiWechatuserLoginPostResponsesWeChatLoginResponse[];
  export type UserWechatLoginApiWechatuserLoginPostResponsesOpenid = string;
  export type UserWechatLoginApiWechatuserLoginPostResponsesTotal = number;
  export type UserWechatLoginApiWechatuserLoginPostResponsesMsg = string;

  /**
   * 结果数据模型
   */
  export interface UserWechatLoginApiWechatuserLoginPostResponsesResultSchemaWeChatLoginResponse {
    code: UserWechatLoginApiWechatuserLoginPostResponsesCode;
    data?: UserWechatLoginApiWechatuserLoginPostResponsesData;
    total?: UserWechatLoginApiWechatuserLoginPostResponsesTotal;
    msg?: UserWechatLoginApiWechatuserLoginPostResponsesMsg;
  }
  export interface UserWechatLoginApiWechatuserLoginPostResponsesWeChatLoginResponse {
    openid: UserWechatLoginApiWechatuserLoginPostResponsesOpenid;
  }

  export type UserWechatAuthenticationApiWechatuserAuthenticationPostBody =
    UserWechatAuthenticationApiWechatuserAuthenticationPostBodyWeChatAuthReq;
  export type UserWechatAuthenticationApiWechatuserAuthenticationPostBodyOpenid =
    string;
  export type UserWechatAuthenticationApiWechatuserAuthenticationPostBodyName =
    string;
  export type UserWechatAuthenticationApiWechatuserAuthenticationPostBodyIdCode =
    string;

  export interface UserWechatAuthenticationApiWechatuserAuthenticationPostBodyWeChatAuthReq {
    openid: UserWechatAuthenticationApiWechatuserAuthenticationPostBodyOpenid;
    name: UserWechatAuthenticationApiWechatuserAuthenticationPostBodyName;
    id_code: UserWechatAuthenticationApiWechatuserAuthenticationPostBodyIdCode;
  }

  export type UserWechatAuthenticationApiWechatuserAuthenticationPostResponses =
    UserWechatAuthenticationApiWechatuserAuthenticationPostResponsesResultSchema;
  export type UserWechatAuthenticationApiWechatuserAuthenticationPostResponsesCode =
    number;
  export type UserWechatAuthenticationApiWechatuserAuthenticationPostResponsesData =
    unknown[];
  export type UserWechatAuthenticationApiWechatuserAuthenticationPostResponsesTotal =
    number;
  export type UserWechatAuthenticationApiWechatuserAuthenticationPostResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface UserWechatAuthenticationApiWechatuserAuthenticationPostResponsesResultSchema {
    code: UserWechatAuthenticationApiWechatuserAuthenticationPostResponsesCode;
    data?: UserWechatAuthenticationApiWechatuserAuthenticationPostResponsesData;
    total?: UserWechatAuthenticationApiWechatuserAuthenticationPostResponsesTotal;
    msg?: UserWechatAuthenticationApiWechatuserAuthenticationPostResponsesMsg;
  }

  export type UserWechatAuthenticationApiWechatuserReceivePostBody =
    UserWechatAuthenticationApiWechatuserReceivePostBodyWeChatAuthReq;
  export type UserWechatAuthenticationApiWechatuserReceivePostBodyOpenid =
    string;
  export type UserWechatAuthenticationApiWechatuserReceivePostBodyName = string;
  export type UserWechatAuthenticationApiWechatuserReceivePostBodyIdCode =
    string;

  export interface UserWechatAuthenticationApiWechatuserReceivePostBodyWeChatAuthReq {
    openid: UserWechatAuthenticationApiWechatuserReceivePostBodyOpenid;
    name: UserWechatAuthenticationApiWechatuserReceivePostBodyName;
    id_code: UserWechatAuthenticationApiWechatuserReceivePostBodyIdCode;
  }

  export type UserWechatAuthenticationApiWechatuserReceivePostResponses =
    UserWechatAuthenticationApiWechatuserReceivePostResponsesResultSchema;
  export type UserWechatAuthenticationApiWechatuserReceivePostResponsesCode =
    number;
  export type UserWechatAuthenticationApiWechatuserReceivePostResponsesData =
    unknown[];
  export type UserWechatAuthenticationApiWechatuserReceivePostResponsesTotal =
    number;
  export type UserWechatAuthenticationApiWechatuserReceivePostResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface UserWechatAuthenticationApiWechatuserReceivePostResponsesResultSchema {
    code: UserWechatAuthenticationApiWechatuserReceivePostResponsesCode;
    data?: UserWechatAuthenticationApiWechatuserReceivePostResponsesData;
    total?: UserWechatAuthenticationApiWechatuserReceivePostResponsesTotal;
    msg?: UserWechatAuthenticationApiWechatuserReceivePostResponsesMsg;
  }

  export type UserWechatAuthenticationApiWechatuserReceivePatchBody =
    UserWechatAuthenticationApiWechatuserReceivePatchBodyWeChatAuthReq;
  export type UserWechatAuthenticationApiWechatuserReceivePatchBodyOpenid =
    string;
  export type UserWechatAuthenticationApiWechatuserReceivePatchBodyName =
    string;
  export type UserWechatAuthenticationApiWechatuserReceivePatchBodyIdCode =
    string;

  export interface UserWechatAuthenticationApiWechatuserReceivePatchBodyWeChatAuthReq {
    openid: UserWechatAuthenticationApiWechatuserReceivePatchBodyOpenid;
    name: UserWechatAuthenticationApiWechatuserReceivePatchBodyName;
    id_code: UserWechatAuthenticationApiWechatuserReceivePatchBodyIdCode;
  }

  export type UserWechatAuthenticationApiWechatuserReceivePatchResponses =
    UserWechatAuthenticationApiWechatuserReceivePatchResponsesResultSchema;
  export type UserWechatAuthenticationApiWechatuserReceivePatchResponsesCode =
    number;
  export type UserWechatAuthenticationApiWechatuserReceivePatchResponsesData =
    unknown[];
  export type UserWechatAuthenticationApiWechatuserReceivePatchResponsesTotal =
    number;
  export type UserWechatAuthenticationApiWechatuserReceivePatchResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface UserWechatAuthenticationApiWechatuserReceivePatchResponsesResultSchema {
    code: UserWechatAuthenticationApiWechatuserReceivePatchResponsesCode;
    data?: UserWechatAuthenticationApiWechatuserReceivePatchResponsesData;
    total?: UserWechatAuthenticationApiWechatuserReceivePatchResponsesTotal;
    msg?: UserWechatAuthenticationApiWechatuserReceivePatchResponsesMsg;
  }

  export type UserWechatAuthenticationApiWechatuserStatusGetParamsOpenid =
    string;

  export interface UserWechatAuthenticationApiWechatuserStatusGetParams {
    openid?: UserWechatAuthenticationApiWechatuserStatusGetParamsOpenid;
  }

  export type UserWechatAuthenticationApiWechatuserStatusGetResponses =
    UserWechatAuthenticationApiWechatuserStatusGetResponsesResultSchemaBool;
  export type UserWechatAuthenticationApiWechatuserStatusGetResponsesCode =
    number;
  export type UserWechatAuthenticationApiWechatuserStatusGetResponsesData =
    | boolean
    | boolean[];
  export type UserWechatAuthenticationApiWechatuserStatusGetResponsesTotal =
    number;
  export type UserWechatAuthenticationApiWechatuserStatusGetResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface UserWechatAuthenticationApiWechatuserStatusGetResponsesResultSchemaBool {
    code: UserWechatAuthenticationApiWechatuserStatusGetResponsesCode;
    data?: UserWechatAuthenticationApiWechatuserStatusGetResponsesData;
    total?: UserWechatAuthenticationApiWechatuserStatusGetResponsesTotal;
    msg?: UserWechatAuthenticationApiWechatuserStatusGetResponsesMsg;
  }

  export type UserWechatAuthenticationApiWechatuserInformationGetParamsOpenid =
    string;

  export interface UserWechatAuthenticationApiWechatuserInformationGetParams {
    openid?: UserWechatAuthenticationApiWechatuserInformationGetParamsOpenid;
  }

  export type UserWechatAuthenticationApiWechatuserInformationGetResponses =
    UserWechatAuthenticationApiWechatuserInformationGetResponsesResultSchemaWeChatUserInformationOut;
  export type UserWechatAuthenticationApiWechatuserInformationGetResponsesCode =
    number;
  export type UserWechatAuthenticationApiWechatuserInformationGetResponsesData =

      | UserWechatAuthenticationApiWechatuserInformationGetResponsesWeChatUserInformationOut
      | UserWechatAuthenticationApiWechatuserInformationGetResponsesWeChatUserInformationOut[];
  export type UserWechatAuthenticationApiWechatuserInformationGetResponsesOpenid =
    string;
  export type UserWechatAuthenticationApiWechatuserInformationGetResponsesName =
    string;
  export type UserWechatAuthenticationApiWechatuserInformationGetResponsesIdCode =
    string;
  export type UserWechatAuthenticationApiWechatuserInformationGetResponsesBalance =
    string;
  export type UserWechatAuthenticationApiWechatuserInformationGetResponsesReceiveName =
    string;
  export type UserWechatAuthenticationApiWechatuserInformationGetResponsesReceiveCode =
    string;
  export type UserWechatAuthenticationApiWechatuserInformationGetResponsesPhone =
    string;
  export type UserWechatAuthenticationApiWechatuserInformationGetResponsesId =
    number;
  export type UserWechatAuthenticationApiWechatuserInformationGetResponsesCreateTime =
    string;
  export type UserWechatAuthenticationApiWechatuserInformationGetResponsesIsDeleted =
    number;
  export type UserWechatAuthenticationApiWechatuserInformationGetResponsesAdminImage =
    string;
  export type UserWechatAuthenticationApiWechatuserInformationGetResponsesTotal =
    number;
  export type UserWechatAuthenticationApiWechatuserInformationGetResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface UserWechatAuthenticationApiWechatuserInformationGetResponsesResultSchemaWeChatUserInformationOut {
    code: UserWechatAuthenticationApiWechatuserInformationGetResponsesCode;
    data?: UserWechatAuthenticationApiWechatuserInformationGetResponsesData;
    total?: UserWechatAuthenticationApiWechatuserInformationGetResponsesTotal;
    msg?: UserWechatAuthenticationApiWechatuserInformationGetResponsesMsg;
  }
  export interface UserWechatAuthenticationApiWechatuserInformationGetResponsesWeChatUserInformationOut {
    openid: UserWechatAuthenticationApiWechatuserInformationGetResponsesOpenid;
    name: UserWechatAuthenticationApiWechatuserInformationGetResponsesName;
    id_code: UserWechatAuthenticationApiWechatuserInformationGetResponsesIdCode;
    balance: UserWechatAuthenticationApiWechatuserInformationGetResponsesBalance;
    receive_name?: UserWechatAuthenticationApiWechatuserInformationGetResponsesReceiveName;
    receive_code?: UserWechatAuthenticationApiWechatuserInformationGetResponsesReceiveCode;
    phone: UserWechatAuthenticationApiWechatuserInformationGetResponsesPhone;
    id: UserWechatAuthenticationApiWechatuserInformationGetResponsesId;
    create_time: UserWechatAuthenticationApiWechatuserInformationGetResponsesCreateTime;
    is_deleted: UserWechatAuthenticationApiWechatuserInformationGetResponsesIsDeleted;
    admin_image?: UserWechatAuthenticationApiWechatuserInformationGetResponsesAdminImage;
  }

  export type UserSendVerificationCodeApiWechatuserSendVerificationCodePostBody =
    UserSendVerificationCodeApiWechatuserSendVerificationCodePostBodySendCodeRequest;
  export type UserSendVerificationCodeApiWechatuserSendVerificationCodePostBodyPhoneNumber =
    string;

  export interface UserSendVerificationCodeApiWechatuserSendVerificationCodePostBodySendCodeRequest {
    phone_number: UserSendVerificationCodeApiWechatuserSendVerificationCodePostBodyPhoneNumber;
  }

  export type UserSendVerificationCodeApiWechatuserSendVerificationCodePostResponses =
    UserSendVerificationCodeApiWechatuserSendVerificationCodePostResponsesResultSchema;
  export type UserSendVerificationCodeApiWechatuserSendVerificationCodePostResponsesCode =
    number;
  export type UserSendVerificationCodeApiWechatuserSendVerificationCodePostResponsesData =
    unknown[];
  export type UserSendVerificationCodeApiWechatuserSendVerificationCodePostResponsesTotal =
    number;
  export type UserSendVerificationCodeApiWechatuserSendVerificationCodePostResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface UserSendVerificationCodeApiWechatuserSendVerificationCodePostResponsesResultSchema {
    code: UserSendVerificationCodeApiWechatuserSendVerificationCodePostResponsesCode;
    data?: UserSendVerificationCodeApiWechatuserSendVerificationCodePostResponsesData;
    total?: UserSendVerificationCodeApiWechatuserSendVerificationCodePostResponsesTotal;
    msg?: UserSendVerificationCodeApiWechatuserSendVerificationCodePostResponsesMsg;
  }

  export type UserVerifyCodeApiWechatuserVerifyCodePostBody =
    UserVerifyCodeApiWechatuserVerifyCodePostBodyVerifyCodeRequest;
  export type UserVerifyCodeApiWechatuserVerifyCodePostBodyPhoneNumber = string;
  export type UserVerifyCodeApiWechatuserVerifyCodePostBodyCode = string;

  export interface UserVerifyCodeApiWechatuserVerifyCodePostBodyVerifyCodeRequest {
    phone_number: UserVerifyCodeApiWechatuserVerifyCodePostBodyPhoneNumber;
    code: UserVerifyCodeApiWechatuserVerifyCodePostBodyCode;
  }

  export type UserRegistryApiWechatuserRegistryPostBody =
    UserRegistryApiWechatuserRegistryPostBodyRegistryRequest;
  export type UserRegistryApiWechatuserRegistryPostBodyCode = string;
  export type UserRegistryApiWechatuserRegistryPostBodyName = string;
  export type UserRegistryApiWechatuserRegistryPostBodyPhone = string;
  export type UserRegistryApiWechatuserRegistryPostBodyIdCode = string;
  export type UserRegistryApiWechatuserRegistryPostBodyVerifyCode = string;

  export interface UserRegistryApiWechatuserRegistryPostBodyRegistryRequest {
    code: UserRegistryApiWechatuserRegistryPostBodyCode;
    name: UserRegistryApiWechatuserRegistryPostBodyName;
    phone: UserRegistryApiWechatuserRegistryPostBodyPhone;
    id_code: UserRegistryApiWechatuserRegistryPostBodyIdCode;
    verify_code: UserRegistryApiWechatuserRegistryPostBodyVerifyCode;
  }

  export type OrderUploadFileApiWechatorderUploadPostResponses =
    OrderUploadFileApiWechatorderUploadPostResponsesResultSchema;
  export type OrderUploadFileApiWechatorderUploadPostResponsesCode = number;
  export type OrderUploadFileApiWechatorderUploadPostResponsesData = unknown[];
  export type OrderUploadFileApiWechatorderUploadPostResponsesTotal = number;
  export type OrderUploadFileApiWechatorderUploadPostResponsesMsg = string;

  /**
   * 结果数据模型
   */
  export interface OrderUploadFileApiWechatorderUploadPostResponsesResultSchema {
    code: OrderUploadFileApiWechatorderUploadPostResponsesCode;
    data?: OrderUploadFileApiWechatorderUploadPostResponsesData;
    total?: OrderUploadFileApiWechatorderUploadPostResponsesTotal;
    msg?: OrderUploadFileApiWechatorderUploadPostResponsesMsg;
  }

  export type OrderGetProductsApiWechatorderProductsGetParamsOpenid = string;
  export type OrderGetProductsApiWechatorderProductsGetParamsOrderId =
    | string
    | number;
  export type OrderGetProductsApiWechatorderProductsGetParamsStatus = number;
  export type OrderGetProductsApiWechatorderProductsGetParamsPage = number;
  export type OrderGetProductsApiWechatorderProductsGetParamsPageSize = number;

  export interface OrderGetProductsApiWechatorderProductsGetParams {
    openid?: OrderGetProductsApiWechatorderProductsGetParamsOpenid;
    order_id?: OrderGetProductsApiWechatorderProductsGetParamsOrderId;
    status?: OrderGetProductsApiWechatorderProductsGetParamsStatus;
    page?: OrderGetProductsApiWechatorderProductsGetParamsPage;
    page_size?: OrderGetProductsApiWechatorderProductsGetParamsPageSize;
  }

  export type OrderGetProductsApiWechatorderProductsGetResponses =
    OrderGetProductsApiWechatorderProductsGetResponsesResultSchema;
  export type OrderGetProductsApiWechatorderProductsGetResponsesCode = number;
  export type OrderGetProductsApiWechatorderProductsGetResponsesData =
    unknown[];
  export type OrderGetProductsApiWechatorderProductsGetResponsesTotal = number;
  export type OrderGetProductsApiWechatorderProductsGetResponsesMsg = string;

  /**
   * 结果数据模型
   */
  export interface OrderGetProductsApiWechatorderProductsGetResponsesResultSchema {
    code: OrderGetProductsApiWechatorderProductsGetResponsesCode;
    data?: OrderGetProductsApiWechatorderProductsGetResponsesData;
    total?: OrderGetProductsApiWechatorderProductsGetResponsesTotal;
    msg?: OrderGetProductsApiWechatorderProductsGetResponsesMsg;
  }

  export type OrderAddProductsApiWechatorderProductsPostBody =
    OrderAddProductsApiWechatorderProductsPostBodyProductCreate;
  export type OrderAddProductsApiWechatorderProductsPostBodyUserId = number;
  /**
   * openid
   */
  export type OrderAddProductsApiWechatorderProductsPostBodyOpenid = string;
  /**
   * 产品名称
   */
  export type OrderAddProductsApiWechatorderProductsPostBodyProductName =
    string;
  /**
   * 货号
   */
  export type OrderAddProductsApiWechatorderProductsPostBodyProductCode =
    string;
  /**
   * 瑕疵描述
   */
  export type OrderAddProductsApiWechatorderProductsPostBodyDescription =
    string;
  /**
   * 产品尺寸
   */
  export type OrderAddProductsApiWechatorderProductsPostBodySize = string;
  /**
   * 产品数量
   */
  export type OrderAddProductsApiWechatorderProductsPostBodyNumber = number;
  /**
   * 产品信息列表
   */
  export type OrderAddProductsApiWechatorderProductsPostBodyProductInfos =
    OrderAddProductsApiWechatorderProductsPostBodyProductInfoCreate[];
  /**
   * 产品图片链接
   */
  export type OrderAddProductsApiWechatorderProductsPostBodyUrl = string;
  /**
   * 图片路径
   */
  export type OrderAddProductsApiWechatorderProductsPostBodyPath = string;
  /**
   * 产品链接列表
   */
  export type OrderAddProductsApiWechatorderProductsPostBodyProductUrls =
    OrderAddProductsApiWechatorderProductsPostBodyProductUrlCreate[];

  export interface OrderAddProductsApiWechatorderProductsPostBodyProductCreate {
    user_id?: OrderAddProductsApiWechatorderProductsPostBodyUserId;
    openid: OrderAddProductsApiWechatorderProductsPostBodyOpenid;
    product_name: OrderAddProductsApiWechatorderProductsPostBodyProductName;
    product_code: OrderAddProductsApiWechatorderProductsPostBodyProductCode;
    description?: OrderAddProductsApiWechatorderProductsPostBodyDescription;
    product_infos: OrderAddProductsApiWechatorderProductsPostBodyProductInfos;
    product_urls?: OrderAddProductsApiWechatorderProductsPostBodyProductUrls;
  }
  export interface OrderAddProductsApiWechatorderProductsPostBodyProductInfoCreate {
    size: OrderAddProductsApiWechatorderProductsPostBodySize;
    number: OrderAddProductsApiWechatorderProductsPostBodyNumber;
  }
  export interface OrderAddProductsApiWechatorderProductsPostBodyProductUrlCreate {
    url: OrderAddProductsApiWechatorderProductsPostBodyUrl;
    path: OrderAddProductsApiWechatorderProductsPostBodyPath;
  }

  export type OrderAddProductsApiWechatorderProductsPostResponses =
    OrderAddProductsApiWechatorderProductsPostResponsesResultSchema;
  export type OrderAddProductsApiWechatorderProductsPostResponsesCode = number;
  export type OrderAddProductsApiWechatorderProductsPostResponsesData =
    unknown[];
  export type OrderAddProductsApiWechatorderProductsPostResponsesTotal = number;
  export type OrderAddProductsApiWechatorderProductsPostResponsesMsg = string;

  /**
   * 结果数据模型
   */
  export interface OrderAddProductsApiWechatorderProductsPostResponsesResultSchema {
    code: OrderAddProductsApiWechatorderProductsPostResponsesCode;
    data?: OrderAddProductsApiWechatorderProductsPostResponsesData;
    total?: OrderAddProductsApiWechatorderProductsPostResponsesTotal;
    msg?: OrderAddProductsApiWechatorderProductsPostResponsesMsg;
  }

  export type OrderDeleteProductsApiWechatorderProducts_ProductId_DeleteParamsProductId =
    number;

  export interface OrderDeleteProductsApiWechatorderProducts_ProductId_DeleteParams {
    product_id?: OrderDeleteProductsApiWechatorderProducts_ProductId_DeleteParamsProductId;
  }

  export type OrderDeleteProductsApiWechatorderProducts_ProductId_DeleteResponses =
    OrderDeleteProductsApiWechatorderProducts_ProductId_DeleteResponsesResultSchema;
  export type OrderDeleteProductsApiWechatorderProducts_ProductId_DeleteResponsesCode =
    number;
  export type OrderDeleteProductsApiWechatorderProducts_ProductId_DeleteResponsesData =
    unknown[];
  export type OrderDeleteProductsApiWechatorderProducts_ProductId_DeleteResponsesTotal =
    number;
  export type OrderDeleteProductsApiWechatorderProducts_ProductId_DeleteResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface OrderDeleteProductsApiWechatorderProducts_ProductId_DeleteResponsesResultSchema {
    code: OrderDeleteProductsApiWechatorderProducts_ProductId_DeleteResponsesCode;
    data?: OrderDeleteProductsApiWechatorderProducts_ProductId_DeleteResponsesData;
    total?: OrderDeleteProductsApiWechatorderProducts_ProductId_DeleteResponsesTotal;
    msg?: OrderDeleteProductsApiWechatorderProducts_ProductId_DeleteResponsesMsg;
  }

  export type OrderGetOrdersWxApiWechatorderOrdersGetParamsOpenid = string;
  export type OrderGetOrdersWxApiWechatorderOrdersGetParamsStatus = number;
  export type OrderGetOrdersWxApiWechatorderOrdersGetParamsPage = number;
  export type OrderGetOrdersWxApiWechatorderOrdersGetParamsPageSize = number;

  export interface OrderGetOrdersWxApiWechatorderOrdersGetParams {
    openid?: OrderGetOrdersWxApiWechatorderOrdersGetParamsOpenid;
    status?: OrderGetOrdersWxApiWechatorderOrdersGetParamsStatus;
    page?: OrderGetOrdersWxApiWechatorderOrdersGetParamsPage;
    page_size?: OrderGetOrdersWxApiWechatorderOrdersGetParamsPageSize;
  }

  export type OrderGetOrdersWxApiWechatorderOrdersGetResponses =
    OrderGetOrdersWxApiWechatorderOrdersGetResponsesResultSchemaListT;
  export type OrderGetOrdersWxApiWechatorderOrdersGetResponsesCode = number;
  export type OrderGetOrdersWxApiWechatorderOrdersGetResponsesData =
    | unknown[]
    | unknown[][];
  export type OrderGetOrdersWxApiWechatorderOrdersGetResponsesTotal = number;
  export type OrderGetOrdersWxApiWechatorderOrdersGetResponsesMsg = string;

  /**
   * 结果数据模型
   */
  export interface OrderGetOrdersWxApiWechatorderOrdersGetResponsesResultSchemaListT {
    code: OrderGetOrdersWxApiWechatorderOrdersGetResponsesCode;
    data?: OrderGetOrdersWxApiWechatorderOrdersGetResponsesData;
    total?: OrderGetOrdersWxApiWechatorderOrdersGetResponsesTotal;
    msg?: OrderGetOrdersWxApiWechatorderOrdersGetResponsesMsg;
  }

  export type OrderAddOrdersApiWechatorderOrdersPostBody =
    OrderAddOrdersApiWechatorderOrdersPostBodyOrderCreate;
  export type OrderAddOrdersApiWechatorderOrdersPostBodyOpenid = string;
  export type OrderAddOrdersApiWechatorderOrdersPostBodyProductIds = number[];

  export interface OrderAddOrdersApiWechatorderOrdersPostBodyOrderCreate {
    openid: OrderAddOrdersApiWechatorderOrdersPostBodyOpenid;
    product_ids: OrderAddOrdersApiWechatorderOrdersPostBodyProductIds;
  }

  export type OrderAddOrdersApiWechatorderOrdersPostResponses =
    OrderAddOrdersApiWechatorderOrdersPostResponsesResultSchema;
  export type OrderAddOrdersApiWechatorderOrdersPostResponsesCode = number;
  export type OrderAddOrdersApiWechatorderOrdersPostResponsesData = unknown[];
  export type OrderAddOrdersApiWechatorderOrdersPostResponsesTotal = number;
  export type OrderAddOrdersApiWechatorderOrdersPostResponsesMsg = string;

  /**
   * 结果数据模型
   */
  export interface OrderAddOrdersApiWechatorderOrdersPostResponsesResultSchema {
    code: OrderAddOrdersApiWechatorderOrdersPostResponsesCode;
    data?: OrderAddOrdersApiWechatorderOrdersPostResponsesData;
    total?: OrderAddOrdersApiWechatorderOrdersPostResponsesTotal;
    msg?: OrderAddOrdersApiWechatorderOrdersPostResponsesMsg;
  }

  export type OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBody =
    OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyWechatUserDeliveryReq;
  export type OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyOpenid =
    string;
  export type OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyOrderId =
    number;
  export type OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyProductId =
    number;
  export type OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyProductInfoIds =
    number[];
  export type OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyUnProductInfoIds =
    number[];
  export type OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyUpdateProduct =
    OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyUpdateProductList[];
  export type OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyDeliverySite =
    string;
  export type OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyTrackingCode =
    string;
  export type OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyDeliveryName =
    string;
  export type OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyDeliveryPhone =
    string;
  export type OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyReturnAddress =
    string;

  export interface OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyWechatUserDeliveryReq {
    openid: OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyOpenid;
    order_id: OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyOrderId;
    update_product: OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyUpdateProduct;
    delivery_site: OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyDeliverySite;
    tracking_code: OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyTrackingCode;
    delivery_name: OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyDeliveryName;
    delivery_phone: OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyDeliveryPhone;
    return_address: OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyReturnAddress;
  }
  export interface OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyUpdateProductList {
    product_id: OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyProductId;
    product_info_ids: OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyProductInfoIds;
    un_product_info_ids: OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBodyUnProductInfoIds;
  }

  export type OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostResponses =
    OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostResponsesResultSchema;
  export type OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostResponsesCode =
    number;
  export type OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostResponsesData =
    unknown[];
  export type OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostResponsesTotal =
    number;
  export type OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostResponsesResultSchema {
    code: OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostResponsesCode;
    data?: OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostResponsesData;
    total?: OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostResponsesTotal;
    msg?: OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostResponsesMsg;
  }

  export type OrderReturnOrdersApiWechatorderOrdersReturnGetParamsOpenid =
    string;
  export type OrderReturnOrdersApiWechatorderOrdersReturnGetParamsOrderId =
    number;

  export interface OrderReturnOrdersApiWechatorderOrdersReturnGetParams {
    openid?: OrderReturnOrdersApiWechatorderOrdersReturnGetParamsOpenid;
    order_id?: OrderReturnOrdersApiWechatorderOrdersReturnGetParamsOrderId;
  }

  export type OrderReturnOrdersApiWechatorderOrdersReturnGetResponses =
    OrderReturnOrdersApiWechatorderOrdersReturnGetResponsesResultSchemaListT;
  export type OrderReturnOrdersApiWechatorderOrdersReturnGetResponsesCode =
    number;
  export type OrderReturnOrdersApiWechatorderOrdersReturnGetResponsesData =
    | unknown[]
    | unknown[][];
  export type OrderReturnOrdersApiWechatorderOrdersReturnGetResponsesTotal =
    number;
  export type OrderReturnOrdersApiWechatorderOrdersReturnGetResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface OrderReturnOrdersApiWechatorderOrdersReturnGetResponsesResultSchemaListT {
    code: OrderReturnOrdersApiWechatorderOrdersReturnGetResponsesCode;
    data?: OrderReturnOrdersApiWechatorderOrdersReturnGetResponsesData;
    total?: OrderReturnOrdersApiWechatorderOrdersReturnGetResponsesTotal;
    msg?: OrderReturnOrdersApiWechatorderOrdersReturnGetResponsesMsg;
  }

  export type OrderGetOrdersPcApiWechatorderPcOrdersGetParamsOrderId = number;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetParamsName = string;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetParamsPhone = string;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetParamsStatus = number;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetParamsPage = number;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetParamsPageSize = number;

  export interface OrderGetOrdersPcApiWechatorderPcOrdersGetParams {
    order_id?: OrderGetOrdersPcApiWechatorderPcOrdersGetParamsOrderId;
    name?: OrderGetOrdersPcApiWechatorderPcOrdersGetParamsName;
    phone?: OrderGetOrdersPcApiWechatorderPcOrdersGetParamsPhone;
    status?: OrderGetOrdersPcApiWechatorderPcOrdersGetParamsStatus;
    page?: OrderGetOrdersPcApiWechatorderPcOrdersGetParamsPage;
    page_size?: OrderGetOrdersPcApiWechatorderPcOrdersGetParamsPageSize;
  }

  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponses =
    OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesResultSchemaListSchemasOrderOrderDetailResponse;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesCode = number;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesData =
    | OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesOrderDetailResponse[]
    | OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesOrderDetailResponse[][];
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesId = number;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesUserId = number;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesStatus = number;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesDeliverySite =
    string;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesTrackingCode =
    string;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesAddressId =
    number;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesFinallyCost =
    number;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesCreateTime =
    string;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesUpdateTime =
    string;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesId1 = number;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesUserId1 =
    number;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesProductName =
    string;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesProductCode =
    string;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesDescription =
    string;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesCreateTime1 =
    string;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesUpdateTime1 =
    string;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesId2 = number;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesSize = string;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesNumber = number;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesStatus1 =
    number;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesPrice = number;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesDescription1 =
    string;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesFinallyPrice =
    number;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesReason = string;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesProductInfos =
    OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesProductInfoResponse[];
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesUrl = string;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesProductUrls =
    OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesProductUrlResponse[];
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesStatus2 =
    number;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesProducts =
    OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesProductResponse[];
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesDeliveryName =
    string;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesDeliveryPhone =
    string;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesReturnAddress =
    string;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesName = string;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesPhone = string;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesTotal = number;
  export type OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesMsg = string;

  /**
   * 结果数据模型
   */
  export interface OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesResultSchemaListSchemasOrderOrderDetailResponse {
    code: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesCode;
    data?: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesData;
    total?: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesTotal;
    msg?: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesMsg;
  }
  export interface OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesOrderDetailResponse {
    id: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesId;
    user_id: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesUserId;
    status: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesStatus;
    delivery_site?: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesDeliverySite;
    tracking_code?: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesTrackingCode;
    address_id?: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesAddressId;
    finally_cost?: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesFinallyCost;
    create_time: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesCreateTime;
    update_time?: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesUpdateTime;
    products: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesProducts;
    delivery_name?: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesDeliveryName;
    delivery_phone?: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesDeliveryPhone;
    return_address?: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesReturnAddress;
    name?: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesName;
    phone?: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesPhone;
  }
  export interface OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesProductResponse {
    id: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesId1;
    user_id: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesUserId1;
    product_name: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesProductName;
    product_code: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesProductCode;
    description?: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesDescription;
    create_time: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesCreateTime1;
    update_time?: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesUpdateTime1;
    product_infos?: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesProductInfos;
    product_urls?: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesProductUrls;
    status: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesStatus2;
  }
  export interface OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesProductInfoResponse {
    id: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesId2;
    size: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesSize;
    number: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesNumber;
    status: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesStatus1;
    price: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesPrice;
    description?: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesDescription1;
    finally_price: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesFinallyPrice;
    reason?: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesReason;
  }
  export interface OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesProductUrlResponse {
    url: OrderGetOrdersPcApiWechatorderPcOrdersGetResponsesUrl;
  }

  export type OrderUpdateOrdersPcApiWechatorderPcOrdersPatchParamsOrderId =
    number;

  export interface OrderUpdateOrdersPcApiWechatorderPcOrdersPatchParams {
    order_id?: OrderUpdateOrdersPcApiWechatorderPcOrdersPatchParamsOrderId;
  }

  export type OrderUpdateOrdersPcApiWechatorderPcOrdersPatchBody =
    OrderUpdateOrdersPcApiWechatorderPcOrdersPatchBodyOrderUpdate;
  export type OrderUpdateOrdersPcApiWechatorderPcOrdersPatchBodyFinallyCost =
    number;
  export type OrderUpdateOrdersPcApiWechatorderPcOrdersPatchBodyStatus = number;
  export type OrderUpdateOrdersPcApiWechatorderPcOrdersPatchBodyAddressId =
    number;
  export type OrderUpdateOrdersPcApiWechatorderPcOrdersPatchBodyMoneyToUser =
    number;
  export type OrderUpdateOrdersPcApiWechatorderPcOrdersPatchBodyPhoneCode =
    string;

  export interface OrderUpdateOrdersPcApiWechatorderPcOrdersPatchBodyOrderUpdate {
    finally_cost?: OrderUpdateOrdersPcApiWechatorderPcOrdersPatchBodyFinallyCost;
    status: OrderUpdateOrdersPcApiWechatorderPcOrdersPatchBodyStatus;
    address_id?: OrderUpdateOrdersPcApiWechatorderPcOrdersPatchBodyAddressId;
    money_to_user?: OrderUpdateOrdersPcApiWechatorderPcOrdersPatchBodyMoneyToUser;
    phone_code?: OrderUpdateOrdersPcApiWechatorderPcOrdersPatchBodyPhoneCode;
  }

  export type OrderUpdateOrdersPcApiWechatorderPcOrdersPatchResponses =
    OrderUpdateOrdersPcApiWechatorderPcOrdersPatchResponsesResultSchema;
  export type OrderUpdateOrdersPcApiWechatorderPcOrdersPatchResponsesCode =
    number;
  export type OrderUpdateOrdersPcApiWechatorderPcOrdersPatchResponsesData =
    unknown[];
  export type OrderUpdateOrdersPcApiWechatorderPcOrdersPatchResponsesTotal =
    number;
  export type OrderUpdateOrdersPcApiWechatorderPcOrdersPatchResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface OrderUpdateOrdersPcApiWechatorderPcOrdersPatchResponsesResultSchema {
    code: OrderUpdateOrdersPcApiWechatorderPcOrdersPatchResponsesCode;
    data?: OrderUpdateOrdersPcApiWechatorderPcOrdersPatchResponsesData;
    total?: OrderUpdateOrdersPcApiWechatorderPcOrdersPatchResponsesTotal;
    msg?: OrderUpdateOrdersPcApiWechatorderPcOrdersPatchResponsesMsg;
  }

  export type OrderUpdateOrdersStatusPcApiWechatorderPcOrdersStatusPatchParamsOrderId =
    number;
  export type OrderUpdateOrdersStatusPcApiWechatorderPcOrdersStatusPatchParamsStatus =
    number;

  export interface OrderUpdateOrdersStatusPcApiWechatorderPcOrdersStatusPatchParams {
    order_id?: OrderUpdateOrdersStatusPcApiWechatorderPcOrdersStatusPatchParamsOrderId;
    status?: OrderUpdateOrdersStatusPcApiWechatorderPcOrdersStatusPatchParamsStatus;
  }

  export type OrderUpdateOrdersStatusPcApiWechatorderPcOrdersStatusPatchResponses =
    OrderUpdateOrdersStatusPcApiWechatorderPcOrdersStatusPatchResponsesResultSchema;
  export type OrderUpdateOrdersStatusPcApiWechatorderPcOrdersStatusPatchResponsesCode =
    number;
  export type OrderUpdateOrdersStatusPcApiWechatorderPcOrdersStatusPatchResponsesData =
    unknown[];
  export type OrderUpdateOrdersStatusPcApiWechatorderPcOrdersStatusPatchResponsesTotal =
    number;
  export type OrderUpdateOrdersStatusPcApiWechatorderPcOrdersStatusPatchResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface OrderUpdateOrdersStatusPcApiWechatorderPcOrdersStatusPatchResponsesResultSchema {
    code: OrderUpdateOrdersStatusPcApiWechatorderPcOrdersStatusPatchResponsesCode;
    data?: OrderUpdateOrdersStatusPcApiWechatorderPcOrdersStatusPatchResponsesData;
    total?: OrderUpdateOrdersStatusPcApiWechatorderPcOrdersStatusPatchResponsesTotal;
    msg?: OrderUpdateOrdersStatusPcApiWechatorderPcOrdersStatusPatchResponsesMsg;
  }

  export type OrderAddReturnGoodsApiWechatorderPcReturnPostBody =
    OrderAddReturnGoodsApiWechatorderPcReturnPostBodyReturnGoodsAdd;
  export type OrderAddReturnGoodsApiWechatorderPcReturnPostBodyProductId =
    number;
  export type OrderAddReturnGoodsApiWechatorderPcReturnPostBodyProductInfoId =
    number;
  export type OrderAddReturnGoodsApiWechatorderPcReturnPostBodyOrderId = number;
  export type OrderAddReturnGoodsApiWechatorderPcReturnPostBodyReturnDeliverySite =
    string;
  export type OrderAddReturnGoodsApiWechatorderPcReturnPostBodyReturnTrackingCode =
    string;

  export interface OrderAddReturnGoodsApiWechatorderPcReturnPostBodyReturnGoodsAdd {
    product_id: OrderAddReturnGoodsApiWechatorderPcReturnPostBodyProductId;
    product_info_id: OrderAddReturnGoodsApiWechatorderPcReturnPostBodyProductInfoId;
    order_id: OrderAddReturnGoodsApiWechatorderPcReturnPostBodyOrderId;
    return_delivery_site: OrderAddReturnGoodsApiWechatorderPcReturnPostBodyReturnDeliverySite;
    return_tracking_code: OrderAddReturnGoodsApiWechatorderPcReturnPostBodyReturnTrackingCode;
  }

  export type OrderAddReturnGoodsApiWechatorderPcReturnPostResponses =
    OrderAddReturnGoodsApiWechatorderPcReturnPostResponsesResultSchema;
  export type OrderAddReturnGoodsApiWechatorderPcReturnPostResponsesCode =
    number;
  export type OrderAddReturnGoodsApiWechatorderPcReturnPostResponsesData =
    unknown[];
  export type OrderAddReturnGoodsApiWechatorderPcReturnPostResponsesTotal =
    number;
  export type OrderAddReturnGoodsApiWechatorderPcReturnPostResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface OrderAddReturnGoodsApiWechatorderPcReturnPostResponsesResultSchema {
    code: OrderAddReturnGoodsApiWechatorderPcReturnPostResponsesCode;
    data?: OrderAddReturnGoodsApiWechatorderPcReturnPostResponsesData;
    total?: OrderAddReturnGoodsApiWechatorderPcReturnPostResponsesTotal;
    msg?: OrderAddReturnGoodsApiWechatorderPcReturnPostResponsesMsg;
  }

  export type OrderUpdateProductsPcApiWechatorderPcProductsPatchParamsOrderId =
    number;
  export type OrderUpdateProductsPcApiWechatorderPcProductsPatchParamsProductId =
    number;
  export type OrderUpdateProductsPcApiWechatorderPcProductsPatchParamsProductInfoId =
    number;

  export interface OrderUpdateProductsPcApiWechatorderPcProductsPatchParams {
    order_id?: OrderUpdateProductsPcApiWechatorderPcProductsPatchParamsOrderId;
    product_id?: OrderUpdateProductsPcApiWechatorderPcProductsPatchParamsProductId;
    product_info_id?: OrderUpdateProductsPcApiWechatorderPcProductsPatchParamsProductInfoId;
  }

  export type OrderUpdateProductsPcApiWechatorderPcProductsPatchBody =
    OrderUpdateProductsPcApiWechatorderPcProductsPatchBodyProductInfoUpdate;
  export type OrderUpdateProductsPcApiWechatorderPcProductsPatchBodySize =
    string;
  export type OrderUpdateProductsPcApiWechatorderPcProductsPatchBodyNumber =
    number;
  export type OrderUpdateProductsPcApiWechatorderPcProductsPatchBodyStatus =
    number;
  export type OrderUpdateProductsPcApiWechatorderPcProductsPatchBodyPrice =
    number;
  export type OrderUpdateProductsPcApiWechatorderPcProductsPatchBodyDescription =
    string;
  export type OrderUpdateProductsPcApiWechatorderPcProductsPatchBodyFinallyPrice =
    number;
  export type OrderUpdateProductsPcApiWechatorderPcProductsPatchBodyReason =
    string;

  export interface OrderUpdateProductsPcApiWechatorderPcProductsPatchBodyProductInfoUpdate {
    size?: OrderUpdateProductsPcApiWechatorderPcProductsPatchBodySize;
    number?: OrderUpdateProductsPcApiWechatorderPcProductsPatchBodyNumber;
    status?: OrderUpdateProductsPcApiWechatorderPcProductsPatchBodyStatus;
    price?: OrderUpdateProductsPcApiWechatorderPcProductsPatchBodyPrice;
    description?: OrderUpdateProductsPcApiWechatorderPcProductsPatchBodyDescription;
    finally_price?: OrderUpdateProductsPcApiWechatorderPcProductsPatchBodyFinallyPrice;
    reason?: OrderUpdateProductsPcApiWechatorderPcProductsPatchBodyReason;
  }

  export type OrderUpdateProductsPcApiWechatorderPcProductsPatchResponses =
    OrderUpdateProductsPcApiWechatorderPcProductsPatchResponsesResultSchema;
  export type OrderUpdateProductsPcApiWechatorderPcProductsPatchResponsesCode =
    number;
  export type OrderUpdateProductsPcApiWechatorderPcProductsPatchResponsesData =
    unknown[];
  export type OrderUpdateProductsPcApiWechatorderPcProductsPatchResponsesTotal =
    number;
  export type OrderUpdateProductsPcApiWechatorderPcProductsPatchResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface OrderUpdateProductsPcApiWechatorderPcProductsPatchResponsesResultSchema {
    code: OrderUpdateProductsPcApiWechatorderPcProductsPatchResponsesCode;
    data?: OrderUpdateProductsPcApiWechatorderPcProductsPatchResponsesData;
    total?: OrderUpdateProductsPcApiWechatorderPcProductsPatchResponsesTotal;
    msg?: OrderUpdateProductsPcApiWechatorderPcProductsPatchResponsesMsg;
  }

  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetParamsOrderId =
    number;

  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetParams {
    order_id?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetParamsOrderId;
  }

  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponses =
    OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesResponse;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDescription =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDescription1 =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesRequired =
    boolean;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDeprecated =
    boolean;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesStyle =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExplode =
    boolean;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesAllowreserved =
    boolean;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema =

      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1
      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesReference;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponses$Schema =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponses$Vocabulary =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponses$Id =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponses$Anchor =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponses$Dynamicanchor =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponses$Ref =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponses$Dynamicref =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponses$Comment =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesAllof =
    (
      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1
      | boolean
    )[];
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesAnyof =
    (
      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1
      | boolean
    )[];
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesOneof =
    (
      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1
      | boolean
    )[];
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesNot =

      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1
      | boolean;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesIf =

      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1
      | boolean;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesThen =

      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1
      | boolean;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesElse =

      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1
      | boolean;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesPrefixitems =
    (
      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1
      | boolean
    )[];
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesItems =

      | (
          | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1
          | boolean
        )
      | (
          | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1
          | boolean
        )[];
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesContains =

      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1
      | boolean;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesAdditionalproperties =

      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1
      | boolean;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesPropertynames =

      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1
      | boolean;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesUnevaluateditems =

      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1
      | boolean;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesUnevaluatedproperties =

      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1
      | boolean;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesType =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesEnum =
    unknown[];
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMultipleof =
    number;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMaximum =
    number;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExclusivemaximum =
    number;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMinimum =
    number;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExclusiveminimum =
    number;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMaxlength =
    number;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMinlength =
    number;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesPattern =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMaxitems =
    number;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMinitems =
    number;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesUniqueitems =
    boolean;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMaxcontains =
    number;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMincontains =
    number;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMaxproperties =
    number;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMinproperties =
    number;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesRequired1 =
    string[];
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesFormat =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesContentencoding =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesContentmediatype =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesContentschema =

      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1
      | boolean;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesTitle =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDescription2 =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDeprecated1 =
    boolean;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesReadonly =
    boolean;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesWriteonly =
    boolean;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExamples =
    unknown[];
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesPropertyname =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesName =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesNamespace =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesPrefix =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesAttribute =
    boolean;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesWrapped =
    boolean;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDescription3 =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesUrl =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSummary =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDescription4 =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExternalvalue =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema2 =

      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1
      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesReference;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesContenttype =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesStyle1 =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExplode1 =
    boolean;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesAllowreserved1 =
    boolean;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesOperationref =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesOperationid =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesRequestbody =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDescription5 =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesUrl1 =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDescription6 =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesEnum1 =
    string[];
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDefault1 =
    string;
  export type OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDescription7 =
    string;

  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesResponse {
    description: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDescription;
    headers?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesHeaders;
    content?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesContent1;
    links?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesLinks;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesHeaders {
    [k: string]:
      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesHeader
      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesReference;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesHeader {
    description?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDescription1;
    required?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesRequired;
    deprecated?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDeprecated;
    style?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesStyle;
    explode?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExplode;
    allowReserved?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesAllowreserved;
    schema?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema;
    example?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExample1;
    examples?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExamples1;
    content?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesContent;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1 {
    $schema?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponses$Schema;
    $vocabulary?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponses$Vocabulary;
    $id?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponses$Id;
    $anchor?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponses$Anchor;
    $dynamicAnchor?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponses$Dynamicanchor;
    $ref?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponses$Ref;
    $dynamicRef?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponses$Dynamicref;
    $defs?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponses$Defs;
    $comment?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponses$Comment;
    allOf?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesAllof;
    anyOf?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesAnyof;
    oneOf?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesOneof;
    not?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesNot;
    if?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesIf;
    then?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesThen;
    else?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesElse;
    dependentSchemas?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDependentschemas;
    prefixItems?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesPrefixitems;
    items?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesItems;
    contains?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesContains;
    properties?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesProperties;
    patternProperties?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesPatternproperties;
    additionalProperties?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesAdditionalproperties;
    propertyNames?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesPropertynames;
    unevaluatedItems?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesUnevaluateditems;
    unevaluatedProperties?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesUnevaluatedproperties;
    type?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesType;
    enum?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesEnum;
    const?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesConst;
    multipleOf?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMultipleof;
    maximum?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMaximum;
    exclusiveMaximum?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExclusivemaximum;
    minimum?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMinimum;
    exclusiveMinimum?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExclusiveminimum;
    maxLength?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMaxlength;
    minLength?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMinlength;
    pattern?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesPattern;
    maxItems?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMaxitems;
    minItems?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMinitems;
    uniqueItems?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesUniqueitems;
    maxContains?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMaxcontains;
    minContains?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMincontains;
    maxProperties?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMaxproperties;
    minProperties?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMinproperties;
    required?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesRequired1;
    dependentRequired?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDependentrequired;
    format?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesFormat;
    contentEncoding?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesContentencoding;
    contentMediaType?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesContentmediatype;
    contentSchema?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesContentschema;
    title?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesTitle;
    description?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDescription2;
    default?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDefault;
    deprecated?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDeprecated1;
    readOnly?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesReadonly;
    writeOnly?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesWriteonly;
    examples?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExamples;
    discriminator?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDiscriminator;
    xml?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesXML;
    externalDocs?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExternalDocumentation;
    example?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExample;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponses$Defs {
    [k: string]:
      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1
      | boolean;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDependentschemas {
    [k: string]:
      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1
      | boolean;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesProperties {
    [k: string]:
      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1
      | boolean;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesPatternproperties {
    [k: string]:
      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema1
      | boolean;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesConst {
    [k: string]: unknown;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDependentrequired {
    [k: string]: string[];
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDefault {
    [k: string]: unknown;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDiscriminator {
    propertyName: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesPropertyname;
    mapping?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMapping;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMapping {
    [k: string]: string;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesXML {
    name?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesName;
    namespace?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesNamespace;
    prefix?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesPrefix;
    attribute?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesAttribute;
    wrapped?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesWrapped;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExternalDocumentation {
    description?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDescription3;
    url: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesUrl;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExample {
    [k: string]: unknown;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesReference {
    allOf?: [{ $ref: { type: "string"; title: "$Ref" } }];
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExample1 {
    [k: string]: unknown;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExamples1 {
    [k: string]:
      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExample2
      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesReference;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExample2 {
    summary?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSummary;
    description?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDescription4;
    value?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesValue;
    externalValue?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExternalvalue;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesValue {
    [k: string]: unknown;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesContent {
    [
      k: string
    ]: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMediaType;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMediaType {
    schema?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesSchema2;
    example?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExample3;
    examples?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExamples2;
    encoding?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesEncoding;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExample3 {
    [k: string]: unknown;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExamples2 {
    [k: string]:
      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExample2
      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesReference;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesEncoding {
    [
      k: string
    ]: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesEncoding1;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesEncoding1 {
    contentType?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesContenttype;
    headers?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesHeaders1;
    style?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesStyle1;
    explode?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesExplode1;
    allowReserved?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesAllowreserved1;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesHeaders1 {
    [k: string]:
      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesHeader
      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesReference;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesContent1 {
    [
      k: string
    ]: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesMediaType;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesLinks {
    [k: string]:
      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesLink
      | OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesReference;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesLink {
    operationRef?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesOperationref;
    operationId?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesOperationid;
    parameters?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesParameters;
    requestBody?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesRequestbody;
    description?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDescription5;
    server?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesServer;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesParameters {
    [k: string]: string;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesServer {
    url: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesUrl1;
    description?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDescription6;
    variables?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesVariables;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesVariables {
    [
      k: string
    ]: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesServerVariable;
  }
  export interface OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesServerVariable {
    enum?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesEnum1;
    default: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDefault1;
    description?: OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponsesDescription7;
  }

  export type BannerUploadFileApiWechatbannerPcUploadPostResponses =
    BannerUploadFileApiWechatbannerPcUploadPostResponsesResultSchema;
  export type BannerUploadFileApiWechatbannerPcUploadPostResponsesCode = number;
  export type BannerUploadFileApiWechatbannerPcUploadPostResponsesData =
    unknown[];
  export type BannerUploadFileApiWechatbannerPcUploadPostResponsesTotal =
    number;
  export type BannerUploadFileApiWechatbannerPcUploadPostResponsesMsg = string;

  /**
   * 结果数据模型
   */
  export interface BannerUploadFileApiWechatbannerPcUploadPostResponsesResultSchema {
    code: BannerUploadFileApiWechatbannerPcUploadPostResponsesCode;
    data?: BannerUploadFileApiWechatbannerPcUploadPostResponsesData;
    total?: BannerUploadFileApiWechatbannerPcUploadPostResponsesTotal;
    msg?: BannerUploadFileApiWechatbannerPcUploadPostResponsesMsg;
  }

  export type BannerGetBannersApiWechatbannerPc_GetResponses =
    BannerGetBannersApiWechatbannerPc_GetResponsesResultSchemaListSchemasBannerBannerBase;
  export type BannerGetBannersApiWechatbannerPc_GetResponsesCode = number;
  export type BannerGetBannersApiWechatbannerPc_GetResponsesData =
    | BannerGetBannersApiWechatbannerPc_GetResponsesBannerBase[]
    | BannerGetBannersApiWechatbannerPc_GetResponsesBannerBase[][];
  export type BannerGetBannersApiWechatbannerPc_GetResponsesId = number;
  export type BannerGetBannersApiWechatbannerPc_GetResponsesLocation = string;
  export type BannerGetBannersApiWechatbannerPc_GetResponsesUrl = string;
  export type BannerGetBannersApiWechatbannerPc_GetResponsesPath = string;
  export type BannerGetBannersApiWechatbannerPc_GetResponsesTotal = number;
  export type BannerGetBannersApiWechatbannerPc_GetResponsesMsg = string;

  /**
   * 结果数据模型
   */
  export interface BannerGetBannersApiWechatbannerPc_GetResponsesResultSchemaListSchemasBannerBannerBase {
    code: BannerGetBannersApiWechatbannerPc_GetResponsesCode;
    data?: BannerGetBannersApiWechatbannerPc_GetResponsesData;
    total?: BannerGetBannersApiWechatbannerPc_GetResponsesTotal;
    msg?: BannerGetBannersApiWechatbannerPc_GetResponsesMsg;
  }
  export interface BannerGetBannersApiWechatbannerPc_GetResponsesBannerBase {
    id: BannerGetBannersApiWechatbannerPc_GetResponsesId;
    location: BannerGetBannersApiWechatbannerPc_GetResponsesLocation;
    url: BannerGetBannersApiWechatbannerPc_GetResponsesUrl;
    path: BannerGetBannersApiWechatbannerPc_GetResponsesPath;
  }

  export type FileId = number;

  export interface BannerDeleteFileApiWechatbannerPc_DeleteParams {
    file_id?: FileId;
  }

  export type BannerDeleteFileApiWechatbannerPc_DeleteResponses =
    BannerDeleteFileApiWechatbannerPc_DeleteResponsesResultSchema;
  export type BannerDeleteFileApiWechatbannerPc_DeleteResponsesCode = number;
  export type BannerDeleteFileApiWechatbannerPc_DeleteResponsesData = unknown[];
  export type BannerDeleteFileApiWechatbannerPc_DeleteResponsesTotal = number;
  export type BannerDeleteFileApiWechatbannerPc_DeleteResponsesMsg = string;

  /**
   * 结果数据模型
   */
  export interface BannerDeleteFileApiWechatbannerPc_DeleteResponsesResultSchema {
    code: BannerDeleteFileApiWechatbannerPc_DeleteResponsesCode;
    data?: BannerDeleteFileApiWechatbannerPc_DeleteResponsesData;
    total?: BannerDeleteFileApiWechatbannerPc_DeleteResponsesTotal;
    msg?: BannerDeleteFileApiWechatbannerPc_DeleteResponsesMsg;
  }

  export type BannerGetBannersApiWechatbanner_GetResponses =
    BannerGetBannersApiWechatbanner_GetResponsesResultSchemaListSchemasBannerBannerBase;
  export type BannerGetBannersApiWechatbanner_GetResponsesCode = number;
  export type BannerGetBannersApiWechatbanner_GetResponsesData =
    | BannerGetBannersApiWechatbanner_GetResponsesBannerBase[]
    | BannerGetBannersApiWechatbanner_GetResponsesBannerBase[][];
  export type BannerGetBannersApiWechatbanner_GetResponsesId = number;
  export type BannerGetBannersApiWechatbanner_GetResponsesLocation = string;
  export type BannerGetBannersApiWechatbanner_GetResponsesUrl = string;
  export type BannerGetBannersApiWechatbanner_GetResponsesPath = string;
  export type BannerGetBannersApiWechatbanner_GetResponsesTotal = number;
  export type BannerGetBannersApiWechatbanner_GetResponsesMsg = string;

  /**
   * 结果数据模型
   */
  export interface BannerGetBannersApiWechatbanner_GetResponsesResultSchemaListSchemasBannerBannerBase {
    code: BannerGetBannersApiWechatbanner_GetResponsesCode;
    data?: BannerGetBannersApiWechatbanner_GetResponsesData;
    total?: BannerGetBannersApiWechatbanner_GetResponsesTotal;
    msg?: BannerGetBannersApiWechatbanner_GetResponsesMsg;
  }
  export interface BannerGetBannersApiWechatbanner_GetResponsesBannerBase {
    id: BannerGetBannersApiWechatbanner_GetResponsesId;
    location: BannerGetBannersApiWechatbanner_GetResponsesLocation;
    url: BannerGetBannersApiWechatbanner_GetResponsesUrl;
    path: BannerGetBannersApiWechatbanner_GetResponsesPath;
  }

  export type AddressCreateAddressApiWechataddressPcAddressPostBody =
    AddressCreateAddressApiWechataddressPcAddressPostBodyAddressBase;
  export type AddressCreateAddressApiWechataddressPcAddressPostBodyName =
    string;
  export type AddressCreateAddressApiWechataddressPcAddressPostBodyPhone =
    string;
  export type AddressCreateAddressApiWechataddressPcAddressPostBodyDetail =
    string;

  export interface AddressCreateAddressApiWechataddressPcAddressPostBodyAddressBase {
    name: AddressCreateAddressApiWechataddressPcAddressPostBodyName;
    phone: AddressCreateAddressApiWechataddressPcAddressPostBodyPhone;
    detail: AddressCreateAddressApiWechataddressPcAddressPostBodyDetail;
  }

  export type AddressCreateAddressApiWechataddressPcAddressPostResponses =
    AddressCreateAddressApiWechataddressPcAddressPostResponsesResultSchema;
  export type AddressCreateAddressApiWechataddressPcAddressPostResponsesCode =
    number;
  export type AddressCreateAddressApiWechataddressPcAddressPostResponsesData =
    unknown[];
  export type AddressCreateAddressApiWechataddressPcAddressPostResponsesTotal =
    number;
  export type AddressCreateAddressApiWechataddressPcAddressPostResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface AddressCreateAddressApiWechataddressPcAddressPostResponsesResultSchema {
    code: AddressCreateAddressApiWechataddressPcAddressPostResponsesCode;
    data?: AddressCreateAddressApiWechataddressPcAddressPostResponsesData;
    total?: AddressCreateAddressApiWechataddressPcAddressPostResponsesTotal;
    msg?: AddressCreateAddressApiWechataddressPcAddressPostResponsesMsg;
  }

  export type AddressDeleteAddressApiWechataddressPcAddressDeleteParamsId =
    number;

  export interface AddressDeleteAddressApiWechataddressPcAddressDeleteParams {
    id?: AddressDeleteAddressApiWechataddressPcAddressDeleteParamsId;
  }

  export type AddressDeleteAddressApiWechataddressPcAddressDeleteResponses =
    AddressDeleteAddressApiWechataddressPcAddressDeleteResponsesResultSchema;
  export type AddressDeleteAddressApiWechataddressPcAddressDeleteResponsesCode =
    number;
  export type AddressDeleteAddressApiWechataddressPcAddressDeleteResponsesData =
    unknown[];
  export type AddressDeleteAddressApiWechataddressPcAddressDeleteResponsesTotal =
    number;
  export type AddressDeleteAddressApiWechataddressPcAddressDeleteResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface AddressDeleteAddressApiWechataddressPcAddressDeleteResponsesResultSchema {
    code: AddressDeleteAddressApiWechataddressPcAddressDeleteResponsesCode;
    data?: AddressDeleteAddressApiWechataddressPcAddressDeleteResponsesData;
    total?: AddressDeleteAddressApiWechataddressPcAddressDeleteResponsesTotal;
    msg?: AddressDeleteAddressApiWechataddressPcAddressDeleteResponsesMsg;
  }

  export type AddressUpdateAddressApiWechataddressPcAddressPatchBody =
    AddressUpdateAddressApiWechataddressPcAddressPatchBodyAddressUpdate;
  export type AddressUpdateAddressApiWechataddressPcAddressPatchBodyName =
    string;
  export type AddressUpdateAddressApiWechataddressPcAddressPatchBodyPhone =
    string;
  export type AddressUpdateAddressApiWechataddressPcAddressPatchBodyDetail =
    string;
  export type AddressUpdateAddressApiWechataddressPcAddressPatchBodyId = string;

  export interface AddressUpdateAddressApiWechataddressPcAddressPatchBodyAddressUpdate {
    name: AddressUpdateAddressApiWechataddressPcAddressPatchBodyName;
    phone: AddressUpdateAddressApiWechataddressPcAddressPatchBodyPhone;
    detail: AddressUpdateAddressApiWechataddressPcAddressPatchBodyDetail;
    id: AddressUpdateAddressApiWechataddressPcAddressPatchBodyId;
  }

  export type AddressUpdateAddressApiWechataddressPcAddressPatchResponses =
    AddressUpdateAddressApiWechataddressPcAddressPatchResponsesResultSchema;
  export type AddressUpdateAddressApiWechataddressPcAddressPatchResponsesCode =
    number;
  export type AddressUpdateAddressApiWechataddressPcAddressPatchResponsesData =
    unknown[];
  export type AddressUpdateAddressApiWechataddressPcAddressPatchResponsesTotal =
    number;
  export type AddressUpdateAddressApiWechataddressPcAddressPatchResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface AddressUpdateAddressApiWechataddressPcAddressPatchResponsesResultSchema {
    code: AddressUpdateAddressApiWechataddressPcAddressPatchResponsesCode;
    data?: AddressUpdateAddressApiWechataddressPcAddressPatchResponsesData;
    total?: AddressUpdateAddressApiWechataddressPcAddressPatchResponsesTotal;
    msg?: AddressUpdateAddressApiWechataddressPcAddressPatchResponsesMsg;
  }

  export type AddressGetAddressesApiWechataddressPcAddressesGetParamsName =
    string;
  export type AddressGetAddressesApiWechataddressPcAddressesGetParamsPhone =
    string;
  export type Address = string;
  export type AddressGetAddressesApiWechataddressPcAddressesGetParamsPage =
    number;
  export type AddressGetAddressesApiWechataddressPcAddressesGetParamsPageSize =
    number;

  export interface AddressGetAddressesApiWechataddressPcAddressesGetParams {
    name?: AddressGetAddressesApiWechataddressPcAddressesGetParamsName;
    phone?: AddressGetAddressesApiWechataddressPcAddressesGetParamsPhone;
    address?: Address;
    page?: AddressGetAddressesApiWechataddressPcAddressesGetParamsPage;
    page_size?: AddressGetAddressesApiWechataddressPcAddressesGetParamsPageSize;
  }

  export type AddressGetAddressesApiWechataddressPcAddressesGetResponses =
    AddressGetAddressesApiWechataddressPcAddressesGetResponsesResultSchemaListSchemasAddressAddressOut;
  export type AddressGetAddressesApiWechataddressPcAddressesGetResponsesCode =
    number;
  export type AddressGetAddressesApiWechataddressPcAddressesGetResponsesData =
    | AddressGetAddressesApiWechataddressPcAddressesGetResponsesAddressOut[]
    | AddressGetAddressesApiWechataddressPcAddressesGetResponsesAddressOut[][];
  export type AddressGetAddressesApiWechataddressPcAddressesGetResponsesName =
    string;
  export type AddressGetAddressesApiWechataddressPcAddressesGetResponsesPhone =
    string;
  export type AddressGetAddressesApiWechataddressPcAddressesGetResponsesDetail =
    string;
  export type AddressGetAddressesApiWechataddressPcAddressesGetResponsesId =
    number;
  export type AddressGetAddressesApiWechataddressPcAddressesGetResponsesUpdateTime =
    string;
  export type AddressGetAddressesApiWechataddressPcAddressesGetResponsesTotal =
    number;
  export type AddressGetAddressesApiWechataddressPcAddressesGetResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface AddressGetAddressesApiWechataddressPcAddressesGetResponsesResultSchemaListSchemasAddressAddressOut {
    code: AddressGetAddressesApiWechataddressPcAddressesGetResponsesCode;
    data?: AddressGetAddressesApiWechataddressPcAddressesGetResponsesData;
    total?: AddressGetAddressesApiWechataddressPcAddressesGetResponsesTotal;
    msg?: AddressGetAddressesApiWechataddressPcAddressesGetResponsesMsg;
  }
  export interface AddressGetAddressesApiWechataddressPcAddressesGetResponsesAddressOut {
    name: AddressGetAddressesApiWechataddressPcAddressesGetResponsesName;
    phone: AddressGetAddressesApiWechataddressPcAddressesGetResponsesPhone;
    detail: AddressGetAddressesApiWechataddressPcAddressesGetResponsesDetail;
    id: AddressGetAddressesApiWechataddressPcAddressesGetResponsesId;
    update_time: AddressGetAddressesApiWechataddressPcAddressesGetResponsesUpdateTime;
  }

  export type WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetParamsOpenid =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetParamsPage =
    number;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetParamsPageSize =
    number;

  export interface WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetParams {
    openid?: WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetParamsOpenid;
    page?: WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetParamsPage;
    page_size?: WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetParamsPageSize;
  }

  export type WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponses =
    WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesResultSchemaListSchemasWithdrawalWithdrawalOut;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesCode =
    number;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesData =

      | WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesWithdrawalOut[]
      | WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesWithdrawalOut[][];
  export type WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesOpenid =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesWithdrawalMoney =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesId =
    number;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesUserId =
    number;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesCreateTime =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesIdCode =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesReceiveCode =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesStatus =
    number;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesName =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesReason =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesPhone =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesTotal =
    number;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesResultSchemaListSchemasWithdrawalWithdrawalOut {
    code: WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesCode;
    data?: WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesData;
    total?: WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesTotal;
    msg?: WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesMsg;
  }
  export interface WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesWithdrawalOut {
    openid: WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesOpenid;
    withdrawal_money?: WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesWithdrawalMoney;
    id: WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesId;
    user_id: WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesUserId;
    create_time: WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesCreateTime;
    id_code: WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesIdCode;
    receive_code?: WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesReceiveCode;
    status: WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesStatus;
    name?: WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesName;
    reason?: WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesReason;
    phone?: WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponsesPhone;
  }

  export type WithdrawalCreateWithdrawalApiWechatwithdrawalWithdrawalPostBody =
    WithdrawalCreateWithdrawalApiWechatwithdrawalWithdrawalPostBodyWithdrawalCreate;
  export type WithdrawalCreateWithdrawalApiWechatwithdrawalWithdrawalPostBodyOpenid =
    string;
  export type WithdrawalCreateWithdrawalApiWechatwithdrawalWithdrawalPostBodyWithdrawalMoney =
    string;

  export interface WithdrawalCreateWithdrawalApiWechatwithdrawalWithdrawalPostBodyWithdrawalCreate {
    openid: WithdrawalCreateWithdrawalApiWechatwithdrawalWithdrawalPostBodyOpenid;
    withdrawal_money?: WithdrawalCreateWithdrawalApiWechatwithdrawalWithdrawalPostBodyWithdrawalMoney;
  }

  export type WithdrawalCreateWithdrawalApiWechatwithdrawalWithdrawalPostResponses =
    WithdrawalCreateWithdrawalApiWechatwithdrawalWithdrawalPostResponsesResultSchema;
  export type WithdrawalCreateWithdrawalApiWechatwithdrawalWithdrawalPostResponsesCode =
    number;
  export type WithdrawalCreateWithdrawalApiWechatwithdrawalWithdrawalPostResponsesData =
    unknown[];
  export type WithdrawalCreateWithdrawalApiWechatwithdrawalWithdrawalPostResponsesTotal =
    number;
  export type WithdrawalCreateWithdrawalApiWechatwithdrawalWithdrawalPostResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface WithdrawalCreateWithdrawalApiWechatwithdrawalWithdrawalPostResponsesResultSchema {
    code: WithdrawalCreateWithdrawalApiWechatwithdrawalWithdrawalPostResponsesCode;
    data?: WithdrawalCreateWithdrawalApiWechatwithdrawalWithdrawalPostResponsesData;
    total?: WithdrawalCreateWithdrawalApiWechatwithdrawalWithdrawalPostResponsesTotal;
    msg?: WithdrawalCreateWithdrawalApiWechatwithdrawalWithdrawalPostResponsesMsg;
  }

  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetParamsName =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetParamsPhone =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetParamsIdCode =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetParamsReceiveCode =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetParamsStatus =
    number;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetParamsPage =
    number;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetParamsPageSize =
    number;

  export interface WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetParams {
    name?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetParamsName;
    phone?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetParamsPhone;
    id_code?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetParamsIdCode;
    receive_code?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetParamsReceiveCode;
    status?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetParamsStatus;
    page?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetParamsPage;
    page_size?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetParamsPageSize;
  }

  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponses =
    WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesResultSchemaListSchemasWithdrawalWithdrawalOut;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesCode =
    number;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesData =

      | WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesWithdrawalOut[]
      | WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesWithdrawalOut[][];
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesOpenid =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesWithdrawalMoney =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesId =
    number;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesUserId =
    number;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesCreateTime =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesIdCode =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesReceiveCode =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesStatus =
    number;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesName =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesReason =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesPhone =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesTotal =
    number;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesResultSchemaListSchemasWithdrawalWithdrawalOut {
    code: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesCode;
    data?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesData;
    total?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesTotal;
    msg?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesMsg;
  }
  export interface WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesWithdrawalOut {
    openid: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesOpenid;
    withdrawal_money?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesWithdrawalMoney;
    id: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesId;
    user_id: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesUserId;
    create_time: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesCreateTime;
    id_code: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesIdCode;
    receive_code?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesReceiveCode;
    status: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesStatus;
    name?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesName;
    reason?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesReason;
    phone?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponsesPhone;
  }

  export type WithdrawalUpdateWithdrawalApiWechatwithdrawalPcWithdrawalPatchParamsId =
    number;

  export interface WithdrawalUpdateWithdrawalApiWechatwithdrawalPcWithdrawalPatchParams {
    id?: WithdrawalUpdateWithdrawalApiWechatwithdrawalPcWithdrawalPatchParamsId;
  }

  export type WithdrawalUpdateWithdrawalApiWechatwithdrawalPcWithdrawalPatchResponses =
    WithdrawalUpdateWithdrawalApiWechatwithdrawalPcWithdrawalPatchResponsesResultSchema;
  export type WithdrawalUpdateWithdrawalApiWechatwithdrawalPcWithdrawalPatchResponsesCode =
    number;
  export type WithdrawalUpdateWithdrawalApiWechatwithdrawalPcWithdrawalPatchResponsesData =
    unknown[];
  export type WithdrawalUpdateWithdrawalApiWechatwithdrawalPcWithdrawalPatchResponsesTotal =
    number;
  export type WithdrawalUpdateWithdrawalApiWechatwithdrawalPcWithdrawalPatchResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface WithdrawalUpdateWithdrawalApiWechatwithdrawalPcWithdrawalPatchResponsesResultSchema {
    code: WithdrawalUpdateWithdrawalApiWechatwithdrawalPcWithdrawalPatchResponsesCode;
    data?: WithdrawalUpdateWithdrawalApiWechatwithdrawalPcWithdrawalPatchResponsesData;
    total?: WithdrawalUpdateWithdrawalApiWechatwithdrawalPcWithdrawalPatchResponsesTotal;
    msg?: WithdrawalUpdateWithdrawalApiWechatwithdrawalPcWithdrawalPatchResponsesMsg;
  }

  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetParamsUserId =
    number;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetParamsPage =
    number;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetParamsPageSize =
    number;

  export interface WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetParams {
    user_id?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetParamsUserId;
    page?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetParamsPage;
    page_size?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetParamsPageSize;
  }

  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponses =
    WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesResultSchemaListSchemasWithdrawalWithdrawalOut;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesCode =
    number;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesData =

      | WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesWithdrawalOut[]
      | WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesWithdrawalOut[][];
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesOpenid =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesWithdrawalMoney =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesId =
    number;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesUserId =
    number;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesCreateTime =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesIdCode =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesReceiveCode =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesStatus =
    number;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesName =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesReason =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesPhone =
    string;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesTotal =
    number;
  export type WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesMsg =
    string;

  /**
   * 结果数据模型
   */
  export interface WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesResultSchemaListSchemasWithdrawalWithdrawalOut {
    code: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesCode;
    data?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesData;
    total?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesTotal;
    msg?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesMsg;
  }
  export interface WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesWithdrawalOut {
    openid: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesOpenid;
    withdrawal_money?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesWithdrawalMoney;
    id: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesId;
    user_id: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesUserId;
    create_time: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesCreateTime;
    id_code: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesIdCode;
    receive_code?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesReceiveCode;
    status: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesStatus;
    name?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesName;
    reason?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesReason;
    phone?: WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponsesPhone;
  }
}
