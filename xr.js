<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Babylon.js WebXR Prototype</title>
    <script src="https://cdn.babylonjs.com/babylon.js"></script>
</head>
<body>
    <canvas id="renderCanvas" touch-action="none" style="width: 100vw; height: 100vh;"></canvas>
    <script>
        // Babylon.js WebXR Functional Prototype
        // This script sets up a basic VR scene using Babylon.js

        // Create the Babylon.js engine
        const canvas = document.getElementById("renderCanvas");
        const engine = new BABYLON.Engine(canvas, true);

        // Create the scene function
        const createScene = function () {
            const scene = new BABYLON.Scene(engine);

            // Add a camera with WebXR support
            scene.createDefaultXRExperienceAsync({
                uiOptions: {
                    sessionMode: "immersive-vr"
                }
            });

            // Add a light source
            const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
            light.intensity = 0.7;

            // Add a ground mesh
            const ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 10, height: 10}, scene);

            // Add a basic cube
            const box = BABYLON.MeshBuilder.CreateBox("box", {size: 1}, scene);
            box.position.y = 1;

            // Set background color
            scene.clearColor = new BABYLON.Color4(0.2, 0.2, 0.3, 1);

            return scene;
        };

        // Create and render the scene
        const scene = createScene();
        engine.runRenderLoop(function () {
            scene.render();
        });

        // Resize the canvas on window resize
        window.addEventListener("resize", function () {
            engine.resize();
        });
    </script>
</body>
</html>