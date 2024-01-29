math = namespace
    Add = class Y, X =>
        Z : type
        add : X, Y → Z

    m'add = macro @50 x <`+` y. `(($).Add _ _).add` x y
    r'add = rule @50 x `+` y. ($).Add.add x y

using math.{ r'add }

with math.Add instance Integer, Integer =>
    add = foreign core.math.integer.add
do x = 1 + 1

Foo = effect
    test : a -> Bar

with Foo handler
    test = fun a => .Boo = a
do baz "xyz \u{2345}"
