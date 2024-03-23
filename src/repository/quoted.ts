import { TMGrammarScope } from "vscode-grammar";

export const quoted: TMGrammarScope =
{ patterns:
    [ { name: "invalid.illegal.quoted.ribbon"
      , match: /\b(let|if|then|else|loop|while|until|do|break|continue|goto|defer|return|select|match|in|with|where|for|forall)\b/
      }
    , { name: "invalid.illegal.quoted.ribbon"
      , match: /\b(use|hiding)\b/
      }
    , { name: "invalid.illegal.quoted.ribbon"
      , match: /\b(unsafe)\b/
      }
    , { name: "invalid.illegal.quoted.ribbon"
      , match: /[ζϕλΛ∀∃ΠΣ]|(;;)/
      }
    , { name: "invalid.illegal.quoted.ribbon"
      , match: /\b(effect|handler|type|struct|union|value|kind|fun|class|instance|module|file|namespace|foreign)\b/
      }
    , { name: "invalid.illegal.quoted.ribbon"
      , match: /'((_|[^\p{C}\p{S}\p{P}\p{Z}])(((_|[^\p{C}\p{S}\p{P}\p{Z}])(['_]|[^\p{C}\p{S}\p{P}\p{Z}])*))?)(?!')/
      }
    , { name: "invalid.illegal.quoted.ribbon"
      , match: /\b(true|false|null|default|inf|nan|mixfix|infix|infixl|infixr|prefix|postfix|atom)\b/
      }
    , { name: "invalid.illegal.quoted.ribbon"
      , match: /\b([0-9][0-9_]*)([eE][\-+]?[0-9][0-9_]*)?\b/
      }
    , { name: "invalid.illegal.quoted.ribbon"
      , match: /\b0x[a-fA-F0-9][a-fA-F0-9_]+\b/
      }
    , { name: "invalid.illegal.quoted.ribbon"
      , match: /\b0b[0-1][0-1_]+\b/
      }
    , { name: "invalid.illegal.quoted.ribbon"
      , match: /'((\\')|(\\[^']+)|[^'])'/
      }
    , { name: "invalid.illegal.quoted.ribbon"
      , match: /"((\\")|(\\[^"]+)|[^"])*"/
      }
    , { name: "variable.quoted.ribbon"
      , match: /(\b|(?<=[ζϕλΛ∀∃ΠΣ]))((\p{Lu}(?<![ζϕλΛ∀∃ΠΣ]))(['_]|[^\p{C}\p{S}\p{P}\p{Z}])*)(?<![ζϕλΛ∀∃ΠΣ])/
      }
    , { name: "constant.language.quoted.ribbon"
      , match: /#((_|[^\p{C}\p{S}\p{P}\p{Z}])(['_]|[^\p{C}\p{S}\p{P}\p{Z}])*)/
      }
    , { name: "keyword.operator.quoted.ribbon"
      , match: /((\p{Symbol}|\p{Punctuation})(?<=[^_'"`ζϕλΛ∀∃ΠΣ$#␣]))+/
      }
    , { name: "keyword.operator.quoted.ribbon"
      , match: /[#$](?!(_|[^\p{C}\p{S}\p{P}\p{Z}]))/
      }
    , { name: "keyword.operator.quoted.ribbon"
      , match: /(^|\b)(is|as|not|and|or|new|mut|const|pub)($|\b)/
      }
    , { name: "constant.escape.quoted.ribbon"
      , match: /\$((_|[^\p{C}\p{S}\p{P}\p{Z}])(['_]|[^\p{C}\p{S}\p{P}\p{Z}])*)/
      }
    ]
};
