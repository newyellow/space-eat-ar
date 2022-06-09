/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const Patches = require('Patches');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

// To access scene objects
// const directionalLight = Scene.root.find('directionalLight0');

// To access class properties
// const directionalLightIntensity = directionalLight.intensity;

// To log messages to the console
// Diagnostics.log('Console message logged from the script.');

async function SetupCopyPizzaBoxValue () {
    var animPizzaBox = await Scene.root.findFirst('item_placer');
    var outsidePizzaBox = await Scene.root.findFirst('pizzaBoxPlacer');

    outsidePizzaBox.worldTransform.position = animPizzaBox.worldTransform.position;
    outsidePizzaBox.transform.rotationY = animPizzaBox.transform.rotationY;
    outsidePizzaBox.transform.rotationX = animPizzaBox.transform.rotationX;
    outsidePizzaBox.transform.rotationZ = animPizzaBox.transform.rotationZ;
    outsidePizzaBox.transform.scale = animPizzaBox.transform.scale;
}

async function EnableControl () {
    Patches.inputs.setBoolean('canControl', true);
}

async function DisableControl () {
    Patches.inputs.setBoolean('canControl', false);
}




(async function() {
    const controlTriggerSignal = await Patches.outputs.getPulse('stopControlTrigger');

    controlTriggerSignal.subscribe(function(data){
        DisableControl();
    });

    await EnableControl();
    await SetupCopyPizzaBoxValue();
})();
