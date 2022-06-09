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
const Animation = require('Animation');

// Use export keyword to make a symbol available in scripting debug console

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

async function SetupSmokeParticleFading () {
    const alphaSampler = Animation.samplers.HSVA([
            Animation.samplers.constant(1),
            Animation.samplers.constant(1),
            Animation.samplers.constant(1),
            Animation.samplers.easeInCirc(1.0, 0.0)
        ]);

    var smokeParticle = await Scene.root.findFirst('smoke-particle');
    smokeParticle.sizeModifier = Animation.samplers.easeInOutQuad(0.0, 0.2);
    smokeParticle.hsvaColorModulationModifier = alphaSampler;
}

SetupSmokeParticleFading();
