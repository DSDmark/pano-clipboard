/**
 * AppStream-1.0
 */

import * as Gjs from './Gjs';
import * as Gio from './Gio-2.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as GModule from './GModule-2.0';

export enum AgreementKind {
    UNKNOWN,
    GENERIC,
    EULA,
    PRIVACY,
}
export enum ArtifactKind {
    UNKNOWN,
    SOURCE,
    BINARY,
}
export enum BundleKind {
    UNKNOWN,
    PACKAGE,
    LIMBA,
    FLATPAK,
    APPIMAGE,
    SNAP,
    TARBALL,
    CABINET,
    LINGLONG,
    SYSUPDATE,
}
export enum ChassisKind {
    UNKNOWN,
    DESKTOP,
    LAPTOP,
    SERVER,
    TABLET,
    HANDSET,
}
export enum CheckResult {
    ERROR,
    UNKNOWN,
    FALSE,
    TRUE,
}
export enum ChecksumKind {
    NONE,
    SHA1,
    SHA256,
    SHA512,
    BLAKE2B,
    BLAKE3,
}
export enum ColorKind {
    UNKNOWN,
    PRIMARY,
}
export enum ColorSchemeKind {
    UNKNOWN,
    LIGHT,
    DARK,
}
export enum ComponentKind {
    UNKNOWN,
    GENERIC,
    DESKTOP_APP,
    CONSOLE_APP,
    WEB_APP,
    SERVICE,
    ADDON,
    RUNTIME,
    FONT,
    CODEC,
    INPUT_METHOD,
    OPERATING_SYSTEM,
    FIRMWARE,
    DRIVER,
    LOCALIZATION,
    REPOSITORY,
    ICON_THEME,
}
export enum ComponentScope {
    UNKNOWN,
    SYSTEM,
    USER,
}
export enum ContentRatingSystem {
    UNKNOWN,
    INCAA,
    ACB,
    DJCTQ,
    GSRR,
    PEGI,
    KAVI,
    USK,
    ESRA,
    CERO,
    OFLCNZ,
    RUSSIA,
    MDA,
    GRAC,
    ESRB,
    IARC,
}
export enum ContentRatingValue {
    UNKNOWN,
    NONE,
    MILD,
    MODERATE,
    INTENSE,
}
export enum ControlKind {
    UNKNOWN,
    POINTING,
    KEYBOARD,
    CONSOLE,
    TOUCH,
    GAMEPAD,
    VOICE,
    VISION,
    TV_REMOTE,
    TABLET,
}
export enum DisplaySideKind {
    UNKNOWN,
    SHORTEST,
    LONGEST,
}
export enum FormatKind {
    UNKNOWN,
    XML,
    YAML,
    DESKTOP_ENTRY,
}
export enum FormatStyle {
    UNKNOWN,
    METAINFO,
    CATALOG,
}
export enum FormatVersion {
    UNKNOWN,
    V1_0,
}
export enum IconKind {
    UNKNOWN,
    STOCK,
    CACHED,
    LOCAL,
    REMOTE,
}
export enum ImageKind {
    UNKNOWN,
    SOURCE,
    THUMBNAIL,
}
export enum InternetKind {
    UNKNOWN,
    ALWAYS,
    OFFLINE_ONLY,
    FIRST_RUN,
}
export enum IssueKind {
    UNKNOWN,
    GENERIC,
    CVE,
}
export enum IssueSeverity {
    UNKNOWN,
    PEDANTIC,
    INFO,
    WARNING,
    ERROR,
}
export enum LaunchableKind {
    UNKNOWN,
    DESKTOP_ID,
    SERVICE,
    COCKPIT_MANIFEST,
    URL,
}
export enum MarkupKind {
    UNKNOWN,
    XML,
    TEXT,
    MARKDOWN,
}
export enum MergeKind {
    NONE,
    REPLACE,
    APPEND,
    REMOVE_COMPONENT,
}
export enum MetadataError {
    FAILED,
    PARSE,
    FORMAT_UNEXPECTED,
    NO_COMPONENT,
    VALUE_MISSING,
}
export enum MetadataLocation {
    UNKNOWN,
    SHARED,
    STATE,
    CACHE,
    USER,
}
export enum PoolError {
    FAILED,
    INCOMPLETE,
    COLLISION,
    CACHE_WRITE_FAILED,
    CACHE_DAMAGED,
}
export enum ProvidedKind {
    UNKNOWN,
    LIBRARY,
    BINARY,
    MEDIATYPE,
    FONT,
    MODALIAS,
    PYTHON,
    DBUS_SYSTEM,
    DBUS_USER,
    FIRMWARE_RUNTIME,
    FIRMWARE_FLASHED,
    ID,
}
export enum ReferenceKind {
    UNKNOWN,
    DOI,
    CITATION_CFF,
    REGISTRY,
}
export enum RelationCompare {
    UNKNOWN,
    EQ,
    NE,
    LT,
    GT,
    LE,
    GE,
}
export enum RelationError {
    FAILED,
    BAD_VALUE,
    NOT_IMPLEMENTED,
}
export enum RelationItemKind {
    UNKNOWN,
    ID,
    MODALIAS,
    KERNEL,
    MEMORY,
    FIRMWARE,
    CONTROL,
    DISPLAY_LENGTH,
    HARDWARE,
    INTERNET,
}
export enum RelationKind {
    UNKNOWN,
    REQUIRES,
    RECOMMENDS,
    SUPPORTS,
}
export enum RelationStatus {
    UNKNOWN,
    ERROR,
    NOT_SATISFIED,
    SATISFIED,
}
export enum ReleaseKind {
    UNKNOWN,
    STABLE,
    DEVELOPMENT,
    SNAPSHOT,
}
export enum ReleaseListKind {
    UNKNOWN,
    EMBEDDED,
    EXTERNAL,
}
export enum ReleaseUrlKind {
    UNKNOWN,
    DETAILS,
}
export enum ScreenshotKind {
    UNKNOWN,
    DEFAULT,
    EXTRA,
}
export enum ScreenshotMediaKind {
    UNKNOWN,
    IMAGE,
    VIDEO,
}
export enum SizeKind {
    UNKNOWN,
    DOWNLOAD,
    INSTALLED,
}
export enum SuggestedKind {
    UNKNOWN,
    UPSTREAM,
    HEURISTIC,
}
export enum SystemInfoError {
    FAILED,
    NOT_FOUND,
}
export enum TranslationKind {
    UNKNOWN,
    GETTEXT,
    QT,
}
export enum UrgencyKind {
    UNKNOWN,
    LOW,
    MEDIUM,
    HIGH,
    CRITICAL,
}
export enum UrlKind {
    UNKNOWN,
    HOMEPAGE,
    BUGTRACKER,
    FAQ,
    HELP,
    DONATION,
    TRANSLATE,
    CONTACT,
    VCS_BROWSER,
    CONTRIBUTE,
}
export enum UtilsError {
    FAILED,
}
export enum ValidatorError {
    FAILED,
    INVALID_OVERRIDE,
    INVALID_FILENAME,
}
export enum VideoCodecKind {
    UNKNOWN,
    VP9,
    AV1,
}
export enum VideoContainerKind {
    UNKNOWN,
    MKV,
    WEBM,
}
export enum CacheFlags {
    NONE,
    USE_USER,
    USE_SYSTEM,
    NO_CLEAR,
    REFRESH_SYSTEM,
}
export enum ComponentBoxFlags {
    NONE,
    NO_CHECKS,
}
export enum DataIdMatchFlags {
    NONE,
    SCOPE,
    BUNDLE_KIND,
    ORIGIN,
    ID,
    BRANCH,
}
export enum ParseFlags {
    NONE,
    IGNORE_MEDIABASEURL,
}
export enum PoolFlags {
    NONE,
    LOAD_OS_CATALOG,
    LOAD_OS_METAINFO,
    LOAD_OS_DESKTOP_FILES,
    LOAD_FLATPAK,
    IGNORE_CACHE_AGE,
    RESOLVE_ADDONS,
    PREFER_OS_METAINFO,
    MONITOR,
}
export enum ReviewFlags {
    NONE,
    SELF,
    VOTED,
}
export enum ValueFlags {
    NONE,
    DUPLICATE_CHECK,
    NO_TRANSLATION_FALLBACK,
}
export enum VercmpFlags {
    NONE,
    IGNORE_EPOCH,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export function agreement_kind_from_string(value: string): AgreementKind
export function agreement_kind_to_string(value: AgreementKind): string
export function artifact_kind_from_string(kind: string): ArtifactKind
export function artifact_kind_to_string(kind: ArtifactKind): string
export function bundle_kind_from_string(bundle_str: string): BundleKind
export function bundle_kind_to_string(kind: BundleKind): string
export function chassis_kind_from_string(kind_str: string): ChassisKind
export function chassis_kind_to_string(kind: ChassisKind): string
export function checksum_kind_from_string(kind_str: string): ChecksumKind
export function checksum_kind_to_string(kind: ChecksumKind): string
export function color_kind_from_string(str: string): ColorKind
export function color_kind_to_string(kind: ColorKind): string
export function color_scheme_kind_from_string(str: string): ColorSchemeKind
export function color_scheme_kind_to_string(kind: ColorSchemeKind): string
export function component_kind_from_string(kind_str: string): ComponentKind
export function component_kind_to_string(kind: ComponentKind): string
export function component_scope_from_string(scope_str: string): ComponentScope
export function component_scope_to_string(scope: ComponentScope): string
export function content_rating_system_format_age(system: ContentRatingSystem, age: number): string | null
export function content_rating_system_from_locale(locale: string): ContentRatingSystem
export function content_rating_system_get_csm_ages(system: ContentRatingSystem): number[]
export function content_rating_system_get_formatted_ages(system: ContentRatingSystem): string[]
export function content_rating_system_to_string(system: ContentRatingSystem): string | null
export function content_rating_value_from_string(value: string): ContentRatingValue
export function content_rating_value_to_string(value: ContentRatingValue): string
export function control_kind_from_string(kind_str: string): ControlKind
export function control_kind_to_string(kind: ControlKind): string
export function display_side_kind_from_string(kind_str: string): DisplaySideKind
export function display_side_kind_to_string(kind: DisplaySideKind): string
export function format_kind_from_string(kind_str: string): FormatKind
export function format_kind_to_string(kind: FormatKind): string
export function format_version_from_string(version_str: string): FormatVersion
export function format_version_to_string(version: FormatVersion): string
export function get_current_distro_component_id(): string
export function get_default_categories(with_special: boolean): Category[]
export function get_license_name(license: string): string | null
export function get_license_url(license: string): string | null
export function gstring_replace(string: GLib.String, find: string, replace: string, limit: number): number
export function icon_kind_from_string(kind_str: string): IconKind
export function icon_kind_to_string(kind: IconKind): string
export function image_kind_from_string(kind: string): ImageKind
export function image_kind_to_string(kind: ImageKind): string
export function internet_kind_from_string(kind_str: string): InternetKind
export function internet_kind_to_string(kind: InternetKind): string
export function is_spdx_license_exception_id(exception_id: string): boolean
export function is_spdx_license_expression(license: string): boolean
export function is_spdx_license_id(license_id: string): boolean
export function issue_kind_from_string(kind_str: string): IssueKind
export function issue_kind_to_string(kind: IssueKind): string
export function issue_severity_from_string(str: string): IssueSeverity
export function issue_severity_to_string(severity: IssueSeverity): string
export function launchable_kind_from_string(kind_str: string): LaunchableKind
export function launchable_kind_to_string(kind: LaunchableKind): string
export function license_is_free_license(license: string): boolean
export function license_is_metadata_license(license: string): boolean
export function license_is_metadata_license_id(license_id: string): boolean
export function license_to_spdx_id(license: string): string
export function markup_convert(markup: string, to_kind: MarkupKind): string
export function markup_strsplit_words(text: string, line_len: number): string[]
export function merge_kind_from_string(kind_str: string): MergeKind
export function merge_kind_to_string(kind: MergeKind): string
export function metadata_error_quark(): GLib.Quark
export function pool_error_quark(): GLib.Quark
export function provided_kind_from_string(kind_str: string): ProvidedKind
export function provided_kind_to_l10n_string(kind: ProvidedKind): string
export function provided_kind_to_string(kind: ProvidedKind): string
export function reference_kind_from_string(str: string): ReferenceKind
export function reference_kind_to_string(kind: ReferenceKind): string
export function relation_compare_from_string(compare_str: string): RelationCompare
export function relation_compare_to_string(compare: RelationCompare): string
export function relation_compare_to_symbols_string(compare: RelationCompare): string
export function relation_error_quark(): GLib.Quark
export function relation_item_kind_from_string(kind_str: string): RelationItemKind
export function relation_item_kind_to_string(kind: RelationItemKind): string
export function relation_kind_from_string(kind_str: string): RelationKind
export function relation_kind_to_string(kind: RelationKind): string
export function release_kind_from_string(kind_str: string): ReleaseKind
export function release_kind_to_string(kind: ReleaseKind): string
export function release_list_kind_from_string(kind_str: string): ReleaseListKind
export function release_list_kind_to_string(kind: ReleaseListKind): string
export function release_url_kind_from_string(kind_str: string): ReleaseUrlKind
export function release_url_kind_to_string(kind: ReleaseUrlKind): string
export function screenshot_kind_from_string(kind: string): ScreenshotKind
export function screenshot_kind_to_string(kind: ScreenshotKind): string
export function size_kind_from_string(size_kind: string): SizeKind
export function size_kind_to_string(size_kind: SizeKind): string
export function spdx_license_detokenize(license_tokens: string): string | null
export function spdx_license_tokenize(license: string): string[] | null
export function suggested_kind_from_string(kind_str: string): SuggestedKind
export function suggested_kind_to_string(kind: SuggestedKind): string
export function system_info_error_quark(): GLib.Quark
export function translation_kind_from_string(kind_str: string): TranslationKind
export function translation_kind_to_string(kind: TranslationKind): string
export function urgency_kind_from_string(urgency_kind: string): UrgencyKind
export function urgency_kind_to_string(urgency_kind: UrgencyKind): string
export function url_kind_from_string(url_kind: string): UrlKind
export function url_kind_to_string(url_kind: UrlKind): string
export function utils_build_data_id(scope: ComponentScope, bundle_kind: BundleKind, origin: string, cid: string, branch: string): string
export function utils_data_id_equal(data_id1: string, data_id2: string): boolean
export function utils_data_id_get_cid(data_id: string): string
export function utils_data_id_hash(data_id: string): number
export function utils_data_id_match(data_id1: string, data_id2: string, match_flags: DataIdMatchFlags): boolean
export function utils_data_id_valid(data_id: string): boolean
export function utils_error_quark(): GLib.Quark
export function utils_get_desktop_environment_name(de_id: string): string
export function utils_get_gui_environment_style_name(env_style: string): string
export function utils_get_tag_search_weight(tag_name: string): number
export function utils_guess_scope_from_path(path: string): ComponentScope
export function utils_install_metadata_file(location: MetadataLocation, filename: string, origin: string, destdir: string): boolean
export function utils_is_category_name(category_name: string): boolean
export function utils_is_desktop_environment(de_id: string): boolean
export function utils_is_gui_environment_style(env_style: string): boolean
export function utils_is_platform_triplet(triplet: string): boolean
export function utils_is_tld(tld: string): boolean
export function utils_locale_is_compatible(locale1?: string | null, locale2?: string | null): boolean
export function utils_posix_locale_to_bcp47(locale: string): string
export function utils_sort_components_into_categories(cpts: Component[], categories: Category[], check_duplicates: boolean): void
export function validator_error_quark(): GLib.Quark
export function vercmp(a: string, b: string, flags: VercmpFlags): number
export function vercmp_simple(a: string, b: string): number
export function vercmp_test_match(ver1: string, compare: RelationCompare, ver2: string, flags: VercmpFlags): boolean
export function version_string(): string
export function video_codec_kind_from_string(str: string): VideoCodecKind
export function video_codec_kind_to_string(kind: VideoCodecKind): string
export function video_container_kind_from_string(str: string): VideoContainerKind
export function video_container_kind_to_string(kind: VideoContainerKind): string
export interface Agreement_ConstructProps extends GObject.Object_ConstructProps {
}
export class Agreement {
    /* Fields of AppStream.Agreement */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Agreement */
    add_section(agreement_section: AgreementSection): void
    get_kind(): AgreementKind
    get_section_default(): AgreementSection | null
    get_sections(): AgreementSection[]
    get_version_id(): string
    set_kind(kind: AgreementKind): void
    set_version_id(version_id: string): void
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
    connect(sigName: "notify", callback: (($obj: Agreement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Agreement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Agreement_ConstructProps)
    _init (config?: Agreement_ConstructProps): void
    static new(): Agreement
    static $gtype: GObject.Type
}
export interface AgreementSection_ConstructProps extends GObject.Object_ConstructProps {
}
export class AgreementSection {
    /* Fields of AppStream.AgreementSection */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.AgreementSection */
    get_context(): Context | null
    get_description(): string
    get_kind(): string
    get_name(): string
    set_context(context: Context): void
    set_description(desc: string, locale?: string | null): void
    set_kind(kind: string): void
    set_name(name: string, locale?: string | null): void
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
    connect(sigName: "notify", callback: (($obj: AgreementSection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AgreementSection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AgreementSection_ConstructProps)
    _init (config?: AgreementSection_ConstructProps): void
    static new(): AgreementSection
    static $gtype: GObject.Type
}
export interface Artifact_ConstructProps extends GObject.Object_ConstructProps {
}
export class Artifact {
    /* Fields of AppStream.Artifact */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Artifact */
    add_checksum(cs: Checksum): void
    add_location(location: string): void
    get_bundle_kind(): BundleKind
    get_checksum(kind: ChecksumKind): Checksum | null
    get_checksums(): Checksum[]
    get_filename(): string
    get_kind(): ArtifactKind
    get_locations(): string[]
    get_platform(): string
    get_size(kind: SizeKind): number
    set_bundle_kind(kind: BundleKind): void
    set_filename(filename: string): void
    set_kind(kind: ArtifactKind): void
    set_platform(platform: string): void
    set_size(size: number, kind: SizeKind): void
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
    connect(sigName: "notify", callback: (($obj: Artifact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Artifact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Artifact_ConstructProps)
    _init (config?: Artifact_ConstructProps): void
    static new(): Artifact
    static $gtype: GObject.Type
}
export interface Branding_ConstructProps extends GObject.Object_ConstructProps {
}
export class Branding {
    /* Fields of AppStream.Branding */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Branding */
    get_color(kind: ColorKind, scheme_kind: ColorSchemeKind): string | null
    remove_color(kind: ColorKind, scheme_preference: ColorSchemeKind): void
    set_color(kind: ColorKind, scheme_preference: ColorSchemeKind, colorcode: string): void
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
    connect(sigName: "notify", callback: (($obj: Branding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Branding, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Branding_ConstructProps)
    _init (config?: Branding_ConstructProps): void
    static new(): Branding
    static $gtype: GObject.Type
}
export interface Bundle_ConstructProps extends GObject.Object_ConstructProps {
}
export class Bundle {
    /* Fields of AppStream.Bundle */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Bundle */
    get_id(): string
    get_kind(): BundleKind
    set_id(id: string): void
    set_kind(kind: BundleKind): void
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
    connect(sigName: "notify", callback: (($obj: Bundle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Bundle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Bundle_ConstructProps)
    _init (config?: Bundle_ConstructProps): void
    static new(): Bundle
    static $gtype: GObject.Type
}
export interface Category_ConstructProps extends GObject.Object_ConstructProps {
    icon?: string
    id?: string
    name?: string
}
export class Category {
    /* Properties of AppStream.Category */
    readonly children: object
    icon: string
    id: string
    name: string
    readonly summary: string
    /* Fields of AppStream.Category */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Category */
    add_child(subcat: Category): void
    add_component(cpt: Component): void
    add_desktop_group(group_name: string): void
    get_children(): Category[]
    get_components(): Component[]
    get_desktop_groups(): string[]
    get_icon(): string
    get_id(): string
    get_name(): string
    get_summary(): string
    has_children(): boolean
    has_component(cpt: Component): boolean
    remove_child(subcat: Category): void
    set_icon(value: string): void
    set_id(id: string): void
    set_name(value: string): void
    set_summary(value: string): void
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
    connect(sigName: "notify", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::children", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Category_ConstructProps)
    _init (config?: Category_ConstructProps): void
    static new(): Category
    static $gtype: GObject.Type
}
export interface Checksum_ConstructProps extends GObject.Object_ConstructProps {
}
export class Checksum {
    /* Fields of AppStream.Checksum */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Checksum */
    get_kind(): ChecksumKind
    get_value(): string
    set_kind(kind: ChecksumKind): void
    set_value(value: string): void
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
    connect(sigName: "notify", callback: (($obj: Checksum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Checksum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Checksum_ConstructProps)
    _init (config?: Checksum_ConstructProps): void
    static new(): Checksum
    static new_with_value(kind: ChecksumKind, value: string): Checksum
    static $gtype: GObject.Type
}
export interface Component_ConstructProps extends GObject.Object_ConstructProps {
    description?: string
    id?: string
    keywords?: string[]
    kind?: ComponentKind
    name?: string
    pkgnames?: string[]
    project_group?: string
    project_license?: string
    summary?: string
}
export class Component {
    /* Properties of AppStream.Component */
    readonly categories: object[]
    description: string
    readonly icons: Icon[]
    id: string
    keywords: string[]
    kind: ComponentKind
    name: string
    pkgnames: string[]
    project_group: string
    project_license: string
    readonly screenshots: Screenshot[]
    summary: string
    readonly urls: GLib.HashTable
    /* Fields of AppStream.Component */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Component */
    add_addon(addon: Component): void
    add_agreement(agreement: Agreement): void
    add_bundle(bundle: Bundle): void
    add_category(category: string): void
    add_content_rating(content_rating: ContentRating): void
    add_extends(cpt_id: string): void
    add_icon(icon: Icon): void
    add_keyword(keyword: string, locale?: string | null): void
    add_language(locale: string | null, percentage: number): void
    add_launchable(launchable: Launchable): void
    add_provided(prov: Provided): void
    add_provided_item(kind: ProvidedKind, item: string): void
    add_reference(reference: Reference): void
    add_relation(relation: Relation): void
    add_release(release: Release): void
    add_replaces(cid: string): void
    add_review(review: Review): void
    add_screenshot(sshot: Screenshot): void
    add_suggested(suggested: Suggested): void
    add_tag(ns: string, tag: string): boolean
    add_translation(tr: Translation): void
    add_url(url_kind: UrlKind, url: string): void
    check_relations(sysinfo: SystemInfo | null, pool: Pool | null, rel_kind: RelationKind): RelationCheckResult[]
    clear_keywords(locale?: string | null): void
    clear_languages(): void
    clear_tags(): void
    get_addons(): Component[]
    get_agreement_by_kind(kind: AgreementKind): Agreement | null
    get_agreements(): Agreement[]
    get_branch(): string
    get_branding(): Branding | null
    get_bundle(bundle_kind: BundleKind): Bundle | null
    get_bundles(): Bundle[]
    get_categories(): string[]
    get_compulsory_for_desktops(): string[]
    get_content_rating(kind: string): ContentRating | null
    get_content_ratings(): ContentRating[]
    get_context(): Context | null
    get_custom(): GLib.HashTable
    get_custom_value(key: string): string
    get_data_id(): string
    get_date_eol(): string
    get_description(): string
    get_developer(): Developer
    get_extends(): string[] | null
    get_icon_by_size(width: number, height: number): Icon | null
    get_icon_stock(): Icon | null
    get_icons(): Icon[]
    get_id(): string
    get_keywords(): string[]
    get_keywords_table(): GLib.HashTable
    get_kind(): ComponentKind
    get_language(locale?: string | null): number
    get_languages(): string[]
    get_launchable(kind: LaunchableKind): Launchable | null
    get_launchables(): Launchable[]
    get_merge_kind(): MergeKind
    get_metadata_license(): string
    get_name(): string
    get_name_table(): GLib.HashTable
    get_name_variant_suffix(): string
    get_origin(): string
    get_pkgname(): string
    get_pkgnames(): string[]
    get_priority(): number
    get_project_group(): string
    get_project_license(): string
    get_provided(): Provided[]
    get_provided_for_kind(kind: ProvidedKind): Provided | null
    get_recommends(): Relation[]
    get_references(): Reference[]
    get_releases_plain(): ReleaseList
    get_replaces(): string[]
    get_requires(): Relation[]
    get_reviews(): Review[]
    get_scope(): ComponentScope
    get_screenshots_all(): Screenshot[]
    get_search_tokens(): string[]
    get_sort_score(): number
    get_source_pkgname(): string
    get_suggested(): Suggested[]
    get_summary(): string
    get_summary_table(): GLib.HashTable
    get_supports(): Relation[]
    get_system_compatibility_score(sysinfo: SystemInfo, is_template: boolean): [ /* returnType */ number, /* results */ RelationCheckResult[] | null ]
    get_timestamp_eol(): number
    get_translations(): Translation[]
    get_url(url_kind: UrlKind): string | null
    has_bundle(): boolean
    has_category(category: string): boolean
    has_tag(ns: string, tag: string): boolean
    insert_custom_value(key: string, value: string): boolean
    is_compulsory_for_desktop(desktop: string): boolean
    is_floss(): boolean
    is_ignored(): boolean
    is_member_of_category(category: Category): boolean
    is_valid(): boolean
    load_from_bytes(context: Context, format: FormatKind, bytes: Gjs.byteArray.ByteArray): boolean
    load_releases(allow_net: boolean): ReleaseList | null
    remove_tag(ns: string, tag: string): boolean
    search_matches(term: string): number
    search_matches_all(terms: string): number
    set_branch(branch: string): void
    set_branding(branding: Branding): void
    set_compulsory_for_desktop(desktop: string): void
    set_context(context: Context): void
    set_context_locale(locale: string): void
    set_data_id(value: string): void
    set_date_eol(date: string): void
    set_description(value: string, locale?: string | null): void
    set_developer(developer: Developer): void
    set_id(value: string): void
    set_keywords(new_keywords: string[], locale: string | null, deep_copy: boolean): void
    set_kind(value: ComponentKind): void
    set_merge_kind(kind: MergeKind): void
    set_metadata_license(value: string): void
    set_name(value: string, locale?: string | null): void
    set_name_variant_suffix(value: string, locale?: string | null): void
    set_origin(origin: string): void
    set_pkgname(pkgname: string): void
    set_pkgnames(packages: string[]): void
    set_priority(priority: number): void
    set_project_group(value: string): void
    set_project_license(value: string): void
    set_releases(releases: ReleaseList): void
    set_scope(scope: ComponentScope): void
    set_sort_score(score: number): void
    set_source_pkgname(spkgname: string): void
    set_summary(value: string, locale?: string | null): void
    sort_screenshots(environment: string | null, style: string | null, prioritize_style: boolean): void
    to_string(): string
    to_xml_data(context: Context): string
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
    connect(sigName: "notify", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::categories", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icons", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icons", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keywords", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keywords", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::kind", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pkgnames", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pkgnames", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::project-group", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::project-group", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::project-license", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::project-license", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::screenshots", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screenshots", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::urls", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urls", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Component_ConstructProps)
    _init (config?: Component_ConstructProps): void
    static new(): Component
    static $gtype: GObject.Type
}
export interface ComponentBox_ConstructProps extends GObject.Object_ConstructProps {
    flags?: number
}
export class ComponentBox {
    /* Properties of AppStream.ComponentBox */
    /* Fields of AppStream.ComponentBox */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.ComponentBox */
    add(cpt: Component): boolean
    as_array(): Component[]
    clear(): void
    get_flags(): ComponentBoxFlags
    get_size(): number
    index_safe(index: number): Component
    is_empty(): boolean
    remove_at(index: number): void
    sort(): void
    sort_by_score(): void
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
    connect(sigName: "notify", callback: (($obj: ComponentBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ComponentBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ComponentBox_ConstructProps)
    _init (config?: ComponentBox_ConstructProps): void
    static new(flags: ComponentBoxFlags): ComponentBox
    static new_simple(): ComponentBox
    static $gtype: GObject.Type
}
export interface ContentRating_ConstructProps extends GObject.Object_ConstructProps {
}
export class ContentRating {
    /* Fields of AppStream.ContentRating */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.ContentRating */
    add_attribute(id: string, value: ContentRatingValue): void
    get_kind(): string
    get_minimum_age(): number
    get_rating_ids(): string[]
    get_value(id: string): ContentRatingValue
    set_kind(kind: string): void
    set_value(id: string, value: ContentRatingValue): void
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
    connect(sigName: "notify", callback: (($obj: ContentRating, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContentRating, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContentRating_ConstructProps)
    _init (config?: ContentRating_ConstructProps): void
    static new(): ContentRating
    static attribute_from_csm_age(id: string, age: number): ContentRatingValue
    static attribute_get_description(id: string, value: ContentRatingValue): string
    static attribute_to_csm_age(id: string, value: ContentRatingValue): number
    static get_all_rating_ids(): string[]
    static $gtype: GObject.Type
}
export interface Context_ConstructProps extends GObject.Object_ConstructProps {
}
export class Context {
    /* Fields of AppStream.Context */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Context */
    get_filename(): string
    get_format_version(): FormatVersion
    get_locale(): string
    get_locale_use_all(): boolean
    get_media_baseurl(): string
    get_origin(): string
    get_priority(): number
    get_style(): FormatStyle
    get_value_flags(): ValueFlags
    has_media_baseurl(): boolean
    set_filename(fname: string): void
    set_format_version(ver: FormatVersion): void
    set_locale(locale?: string | null): void
    set_media_baseurl(value: string): void
    set_origin(value: string): void
    set_priority(priority: number): void
    set_style(style: FormatStyle): void
    set_value_flags(flags: ValueFlags): void
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
    connect(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Context_ConstructProps)
    _init (config?: Context_ConstructProps): void
    static new(): Context
    static $gtype: GObject.Type
}
export interface Developer_ConstructProps extends GObject.Object_ConstructProps {
}
export class Developer {
    /* Fields of AppStream.Developer */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Developer */
    get_id(): string
    get_name(): string
    set_id(id: string): void
    set_name(value: string, locale?: string | null): void
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
    connect(sigName: "notify", callback: (($obj: Developer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Developer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Developer_ConstructProps)
    _init (config?: Developer_ConstructProps): void
    static new(): Developer
    static $gtype: GObject.Type
}
export interface Icon_ConstructProps extends GObject.Object_ConstructProps {
}
export class Icon {
    /* Fields of AppStream.Icon */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Icon */
    get_filename(): string
    get_height(): number
    get_kind(): IconKind
    get_name(): string
    get_scale(): number
    get_url(): string
    get_width(): number
    set_filename(filename: string): void
    set_height(height: number): void
    set_kind(kind: IconKind): void
    set_name(name: string): void
    set_scale(scale: number): void
    set_url(url: string): void
    set_width(width: number): void
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
    connect(sigName: "notify", callback: (($obj: Icon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Icon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Icon_ConstructProps)
    _init (config?: Icon_ConstructProps): void
    static new(): Icon
    static $gtype: GObject.Type
}
export interface Image_ConstructProps extends GObject.Object_ConstructProps {
}
export class Image {
    /* Fields of AppStream.Image */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Image */
    get_height(): number
    get_kind(): ImageKind
    get_locale(): string
    get_scale(): number
    get_url(): string
    get_width(): number
    set_height(height: number): void
    set_kind(kind: ImageKind): void
    set_locale(locale: string): void
    set_scale(scale: number): void
    set_url(url: string): void
    set_width(width: number): void
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
    connect(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Image_ConstructProps)
    _init (config?: Image_ConstructProps): void
    static new(): Image
    static $gtype: GObject.Type
}
export interface Issue_ConstructProps extends GObject.Object_ConstructProps {
}
export class Issue {
    /* Fields of AppStream.Issue */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Issue */
    get_id(): string
    get_kind(): IssueKind
    get_url(): string
    set_id(id: string): void
    set_kind(kind: IssueKind): void
    set_url(url: string): void
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
    connect(sigName: "notify", callback: (($obj: Issue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Issue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Issue_ConstructProps)
    _init (config?: Issue_ConstructProps): void
    static new(): Issue
    static $gtype: GObject.Type
}
export interface Launchable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Launchable {
    /* Fields of AppStream.Launchable */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Launchable */
    add_entry(entry: string): void
    get_entries(): string[]
    get_kind(): LaunchableKind
    set_kind(kind: LaunchableKind): void
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
    connect(sigName: "notify", callback: (($obj: Launchable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Launchable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Launchable_ConstructProps)
    _init (config?: Launchable_ConstructProps): void
    static new(): Launchable
    static $gtype: GObject.Type
}
export interface Metadata_ConstructProps extends GObject.Object_ConstructProps {
}
export class Metadata {
    /* Fields of AppStream.Metadata */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Metadata */
    add_component(cpt: Component): void
    clear_components(): void
    clear_releases(): void
    component_to_metainfo(format: FormatKind): string
    components_to_catalog(format: FormatKind): string
    get_architecture(): string
    get_component(): Component | null
    get_components(): ComponentBox
    get_format_style(): FormatStyle
    get_format_version(): FormatVersion
    get_locale(): string
    get_media_baseurl(): string
    get_origin(): string
    get_parse_flags(): ParseFlags
    get_release_list(): ReleaseList | null
    get_release_lists(): ReleaseList[]
    get_update_existing(): boolean
    get_write_header(): boolean
    parse_bytes(bytes: Gjs.byteArray.ByteArray, format: FormatKind): boolean
    parse_data(data: string, data_len: number, format: FormatKind): boolean
    parse_desktop_data(cid: string, data: string, data_len: number): boolean
    parse_file(file: Gio.File, format: FormatKind): boolean
    parse_releases_bytes(bytes: Gjs.byteArray.ByteArray): boolean
    parse_releases_file(file: Gio.File): boolean
    releases_to_data(releases: ReleaseList): string
    save_catalog(fname: string, format: FormatKind): boolean
    save_metainfo(fname: string, format: FormatKind): boolean
    set_architecture(arch: string): void
    set_format_style(mode: FormatStyle): void
    set_format_version(version: FormatVersion): void
    set_locale(locale: string): void
    set_media_baseurl(url: string): void
    set_origin(origin: string): void
    set_parse_flags(flags: ParseFlags): void
    set_update_existing(update: boolean): void
    set_write_header(wheader: boolean): void
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
    connect(sigName: "notify", callback: (($obj: Metadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Metadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Metadata_ConstructProps)
    _init (config?: Metadata_ConstructProps): void
    static new(): Metadata
    static file_guess_style(filename: string): FormatStyle
    static $gtype: GObject.Type
}
export interface Pool_ConstructProps extends GObject.Object_ConstructProps {
}
export class Pool {
    /* Fields of AppStream.Pool */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Pool */
    add_components(cbox: ComponentBox): boolean
    add_extra_data_location(directory: string, format_style: FormatStyle): void
    add_flags(flags: PoolFlags): void
    build_search_tokens(search: string): string[]
    clear(): void
    get_components(): ComponentBox
    get_components_by_bundle_id(kind: BundleKind, bundle_id: string, match_prefix: boolean): ComponentBox
    get_components_by_categories(categories: string[]): ComponentBox
    get_components_by_extends(extended_id: string): ComponentBox
    get_components_by_id(cid: string): ComponentBox
    get_components_by_kind(kind: ComponentKind): ComponentBox
    get_components_by_launchable(kind: LaunchableKind, id: string): ComponentBox
    get_components_by_provided_item(kind: ProvidedKind, item: string): ComponentBox
    get_flags(): PoolFlags
    get_locale(): string
    is_empty(): boolean
    load(cancellable?: Gio.Cancellable | null): boolean
    load_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    load_finish(result: Gio.AsyncResult): boolean
    remove_flags(flags: PoolFlags): void
    reset_extra_data_locations(): void
    search(search: string): ComponentBox
    set_flags(flags: PoolFlags): void
    set_load_std_data_locations(enabled: boolean): void
    set_locale(locale: string): void
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
    /* Virtual methods of AppStream.Pool */
    vfunc_changed?(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed?(): void
    vfunc_dispatch_properties_changed?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose?(): void
    vfunc_finalize?(): void
    vfunc_get_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify?(pspec: GObject.ParamSpec): void
    vfunc_set_property?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of AppStream.Pool */
    connect(sigName: "changed", callback: (($obj: Pool) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Pool) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Pool_ConstructProps)
    _init (config?: Pool_ConstructProps): void
    static new(): Pool
    static $gtype: GObject.Type
}
export interface Provided_ConstructProps extends GObject.Object_ConstructProps {
}
export class Provided {
    /* Fields of AppStream.Provided */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Provided */
    add_item(item: string): void
    get_items(): string[]
    get_kind(): ProvidedKind
    has_item(item: string): boolean
    set_kind(kind: ProvidedKind): void
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
    connect(sigName: "notify", callback: (($obj: Provided, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Provided, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Provided_ConstructProps)
    _init (config?: Provided_ConstructProps): void
    static new(): Provided
    static $gtype: GObject.Type
}
export interface Reference_ConstructProps extends GObject.Object_ConstructProps {
}
export class Reference {
    /* Fields of AppStream.Reference */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Reference */
    get_kind(): ReferenceKind
    get_registry_name(): string | null
    get_value(): string
    set_kind(kind: ReferenceKind): void
    set_registry_name(name: string): void
    set_value(value: string): void
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
    connect(sigName: "notify", callback: (($obj: Reference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Reference, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Reference_ConstructProps)
    _init (config?: Reference_ConstructProps): void
    static new(): Reference
    static $gtype: GObject.Type
}
export interface Relation_ConstructProps extends GObject.Object_ConstructProps {
}
export class Relation {
    /* Fields of AppStream.Relation */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Relation */
    get_compare(): RelationCompare
    get_display_side_kind(): DisplaySideKind
    get_item_kind(): RelationItemKind
    get_kind(): RelationKind
    get_value_control_kind(): ControlKind
    get_value_int(): number
    get_value_internet_bandwidth(): number
    get_value_internet_kind(): InternetKind
    get_value_px(): number
    get_value_str(): string
    get_version(): string
    is_satisfied(system_info?: SystemInfo | null, pool?: Pool | null): RelationCheckResult | null
    set_compare(compare: RelationCompare): void
    set_display_side_kind(kind: DisplaySideKind): void
    set_item_kind(kind: RelationItemKind): void
    set_kind(kind: RelationKind): void
    set_value_control_kind(kind: ControlKind): void
    set_value_int(value: number): void
    set_value_internet_bandwidth(bandwidth_mbitps: number): void
    set_value_internet_kind(kind: InternetKind): void
    set_value_px(logical_px: number): void
    set_value_str(value: string): void
    set_version(version: string): void
    version_compare(version: string): boolean
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
    connect(sigName: "notify", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Relation_ConstructProps)
    _init (config?: Relation_ConstructProps): void
    static new(): Relation
    static check_results_get_compatibility_score(rc_results: RelationCheckResult[]): number
    static $gtype: GObject.Type
}
export interface RelationCheckResult_ConstructProps extends GObject.Object_ConstructProps {
}
export class RelationCheckResult {
    /* Fields of AppStream.RelationCheckResult */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.RelationCheckResult */
    get_error_code(): RelationError
    get_message(): string | null
    get_relation(): Relation | null
    get_status(): RelationStatus
    set_error_code(ecode: RelationError): void
    set_relation(relation: Relation): void
    set_status(status: RelationStatus): void
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
    connect(sigName: "notify", callback: (($obj: RelationCheckResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RelationCheckResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RelationCheckResult_ConstructProps)
    _init (config?: RelationCheckResult_ConstructProps): void
    static new(): RelationCheckResult
    static $gtype: GObject.Type
}
export interface Release_ConstructProps extends GObject.Object_ConstructProps {
}
export class Release {
    /* Fields of AppStream.Release */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Release */
    add_artifact(artifact: Artifact): void
    add_issue(issue: Issue): void
    add_tag(ns: string, tag: string): boolean
    clear_tags(): void
    get_artifacts(): Artifact[]
    get_context(): Context | null
    get_date(): string | null
    get_date_eol(): string | null
    get_description(): string | null
    get_issues(): Issue[]
    get_kind(): ReleaseKind
    get_timestamp(): number
    get_timestamp_eol(): number
    get_urgency(): UrgencyKind
    get_url(url_kind: ReleaseUrlKind): string | null
    get_version(): string | null
    has_tag(ns: string, tag: string): boolean
    remove_tag(ns: string, tag: string): boolean
    set_context(context: Context): void
    set_date(date: string): void
    set_date_eol(date: string): void
    set_description(description: string, locale?: string | null): void
    set_kind(kind: ReleaseKind): void
    set_timestamp(timestamp: number): void
    set_timestamp_eol(timestamp: number): void
    set_urgency(urgency: UrgencyKind): void
    set_url(url_kind: ReleaseUrlKind, url: string): void
    set_version(version: string): void
    vercmp(rel2: Release): number
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
    connect(sigName: "notify", callback: (($obj: Release, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Release, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Release_ConstructProps)
    _init (config?: Release_ConstructProps): void
    static new(): Release
    static $gtype: GObject.Type
}
export interface ReleaseList_ConstructProps extends GObject.Object_ConstructProps {
}
export class ReleaseList {
    /* Fields of AppStream.ReleaseList */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.ReleaseList */
    add(release: Release): void
    clear(): void
    get_context(): Context | null
    get_entries(): Release[]
    get_kind(): ReleaseListKind
    get_size(): number
    get_url(): string | null
    index_safe(index: number): Release
    is_empty(): boolean
    load_from_bytes(context: Context | null, bytes: Gjs.byteArray.ByteArray): boolean
    set_context(context: Context): void
    set_kind(kind: ReleaseListKind): void
    set_size(size: number): void
    set_url(url: string): void
    sort(): void
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
    connect(sigName: "notify", callback: (($obj: ReleaseList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ReleaseList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ReleaseList_ConstructProps)
    _init (config?: ReleaseList_ConstructProps): void
    static new(): ReleaseList
    static $gtype: GObject.Type
}
export interface Review_ConstructProps extends GObject.Object_ConstructProps {
    date?: Review
    description?: string
    flags?: number
    id?: string
    locale?: string
    priority?: number
    rating?: number
    reviewer_id?: string
    reviewer_name?: string
    summary?: string
    version?: string
}
export class Review {
    /* Properties of AppStream.Review */
    date: Review
    description: string
    flags: number
    id: string
    locale: string
    priority: number
    rating: number
    reviewer_id: string
    reviewer_name: string
    summary: string
    version: string
    /* Fields of AppStream.Review */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Review */
    add_flags(flags: ReviewFlags): void
    add_metadata(key: string, value: string): void
    equal(review2: Review): boolean
    get_date(): GLib.DateTime
    get_description(): string
    get_flags(): ReviewFlags
    get_id(): string
    get_locale(): string
    get_metadata_item(key: string): string
    get_priority(): number
    get_rating(): number
    get_reviewer_id(): string
    get_reviewer_name(): string
    get_summary(): string
    get_version(): string
    set_date(date: GLib.DateTime): void
    set_description(description: string): void
    set_flags(flags: ReviewFlags): void
    set_id(id: string): void
    set_locale(locale: string): void
    set_priority(priority: number): void
    set_rating(rating: number): void
    set_reviewer_id(reviewer_id: string): void
    set_reviewer_name(reviewer_name: string): void
    set_summary(summary: string): void
    set_version(version: string): void
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
    connect(sigName: "notify", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::date", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::locale", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rating", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rating", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reviewer-id", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reviewer-id", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reviewer-name", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reviewer-name", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::summary", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Review, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Review_ConstructProps)
    _init (config?: Review_ConstructProps): void
    static new(): Review
    static $gtype: GObject.Type
}
export interface Screenshot_ConstructProps extends GObject.Object_ConstructProps {
}
export class Screenshot {
    /* Fields of AppStream.Screenshot */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Screenshot */
    add_image(image: Image): void
    add_video(video: Video): void
    clear_images(): void
    get_caption(): string
    get_context(): Context | null
    get_environment(): string | null
    get_image(width: number, height: number, scale: number): Image | null
    get_images(): Image[]
    get_images_all(): Image[]
    get_kind(): ScreenshotKind
    get_media_kind(): ScreenshotMediaKind
    get_videos(): Video[]
    get_videos_all(): Video[]
    is_valid(): boolean
    set_caption(caption: string, locale: string): void
    set_context(context: Context): void
    set_environment(env_id?: string | null): void
    set_kind(kind: ScreenshotKind): void
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
    connect(sigName: "notify", callback: (($obj: Screenshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Screenshot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Screenshot_ConstructProps)
    _init (config?: Screenshot_ConstructProps): void
    static new(): Screenshot
    static $gtype: GObject.Type
}
export interface Suggested_ConstructProps extends GObject.Object_ConstructProps {
}
export class Suggested {
    /* Fields of AppStream.Suggested */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Suggested */
    add_id(cid: string): void
    get_ids(): string[]
    get_kind(): SuggestedKind
    is_valid(): boolean
    set_kind(kind: SuggestedKind): void
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
    connect(sigName: "notify", callback: (($obj: Suggested, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Suggested, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Suggested_ConstructProps)
    _init (config?: Suggested_ConstructProps): void
    static new(): Suggested
    static $gtype: GObject.Type
}
export interface SystemInfo_ConstructProps extends GObject.Object_ConstructProps {
}
export class SystemInfo {
    /* Fields of AppStream.SystemInfo */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.SystemInfo */
    get_device_name_for_modalias(modalias: string, allow_fallback: boolean): string
    get_display_length(side: DisplaySideKind): number
    get_gui_available(): boolean
    get_kernel_name(): string
    get_kernel_version(): string
    get_memory_total(): number
    get_modaliases(): string[]
    get_os_cid(): string
    get_os_homepage(): string
    get_os_id(): string
    get_os_name(): string
    get_os_version(): string
    has_device_matching_modalias(modalias_glob: string): boolean
    has_input_control(kind: ControlKind): CheckResult
    modalias_to_syspath(modalias: string): string
    set_display_length(side: DisplaySideKind, value_dip: number): void
    set_gui_available(available: boolean): void
    set_input_control(kind: ControlKind, found: boolean): void
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
    connect(sigName: "notify", callback: (($obj: SystemInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SystemInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SystemInfo_ConstructProps)
    _init (config?: SystemInfo_ConstructProps): void
    static new(): SystemInfo
    static new_template_for_chassis(chassis: ChassisKind): SystemInfo
    static $gtype: GObject.Type
}
export interface Translation_ConstructProps extends GObject.Object_ConstructProps {
}
export class Translation {
    /* Fields of AppStream.Translation */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Translation */
    get_id(): string
    get_kind(): TranslationKind
    get_source_locale(): string
    set_id(id: string): void
    set_kind(kind: TranslationKind): void
    set_source_locale(locale?: string | null): void
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
    connect(sigName: "notify", callback: (($obj: Translation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Translation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Translation_ConstructProps)
    _init (config?: Translation_ConstructProps): void
    static new(): Translation
    static $gtype: GObject.Type
}
export interface Validator_ConstructProps extends GObject.Object_ConstructProps {
}
export class Validator {
    /* Fields of AppStream.Validator */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Validator */
    add_override(tag: string, severity_override: IssueSeverity): boolean
    add_release_bytes(release_fname: string, release_metadata: Gjs.byteArray.ByteArray): boolean
    add_release_file(release_file: Gio.File): boolean
    check_success(): boolean
    clear_release_data(): void
    get_allow_net(): boolean
    get_issue_files_count(): number
    get_issues(): ValidatorIssue[]
    get_issues_per_file(): GLib.HashTable
    get_report_yaml(): string
    get_strict(): boolean
    get_tag_explanation(tag: string): string
    get_tag_severity(tag: string): IssueSeverity
    get_tags(): string[]
    set_allow_net(value: boolean): void
    set_strict(is_strict: boolean): void
    validate_bytes(metadata: Gjs.byteArray.ByteArray): boolean
    validate_data(metadata: string): boolean
    validate_file(metadata_file: Gio.File): boolean
    validate_tree(root_dir: string): boolean
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
    connect(sigName: "notify", callback: (($obj: Validator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Validator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Validator_ConstructProps)
    _init (config?: Validator_ConstructProps): void
    static new(): Validator
    static $gtype: GObject.Type
}
export interface ValidatorIssue_ConstructProps extends GObject.Object_ConstructProps {
}
export class ValidatorIssue {
    /* Fields of AppStream.ValidatorIssue */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.ValidatorIssue */
    get_cid(): string
    get_explanation(): string
    get_filename(): string
    get_hint(): string
    get_line(): number
    get_location(): string
    get_severity(): IssueSeverity
    get_tag(): string
    set_cid(cid: string): void
    set_explanation(explanation: string): void
    set_filename(fname: string): void
    set_hint(hint: string): void
    set_line(line: number): void
    set_severity(severity: IssueSeverity): void
    set_tag(tag: string): void
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
    connect(sigName: "notify", callback: (($obj: ValidatorIssue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ValidatorIssue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ValidatorIssue_ConstructProps)
    _init (config?: ValidatorIssue_ConstructProps): void
    static new(): ValidatorIssue
    static $gtype: GObject.Type
}
export interface Video_ConstructProps extends GObject.Object_ConstructProps {
}
export class Video {
    /* Fields of AppStream.Video */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStream.Video */
    get_codec_kind(): VideoCodecKind
    get_container_kind(): VideoContainerKind
    get_height(): number
    get_locale(): string
    get_url(): string
    get_width(): number
    set_codec_kind(kind: VideoCodecKind): void
    set_container_kind(kind: VideoContainerKind): void
    set_height(height: number): void
    set_locale(locale: string): void
    set_url(url: string): void
    set_width(width: number): void
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
    connect(sigName: "notify", callback: (($obj: Video, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Video, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Video_ConstructProps)
    _init (config?: Video_ConstructProps): void
    static new(): Video
    static $gtype: GObject.Type
}
export abstract class AgreementClass {
    /* Fields of AppStream.AgreementClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class AgreementSectionClass {
    /* Fields of AppStream.AgreementSectionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ArtifactClass {
    /* Fields of AppStream.ArtifactClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class BrandingClass {
    /* Fields of AppStream.BrandingClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class BrandingColorIter {
    /* Fields of AppStream.BrandingColorIter */
    /* Methods of AppStream.BrandingColorIter */
    init(branding: Branding): void
    next(): [ /* returnType */ boolean, /* kind */ ColorKind | null, /* scheme_preference */ ColorSchemeKind | null, /* value */ string | null ]
    static name: string
}
export abstract class BundleClass {
    /* Fields of AppStream.BundleClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class CategoryClass {
    /* Fields of AppStream.CategoryClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ChecksumClass {
    /* Fields of AppStream.ChecksumClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ComponentBoxClass {
    /* Fields of AppStream.ComponentBoxClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ComponentClass {
    /* Fields of AppStream.ComponentClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ContentRatingClass {
    /* Fields of AppStream.ContentRatingClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ContextClass {
    /* Fields of AppStream.ContextClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class DeveloperClass {
    /* Fields of AppStream.DeveloperClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class IconClass {
    /* Fields of AppStream.IconClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ImageClass {
    /* Fields of AppStream.ImageClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class IssueClass {
    /* Fields of AppStream.IssueClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class LaunchableClass {
    /* Fields of AppStream.LaunchableClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class MetadataClass {
    /* Fields of AppStream.MetadataClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class PoolClass {
    /* Fields of AppStream.PoolClass */
    parent_class: GObject.ObjectClass
    changed: any
    static name: string
}
export abstract class ProvidedClass {
    /* Fields of AppStream.ProvidedClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ReferenceClass {
    /* Fields of AppStream.ReferenceClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class RelationCheckResultClass {
    /* Fields of AppStream.RelationCheckResultClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class RelationClass {
    /* Fields of AppStream.RelationClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ReleaseClass {
    /* Fields of AppStream.ReleaseClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ReleaseListClass {
    /* Fields of AppStream.ReleaseListClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ReviewClass {
    /* Fields of AppStream.ReviewClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ScreenshotClass {
    /* Fields of AppStream.ScreenshotClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SuggestedClass {
    /* Fields of AppStream.SuggestedClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SystemInfoClass {
    /* Fields of AppStream.SystemInfoClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class TranslationClass {
    /* Fields of AppStream.TranslationClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ValidatorClass {
    /* Fields of AppStream.ValidatorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ValidatorIssueClass {
    /* Fields of AppStream.ValidatorIssueClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class VideoClass {
    /* Fields of AppStream.VideoClass */
    parent_class: GObject.ObjectClass
    static name: string
}