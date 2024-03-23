import { TMGrammarScope } from "vscode-grammar";

export const standard: TMGrammarScope =
{ patterns:
    [ { name: "comment.line.ribbon"
      , match: /;;.*\n/
      }
    , { name: "comment.line.shebang.ribbon"
      , match: /\A(#!).*$\n?/
      , captures: { 1: { name: "comment.line.operator.ribbon" } }
      }
    , { name: "keyword.control.ribbon"
      , match: /\b(let|if|then|else|loop|while|until|do|break|continue|goto|defer|return|select|match|in|with|where|for|forall)\b/
      }
    , { name: "keyword.control.directive.ribbon"
      , match: /\b(use|hiding)\b/
      }
    , { name: "keyword.control.unsafe.ribbon"
      , match: /\b(unsafe)\b/
      }
    , { name: "storage.type.ribbon"
      , match: /[ζϕλΛ∀∃ΠΣ]/
      }
    , { name: "storage.type.ribbon"
      , match: /\b(effect|handler|type|alias|struct|union|value|kind|fun|class|instance|module|file|namespace|foreign)\b/
      }
    , { name: "variable.ribbon"
      , match: /(\b|(?<=[ζϕλΛ∀∃ΠΣ]))((\p{Lu}(?<![ζϕλΛ∀∃ΠΣ]))(['_]|[^\p{C}\p{S}\p{P}\p{Z}])*)(?<![ζϕλΛ∀∃ΠΣ])/
      }
    , { name: "variable.parameter.ribbon"
      , match: /'((_|[^\p{C}\p{S}\p{P}\p{Z}])(((_|[^\p{C}\p{S}\p{P}\p{Z}])(['_]|[^\p{C}\p{S}\p{P}\p{Z}])*))?)(?!')/
      }
    , { name: "constant.language.ribbon"
      , match: /#((_|[^\p{C}\p{S}\p{P}\p{Z}])(['_]|[^\p{C}\p{S}\p{P}\p{Z}])*)/
      }
    , { name: "constant.language.ribbon"
      , match: /\b(true|false|null|default|inf|nan|mixfix|infix|infixl|infixr|prefix|postfix|atom)\b/
      }
    , { name: "constant.numeric.decimal.ribbon"
      , match: /\b([0-9][0-9_]*)([eE][\-+]?[0-9][0-9_]*)?\b/
      }
    , { name: "constant.numeric.hexadecimal.ribbon"
      , match: /\b0x[a-fA-F0-9][a-fA-F0-9_]+\b/
      }
    , { name: "constant.numeric.binary.ribbon"
      , match: /\b0b[0-1][0-1_]+\b/
      }
    , { name: "keyword.operator.ribbon"
      , match: /((\p{Symbol}|\p{Punctuation})(?<=[^_'"`ζϕλΛ∀∃ΠΣ$#␣{}\[\]()]))+/
      }
    , { name: "keyword.operator.ribbon"
      , match: /[#$](?!(_|[^\p{C}\p{S}\p{P}\p{Z}]))/
      }
    , { name: "keyword.operator.ribbon"
      , match: /(^|\b)(is|as|not|and|or|new|mut|const|pub)($|\b)/
      }
    , { name: "constant.escape.ribbon"
      , match: /\$((_|[^\p{C}\p{S}\p{P}\p{Z}])(['_]|[^\p{C}\p{S}\p{P}\p{Z}])*)/
      }
    , { name: "constant.quote.ribbon"
      , match: /`(((\\`|[^\`]))+)`/
      , captures:
        { 1: { patterns: [ {include: "#quoted" } ] } }
      }
    , { name: "constant.character.ribbon"
      , match: /'((\\')|(\\[^']+)|[^'])'/
      , captures:
        { 1:
            { patterns:
                [ { name: "constant.character.escape.ribbon"
                  , match: /(\\[\\0'\"abefnrtv])|(\\u\{[a-fA-F0-9]{1,6}\})|(\\x[a-fA-F0-9]{2})/
                  }
                , { name: "invalid.illegal.escape.ribbon"
                  , match: /\\[^\\0'\"abefnrtv]/
                  }
                ]
            }
        }
      }
    , { name: "constant.string.ribbon"
      , match: /"((\\")|(\\[^"]+)|[^"])*"/
      , captures:
        { 1:
            { patterns:
                [ { name: "constant.string.escape.ribbon"
                  , match: /(\\[\\0'\"abefnrtv])|(\\u\{[a-fA-F0-9]{1,6}\})|(\\x[a-fA-F0-9]{2})/
                  }
                , { name: "invalid.illegal.escape.ribbon"
                  , match: /\\[^\\0'\"abefnrtv]/
                  }
                , { name: "constant.string.escape.ribbon"
                  , begin: /\$\{/
                  , end: /\}/
                  , patterns: [ {"include": "#standard"} ]
                  }
                ]
            }
        }
      }
    ]
};
