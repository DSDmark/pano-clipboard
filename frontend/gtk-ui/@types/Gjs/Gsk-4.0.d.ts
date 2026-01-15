/**
 * Gsk-4.0
 */

import * as Gjs from './Gjs';
import * as Graphene from './Graphene-1.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as Gdk from './Gdk-4.0';
import * as cairo from './cairo-1.0';
import * as PangoCairo from './PangoCairo-1.0';
import * as Pango from './Pango-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as freetype2 from './freetype2-2.0';
import * as Gio from './Gio-2.0';
import * as GModule from './GModule-2.0';
import * as GdkPixbuf from './GdkPixbuf-2.0';

export enum BlendMode {
    DEFAULT,
    MULTIPLY,
    SCREEN,
    OVERLAY,
    DARKEN,
    LIGHTEN,
    COLOR_DODGE,
    COLOR_BURN,
    HARD_LIGHT,
    SOFT_LIGHT,
    DIFFERENCE,
    EXCLUSION,
    COLOR,
    HUE,
    SATURATION,
    LUMINOSITY,
}
export enum Corner {
    TOP_LEFT,
    TOP_RIGHT,
    BOTTOM_RIGHT,
    BOTTOM_LEFT,
}
export enum FillRule {
    WINDING,
    EVEN_ODD,
}
export enum GLUniformType {
    NONE,
    FLOAT,
    INT,
    UINT,
    BOOL,
    VEC2,
    VEC3,
    VEC4,
}
export enum LineCap {
    BUTT,
    ROUND,
    SQUARE,
}
export enum LineJoin {
    MITER,
    ROUND,
    BEVEL,
}
export enum MaskMode {
    ALPHA,
    INVERTED_ALPHA,
    LUMINANCE,
    INVERTED_LUMINANCE,
}
export enum PathDirection {
    FROM_START,
    TO_START,
    TO_END,
    FROM_END,
}
export enum PathIntersection {
    NONE,
    NORMAL,
    START,
    END,
}
export enum PathOperation {
    MOVE,
    CLOSE,
    LINE,
    QUAD,
    CUBIC,
    CONIC,
}
export enum RenderNodeType {
    NOT_A_RENDER_NODE,
    CONTAINER_NODE,
    CAIRO_NODE,
    COLOR_NODE,
    LINEAR_GRADIENT_NODE,
    REPEATING_LINEAR_GRADIENT_NODE,
    RADIAL_GRADIENT_NODE,
    REPEATING_RADIAL_GRADIENT_NODE,
    CONIC_GRADIENT_NODE,
    BORDER_NODE,
    TEXTURE_NODE,
    INSET_SHADOW_NODE,
    OUTSET_SHADOW_NODE,
    TRANSFORM_NODE,
    OPACITY_NODE,
    COLOR_MATRIX_NODE,
    REPEAT_NODE,
    CLIP_NODE,
    ROUNDED_CLIP_NODE,
    SHADOW_NODE,
    BLEND_NODE,
    CROSS_FADE_NODE,
    TEXT_NODE,
    BLUR_NODE,
    DEBUG_NODE,
    GL_SHADER_NODE,
    TEXTURE_SCALE_NODE,
    MASK_NODE,
    FILL_NODE,
    STROKE_NODE,
    SUBSURFACE_NODE,
    COMPONENT_TRANSFER_NODE,
}
export enum ScalingFilter {
    LINEAR,
    NEAREST,
    TRILINEAR,
}
export enum SerializationError {
    UNSUPPORTED_FORMAT,
    UNSUPPORTED_VERSION,
    INVALID_DATA,
}
export enum TransformCategory {
    UNKNOWN,
    ANY,
    /* 3D (invalid, starts with a number) */
    /* 2D (invalid, starts with a number) */
    /* 2D_AFFINE (invalid, starts with a number) */
    /* 2D_TRANSLATE (invalid, starts with a number) */
    IDENTITY,
}
export enum PathForeachFlags {
    ONLY_LINES,
    QUAD,
    CUBIC,
    CONIC,
}
export function component_transfer_equal(self: object, other: object): boolean
export function path_parse(string: string): Path | null
export function serialization_error_quark(): GLib.Quark
export function stroke_equal(stroke1?: object | null, stroke2?: object | null): boolean
export function transform_parse(string: string): [ /* returnType */ boolean, /* out_transform */ Transform ]
export function value_dup_render_node(value: any): RenderNode | null
export function value_get_render_node(value: any): RenderNode | null
export function value_set_render_node(value: any, node: RenderNode): void
export function value_take_render_node(value: any, node?: RenderNode | null): void
export interface ParseErrorFunc {
    (start: ParseLocation, end: ParseLocation, error: GLib.Error): void
}
export interface PathForeachFunc {
    (op: PathOperation, pts: Graphene.Point[], weight: number): boolean
}
export interface PathIntersectionFunc {
    (path1: Path, point1: PathPoint, path2: Path, point2: PathPoint, kind: PathIntersection): boolean
}
export class BlendNode {
    /* Methods of Gsk.BlendNode */
    get_blend_mode(): BlendMode
    get_bottom_child(): RenderNode
    get_top_child(): RenderNode
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(bottom: RenderNode, top: RenderNode, blend_mode: BlendMode): BlendNode
    constructor(bottom: RenderNode, top: RenderNode, blend_mode: BlendMode)
    static new(bottom: RenderNode, top: RenderNode, blend_mode: BlendMode): BlendNode
}
export class BlurNode {
    /* Methods of Gsk.BlurNode */
    get_child(): RenderNode
    get_radius(): number
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, radius: number): BlurNode
    constructor(child: RenderNode, radius: number)
    static new(child: RenderNode, radius: number): BlurNode
}
export class BorderNode {
    /* Methods of Gsk.BorderNode */
    get_colors(): Gdk.RGBA[]
    get_outline(): RoundedRect
    get_widths(): number[]
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(outline: RoundedRect, border_width: number[], border_color: Gdk.RGBA[]): BorderNode
    constructor(outline: RoundedRect, border_width: number[], border_color: Gdk.RGBA[])
    static new(outline: RoundedRect, border_width: number[], border_color: Gdk.RGBA[]): BorderNode
}
export interface BroadwayRenderer_ConstructProps extends Renderer_ConstructProps {
}
export class BroadwayRenderer {
    /* Properties of Gsk.Renderer */
    readonly realized: boolean
    readonly surface: Gdk.Surface
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsk.Renderer */
    get_surface(): Gdk.Surface | null
    is_realized(): boolean
    realize(surface?: Gdk.Surface | null): boolean
    realize_for_display(display: Gdk.Display): boolean
    render(root: RenderNode, region?: cairo.Region | null): void
    render_texture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture
    unrealize(): void
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
    connect(sigName: "notify", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: BroadwayRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BroadwayRenderer_ConstructProps)
    _init (config?: BroadwayRenderer_ConstructProps): void
    static new(): BroadwayRenderer
    static $gtype: GObject.Type
}
export class CairoNode {
    /* Methods of Gsk.CairoNode */
    get_draw_context(): cairo.Context
    get_surface(): cairo.Surface
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect): CairoNode
    constructor(bounds: Graphene.Rect)
    static new(bounds: Graphene.Rect): CairoNode
}
export interface CairoRenderer_ConstructProps extends Renderer_ConstructProps {
}
export class CairoRenderer {
    /* Properties of Gsk.Renderer */
    readonly realized: boolean
    readonly surface: Gdk.Surface
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsk.Renderer */
    get_surface(): Gdk.Surface | null
    is_realized(): boolean
    realize(surface?: Gdk.Surface | null): boolean
    realize_for_display(display: Gdk.Display): boolean
    render(root: RenderNode, region?: cairo.Region | null): void
    render_texture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture
    unrealize(): void
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
    connect(sigName: "notify", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: CairoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CairoRenderer_ConstructProps)
    _init (config?: CairoRenderer_ConstructProps): void
    static new(): CairoRenderer
    static $gtype: GObject.Type
}
export class ClipNode {
    /* Methods of Gsk.ClipNode */
    get_child(): RenderNode
    get_clip(): Graphene.Rect
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, clip: Graphene.Rect): ClipNode
    constructor(child: RenderNode, clip: Graphene.Rect)
    static new(child: RenderNode, clip: Graphene.Rect): ClipNode
}
export class ColorMatrixNode {
    /* Methods of Gsk.ColorMatrixNode */
    get_child(): RenderNode
    get_color_matrix(): Graphene.Matrix
    get_color_offset(): Graphene.Vec4
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, color_matrix: Graphene.Matrix, color_offset: Graphene.Vec4): ColorMatrixNode
    constructor(child: RenderNode, color_matrix: Graphene.Matrix, color_offset: Graphene.Vec4)
    static new(child: RenderNode, color_matrix: Graphene.Matrix, color_offset: Graphene.Vec4): ColorMatrixNode
}
export class ColorNode {
    /* Methods of Gsk.ColorNode */
    get_color(): Gdk.RGBA
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(rgba: Gdk.RGBA, bounds: Graphene.Rect): ColorNode
    constructor(rgba: Gdk.RGBA, bounds: Graphene.Rect)
    static new(rgba: Gdk.RGBA, bounds: Graphene.Rect): ColorNode
}
export class ComponentTransferNode {
    /* Methods of Gsk.ComponentTransferNode */
    get_child(): RenderNode
    get_transfer(component: number): ComponentTransfer
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, r: ComponentTransfer, g: ComponentTransfer, b: ComponentTransfer, a: ComponentTransfer): ComponentTransferNode
    constructor(child: RenderNode, r: ComponentTransfer, g: ComponentTransfer, b: ComponentTransfer, a: ComponentTransfer)
    static new(child: RenderNode, r: ComponentTransfer, g: ComponentTransfer, b: ComponentTransfer, a: ComponentTransfer): ComponentTransferNode
}
export class ConicGradientNode {
    /* Methods of Gsk.ConicGradientNode */
    get_angle(): number
    get_center(): Graphene.Point
    get_color_stops(): ColorStop[]
    get_n_color_stops(): number
    get_rotation(): number
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, center: Graphene.Point, rotation: number, color_stops: ColorStop[]): ConicGradientNode
    constructor(bounds: Graphene.Rect, center: Graphene.Point, rotation: number, color_stops: ColorStop[])
    static new(bounds: Graphene.Rect, center: Graphene.Point, rotation: number, color_stops: ColorStop[]): ConicGradientNode
}
export class ContainerNode {
    /* Methods of Gsk.ContainerNode */
    get_child(idx: number): RenderNode
    get_n_children(): number
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(children: RenderNode[]): ContainerNode
    constructor(children: RenderNode[])
    static new(children: RenderNode[]): ContainerNode
}
export class CrossFadeNode {
    /* Methods of Gsk.CrossFadeNode */
    get_end_child(): RenderNode
    get_progress(): number
    get_start_child(): RenderNode
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(start: RenderNode, end: RenderNode, progress: number): CrossFadeNode
    constructor(start: RenderNode, end: RenderNode, progress: number)
    static new(start: RenderNode, end: RenderNode, progress: number): CrossFadeNode
}
export class DebugNode {
    /* Methods of Gsk.DebugNode */
    get_child(): RenderNode
    get_message(): string
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, message: string): DebugNode
    constructor(child: RenderNode, message: string)
    static new(child: RenderNode, message: string): DebugNode
}
export class FillNode {
    /* Methods of Gsk.FillNode */
    get_child(): RenderNode
    get_fill_rule(): FillRule
    get_path(): Path
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, path: Path, fill_rule: FillRule): FillNode
    constructor(child: RenderNode, path: Path, fill_rule: FillRule)
    static new(child: RenderNode, path: Path, fill_rule: FillRule): FillNode
}
export interface GLRenderer_ConstructProps extends Renderer_ConstructProps {
}
export class GLRenderer {
    /* Properties of Gsk.Renderer */
    readonly realized: boolean
    readonly surface: Gdk.Surface
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsk.Renderer */
    get_surface(): Gdk.Surface | null
    is_realized(): boolean
    realize(surface?: Gdk.Surface | null): boolean
    realize_for_display(display: Gdk.Display): boolean
    render(root: RenderNode, region?: cairo.Region | null): void
    render_texture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture
    unrealize(): void
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
    connect(sigName: "notify", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: GLRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLRenderer_ConstructProps)
    _init (config?: GLRenderer_ConstructProps): void
    static new(): GLRenderer
    static $gtype: GObject.Type
}
export interface GLShader_ConstructProps extends GObject.Object_ConstructProps {
    resource?: string
    source?: Gjs.byteArray.ByteArray
}
export class GLShader {
    /* Properties of Gsk.GLShader */
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsk.GLShader */
    compile(renderer: Renderer): boolean
    find_uniform_by_name(name: string): number
    get_arg_bool(args: Gjs.byteArray.ByteArray, idx: number): boolean
    get_arg_float(args: Gjs.byteArray.ByteArray, idx: number): number
    get_arg_int(args: Gjs.byteArray.ByteArray, idx: number): number
    get_arg_uint(args: Gjs.byteArray.ByteArray, idx: number): number
    get_arg_vec2(args: Gjs.byteArray.ByteArray, idx: number, out_value: Graphene.Vec2): void
    get_arg_vec3(args: Gjs.byteArray.ByteArray, idx: number, out_value: Graphene.Vec3): void
    get_arg_vec4(args: Gjs.byteArray.ByteArray, idx: number, out_value: Graphene.Vec4): void
    get_args_size(): number
    get_n_textures(): number
    get_n_uniforms(): number
    get_resource(): string | null
    get_source(): Gjs.byteArray.ByteArray
    get_uniform_name(idx: number): string
    get_uniform_offset(idx: number): number
    get_uniform_type(idx: number): GLUniformType
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
    connect(sigName: "notify", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLShader_ConstructProps)
    _init (config?: GLShader_ConstructProps): void
    static new_from_bytes(sourcecode: Gjs.byteArray.ByteArray): GLShader
    static new_from_resource(resource_path: string): GLShader
    static $gtype: GObject.Type
}
export class GLShaderNode {
    /* Methods of Gsk.GLShaderNode */
    get_args(): Gjs.byteArray.ByteArray
    get_child(idx: number): RenderNode
    get_n_children(): number
    get_shader(): GLShader
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(shader: GLShader, bounds: Graphene.Rect, args: Gjs.byteArray.ByteArray, children: RenderNode[] | null): GLShaderNode
    constructor(shader: GLShader, bounds: Graphene.Rect, args: Gjs.byteArray.ByteArray, children: RenderNode[] | null)
    static new(shader: GLShader, bounds: Graphene.Rect, args: Gjs.byteArray.ByteArray, children: RenderNode[] | null): GLShaderNode
}
export class InsetShadowNode {
    /* Methods of Gsk.InsetShadowNode */
    get_blur_radius(): number
    get_color(): Gdk.RGBA
    get_dx(): number
    get_dy(): number
    get_outline(): RoundedRect
    get_spread(): number
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blur_radius: number): InsetShadowNode
    constructor(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blur_radius: number)
    static new(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blur_radius: number): InsetShadowNode
}
export class LinearGradientNode {
    /* Methods of Gsk.LinearGradientNode */
    get_color_stops(): ColorStop[]
    get_end(): Graphene.Point
    get_n_color_stops(): number
    get_start(): Graphene.Point
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, color_stops: ColorStop[]): LinearGradientNode
    constructor(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, color_stops: ColorStop[])
    static new(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, color_stops: ColorStop[]): LinearGradientNode
}
export class MaskNode {
    /* Methods of Gsk.MaskNode */
    get_mask(): RenderNode
    get_mask_mode(): MaskMode
    get_source(): RenderNode
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(source: RenderNode, mask: RenderNode, mask_mode: MaskMode): MaskNode
    constructor(source: RenderNode, mask: RenderNode, mask_mode: MaskMode)
    static new(source: RenderNode, mask: RenderNode, mask_mode: MaskMode): MaskNode
}
export interface NglRenderer_ConstructProps extends Renderer_ConstructProps {
}
export class NglRenderer {
    /* Properties of Gsk.Renderer */
    readonly realized: boolean
    readonly surface: Gdk.Surface
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsk.Renderer */
    get_surface(): Gdk.Surface | null
    is_realized(): boolean
    realize(surface?: Gdk.Surface | null): boolean
    realize_for_display(display: Gdk.Display): boolean
    render(root: RenderNode, region?: cairo.Region | null): void
    render_texture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture
    unrealize(): void
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
    connect(sigName: "notify", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: NglRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NglRenderer_ConstructProps)
    _init (config?: NglRenderer_ConstructProps): void
    static new(): NglRenderer
    static $gtype: GObject.Type
}
export class OpacityNode {
    /* Methods of Gsk.OpacityNode */
    get_child(): RenderNode
    get_opacity(): number
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, opacity: number): OpacityNode
    constructor(child: RenderNode, opacity: number)
    static new(child: RenderNode, opacity: number): OpacityNode
}
export class OutsetShadowNode {
    /* Methods of Gsk.OutsetShadowNode */
    get_blur_radius(): number
    get_color(): Gdk.RGBA
    get_dx(): number
    get_dy(): number
    get_outline(): RoundedRect
    get_spread(): number
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blur_radius: number): OutsetShadowNode
    constructor(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blur_radius: number)
    static new(outline: RoundedRect, color: Gdk.RGBA, dx: number, dy: number, spread: number, blur_radius: number): OutsetShadowNode
}
export class RadialGradientNode {
    /* Methods of Gsk.RadialGradientNode */
    get_center(): Graphene.Point
    get_color_stops(): ColorStop[]
    get_end(): number
    get_hradius(): number
    get_n_color_stops(): number
    get_start(): number
    get_vradius(): number
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, color_stops: ColorStop[]): RadialGradientNode
    constructor(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, color_stops: ColorStop[])
    static new(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, color_stops: ColorStop[]): RadialGradientNode
}
export class RenderNode {
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static deserialize(bytes: Gjs.byteArray.ByteArray, error_func?: ParseErrorFunc | null): RenderNode | null
}
export interface Renderer_ConstructProps extends GObject.Object_ConstructProps {
}
export class Renderer {
    /* Properties of Gsk.Renderer */
    readonly realized: boolean
    readonly surface: Gdk.Surface
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsk.Renderer */
    get_surface(): Gdk.Surface | null
    is_realized(): boolean
    realize(surface?: Gdk.Surface | null): boolean
    realize_for_display(display: Gdk.Display): boolean
    render(root: RenderNode, region?: cairo.Region | null): void
    render_texture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture
    unrealize(): void
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
    connect(sigName: "notify", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Renderer_ConstructProps)
    _init (config?: Renderer_ConstructProps): void
    static new_for_surface(surface: Gdk.Surface): Renderer | null
    static $gtype: GObject.Type
}
export class RepeatNode {
    /* Methods of Gsk.RepeatNode */
    get_child(): RenderNode
    get_child_bounds(): Graphene.Rect
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, child: RenderNode, child_bounds?: Graphene.Rect | null): RepeatNode
    constructor(bounds: Graphene.Rect, child: RenderNode, child_bounds?: Graphene.Rect | null)
    static new(bounds: Graphene.Rect, child: RenderNode, child_bounds?: Graphene.Rect | null): RepeatNode
}
export class RepeatingLinearGradientNode {
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, color_stops: ColorStop[]): RepeatingLinearGradientNode
    constructor(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, color_stops: ColorStop[])
    static new(bounds: Graphene.Rect, start: Graphene.Point, end: Graphene.Point, color_stops: ColorStop[]): RepeatingLinearGradientNode
}
export class RepeatingRadialGradientNode {
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, color_stops: ColorStop[]): RepeatingRadialGradientNode
    constructor(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, color_stops: ColorStop[])
    static new(bounds: Graphene.Rect, center: Graphene.Point, hradius: number, vradius: number, start: number, end: number, color_stops: ColorStop[]): RepeatingRadialGradientNode
}
export class RoundedClipNode {
    /* Methods of Gsk.RoundedClipNode */
    get_child(): RenderNode
    get_clip(): RoundedRect
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, clip: RoundedRect): RoundedClipNode
    constructor(child: RenderNode, clip: RoundedRect)
    static new(child: RenderNode, clip: RoundedRect): RoundedClipNode
}
export class ShadowNode {
    /* Methods of Gsk.ShadowNode */
    get_child(): RenderNode
    get_n_shadows(): number
    get_shadow(i: number): Shadow
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, shadows: Shadow[]): ShadowNode
    constructor(child: RenderNode, shadows: Shadow[])
    static new(child: RenderNode, shadows: Shadow[]): ShadowNode
}
export class StrokeNode {
    /* Methods of Gsk.StrokeNode */
    get_child(): RenderNode
    get_path(): Path
    get_stroke(): Stroke
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, path: Path, stroke: Stroke): StrokeNode
    constructor(child: RenderNode, path: Path, stroke: Stroke)
    static new(child: RenderNode, path: Path, stroke: Stroke): StrokeNode
}
export class SubsurfaceNode {
    /* Methods of Gsk.SubsurfaceNode */
    get_child(): RenderNode
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
}
export class TextNode {
    /* Methods of Gsk.TextNode */
    get_color(): Gdk.RGBA
    get_font(): Pango.Font
    get_glyphs(): Pango.GlyphInfo[]
    get_num_glyphs(): number
    get_offset(): Graphene.Point
    has_color_glyphs(): boolean
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(font: Pango.Font, glyphs: Pango.GlyphString, color: Gdk.RGBA, offset: Graphene.Point): TextNode | null
    constructor(font: Pango.Font, glyphs: Pango.GlyphString, color: Gdk.RGBA, offset: Graphene.Point)
    static new(font: Pango.Font, glyphs: Pango.GlyphString, color: Gdk.RGBA, offset: Graphene.Point): TextNode | null
}
export class TextureNode {
    /* Methods of Gsk.TextureNode */
    get_texture(): Gdk.Texture
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(texture: Gdk.Texture, bounds: Graphene.Rect): TextureNode
    constructor(texture: Gdk.Texture, bounds: Graphene.Rect)
    static new(texture: Gdk.Texture, bounds: Graphene.Rect): TextureNode
}
export class TextureScaleNode {
    /* Methods of Gsk.TextureScaleNode */
    get_filter(): ScalingFilter
    get_texture(): Gdk.Texture
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(texture: Gdk.Texture, bounds: Graphene.Rect, filter: ScalingFilter): TextureScaleNode
    constructor(texture: Gdk.Texture, bounds: Graphene.Rect, filter: ScalingFilter)
    static new(texture: Gdk.Texture, bounds: Graphene.Rect, filter: ScalingFilter): TextureScaleNode
}
export class TransformNode {
    /* Methods of Gsk.TransformNode */
    get_child(): RenderNode
    get_transform(): Transform
    /* Methods of Gsk.RenderNode */
    draw(cr: cairo.Context): void
    get_bounds(): /* bounds */ Graphene.Rect
    get_node_type(): RenderNodeType
    get_opaque_rect(): [ /* returnType */ boolean, /* out_opaque */ Graphene.Rect ]
    ref(): RenderNode
    serialize(): Gjs.byteArray.ByteArray
    unref(): void
    write_to_file(filename: string): boolean
    static name: string
    static new(child: RenderNode, transform: Transform): TransformNode
    constructor(child: RenderNode, transform: Transform)
    static new(child: RenderNode, transform: Transform): TransformNode
}
export interface VulkanRenderer_ConstructProps extends Renderer_ConstructProps {
}
export class VulkanRenderer {
    /* Properties of Gsk.Renderer */
    readonly realized: boolean
    readonly surface: Gdk.Surface
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsk.Renderer */
    get_surface(): Gdk.Surface | null
    is_realized(): boolean
    realize(surface?: Gdk.Surface | null): boolean
    realize_for_display(display: Gdk.Display): boolean
    render(root: RenderNode, region?: cairo.Region | null): void
    render_texture(root: RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture
    unrealize(): void
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
    connect(sigName: "notify", callback: (($obj: VulkanRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VulkanRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::realized", callback: (($obj: VulkanRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: VulkanRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: VulkanRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: VulkanRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VulkanRenderer_ConstructProps)
    _init (config?: VulkanRenderer_ConstructProps): void
    static new(): VulkanRenderer
    static $gtype: GObject.Type
}
export abstract class BroadwayRendererClass {
    static name: string
}
export abstract class CairoRendererClass {
    static name: string
}
export class ColorStop {
    /* Fields of Gsk.ColorStop */
    offset: number
    color: Gdk.RGBA
    static name: string
}
export class ComponentTransfer {
    /* Methods of Gsk.ComponentTransfer */
    copy(): ComponentTransfer
    free(): void
    static name: string
    static new_discrete(values: number[]): ComponentTransfer
    static new_gamma(amp: number, exp: number, ofs: number): ComponentTransfer
    static new_identity(): ComponentTransfer
    static new_levels(n: number): ComponentTransfer
    static new_linear(m: number, b: number): ComponentTransfer
    static new_table(values: number[]): ComponentTransfer
    static equal(self: object, other: object): boolean
}
export abstract class GLRendererClass {
    static name: string
}
export abstract class GLShaderClass {
    /* Fields of Gsk.GLShaderClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ParseLocation {
    /* Fields of Gsk.ParseLocation */
    bytes: number
    chars: number
    lines: number
    line_bytes: number
    line_chars: number
    static name: string
}
export class Path {
    /* Methods of Gsk.Path */
    foreach(flags: PathForeachFlags, func: PathForeachFunc): boolean
    foreach_intersection(path2: Path | null, func: PathIntersectionFunc): boolean
    get_bounds(): [ /* returnType */ boolean, /* bounds */ Graphene.Rect ]
    get_closest_point(point: Graphene.Point, threshold: number): [ /* returnType */ boolean, /* result */ PathPoint, /* distance */ number | null ]
    get_end_point(): [ /* returnType */ boolean, /* result */ PathPoint ]
    get_start_point(): [ /* returnType */ boolean, /* result */ PathPoint ]
    get_stroke_bounds(stroke: Stroke): [ /* returnType */ boolean, /* bounds */ Graphene.Rect ]
    in_fill(point: Graphene.Point, fill_rule: FillRule): boolean
    is_closed(): boolean
    is_empty(): boolean
    print(string: GLib.String): void
    ref(): Path
    to_cairo(cr: cairo.Context): void
    to_string(): string
    unref(): void
    static name: string
    static parse(string: string): Path | null
}
export class PathBuilder {
    /* Methods of Gsk.PathBuilder */
    add_cairo_path(path: cairo.Path): void
    add_circle(center: Graphene.Point, radius: number): void
    add_layout(layout: Pango.Layout): void
    add_path(path: Path): void
    add_rect(rect: Graphene.Rect): void
    add_reverse_path(path: Path): void
    add_rounded_rect(rect: RoundedRect): void
    add_segment(path: Path, start: PathPoint, end: PathPoint): void
    arc_to(x1: number, y1: number, x2: number, y2: number): void
    close(): void
    conic_to(x1: number, y1: number, x2: number, y2: number, weight: number): void
    cubic_to(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void
    get_current_point(): Graphene.Point
    html_arc_to(x1: number, y1: number, x2: number, y2: number, radius: number): void
    line_to(x: number, y: number): void
    move_to(x: number, y: number): void
    quad_to(x1: number, y1: number, x2: number, y2: number): void
    ref(): PathBuilder
    rel_arc_to(x1: number, y1: number, x2: number, y2: number): void
    rel_conic_to(x1: number, y1: number, x2: number, y2: number, weight: number): void
    rel_cubic_to(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void
    rel_html_arc_to(x1: number, y1: number, x2: number, y2: number, radius: number): void
    rel_line_to(x: number, y: number): void
    rel_move_to(x: number, y: number): void
    rel_quad_to(x1: number, y1: number, x2: number, y2: number): void
    rel_svg_arc_to(rx: number, ry: number, x_axis_rotation: number, large_arc: boolean, positive_sweep: boolean, x: number, y: number): void
    svg_arc_to(rx: number, ry: number, x_axis_rotation: number, large_arc: boolean, positive_sweep: boolean, x: number, y: number): void
    to_path(): Path
    unref(): void
    static name: string
    static new(): PathBuilder
    constructor()
    static new(): PathBuilder
}
export class PathMeasure {
    /* Methods of Gsk.PathMeasure */
    get_length(): number
    get_path(): Path
    get_point(distance: number): [ /* returnType */ boolean, /* result */ PathPoint ]
    get_tolerance(): number
    ref(): PathMeasure
    unref(): void
    static name: string
    static new(path: Path): PathMeasure
    constructor(path: Path)
    static new(path: Path): PathMeasure
    static new_with_tolerance(path: Path, tolerance: number): PathMeasure
}
export class PathPoint {
    /* Methods of Gsk.PathPoint */
    compare(point2: PathPoint): number
    copy(): PathPoint
    equal(point2: PathPoint): boolean
    free(): void
    get_curvature(path: Path, direction: PathDirection): [ /* returnType */ number, /* center */ Graphene.Point | null ]
    get_distance(measure: PathMeasure): number
    get_position(path: Path): /* position */ Graphene.Point
    get_rotation(path: Path, direction: PathDirection): number
    get_tangent(path: Path, direction: PathDirection): /* tangent */ Graphene.Vec2
    static name: string
}
export abstract class RendererClass {
    static name: string
}
export class RoundedRect {
    /* Fields of Gsk.RoundedRect */
    bounds: Graphene.Rect
    corner: Graphene.Size[]
    /* Methods of Gsk.RoundedRect */
    contains_point(point: Graphene.Point): boolean
    contains_rect(rect: Graphene.Rect): boolean
    init(bounds: Graphene.Rect, top_left: Graphene.Size, top_right: Graphene.Size, bottom_right: Graphene.Size, bottom_left: Graphene.Size): RoundedRect
    init_copy(src: RoundedRect): RoundedRect
    init_from_rect(bounds: Graphene.Rect, radius: number): RoundedRect
    intersects_rect(rect: Graphene.Rect): boolean
    is_rectilinear(): boolean
    normalize(): RoundedRect
    offset(dx: number, dy: number): RoundedRect
    shrink(top: number, right: number, bottom: number, left: number): RoundedRect
    static name: string
}
export class ShaderArgsBuilder {
    /* Methods of Gsk.ShaderArgsBuilder */
    ref(): ShaderArgsBuilder
    set_bool(idx: number, value: boolean): void
    set_float(idx: number, value: number): void
    set_int(idx: number, value: number): void
    set_uint(idx: number, value: number): void
    set_vec2(idx: number, value: Graphene.Vec2): void
    set_vec3(idx: number, value: Graphene.Vec3): void
    set_vec4(idx: number, value: Graphene.Vec4): void
    to_args(): Gjs.byteArray.ByteArray
    unref(): void
    static name: string
    static new(shader: GLShader, initial_values?: Gjs.byteArray.ByteArray): ShaderArgsBuilder
    constructor(shader: GLShader, initial_values?: Gjs.byteArray.ByteArray)
    static new(shader: GLShader, initial_values?: Gjs.byteArray.ByteArray): ShaderArgsBuilder
}
export class Shadow {
    /* Fields of Gsk.Shadow */
    color: Gdk.RGBA
    dx: number
    dy: number
    radius: number
    static name: string
}
export class Stroke {
    /* Methods of Gsk.Stroke */
    copy(): Stroke
    free(): void
    get_dash(): number[] | null
    get_dash_offset(): number
    get_line_cap(): LineCap
    get_line_join(): LineJoin
    get_line_width(): number
    get_miter_limit(): number
    set_dash(dash: number[] | null): void
    set_dash_offset(offset: number): void
    set_line_cap(line_cap: LineCap): void
    set_line_join(line_join: LineJoin): void
    set_line_width(line_width: number): void
    set_miter_limit(limit: number): void
    to_cairo(cr: cairo.Context): void
    static name: string
    static new(line_width: number): Stroke
    constructor(line_width: number)
    static new(line_width: number): Stroke
    static equal(stroke1?: object | null, stroke2?: object | null): boolean
}
export class Transform {
    /* Methods of Gsk.Transform */
    equal(second?: Transform | null): boolean
    get_category(): TransformCategory
    invert(): Transform | null
    matrix(matrix: Graphene.Matrix): Transform
    matrix_2d(xx: number, yx: number, xy: number, yy: number, dx: number, dy: number): Transform | null
    perspective(depth: number): Transform
    print(string: GLib.String): void
    ref(): Transform | null
    rotate(angle: number): Transform | null
    rotate_3d(angle: number, axis: Graphene.Vec3): Transform | null
    scale(factor_x: number, factor_y: number): Transform | null
    scale_3d(factor_x: number, factor_y: number, factor_z: number): Transform | null
    skew(skew_x: number, skew_y: number): Transform | null
    to_2d(): [ /* out_xx */ number, /* out_yx */ number, /* out_xy */ number, /* out_yy */ number, /* out_dx */ number, /* out_dy */ number ]
    to_2d_components(): [ /* out_skew_x */ number, /* out_skew_y */ number, /* out_scale_x */ number, /* out_scale_y */ number, /* out_angle */ number, /* out_dx */ number, /* out_dy */ number ]
    to_affine(): [ /* out_scale_x */ number, /* out_scale_y */ number, /* out_dx */ number, /* out_dy */ number ]
    to_matrix(): /* out_matrix */ Graphene.Matrix
    to_string(): string
    to_translate(): [ /* out_dx */ number, /* out_dy */ number ]
    transform(other?: Transform | null): Transform | null
    transform_bounds(rect: Graphene.Rect): /* out_rect */ Graphene.Rect
    transform_point(point: Graphene.Point): /* out_point */ Graphene.Point
    translate(point: Graphene.Point): Transform | null
    translate_3d(point: Graphene.Point3D): Transform | null
    unref(): void
    static name: string
    static new(): Transform
    constructor()
    static new(): Transform
    static parse(string: string): [ /* returnType */ boolean, /* out_transform */ Transform ]
}
export abstract class VulkanRendererClass {
    static name: string
}