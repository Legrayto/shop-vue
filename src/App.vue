<template>
  <div id="nav">
		<MainWrapper />
  </div>
</template>

<script>

import MainWrapper from './components/Main-wrapper'

export default {
	el: 'nav',
	components: {
		MainWrapper
	}
}

</script>

<style>
*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
}
a {
    text-decoration: none;
}
ul,
ol,
li {
    list-style: none;
}
img {
    vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: inherit;
    font-style: inherit;
}
html,
body {
    height: 100%;
    font-size: 14px;
    line-height: 150%;
    background:  #161a1d;;
    color: #d3d3d3;
    font-weight: 400;
    font-family: "Lato", sans-serif;
}

._container {
	max-width: 1048px;
	margin: 0 auto;
	padding: 20px;
}
._btn-2 {
	min-height: 35px ;
	padding: 5px 15px;
	background: none;
	border: 2px solid #d3d3d3;
	border-radius: 5px;
	color: #d3d3d3;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}
._btn-2:hover {
	background: #d3d3d3;
	color: #161a1d;
}
._btn-1 {
	min-height: 40px;
	padding: 5px 20px;
	background: #f48c06;
	border-radius: 5px;
	color: #f5f3f4;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}
._btn-1:hover {
	background: #ba6f0f
}

</style>
