/*
FUNCIONES PARA LA CREACIÓN DE LOS CUBOS Y 
LA ASIGNACIÓN DE LAS TRANSFORMADAS A LAS TECLAS. 
*/
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
//Escena
var scene = new THREE.Scene();
scene.background = new THREE.Color(0x0000);

var size = 180;
var arrowSize = 8;
var divisions = 100;
var origin = new THREE.Vector3( 0, 0, 0 );
var x = new THREE.Vector3( 1, 0, 0 );
var y = new THREE.Vector3( 0, 1, 0 );
var z = new THREE.Vector3( 0, 0, 1 );
var color2 = new THREE.Color( 0x333333 );  
var colorR = new THREE.Color( 0xAA0000 );
var colorG = new THREE.Color( 0x00AA00 );
var colorB = new THREE.Color( 0x0000AA );

//Crear la Grilla
var gridHelperXZ = new THREE.GridHelper( size, divisions, color2, color2);


//Ejes
var arrowX = new THREE.ArrowHelper( x, origin, arrowSize, colorR );
var arrowY = new THREE.ArrowHelper( y, origin, arrowSize, colorG );
var arrowZ = new THREE.ArrowHelper( z, origin, arrowSize, colorB );
scene.add(gridHelperXZ);
scene.add(arrowX);	
scene.add(arrowY);	
scene.add(arrowZ);

//GRILLA
const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

//CAMARA
var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 10;
camera.position.x = 5;
camera.position.y = 6;

camera.rotation.set(0, -0.5, 0);

var lado = 5;

//renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//CONTROL MOUSE
var controls = new THREE.OrbitControls(camera, renderer.domElement);


//---CUBOS---
//#1
var geometry1 = new THREE.BoxGeometry(lado,lado,lado);
var material = new THREE.MeshBasicMaterial({color: 0xFF4000});
var cube = new THREE.Mesh(geometry1, material);

//#2
var geometry2 = new THREE.BoxGeometry(lado,lado,lado);
var material = new THREE.MeshBasicMaterial({color: 0x0000ff});
var cube2 = new THREE.Mesh(geometry2, material);

//#3
var geometry3 = new THREE.BoxGeometry(lado,lado,lado);
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var cube3 = new THREE.Mesh(geometry3, material);


document.addEventListener('keydown', function(event) {
    switch(event.keyCode) {

        case 49: // CUBO #1
        scene.add(cube);
        console.log(cube.x)
        break;
        case 50: // CUBO #2
        scene.add(cube2);
        console.log(cube2.x)
        break;
        case 51: // CUBO #3
        scene.add(cube3);
        console.log(cube3.geometry.x)
        break;
        
        case 90: // ESCALADO CUBO #2 (TECLA Z)
        cube2.scale.x/=2
        cube2.scale.y/=2
        cube2.scale.z/=2
        console.log(cube2.scale.x)
        break;

        case 88: // TRASLACION CUBO #2 (TECLA X)
        cube2.position.y+=lado*3/4
        break;

        case 67: // ESCALADO CUBO #2 (TECLA C)
        cube3.scale.x/=4
        cube3.scale.y/=4
        cube3.scale.z/=4
        //console.log(lado/4)
        break;
        
        case 86: // TRASLACION CUBO #2 (TECLA V)
        cube3.position.y+=lado*9/8
        break;

        case 70: // FINALIZAR O REINICIAR ESCENA (TECLA F)
        //VUELVO LOS CUBOS A SU FORMA ORIGINAS
        cube2.scale.x*=2
        cube2.scale.y*=2
        cube2.scale.z*=2
        cube2.position.y-=lado*3/4
        cube3.scale.x*=4
        cube3.scale.y*=4
        cube3.scale.z*=4
        cube3.position.y-=lado*9/8
        //REMUEVO LOS CUBOS DE LA ESCENA
        scene.remove(cube);
        scene.remove(cube2);
        scene.remove(cube3);
        break;
    }
});
// FUNCION RENDERER 
function render() {
requestAnimationFrame(render);
renderer.render(scene, camera);
}


render();
