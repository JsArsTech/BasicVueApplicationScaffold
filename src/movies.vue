<template>
	<ul class="movies">
		<Movie v-for="movie of movies"
			:key="movie.id"
			:movie="movie" />
	</ul>
</template>

<script>
	import Movie from './movie.vue';

	export default {
		data() {
			return {
				movies: [
					{ title: 'Start Wars' },
					{ title: 'Blade Runner'},
					{ title: 'Start Wars' },
					{ title: 'Blade Runner'},				
					{ title: 'Start Wars' },
					{ title: 'Blade Runner'},
					{ title: 'Start Wars' },
					{ title: 'Blade Runner'},
				]
			}
		},
		components: {
			Movie,
		}
	}
</script>

