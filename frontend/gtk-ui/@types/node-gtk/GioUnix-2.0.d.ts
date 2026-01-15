/**
 * GioUnix-2.0
 */

/// <reference types="node" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />

declare namespace GioUnix {

export const DESKTOP_APP_INFO_LOOKUP_EXTENSION_POINT_NAME: string
export function isMountPathSystemInternal(mountPath: string): boolean
export function isSystemDevicePath(devicePath: string): boolean
export function isSystemFsType(fsType: string): boolean
export function mountAt(mountPath: string): [ /* returnType */ MountEntry | null, /* timeRead */ number | null ]
export function mountCompare(mount1: MountEntry, mount2: MountEntry): number
export function mountCopy(mountEntry: MountEntry): MountEntry
export function mountEntriesChangedSince(time: number): boolean
export function mountEntriesGet(): [ /* returnType */ MountEntry[], /* timeRead */ number | null ]
export function mountEntriesGetFromFile(tablePath: string): [ /* returnType */ MountEntry[] | null, /* timeReadOut */ number | null ]
export function mountEntryAt(mountPath: string): [ /* returnType */ MountEntry | null, /* timeRead */ number | null ]
export function mountEntryFor(filePath: string): [ /* returnType */ MountEntry | null, /* timeRead */ number | null ]
export function mountFor(filePath: string): [ /* returnType */ MountEntry | null, /* timeRead */ number | null ]
export function mountFree(mountEntry: MountEntry): void
export function mountGetDevicePath(mountEntry: MountEntry): string
export function mountGetFsType(mountEntry: MountEntry): string
export function mountGetMountPath(mountEntry: MountEntry): string
export function mountGetOptions(mountEntry: MountEntry): string | null
export function mountGetRootPath(mountEntry: MountEntry): string | null
export function mountGuessCanEject(mountEntry: MountEntry): boolean
export function mountGuessIcon(mountEntry: MountEntry): Gio.Icon
export function mountGuessName(mountEntry: MountEntry): string
export function mountGuessShouldDisplay(mountEntry: MountEntry): boolean
export function mountGuessSymbolicIcon(mountEntry: MountEntry): Gio.Icon
export function mountIsReadonly(mountEntry: MountEntry): boolean
export function mountIsSystemInternal(mountEntry: MountEntry): boolean
export function mountPointAt(mountPath: string): [ /* returnType */ MountPoint | null, /* timeRead */ number | null ]
export function mountPointsChangedSince(time: number): boolean
export function mountPointsGet(): [ /* returnType */ MountPoint[], /* timeRead */ number | null ]
export function mountPointsGetFromFile(tablePath: string): [ /* returnType */ MountPoint[] | null, /* timeReadOut */ number | null ]
export function mountsChangedSince(time: number): boolean
export function mountsGet(): [ /* returnType */ MountEntry[], /* timeRead */ number | null ]
export function mountsGetFromFile(tablePath: string): [ /* returnType */ MountEntry[] | null, /* timeReadOut */ number | null ]
export interface DesktopAppLaunchCallback {
    (appinfo: DesktopAppInfo, pid: GLib.Pid): void
}
export class DesktopAppInfoLookup {
    /* Methods of GioUnix.DesktopAppInfoLookup */
    getDefaultForUriScheme(uriScheme: string): Gio.AppInfo | null
    /* Virtual methods of GioUnix.DesktopAppInfoLookup */
    vfuncGetDefaultForUriScheme?(uriScheme: string): Gio.AppInfo | null
    static name: string
}
export class FileDescriptorBased {
    /* Methods of GioUnix.FileDescriptorBased */
    getFd(): number
    /* Virtual methods of GioUnix.FileDescriptorBased */
    vfuncGetFd?(): number
    static name: string
}
export interface DesktopAppInfo_ConstructProps extends GObject.Object_ConstructProps {
    filename?: string
}
export class DesktopAppInfo {
    /* Properties of GioUnix.DesktopAppInfo */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GioUnix.DesktopAppInfo */
    getActionName(actionName: string): string
    getBoolean(key: string): boolean
    getCategories(): string | null
    getFilename(): string | null
    getGenericName(): string | null
    getIsHidden(): boolean
    getKeywords(): string[]
    getLocaleString(key: string): string | null
    getNodisplay(): boolean
    getShowIn(desktopEnv?: string | null): boolean
    getStartupWmClass(): string | null
    getString(key: string): string | null
    getStringList(key: string): string[]
    hasKey(key: string): boolean
    launchAction(actionName: string, launchContext?: Gio.AppLaunchContext | null): void
    launchUrisAsManager(uris: string[], launchContext: Gio.AppLaunchContext | null, spawnFlags: GLib.SpawnFlags, userSetup?: GLib.SpawnChildSetupFunc | null, pidCallback?: DesktopAppLaunchCallback | null): boolean
    launchUrisAsManagerWithFds(uris: string[], launchContext: Gio.AppLaunchContext | null, spawnFlags: GLib.SpawnFlags, userSetup: GLib.SpawnChildSetupFunc | null, pidCallback: DesktopAppLaunchCallback | null, stdinFd: number, stdoutFd: number, stderrFd: number): boolean
    listActions(): string[]
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
    /* Methods of Gio.AppInfo */
    addSupportsType(contentType: string): boolean
    canDelete(): boolean
    canRemoveSupportsType(): boolean
    delete(): boolean
    dup(): Gio.AppInfo
    equal(appinfo2: Gio.AppInfo): boolean
    getCommandline(): string | null
    getDescription(): string | null
    getDisplayName(): string
    getExecutable(): string
    getIcon(): Gio.Icon | null
    getId(): string | null
    getName(): string
    getSupportedTypes(): string[]
    launch(files?: Gio.File[] | null, context?: Gio.AppLaunchContext | null): boolean
    launchUris(uris?: string[] | null, context?: Gio.AppLaunchContext | null): boolean
    launchUrisAsync(uris?: string[] | null, context?: Gio.AppLaunchContext | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    launchUrisFinish(result: Gio.AsyncResult): boolean
    removeSupportsType(contentType: string): boolean
    setAsDefaultForExtension(extension: string): boolean
    setAsDefaultForType(contentType: string): boolean
    setAsLastUsedForType(contentType: string): boolean
    shouldShow(): boolean
    supportsFiles(): boolean
    supportsUris(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DesktopAppInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DesktopAppInfo, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DesktopAppInfo_ConstructProps)
    _init (config?: DesktopAppInfo_ConstructProps): void
    static new(desktopId: string): DesktopAppInfo | null
    static newFromFilename(filename: string): DesktopAppInfo | null
    static newFromKeyfile(keyFile: GLib.KeyFile): DesktopAppInfo | null
    static getImplementations(interface: string): DesktopAppInfo[]
    static search(searchString: string): any
    static setDesktopEnv(desktopEnv: string): void
    static $gtype: GObject.Type
}
export interface FDMessage_ConstructProps extends Gio.SocketControlMessage_ConstructProps {
    fdList?: Gio.UnixFDList
}
export class FDMessage {
    /* Properties of GioUnix.FDMessage */
    /* Fields of GioUnix.FDMessage */
    parentInstance: Gio.SocketControlMessage
    priv: FDMessagePrivate
    /* Fields of Gio.SocketControlMessage */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GioUnix.FDMessage */
    appendFd(fd: number): boolean
    getFdList(): Gio.UnixFDList
    stealFds(): number[]
    /* Methods of Gio.SocketControlMessage */
    getLevel(): number
    getMsgType(): number
    getSize(): number
    serialize(data: object): void
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
    /* Virtual methods of Gio.SocketControlMessage */
    vfuncGetLevel?(): number
    vfuncGetSize?(): number
    vfuncGetType?(): number
    vfuncSerialize?(data: object): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FDMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FDMessage, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: FDMessage_ConstructProps)
    _init (config?: FDMessage_ConstructProps): void
    static new(): FDMessage
    static newWithFdList(fdList: Gio.UnixFDList): FDMessage
    static $gtype: GObject.Type
}
export interface InputStream_ConstructProps extends Gio.InputStream_ConstructProps {
    closeFd?: boolean
    fd?: number
}
export class InputStream {
    /* Properties of GioUnix.InputStream */
    closeFd: boolean
    /* Fields of GioUnix.InputStream */
    parentInstance: Gio.InputStream
    /* Fields of Gio.InputStream */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GioUnix.InputStream */
    getCloseFd(): boolean
    getFd(): number
    setCloseFd(closeFd: boolean): void
    /* Methods of Gio.InputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    readAll(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ any, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ any
    readAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ any
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readBytesFinish(result: Gio.AsyncResult): any
    readFinish(result: Gio.AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skipFinish(result: Gio.AsyncResult): number
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
    /* Methods of Gio.PollableInputStream */
    canPoll(): boolean
    createSource(cancellable?: Gio.Cancellable | null): GLib.Source
    isReadable(): boolean
    readNonblocking(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ any ]
    /* Methods of GioUnix.FileDescriptorBased */
    /* Virtual methods of Gio.InputStream */
    vfuncCloseAsync?(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: Gio.AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Gio.Cancellable | null): boolean
    vfuncReadAsync?(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ any | null
    vfuncReadFinish?(result: Gio.AsyncResult): number
    vfuncReadFn?(buffer: object | null, count: number, cancellable?: Gio.Cancellable | null): number
    vfuncSkip?(count: number, cancellable?: Gio.Cancellable | null): number
    vfuncSkipAsync?(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncSkipFinish?(result: Gio.AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::close-fd", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-fd", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InputStream_ConstructProps)
    _init (config?: InputStream_ConstructProps): void
    static new(fd: number, closeFd: boolean): InputStream
    static $gtype: GObject.Type
}
export interface MountMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
export class MountMonitor {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GioUnix.MountMonitor */
    setRateLimit(limitMsec: number): void
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
    /* Signals of GioUnix.MountMonitor */
    connect(sigName: "mountpoints-changed", callback: (($obj: MountMonitor) => void)): number
    connect_after(sigName: "mountpoints-changed", callback: (($obj: MountMonitor) => void)): number
    emit(sigName: "mountpoints-changed"): void
    on(sigName: "mountpoints-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mountpoints-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mountpoints-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "mounts-changed", callback: (($obj: MountMonitor) => void)): number
    connect_after(sigName: "mounts-changed", callback: (($obj: MountMonitor) => void)): number
    emit(sigName: "mounts-changed"): void
    on(sigName: "mounts-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "mounts-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "mounts-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MountMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MountMonitor, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: MountMonitor_ConstructProps)
    _init (config?: MountMonitor_ConstructProps): void
    static new(): MountMonitor
    static get(): MountMonitor
    static $gtype: GObject.Type
}
export interface OutputStream_ConstructProps extends Gio.OutputStream_ConstructProps {
    closeFd?: boolean
    fd?: number
}
export class OutputStream {
    /* Properties of GioUnix.OutputStream */
    closeFd: boolean
    /* Fields of GioUnix.OutputStream */
    parentInstance: Gio.OutputStream
    /* Fields of Gio.OutputStream */
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GioUnix.OutputStream */
    getCloseFd(): boolean
    getFd(): number
    setCloseFd(closeFd: boolean): void
    /* Methods of Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    flush(cancellable?: Gio.Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number
    spliceAsync(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    spliceFinish(result: Gio.AsyncResult): number
    write(buffer: any, cancellable?: Gio.Cancellable | null): number
    writeAll(buffer: any, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: any, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: any, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Gio.Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeBytesFinish(result: Gio.AsyncResult): number
    writeFinish(result: Gio.AsyncResult): number
    writev(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: Gio.OutputVector[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writevAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: Gio.OutputVector[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writevFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
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
    /* Methods of Gio.PollableOutputStream */
    canPoll(): boolean
    createSource(cancellable?: Gio.Cancellable | null): GLib.Source
    isWritable(): boolean
    writeNonblocking(buffer: any, cancellable?: Gio.Cancellable | null): number
    writevNonblocking(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.PollableReturn, /* bytesWritten */ number | null ]
    /* Methods of GioUnix.FileDescriptorBased */
    /* Virtual methods of Gio.OutputStream */
    vfuncCloseAsync?(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncCloseFinish?(result: Gio.AsyncResult): boolean
    vfuncCloseFn?(cancellable?: Gio.Cancellable | null): boolean
    vfuncFlush?(cancellable?: Gio.Cancellable | null): boolean
    vfuncFlushAsync?(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncFlushFinish?(result: Gio.AsyncResult): boolean
    vfuncSplice?(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number
    vfuncSpliceAsync?(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncSpliceFinish?(result: Gio.AsyncResult): number
    vfuncWriteAsync?(buffer: any | null, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncWriteFinish?(result: Gio.AsyncResult): number
    vfuncWriteFn?(buffer: any | null, cancellable?: Gio.Cancellable | null): number
    vfuncWritevAsync?(vectors: Gio.OutputVector[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncWritevFinish?(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    vfuncWritevFn?(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::close-fd", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-fd", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutputStream_ConstructProps)
    _init (config?: OutputStream_ConstructProps): void
    static new(fd: number, closeFd: boolean): OutputStream
    static $gtype: GObject.Type
}
export abstract class DesktopAppInfoClass {
    /* Fields of GioUnix.DesktopAppInfoClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class DesktopAppInfoLookupIface {
    /* Fields of GioUnix.DesktopAppInfoLookupIface */
    gIface: GObject.TypeInterface
    getDefaultForUriScheme: any
    static name: string
}
export abstract class FDMessageClass {
    /* Fields of GioUnix.FDMessageClass */
    parentClass: Gio.SocketControlMessageClass
    static name: string
}
export class FDMessagePrivate {
    static name: string
}
export abstract class FileDescriptorBasedIface {
    /* Fields of GioUnix.FileDescriptorBasedIface */
    gIface: GObject.TypeInterface
    getFd: any
    static name: string
}
export abstract class InputStreamClass {
    /* Fields of GioUnix.InputStreamClass */
    parentClass: Gio.InputStreamClass
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
    getDevicePath(): string
    getFsType(): string
    getMountPath(): string
    getOptions(): string | null
    getRootPath(): string | null
    guessCanEject(): boolean
    guessIcon(): Gio.Icon
    guessName(): string
    guessShouldDisplay(): boolean
    guessSymbolicIcon(): Gio.Icon
    isReadonly(): boolean
    isSystemInternal(): boolean
    static name: string
    static at(mountPath: string): [ /* returnType */ MountEntry | null, /* timeRead */ number | null ]
    static for(filePath: string): [ /* returnType */ MountEntry | null, /* timeRead */ number | null ]
}
export abstract class MountMonitorClass {
    static name: string
}
export class MountPoint {
    /* Methods of GioUnix.MountPoint */
    compare(mount2: MountPoint): number
    copy(): MountPoint
    free(): void
    getDevicePath(): string
    getFsType(): string
    getMountPath(): string
    getOptions(): string | null
    guessCanEject(): boolean
    guessIcon(): Gio.Icon
    guessName(): string
    guessSymbolicIcon(): Gio.Icon
    isLoopback(): boolean
    isReadonly(): boolean
    isUserMountable(): boolean
    static name: string
    static at(mountPath: string): [ /* returnType */ MountPoint | null, /* timeRead */ number | null ]
}
export abstract class OutputStreamClass {
    /* Fields of GioUnix.OutputStreamClass */
    parentClass: Gio.OutputStreamClass
    static name: string
}
export class OutputStreamPrivate {
    static name: string
}
}