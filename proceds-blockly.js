window.ProcedsBlockly = {
  PLUS : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAQAAAD2e2DtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAHdElNRQfhDAUCCjFLV0NqAAAC60lEQVR42u3dQW7aQABA0Wl7MMjJICeDnIwuqm4qVQrYjMH/Pa/jsfFnTJDwjAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBUP7Y+gClOY4zznX9zHmN8bn3gLHcYtwXbYevDZ5nLost/G7dx2foUeNzyyy+BN7Zs8ncjeHvrvP/NAW9qvff/rueAn1sfwNMcX3hvL2S/3wPcVt7fTl+p/c4AfIsA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHECSBOAHECiBNAnADiBBAngDgBxAkgTgBxAogTQJwA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHECSBOAHECiBNAnADiBBAngDgBxAkgTgBxAogTQJwA4mYHcBinVRdz+v+2tjlHfdrv8lRjHFZcyG3P22VmBPOWQrrsd+WtJ7iOjzkDzQrA5b/XpATmBHAY1ynj7MtxfD1/kDkBrP+RrGHC1ZnxX8Bpwhj7NOGV8z1A3IxbgBvA455+fcwAcQKIE0CcAOIEECeAOAHECSBOAHECiBNAnADiBBAngDgBxAkgTgBxAogTQJwA4gQQJ4A4AcT9mjLKcevTfFPn5/860AwQ58ehr2wnPw51C3jMccYgcwL48nyAu11nPB3AI2Je1bRHxMz7EPgxjuaBb7mO46zLP3MG+OMwjuM8ecx3cp419f81O4B51v7PY6evlO8B4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHECSBOAHECiBNAnADiBBAngDgBxAkgTgBxAogTQJwA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHECSBOAHECiBNAnADiBBAngDgBxAkgTgBxAogTQJwA4gQQN2fp2G0cV9zXhEVct7HfGeD6wntjisu4rbRdtj4VHnFYLYDD1qfCY9aZA7z/39jyBFz+N7fsRrD7yX+n62H+4zTG3QvWnscYn1sfOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALvzG8Ijm7EmMQYoAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTEyLTA1VDAyOjEwOjQ5LTA1OjAwJa2zowAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0xMi0wNVQwMjoxMDo0OS0wNTowMFTwCx8AAAAASUVORK5CYII=",
  MINUS : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAQAAAD2e2DtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAHdElNRQfhDAUCCi+xWH4JAAABcUlEQVR42u3c7ZGCMBSG0etuYcTKls7AyrSEVWd4+bjnUECMeSbhD6kCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBzu4XHm2rUvPekD2yutR57/4itTLXU0/Pvs9SUW5TcDrDUyE3r9Na6ZwZKBWD5PxVKIBPAVGtknGsZibeBTADPyCjXE1idn8A0/gJjXFPgn0sEwIEljgAHwPc2Xx87QHMCaE4AzQmgOQE0J4DmBNCcAJoTQHMCaE4AzQmgOQE0J4DmBNCcAJoTQHMCaE4AzQmgOQE0J4DmBNDcb2SUsfc0T2re/utAO0BzPg49sot8HOoI+M5IDJIJ4OF+gI+F7gpyRcwxxa6Iyb0E3mvYB96y1kgtv2vijubS18QBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAWXq7xrTQhKAi3AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTEyLTA1VDAyOjEwOjQ3LTA1OjAwdZLI/gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0xMi0wNVQwMjoxMDo0Ny0wNTowMATPcEIAAAAASUVORK5CYII=",
  HAND : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiBAUBKBeKSgeBAAABTElEQVQoz22QzyvDcRjHX5/vvrMyStI2uZgftdVCSpJCyW1y00oUF+Xg4OIkx5VyUyJOsgv/gnJw4YCSSFMyB5pGbLJ99/k8LltreB2f9+v50eOigoc5FvGTJF8pugCwaKaNaE98uf9zMBXwjtNpbvmuaH2B0+HXuuyMEbOlQ4U1M5ZVcYbowg02YfZW5cnE9JIROdI7jsiOacoMPLZdEYPR1ouQkxCRG+feESlIXkQOzLR+NhvCpc3UbPcHAoRsADcAQ0Twq0ZosQgEVY0SqvGpkAUCxkIUYRP4bZRRNi9pvaD+TwXyFseHuYzy/Kt8CWfQ5Ems6C/5y7uZyDEH0Nt8vq0dUx0XzaapPyIIoIi23+47+SrlTvrTjLhKy2wmO95OqiacS+QBH9gAFDlOZnYbrimWOixSZCwUlK+vZd7bXiPldyi0yqX1OtkfCBS/9XAtDKAAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDQtMDVUMDQ6NDQ6NDItMDM6MDD+uUN1AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA0LTA1VDA0OjQwOjIzLTAzOjAw5hdZgAAAAABJRU5ErkJggg==",
 
  setDefaultLocale: function(){
    Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT = 'Describe el procedimiento...';
    Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = "Hacer algo";
    Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = "Definir";
    Blockly.Msg.PROCEDURES_DEFNORETURN_NOPARAMS = "";
    Blockly.Msg.PROCEDURES_DEFRETURN_NOPARAMS = "";
    Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT = 'Describe la función...';
    Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = "devolver algo";
    Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = "Definir";
    Blockly.Msg.PROCEDURES_BEFORE_PARAMS = "con";
    Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP = "Crea un procedimiento.";
    Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP = "Crea una función.";
    Blockly.Msg.PROCEDURES_ADD_PARAMETER = "Agregar parámetro";
    Blockly.Msg.PROCEDURES_ADD_PARAMETER_PROMPT = "Ingresa el nombre del parámetro";
    Blockly.Msg.PROCEDURES_REMOVE_PARAMETER = "Quitar parámetro";
    Blockly.Msg.PROCEDURES_PARAMETER = "parámetro";
  }, 

  init: function(customStatementType, initialize = () => {}) {
    // -------------------------------------
    // [!] Fixing FieldImage's click handler
    // -------------------------------------
  
    Blockly.FieldImage.prototype.init = function() {
      if (this.fieldGroup_) {
        // Image has already been initialized once.
        return;
      }
      // Build the DOM.
      /** @type {SVGElement} */
      this.fieldGroup_ = Blockly.utils.createSvgElement('g', {}, null);
      if (!this.visible_) {
        this.fieldGroup_.style.display = 'none';
      }
      /** @type {SVGElement} */
      this.imageElement_ = Blockly.utils.createSvgElement(
        'image',
        {
          'height': this.height_ + 'px',
          'width': this.width_ + 'px'
        },
        this.fieldGroup_);
      this.setValue(this.src_);
      this.sourceBlock_.getSvgRoot().appendChild(this.fieldGroup_);
  
      // Configure the field to be transparent with respect to tooltips.
      this.setTooltip(this.sourceBlock_);
      Blockly.Tooltip.bindMouseEvents(this.imageElement_);
  
      var self = this;
  
      if (this.clickHandler_) { // [!]
        this.imageElement_.addEventListener("mousedown", function(event) {
          event.stopPropagation();
          event.preventDefault();
  
          if (event.button === 0) {
            self.clickHandler_();
          }
        });
        this.mouseDownWrapper_ =
          Blockly.bindEventWithChecks_(
              this.fieldGroup_, 'mousedown', this, this.clickHandler_);
      }
    };
  
    // [!] Modifying callbackFactory to return the created block
    Blockly.ContextMenu.callbackFactory = function(block, xml) {
      return function() {
        Blockly.Events.disable();
        try {
          var newBlock = Blockly.Xml.domToBlock(xml, block.workspace);
          // Move the new block next to the old block.
          var xy = block.getRelativeToSurfaceXY();
          if (block.RTL) {
            xy.x -= Blockly.SNAP_RADIUS;
          } else {
            xy.x += Blockly.SNAP_RADIUS;
          }
          xy.y += Blockly.SNAP_RADIUS * 2;
          newBlock.moveBy(xy.x, xy.y);
        } finally {
          Blockly.Events.enable();
        }
        if (Blockly.Events.isEnabled() && !newBlock.isShadow()) {
          Blockly.Events.fire(new Blockly.Events.BlockCreate(newBlock));
        }
        newBlock.select();
  
        return newBlock; // [!]
      };
    };
  
    // --------------------------------------
    // [!] Adding custom procedure parameters
    // --------------------------------------
  
    var createParameterCaller = function(procedureBlock, name) {
      var xmlField = goog.dom.createDom('field', null, name);
      xmlField.setAttribute('name', 'VAR');
      var xmlBlock = goog.dom.createDom('block', null, xmlField);
      xmlBlock.setAttribute('type', 'variables_get');
  
      var callback = Blockly.ContextMenu.callbackFactory(procedureBlock, xmlBlock);
  
      return function() {
        var block = callback();
        block.$parent = procedureBlock.id;
  
        try {
          Blockly.Events.disabled_ = 1;
          const posParent = procedureBlock.getRelativeToSurfaceXY();
          const pos = block.getRelativeToSurfaceXY();
          let width = procedureBlock.width;
          const returnBlock = procedureBlock.inputList.find((it) => it.name === "RETURN");
          if (returnBlock) width -= returnBlock.renderWidth - 8;
  
          block.moveBy(posParent.x - pos.x + width + 16, posParent.y - pos.y + 6);
        } finally {
          Blockly.Events.disabled_ = 0;
        }
      };
    };
  
    var getAvailableName = function(self, name) {
      var result = name;
      while (self.arguments_.some(it => it === result))
        result += "_";
      return result;
    }
  
    var addParameter = function(self, index, name) {
      var i = index === undefined ? self.arguments_.length : index;
      var tmpName = name === undefined ? Blockly.Msg.PROCEDURES_PARAMETER + " " + (i + 1) : name;
      var name = index === undefined ? getAvailableName(self, tmpName) : tmpName;
      var id = "INPUTARG" + i;
  
      if (index === undefined) {
        self.arguments_.push(name);
        self.updateParams_();
  
        var blocks = self.workspace.getAllBlocks();
        for (block of blocks)
          if (block.type === self.callType_ && block.getProcedureCall() === self.getProcedureDef()[0]) {
            block.arguments_.push(name);
            block.updateShape_();
          }
      }
  
      var createCallButton = new Blockly.FieldImage(
        ProcedsBlockly.HAND,
        16,
        16,
        Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name),
        function() {
          createParameterCaller(self, self.arguments_[i])();
        }
      );
  
      var removeParameterButton = new Blockly.FieldImage(
        ProcedsBlockly.MINUS,
        16,
        16,
        Blockly.Msg.PROCEDURES_REMOVE_PARAMETER,
        function() {
          for (var j = 0; j < self.arguments_.length; j++)
            self.removeInput("INPUTARG" + j);
          self.arguments_.splice(i, 1);
          self.arguments_.forEach(function(name, i) {
            addParameter(this, i, name, true);
          }.bind(self));
  
          var blocks = self.workspace.getAllBlocks();
          for (block of blocks)
            if (block.type === self.callType_ && block.getProcedureCall() === self.getProcedureDef()[0]) {
              block.arguments_.splice(i, 1);
              block.updateShape_();
            }
        }
      );
  
      var nameField = new Blockly.FieldTextInput(name, function(newName) {
        var oldName = self.arguments_[i];
  
        if (oldName !== newName)
          newName = getAvailableName(self, newName);
  
        self.arguments_[i] = newName;
  
        var blocks = self.workspace.getAllBlocks();
        for (block of blocks) {
          if (block.type === self.callType_ && block.getProcedureCall() === self.getProcedureDef()[0]) {
            block.arguments_ = block.arguments_.map(function(it) {
              return it === oldName ? newName : it;
            });
            block.updateShape_();
          }
  
          if (block.type === "variables_get" && block.$parent === self.id) {
            var varField = block.getField("VAR");
            if (varField.getValue() === oldName) {
              varField.setValue(newName);
            }
          }
        }
  
        return newName;
      });
  
      self
        .appendDummyInput(id)
        .appendField(Blockly.Msg.PROCEDURES_BEFORE_PARAMS)
        .appendField(nameField, 'ARG' + i)
        .appendField(createCallButton)
        .appendField(removeParameterButton);
  
      self.moveInputBefore(id, 'STACK');
    };
  
    var makeProcedureDomToMutation = function() {
      return function(xmlElement) {
        this.arguments_ = [];
        for (var i = 0, childNode; childNode = xmlElement.childNodes[i]; i++) {
          if (childNode.nodeName.toLowerCase() == 'arg') {
            this.arguments_.push(childNode.getAttribute('name'));
          }
        }
        this.updateParams_();
        Blockly.Procedures.mutateCallers(this);
  
        // Show or hide the statement input.
        this.setStatements_(xmlElement.getAttribute('statements') !== 'false');
  
        this.arguments_.forEach(function(name, i) { // [!]
          addParameter(this, i, name);
        }.bind(this));
      };
    }
  
    var makeProcedureInit = function(
      withReturn,
      withStatements = true,
      withParameters = false,
      defaultName,
      title,
      comment,
      tooltip,
      helpUrl,
      returnMsg = Blockly.Msg.PROCEDURES_DEFRETURN_RETURN
    ) {
      return function() {
        var defaultLegalName = Blockly.Procedures.findLegalName(defaultName, this);
        var nameField = new Blockly.FieldTextInput(defaultLegalName, Blockly.Procedures.rename);
        nameField.setSpellcheck(false);
  
        var self = this;
  
        // [!]
        var addParameterButton = new Blockly.FieldImage(
          ProcedsBlockly.PLUS,
          16,
          16,
          Blockly.Msg.PROCEDURES_ADD_PARAMETER,
          function() { addParameter(self); }
        );
  
        var input = this.appendDummyInput()
            .appendField(title)
            .appendField(nameField, 'NAME')
            .appendField('', 'PARAMS');
  
        if (withParameters)
          input.appendField(addParameterButton);
  
        if (withReturn)
          this.appendValueInput('RETURN')
              .setAlign(Blockly.ALIGN_RIGHT)
              .appendField(returnMsg);
  
        // if (withParametersMutator)
        //   this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
  
        if ((this.workspace.options.comments ||
             (this.workspace.options.parentWorkspace &&
              this.workspace.options.parentWorkspace.options.comments)) &&
            comment) {
          this.setCommentText(comment);
        }
        this.setCommentText(null);
        this.setColour((
          Blockly.CUSTOM_COLORS && (
            Blockly.CUSTOM_COLORS[this.type] ||
            Blockly.CUSTOM_COLORS[withReturn ? "function" : "procedure"]
          )) || Blockly.Blocks.procedures.HUE);
        this.setTooltip(tooltip);
        this.setHelpUrl(helpUrl);
        this.arguments_ = [];
        this.setStatements_(withStatements);
        this.statementConnection_ = null;
  
        // if (!withParametersMutator) this.updateParams_();
  
        // [!] adding create call button
        var createCallButton = new Blockly.FieldImage(
          ProcedsBlockly.HAND,
          16,
          16,
          "",
          function() {
            var name = self.getFieldValue('NAME');
            var xmlMutation = goog.dom.createDom('mutation');
            xmlMutation.setAttribute('name', name);
            for (var i = 0; i < self.arguments_.length; i++) {
              var xmlArg = goog.dom.createDom('arg');
              xmlArg.setAttribute('name', self.arguments_[i]);
              xmlMutation.appendChild(xmlArg);
            }
            var xmlBlock = goog.dom.createDom('block', null, xmlMutation);
            xmlBlock.setAttribute('type', self.callType_);
  
            const block = Blockly.ContextMenu.callbackFactory(self, xmlBlock)();
  
            try {
              const procedureBlock = self;
  
              Blockly.Events.disabled_ = 1;
              const posParent = procedureBlock.getRelativeToSurfaceXY();
              const pos = block.getRelativeToSurfaceXY();
              let width = procedureBlock.width;
              const returnBlock = procedureBlock.inputList.find((it) => it.name === "RETURN");
              if (returnBlock) width -= returnBlock.renderWidth - 8;
  
              block.moveBy(posParent.x - pos.x + width + 16, posParent.y - pos.y + 6);
            } finally {
              Blockly.Events.disabled_ = 0;
            }
          }
        );
        input.appendField(createCallButton);
      };
    };
  
    // -----------------------
    // [!] Custom context menu
    // -----------------------
  
    var makeProcedureCustomMenu = function(withParametersOptions = true) {
      return function(options) {
        // Add options to create getters for each parameter.
        if (!this.isCollapsed()) {
          for (var i = this.arguments_.length - 1; i >= 0; i--) {
            var option = {enabled: true};
            var name = this.arguments_[i];
            option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name);
            option.callback = createParameterCaller(this, name);
  
            options.unshift(option);
          }
        }
  
        // [!]
        // if (withParametersOptions) {
        //   options.unshift({
        //     enabled: this.arguments_.length > 0,
        //     text: Blockly.Msg.PROCEDURES_REMOVE_PARAMETER,
        //     callback: function() {
        //       this.arguments_.pop();
        //       this.updateParams_();
        //     }.bind(this)
        //   });
  
        //   options.unshift({
        //     enabled: true,
        //     text: Blockly.Msg.PROCEDURES_ADD_PARAMETER,
        //     callback: function() {
        //       var name = "";
        //       while (name === "") // Rompe encapsulamiento
        //         name = Blockly.Blocks['procedures_mutatorarg'].validator_(prompt(Blockly.Msg.PROCEDURES_ADD_PARAMETER_PROMPT));
        //       if (name === null) return;
  
        //       this.arguments_.push(name);
        //       this.updateParams_();
        //     }.bind(this)
        //   });
        // }
  
        // Add option to create caller.
        var option = {enabled: true};
        var name = this.getFieldValue('NAME');
        option.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace('%1', name);
        var xmlMutation = goog.dom.createDom('mutation');
        xmlMutation.setAttribute('name', name);
        for (var i = 0; i < this.arguments_.length; i++) {
          var xmlArg = goog.dom.createDom('arg');
          xmlArg.setAttribute('name', this.arguments_[i]);
          xmlMutation.appendChild(xmlArg);
        }
        var xmlBlock = goog.dom.createDom('block', null, xmlMutation);
        xmlBlock.setAttribute('type', this.callType_);
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.unshift(option); // [!]
  
        options.pop(); // [!] Remove help
      };
    };
  
    // ---------------------------------------------------------------------
    // [!] Setting custom statement type to procedure calls and adding color
    // ---------------------------------------------------------------------
  
    var oldProceduresCallNoReturnInit = Blockly.Blocks['procedures_callnoreturn'].init;
    Blockly.Blocks['procedures_callnoreturn'].init = function() {
      oldProceduresCallNoReturnInit.call(this);
  
      if (customStatementType) {
        this.jsonInit({
          type: customStatementType,
          previousStatement: customStatementType,
          nextStatement: customStatementType
        });
      }
  
      this.setColour((
        Blockly.CUSTOM_COLORS && (
          Blockly.CUSTOM_COLORS[this.type] ||
          Blockly.CUSTOM_COLORS.procedure_call
        )) || Blockly.Blocks.procedures.HUE);
    };
  
    // ----------------------------------
    // [!] Adding color to function calls
    // ----------------------------------
  
    var oldProceduresCallReturnInit = Blockly.Blocks['procedures_callreturn'].init;
    Blockly.Blocks['procedures_callreturn'].init = function() {
      oldProceduresCallReturnInit.call(this);
  
      this.setColour((
        Blockly.CUSTOM_COLORS && (
          Blockly.CUSTOM_COLORS[this.type] || // TODO: Usar this.type en todos los cosos de colors
          Blockly.CUSTOM_COLORS.function_call
        )) || Blockly.Blocks.procedures.HUE);
    };
  
    // -------------------------------
    // [!] Patching default procedures
    // -------------------------------
  
    var makeUpdateParams = function() { return function() { }; };
  
    Blockly.Blocks['procedures_defnoreturn'].init = makeProcedureInit(
      false, true, true,
      Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE,
      Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE,
      Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT,
      Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP,
      Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL
    );
    Blockly.Blocks['procedures_defnoreturn'].customContextMenu = makeProcedureCustomMenu();
    Blockly.Blocks['procedures_defnoreturn'].updateParams_ = makeUpdateParams();
    Blockly.Blocks['procedures_defnoreturn'].domToMutation = makeProcedureDomToMutation();
    Blockly.Blocks['procedures_defreturn'].init = makeProcedureInit(
      true, true, true,
      Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE,
      Blockly.Msg.PROCEDURES_DEFRETURN_TITLE,
      Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT,
      Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP,
      Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL
    );
    Blockly.Blocks['procedures_defreturn'].customContextMenu = makeProcedureCustomMenu();
    Blockly.Blocks['procedures_defreturn'].updateParams_ = makeUpdateParams();
    Blockly.Blocks['procedures_defreturn'].domToMutation = makeProcedureDomToMutation();
  
    // -------------------------------------------------
    // [!] Adding a new type of procedure with no params
    // -------------------------------------------------
  
    Blockly.Blocks['procedures_defnoreturnnoparams'] = {
      init: makeProcedureInit(
        false, true, false,
        Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE,
        Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE,
        Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT,
        Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP,
        Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL
      ),
      setStatements_: Blockly.Blocks['procedures_defnoreturn'].setStatements_,
      updateParams_: makeUpdateParams(),
      mutationToDom: Blockly.Blocks['procedures_defnoreturn'].mutationToDom,
      domToMutation: makeProcedureDomToMutation(),
      decompose: Blockly.Blocks['procedures_defnoreturn'].decompose,
      compose: Blockly.Blocks['procedures_defnoreturn'].compose,
      getProcedureDef: Blockly.Blocks['procedures_defnoreturn'].getProcedureDef,
      getVars: Blockly.Blocks['procedures_defnoreturn'].getVars,
      renameVar: Blockly.Blocks['procedures_defnoreturn'].renameVar,
      customContextMenu: makeProcedureCustomMenu(false),
      callType_: 'procedures_callnoreturnnoparams'
    };
  
    Blockly.Blocks['procedures_callnoreturnnoparams'] = {
      init: Blockly.Blocks['procedures_callnoreturn'].init,
      getProcedureCall: Blockly.Blocks['procedures_callnoreturn'].getProcedureCall,
      renameProcedure: Blockly.Blocks['procedures_callnoreturn'].renameProcedure,
      setProcedureParameters_: Blockly.Blocks['procedures_callnoreturn'].setProcedureParameters_,
      updateShape_: Blockly.Blocks['procedures_callnoreturn'].updateShape_,
      mutationToDom: Blockly.Blocks['procedures_callnoreturn'].mutationToDom,
      domToMutation: Blockly.Blocks['procedures_callnoreturn'].domToMutation,
      renameVar: Blockly.Blocks['procedures_callnoreturn'].renameVar,
      onchange: Blockly.Blocks['procedures_callnoreturn'].onchange,
      customContextMenu: Blockly.Blocks['procedures_callnoreturn'].customContextMenu,
      defType_: 'procedures_defnoreturnnoparams'
    };
  
    // ---------------------------------------------------------------------
    // [!] Adding a new type of function only with return value (and params)
    // ---------------------------------------------------------------------
  
    Blockly.Blocks['procedures_defreturnsimplewithparams'] = {
      init: makeProcedureInit(
        true, false, true,
        Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE,
        Blockly.Msg.PROCEDURES_DEFRETURN_TITLE,
        Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT,
        Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP,
        Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL
      ),
      setStatements_: Blockly.Blocks['procedures_defreturn'].setStatements_,
      updateParams_: makeUpdateParams(),
      mutationToDom: Blockly.Blocks['procedures_defreturn'].mutationToDom,
      domToMutation: makeProcedureDomToMutation(),
      decompose: Blockly.Blocks['procedures_defreturn'].decompose,
      compose: Blockly.Blocks['procedures_defreturn'].compose,
      getProcedureDef: Blockly.Blocks['procedures_defreturn'].getProcedureDef,
      getVars: Blockly.Blocks['procedures_defreturn'].getVars,
      renameVar: Blockly.Blocks['procedures_defreturn'].renameVar,
      customContextMenu: makeProcedureCustomMenu(true),
      callType_: 'procedures_callreturnsimplewithparams'
    };
  
    Blockly.Blocks['procedures_callreturnsimplewithparams'] = {
      init: Blockly.Blocks['procedures_callreturn'].init,
      getProcedureCall: Blockly.Blocks['procedures_callreturn'].getProcedureCall,
      renameProcedure: Blockly.Blocks['procedures_callreturn'].renameProcedure,
      setProcedureParameters_: Blockly.Blocks['procedures_callreturn'].setProcedureParameters_,
      updateShape_: Blockly.Blocks['procedures_callreturn'].updateShape_,
      mutationToDom: Blockly.Blocks['procedures_callreturn'].mutationToDom,
      domToMutation: Blockly.Blocks['procedures_callreturn'].domToMutation,
      renameVar: Blockly.Blocks['procedures_callreturn'].renameVar,
      onchange: Blockly.Blocks['procedures_callreturn'].onchange,
      customContextMenu: Blockly.Blocks['procedures_callreturn'].customContextMenu,
      defType_: 'procedures_defreturnsimplewithparams'
    };
  
    // --------------------------------------------------------
    // [!] Adding a new type of function only with return value
    // --------------------------------------------------------
  
    Blockly.Blocks['procedures_defreturnsimple'] = {
      init: makeProcedureInit(
        true, false, false,
        Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE,
        Blockly.Msg.PROCEDURES_DEFRETURN_TITLE,
        Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT,
        Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP,
        Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL
      ),
      setStatements_: Blockly.Blocks['procedures_defreturn'].setStatements_,
      updateParams_: makeUpdateParams(),
      mutationToDom: Blockly.Blocks['procedures_defreturn'].mutationToDom,
      domToMutation: makeProcedureDomToMutation(),
      decompose: Blockly.Blocks['procedures_defreturn'].decompose,
      compose: Blockly.Blocks['procedures_defreturn'].compose,
      getProcedureDef: Blockly.Blocks['procedures_defreturn'].getProcedureDef,
      getVars: Blockly.Blocks['procedures_defreturn'].getVars,
      renameVar: Blockly.Blocks['procedures_defreturn'].renameVar,
      customContextMenu: makeProcedureCustomMenu(false),
      callType_: 'procedures_callreturnsimple'
    };
  
    Blockly.Blocks['procedures_callreturnsimple'] = {
      init: Blockly.Blocks['procedures_callreturn'].init,
      getProcedureCall: Blockly.Blocks['procedures_callreturn'].getProcedureCall,
      renameProcedure: Blockly.Blocks['procedures_callreturn'].renameProcedure,
      setProcedureParameters_: Blockly.Blocks['procedures_callreturn'].setProcedureParameters_,
      updateShape_: Blockly.Blocks['procedures_callreturn'].updateShape_,
      mutationToDom: Blockly.Blocks['procedures_callreturn'].mutationToDom,
      domToMutation: Blockly.Blocks['procedures_callreturn'].domToMutation,
      renameVar: Blockly.Blocks['procedures_callreturn'].renameVar,
      onchange: Blockly.Blocks['procedures_callreturn'].onchange,
      customContextMenu: Blockly.Blocks['procedures_callreturn'].customContextMenu,
      defType_: 'procedures_defreturnsimple'
    };
  
    // ---------------------------------------------------------------
    // [!] Calling `initialize` to support another types of procedures
    // ---------------------------------------------------------------
    initialize(
      makeProcedureInit,
      makeUpdateParams,
      makeProcedureDomToMutation,
      makeProcedureCustomMenu
    );
  
    // -------------------------------------------------------------------
    // [!] Adding two flyoutCategories: PROCEDURE_CALLS and FUNCTION_CALLS
    // -------------------------------------------------------------------
  
    Blockly.Procedures.procedureCallFlyoutCategory = function(workspace) {
      var xmlList = [];
  
      function populateProcedures(procedureList) { // [!]
        for (var i = 0; i < procedureList.length; i++) {
          var name = procedureList[i][0];
          var args = procedureList[i][1];
          var templateName = Blockly.Procedures.getDefinition(name, workspace).callType_; // [!]
          // <block type="procedures_callnoreturn" gap="16">
          //   <mutation name="do something">
          //     <arg name="x"></arg>
          //   </mutation>
          // </block>
          var block = goog.dom.createDom('block');
          block.setAttribute('type', templateName);
          block.setAttribute('gap', 16);
          var mutation = goog.dom.createDom('mutation');
          mutation.setAttribute('name', name);
          block.appendChild(mutation);
          for (var j = 0; j < args.length; j++) {
            var arg = goog.dom.createDom('arg');
            arg.setAttribute('name', args[j]);
            mutation.appendChild(arg);
          }
          xmlList.push(block);
        }
      }
  
      var tuple = Blockly.Procedures.allProcedures(workspace);
      populateProcedures(tuple[0]); // [!]
      return xmlList;
    };
  
    Blockly.Procedures.functionCallFlyoutCategory = function(workspace) {
      var xmlList = [];
  
      function populateProcedures(procedureList) { // [!]
        for (var i = 0; i < procedureList.length; i++) {
          var name = procedureList[i][0];
          var args = procedureList[i][1];
          var templateName = Blockly.Procedures.getDefinition(name, workspace).callType_; // [!]
          // <block type="procedures_callnoreturn" gap="16">
          //   <mutation name="do something">
          //     <arg name="x"></arg>
          //   </mutation>
          // </block>
          var block = goog.dom.createDom('block');
          block.setAttribute('type', templateName);
          block.setAttribute('gap', 16);
          var mutation = goog.dom.createDom('mutation');
          mutation.setAttribute('name', name);
          block.appendChild(mutation);
          for (var j = 0; j < args.length; j++) {
            var arg = goog.dom.createDom('arg');
            arg.setAttribute('name', args[j]);
            mutation.appendChild(arg);
          }
          xmlList.push(block);
        }
      }
  
      var tuple = Blockly.Procedures.allProcedures(workspace);
      populateProcedures(tuple[1]); // [!]
      return xmlList;
    };
  
    Blockly.Flyout.prototype.show = function(xmlList) {
      this.workspace_.setResizesEnabled(false);
      this.hide();
      this.clearOldBlocks_();
  
      // Handle dynamic categories, represented by a name instead of a list of XML.
      // Look up the correct category generation function and call that to get a
      // valid XML list.
      if (xmlList === "PROCEDURE_CALLS") { // [!]
        xmlList = Blockly.Procedures.procedureCallFlyoutCategory(this.workspace_.targetWorkspace);
      } else if (xmlList === "FUNCTION_CALLS") { // [!]
        xmlList = Blockly.Procedures.functionCallFlyoutCategory(this.workspace_.targetWorkspace);
      } else if (typeof xmlList == 'string') {
        var fnToApply = this.workspace_.targetWorkspace.getToolboxCategoryCallback(
            xmlList);
        goog.asserts.assert(goog.isFunction(fnToApply),
            'Couldn\'t find a callback function when opening a toolbox category.');
        xmlList = fnToApply(this.workspace_.targetWorkspace);
        goog.asserts.assert(goog.isArray(xmlList),
            'The result of a toolbox category callback must be an array.');
      }
  
      this.setVisible(true);
      // Create the blocks to be shown in this flyout.
      var contents = [];
      var gaps = [];
      this.permanentlyDisabled_.length = 0;
      for (var i = 0, xml; xml = xmlList[i]; i++) {
        if (xml.tagName) {
          var tagName = xml.tagName.toUpperCase();
          var default_gap = this.horizontalLayout_ ? this.GAP_X : this.GAP_Y;
          if (tagName == 'BLOCK') {
            var curBlock = Blockly.Xml.domToBlock(xml, this.workspace_);
            if (curBlock.disabled) {
              // Record blocks that were initially disabled.
              // Do not enable these blocks as a result of capacity filtering.
              this.permanentlyDisabled_.push(curBlock);
            }
            contents.push({type: 'block', block: curBlock});
            var gap = parseInt(xml.getAttribute('gap'), 10);
            gaps.push(isNaN(gap) ? default_gap : gap);
          } else if (xml.tagName.toUpperCase() == 'SEP') {
            // Change the gap between two blocks.
            // <sep gap="36"></sep>
            // The default gap is 24, can be set larger or smaller.
            // This overwrites the gap attribute on the previous block.
            // Note that a deprecated method is to add a gap to a block.
            // <block type="math_arithmetic" gap="8"></block>
            var newGap = parseInt(xml.getAttribute('gap'), 10);
            // Ignore gaps before the first block.
            if (!isNaN(newGap) && gaps.length > 0) {
              gaps[gaps.length - 1] = newGap;
            } else {
              gaps.push(default_gap);
            }
          } else if (tagName == 'BUTTON' || tagName == 'LABEL') {
            // Labels behave the same as buttons, but are styled differently.
            var isLabel = tagName == 'LABEL';
            var curButton = new Blockly.FlyoutButton(this.workspace_,
                this.targetWorkspace_, xml, isLabel);
            contents.push({type: 'button', button: curButton});
            gaps.push(default_gap);
          }
        }
      }
  
      this.layout_(contents, gaps);
  
      // IE 11 is an incompetent browser that fails to fire mouseout events.
      // When the mouse is over the background, deselect all blocks.
      var deselectAll = function() {
        var topBlocks = this.workspace_.getTopBlocks(false);
        for (var i = 0, block; block = topBlocks[i]; i++) {
          block.removeSelect();
        }
      };
  
      this.listeners_.push(Blockly.bindEventWithChecks_(this.svgBackground_,
          'mouseover', this, deselectAll));
  
      if (this.horizontalLayout_) {
        this.height_ = 0;
      } else {
        this.width_ = 0;
      }
      this.workspace_.setResizesEnabled(true);
      this.reflow();
  
      this.filterForCapacity_();
  
      // Correctly position the flyout's scrollbar when it opens.
      this.position();
  
      this.reflowWrapper_ = this.reflow.bind(this);
      this.workspace_.addChangeListener(this.reflowWrapper_);
    };
  
  }
}

window.initProcedsBlockly = function(customStatementType, initialize = () => {}) {
  console.warn('initProcedsBlockly() is deprecated. You should now use ProcedsBlockly.init()')
  ProcedsBlockly.setDefaultLocale()
  ProcedsBlockly.init(customStatementType, initialize = () => {})
}