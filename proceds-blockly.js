Blockly.Blocks.proced_pretty_def = {
  init: function () {
    this.jsonInit({
      "type": "proced_pretty_def",
      "message0": "Definición del procedimiento: %1 %2 %3 parámetro 1 %4 %5",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "field_input",
          "name": "procName",
          "text": "Nombre del procedimiento"
        },
        {
          "type": "input_dummy",
          "align": "CENTRE"
        },
        {
          "type": "input_value",
          "name": "param1",
          "align": "RIGHT"
        },
        {
          "type": "input_statement",
          "name": "code"
        }
      ],
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    });
  }
}

Blockly.JavaScript['proced_pretty_def'] = function(block) {
  var text_procname = block.getFieldValue('procName');
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  // TODO: Assemble JavaScript into code variable.
  return `function ${text_procname}(${value_param1}){\n  ${statements_code}}\n\n`;
};
