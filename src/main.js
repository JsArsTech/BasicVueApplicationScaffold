import Vue from 'vue';
import 'babel-polyfill';
import Test from './test.vue';
import Movies from './movies.vue';

new Vue({
	el: '#app',
	...Movies,
});