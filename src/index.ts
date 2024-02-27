import { TMGrammar } from "vscode-grammar";

import { standard, quoted } from "./repository/index.js";

const grammar: TMGrammar =
{ $schema: "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json"
, name: "Ribbon"
, patterns: [ { include: "#standard" } ]
, repository: { standard, quoted }
, scopeName: "source.ribbon"
};

export default grammar;
