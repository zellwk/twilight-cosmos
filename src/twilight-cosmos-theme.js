// Moonlight II Color Palette

const colors = {
  // Primary colors
  backgroundDark: '#19191b',
  backgroundDarker: '#191a2a',
  backgroundLight: '#2f334d',

  // Syntax highlighting colors
  purple50: '#e5e7f2',
  purple100: '#d7dae8',
  purple500: '#7b8bff',
  purple600: '#5d6ddd',
  purple700: '#49528f',
  purple900: '#222027',
  purple1000: '#0d0c11',
  purple200d: '#a6aac9',
  purple300d: '#979bba',
  purple500d: '#8b8fac',
  purple600d: '#6671c6',
  purple700d: '#313455',
  purple800d: '#272a3a',
  purple900d: '#19191b',
  red400: '#fb7171',
  red500: '#fa5858',
  green500: '#66e9a5',
  blue500: '#3e9eee',
  cyan500: '#00daf6',
  orange500: '#f7bd2b',
  magenta: '#fca7ea',

  // Orig colors
  blue: '#7cafff',
  lightBlue: '#60bdff',
  cyan: '#78dbff',
  purple: '#c4a2ff',
  green: '#c3e88d',
  yellow: '#ffc777',
  orange: '#ff966c',
  red: '#ff757f',
  lightRed: '#ff98a4',
  pink: '#ff5370',

  // Accent colors
  teal: '#3ad7c7',
  paleBlue: '#a9b8e8',
  brightBlue: '#b4f9f8',
  paleForeground: '#b4c2f0',

  // UI colors
  guide: '#444a73',
  selection: '#2f334d',
  nil: '#979bb6',

  // Special
  white: '#ffffff',
  black: '#000000',
  bigRed: '#ff0000',
}

const palette = {
  // Base colors
  foreground: colors.purple50,
  background: colors.purple900,
  comment: colors.purple600d,
  commentAlt: colors.purple500d,

  // Secondary foreground colors
  paleForeground: colors.purple50, // HTML text

  // Syntax highlighting - Keywords and control
  keyword: colors.purple500,
  storage: colors.purple500,
  storageModifier: colors.magenta,
  operator: colors.purple500,
  punctuation: colors.purple300d,
  export: colors.cyan500,

  // Syntax highlighting - Literals
  string: colors.green500,
  constant: colors.orange500,
  object: colors.purple50,
  number: colors.orange, // To think about this
  boolean: colors.orange, // To think about this

  // Syntax highlighting - Identifiers
  parameter: colors.magenta, // Function arguments.
  property: colors.blue500, // Property (before method) paleBlue. To think.
  objectKey: colors.blue500, // Object key. teal. To think.

  // Syntax highlighting - Functions and types
  function: colors.cyan500,
  functionBuiltin: colors.cyan500,
  class: colors.cyan500, // class keyword.
  support: colors.orange500, // JSdoc type.

  // For CSS
  cssClass: colors.orange500,
  cssProperty: colors.green500,

  // For HTML
  tag: colors.red400,
  componentTag: colors.orange500,
  attribute: colors.purple500,

  // UI State colors
  invalid: colors.pink, // Invalid. pink. To think.
  deprecated: colors.purple, // Deprecated. purple. To think.

  // JSON
  json1: colors.cyan500,
  json2: colors.purple500,
  json3: colors.orange500,
  json4: colors.magenta,
  json5: colors.cyan500,
  json6: colors.purple500,
  json7: colors.orange500,

  // Background variants
  interfaceBackground: colors.purple900d,
  interfaceBorders: colors.purple1000,
  dropdownBackground: colors.purple900d, // ?? To think
  dropdownHoverBackground: colors.purple800,

  // Selection colors
  activeLine: colors.purple800d, // ?? selection. To think
  selectedLines: colors.purple700d,
  selectionSubtle: '#828bb850',

  // Guide/decoration colors
  guide: colors.guide,
  guideActive: '#828bb8aa',

  // Diff/Git colors
  diffAdded: colors.green,
  diffAddedFaint: '#c3e88d15',
  diffAddedMedium: '#c3e88d66',
  diffModified: colors.blue,
  diffModifiedFaint: '#7cafff66',
  diffDeleted: colors.pink,
  diffDeletedFaint: '#ff537020',
  diffDeletedStrong: '#ff5370aa',

  // Warning/attention colors
  warning: colors.yellow,
  warningFaint: '#ffc777cc',

  // Accent/highlight colors
  accent: colors.blue500,
  accentStrong: '#3b63cf',
  highlight: '#78dbffbb',

  // Special semantic colors
  nil: colors.nil,
  white: colors.white,
  black: colors.black,
  brightBlue: colors.brightBlue,

  // Basic colors (for terminal and other uses)
  cyan: colors.cyan500,
  green: colors.green500,
  yellow: colors.orange500,
  magenta: colors.magenta,
  red: colors.red500,
  blue: colors.blue500,
  lightBlue: colors.lightBlue,
  orange: colors.orange500,

  // Terminal ANSI colors
  terminalBrightBlue: colors.blue,
  terminalBrightCyan: colors.cyan,
  terminalBrightGreen: colors.green,
  terminalBrightMagenta: colors.magenta,
  terminalBrightRed: colors.red,
  terminalBrightWhite: colors.purple50,
  terminalBrightYellow: colors.yellow,
}

export default {
  colors: {
    'activityBar.background': palette.interfaceBackground,
    'activityBar.border': '#22243660',
    'activityBar.foreground': palette.paleForeground,
    'activityBarBadge.background': palette.accentStrong,
    'activityBarBadge.foreground': '#ffffffee',
    'badge.background': palette.accentStrong,
    'badge.foreground': '#ffffffee',
    'breadcrumb.activeSelectionForeground': palette.accent,
    'breadcrumb.background': palette.background,
    'breadcrumb.focusForeground': palette.foreground,
    'breadcrumb.foreground': palette.commentAlt,
    'breadcrumbPicker.background': palette.interfaceBackground,
    'button.background': palette.accentStrong,
    'button.foreground': palette.white,
    'button.hoverBackground': '#3d6fe0',
    'button.secondaryBackground': '#828bb899',
    'button.secondaryForeground': palette.white,
    'button.secondaryHoverBackground': palette.commentAlt,
    contrastBorder: palette.interfaceBorders,
    'debugToolBar.background': palette.interfaceBackground,
    'diffEditor.insertedTextBackground': palette.diffAddedFaint,
    'diffEditor.removedTextBackground': palette.diffDeletedFaint,
    'dropdown.background': palette.dropdownBackground,
    'dropdown.border': '#00000066',
    'dropdown.foreground': palette.foreground,
    'editor.background': palette.background,
    'editor.findMatchBackground': palette.guide,
    'editor.findMatchBorder': palette.cyan,
    'editor.findMatchHighlightBackground': palette.guide,
    'editor.foreground': palette.foreground,
    'editor.lineHighlightBackground': palette.activeLine,
    'editor.selectionBackground': palette.selectedLines,
    'editor.selectionHighlightBackground': palette.guide,
    'editorBracketMatch.background': palette.background,
    'editorBracketMatch.border': '#7cafffbb',
    'editorBracketHighlight.foreground1': '#bb6fff',
    'editorBracketHighlight.foreground3': '#6fa1ff',
    'editorBracketHighlight.foreground2': '#d0b132',
    'editorCodeLens.foreground': palette.commentAlt,
    'editorCursor.foreground': palette.accent,
    'editorError.foreground': palette.invalid,
    'editorGroup.border': palette.interfaceBorders,
    'editorGroupHeader.tabsBackground': palette.interfaceBackground,
    'editorGutter.addedBackground': palette.diffAddedMedium,
    'editorGutter.deletedBackground': palette.diffDeletedStrong,
    'editorGutter.modifiedBackground': palette.diffModifiedFaint,
    'editorHoverWidget.background': palette.interfaceBorders,
    'editorHoverWidget.border': '#000000aa',
    'editorIndentGuide.activeBackground': palette.guideActive,
    'editorIndentGuide.background': '#444a73bb',
    'editorInlayHint.background': palette.activeLine,
    'editorInlayHint.foreground': palette.commentAlt,
    'editorLineNumber.activeForeground': palette.commentAlt,
    'editorLineNumber.foreground': palette.guide,
    'editorLink.activeForeground': palette.foreground,
    'editorMarkerNavigation.background': '#c8d3f505',
    'editorOverviewRuler.addedForeground': palette.diffAddedMedium,
    'editorOverviewRuler.border': palette.background,
    'editorOverviewRuler.bracketMatchForeground': '#3b63cfbb',
    'editorOverviewRuler.deletedForeground': '#ff98a466',
    'editorOverviewRuler.errorForeground': '#ff757fcc',
    'editorOverviewRuler.findMatchForeground': palette.highlight,
    'editorOverviewRuler.infoForeground': '#60bdff66',
    'editorOverviewRuler.modifiedForeground': palette.diffModifiedFaint,
    'editorOverviewRuler.warningForeground': palette.warningFaint,
    'editorRuler.foreground': '#444a73bb',
    'editorSuggestWidget.background': palette.interfaceBorders,
    'editorSuggestWidget.border': '#00000033',
    'editorSuggestWidget.foreground': palette.foreground,
    'editorSuggestWidget.highlightForeground': palette.cyan,
    'editorSuggestWidget.selectedBackground': palette.activeLine,
    'editorWarning.foreground': palette.warningFaint,
    'editorWhitespace.foreground': '#c8d3f540',
    'editorWidget.background': palette.interfaceBackground,
    'editorWidget.resizeBorder': palette.accent,
    'extensionButton.prominentBackground': palette.accentStrong,
    'extensionButton.prominentHoverBackground': '#60bdffcc',
    focusBorder: '#7cafffaa',
    foreground: palette.foreground,
    'gitDecoration.conflictingResourceForeground': palette.warningFaint,
    'gitDecoration.deletedResourceForeground': '#ff5370dd',
    'gitDecoration.ignoredResourceForeground': '#777fabaa',
    'gitDecoration.modifiedResourceForeground': '#7cafffee',
    'gitDecoration.untrackedResourceForeground': '#7af8cacc',
    'gitlens.trailingLineForegroundColor': '#828bb8aa',
    'input.background': palette.interfaceBorders,
    'input.border': '#00000066',
    'input.foreground': palette.foreground,
    'input.placeholderForeground': '#c8d3f5aa',
    'inputValidation.errorBackground': '#c53b53',
    'inputValidation.errorBorder': '#ff537050',
    'inputValidation.errorForeground': palette.white,
    'inputValidation.infoBackground': '#446bbb',
    'inputValidation.infoBorder': '#7cafff50',
    'inputValidation.infoForeground': palette.white,
    'inputValidation.warningBackground': '#ad7c43',
    'inputValidation.warningBorder': '#ffc77750',
    'inputValidation.warningForeground': palette.white,
    'list.activeSelectionBackground': palette.activeLine,
    'list.activeSelectionForeground': palette.white,
    'list.focusBackground': palette.dropdownHoverBackground,
    'list.focusForeground': palette.foreground,
    'list.highlightForeground': palette.cyan,
    'list.hoverBackground': palette.dropdownHoverBackground,
    'list.hoverForeground': palette.foreground,
    'list.inactiveSelectionBackground': palette.activeLine,
    'list.inactiveSelectionForeground': palette.foreground,
    'list.warningForeground': palette.warningFaint,
    'menu.background': palette.interfaceBackground,
    'menu.foreground': palette.foreground,
    'menu.selectionBackground': '#00000050',
    'menu.selectionBorder': '#00000030',
    'menu.selectionForeground': palette.accent,
    'menu.separatorBackground': palette.foreground,
    'menubar.selectionBackground': '#00000030',
    'menubar.selectionBorder': '#00000030',
    'menubar.selectionForeground': palette.accent,
    'minimap.findMatchHighlight': '#78dbffcc',
    'minimap.selectionHighlight': '#78dbff33',
    'minimapGutter.addedBackground': palette.diffAddedMedium,
    'minimapGutter.modifiedBackground': palette.diffModifiedFaint,
    'notifications.background': palette.activeLine,
    'notifications.foreground': palette.foreground,
    'notificationLink.foreground': palette.accent,
    'panel.background': palette.interfaceBackground,
    'panel.border': '#00000033',
    'panel.dropBackground': palette.foreground,
    'panelTitle.activeBorder': palette.accent,
    'panelTitle.activeForeground': palette.foreground,
    'panelTitle.inactiveForeground': palette.commentAlt,
    'peekView.border': '#00000030',
    'peekViewEditor.background': '#c8d3f505',
    'peekViewEditor.matchHighlightBackground': palette.selectedLines,
    'peekViewEditorGutter.background': '#c8d3f505',
    'peekViewResult.background': '#c8d3f505',
    'peekViewResult.matchHighlightBackground': palette.selectedLines,
    'peekViewResult.selectionBackground': '#828bb870',
    'peekViewTitle.background': '#c8d3f505',
    'peekViewTitleDescription.foreground': '#c8d3f560',
    'pickerGroup.foreground': palette.accent,
    'progressBar.background': palette.accent,
    'scrollbar.shadow': '#00000022',
    'scrollbarSlider.activeBackground': palette.accent,
    'scrollbarSlider.background': '#828bb830',
    'scrollbarSlider.hoverBackground': '#a9b8e830',
    'selection.background': palette.activeLine,
    'settings.checkboxBackground': '#131421',
    'settings.checkboxBorder': '#00000066',
    'settings.checkboxForeground': palette.foreground,
    'settings.dropdownBackground': palette.activeLine,
    'settings.dropdownBorder': palette.interfaceBorders,
    'settings.dropdownForeground': palette.foreground,
    'settings.headerForeground': palette.accent,
    'settings.modifiedItemIndicator': palette.accent,
    'settings.numberInputBackground': palette.interfaceBorders,
    'settings.numberInputBorder': '#00000066',
    'settings.numberInputForeground': palette.foreground,
    'settings.textInputBackground': palette.interfaceBorders,
    'settings.textInputBorder': '#00000066',
    'settings.textInputForeground': palette.foreground,
    'sideBar.background': palette.interfaceBackground,
    'sideBar.border': palette.interfaceBorders,
    'sideBar.foreground': palette.commentAlt,
    'sideBarSectionHeader.background': palette.interfaceBackground,
    'sideBarSectionHeader.border': palette.activeLine,
    'sideBarTitle.foreground': palette.foreground,
    'statusBar.background': palette.interfaceBackground,
    'statusBar.border': palette.interfaceBorders,
    'statusBar.debuggingBackground': palette.accent,
    'statusBar.debuggingForeground': '#131421',
    'statusBar.foreground': palette.commentAlt,
    'statusBar.noFolderBackground': palette.background,
    'statusBarItem.hoverBackground': '#828bb820',
    'tab.activeBackground': palette.background,
    'tab.activeBorder': palette.accent,
    'tab.activeForeground': palette.foreground,
    'tab.activeModifiedBorder': palette.commentAlt,
    'tab.border': palette.interfaceBorders,
    'tab.inactiveBackground': palette.interfaceBackground,
    'tab.inactiveForeground': palette.commentAlt,
    'tab.unfocusedActiveBorder': palette.commentAlt,
    'tab.unfocusedActiveForeground': palette.foreground,
    'terminal.ansiBlack': palette.black,
    'terminal.ansiBlue': palette.accent,
    'terminal.ansiBrightBlack': palette.commentAlt,
    'terminal.ansiBrightBlue': palette.terminalBrightBlue,
    'terminal.ansiBrightCyan': palette.terminalBrightCyan,
    'terminal.ansiBrightGreen': palette.terminalBrightGreen,
    'terminal.ansiBrightMagenta': palette.terminalBrightMagenta,
    'terminal.ansiBrightRed': palette.terminalBrightRed,
    'terminal.ansiBrightWhite': palette.terminalBrightWhite,
    'terminal.ansiBrightYellow': palette.terminalBrightYellow,
    'terminal.ansiCyan': palette.cyan,
    'terminal.ansiGreen': palette.green,
    'terminal.ansiMagenta': palette.magenta,
    'terminal.ansiRed': palette.red,
    'terminal.ansiWhite': palette.foreground,
    'terminal.ansiYellow': palette.yellow,
    'terminal.background': palette.background,
    'terminal.border': palette.activeLine,
    'terminal.foreground': '#d5def8',
    'terminal.selectionBackground': '#c8d3f544',
    'terminalCursor.foreground': palette.accent,
    'textLink.activeForeground': palette.cyan,
    'textLink.foreground': palette.lightBlue,
    'titleBar.activeBackground': palette.interfaceBackground,
    'titleBar.activeForeground': palette.foreground,
    'titleBar.border': palette.interfaceBorders,
    'titleBar.inactiveBackground': palette.interfaceBackground,
    'titleBar.inactiveForeground': palette.commentAlt,
    'tree.indentGuidesStroke': '#828bb866',
    'widget.shadow': '#00000033',
  },
  displayName: 'Twilight Cosmos',
  name: 'twilight-cosmos',
  semanticHighlighting: false,
  // semanticTokenColors: {
  //   function: palette.blue,
  //   'method.declaration': palette.blue,
  //   'function.defaultLibrary': palette.lightBlue,
  //   method: palette.lightBlue,
  //   'variable.defaultLibrary': palette.yellow,
  //   property: palette.foreground,
  //   'property.declaration': palette.objectKey,
  //   'property.readonly': palette.orange,
  //   'class.builtin': palette.orange,
  //   selfParameter: palette.red,
  //   module: palette.foreground,
  // },
  tokenColors: [
    {
      name: 'Comment',
      scope: [
        'comment',
        'punctuation.definition.comment',
        'string.quoted.docstring',
      ],
      settings: {
        foreground: palette.comment,
        fontStyle: 'italic',
      },
    },
    {
      name: 'Variables and Plain Text',
      scope: [
        'variable',
        'support.variable',
        'string constant.other.placeholder',
        'text.html',
      ],
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: 'DOM Variables',
      scope: [
        'support.variable.dom',
        'support.constant.math',
        'support.type.object.module',
        'support.variable.object.process',
        'support.constant.json',
      ],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: 'Nil',
      scope: ['constant.language.undefined', 'constant.language.null'],
      settings: {
        foreground: palette.nil,
      },
    },
    {
      name: 'PHP Constants',
      scope: ['constant.other.php'],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: 'Colors',
      scope: ['constant.other.color'],
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: 'Invalid',
      scope: ['invalid', 'invalid.illegal'],
      settings: {
        foreground: palette.invalid,
      },
    },
    {
      name: 'Invalid deprecated',
      scope: ['invalid.deprecated'],
      settings: {
        foreground: palette.deprecated,
      },
    },
    {
      name: 'Keyword, Storage',
      scope: ['keyword', 'storage.type', 'keyword.other.important'],
      settings: {
        foreground: palette.keyword,
      },
    },

    {
      name: 'Storage Modifier',
      scope: ['storage.modifier'],
      settings: {
        foreground: palette.storageModifier,
        fontStyle: 'italic',
      },
    },
    {
      name: 'Interpolation',
      scope: [
        'punctuation.definition.template-expression',
        'punctuation.section.embedded',
      ],
      settings: {
        foreground: palette.cyan,
      },
    },
    {
      name: 'Spread',
      scope: ['keyword.operator.spread', 'keyword.operator.rest'],
      settings: {
        foreground: colors.keyword,
        fontStyle: 'bold',
      },
    },
    {
      name: 'Operator',
      scope: [
        'keyword.operator',
        'keyword.control',
        'punctuation.definition.keyword.css',
      ],
      settings: {
        foreground: palette.operator,
        fontStyle: 'normal',
      },
    },
    {
      name: 'Punctuation',
      scope: [
        'punctuation',
        'punctuation.definition.string',
        'punctuation.terminator.rule',
        'punctuation.definition.entity',
        'meta.property-list',
      ],
      settings: {
        foreground: palette.punctuation,
        fontStyle: 'normal',
      },
    },
    {
      name: 'Keyword, Storage',
      scope: ['keyword.control', 'storage'],
      settings: {
        fontStyle: 'italic',
      },
    },

    {
      name: 'Control Flow',
      scope: ['keyword.control.export'],
      settings: {
        foreground: palette.export,
      },
    },

    {
      name: 'Dark Punctuation',
      scope: ['punctuation.definition.template-expression'],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: 'Tag',
      scope: ['entity.name.tag', 'meta.tag', 'markup.deleted.git_gutter'],
      settings: {
        foreground: palette.tag,
      },
    },
    {
      name: 'Component Tag',
      scope: ['support.class'],
      settings: {
        foreground: palette.componentTag,
      },
    },
    {
      name: 'Function, Special Method',
      scope: [
        'entity.name.function',
        'variable.function',
        'keyword.other.special-method',
        'meta.function-call.generic',
      ],
      settings: {
        foreground: palette.function,
      },
    },
    {
      name: 'Support Function',
      scope: ['support.function', 'meta.function-call entity.name.function'],
      settings: {
        foreground: palette.functionBuiltin,
      },
    },
    {
      name: 'C-related Block Level Variables',
      scope: ['source.cpp meta.block variable.other'],
      settings: {
        foreground: palette.tag,
      },
    },
    {
      name: 'Other Variable, String Link',
      scope: ['support.other.variable', 'string.other.link'],
      settings: {
        foreground: palette.tag,
      },
    },
    {
      name: 'Constant, Function Argument, Tag Attribute, Embedded',
      scope: [
        'variable.other.constant',
        'constant.language',
        'keyword.other.type.php',
        'storage.type.php',
        'support.constant',
        'constant.character',
        'constant.escape',
        'keyword.other.unit',
      ],
      settings: {
        foreground: palette.constant,
      },
    },
    {
      name: 'Number, Boolean',
      scope: [
        'constant.numeric',
        'constant.language.boolean',
        'constant.language.json',
        'constant.language.infinity',
        'constant.language.nan',
      ],
      settings: {
        foreground: palette.number,
      },
    },
    {
      name: 'Function Argument',
      scope: [
        'variable.parameter.function.language.special',
        'variable.parameter',
        'meta.function.parameter variable',
      ],
      settings: {
        foreground: palette.parameter,
      },
    },
    {
      name: 'String, Symbols, Inherited Class, Markup Heading',
      scope: [
        'string',
        'constant.other.symbol',
        'constant.other.key',
        'entity.other.inherited-class',
        'markup.heading',
        'markup.inserted.git_gutter',
        'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
        'meta.attribute-selector',
        'markup.inline.raw.code',
      ],
      settings: {
        foreground: palette.string,
      },
    },

    {
      name: 'Object',
      scope: ['variable.other.readwrite.js', 'variable.other.object'],
      settings: {
        foreground: palette.object,
      },
    },

    {
      name: 'Object Key',
      scope: [
        'meta.object-literal.key',
        'string.alias.graphql',
        'string.unquoted.graphql',
        'string.unquoted.alias.graphql',
        'meta.field.declaration.ts variable.object.property',
        'variable.object.property',
      ],
      settings: {
        foreground: palette.objectKey,
      },
    },
    {
      name: 'Nested Object Property',
      scope: ['meta.object.member', 'variable.other.object.property'],
      settings: {
        foreground: palette.property,
      },
    },
    {
      name: 'Object Property',
      scope: [
        'variable.other.property',
        'support.variable.property',
        'support.variable.property.dom',
      ],
      settings: {
        foreground: palette.property,
      },
    },
    {
      name: 'Haskell Constants',
      scope: ['source.haskell constant.other.haskell'],
      settings: {
        foreground: palette.constant,
      },
    },
    {
      name: 'Haskell Imports',
      scope: ['source.haskell meta.import.haskell entity.name.namespace'],
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: 'Types Fixes',
      scope: [
        'source.haskell storage.type',
        'source.c storage.type',
        'source.java storage.type',
      ],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: 'Lambda Arrow',
      scope: ['storage.type.function'],
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: 'Class, Support',
      scope: [
        'entity.name',
        'entity.name.type.class',
        'support.type',
        'support.other.namespace.use.php',
        'meta.use.php',
        'support.other.namespace.php',
        'markup.changed.git_gutter',
        'support.type.sys-types',
      ],
      settings: {
        foreground: palette.class,
      },
    },
    {
      name: 'Support',
      scope: ['entity.name.type'],
      settings: {
        foreground: palette.support,
      },
    },

    {
      name: 'JSDoc Param',
      scope: [
        'storage.type.class.jsdoc ',
        'punctuation.definition.block.tag.jsdoc',
      ],
      settings: {
        foreground: palette.storage,
      },
    },
    {
      name: 'Entity types',
      scope: ['support.type'],
      settings: {
        foreground: palette.number,
      },
    },
    {
      name: 'CSS Class and Support',
      scope: [
        'source.css support.type.property-name',
        'source.sass support.type.property-name',
        'source.scss support.type.property-name',
        'source.less support.type.property-name',
        'source.stylus support.type.property-name',
        'source.postcss support.type.property-name',
        'support.type.property-name.css',
        'support.type.vendored.property-name',
        'source.css entity.name.tag.custom',
      ],
      settings: {
        foreground: palette.cssProperty,
      },
    },

    {
      name: 'Sub-methods',
      scope: [
        'entity.name.module.js',
        'variable.import.parameter.js',
        'variable.other.class.js',
      ],
      settings: {
        foreground: palette.tag,
      },
    },
    {
      name: 'Language methods',
      scope: ['variable.language'],
      settings: {
        foreground: palette.tag,
        fontStyle: 'italic',
      },
    },
    {
      name: 'entity.name.method.js',
      scope: ['entity.name.method.js'],
      settings: {
        foreground: palette.function,
        fontStyle: 'italic',
      },
    },
    {
      name: 'meta.method.js',
      scope: [
        'meta.class-method.js entity.name.function.js',
        'variable.function.constructor',
      ],
      settings: {
        foreground: palette.function,
      },
    },
    {
      name: 'Attributes',
      scope: ['entity.other.attribute-name'],
      settings: {
        foreground: palette.attribute,
        fontStyle: 'italic',
      },
    },
    {
      name: 'HTML Attributes',
      scope: [
        'text.html.basic entity.other.attribute-name.html',
        'text.html.basic entity.other.attribute-name',
      ],
      settings: {
        foreground: palette.orange,
      },
    },
    {
      name: 'HTML Doctype',
      scope: [
        'meta.tag.metadata.doctype entity.name.tag',
        'meta.tag.metadata.doctype entity.other.attribute-name',
      ],
      settings: {
        foreground: palette.keyword,
        fontStyle: 'italic',
      },
    },

    {
      name: 'CSS Classes',
      scope: ['entity.other.attribute-name.class'],
      settings: {
        foreground: palette.cssClass,
      },
    },

    {
      name: 'Tailwind utility ',
      scope: ['source.css.tailwind support.constant.property-value'],
      settings: {
        foreground: palette.cssClass,
      },
    },

    {
      name: "CSS ID's",
      scope: ['source.sass keyword.control'],
      settings: {
        foreground: palette.function,
      },
    },
    {
      name: 'CSS psuedo selectors',
      scope: [
        'entity.other.attribute-name.pseudo-class',
        'entity.other.attribute-name.pseudo-element',
      ],
      settings: {
        foreground: palette.objectKey,
      },
    },
    {
      name: 'CSS Property value',
      scope: ['support.constant.property-value'],
      settings: {
        foreground: palette.parameter,
      },
    },
    {
      name: 'Inserted',
      scope: ['markup.inserted'],
      settings: {
        foreground: palette.string,
      },
    },
    {
      name: 'Deleted',
      scope: ['markup.deleted'],
      settings: {
        foreground: palette.tag,
      },
    },
    {
      name: 'Changed',
      scope: ['markup.changed'],
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: 'Regular Expressions',
      scope: ['string.regexp'],
      settings: {
        foreground: palette.string,
      },
    },
    {
      name: 'Regular Expressions - Punctuation',
      scope: ['punctuation.definition.group'],
      settings: {
        foreground: palette.tag,
      },
    },
    {
      name: 'Regular Expressions - Character Class',
      scope: [
        'constant.other.character-class.regexp',
        'keyword.control.anchor.regexp',
      ],
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: 'Regular Expressions - Character Class Set',
      scope: ['constant.other.character-class.set.regexp'],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: 'Regular Expressions - Quantifier',
      scope: ['keyword.operator.quantifier.regexp'],
      settings: {
        foreground: palette.constant,
      },
    },
    {
      name: 'Escape Characters',
      scope: ['constant.character.escape'],
      settings: {
        foreground: palette.cyan,
      },
    },
    {
      name: 'URL',
      scope: ['*url*', '*link*', '*uri*'],
      settings: {
        fontStyle: 'underline',
      },
    },
    {
      name: 'Decorators',
      scope: [
        'meta.decorator.js',
        'tag.decorator.js entity.name.tag.js',
        'tag.decorator.js punctuation.definition.tag.js',
      ],
      settings: {
        foreground: palette.function,
        fontStyle: 'italic',
      },
    },
    {
      name: 'CSS Units',
      scope: ['keyword.other.unit'],
      settings: {
        foreground: '#fc7b7b',
      },
    },
    {
      name: 'ES7 Bind Operator',
      scope: [
        'source.js constant.other.object.key.js string.unquoted.label.js',
      ],
      settings: {
        foreground: palette.tag,
      },
    },
    {
      name: 'JSON Key - Level 0',
      scope: [
        'source.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: palette.json1,
      },
    },
    {
      name: 'JSON Key - Level 1',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: palette.json2,
      },
    },
    {
      name: 'JSON Key - Level 2',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: palette.json3,
      },
    },
    {
      name: 'JSON Key - Level 3',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: palette.json4,
      },
    },
    {
      name: 'JSON Key - Level 4',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: palette.json5,
      },
    },
    {
      name: 'JSON Key - Level 5',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: palette.json6,
      },
    },
    {
      name: 'JSON Key - Level 6',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: palette.json7,
      },
    },
    {
      name: 'Plain Punctuation',
      scope: ['punctuation.definition.list_item.markdown'],
      settings: {
        foreground: palette.commentAlt,
      },
    },

    {
      name: 'Block Punctuation',
      scope: [
        'meta.block',
        'meta.brace',
        'meta.brace.round',
        'meta.objectliteral',
        'punctuation.definition.block',
        'meta.object-binding-pattern-variable',
        'punctuation.definition.parameters',
        'punctuation.section.function',
      ],
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: 'Markdown - Plain',
      scope: ['meta.jsx.children', 'meta.embedded.block'],
      settings: {
        foreground: palette.paleForeground,
      },
    },
    {
      name: 'Markdown - Markup Raw Inline',
      scope: ['text.html.markdown markup.inline.raw.markdown'],
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: 'Markdown - Markup Raw Inline Punctuation',
      scope: [
        'text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown',
      ],
      settings: {
        foreground: palette.cyan,
      },
    },
    {
      name: 'Markdown - Heading punctuation',
      scope: [
        'markdown.heading',
        'markup.heading | markup.heading entity.name',
        'markup.heading.markdown punctuation.definition.heading.markdown',
      ],
      settings: {
        foreground: palette.cyan,
      },
    },
    {
      name: 'Markup - Italic',
      scope: ['markup.italic'],
      settings: {
        fontStyle: 'italic',
        foreground: palette.tag,
      },
    },
    {
      name: 'Markup - Bold',
      scope: ['markup.bold', 'markup.bold string'],
      settings: {
        fontStyle: 'bold',
        foreground: palette.tag,
      },
    },
    {
      name: 'Markup - Bold-Italic',
      scope: [
        'markup.bold markup.italic',
        'markup.italic markup.bold',
        'markup.quote markup.bold',
        'markup.bold markup.italic string',
        'markup.italic markup.bold string',
        'markup.quote markup.bold string',
      ],
      settings: {
        fontStyle: 'bold',
        foreground: palette.tag,
      },
    },
    {
      name: 'Markup - Underline',
      scope: ['markup.underline'],
      settings: {
        fontStyle: 'underline',
        foreground: palette.number,
      },
    },
    {
      name: 'Markdown - Blockquote',
      scope: ['markup.quote punctuation.definition.blockquote.markdown'],
      settings: {
        foreground: palette.cyan,
      },
    },
    {
      name: 'Markup - Quote',
      scope: ['markup.quote'],
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'Markdown - Link',
      scope: ['string.other.link.title.markdown'],
      settings: {
        foreground: palette.function,
      },
    },
    {
      name: 'Markdown - Link Description',
      scope: ['string.other.link.description.title.markdown'],
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: 'Markdown - Link Anchor',
      scope: ['constant.other.reference.link.markdown'],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: 'Markup - Raw Block',
      scope: ['markup.raw.block'],
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: 'Markdown - Fenced Bode Block Variable',
      scope: [
        'markup.fenced_code.block.markdown',
        'markup.inline.raw.string.markdown',
      ],
      settings: {
        foreground: palette.cyan,
      },
    },
    {
      name: 'Markdown - Fenced Language',
      scope: ['variable.language.fenced.markdown'],
      settings: {
        foreground: palette.cyan,
      },
    },
    {
      name: 'Markdown - Separator',
      scope: ['meta.separator'],
      settings: {
        fontStyle: 'bold',
        foreground: palette.cyan,
      },
    },
    {
      name: 'Markup - Table',
      scope: ['markup.table'],
      settings: {
        foreground: palette.commentAlt,
      },
    },
    {
      scope: 'token.info-token',
      settings: {
        foreground: palette.functionBuiltin,
      },
    },
    {
      scope: 'token.warn-token',
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      scope: 'token.error-token',
      settings: {
        foreground: palette.tag,
      },
    },
    {
      scope: 'token.debug-token',
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: 'Go package name',
      scope: 'source.go entity.name.package',
      settings: {
        foreground: palette.foreground,
      },
    },

    {
      name: 'Go package imports',
      scope: 'source.go entity.name.import',
      settings: {
        foreground: palette.string,
      },
    },
    {
      name: 'Go constant placeholder',
      scope: ['source.go constant.other.placeholder'],
      settings: {
        foreground: palette.constant,
      },
    },
    {
      name: 'Go language constant',
      scope: ['source.go constant.language'],
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: 'Go types',
      scope: ['source.go storage.type'],
      settings: {
        foreground: palette.objectKey,
        fontStyle: 'italic',
      },
    },
    {
      name: 'Go variable declaration and assignment',
      scope: [
        'source.go variable.other.assignment',
        'source.go variable.other.declaration',
      ],
      settings: {
        foreground: palette.constant,
      },
    },
  ],
  type: 'dark',
}
