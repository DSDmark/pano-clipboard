/**
 * HarfBuzz-0.0
 */

import * as Gjs from './Gjs';
import * as freetype2 from './freetype2-2.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';

export enum buffer_cluster_level_t {
    MONOTONE_GRAPHEMES,
    MONOTONE_CHARACTERS,
    CHARACTERS,
    GRAPHEMES,
    DEFAULT,
}
export enum buffer_content_type_t {
    INVALID,
    UNICODE,
    GLYPHS,
}
export enum direction_t {
    INVALID,
    LTR,
    RTL,
    TTB,
    BTT,
}
export enum memory_mode_t {
    DUPLICATE,
    READONLY,
    WRITABLE,
    READONLY_MAY_MAKE_WRITABLE,
}
export enum ot_layout_glyph_class_t {
    UNCLASSIFIED,
    BASE_GLYPH,
    LIGATURE,
    MARK,
    COMPONENT,
}
export enum ot_math_constant_t {
    SCRIPT_PERCENT_SCALE_DOWN,
    SCRIPT_SCRIPT_PERCENT_SCALE_DOWN,
    DELIMITED_SUB_FORMULA_MIN_HEIGHT,
    DISPLAY_OPERATOR_MIN_HEIGHT,
    MATH_LEADING,
    AXIS_HEIGHT,
    ACCENT_BASE_HEIGHT,
    FLATTENED_ACCENT_BASE_HEIGHT,
    SUBSCRIPT_SHIFT_DOWN,
    SUBSCRIPT_TOP_MAX,
    SUBSCRIPT_BASELINE_DROP_MIN,
    SUPERSCRIPT_SHIFT_UP,
    SUPERSCRIPT_SHIFT_UP_CRAMPED,
    SUPERSCRIPT_BOTTOM_MIN,
    SUPERSCRIPT_BASELINE_DROP_MAX,
    SUB_SUPERSCRIPT_GAP_MIN,
    SUPERSCRIPT_BOTTOM_MAX_WITH_SUBSCRIPT,
    SPACE_AFTER_SCRIPT,
    UPPER_LIMIT_GAP_MIN,
    UPPER_LIMIT_BASELINE_RISE_MIN,
    LOWER_LIMIT_GAP_MIN,
    LOWER_LIMIT_BASELINE_DROP_MIN,
    STACK_TOP_SHIFT_UP,
    STACK_TOP_DISPLAY_STYLE_SHIFT_UP,
    STACK_BOTTOM_SHIFT_DOWN,
    STACK_BOTTOM_DISPLAY_STYLE_SHIFT_DOWN,
    STACK_GAP_MIN,
    STACK_DISPLAY_STYLE_GAP_MIN,
    STRETCH_STACK_TOP_SHIFT_UP,
    STRETCH_STACK_BOTTOM_SHIFT_DOWN,
    STRETCH_STACK_GAP_ABOVE_MIN,
    STRETCH_STACK_GAP_BELOW_MIN,
    FRACTION_NUMERATOR_SHIFT_UP,
    FRACTION_NUMERATOR_DISPLAY_STYLE_SHIFT_UP,
    FRACTION_DENOMINATOR_SHIFT_DOWN,
    FRACTION_DENOMINATOR_DISPLAY_STYLE_SHIFT_DOWN,
    FRACTION_NUMERATOR_GAP_MIN,
    FRACTION_NUM_DISPLAY_STYLE_GAP_MIN,
    FRACTION_RULE_THICKNESS,
    FRACTION_DENOMINATOR_GAP_MIN,
    FRACTION_DENOM_DISPLAY_STYLE_GAP_MIN,
    SKEWED_FRACTION_HORIZONTAL_GAP,
    SKEWED_FRACTION_VERTICAL_GAP,
    OVERBAR_VERTICAL_GAP,
    OVERBAR_RULE_THICKNESS,
    OVERBAR_EXTRA_ASCENDER,
    UNDERBAR_VERTICAL_GAP,
    UNDERBAR_RULE_THICKNESS,
    UNDERBAR_EXTRA_DESCENDER,
    RADICAL_VERTICAL_GAP,
    RADICAL_DISPLAY_STYLE_VERTICAL_GAP,
    RADICAL_RULE_THICKNESS,
    RADICAL_EXTRA_ASCENDER,
    RADICAL_KERN_BEFORE_DEGREE,
    RADICAL_KERN_AFTER_DEGREE,
    RADICAL_DEGREE_BOTTOM_RAISE_PERCENT,
}
export enum ot_math_kern_t {
    TOP_RIGHT,
    TOP_LEFT,
    BOTTOM_RIGHT,
    BOTTOM_LEFT,
}
export enum ot_name_id_predefined_t {
    COPYRIGHT,
    FONT_FAMILY,
    FONT_SUBFAMILY,
    UNIQUE_ID,
    FULL_NAME,
    VERSION_STRING,
    POSTSCRIPT_NAME,
    TRADEMARK,
    MANUFACTURER,
    DESIGNER,
    DESCRIPTION,
    VENDOR_URL,
    DESIGNER_URL,
    LICENSE,
    LICENSE_URL,
    TYPOGRAPHIC_FAMILY,
    TYPOGRAPHIC_SUBFAMILY,
    MAC_FULL_NAME,
    SAMPLE_TEXT,
    CID_FINDFONT_NAME,
    WWS_FAMILY,
    WWS_SUBFAMILY,
    LIGHT_BACKGROUND,
    DARK_BACKGROUND,
    VARIATIONS_PS_PREFIX,
    INVALID,
}
export enum paint_composite_mode_t {
    CLEAR,
    SRC,
    DEST,
    SRC_OVER,
    DEST_OVER,
    SRC_IN,
    DEST_IN,
    SRC_OUT,
    DEST_OUT,
    SRC_ATOP,
    DEST_ATOP,
    XOR,
    PLUS,
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
    MULTIPLY,
    HSL_HUE,
    HSL_SATURATION,
    HSL_COLOR,
    HSL_LUMINOSITY,
}
export enum paint_extend_t {
    PAD,
    REPEAT,
    REFLECT,
}
export enum unicode_combining_class_t {
    NOT_REORDERED,
    OVERLAY,
    NUKTA,
    KANA_VOICING,
    VIRAMA,
    CCC10,
    CCC11,
    CCC12,
    CCC13,
    CCC14,
    CCC15,
    CCC16,
    CCC17,
    CCC18,
    CCC19,
    CCC20,
    CCC21,
    CCC22,
    CCC23,
    CCC24,
    CCC25,
    CCC26,
    CCC27,
    CCC28,
    CCC29,
    CCC30,
    CCC31,
    CCC32,
    CCC33,
    CCC34,
    CCC35,
    CCC36,
    CCC84,
    CCC91,
    CCC103,
    CCC107,
    CCC118,
    CCC122,
    CCC129,
    CCC130,
    CCC132,
    ATTACHED_BELOW_LEFT,
    ATTACHED_BELOW,
    ATTACHED_ABOVE,
    ATTACHED_ABOVE_RIGHT,
    BELOW_LEFT,
    BELOW,
    BELOW_RIGHT,
    LEFT,
    RIGHT,
    ABOVE_LEFT,
    ABOVE,
    ABOVE_RIGHT,
    DOUBLE_BELOW,
    DOUBLE_ABOVE,
    IOTA_SUBSCRIPT,
    INVALID,
}
export enum unicode_general_category_t {
    CONTROL,
    FORMAT,
    UNASSIGNED,
    PRIVATE_USE,
    SURROGATE,
    LOWERCASE_LETTER,
    MODIFIER_LETTER,
    OTHER_LETTER,
    TITLECASE_LETTER,
    UPPERCASE_LETTER,
    SPACING_MARK,
    ENCLOSING_MARK,
    NON_SPACING_MARK,
    DECIMAL_NUMBER,
    LETTER_NUMBER,
    OTHER_NUMBER,
    CONNECT_PUNCTUATION,
    DASH_PUNCTUATION,
    CLOSE_PUNCTUATION,
    FINAL_PUNCTUATION,
    INITIAL_PUNCTUATION,
    OTHER_PUNCTUATION,
    OPEN_PUNCTUATION,
    CURRENCY_SYMBOL,
    MODIFIER_SYMBOL,
    MATH_SYMBOL,
    OTHER_SYMBOL,
    LINE_SEPARATOR,
    PARAGRAPH_SEPARATOR,
    SPACE_SEPARATOR,
}
export enum aat_layout_feature_selector_t {
    B_AAT_LAYOUT_FEATURE_SELECTOR_INVALID,
    B_AAT_LAYOUT_FEATURE_SELECTOR_ALL_TYPE_FEATURES_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_ALL_TYPE_FEATURES_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_REQUIRED_LIGATURES_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_REQUIRED_LIGATURES_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_COMMON_LIGATURES_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_COMMON_LIGATURES_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_RARE_LIGATURES_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_RARE_LIGATURES_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_LOGOS_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_LOGOS_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_REBUS_PICTURES_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_REBUS_PICTURES_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_DIPHTHONG_LIGATURES_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_DIPHTHONG_LIGATURES_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_SQUARED_LIGATURES_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_SQUARED_LIGATURES_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_ABBREV_SQUARED_LIGATURES_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_ABBREV_SQUARED_LIGATURES_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_SYMBOL_LIGATURES_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_SYMBOL_LIGATURES_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CONTEXTUAL_LIGATURES_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CONTEXTUAL_LIGATURES_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_HISTORICAL_LIGATURES_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_HISTORICAL_LIGATURES_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_UNCONNECTED,
    B_AAT_LAYOUT_FEATURE_SELECTOR_PARTIALLY_CONNECTED,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CURSIVE,
    B_AAT_LAYOUT_FEATURE_SELECTOR_UPPER_AND_LOWER_CASE,
    B_AAT_LAYOUT_FEATURE_SELECTOR_ALL_CAPS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_ALL_LOWER_CASE,
    B_AAT_LAYOUT_FEATURE_SELECTOR_SMALL_CAPS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_INITIAL_CAPS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_INITIAL_CAPS_AND_SMALL_CAPS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_SUBSTITUTE_VERTICAL_FORMS_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_SUBSTITUTE_VERTICAL_FORMS_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_LINGUISTIC_REARRANGEMENT_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_LINGUISTIC_REARRANGEMENT_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_MONOSPACED_NUMBERS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_PROPORTIONAL_NUMBERS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_THIRD_WIDTH_NUMBERS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_QUARTER_WIDTH_NUMBERS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_WORD_INITIAL_SWASHES_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_WORD_INITIAL_SWASHES_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_WORD_FINAL_SWASHES_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_WORD_FINAL_SWASHES_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_LINE_INITIAL_SWASHES_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_LINE_INITIAL_SWASHES_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_LINE_FINAL_SWASHES_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_LINE_FINAL_SWASHES_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_NON_FINAL_SWASHES_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_NON_FINAL_SWASHES_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_SHOW_DIACRITICS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_HIDE_DIACRITICS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_DECOMPOSE_DIACRITICS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_NORMAL_POSITION,
    B_AAT_LAYOUT_FEATURE_SELECTOR_SUPERIORS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_INFERIORS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_ORDINALS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_SCIENTIFIC_INFERIORS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_NO_FRACTIONS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_VERTICAL_FRACTIONS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_DIAGONAL_FRACTIONS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_PREVENT_OVERLAP_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_PREVENT_OVERLAP_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_HYPHENS_TO_EM_DASH_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_HYPHENS_TO_EM_DASH_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_HYPHEN_TO_EN_DASH_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_HYPHEN_TO_EN_DASH_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_SLASHED_ZERO_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_SLASHED_ZERO_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_FORM_INTERROBANG_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_FORM_INTERROBANG_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_SMART_QUOTES_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_SMART_QUOTES_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_PERIODS_TO_ELLIPSIS_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_PERIODS_TO_ELLIPSIS_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_HYPHEN_TO_MINUS_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_HYPHEN_TO_MINUS_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_ASTERISK_TO_MULTIPLY_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_ASTERISK_TO_MULTIPLY_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_SLASH_TO_DIVIDE_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_SLASH_TO_DIVIDE_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_INEQUALITY_LIGATURES_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_INEQUALITY_LIGATURES_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_EXPONENTS_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_EXPONENTS_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_MATHEMATICAL_GREEK_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_MATHEMATICAL_GREEK_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_NO_ORNAMENTS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_DINGBATS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_PI_CHARACTERS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_FLEURONS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_DECORATIVE_BORDERS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_INTERNATIONAL_SYMBOLS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_MATH_SYMBOLS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_NO_ALTERNATES,
    B_AAT_LAYOUT_FEATURE_SELECTOR_DESIGN_LEVEL1,
    B_AAT_LAYOUT_FEATURE_SELECTOR_DESIGN_LEVEL2,
    B_AAT_LAYOUT_FEATURE_SELECTOR_DESIGN_LEVEL3,
    B_AAT_LAYOUT_FEATURE_SELECTOR_DESIGN_LEVEL4,
    B_AAT_LAYOUT_FEATURE_SELECTOR_DESIGN_LEVEL5,
    B_AAT_LAYOUT_FEATURE_SELECTOR_NO_STYLE_OPTIONS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_DISPLAY_TEXT,
    B_AAT_LAYOUT_FEATURE_SELECTOR_ENGRAVED_TEXT,
    B_AAT_LAYOUT_FEATURE_SELECTOR_ILLUMINATED_CAPS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_TITLING_CAPS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_TALL_CAPS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_TRADITIONAL_CHARACTERS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_SIMPLIFIED_CHARACTERS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_JIS1978_CHARACTERS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_JIS1983_CHARACTERS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_JIS1990_CHARACTERS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_TRADITIONAL_ALT_ONE,
    B_AAT_LAYOUT_FEATURE_SELECTOR_TRADITIONAL_ALT_TWO,
    B_AAT_LAYOUT_FEATURE_SELECTOR_TRADITIONAL_ALT_THREE,
    B_AAT_LAYOUT_FEATURE_SELECTOR_TRADITIONAL_ALT_FOUR,
    B_AAT_LAYOUT_FEATURE_SELECTOR_TRADITIONAL_ALT_FIVE,
    B_AAT_LAYOUT_FEATURE_SELECTOR_EXPERT_CHARACTERS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_JIS2004_CHARACTERS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_HOJO_CHARACTERS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_NLCCHARACTERS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_TRADITIONAL_NAMES_CHARACTERS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_LOWER_CASE_NUMBERS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_UPPER_CASE_NUMBERS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_PROPORTIONAL_TEXT,
    B_AAT_LAYOUT_FEATURE_SELECTOR_MONOSPACED_TEXT,
    B_AAT_LAYOUT_FEATURE_SELECTOR_HALF_WIDTH_TEXT,
    B_AAT_LAYOUT_FEATURE_SELECTOR_THIRD_WIDTH_TEXT,
    B_AAT_LAYOUT_FEATURE_SELECTOR_QUARTER_WIDTH_TEXT,
    B_AAT_LAYOUT_FEATURE_SELECTOR_ALT_PROPORTIONAL_TEXT,
    B_AAT_LAYOUT_FEATURE_SELECTOR_ALT_HALF_WIDTH_TEXT,
    B_AAT_LAYOUT_FEATURE_SELECTOR_NO_TRANSLITERATION,
    B_AAT_LAYOUT_FEATURE_SELECTOR_HANJA_TO_HANGUL,
    B_AAT_LAYOUT_FEATURE_SELECTOR_HIRAGANA_TO_KATAKANA,
    B_AAT_LAYOUT_FEATURE_SELECTOR_KATAKANA_TO_HIRAGANA,
    B_AAT_LAYOUT_FEATURE_SELECTOR_KANA_TO_ROMANIZATION,
    B_AAT_LAYOUT_FEATURE_SELECTOR_ROMANIZATION_TO_HIRAGANA,
    B_AAT_LAYOUT_FEATURE_SELECTOR_ROMANIZATION_TO_KATAKANA,
    B_AAT_LAYOUT_FEATURE_SELECTOR_HANJA_TO_HANGUL_ALT_ONE,
    B_AAT_LAYOUT_FEATURE_SELECTOR_HANJA_TO_HANGUL_ALT_TWO,
    B_AAT_LAYOUT_FEATURE_SELECTOR_HANJA_TO_HANGUL_ALT_THREE,
    B_AAT_LAYOUT_FEATURE_SELECTOR_NO_ANNOTATION,
    B_AAT_LAYOUT_FEATURE_SELECTOR_BOX_ANNOTATION,
    B_AAT_LAYOUT_FEATURE_SELECTOR_ROUNDED_BOX_ANNOTATION,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CIRCLE_ANNOTATION,
    B_AAT_LAYOUT_FEATURE_SELECTOR_INVERTED_CIRCLE_ANNOTATION,
    B_AAT_LAYOUT_FEATURE_SELECTOR_PARENTHESIS_ANNOTATION,
    B_AAT_LAYOUT_FEATURE_SELECTOR_PERIOD_ANNOTATION,
    B_AAT_LAYOUT_FEATURE_SELECTOR_ROMAN_NUMERAL_ANNOTATION,
    B_AAT_LAYOUT_FEATURE_SELECTOR_DIAMOND_ANNOTATION,
    B_AAT_LAYOUT_FEATURE_SELECTOR_INVERTED_BOX_ANNOTATION,
    B_AAT_LAYOUT_FEATURE_SELECTOR_INVERTED_ROUNDED_BOX_ANNOTATION,
    B_AAT_LAYOUT_FEATURE_SELECTOR_FULL_WIDTH_KANA,
    B_AAT_LAYOUT_FEATURE_SELECTOR_PROPORTIONAL_KANA,
    B_AAT_LAYOUT_FEATURE_SELECTOR_FULL_WIDTH_IDEOGRAPHS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_PROPORTIONAL_IDEOGRAPHS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_HALF_WIDTH_IDEOGRAPHS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CANONICAL_COMPOSITION_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CANONICAL_COMPOSITION_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_COMPATIBILITY_COMPOSITION_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_COMPATIBILITY_COMPOSITION_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_TRANSCODING_COMPOSITION_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_TRANSCODING_COMPOSITION_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_NO_RUBY_KANA,
    B_AAT_LAYOUT_FEATURE_SELECTOR_RUBY_KANA,
    B_AAT_LAYOUT_FEATURE_SELECTOR_RUBY_KANA_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_RUBY_KANA_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_NO_CJK_SYMBOL_ALTERNATIVES,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CJK_SYMBOL_ALT_ONE,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CJK_SYMBOL_ALT_TWO,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CJK_SYMBOL_ALT_THREE,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CJK_SYMBOL_ALT_FOUR,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CJK_SYMBOL_ALT_FIVE,
    B_AAT_LAYOUT_FEATURE_SELECTOR_NO_IDEOGRAPHIC_ALTERNATIVES,
    B_AAT_LAYOUT_FEATURE_SELECTOR_IDEOGRAPHIC_ALT_ONE,
    B_AAT_LAYOUT_FEATURE_SELECTOR_IDEOGRAPHIC_ALT_TWO,
    B_AAT_LAYOUT_FEATURE_SELECTOR_IDEOGRAPHIC_ALT_THREE,
    B_AAT_LAYOUT_FEATURE_SELECTOR_IDEOGRAPHIC_ALT_FOUR,
    B_AAT_LAYOUT_FEATURE_SELECTOR_IDEOGRAPHIC_ALT_FIVE,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CJK_VERTICAL_ROMAN_CENTERED,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CJK_VERTICAL_ROMAN_HBASELINE,
    B_AAT_LAYOUT_FEATURE_SELECTOR_NO_CJK_ITALIC_ROMAN,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CJK_ITALIC_ROMAN,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CJK_ITALIC_ROMAN_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CJK_ITALIC_ROMAN_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CASE_SENSITIVE_LAYOUT_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CASE_SENSITIVE_LAYOUT_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CASE_SENSITIVE_SPACING_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CASE_SENSITIVE_SPACING_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_ALTERNATE_HORIZ_KANA_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_ALTERNATE_HORIZ_KANA_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_ALTERNATE_VERT_KANA_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_ALTERNATE_VERT_KANA_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_NO_STYLISTIC_ALTERNATES,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_ONE_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_ONE_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_TWO_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_TWO_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_THREE_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_THREE_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_FOUR_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_FOUR_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_FIVE_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_FIVE_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_SIX_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_SIX_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_SEVEN_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_SEVEN_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_EIGHT_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_EIGHT_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_NINE_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_NINE_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_TEN_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_TEN_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_ELEVEN_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_ELEVEN_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_TWELVE_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_TWELVE_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_THIRTEEN_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_THIRTEEN_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_FOURTEEN_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_FOURTEEN_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_FIFTEEN_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_FIFTEEN_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_SIXTEEN_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_SIXTEEN_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_SEVENTEEN_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_SEVENTEEN_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_EIGHTEEN_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_EIGHTEEN_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_NINETEEN_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_NINETEEN_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_TWENTY_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_STYLISTIC_ALT_TWENTY_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CONTEXTUAL_ALTERNATES_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CONTEXTUAL_ALTERNATES_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_SWASH_ALTERNATES_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_SWASH_ALTERNATES_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CONTEXTUAL_SWASH_ALTERNATES_ON,
    B_AAT_LAYOUT_FEATURE_SELECTOR_CONTEXTUAL_SWASH_ALTERNATES_OFF,
    B_AAT_LAYOUT_FEATURE_SELECTOR_DEFAULT_LOWER_CASE,
    B_AAT_LAYOUT_FEATURE_SELECTOR_LOWER_CASE_SMALL_CAPS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_LOWER_CASE_PETITE_CAPS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_DEFAULT_UPPER_CASE,
    B_AAT_LAYOUT_FEATURE_SELECTOR_UPPER_CASE_SMALL_CAPS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_UPPER_CASE_PETITE_CAPS,
    B_AAT_LAYOUT_FEATURE_SELECTOR_HALF_WIDTH_CJK_ROMAN,
    B_AAT_LAYOUT_FEATURE_SELECTOR_PROPORTIONAL_CJK_ROMAN,
    B_AAT_LAYOUT_FEATURE_SELECTOR_DEFAULT_CJK_ROMAN,
    B_AAT_LAYOUT_FEATURE_SELECTOR_FULL_WIDTH_CJK_ROMAN,
}
export enum aat_layout_feature_type_t {
    B_AAT_LAYOUT_FEATURE_TYPE_INVALID,
    B_AAT_LAYOUT_FEATURE_TYPE_ALL_TYPOGRAPHIC,
    B_AAT_LAYOUT_FEATURE_TYPE_LIGATURES,
    B_AAT_LAYOUT_FEATURE_TYPE_CURSIVE_CONNECTION,
    B_AAT_LAYOUT_FEATURE_TYPE_LETTER_CASE,
    B_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_SUBSTITUTION,
    B_AAT_LAYOUT_FEATURE_TYPE_LINGUISTIC_REARRANGEMENT,
    B_AAT_LAYOUT_FEATURE_TYPE_NUMBER_SPACING,
    B_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE,
    B_AAT_LAYOUT_FEATURE_TYPE_DIACRITICS_TYPE,
    B_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_POSITION,
    B_AAT_LAYOUT_FEATURE_TYPE_FRACTIONS,
    B_AAT_LAYOUT_FEATURE_TYPE_OVERLAPPING_CHARACTERS_TYPE,
    B_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS,
    B_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS,
    B_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE,
    B_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_ALTERNATIVES,
    B_AAT_LAYOUT_FEATURE_TYPE_DESIGN_COMPLEXITY_TYPE,
    B_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS,
    B_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE,
    B_AAT_LAYOUT_FEATURE_TYPE_NUMBER_CASE,
    B_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING,
    B_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION,
    B_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE,
    B_AAT_LAYOUT_FEATURE_TYPE_KANA_SPACING_TYPE,
    B_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_SPACING_TYPE,
    B_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE,
    B_AAT_LAYOUT_FEATURE_TYPE_RUBY_KANA,
    B_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE,
    B_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE,
    B_AAT_LAYOUT_FEATURE_TYPE_CJK_VERTICAL_ROMAN_PLACEMENT_TYPE,
    B_AAT_LAYOUT_FEATURE_TYPE_ITALIC_CJK_ROMAN,
    B_AAT_LAYOUT_FEATURE_TYPE_CASE_SENSITIVE_LAYOUT,
    B_AAT_LAYOUT_FEATURE_TYPE_ALTERNATE_KANA,
    B_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES,
    B_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES,
    B_AAT_LAYOUT_FEATURE_TYPE_LOWER_CASE,
    B_AAT_LAYOUT_FEATURE_TYPE_UPPER_CASE,
    B_AAT_LAYOUT_FEATURE_TYPE_LANGUAGE_TAG_TYPE,
    B_AAT_LAYOUT_FEATURE_TYPE_CJK_ROMAN_SPACING_TYPE,
}
export enum buffer_diff_flags_t {
    EQUAL,
    CONTENT_TYPE_MISMATCH,
    LENGTH_MISMATCH,
    NOTDEF_PRESENT,
    DOTTED_CIRCLE_PRESENT,
    CODEPOINT_MISMATCH,
    CLUSTER_MISMATCH,
    GLYPH_FLAGS_MISMATCH,
    POSITION_MISMATCH,
}
export enum buffer_flags_t {
    DEFAULT,
    BOT,
    EOT,
    PRESERVE_DEFAULT_IGNORABLES,
    REMOVE_DEFAULT_IGNORABLES,
    DO_NOT_INSERT_DOTTED_CIRCLE,
    VERIFY,
    PRODUCE_UNSAFE_TO_CONCAT,
    PRODUCE_SAFE_TO_INSERT_TATWEEL,
    DEFINED,
}
export enum buffer_serialize_flags_t {
    DEFAULT,
    NO_CLUSTERS,
    NO_POSITIONS,
    NO_GLYPH_NAMES,
    GLYPH_EXTENTS,
    GLYPH_FLAGS,
    NO_ADVANCES,
    DEFINED,
}
export enum buffer_serialize_format_t {
    TEXT,
    JSON,
    INVALID,
}
export enum glyph_flags_t {
    UNSAFE_TO_BREAK,
    UNSAFE_TO_CONCAT,
    SAFE_TO_INSERT_TATWEEL,
    DEFINED,
}
export enum ot_color_palette_flags_t {
    DEFAULT,
    USABLE_WITH_LIGHT_BACKGROUND,
    USABLE_WITH_DARK_BACKGROUND,
}
export enum ot_layout_baseline_tag_t {
    B_OT_LAYOUT_BASELINE_TAG_ROMAN,
    B_OT_LAYOUT_BASELINE_TAG_HANGING,
    B_OT_LAYOUT_BASELINE_TAG_IDEO_FACE_BOTTOM_OR_LEFT,
    B_OT_LAYOUT_BASELINE_TAG_IDEO_FACE_TOP_OR_RIGHT,
    B_OT_LAYOUT_BASELINE_TAG_IDEO_FACE_CENTRAL,
    B_OT_LAYOUT_BASELINE_TAG_IDEO_EMBOX_BOTTOM_OR_LEFT,
    B_OT_LAYOUT_BASELINE_TAG_IDEO_EMBOX_TOP_OR_RIGHT,
    B_OT_LAYOUT_BASELINE_TAG_IDEO_EMBOX_CENTRAL,
    B_OT_LAYOUT_BASELINE_TAG_MATH,
}
export enum ot_math_glyph_part_flags_t {
    OT_MATH_GLYPH_PART_FLAG_EXTENDER,
}
export enum ot_meta_tag_t {
    B_OT_META_TAG_DESIGN_LANGUAGES,
    B_OT_META_TAG_SUPPORTED_LANGUAGES,
}
export enum ot_metrics_tag_t {
    B_OT_METRICS_TAG_HORIZONTAL_ASCENDER,
    B_OT_METRICS_TAG_HORIZONTAL_DESCENDER,
    B_OT_METRICS_TAG_HORIZONTAL_LINE_GAP,
    B_OT_METRICS_TAG_HORIZONTAL_CLIPPING_ASCENT,
    B_OT_METRICS_TAG_HORIZONTAL_CLIPPING_DESCENT,
    B_OT_METRICS_TAG_VERTICAL_ASCENDER,
    B_OT_METRICS_TAG_VERTICAL_DESCENDER,
    B_OT_METRICS_TAG_VERTICAL_LINE_GAP,
    B_OT_METRICS_TAG_HORIZONTAL_CARET_RISE,
    B_OT_METRICS_TAG_HORIZONTAL_CARET_RUN,
    B_OT_METRICS_TAG_HORIZONTAL_CARET_OFFSET,
    B_OT_METRICS_TAG_VERTICAL_CARET_RISE,
    B_OT_METRICS_TAG_VERTICAL_CARET_RUN,
    B_OT_METRICS_TAG_VERTICAL_CARET_OFFSET,
    B_OT_METRICS_TAG_X_HEIGHT,
    B_OT_METRICS_TAG_CAP_HEIGHT,
    B_OT_METRICS_TAG_SUBSCRIPT_EM_X_SIZE,
    B_OT_METRICS_TAG_SUBSCRIPT_EM_Y_SIZE,
    B_OT_METRICS_TAG_SUBSCRIPT_EM_X_OFFSET,
    B_OT_METRICS_TAG_SUBSCRIPT_EM_Y_OFFSET,
    B_OT_METRICS_TAG_SUPERSCRIPT_EM_X_SIZE,
    B_OT_METRICS_TAG_SUPERSCRIPT_EM_Y_SIZE,
    B_OT_METRICS_TAG_SUPERSCRIPT_EM_X_OFFSET,
    B_OT_METRICS_TAG_SUPERSCRIPT_EM_Y_OFFSET,
    B_OT_METRICS_TAG_STRIKEOUT_SIZE,
    B_OT_METRICS_TAG_STRIKEOUT_OFFSET,
    B_OT_METRICS_TAG_UNDERLINE_SIZE,
    B_OT_METRICS_TAG_UNDERLINE_OFFSET,
}
export enum ot_var_axis_flags_t {
    B_OT_VAR_AXIS_FLAG_HIDDEN,
}
export enum script_t {
    B_SCRIPT_COMMON,
    B_SCRIPT_INHERITED,
    B_SCRIPT_UNKNOWN,
    B_SCRIPT_ARABIC,
    B_SCRIPT_ARMENIAN,
    B_SCRIPT_BENGALI,
    B_SCRIPT_CYRILLIC,
    B_SCRIPT_DEVANAGARI,
    B_SCRIPT_GEORGIAN,
    B_SCRIPT_GREEK,
    B_SCRIPT_GUJARATI,
    B_SCRIPT_GURMUKHI,
    B_SCRIPT_HANGUL,
    B_SCRIPT_HAN,
    B_SCRIPT_HEBREW,
    B_SCRIPT_HIRAGANA,
    B_SCRIPT_KANNADA,
    B_SCRIPT_KATAKANA,
    B_SCRIPT_LAO,
    B_SCRIPT_LATIN,
    B_SCRIPT_MALAYALAM,
    B_SCRIPT_ORIYA,
    B_SCRIPT_TAMIL,
    B_SCRIPT_TELUGU,
    B_SCRIPT_THAI,
    B_SCRIPT_TIBETAN,
    B_SCRIPT_BOPOMOFO,
    B_SCRIPT_BRAILLE,
    B_SCRIPT_CANADIAN_SYLLABICS,
    B_SCRIPT_CHEROKEE,
    B_SCRIPT_ETHIOPIC,
    B_SCRIPT_KHMER,
    B_SCRIPT_MONGOLIAN,
    B_SCRIPT_MYANMAR,
    B_SCRIPT_OGHAM,
    B_SCRIPT_RUNIC,
    B_SCRIPT_SINHALA,
    B_SCRIPT_SYRIAC,
    B_SCRIPT_THAANA,
    B_SCRIPT_YI,
    B_SCRIPT_DESERET,
    B_SCRIPT_GOTHIC,
    B_SCRIPT_OLD_ITALIC,
    B_SCRIPT_BUHID,
    B_SCRIPT_HANUNOO,
    B_SCRIPT_TAGALOG,
    B_SCRIPT_TAGBANWA,
    B_SCRIPT_CYPRIOT,
    B_SCRIPT_LIMBU,
    B_SCRIPT_LINEAR_B,
    B_SCRIPT_OSMANYA,
    B_SCRIPT_SHAVIAN,
    B_SCRIPT_TAI_LE,
    B_SCRIPT_UGARITIC,
    B_SCRIPT_BUGINESE,
    B_SCRIPT_COPTIC,
    B_SCRIPT_GLAGOLITIC,
    B_SCRIPT_KHAROSHTHI,
    B_SCRIPT_NEW_TAI_LUE,
    B_SCRIPT_OLD_PERSIAN,
    B_SCRIPT_SYLOTI_NAGRI,
    B_SCRIPT_TIFINAGH,
    B_SCRIPT_BALINESE,
    B_SCRIPT_CUNEIFORM,
    B_SCRIPT_NKO,
    B_SCRIPT_PHAGS_PA,
    B_SCRIPT_PHOENICIAN,
    B_SCRIPT_CARIAN,
    B_SCRIPT_CHAM,
    B_SCRIPT_KAYAH_LI,
    B_SCRIPT_LEPCHA,
    B_SCRIPT_LYCIAN,
    B_SCRIPT_LYDIAN,
    B_SCRIPT_OL_CHIKI,
    B_SCRIPT_REJANG,
    B_SCRIPT_SAURASHTRA,
    B_SCRIPT_SUNDANESE,
    B_SCRIPT_VAI,
    B_SCRIPT_AVESTAN,
    B_SCRIPT_BAMUM,
    B_SCRIPT_EGYPTIAN_HIEROGLYPHS,
    B_SCRIPT_IMPERIAL_ARAMAIC,
    B_SCRIPT_INSCRIPTIONAL_PAHLAVI,
    B_SCRIPT_INSCRIPTIONAL_PARTHIAN,
    B_SCRIPT_JAVANESE,
    B_SCRIPT_KAITHI,
    B_SCRIPT_LISU,
    B_SCRIPT_MEETEI_MAYEK,
    B_SCRIPT_OLD_SOUTH_ARABIAN,
    B_SCRIPT_OLD_TURKIC,
    B_SCRIPT_SAMARITAN,
    B_SCRIPT_TAI_THAM,
    B_SCRIPT_TAI_VIET,
    B_SCRIPT_BATAK,
    B_SCRIPT_BRAHMI,
    B_SCRIPT_MANDAIC,
    B_SCRIPT_CHAKMA,
    B_SCRIPT_MEROITIC_CURSIVE,
    B_SCRIPT_MEROITIC_HIEROGLYPHS,
    B_SCRIPT_MIAO,
    B_SCRIPT_SHARADA,
    B_SCRIPT_SORA_SOMPENG,
    B_SCRIPT_TAKRI,
    B_SCRIPT_BASSA_VAH,
    B_SCRIPT_CAUCASIAN_ALBANIAN,
    B_SCRIPT_DUPLOYAN,
    B_SCRIPT_ELBASAN,
    B_SCRIPT_GRANTHA,
    B_SCRIPT_KHOJKI,
    B_SCRIPT_KHUDAWADI,
    B_SCRIPT_LINEAR_A,
    B_SCRIPT_MAHAJANI,
    B_SCRIPT_MANICHAEAN,
    B_SCRIPT_MENDE_KIKAKUI,
    B_SCRIPT_MODI,
    B_SCRIPT_MRO,
    B_SCRIPT_NABATAEAN,
    B_SCRIPT_OLD_NORTH_ARABIAN,
    B_SCRIPT_OLD_PERMIC,
    B_SCRIPT_PAHAWH_HMONG,
    B_SCRIPT_PALMYRENE,
    B_SCRIPT_PAU_CIN_HAU,
    B_SCRIPT_PSALTER_PAHLAVI,
    B_SCRIPT_SIDDHAM,
    B_SCRIPT_TIRHUTA,
    B_SCRIPT_WARANG_CITI,
    B_SCRIPT_AHOM,
    B_SCRIPT_ANATOLIAN_HIEROGLYPHS,
    B_SCRIPT_HATRAN,
    B_SCRIPT_MULTANI,
    B_SCRIPT_OLD_HUNGARIAN,
    B_SCRIPT_SIGNWRITING,
    B_SCRIPT_ADLAM,
    B_SCRIPT_BHAIKSUKI,
    B_SCRIPT_MARCHEN,
    B_SCRIPT_OSAGE,
    B_SCRIPT_TANGUT,
    B_SCRIPT_NEWA,
    B_SCRIPT_MASARAM_GONDI,
    B_SCRIPT_NUSHU,
    B_SCRIPT_SOYOMBO,
    B_SCRIPT_ZANABAZAR_SQUARE,
    B_SCRIPT_DOGRA,
    B_SCRIPT_GUNJALA_GONDI,
    B_SCRIPT_HANIFI_ROHINGYA,
    B_SCRIPT_MAKASAR,
    B_SCRIPT_MEDEFAIDRIN,
    B_SCRIPT_OLD_SOGDIAN,
    B_SCRIPT_SOGDIAN,
    B_SCRIPT_ELYMAIC,
    B_SCRIPT_NANDINAGARI,
    B_SCRIPT_NYIAKENG_PUACHUE_HMONG,
    B_SCRIPT_WANCHO,
    B_SCRIPT_CHORASMIAN,
    B_SCRIPT_DIVES_AKURU,
    B_SCRIPT_KHITAN_SMALL_SCRIPT,
    B_SCRIPT_YEZIDI,
    B_SCRIPT_CYPRO_MINOAN,
    B_SCRIPT_OLD_UYGHUR,
    B_SCRIPT_TANGSA,
    B_SCRIPT_TOTO,
    B_SCRIPT_VITHKUQI,
    B_SCRIPT_MATH,
    B_SCRIPT_KAWI,
    B_SCRIPT_NAG_MUNDARI,
    B_SCRIPT_GARAY,
    B_SCRIPT_GURUNG_KHEMA,
    B_SCRIPT_KIRAT_RAI,
    B_SCRIPT_OL_ONAL,
    B_SCRIPT_SUNUWAR,
    B_SCRIPT_TODHRI,
    B_SCRIPT_TULU_TIGALARI,
    B_SCRIPT_BERIA_ERFE,
    B_SCRIPT_SIDETIC,
    B_SCRIPT_TAI_YO,
    B_SCRIPT_TOLONG_SIKI,
    B_SCRIPT_INVALID,
}
export enum style_tag_t {
    B_STYLE_TAG_ITALIC,
    B_STYLE_TAG_OPTICAL_SIZE,
    B_STYLE_TAG_SLANT_ANGLE,
    B_STYLE_TAG_SLANT_RATIO,
    B_STYLE_TAG_WIDTH,
    B_STYLE_TAG_WEIGHT,
}
export const AAT_LAYOUT_NO_SELECTOR_INDEX: number
export const BUFFER_REPLACEMENT_CODEPOINT_DEFAULT: number
export const CODEPOINT_INVALID: codepoint_t
export const FEATURE_GLOBAL_START: number
export const FONT_NO_VAR_NAMED_INSTANCE: number
export const LANGUAGE_INVALID: language_t
export const OT_LAYOUT_DEFAULT_LANGUAGE_INDEX: number
export const OT_LAYOUT_NO_FEATURE_INDEX: number
export const OT_LAYOUT_NO_SCRIPT_INDEX: number
export const OT_LAYOUT_NO_VARIATIONS_INDEX: number
export const OT_MAX_TAGS_PER_LANGUAGE: number
export const OT_MAX_TAGS_PER_SCRIPT: number
export const OT_VAR_NO_AXIS_INDEX: number
export const UNICODE_COMBINING_CLASS_CCC133: number
export const UNICODE_MAX: number
export const UNICODE_MAX_DECOMPOSITION_LEN: number
export const VERSION_MAJOR: number
export const VERSION_MICRO: number
export const VERSION_MINOR: number
export const VERSION_STRING: string
export function aat_layout_feature_type_get_name_id(face: face_t, feature_type: aat_layout_feature_type_t): ot_name_id_t
export function aat_layout_feature_type_get_selector_infos(face: face_t, feature_type: aat_layout_feature_type_t, start_offset: number): [ /* returnType */ number, /* selectors */ aat_layout_feature_selector_info_t[] | null, /* default_index */ number | null ]
export function aat_layout_get_feature_types(face: face_t, start_offset: number): [ /* returnType */ number, /* features */ aat_layout_feature_type_t[] ]
export function aat_layout_has_positioning(face: face_t): bool_t
export function aat_layout_has_substitution(face: face_t): bool_t
export function aat_layout_has_tracking(face: face_t): bool_t
export function blob_copy_writable_or_fail(blob: blob_t): blob_t
export function blob_create_from_file(file_name: string): blob_t
export function blob_create_from_file_or_fail(file_name: string): blob_t
export function blob_create_sub_blob(parent: blob_t, offset: number, length: number): blob_t
export function blob_get_data(blob: blob_t): string[] | null
export function blob_get_data_writable(blob: blob_t): string[]
export function blob_get_empty(): blob_t
export function blob_get_length(blob: blob_t): number
export function blob_is_immutable(blob: blob_t): bool_t
export function blob_make_immutable(blob: blob_t): void
export function buffer_add(buffer: buffer_t, codepoint: codepoint_t, cluster: number): void
export function buffer_add_codepoints(buffer: buffer_t, text: codepoint_t[], item_offset: number, item_length: number): void
export function buffer_add_latin1(buffer: buffer_t, text: Gjs.byteArray.ByteArray, item_offset: number, item_length: number): void
export function buffer_add_utf16(buffer: buffer_t, text: number[], item_offset: number, item_length: number): void
export function buffer_add_utf32(buffer: buffer_t, text: number[], item_offset: number, item_length: number): void
export function buffer_add_utf8(buffer: buffer_t, text: Gjs.byteArray.ByteArray, item_offset: number, item_length: number): void
export function buffer_allocation_successful(buffer: buffer_t): bool_t
export function buffer_append(buffer: buffer_t, source: buffer_t, start: number, end: number): void
export function buffer_clear_contents(buffer: buffer_t): void
export function buffer_create(): buffer_t
export function buffer_create_similar(src: buffer_t): buffer_t
export function buffer_deserialize_glyphs(buffer: buffer_t, buf: string[], font: font_t | null, format: buffer_serialize_format_t): [ /* returnType */ bool_t, /* end_ptr */ string | null ]
export function buffer_deserialize_unicode(buffer: buffer_t, buf: string[], format: buffer_serialize_format_t): [ /* returnType */ bool_t, /* end_ptr */ string | null ]
export function buffer_diff(buffer: buffer_t, reference: buffer_t, dottedcircle_glyph: codepoint_t, position_fuzz: number): buffer_diff_flags_t
export function buffer_get_cluster_level(buffer: buffer_t): buffer_cluster_level_t
export function buffer_get_content_type(buffer: buffer_t): buffer_content_type_t
export function buffer_get_direction(buffer: buffer_t): direction_t
export function buffer_get_empty(): buffer_t
export function buffer_get_flags(buffer: buffer_t): buffer_flags_t
export function buffer_get_glyph_infos(buffer: buffer_t): glyph_info_t[]
export function buffer_get_glyph_positions(buffer: buffer_t): glyph_position_t[]
export function buffer_get_invisible_glyph(buffer: buffer_t): codepoint_t
export function buffer_get_language(buffer: buffer_t): language_t
export function buffer_get_length(buffer: buffer_t): number
export function buffer_get_not_found_glyph(buffer: buffer_t): codepoint_t
export function buffer_get_not_found_variation_selector_glyph(buffer: buffer_t): codepoint_t
export function buffer_get_random_state(buffer: buffer_t): number
export function buffer_get_replacement_codepoint(buffer: buffer_t): codepoint_t
export function buffer_get_script(buffer: buffer_t): script_t
export function buffer_get_segment_properties(buffer: buffer_t): /* props */ segment_properties_t
export function buffer_get_unicode_funcs(buffer: buffer_t): unicode_funcs_t
export function buffer_guess_segment_properties(buffer: buffer_t): void
export function buffer_has_positions(buffer: buffer_t): bool_t
export function buffer_normalize_glyphs(buffer: buffer_t): void
export function buffer_pre_allocate(buffer: buffer_t, size: number): bool_t
export function buffer_reset(buffer: buffer_t): void
export function buffer_reverse(buffer: buffer_t): void
export function buffer_reverse_clusters(buffer: buffer_t): void
export function buffer_reverse_range(buffer: buffer_t, start: number, end: number): void
export function buffer_serialize(buffer: buffer_t, start: number, end: number, font: font_t | null, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [ /* returnType */ number, /* buf */ Gjs.byteArray.ByteArray, /* buf_consumed */ number | null ]
export function buffer_serialize_format_from_string(str: Gjs.byteArray.ByteArray): buffer_serialize_format_t
export function buffer_serialize_format_to_string(format: buffer_serialize_format_t): string
export function buffer_serialize_glyphs(buffer: buffer_t, start: number, end: number, font: font_t | null, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [ /* returnType */ number, /* buf */ Gjs.byteArray.ByteArray, /* buf_consumed */ number | null ]
export function buffer_serialize_list_formats(): string[]
export function buffer_serialize_unicode(buffer: buffer_t, start: number, end: number, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [ /* returnType */ number, /* buf */ Gjs.byteArray.ByteArray, /* buf_consumed */ number | null ]
export function buffer_set_cluster_level(buffer: buffer_t, cluster_level: buffer_cluster_level_t): void
export function buffer_set_content_type(buffer: buffer_t, content_type: buffer_content_type_t): void
export function buffer_set_direction(buffer: buffer_t, direction: direction_t): void
export function buffer_set_flags(buffer: buffer_t, flags: buffer_flags_t): void
export function buffer_set_invisible_glyph(buffer: buffer_t, invisible: codepoint_t): void
export function buffer_set_language(buffer: buffer_t, language: language_t): void
export function buffer_set_length(buffer: buffer_t, length: number): bool_t
export function buffer_set_message_func(buffer: buffer_t, func: buffer_message_func_t): void
export function buffer_set_not_found_glyph(buffer: buffer_t, not_found: codepoint_t): void
export function buffer_set_not_found_variation_selector_glyph(buffer: buffer_t, not_found_variation_selector: codepoint_t): void
export function buffer_set_random_state(buffer: buffer_t, state: number): void
export function buffer_set_replacement_codepoint(buffer: buffer_t, replacement: codepoint_t): void
export function buffer_set_script(buffer: buffer_t, script: script_t): void
export function buffer_set_segment_properties(buffer: buffer_t, props: segment_properties_t): void
export function buffer_set_unicode_funcs(buffer: buffer_t, unicode_funcs: unicode_funcs_t): void
export function calloc(nmemb: number, size: number): object | null
export function color_get_alpha(color: color_t): number
export function color_get_blue(color: color_t): number
export function color_get_green(color: color_t): number
export function color_get_red(color: color_t): number
export function color_line_get_color_stops(color_line: color_line_t, start: number): [ /* returnType */ number, /* color_stops */ color_stop_t[] | null ]
export function color_line_get_extend(color_line: color_line_t): paint_extend_t
export function direction_from_string(str: Gjs.byteArray.ByteArray): direction_t
export function direction_to_string(direction: direction_t): string
export function draw_close_path(dfuncs: draw_funcs_t, draw_data: object | null, st: draw_state_t): void
export function draw_cubic_to(dfuncs: draw_funcs_t, draw_data: object | null, st: draw_state_t, control1_x: number, control1_y: number, control2_x: number, control2_y: number, to_x: number, to_y: number): void
export function draw_funcs_create(): draw_funcs_t
export function draw_funcs_get_empty(): draw_funcs_t
export function draw_funcs_is_immutable(dfuncs: draw_funcs_t): bool_t
export function draw_funcs_make_immutable(dfuncs: draw_funcs_t): void
export function draw_funcs_set_close_path_func(dfuncs: draw_funcs_t, func: draw_close_path_func_t): void
export function draw_funcs_set_cubic_to_func(dfuncs: draw_funcs_t, func: draw_cubic_to_func_t): void
export function draw_funcs_set_line_to_func(dfuncs: draw_funcs_t, func: draw_line_to_func_t): void
export function draw_funcs_set_move_to_func(dfuncs: draw_funcs_t, func: draw_move_to_func_t): void
export function draw_funcs_set_quadratic_to_func(dfuncs: draw_funcs_t, func: draw_quadratic_to_func_t): void
export function draw_line_to(dfuncs: draw_funcs_t, draw_data: object | null, st: draw_state_t, to_x: number, to_y: number): void
export function draw_move_to(dfuncs: draw_funcs_t, draw_data: object | null, st: draw_state_t, to_x: number, to_y: number): void
export function draw_quadratic_to(dfuncs: draw_funcs_t, draw_data: object | null, st: draw_state_t, control_x: number, control_y: number, to_x: number, to_y: number): void
export function face_builder_add_table(face: face_t, tag: tag_t, blob: blob_t): bool_t
export function face_builder_create(): face_t
export function face_builder_sort_tables(face: face_t, tags: tag_t[]): void
export function face_collect_nominal_glyph_mapping(face: face_t): [ /* mapping */ map_t, /* unicodes */ set_t | null ]
export function face_collect_unicodes(face: face_t): /* out */ set_t
export function face_collect_variation_selectors(face: face_t): /* out */ set_t
export function face_collect_variation_unicodes(face: face_t, variation_selector: codepoint_t): /* out */ set_t
export function face_count(blob: blob_t): number
export function face_create(blob: blob_t, index: number): face_t
export function face_create_for_tables(reference_table_func: reference_table_func_t): face_t
export function face_create_from_file_or_fail(file_name: string, index: number): face_t
export function face_create_from_file_or_fail_using(file_name: string, index: number, loader_name?: string | null): face_t
export function face_create_or_fail(blob: blob_t, index: number): face_t
export function face_create_or_fail_using(blob: blob_t, index: number, loader_name?: string | null): face_t
export function face_get_empty(): face_t
export function face_get_glyph_count(face: face_t): number
export function face_get_index(face: face_t): number
export function face_get_table_tags(face: face_t, start_offset: number): [ /* returnType */ number, /* table_tags */ tag_t[] ]
export function face_get_upem(face: face_t): number
export function face_is_immutable(face: face_t): bool_t
export function face_list_loaders(): string[]
export function face_make_immutable(face: face_t): void
export function face_reference_blob(face: face_t): blob_t
export function face_reference_table(face: face_t, tag: tag_t): blob_t
export function face_set_get_table_tags_func(face: face_t, func: get_table_tags_func_t): void
export function face_set_glyph_count(face: face_t, glyph_count: number): void
export function face_set_index(face: face_t, index: number): void
export function face_set_upem(face: face_t, upem: number): void
export function feature_from_string(str: Gjs.byteArray.ByteArray): [ /* returnType */ bool_t, /* feature */ feature_t ]
export function feature_to_string(feature: feature_t): /* buf */ string[]
export function font_add_glyph_origin_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t, x: position_t, y: position_t): void
export function font_changed(font: font_t): void
export function font_create(face: face_t): font_t
export function font_create_sub_font(parent: font_t): font_t
export function font_draw_glyph(font: font_t, glyph: codepoint_t, dfuncs: draw_funcs_t, draw_data?: object | null): void
export function font_draw_glyph_or_fail(font: font_t, glyph: codepoint_t, dfuncs: draw_funcs_t, draw_data?: object | null): bool_t
export function font_funcs_create(): font_funcs_t
export function font_funcs_get_empty(): font_funcs_t
export function font_funcs_is_immutable(ffuncs: font_funcs_t): bool_t
export function font_funcs_make_immutable(ffuncs: font_funcs_t): void
export function font_funcs_set_draw_glyph_func(ffuncs: font_funcs_t, func: font_draw_glyph_func_t): void
export function font_funcs_set_draw_glyph_or_fail_func(ffuncs: font_funcs_t, func: font_draw_glyph_or_fail_func_t): void
export function font_funcs_set_font_h_extents_func(ffuncs: font_funcs_t, func: font_get_font_h_extents_func_t): void
export function font_funcs_set_font_v_extents_func(ffuncs: font_funcs_t, func: font_get_font_v_extents_func_t): void
export function font_funcs_set_glyph_contour_point_func(ffuncs: font_funcs_t, func: font_get_glyph_contour_point_func_t): void
export function font_funcs_set_glyph_extents_func(ffuncs: font_funcs_t, func: font_get_glyph_extents_func_t): void
export function font_funcs_set_glyph_from_name_func(ffuncs: font_funcs_t, func: font_get_glyph_from_name_func_t): void
export function font_funcs_set_glyph_func(ffuncs: font_funcs_t, func: font_get_glyph_func_t): void
export function font_funcs_set_glyph_h_advance_func(ffuncs: font_funcs_t, func: font_get_glyph_h_advance_func_t): void
export function font_funcs_set_glyph_h_advances_func(ffuncs: font_funcs_t, func: font_get_glyph_h_advances_func_t): void
export function font_funcs_set_glyph_h_kerning_func(ffuncs: font_funcs_t, func: font_get_glyph_h_kerning_func_t): void
export function font_funcs_set_glyph_h_origin_func(ffuncs: font_funcs_t, func: font_get_glyph_h_origin_func_t): void
export function font_funcs_set_glyph_h_origins_func(ffuncs: font_funcs_t, func: font_get_glyph_h_origins_func_t): void
export function font_funcs_set_glyph_name_func(ffuncs: font_funcs_t, func: font_get_glyph_name_func_t): void
export function font_funcs_set_glyph_shape_func(ffuncs: font_funcs_t, func: font_get_glyph_shape_func_t): void
export function font_funcs_set_glyph_v_advance_func(ffuncs: font_funcs_t, func: font_get_glyph_v_advance_func_t): void
export function font_funcs_set_glyph_v_advances_func(ffuncs: font_funcs_t, func: font_get_glyph_v_advances_func_t): void
export function font_funcs_set_glyph_v_kerning_func(ffuncs: font_funcs_t, func: font_get_glyph_v_kerning_func_t): void
export function font_funcs_set_glyph_v_origin_func(ffuncs: font_funcs_t, func: font_get_glyph_v_origin_func_t): void
export function font_funcs_set_glyph_v_origins_func(ffuncs: font_funcs_t, func: font_get_glyph_v_origins_func_t): void
export function font_funcs_set_nominal_glyph_func(ffuncs: font_funcs_t, func: font_get_nominal_glyph_func_t): void
export function font_funcs_set_nominal_glyphs_func(ffuncs: font_funcs_t, func: font_get_nominal_glyphs_func_t): void
export function font_funcs_set_paint_glyph_func(ffuncs: font_funcs_t, func: font_paint_glyph_func_t): void
export function font_funcs_set_paint_glyph_or_fail_func(ffuncs: font_funcs_t, func: font_paint_glyph_or_fail_func_t): void
export function font_funcs_set_variation_glyph_func(ffuncs: font_funcs_t, func: font_get_variation_glyph_func_t): void
export function font_get_empty(): font_t
export function font_get_extents_for_direction(font: font_t, direction: direction_t): /* extents */ font_extents_t
export function font_get_face(font: font_t): face_t
export function font_get_glyph(font: font_t, unicode: codepoint_t, variation_selector: codepoint_t): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
export function font_get_glyph_advance_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
export function font_get_glyph_advances_for_direction(font: font_t, direction: direction_t, count: number, first_glyph: codepoint_t, glyph_stride: number): [ /* first_advance */ position_t, /* advance_stride */ number ]
export function font_get_glyph_contour_point(font: font_t, glyph: codepoint_t, point_index: number): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
export function font_get_glyph_contour_point_for_origin(font: font_t, glyph: codepoint_t, point_index: number, direction: direction_t): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
export function font_get_glyph_extents(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* extents */ glyph_extents_t ]
export function font_get_glyph_extents_for_origin(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* returnType */ bool_t, /* extents */ glyph_extents_t ]
export function font_get_glyph_from_name(font: font_t, name: string[]): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
export function font_get_glyph_h_advance(font: font_t, glyph: codepoint_t): position_t
export function font_get_glyph_h_advances(font: font_t, count: number, first_glyph: codepoint_t, glyph_stride: number, advance_stride: number): /* first_advance */ position_t
export function font_get_glyph_h_kerning(font: font_t, left_glyph: codepoint_t, right_glyph: codepoint_t): position_t
export function font_get_glyph_h_origin(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
export function font_get_glyph_h_origins(font: font_t, count: number, first_glyph: codepoint_t, glyph_stride: number, x_stride: number, y_stride: number): [ /* returnType */ bool_t, /* first_x */ position_t, /* first_y */ position_t ]
export function font_get_glyph_kerning_for_direction(font: font_t, first_glyph: codepoint_t, second_glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
export function font_get_glyph_name(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* name */ string[] ]
export function font_get_glyph_origin_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
export function font_get_glyph_shape(font: font_t, glyph: codepoint_t, dfuncs: draw_funcs_t, draw_data?: object | null): void
export function font_get_glyph_v_advance(font: font_t, glyph: codepoint_t): position_t
export function font_get_glyph_v_advances(font: font_t, count: number, first_glyph: codepoint_t, glyph_stride: number): [ /* first_advance */ position_t, /* advance_stride */ number ]
export function font_get_glyph_v_kerning(font: font_t, top_glyph: codepoint_t, bottom_glyph: codepoint_t): position_t
export function font_get_glyph_v_origin(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
export function font_get_glyph_v_origins(font: font_t, count: number, first_glyph: codepoint_t, glyph_stride: number, x_stride: number, y_stride: number): [ /* returnType */ bool_t, /* first_x */ position_t, /* first_y */ position_t ]
export function font_get_h_extents(font: font_t): [ /* returnType */ bool_t, /* extents */ font_extents_t ]
export function font_get_nominal_glyph(font: font_t, unicode: codepoint_t): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
export function font_get_nominal_glyphs(font: font_t, count: number, first_unicode: codepoint_t, unicode_stride: number, glyph_stride: number): [ /* returnType */ number, /* first_glyph */ codepoint_t ]
export function font_get_parent(font: font_t): font_t
export function font_get_ppem(font: font_t): [ /* x_ppem */ number, /* y_ppem */ number ]
export function font_get_ptem(font: font_t): number
export function font_get_scale(font: font_t): [ /* x_scale */ number, /* y_scale */ number ]
export function font_get_serial(font: font_t): number
export function font_get_synthetic_bold(font: font_t): [ /* x_embolden */ number, /* y_embolden */ number, /* in_place */ bool_t ]
export function font_get_synthetic_slant(font: font_t): number
export function font_get_v_extents(font: font_t): [ /* returnType */ bool_t, /* extents */ font_extents_t ]
export function font_get_var_coords_design(font: font_t): [ /* returnType */ number, /* length */ number ]
export function font_get_var_coords_normalized(font: font_t): [ /* returnType */ number, /* length */ number ]
export function font_get_var_named_instance(font: font_t): number
export function font_get_variation_glyph(font: font_t, unicode: codepoint_t, variation_selector: codepoint_t): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
export function font_glyph_from_string(font: font_t, s: Gjs.byteArray.ByteArray): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
export function font_glyph_to_string(font: font_t, glyph: codepoint_t): /* s */ string[]
export function font_is_immutable(font: font_t): bool_t
export function font_is_synthetic(font: font_t): bool_t
export function font_list_funcs(): string[]
export function font_make_immutable(font: font_t): void
export function font_paint_glyph(font: font_t, glyph: codepoint_t, pfuncs: paint_funcs_t, paint_data: object | null, palette_index: number, foreground: color_t): void
export function font_paint_glyph_or_fail(font: font_t, glyph: codepoint_t, pfuncs: paint_funcs_t, paint_data: object | null, palette_index: number, foreground: color_t): bool_t
export function font_set_face(font: font_t, face: face_t): void
export function font_set_funcs_using(font: font_t, name: string): bool_t
export function font_set_parent(font: font_t, parent: font_t): void
export function font_set_ppem(font: font_t, x_ppem: number, y_ppem: number): void
export function font_set_ptem(font: font_t, ptem: number): void
export function font_set_scale(font: font_t, x_scale: number, y_scale: number): void
export function font_set_synthetic_bold(font: font_t, x_embolden: number, y_embolden: number, in_place: bool_t): void
export function font_set_synthetic_slant(font: font_t, slant: number): void
export function font_set_var_coords_design(font: font_t, coords: number[]): void
export function font_set_var_coords_normalized(font: font_t, coords: number[]): void
export function font_set_var_named_instance(font: font_t, instance_index: number): void
export function font_set_variation(font: font_t, tag: tag_t, value: number): void
export function font_set_variations(font: font_t, variations: variation_t[]): void
export function font_subtract_glyph_origin_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t, x: position_t, y: position_t): void
export function free(ptr?: object | null): void
export function ft_face_create_cached(ft_face: freetype2.Face): face_t
export function ft_face_create_from_blob_or_fail(blob: blob_t, index: number): face_t
export function ft_face_create_from_file_or_fail(file_name: string, index: number): face_t
export function ft_face_create_referenced(ft_face: freetype2.Face): face_t
export function ft_font_changed(font: font_t): void
export function ft_font_create_referenced(ft_face: freetype2.Face): font_t
export function ft_font_get_load_flags(font: font_t): number
export function ft_font_set_funcs(font: font_t): void
export function ft_font_set_load_flags(font: font_t, load_flags: number): void
export function ft_hb_font_changed(font: font_t): bool_t
export function glib_blob_create(gbytes: Gjs.byteArray.ByteArray): blob_t
export function glib_get_unicode_funcs(): unicode_funcs_t
export function glib_script_from_script(script: script_t): GLib.UnicodeScript
export function glib_script_to_script(script: GLib.UnicodeScript): script_t
export function glyph_info_get_glyph_flags(info: glyph_info_t): glyph_flags_t
export function language_from_string(str: Gjs.byteArray.ByteArray): language_t
export function language_get_default(): language_t
export function language_matches(language: language_t, specific: language_t): bool_t
export function language_to_string(language: language_t): string
export function malloc(size: number): object | null
export function map_allocation_successful(map: map_t): bool_t
export function map_clear(map: map_t): void
export function map_copy(map: map_t): map_t
export function map_create(): map_t
export function map_del(map: map_t, key: codepoint_t): void
export function map_get(map: map_t, key: codepoint_t): codepoint_t
export function map_get_empty(): map_t
export function map_get_population(map: map_t): number
export function map_has(map: map_t, key: codepoint_t): bool_t
export function map_hash(map: map_t): number
export function map_is_empty(map: map_t): bool_t
export function map_is_equal(map: map_t, other: map_t): bool_t
export function map_keys(map: map_t, keys: set_t): void
export function map_next(map: map_t, idx: number): [ /* returnType */ bool_t, /* key */ codepoint_t, /* value */ codepoint_t ]
export function map_set(map: map_t, key: codepoint_t, value: codepoint_t): void
export function map_update(map: map_t, other: map_t): void
export function map_values(map: map_t, values: set_t): void
export function ot_color_glyph_get_layers(face: face_t, glyph: codepoint_t, start_offset: number): [ /* returnType */ number, /* layers */ ot_color_layer_t[] | null ]
export function ot_color_glyph_has_paint(face: face_t, glyph: codepoint_t): bool_t
export function ot_color_glyph_reference_png(font: font_t, glyph: codepoint_t): blob_t
export function ot_color_glyph_reference_svg(face: face_t, glyph: codepoint_t): blob_t
export function ot_color_has_layers(face: face_t): bool_t
export function ot_color_has_paint(face: face_t): bool_t
export function ot_color_has_palettes(face: face_t): bool_t
export function ot_color_has_png(face: face_t): bool_t
export function ot_color_has_svg(face: face_t): bool_t
export function ot_color_palette_color_get_name_id(face: face_t, color_index: number): ot_name_id_t
export function ot_color_palette_get_colors(face: face_t, palette_index: number, start_offset: number): [ /* returnType */ number, /* colors */ color_t[] | null ]
export function ot_color_palette_get_count(face: face_t): number
export function ot_color_palette_get_flags(face: face_t, palette_index: number): ot_color_palette_flags_t
export function ot_color_palette_get_name_id(face: face_t, palette_index: number): ot_name_id_t
export function ot_font_set_funcs(font: font_t): void
export function ot_layout_collect_features(face: face_t, table_tag: tag_t, scripts?: tag_t[] | null, languages?: tag_t[] | null, features?: tag_t[] | null): /* feature_indexes */ set_t
export function ot_layout_collect_features_map(face: face_t, table_tag: tag_t, script_index: number, language_index: number): /* feature_map */ map_t
export function ot_layout_collect_lookups(face: face_t, table_tag: tag_t, scripts?: tag_t[] | null, languages?: tag_t[] | null, features?: tag_t[] | null): /* lookup_indexes */ set_t
export function ot_layout_feature_get_characters(face: face_t, table_tag: tag_t, feature_index: number, start_offset: number): [ /* returnType */ number, /* characters */ codepoint_t[] ]
export function ot_layout_feature_get_lookups(face: face_t, table_tag: tag_t, feature_index: number, start_offset: number): [ /* returnType */ number, /* lookup_indexes */ number[] ]
export function ot_layout_feature_get_name_ids(face: face_t, table_tag: tag_t, feature_index: number): [ /* returnType */ bool_t, /* label_id */ ot_name_id_t | null, /* tooltip_id */ ot_name_id_t | null, /* sample_id */ ot_name_id_t | null, /* num_named_parameters */ number | null, /* first_param_id */ ot_name_id_t | null ]
export function ot_layout_feature_with_variations_get_lookups(face: face_t, table_tag: tag_t, feature_index: number, variations_index: number, start_offset: number): [ /* returnType */ number, /* lookup_indexes */ number[] ]
export function ot_layout_get_attach_points(face: face_t, glyph: codepoint_t, start_offset: number): [ /* returnType */ number, /* point_array */ number[] ]
export function ot_layout_get_baseline(font: font_t, baseline_tag: ot_layout_baseline_tag_t, direction: direction_t, script_tag: tag_t, language_tag: tag_t): [ /* returnType */ bool_t, /* coord */ position_t | null ]
export function ot_layout_get_baseline2(font: font_t, baseline_tag: ot_layout_baseline_tag_t, direction: direction_t, script: script_t, language?: language_t | null): [ /* returnType */ bool_t, /* coord */ position_t | null ]
export function ot_layout_get_baseline_with_fallback(font: font_t, baseline_tag: ot_layout_baseline_tag_t, direction: direction_t, script_tag: tag_t, language_tag: tag_t): /* coord */ position_t
export function ot_layout_get_baseline_with_fallback2(font: font_t, baseline_tag: ot_layout_baseline_tag_t, direction: direction_t, script: script_t, language?: language_t | null): /* coord */ position_t
export function ot_layout_get_font_extents(font: font_t, direction: direction_t, script_tag: tag_t, language_tag: tag_t): [ /* returnType */ bool_t, /* extents */ font_extents_t | null ]
export function ot_layout_get_font_extents2(font: font_t, direction: direction_t, script: script_t, language?: language_t | null): [ /* returnType */ bool_t, /* extents */ font_extents_t | null ]
export function ot_layout_get_glyph_class(face: face_t, glyph: codepoint_t): ot_layout_glyph_class_t
export function ot_layout_get_glyphs_in_class(face: face_t, klass: ot_layout_glyph_class_t): /* glyphs */ set_t
export function ot_layout_get_horizontal_baseline_tag_for_script(script: script_t): ot_layout_baseline_tag_t
export function ot_layout_get_ligature_carets(font: font_t, direction: direction_t, glyph: codepoint_t, start_offset: number): [ /* returnType */ number, /* caret_array */ position_t[] ]
export function ot_layout_get_size_params(face: face_t): [ /* returnType */ bool_t, /* design_size */ number, /* subfamily_id */ number, /* subfamily_name_id */ ot_name_id_t, /* range_start */ number, /* range_end */ number ]
export function ot_layout_has_glyph_classes(face: face_t): bool_t
export function ot_layout_has_positioning(face: face_t): bool_t
export function ot_layout_has_substitution(face: face_t): bool_t
export function ot_layout_language_find_feature(face: face_t, table_tag: tag_t, script_index: number, language_index: number, feature_tag: tag_t): [ /* returnType */ bool_t, /* feature_index */ number ]
export function ot_layout_language_get_feature_indexes(face: face_t, table_tag: tag_t, script_index: number, language_index: number, start_offset: number): [ /* returnType */ number, /* feature_indexes */ number[] ]
export function ot_layout_language_get_feature_tags(face: face_t, table_tag: tag_t, script_index: number, language_index: number, start_offset: number): [ /* returnType */ number, /* feature_tags */ tag_t[] ]
export function ot_layout_language_get_required_feature(face: face_t, table_tag: tag_t, script_index: number, language_index: number): [ /* returnType */ bool_t, /* feature_index */ number, /* feature_tag */ tag_t ]
export function ot_layout_language_get_required_feature_index(face: face_t, table_tag: tag_t, script_index: number, language_index: number): [ /* returnType */ bool_t, /* feature_index */ number ]
export function ot_layout_lookup_collect_glyphs(face: face_t, table_tag: tag_t, lookup_index: number): [ /* glyphs_before */ set_t | null, /* glyphs_input */ set_t | null, /* glyphs_after */ set_t | null, /* glyphs_output */ set_t | null ]
export function ot_layout_lookup_get_glyph_alternates(face: face_t, lookup_index: number, glyph: codepoint_t, start_offset: number): [ /* returnType */ number, /* alternate_glyphs */ codepoint_t[] ]
export function ot_layout_lookup_get_optical_bound(font: font_t, lookup_index: number, direction: direction_t, glyph: codepoint_t): position_t
export function ot_layout_lookup_substitute_closure(face: face_t, lookup_index: number): /* glyphs */ set_t
export function ot_layout_lookup_would_substitute(face: face_t, lookup_index: number, glyphs: codepoint_t, glyphs_length: number, zero_context: bool_t): bool_t
export function ot_layout_lookups_substitute_closure(face: face_t, lookups: set_t): /* glyphs */ set_t
export function ot_layout_script_find_language(face: face_t, table_tag: tag_t, script_index: number, language_tag: tag_t, language_index: number): bool_t
export function ot_layout_script_get_language_tags(face: face_t, table_tag: tag_t, script_index: number, start_offset: number): [ /* returnType */ number, /* language_tags */ tag_t[] ]
export function ot_layout_script_select_language(face: face_t, table_tag: tag_t, script_index: number, language_count: number, language_tags: tag_t): [ /* returnType */ bool_t, /* language_index */ number ]
export function ot_layout_script_select_language2(face: face_t, table_tag: tag_t, script_index: number, language_count: number, language_tags: tag_t): [ /* returnType */ bool_t, /* language_index */ number, /* chosen_language */ tag_t ]
export function ot_layout_table_choose_script(face: face_t, table_tag: tag_t, script_tags: tag_t): [ /* returnType */ bool_t, /* script_index */ number, /* chosen_script */ tag_t ]
export function ot_layout_table_find_feature_variations(face: face_t, table_tag: tag_t, coords: number, num_coords: number): [ /* returnType */ bool_t, /* variations_index */ number ]
export function ot_layout_table_find_script(face: face_t, table_tag: tag_t, script_tag: tag_t): [ /* returnType */ bool_t, /* script_index */ number ]
export function ot_layout_table_get_feature_tags(face: face_t, table_tag: tag_t, start_offset: number): [ /* returnType */ number, /* feature_tags */ tag_t[] ]
export function ot_layout_table_get_lookup_count(face: face_t, table_tag: tag_t): number
export function ot_layout_table_get_script_tags(face: face_t, table_tag: tag_t, start_offset: number): [ /* returnType */ number, /* script_tags */ tag_t[] ]
export function ot_layout_table_select_script(face: face_t, table_tag: tag_t, script_count: number, script_tags: tag_t): [ /* returnType */ bool_t, /* script_index */ number | null, /* chosen_script */ tag_t | null ]
export function ot_math_get_constant(font: font_t, constant: ot_math_constant_t): position_t
export function ot_math_get_glyph_assembly(font: font_t, glyph: codepoint_t, direction: direction_t, start_offset: number): [ /* returnType */ number, /* parts */ ot_math_glyph_part_t[], /* italics_correction */ position_t ]
export function ot_math_get_glyph_italics_correction(font: font_t, glyph: codepoint_t): position_t
export function ot_math_get_glyph_kerning(font: font_t, glyph: codepoint_t, kern: ot_math_kern_t, correction_height: position_t): position_t
export function ot_math_get_glyph_kernings(font: font_t, glyph: codepoint_t, kern: ot_math_kern_t, start_offset: number): [ /* returnType */ number, /* kern_entries */ ot_math_kern_entry_t[] ]
export function ot_math_get_glyph_top_accent_attachment(font: font_t, glyph: codepoint_t): position_t
export function ot_math_get_glyph_variants(font: font_t, glyph: codepoint_t, direction: direction_t, start_offset: number): [ /* returnType */ number, /* variants */ ot_math_glyph_variant_t[] ]
export function ot_math_get_min_connector_overlap(font: font_t, direction: direction_t): position_t
export function ot_math_has_data(face: face_t): bool_t
export function ot_math_is_glyph_extended_shape(face: face_t, glyph: codepoint_t): bool_t
export function ot_meta_get_entry_tags(face: face_t, start_offset: number): [ /* returnType */ number, /* entries */ ot_meta_tag_t[] ]
export function ot_meta_reference_entry(face: face_t, meta_tag: ot_meta_tag_t): blob_t
export function ot_metrics_get_position(font: font_t, metrics_tag: ot_metrics_tag_t): [ /* returnType */ bool_t, /* position */ position_t | null ]
export function ot_metrics_get_position_with_fallback(font: font_t, metrics_tag: ot_metrics_tag_t): /* position */ position_t | null
export function ot_metrics_get_variation(font: font_t, metrics_tag: ot_metrics_tag_t): number
export function ot_metrics_get_x_variation(font: font_t, metrics_tag: ot_metrics_tag_t): position_t
export function ot_metrics_get_y_variation(font: font_t, metrics_tag: ot_metrics_tag_t): position_t
export function ot_name_get_utf16(face: face_t, name_id: ot_name_id_t, language: language_t): [ /* returnType */ number, /* text */ number[] ]
export function ot_name_get_utf32(face: face_t, name_id: ot_name_id_t, language: language_t): [ /* returnType */ number, /* text */ number[] ]
export function ot_name_get_utf8(face: face_t, name_id: ot_name_id_t, language: language_t): [ /* returnType */ number, /* text */ string[] ]
export function ot_name_list_names(face: face_t): ot_name_entry_t[]
export function ot_shape_glyphs_closure(font: font_t, buffer: buffer_t, features: feature_t[]): /* glyphs */ set_t
export function ot_shape_plan_collect_lookups(shape_plan: shape_plan_t, table_tag: tag_t): /* lookup_indexes */ set_t
export function ot_shape_plan_get_feature_tags(shape_plan: shape_plan_t, start_offset: number): [ /* returnType */ number, /* tags */ tag_t[] ]
export function ot_tag_from_language(language: language_t): tag_t
export function ot_tag_to_language(tag: tag_t): language_t | null
export function ot_tag_to_script(tag: tag_t): script_t
export function ot_tags_from_script(script: script_t): [ /* script_tag_1 */ tag_t, /* script_tag_2 */ tag_t ]
export function ot_tags_from_script_and_language(script: script_t, language: language_t | null, script_count: number, language_count: number): [ /* script_tags */ tag_t | null, /* language_tags */ tag_t | null ]
export function ot_tags_to_script_and_language(script_tag: tag_t, language_tag: tag_t): [ /* script */ script_t | null, /* language */ language_t | null ]
export function ot_var_find_axis(face: face_t, axis_tag: tag_t, axis_index: number): [ /* returnType */ bool_t, /* axis_info */ ot_var_axis_t ]
export function ot_var_find_axis_info(face: face_t, axis_tag: tag_t): [ /* returnType */ bool_t, /* axis_info */ ot_var_axis_info_t ]
export function ot_var_get_axes(face: face_t, start_offset: number): [ /* returnType */ number, /* axes_array */ ot_var_axis_t[] ]
export function ot_var_get_axis_count(face: face_t): number
export function ot_var_get_axis_infos(face: face_t, start_offset: number): [ /* returnType */ number, /* axes_array */ ot_var_axis_info_t[] ]
export function ot_var_get_named_instance_count(face: face_t): number
export function ot_var_has_data(face: face_t): bool_t
export function ot_var_named_instance_get_design_coords(face: face_t, instance_index: number): [ /* returnType */ number, /* coords */ number[] ]
export function ot_var_named_instance_get_postscript_name_id(face: face_t, instance_index: number): ot_name_id_t
export function ot_var_named_instance_get_subfamily_name_id(face: face_t, instance_index: number): ot_name_id_t
export function ot_var_normalize_coords(face: face_t, coords_length: number, design_coords: number): /* normalized_coords */ number
export function ot_var_normalize_variations(face: face_t, variations: variation_t, variations_length: number): /* coords */ number[]
export function paint_color(funcs: paint_funcs_t, paint_data: object | null, is_foreground: bool_t, color: color_t): void
export function paint_color_glyph(funcs: paint_funcs_t, paint_data: object | null, glyph: codepoint_t, font: font_t): bool_t
export function paint_custom_palette_color(funcs: paint_funcs_t, paint_data: object | null, color_index: number): [ /* returnType */ bool_t, /* color */ color_t ]
export function paint_funcs_create(): paint_funcs_t
export function paint_funcs_get_empty(): paint_funcs_t
export function paint_funcs_is_immutable(funcs: paint_funcs_t): bool_t
export function paint_funcs_make_immutable(funcs: paint_funcs_t): void
export function paint_funcs_set_color_func(funcs: paint_funcs_t, func: paint_color_func_t): void
export function paint_funcs_set_color_glyph_func(funcs: paint_funcs_t, func: paint_color_glyph_func_t): void
export function paint_funcs_set_custom_palette_color_func(funcs: paint_funcs_t, func: paint_custom_palette_color_func_t): void
export function paint_funcs_set_image_func(funcs: paint_funcs_t, func: paint_image_func_t): void
export function paint_funcs_set_linear_gradient_func(funcs: paint_funcs_t, func: paint_linear_gradient_func_t): void
export function paint_funcs_set_pop_clip_func(funcs: paint_funcs_t, func: paint_pop_clip_func_t): void
export function paint_funcs_set_pop_group_func(funcs: paint_funcs_t, func: paint_pop_group_func_t): void
export function paint_funcs_set_pop_transform_func(funcs: paint_funcs_t, func: paint_pop_transform_func_t): void
export function paint_funcs_set_push_clip_glyph_func(funcs: paint_funcs_t, func: paint_push_clip_glyph_func_t): void
export function paint_funcs_set_push_clip_rectangle_func(funcs: paint_funcs_t, func: paint_push_clip_rectangle_func_t): void
export function paint_funcs_set_push_group_func(funcs: paint_funcs_t, func: paint_push_group_func_t): void
export function paint_funcs_set_push_transform_func(funcs: paint_funcs_t, func: paint_push_transform_func_t): void
export function paint_funcs_set_radial_gradient_func(funcs: paint_funcs_t, func: paint_radial_gradient_func_t): void
export function paint_funcs_set_sweep_gradient_func(funcs: paint_funcs_t, func: paint_sweep_gradient_func_t): void
export function paint_image(funcs: paint_funcs_t, paint_data: object | null, image: blob_t, width: number, height: number, format: tag_t, slant: number, extents?: glyph_extents_t | null): void
export function paint_linear_gradient(funcs: paint_funcs_t, paint_data: object | null, color_line: color_line_t, x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): void
export function paint_pop_clip(funcs: paint_funcs_t, paint_data?: object | null): void
export function paint_pop_group(funcs: paint_funcs_t, paint_data: object | null, mode: paint_composite_mode_t): void
export function paint_pop_transform(funcs: paint_funcs_t, paint_data?: object | null): void
export function paint_push_clip_glyph(funcs: paint_funcs_t, paint_data: object | null, glyph: codepoint_t, font: font_t): void
export function paint_push_clip_rectangle(funcs: paint_funcs_t, paint_data: object | null, xmin: number, ymin: number, xmax: number, ymax: number): void
export function paint_push_font_transform(funcs: paint_funcs_t, paint_data: object | null, font: font_t): void
export function paint_push_group(funcs: paint_funcs_t, paint_data?: object | null): void
export function paint_push_inverse_font_transform(funcs: paint_funcs_t, paint_data: object | null, font: font_t): void
export function paint_push_transform(funcs: paint_funcs_t, paint_data: object | null, xx: number, yx: number, xy: number, yy: number, dx: number, dy: number): void
export function paint_radial_gradient(funcs: paint_funcs_t, paint_data: object | null, color_line: color_line_t, x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): void
export function paint_sweep_gradient(funcs: paint_funcs_t, paint_data: object | null, color_line: color_line_t, x0: number, y0: number, start_angle: number, end_angle: number): void
export function realloc(ptr: object | null, size: number): object | null
export function script_from_iso15924_tag(tag: tag_t): script_t
export function script_from_string(str: Gjs.byteArray.ByteArray): script_t
export function script_get_horizontal_direction(script: script_t): direction_t
export function script_to_iso15924_tag(script: script_t): tag_t
export function segment_properties_equal(a: segment_properties_t, b: segment_properties_t): bool_t
export function segment_properties_hash(p: segment_properties_t): number
export function segment_properties_overlay(p: segment_properties_t, src: segment_properties_t): void
export function set_add(set: set_t, codepoint: codepoint_t): void
export function set_add_range(set: set_t, first: codepoint_t, last: codepoint_t): void
export function set_add_sorted_array(set: set_t, sorted_codepoints: codepoint_t[]): void
export function set_allocation_successful(set: set_t): bool_t
export function set_clear(set: set_t): void
export function set_copy(set: set_t): set_t
export function set_create(): set_t
export function set_del(set: set_t, codepoint: codepoint_t): void
export function set_del_range(set: set_t, first: codepoint_t, last: codepoint_t): void
export function set_get_empty(): set_t
export function set_get_max(set: set_t): codepoint_t
export function set_get_min(set: set_t): codepoint_t
export function set_get_population(set: set_t): number
export function set_has(set: set_t, codepoint: codepoint_t): bool_t
export function set_hash(set: set_t): number
export function set_intersect(set: set_t, other: set_t): void
export function set_invert(set: set_t): void
export function set_is_empty(set: set_t): bool_t
export function set_is_equal(set: set_t, other: set_t): bool_t
export function set_is_inverted(set: set_t): bool_t
export function set_is_subset(set: set_t, larger_set: set_t): bool_t
export function set_next(set: set_t, codepoint: codepoint_t): bool_t
export function set_next_many(set: set_t, codepoint: codepoint_t, out: codepoint_t[]): number
export function set_next_range(set: set_t, last: codepoint_t): [ /* returnType */ bool_t, /* first */ codepoint_t ]
export function set_previous(set: set_t, codepoint: codepoint_t): bool_t
export function set_previous_range(set: set_t, first: codepoint_t): [ /* returnType */ bool_t, /* last */ codepoint_t ]
export function set_set(set: set_t, other: set_t): void
export function set_subtract(set: set_t, other: set_t): void
export function set_symmetric_difference(set: set_t, other: set_t): void
export function set_union(set: set_t, other: set_t): void
export function shape(font: font_t, buffer: buffer_t, features: feature_t[] | null): void
export function shape_full(font: font_t, buffer: buffer_t, features: feature_t[] | null, shaper_list?: string[] | null): bool_t
export function shape_list_shapers(): string[]
export function shape_plan_create(face: face_t, props: segment_properties_t, user_features: feature_t[], shaper_list: string[]): shape_plan_t
export function shape_plan_create2(face: face_t, props: segment_properties_t, user_features: feature_t[], coords: number[], shaper_list: string[]): shape_plan_t
export function shape_plan_create_cached(face: face_t, props: segment_properties_t, user_features: feature_t[], shaper_list: string[]): shape_plan_t
export function shape_plan_create_cached2(face: face_t, props: segment_properties_t, user_features: feature_t[], coords: number[], shaper_list: string[]): shape_plan_t
export function shape_plan_execute(shape_plan: shape_plan_t, font: font_t, buffer: buffer_t, features: feature_t[]): bool_t
export function shape_plan_get_empty(): shape_plan_t
export function shape_plan_get_shaper(shape_plan: shape_plan_t): string
export function style_get_value(font: font_t, style_tag: style_tag_t): number
export function tag_from_string(str: Gjs.byteArray.ByteArray): tag_t
export function tag_to_string(tag: tag_t): /* buf */ Gjs.byteArray.ByteArray
export function unicode_combining_class(ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_combining_class_t
export function unicode_compose(ufuncs: unicode_funcs_t, a: codepoint_t, b: codepoint_t): [ /* returnType */ bool_t, /* ab */ codepoint_t ]
export function unicode_decompose(ufuncs: unicode_funcs_t, ab: codepoint_t): [ /* returnType */ bool_t, /* a */ codepoint_t, /* b */ codepoint_t ]
export function unicode_decompose_compatibility(ufuncs: unicode_funcs_t, u: codepoint_t): [ /* returnType */ number, /* decomposed */ codepoint_t ]
export function unicode_eastasian_width(ufuncs: unicode_funcs_t, unicode: codepoint_t): number
export function unicode_funcs_create(parent?: unicode_funcs_t | null): unicode_funcs_t
export function unicode_funcs_get_default(): unicode_funcs_t
export function unicode_funcs_get_empty(): unicode_funcs_t
export function unicode_funcs_get_parent(ufuncs: unicode_funcs_t): unicode_funcs_t
export function unicode_funcs_is_immutable(ufuncs: unicode_funcs_t): bool_t
export function unicode_funcs_make_immutable(ufuncs: unicode_funcs_t): void
export function unicode_funcs_set_combining_class_func(ufuncs: unicode_funcs_t, func: unicode_combining_class_func_t): void
export function unicode_funcs_set_compose_func(ufuncs: unicode_funcs_t, func: unicode_compose_func_t): void
export function unicode_funcs_set_decompose_compatibility_func(ufuncs: unicode_funcs_t, func: unicode_decompose_compatibility_func_t): void
export function unicode_funcs_set_decompose_func(ufuncs: unicode_funcs_t, func: unicode_decompose_func_t): void
export function unicode_funcs_set_eastasian_width_func(ufuncs: unicode_funcs_t, func: unicode_eastasian_width_func_t): void
export function unicode_funcs_set_general_category_func(ufuncs: unicode_funcs_t, func: unicode_general_category_func_t): void
export function unicode_funcs_set_mirroring_func(ufuncs: unicode_funcs_t, func: unicode_mirroring_func_t): void
export function unicode_funcs_set_script_func(ufuncs: unicode_funcs_t, func: unicode_script_func_t): void
export function unicode_general_category(ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_general_category_t
export function unicode_mirroring(ufuncs: unicode_funcs_t, unicode: codepoint_t): codepoint_t
export function unicode_script(ufuncs: unicode_funcs_t, unicode: codepoint_t): script_t
export function variation_from_string(str: Gjs.byteArray.ByteArray): [ /* returnType */ bool_t, /* variation */ variation_t ]
export function variation_to_string(variation: variation_t): /* buf */ string[]
export interface buffer_message_func_t {
    (buffer: buffer_t, font: font_t, message: string): bool_t
}
export interface color_line_get_color_stops_func_t {
    (color_line: color_line_t, color_line_data: object | null, start: number): number
}
export interface color_line_get_extend_func_t {
    (color_line: color_line_t, color_line_data?: object | null): paint_extend_t
}
export interface destroy_func_t {
    (): void
}
export interface draw_close_path_func_t {
    (dfuncs: draw_funcs_t, draw_data: object | null, st: draw_state_t): void
}
export interface draw_cubic_to_func_t {
    (dfuncs: draw_funcs_t, draw_data: object | null, st: draw_state_t, control1_x: number, control1_y: number, control2_x: number, control2_y: number, to_x: number, to_y: number): void
}
export interface draw_line_to_func_t {
    (dfuncs: draw_funcs_t, draw_data: object | null, st: draw_state_t, to_x: number, to_y: number): void
}
export interface draw_move_to_func_t {
    (dfuncs: draw_funcs_t, draw_data: object | null, st: draw_state_t, to_x: number, to_y: number): void
}
export interface draw_quadratic_to_func_t {
    (dfuncs: draw_funcs_t, draw_data: object | null, st: draw_state_t, control_x: number, control_y: number, to_x: number, to_y: number): void
}
export interface font_draw_glyph_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t, draw_funcs: draw_funcs_t, draw_data?: object | null): void
}
export interface font_draw_glyph_or_fail_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t, draw_funcs: draw_funcs_t, draw_data?: object | null): bool_t
}
export interface font_get_font_extents_func_t {
    (font: font_t, font_data?: object | null): bool_t
}
export interface font_get_glyph_advance_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t): position_t
}
export interface font_get_glyph_advances_func_t {
    (font: font_t, font_data: object | null, count: number, first_glyph: codepoint_t, glyph_stride: number, advance_stride: number): void
}
export interface font_get_glyph_contour_point_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t, point_index: number): bool_t
}
export interface font_get_glyph_extents_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t): bool_t
}
export interface font_get_glyph_from_name_func_t {
    (font: font_t, font_data: object | null, name: string[]): bool_t
}
export interface font_get_glyph_func_t {
    (font: font_t, font_data: object | null, unicode: codepoint_t, variation_selector: codepoint_t): bool_t
}
export interface font_get_glyph_kerning_func_t {
    (font: font_t, font_data: object | null, first_glyph: codepoint_t, second_glyph: codepoint_t): position_t
}
export interface font_get_glyph_name_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t): bool_t
}
export interface font_get_glyph_origin_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t): bool_t
}
export interface font_get_glyph_origins_func_t {
    (font: font_t, font_data: object | null, count: number, first_glyph: codepoint_t, glyph_stride: number, x_stride: number, y_stride: number): bool_t
}
export interface font_get_glyph_shape_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t, draw_funcs: draw_funcs_t, draw_data?: object | null): void
}
export interface font_get_nominal_glyph_func_t {
    (font: font_t, font_data: object | null, unicode: codepoint_t): bool_t
}
export interface font_get_nominal_glyphs_func_t {
    (font: font_t, font_data: object | null, count: number, first_unicode: codepoint_t, unicode_stride: number, glyph_stride: number): number
}
export interface font_get_variation_glyph_func_t {
    (font: font_t, font_data: object | null, unicode: codepoint_t, variation_selector: codepoint_t): bool_t
}
export interface font_paint_glyph_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t, paint_funcs: paint_funcs_t, paint_data: object | null, palette_index: number, foreground: color_t): bool_t
}
export interface font_paint_glyph_or_fail_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t, paint_funcs: paint_funcs_t, paint_data: object | null, palette_index: number, foreground: color_t): bool_t
}
export interface get_table_tags_func_t {
    (face: face_t, start_offset: number): number
}
export interface paint_color_func_t {
    (funcs: paint_funcs_t, paint_data: object | null, is_foreground: bool_t, color: color_t): void
}
export interface paint_color_glyph_func_t {
    (funcs: paint_funcs_t, paint_data: object | null, glyph: codepoint_t, font: font_t): bool_t
}
export interface paint_custom_palette_color_func_t {
    (funcs: paint_funcs_t, paint_data: object | null, color_index: number): bool_t
}
export interface paint_image_func_t {
    (funcs: paint_funcs_t, paint_data: object | null, image: blob_t, width: number, height: number, format: tag_t, slant: number, extents?: glyph_extents_t | null): bool_t
}
export interface paint_linear_gradient_func_t {
    (funcs: paint_funcs_t, paint_data: object | null, color_line: color_line_t, x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): void
}
export interface paint_pop_clip_func_t {
    (funcs: paint_funcs_t, paint_data?: object | null): void
}
export interface paint_pop_group_func_t {
    (funcs: paint_funcs_t, paint_data: object | null, mode: paint_composite_mode_t): void
}
export interface paint_pop_transform_func_t {
    (funcs: paint_funcs_t, paint_data?: object | null): void
}
export interface paint_push_clip_glyph_func_t {
    (funcs: paint_funcs_t, paint_data: object | null, glyph: codepoint_t, font: font_t): void
}
export interface paint_push_clip_rectangle_func_t {
    (funcs: paint_funcs_t, paint_data: object | null, xmin: number, ymin: number, xmax: number, ymax: number): void
}
export interface paint_push_group_func_t {
    (funcs: paint_funcs_t, paint_data?: object | null): void
}
export interface paint_push_transform_func_t {
    (funcs: paint_funcs_t, paint_data: object | null, xx: number, yx: number, xy: number, yy: number, dx: number, dy: number): void
}
export interface paint_radial_gradient_func_t {
    (funcs: paint_funcs_t, paint_data: object | null, color_line: color_line_t, x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): void
}
export interface paint_sweep_gradient_func_t {
    (funcs: paint_funcs_t, paint_data: object | null, color_line: color_line_t, x0: number, y0: number, start_angle: number, end_angle: number): void
}
export interface reference_table_func_t {
    (face: face_t, tag: tag_t): blob_t
}
export interface unicode_combining_class_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_combining_class_t
}
export interface unicode_compose_func_t {
    (ufuncs: unicode_funcs_t, a: codepoint_t, b: codepoint_t): bool_t
}
export interface unicode_decompose_compatibility_func_t {
    (ufuncs: unicode_funcs_t, u: codepoint_t, decomposed: codepoint_t): number
}
export interface unicode_decompose_func_t {
    (ufuncs: unicode_funcs_t, ab: codepoint_t): bool_t
}
export interface unicode_eastasian_width_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): number
}
export interface unicode_general_category_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_general_category_t
}
export interface unicode_mirroring_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): codepoint_t
}
export interface unicode_script_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): script_t
}
export class aat_layout_feature_selector_info_t {
    /* Fields of HarfBuzz.aat_layout_feature_selector_info_t */
    name_id: ot_name_id_t
    enable: aat_layout_feature_selector_t
    disable: aat_layout_feature_selector_t
    static name: string
}
export class blob_t {
    static name: string
}
export class buffer_t {
    static name: string
}
export class color_line_t {
    /* Fields of HarfBuzz.color_line_t */
    data: object
    get_color_stops: color_line_get_color_stops_func_t
    get_color_stops_user_data: object
    get_extend: color_line_get_extend_func_t
    get_extend_user_data: object
    reserved0: object
    reserved1: object
    reserved2: object
    reserved3: object
    reserved5: object
    reserved6: object
    reserved7: object
    reserved8: object
    static name: string
}
export class color_stop_t {
    /* Fields of HarfBuzz.color_stop_t */
    offset: number
    is_foreground: bool_t
    color: color_t
    static name: string
}
export class draw_funcs_t {
    static name: string
}
export class draw_state_t {
    /* Fields of HarfBuzz.draw_state_t */
    path_open: bool_t
    path_start_x: number
    path_start_y: number
    current_x: number
    current_y: number
    static name: string
}
export class face_t {
    static name: string
}
export class feature_t {
    /* Fields of HarfBuzz.feature_t */
    tag: tag_t
    value: number
    start: number
    end: number
    /* Methods of HarfBuzz.feature_t */
    _string(): /* buf */ string[]
    static name: string
}
export class font_extents_t {
    /* Fields of HarfBuzz.font_extents_t */
    ascender: position_t
    descender: position_t
    line_gap: position_t
    static name: string
}
export class font_funcs_t {
    static name: string
}
export class font_t {
    static name: string
}
export class glyph_extents_t {
    /* Fields of HarfBuzz.glyph_extents_t */
    x_bearing: position_t
    y_bearing: position_t
    width: position_t
    height: position_t
    static name: string
}
export class glyph_info_t {
    /* Fields of HarfBuzz.glyph_info_t */
    codepoint: codepoint_t
    cluster: number
    static name: string
}
export class glyph_position_t {
    /* Fields of HarfBuzz.glyph_position_t */
    x_advance: position_t
    y_advance: position_t
    x_offset: position_t
    y_offset: position_t
    static name: string
}
export class language_t {
    /* Methods of HarfBuzz.language_t */
    _string(): string
    static name: string
}
export class map_t {
    static name: string
}
export class ot_color_layer_t {
    /* Fields of HarfBuzz.ot_color_layer_t */
    glyph: codepoint_t
    color_index: number
    static name: string
}
export class ot_math_glyph_part_t {
    /* Fields of HarfBuzz.ot_math_glyph_part_t */
    glyph: codepoint_t
    start_connector_length: position_t
    end_connector_length: position_t
    full_advance: position_t
    flags: ot_math_glyph_part_flags_t
    static name: string
}
export class ot_math_glyph_variant_t {
    /* Fields of HarfBuzz.ot_math_glyph_variant_t */
    glyph: codepoint_t
    advance: position_t
    static name: string
}
export class ot_math_kern_entry_t {
    /* Fields of HarfBuzz.ot_math_kern_entry_t */
    max_correction_height: position_t
    kern_value: position_t
    static name: string
}
export class ot_name_entry_t {
    /* Fields of HarfBuzz.ot_name_entry_t */
    name_id: ot_name_id_t
    language: language_t
    static name: string
}
export class ot_var_axis_info_t {
    /* Fields of HarfBuzz.ot_var_axis_info_t */
    axis_index: number
    tag: tag_t
    name_id: ot_name_id_t
    flags: ot_var_axis_flags_t
    min_value: number
    default_value: number
    max_value: number
    static name: string
}
export class ot_var_axis_t {
    /* Fields of HarfBuzz.ot_var_axis_t */
    tag: tag_t
    name_id: ot_name_id_t
    min_value: number
    default_value: number
    max_value: number
    static name: string
}
export class paint_funcs_t {
    static name: string
}
export class segment_properties_t {
    /* Fields of HarfBuzz.segment_properties_t */
    direction: direction_t
    script: script_t
    language: language_t
    static name: string
}
export class set_t {
    static name: string
}
export class shape_plan_t {
    static name: string
}
export class unicode_funcs_t {
    static name: string
}
export class user_data_key_t {
    /* Fields of HarfBuzz.user_data_key_t */
    static name: string
}
export class variation_t {
    /* Fields of HarfBuzz.variation_t */
    tag: tag_t
    value: number
    /* Methods of HarfBuzz.variation_t */
    _string(): /* buf */ string[]
    static name: string
}
export class var_int_t {
    /* Fields of HarfBuzz.var_int_t */
    u32: number
    i32: number
    u16: number[]
    i16: number[]
    u8: Gjs.byteArray.ByteArray
    i8: Gjs.byteArray.ByteArray
    static name: string
}
export class var_num_t {
    /* Fields of HarfBuzz.var_num_t */
    f: number
    u32: number
    i32: number
    u16: number[]
    i16: number[]
    u8: Gjs.byteArray.ByteArray
    i8: Gjs.byteArray.ByteArray
    static name: string
}
type bool_t = number
type codepoint_t = number
type color_t = number
type font_get_font_h_extents_func_t = font_get_font_extents_func_t
type font_get_font_v_extents_func_t = font_get_font_extents_func_t
type font_get_glyph_h_advance_func_t = font_get_glyph_advance_func_t
type font_get_glyph_h_advances_func_t = font_get_glyph_advances_func_t
type font_get_glyph_h_kerning_func_t = font_get_glyph_kerning_func_t
type font_get_glyph_h_origin_func_t = font_get_glyph_origin_func_t
type font_get_glyph_h_origins_func_t = font_get_glyph_origins_func_t
type font_get_glyph_v_advance_func_t = font_get_glyph_advance_func_t
type font_get_glyph_v_advances_func_t = font_get_glyph_advances_func_t
type font_get_glyph_v_kerning_func_t = font_get_glyph_kerning_func_t
type font_get_glyph_v_origin_func_t = font_get_glyph_origin_func_t
type font_get_glyph_v_origins_func_t = font_get_glyph_origins_func_t
type mask_t = number
type ot_name_id_t = number
type position_t = number
type tag_t = number