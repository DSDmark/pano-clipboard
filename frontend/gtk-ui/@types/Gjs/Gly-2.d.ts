/**
 * Gly-2
 */

import * as Gjs from './Gjs';
import * as Gio from './Gio-2.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as GModule from './GModule-2.0';

export enum LoaderError {
    FAILED,
    UNKNOWN_IMAGE_FORMAT,
    NO_MORE_FRAMES,
}
export enum MemoryFormat {
    B8G8R8A8_PREMULTIPLIED,
    A8R8G8B8_PREMULTIPLIED,
    R8G8B8A8_PREMULTIPLIED,
    B8G8R8A8,
    A8R8G8B8,
    R8G8B8A8,
    A8B8G8R8,
    R8G8B8,
    B8G8R8,
    R16G16B16,
    R16G16B16A16_PREMULTIPLIED,
    R16G16B16A16,
    R16G16B16_FLOAT,
    R16G16B16A16_FLOAT,
    R32G32B32_FLOAT,
    R32G32B32A32_FLOAT_PREMULTIPLIED,
    R32G32B32A32_FLOAT,
    G8A8_PREMULTIPLIED,
    G8A8,
    G8,
    G16A16_PREMULTIPLIED,
    G16A16,
    G16,
}
export enum SandboxSelector {
    AUTO,
    BWRAP,
    FLATPAK_SPAWN,
    NOT_SANDBOXED,
}
export enum MemoryFormatSelection {
    B8G8R8A8_PREMULTIPLIED,
    A8R8G8B8_PREMULTIPLIED,
    R8G8B8A8_PREMULTIPLIED,
    B8G8R8A8,
    A8R8G8B8,
    R8G8B8A8,
    A8B8G8R8,
    R8G8B8,
    B8G8R8,
    R16G16B16,
    R16G16B16A16_PREMULTIPLIED,
    R16G16B16A16,
    R16G16B16_FLOAT,
    R16G16B16A16_FLOAT,
    R32G32B32_FLOAT,
    R32G32B32A32_FLOAT_PREMULTIPLIED,
    R32G32B32A32_FLOAT,
    G8A8_PREMULTIPLIED,
    G8A8,
    G8,
    G16A16_PREMULTIPLIED,
    G16A16,
    G16,
}
export function loader_error_quark(): GLib.Quark
export function memory_format_has_alpha(memory_format: MemoryFormat): boolean
export function memory_format_is_premultiplied(memory_format: MemoryFormat): boolean
export interface LoaderGetMimeTypesDoneFunc {
    (mime_types: string[], data?: object | null): void
}
export interface Creator_ConstructProps extends GObject.Object_ConstructProps {
    mime_type?: string
    sandbox_selector?: SandboxSelector
}
export class Creator {
    /* Properties of Gly.Creator */
    sandbox_selector: SandboxSelector
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gly.Creator */
    add_frame(width: number, height: number, memory_format: MemoryFormat, texture: Gjs.byteArray.ByteArray): NewFrame
    add_frame_with_stride(width: number, height: number, stride: number, memory_format: MemoryFormat, texture: Gjs.byteArray.ByteArray): NewFrame
    add_metadata_key_value(key: string, value: string): boolean
    create(): EncodedImage | null
    create_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_finish(result: Gio.AsyncResult): EncodedImage
    set_encoding_compression(compression: number): boolean
    set_encoding_quality(quality: number): boolean
    set_sandbox_selector(sandbox_selector: SandboxSelector): boolean
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
    connect(sigName: "notify", callback: (($obj: Creator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Creator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::sandbox-selector", callback: (($obj: Creator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sandbox-selector", callback: (($obj: Creator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Creator_ConstructProps)
    _init (config?: Creator_ConstructProps): void
    static new(mime_type: string): Creator
    static $gtype: GObject.Type
}
export interface EncodedImage_ConstructProps extends GObject.Object_ConstructProps {
}
export class EncodedImage {
    /* Properties of Gly.EncodedImage */
    readonly data: Gjs.byteArray.ByteArray
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gly.EncodedImage */
    get_data(): Gjs.byteArray.ByteArray
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
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
    connect(sigName: "notify", callback: (($obj: EncodedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EncodedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::data", callback: (($obj: EncodedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: EncodedImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EncodedImage_ConstructProps)
    _init (config?: EncodedImage_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Frame_ConstructProps extends GObject.Object_ConstructProps {
}
export class Frame {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gly.Frame */
    get_buf_bytes(): Gjs.byteArray.ByteArray
    get_color_cicp(): Cicp | null
    get_delay(): number
    get_height(): number
    get_memory_format(): MemoryFormat
    get_stride(): number
    get_width(): number
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
    connect(sigName: "notify", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Frame_ConstructProps)
    _init (config?: Frame_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FrameRequest_ConstructProps extends GObject.Object_ConstructProps {
    loop_animation?: boolean
}
export class FrameRequest {
    /* Properties of Gly.FrameRequest */
    loop_animation: boolean
    readonly scale_height: number
    readonly scale_width: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gly.FrameRequest */
    set_loop_animation(loop_animation: boolean): void
    set_scale(width: number, height: number): void
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
    connect(sigName: "notify", callback: (($obj: FrameRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FrameRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::loop-animation", callback: (($obj: FrameRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loop-animation", callback: (($obj: FrameRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-height", callback: (($obj: FrameRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-height", callback: (($obj: FrameRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-width", callback: (($obj: FrameRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-width", callback: (($obj: FrameRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FrameRequest_ConstructProps)
    _init (config?: FrameRequest_ConstructProps): void
    static new(): FrameRequest
    static $gtype: GObject.Type
}
export interface Image_ConstructProps extends GObject.Object_ConstructProps {
}
export class Image {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gly.Image */
    get_height(): number
    get_metadata_key_value(key: string): string | null
    get_metadata_keys(): string[]
    get_mime_type(): string
    get_specific_frame(frame_request: FrameRequest): Frame
    get_specific_frame_async(frame_request: FrameRequest, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_specific_frame_finish(result: Gio.AsyncResult): Frame
    get_transformation_orientation(): number
    get_width(): number
    next_frame(): Frame
    next_frame_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    next_frame_finish(result: Gio.AsyncResult): Frame
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
    connect(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Image_ConstructProps)
    _init (config?: Image_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Loader_ConstructProps extends GObject.Object_ConstructProps {
    apply_transformation?: boolean
    bytes?: Gjs.byteArray.ByteArray
    cancellable?: Gio.Cancellable
    file?: Gio.File
    memory_format_selection?: MemoryFormatSelection
    sandbox_selector?: SandboxSelector
    stream?: Gio.InputStream
}
export class Loader {
    /* Properties of Gly.Loader */
    apply_transformation: boolean
    cancellable: Gio.Cancellable
    memory_format_selection: MemoryFormatSelection
    sandbox_selector: SandboxSelector
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gly.Loader */
    load(): Image
    load_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    load_finish(result: Gio.AsyncResult): Image
    set_accepted_memory_formats(memory_format_selection: MemoryFormatSelection): void
    set_apply_transformations(apply_transformations: boolean): void
    set_sandbox_selector(sandbox_selector: SandboxSelector): void
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
    connect(sigName: "notify", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::apply-transformation", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apply-transformation", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cancellable", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::memory-format-selection", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::memory-format-selection", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sandbox-selector", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sandbox-selector", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Loader_ConstructProps)
    _init (config?: Loader_ConstructProps): void
    static new(file: Gio.File): Loader
    static new_for_bytes(bytes: Gjs.byteArray.ByteArray): Loader
    static new_for_stream(stream: Gio.InputStream): Loader
    static get_mime_types(): string[]
    static get_mime_types_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static get_mime_types_finish(result: Gio.AsyncResult): string[]
    static $gtype: GObject.Type
}
export interface NewFrame_ConstructProps extends GObject.Object_ConstructProps {
}
export class NewFrame {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gly.NewFrame */
    set_color_icc_profile(icc_profile: Gjs.byteArray.ByteArray): boolean
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
    connect(sigName: "notify", callback: (($obj: NewFrame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NewFrame, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NewFrame_ConstructProps)
    _init (config?: NewFrame_ConstructProps): void
    static $gtype: GObject.Type
}
export class Cicp {
    /* Fields of Gly.Cicp */
    color_primaries: number
    transfer_characteristics: number
    matrix_coefficients: number
    video_full_range_flag: number
    /* Methods of Gly.Cicp */
    copy(): Cicp
    free(): void
    static name: string
}
export abstract class CreatorClass {
    /* Fields of Gly.CreatorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class EncodedImageClass {
    /* Fields of Gly.EncodedImageClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class FrameClass {
    /* Fields of Gly.FrameClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class FrameRequestClass {
    /* Fields of Gly.FrameRequestClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ImageClass {
    /* Fields of Gly.ImageClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class LoaderClass {
    /* Fields of Gly.LoaderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class NewFrameClass {
    /* Fields of Gly.NewFrameClass */
    parent_class: GObject.ObjectClass
    static name: string
}