/**
 * GLibUnix-2.0
 */

/// <reference types="node" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />

declare namespace GLibUnix {

export enum PipeEnd {
    READ,
    WRITE,
}
export function closefrom(lowfd: number): number
export function errorQuark(): GLib.Quark
export function fdAddFull(priority: number, fd: number, condition: GLib.IOCondition, function_: GLib.UnixFDSourceFunc): number
export function fdSourceNew(fd: number, condition: GLib.IOCondition): GLib.Source
export function fdwalkSetCloexec(lowfd: number): number
export function getPasswdEntry(userName: string): object | null
export function openPipe(fds: number, flags: number): boolean
export function setFdNonblocking(fd: number, nonblock: boolean): boolean
export function signalAddFull(priority: number, signum: number, handler: GLib.SourceFunc): number
export function signalSourceNew(signum: number): GLib.Source
export interface FDSourceFunc {
    (fd: number, condition: GLib.IOCondition): boolean
}
export class Pipe {
    /* Fields of GLibUnix.Pipe */
    fds: number[]
    static name: string
}
}