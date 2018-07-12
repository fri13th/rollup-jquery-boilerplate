import { view } from './template';
import { cube } from './utils';
import '../css/';

let array = [1, 2, 3];

console.log(cube(3));
$(() => console.log(view('World', array)));
