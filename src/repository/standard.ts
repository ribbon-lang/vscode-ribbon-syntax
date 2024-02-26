import { TMGrammarScope } from "vscode-grammar";

export const standard: TMGrammarScope = {
    patterns: [
        {
            name: "comment.line.ribbon",
            match: /;;.*\n/,
        },
        {
            name: "keyword.control.ribbon",
            match: /\b(let|if|then|else|loop|while|until|do|break|continue|goto|defer|return|select|match|in|with|where|for|forall)\b/,
        },
        {
            name: "keyword.control.directive.ribbon",
            match: /\b(use)\b/,
        },
        {
            name: "keyword.control.unsafe.ribbon",
            match: /\b(unsafe)\b/,
        },
        {
            name: "storage.type.ribbon",
            match: /[ζϕλ∀∃ΠΣ]/,
        },
        {
            name: "storage.type.ribbon",
            match: /\b(effect|handler|type|struct|union|value|kind|fun|class|instance|module|file|namespace|foreign)\b/,
        },
        {
            name: "variable.ribbon",
            match: /(\b|(?<=[ζϕλ∀∃ΠΣ]))((\p{Lu}(?<![ζϕλ∀∃ΠΣ]))(['_]|[^\p{C}\p{S}\p{P}\p{Z}])*)(?<![ζϕλ∀∃ΠΣ])/,
        },
        {
            name: "variable.parameter.ribbon",
            match: /'((_|[^\p{C}\p{S}\p{P}\p{Z}])(((_|[^\p{C}\p{S}\p{P}\p{Z}])(['_]|[^\p{C}\p{S}\p{P}\p{Z}])*))?)(?!')/,
        },
        {
            name: "constant.language.ribbon",
            match: /#((_|[^\p{C}\p{S}\p{P}\p{Z}])(['_]|[^\p{C}\p{S}\p{P}\p{Z}])*)/,
        },
        {
            name: "constant.language.ribbon",
            match: /\b(true|false|null|default|inf|nan|mixfix|infix|infixl|infixr|prefix|postfix|atom)\b/,
        },
        {
            name: "constant.numeric.decimal.ribbon",
            match: /\b([0-9][0-9_]*)([eE][\-+]?[0-9][0-9_]*)?\b/,
        },
        {
            name: "constant.numeric.hexadecimal.ribbon",
            match: /\b0x[a-fA-F0-9][a-fA-F0-9_]+\b/,
        },
        {
            name: "constant.numeric.binary.ribbon",
            match: /\b0b[0-1][0-1_]+\b/,
        },
        {
            name: "keyword.operator.ribbon",
            match: /((\p{Symbol}|\p{Punctuation})(?<=[^_'"`ζϕλ∀∃ΠΣ$#␣{}\[\]()]))+/,
        },
        {
            name: "keyword.operator.ribbon",
            match: /[#$](?!(_|[^\p{C}\p{S}\p{P}\p{Z}]))/,
        },
        {
            name: "keyword.operator.ribbon",
            match: /(^|\b)(is|as|not|and|or|new|mut|const|pub)($|\b)/,
        },
        {
            name: "constant.escape.ribbon",
            match: /\$((_|[^\p{C}\p{S}\p{P}\p{Z}])(['_]|[^\p{C}\p{S}\p{P}\p{Z}])*)/,
        },
        {
            name: "constant.quote.ribbon",
            match: /`(((\\`|[^\`]))+)`/,
            captures: {
                1: { patterns: [ {include: "#quoted" } ] }
            },
        },
        {
            name: "constant.character.ribbon",
            match: /'((\\')|(\\[^']+)|[^'])'/,
            captures: {
                1: { patterns:
                    [ { name: "constant.character.escape.ribbon"
                      , match: /(\\[\\0'\"abefnrtv])|(\\u\{[a-fA-F0-9]{1,6}\})|(\\x[a-fA-F0-9]{2})/
                      }
                    , { name: "invalid.illegal.escape.ribbon"
                      , match: /\\[^\\0'\"abefnrtv]/
                      }
                    ]
                },
            },
        },
        {
            name: "constant.string.ribbon",
            match: /"((\\")|(\\[^"]+)|[^"])*"/,
            captures: {
                1: { patterns:
                    [ { name: "constant.string.escape.ribbon"
                      , match: /(\\[\\0'\"abefnrtv])|(\\u\{[a-fA-F0-9]{1,6}\})|(\\x[a-fA-F0-9]{2})/
                      }
                    , { name: "invalid.illegal.escape.ribbon"
                      , match: /\\[^\\0'\"abefnrtv]/
                      }
                    , { name: "constant.string.escape.ribbon"
                      , begin: /\$\{/
                      , end: /\}/
                      , patterns:
                          [ {"include": "#standard"} ]
                      }
                    ]
                },
            },
        },
    ],
};
