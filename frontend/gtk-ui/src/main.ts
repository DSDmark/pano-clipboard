import Gio from "gi://Gio";
import Gtk from "gi://Gtk?version=4.0";
import Adw from "gi://Adw?version=1";
import {
  Application,
  ApplicationWindow,
  Box,
  Button,
  Entry,
  Label,
  ListBox,
  Popover,
} from "gi://Gtk?version=4.0";

import { DBusProxy } from "gi://Gio";

import AppIndicator from "gi://AppIndicator3?version=0.1";

interface ClipboardItem {
  type: "text" | "image";
  content: string;
}

class ClipboardApp extends Adw.Application {
  private window: ApplicationWindow;
  private popover: Popover;
  private indicator: AppIndicator.Indicator;
  private dbusProxy: DBusProxy;
  private history: ClipboardItem[] = [];

  constructor() {
    super({
      application_id: "com.yourdomain.clipboardmanager",
      flags: Gio.ApplicationFlags.FLAGS_NONE,
    });

    // Set up tray icon
    this.indicator = AppIndicator.Indicator.new(
      "clipboard-manager",
      "edit-paste-symbolic",
      AppIndicator.IndicatorCategory.APPLICATION_STATUS,
    );
    this.indicator.set_status(AppIndicator.IndicatorStatus.ACTIVE);

    // Create popover for clipboard UI
    this.popover = new Gtk.Popover();
    const box = new Gtk.Box({
      orientation: Gtk.Orientation.VERTICAL,
      spacing: 10,
    });
    this.popover.set_child(box);

    // Search entry
    const search = new Gtk.Entry({ placeholder_text: "Search clipboard..." });
    search.connect("changed", this.refreshUI.bind(this));
    box.append(search);

    // List for history
    const list = new Gtk.ListBox();
    box.append(list);

    // Clear button
    const clearBtn = new Gtk.Button({ label: "Clear All" });
    clearBtn.connect("clicked", this.clearHistory.bind(this));
    box.append(clearBtn);

    // Attach popover to tray (on click)
    this.indicator.set_menu(this.popover); // Note: AppIndicator uses menu, but we can hack popover

    // Set up DBus proxy for Rust backend
    this.dbusProxy = Gio.DBusProxy.new_sync(
      Gio.DBus.session,
      Gio.DBusProxyFlags.NONE,
      null,
      "org.yourdomain.ClipboardDaemon",
      "/org/yourdomain/ClipboardDaemon",
      "org.yourdomain.ClipboardDaemon",
      null,
    );

    // Listen for updates
    this.dbusProxy.connect_signal(
      "HistoryUpdated",
      this.loadHistory.bind(this),
    );

    // Initial load
    this.loadHistory();
  }

  // ... (methods in next steps)
}

function main(argv: string[]): number {
  const app = new ClipboardApp();
  return app.run(argv);
}

main(ARGV); // GJS entry
