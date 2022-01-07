# Up and Running with WebGL #

WebGL is a low-level 2D and 3D graphics API implementing the Kronos Group specification for OpenGL ES in the Web browser. (Baruah, Rakesh. AR and VR Using the WebXR API (p. 39). Apress. Kindle Edition.)

## Exercise 1: Your First WebGL Application ##

First we need to dedicate an area on the webpage for webgl content. Use a `<canvas id="canvas"></canvas>`

```js
const canvas = document.querySelector('#canvas');
const gl = canvas.getContext('webgl');
```

Don't forget to check if the user's browser supports webgl

```js
if (!gl) {
    console.log('WEBGL unavailable');
} else {
    console.log('WebGL is good to go');
}
```

See lesson1.js for the rest of the implementation and run `npm start` to see the result.

## Shaders ##

Web GL basically does two things: 

1. Collects data of how a canvas context should appear to a user.
2. Draws that data to the screen. 

These steps are understood as State and Behavior, respectively.

### State ###

State is the position of points on a screen, their relationship to each other, and their color.

### Behavior ###

Behavior is the series of operations done by the GPU to render the State to the screen.

### Shaders ###

Shaders **in WebGL** are the function we instruct the program to perform for every pixel in the canvas. (is this different outside of WebGL?). WebGL includes two shaders (can I add my own?):
 
 1. Vertex Shader

    Calculates the the position of points, or *verticies* in a scene.

 2. Fragment Shader

    Calculates the values of the color each pixel should convey.

### Source ###

We must provide the data on which each shader will perform its operations. Give the shader what it needs to shade. 
GSGL is a C-style language for shading in OpenGL.

```html
<script id="vetex-source" type="not-javascript">
    attribute vec4 vertex_points;

    void main() {
        gl_Position = vertex_points;
    }
</script>
```

Adding the preceding to the body of the “vertex-source” script defines the vertex shader for the WebGL rendering context in the browser. The language of the vertex-source is GLSL, a C-style shading language for OpenGL. The content of the vertex-source in this example defines a vec4 datatype called “vertex_points” and passes it to the vertex shader’s primary property, gl_Position, a variable built into WebGL that holds the coordinates for each vertex rendered to the screen.

(Baruah, Rakesh. AR and VR Using the WebXR API (p. 52). Apress. Kindle Edition.)

```html
<script id="fragment-source" type="not-javascript">
    precision mediump float;

    void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
</script>
```

Similarly, the data source for the fragment shader, written in GLSL, defines a vec4 consisting of float, or decimal, values and saved to the WebGL fragment-shader property gl_FragColor . As rendering 3D graphics is a computationally heavy process, we define the size of the memory required by our program when possible. The description precision mediump float in the fragment shader source informs the GPU of how much memory the shader operation demands.

Baruah, Rakesh. AR and VR Using the WebXR API (p. 52). Apress. Kindle Edition. 

### Compiling ###

The WebGL program is the container that will carry the application's data through the pipeline. We need to retrieve it from the dom. After compilation a program is free to move beyond its source.

### Linking ###

The vertex and fragment shaders work together in a WebGL app, so we need to link them together in a single object. See lesson1.js.

The process of compiling and linking programs is a common creation pattern for programs written in C and C++. For example, compiling and linking C++ programs for Windows applications result in an .exe file, which most developers recognize as Windows executable files. Once compiled into their own executables inside the program, the shaders move to the next phase of the graphics rendering pipeline.

Baruah, Rakesh. AR and VR Using the WebXR API (p. 54). Apress. Kindle Edition. 