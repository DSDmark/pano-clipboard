/**
 * GdkWayland-4.0
 */

import * as Gjs from './Gjs';
import * as Gdk from './Gdk-4.0';
import * as cairo from './cairo-1.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as PangoCairo from './PangoCairo-1.0';
import * as Pango from './Pango-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as freetype2 from './freetype2-2.0';
import * as Gio from './Gio-2.0';
import * as GModule from './GModule-2.0';
import * as GdkPixbuf from './GdkPixbuf-2.0';

export interface WaylandToplevelExported {
    (toplevel: WaylandToplevel, handle: string): void
}
export interface WaylandDevice_ConstructProps extends Gdk.Device_ConstructProps {
}
export class WaylandDevice {
    /* Properties of Gdk.Device */
    readonly active_layout_index: number
    readonly caps_lock_state: boolean
    readonly direction: Pango.Direction
    readonly has_bidi_layouts: boolean
    readonly layout_names: string[]
    readonly modifier_state: Gdk.ModifierType
    readonly n_axes: number
    readonly num_lock_state: boolean
    readonly scroll_lock_state: boolean
    seat: Gdk.Seat
    readonly tool: Gdk.DeviceTool
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkWayland.WaylandDevice */
    get_node_path(): string | null
    get_xkb_keymap(): object | null
    /* Methods of Gdk.Device */
    get_active_layout_index(): number
    get_caps_lock_state(): boolean
    get_device_tool(): Gdk.DeviceTool | null
    get_direction(): Pango.Direction
    get_display(): Gdk.Display
    get_has_cursor(): boolean
    get_layout_names(): string[] | null
    get_modifier_state(): Gdk.ModifierType
    get_name(): string
    get_num_lock_state(): boolean
    get_num_touches(): number
    get_product_id(): string | null
    get_scroll_lock_state(): boolean
    get_seat(): Gdk.Seat
    get_source(): Gdk.InputSource
    get_surface_at_position(): [ /* returnType */ Gdk.Surface | null, /* win_x */ number | null, /* win_y */ number | null ]
    get_timestamp(): number
    get_vendor_id(): string | null
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
    /* Signals of Gdk.Device */
    connect(sigName: "changed", callback: (($obj: WaylandDevice) => void)): number
    connect_after(sigName: "changed", callback: (($obj: WaylandDevice) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "tool-changed", callback: (($obj: WaylandDevice, tool: Gdk.DeviceTool) => void)): number
    connect_after(sigName: "tool-changed", callback: (($obj: WaylandDevice, tool: Gdk.DeviceTool) => void)): number
    emit(sigName: "tool-changed", tool: Gdk.DeviceTool): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active-layout-index", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-layout-index", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::caps-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::direction", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-bidi-layouts", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-bidi-layouts", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-names", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-names", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modifier-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modifier-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-axes", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scroll-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seat", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tool", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WaylandDevice_ConstructProps)
    _init (config?: WaylandDevice_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandDisplay_ConstructProps extends Gdk.Display_ConstructProps {
}
export class WaylandDisplay {
    /* Properties of Gdk.Display */
    readonly composited: boolean
    readonly dmabuf_formats: Gdk.DmabufFormats
    readonly input_shapes: boolean
    readonly rgba: boolean
    readonly shadow_width: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkWayland.WaylandDisplay */
    get_egl_display(): object | null
    get_startup_notification_id(): string | null
    query_registry(global: string): boolean
    set_cursor_theme(name: string, size: number): void
    set_startup_notification_id(startup_id: string): void
    /* Methods of Gdk.Display */
    beep(): void
    close(): void
    create_gl_context(): Gdk.GLContext
    device_is_grabbed(device: Gdk.Device): boolean
    flush(): void
    get_app_launch_context(): Gdk.AppLaunchContext
    get_clipboard(): Gdk.Clipboard
    get_default_seat(): Gdk.Seat | null
    get_dmabuf_formats(): Gdk.DmabufFormats
    get_monitor_at_surface(surface: Gdk.Surface): Gdk.Monitor | null
    get_monitors(): Gio.ListModel
    get_name(): string
    get_primary_clipboard(): Gdk.Clipboard
    get_setting(name: string, value: any): boolean
    is_closed(): boolean
    is_composited(): boolean
    is_rgba(): boolean
    list_seats(): Gdk.Seat[]
    map_keycode(keycode: number): [ /* returnType */ boolean, /* keys */ Gdk.KeymapKey[] | null, /* keyvals */ number[] | null ]
    map_keyval(keyval: number): [ /* returnType */ boolean, /* keys */ Gdk.KeymapKey[] ]
    notify_startup_complete(startup_id: string): void
    prepare_gl(): boolean
    put_event(event: Gdk.Event): void
    supports_input_shapes(): boolean
    supports_shadow_width(): boolean
    sync(): void
    translate_key(keycode: number, state: Gdk.ModifierType, group: number): [ /* returnType */ boolean, /* keyval */ number | null, /* effective_group */ number | null, /* level */ number | null, /* consumed */ Gdk.ModifierType | null ]
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
    /* Signals of Gdk.Display */
    connect(sigName: "closed", callback: (($obj: WaylandDisplay, is_error: boolean) => void)): number
    connect_after(sigName: "closed", callback: (($obj: WaylandDisplay, is_error: boolean) => void)): number
    emit(sigName: "closed", is_error: boolean): void
    connect(sigName: "opened", callback: (($obj: WaylandDisplay) => void)): number
    connect_after(sigName: "opened", callback: (($obj: WaylandDisplay) => void)): number
    emit(sigName: "opened"): void
    connect(sigName: "seat-added", callback: (($obj: WaylandDisplay, seat: Gdk.Seat) => void)): number
    connect_after(sigName: "seat-added", callback: (($obj: WaylandDisplay, seat: Gdk.Seat) => void)): number
    emit(sigName: "seat-added", seat: Gdk.Seat): void
    connect(sigName: "seat-removed", callback: (($obj: WaylandDisplay, seat: Gdk.Seat) => void)): number
    connect_after(sigName: "seat-removed", callback: (($obj: WaylandDisplay, seat: Gdk.Seat) => void)): number
    emit(sigName: "seat-removed", seat: Gdk.Seat): void
    connect(sigName: "setting-changed", callback: (($obj: WaylandDisplay, setting: string) => void)): number
    connect_after(sigName: "setting-changed", callback: (($obj: WaylandDisplay, setting: string) => void)): number
    emit(sigName: "setting-changed", setting: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::composited", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composited", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dmabuf-formats", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dmabuf-formats", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-shapes", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-shapes", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rgba", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shadow-width", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-width", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WaylandDisplay_ConstructProps)
    _init (config?: WaylandDisplay_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandGLContext_ConstructProps extends Gdk.GLContext_ConstructProps {
}
export class WaylandGLContext {
    /* Properties of Gdk.GLContext */
    allowed_apis: Gdk.GLAPI
    readonly api: Gdk.GLAPI
    /* Properties of Gdk.DrawContext */
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.GLContext */
    get_allowed_apis(): Gdk.GLAPI
    get_api(): Gdk.GLAPI
    get_debug_enabled(): boolean
    get_display(): Gdk.Display | null
    get_forward_compatible(): boolean
    get_required_version(): [ /* major */ number | null, /* minor */ number | null ]
    get_shared_context(): Gdk.GLContext | null
    get_surface(): Gdk.Surface | null
    get_use_es(): boolean
    get_version(): [ /* major */ number, /* minor */ number ]
    is_legacy(): boolean
    is_shared(other: Gdk.GLContext): boolean
    make_current(): void
    realize(): boolean
    set_allowed_apis(apis: Gdk.GLAPI): void
    set_debug_enabled(enabled: boolean): void
    set_forward_compatible(compatible: boolean): void
    set_required_version(major: number, minor: number): void
    set_use_es(use_es: number): void
    /* Methods of Gdk.DrawContext */
    begin_frame(region: cairo.Region): void
    end_frame(): void
    get_frame_region(): cairo.Region | null
    is_in_frame(): boolean
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
    connect(sigName: "notify", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allowed-apis", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-apis", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::api", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::api", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WaylandGLContext_ConstructProps)
    _init (config?: WaylandGLContext_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandMonitor_ConstructProps extends Gdk.Monitor_ConstructProps {
}
export class WaylandMonitor {
    /* Properties of Gdk.Monitor */
    readonly connector: string
    readonly description: string
    readonly geometry: Gdk.Rectangle
    readonly height_mm: number
    readonly manufacturer: string
    readonly model: string
    readonly refresh_rate: number
    readonly scale: number
    readonly scale_factor: number
    readonly subpixel_layout: Gdk.SubpixelLayout
    readonly valid: boolean
    readonly width_mm: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkWayland.WaylandMonitor */
    /* Methods of Gdk.Monitor */
    get_connector(): string | null
    get_description(): string | null
    get_display(): Gdk.Display
    get_geometry(): /* geometry */ Gdk.Rectangle
    get_height_mm(): number
    get_manufacturer(): string | null
    get_model(): string | null
    get_refresh_rate(): number
    get_scale(): number
    get_scale_factor(): number
    get_subpixel_layout(): Gdk.SubpixelLayout
    get_width_mm(): number
    is_valid(): boolean
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
    /* Signals of Gdk.Monitor */
    connect(sigName: "invalidate", callback: (($obj: WaylandMonitor) => void)): number
    connect_after(sigName: "invalidate", callback: (($obj: WaylandMonitor) => void)): number
    emit(sigName: "invalidate"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connector", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connector", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::geometry", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::geometry", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-mm", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-mm", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::manufacturer", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manufacturer", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::refresh-rate", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-rate", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subpixel-layout", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subpixel-layout", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valid", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-mm", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-mm", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WaylandMonitor_ConstructProps)
    _init (config?: WaylandMonitor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandPopup_ConstructProps extends WaylandSurface_ConstructProps {
}
export class WaylandPopup {
    /* Properties of Gdk.Surface */
    cursor: Gdk.Cursor
    readonly height: number
    readonly mapped: boolean
    readonly scale: number
    readonly scale_factor: number
    readonly width: number
    /* Properties of Gdk.Popup */
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkWayland.WaylandSurface */
    force_next_commit(): void
    /* Methods of Gdk.Surface */
    beep(): void
    create_cairo_context(): Gdk.CairoContext
    create_gl_context(): Gdk.GLContext
    create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface
    create_vulkan_context(): Gdk.VulkanContext
    destroy(): void
    get_cursor(): Gdk.Cursor | null
    get_device_cursor(device: Gdk.Device): Gdk.Cursor | null
    get_device_position(device: Gdk.Device): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    get_display(): Gdk.Display
    get_frame_clock(): Gdk.FrameClock
    get_height(): number
    get_mapped(): boolean
    get_scale(): number
    get_scale_factor(): number
    get_width(): number
    hide(): void
    is_destroyed(): boolean
    queue_render(): void
    request_layout(): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_device_cursor(device: Gdk.Device, cursor: Gdk.Cursor): void
    set_input_region(region?: cairo.Region | null): void
    set_opaque_region(region?: cairo.Region | null): void
    translate_coordinates(to: Gdk.Surface, x: number, y: number): boolean
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
    /* Methods of Gdk.Popup */
    get_autohide(): boolean
    get_parent(): Gdk.Surface | null
    get_position_x(): number
    get_position_y(): number
    get_rect_anchor(): Gdk.Gravity
    get_surface_anchor(): Gdk.Gravity
    present(width: number, height: number, layout: Gdk.PopupLayout): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gdk.Surface */
    connect(sigName: "enter-monitor", callback: (($obj: WaylandPopup, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "enter-monitor", callback: (($obj: WaylandPopup, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "enter-monitor", monitor: Gdk.Monitor): void
    connect(sigName: "event", callback: (($obj: WaylandPopup, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: WaylandPopup, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "layout", callback: (($obj: WaylandPopup, width: number, height: number) => void)): number
    connect_after(sigName: "layout", callback: (($obj: WaylandPopup, width: number, height: number) => void)): number
    emit(sigName: "layout", width: number, height: number): void
    connect(sigName: "leave-monitor", callback: (($obj: WaylandPopup, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "leave-monitor", callback: (($obj: WaylandPopup, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "leave-monitor", monitor: Gdk.Monitor): void
    connect(sigName: "render", callback: (($obj: WaylandPopup, region: cairo.Region) => boolean)): number
    connect_after(sigName: "render", callback: (($obj: WaylandPopup, region: cairo.Region) => boolean)): number
    emit(sigName: "render", region: cairo.Region): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WaylandPopup_ConstructProps)
    _init (config?: WaylandPopup_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandSeat_ConstructProps extends Gdk.Seat_ConstructProps {
}
export class WaylandSeat {
    /* Properties of Gdk.Seat */
    /* Fields of Gdk.Seat */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkWayland.WaylandSeat */
    /* Methods of Gdk.Seat */
    get_capabilities(): Gdk.SeatCapabilities
    get_devices(capabilities: Gdk.SeatCapabilities): Gdk.Device[]
    get_display(): Gdk.Display
    get_keyboard(): Gdk.Device | null
    get_pointer(): Gdk.Device | null
    get_tools(): Gdk.DeviceTool[]
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
    /* Signals of Gdk.Seat */
    connect(sigName: "device-added", callback: (($obj: WaylandSeat, device: Gdk.Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: WaylandSeat, device: Gdk.Device) => void)): number
    emit(sigName: "device-added", device: Gdk.Device): void
    connect(sigName: "device-removed", callback: (($obj: WaylandSeat, device: Gdk.Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: WaylandSeat, device: Gdk.Device) => void)): number
    emit(sigName: "device-removed", device: Gdk.Device): void
    connect(sigName: "tool-added", callback: (($obj: WaylandSeat, tool: Gdk.DeviceTool) => void)): number
    connect_after(sigName: "tool-added", callback: (($obj: WaylandSeat, tool: Gdk.DeviceTool) => void)): number
    emit(sigName: "tool-added", tool: Gdk.DeviceTool): void
    connect(sigName: "tool-removed", callback: (($obj: WaylandSeat, tool: Gdk.DeviceTool) => void)): number
    connect_after(sigName: "tool-removed", callback: (($obj: WaylandSeat, tool: Gdk.DeviceTool) => void)): number
    emit(sigName: "tool-removed", tool: Gdk.DeviceTool): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WaylandSeat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WaylandSeat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WaylandSeat_ConstructProps)
    _init (config?: WaylandSeat_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandSurface_ConstructProps extends Gdk.Surface_ConstructProps {
}
export class WaylandSurface {
    /* Properties of Gdk.Surface */
    cursor: Gdk.Cursor
    readonly height: number
    readonly mapped: boolean
    readonly scale: number
    readonly scale_factor: number
    readonly width: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkWayland.WaylandSurface */
    force_next_commit(): void
    /* Methods of Gdk.Surface */
    beep(): void
    create_cairo_context(): Gdk.CairoContext
    create_gl_context(): Gdk.GLContext
    create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface
    create_vulkan_context(): Gdk.VulkanContext
    destroy(): void
    get_cursor(): Gdk.Cursor | null
    get_device_cursor(device: Gdk.Device): Gdk.Cursor | null
    get_device_position(device: Gdk.Device): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    get_display(): Gdk.Display
    get_frame_clock(): Gdk.FrameClock
    get_height(): number
    get_mapped(): boolean
    get_scale(): number
    get_scale_factor(): number
    get_width(): number
    hide(): void
    is_destroyed(): boolean
    queue_render(): void
    request_layout(): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_device_cursor(device: Gdk.Device, cursor: Gdk.Cursor): void
    set_input_region(region?: cairo.Region | null): void
    set_opaque_region(region?: cairo.Region | null): void
    translate_coordinates(to: Gdk.Surface, x: number, y: number): boolean
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
    /* Signals of Gdk.Surface */
    connect(sigName: "enter-monitor", callback: (($obj: WaylandSurface, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "enter-monitor", callback: (($obj: WaylandSurface, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "enter-monitor", monitor: Gdk.Monitor): void
    connect(sigName: "event", callback: (($obj: WaylandSurface, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: WaylandSurface, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "layout", callback: (($obj: WaylandSurface, width: number, height: number) => void)): number
    connect_after(sigName: "layout", callback: (($obj: WaylandSurface, width: number, height: number) => void)): number
    emit(sigName: "layout", width: number, height: number): void
    connect(sigName: "leave-monitor", callback: (($obj: WaylandSurface, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "leave-monitor", callback: (($obj: WaylandSurface, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "leave-monitor", monitor: Gdk.Monitor): void
    connect(sigName: "render", callback: (($obj: WaylandSurface, region: cairo.Region) => boolean)): number
    connect_after(sigName: "render", callback: (($obj: WaylandSurface, region: cairo.Region) => boolean)): number
    emit(sigName: "render", region: cairo.Region): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WaylandSurface_ConstructProps)
    _init (config?: WaylandSurface_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WaylandToplevel_ConstructProps extends WaylandSurface_ConstructProps {
}
export class WaylandToplevel {
    /* Properties of Gdk.Surface */
    cursor: Gdk.Cursor
    readonly height: number
    readonly mapped: boolean
    readonly scale: number
    readonly scale_factor: number
    readonly width: number
    /* Properties of Gdk.Toplevel */
    readonly capabilities: Gdk.ToplevelCapabilities
    decorated: boolean
    deletable: boolean
    fullscreen_mode: Gdk.FullscreenMode
    gravity: Gdk.Gravity
    icon_list: object
    modal: boolean
    readonly shortcuts_inhibited: boolean
    startup_id: string
    readonly state: Gdk.ToplevelState
    title: string
    transient_for: Gdk.Surface
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkWayland.WaylandToplevel */
    drop_exported_handle(handle: string): void
    export_handle(callback: WaylandToplevelExported): boolean
    set_application_id(application_id: string): void
    set_transient_for_exported(parent_handle_str: string): boolean
    unexport_handle(): void
    /* Methods of GdkWayland.WaylandSurface */
    force_next_commit(): void
    /* Methods of Gdk.Surface */
    beep(): void
    create_cairo_context(): Gdk.CairoContext
    create_gl_context(): Gdk.GLContext
    create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface
    create_vulkan_context(): Gdk.VulkanContext
    destroy(): void
    get_cursor(): Gdk.Cursor | null
    get_device_cursor(device: Gdk.Device): Gdk.Cursor | null
    get_device_position(device: Gdk.Device): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    get_display(): Gdk.Display
    get_frame_clock(): Gdk.FrameClock
    get_height(): number
    get_mapped(): boolean
    get_scale(): number
    get_scale_factor(): number
    get_width(): number
    hide(): void
    is_destroyed(): boolean
    queue_render(): void
    request_layout(): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_device_cursor(device: Gdk.Device, cursor: Gdk.Cursor): void
    set_input_region(region?: cairo.Region | null): void
    set_opaque_region(region?: cairo.Region | null): void
    translate_coordinates(to: Gdk.Surface, x: number, y: number): boolean
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
    /* Methods of Gdk.Toplevel */
    begin_move(device: Gdk.Device, button: number, x: number, y: number, timestamp: number): void
    begin_resize(edge: Gdk.SurfaceEdge, device: Gdk.Device | null, button: number, x: number, y: number, timestamp: number): void
    focus(timestamp: number): void
    get_capabilities(): Gdk.ToplevelCapabilities
    get_gravity(): Gdk.Gravity
    get_state(): Gdk.ToplevelState
    inhibit_system_shortcuts(event?: Gdk.Event | null): void
    lower(): boolean
    minimize(): boolean
    present(layout: Gdk.ToplevelLayout): void
    restore_system_shortcuts(): void
    set_decorated(decorated: boolean): void
    set_deletable(deletable: boolean): void
    set_gravity(gravity: Gdk.Gravity): void
    set_icon_list(surfaces: Gdk.Texture[]): void
    set_modal(modal: boolean): void
    set_startup_id(startup_id: string): void
    set_title(title: string): void
    set_transient_for(parent: Gdk.Surface): void
    show_window_menu(event: Gdk.Event): boolean
    supports_edge_constraints(): boolean
    titlebar_gesture(gesture: Gdk.TitlebarGesture): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gdk.Surface */
    connect(sigName: "enter-monitor", callback: (($obj: WaylandToplevel, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "enter-monitor", callback: (($obj: WaylandToplevel, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "enter-monitor", monitor: Gdk.Monitor): void
    connect(sigName: "event", callback: (($obj: WaylandToplevel, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: WaylandToplevel, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "layout", callback: (($obj: WaylandToplevel, width: number, height: number) => void)): number
    connect_after(sigName: "layout", callback: (($obj: WaylandToplevel, width: number, height: number) => void)): number
    emit(sigName: "layout", width: number, height: number): void
    connect(sigName: "leave-monitor", callback: (($obj: WaylandToplevel, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "leave-monitor", callback: (($obj: WaylandToplevel, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "leave-monitor", monitor: Gdk.Monitor): void
    connect(sigName: "render", callback: (($obj: WaylandToplevel, region: cairo.Region) => boolean)): number
    connect_after(sigName: "render", callback: (($obj: WaylandToplevel, region: cairo.Region) => boolean)): number
    emit(sigName: "render", region: cairo.Region): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gdk.Toplevel */
    connect(sigName: "compute-size", callback: (($obj: WaylandToplevel, size: Gdk.ToplevelSize) => void)): number
    connect_after(sigName: "compute-size", callback: (($obj: WaylandToplevel, size: Gdk.ToplevelSize) => void)): number
    emit(sigName: "compute-size", size: Gdk.ToplevelSize): void
    connect(sigName: "notify::cursor", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::decorated", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::deletable", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fullscreen-mode", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreen-mode", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gravity", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-list", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-list", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modal", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shortcuts-inhibited", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shortcuts-inhibited", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::startup-id", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transient-for", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WaylandToplevel_ConstructProps)
    _init (config?: WaylandToplevel_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class WaylandDeviceClass {
    static name: string
}
export abstract class WaylandDisplayClass {
    static name: string
}
export abstract class WaylandGLContextClass {
    static name: string
}
export abstract class WaylandMonitorClass {
    static name: string
}
export abstract class WaylandSeatClass {
    static name: string
}