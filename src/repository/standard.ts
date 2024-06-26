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
      , match: /\b(let|if|then|else|loop|while|until|do|break|continue|defer|return|match|in|with|where|for)\b/
      }
    , { name: "keyword.control.directive.ribbon"
      , match: /\b(use|hiding)\b/
      }
    , { name: "keyword.control.unsafe.ribbon"
      , match: /\b(unsafe)\b/
      }
    , { name: "storage.type.ribbon"
      , match: /\b(effect(s?)|handler|type|struct|union|data|constraint|value|kind|fun|class|instance|module|file|namespace|foreign)\b/
      }
    , { name: "variable.ribbon"
      , match: /\b((\p{Lu})(['_]|[^\p{C}\p{S}\p{P}\p{Z}])*)/
      }
    , { name: "variable.parameter.ribbon"
      , match: /'(?!is|as|of|has|not|and|or|new|mut|const|pub|let|if|then|else|loop|while|until|do|break|continue|defer|return|match|in|with|where|for|use|hiding|unsafe|effect|handler|type|struct|union|value|kind|fun|class|instance|module|file|namespace|foreign|true|false|null|default|inf|nan)(_|[^\p{C}\p{S}\p{P}\p{Z}])(?!')(['_]|[^\p{C}\p{S}\p{P}\p{Z}])*/
      }
    , { name: "constant.language.ribbon"
      , match: /#((_|[^\p{C}\p{S}\p{P}\p{Z}])(['_]|[^\p{C}\p{S}\p{P}\p{Z}])*)/
      }
    , { name: "constant.language.ribbon"
      , match: /\b(true|false|null|default|inf|nan)\b/
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
      , match: /((\p{Symbol}|\p{Punctuation})(?<=[^_'"`$#{}\[\]()]))+/
      }
    , { name: "keyword.operator.ribbon"
      , match: /[#$](?!(_|[^\p{C}\p{S}\p{P}\p{Z}]))/
      }
    , { name: "keyword.operator.ribbon"
      , match: /(^|\b)(is|as|of|has|not|and|or|new|mut|const|pub)($|\b)/
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
