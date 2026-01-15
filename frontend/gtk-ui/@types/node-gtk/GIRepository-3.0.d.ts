/**
 * GIRepository-3.0
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />

declare namespace GIRepository {

export enum ArrayType {
    C,
    ARRAY,
    PTR_ARRAY,
    BYTE_ARRAY,
}
export enum Direction {
    IN,
    OUT,
    INOUT,
}
export enum InvokeError {
    FAILED,
    SYMBOL_NOT_FOUND,
    ARGUMENT_MISMATCH,
}
export enum RepositoryError {
    TYPELIB_NOT_FOUND,
    NAMESPACE_MISMATCH,
    NAMESPACE_VERSION_CONFLICT,
    LIBRARY_NOT_FOUND,
}
export enum ScopeType {
    INVALID,
    CALL,
    ASYNC,
    NOTIFIED,
    FOREVER,
}
export enum Transfer {
    NOTHING,
    CONTAINER,
    EVERYTHING,
}
export enum TypeTag {
    VOID,
    BOOLEAN,
    INT8,
    UINT8,
    INT16,
    UINT16,
    INT32,
    UINT32,
    INT64,
    UINT64,
    FLOAT,
    DOUBLE,
    GTYPE,
    UTF8,
    FILENAME,
    ARRAY,
    INTERFACE,
    GLIST,
    GSLIST,
    GHASH,
    ERROR,
    UNICHAR,
}
export enum FieldInfoFlags {
    INFO_FLAGS_NONE,
    IS_READABLE,
    IS_WRITABLE,
}
export enum FunctionInfoFlags {
    INFO_FLAGS_NONE,
    IS_METHOD,
    IS_CONSTRUCTOR,
    IS_GETTER,
    IS_SETTER,
    WRAPS_VFUNC,
    IS_ASYNC,
}
export enum RepositoryLoadFlags {
    NONE,
    LAZY,
}
export enum VFuncInfoFlags {
    INFO_FLAGS_NONE,
    MUST_CHAIN_UP,
    MUST_OVERRIDE,
    MUST_NOT_OVERRIDE,
}
export const TYPE_TAG_N_TYPES: number
export function invokeErrorQuark(): GLib.Quark
export function typeTagArgumentFromHashPointer(storageType: TypeTag, hashPointer?: object | null): /* arg */ Argument
export function typeTagHashPointerFromArgument(storageType: TypeTag, arg: Argument): object | null
export function typeTagToString(type: TypeTag): string
export class ArgInfo {
    /* Fields of GIRepository.ArgInfo */
    /* Methods of GIRepository.ArgInfo */
    getClosureIndex(): [ /* returnType */ boolean, /* outClosureIndex */ number | null ]
    getDestroyIndex(): [ /* returnType */ boolean, /* outDestroyIndex */ number | null ]
    getDirection(): Direction
    getOwnershipTransfer(): Transfer
    getScope(): ScopeType
    getTypeInfo(): TypeInfo
    isCallerAllocates(): boolean
    isOptional(): boolean
    isReturnValue(): boolean
    isSkip(): boolean
    loadTypeInfo(): /* type */ TypeInfo
    mayBeNull(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    getAttribute(name: string): string | null
    getContainer(): BaseInfo
    getName(): string | null
    getNamespace(): string
    getTypelib(): Typelib
    isDeprecated(): boolean
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class BaseInfo {
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    getAttribute(name: string): string | null
    getContainer(): BaseInfo
    getName(): string | null
    getNamespace(): string
    getTypelib(): Typelib
    isDeprecated(): boolean
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class CallableInfo {
    /* Methods of GIRepository.CallableInfo */
    canThrowGerror(): boolean
    getArg(n: number): ArgInfo
    getAsyncFunction(): CallableInfo | null
    getCallerOwns(): Transfer
    getFinishFunction(): CallableInfo | null
    getInstanceOwnershipTransfer(): Transfer
    getNArgs(): number
    getReturnAttribute(name: string): string | null
    getReturnType(): TypeInfo
    getSyncFunction(): CallableInfo | null
    invoke(function_: object | null, inArgs: Argument[], outArgs: Argument[]): [ /* returnType */ boolean, /* returnValue */ Argument ]
    isAsync(): boolean
    isMethod(): boolean
    iterateReturnAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    loadArg(n: number): /* arg */ ArgInfo
    loadReturnType(): /* type */ TypeInfo
    mayReturnNull(): boolean
    skipReturn(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    getAttribute(name: string): string | null
    getContainer(): BaseInfo
    getName(): string | null
    getNamespace(): string
    getTypelib(): Typelib
    isDeprecated(): boolean
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class CallbackInfo {
    /* Methods of GIRepository.CallableInfo */
    canThrowGerror(): boolean
    getArg(n: number): ArgInfo
    getAsyncFunction(): CallableInfo | null
    getCallerOwns(): Transfer
    getFinishFunction(): CallableInfo | null
    getInstanceOwnershipTransfer(): Transfer
    getNArgs(): number
    getReturnAttribute(name: string): string | null
    getReturnType(): TypeInfo
    getSyncFunction(): CallableInfo | null
    invoke(function_: object | null, inArgs: Argument[], outArgs: Argument[]): [ /* returnType */ boolean, /* returnValue */ Argument ]
    isAsync(): boolean
    isMethod(): boolean
    iterateReturnAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    loadArg(n: number): /* arg */ ArgInfo
    loadReturnType(): /* type */ TypeInfo
    mayReturnNull(): boolean
    skipReturn(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    getAttribute(name: string): string | null
    getContainer(): BaseInfo
    getName(): string | null
    getNamespace(): string
    getTypelib(): Typelib
    isDeprecated(): boolean
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class ConstantInfo {
    /* Methods of GIRepository.ConstantInfo */
    getTypeInfo(): TypeInfo
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    getAttribute(name: string): string | null
    getContainer(): BaseInfo
    getName(): string | null
    getNamespace(): string
    getTypelib(): Typelib
    isDeprecated(): boolean
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class EnumInfo {
    /* Methods of GIRepository.EnumInfo */
    getErrorDomain(): string | null
    getMethod(n: number): FunctionInfo
    getNMethods(): number
    getNValues(): number
    getStorageType(): TypeTag
    getValue(n: number): ValueInfo
    /* Methods of GIRepository.RegisteredTypeInfo */
    getGType(): GObject.Type
    getTypeInitFunctionName(): string | null
    getTypeName(): string | null
    isBoxed(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    getAttribute(name: string): string | null
    getContainer(): BaseInfo
    getName(): string | null
    getNamespace(): string
    getTypelib(): Typelib
    isDeprecated(): boolean
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class FieldInfo {
    /* Methods of GIRepository.FieldInfo */
    getFlags(): FieldInfoFlags
    getOffset(): number
    getSize(): number
    getTypeInfo(): TypeInfo
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    getAttribute(name: string): string | null
    getContainer(): BaseInfo
    getName(): string | null
    getNamespace(): string
    getTypelib(): Typelib
    isDeprecated(): boolean
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class FlagsInfo {
    /* Methods of GIRepository.EnumInfo */
    getErrorDomain(): string | null
    getMethod(n: number): FunctionInfo
    getNMethods(): number
    getNValues(): number
    getStorageType(): TypeTag
    getValue(n: number): ValueInfo
    /* Methods of GIRepository.RegisteredTypeInfo */
    getGType(): GObject.Type
    getTypeInitFunctionName(): string | null
    getTypeName(): string | null
    isBoxed(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    getAttribute(name: string): string | null
    getContainer(): BaseInfo
    getName(): string | null
    getNamespace(): string
    getTypelib(): Typelib
    isDeprecated(): boolean
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class FunctionInfo {
    /* Methods of GIRepository.FunctionInfo */
    getFlags(): FunctionInfoFlags
    getProperty(): PropertyInfo | null
    getSymbol(): string
    getVfunc(): VFuncInfo | null
    /* Methods of GIRepository.CallableInfo */
    canThrowGerror(): boolean
    getArg(n: number): ArgInfo
    getAsyncFunction(): CallableInfo | null
    getCallerOwns(): Transfer
    getFinishFunction(): CallableInfo | null
    getInstanceOwnershipTransfer(): Transfer
    getNArgs(): number
    getReturnAttribute(name: string): string | null
    getReturnType(): TypeInfo
    getSyncFunction(): CallableInfo | null
    invoke(function_: object | null, inArgs: Argument[], outArgs: Argument[]): [ /* returnType */ boolean, /* returnValue */ Argument ]
    isAsync(): boolean
    isMethod(): boolean
    iterateReturnAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    loadArg(n: number): /* arg */ ArgInfo
    loadReturnType(): /* type */ TypeInfo
    mayReturnNull(): boolean
    skipReturn(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    getAttribute(name: string): string | null
    getContainer(): BaseInfo
    getName(): string | null
    getNamespace(): string
    getTypelib(): Typelib
    isDeprecated(): boolean
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class InterfaceInfo {
    /* Methods of GIRepository.InterfaceInfo */
    findMethod(name: string): FunctionInfo | null
    findSignal(name: string): SignalInfo | null
    findVfunc(name: string): VFuncInfo | null
    getConstant(n: number): ConstantInfo
    getIfaceStruct(): StructInfo | null
    getMethod(n: number): FunctionInfo
    getNConstants(): number
    getNMethods(): number
    getNPrerequisites(): number
    getNProperties(): number
    getNSignals(): number
    getNVfuncs(): number
    getPrerequisite(n: number): BaseInfo
    getProperty(n: number): PropertyInfo
    getSignal(n: number): SignalInfo
    getVfunc(n: number): VFuncInfo
    /* Methods of GIRepository.RegisteredTypeInfo */
    getGType(): GObject.Type
    getTypeInitFunctionName(): string | null
    getTypeName(): string | null
    isBoxed(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    getAttribute(name: string): string | null
    getContainer(): BaseInfo
    getName(): string | null
    getNamespace(): string
    getTypelib(): Typelib
    isDeprecated(): boolean
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class ObjectInfo {
    /* Methods of GIRepository.ObjectInfo */
    findMethod(name: string): FunctionInfo | null
    findMethodUsingInterfaces(name: string): [ /* returnType */ FunctionInfo | null, /* declarer */ BaseInfo | null ]
    findSignal(name: string): SignalInfo | null
    findVfunc(name: string): VFuncInfo | null
    findVfuncUsingInterfaces(name: string): [ /* returnType */ VFuncInfo | null, /* declarer */ BaseInfo | null ]
    getAbstract(): boolean
    getClassStruct(): StructInfo | null
    getConstant(n: number): ConstantInfo
    getField(n: number): FieldInfo
    getFinal(): boolean
    getFundamental(): boolean
    getGetValueFunctionName(): string | null
    getInterface(n: number): InterfaceInfo
    getMethod(n: number): FunctionInfo
    getNConstants(): number
    getNFields(): number
    getNInterfaces(): number
    getNMethods(): number
    getNProperties(): number
    getNSignals(): number
    getNVfuncs(): number
    getParent(): ObjectInfo | null
    getProperty(n: number): PropertyInfo
    getRefFunctionName(): string | null
    getSetValueFunctionName(): string | null
    getSignal(n: number): SignalInfo
    getTypeInitFunctionName(): string
    getTypeName(): string
    getUnrefFunctionName(): string | null
    getVfunc(n: number): VFuncInfo
    /* Methods of GIRepository.RegisteredTypeInfo */
    getGType(): GObject.Type
    isBoxed(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    getAttribute(name: string): string | null
    getContainer(): BaseInfo
    getName(): string | null
    getNamespace(): string
    getTypelib(): Typelib
    isDeprecated(): boolean
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class PropertyInfo {
    /* Methods of GIRepository.PropertyInfo */
    getFlags(): GObject.ParamFlags
    getGetter(): FunctionInfo | null
    getOwnershipTransfer(): Transfer
    getSetter(): FunctionInfo | null
    getTypeInfo(): TypeInfo
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    getAttribute(name: string): string | null
    getContainer(): BaseInfo
    getName(): string | null
    getNamespace(): string
    getTypelib(): Typelib
    isDeprecated(): boolean
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class RegisteredTypeInfo {
    /* Methods of GIRepository.RegisteredTypeInfo */
    getGType(): GObject.Type
    getTypeInitFunctionName(): string | null
    getTypeName(): string | null
    isBoxed(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    getAttribute(name: string): string | null
    getContainer(): BaseInfo
    getName(): string | null
    getNamespace(): string
    getTypelib(): Typelib
    isDeprecated(): boolean
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export interface Repository_ConstructProps extends GObject.Object_ConstructProps {
}
export class Repository {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GIRepository.Repository */
    enumerateVersions(namespace: string): string[]
    findByErrorDomain(domain: GLib.Quark): EnumInfo | null
    findByGtype(gtype: GObject.Type): BaseInfo | null
    findByName(namespace: string, name: string): BaseInfo | null
    getCPrefix(namespace: string): string | null
    getDependencies(namespace: string): string[]
    getImmediateDependencies(namespace: string): string[]
    getInfo(namespace: string, idx: number): BaseInfo
    getLibraryPath(): string[]
    getLoadedNamespaces(): string[]
    getNInfos(namespace: string): number
    getObjectGtypeInterfaces(gtype: GObject.Type): /* interfacesOut */ InterfaceInfo[]
    getSearchPath(): string[]
    getSharedLibraries(namespace: string): string[] | null
    getTypelibPath(namespace: string): string | null
    getVersion(namespace: string): string
    isRegistered(namespace: string, version?: string | null): boolean
    loadTypelib(typelib: Typelib, flags: RepositoryLoadFlags): string
    prependLibraryPath(directory: string): void
    prependSearchPath(directory: string): void
    require(namespace: string, version: string | null, flags: RepositoryLoadFlags): Typelib
    requirePrivate(typelibDir: string, namespace: string, version: string | null, flags: RepositoryLoadFlags): Typelib
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Repository_ConstructProps)
    _init (config?: Repository_ConstructProps): void
    static new(): Repository
    static dump(inputFilename: string, outputFilename: string): boolean
    static dupDefault(): Repository
    static errorQuark(): GLib.Quark
    static getOptionGroup(): GLib.OptionGroup
    static $gtype: GObject.Type
}
export class SignalInfo {
    /* Methods of GIRepository.SignalInfo */
    getClassClosure(): VFuncInfo | null
    getFlags(): GObject.SignalFlags
    trueStopsEmit(): boolean
    /* Methods of GIRepository.CallableInfo */
    canThrowGerror(): boolean
    getArg(n: number): ArgInfo
    getAsyncFunction(): CallableInfo | null
    getCallerOwns(): Transfer
    getFinishFunction(): CallableInfo | null
    getInstanceOwnershipTransfer(): Transfer
    getNArgs(): number
    getReturnAttribute(name: string): string | null
    getReturnType(): TypeInfo
    getSyncFunction(): CallableInfo | null
    invoke(function_: object | null, inArgs: Argument[], outArgs: Argument[]): [ /* returnType */ boolean, /* returnValue */ Argument ]
    isAsync(): boolean
    isMethod(): boolean
    iterateReturnAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    loadArg(n: number): /* arg */ ArgInfo
    loadReturnType(): /* type */ TypeInfo
    mayReturnNull(): boolean
    skipReturn(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    getAttribute(name: string): string | null
    getContainer(): BaseInfo
    getName(): string | null
    getNamespace(): string
    getTypelib(): Typelib
    isDeprecated(): boolean
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class StructInfo {
    /* Methods of GIRepository.StructInfo */
    findField(name: string): FieldInfo | null
    findMethod(name: string): FunctionInfo | null
    getAlignment(): number
    getCopyFunctionName(): string | null
    getField(n: number): FieldInfo
    getFreeFunctionName(): string | null
    getMethod(n: number): FunctionInfo
    getNFields(): number
    getNMethods(): number
    getSize(): number
    isForeign(): boolean
    isGtypeStruct(): boolean
    /* Methods of GIRepository.RegisteredTypeInfo */
    getGType(): GObject.Type
    getTypeInitFunctionName(): string | null
    getTypeName(): string | null
    isBoxed(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    getAttribute(name: string): string | null
    getContainer(): BaseInfo
    getName(): string | null
    getNamespace(): string
    getTypelib(): Typelib
    isDeprecated(): boolean
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class TypeInfo {
    /* Fields of GIRepository.TypeInfo */
    /* Methods of GIRepository.TypeInfo */
    argumentFromHashPointer(hashPointer?: object | null): /* arg */ Argument
    getArrayFixedSize(): [ /* returnType */ boolean, /* outSize */ number | null ]
    getArrayLengthIndex(): [ /* returnType */ boolean, /* outLengthIndex */ number | null ]
    getArrayType(): ArrayType
    getInterface(): BaseInfo | null
    getParamType(n: number): TypeInfo | null
    getStorageType(): TypeTag
    getTag(): TypeTag
    hashPointerFromArgument(arg: Argument): object | null
    isPointer(): boolean
    isZeroTerminated(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    getAttribute(name: string): string | null
    getContainer(): BaseInfo
    getName(): string | null
    getNamespace(): string
    getTypelib(): Typelib
    isDeprecated(): boolean
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class UnionInfo {
    /* Methods of GIRepository.UnionInfo */
    findMethod(name: string): FunctionInfo | null
    getAlignment(): number
    getCopyFunctionName(): string | null
    getDiscriminator(n: number): ConstantInfo | null
    getDiscriminatorOffset(): [ /* returnType */ boolean, /* outOffset */ number | null ]
    getDiscriminatorType(): TypeInfo | null
    getField(n: number): FieldInfo
    getFreeFunctionName(): string | null
    getMethod(n: number): FunctionInfo
    getNFields(): number
    getNMethods(): number
    getSize(): number
    isDiscriminated(): boolean
    /* Methods of GIRepository.RegisteredTypeInfo */
    getGType(): GObject.Type
    getTypeInitFunctionName(): string | null
    getTypeName(): string | null
    isBoxed(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    getAttribute(name: string): string | null
    getContainer(): BaseInfo
    getName(): string | null
    getNamespace(): string
    getTypelib(): Typelib
    isDeprecated(): boolean
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class UnresolvedInfo {
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    getAttribute(name: string): string | null
    getContainer(): BaseInfo
    getName(): string | null
    getNamespace(): string
    getTypelib(): Typelib
    isDeprecated(): boolean
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class VFuncInfo {
    /* Methods of GIRepository.VFuncInfo */
    getAddress(implementorGtype: GObject.Type): object | null
    getFlags(): VFuncInfoFlags
    getInvoker(): FunctionInfo | null
    getOffset(): number
    getSignal(): SignalInfo | null
    /* Methods of GIRepository.CallableInfo */
    canThrowGerror(): boolean
    getArg(n: number): ArgInfo
    getAsyncFunction(): CallableInfo | null
    getCallerOwns(): Transfer
    getFinishFunction(): CallableInfo | null
    getInstanceOwnershipTransfer(): Transfer
    getNArgs(): number
    getReturnAttribute(name: string): string | null
    getReturnType(): TypeInfo
    getSyncFunction(): CallableInfo | null
    invoke(function_: object | null, inArgs: Argument[], outArgs: Argument[]): [ /* returnType */ boolean, /* returnValue */ Argument ]
    isAsync(): boolean
    isMethod(): boolean
    iterateReturnAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    loadArg(n: number): /* arg */ ArgInfo
    loadReturnType(): /* type */ TypeInfo
    mayReturnNull(): boolean
    skipReturn(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    getAttribute(name: string): string | null
    getContainer(): BaseInfo
    getName(): string | null
    getNamespace(): string
    getTypelib(): Typelib
    isDeprecated(): boolean
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class ValueInfo {
    /* Methods of GIRepository.ValueInfo */
    getValue(): number
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    getAttribute(name: string): string | null
    getContainer(): BaseInfo
    getName(): string | null
    getNamespace(): string
    getTypelib(): Typelib
    isDeprecated(): boolean
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class AttributeIter {
    /* Fields of GIRepository.AttributeIter */
    static name: string
}
export abstract class BaseInfoClass {
    static name: string
}
export class BaseInfoStack {
    /* Fields of GIRepository.BaseInfoStack */
    static name: string
}
export abstract class RepositoryClass {
    /* Fields of GIRepository.RepositoryClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class Typelib {
    /* Methods of GIRepository.Typelib */
    getNamespace(): string
    ref(): Typelib
    symbol(symbolName: string): [ /* returnType */ boolean, /* symbol */ object | null ]
    unref(): void
    static name: string
    static newFromBytes(bytes: any): Typelib
}
export class Argument {
    /* Fields of GIRepository.Argument */
    vBoolean: boolean
    vInt8: number
    vUint8: number
    vInt16: number
    vUint16: number
    vInt32: number
    vUint32: number
    vInt64: number
    vUint64: number
    vFloat: number
    vDouble: number
    vShort: number
    vUshort: number
    vInt: number
    vUint: number
    vLong: number
    vUlong: number
    vSsize: number
    vSize: number
    vString: string
    vPointer: object
    static name: string
}
}