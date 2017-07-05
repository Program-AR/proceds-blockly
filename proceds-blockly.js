Blockly.Blocks.proced_pretty_def = {
  init: function () {
    this.jsonInit({
      "type": "proced_pretty_def",
      "message0": "Definición del procedimiento: %1 %2 %3 parámetros: %4 %5 %6 %7 %8 %9 %10 %11 %12",
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
          "type": "field_input",
          "name": "param1",
          "text": "x"
        },
        {
          "type": "field_input",
          "name": "param2",
          "text": "y"
        },
        {
          "type": "field_input",
          "name": "param3",
          "text": "z"
        },
        {
          "type": "field_input",
          "name": "param4",
          "text": "w"
        },
        {
          "type": "field_input",
          "name": "param5",
          "text": "w"
        },
        {
          "type": "field_input",
          "name": "param6",
          "text": "w"
        },
        {
          "type": "input_dummy",
          "align": "RIGHT"
        },
        {
          "type": "input_statement",
          "name": "code"
        },
        {
          "type": "field_image",
          "width": 15,
          "height": 15,
          "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
          "name": "add_parameter"
        },
      ],
      "colour": 290,
      "tooltip": "",
      "helpUrl": ""
    });

    var a = this.getField("add_parameter");
    debugger
  },
  customContextMenu: function(options) {
    options.unshift({ text: "Crear llamada", enabled: true, callback: function() {
      alert("AAA");
    }});
  }
};

Blockly.JavaScript['proced_pretty_def'] = function(block) {
  var text_procname = block.getFieldValue('procName');
  var value_param1 = Blockly.JavaScript.valueToCode(block, 'param1', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  // TODO: Assemble JavaScript into code variable.
  return `function ${text_procname}(${value_param1}){\n  ${statements_code}}\n\n`;
};
