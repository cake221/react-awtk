import * as React from 'react';
import { AwtkRender, t_window_base, TPaintEvent, TCanvas, TTimer } from "../src"
import { TRetPatch, TEventTypePatch } from "../src/native/awtkPatch"


function Point3D(x,y,z) {
  this.x = x;
  this.y = y;
  this.z = z;

  this.rotateX = function(angle) {
    let rad, cosa, sina, y, z
    rad = angle * Math.PI / 180
    cosa = Math.cos(rad)
    sina = Math.sin(rad)
    y = this.y * cosa - this.z * sina
    z = this.y * sina + this.z * cosa
    return new Point3D(this.x, y, z)
  }

  this.rotateY = function(angle) {
    let rad, cosa, sina, x, z
    rad = angle * Math.PI / 180
    cosa = Math.cos(rad)
    sina = Math.sin(rad)
    z = this.z * cosa - this.x * sina
    x = this.z * sina + this.x * cosa
    return new Point3D(x,this.y, z)
  }

  this.rotateZ = function(angle) {
    let rad, cosa, sina, x, y
    rad = angle * Math.PI / 180
    cosa = Math.cos(rad)
    sina = Math.sin(rad)
    x = this.x * cosa - this.y * sina
    y = this.x * sina + this.y * cosa
    return new Point3D(x, y, this.z)
  }

  this.project = function(viewWidth, viewHeight, fov, viewDistance) {
    let factor, x, y
    factor = fov / (viewDistance + this.z)
    x = this.x * factor + viewWidth / 2
    y = this.y * factor + viewHeight / 2
    return new Point3D(x, y, this.z)
  }
}

const vertices = [
  new Point3D(-1,1,-1),
  new Point3D(1,1,-1),
  new Point3D(1,-1,-1),
  new Point3D(-1,-1,-1),
  new Point3D(-1,1,1),
  new Point3D(1,1,1),
  new Point3D(1,-1,1),
  new Point3D(-1,-1,1)
];

// Define the vertices that compose each of the 6 faces. These numbers are
// indices to the vertex list defined above.
const faces  = [[0,1,2,3],[1,5,6,2],[5,4,7,6],[4,0,3,7],[0,4,5,1],[3,2,6,7]];

// Define the colors for each face.
const colors = [[255,0,0],[0,255,0],[0,0,255],[255,255,0],[0,255,255],[255,0,255]];

let angle = 0;

/* Constructs a CSS RGB value from an array of 3 elements. */
function arrayToRGB(arr) {
  if( arr.length === 3 ) {
    return "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
  }
  return "rgb(0,0,0)";
}

const t = [];
const avg_z = [];

function cmp_z(a, b) {
  return b.z - a.z;
}

let count = 0;

class App extends React.Component {
  private winRef: React.RefObject<t_window_base> = React.createRef();
  constructor(props){
    super(props);
  }

  canvasOnPaint(e) {
    const evt = TPaintEvent.cast(e);
    const c = TCanvas.cast(evt.c);
    const ctx = c.getVgcanvas();
    console.log("TEventTypePatch.PAINT:" + count++);

    ctx.setFillColor("#000000");
    ctx.rect(0,0,400,250);
    ctx.fill();
    t.length = 0;
    for( let i = 0; i < vertices.length; i++ ) {
      const v = vertices[i];
      const r = v.rotateX(angle).rotateY(angle);
      const p = r.project(400,250,200,4);
      t.push(p)
    }

    avg_z.length = 0;
    for( let i = 0; i < faces.length; i++ ) {
      const f = faces[i];
      avg_z[i] = {"index":i, "z":(t[f[0]].z + t[f[1]].z + t[f[2]].z + t[f[3]].z) / 4.0};
    }

    avg_z.sort(cmp_z);

    for( let i = 0; i < faces.length; i++ ) {
      const f = faces[avg_z[i].index]

      ctx.setFillColor(arrayToRGB(colors[avg_z[i].index]));
      ctx.beginPath();
      ctx.moveTo(t[f[0]].x,t[f[0]].y);
      ctx.lineTo(t[f[1]].x,t[f[1]].y);
      ctx.lineTo(t[f[2]].x,t[f[2]].y);
      ctx.lineTo(t[f[3]].x,t[f[3]].y);
      ctx.closePath();
      ctx.fill();
    }

    angle += 2;

    return TRetPatch.OK
  }

  componentDidMount () {
    console.log('APP DID MOUNT!');
    const canvas = this.winRef.current.child("paint_vgcanvas");
    TTimer.add(function(info) {
      canvas.invalidateForce(null);
      return TRetPatch.REPEAT;
    }, null, 20);

    // @ts-ignore
    canvas.on(TEventTypePatch.PAINT, this.canvasOnPaint, null);
  }

  render() {
    return (
      <t_window
        sourceName = {"vgcanvas"}
        ref = { this.winRef }
      />
    )
  }
}

AwtkRender(<App />, () => {
  console.log(' 渲染成功 AWTK ');
});


