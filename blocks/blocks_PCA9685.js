Blockly.Blocks['PCA9685_Setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("PCA9685_1",null,["Plugin.PCA9685esp"],["Plugin.PCA9685esp"]), "instance")
        .appendField("Set :")
        .appendField(new Blockly.FieldDropdown([["I2C0","Wire"], ["I2C1","Wire1"]]), "wire")
        .appendField("address:")
        .appendField(new Blockly.FieldTextInput("0x40"), "addr");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#3f93e8");
 this.setTooltip("setup pin and address PCA9685");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['PCA9685_setPWMFreq'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("PCA9685_1",null,["Plugin.PCA9685esp"],["Plugin.PCA9685esp"]), "instance")
        .appendField("Set_Frequency")
        .appendField(new Blockly.FieldTextInput("50"), "Freq");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#3f93e8");
 this.setTooltip("PCA9685_setPWMFreq");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['PCA9685_setServo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("PCA9685_1",null,["Plugin.PCA9685esp"],["Plugin.PCA9685esp"]), "instance");
    this.appendValueInput("ch")
      .setCheck("Number")
      .appendField("Servo CH:");
      this.appendValueInput("degree")
      .setCheck("Number")
      .appendField("degree:");
    this.appendDummyInput()
      .appendField("(0-180)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#3f93e8");
 this.setTooltip("PCA9685_setPWMFreq");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['PCA9685_setServo_bystep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("PCA9685_1",null,["Plugin.PCA9685esp"],["Plugin.PCA9685esp"]), "instance");
    this.appendValueInput("ch")
      .setCheck("Number")
      .appendField("Servo CH:");
    this.appendValueInput("from_degree")
      .setCheck("Number")
      .appendField("set degree:");
    this.appendValueInput("traget_degree")
      .setCheck("Number")
      .appendField("to:");
    this.appendDummyInput()
      .appendField("(0-180)");
    this.appendValueInput("time")
      .setCheck("Number")
      .appendField("time:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#3f93e8");
 this.setTooltip("PCA9685_setPWMFreq");
 this.setHelpUrl("");
  }
};
