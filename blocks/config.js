module.exports = [
	{
		name : "PCA9685",
		blocks : [
		  'PCA9685_Setup',
          'PCA9685_setPWMFreq',
          //'PCA9685_setServo',
          {
          xml : 
                    `<block type="PCA9685_setServo">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="degree">
                            <shadow type="math_number">
                                <field name="NUM">90</field>
                            </shadow>
                        </value>
                    </block>`
          },
          {
          xml : 
                    `<block type="PCA9685_setServo_bystep">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                        <value name="from_degree">
                            <shadow type="math_number">
                                <field name="NUM">90</field>
                            </shadow>
                        </value>
                        <value name="traget_degree">
                            <shadow type="math_number">
                                <field name="NUM">100</field>
                            </shadow>
                        </value>
                        <value name="time">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                    </block>`
          }
			
		]
	}	
];