/**
 * GioUnix-2.0
 */

import * as Gjs from './Gjs';
import * as Gio from './Gio-2.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as GModule from './GModule-2.0';

export const DESKTOP_APP_INFO_LOOKUP_EXTENSION_POINT_NAME: string
export function is_mount_path_system_internal(mount_path: string): boolean
export function is_system_device_path(device_path: string): boolean
export function is_system_fs_type(fs_type: string): boolean
export function mount_at(mount_path: string): [ /* returnType */ MountEntry | null, /* time_read */ number | null ]
export function mount_compare(mount1: MountEntry, mount2: MountEntry): number
export function mount_copy(mount_entry: MountEntry): MountEntry
export function mount_entries_changed_since(time: number): boolean
export function mount_entries_get(): [ /* returnType */ MountEntry[], /* time_read */ number | null ]
export function mount_entries_get_from_file(table_path: string): [ /* returnType */ MountEntry[] | null, /* time_read_out */ number | null ]
export function mount_entry_at(mount_path: string): [ /* returnType */ MountEntry | null, /* time_read */ number | null ]
export function mount_entry_for(file_path: string): [ /* returnType */ MountEntry | null, /* time_read */ number | null ]
export function mount_for(file_path: string): [ /* returnType */ MountEntry | null, /* time_read */ number | null ]
export function mount_free(mount_entry: MountEntry): void
export function mount_get_device_path(mount_entry: MountEntry): string
export function mount_get_fs_type(mount_entry: MountEntry): string
export function mount_get_mount_path(mount_entry: MountEntry): string
export function mount_get_options(mount_entry: MountEntry): string | null
export function mount_get_root_path(mount_entry: MountEntry): string | null
export function mount_guess_can_eject(mount_entry: MountEntry): boolean
export function mount_guess_icon(mount_entry: MountEntry): Gio.Icon
export function mount_guess_name(mount_entry: MountEntry): string
export function mount_guess_should_display(mount_entry: MountEntry): boolean
export function mount_guess_symbolic_icon(mount_entry: MountEntry): Gio.Icon
export function mount_is_readonly(mount_entry: MountEntry): boolean
export function mount_is_system_internal(mount_entry: MountEntry): boolean
export function mount_point_at(mount_path: string): [ /* returnType */ MountPoint | null, /* time_read */ number | null ]
export function mount_points_changed_since(time: number): boolean
export function mount_points_get(): [ /* returnType */ MountPoint[], /* time_read */ number | null ]
export function mount_points_get_from_file(table_path: string): [ /* returnType */ MountPoint[] | null, /* time_read_out */ number | null ]
export function mounts_changed_since(time: number): boolean
export function mounts_get(): [ /* returnType */ MountEntry[], /* time_read */ number | null ]
export function mounts_get_from_file(table_path: string): [ /* returnType */ MountEntry[] | null, /* time_read_out */ number | null ]
export interface DesktopAppLaunchCallback {
    (appinfo: DesktopAppInfo, pid: GLib.Pid): void
}
export class DesktopAppInfoLookup {
    /* Methods of GioUnix.DesktopAppInfoLookup */
    get_default_for_uri_scheme(uri_scheme: string): Gio.AppInfo | null
    /* Virtual methods of GioUnix.DesktopAppInfoLookup */
    vfunc_get_default_for_uri_scheme?(uri_scheme: string): Gio.AppInfo | null
    static name: string
}
export class FileDescriptorBased {
    /* Methods of GioUnix.FileDescriptorBased */
    get_fd(): number
    /* Virtual methods of GioUnix.FileDescriptorBased */
    vfunc_get_fd?(): number
    static name: string
}
export interface DesktopAppInfo_ConstructProps extends GObject.Object_ConstructProps {
    filename?: string
}
export class DesktopAppInfo {
    /* Properties of GioUnix.DesktopAppInfo */
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GioUnix.DesktopAppInfo */
    get_action_name(action_name: string): string
    get_boolean(key: string): boolean
    get_categories(): string | null
    get_filename(): string | null
    get_generic_name(): string | null
    get_is_hidden(): boolean
    get_keywords(): string[]
    get_locale_string(key: string): string | null
    get_nodisplay(): boolean
    get_show_in(desktop_env?: string | null): boolean
    get_startup_wm_class(): string | null
    get_string(key: string): string | null
    get_string_list(key: string): string[]
    has_key(key: string): boolean
    launch_action(action_name: string, launch_context?: Gio.AppLaunchContext | null): void
    launch_uris_as_manager(uris: string[], launch_context: Gio.AppLaunchContext | null, spawn_flags: GLib.SpawnFlags, user_setup?: GLib.SpawnChildSetupFunc | null, pid_callback?: DesktopAppLaunchCallback | null): boolean
    launch_uris_as_manager_with_fds(uris: string[], launch_context: Gio.AppLaunchContext | null, spawn_flags: GLib.SpawnFlags, user_setup: GLib.SpawnChildSetupFunc | null, pid_callback: DesktopAppLaunchCallback | null, stdin_fd: number, stdout_fd: number, stderr_fd: number): boolean
    list_actions(): string[]
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
    /* Methods of Gio.AppInfo */
    add_supports_type(content_type: string): boolean
    can_delete(): boolean
    can_remove_supports_type(): boolean
    delete(): boolean
    dup(): Gio.AppInfo
    equal(appinfo2: Gio.AppInfo): boolean
    get_commandline(): string | null
    get_description(): string | null
    get_display_name(): string
    get_executable(): string
    get_icon(): Gio.Icon | null
    get_id(): string | null
    get_name(): string
    get_supported_types(): string[]
    launch(files?: Gio.File[] | null, context?: Gio.AppLaunchContext | null): boolean
    launch_uris(uris?: string[] | null, context?: Gio.AppLaunchContext | null): boolean
    launch_uris_async(uris?: string[] | null, context?: Gio.AppLaunchContext | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    launch_uris_finish(result: Gio.AsyncResult): boolean
    remove_supports_type(content_type: string): boolean
    set_as_default_for_extension(extension: string): boolean
    set_as_default_for_type(content_type: string): boolean
    set_as_last_used_for_type(content_type: string): boolean
    should_show(): boolean
    supports_files(): boolean
    supports_uris(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DesktopAppInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DesktopAppInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DesktopAppInfo_ConstructProps)
    _init (config?: DesktopAppInfo_ConstructProps): void
    static new(desktop_id: string): DesktopAppInfo | null
    static new_from_filename(filename: string): DesktopAppInfo | null
    static new_from_keyfile(key_file: GLib.KeyFile): DesktopAppInfo | null
    static get_implementations(interface: string): DesktopAppInfo[]
    static search(search_string: string): any
    static set_desktop_env(desktop_env: string): void
    static $gtype: GObject.Type
}
export interface FDMessage_ConstructProps extends Gio.SocketControlMessage_ConstructProps {
    fd_list?: Gio.UnixFDList
}
export class FDMessage {
    /* Properties of GioUnix.FDMessage */
    /* Fields of GioUnix.FDMessage */
    parent_instance: Gio.SocketControlMessage
    priv: FDMessagePrivate
    /* Fields of Gio.SocketControlMessage */
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GioUnix.FDMessage */
    append_fd(fd: number): boolean
    get_fd_list(): Gio.UnixFDList
    steal_fds(): number[]
    /* Methods of Gio.SocketControlMessage */
    get_level(): number
    get_msg_type(): number
    get_size(): number
    serialize(data: object): void
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
    /* Virtual methods of Gio.SocketControlMessage */
    vfunc_get_level?(): number
    vfunc_get_size?(): number
    vfunc_get_type?(): number
    vfunc_serialize?(data: object): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FDMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FDMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FDMessage_ConstructProps)
    _init (config?: FDMessage_ConstructProps): void
    static new(): FDMessage
    static new_with_fd_list(fd_list: Gio.UnixFDList): FDMessage
    static $gtype: GObject.Type
}
export interface InputStream_ConstructProps extends Gio.InputStream_ConstructProps {
    close_fd?: boolean
    fd?: number
}
export class InputStream {
    /* Properties of GioUnix.InputStream */
    close_fd: boolean
    /* Fields of GioUnix.InputStream */
    parent_instance: Gio.InputStream
    /* Fields of Gio.InputStream */
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GioUnix.InputStream */
    get_close_fd(): boolean
    get_fd(): number
    set_close_fd(close_fd: boolean): void
    /* Methods of Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(result: Gio.AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Gjs.byteArray.ByteArray ]
    read_all(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Gjs.byteArray.ByteArray, /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray
    read_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray
    read_bytes(count: number, cancellable?: Gio.Cancellable | null): Gjs.byteArray.ByteArray
    read_bytes_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_bytes_finish(result: Gio.AsyncResult): Gjs.byteArray.ByteArray
    read_finish(result: Gio.AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skip_finish(result: Gio.AsyncResult): number
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
    /* Methods of Gio.PollableInputStream */
    can_poll(): boolean
    create_source(cancellable?: Gio.Cancellable | null): GLib.Source
    is_readable(): boolean
    read_nonblocking(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Gjs.byteArray.ByteArray ]
    /* Methods of GioUnix.FileDescriptorBased */
    /* Virtual methods of Gio.InputStream */
    vfunc_close_async?(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_close_finish?(result: Gio.AsyncResult): boolean
    vfunc_close_fn?(cancellable?: Gio.Cancellable | null): boolean
    vfunc_read_async?(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray | null
    vfunc_read_finish?(result: Gio.AsyncResult): number
    vfunc_read_fn?(buffer: object | null, count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip?(count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip_async?(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_skip_finish?(result: Gio.AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::close-fd", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-fd", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InputStream_ConstructProps)
    _init (config?: InputStream_ConstructProps): void
    static new(fd: number, close_fd: boolean): InputStream
    static $gtype: GObject.Type
}
export interface MountMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
export class MountMonitor {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GioUnix.MountMonitor */
    set_rate_limit(limit_msec: number): void
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
    /* Signals of GioUnix.MountMonitor */
    connect(sigName: "mountpoints-changed", callback: (($obj: MountMonitor) => void)): number
    connect_after(sigName: "mountpoints-changed", callback: (($obj: MountMonitor) => void)): number
    emit(sigName: "mountpoints-changed"): void
    connect(sigName: "mounts-changed", callback: (($obj: MountMonitor) => void)): number
    connect_after(sigName: "mounts-changed", callback: (($obj: MountMonitor) => void)): number
    emit(sigName: "mounts-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MountMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MountMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MountMonitor_ConstructProps)
    _init (config?: MountMonitor_ConstructProps): void
    static new(): MountMonitor
    static get(): MountMonitor
    static $gtype: GObject.Type
}
export interface OutputStream_ConstructProps extends Gio.OutputStream_ConstructProps {
    close_fd?: boolean
    fd?: number
}
export class OutputStream {
    /* Properties of GioUnix.OutputStream */
    close_fd: boolean
    /* Fields of GioUnix.OutputStream */
    parent_instance: Gio.OutputStream
    /* Fields of Gio.OutputStream */
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GioUnix.OutputStream */
    get_close_fd(): boolean
    get_fd(): number
    set_close_fd(close_fd: boolean): void
    /* Methods of Gio.OutputStream */
    clear_pending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(result: Gio.AsyncResult): boolean
    flush(cancellable?: Gio.Cancellable | null): boolean
    flush_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flush_finish(result: Gio.AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    is_closing(): boolean
    set_pending(): boolean
    splice(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number
    splice_async(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    splice_finish(result: Gio.AsyncResult): number
    write(buffer: Gjs.byteArray.ByteArray, cancellable?: Gio.Cancellable | null): number
    write_all(buffer: Gjs.byteArray.ByteArray, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_all_async(buffer: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_async(buffer: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_bytes(bytes: Gjs.byteArray.ByteArray, cancellable?: Gio.Cancellable | null): number
    write_bytes_async(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_bytes_finish(result: Gio.AsyncResult): number
    write_finish(result: Gio.AsyncResult): number
    writev(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all_async(vectors: Gio.OutputVector[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writev_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_async(vectors: Gio.OutputVector[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writev_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
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
    /* Methods of Gio.PollableOutputStream */
    can_poll(): boolean
    create_source(cancellable?: Gio.Cancellable | null): GLib.Source
    is_writable(): boolean
    write_nonblocking(buffer: Gjs.byteArray.ByteArray, cancellable?: Gio.Cancellable | null): number
    writev_nonblocking(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.PollableReturn, /* bytes_written */ number | null ]
    /* Methods of GioUnix.FileDescriptorBased */
    /* Virtual methods of Gio.OutputStream */
    vfunc_close_async?(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_close_finish?(result: Gio.AsyncResult): boolean
    vfunc_close_fn?(cancellable?: Gio.Cancellable | null): boolean
    vfunc_flush?(cancellable?: Gio.Cancellable | null): boolean
    vfunc_flush_async?(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_flush_finish?(result: Gio.AsyncResult): boolean
    vfunc_splice?(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number
    vfunc_splice_async?(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_splice_finish?(result: Gio.AsyncResult): number
    vfunc_write_async?(buffer: Gjs.byteArray.ByteArray | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_write_finish?(result: Gio.AsyncResult): number
    vfunc_write_fn?(buffer: Gjs.byteArray.ByteArray | null, cancellable?: Gio.Cancellable | null): number
    vfunc_writev_async?(vectors: Gio.OutputVector[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_writev_finish?(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    vfunc_writev_fn?(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::close-fd", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-fd", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OutputStream_ConstructProps)
    _init (config?: OutputStream_ConstructProps): void
    static new(fd: number, close_fd: boolean): OutputStream
    static $gtype: GObject.Type
}
export abstract class DesktopAppInfoClass {
    /* Fields of GioUnix.DesktopAppInfoClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class DesktopAppInfoLookupIface {
    /* Fields of GioUnix.DesktopAppInfoLookupIface */
    g_iface: GObject.TypeInterface
    get_default_for_uri_scheme: any
    static name: string
}
export abstract class FDMessageClass {
    /* Fields of GioUnix.FDMessageClass */
    parent_class: Gio.SocketControlMessageClass
    static name: string
}
export class FDMessagePrivate {
    static name: string
}
export abstract class FileDescriptorBasedIface {
    /* Fields of GioUnix.FileDescriptorBasedIface */
    g_iface: GObject.TypeInterface
    get_fd: any
    static name: string
}
export abstract class InputStreamClass {
    /* Fields of GioUnix.InputStreamClass */
    parent_class: Gio.InputStreamClass
    static name: string
}
export class InputStreamPrivate {
    static name: string
}
export class MountEntry {
    /* Methods of GioUnix.MountEntry */
    compare(mount2: MountEntry): number
    copy(): MountEntry
    free(): void
    get_device_path(): string
    get_fs_type(): string
    get_mount_path(): string
    get_options(): string | null
    get_root_path(): string | null
    guess_can_eject(): boolean
    guess_icon(): Gio.Icon
    guess_name(): string
    guess_should_display(): boolean
    guess_symbolic_icon(): Gio.Icon
    is_readonly(): boolean
    is_system_internal(): boolean
    static name: string
    static at(mount_path: string): [ /* returnType */ MountEntry | null, /* time_read */ number | null ]
    static for(file_path: string): [ /* returnType */ MountEntry | null, /* time_read */ number | null ]
}
export abstract class MountMonitorClass {
    static name: string
}
export class MountPoint {
    /* Methods of GioUnix.MountPoint */
    compare(mount2: MountPoint): number
    copy(): MountPoint
    free(): void
    get_device_path(): string
    get_fs_type(): string
    get_mount_path(): string
    get_options(): string | null
    guess_can_eject(): boolean
    guess_icon(): Gio.Icon
    guess_name(): string
    guess_symbolic_icon(): Gio.Icon
    is_loopback(): boolean
    is_readonly(): boolean
    is_user_mountable(): boolean
    static name: string
    static at(mount_path: string): [ /* returnType */ MountPoint | null, /* time_read */ number | null ]
}
export abstract class OutputStreamClass {
    /* Fields of GioUnix.OutputStreamClass */
    parent_class: Gio.OutputStreamClass
    static name: string
}
export class OutputStreamPrivate {
    static name: string
}