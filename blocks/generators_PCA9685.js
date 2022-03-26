Blockly.JavaScript['PCA9685_Setup'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var text_addr = block.getFieldValue('addr');
    var option_wire = block.getFieldValue('wire');
    var code = `
  #EXTINC#include "Adafruit_PWMServoDriver.h"#END
  #VARIABLE Adafruit_PWMServoDriver ${variable_instance} = Adafruit_PWMServoDriver(${text_addr},${option_wire});#END
  ${variable_instance}.begin(); \n${variable_instance}.setPWMFreq(50);\n
  `;
    return code;
  };
    Blockly.JavaScript['PCA9685_setPWMFreq'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var text_Freq = block.getFieldValue('Freq');
    var code = `${variable_instance}.setPWMFreq(${text_Freq});`;
    return code;
  };
    Blockly.JavaScript['PCA9685_setServo'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var value_ch = Blockly.JavaScript.valueToCode(block, 'ch', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_degree = Blockly.JavaScript.valueToCode(block, 'degree', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var code = `${variable_instance}.setServo(${value_ch},${value_degree});`;
    return code;
  };
    Blockly.JavaScript['PCA9685_setServo_bystep'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var value_ch = Blockly.JavaScript.valueToCode(block, 'ch', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_from_degree = Blockly.JavaScript.valueToCode(block, 'from_degree', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_traget_degree = Blockly.JavaScript.valueToCode(block, 'traget_degree', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    
    var code = `${variable_instance}.setServoByStep(${value_ch},${value_from_degree},${value_traget_degree},${value_time});`;
    return code;
  };