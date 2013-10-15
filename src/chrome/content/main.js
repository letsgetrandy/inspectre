/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Components.utils.import("resource://gre/modules/Services.jsm");
Components.utils.import("resource://specter/specter.jsm");
Components.utils.import("resource://specter/testrunner.jsm");


// we need to output to the shell console
Services.prefs.setBoolPref('browser.dom.window.dump.enabled', true);

//Components.utils.import('resource://slimerjs/slLauncher.jsm');
//Components.utils.import('resource://slimerjs/slConfiguration.jsm');
//Components.utils.import('resource://slimerjs/slUtils.jsm');

function startup() {

    var runtimeIframe = document.getElementById('runtime');
    try {

        var argv = specter.config.args,
            argc = argv.length;

        for (let i=0; i<argc; i++) {
            try {
                TestRunner.handleArg(argv[i]);
            } catch(ex) {
                specter.log(ex);
            }
        }

        TestRunner.run();
        //slLauncher.launchMainScript(runtimeIframe.contentWindow, slConfiguration.scriptFile);
        //TestRunner.handleArg(runtimeIframe.contentWindow, "hello.js");
        //TestRunner.handleArg("hello.js");
        //specter.exit();
    }
    catch(ex) {
        specter.log(ex);

    //    dumpex(e, 'Error during the script execution\n');
    //    dumpStack(e.stack);
        //Services.startup.quit(Components.interfaces.nsIAppStartup.eForceQuit);
    }
    //specter.exit();
}

function doFileRun() {
    //
}

function doFileExit() {
    //Services.startup.quit(Components.interfaces.nsIAppStartup.eForceQuit);
    specter.exit();
}
