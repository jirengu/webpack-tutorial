//add

//var $ = require('jquery')
import $ from 'jquery'
import './index.css'
import Logo from './imgs/logo.png'

let img = new Image()
img.src = Logo
$('body').append(img)

$('body').append('<h1>hello world</h1>')