import * as Gjs from "./Gjs";
import * as Adw1 from "./Adw-1";
import * as AppStream10 from "./AppStream-1.0";
import * as Atk10 from "./Atk-1.0";
import * as Atspi20 from "./Atspi-2.0";
import * as CloudProviders03 from "./CloudProviders-0.3";
import * as DBus10 from "./DBus-1.0";
import * as DBusGLib10 from "./DBusGLib-1.0";
import * as GIRepository30 from "./GIRepository-3.0";
import * as GL10 from "./GL-1.0";
import * as GLib20 from "./GLib-2.0";
import * as GLibUnix20 from "./GLibUnix-2.0";
import * as GModule20 from "./GModule-2.0";
import * as GObject20 from "./GObject-2.0";
import * as Gdk40 from "./Gdk-4.0";
import * as GdkPixbuf20 from "./GdkPixbuf-2.0";
import * as GdkPixdata20 from "./GdkPixdata-2.0";
import * as GdkWayland40 from "./GdkWayland-4.0";
import * as GdkX1140 from "./GdkX11-4.0";
import * as Gio20 from "./Gio-2.0";
import * as GioUnix20 from "./GioUnix-2.0";
import * as Gly2 from "./Gly-2";
import * as Graphene10 from "./Graphene-1.0";
import * as Gsk40 from "./Gsk-4.0";
import * as Gtk40 from "./Gtk-4.0";
import * as HarfBuzz00 from "./HarfBuzz-0.0";
import * as Pango10 from "./Pango-1.0";
import * as PangoCairo10 from "./PangoCairo-1.0";
import * as PangoFT210 from "./PangoFT2-1.0";
import * as PangoFc10 from "./PangoFc-1.0";
import * as PangoOT10 from "./PangoOT-1.0";
import * as PangoXft10 from "./PangoXft-1.0";
import * as Vulkan10 from "./Vulkan-1.0";
import * as Cairo10 from "./cairo-1.0";
import * as Fontconfig20 from "./fontconfig-2.0";
import * as Freetype220 from "./freetype2-2.0";
import * as Libxml220 from "./libxml2-2.0";
import * as Win3210 from "./win32-1.0";
import * as Xfixes40 from "./xfixes-4.0";
import * as Xft20 from "./xft-2.0";
import * as Xlib20 from "./xlib-2.0";
import * as Xrandr13 from "./xrandr-1.3";


declare global {
    function print(...args: any[]): void;
    function printerr(...args: any[]): void
    function log(message?: string): void
    function logError(exception: any, message?: string): void
    const ARGV: string[]
    const imports: typeof Gjs & {
        [key: string]: any
        gi: {
                    Adw: typeof Adw1;
                    AppStream: typeof AppStream10;
                    Atk: typeof Atk10;
                    Atspi: typeof Atspi20;
                    CloudProviders: typeof CloudProviders03;
                    DBus: typeof DBus10;
                    DBusGLib: typeof DBusGLib10;
                    GIRepository: typeof GIRepository30;
                    GL: typeof GL10;
                    GLib: typeof GLib20;
                    GLibUnix: typeof GLibUnix20;
                    GModule: typeof GModule20;
                    GObject: typeof GObject20;
                    Gdk: typeof Gdk40;
                    GdkPixbuf: typeof GdkPixbuf20;
                    GdkPixdata: typeof GdkPixdata20;
                    GdkWayland: typeof GdkWayland40;
                    GdkX11: typeof GdkX1140;
                    Gio: typeof Gio20;
                    GioUnix: typeof GioUnix20;
                    Gly: typeof Gly2;
                    Graphene: typeof Graphene10;
                    Gsk: typeof Gsk40;
                    Gtk: typeof Gtk40;
                    HarfBuzz: typeof HarfBuzz00;
                    Pango: typeof Pango10;
                    PangoCairo: typeof PangoCairo10;
                    PangoFT2: typeof PangoFT210;
                    PangoFc: typeof PangoFc10;
                    PangoOT: typeof PangoOT10;
                    PangoXft: typeof PangoXft10;
                    Vulkan: typeof Vulkan10;
                    cairo: typeof Cairo10;
                    fontconfig: typeof Fontconfig20;
                    freetype2: typeof Freetype220;
                    libxml2: typeof Libxml220;
                    win32: typeof Win3210;
                    xfixes: typeof Xfixes40;
                    xft: typeof Xft20;
                    xlib: typeof Xlib20;
                    xrandr: typeof Xrandr13;
                  }
        searchPath: string[];
    }
}

export { imports }
