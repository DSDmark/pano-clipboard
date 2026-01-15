/**
 * GIRepository-3.0
 */

import * as Gjs from './Gjs';
import * as Gio from './Gio-2.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as GModule from './GModule-2.0';

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
export function invoke_error_quark(): GLib.Quark
export function type_tag_argument_from_hash_pointer(storage_type: TypeTag, hash_pointer?: object | null): /* arg */ Argument
export function type_tag_hash_pointer_from_argument(storage_type: TypeTag, arg: Argument): object | null
export function type_tag_to_string(type: TypeTag): string
export class ArgInfo {
    /* Fields of GIRepository.ArgInfo */
    /* Methods of GIRepository.ArgInfo */
    get_closure_index(): [ /* returnType */ boolean, /* out_closure_index */ number | null ]
    get_destroy_index(): [ /* returnType */ boolean, /* out_destroy_index */ number | null ]
    get_direction(): Direction
    get_ownership_transfer(): Transfer
    get_scope(): ScopeType
    get_type_info(): TypeInfo
    is_caller_allocates(): boolean
    is_optional(): boolean
    is_return_value(): boolean
    is_skip(): boolean
    load_type_info(): /* type */ TypeInfo
    may_be_null(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    get_attribute(name: string): string | null
    get_container(): BaseInfo
    get_name(): string | null
    get_namespace(): string
    get_typelib(): Typelib
    is_deprecated(): boolean
    iterate_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class BaseInfo {
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    get_attribute(name: string): string | null
    get_container(): BaseInfo
    get_name(): string | null
    get_namespace(): string
    get_typelib(): Typelib
    is_deprecated(): boolean
    iterate_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class CallableInfo {
    /* Methods of GIRepository.CallableInfo */
    can_throw_gerror(): boolean
    get_arg(n: number): ArgInfo
    get_async_function(): CallableInfo | null
    get_caller_owns(): Transfer
    get_finish_function(): CallableInfo | null
    get_instance_ownership_transfer(): Transfer
    get_n_args(): number
    get_return_attribute(name: string): string | null
    get_return_type(): TypeInfo
    get_sync_function(): CallableInfo | null
    invoke(function_: object | null, in_args: Argument[], out_args: Argument[]): [ /* returnType */ boolean, /* return_value */ Argument ]
    is_async(): boolean
    is_method(): boolean
    iterate_return_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    load_arg(n: number): /* arg */ ArgInfo
    load_return_type(): /* type */ TypeInfo
    may_return_null(): boolean
    skip_return(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    get_attribute(name: string): string | null
    get_container(): BaseInfo
    get_name(): string | null
    get_namespace(): string
    get_typelib(): Typelib
    is_deprecated(): boolean
    iterate_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class CallbackInfo {
    /* Methods of GIRepository.CallableInfo */
    can_throw_gerror(): boolean
    get_arg(n: number): ArgInfo
    get_async_function(): CallableInfo | null
    get_caller_owns(): Transfer
    get_finish_function(): CallableInfo | null
    get_instance_ownership_transfer(): Transfer
    get_n_args(): number
    get_return_attribute(name: string): string | null
    get_return_type(): TypeInfo
    get_sync_function(): CallableInfo | null
    invoke(function_: object | null, in_args: Argument[], out_args: Argument[]): [ /* returnType */ boolean, /* return_value */ Argument ]
    is_async(): boolean
    is_method(): boolean
    iterate_return_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    load_arg(n: number): /* arg */ ArgInfo
    load_return_type(): /* type */ TypeInfo
    may_return_null(): boolean
    skip_return(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    get_attribute(name: string): string | null
    get_container(): BaseInfo
    get_name(): string | null
    get_namespace(): string
    get_typelib(): Typelib
    is_deprecated(): boolean
    iterate_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class ConstantInfo {
    /* Methods of GIRepository.ConstantInfo */
    get_type_info(): TypeInfo
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    get_attribute(name: string): string | null
    get_container(): BaseInfo
    get_name(): string | null
    get_namespace(): string
    get_typelib(): Typelib
    is_deprecated(): boolean
    iterate_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class EnumInfo {
    /* Methods of GIRepository.EnumInfo */
    get_error_domain(): string | null
    get_method(n: number): FunctionInfo
    get_n_methods(): number
    get_n_values(): number
    get_storage_type(): TypeTag
    get_value(n: number): ValueInfo
    /* Methods of GIRepository.RegisteredTypeInfo */
    get_g_type(): GObject.Type
    get_type_init_function_name(): string | null
    get_type_name(): string | null
    is_boxed(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    get_attribute(name: string): string | null
    get_container(): BaseInfo
    get_name(): string | null
    get_namespace(): string
    get_typelib(): Typelib
    is_deprecated(): boolean
    iterate_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class FieldInfo {
    /* Methods of GIRepository.FieldInfo */
    get_flags(): FieldInfoFlags
    get_offset(): number
    get_size(): number
    get_type_info(): TypeInfo
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    get_attribute(name: string): string | null
    get_container(): BaseInfo
    get_name(): string | null
    get_namespace(): string
    get_typelib(): Typelib
    is_deprecated(): boolean
    iterate_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class FlagsInfo {
    /* Methods of GIRepository.EnumInfo */
    get_error_domain(): string | null
    get_method(n: number): FunctionInfo
    get_n_methods(): number
    get_n_values(): number
    get_storage_type(): TypeTag
    get_value(n: number): ValueInfo
    /* Methods of GIRepository.RegisteredTypeInfo */
    get_g_type(): GObject.Type
    get_type_init_function_name(): string | null
    get_type_name(): string | null
    is_boxed(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    get_attribute(name: string): string | null
    get_container(): BaseInfo
    get_name(): string | null
    get_namespace(): string
    get_typelib(): Typelib
    is_deprecated(): boolean
    iterate_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class FunctionInfo {
    /* Methods of GIRepository.FunctionInfo */
    get_flags(): FunctionInfoFlags
    get_property(): PropertyInfo | null
    get_symbol(): string
    get_vfunc(): VFuncInfo | null
    /* Methods of GIRepository.CallableInfo */
    can_throw_gerror(): boolean
    get_arg(n: number): ArgInfo
    get_async_function(): CallableInfo | null
    get_caller_owns(): Transfer
    get_finish_function(): CallableInfo | null
    get_instance_ownership_transfer(): Transfer
    get_n_args(): number
    get_return_attribute(name: string): string | null
    get_return_type(): TypeInfo
    get_sync_function(): CallableInfo | null
    invoke(function_: object | null, in_args: Argument[], out_args: Argument[]): [ /* returnType */ boolean, /* return_value */ Argument ]
    is_async(): boolean
    is_method(): boolean
    iterate_return_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    load_arg(n: number): /* arg */ ArgInfo
    load_return_type(): /* type */ TypeInfo
    may_return_null(): boolean
    skip_return(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    get_attribute(name: string): string | null
    get_container(): BaseInfo
    get_name(): string | null
    get_namespace(): string
    get_typelib(): Typelib
    is_deprecated(): boolean
    iterate_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class InterfaceInfo {
    /* Methods of GIRepository.InterfaceInfo */
    find_method(name: string): FunctionInfo | null
    find_signal(name: string): SignalInfo | null
    find_vfunc(name: string): VFuncInfo | null
    get_constant(n: number): ConstantInfo
    get_iface_struct(): StructInfo | null
    get_method(n: number): FunctionInfo
    get_n_constants(): number
    get_n_methods(): number
    get_n_prerequisites(): number
    get_n_properties(): number
    get_n_signals(): number
    get_n_vfuncs(): number
    get_prerequisite(n: number): BaseInfo
    get_property(n: number): PropertyInfo
    get_signal(n: number): SignalInfo
    get_vfunc(n: number): VFuncInfo
    /* Methods of GIRepository.RegisteredTypeInfo */
    get_g_type(): GObject.Type
    get_type_init_function_name(): string | null
    get_type_name(): string | null
    is_boxed(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    get_attribute(name: string): string | null
    get_container(): BaseInfo
    get_name(): string | null
    get_namespace(): string
    get_typelib(): Typelib
    is_deprecated(): boolean
    iterate_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class ObjectInfo {
    /* Methods of GIRepository.ObjectInfo */
    find_method(name: string): FunctionInfo | null
    find_method_using_interfaces(name: string): [ /* returnType */ FunctionInfo | null, /* declarer */ BaseInfo | null ]
    find_signal(name: string): SignalInfo | null
    find_vfunc(name: string): VFuncInfo | null
    find_vfunc_using_interfaces(name: string): [ /* returnType */ VFuncInfo | null, /* declarer */ BaseInfo | null ]
    get_abstract(): boolean
    get_class_struct(): StructInfo | null
    get_constant(n: number): ConstantInfo
    get_field(n: number): FieldInfo
    get_final(): boolean
    get_fundamental(): boolean
    get_get_value_function_name(): string | null
    get_interface(n: number): InterfaceInfo
    get_method(n: number): FunctionInfo
    get_n_constants(): number
    get_n_fields(): number
    get_n_interfaces(): number
    get_n_methods(): number
    get_n_properties(): number
    get_n_signals(): number
    get_n_vfuncs(): number
    get_parent(): ObjectInfo | null
    get_property(n: number): PropertyInfo
    get_ref_function_name(): string | null
    get_set_value_function_name(): string | null
    get_signal(n: number): SignalInfo
    get_type_init_function_name(): string
    get_type_name(): string
    get_unref_function_name(): string | null
    get_vfunc(n: number): VFuncInfo
    /* Methods of GIRepository.RegisteredTypeInfo */
    get_g_type(): GObject.Type
    is_boxed(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    get_attribute(name: string): string | null
    get_container(): BaseInfo
    get_name(): string | null
    get_namespace(): string
    get_typelib(): Typelib
    is_deprecated(): boolean
    iterate_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class PropertyInfo {
    /* Methods of GIRepository.PropertyInfo */
    get_flags(): GObject.ParamFlags
    get_getter(): FunctionInfo | null
    get_ownership_transfer(): Transfer
    get_setter(): FunctionInfo | null
    get_type_info(): TypeInfo
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    get_attribute(name: string): string | null
    get_container(): BaseInfo
    get_name(): string | null
    get_namespace(): string
    get_typelib(): Typelib
    is_deprecated(): boolean
    iterate_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class RegisteredTypeInfo {
    /* Methods of GIRepository.RegisteredTypeInfo */
    get_g_type(): GObject.Type
    get_type_init_function_name(): string | null
    get_type_name(): string | null
    is_boxed(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    get_attribute(name: string): string | null
    get_container(): BaseInfo
    get_name(): string | null
    get_namespace(): string
    get_typelib(): Typelib
    is_deprecated(): boolean
    iterate_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export interface Repository_ConstructProps extends GObject.Object_ConstructProps {
}
export class Repository {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GIRepository.Repository */
    enumerate_versions(namespace_: string): string[]
    find_by_error_domain(domain: GLib.Quark): EnumInfo | null
    find_by_gtype(gtype: GObject.Type): BaseInfo | null
    find_by_name(namespace_: string, name: string): BaseInfo | null
    get_c_prefix(namespace_: string): string | null
    get_dependencies(namespace_: string): string[]
    get_immediate_dependencies(namespace_: string): string[]
    get_info(namespace_: string, idx: number): BaseInfo
    get_library_path(): string[]
    get_loaded_namespaces(): string[]
    get_n_infos(namespace_: string): number
    get_object_gtype_interfaces(gtype: GObject.Type): /* interfaces_out */ InterfaceInfo[]
    get_search_path(): string[]
    get_shared_libraries(namespace_: string): string[] | null
    get_typelib_path(namespace_: string): string | null
    get_version(namespace_: string): string
    is_registered(namespace_: string, version?: string | null): boolean
    load_typelib(typelib: Typelib, flags: RepositoryLoadFlags): string
    prepend_library_path(directory: string): void
    prepend_search_path(directory: string): void
    require(namespace_: string, version: string | null, flags: RepositoryLoadFlags): Typelib
    require_private(typelib_dir: string, namespace_: string, version: string | null, flags: RepositoryLoadFlags): Typelib
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Repository_ConstructProps)
    _init (config?: Repository_ConstructProps): void
    static new(): Repository
    static dump(input_filename: string, output_filename: string): boolean
    static dup_default(): Repository
    static error_quark(): GLib.Quark
    static get_option_group(): GLib.OptionGroup
    static $gtype: GObject.Type
}
export class SignalInfo {
    /* Methods of GIRepository.SignalInfo */
    get_class_closure(): VFuncInfo | null
    get_flags(): GObject.SignalFlags
    true_stops_emit(): boolean
    /* Methods of GIRepository.CallableInfo */
    can_throw_gerror(): boolean
    get_arg(n: number): ArgInfo
    get_async_function(): CallableInfo | null
    get_caller_owns(): Transfer
    get_finish_function(): CallableInfo | null
    get_instance_ownership_transfer(): Transfer
    get_n_args(): number
    get_return_attribute(name: string): string | null
    get_return_type(): TypeInfo
    get_sync_function(): CallableInfo | null
    invoke(function_: object | null, in_args: Argument[], out_args: Argument[]): [ /* returnType */ boolean, /* return_value */ Argument ]
    is_async(): boolean
    is_method(): boolean
    iterate_return_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    load_arg(n: number): /* arg */ ArgInfo
    load_return_type(): /* type */ TypeInfo
    may_return_null(): boolean
    skip_return(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    get_attribute(name: string): string | null
    get_container(): BaseInfo
    get_name(): string | null
    get_namespace(): string
    get_typelib(): Typelib
    is_deprecated(): boolean
    iterate_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class StructInfo {
    /* Methods of GIRepository.StructInfo */
    find_field(name: string): FieldInfo | null
    find_method(name: string): FunctionInfo | null
    get_alignment(): number
    get_copy_function_name(): string | null
    get_field(n: number): FieldInfo
    get_free_function_name(): string | null
    get_method(n: number): FunctionInfo
    get_n_fields(): number
    get_n_methods(): number
    get_size(): number
    is_foreign(): boolean
    is_gtype_struct(): boolean
    /* Methods of GIRepository.RegisteredTypeInfo */
    get_g_type(): GObject.Type
    get_type_init_function_name(): string | null
    get_type_name(): string | null
    is_boxed(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    get_attribute(name: string): string | null
    get_container(): BaseInfo
    get_name(): string | null
    get_namespace(): string
    get_typelib(): Typelib
    is_deprecated(): boolean
    iterate_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class TypeInfo {
    /* Fields of GIRepository.TypeInfo */
    /* Methods of GIRepository.TypeInfo */
    argument_from_hash_pointer(hash_pointer?: object | null): /* arg */ Argument
    get_array_fixed_size(): [ /* returnType */ boolean, /* out_size */ number | null ]
    get_array_length_index(): [ /* returnType */ boolean, /* out_length_index */ number | null ]
    get_array_type(): ArrayType
    get_interface(): BaseInfo | null
    get_param_type(n: number): TypeInfo | null
    get_storage_type(): TypeTag
    get_tag(): TypeTag
    hash_pointer_from_argument(arg: Argument): object | null
    is_pointer(): boolean
    is_zero_terminated(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    get_attribute(name: string): string | null
    get_container(): BaseInfo
    get_name(): string | null
    get_namespace(): string
    get_typelib(): Typelib
    is_deprecated(): boolean
    iterate_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class UnionInfo {
    /* Methods of GIRepository.UnionInfo */
    find_method(name: string): FunctionInfo | null
    get_alignment(): number
    get_copy_function_name(): string | null
    get_discriminator(n: number): ConstantInfo | null
    get_discriminator_offset(): [ /* returnType */ boolean, /* out_offset */ number | null ]
    get_discriminator_type(): TypeInfo | null
    get_field(n: number): FieldInfo
    get_free_function_name(): string | null
    get_method(n: number): FunctionInfo
    get_n_fields(): number
    get_n_methods(): number
    get_size(): number
    is_discriminated(): boolean
    /* Methods of GIRepository.RegisteredTypeInfo */
    get_g_type(): GObject.Type
    get_type_init_function_name(): string | null
    get_type_name(): string | null
    is_boxed(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    get_attribute(name: string): string | null
    get_container(): BaseInfo
    get_name(): string | null
    get_namespace(): string
    get_typelib(): Typelib
    is_deprecated(): boolean
    iterate_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class UnresolvedInfo {
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    get_attribute(name: string): string | null
    get_container(): BaseInfo
    get_name(): string | null
    get_namespace(): string
    get_typelib(): Typelib
    is_deprecated(): boolean
    iterate_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class VFuncInfo {
    /* Methods of GIRepository.VFuncInfo */
    get_address(implementor_gtype: GObject.Type): object | null
    get_flags(): VFuncInfoFlags
    get_invoker(): FunctionInfo | null
    get_offset(): number
    get_signal(): SignalInfo | null
    /* Methods of GIRepository.CallableInfo */
    can_throw_gerror(): boolean
    get_arg(n: number): ArgInfo
    get_async_function(): CallableInfo | null
    get_caller_owns(): Transfer
    get_finish_function(): CallableInfo | null
    get_instance_ownership_transfer(): Transfer
    get_n_args(): number
    get_return_attribute(name: string): string | null
    get_return_type(): TypeInfo
    get_sync_function(): CallableInfo | null
    invoke(function_: object | null, in_args: Argument[], out_args: Argument[]): [ /* returnType */ boolean, /* return_value */ Argument ]
    is_async(): boolean
    is_method(): boolean
    iterate_return_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    load_arg(n: number): /* arg */ ArgInfo
    load_return_type(): /* type */ TypeInfo
    may_return_null(): boolean
    skip_return(): boolean
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    get_attribute(name: string): string | null
    get_container(): BaseInfo
    get_name(): string | null
    get_namespace(): string
    get_typelib(): Typelib
    is_deprecated(): boolean
    iterate_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    ref(): BaseInfo
    unref(): void
    static name: string
}
export class ValueInfo {
    /* Methods of GIRepository.ValueInfo */
    get_value(): number
    /* Methods of GIRepository.BaseInfo */
    clear(): void
    equal(info2: BaseInfo): boolean
    get_attribute(name: string): string | null
    get_container(): BaseInfo
    get_name(): string | null
    get_namespace(): string
    get_typelib(): Typelib
    is_deprecated(): boolean
    iterate_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
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
    parent_class: GObject.ObjectClass
    static name: string
}
export class Typelib {
    /* Methods of GIRepository.Typelib */
    get_namespace(): string
    ref(): Typelib
    symbol(symbol_name: string): [ /* returnType */ boolean, /* symbol */ object | null ]
    unref(): void
    static name: string
    static new_from_bytes(bytes: Gjs.byteArray.ByteArray): Typelib
}
export class Argument {
    /* Fields of GIRepository.Argument */
    v_boolean: boolean
    v_int8: number
    v_uint8: number
    v_int16: number
    v_uint16: number
    v_int32: number
    v_uint32: number
    v_int64: number
    v_uint64: number
    v_float: number
    v_double: number
    v_short: number
    v_ushort: number
    v_int: number
    v_uint: number
    v_long: number
    v_ulong: number
    v_ssize: number
    v_size: number
    v_string: string
    v_pointer: object
    static name: string
}