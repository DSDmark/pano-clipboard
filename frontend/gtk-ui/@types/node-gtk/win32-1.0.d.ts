/**
 * win32-1.0
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />

declare namespace win32 {

export class MSG {
    static name: string
}
type HWND = number
type HICON = number
type HCURSOR = number
type HGDIOBJ = number
}