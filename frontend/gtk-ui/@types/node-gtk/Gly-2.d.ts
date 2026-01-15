/**
 * Gly-2
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />

declare namespace Gly {

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
export function loaderErrorQuark(): GLib.Quark
export function memoryFormatHasAlpha(memoryFormat: MemoryFormat): boolean
export function memoryFormatIsPremultiplied(memoryFormat: MemoryFormat): boolean
export interface LoaderGetMimeTypesDoneFunc {
    (mimeTypes: string[], data?: object | null): void
}
export interface Creator_ConstructProps extends GObject.Object_ConstructProps {
    mimeType?: string
    sandboxSelector?: SandboxSelector
}
export class Creator {
    /* Properties of Gly.Creator */
    sandboxSelector: SandboxSelector
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gly.Creator */
    addFrame(width: number, height: number, memoryFormat: MemoryFormat, texture: any): NewFrame
    addFrameWithStride(width: number, height: number, stride: number, memoryFormat: MemoryFormat, texture: any): NewFrame
    addMetadataKeyValue(key: string, value: string): boolean
    create(): EncodedImage | null
    createAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createFinish(result: Gio.AsyncResult): EncodedImage
    setEncodingCompression(compression: number): boolean
    setEncodingQuality(quality: number): boolean
    setSandboxSelector(sandboxSelector: SandboxSelector): boolean
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
    connect(sigName: "notify", callback: (($obj: Creator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Creator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sandbox-selector", callback: (($obj: Creator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sandbox-selector", callback: (($obj: Creator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sandbox-selector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sandbox-selector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sandbox-selector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Creator_ConstructProps)
    _init (config?: Creator_ConstructProps): void
    static new(mimeType: string): Creator
    static $gtype: GObject.Type
}
export interface EncodedImage_ConstructProps extends GObject.Object_ConstructProps {
}
export class EncodedImage {
    /* Properties of Gly.EncodedImage */
    readonly data: any
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gly.EncodedImage */
    getData(): any
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
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
    connect(sigName: "notify", callback: (($obj: EncodedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EncodedImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::data", callback: (($obj: EncodedImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: EncodedImage, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EncodedImage_ConstructProps)
    _init (config?: EncodedImage_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Frame_ConstructProps extends GObject.Object_ConstructProps {
}
export class Frame {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gly.Frame */
    getBufBytes(): any
    getColorCicp(): Cicp | null
    getDelay(): number
    getHeight(): number
    getMemoryFormat(): MemoryFormat
    getStride(): number
    getWidth(): number
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
    connect(sigName: "notify", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Frame, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Frame_ConstructProps)
    _init (config?: Frame_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FrameRequest_ConstructProps extends GObject.Object_ConstructProps {
    loopAnimation?: boolean
}
export class FrameRequest {
    /* Properties of Gly.FrameRequest */
    loopAnimation: boolean
    readonly scaleHeight: number
    readonly scaleWidth: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gly.FrameRequest */
    setLoopAnimation(loopAnimation: boolean): void
    setScale(width: number, height: number): void
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
    connect(sigName: "notify", callback: (($obj: FrameRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FrameRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::loop-animation", callback: (($obj: FrameRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loop-animation", callback: (($obj: FrameRequest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::loop-animation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::loop-animation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::loop-animation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-height", callback: (($obj: FrameRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-height", callback: (($obj: FrameRequest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-width", callback: (($obj: FrameRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-width", callback: (($obj: FrameRequest, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gly.Image */
    getHeight(): number
    getMetadataKeyValue(key: string): string | null
    getMetadataKeys(): string[]
    getMimeType(): string
    getSpecificFrame(frameRequest: FrameRequest): Frame
    getSpecificFrameAsync(frameRequest: FrameRequest, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSpecificFrameFinish(result: Gio.AsyncResult): Frame
    getTransformationOrientation(): number
    getWidth(): number
    nextFrame(): Frame
    nextFrameAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    nextFrameFinish(result: Gio.AsyncResult): Frame
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
    connect(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Image_ConstructProps)
    _init (config?: Image_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Loader_ConstructProps extends GObject.Object_ConstructProps {
    applyTransformation?: boolean
    bytes?: any
    cancellable?: Gio.Cancellable
    file?: Gio.File
    memoryFormatSelection?: MemoryFormatSelection
    sandboxSelector?: SandboxSelector
    stream?: Gio.InputStream
}
export class Loader {
    /* Properties of Gly.Loader */
    applyTransformation: boolean
    cancellable: Gio.Cancellable
    memoryFormatSelection: MemoryFormatSelection
    sandboxSelector: SandboxSelector
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gly.Loader */
    load(): Image
    loadAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadFinish(result: Gio.AsyncResult): Image
    setAcceptedMemoryFormats(memoryFormatSelection: MemoryFormatSelection): void
    setApplyTransformations(applyTransformations: boolean): void
    setSandboxSelector(sandboxSelector: SandboxSelector): void
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
    connect(sigName: "notify", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::apply-transformation", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apply-transformation", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::apply-transformation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::apply-transformation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::apply-transformation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cancellable", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::memory-format-selection", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::memory-format-selection", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::memory-format-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::memory-format-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::memory-format-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sandbox-selector", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sandbox-selector", callback: (($obj: Loader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sandbox-selector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sandbox-selector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sandbox-selector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Loader_ConstructProps)
    _init (config?: Loader_ConstructProps): void
    static new(file: Gio.File): Loader
    static newForBytes(bytes: any): Loader
    static newForStream(stream: Gio.InputStream): Loader
    static getMimeTypes(): string[]
    static getMimeTypesAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static getMimeTypesFinish(result: Gio.AsyncResult): string[]
    static $gtype: GObject.Type
}
export interface NewFrame_ConstructProps extends GObject.Object_ConstructProps {
}
export class NewFrame {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gly.NewFrame */
    setColorIccProfile(iccProfile: any): boolean
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
    connect(sigName: "notify", callback: (($obj: NewFrame, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NewFrame, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: NewFrame_ConstructProps)
    _init (config?: NewFrame_ConstructProps): void
    static $gtype: GObject.Type
}
export class Cicp {
    /* Fields of Gly.Cicp */
    colorPrimaries: number
    transferCharacteristics: number
    matrixCoefficients: number
    videoFullRangeFlag: number
    /* Methods of Gly.Cicp */
    copy(): Cicp
    free(): void
    static name: string
}
export abstract class CreatorClass {
    /* Fields of Gly.CreatorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class EncodedImageClass {
    /* Fields of Gly.EncodedImageClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class FrameClass {
    /* Fields of Gly.FrameClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class FrameRequestClass {
    /* Fields of Gly.FrameRequestClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class ImageClass {
    /* Fields of Gly.ImageClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class LoaderClass {
    /* Fields of Gly.LoaderClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class NewFrameClass {
    /* Fields of Gly.NewFrameClass */
    parentClass: GObject.ObjectClass
    static name: string
}
}