/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets */

define(function () {
    "use strict";
    /*
    Simple extension that adds an "Edit > Create Starter Template" menu item
    to insert a block of Template code at the cursor position
    */
    var CommandManager = brackets.getModule("command/CommandManager"),
        EditorManager = brackets.getModule("editor/EditorManager"),
        Menus = brackets.getModule("command/Menus");


    function insertstarterTemplate() {
        /* Insert the template code */
        var starterTemplate = '<!doctype html>\n\n<html>\n\t<head>\n\t\t<title>Page Title</title>\n\t\t<meta charset="UTF-8">\n\t\t<meta name="viewport" content="initial-scale=1.0">\n\t</head>\n\n\t<body>\n\n\t</body>\n</html>';

        var editor = EditorManager.getFocusedEditor();
        if (editor) {
            // Insert the lines of code at the current cursor position
            var insertionPos = editor.getCursorPos();
            editor.document.replaceRange(starterTemplate, insertionPos);
        }
    }


    // Register extension in the File menu
    var EXTENSION_ID = "starter.templatesetup";
    CommandManager.register("Create Starter Template", EXTENSION_ID, insertstarterTemplate);

    // Assign a keyboard shortcut
    var theMenu = Menus.getMenu(Menus.AppMenuBar.EDIT_MENU);
    theMenu.addMenuItem(EXTENSION_ID, "Ctrl-Shift-X");
});
