import './css/lesson1.css';

const canvas = document.querySelector('#canvas');
const gl = canvas.getContext('webgl');

if (!gl) {
    console.log('WEBGL unavailable');
} else {
    console.log('WebGL is good to go');
}

// Shader Compilation

const vertexShaderSource = `document.querySelector('#vertex-shader').textContent`;
const fragmentShaderSource = `document.querySelector('#fragment-shader').textContent`;

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderSource);
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentShaderSource);
gl.compileShader(fragmentShader);

// Create a carry-out container that will pass the shader functions to the GPU.
const program = gl.createProgram();

// Attach the shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

// Link the shaders
gl.linkProgram(program);