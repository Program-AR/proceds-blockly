# proceds-blockly

This library installs new custom procedures for blockly, with custom modifications:
- The procedure blocks have their new context menu options at the top, including two options: "add parameter" and "remove parameter" (replacing the mutator window). The 'help' option was removed.
- The block `procedures_defnoreturn` has been splitted in `procedures_defnoreturn` and `procedures_defnoreturnnoparams`.
- The block `procedures_defreturn` has been splitted in `procedures_defreturn`, `procedures_defreturnnoparams` and `procedures_defreturnsimple`.
- The blocks can be added on every category you want. If you want to create a category for the calls, use the custom names `PROCEDURE_CALLS` and `FUNCTION_CALLS`.
- Procedure descriptions are disabled by default.

```xml
<xml id="toolbox" style="display: none">
  <category name="Procedures">
    <block type="procedures_defnoreturn"></block>
    <block type="procedures_defnoreturnnoparams"></block>
  </category>
  <category name="Functions">
    <block type="procedures_defreturn"></block>
  </category>
  <category name="Commands">
    <category name="Procedure invocations" custom="PROCEDURE_CALLS">
    </category>
  </category>
  <category name="Expressions">
    <category name="Function invocations" custom="FUNCTION_CALLS">
    </category>
  </category>
  <category name="Other blocks">
    <block type="controls_if"></block>
    <block type="logic_compare"></block>
    <block type="controls_repeat_ext"></block>
    <block type="math_number"></block>
    <block type="math_arithmetic"></block>
    <block type="text"></block>
    <block type="text_print"></block>
  </category>
  </xml>
```
See the [demo](program-ar.github.io/proceds-blockly)!
