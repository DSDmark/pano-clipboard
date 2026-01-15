/**
 * GLibUnix-2.0
 */

import * as Gjs from './Gjs';
import * as GLib from './GLib-2.0';
import * as GObject from './GObject-2.0';

export enum PipeEnd {
    READ,
    WRITE,
}
export function closefrom(lowfd: number): number
export function error_quark(): GLib.Quark
export function fd_add_full(priority: number, fd: number, condition: GLib.IOCondition, function_: GLib.UnixFDSourceFunc): number
export function fd_source_new(fd: number, condition: GLib.IOCondition): GLib.Source
export function fdwalk_set_cloexec(lowfd: number): number
export function get_passwd_entry(user_name: string): object | null
export function open_pipe(fds: number, flags: number): boolean
export function set_fd_nonblocking(fd: number, nonblock: boolean): boolean
export function signal_add_full(priority: number, signum: number, handler: GLib.SourceFunc): number
export function signal_source_new(signum: number): GLib.Source
export interface FDSourceFunc {
    (fd: number, condition: GLib.IOCondition): boolean
}
export class Pipe {
    /* Fields of GLibUnix.Pipe */
    fds: number[]
    static name: string
}