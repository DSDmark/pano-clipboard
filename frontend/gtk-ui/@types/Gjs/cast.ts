import * as GObject from './GObject-2.0';

const inheritanceTable = {
    'Adw.AboutDialog': [
        'Adw.Dialog',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.ShortcutManager',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.AboutWindow': [
        'Adw.Window',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Native',
        'Gtk.Root',
        'Gtk.ShortcutManager',
        'Gtk.Window',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.ActionRow': [
        'Adw.PreferencesRow',
        'Gtk.Accessible',
        'Gtk.Actionable',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.ListBoxRow',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.AlertDialog': [
        'Adw.Dialog',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.ShortcutManager',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.Animation': [
        'GObject.Object',
    ],
    'Adw.AnimationTarget': [
        'GObject.Object',
    ],
    'Adw.Application': [
        'Gtk.Application',
        'Gio.ActionGroup',
        'Gio.ActionMap',
        'Gio.Application',
        'GObject.Object',
    ],
    'Adw.ApplicationWindow': [
        'Gtk.ApplicationWindow',
        'Gio.ActionGroup',
        'Gio.ActionMap',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Native',
        'Gtk.Root',
        'Gtk.ShortcutManager',
        'Gtk.Window',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.Avatar': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.Banner': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Actionable',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.Bin': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.BottomSheet': [
        'Gtk.Widget',
        'Adw.Swipeable',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.Breakpoint': [
        'GObject.Object',
        'Gtk.Buildable',
    ],
    'Adw.BreakpointBin': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.ButtonContent': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.ButtonRow': [
        'Adw.PreferencesRow',
        'Gtk.Accessible',
        'Gtk.Actionable',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.ListBoxRow',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.CallbackAnimationTarget': [
        'Adw.AnimationTarget',
        'GObject.Object',
    ],
    'Adw.Carousel': [
        'Gtk.Widget',
        'Adw.Swipeable',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.CarouselIndicatorDots': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.CarouselIndicatorLines': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.Clamp': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.ClampLayout': [
        'Gtk.LayoutManager',
        'Gtk.Orientable',
        'GObject.Object',
    ],
    'Adw.ClampScrollable': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'Gtk.Scrollable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.ComboRow': [
        'Adw.ActionRow',
        'Gtk.Accessible',
        'Gtk.Actionable',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Adw.PreferencesRow',
        'Gtk.ListBoxRow',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.Dialog': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.ShortcutManager',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.EntryRow': [
        'Adw.PreferencesRow',
        'Gtk.Accessible',
        'Gtk.Actionable',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Editable',
        'Gtk.ListBoxRow',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.EnumListItem': [
        'GObject.Object',
    ],
    'Adw.EnumListModel': [
        'GObject.Object',
        'Gio.ListModel',
    ],
    'Adw.ExpanderRow': [
        'Adw.PreferencesRow',
        'Gtk.Accessible',
        'Gtk.Actionable',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.ListBoxRow',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.Flap': [
        'Gtk.Widget',
        'Adw.Swipeable',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.HeaderBar': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.InlineViewSwitcher': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.Layout': [
        'GObject.Object',
        'Gtk.Buildable',
    ],
    'Adw.LayoutSlot': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.Leaflet': [
        'Gtk.Widget',
        'Adw.Swipeable',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.LeafletPage': [
        'GObject.Object',
    ],
    'Adw.MessageDialog': [
        'Gtk.Window',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Native',
        'Gtk.Root',
        'Gtk.ShortcutManager',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.MultiLayoutView': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.NavigationPage': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.NavigationSplitView': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.NavigationView': [
        'Gtk.Widget',
        'Adw.Swipeable',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.OverlaySplitView': [
        'Gtk.Widget',
        'Adw.Swipeable',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.PasswordEntryRow': [
        'Adw.EntryRow',
        'Gtk.Accessible',
        'Gtk.Actionable',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Editable',
        'Adw.PreferencesRow',
        'Gtk.ListBoxRow',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.PreferencesDialog': [
        'Adw.Dialog',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.ShortcutManager',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.PreferencesGroup': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.PreferencesPage': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.PreferencesRow': [
        'Gtk.ListBoxRow',
        'Gtk.Accessible',
        'Gtk.Actionable',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.PreferencesWindow': [
        'Adw.Window',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Native',
        'Gtk.Root',
        'Gtk.ShortcutManager',
        'Gtk.Window',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.PropertyAnimationTarget': [
        'Adw.AnimationTarget',
        'GObject.Object',
    ],
    'Adw.ShortcutLabel': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.ShortcutsDialog': [
        'Adw.Dialog',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.ShortcutManager',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.ShortcutsItem': [
        'GObject.Object',
    ],
    'Adw.ShortcutsSection': [
        'GObject.Object',
        'Gio.ListModel',
        'Gtk.Buildable',
    ],
    'Adw.SpinRow': [
        'Adw.ActionRow',
        'Gtk.Accessible',
        'Gtk.Actionable',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Editable',
        'Adw.PreferencesRow',
        'Gtk.ListBoxRow',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.Spinner': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.SpinnerPaintable': [
        'GObject.Object',
        'Gdk.Paintable',
        'Gtk.SymbolicPaintable',
    ],
    'Adw.SplitButton': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Actionable',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.SpringAnimation': [
        'Adw.Animation',
        'GObject.Object',
    ],
    'Adw.Squeezer': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.SqueezerPage': [
        'GObject.Object',
    ],
    'Adw.StatusPage': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.StyleManager': [
        'GObject.Object',
    ],
    'Adw.SwipeTracker': [
        'GObject.Object',
        'Gtk.Orientable',
    ],
    'Adw.SwitchRow': [
        'Adw.ActionRow',
        'Gtk.Accessible',
        'Gtk.Actionable',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Adw.PreferencesRow',
        'Gtk.ListBoxRow',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.TabBar': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.TabButton': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Actionable',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.TabOverview': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.TabPage': [
        'GObject.Object',
        'Gtk.Accessible',
    ],
    'Adw.TabView': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.TimedAnimation': [
        'Adw.Animation',
        'GObject.Object',
    ],
    'Adw.Toast': [
        'GObject.Object',
    ],
    'Adw.ToastOverlay': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.Toggle': [
        'GObject.Object',
    ],
    'Adw.ToggleGroup': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.ToolbarView': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.ViewStack': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.ViewStackPage': [
        'GObject.Object',
        'Gtk.Accessible',
    ],
    'Adw.ViewStackPages': [
        'GObject.Object',
        'Gio.ListModel',
        'Gtk.SelectionModel',
    ],
    'Adw.ViewSwitcher': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.ViewSwitcherBar': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.ViewSwitcherTitle': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.Window': [
        'Gtk.Window',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Native',
        'Gtk.Root',
        'Gtk.ShortcutManager',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.WindowTitle': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.WrapBox': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Adw.WrapLayout': [
        'Gtk.LayoutManager',
        'Gtk.Orientable',
        'GObject.Object',
    ],
    'AppStream.Agreement': [
        'GObject.Object',
    ],
    'AppStream.AgreementSection': [
        'GObject.Object',
    ],
    'AppStream.Artifact': [
        'GObject.Object',
    ],
    'AppStream.Branding': [
        'GObject.Object',
    ],
    'AppStream.Bundle': [
        'GObject.Object',
    ],
    'AppStream.Category': [
        'GObject.Object',
    ],
    'AppStream.Checksum': [
        'GObject.Object',
    ],
    'AppStream.Component': [
        'GObject.Object',
    ],
    'AppStream.ComponentBox': [
        'GObject.Object',
    ],
    'AppStream.ContentRating': [
        'GObject.Object',
    ],
    'AppStream.Context': [
        'GObject.Object',
    ],
    'AppStream.Developer': [
        'GObject.Object',
    ],
    'AppStream.Icon': [
        'GObject.Object',
    ],
    'AppStream.Image': [
        'GObject.Object',
    ],
    'AppStream.Issue': [
        'GObject.Object',
    ],
    'AppStream.Launchable': [
        'GObject.Object',
    ],
    'AppStream.Metadata': [
        'GObject.Object',
    ],
    'AppStream.Pool': [
        'GObject.Object',
    ],
    'AppStream.Provided': [
        'GObject.Object',
    ],
    'AppStream.Reference': [
        'GObject.Object',
    ],
    'AppStream.Relation': [
        'GObject.Object',
    ],
    'AppStream.RelationCheckResult': [
        'GObject.Object',
    ],
    'AppStream.Release': [
        'GObject.Object',
    ],
    'AppStream.ReleaseList': [
        'GObject.Object',
    ],
    'AppStream.Review': [
        'GObject.Object',
    ],
    'AppStream.Screenshot': [
        'GObject.Object',
    ],
    'AppStream.Suggested': [
        'GObject.Object',
    ],
    'AppStream.SystemInfo': [
        'GObject.Object',
    ],
    'AppStream.Translation': [
        'GObject.Object',
    ],
    'AppStream.Validator': [
        'GObject.Object',
    ],
    'AppStream.ValidatorIssue': [
        'GObject.Object',
    ],
    'AppStream.Video': [
        'GObject.Object',
    ],
    'Atk.GObjectAccessible': [
        'Atk.Object',
        'GObject.Object',
    ],
    'Atk.Hyperlink': [
        'GObject.Object',
        'Atk.Action',
    ],
    'Atk.Misc': [
        'GObject.Object',
    ],
    'Atk.NoOpObject': [
        'Atk.Object',
        'Atk.Action',
        'Atk.Component',
        'Atk.Document',
        'Atk.EditableText',
        'Atk.Hypertext',
        'Atk.Image',
        'Atk.Selection',
        'Atk.Table',
        'Atk.TableCell',
        'Atk.Text',
        'Atk.Value',
        'Atk.Window',
        'GObject.Object',
    ],
    'Atk.NoOpObjectFactory': [
        'Atk.ObjectFactory',
        'GObject.Object',
    ],
    'Atk.Object': [
        'GObject.Object',
    ],
    'Atk.ObjectFactory': [
        'GObject.Object',
    ],
    'Atk.Plug': [
        'Atk.Object',
        'Atk.Component',
        'GObject.Object',
    ],
    'Atk.Registry': [
        'GObject.Object',
    ],
    'Atk.Relation': [
        'GObject.Object',
    ],
    'Atk.RelationSet': [
        'GObject.Object',
    ],
    'Atk.Socket': [
        'Atk.Object',
        'Atk.Component',
        'GObject.Object',
    ],
    'Atk.StateSet': [
        'GObject.Object',
    ],
    'Atk.Util': [
        'GObject.Object',
    ],
    'Atspi.Accessible': [
        'Atspi.Object',
        'Atspi.Action',
        'Atspi.Collection',
        'Atspi.Component',
        'Atspi.Document',
        'Atspi.EditableText',
        'Atspi.Hypertext',
        'Atspi.Image',
        'Atspi.Selection',
        'Atspi.Table',
        'Atspi.TableCell',
        'Atspi.Text',
        'Atspi.Value',
        'GObject.Object',
    ],
    'Atspi.Application': [
        'GObject.Object',
    ],
    'Atspi.Device': [
        'GObject.Object',
    ],
    'Atspi.DeviceA11yManager': [
        'Atspi.Device',
        'GObject.Object',
    ],
    'Atspi.DeviceLegacy': [
        'Atspi.Device',
        'GObject.Object',
    ],
    'Atspi.DeviceListener': [
        'GObject.Object',
    ],
    'Atspi.DeviceX11': [
        'Atspi.Device',
        'GObject.Object',
    ],
    'Atspi.EventListener': [
        'GObject.Object',
    ],
    'Atspi.Hyperlink': [
        'Atspi.Object',
        'GObject.Object',
    ],
    'Atspi.MatchRule': [
        'GObject.Object',
    ],
    'Atspi.Object': [
        'GObject.Object',
    ],
    'Atspi.Relation': [
        'GObject.Object',
    ],
    'Atspi.StateSet': [
        'GObject.Object',
    ],
    'CloudProviders.Account': [
        'GObject.Object',
    ],
    'CloudProviders.AccountExporter': [
        'GObject.Object',
    ],
    'CloudProviders.Collector': [
        'GObject.Object',
    ],
    'CloudProviders.DbusAccountProxy': [
        'Gio.DBusProxy',
        'CloudProviders.DbusAccount',
        'Gio.AsyncInitable',
        'Gio.DBusInterface',
        'Gio.Initable',
        'GObject.Object',
    ],
    'CloudProviders.DbusAccountSkeleton': [
        'Gio.DBusInterfaceSkeleton',
        'CloudProviders.DbusAccount',
        'Gio.DBusInterface',
        'GObject.Object',
    ],
    'CloudProviders.DbusObjectManagerClient': [
        'Gio.DBusObjectManagerClient',
        'Gio.AsyncInitable',
        'Gio.DBusObjectManager',
        'Gio.Initable',
        'GObject.Object',
    ],
    'CloudProviders.DbusObjectProxy': [
        'Gio.DBusObjectProxy',
        'CloudProviders.DbusObject',
        'Gio.DBusObject',
        'GObject.Object',
    ],
    'CloudProviders.DbusObjectSkeleton': [
        'Gio.DBusObjectSkeleton',
        'CloudProviders.DbusObject',
        'Gio.DBusObject',
        'GObject.Object',
    ],
    'CloudProviders.DbusProviderProxy': [
        'Gio.DBusProxy',
        'CloudProviders.DbusProvider',
        'Gio.AsyncInitable',
        'Gio.DBusInterface',
        'Gio.Initable',
        'GObject.Object',
    ],
    'CloudProviders.DbusProviderSkeleton': [
        'Gio.DBusInterfaceSkeleton',
        'CloudProviders.DbusProvider',
        'Gio.DBusInterface',
        'GObject.Object',
    ],
    'CloudProviders.Provider': [
        'GObject.Object',
    ],
    'CloudProviders.ProviderExporter': [
        'GObject.Object',
    ],
    'DBusGLib.Proxy': [
        'GObject.Object',
    ],
    'GIRepository.ArgInfo': [
        'GIRepository.BaseInfo',
    ],
    'GIRepository.CallableInfo': [
        'GIRepository.BaseInfo',
    ],
    'GIRepository.CallbackInfo': [
        'GIRepository.CallableInfo',
        'GIRepository.BaseInfo',
    ],
    'GIRepository.ConstantInfo': [
        'GIRepository.BaseInfo',
    ],
    'GIRepository.EnumInfo': [
        'GIRepository.RegisteredTypeInfo',
        'GIRepository.BaseInfo',
    ],
    'GIRepository.FieldInfo': [
        'GIRepository.BaseInfo',
    ],
    'GIRepository.FlagsInfo': [
        'GIRepository.EnumInfo',
        'GIRepository.RegisteredTypeInfo',
        'GIRepository.BaseInfo',
    ],
    'GIRepository.FunctionInfo': [
        'GIRepository.CallableInfo',
        'GIRepository.BaseInfo',
    ],
    'GIRepository.InterfaceInfo': [
        'GIRepository.RegisteredTypeInfo',
        'GIRepository.BaseInfo',
    ],
    'GIRepository.ObjectInfo': [
        'GIRepository.RegisteredTypeInfo',
        'GIRepository.BaseInfo',
    ],
    'GIRepository.PropertyInfo': [
        'GIRepository.BaseInfo',
    ],
    'GIRepository.RegisteredTypeInfo': [
        'GIRepository.BaseInfo',
    ],
    'GIRepository.Repository': [
        'GObject.Object',
    ],
    'GIRepository.SignalInfo': [
        'GIRepository.CallableInfo',
        'GIRepository.BaseInfo',
    ],
    'GIRepository.StructInfo': [
        'GIRepository.RegisteredTypeInfo',
        'GIRepository.BaseInfo',
    ],
    'GIRepository.TypeInfo': [
        'GIRepository.BaseInfo',
    ],
    'GIRepository.UnionInfo': [
        'GIRepository.RegisteredTypeInfo',
        'GIRepository.BaseInfo',
    ],
    'GIRepository.UnresolvedInfo': [
        'GIRepository.BaseInfo',
    ],
    'GIRepository.VFuncInfo': [
        'GIRepository.CallableInfo',
        'GIRepository.BaseInfo',
    ],
    'GIRepository.ValueInfo': [
        'GIRepository.BaseInfo',
    ],
    'GObject.Binding': [
        'GObject.Object',
    ],
    'GObject.BindingGroup': [
        'GObject.Object',
    ],
    'GObject.InitiallyUnowned': [
        'GObject.Object',
    ],
    'GObject.ParamSpecBoolean': [
        'GObject.ParamSpec',
    ],
    'GObject.ParamSpecBoxed': [
        'GObject.ParamSpec',
    ],
    'GObject.ParamSpecChar': [
        'GObject.ParamSpec',
    ],
    'GObject.ParamSpecDouble': [
        'GObject.ParamSpec',
    ],
    'GObject.ParamSpecEnum': [
        'GObject.ParamSpec',
    ],
    'GObject.ParamSpecFlags': [
        'GObject.ParamSpec',
    ],
    'GObject.ParamSpecFloat': [
        'GObject.ParamSpec',
    ],
    'GObject.ParamSpecGType': [
        'GObject.ParamSpec',
    ],
    'GObject.ParamSpecInt': [
        'GObject.ParamSpec',
    ],
    'GObject.ParamSpecInt64': [
        'GObject.ParamSpec',
    ],
    'GObject.ParamSpecLong': [
        'GObject.ParamSpec',
    ],
    'GObject.ParamSpecObject': [
        'GObject.ParamSpec',
    ],
    'GObject.ParamSpecOverride': [
        'GObject.ParamSpec',
    ],
    'GObject.ParamSpecParam': [
        'GObject.ParamSpec',
    ],
    'GObject.ParamSpecPointer': [
        'GObject.ParamSpec',
    ],
    'GObject.ParamSpecString': [
        'GObject.ParamSpec',
    ],
    'GObject.ParamSpecUChar': [
        'GObject.ParamSpec',
    ],
    'GObject.ParamSpecUInt': [
        'GObject.ParamSpec',
    ],
    'GObject.ParamSpecUInt64': [
        'GObject.ParamSpec',
    ],
    'GObject.ParamSpecULong': [
        'GObject.ParamSpec',
    ],
    'GObject.ParamSpecUnichar': [
        'GObject.ParamSpec',
    ],
    'GObject.ParamSpecValueArray': [
        'GObject.ParamSpec',
    ],
    'GObject.ParamSpecVariant': [
        'GObject.ParamSpec',
    ],
    'GObject.SignalGroup': [
        'GObject.Object',
    ],
    'GObject.TypeModule': [
        'GObject.Object',
        'GObject.TypePlugin',
    ],
    'Gdk.AppLaunchContext': [
        'Gio.AppLaunchContext',
        'GObject.Object',
    ],
    'Gdk.ButtonEvent': [
        'Gdk.Event',
    ],
    'Gdk.CairoContext': [
        'Gdk.DrawContext',
        'GObject.Object',
    ],
    'Gdk.CicpParams': [
        'GObject.Object',
    ],
    'Gdk.Clipboard': [
        'GObject.Object',
    ],
    'Gdk.ContentDeserializer': [
        'GObject.Object',
        'Gio.AsyncResult',
    ],
    'Gdk.ContentProvider': [
        'GObject.Object',
    ],
    'Gdk.ContentSerializer': [
        'GObject.Object',
        'Gio.AsyncResult',
    ],
    'Gdk.CrossingEvent': [
        'Gdk.Event',
    ],
    'Gdk.Cursor': [
        'GObject.Object',
    ],
    'Gdk.DNDEvent': [
        'Gdk.Event',
    ],
    'Gdk.DeleteEvent': [
        'Gdk.Event',
    ],
    'Gdk.Device': [
        'GObject.Object',
    ],
    'Gdk.DeviceTool': [
        'GObject.Object',
    ],
    'Gdk.Display': [
        'GObject.Object',
    ],
    'Gdk.DisplayManager': [
        'GObject.Object',
    ],
    'Gdk.DmabufTexture': [
        'Gdk.Texture',
        'Gdk.Paintable',
        'Gio.Icon',
        'Gio.LoadableIcon',
        'GObject.Object',
    ],
    'Gdk.DmabufTextureBuilder': [
        'GObject.Object',
    ],
    'Gdk.Drag': [
        'GObject.Object',
    ],
    'Gdk.DrawContext': [
        'GObject.Object',
    ],
    'Gdk.Drop': [
        'GObject.Object',
    ],
    'Gdk.FocusEvent': [
        'Gdk.Event',
    ],
    'Gdk.FrameClock': [
        'GObject.Object',
    ],
    'Gdk.GLContext': [
        'Gdk.DrawContext',
        'GObject.Object',
    ],
    'Gdk.GLTexture': [
        'Gdk.Texture',
        'Gdk.Paintable',
        'Gio.Icon',
        'Gio.LoadableIcon',
        'GObject.Object',
    ],
    'Gdk.GLTextureBuilder': [
        'GObject.Object',
    ],
    'Gdk.GrabBrokenEvent': [
        'Gdk.Event',
    ],
    'Gdk.KeyEvent': [
        'Gdk.Event',
    ],
    'Gdk.MemoryTexture': [
        'Gdk.Texture',
        'Gdk.Paintable',
        'Gio.Icon',
        'Gio.LoadableIcon',
        'GObject.Object',
    ],
    'Gdk.MemoryTextureBuilder': [
        'GObject.Object',
    ],
    'Gdk.Monitor': [
        'GObject.Object',
    ],
    'Gdk.MotionEvent': [
        'Gdk.Event',
    ],
    'Gdk.PadEvent': [
        'Gdk.Event',
    ],
    'Gdk.ProximityEvent': [
        'Gdk.Event',
    ],
    'Gdk.ScrollEvent': [
        'Gdk.Event',
    ],
    'Gdk.Seat': [
        'GObject.Object',
    ],
    'Gdk.Snapshot': [
        'GObject.Object',
    ],
    'Gdk.Surface': [
        'GObject.Object',
    ],
    'Gdk.Texture': [
        'GObject.Object',
        'Gdk.Paintable',
        'Gio.Icon',
        'Gio.LoadableIcon',
    ],
    'Gdk.TouchEvent': [
        'Gdk.Event',
    ],
    'Gdk.TouchpadEvent': [
        'Gdk.Event',
    ],
    'Gdk.VulkanContext': [
        'Gdk.DrawContext',
        'GObject.Object',
    ],
    'GdkPixbuf.Pixbuf': [
        'GObject.Object',
        'Gio.Icon',
        'Gio.LoadableIcon',
    ],
    'GdkPixbuf.PixbufAnimation': [
        'GObject.Object',
    ],
    'GdkPixbuf.PixbufAnimationIter': [
        'GObject.Object',
    ],
    'GdkPixbuf.PixbufLoader': [
        'GObject.Object',
    ],
    'GdkPixbuf.PixbufNonAnim': [
        'GdkPixbuf.PixbufAnimation',
        'GObject.Object',
    ],
    'GdkPixbuf.PixbufSimpleAnim': [
        'GdkPixbuf.PixbufAnimation',
        'GObject.Object',
    ],
    'GdkPixbuf.PixbufSimpleAnimIter': [
        'GdkPixbuf.PixbufAnimationIter',
        'GObject.Object',
    ],
    'GdkWayland.WaylandDevice': [
        'Gdk.Device',
        'GObject.Object',
    ],
    'GdkWayland.WaylandDisplay': [
        'Gdk.Display',
        'GObject.Object',
    ],
    'GdkWayland.WaylandGLContext': [
        'Gdk.GLContext',
        'Gdk.DrawContext',
        'GObject.Object',
    ],
    'GdkWayland.WaylandMonitor': [
        'Gdk.Monitor',
        'GObject.Object',
    ],
    'GdkWayland.WaylandPopup': [
        'GdkWayland.WaylandSurface',
        'Gdk.Popup',
        'Gdk.Surface',
        'GObject.Object',
    ],
    'GdkWayland.WaylandSeat': [
        'Gdk.Seat',
        'GObject.Object',
    ],
    'GdkWayland.WaylandSurface': [
        'Gdk.Surface',
        'GObject.Object',
    ],
    'GdkWayland.WaylandToplevel': [
        'GdkWayland.WaylandSurface',
        'Gdk.Toplevel',
        'Gdk.Surface',
        'GObject.Object',
    ],
    'GdkX11.X11AppLaunchContext': [
        'Gdk.AppLaunchContext',
        'Gio.AppLaunchContext',
        'GObject.Object',
    ],
    'GdkX11.X11DeviceManagerXI2': [
        'GObject.Object',
    ],
    'GdkX11.X11DeviceXI2': [
        'Gdk.Device',
        'GObject.Object',
    ],
    'GdkX11.X11Display': [
        'Gdk.Display',
        'GObject.Object',
    ],
    'GdkX11.X11Drag': [
        'Gdk.Drag',
        'GObject.Object',
    ],
    'GdkX11.X11GLContext': [
        'Gdk.GLContext',
        'Gdk.DrawContext',
        'GObject.Object',
    ],
    'GdkX11.X11Monitor': [
        'Gdk.Monitor',
        'GObject.Object',
    ],
    'GdkX11.X11Screen': [
        'GObject.Object',
    ],
    'GdkX11.X11Surface': [
        'Gdk.Surface',
        'GObject.Object',
    ],
    'Gio.AppInfoMonitor': [
        'GObject.Object',
    ],
    'Gio.AppLaunchContext': [
        'GObject.Object',
    ],
    'Gio.Application': [
        'GObject.Object',
        'Gio.ActionGroup',
        'Gio.ActionMap',
    ],
    'Gio.ApplicationCommandLine': [
        'GObject.Object',
    ],
    'Gio.BufferedInputStream': [
        'Gio.FilterInputStream',
        'Gio.Seekable',
        'Gio.InputStream',
        'GObject.Object',
    ],
    'Gio.BufferedOutputStream': [
        'Gio.FilterOutputStream',
        'Gio.Seekable',
        'Gio.OutputStream',
        'GObject.Object',
    ],
    'Gio.BytesIcon': [
        'GObject.Object',
        'Gio.Icon',
        'Gio.LoadableIcon',
    ],
    'Gio.Cancellable': [
        'GObject.Object',
    ],
    'Gio.CharsetConverter': [
        'GObject.Object',
        'Gio.Converter',
        'Gio.Initable',
    ],
    'Gio.ConverterInputStream': [
        'Gio.FilterInputStream',
        'Gio.PollableInputStream',
        'Gio.InputStream',
        'GObject.Object',
    ],
    'Gio.ConverterOutputStream': [
        'Gio.FilterOutputStream',
        'Gio.PollableOutputStream',
        'Gio.OutputStream',
        'GObject.Object',
    ],
    'Gio.Credentials': [
        'GObject.Object',
    ],
    'Gio.DBusActionGroup': [
        'GObject.Object',
        'Gio.ActionGroup',
        'Gio.RemoteActionGroup',
    ],
    'Gio.DBusAuthObserver': [
        'GObject.Object',
    ],
    'Gio.DBusConnection': [
        'GObject.Object',
        'Gio.AsyncInitable',
        'Gio.Initable',
    ],
    'Gio.DBusInterfaceSkeleton': [
        'GObject.Object',
        'Gio.DBusInterface',
    ],
    'Gio.DBusMenuModel': [
        'Gio.MenuModel',
        'GObject.Object',
    ],
    'Gio.DBusMessage': [
        'GObject.Object',
    ],
    'Gio.DBusMethodInvocation': [
        'GObject.Object',
    ],
    'Gio.DBusObjectManagerClient': [
        'GObject.Object',
        'Gio.AsyncInitable',
        'Gio.DBusObjectManager',
        'Gio.Initable',
    ],
    'Gio.DBusObjectManagerServer': [
        'GObject.Object',
        'Gio.DBusObjectManager',
    ],
    'Gio.DBusObjectProxy': [
        'GObject.Object',
        'Gio.DBusObject',
    ],
    'Gio.DBusObjectSkeleton': [
        'GObject.Object',
        'Gio.DBusObject',
    ],
    'Gio.DBusProxy': [
        'GObject.Object',
        'Gio.AsyncInitable',
        'Gio.DBusInterface',
        'Gio.Initable',
    ],
    'Gio.DBusServer': [
        'GObject.Object',
        'Gio.Initable',
    ],
    'Gio.DataInputStream': [
        'Gio.BufferedInputStream',
        'Gio.Seekable',
        'Gio.FilterInputStream',
        'Gio.InputStream',
        'GObject.Object',
    ],
    'Gio.DataOutputStream': [
        'Gio.FilterOutputStream',
        'Gio.Seekable',
        'Gio.OutputStream',
        'GObject.Object',
    ],
    'Gio.DebugControllerDBus': [
        'GObject.Object',
        'Gio.DebugController',
        'Gio.Initable',
    ],
    'Gio.Emblem': [
        'GObject.Object',
        'Gio.Icon',
    ],
    'Gio.EmblemedIcon': [
        'GObject.Object',
        'Gio.Icon',
    ],
    'Gio.FileEnumerator': [
        'GObject.Object',
    ],
    'Gio.FileIOStream': [
        'Gio.IOStream',
        'Gio.Seekable',
        'GObject.Object',
    ],
    'Gio.FileIcon': [
        'GObject.Object',
        'Gio.Icon',
        'Gio.LoadableIcon',
    ],
    'Gio.FileInfo': [
        'GObject.Object',
    ],
    'Gio.FileInputStream': [
        'Gio.InputStream',
        'Gio.Seekable',
        'GObject.Object',
    ],
    'Gio.FileMonitor': [
        'GObject.Object',
    ],
    'Gio.FileOutputStream': [
        'Gio.OutputStream',
        'Gio.Seekable',
        'GObject.Object',
    ],
    'Gio.FilenameCompleter': [
        'GObject.Object',
    ],
    'Gio.FilterInputStream': [
        'Gio.InputStream',
        'GObject.Object',
    ],
    'Gio.FilterOutputStream': [
        'Gio.OutputStream',
        'GObject.Object',
    ],
    'Gio.IOModule': [
        'GObject.TypeModule',
        'GObject.TypePlugin',
        'GObject.Object',
    ],
    'Gio.IOStream': [
        'GObject.Object',
    ],
    'Gio.InetAddress': [
        'GObject.Object',
    ],
    'Gio.InetAddressMask': [
        'GObject.Object',
        'Gio.Initable',
    ],
    'Gio.InetSocketAddress': [
        'Gio.SocketAddress',
        'Gio.SocketConnectable',
        'GObject.Object',
    ],
    'Gio.InputStream': [
        'GObject.Object',
    ],
    'Gio.ListStore': [
        'GObject.Object',
        'Gio.ListModel',
    ],
    'Gio.MemoryInputStream': [
        'Gio.InputStream',
        'Gio.PollableInputStream',
        'Gio.Seekable',
        'GObject.Object',
    ],
    'Gio.MemoryOutputStream': [
        'Gio.OutputStream',
        'Gio.PollableOutputStream',
        'Gio.Seekable',
        'GObject.Object',
    ],
    'Gio.Menu': [
        'Gio.MenuModel',
        'GObject.Object',
    ],
    'Gio.MenuAttributeIter': [
        'GObject.Object',
    ],
    'Gio.MenuItem': [
        'GObject.Object',
    ],
    'Gio.MenuLinkIter': [
        'GObject.Object',
    ],
    'Gio.MenuModel': [
        'GObject.Object',
    ],
    'Gio.MountOperation': [
        'GObject.Object',
    ],
    'Gio.NativeSocketAddress': [
        'Gio.SocketAddress',
        'Gio.SocketConnectable',
        'GObject.Object',
    ],
    'Gio.NativeVolumeMonitor': [
        'Gio.VolumeMonitor',
        'GObject.Object',
    ],
    'Gio.NetworkAddress': [
        'GObject.Object',
        'Gio.SocketConnectable',
    ],
    'Gio.NetworkService': [
        'GObject.Object',
        'Gio.SocketConnectable',
    ],
    'Gio.Notification': [
        'GObject.Object',
    ],
    'Gio.OutputStream': [
        'GObject.Object',
    ],
    'Gio.Permission': [
        'GObject.Object',
    ],
    'Gio.PropertyAction': [
        'GObject.Object',
        'Gio.Action',
    ],
    'Gio.ProxyAddress': [
        'Gio.InetSocketAddress',
        'Gio.SocketConnectable',
        'Gio.SocketAddress',
        'GObject.Object',
    ],
    'Gio.ProxyAddressEnumerator': [
        'Gio.SocketAddressEnumerator',
        'GObject.Object',
    ],
    'Gio.Resolver': [
        'GObject.Object',
    ],
    'Gio.Settings': [
        'GObject.Object',
    ],
    'Gio.SettingsBackend': [
        'GObject.Object',
    ],
    'Gio.SimpleAction': [
        'GObject.Object',
        'Gio.Action',
    ],
    'Gio.SimpleActionGroup': [
        'GObject.Object',
        'Gio.ActionGroup',
        'Gio.ActionMap',
    ],
    'Gio.SimpleAsyncResult': [
        'GObject.Object',
        'Gio.AsyncResult',
    ],
    'Gio.SimpleIOStream': [
        'Gio.IOStream',
        'GObject.Object',
    ],
    'Gio.SimplePermission': [
        'Gio.Permission',
        'GObject.Object',
    ],
    'Gio.SimpleProxyResolver': [
        'GObject.Object',
        'Gio.ProxyResolver',
    ],
    'Gio.Socket': [
        'GObject.Object',
        'Gio.DatagramBased',
        'Gio.Initable',
    ],
    'Gio.SocketAddress': [
        'GObject.Object',
        'Gio.SocketConnectable',
    ],
    'Gio.SocketAddressEnumerator': [
        'GObject.Object',
    ],
    'Gio.SocketClient': [
        'GObject.Object',
    ],
    'Gio.SocketConnection': [
        'Gio.IOStream',
        'GObject.Object',
    ],
    'Gio.SocketControlMessage': [
        'GObject.Object',
    ],
    'Gio.SocketListener': [
        'GObject.Object',
    ],
    'Gio.SocketService': [
        'Gio.SocketListener',
        'GObject.Object',
    ],
    'Gio.Subprocess': [
        'GObject.Object',
        'Gio.Initable',
    ],
    'Gio.SubprocessLauncher': [
        'GObject.Object',
    ],
    'Gio.Task': [
        'GObject.Object',
        'Gio.AsyncResult',
    ],
    'Gio.TcpConnection': [
        'Gio.SocketConnection',
        'Gio.IOStream',
        'GObject.Object',
    ],
    'Gio.TcpWrapperConnection': [
        'Gio.TcpConnection',
        'Gio.SocketConnection',
        'Gio.IOStream',
        'GObject.Object',
    ],
    'Gio.TestDBus': [
        'GObject.Object',
    ],
    'Gio.ThemedIcon': [
        'GObject.Object',
        'Gio.Icon',
    ],
    'Gio.ThreadedResolver': [
        'Gio.Resolver',
        'GObject.Object',
    ],
    'Gio.ThreadedSocketService': [
        'Gio.SocketService',
        'Gio.SocketListener',
        'GObject.Object',
    ],
    'Gio.TlsCertificate': [
        'GObject.Object',
    ],
    'Gio.TlsConnection': [
        'Gio.IOStream',
        'GObject.Object',
    ],
    'Gio.TlsDatabase': [
        'GObject.Object',
    ],
    'Gio.TlsInteraction': [
        'GObject.Object',
    ],
    'Gio.TlsPassword': [
        'GObject.Object',
    ],
    'Gio.UnixConnection': [
        'Gio.SocketConnection',
        'Gio.IOStream',
        'GObject.Object',
    ],
    'Gio.UnixCredentialsMessage': [
        'Gio.SocketControlMessage',
        'GObject.Object',
    ],
    'Gio.UnixFDList': [
        'GObject.Object',
    ],
    'Gio.UnixSocketAddress': [
        'Gio.SocketAddress',
        'Gio.SocketConnectable',
        'GObject.Object',
    ],
    'Gio.Vfs': [
        'GObject.Object',
    ],
    'Gio.VolumeMonitor': [
        'GObject.Object',
    ],
    'Gio.ZlibCompressor': [
        'GObject.Object',
        'Gio.Converter',
    ],
    'Gio.ZlibDecompressor': [
        'GObject.Object',
        'Gio.Converter',
    ],
    'GioUnix.DesktopAppInfo': [
        'GObject.Object',
        'Gio.AppInfo',
    ],
    'GioUnix.FDMessage': [
        'Gio.SocketControlMessage',
        'GObject.Object',
    ],
    'GioUnix.InputStream': [
        'Gio.InputStream',
        'Gio.PollableInputStream',
        'GioUnix.FileDescriptorBased',
        'GObject.Object',
    ],
    'GioUnix.MountMonitor': [
        'GObject.Object',
    ],
    'GioUnix.OutputStream': [
        'Gio.OutputStream',
        'Gio.PollableOutputStream',
        'GioUnix.FileDescriptorBased',
        'GObject.Object',
    ],
    'Gly.Creator': [
        'GObject.Object',
    ],
    'Gly.EncodedImage': [
        'GObject.Object',
    ],
    'Gly.Frame': [
        'GObject.Object',
    ],
    'Gly.FrameRequest': [
        'GObject.Object',
    ],
    'Gly.Image': [
        'GObject.Object',
    ],
    'Gly.Loader': [
        'GObject.Object',
    ],
    'Gly.NewFrame': [
        'GObject.Object',
    ],
    'Gsk.BlendNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.BlurNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.BorderNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.BroadwayRenderer': [
        'Gsk.Renderer',
        'GObject.Object',
    ],
    'Gsk.CairoNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.CairoRenderer': [
        'Gsk.Renderer',
        'GObject.Object',
    ],
    'Gsk.ClipNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.ColorMatrixNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.ColorNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.ComponentTransferNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.ConicGradientNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.ContainerNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.CrossFadeNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.DebugNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.FillNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.GLRenderer': [
        'Gsk.Renderer',
        'GObject.Object',
    ],
    'Gsk.GLShader': [
        'GObject.Object',
    ],
    'Gsk.GLShaderNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.InsetShadowNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.LinearGradientNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.MaskNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.NglRenderer': [
        'Gsk.Renderer',
        'GObject.Object',
    ],
    'Gsk.OpacityNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.OutsetShadowNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.RadialGradientNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.Renderer': [
        'GObject.Object',
    ],
    'Gsk.RepeatNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.RepeatingLinearGradientNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.RepeatingRadialGradientNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.RoundedClipNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.ShadowNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.StrokeNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.SubsurfaceNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.TextNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.TextureNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.TextureScaleNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.TransformNode': [
        'Gsk.RenderNode',
    ],
    'Gsk.VulkanRenderer': [
        'Gsk.Renderer',
        'GObject.Object',
    ],
    'Gtk.ATContext': [
        'GObject.Object',
    ],
    'Gtk.AboutDialog': [
        'Gtk.Window',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Native',
        'Gtk.Root',
        'Gtk.ShortcutManager',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.ActionBar': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.ActivateAction': [
        'Gtk.ShortcutAction',
        'GObject.Object',
    ],
    'Gtk.Adjustment': [
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.AlertDialog': [
        'GObject.Object',
    ],
    'Gtk.AlternativeTrigger': [
        'Gtk.ShortcutTrigger',
        'GObject.Object',
    ],
    'Gtk.AnyFilter': [
        'Gtk.MultiFilter',
        'Gio.ListModel',
        'Gtk.Buildable',
        'Gtk.Filter',
        'GObject.Object',
    ],
    'Gtk.AppChooserButton': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.AppChooser',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.AppChooserDialog': [
        'Gtk.Dialog',
        'Gtk.Accessible',
        'Gtk.AppChooser',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Native',
        'Gtk.Root',
        'Gtk.ShortcutManager',
        'Gtk.Window',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.AppChooserWidget': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.AppChooser',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.Application': [
        'Gio.Application',
        'Gio.ActionGroup',
        'Gio.ActionMap',
        'GObject.Object',
    ],
    'Gtk.ApplicationWindow': [
        'Gtk.Window',
        'Gio.ActionGroup',
        'Gio.ActionMap',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Native',
        'Gtk.Root',
        'Gtk.ShortcutManager',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.AspectFrame': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.Assistant': [
        'Gtk.Window',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Native',
        'Gtk.Root',
        'Gtk.ShortcutManager',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.AssistantPage': [
        'GObject.Object',
    ],
    'Gtk.BinLayout': [
        'Gtk.LayoutManager',
        'GObject.Object',
    ],
    'Gtk.BookmarkList': [
        'GObject.Object',
        'Gio.ListModel',
    ],
    'Gtk.BoolFilter': [
        'Gtk.Filter',
        'GObject.Object',
    ],
    'Gtk.Box': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.BoxLayout': [
        'Gtk.LayoutManager',
        'Gtk.Orientable',
        'GObject.Object',
    ],
    'Gtk.Builder': [
        'GObject.Object',
    ],
    'Gtk.BuilderCScope': [
        'GObject.Object',
        'Gtk.BuilderScope',
    ],
    'Gtk.BuilderListItemFactory': [
        'Gtk.ListItemFactory',
        'GObject.Object',
    ],
    'Gtk.Button': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Actionable',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.CClosureExpression': [
        'Gtk.Expression',
    ],
    'Gtk.Calendar': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.CallbackAction': [
        'Gtk.ShortcutAction',
        'GObject.Object',
    ],
    'Gtk.CellArea': [
        'GObject.InitiallyUnowned',
        'Gtk.Buildable',
        'Gtk.CellLayout',
        'GObject.Object',
    ],
    'Gtk.CellAreaBox': [
        'Gtk.CellArea',
        'Gtk.Buildable',
        'Gtk.CellLayout',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.CellAreaContext': [
        'GObject.Object',
    ],
    'Gtk.CellRenderer': [
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.CellRendererAccel': [
        'Gtk.CellRendererText',
        'Gtk.CellRenderer',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.CellRendererCombo': [
        'Gtk.CellRendererText',
        'Gtk.CellRenderer',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.CellRendererPixbuf': [
        'Gtk.CellRenderer',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.CellRendererProgress': [
        'Gtk.CellRenderer',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.CellRendererSpin': [
        'Gtk.CellRendererText',
        'Gtk.CellRenderer',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.CellRendererSpinner': [
        'Gtk.CellRenderer',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.CellRendererText': [
        'Gtk.CellRenderer',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.CellRendererToggle': [
        'Gtk.CellRenderer',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.CellView': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.CellLayout',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.CenterBox': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.CenterLayout': [
        'Gtk.LayoutManager',
        'GObject.Object',
    ],
    'Gtk.CheckButton': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Actionable',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.ClosureExpression': [
        'Gtk.Expression',
    ],
    'Gtk.ColorButton': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ColorChooser',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.ColorChooserDialog': [
        'Gtk.Dialog',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ColorChooser',
        'Gtk.ConstraintTarget',
        'Gtk.Native',
        'Gtk.Root',
        'Gtk.ShortcutManager',
        'Gtk.Window',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.ColorChooserWidget': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ColorChooser',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.ColorDialog': [
        'GObject.Object',
    ],
    'Gtk.ColorDialogButton': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.ColumnView': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Scrollable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.ColumnViewCell': [
        'Gtk.ListItem',
        'GObject.Object',
    ],
    'Gtk.ColumnViewColumn': [
        'GObject.Object',
    ],
    'Gtk.ColumnViewRow': [
        'GObject.Object',
    ],
    'Gtk.ColumnViewSorter': [
        'Gtk.Sorter',
        'GObject.Object',
    ],
    'Gtk.ComboBox': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.CellEditable',
        'Gtk.CellLayout',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.ComboBoxText': [
        'Gtk.ComboBox',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.CellEditable',
        'Gtk.CellLayout',
        'Gtk.ConstraintTarget',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.ConstantExpression': [
        'Gtk.Expression',
    ],
    'Gtk.Constraint': [
        'GObject.Object',
    ],
    'Gtk.ConstraintGuide': [
        'GObject.Object',
        'Gtk.ConstraintTarget',
    ],
    'Gtk.ConstraintLayout': [
        'Gtk.LayoutManager',
        'Gtk.Buildable',
        'GObject.Object',
    ],
    'Gtk.ConstraintLayoutChild': [
        'Gtk.LayoutChild',
        'GObject.Object',
    ],
    'Gtk.CssProvider': [
        'GObject.Object',
        'Gtk.StyleProvider',
    ],
    'Gtk.CustomFilter': [
        'Gtk.Filter',
        'GObject.Object',
    ],
    'Gtk.CustomLayout': [
        'Gtk.LayoutManager',
        'GObject.Object',
    ],
    'Gtk.CustomSorter': [
        'Gtk.Sorter',
        'GObject.Object',
    ],
    'Gtk.Dialog': [
        'Gtk.Window',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Native',
        'Gtk.Root',
        'Gtk.ShortcutManager',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.DirectoryList': [
        'GObject.Object',
        'Gio.ListModel',
    ],
    'Gtk.DragIcon': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Native',
        'Gtk.Root',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.DragSource': [
        'Gtk.GestureSingle',
        'Gtk.Gesture',
        'Gtk.EventController',
        'GObject.Object',
    ],
    'Gtk.DrawingArea': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.DropControllerMotion': [
        'Gtk.EventController',
        'GObject.Object',
    ],
    'Gtk.DropDown': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.DropTarget': [
        'Gtk.EventController',
        'GObject.Object',
    ],
    'Gtk.DropTargetAsync': [
        'Gtk.EventController',
        'GObject.Object',
    ],
    'Gtk.EditableLabel': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Editable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.EmojiChooser': [
        'Gtk.Popover',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Native',
        'Gtk.ShortcutManager',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.Entry': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.CellEditable',
        'Gtk.ConstraintTarget',
        'Gtk.Editable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.EntryBuffer': [
        'GObject.Object',
    ],
    'Gtk.EntryCompletion': [
        'GObject.Object',
        'Gtk.Buildable',
        'Gtk.CellLayout',
    ],
    'Gtk.EventController': [
        'GObject.Object',
    ],
    'Gtk.EventControllerFocus': [
        'Gtk.EventController',
        'GObject.Object',
    ],
    'Gtk.EventControllerKey': [
        'Gtk.EventController',
        'GObject.Object',
    ],
    'Gtk.EventControllerLegacy': [
        'Gtk.EventController',
        'GObject.Object',
    ],
    'Gtk.EventControllerMotion': [
        'Gtk.EventController',
        'GObject.Object',
    ],
    'Gtk.EventControllerScroll': [
        'Gtk.EventController',
        'GObject.Object',
    ],
    'Gtk.EveryFilter': [
        'Gtk.MultiFilter',
        'Gio.ListModel',
        'Gtk.Buildable',
        'Gtk.Filter',
        'GObject.Object',
    ],
    'Gtk.Expander': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.FileChooserDialog': [
        'Gtk.Dialog',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.FileChooser',
        'Gtk.Native',
        'Gtk.Root',
        'Gtk.ShortcutManager',
        'Gtk.Window',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.FileChooserNative': [
        'Gtk.NativeDialog',
        'Gtk.FileChooser',
        'GObject.Object',
    ],
    'Gtk.FileChooserWidget': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.FileChooser',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.FileDialog': [
        'GObject.Object',
    ],
    'Gtk.FileFilter': [
        'Gtk.Filter',
        'Gtk.Buildable',
        'GObject.Object',
    ],
    'Gtk.FileLauncher': [
        'GObject.Object',
    ],
    'Gtk.Filter': [
        'GObject.Object',
    ],
    'Gtk.FilterListModel': [
        'GObject.Object',
        'Gio.ListModel',
        'Gtk.SectionModel',
    ],
    'Gtk.Fixed': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.FixedLayout': [
        'Gtk.LayoutManager',
        'GObject.Object',
    ],
    'Gtk.FixedLayoutChild': [
        'Gtk.LayoutChild',
        'GObject.Object',
    ],
    'Gtk.FlattenListModel': [
        'GObject.Object',
        'Gio.ListModel',
        'Gtk.SectionModel',
    ],
    'Gtk.FlowBox': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.FlowBoxChild': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.FontButton': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.FontChooser',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.FontChooserDialog': [
        'Gtk.Dialog',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.FontChooser',
        'Gtk.Native',
        'Gtk.Root',
        'Gtk.ShortcutManager',
        'Gtk.Window',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.FontChooserWidget': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.FontChooser',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.FontDialog': [
        'GObject.Object',
    ],
    'Gtk.FontDialogButton': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.Frame': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.GLArea': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.Gesture': [
        'Gtk.EventController',
        'GObject.Object',
    ],
    'Gtk.GestureClick': [
        'Gtk.GestureSingle',
        'Gtk.Gesture',
        'Gtk.EventController',
        'GObject.Object',
    ],
    'Gtk.GestureDrag': [
        'Gtk.GestureSingle',
        'Gtk.Gesture',
        'Gtk.EventController',
        'GObject.Object',
    ],
    'Gtk.GestureLongPress': [
        'Gtk.GestureSingle',
        'Gtk.Gesture',
        'Gtk.EventController',
        'GObject.Object',
    ],
    'Gtk.GesturePan': [
        'Gtk.GestureDrag',
        'Gtk.GestureSingle',
        'Gtk.Gesture',
        'Gtk.EventController',
        'GObject.Object',
    ],
    'Gtk.GestureRotate': [
        'Gtk.Gesture',
        'Gtk.EventController',
        'GObject.Object',
    ],
    'Gtk.GestureSingle': [
        'Gtk.Gesture',
        'Gtk.EventController',
        'GObject.Object',
    ],
    'Gtk.GestureStylus': [
        'Gtk.GestureSingle',
        'Gtk.Gesture',
        'Gtk.EventController',
        'GObject.Object',
    ],
    'Gtk.GestureSwipe': [
        'Gtk.GestureSingle',
        'Gtk.Gesture',
        'Gtk.EventController',
        'GObject.Object',
    ],
    'Gtk.GestureZoom': [
        'Gtk.Gesture',
        'Gtk.EventController',
        'GObject.Object',
    ],
    'Gtk.GraphicsOffload': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.Grid': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.GridLayout': [
        'Gtk.LayoutManager',
        'GObject.Object',
    ],
    'Gtk.GridLayoutChild': [
        'Gtk.LayoutChild',
        'GObject.Object',
    ],
    'Gtk.GridView': [
        'Gtk.ListBase',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'Gtk.Scrollable',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.HeaderBar': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.IMContext': [
        'GObject.Object',
    ],
    'Gtk.IMContextSimple': [
        'Gtk.IMContext',
        'GObject.Object',
    ],
    'Gtk.IMMulticontext': [
        'Gtk.IMContext',
        'GObject.Object',
    ],
    'Gtk.IconPaintable': [
        'GObject.Object',
        'Gdk.Paintable',
        'Gtk.SymbolicPaintable',
    ],
    'Gtk.IconTheme': [
        'GObject.Object',
    ],
    'Gtk.IconView': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.CellLayout',
        'Gtk.ConstraintTarget',
        'Gtk.Scrollable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.Image': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.InfoBar': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.Inscription': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.AccessibleText',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.KeyvalTrigger': [
        'Gtk.ShortcutTrigger',
        'GObject.Object',
    ],
    'Gtk.Label': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.AccessibleText',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.LayoutChild': [
        'GObject.Object',
    ],
    'Gtk.LayoutManager': [
        'GObject.Object',
    ],
    'Gtk.LevelBar': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.AccessibleRange',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.LinkButton': [
        'Gtk.Button',
        'Gtk.Accessible',
        'Gtk.Actionable',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.ListBase': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'Gtk.Scrollable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.ListBox': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.ListBoxRow': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Actionable',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.ListHeader': [
        'GObject.Object',
    ],
    'Gtk.ListItem': [
        'GObject.Object',
    ],
    'Gtk.ListItemFactory': [
        'GObject.Object',
    ],
    'Gtk.ListStore': [
        'GObject.Object',
        'Gtk.Buildable',
        'Gtk.TreeDragDest',
        'Gtk.TreeDragSource',
        'Gtk.TreeModel',
        'Gtk.TreeSortable',
    ],
    'Gtk.ListView': [
        'Gtk.ListBase',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'Gtk.Scrollable',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.LockButton': [
        'Gtk.Button',
        'Gtk.Accessible',
        'Gtk.Actionable',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.MapListModel': [
        'GObject.Object',
        'Gio.ListModel',
        'Gtk.SectionModel',
    ],
    'Gtk.MediaControls': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.MediaFile': [
        'Gtk.MediaStream',
        'Gdk.Paintable',
        'GObject.Object',
    ],
    'Gtk.MediaStream': [
        'GObject.Object',
        'Gdk.Paintable',
    ],
    'Gtk.MenuButton': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.MessageDialog': [
        'Gtk.Dialog',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Native',
        'Gtk.Root',
        'Gtk.ShortcutManager',
        'Gtk.Window',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.MnemonicAction': [
        'Gtk.ShortcutAction',
        'GObject.Object',
    ],
    'Gtk.MnemonicTrigger': [
        'Gtk.ShortcutTrigger',
        'GObject.Object',
    ],
    'Gtk.MountOperation': [
        'Gio.MountOperation',
        'GObject.Object',
    ],
    'Gtk.MultiFilter': [
        'Gtk.Filter',
        'Gio.ListModel',
        'Gtk.Buildable',
        'GObject.Object',
    ],
    'Gtk.MultiSelection': [
        'GObject.Object',
        'Gio.ListModel',
        'Gtk.SectionModel',
        'Gtk.SelectionModel',
    ],
    'Gtk.MultiSorter': [
        'Gtk.Sorter',
        'Gio.ListModel',
        'Gtk.Buildable',
        'GObject.Object',
    ],
    'Gtk.NamedAction': [
        'Gtk.ShortcutAction',
        'GObject.Object',
    ],
    'Gtk.NativeDialog': [
        'GObject.Object',
    ],
    'Gtk.NeverTrigger': [
        'Gtk.ShortcutTrigger',
        'GObject.Object',
    ],
    'Gtk.NoSelection': [
        'GObject.Object',
        'Gio.ListModel',
        'Gtk.SectionModel',
        'Gtk.SelectionModel',
    ],
    'Gtk.Notebook': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.NotebookPage': [
        'GObject.Object',
    ],
    'Gtk.NothingAction': [
        'Gtk.ShortcutAction',
        'GObject.Object',
    ],
    'Gtk.NumericSorter': [
        'Gtk.Sorter',
        'GObject.Object',
    ],
    'Gtk.ObjectExpression': [
        'Gtk.Expression',
    ],
    'Gtk.Overlay': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.OverlayLayout': [
        'Gtk.LayoutManager',
        'GObject.Object',
    ],
    'Gtk.OverlayLayoutChild': [
        'Gtk.LayoutChild',
        'GObject.Object',
    ],
    'Gtk.PadController': [
        'Gtk.EventController',
        'GObject.Object',
    ],
    'Gtk.PageSetup': [
        'GObject.Object',
    ],
    'Gtk.PageSetupUnixDialog': [
        'Gtk.Dialog',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Native',
        'Gtk.Root',
        'Gtk.ShortcutManager',
        'Gtk.Window',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.Paned': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.AccessibleRange',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.ParamSpecExpression': [
        'GObject.ParamSpec',
    ],
    'Gtk.PasswordEntry': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Editable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.PasswordEntryBuffer': [
        'Gtk.EntryBuffer',
        'GObject.Object',
    ],
    'Gtk.Picture': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.Popover': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Native',
        'Gtk.ShortcutManager',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.PopoverMenu': [
        'Gtk.Popover',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Native',
        'Gtk.ShortcutManager',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.PopoverMenuBar': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.PrintContext': [
        'GObject.Object',
    ],
    'Gtk.PrintDialog': [
        'GObject.Object',
    ],
    'Gtk.PrintJob': [
        'GObject.Object',
    ],
    'Gtk.PrintOperation': [
        'GObject.Object',
        'Gtk.PrintOperationPreview',
    ],
    'Gtk.PrintSettings': [
        'GObject.Object',
    ],
    'Gtk.PrintUnixDialog': [
        'Gtk.Dialog',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Native',
        'Gtk.Root',
        'Gtk.ShortcutManager',
        'Gtk.Window',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.Printer': [
        'GObject.Object',
    ],
    'Gtk.ProgressBar': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.AccessibleRange',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.PropertyExpression': [
        'Gtk.Expression',
    ],
    'Gtk.Range': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.AccessibleRange',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.RecentManager': [
        'GObject.Object',
    ],
    'Gtk.Revealer': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.Scale': [
        'Gtk.Range',
        'Gtk.Accessible',
        'Gtk.AccessibleRange',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.ScaleButton': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.AccessibleRange',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.Scrollbar': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.AccessibleRange',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.ScrolledWindow': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.SearchBar': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.SearchEntry': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Editable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.SelectionFilterModel': [
        'GObject.Object',
        'Gio.ListModel',
    ],
    'Gtk.Separator': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.Settings': [
        'GObject.Object',
        'Gtk.StyleProvider',
    ],
    'Gtk.Shortcut': [
        'GObject.Object',
    ],
    'Gtk.ShortcutAction': [
        'GObject.Object',
    ],
    'Gtk.ShortcutController': [
        'Gtk.EventController',
        'Gio.ListModel',
        'Gtk.Buildable',
        'GObject.Object',
    ],
    'Gtk.ShortcutLabel': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.ShortcutTrigger': [
        'GObject.Object',
    ],
    'Gtk.ShortcutsGroup': [
        'Gtk.Box',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.ShortcutsSection': [
        'Gtk.Box',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.ShortcutsShortcut': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.ShortcutsWindow': [
        'Gtk.Window',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Native',
        'Gtk.Root',
        'Gtk.ShortcutManager',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.SignalAction': [
        'Gtk.ShortcutAction',
        'GObject.Object',
    ],
    'Gtk.SignalListItemFactory': [
        'Gtk.ListItemFactory',
        'GObject.Object',
    ],
    'Gtk.SingleSelection': [
        'GObject.Object',
        'Gio.ListModel',
        'Gtk.SectionModel',
        'Gtk.SelectionModel',
    ],
    'Gtk.SizeGroup': [
        'GObject.Object',
        'Gtk.Buildable',
    ],
    'Gtk.SliceListModel': [
        'GObject.Object',
        'Gio.ListModel',
        'Gtk.SectionModel',
    ],
    'Gtk.Snapshot': [
        'Gdk.Snapshot',
        'GObject.Object',
    ],
    'Gtk.SortListModel': [
        'GObject.Object',
        'Gio.ListModel',
        'Gtk.SectionModel',
    ],
    'Gtk.Sorter': [
        'GObject.Object',
    ],
    'Gtk.SpinButton': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.AccessibleRange',
        'Gtk.Buildable',
        'Gtk.CellEditable',
        'Gtk.ConstraintTarget',
        'Gtk.Editable',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.Spinner': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.Stack': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.StackPage': [
        'GObject.Object',
        'Gtk.Accessible',
    ],
    'Gtk.StackSidebar': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.StackSwitcher': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.Statusbar': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.StringFilter': [
        'Gtk.Filter',
        'GObject.Object',
    ],
    'Gtk.StringList': [
        'GObject.Object',
        'Gio.ListModel',
        'Gtk.Buildable',
    ],
    'Gtk.StringObject': [
        'GObject.Object',
    ],
    'Gtk.StringSorter': [
        'Gtk.Sorter',
        'GObject.Object',
    ],
    'Gtk.StyleContext': [
        'GObject.Object',
    ],
    'Gtk.Switch': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Actionable',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.Text': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.AccessibleText',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Editable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.TextBuffer': [
        'GObject.Object',
    ],
    'Gtk.TextChildAnchor': [
        'GObject.Object',
    ],
    'Gtk.TextMark': [
        'GObject.Object',
    ],
    'Gtk.TextTag': [
        'GObject.Object',
    ],
    'Gtk.TextTagTable': [
        'GObject.Object',
        'Gtk.Buildable',
    ],
    'Gtk.TextView': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.AccessibleText',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Scrollable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.ToggleButton': [
        'Gtk.Button',
        'Gtk.Accessible',
        'Gtk.Actionable',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.Tooltip': [
        'GObject.Object',
    ],
    'Gtk.TreeExpander': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.TreeListModel': [
        'GObject.Object',
        'Gio.ListModel',
    ],
    'Gtk.TreeListRow': [
        'GObject.Object',
    ],
    'Gtk.TreeListRowSorter': [
        'Gtk.Sorter',
        'GObject.Object',
    ],
    'Gtk.TreeModelFilter': [
        'GObject.Object',
        'Gtk.TreeDragSource',
        'Gtk.TreeModel',
    ],
    'Gtk.TreeModelSort': [
        'GObject.Object',
        'Gtk.TreeDragSource',
        'Gtk.TreeModel',
        'Gtk.TreeSortable',
    ],
    'Gtk.TreeSelection': [
        'GObject.Object',
    ],
    'Gtk.TreeStore': [
        'GObject.Object',
        'Gtk.Buildable',
        'Gtk.TreeDragDest',
        'Gtk.TreeDragSource',
        'Gtk.TreeModel',
        'Gtk.TreeSortable',
    ],
    'Gtk.TreeView': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Scrollable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.TreeViewColumn': [
        'GObject.InitiallyUnowned',
        'Gtk.Buildable',
        'Gtk.CellLayout',
        'GObject.Object',
    ],
    'Gtk.UriLauncher': [
        'GObject.Object',
    ],
    'Gtk.Video': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.Viewport': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Scrollable',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.VolumeButton': [
        'Gtk.ScaleButton',
        'Gtk.Accessible',
        'Gtk.AccessibleRange',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Orientable',
        'Gtk.Widget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.Widget': [
        'GObject.InitiallyUnowned',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.Object',
    ],
    'Gtk.WidgetPaintable': [
        'GObject.Object',
        'Gdk.Paintable',
    ],
    'Gtk.Window': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'Gtk.Native',
        'Gtk.Root',
        'Gtk.ShortcutManager',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.WindowControls': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Gtk.WindowGroup': [
        'GObject.Object',
    ],
    'Gtk.WindowHandle': [
        'Gtk.Widget',
        'Gtk.Accessible',
        'Gtk.Buildable',
        'Gtk.ConstraintTarget',
        'GObject.InitiallyUnowned',
        'GObject.Object',
    ],
    'Pango.Context': [
        'GObject.Object',
    ],
    'Pango.Coverage': [
        'GObject.Object',
    ],
    'Pango.Font': [
        'GObject.Object',
    ],
    'Pango.FontFace': [
        'GObject.Object',
    ],
    'Pango.FontFamily': [
        'GObject.Object',
        'Gio.ListModel',
    ],
    'Pango.FontMap': [
        'GObject.Object',
        'Gio.ListModel',
    ],
    'Pango.Fontset': [
        'GObject.Object',
    ],
    'Pango.FontsetSimple': [
        'Pango.Fontset',
        'GObject.Object',
    ],
    'Pango.Layout': [
        'GObject.Object',
    ],
    'Pango.Renderer': [
        'GObject.Object',
    ],
    'PangoFT2.FontMap': [
        'PangoFc.FontMap',
        'Gio.ListModel',
        'Pango.FontMap',
        'GObject.Object',
    ],
    'PangoFc.Decoder': [
        'GObject.Object',
    ],
    'PangoFc.Font': [
        'Pango.Font',
        'GObject.Object',
    ],
    'PangoFc.FontMap': [
        'Pango.FontMap',
        'Gio.ListModel',
        'GObject.Object',
    ],
    'PangoOT.Info': [
        'GObject.Object',
    ],
    'PangoOT.Ruleset': [
        'GObject.Object',
    ],
    'PangoXft.Font': [
        'PangoFc.Font',
        'Pango.Font',
        'GObject.Object',
    ],
    'PangoXft.FontMap': [
        'PangoFc.FontMap',
        'Gio.ListModel',
        'Pango.FontMap',
        'GObject.Object',
    ],
    'PangoXft.Renderer': [
        'Pango.Renderer',
        'GObject.Object',
    ],
}


interface StaticNamed {
    name: string
}

/**
 * Casts between derived classes, performing a run-time type-check
 * and raising an exception if the cast fails. Allows casting to implemented
 * interfaces, too.
 */
export function giCast<T>(from_: GObject.Object, to_: StaticNamed): T {
    const desc: string = from_.toString()
    let clsName: string|null = null
    for (const k of desc.split(" ")) {
        if (k.substring(0, 7) == "GIName:") {
            clsName = k.substring(7)
            break
        }
    }
    const toName = to_.name.replace("_", ".")

    if (toName === clsName)
        return ((from_ as any) as T)

    if (clsName) {
        const parents = (inheritanceTable as any)[clsName]
        if (parents) {
            if (parents.indexOf(toName) >= 0)
                return ((from_ as any) as T)
        }
    }

    throw Error("Invalid cast of " + desc + "(" + clsName + ") to " + toName)
}    
